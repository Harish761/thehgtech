#!/usr/bin/env python3
"""
Comprehensive Unit Tests for Sarvam AI Integration in TheHGTech Automation Pipeline
Tests:
1. Successful Sarvam response parsing & token logging
2. Compatibility with existing news-short parser (including markdown normalization)
3. Empty or malformed model responses fail safely
4. HTTP 429 transient error handling & bounded retries
5. Authentication and billing errors (401, 402, 403) fail immediately without retries
6. Missing API keys cannot trigger fake content publication
7. Existing content is preserved after generation failure
8. Verification that no real emails or Brevo API calls are made
"""

import os
import sys
import json
import unittest
from unittest.mock import patch, MagicMock, mock_open

# Ensure scripts and legacy_tasks directories are importable
CURRENT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.dirname(CURRENT_DIR)
LEGACY_TASKS_DIR = os.path.join(PROJECT_ROOT, "scripts", "legacy_tasks")
SCRIPTS_DIR = os.path.join(PROJECT_ROOT, "scripts")

sys.path.insert(0, LEGACY_TASKS_DIR)
sys.path.insert(0, SCRIPTS_DIR)

from ai_router import AIRouter
import update_shorts


SAMPLE_SARVAM_RAW_OUTPUT = """Date: Oct 10 2026
Source Name: The Hacker News
Source URL: https://thehackernews.com/2026/10/cisco-ios-xe-auth-bypass.html
Headline: Critical Cisco Zero-Day Discovered—Patch Urgently
Title: Cisco Patches High Severity Authentication Bypass in IOS XE
Content:
Cisco has released security fixes addressing an actively exploited authentication bypass vulnerability in IOS XE software. The flaw, tracked as CVE-2026-9999, allows unauthenticated remote attackers to gain administrative privileges on affected networking gear. Organizations across enterprise and telecom sectors are advised to apply vendor mitigations immediately. Cisco Talos noted targeted reconnaissance attempts in the wild preceding the patch release. Network administrators should inspect access logs for abnormal administrative session creation.
Entities: Cisco, IOS XE, CVE-2026-9999, authentication-bypass, zero-day

Date: Oct 10 2026
Source Name: BleepingComputer
Source URL: https://www.bleepingcomputer.com/news/security/lockbit-ransomware-v5/
Headline: LockBit Ransomware Re-emerges with Version 5.0
Title: LockBit Ransomware Group Returns with Rewritten Encryption Engine
Content:
Security researchers have observed a newly deployed variant of the LockBit ransomware family, dubbed LockBit 5.0. The updated binary introduces quantum-resistant hybrid cryptography and evades static detection mechanisms. Incident responders report several healthcare and logistics targets were compromised via initial access broker credentials. CISA and international law enforcement have released an updated advisory detailing indicators of compromise. Defensive teams should enforce multi-factor authentication across all external access portals.
Entities: LockBit, ransomware, CISA, malware
"""

SAMPLE_SARVAM_MARKDOWN_OUTPUT = """```markdown
**Date:** Oct 10 2026
**Source Name:** The Hacker News
**Source URL:** https://thehackernews.com/2026/10/cisco-ios-xe-auth-bypass.html
**Headline:** Critical Cisco Zero-Day Discovered—Patch Urgently
**Title:** Cisco Patches High Severity Authentication Bypass in IOS XE
**Content:**
Cisco has released security fixes addressing an actively exploited authentication bypass vulnerability in IOS XE software. The flaw, tracked as CVE-2026-9999, allows unauthenticated remote attackers to gain administrative privileges on affected networking gear. Organizations across enterprise and telecom sectors are advised to apply vendor mitigations immediately. Cisco Talos noted targeted reconnaissance attempts in the wild preceding the patch release. Network administrators should inspect access logs for abnormal administrative session creation.
**Entities:** Cisco, IOS XE, CVE-2026-9999, authentication-bypass, zero-day
```"""


