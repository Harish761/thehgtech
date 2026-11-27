import json
import os
import re
import shutil
import subprocess
import unittest
from pathlib import Path


JEKYLL_DEFAULT_EXCLUDES = [
    "Gemfile",
    "Gemfile.lock",
    "node_modules",
    "vendor/bundle/",
    "vendor/cache/",
    "vendor/gems/",
    "vendor/ruby/",
]

CRITICAL_PUBLIC_FILES = [
    ".well-known/security.txt",
    "CNAME",
    "robots.txt",
    "sitemap.xml",
    "rss.xml",
    "index.html",
    "articles.html",
    "article-list.html",
    "articles-list.html",
    "articles/page/1/index.html",
    "articles/page/11/index.html",
    "cve-tracker.html",
    "threat-intel.html",
    "ransomware-tracker.html",
    "hacker-chatter.html",
    "cve-data.json",
    "ransomware-data.json",
    "data/hacker-chatter.json",
    "ioc-data/articles.json",
    "ioc-data/urlhaus.json",
    "tools/grc-assessment/index.html",
    "tools/grc-assessment/iso27001-grc-guide.html",
    "tools/grc-assessment/controls/index.html",
    "guides/index.html",
    "comparisons/index.html",
    "workflows/index.html",
    "fonts/inter-variable.woff2",
]

MUST_BE_EXCLUDED_PATHS = [
    "_config.yml",
    "_internal/private-plan.md",
    "data/ioc-source/urlhaus.json",
    "data/ioc-source/malware-bazaar.json",
    "SEO-IMPROVEMENT-PLAN.md",
    "README.md",
    "scripts/generate_pagination.py",
    "tests/test_jekyll_exclusions.py",
    "docs/ARTICLE_CREATION_GUIDE.md",
    "templates/guide-template.html",
    "homepage-mockup.html",
    "homepage-experiment.html",
    "homepage-test.html",
    "ti-snapshot.html",
    "ti-hero-animation.html",
    "test_breach_output.html",
    "anthropic-linkedin-viral-post.txt",
    "assets/brand/preview.html",
    "linkedin-posts/microsoft-teams-phishing-linkedin.md",
    "images/linkedin/apple-dyld-zero-day-linkedin.png",
    "images/articles/fortigate-linkedin-card.png",
    "tools/grc-assessment/linkedin-carousel/grc_overview.png",
    "tools/grc-assessment/generate_pseo_pages.py",
    "articles/microsoft-patch-tuesday-february-2026-linkedin.md",
    "comparisons/COMPARISON_GUIDE.md",
    "images/README-og-image.md",
    "nested/check_debug.js",
    "nested/test-scratch.js",
    ".htaccess",
    ".github/workflows/build-articles.yml",
    ".agent/workflows/create-article.md",
]


def _parse_config_yml(config_path: Path):
    if shutil.which("ruby"):
        ruby_cmd = (
            "require 'yaml'; require 'json'; "
            "puts JSON.generate(YAML.safe_load(File.read(ARGV[0])))"
        )
        out = subprocess.check_output(
            ["ruby", "-e", ruby_cmd, str(config_path)],
            text=True,
        )
        return json.loads(out)

    try:
        import yaml  # type: ignore

        return yaml.safe_load(config_path.read_text(encoding="utf-8"))
    except ImportError as exc:
        raise RuntimeError("Either ruby or PyYAML is required to parse _config.yml") from exc


def _simulate_jekyll_filter(paths, include_cfg, exclude_cfg):
    """Simulate Jekyll 3.9 Reader#read_directories + EntryFilter behavior."""
    if shutil.which("ruby"):
        ruby_script = r"""
require 'json'
payload = JSON.parse(STDIN.read)
paths = payload['paths']
include_cfg = payload['include']
exclude_cfg = payload['exclude']

def glob_match_jekyll(list, rel_path)
  list.any? do |e|
    pat = e.sub(%r{\A/}, "").chomp("/")
    File.fnmatch?(pat, rel_path) || rel_path == pat || rel_path.start_with?("#{pat}/")
  end
end

def jekyll_publishes?(path, include_cfg, exclude_cfg)
  parts = path.split("/")
  cur = ""
  parts.each do |seg|
    cur = cur.empty? ? seg : "#{cur}/#{seg}"
    is_special = [".", "_", "#"].include?(seg[0]) || seg.end_with?("~")
    if is_special && !glob_match_jekyll(include_cfg, cur)
      return false
    end
    if glob_match_jekyll(exclude_cfg, cur)
      return false
    end
  end
  true
end

result = {}
paths.each { |p| result[p] = jekyll_publishes?(p, include_cfg, exclude_cfg) }
puts JSON.generate(result)
"""
        proc = subprocess.run(
            ["ruby", "-e", ruby_script],
            input=json.dumps({"paths": paths, "include": include_cfg, "exclude": exclude_cfg}),
            text=True,
            capture_output=True,
            check=True,
        )
        return json.loads(proc.stdout)

    import fnmatch

    def glob_match(patterns, rel_path):
        for raw in patterns:
            pat = raw.lstrip("/").rstrip("/")
            if fnmatch.fnmatchcase(rel_path, pat) or rel_path == pat or rel_path.startswith(pat + "/"):
                return True
        return False

    result = {}
    for p in paths:
        cur = ""
        published = True
        for seg in p.split("/"):
            cur = seg if not cur else f"{cur}/{seg}"
            is_special = seg.startswith((".", "_", "#")) or seg.endswith("~")
            if is_special and not glob_match(include_cfg, cur):
                published = False
                break
            if glob_match(exclude_cfg, cur):
                published = False
                break
        result[p] = published
    return result


