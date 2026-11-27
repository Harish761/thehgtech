import json
import os
import re
import sys
import tempfile
import unittest
from datetime import datetime, timedelta, timezone
from pathlib import Path
from unittest.mock import MagicMock, patch

REPO_ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(REPO_ROOT / "scripts"))
sys.path.insert(0, str(REPO_ROOT / "scripts" / "legacy_tasks"))

import fetch_threat_intel as fti  # noqa: E402
import update_hacker_chatter as uhc  # noqa: E402
from tests.test_jekyll_exclusions import _parse_config_yml, _simulate_jekyll_filter  # noqa: E402

VENDOR_SLUGS = [
    "openphish.json",
    "malware-bazaar.json",
    "spamhaus-drop.json",
    "cins-army.json",
    "blocklist-de.json",
    "urlhaus.json",
    "threatfox.json",
    "feodo-tracker.json",
    "ssl-blacklist.json",
]


class TestIOCAndChatterSeparation(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.repo_root = REPO_ROOT

    def test_01_source_preservation_and_preview_capping_on_large_fixture(self):
        """Verify 2,500-record dataset preserves all 2,500 records in source while capping preview to 1,000."""
        now_utc = datetime.now(timezone.utc)
        fixture_iocs = [
            {
                "type": "ip",
                "indicator": f"203[.]0[.]113[.]({i // 250}).{i % 250}",
                "description": f"Synthetic attacker #{i}",
                "timestamp": now_utc.strftime("%Y-%m-%d %H:%M UTC"),
                "source": "CINS Army",
                "sourceUrl": "http://cinsscore.com/",
                "tags": ["malicious-ip", "attacker"],
                "addedAt": (now_utc - timedelta(minutes=i)).isoformat(),
                "campaign": "CINS Threat List",
                "confidence": "High",
                "customAuditField": f"preserve-{i}",
            }
            for i in range(2500)
        ]
        expected_ids = {item["indicator"] for item in fixture_iocs}

        with tempfile.TemporaryDirectory() as tmp:
            src_dir = os.path.join(tmp, "data", "ioc-source")
            prv_dir = os.path.join(tmp, "ioc-data")
            vendors_data = {
                "CINS Army": {
                    "iocs": fixture_iocs,
                    "isStale": False,
                    "feedStatus": "active",
                }
            }
            fti.save_vendor_json_files(vendors_data, source_dir=src_dir, preview_dir=prv_dir, max_preview=1000)

            with open(os.path.join(src_dir, "cins-army.json"), encoding="utf-8") as sf:
                src_payload = json.load(sf)
            with open(os.path.join(prv_dir, "cins-army.json"), encoding="utf-8") as pf:
                prv_payload = json.load(pf)

            # Source must preserve ALL 2,500 records and all original fields
            self.assertEqual(len(src_payload["iocs"]), 2500)
            self.assertEqual(src_payload["totalCount"], 2500)
            self.assertEqual(src_payload["displayedCount"], 2500)
            self.assertFalse(src_payload["isCapped"])
            self.assertEqual({x["indicator"] for x in src_payload["iocs"]}, expected_ids)
            self.assertEqual(src_payload["iocs"][2499]["customAuditField"], "preserve-2499")

            # Preview must cap at 1,000 while reporting exact totalCount=2500
            self.assertEqual(len(prv_payload["iocs"]), 1000)
            self.assertEqual(prv_payload["totalCount"], 2500)
            self.assertEqual(prv_payload["displayedCount"], 1000)
            self.assertTrue(prv_payload["isCapped"])
            self.assertEqual(prv_payload["cappingStrategy"], "Recent threats + High-profile targets")
            prv_ids = {x["indicator"] for x in prv_payload["iocs"]}
            self.assertTrue(prv_ids.issubset(expected_ids))
            # Original indicator fields preserved in preview
            self.assertTrue(all("customAuditField" in x and "confidence" in x for x in prv_payload["iocs"]))

    def test_02_daily_ingestion_dedupe_expiry_and_daily_analytics_use_source(self):
        """Verify 7-day retention, deduplication, and run_daily() read from full data/ioc-source/, never truncated previews."""
        now_utc = datetime.now(timezone.utc)
        unexpired_old = [
            {
                "type": "url",
                "indicator": f"hxxps://retained-{i}[.]example/login",
                "description": "Active phishing URL",
                "timestamp": (now_utc - timedelta(days=2)).strftime("%Y-%m-%d %H:%M UTC"),
                "source": "OpenPhish",
                "sourceUrl": "https://openphish.com/",
                "tags": ["phishing", "live"],
                "addedAt": (now_utc - timedelta(days=2, minutes=i)).isoformat(),
                "campaign": "Generic Phishing",
                "confidence": "High (Active Feed)",
            }
            for i in range(1500)
        ]
        expired_old = [
            {
                "type": "url",
                "indicator": f"hxxps://expired-{i}[.]example/old",
                "description": "Expired phishing URL",
                "timestamp": (now_utc - timedelta(days=10)).strftime("%Y-%m-%d %H:%M UTC"),
                "source": "OpenPhish",
                "sourceUrl": "https://openphish.com/",
                "tags": ["phishing"],
                "addedAt": (now_utc - timedelta(days=10, minutes=i)).isoformat(),
                "campaign": "Generic Phishing",
                "confidence": "High",
            }
            for i in range(300)
        ]

        with tempfile.TemporaryDirectory() as tmp:
            orig_cwd = os.getcwd()
            try:
                os.chdir(tmp)
                os.makedirs("data/ioc-source", exist_ok=True)
                os.makedirs("ioc-data", exist_ok=True)

                # Seed 1,800 records in data/ioc-source/ and only 1,000 in ioc-data/ preview
                fti.save_vendor_json_files(
                    {"OpenPhish": {"iocs": unexpired_old + expired_old, "isStale": False, "feedStatus": "active"}},
                    max_preview=1000,
                )

                # load_previous_ioc_data MUST read all 1,800 records from data/ioc-source/
                loaded = fti.load_previous_ioc_data("OpenPhish")
                self.assertEqual(len(loaded), 1800, "Must read full 1,800 source records, not 1,000-record preview")

                # Simulate daily ingestion: 200 brand-new + 50 duplicate URLs
                fresh_lines = [f"https://fresh-new-{i}.example/phish" for i in range(200)]
                dup_lines = [f"https://retained-{i}.example/login" for i in range(50)]
                mock_resp = MagicMock()
                mock_resp.status_code = 200
                mock_resp.raise_for_status.return_value = None
                mock_resp.text = "\n".join(fresh_lines + dup_lines)

                with patch("requests.get", return_value=mock_resp), patch("time.sleep", return_value=None):
                    current_unexpired = fti.remove_expired_iocs(loaded)
                    self.assertEqual(len(current_unexpired), 1500, "All 300 expired records (>7 days) must be pruned")
                    fetched = fti.fetch_vendor_iocs("OpenPhish", fti.VENDORS["OpenPhish"])
                    merged = fti.deduplicate_iocs(fetched + current_unexpired)
                    # 1,500 retained + 200 new = 1,700 (50 duplicates deduplicated; 300 expired dropped)
                    self.assertEqual(len(merged), 1700)

                fti.save_vendor_json_files(
                    {"OpenPhish": {"iocs": merged, "isStale": False, "feedStatus": "active"}},
                    max_preview=1000,
                )

                # Write initial threat-intel.js and run run_daily() to confirm daily analytics aggregate all 1,700
                initial_js = fti.generate_js({
                    "lastUpdated": now_utc.isoformat(),
                    "lastUpdatedFormatted": "Test",
                    "comparisonPeriod": "Test",
                    "vendors": {
                        "OpenPhish": {
                            "description": "Phishing",
                            "website": "https://openphish.com/",
                            "updateFrequency": "15m",
                            "iocDataUrl": "https://thehgtech.com/ioc-data/openphish.json",
                            "stats": {"total": 1700, "newInLastHour": 200},
                            "types": ["url"],
                            "sampleIndicators": [],
                            "iocs": merged,
                        }
                    },
                })
                Path("threat-intel.js").write_text(initial_js, encoding="utf-8")
                fti.run_daily()

                daily_js = Path("threat-intel.js").read_text(encoding="utf-8")
                m = re.search(r"window\.threatIntelData = (\{.*?\});", daily_js, re.DOTALL)
                self.assertIsNotNone(m)
                daily_payload = json.loads(m.group(1))
                self.assertEqual(daily_payload["stats"]["totalIOCs"], 1700)
                self.assertEqual(daily_payload["dailySummary"]["stats"]["totalIndicators"], 1700)
                self.assertEqual(daily_payload["vendors"]["OpenPhish"]["iocCount"], 1700)
            finally:
                os.chdir(orig_cwd)

    def test_03_repo_ioc_source_and_preview_datasets_consistent(self):
        """Verify all 9 live repository vendor datasets preserve full source and obey 1,000-record preview caps."""
        src_dir = self.repo_root / "data" / "ioc-source"
        prv_dir = self.repo_root / "ioc-data"

        total_src_iocs = 0
        for filename in VENDOR_SLUGS:
            # Zero stray vendor files in repository root
            self.assertFalse((self.repo_root / filename).exists(), f"Stray vendor JSON in repo root: {filename}")

            sp = src_dir / filename
            pp = prv_dir / filename
            self.assertTrue(sp.exists(), f"Missing full source dataset: {sp}")
            self.assertTrue(pp.exists(), f"Missing browser preview dataset: {pp}")

            src = json.loads(sp.read_text(encoding="utf-8"))
            prv = json.loads(pp.read_text(encoding="utf-8"))

            src_iocs = src.get("iocs", [])
            prv_iocs = prv.get("iocs", [])
            total_src_iocs += len(src_iocs)

            # Source integrity
            self.assertEqual(src.get("totalCount"), len(src_iocs))
            self.assertEqual(src.get("displayedCount"), len(src_iocs))
            self.assertFalse(src.get("isCapped"), f"Source file must never be capped: {filename}")

            # Preview integrity & strict subset guarantee
            self.assertLessEqual(len(prv_iocs), 1000, f"Preview exceeds 1,000 records: {filename}")
            self.assertEqual(prv.get("displayedCount"), len(prv_iocs))
            self.assertEqual(prv.get("totalCount"), len(src_iocs))
            self.assertEqual(prv.get("isCapped"), len(src_iocs) > len(prv_iocs))
            src_ids = {item["indicator"] for item in src_iocs}
            prv_ids = {item["indicator"] for item in prv_iocs}
            self.assertTrue(prv_ids.issubset(src_ids), f"Preview contains indicator missing from source in {filename}")

        self.assertGreater(total_src_iocs, 50000, "Full 7-day source archive should retain full multi-vendor volume")

    def test_04_jekyll_excludes_ioc_source_and_publishes_previews(self):
        """Verify _config.yml excludes all data/ioc-source/* files while publishing ioc-data/* and hacker-chatter-recent.json."""
        self.assertFalse((self.repo_root / ".nojekyll").exists())
        cfg = _parse_config_yml(self.repo_root / "_config.yml")
        inc = cfg.get("include", [])
        exc = cfg.get("exclude", [])

        source_paths = [f"data/ioc-source/{f}" for f in VENDOR_SLUGS]
        preview_paths = [f"ioc-data/{f}" for f in VENDOR_SLUGS] + ["data/hacker-chatter-recent.json"]
        res = _simulate_jekyll_filter(source_paths + preview_paths, inc, exc)

        for sp in source_paths:
            self.assertFalse(res[sp], f"Full IOC source file would be published publicly: {sp}")
        for pp in preview_paths:
            self.assertTrue(res[pp], f"Browser preview file would be excluded by Jekyll: {pp}")

    def test_05_hacker_chatter_source_preserved_and_preview_under_50kb(self):
        """Verify data/hacker-chatter.json stays intact while data/hacker-chatter-recent.json stays < 50 KB."""
        src_path = self.repo_root / "data" / "hacker-chatter.json"
        prv_path = self.repo_root / "data" / "hacker-chatter-recent.json"
        self.assertTrue(src_path.exists())
        self.assertTrue(prv_path.exists())

        prv_bytes = prv_path.stat().st_size
        self.assertLess(prv_bytes, 51200, f"hacker-chatter-recent.json exceeds 50 KB: {prv_bytes} bytes")

        src = json.loads(src_path.read_text(encoding="utf-8"))
        prv = json.loads(prv_path.read_text(encoding="utf-8"))

        src_incidents = src.get("incidents", [])
        prv_incidents = prv.get("incidents", [])
        self.assertGreater(len(src_incidents), 30000, "Complete Hacker Chatter source archive must remain intact")
        self.assertGreater(len(prv_incidents), 0)
        self.assertLessEqual(len(prv_incidents), uhc.MAX_RECENT_INCIDENTS)
        self.assertEqual(prv.get("total_incidents"), len(src_incidents))
        self.assertEqual(prv.get("displayed_incidents"), len(prv_incidents))
        self.assertTrue(prv.get("is_preview"))

        # Verify preview incidents match exact newest source records with all display fields intact
        required_fields = {"id", "victim_name", "threat_actor", "date_discovered", "industry", "website", "claim", "url", "source"}
        src_top_ids = [x["id"] for x in src_incidents[: len(prv_incidents)]]
        prv_ids = [x["id"] for x in prv_incidents]
        self.assertEqual(prv_ids, src_top_ids)
        for item in prv_incidents:
            self.assertTrue(required_fields.issubset(item.keys()))

    def test_06_hacker_chatter_noop_avoids_source_rewrite_and_enforces_byte_budget(self):
        """Verify unchanged upstream feed skips rewriting source and pathological claims stay strictly < 50 KB."""
        existing = [
            {
                "id": f"actor_victim_{i}",
                "victim_name": f"Victim {i}",
                "threat_actor": "ActorX",
                "date_discovered": f"2026-11-{27 - (i % 20):02d} 10:00:00",
                "industry": "Tech",
                "website": "example.com",
                "claim": "X" * 3500,  # Large claim to stress byte budget
                "screenshot": "",
                "url": "https://example.com/post",
                "source": "Ransomware.live OSINT API",
            }
            for i in range(60)
        ]

        # Re-merging identical incidents must report 0 added and 0 updated
        merged, added, updated = uhc.merge_data_with_stats(existing, existing[:10])
        self.assertEqual(added, 0)
        self.assertEqual(updated, 0)
        self.assertEqual(len(merged), 60)

        # Pathological 3.5 KB claims x 60 must still produce a valid preview < 50 KB
        payload, raw = uhc.build_recent_preview(existing, last_updated="2026-11-27T12:00:00")
        self.assertLess(len(raw.encode("utf-8")), 51200)
        self.assertEqual(payload["total_incidents"], 60)
        self.assertEqual(payload["displayed_incidents"], len(payload["incidents"]))
        self.assertGreaterEqual(payload["displayed_incidents"], 10)

        # Idempotent save_preview_data returns False on second unchanged write
        with tempfile.TemporaryDirectory() as tmp:
            p = os.path.join(tmp, "hacker-chatter-recent.json")
            wrote1, _ = uhc.save_preview_data(existing, last_updated="2026-11-27T12:00:00", preview_path=p)
            wrote2, _ = uhc.save_preview_data(existing, last_updated="2026-11-27T12:00:00", preview_path=p)
            self.assertTrue(wrote1)
            self.assertFalse(wrote2)

    def test_07_workflows_and_frontend_consumers_wired_correctly(self):
        """Verify workflows and frontend consumers use the separated preview files and never wildcard-copy."""
        ti_wf = (self.repo_root / ".github" / "workflows" / "threat-intel.yml").read_text(encoding="utf-8")
        hc_wf = (self.repo_root / ".github" / "workflows" / "hacker-chatter.yml").read_text(encoding="utf-8")
        self.assertNotIn("cp *.json", ti_wf)
        self.assertNotIn("mv *.json", ti_wf)
        self.assertIn("data/ioc-source/", ti_wf)
        self.assertIn("ioc-data/", ti_wf)
        self.assertIn("--skip-previews", ti_wf)
        self.assertIn("--build-previews-only", ti_wf)
        self.assertIn("data/hacker-chatter-recent.json", hc_wf)

        hc_html = (self.repo_root / "hacker-chatter.html").read_text(encoding="utf-8")
        hp_js = (self.repo_root / "js" / "homepage-dynamic.js").read_text(encoding="utf-8")
        self.assertIn("fetch('data/hacker-chatter-recent.json')", hc_html)
        self.assertNotIn("fetch('data/hacker-chatter.json')", hc_html)
        self.assertIn("fetch('data/hacker-chatter-recent.json', { priority: 'low' })", hp_js)
        self.assertNotIn("fetch('data/hacker-chatter.json'", hp_js)

        wb_js = (self.repo_root / "js" / "threat-workbench.js").read_text(encoding="utf-8")
        self.assertIn("data.totalCount", wb_js)
        self.assertIn("data.isCapped", wb_js)


if __name__ == "__main__":
    unittest.main()
