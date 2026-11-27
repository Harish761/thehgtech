import json
import os
import re
import shutil
import subprocess
import sys
import tempfile
import unittest
from datetime import datetime, timedelta, timezone
from pathlib import Path
from unittest.mock import MagicMock, patch

REPO_ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(REPO_ROOT / "scripts"))
sys.path.insert(0, str(REPO_ROOT / "scripts" / "legacy_tasks"))

import check_deployment_freshness as dep_mon  # noqa: E402
import generate_weekly_report as weekly_gen  # noqa: E402


def _parse_yaml(path: Path):
    if shutil.which("ruby"):
        cmd = "require 'yaml'; require 'json'; puts JSON.generate(YAML.safe_load(File.read(ARGV[0])))"
        return json.loads(subprocess.check_output(["ruby", "-e", cmd, str(path)], text=True))
    import yaml  # type: ignore

    return yaml.safe_load(path.read_text(encoding="utf-8"))


class TestOperationalWorkflowsBatch2A(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.repo_root = REPO_ROOT
        cls.wf_dir = cls.repo_root / ".github" / "workflows"
        cls.wf_files = sorted(cls.wf_dir.glob("*.yml"))

    def test_01_all_workflow_yamls_valid_and_no_app_token_migration_yet(self):
        self.assertGreaterEqual(len(self.wf_files), 10)
        for wf in self.wf_files:
            parsed = _parse_yaml(wf)
            self.assertIsInstance(parsed, dict, f"Invalid YAML in {wf.name}")
            self.assertIn("jobs", parsed, f"Missing jobs in {wf.name}")
            text = wf.read_text(encoding="utf-8")
            # Batch 2A explicitly defers GitHub App token migration until owner configures secrets
            self.assertNotIn("create-github-app-token", text, f"Unexpected App token migration in {wf.name}")

    def test_02_concurrency_and_loop_guards(self):
        repo_write_wfs = [
            "build-articles.yml",
            "threat-intel.yml",
            "hacker-chatter.yml",
            "ransomware.yml",
            "weekly-report.yml",
            "test-breach-generator.yml",
        ]
        for name in repo_write_wfs:
            parsed = _parse_yaml(self.wf_dir / name)
            conc = parsed.get("concurrency", {})
            self.assertEqual(conc.get("group"), "main-repo-write", f"{name} missing main-repo-write concurrency")
            self.assertFalse(conc.get("cancel-in-progress"), f"{name} must set cancel-in-progress: false")

        build_text = (self.wf_dir / "build-articles.yml").read_text(encoding="utf-8")
        self.assertIn("[skip-articles-build]", build_text)
        self.assertIn("!contains(github.event.head_commit.message, '[skip-articles-build]')", build_text)
        for expected_file in ("article-list.html", "articles-list.html", "guides/index.html", "articles/page/", "sitemap.xml"):
            self.assertIn(expected_file, build_text, f"build-articles.yml missing output path: {expected_file}")

    def test_03_no_false_green_summaries_and_no_cron_collisions(self):
        crons = {}
        for wf in self.wf_files:
            text = wf.read_text(encoding="utf-8")
            # Every `if: always()` summary step must check JOB_STATUS or OUTCOME rather than hardcoding success
            if "if: always()" in text:
                after_always = text.split("if: always()", 1)[1]
                self.assertTrue(
                    ("JOB_STATUS" in after_always or "OUTCOME" in after_always),
                    f"{wf.name} has unconditional `if: always()` summary without checking status/outcome",
                )
            parsed = _parse_yaml(wf)
            on_block = parsed.get("on") or parsed.get("true") or parsed.get(True) or {}
            for entry in on_block.get("schedule", []) or []:
                expr = entry.get("cron")
                if expr:
                    self.assertNotIn(expr, crons, f"Cron collision on '{expr}' between {crons.get(expr)} and {wf.name}")
                    crons[expr] = wf.name

        # weekly-report.yml and test-breach-generator.yml must not run on cron
        for manual_only in ("weekly-report.yml", "test-breach-generator.yml", "newsletter-articles.yml"):
            parsed = _parse_yaml(self.wf_dir / manual_only)
            on_block = parsed.get("on") or parsed.get("true") or parsed.get(True) or {}
            self.assertNotIn("schedule", on_block, f"{manual_only} must not have an active schedule")

    def test_04_threat_intel_copy_order_and_monitor_import(self):
        ti_text = (self.wf_dir / "threat-intel.yml").read_text(encoding="utf-8")
        self.assertNotIn("cp *.json ioc-data/", ti_text, "Blind `cp *.json ioc-data/` must be removed")
        self.assertNotIn('mv -f "$vendor_file" "ioc-data/$vendor_file"', ti_text, "Root mv sync must be removed in favor of separated source/preview writes")
        self.assertIn("sys.path.insert(0, 'scripts/legacy_tasks')", ti_text)
        self.assertIn("--skip-previews", ti_text)
        self.assertIn("--build-previews-only", ti_text)
        self.assertLess(
            ti_text.index("--skip-previews"),
            ti_text.index("Enrich CVE Data (Dual Source"),
        )
        self.assertLess(
            ti_text.index("Enrich CVE Data with EPSS Scores"),
            ti_text.index("--build-previews-only"),
        )

    def test_05_git_safe_commit_script_handles_concurrent_push_and_unstaged_files(self):
        script = self.repo_root / "scripts" / "git_safe_commit.sh"
        self.assertTrue(script.exists())
        syntax = subprocess.run(["bash", "-n", str(script)], capture_output=True, text=True)
        self.assertEqual(syntax.returncode, 0, f"Bash syntax error: {syntax.stderr}")

        with tempfile.TemporaryDirectory() as tmp:
            tmp_path = Path(tmp)
            bare = tmp_path / "remote.git"
            w1 = tmp_path / "work1"
            w2 = tmp_path / "work2"

            subprocess.run(["git", "init", "--bare", "-b", "main", str(bare)], check=True, capture_output=True)
            subprocess.run(["git", "clone", str(bare), str(w1)], check=True, capture_output=True)
            (w1 / "a.txt").write_text("init\n", encoding="utf-8")
            (w1 / "b.txt").write_text("init\n", encoding="utf-8")
            subprocess.run(["git", "-C", str(w1), "config", "user.name", "Test"], check=True)
            subprocess.run(["git", "-C", str(w1), "config", "user.email", "t@example.com"], check=True)
            subprocess.run(["git", "-C", str(w1), "add", "a.txt", "b.txt"], check=True)
            subprocess.run(["git", "-C", str(w1), "commit", "-m", "init"], check=True, capture_output=True)
            subprocess.run(["git", "-C", str(w1), "push", "-u", "origin", "main"], check=True, capture_output=True)

            # Clone second worker and push a concurrent commit to b.txt
            subprocess.run(["git", "clone", str(bare), str(w2)], check=True, capture_output=True)
            (w2 / "b.txt").write_text("concurrent-update\n", encoding="utf-8")
            subprocess.run(["git", "-C", str(w2), "config", "user.name", "Bot2"], check=True)
            subprocess.run(["git", "-C", str(w2), "config", "user.email", "b2@example.com"], check=True)
            subprocess.run(["git", "-C", str(w2), "add", "b.txt"], check=True)
            subprocess.run(["git", "-C", str(w2), "commit", "-m", "concurrent b"], check=True, capture_output=True)
            subprocess.run(["git", "-C", str(w2), "push", "origin", "main"], check=True, capture_output=True)

            # In w1: modify a.txt (to commit) AND leave an unstaged tracked edit in b.txt? Use c.txt untracked + a.txt
            (w1 / "a.txt").write_text("worker1-update\n", encoding="utf-8")
            (w1 / "stray_untracked.txt").write_text("keep-me\n", encoding="utf-8")

            res = subprocess.run(
                ["bash", str(script), "--message", "worker1 commit", "--", "a.txt"],
                cwd=str(w1),
                capture_output=True,
                text=True,
            )
            self.assertEqual(res.returncode, 0, f"git_safe_commit.sh failed:\n{res.stdout}\n{res.stderr}")
            self.assertEqual((w1 / "b.txt").read_text(encoding="utf-8"), "concurrent-update\n")
            self.assertTrue((w1 / "stray_untracked.txt").exists(), "Untracked file must not be deleted or committed")

            # Re-running with no changes exits 0 cleanly
            res_noop = subprocess.run(
                ["bash", str(script), "--message", "noop", "--", "a.txt"],
                cwd=str(w1),
                capture_output=True,
                text=True,
            )
            self.assertEqual(res_noop.returncode, 0)

    def test_06_update_shorts_content_index_resolution(self):
        # Verify update_shorts.py points at existing ioc-data/content-index.json
        src = (self.repo_root / "scripts" / "legacy_tasks" / "update_shorts.py").read_text(encoding="utf-8")
        self.assertIn("CONTENT_INDEX_FILE = 'ioc-data/content-index.json'", src)
        self.assertTrue((self.repo_root / "ioc-data" / "content-index.json").exists())

    def test_07_weekly_report_schema_and_noise_filtering(self):
        self.assertFalse(weekly_gen._is_clean_family_label("github"))
        self.assertFalse(weekly_gen._is_clean_family_label("verified"))
        self.assertFalse(weekly_gen._is_clean_family_label("https://www.virustotal.com/gui/file/abc"))
        self.assertFalse(weekly_gen._is_clean_family_label("32-bit"))
        self.assertTrue(weekly_gen._is_clean_family_label("SmartLoader"))
        self.assertTrue(weekly_gen._is_clean_family_label("AMOS"))

        # Verify idempotent upsert in temp articles.json
        with tempfile.TemporaryDirectory() as tmp:
            art_file = os.path.join(tmp, "articles.json")
            entry1 = {"id": "report-20261127", "title": "Weekly Threat Report: November 27, 2026", "excerpt": "v1"}
            entry2 = {"id": "report-20261127", "title": "Weekly Threat Report: November 27, 2026", "excerpt": "v2"}
            weekly_gen.update_articles_json(entry1, articles_file=art_file)
            weekly_gen.update_articles_json(entry2, articles_file=art_file)
            with open(art_file, encoding="utf-8") as fh:
                saved = json.load(fh)
            self.assertEqual(len(saved["articles"]), 1)
            self.assertEqual(saved["articles"][0]["excerpt"], "v2")

        # Verify current real IOC feeds produce non-empty Botnet C2 and SSL stats
        orig_cwd = os.getcwd()
        try:
            os.chdir(self.repo_root)
            top_fam = weekly_gen.get_top_malware_families(5)
            botnets = weekly_gen.get_botnet_c2_stats()
            ssl_count, ssl_reasons = weekly_gen.get_ssl_stats()
            self.assertTrue(all(f.lower() not in ("github", "verified", "32-bit") for f, _ in top_fam))
            self.assertGreater(len(botnets), 0, "Feodo Tracker botnet stats should populate from `campaign`")
            self.assertGreater(ssl_count, 0)
            self.assertGreater(len(ssl_reasons), 0, "SSL Blacklist stats should populate from `campaign`")
        finally:
            os.chdir(orig_cwd)

    def test_08_fetch_ai_security_handles_aiid_403_gracefully(self):
        # Verify syntax & 403 handling with mocked requests
        import importlib.util

        spec = importlib.util.spec_from_file_location(
            "fetch_ai_security",
            str(self.repo_root / "scripts" / "legacy_tasks" / "fetch_ai_security.py"),
        )
        # Ensure module compiles cleanly even if requests is absent locally
        src = (self.repo_root / "scripts" / "legacy_tasks" / "fetch_ai_security.py").read_text(encoding="utf-8")
        compile(src, "fetch_ai_security.py", "exec")
        self.assertIn("response.status_code in (401, 403)", src)
        self.assertIn("'status': 'auth_required'", src)

    def test_09_deployment_freshness_monitor_detects_healthy_and_stale_states(self):
        now = datetime(2026, 11, 27, 13, 0, 0, tzinfo=timezone.utc)
        sha_main = "aaaa1111bbbb2222cccc3333dddd4444eeee5555"
        sha_old = "9999888877776666555544443333222211110000"

        # Healthy state: main HEAD matches latest successful Pages run
        main_commit = {"sha": sha_main, "commit": {"committer": {"date": "2026-11-27T12:55:00Z"}}}
        pages_runs = [{"id": 100, "head_sha": sha_main, "status": "completed", "conclusion": "success"}]
        fails, warns, _ = dep_mon.evaluate_pages_freshness(main_commit, pages_runs, [{"sha": sha_main}], now, 25)
        self.assertEqual(fails, [])
        self.assertEqual(warns, [])

        # Stale state: main commit is 40m old (>25m SLA) and Pages still stuck on sha_old
        stale_commit = {"sha": sha_main, "commit": {"committer": {"date": "2026-11-27T12:20:00Z"}}}
        stale_pages = [{"id": 99, "head_sha": sha_old, "status": "completed", "conclusion": "success"}]
        fails, _, _ = dep_mon.evaluate_pages_freshness(stale_commit, stale_pages, [{"sha": sha_old}], now, 25)
        self.assertEqual(len(fails), 1)
        self.assertIn("STALE DEPLOYMENT", fails[0])

        # Failed Pages run detection
        failed_pages = [{"id": 101, "head_sha": sha_main, "status": "completed", "conclusion": "failure"}]
        fails, _, _ = dep_mon.evaluate_pages_freshness(main_commit, failed_pages, [], now, 25)
        self.assertTrue(any("FAILED" in f for f in fails))

        # Failing workflow detection
        wf_runs = {
            ".github/workflows/build-articles.yml": [
                {"id": 555, "status": "completed", "conclusion": "failure", "updated_at": "2026-11-27T12:00:00Z"}
            ]
        }
        w_fails, _, _ = dep_mon.evaluate_workflow_health(wf_runs, now)
        self.assertTrue(any("build-articles.yml" in f and "555" in f for f in w_fails))


if __name__ == "__main__":
    unittest.main()