class TestJekyllExclusions(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.repo_root = Path(__file__).resolve().parent.parent
        cls.config_path = cls.repo_root / "_config.yml"
        cls.config = _parse_config_yml(cls.config_path)
        cls.tracked_files = subprocess.check_output(
            ["git", "-c", "core.fsmonitor=false", "ls-files"],
            cwd=cls.repo_root,
            text=True,
        ).splitlines()

    def test_01_nojekyll_absent_and_config_valid(self):
        self.assertFalse(
            (self.repo_root / ".nojekyll").exists(),
            ".nojekyll must NOT exist — Jekyll processing is required to exclude internal files.",
        )
        self.assertIsInstance(self.config, dict)
        self.assertIn(".well-known", self.config.get("include", []))
        excludes = self.config.get("exclude", [])
        for default_entry in JEKYLL_DEFAULT_EXCLUDES:
            self.assertIn(
                default_entry,
                excludes,
                f"Jekyll 3.9 default exclusion missing from _config.yml: {default_entry}",
            )
        self.assertIn("data/ioc-source", excludes)

    def test_02_critical_public_files_published(self):
        include_cfg = self.config.get("include", [])
        exclude_cfg = self.config.get("exclude", [])
        res = _simulate_jekyll_filter(CRITICAL_PUBLIC_FILES, include_cfg, exclude_cfg)
        for path in CRITICAL_PUBLIC_FILES:
            self.assertTrue(
                (self.repo_root / path).exists(),
                f"Expected public file missing on disk: {path}",
            )
            self.assertTrue(
                res[path],
                f"Critical public file would be EXCLUDED by _config.yml: {path}",
            )

    def test_03_internal_and_future_paths_excluded(self):
        include_cfg = self.config.get("include", [])
        exclude_cfg = self.config.get("exclude", [])
        res = _simulate_jekyll_filter(MUST_BE_EXCLUDED_PATHS, include_cfg, exclude_cfg)
        for path in MUST_BE_EXCLUDED_PATHS:
            self.assertFalse(
                res[path],
                f"Internal path would LEAK into GitHub Pages output: {path}",
            )

    def test_04_zero_internal_leaks_across_all_tracked_files(self):
        include_cfg = self.config.get("include", [])
        exclude_cfg = self.config.get("exclude", [])
        all_paths = sorted(set(self.tracked_files + ["_config.yml", "tests/test_jekyll_exclusions.py"]))
        res = _simulate_jekyll_filter(all_paths, include_cfg, exclude_cfg)
        published = [p for p, ok in res.items() if ok]

        forbidden_exts = (".md", ".py", ".sh", ".bak", ".old", ".log")
        leaked_exts = [p for p in published if p.lower().endswith(forbidden_exts)]
        self.assertEqual(leaked_exts, [], f"Forbidden file extensions published: {leaked_exts}")

        forbidden_prefixes = (
            "_internal/",
            "data/ioc-source/",
            "scripts/",
            "tests/",
            "docs/",
            "templates/",
            "components/",
            "mobile_backup/",
            "linkedin-carousels/",
            "linkedin-posts/",
            "social/",
            "images/linkedin/",
            "tools/grc-assessment/linkedin-carousel/",
        )
        leaked_dirs = [p for p in published if p.startswith(forbidden_prefixes)]
        self.assertEqual(leaked_dirs, [], f"Forbidden directories published: {leaked_dirs}")

        # Verify only robots.txt and .well-known/security.txt are published as .txt files
        published_txt = sorted(p for p in published if p.lower().endswith(".txt"))
        self.assertEqual(published_txt, [".well-known/security.txt", "robots.txt"])

    def test_05_index_html_has_zero_homepage_mockup_links(self):
        index_html = (self.repo_root / "index.html").read_text(encoding="utf-8")
        self.assertNotIn(
            "homepage-mockup.html",
            index_html,
            "index.html still references excluded prototype homepage-mockup.html",
        )
        # Ensure all 3 logo anchors still exist pointing to /
        logo_links = re.findall(r'<a\s+href="/"[^>]*>.*?The</span><span class="logo-text-red">HG</span>', index_html, re.S)
        self.assertEqual(len(logo_links), 3, f"Expected 3 '/' brand logo links in index.html, found {len(logo_links)}")


if __name__ == "__main__":
    unittest.main()
