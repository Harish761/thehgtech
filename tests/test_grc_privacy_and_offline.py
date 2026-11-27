import importlib.util
import re
import unittest
from pathlib import Path

from tests.test_jekyll_exclusions import _parse_config_yml, _simulate_jekyll_filter


FORBIDDEN_TELEMETRY_AND_CDN_PATTERNS = [
    ("GA4 measurement ID", re.compile(r"G-XL6RCXZJE2", re.IGNORECASE)),
    ("Google Tag Manager", re.compile(r"googletagmanager\.com", re.IGNORECASE)),
    ("Google Analytics", re.compile(r"google-analytics\.com|\bgtag\(", re.IGNORECASE)),
    ("Fullres script", re.compile(r"fullres\.net", re.IGNORECASE)),
    ("Cloudflare Web Analytics snippet", re.compile(r"cloudflareinsights\.com|beacon\.min\.js", re.IGNORECASE)),
    ("Cloudflare CDNJS", re.compile(r"cdnjs\.cloudflare\.com", re.IGNORECASE)),
    ("jsDelivr CDN", re.compile(r"cdn\.jsdelivr\.net", re.IGNORECASE)),
    ("unpkg CDN", re.compile(r"unpkg\.com", re.IGNORECASE)),
    ("Google Fonts CDN", re.compile(r"fonts\.googleapis\.com|fonts\.gstatic\.com", re.IGNORECASE)),
]

SELF_HOSTED_VENDOR_FILES = [
    "vendor/fontawesome/css/all.min.css",
    "vendor/fontawesome/webfonts/fa-brands-400.woff2",
    "vendor/fontawesome/webfonts/fa-regular-400.woff2",
    "vendor/fontawesome/webfonts/fa-solid-900.woff2",
    "vendor/fontawesome/webfonts/fa-v4compatibility.woff2",
    "tools/grc-assessment/vendor/pdfmake.min.js",
    "tools/grc-assessment/vendor/vfs_fonts.js",
    "tools/grc-assessment/vendor/xlsx.full.min.js",
    "tools/grc-assessment/vendor/chart.umd.min.js",
]


