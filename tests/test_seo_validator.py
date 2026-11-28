import json
import sys
import tempfile
import unittest
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(REPO_ROOT / "scripts"))

import seo_validator  # noqa: E402


def _write(root: Path, rel: str, content: str):
    p = root / rel
    p.parent.mkdir(parents=True, exist_ok=True)
    p.write_text(content, encoding="utf-8")


def _build_valid_fixture(root: Path):
    _write(root, "_config.yml", 'include:\n  - ".well-known"\nexclude:\n  - "scripts"\n  - "*.md"\n')
    _write(root, "fonts/inter-variable.woff2", "fake-woff2")
    _write(root, "css/app.css", "body{}")
    _write(root, "js/app.js", "console.log('ok');")
    _write(root, "images/hero.png", "fake-png")
    _write(root, "about.html", """<!DOCTYPE html>
<html lang="en"><head>
<title>About | TheHGTech</title>
<meta name="description" content="About TheHGTech independent cybersecurity research and live vulnerability intelligence.">
<link rel="canonical" href="https://thehgtech.com/about.html">
</head><body><h1>About</h1></body></html>
""")
    _write(root, "index.html", """<!DOCTYPE html>
<html lang="en"><head>
<title>TheHGTech Home</title>
<meta name="description" content="Independent cybersecurity research, technical guides, and live threat intelligence.">
<link rel="canonical" href="https://thehgtech.com/">
<link rel="preload" href="/fonts/inter-variable.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/css/app.css">
<meta property="og:image" content="https://thehgtech.com/images/hero.png">
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"WebSite","name":"TheHGTech","url":"https://thehgtech.com/"}
</script>
</head><body>
<a href="/articles/sample.html">Sample</a>
<a href="/about.html">About</a>
<a href="https://example.com/external">External</a>
<img src="/images/hero.png" alt="Hero">
<script src="/js/app.js"></script>
</body></html>
""")
    _write(root, "articles/sample.html", """<!DOCTYPE html>
<html lang="en"><head>
<title>Sample Analysis | TheHGTech</title>
<meta name="description" content="Detailed technical analysis of sample vulnerability mechanisms and defensive controls.">
<link rel="canonical" href="https://thehgtech.com/articles/sample.html">
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "Sample Analysis",
  "datePublished": "2026-04-12",
  "dateModified": "2026-04-12",
  "author": {
    "@type": "Person",
    "@id": "https://thehgtech.com/about.html#harish-g",
    "name": "Harish G",
    "url": "https://thehgtech.com/about.html"
  }
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type": "Question", "name": "How does sample defense work?", "acceptedAnswer": {"@type": "Answer", "text": "It blocks exploit chains."}}
  ]
}
</script>
</head><body>
<h1>Sample Analysis</h1>
<h2>How does sample defense work?</h2>
<p>It blocks exploit chains.</p>
</body></html>
""")
    # Intentional noindex page & excluded internal file should NOT trigger false positives
    _write(root, "articles.html", """<!DOCTYPE html>
<html lang="en"><head>
<title>Articles Archive | TheHGTech</title>
<meta name="robots" content="noindex, nofollow">
<meta name="description" content="Archive index of published cybersecurity analyses and vulnerability research.">
</head><body><a href="/articles/sample.html">Sample</a></body></html>
""")
    _write(root, "scripts/internal.html", "<html><head></head><body><a href='/broken.html'>Broken internal</a></body></html>")
    _write(root, "robots.txt", "User-agent: *\nAllow: /\nDisallow: /scripts/\nSitemap: https://thehgtech.com/sitemap.xml\n")
    _write(root, "sitemap.xml", """<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://thehgtech.com/</loc><lastmod>2026-04-12</lastmod></url>
  <url><loc>https://thehgtech.com/about.html</loc><lastmod>2026-04-12</lastmod></url>
  <url><loc>https://thehgtech.com/articles/sample.html</loc><lastmod>2026-04-12</lastmod></url>
</urlset>
""")