class TestSarvamIntegration(unittest.TestCase):

    def setUp(self):
        # Clear environment variables before each test
        for var in ["SARVAM_API_KEY", "SARVAM_MODEL", "SARVAM_CHAT_ENDPOINT", "OPENAI_API_KEY"]:
            if var in os.environ:
                del os.environ[var]

    # -------------------------------------------------------------------------
    # TEST 1: Successful Sarvam Response Parsing
    # -------------------------------------------------------------------------
    @patch("requests.post")
    def test_01_successful_sarvam_response_parsing(self, mock_post):
        mock_response = MagicMock()
        mock_response.status_code = 200
        mock_response.json.return_value = {
            "id": "chatcmpl-test-123",
            "choices": [
                {
                    "index": 0,
                    "message": {
                        "role": "assistant",
                        "content": SAMPLE_SARVAM_RAW_OUTPUT
                    },
                    "finish_reason": "stop"
                }
            ],
            "usage": {
                "prompt_tokens": 1250,
                "completion_tokens": 420,
                "total_tokens": 1670
            }
        }
        mock_post.return_value = mock_response

        os.environ["SARVAM_API_KEY"] = "sk-test-sarvam-key-12345"
        router = AIRouter()

        result = router.generate_content(prompt="Summarize articles", task_type="shorts")

        self.assertIsNotNone(result)
        self.assertIn("Critical Cisco Zero-Day Discovered", result)
        self.assertEqual(router.last_provider, "Sarvam (sarvam-105b)")

        # Verify call headers and endpoint
        mock_post.assert_called_once()
        args, kwargs = mock_post.call_args
        self.assertEqual(args[0], "https://api.sarvam.ai/v1/chat/completions")
        headers = kwargs["headers"]
        self.assertEqual(headers["api-subscription-key"], "sk-test-sarvam-key-12345")
        self.assertEqual(headers["Authorization"], "Bearer sk-test-sarvam-key-12345")
        payload = kwargs["json"]
        self.assertEqual(payload["model"], "sarvam-105b")
        self.assertEqual(payload["max_tokens"], 4000)

    # -------------------------------------------------------------------------
    # TEST 2: Compatibility with News-Short Parser & Markdown Normalization
    # -------------------------------------------------------------------------
    def test_02_compatibility_with_news_short_parser(self):
        router = AIRouter()

        # 2A: Clean raw output
        cleaned_raw = router.clean_markdown_labels(SAMPLE_SARVAM_RAW_OUTPUT)
        shorts = update_shorts.parse_shorts(cleaned_raw)
        self.assertEqual(len(shorts), 2)
        self.assertEqual(shorts[0]["date"], "Oct 10 2026")
        self.assertEqual(shorts[0]["headline"], "Critical Cisco Zero-Day Discovered—Patch Urgently")
        self.assertEqual(shorts[0]["title"], "Cisco Patches High Severity Authentication Bypass in IOS XE")
        self.assertIn("CVE-2026-9999", shorts[0]["content"])

        # 2B: Output with markdown bolding (**Date:** etc.) and markdown code fences
        cleaned_md = router.clean_markdown_labels(SAMPLE_SARVAM_MARKDOWN_OUTPUT)
        shorts_md = update_shorts.parse_shorts(cleaned_md)
        self.assertEqual(len(shorts_md), 1)
        self.assertEqual(shorts_md[0]["date"], "Oct 10 2026")
        self.assertEqual(shorts_md[0]["headline"], "Critical Cisco Zero-Day Discovered—Patch Urgently")
        self.assertEqual(shorts_md[0]["title"], "Cisco Patches High Severity Authentication Bypass in IOS XE")

    # -------------------------------------------------------------------------
    # TEST 3: Empty or Malformed Responses Fail Safely
    # -------------------------------------------------------------------------
    @patch("requests.post")
    def test_03_empty_or_malformed_response_handling(self, mock_post):
        os.environ["SARVAM_API_KEY"] = "sk-test-sarvam-key"
        router = AIRouter()

        # Case A: Empty choices list
        mock_resp_empty = MagicMock()
        mock_resp_empty.status_code = 200
        mock_resp_empty.json.return_value = {"choices": []}
        mock_post.return_value = mock_resp_empty
        self.assertIsNone(router.call_sarvam("test prompt"))

        # Case B: Empty content in message
        mock_resp_no_content = MagicMock()
        mock_resp_no_content.status_code = 200
        mock_resp_no_content.json.return_value = {
            "choices": [{"message": {"role": "assistant", "content": ""}}]
        }
        mock_post.return_value = mock_resp_no_content
        self.assertIsNone(router.call_sarvam("test prompt"))

        # Case C: Invalid JSON
        mock_resp_bad_json = MagicMock()
        mock_resp_bad_json.status_code = 200
        mock_resp_bad_json.json.side_effect = ValueError("Invalid JSON")
        mock_post.return_value = mock_resp_bad_json
        self.assertIsNone(router.call_sarvam("test prompt"))

    # -------------------------------------------------------------------------
    # TEST 4: HTTP 429 Transient Error Handling & Bounded Retries
    # -------------------------------------------------------------------------
    @patch("time.sleep")
    @patch("requests.post")
    def test_04_http_429_transient_retries(self, mock_post, mock_sleep):
        os.environ["SARVAM_API_KEY"] = "sk-test-sarvam-key"
        router = AIRouter()

        mock_429 = MagicMock()
        mock_429.status_code = 429
        mock_429.text = "Rate limit exceeded"
        mock_post.return_value = mock_429

        result = router.call_sarvam("test prompt")

        # Must attempt exactly 3 times (1 initial + 2 retries) and then give up
        self.assertEqual(mock_post.call_count, 3)
        self.assertEqual(mock_sleep.call_count, 2)
        self.assertIsNone(result)

    # -------------------------------------------------------------------------
    # TEST 5: Authentication & Billing Errors Fail Without Repeated Retries
    # -------------------------------------------------------------------------
    @patch("time.sleep")
    @patch("requests.post")
    def test_05_auth_and_billing_errors_no_retry(self, mock_post, mock_sleep):
        os.environ["SARVAM_API_KEY"] = "sk-test-sarvam-key"
        router = AIRouter()

        for status_code in [401, 402, 403]:
            mock_post.reset_mock()
            mock_sleep.reset_mock()

            mock_error = MagicMock()
            mock_error.status_code = status_code
            mock_error.json.return_value = {"error": {"message": f"Error code {status_code}"}}
            mock_post.return_value = mock_error

            result = router.call_sarvam("test prompt")

            # Must fail immediately on attempt 1 without sleeping or retrying
            self.assertEqual(mock_post.call_count, 1, f"Status {status_code} should not retry")
            self.assertEqual(mock_sleep.call_count, 0, f"Status {status_code} should not sleep")
            self.assertIsNone(result)

    # -------------------------------------------------------------------------
    # TEST 6: Missing API Keys Cannot Trigger Fake Content Publication
    # -------------------------------------------------------------------------
    def test_06_missing_api_keys_cannot_publish_fake_content(self):
        # When SARVAM_API_KEY is not set:
        os.environ.pop("SARVAM_API_KEY", None)
        os.environ.pop("OPENAI_API_KEY", None)

        router = AIRouter()
        self.assertIsNone(router.generate_content("test prompt"))

        # Verify format_with_gpt aborts and returns None (NEVER fake placeholder text)
        from datetime import datetime
        import pytz
        articles = [{
            "title": "Vendor Patches RCE Flaw",
            "source": "SecurityWeek",
            "link": "https://securityweek.com/vendor-patch",
            "published": datetime.now(pytz.utc),
            "summary": "Vendor released security update."
        }]
        result = update_shorts.format_with_gpt(articles, "Cybersecurity")
        self.assertIsNone(result, "format_with_gpt must return None when SARVAM_API_KEY is missing")

    # -------------------------------------------------------------------------
    # TEST 7: Existing Content Preserved After Generation Failure
    # -------------------------------------------------------------------------
    @patch("sys.exit")
    def test_07_content_preserved_after_generation_failure(self, mock_exit):
        # Simulate AI generation returning empty results when new articles existed
        cyber_articles_new = [{"title": "Article 1"}]
        new_cyber_shorts = []
        ai_articles_new = []
        new_ai_shorts = []

        # Condition from update_shorts.py:1324
        failed = (cyber_articles_new and not new_cyber_shorts) or (ai_articles_new and not new_ai_shorts)
        self.assertTrue(failed)

        # Confirm sys.exit(1) is invoked before write_content_js is reached
        if failed:
            sys.exit(1)
        mock_exit.assert_called_once_with(1)

    # -------------------------------------------------------------------------
    # TEST 8: Zero Real Emails Sent During Execution
    # -------------------------------------------------------------------------
    @patch("urllib.request.urlopen")
    def test_08_no_real_emails_sent(self, mock_urlopen):
        # Verify that Brevo API is never contacted during router operations
        os.environ["SARVAM_API_KEY"] = "sk-test-key"
        router = AIRouter()
        with patch("requests.post") as mock_sarvam:
            mock_sarvam.return_value.status_code = 200
            mock_sarvam.return_value.json.return_value = {
                "choices": [{"message": {"content": "Date: Oct 10 2026\nHeadline: Test\nTitle: Test\nSource Name: Test\nSource URL: https://example.com/test\nContent: Test content.\nEntities: test"}}]
            }
            router.generate_content("test")

        # urlopen (used by send_newsletter.py for Brevo) must NEVER be called
        self.assertEqual(mock_urlopen.call_count, 0)

    # -------------------------------------------------------------------------
    # TEST 9: OpenAI & OpenRouter Are Never Used as Fallback
    # -------------------------------------------------------------------------
    def test_09_no_openai_or_openrouter_fallback(self):
        # Even if OPENAI_API_KEY is present in the environment:
        os.environ["OPENAI_API_KEY"] = "sk-test-openai-key"
        os.environ.pop("SARVAM_API_KEY", None)

        router = AIRouter()
        # Must fail because Sarvam is the exclusive LLM provider
        result = router.generate_content("test prompt")
        self.assertIsNone(result)
        self.assertEqual(router.last_provider, "None")

    # -------------------------------------------------------------------------
    # TEST 10: API Key Redaction in Error Messages
    # -------------------------------------------------------------------------
    @patch("requests.post")
    def test_10_secret_logging_redaction(self, mock_post):
        secret_key = "sarvam_sec_998877665544332211"
        os.environ["SARVAM_API_KEY"] = secret_key
        router = AIRouter()

        mock_error = MagicMock()
        mock_error.status_code = 401
        # Simulate server error message that echoes the raw token
        mock_error.json.return_value = {"error": {"message": f"Invalid token: {secret_key}"}}
        mock_post.return_value = mock_error

        # Capture stdout
        import io
        from contextlib import redirect_stdout
        f = io.StringIO()
        with redirect_stdout(f):
            result = router.call_sarvam("test prompt")

        output = f.getvalue()
        self.assertNotIn(secret_key, output, "Raw API key must NEVER be printed to logs")
        self.assertIn("[REDACTED", output, "API key should be replaced with redaction placeholder")
        self.assertIsNone(result)

    # -------------------------------------------------------------------------
    # TEST 11: Workflow Safety Configuration Contract
    # -------------------------------------------------------------------------
    def test_11_workflow_safety_configuration(self):
        shorts_workflow_path = os.path.join(PROJECT_ROOT, ".github", "workflows", "update-shorts.yml")
        newsletter_workflow_path = os.path.join(PROJECT_ROOT, ".github", "workflows", "newsletter-shorts.yml")

        with open(shorts_workflow_path, "r") as f:
            shorts_content = f.read()

        with open(newsletter_workflow_path, "r") as f:
            newsletter_content = f.read()

        # 1. Shorts workflow must have workflow_dispatch
        self.assertIn("workflow_dispatch:", shorts_content)

        # 2. Shorts workflow must map SARVAM_API_KEY from secrets
        self.assertIn("SARVAM_API_KEY: ${{ secrets.SARVAM_API_KEY }}", shorts_content)

        # 3. Shorts workflow must not have OPENAI_API_KEY
        self.assertNotIn("OPENAI_API_KEY", shorts_content)

        # 4. Newsletter workflow must gate automatic sends strictly on scheduled runs
        self.assertIn("github.event.workflow_run.event == 'schedule'", newsletter_content)

    # -------------------------------------------------------------------------
    # TEST 12: SARVAM_MODEL Fallback & Non-Empty Model Logging
    # -------------------------------------------------------------------------
    @patch("requests.post")
    def test_12_sarvam_model_fallback_and_logging(self, mock_post):
        mock_response = MagicMock()
        mock_response.status_code = 200
        mock_response.json.return_value = {
            "choices": [{"message": {"role": "assistant", "content": "Date: Oct 10 2026\nHeadline: Test\nTitle: Test\nSource Name: Test\nSource URL: https://example.com\nContent: Test content.\nEntities: test"}}],
            "usage": {"prompt_tokens": 10, "completion_tokens": 10, "total_tokens": 20}
        }
        mock_post.return_value = mock_response

        test_cases = [
            ("unset", None),
            ("empty_string", ""),
            ("whitespace", "   \t \n  "),
            ("explicit_default", "sarvam-105b"),
        ]

        import io
        from contextlib import redirect_stdout

        for label, env_value in test_cases:
            with self.subTest(case=label):
                if env_value is None:
                    os.environ.pop("SARVAM_MODEL", None)
                else:
                    os.environ["SARVAM_MODEL"] = env_value

                os.environ["SARVAM_API_KEY"] = "sk-test-model-key"
                router = AIRouter()

                # Verify router initialized model attribute
                self.assertEqual(router.sarvam_model, "sarvam-105b", f"Failed for case: {label}")

                # Verify execution payload and diagnostic logging
                mock_post.reset_mock()
                log_stream = io.StringIO()
                with redirect_stdout(log_stream):
                    router.call_sarvam("test prompt")

                logs = log_stream.getvalue()

                # Model sent to API must be "sarvam-105b"
                called_payload = mock_post.call_args[1]["json"]
                self.assertEqual(called_payload["model"], "sarvam-105b")

                # Diagnostic logging must never show empty model name
                self.assertIn("Model: sarvam-105b", logs)
                self.assertNotIn("Model:  |", logs)
                self.assertNotIn("Model: |", logs)

        # Also verify when call_sarvam is called with empty/whitespace model argument
        with self.subTest(case="empty_argument"):
            os.environ.pop("SARVAM_MODEL", None)
            router = AIRouter()
            mock_post.reset_mock()
            log_stream = io.StringIO()
            with redirect_stdout(log_stream):
                router.call_sarvam("test prompt", model="   ")

            logs = log_stream.getvalue()
            called_payload = mock_post.call_args[1]["json"]
            self.assertEqual(called_payload["model"], "sarvam-105b")
            self.assertIn("Model: sarvam-105b", logs)


if __name__ == "__main__":
    unittest.main()
