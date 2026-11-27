import io
import json
import os
import shutil
import subprocess
import sys
import tempfile
import unittest
import urllib.error
from pathlib import Path
from unittest.mock import MagicMock, patch

REPO_ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(REPO_ROOT / "scripts"))

import send_newsletter  # noqa: E402


def _parse_yaml_file(path: Path):
    if shutil.which("ruby"):
        ruby_cmd = (
            "require 'yaml'; require 'json'; "
            "data = YAML.safe_load(File.read(ARGV[0])); "
            "puts JSON.generate(data)"
        )
        out = subprocess.check_output(["ruby", "-e", ruby_cmd, str(path)], text=True)
        return json.loads(out)
    import yaml  # type: ignore

    return yaml.safe_load(path.read_text(encoding="utf-8"))


class TestNewsletterSafetyControls(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.repo_root = REPO_ROOT
        cls.articles_wf_path = cls.repo_root / ".github" / "workflows" / "newsletter-articles.yml"
        cls.shorts_wf_path = cls.repo_root / ".github" / "workflows" / "newsletter-shorts.yml"
        cls.articles_wf = _parse_yaml_file(cls.articles_wf_path)
        cls.shorts_wf = _parse_yaml_file(cls.shorts_wf_path)

    # -------------------------------------------------------------------------
    # Acceptance Test 1: Push events cannot trigger a live newsletter
    # -------------------------------------------------------------------------
    def test_01_no_push_triggers_on_newsletter_workflows(self):
        # YAML 1.1 parsers map bare `on:` to boolean true (serialized as "true" by Ruby JSON)
        articles_on = self.articles_wf.get("on") or self.articles_wf.get("true") or self.articles_wf.get(True)
        self.assertIsInstance(articles_on, dict)
        self.assertEqual(
            set(articles_on.keys()),
            {"workflow_dispatch"},
            f"newsletter-articles.yml must be workflow_dispatch ONLY, found triggers: {set(articles_on.keys())}",
        )

        # Verify required inputs exist on newsletter-articles.yml
        inputs = articles_on["workflow_dispatch"]["inputs"]
        self.assertIn("filepath", inputs)
        self.assertTrue(inputs["filepath"].get("required"))
        self.assertIn("confirm_live_send", inputs)
        self.assertTrue(inputs["confirm_live_send"].get("required"))
        self.assertNotEqual(inputs["confirm_live_send"].get("default"), "SEND")
        self.assertIn("dry_run", inputs)

        # Verify workflow text contains exact 'SEND' gate and minimum contents: read permission
        wf_text = self.articles_wf_path.read_text(encoding="utf-8")
        self.assertIn('"$INPUT_CONFIRM" != "SEND"', wf_text)
        self.assertIn("github.event_name == 'workflow_dispatch'", wf_text)
        self.assertIn("contents: read", wf_text)
        self.assertNotIn("git diff --name-only", wf_text)

        # Verify newsletter-shorts.yml also has NO push trigger and guards force=true with SEND
        shorts_on = self.shorts_wf.get("on") or self.shorts_wf.get("true") or self.shorts_wf.get(True)
        self.assertNotIn("push", shorts_on)
        shorts_text = self.shorts_wf_path.read_text(encoding="utf-8")
        self.assertIn('"$CONFIRM_FORCE" != "SEND"', shorts_text)

        # Verify no other workflow invokes send_newsletter.py on push
        for wf in (self.repo_root / ".github" / "workflows").glob("*.yml"):
            if wf.name in ("newsletter-articles.yml", "newsletter-shorts.yml"):
                continue
            self.assertNotIn(
                "send_newsletter.py",
                wf.read_text(encoding="utf-8"),
                f"Unexpected send_newsletter.py call in {wf.name}",
            )

    # -------------------------------------------------------------------------
    # Acceptance Tests 2 & 3: Missing or incorrect confirmation is rejected
    # -------------------------------------------------------------------------
    @patch("urllib.request.urlopen")
    def test_02_missing_and_incorrect_confirmation_rejected(self, mock_urlopen):
        valid_article = "articles/apple-dyld-zero-day-cve-2026-20700.html"
        for bad_confirm in ("", "DRY-RUN", "send", "Send", "YES", "true", "SEND ", " SEND", "live"):
            ok, info, code = send_newsletter.process_article_newsletter(
                file_path=valid_article,
                confirm_send=bad_confirm,
                dry_run=False,
                repo_root=self.repo_root,
            )
            self.assertFalse(ok, f"Expected rejection for confirm_send={bad_confirm!r}")
            self.assertEqual(info, "confirmation_rejected")
            self.assertEqual(code, 1)

        self.assertEqual(mock_urlopen.call_count, 0, "Zero Brevo calls allowed when confirmation is rejected")

    # -------------------------------------------------------------------------
    # Acceptance Test 4: Missing or invalid article paths are rejected
    # -------------------------------------------------------------------------
    @patch("urllib.request.urlopen")
    def test_03_missing_and_invalid_article_paths_rejected(self, mock_urlopen):
        invalid_cases = [
            ("", "missing_filepath"),
            (None, "missing_filepath"),
            ("articles/does-not-exist-9999.html", "file_not_found"),
            ("../_config.yml", "path_outside_repo"),
            ("/etc/passwd", "path_outside_repo"),
            ("index.html", "path_not_in_articles_or_guides"),
            ("_config.yml", "not_html_file"),
            ("tools/grc-assessment/index.html", "path_not_in_articles_or_guides"),
            ("articles/page/1/index.html", "disallowed_index_or_pagination_path"),
            ("guides/index.html", "disallowed_index_or_pagination_path"),
            ("articles/microsoft-patch-tuesday-february-2026-linkedin.md", "not_html_file"),
        ]
        for bad_path, expected_reason in invalid_cases:
            ok, info, code = send_newsletter.process_article_newsletter(
                file_path=bad_path,
                confirm_send="SEND",
                dry_run=False,
                repo_root=self.repo_root,
            )
            self.assertFalse(ok, f"Expected rejection for path={bad_path!r}")
            self.assertEqual(info, expected_reason, f"Unexpected reason for {bad_path!r}: {info}")
            self.assertEqual(code, 1)

        self.assertEqual(mock_urlopen.call_count, 0, "Zero Brevo calls allowed for invalid paths")

    # -------------------------------------------------------------------------
    # Acceptance Test 5: noindex pages and redirect stubs are rejected
    # -------------------------------------------------------------------------
    @patch("urllib.request.urlopen")
    def test_04_noindex_and_redirect_stubs_rejected(self, mock_urlopen):
        # Real repository redirect stubs
        ok, info, code = send_newsletter.process_article_newsletter(
            file_path="articles/windows-vs-macos-endpoint-security-2026.html",
            confirm_send="SEND",
            dry_run=False,
            repo_root=self.repo_root,
        )
        self.assertFalse(ok)
        self.assertEqual(code, 1)
        self.assertIn("redirect", info)

        ok, info, code = send_newsletter.process_article_newsletter(
            file_path="guides/incident-response-plan.html",
            confirm_send="SEND",
            dry_run=False,
            repo_root=self.repo_root,
        )
        self.assertFalse(ok)
        self.assertEqual(code, 1)
        self.assertIn(info, ("noindex_page", "meta_refresh_redirect_stub"))

        # Synthetic noindex, meta-refresh, canonical-mismatch, and JS-redirect fixtures
        with tempfile.TemporaryDirectory() as tmpdir:
            tmp_root = Path(tmpdir)
            (tmp_root / "articles").mkdir()

            noindex_page = tmp_root / "articles" / "draft-noindex.html"
            noindex_page.write_text(
                '<!DOCTYPE html><html><head><title>Draft</title><meta name="robots" content="noindex, follow"></head>'
                '<body><article><h1>Draft Article</h1><p>' + ('Substantive draft text ' * 10) + '</p></article></body></html>',
                encoding="utf-8",
            )
            ok, info, code = send_newsletter.process_article_newsletter(
                file_path="articles/draft-noindex.html",
                confirm_send="SEND",
                dry_run=False,
                repo_root=tmp_root,
            )
            self.assertFalse(ok)
            self.assertEqual(info, "noindex_page")
            self.assertEqual(code, 1)

            refresh_stub = tmp_root / "articles" / "meta-refresh.html"
            refresh_stub.write_text(
                '<!DOCTYPE html><html><head><title>Moved</title><meta http-equiv="refresh" content="0;url=/guides/x.html"></head>'
                '<body><h1>Moved</h1><p>' + ('This article moved permanently to another section. ' * 5) + '</p></body></html>',
                encoding="utf-8",
            )
            ok, info, code = send_newsletter.process_article_newsletter(
                file_path="articles/meta-refresh.html",
                confirm_send="SEND",
                dry_run=False,
                repo_root=tmp_root,
            )
            self.assertFalse(ok)
            self.assertEqual(info, "meta_refresh_redirect_stub")
            self.assertEqual(code, 1)

            canon_stub = tmp_root / "articles" / "canon-redirect.html"
            canon_stub.write_text(
                '<!DOCTYPE html><html><head><title>Guide</title><link rel="canonical" href="https://thehgtech.com/guides/other.html"></head>'
                '<body><article><h1>Guide Copy</h1><p>' + ('Duplicate copy pointing to canonical guide. ' * 5) + '</p></article></body></html>',
                encoding="utf-8",
            )
            ok, info, code = send_newsletter.process_article_newsletter(
                file_path="articles/canon-redirect.html",
                confirm_send="SEND",
                dry_run=False,
                repo_root=tmp_root,
            )
            self.assertFalse(ok)
            self.assertEqual(info, "canonical_mismatch_redirect_stub")
            self.assertEqual(code, 1)

            js_stub = tmp_root / "articles" / "js-redirect.html"
            js_stub.write_text(
                '<!DOCTYPE html><html><head><title>Moved</title><script>window.location.replace("/guides/new.html");</script></head>'
                '<body><h1>Moved</h1><p>This page has moved to a new location on the website permanently.</p></body></html>',
                encoding="utf-8",
            )
            ok, info, code = send_newsletter.process_article_newsletter(
                file_path="articles/js-redirect.html",
                confirm_send="SEND",
                dry_run=False,
                repo_root=tmp_root,
            )
            self.assertFalse(ok)
            self.assertEqual(info, "js_redirect_stub")
            self.assertEqual(code, 1)

        self.assertEqual(mock_urlopen.call_count, 0, "Zero Brevo calls allowed for noindex/redirect pages")

    # -------------------------------------------------------------------------
    # Acceptance Test 6: Brevo [digest] duplicate protection & fail-closed behavior
    # -------------------------------------------------------------------------
    @patch("send_newsletter.create_and_send_campaign")
    @patch("urllib.request.urlopen")
    def test_05_brevo_digest_duplicate_protection_and_fail_closed(self, mock_urlopen, mock_create_send):
        article_path = "articles/apple-dyld-zero-day-cve-2026-20700.html"
        digest = send_newsletter.get_article_content_digest(article_path)
        os.environ["BREVO_API_KEY"] = "mock-test-key"

        # 6A. Duplicate campaign exists in Brevo -> skip safely (exit 0, 0 sends)
        mock_resp = MagicMock()
        mock_resp.read.return_value = json.dumps({
            "campaigns": [
                {
                    "id": 777,
                    "name": f"TheHGTech Article [{digest[:12]}] - Apple dyld Zero-Day",
                    "status": "sent",
                }
            ],
            "count": 1,
        }).encode("utf-8")
        mock_urlopen.return_value.__enter__.return_value = mock_resp

        ok, info, code = send_newsletter.process_article_newsletter(
            file_path=article_path,
            confirm_send="SEND",
            dry_run=False,
            repo_root=self.repo_root,
        )
        self.assertFalse(ok)
        self.assertEqual(info, "brevo_duplicate")
        self.assertEqual(code, 0)
        self.assertEqual(mock_create_send.call_count, 0)

        # 6B. Brevo API error during duplicate check -> fail closed (exit 1, 0 sends)
        mock_urlopen.side_effect = urllib.error.HTTPError(
            url="https://api.brevo.com/v3/emailCampaigns",
            code=503,
            msg="Service Unavailable",
            hdrs={},
            fp=io.BytesIO(b'{"message":"unavailable"}'),
        )
        ok, info, code = send_newsletter.process_article_newsletter(
            file_path=article_path,
            confirm_send="SEND",
            dry_run=False,
            repo_root=self.repo_root,
        )
        self.assertFalse(ok)
        self.assertIn("brevo_check_failed", info)
        self.assertEqual(code, 1)
        self.assertEqual(mock_create_send.call_count, 0)

    # -------------------------------------------------------------------------
    # Acceptance Test 7: Valid manual dispatch reaches pre-send validation safely
    # -------------------------------------------------------------------------
    @patch("urllib.request.urlopen")
    def test_06_valid_manual_dispatch_dry_run_and_mocked_presend(self, mock_urlopen):
        article_path = "articles/apple-dyld-zero-day-cve-2026-20700.html"
        guide_path = "guides/active-directory-security-hardening.html"
        expected_digest = send_newsletter.get_article_content_digest(article_path)

        # 7A. Dry-run mode validates real article & guide with ZERO network calls
        for path in (article_path, guide_path):
            ok, info, code = send_newsletter.process_article_newsletter(
                file_path=path,
                confirm_send="DRY-RUN",
                dry_run=True,
                repo_root=self.repo_root,
            )
            self.assertTrue(ok, f"Dry-run failed for valid page {path}: {info}")
            self.assertTrue(info.startswith("dry_run_validated:"))
            self.assertEqual(code, 0)

        self.assertEqual(mock_urlopen.call_count, 0, "Dry-run must make ZERO Brevo HTTP requests")

        # 7B. Rendered HTML integrity check (unsubscribe tag, valid URL, real title)
        subject, html = send_newsletter.generate_article_html(article_path, repo_root=self.repo_root)
        self.assertTrue(len(subject) > 10)
        self.assertIn("{{ unsubscribe }}", html)
        self.assertIn(f"https://thehgtech.com/{article_path}", html)
        self.assertNotIn("https://thehgtech.com//", html)

        # 7C. Valid manual dispatch with confirm_send='SEND' & mocked Brevo reaches campaign call with [digest]
        with patch("send_newsletter.check_brevo_campaign_duplicate", return_value=("clear", None)) as mock_dup, \
             patch("send_newsletter.create_and_send_campaign", return_value=4242) as mock_send:
            ok, info, code = send_newsletter.process_article_newsletter(
                file_path=article_path,
                confirm_send="SEND",
                dry_run=False,
                repo_root=self.repo_root,
            )
            self.assertTrue(ok)
            self.assertEqual(info, "4242")
            self.assertEqual(code, 0)
            mock_dup.assert_called_once_with(expected_digest)
            mock_send.assert_called_once()
            _, kwargs = mock_send.call_args
            self.assertIn(f"[{expected_digest[:12]}]", kwargs["campaign_name"])

        self.assertEqual(mock_urlopen.call_count, 0, "Mocked test must never hit live Brevo API")

    # -------------------------------------------------------------------------
    # Acceptance Test 8: All GitHub Actions workflows remain valid YAML
    # -------------------------------------------------------------------------
    def test_07_all_workflows_parse_valid_yaml(self):
        wf_files = sorted((self.repo_root / ".github" / "workflows").glob("*.yml"))
        self.assertGreaterEqual(len(wf_files), 9)
        for wf in wf_files:
            parsed = _parse_yaml_file(wf)
            self.assertIsInstance(parsed, dict, f"Workflow failed YAML parse: {wf.name}")
            self.assertIn("jobs", parsed, f"Workflow missing jobs block: {wf.name}")


if __name__ == "__main__":
    unittest.main()