class TestSEOValidator(unittest.TestCase):
    def test_01_valid_fixture_passes_zero_errors_and_respects_exclusions(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            _build_valid_fixture(root)
            report = seo_validator.SEOValidator(root).validate_all()
            self.assertEqual(report["error_count"], 0, f"Unexpected errors: {report['errors']}")
            self.assertEqual(report["warning_count"], 0, f"Unexpected warnings: {report['warnings']}")

    def test_02_detects_broken_links_assets_preloads_and_metadata_defects(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            _build_valid_fixture(root)
            _write(root, "articles/bad.html", """<!DOCTYPE html>
<html lang="en"><head>
<title>Sample Analysis | TheHGTech</title>
<meta name="description" content="Technical analysis of Anthropic">
<link rel="canonical" href="https://thehgtech.com/does-not-exist.html">
<link rel="preload" href="/fonts/missing.woff2" as="font">
<link rel="stylesheet" href="/css/missing.css">
<meta property="og:image" content="https://thehgtech.com/images/missing-og.png">
</head><body>
<a href="/missing-page.html">Broken Link</a>
<img src="/images/missing-body.png" alt="Broken">
<script src="/js/missing.js"></script>
</body></html>
""")
            report = seo_validator.SEOValidator(root).validate_all()
            codes = {e["code"] for e in report["errors"]}
            for expected in (
                "DUPLICATE_TITLE",
                "TRUNCATED_META_DESCRIPTION",
                "BROKEN_CANONICAL",
                "INVALID_PRELOAD_HINT",
                "BROKEN_PRELOAD_ASSET",
                "BROKEN_STYLESHEET",
                "BROKEN_SOCIAL_IMAGE",
                "BROKEN_INTERNAL_LINK",
                "BROKEN_IMAGE_ASSET",
                "BROKEN_SCRIPT_ASSET",
            ):
                self.assertIn(expected, codes, f"Missing expected error code {expected}; got {codes}")

    def test_03_detects_structured_data_and_placeholder_date_defects(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            _build_valid_fixture(root)
            _write(root, "guides/bad-guide.html", """<!DOCTYPE html>
<html lang="en"><head>
<title>Bad Guide | TheHGTech</title>
<meta name="description" content="A complete guide description for testing invalid JSON-LD detection.">
<script type="application/ld+json">{ invalid json </script>
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"WebSite","url":"https://thehgtech.com/","potentialAction":{"@type":"SearchAction","target":"https://thehgtech.com/?search={q}"}}
</script>
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"HowTo","name":"Stub","step":[{"@type":"HowToStep","text":"Refer to the section 1"}]}
</script>
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the latest threat intelligence on this topic?","acceptedAnswer":{"@type":"Answer","text":"Generic."}}]}
</script>
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"TechArticle","headline":"Bad","datePublished":"2026-06-30T17:12:27+05:30","author":{"@type":"Person","name":"Harish G","url":"https://thehgtech.com/author/harish-g"}}
</script>
</head><body><h1>Bad Guide</h1></body></html>
""")
            report = seo_validator.SEOValidator(root).validate_all()
            codes = {e["code"] for e in report["errors"]}
            for expected in (
                "MALFORMED_JSON_LD",
                "DEAD_SEARCH_ACTION",
                "UNSUPPORTED_HOWTO_SCHEMA",
                "BOILERPLATE_FAQPAGE_SCHEMA",
                "BROKEN_AUTHOR_URL",
                "PLACEHOLDER_PUBLICATION_DATE",
            ):
                self.assertIn(expected, codes, f"Missing expected error code {expected}; got {codes}")
            warn_codes = {w["code"] for w in report["warnings"]}
            self.assertIn("INCONSISTENT_AUTHOR_ID", warn_codes)

    def test_04_detects_robots_override_and_sitemap_defects(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            _build_valid_fixture(root)
            _write(
                root,
                "robots.txt",
                "User-agent: *\nDisallow: /scripts/\nUser-agent: Googlebot\nAllow: /\nSitemap: https://thehgtech.com/news-sitemap.xml\n",
            )
            _write(
                root,
                "sitemap.xml",
                """<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://thehgtech.com/articles.html</loc></url>
  <url><loc>https://thehgtech.com/does-not-exist.html</loc></url>
</urlset>
""",
            )
            report = seo_validator.SEOValidator(root).validate_all()
            codes = {e["code"] for e in report["errors"]}
            for expected in (
                "ROBOTS_BOT_OVERRIDE",
                "INVALID_NEWS_SITEMAP_ADVERTISED",
                "NOINDEX_URL_IN_SITEMAP",
                "BROKEN_SITEMAP_TARGET",
            ):
                self.assertIn(expected, codes, f"Missing expected error code {expected}; got {codes}")

    def test_05_real_repository_passes_seo_validator_zero_errors(self):
        report = seo_validator.SEOValidator(REPO_ROOT).validate_all()
        self.assertGreater(report["published_html"], 300)
        self.assertEqual(
            report["error_count"],
            0,
            f"Real repository SEO validation reported {report['error_count']} errors:\n"
            + "\n".join(f"  {e['code']} {e['file']}:{e['line']} - {e['message']}" for e in report["errors"][:25]),
        )


if __name__ == "__main__":
    unittest.main()
