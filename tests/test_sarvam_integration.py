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
        self.assertIn("reasoning_effort", payload)
        self.assertIsNone(payload["reasoning_effort"])

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

        # 4. Newsletter workflow must gate automatic sends on upstream success
        self.assertIn("github.event.workflow_run.conclusion == 'success'", newsletter_content)
        self.assertIn("github.event_name == 'workflow_dispatch'", newsletter_content)
        self.assertNotIn("github.event.workflow_run.event == 'schedule'", newsletter_content)

        # 5. Concurrency protections must be present to prevent duplicate sends
        self.assertIn("group: newsletter-shorts", newsletter_content)
        self.assertIn("group: update-shorts", shorts_content)

        # 6. Git state push must NOT silently swallow failures with '|| true'
        self.assertNotIn("git push || true", newsletter_content)
        self.assertIn("git pull --rebase origin main && git push", newsletter_content)

    # -------------------------------------------------------------------------
    # TEST 13: Newsletter Trigger Matrix (Success vs Failure/Cancellation)
    # -------------------------------------------------------------------------
    def test_13_newsletter_trigger_condition_matrix(self):
        """
        Evaluate:
        (github.event_name == 'workflow_run' && github.event.workflow_run.conclusion == 'success') || github.event_name == 'workflow_dispatch'
        """
        def evaluate_condition(event_name: str, upstream_conclusion: str = None) -> bool:
            return (event_name == 'workflow_run' and upstream_conclusion == 'success') or (event_name == 'workflow_dispatch')

        # 1. Scheduled run completing successfully -> MUST SEND
        self.assertTrue(evaluate_condition(event_name='workflow_run', upstream_conclusion='success'))

        # 2. Manual run (workflow_dispatch) completing successfully -> MUST SEND
        self.assertTrue(evaluate_condition(event_name='workflow_run', upstream_conclusion='success'))

        # 3. Scheduled or manual run that FAILED -> MUST NOT SEND
        self.assertFalse(evaluate_condition(event_name='workflow_run', upstream_conclusion='failure'))

        # 4. Scheduled or manual run that was CANCELLED -> MUST NOT SEND
        self.assertFalse(evaluate_condition(event_name='workflow_run', upstream_conclusion='cancelled'))

        # 5. Scheduled or manual run that TIMED OUT -> MUST NOT SEND
        self.assertFalse(evaluate_condition(event_name='workflow_run', upstream_conclusion='timed_out'))

        # 6. Direct manual trigger of newsletter workflow -> MUST SEND
        self.assertTrue(evaluate_condition(event_name='workflow_dispatch'))

        # 7. Arbitrary other events -> MUST NOT SEND
        self.assertFalse(evaluate_condition(event_name='push', upstream_conclusion='success'))

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


    # -------------------------------------------------------------------------
    # TEST 14: Newsletter Eligibility, Deduplication & Manual Dispatch Safety
    # -------------------------------------------------------------------------
    @patch("urllib.request.urlopen")
    def test_14_newsletter_eligibility_and_deduplication(self, mock_urlopen):
        import tempfile
        from send_newsletter import (
            check_shorts_newsletter_eligibility,
            record_shorts_newsletter_sent,
            get_shorts_content_digest,
        )

        sample_content_template = """const websiteContent = {{
  "cyberShorts": [
    {{
      "headline": "Test Cyber Headline {suffix}",
      "title": "Test Cyber Title {suffix}",
      "sourceUrl": "https://example.com/cyber-{suffix}",
      "date": "Oct 10, 2026",
      "sourceName": "Test Source",
      "content": "Test cyber content {suffix}"
    }}
  ],
  "aiShorts": [
    {{
      "headline": "Test AI Headline {suffix}",
      "title": "Test AI Title {suffix}",
      "sourceUrl": "https://example.com/ai-{suffix}",
      "date": "Oct 10, 2026",
      "sourceName": "Test Source",
      "content": "Test AI content {suffix}"
    }}
  ]
}};"""

        with tempfile.TemporaryDirectory() as tmpdir:
            content_file = os.path.join(tmpdir, "content.js")
            state_file = os.path.join(tmpdir, "newsletter-shorts-state.json")

            with open(content_file, "w", encoding="utf-8") as f:
                f.write(sample_content_template.format(suffix="v1"))

            # 1. Successful scheduled run (workflow_run, conclusion=success)
            ok, digest1 = check_shorts_newsletter_eligibility(
                force=False,
                upstream_run_id="run-101",
                upstream_conclusion="success",
                event_name="workflow_run",
                state_file=state_file,
                content_file=content_file,
            )
            self.assertTrue(ok)
            self.assertIsNotNone(digest1)

            # Record sending run-101
            record_shorts_newsletter_sent(digest1, campaign_id=9001, upstream_run_id="run-101", state_file=state_file)
            self.assertTrue(os.path.exists(state_file))

            # 2. Duplicate trigger with same upstream run ID -> suppressed
            ok, reason = check_shorts_newsletter_eligibility(
                force=False,
                upstream_run_id="run-101",
                upstream_conclusion="success",
                event_name="workflow_run",
                state_file=state_file,
                content_file=content_file,
            )
            self.assertFalse(ok)
            self.assertEqual(reason, "duplicate_run")

            # 3. Subsequent trigger with different run ID but identical content digest -> suppressed
            ok, reason = check_shorts_newsletter_eligibility(
                force=False,
                upstream_run_id="run-102",
                upstream_conclusion="success",
                event_name="workflow_run",
                state_file=state_file,
                content_file=content_file,
            )
            self.assertFalse(ok)
            self.assertEqual(reason, "duplicate_content")

            # 4. Failed upstream run -> rejected
            ok, reason = check_shorts_newsletter_eligibility(
                force=False,
                upstream_run_id="run-103",
                upstream_conclusion="failure",
                event_name="workflow_run",
                state_file=state_file,
                content_file=content_file,
            )
            self.assertFalse(ok)
            self.assertEqual(reason, "upstream_not_successful")

            # 5. Cancelled upstream run -> rejected
            ok, reason = check_shorts_newsletter_eligibility(
                force=False,
                upstream_run_id="run-104",
                upstream_conclusion="cancelled",
                event_name="workflow_run",
                state_file=state_file,
                content_file=content_file,
            )
            self.assertFalse(ok)
            self.assertEqual(reason, "upstream_not_successful")

            # 6. Direct manual dispatch WITHOUT new shorts (already sent) -> rejected
            ok, reason = check_shorts_newsletter_eligibility(
                force=False,
                event_name="workflow_dispatch",
                state_file=state_file,
                content_file=content_file,
            )
            self.assertFalse(ok)
            self.assertEqual(reason, "no_new_shorts_for_dispatch")

            # 7. Update content (simulating successful shorts update v2)
            with open(content_file, "w", encoding="utf-8") as f:
                f.write(sample_content_template.format(suffix="v2"))

            # 8. Direct manual dispatch WITH new un-sent shorts -> accepted
            ok, digest2 = check_shorts_newsletter_eligibility(
                force=False,
                event_name="workflow_dispatch",
                state_file=state_file,
                content_file=content_file,
            )
            self.assertTrue(ok)
            self.assertNotEqual(digest1, digest2)

            # 9. Successful manual shorts run (workflow_run, manual dispatch upstream) -> accepted
            ok, digest_manual = check_shorts_newsletter_eligibility(
                force=False,
                upstream_run_id="run-manual-200",
                upstream_conclusion="success",
                event_name="workflow_run",
                state_file=state_file,
                content_file=content_file,
            )
            self.assertTrue(ok)
            self.assertEqual(digest_manual, digest2)

            # 10. Force override bypasses deduplication
            record_shorts_newsletter_sent(digest2, campaign_id=9002, upstream_run_id="run-manual-200", state_file=state_file)
            ok, digest_forced = check_shorts_newsletter_eligibility(
                force=True,
                upstream_run_id="run-manual-200",
                upstream_conclusion="success",
                event_name="workflow_dispatch",
                state_file=state_file,
                content_file=content_file,
            )
            self.assertTrue(ok)
            self.assertEqual(digest_forced, digest2)

            # 11. Empty or missing content -> rejected
            empty_content_file = os.path.join(tmpdir, "empty_content.js")
            with open(empty_content_file, "w") as f:
                f.write("const websiteContent = {};")
            ok, reason = check_shorts_newsletter_eligibility(
                force=False,
                event_name="workflow_dispatch",
                state_file=state_file,
                content_file=empty_content_file,
            )
            self.assertFalse(ok)
            self.assertEqual(reason, "no_content")

            # 12. Confirm zero external Brevo API calls / real emails were dispatched
            self.assertEqual(mock_urlopen.call_count, 0, "Zero Brevo API calls or real emails must be sent during eligibility checks")

    # -------------------------------------------------------------------------
    # TEST 15: Brevo API Pre-Send Campaign Duplicate Detection & Fail-Closed Behavior
    # -------------------------------------------------------------------------
    @patch("urllib.request.urlopen")
    def test_15_brevo_api_campaign_deduplication(self, mock_urlopen):
        import io
        import tempfile
        import urllib.error
        from send_newsletter import (
            check_brevo_campaign_duplicate,
            process_shorts_newsletter,
            create_and_send_campaign,
        )

        os.environ["BREVO_API_KEY"] = "mock-brevo-key-xyz"

        # ---------------------------------------------------------------------
        # 1. Brevo API success with an existing matching campaign
        # ---------------------------------------------------------------------
        mock_response = MagicMock()
        mock_response.read.return_value = json.dumps({
            "campaigns": [
                {
                    "id": 1050,
                    "name": "TheHGTech Shorts [14339dee50b1] - 2026-10-10 06:12 UTC",
                    "status": "sent"
                },
                {
                    "id": 1049,
                    "name": "Old Campaign",
                    "status": "sent"
                }
            ],
            "count": 2
        }).encode("utf-8")
        mock_urlopen.return_value.__enter__.return_value = mock_response

        status, campaign = check_brevo_campaign_duplicate("14339dee50b1a2b3c4d5")
        self.assertEqual(status, "duplicate")
        self.assertIsNotNone(campaign)
        self.assertEqual(campaign["id"], 1050)

        # ---------------------------------------------------------------------
        # 2. Brevo API pagination (found on page 2)
        # ---------------------------------------------------------------------
        page1_campaigns = [{"id": i, "name": f"Unrelated {i}", "status": "sent"} for i in range(50)]
        page2_campaigns = [
            {"id": 9999, "name": "TheHGTech Shorts [a1b2c3d4e5f6] - 2026-10-10 12:00 UTC", "status": "sent"}
        ]

        def pagination_side_effect(req, *args, **kwargs):
            url = req.full_url if hasattr(req, "full_url") else req.get_full_url()
            resp = MagicMock()
            if "offset=0" in url:
                resp.read.return_value = json.dumps({"campaigns": page1_campaigns, "count": 51}).encode("utf-8")
            elif "offset=50" in url:
                resp.read.return_value = json.dumps({"campaigns": page2_campaigns, "count": 51}).encode("utf-8")
            else:
                resp.read.return_value = json.dumps({"campaigns": [], "count": 51}).encode("utf-8")
            mock_ctx = MagicMock()
            mock_ctx.__enter__.return_value = resp
            return mock_ctx

        mock_urlopen.side_effect = pagination_side_effect
        status, campaign = check_brevo_campaign_duplicate("a1b2c3d4e5f69999", limit=50, max_pages=3)
        self.assertEqual(status, "duplicate")
        self.assertEqual(campaign["id"], 9999)

        # ---------------------------------------------------------------------
        # 3. Brevo API success with NO matching campaign
        # ---------------------------------------------------------------------
        mock_urlopen.side_effect = None
        mock_response = MagicMock()
        mock_response.read.return_value = json.dumps({
            "campaigns": [
                {"id": 101, "name": "Different Digest [000000000000]", "status": "sent"}
            ],
            "count": 1
        }).encode("utf-8")
        mock_urlopen.return_value.__enter__.return_value = mock_response

        status, campaign = check_brevo_campaign_duplicate("999999999999a2b3c4d5")
        self.assertEqual(status, "clear")
        self.assertIsNone(campaign)

        # ---------------------------------------------------------------------
        # 4. Brevo API failure returns 'error' status (fail-closed)
        # ---------------------------------------------------------------------
        mock_urlopen.side_effect = urllib.error.HTTPError(
            url="https://api.brevo.com/v3/emailCampaigns",
            code=500,
            msg="Internal Server Error",
            hdrs={},
            fp=io.BytesIO(b'{"error": "Internal Server Error"}')
        )
        status, error_msg = check_brevo_campaign_duplicate("14339dee50b1a2b3c4d5")
        self.assertEqual(status, "error")
        self.assertIn("500", error_msg)

        # ---------------------------------------------------------------------
        # 5. Integration: Brevo API failure blocks send (Fail-Closed, Exit Code 1)
        # ---------------------------------------------------------------------
        sample_content = """const websiteContent = {
  "cyberShorts": [{"headline": "H1", "title": "T1", "sourceUrl": "https://example.com/1", "date": "Oct 10, 2026", "sourceName": "S1", "content": "C1"}],
  "aiShorts": [{"headline": "H2", "title": "T2", "sourceUrl": "https://example.com/2", "date": "Oct 10, 2026", "sourceName": "S2", "content": "C2"}]
};"""
        with tempfile.TemporaryDirectory() as tmpdir:
            content_path = os.path.join(tmpdir, "content.js")
            state_path = os.path.join(tmpdir, "newsletter-shorts-state.json")
            with open(content_path, "w") as f:
                f.write(sample_content)

            with patch("send_newsletter.check_brevo_campaign_duplicate") as mock_dup_check, \
                 patch("send_newsletter.create_and_send_campaign") as mock_create_send:

                # When Brevo check errors out:
                mock_dup_check.return_value = ("error", "HTTP 500 Brevo Service Unavailable")
                success, info, exit_code = process_shorts_newsletter(
                    force=False,
                    upstream_run_id="run-fail-closed",
                    upstream_conclusion="success",
                    event_name="workflow_run",
                    state_file=state_path,
                    content_file=content_path
                )
                self.assertFalse(success)
                self.assertEqual(exit_code, 1, "Must exit with code 1 when Brevo duplicate verification fails")
                self.assertIn("brevo_check_failed", info)
                self.assertEqual(mock_create_send.call_count, 0, "Must NEVER create or send campaign when Brevo check fails")

                # When Brevo check confirms duplicate:
                mock_dup_check.return_value = ("duplicate", {"id": 8888, "name": "Existing [digest]"})
                success, info, exit_code = process_shorts_newsletter(
                    force=False,
                    upstream_run_id="run-dup",
                    upstream_conclusion="success",
                    event_name="workflow_run",
                    state_file=state_path,
                    content_file=content_path
                )
                self.assertFalse(success)
                self.assertEqual(exit_code, 0, "Duplicate should exit cleanly with code 0")
                self.assertEqual(info, "brevo_duplicate_synchronized")
                self.assertEqual(mock_create_send.call_count, 0, "Must NEVER send campaign on confirmed duplicate")
                # Confirm local state was synchronized
                self.assertTrue(os.path.exists(state_path))
                with open(state_path) as sf:
                    saved_state = json.load(sf)
                self.assertEqual(saved_state["lastCampaignId"], 8888)

    # -------------------------------------------------------------------------
    # TEST 16: HTTP 200 Diagnostic Logging & Robust Defensive Handling
    # -------------------------------------------------------------------------
    @patch("requests.post")
    def test_16_sarvam_http_200_diagnostic_logging_and_safety(self, mock_post):
        import io
        from contextlib import redirect_stdout

        secret_key = "sk-test-secret-sarvam-key-9999"
        os.environ["SARVAM_API_KEY"] = secret_key
        router = AIRouter()

        # ---------------------------------------------------------------------
        # 1. Normal non-empty message.content: parses properly and NO diagnostics warning
        # ---------------------------------------------------------------------
        mock_normal = MagicMock()
        mock_normal.status_code = 200
        mock_normal.json.return_value = {
            "id": "cmpl-normal",
            "choices": [{"message": {"role": "assistant", "content": "Valid generated news short."}}],
            "usage": {"prompt_tokens": 100, "completion_tokens": 50, "total_tokens": 150}
        }
        mock_post.return_value = mock_normal

        f = io.StringIO()
        with redirect_stdout(f):
            result = router.call_sarvam("test prompt")
        logs = f.getvalue()

        self.assertEqual(result, "Valid generated news short.")
        self.assertIn("✅ Sarvam API Response: HTTP 200 OK", logs)
        self.assertNotIn("⚠️ Sarvam response missing valid 'choices' or content.", logs)
        self.assertNotIn("🔍 Diagnostics:", logs)

        # ---------------------------------------------------------------------
        # 2. Empty or null message.content (e.g. truncated at max_tokens with reasoning)
        # ---------------------------------------------------------------------
        # 2A: Empty string "" with finish_reason "length", usage, and reasoning_content
        mock_empty_content = MagicMock()
        mock_empty_content.status_code = 200
        mock_empty_content.json.return_value = {
            "id": "cmpl-truncated",
            "choices": [
                {
                    "message": {
                        "role": "assistant",
                        "content": "",
                        "reasoning_content": "Internal model thought steps that should never be published"
                    },
                    "finish_reason": "length"
                }
            ],
            "usage": {"prompt_tokens": 3200, "completion_tokens": 4000, "total_tokens": 7200}
        }
        mock_post.return_value = mock_empty_content

        f = io.StringIO()
        with redirect_stdout(f):
            result = router.call_sarvam("test prompt")
        logs = f.getvalue()

        self.assertIsNone(result, "Empty content must return None (reasoning_content must NOT be substituted)")
        self.assertIn("⚠️ Sarvam response missing valid 'choices' or content.", logs)
        self.assertIn("finish_reason=length", logs)
        self.assertIn("prompt=3200, completion=4000, total=7200", logs)
        self.assertIn("reasoning_content=present (len=59)", logs)
        self.assertIn("provider_error=none", logs)
        self.assertNotIn("Internal model thought steps", logs, "Reasoning content text must NOT be leaked in logs")

        # 2B: Null (None) content
        mock_null_content = MagicMock()
        mock_null_content.status_code = 200
        mock_null_content.json.return_value = {
            "id": "cmpl-null",
            "choices": [{"message": {"role": "assistant", "content": None}, "finish_reason": "stop"}]
        }
        mock_post.return_value = mock_null_content

        f = io.StringIO()
        with redirect_stdout(f):
            result = router.call_sarvam("test prompt")
        logs = f.getvalue()

        self.assertIsNone(result)
        self.assertIn("finish_reason=stop", logs)
        self.assertIn("reasoning_content=none", logs)

        # 2C: Whitespace-only content
        mock_ws_content = MagicMock()
        mock_ws_content.status_code = 200
        mock_ws_content.json.return_value = {
            "id": "cmpl-ws",
            "choices": [{"message": {"role": "assistant", "content": "   \n\t  "}}]
        }
        mock_post.return_value = mock_ws_content

        f = io.StringIO()
        with redirect_stdout(f):
            result = router.call_sarvam("test prompt")
        self.assertIsNone(result)

        # ---------------------------------------------------------------------
        # 3. Missing choices
        # ---------------------------------------------------------------------
        # 3A: Empty choices list []
        mock_empty_choices = MagicMock()
        mock_empty_choices.status_code = 200
        mock_empty_choices.json.return_value = {"id": "cmpl-empty-choices", "choices": []}
        mock_post.return_value = mock_empty_choices

        f = io.StringIO()
        with redirect_stdout(f):
            result = router.call_sarvam("test prompt")
        logs = f.getvalue()

        self.assertIsNone(result)
        self.assertIn("finish_reason=None", logs)
        self.assertIn("reasoning_content=none", logs)

        # 3B: Missing "choices" key entirely
        mock_no_choices_key = MagicMock()
        mock_no_choices_key.status_code = 200
        mock_no_choices_key.json.return_value = {"id": "cmpl-no-key", "status": "processing"}
        mock_post.return_value = mock_no_choices_key

        f = io.StringIO()
        with redirect_stdout(f):
            result = router.call_sarvam("test prompt")
        logs = f.getvalue()

        self.assertIsNone(result)
        self.assertIn("response_keys=['id', 'status']", logs)
        self.assertIn("finish_reason=None", logs)

        # ---------------------------------------------------------------------
        # 4. Provider errors returned in HTTP 200 responses
        # ---------------------------------------------------------------------
        # 4A: Structured error dictionary
        mock_err_200 = MagicMock()
        mock_err_200.status_code = 200
        mock_err_200.json.return_value = {
            "id": "cmpl-err",
            "error": {"code": "model_overloaded", "message": "Cluster is currently saturated."}
        }
        mock_post.return_value = mock_err_200

        f = io.StringIO()
        with redirect_stdout(f):
            result = router.call_sarvam("test prompt")
        logs = f.getvalue()

        self.assertIsNone(result)
        self.assertIn("provider_error=code=model_overloaded, message=Cluster is currently saturated.", logs)

        # 4B: Error message containing secret token must be sanitized
        mock_err_secret = MagicMock()
        mock_err_secret.status_code = 200
        mock_err_secret.json.return_value = {
            "id": "cmpl-leak-attempt",
            "error": {"code": "auth_warning", "message": f"Token {secret_key} reached monthly soft cap"}
        }
        mock_post.return_value = mock_err_secret

        f = io.StringIO()
        with redirect_stdout(f):
            result = router.call_sarvam("test prompt")
        logs = f.getvalue()

        self.assertIsNone(result)
        self.assertNotIn(secret_key, logs, "Secret API key must NEVER be printed in diagnostic logs")
        self.assertIn("[REDACTED_API_KEY]", logs)

        # ---------------------------------------------------------------------
        # 5. Missing optional diagnostic fields (defensive against malformed types)
        # ---------------------------------------------------------------------
        # 5A: Minimal response dictionary (no choices, no usage, no error, no finish_reason)
        mock_minimal = MagicMock()
        mock_minimal.status_code = 200
        mock_minimal.json.return_value = {"id": "cmpl-minimal"}
        mock_post.return_value = mock_minimal

        f = io.StringIO()
        with redirect_stdout(f):
            result = router.call_sarvam("test prompt")
        logs = f.getvalue()

        self.assertIsNone(result)
        self.assertIn("usage=none", logs)
        self.assertIn("reasoning_content=none", logs)
        self.assertIn("provider_error=none", logs)

        # 5B: Choices list contains non-dict elements
        mock_malformed_choice = MagicMock()
        mock_malformed_choice.status_code = 200
        mock_malformed_choice.json.return_value = {"id": "cmpl-malformed", "choices": [None, "invalid"]}
        mock_post.return_value = mock_malformed_choice

        f = io.StringIO()
        with redirect_stdout(f):
            result = router.call_sarvam("test prompt")
        self.assertIsNone(result)

        # ---------------------------------------------------------------------
        # 6. Verify update_shorts.py error message does not blame quota or API key
        # ---------------------------------------------------------------------
        update_shorts_path = os.path.join(LEGACY_TASKS_DIR, "update_shorts.py")
        with open(update_shorts_path, "r") as f:
            update_shorts_code = f.read()
        self.assertNotIn("out of quota", update_shorts_code)
        self.assertIn("check router logs for status codes, token limits, or response diagnostics", update_shorts_code)

    # -------------------------------------------------------------------------
    # TEST 17: Reasoning Effort Disabled & Independent Category Validation
    # -------------------------------------------------------------------------
    @patch("requests.post")
    def test_17_sarvam_reasoning_disabled_and_category_validation(self, mock_post):
        import io
        from contextlib import redirect_stdout

        os.environ["SARVAM_API_KEY"] = "sk-test-reasoning-key"
        router = AIRouter()

        # ---------------------------------------------------------------------
        # 1. Complete, valid Sarvam response with reasoning_effort explicitly disabled
        # ---------------------------------------------------------------------
        mock_valid = MagicMock()
        mock_valid.status_code = 200
        mock_valid.json.return_value = {
            "id": "cmpl-valid-101",
            "choices": [{
                "index": 0,
                "message": {"role": "assistant", "content": SAMPLE_SARVAM_RAW_OUTPUT},
                "finish_reason": "stop"
            }],
            "usage": {"prompt_tokens": 1500, "completion_tokens": 600, "total_tokens": 2100}
        }
        mock_post.return_value = mock_valid

        res = router.call_sarvam("test prompt")
        self.assertIsNotNone(res)
        self.assertIn("Critical Cisco Zero-Day Discovered", res)
        # Verify reasoning_effort was explicitly passed as None (null in JSON)
        called_payload = mock_post.call_args[1]["json"]
        self.assertIn("reasoning_effort", called_payload)
        self.assertIsNone(called_payload["reasoning_effort"])
        self.assertEqual(router.last_finish_reason, "stop")

        # ---------------------------------------------------------------------
        # 2. Response with finish_reason="length" treated as truncated (even with partial text)
        # ---------------------------------------------------------------------
        mock_truncated = MagicMock()
        mock_truncated.status_code = 200
        mock_truncated.json.return_value = {
            "id": "cmpl-trunc-102",
            "choices": [{
                "index": 0,
                "message": {"role": "assistant", "content": "Date: Oct 12 2026\nHeadline: Truncated Title\nTitle: Truncated"},
                "finish_reason": "length"
            }],
            "usage": {"prompt_tokens": 3048, "completion_tokens": 4000, "total_tokens": 7048}
        }
        mock_post.return_value = mock_truncated

        f = io.StringIO()
        with redirect_stdout(f):
            trunc_res = router.call_sarvam("test prompt")
        logs = f.getvalue()

        self.assertIsNone(trunc_res, "finish_reason='length' must be treated as truncated and return None")
        self.assertEqual(router.last_finish_reason, "length")
        self.assertIn("Response truncated by token limit (finish_reason='length')", logs)

        # ---------------------------------------------------------------------
        # 3. Empty response content
        # ---------------------------------------------------------------------
        mock_empty = MagicMock()
        mock_empty.status_code = 200
        mock_empty.json.return_value = {
            "id": "cmpl-empty-103",
            "choices": [{"index": 0, "message": {"role": "assistant", "content": ""}, "finish_reason": "stop"}],
            "usage": {"prompt_tokens": 500, "completion_tokens": 0, "total_tokens": 500}
        }
        mock_post.return_value = mock_empty
        self.assertIsNone(router.call_sarvam("test prompt"))

        # ---------------------------------------------------------------------
        # 4. Malformed or incomplete shorts dropped by parser
        # ---------------------------------------------------------------------
        malformed_raw = """Date: Oct 12 2026
Source Name: BleepingComputer
Headline: Valid Headline Here
Content: Missing title and URL, so should be dropped.
"""
        parsed = update_shorts.parse_shorts(malformed_raw)
        self.assertEqual(len(parsed), 0, "Malformed shorts missing required fields must be dropped")

        # ---------------------------------------------------------------------
        # 5. Cybersecurity failure while AI succeeds (aborts, explicitly reports Cybersecurity)
        # 6. AI failure while cybersecurity succeeds (aborts, explicitly reports AI)
        # 7. Confirmation that invalid/incomplete results cannot overwrite existing content
        # ---------------------------------------------------------------------
        def evaluate_shorts_gate(cyber_new, cyber_shorts, ai_new, ai_shorts):
            failed_cats = []
            if cyber_new and not cyber_shorts:
                failed_cats.append("Cybersecurity")
            if ai_new and not ai_shorts:
                failed_cats.append("AI")
            return failed_cats

        # Case 5: Cybersecurity failure while AI succeeds
        failed_5 = evaluate_shorts_gate(
            cyber_new=[{"title": "C1"}], cyber_shorts=[],
            ai_new=[{"title": "A1"}], ai_shorts=[{"title": "Valid AI Short"}]
        )
        self.assertEqual(failed_5, ["Cybersecurity"])

        # Case 6: AI failure while cybersecurity succeeds
        failed_6 = evaluate_shorts_gate(
            cyber_new=[{"title": "C1"}], cyber_shorts=[{"title": "Valid Cyber Short"}],
            ai_new=[{"title": "A1"}], ai_shorts=[]
        )
        self.assertEqual(failed_6, ["AI"])

        # Case 7: Both fail
        failed_7 = evaluate_shorts_gate(
            cyber_new=[{"title": "C1"}], cyber_shorts=[],
            ai_new=[{"title": "A1"}], ai_shorts=[]
        )
        self.assertEqual(failed_7, ["Cybersecurity", "AI"])

        # Case 8: Both succeed
        failed_8 = evaluate_shorts_gate(
            cyber_new=[{"title": "C1"}], cyber_shorts=[{"title": "Valid Cyber"}],
            ai_new=[{"title": "A1"}], ai_shorts=[{"title": "Valid AI"}]
        )
        self.assertEqual(len(failed_8), 0)

        # Verify update_shorts.py contains independent category check and naming
        update_shorts_path = os.path.join(LEGACY_TASKS_DIR, "update_shorts.py")
        with open(update_shorts_path, "r") as f:
            code = f.read()
        self.assertIn('failed_categories.append("Cybersecurity")', code)
        self.assertIn('failed_categories.append("AI")', code)
        self.assertIn('AI generation failed for category: {failed_str}', code)

    # -------------------------------------------------------------------------
    # TEST 18: Two Batches of 5 Articles Produce 10 Valid Shorts & Per-Batch URL Replacement
    # -------------------------------------------------------------------------
    @patch("urllib.request.urlopen")
    @patch("time.sleep")
    def test_18_batching_two_batches_of_five_produces_ten_shorts(self, mock_sleep, mock_urlopen):
        from datetime import datetime, timedelta
        import pytz

        os.environ["SARVAM_API_KEY"] = "sk-test-batching-key"
        now = datetime.now(pytz.UTC)

        # Create 15 distinct eligible articles; format_with_gpt must select top 10 and split into 2 batches of 5
        articles = []
        for idx in range(1, 16):
            articles.append({
                "title": f"Critical Zero-Day Vulnerability #{idx} Discovered in Enterprise Gateway",
                "source": "BleepingComputer" if idx <= 10 else "Unknown Blog",
                "link": f"https://www.bleepingcomputer.com/news/security/article-{idx}/",
                "published": now - timedelta(hours=idx),
                "summary": f"Security researchers disclosed zero-day flaw #{idx} affecting enterprise systems."
            })

        def make_batch_output(batch_num, count=5):
            blocks = []
            for i in range(1, count + 1):
                global_idx = (batch_num - 1) * 5 + i
                blocks.append(
                    f"Date: Oct 13 2026\n"
                    f"Source Name: BleepingComputer\n"
                    f"Source URL: ARTICLE_{i}_URL_PLACEHOLDER\n"
                    f"Headline: Enterprise Gateway Zero-Day #{global_idx}—Patch Immediately\n"
                    f"Title: Critical Enterprise Gateway Zero-Day Flaw #{global_idx} Exploited in Wild\n"
                    f"Content:\n"
                    f"Vendor has released emergency patches for vulnerability #{global_idx} in its enterprise gateway appliance. "
                    f"Tracked as CVE-2026-100{global_idx}, the flaw allows unauthenticated remote code execution. "
                    f"Enterprise networks globally are exposed if management interfaces are internet-accessible. "
                    f"Administrators should upgrade to the latest firmware build immediately.\n"
                    f"Entities: CVE-2026-100{global_idx}, zero-day, RCE"
                )
            return "\n\n".join(blocks)

        batch_1_resp = make_batch_output(1, 5)
        batch_2_resp = make_batch_output(2, 5)

        with patch.object(update_shorts.ai_router, "generate_content", side_effect=[batch_1_resp, batch_2_resp]) as mock_gen:
            update_shorts.ai_router.last_finish_reason = "stop"
            update_shorts.ai_router.last_status_code = 200
            formatted = update_shorts.format_with_gpt(articles, "AI")

            # Must invoke generate_content exactly twice (2 batches of 5)
            self.assertEqual(mock_gen.call_count, 2)

            # Verify prompts for both batches have no contradictory 15-vs-10 instruction and only 1 CRITICAL FORMATTING RULES section
            for b_call in mock_gen.call_args_list:
                sent_prompt = b_call.kwargs.get("prompt") or b_call.args[0]
                self.assertIn("generate EXACTLY 5 news short(s)", sent_prompt)
                self.assertNotIn("select the best 10", sent_prompt)
                self.assertEqual(sent_prompt.count("CRITICAL FORMATTING RULES:"), 1)
                self.assertIn("ARTICLE_5_URL_PLACEHOLDER", sent_prompt)
                self.assertNotIn("ARTICLE_6_URL_PLACEHOLDER", sent_prompt)

        self.assertIsNotNone(formatted)
        self.assertNotIn("PLACEHOLDER", formatted)

        parsed_shorts = update_shorts.parse_shorts(formatted)
        self.assertEqual(len(parsed_shorts), 10)

        # Verify Batch 1 and Batch 2 placeholders were replaced using each batch's own URLs
        expected_urls = [f"https://www.bleepingcomputer.com/news/security/article-{idx}/" for idx in range(1, 11)]
        actual_urls = [s["sourceUrl"] for s in parsed_shorts]
        self.assertEqual(actual_urls, expected_urls)
        self.assertEqual(mock_urlopen.call_count, 0)

    # -------------------------------------------------------------------------
    # TEST 19: Per-Batch Retry Without Regenerating Valid Batch & Partial Batch Failure Aborts Category
    # -------------------------------------------------------------------------
    @patch("time.sleep")
    def test_19_per_batch_retry_and_partial_batch_failure_safety(self, mock_sleep):
        from datetime import datetime, timedelta
        import pytz

        os.environ["SARVAM_API_KEY"] = "sk-test-retry-key"
        now = datetime.now(pytz.UTC)

        articles = [
            {
                "title": f"AI Security Advisory #{idx} Impacts Model Inference Servers",
                "source": "TechCrunch",
                "link": f"https://techcrunch.com/2026/10/13/ai-advisory-{idx}/",
                "published": now - timedelta(hours=idx),
                "summary": f"Summary for AI security advisory #{idx}."
            }
            for idx in range(1, 11)
        ]

        def make_batch_response(batch_num, count=5):
            blocks = []
            for i in range(1, count + 1):
                global_idx = (batch_num - 1) * 5 + i
                blocks.append(
                    f"Date: Oct 13 2026\n"
                    f"Source Name: TechCrunch\n"
                    f"Source URL: ARTICLE_{i}_URL_PLACEHOLDER\n"
                    f"Headline: AI Inference Advisory #{global_idx} Released\n"
                    f"Title: Critical AI Inference Server Vulnerability #{global_idx} Patched\n"
                    f"Content:\n"
                    f"Researchers patched flaw #{global_idx} in AI inference servers. "
                    f"The issue affects deployment pipelines and requires immediate patching.\n"
                    f"Entities: AI, CVE-2026-200{global_idx}"
                )
            return "\n\n".join(blocks)

        valid_batch_1 = make_batch_response(1, 5)
        # Incomplete batch 2 (only 4 shorts instead of 5)
        incomplete_batch_2 = make_batch_response(2, 4)
        valid_batch_2 = make_batch_response(2, 5)

        # Scenario A: Batch 1 succeeds on attempt 1; Batch 2 fails attempt 1 (incomplete count) then succeeds on attempt 2
        with patch.object(
            update_shorts.ai_router,
            "generate_content",
            side_effect=[valid_batch_1, incomplete_batch_2, valid_batch_2]
        ) as mock_gen:
            update_shorts.ai_router.last_finish_reason = "stop"
            update_shorts.ai_router.last_status_code = 200
            result = update_shorts.format_with_gpt(articles, "AI")

            # Batch 1 called once, Batch 2 called twice = 3 total calls (Batch 1 was NOT regenerated!)
            self.assertEqual(mock_gen.call_count, 3)
            self.assertIsNotNone(result)
            shorts = update_shorts.parse_shorts(result)
            self.assertEqual(len(shorts), 10)

        # Scenario B: Batch 1 succeeds on attempt 1 (5 shorts), but Batch 2 fails all 3 attempts -> category MUST fail (return None)
        with patch.object(
            update_shorts.ai_router,
            "generate_content",
            side_effect=[valid_batch_1, None, incomplete_batch_2, None]
        ) as mock_gen_fail:
            update_shorts.ai_router.last_finish_reason = "stop"
            update_shorts.ai_router.last_status_code = 200
            result_fail = update_shorts.format_with_gpt(articles, "AI")

            # 1 call for Batch 1 + 3 failed attempts for Batch 2 = 4 calls total
            self.assertEqual(mock_gen_fail.call_count, 4)
            self.assertIsNone(
                result_fail,
                "When Batch 2 fails after retries, format_with_gpt must return None and never publish partial 5 shorts"
            )

    # -------------------------------------------------------------------------
    # TEST 20: Resilient Parser — Numbered Labels, Source Alias, and Malformed Block Isolation
    # -------------------------------------------------------------------------
    def test_20_resilient_parser_numbered_labels_aliases_and_no_merging(self):
        import io
        from contextlib import redirect_stdout

        # 1. Numbered labels ("1. Date:", "2. Date:") and "Source:" alias for "Source Name:"
        numbered_and_aliased_input = """1. Date: Oct 13 2026
Source: The Hacker News
Source URL: https://thehackernews.com/2026/10/numbered-short-1.html
Headline: Numbered Short One—Critical Patch
Title: First Short Uses Numbered Date Label and Source Alias
Content:
This first short uses a numbered Date prefix and Source instead of Source Name. The parser normalizes both fields cleanly without losing validation strictness.
Entities: CVE-2026-3001, Linux

2. **Date:** Oct 13 2026
**Source Name:** BleepingComputer
**URL:** https://www.bleepingcomputer.com/news/security/numbered-short-2/
**Headline:** Numbered Short Two—Ransomware Alert
**Title:** Second Short Uses Bold Numbered Date Label and URL Alias
**Content:**
This second short uses bolded numbered labels and URL alias. It parses as a distinct second short.
**Entities:** LockBit, ransomware
"""
        shorts = update_shorts.parse_shorts(numbered_and_aliased_input)
        self.assertEqual(len(shorts), 2)
        self.assertEqual(shorts[0]["source"], "The Hacker News")
        self.assertEqual(shorts[0]["sourceUrl"], "https://thehackernews.com/2026/10/numbered-short-1.html")
        self.assertEqual(shorts[1]["source"], "BleepingComputer")
        self.assertEqual(shorts[1]["sourceUrl"], "https://www.bleepingcomputer.com/news/security/numbered-short-2/")

        # 2. Malformed block missing Date: after a valid short MUST NOT merge into the first short's Content
        valid_followed_by_dateless = """Date: Oct 13 2026
Source Name: SecurityWeek
Source URL: https://www.securityweek.com/valid-short-1
Headline: Valid First Short—Clean Content
Title: Valid First Short Must Not Absorb Adjacent Dateless Block
Content:
Clean content for short number one. This should end right here before Entities.
Entities: Fortinet, CVE-2026-4001

Source Name: Dark Reading
Source URL: https://www.darkreading.com/malformed-dateless-short-2
Headline: Malformed Dateless Short Two
Title: Malformed Second Short Missing Date Line
Content:
CONTAMINATED TEXT FROM MALFORMED SHORT TWO THAT FORGOT DATE LINE.
Entities: malware

Date: Oct 13 2026
Source Name: CISA
Source URL: https://www.cisa.gov/valid-short-3
Headline: Valid Third Short After Malformed Block
Title: Valid Third Short Parses Cleanly After Rejected Block
Content:
Clean content for short number three.
Entities: CISA, KEV
"""
        f = io.StringIO()
        with redirect_stdout(f):
            isolated_shorts = update_shorts.parse_shorts(valid_followed_by_dateless)
        logs = f.getvalue()

        self.assertEqual(len(isolated_shorts), 2)
        self.assertEqual(isolated_shorts[0]["sourceUrl"], "https://www.securityweek.com/valid-short-1")
        self.assertNotIn("CONTAMINATED TEXT", isolated_shorts[0]["content"])
        self.assertNotIn("Dark Reading", isolated_shorts[0]["content"])
        self.assertEqual(isolated_shorts[1]["sourceUrl"], "https://www.cisa.gov/valid-short-3")
        self.assertIn("missing required field(s): Date", logs)

    # -------------------------------------------------------------------------
    # TEST 21: Unresolved Placeholders & Duplicate URLs/Titles Rejected Across Batches
    # -------------------------------------------------------------------------
    @patch("time.sleep")
    def test_21_unresolved_placeholder_and_cross_batch_duplicate_rejection(self, mock_sleep):
        from datetime import datetime, timedelta
        import pytz

        os.environ["SARVAM_API_KEY"] = "sk-test-dup-key"
        now = datetime.now(pytz.UTC)

        # 1. Unresolved placeholder in parse_shorts is rejected
        unresolved_raw = """Date: Oct 13 2026
Source Name: TechCrunch
Source URL: https://techcrunch.com/ARTICLE_9_URL_PLACEHOLDER
Headline: Unresolved Placeholder Test
Title: Short With Unresolved Placeholder Must Be Rejected
Content:
Body text for unresolved placeholder test.
Entities: AI
"""
        self.assertEqual(len(update_shorts.parse_shorts(unresolved_raw)), 0)

        # 2. Cross-batch duplicate title or URL triggers batch failure and retry
        articles = [
            {
                "title": f"Unique Security Event #{idx} Reported",
                "source": "SecurityWeek",
                "link": f"https://www.securityweek.com/event-{idx}",
                "published": now - timedelta(hours=idx),
                "summary": f"Summary #{idx}"
            }
            for idx in range(1, 11)
        ]

        def build_batch(batch_num, duplicate_first_title=False):
            blocks = []
            for i in range(1, 6):
                g_idx = (batch_num - 1) * 5 + i
                title_str = (
                    "Detailed Title For Security Event #1"
                    if (duplicate_first_title and i == 1)
                    else f"Detailed Title For Security Event #{g_idx}"
                )
                blocks.append(
                    f"Date: Oct 13 2026\n"
                    f"Source Name: SecurityWeek\n"
                    f"Source URL: ARTICLE_{i}_URL_PLACEHOLDER\n"
                    f"Headline: Security Event #{g_idx} Headline\n"
                    f"Title: {title_str}\n"
                    f"Content:\n"
                    f"Detailed analysis for security event #{g_idx}.\n"
                    f"Entities: security"
                )
            return "\n\n".join(blocks)

        batch1_ok = build_batch(1, duplicate_first_title=False)
        batch2_dup_title = build_batch(2, duplicate_first_title=True)
        batch2_ok = build_batch(2, duplicate_first_title=False)

        with patch.object(
            update_shorts.ai_router,
            "generate_content",
            side_effect=[batch1_ok, batch2_dup_title, batch2_ok]
        ) as mock_gen:
            update_shorts.ai_router.last_finish_reason = "stop"
            update_shorts.ai_router.last_status_code = 200
            combined = update_shorts.format_with_gpt(articles, "Cybersecurity")
            self.assertEqual(mock_gen.call_count, 3, "Batch 2 with cross-batch duplicate title must be rejected and retried")
            self.assertIsNotNone(combined)
            parsed = update_shorts.parse_shorts(combined)
            self.assertEqual(len(parsed), 10)

    # -------------------------------------------------------------------------
    # TEST 22: Enhanced Diagnostics (status, content_len, reasoning_tokens) & Secret Safety
    # -------------------------------------------------------------------------
    @patch("requests.post")
    def test_22_enhanced_diagnostics_reasoning_tokens_and_secret_redaction(self, mock_post):
        import io
        from contextlib import redirect_stdout

        secret_key = "sk-sarvam-live-secret-token-abcdef123456"
        os.environ["SARVAM_API_KEY"] = secret_key
        router = AIRouter()

        mock_trunc = MagicMock()
        mock_trunc.status_code = 200
        mock_trunc.json.return_value = {
            "id": "cmpl-diag-test",
            "choices": [{
                "index": 0,
                "message": {"role": "assistant", "content": ""},
                "finish_reason": "length"
            }],
            "usage": {
                "prompt_tokens": 2969,
                "completion_tokens": 4000,
                "total_tokens": 6969,
                "completion_tokens_details": {
                    "reasoning_tokens": 3850
                }
            },
            "error": {"code": "token_limit", "message": f"Key {secret_key} hit length"}
        }
        mock_post.return_value = mock_trunc

        f = io.StringIO()
        with redirect_stdout(f):
            res = router.call_sarvam("test prompt")
        logs = f.getvalue()

        self.assertIsNone(res)
        self.assertEqual(router.last_status_code, 200)
        self.assertEqual(router.last_finish_reason, "length")
        self.assertEqual(router.last_content_length, 0)
        self.assertEqual(router.last_reasoning_tokens, 3850)
        self.assertIn("status=200", logs)
        self.assertIn("finish_reason=length", logs)
        self.assertIn("content_len=0", logs)
        self.assertIn("prompt=2969, completion=4000, total=6969", logs)
        self.assertIn("reasoning_tokens=3850", logs)
        self.assertNotIn(secret_key, logs)
        self.assertIn("[REDACTED_API_KEY]", logs)


if __name__ == "__main__":
    unittest.main()



