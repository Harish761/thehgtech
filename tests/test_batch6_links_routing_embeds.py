import hashlib
import html
import json
import posixpath
import re
import shutil
import subprocess
import unittest
from pathlib import Path
from urllib.parse import unquote, urlsplit


REPO_ROOT = Path(__file__).resolve().parent.parent

BATCH6_NEW_PUBLIC_FILES = {
    "editorial-standards.html",
    "embed/grc-badge.html",
    "js/article-library-router.js",
    "css/article-library.css",
}


def _get_published_files():
    """Return the set of repo-relative paths published by GitHub Pages (_config.yml)."""
    tracked = set(
        subprocess.check_output(
            ["git", "-c", "core.fsmonitor=false", "ls-files"],
            cwd=REPO_ROOT,
            text=True,
        ).splitlines()
    )
    existing_new = {p for p in BATCH6_NEW_PUBLIC_FILES if (REPO_ROOT / p).exists()}
    all_paths = sorted(tracked | existing_new)

    if shutil.which("ruby"):
        cfg_json = subprocess.check_output(
            [
                "ruby",
                "-ryaml",
                "-rjson",
                "-e",
                "puts JSON.generate(YAML.safe_load(File.read(ARGV[0])))",
                str(REPO_ROOT / "_config.yml"),
            ],
            text=True,
        )
        cfg = json.loads(cfg_json)
        ruby_sim = r"""
require 'json'
payload = JSON.parse(STDIN.read)
inc = payload['include'] || []
exc = payload['exclude'] || []
def m?(list, r)
  list.any? do |e|
    pat = e.sub(%r{\A/}, '').chomp('/')
    File.fnmatch?(pat, r) || r == pat || r.start_with?("#{pat}/")
  end
end
pub = payload['paths'].select do |r|
  parts = r.split('/')
  dot = parts.any? { |s| s.start_with?('.') || s.start_with?('_') }
  if dot
    next false unless inc.any? { |i| r == i || r.start_with?("#{i}/") }
  end
  !m?(exc, r)
end
puts JSON.generate(pub)
"""
        out = subprocess.check_output(
            ["ruby", "-e", ruby_sim],
            input=json.dumps(
                {
                    "paths": all_paths,
                    "include": cfg.get("include", []),
                    "exclude": cfg.get("exclude", []),
                }
            ),
            text=True,
        )
        return set(json.loads(out))

    raise RuntimeError("ruby is required to simulate Jekyll _config.yml publishing")