class TestGRCPrivacyAndOffline(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.repo_root = Path(__file__).resolve().parent.parent
        cls.grc_dir = cls.repo_root / "tools" / "grc-assessment"
        cls.grc_html_files = sorted(cls.grc_dir.rglob("*.html"))

    def test_01_all_108_grc_html_pages_present_zero_telemetry_zero_cdn(self):
        self.assertEqual(
            len(self.grc_html_files),
            108,
            f"Expected 108 GRC HTML files, found {len(self.grc_html_files)}",
        )
        for html_file in self.grc_html_files:
            rel = html_file.relative_to(self.repo_root)
            content = html_file.read_text(encoding="utf-8")
            for label, pattern in FORBIDDEN_TELEMETRY_AND_CDN_PATTERNS:
                self.assertIsNone(
                    pattern.search(content),
                    f"Forbidden {label} found in {rel}",
                )
            self.assertIn(
                '<meta name="referrer" content="no-referrer">',
                content,
                f"Missing strict referrer policy meta tag in {rel}",
            )

    def test_02_self_hosted_vendor_assets_exist_and_jekyll_publishes_them(self):
        for rel_path in SELF_HOSTED_VENDOR_FILES:
            fp = self.repo_root / rel_path
            self.assertTrue(fp.exists(), f"Missing self-hosted vendor asset: {rel_path}")
            self.assertGreater(fp.stat().st_size, 1024, f"Vendor asset unexpectedly tiny: {rel_path}")

        fa_css = (self.repo_root / "vendor/fontawesome/css/all.min.css").read_text(encoding="utf-8")
        self.assertNotIn(".ttf", fa_css, "Font Awesome CSS still references .ttf fallbacks that are not vendored")
        woff2_refs = set(re.findall(r"url\(\.\./webfonts/([^)]+\.woff2)\)", fa_css))
        self.assertTrue(woff2_refs, "Expected .woff2 references in Font Awesome CSS")
        for font_name in woff2_refs:
            font_path = self.repo_root / "vendor/fontawesome/webfonts" / font_name
            self.assertTrue(font_path.exists(), f"Font Awesome CSS references missing webfont: {font_name}")

        config = _parse_config_yml(self.repo_root / "_config.yml")
        pub_map = _simulate_jekyll_filter(
            SELF_HOSTED_VENDOR_FILES + ["tools/grc-assessment/generate_pseo_pages.py", "vendor/bundle/dummy.rb"],
            config.get("include", []),
            config.get("exclude", []),
        )
        for rel_path in SELF_HOSTED_VENDOR_FILES:
            self.assertTrue(
                pub_map[rel_path],
                f"Jekyll _config.yml would EXCLUDE self-hosted vendor file: {rel_path}",
            )
        self.assertFalse(pub_map["tools/grc-assessment/generate_pseo_pages.py"])
        self.assertFalse(pub_map["vendor/bundle/dummy.rb"])

    def test_03_grc_index_html_clean_dependencies_and_accurate_disclosures(self):
        index_html = (self.grc_dir / "index.html").read_text(encoding="utf-8")

        for expected_local_asset in [
            'href="/vendor/fontawesome/css/all.min.css"',
            'src="vendor/pdfmake.min.js"',
            'src="vendor/vfs_fonts.js"',
            'src="vendor/xlsx.full.min.js"',
            'src="vendor/chart.umd.min.js"',
        ]:
            self.assertIn(expected_local_asset, index_html)

        # Single script loads — no duplicate declarations or root-chrome noise
        self.assertEqual(len(re.findall(r"theme-toggle\.js", index_html)), 1)
        self.assertEqual(len(re.findall(r"command-palette\.js", index_html)), 1)
        self.assertNotIn("ui-enhancements.js", index_html)
        self.assertNotIn("loadEnhancementScripts", index_html)
        self.assertNotIn("../../content.js", index_html)
        self.assertNotIn("/cdn-cgi/l/email-protection", index_html)

        # Accurate privacy disclosures (share fragment warning + transport caveat)
        self.assertIn('id="shareFragmentNotice"', index_html)
        self.assertIn("#s=", index_html)
        self.assertIn("not encrypted", index_html.lower())
        self.assertIn("after initial page load", index_html.lower())

    def test_04_grc_guide_has_no_broken_style_css_or_duplicate_theme_toggle(self):
        guide_html = (self.grc_dir / "iso27001-grc-guide.html").read_text(encoding="utf-8")
        self.assertNotIn("../../style.css", guide_html)
        self.assertIn('href="/vendor/fontawesome/css/all.min.css"', guide_html)
        self.assertLessEqual(len(re.findall(r"theme-toggle\.js", guide_html)), 1)

    def test_05_grc_engine_uses_hash_fragment_and_migrates_legacy_query(self):
        engine_js = (self.grc_dir / "grc-engine.js").read_text(encoding="utf-8")
        self.assertIn("url.hash = 's=' + encodeURIComponent(", engine_js)
        self.assertIn("window.history.replaceState", engine_js)
        self.assertIn("url.searchParams.get('s')", engine_js)
        self.assertIn("url.searchParams.delete('s')", engine_js)
        self.assertIn("function clearURLState()", engine_js)
        self.assertIn("function resetSessionInPlace()", engine_js)
        self.assertIn("function refreshUIFromState()", engine_js)
        # Never write assessment state into ?s= query string or call location.reload() (breaks offline)
        self.assertIsNone(
            re.search(r"replaceState\([^)]*\?s=", engine_js),
            "grc-engine.js must never write ?s= query parameters via replaceState",
        )
        self.assertNotIn("`${window.location.origin}${window.location.pathname}?s=", engine_js)
        self.assertNotIn("location.reload()", engine_js, "grc-engine.js must not reload the page (breaks offline mode)")

    def test_06_generate_pseo_pages_is_zero_telemetry_and_preserves_noindex(self):
        gen_path = self.grc_dir / "generate_pseo_pages.py"
        gen_src = gen_path.read_text(encoding="utf-8")
        for label, pattern in FORBIDDEN_TELEMETRY_AND_CDN_PATTERNS:
            self.assertIsNone(pattern.search(gen_src), f"Forbidden {label} found in generate_pseo_pages.py")
        self.assertNotIn("/Volumes/", gen_src, "Hardcoded machine path found in generate_pseo_pages.py")

        spec = importlib.util.spec_from_file_location("generate_pseo_pages", gen_path)
        mod = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(mod)

        sample_data = mod.extract_json_from_js(self.grc_dir / "grc-data.js")
        self.assertIsNotNone(sample_data)
        first_domain = sample_data["domains"][0]
        first_control = first_domain["controls"][0]
        fname, ctrl_html = mod.generate_html(first_control, first_domain)
        self.assertTrue(fname.startswith("iso-27001-") and fname.endswith("-guide.html"))
        self.assertIn('<meta name="robots" content="noindex, follow">', ctrl_html)
        self.assertIn('<meta name="referrer" content="no-referrer">', ctrl_html)
        for label, pattern in FORBIDDEN_TELEMETRY_AND_CDN_PATTERNS:
            self.assertIsNone(pattern.search(ctrl_html), f"Generated control HTML leaked {label}")

        hub_html = mod.generate_glossary_index(sample_data)
        self.assertNotIn("noindex", hub_html)
        self.assertIn('<meta name="referrer" content="no-referrer">', hub_html)
        links = re.findall(r'<a href="(iso-27001-[^"]+-guide\.html)">', hub_html)
        self.assertEqual(len(links), 105)
        for label, pattern in FORBIDDEN_TELEMETRY_AND_CDN_PATTERNS:
            self.assertIsNone(pattern.search(hub_html), f"Generated glossary hub leaked {label}")


if __name__ == "__main__":
    unittest.main()