class TestBatch6LinksRoutingEmbeds(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.published = _get_published_files()
        cls.published_html = sorted(p for p in cls.published if p.endswith(".html"))

    def _resolve_internal_href(self, source_rel: str, href_raw: str):
        href = html.unescape(href_raw).strip()
        if not href or href.startswith(("#", "mailto:", "tel:", "javascript:", "data:")):
            return None
        if re.match(r"^https?://", href, re.IGNORECASE):
            sp = urlsplit(href)
            if sp.netloc.lower() not in ("thehgtech.com", "www.thehgtech.com"):
                return None
            path = unquote(sp.path)
        else:
            sp = urlsplit(href)
            path = unquote(sp.path)
            if not path:
                return None

        parent = posixpath.dirname(source_rel)
        if path.startswith("/"):
            resolved = posixpath.normpath(path.lstrip("/"))
        else:
            resolved = posixpath.normpath(posixpath.join(parent, path))
        if resolved in ("", "."):
            resolved = "index.html"

        candidates = [resolved]
        if path.endswith("/") or not posixpath.splitext(resolved)[1]:
            candidates.append(posixpath.join(resolved, "index.html"))
        return candidates, resolved

    def test_01_zero_broken_internal_links_across_published_html(self):
        href_re = re.compile(r'<a\b[^>]*?\bhref=(["\'])(.*?)\1', re.IGNORECASE | re.DOTALL)
        script_re = re.compile(r"<script\b[^>]*>.*?</script>", re.IGNORECASE | re.DOTALL)

        broken = []
        cf_email_obfuscation = []
        for rel in self.published_html:
            raw = (REPO_ROOT / rel).read_text(encoding="utf-8", errors="ignore")
            cleaned = script_re.sub("", raw)
            if "/cdn-cgi/l/email-protection" in cleaned:
                cf_email_obfuscation.append(rel)
            for _, href_raw in href_re.findall(cleaned):
                res = self._resolve_internal_href(rel, href_raw)
                if res is None:
                    continue
                candidates, resolved = res
                if not any(c in self.published for c in candidates):
                    broken.append((rel, href_raw, resolved))

        self.assertEqual(
            cf_email_obfuscation,
            [],
            f"Found Cloudflare email obfuscation links in published HTML: {cf_email_obfuscation}",
        )
        self.assertEqual(
            broken,
            [],
            f"Found {len(broken)} broken internal <a href> links across published HTML: {broken[:15]}",
        )

    def test_02_canonical_5_column_footer_sync_and_links(self):
        res = subprocess.run(
            ["python3", str(REPO_ROOT / "scripts" / "sync_site_footer.py"), "--check"],
            cwd=REPO_ROOT,
            capture_output=True,
            text=True,
        )
        self.assertEqual(res.returncode, 0, f"Footer sync check failed:\n{res.stdout}\n{res.stderr}")

        footer_html = (REPO_ROOT / "components" / "site-footer.html").read_text(encoding="utf-8")
        self.assertIn("hg-canonical-footer", footer_html)
        self.assertEqual(footer_html.count('class="footer-brand"'), 1)
        self.assertEqual(footer_html.count('class="footer-col"'), 4)
        self.assertNotIn('style="display: none;"', footer_html)

        # Ensure components/site-footer.html itself stays excluded from GitHub Pages publishing
        self.assertNotIn("components/site-footer.html", self.published)

        # Verify no blockquote got overwritten by SITE-FOOTER-START
        booking = (REPO_ROOT / "articles" / "booking-com-breach-2026.html").read_text(encoding="utf-8")
        self.assertIn("<footer>— TheHGTech Security Analysis</footer>", booking)
        self.assertEqual(booking.count("SITE-FOOTER-START"), 1)

    def test_03_editorial_standards_page(self):
        self.assertIn("editorial-standards.html", self.published)
        txt = (REPO_ROOT / "editorial-standards.html").read_text(encoding="utf-8")
        self.assertIn("<title>Editorial Standards", txt)
        self.assertIn('rel="canonical" href="https://thehgtech.com/editorial-standards.html"', txt)
        self.assertIn('"@type": "WebPage"', txt)
        self.assertIn('"@type": "BreadcrumbList"', txt)
        self.assertIn("SITE-FOOTER-START", txt)
        self.assertIn("/vendor/fontawesome/css/all.min.css", txt)
        self.assertNotIn("noindex", txt)

    def test_04_security_txt_rfc9116_valid_and_no_404_refs(self):
        self.assertIn(".well-known/security.txt", self.published)
        txt = (REPO_ROOT / ".well-known" / "security.txt").read_text(encoding="utf-8")
        self.assertIn("Contact: mailto:harish@thehgtech.com", txt)
        self.assertIn("Preferred-Languages: en", txt)
        self.assertIn("Canonical: https://thehgtech.com/.well-known/security.txt", txt)
        self.assertRegex(txt, r"(?m)^Expires:\s+\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?Z$")
        self.assertNotIn("security-acknowledgments.html", txt)
        self.assertNotIn("security-policy.html", txt)

        for url in re.findall(r"https://thehgtech\.com(/[^\s]+)", txt):
            rel = url.lstrip("/")
            self.assertIn(rel, self.published, f"security.txt references unpublished path: {url}")

    def test_05_guides_index_crawlable_without_noscript_and_idempotent(self):
        guides_data = json.loads((REPO_ROOT / "guides" / "guides.json").read_text(encoding="utf-8"))
        guides_list = guides_data.get("guides", guides_data)
        expected_urls = {f"/guides/{g['id']}.html" for g in guides_list}

        guides_html = (REPO_ROOT / "guides" / "index.html").read_text(encoding="utf-8")

        # Strip <noscript> blocks and <script> blocks: ALL guide URLs must still exist in normal HTML!
        no_noscript = re.sub(r"<noscript\b[^>]*>.*?</noscript>", "", guides_html, flags=re.IGNORECASE | re.DOTALL)
        no_scripts = re.sub(r"<script\b[^>]*>.*?</script>", "", no_noscript, flags=re.IGNORECASE | re.DOTALL)

        # Verify zero guide links remain inside <noscript>
        for ns in re.findall(r"<noscript\b[^>]*>(.*?)</noscript>", guides_html, flags=re.IGNORECASE | re.DOTALL):
            self.assertNotIn("/guides/", ns, "Guide links must not be hidden inside <noscript>")

        # Collect featured card + grid cards hrefs
        found_card_hrefs = re.findall(
            r'<a\s+href="(/guides/[^"]+\.html)"\s+class="(?:ed-featured-card|guide-card)"',
            no_scripts,
        )
        self.assertEqual(
            len(found_card_hrefs),
            len(set(found_card_hrefs)),
            "Duplicate guide cards detected in guides/index.html static HTML",
        )
        self.assertEqual(
            set(found_card_hrefs),
            expected_urls,
            f"Missing or mismatched crawlable guide URLs: diff={expected_urls ^ set(found_card_hrefs)}",
        )

        # Verify generate_pagination.py idempotency across guides/index.html, article-list.html, articles/page/*
        tracked_targets = [
            REPO_ROOT / "guides" / "index.html",
            REPO_ROOT / "article-list.html",
            REPO_ROOT / "articles-list.html",
            REPO_ROOT / "index.html",
        ] + sorted((REPO_ROOT / "articles" / "page").glob("*/index.html"))

        h1 = {str(p): hashlib.sha256(p.read_bytes()).hexdigest() for p in tracked_targets}
        res = subprocess.run(
            ["python3", str(REPO_ROOT / "scripts" / "generate_pagination.py")],
            cwd=REPO_ROOT,
            capture_output=True,
            text=True,
        )
        self.assertEqual(res.returncode, 0, f"generate_pagination.py failed: {res.stderr}")
        h2 = {str(p): hashlib.sha256(p.read_bytes()).hexdigest() for p in tracked_targets}
        self.assertEqual(h1, h2, "generate_pagination.py is not idempotent")

    def test_06_article_routing_parity_and_noindex_preserved(self):
        self.assertIn("js/article-library-router.js", self.published)
        self.assertIn("css/article-library.css", self.published)
        router_js = (REPO_ROOT / "js" / "article-library-router.js").read_text(encoding="utf-8")
        self.assertIn("new URLSearchParams(window.location.search)", router_js)
        self.assertIn("AbortSignal.timeout(", router_js)
        self.assertIn(".replaceChildren(", router_js)

        for rel in [
            "articles.html",
            "article-list.html",
            "articles-list.html",
            "articles/page/1/index.html",
            "articles/page/2/index.html",
        ]:
            txt = (REPO_ROOT / rel).read_text(encoding="utf-8")
            self.assertIn("/js/article-library-router.js", txt, f"{rel} missing shared router script")
            self.assertIn("fetch('/ioc-data/articles.json'", txt, f"{rel} missing root-relative articles.json fetch")
            self.assertNotIn("fetch('ioc-data/articles.json", txt, f"{rel} contains relative articles.json fetch")
            self.assertIn('id="rlSearchInput"', txt, f"{rel} missing #rlSearchInput")
            self.assertIn('id="rlCategoryStrip"', txt, f"{rel} missing #rlCategoryStrip")
            self.assertIn('id="rlArticlesGrid"', txt, f"{rel} missing #rlArticlesGrid")
            self.assertIn('id="rlPagination"', txt, f"{rel} missing #rlPagination")
            self.assertIn('id="rlModal"', txt, f"{rel} missing #rlModal")

        # Section 3 constraint: existing noindex directives MUST remain untouched
        articles_html = (REPO_ROOT / "articles.html").read_text(encoding="utf-8")
        self.assertIn('<meta name="robots" content="noindex, nofollow">', articles_html)
        for rel in ["article-list.html", "articles-list.html", "articles/page/1/index.html", "articles/page/2/index.html"]:
            txt = (REPO_ROOT / rel).read_text(encoding="utf-8")
            self.assertIn('<meta name="robots" content="noindex, follow">', txt, f"{rel} lost noindex, follow")

    def test_07_embedded_widgets_repaired_and_zero_telemetry(self):
        # 1. embed/grc-badge.html
        self.assertIn("embed/grc-badge.html", self.published)
        badge = (REPO_ROOT / "embed" / "grc-badge.html").read_text(encoding="utf-8")
        self.assertIn('<meta name="robots" content="noindex, follow">', badge)
        self.assertIn('<meta name="referrer" content="no-referrer">', badge)
        self.assertIn("URLSearchParams", badge)
        for forbidden in ("googletagmanager.com", "gtag(", "fullres.net", "cdnjs.cloudflare.com"):
            self.assertNotIn(forbidden, badge, f"embed/grc-badge.html must not contain {forbidden}")

        # 2. embed/cve-feed.html
        self.assertIn("embed/cve-feed.html", self.published)
        feed = (REPO_ROOT / "embed" / "cve-feed.html").read_text(encoding="utf-8")
        self.assertIn("cveId", feed)
        self.assertIn("AbortSignal.timeout(", feed)
        self.assertIn("replaceChildren(", feed)
        self.assertNotIn("CVE-2025-21333", feed)
        self.assertNotIn("command-palette.js", feed)
        self.assertNotIn("mobile-nav.js", feed)

        # 3. embed/cve-widget.html
        self.assertIn("embed/cve-widget.html", self.published)
        widget = (REPO_ROOT / "embed" / "cve-widget.html").read_text(encoding="utf-8")
        self.assertNotIn('width=""100%""', widget)
        self.assertNotIn("setSize('\"100%\"'", widget)
        self.assertIn("full: { width: '100%', height: '500' }", widget)
        self.assertIn('width="${size.width}"', widget)
        self.assertIn('src="/embed/cve-feed.html"', widget)


if __name__ == "__main__":
    unittest.main()
