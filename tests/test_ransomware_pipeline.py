#!/usr/bin/env python3
"""
Unit Tests for Ransomware Pipeline & Ingestion Engine
Tests RSS feed parsing, metadata extraction, deduplication, timestamp normalization,
trend calculation, fail-safe validation, atomic writes, and schema integrity.
"""

import os
import sys
import json
import unittest
from unittest.mock import patch, MagicMock
from datetime import datetime, timezone, timedelta

# Add repo root and scripts directory to sys.path
REPO_ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
SCRIPTS_DIR = os.path.join(REPO_ROOT, 'scripts', 'legacy_tasks')
if SCRIPTS_DIR not in sys.path:
    sys.path.insert(0, SCRIPTS_DIR)
if REPO_ROOT not in sys.path:
    sys.path.insert(0, REPO_ROOT)

import fetch_ransomware


class TestRansomwarePipeline(unittest.TestCase):
    """Test suite for hardened ransomware data pipeline."""

    def setUp(self):
        self.sample_rss_xml = """<?xml version="1.0" encoding="UTF-8"?>
        <rss version="2.0">
            <channel>
                <title>Ransomware.live RSS</title>
                <link>https://www.ransomware.live</link>
                <item>
                    <title>🏴‍☠️ Lockbit5 has just published a new victim : Acme Industrial Corp</title>
                    <link>https://www.ransomware.live/id/1111</link>
                    <pubDate>Mon, 20 Oct 2026 08:30:00 +0000</pubDate>
                    <category>US</category>
                    <description>Heavy Machinery &amp; Manufacturing · United States | [PENDING EXPOSURE]</description>
                </item>
                <item>
                    <title>🏴‍☠️ Akira has just published a new victim : Metro Health Clinic</title>
                    <link>https://www.ransomware.live/id/2222</link>
                    <pubDate>Mon, 20 Oct 2026 07:15:00 +0000</pubDate>
                    <category>AU</category>
                    <description>Healthcare &amp; Diagnostics · Australia | [NOT PAID — EXPOSED]</description>
                </item>
                <item>
                    <title>🏴‍☠️ Qilin has just published a new victim : Alpine Tech AG</title>
                    <link>https://www.ransomware.live/id/3333</link>
                    <pubDate>Sun, 19 Oct 2026 14:00:00 +0000</pubDate>
                    <category>CH</category>
                    <description>alpinetec.ch Enterprise Cloud Services · Switzerland | [PENDING EXPOSURE]</description>
                </item>
                <item>
                    <title>🏴‍☠️ N0n published a new victim : Unknown Entity</title>
                    <link>https://www.ransomware.live/id/4444</link>
                    <pubDate>Sat, 18 Oct 2026 10:00:00 +0000</pubDate>
                    <description>Data is not available now.</description>
                </item>
            </channel>
        </rss>
        """.encode('utf-8')

    def test_clean_text_and_unescape(self):
        """Verify HTML entities and control chars are safely cleaned."""
        raw = "Heavy Machinery &amp;amp; Tools &#x27;Redacted&#x27;"
        cleaned = fetch_ransomware.clean_text(raw)
        self.assertEqual(cleaned, "Heavy Machinery & Tools 'Redacted'")

    def test_normalize_country(self):
        """Verify ISO country code and names resolution."""
        name, code = fetch_ransomware.normalize_country('US')
        self.assertEqual(name, 'United States')
        self.assertEqual(code, 'US')

        name2, code2 = fetch_ransomware.normalize_country('Australia')
        self.assertEqual(name2, 'Australia')
        self.assertEqual(code2, 'AU')

        name3, code3 = fetch_ransomware.normalize_country('Tennessee, USA')
        self.assertEqual(name3, 'United States')
        self.assertEqual(code3, 'US')

        name_empty, code_empty = fetch_ransomware.normalize_country('N/A')
        self.assertIsNone(name_empty)
        self.assertIsNone(code_empty)

    def test_extract_metadata_from_description(self):
        """Verify sector, country, status, and domain extraction."""
        desc1 = "Healthcare & Ambulatory · United States | [PENDING EXPOSURE]"
        sector, country, status, domain = fetch_ransomware.extract_metadata_from_description(desc1)
        self.assertEqual(sector, "Healthcare & Ambulatory")
        self.assertEqual(country, "United States")
        self.assertEqual(status, "PENDING EXPOSURE")
        self.assertIsNone(domain)

        desc2 = "alpinetec.ch Cloud Hosting Services · Switzerland"
        sector2, country2, status2, domain2 = fetch_ransomware.extract_metadata_from_description(desc2)
        self.assertEqual(domain2, "alpinetec.ch")
        self.assertEqual(country2, "Switzerland")

    @patch('requests.get')
    def test_fetch_rss_feed_parsing(self, mock_get):
        """Verify RSS parser extracts required fields with high fidelity."""
        mock_resp = MagicMock()
        mock_resp.status_code = 200
        mock_resp.content = self.sample_rss_xml
        mock_get.return_value = mock_resp

        victims = fetch_ransomware.fetch_rss_feed()
        self.assertEqual(len(victims), 4)

        v1 = victims[0]
        self.assertEqual(v1['group_name'], 'Lockbit5')
        self.assertEqual(v1['victim_name'], 'Acme Industrial Corp')
        self.assertEqual(v1['country'], 'United States')
        self.assertEqual(v1['country_code'], 'US')
        self.assertEqual(v1['sector'], 'Heavy Machinery & Manufacturing')
        self.assertEqual(v1['status'], 'PENDING EXPOSURE')
        self.assertTrue(v1['discovered'].startswith('2026-10-20'))

        v2 = victims[1]
        self.assertEqual(v2['group_name'], 'Akira')
        self.assertEqual(v2['country'], 'Australia')
        self.assertEqual(v2['sector'], 'Healthcare & Diagnostics')

        v3 = victims[2]
        self.assertEqual(v3['domain'], 'alpinetec.ch')

        v4 = victims[3]
        self.assertIsNone(v4['sector']) # 'Data is not available now.' dropped

    def test_deduplicate_victims(self):
        """Verify duplicate group+victim entries are merged preserving richer fields."""
        list_with_dupes = [
            {
                'group_name': 'Akira',
                'victim_name': 'Corp X',
                'discovered': '2026-10-20T10:00:00Z',
                'sector': None,
                'country': None
            },
            {
                'group_name': 'Akira',
                'victim_name': 'Corp X',
                'discovered': '2026-10-20T10:00:00Z',
                'sector': 'Finance',
                'country': 'United Kingdom',
                'country_code': 'GB'
            }
        ]

        deduped = fetch_ransomware.deduplicate_victims(list_with_dupes)
        self.assertEqual(len(deduped), 1)
        self.assertEqual(deduped[0]['sector'], 'Finance')
        self.assertEqual(deduped[0]['country'], 'United Kingdom')

    def test_no_arbitrary_victim_truncation(self):
        """Verify all victims per group are preserved rather than sliced to 10."""
        mock_victims = []
        now = datetime.now(timezone.utc)
        for i in range(25):
            mock_victims.append({
                'id': f'rec_{i}',
                'group_name': 'SuperGroup',
                'victim_name': f'Target Entity {i}',
                'discovered': (now - timedelta(hours=i)).isoformat(),
                'dt_obj': now - timedelta(hours=i),
                'country': 'United States',
                'sector': 'Technology'
            })

        output = fetch_ransomware.aggregate_and_enrich(mock_victims, window_days=7)
        self.assertEqual(output['total_victims'], 25)
        self.assertEqual(len(output['groups']), 1)
        # MUST BE 25, NOT 10!
        self.assertEqual(len(output['groups'][0]['victims']), 25)

    def test_authentic_trend_velocity(self):
        """Verify trend velocity is computed from actual time windows without fake percentages."""
        now = datetime.now(timezone.utc)
        # Group with accelerating trend: 5 victims in last 24h, 1 victim 5 days ago
        accelerating_victims = []
        for i in range(5):
            accelerating_victims.append({
                'id': f'acc_{i}',
                'group_name': 'FastCartel',
                'victim_name': f'Victim {i}',
                'discovered': (now - timedelta(hours=i * 2)).isoformat(),
                'dt_obj': now - timedelta(hours=i * 2)
            })
        accelerating_victims.append({
            'id': 'acc_old',
            'group_name': 'FastCartel',
            'victim_name': 'Victim Old',
            'discovered': (now - timedelta(days=5)).isoformat(),
            'dt_obj': now - timedelta(days=5)
        })

        output = fetch_ransomware.aggregate_and_enrich(accelerating_victims, window_days=7)
        fast_group = output['groups'][0]
        self.assertEqual(fast_group['trend'], 'up')
        self.assertEqual(fast_group['trend_label'], 'Accelerating')
        # Ensure no fabricated trend_percentage field
        self.assertNotIn('trend_percentage', fast_group)

        # Group with insufficient data (< 3 victims)
        sparse_victims = [
            {
                'id': 'sparse_1',
                'group_name': 'SparseCartel',
                'victim_name': 'Single Victim',
                'discovered': now.isoformat(),
                'dt_obj': now
            }
        ]
        sparse_output = fetch_ransomware.aggregate_and_enrich(sparse_victims, window_days=7)
        sparse_group = sparse_output['groups'][0]
        self.assertEqual(sparse_group['trend'], 'insufficient_data')
        self.assertEqual(sparse_group['trend_label'], 'Limited Data')

    def test_validate_snapshot_rejects_malformed_and_incomplete(self):
        """Verify validate_snapshot rejects empty or incomplete datasets."""
        # Non-dict
        valid, _ = fetch_ransomware.validate_snapshot([])
        self.assertFalse(valid)

        # Empty groups / victims
        valid, reason = fetch_ransomware.validate_snapshot({'groups': [], 'victims': []})
        self.assertFalse(valid)
        self.assertIn("Suspiciously low", reason)

        # Insufficient records (< 20 victims)
        small_snapshot = {
            'groups': [{'name': f'G{i}'} for i in range(6)],
            'victims': [{'group_name': 'G1', 'victim_name': 'V1', 'discovered': '2026-10-20'}]
        }
        valid, reason = fetch_ransomware.validate_snapshot(small_snapshot)
        self.assertFalse(valid)
        self.assertIn("victim count", reason)

    def test_save_snapshot_safely_prevents_wipeout(self):
        """Verify save_snapshot_safely refuses to overwrite valid snapshot with invalid/empty data."""
        test_file = os.path.join(REPO_ROOT, 'tests', 'temp_test_ransomware.json')

        try:
            # 1. Create a valid baseline file
            initial_valid = {
                'total_groups': 10,
                'total_victims': 100,
                'groups': [{'name': f'G{i}'} for i in range(10)],
                'victims': [{'group_name': 'G1', 'victim_name': f'V{i}', 'discovered': '2026-10-20'} for i in range(100)]
            }
            with open(test_file, 'w', encoding='utf-8') as f:
                json.dump(initial_valid, f)

            # 2. Attempt to save an empty/broken snapshot
            broken_snapshot = {
                'total_groups': 0,
                'total_victims': 0,
                'groups': [],
                'victims': []
            }
            success = fetch_ransomware.save_snapshot_safely(broken_snapshot, test_file)
            self.assertFalse(success)

            # 3. Verify original baseline file remains completely intact
            with open(test_file, 'r', encoding='utf-8') as f:
                preserved = json.load(f)
            self.assertEqual(preserved['total_victims'], 100)
            self.assertEqual(len(preserved['victims']), 100)

        finally:
            if os.path.exists(test_file):
                os.remove(test_file)

    @patch('requests.get')
    def test_api_v2_error_fallback_handling(self, mock_get):
        """Verify API v2 returning 404 or HTML does not crash and logs graceful fallback."""
        mock_resp = MagicMock()
        mock_resp.status_code = 404
        mock_resp.headers = {'content-type': 'text/html'}
        mock_get.return_value = mock_resp

        res = fetch_ransomware.fetch_api_feed()
        self.assertEqual(res, [])

    def test_source_attribution_and_disclaimer_wording(self):
        """Verify source attribution and disclaimer accurately reflect unverified dark web notices."""
        fixed_now = datetime(2026, 10, 20, 12, 0, 0, tzinfo=timezone.utc)
        victims = [
            {
                'id': f'v_{i}',
                'group_name': f'Group{i % 5}',
                'victim_name': f'Victim {i}',
                'discovered': fixed_now.isoformat(),
                'dt_obj': fixed_now,
                'sector': 'Technology'
            }
            for i in range(25)
        ]
        output = fetch_ransomware.aggregate_and_enrich(victims, window_days=7, now_dt=fixed_now)
        self.assertIn("dark web extortion notices", output['provenance'].lower())
        self.assertIn("not independently verified", output['verification_note'].lower())
        self.assertNotIn("osint corroborated", output['provenance'].lower())

    def test_rolling_24h_vs_calendar_day_fixed_timestamps(self):
        """Verify rolling 24h count separates from calendar day with fixed timestamps."""
        ref_now = datetime(2026, 10, 20, 12, 0, 0, tzinfo=timezone.utc) # Oct 20 12:00 UTC
        victims = [
            # Event 1: Today Oct 20 at 10:00 UTC (in 24h, today)
            {
                'id': 'v1', 'group_name': 'G1', 'victim_name': 'Vic1',
                'discovered': '2026-10-20T10:00:00+00:00',
                'discovered_date': '2026-10-20',
                'dt_obj': datetime(2026, 10, 20, 10, 0, 0, tzinfo=timezone.utc)
            },
            # Event 2: Yesterday Oct 19 at 14:00 UTC (in 24h, yesterday calendar date)
            {
                'id': 'v2', 'group_name': 'G1', 'victim_name': 'Vic2',
                'discovered': '2026-10-19T14:00:00+00:00',
                'discovered_date': '2026-10-19',
                'dt_obj': datetime(2026, 10, 19, 14, 0, 0, tzinfo=timezone.utc)
            },
            # Event 3: Yesterday Oct 19 at 08:00 UTC (outside 24h window: 28 hours ago)
            {
                'id': 'v3', 'group_name': 'G1', 'victim_name': 'Vic3',
                'discovered': '2026-10-19T08:00:00+00:00',
                'discovered_date': '2026-10-19',
                'dt_obj': datetime(2026, 10, 19, 8, 0, 0, tzinfo=timezone.utc)
            }
        ]
        output = fetch_ransomware.aggregate_and_enrich(victims, window_days=7, now_dt=ref_now)
        # Rolling 24h must include v1 and v2 = 2
        self.assertEqual(output['disclosures_24h'], 2)
        # Calendar today must only include v1 = 1
        self.assertEqual(output['disclosures_today'], 1)

    def test_invalid_missing_future_timestamps(self):
        """Verify pipeline safely handles invalid, null, and far-future timestamps."""
        ref_now = datetime(2026, 10, 20, 12, 0, 0, tzinfo=timezone.utc)
        victims = [
            {'id': 'v1', 'group_name': 'G1', 'victim_name': 'Valid', 'discovered': '2026-10-20T11:00:00+00:00', 'discovered_date': '2026-10-20'},
            {'id': 'v2', 'group_name': 'G1', 'victim_name': 'GarbageDate', 'discovered': 'not-a-valid-date', 'discovered_date': 'invalid'},
            {'id': 'v3', 'group_name': 'G1', 'victim_name': 'NullDate', 'discovered': None, 'discovered_date': None},
            {'id': 'v4', 'group_name': 'G1', 'victim_name': 'FarFuture', 'discovered': '2027-10-20T12:00:00+00:00', 'discovered_date': '2027-10-20'}
        ]
        output = fetch_ransomware.aggregate_and_enrich(victims, window_days=7, now_dt=ref_now)
        # Only v1 is valid and within the rolling 24h window
        self.assertEqual(output['disclosures_24h'], 1)

    def test_sector_coverage_ties_and_unclassified_fallback(self):
        """Verify unclassified >= 50% or ties default to Multiple / Unclassified."""
        ref_now = datetime(2026, 10, 20, 12, 0, 0, tzinfo=timezone.utc)
        # 20 victims, only 4 classified (20% coverage -> 80% unclassified)
        # 2 Hospitality, 2 Fintech
        victims = []
        for i in range(16):
            victims.append({'id': f'v_u_{i}', 'group_name': 'G1', 'victim_name': f'Unclass {i}', 'discovered': ref_now.isoformat(), 'sector': None})
        victims.append({'id': 'v_h1', 'group_name': 'G1', 'victim_name': 'Hosp 1', 'discovered': ref_now.isoformat(), 'sector': 'Hospitality'})
        victims.append({'id': 'v_h2', 'group_name': 'G1', 'victim_name': 'Hosp 2', 'discovered': ref_now.isoformat(), 'sector': 'Hospitality'})
        victims.append({'id': 'v_f1', 'group_name': 'G1', 'victim_name': 'Fin 1', 'discovered': ref_now.isoformat(), 'sector': 'Fintech Payments'})
        victims.append({'id': 'v_f2', 'group_name': 'G1', 'victim_name': 'Fin 2', 'discovered': ref_now.isoformat(), 'sector': 'Fintech Payments'})

        output = fetch_ransomware.aggregate_and_enrich(victims, window_days=7, now_dt=ref_now)
        self.assertEqual(output['top_target_sector'], 'Multiple / Unclassified')
        self.assertIn("unclassified", output['top_target_sector_sub'])
        self.assertEqual(output['sector_coverage']['unclassified_percent'], 80.0)

    def test_status_parsing_filtering_noise(self):
        """Verify status extraction accepts valid statuses and rejects non-status tags."""
        # Valid statuses
        _, _, stat1, _ = fetch_ransomware.extract_metadata_from_description("Sector · Country | [PENDING EXPOSURE]")
        self.assertEqual(stat1, "PENDING EXPOSURE")

        _, _, stat2, _ = fetch_ransomware.extract_metadata_from_description("Sector · Country | [NOT PAID — EXPOSED]")
        self.assertEqual(stat2, "NOT PAID — EXPOSED")

        # Non-status noise bracket tags must be rejected
        _, _, stat3, _ = fetch_ransomware.extract_metadata_from_description("[AI generated] Company description text here.")
        self.assertIsNone(stat3)

        _, _, stat4, _ = fetch_ransomware.extract_metadata_from_description("Profile info [Sector: Manufacturing, Finance]")
        self.assertIsNone(stat4)

        _, _, stat5, _ = fetch_ransomware.extract_metadata_from_description("Automotive components [manufacturer] in Berlin.")
        self.assertIsNone(stat5)

    def test_country_normalization_iso_coverage(self):
        """Verify expanded ISO codes resolve cleanly and prevent titlecased 2-letter codes."""
        test_cases = [
            ('CN', 'China', 'CN'),
            ('EE', 'Estonia', 'EE'),
            ('KZ', 'Kazakhstan', 'KZ'),
            ('PK', 'Pakistan', 'PK'),
            ('AD', 'Andorra', 'AD'),
            ('RE', 'Réunion', 'RE'),
            ('Texas, US', 'United States', 'US'),
            ('Texas, USA', 'United States', 'US'),
            ('London, UK', 'United Kingdom', 'GB'),
        ]
        for raw, expected_name, expected_code in test_cases:
            name, code = fetch_ransomware.normalize_country(raw)
            self.assertEqual(name, expected_name, f"Failed resolving name for {raw}")
            self.assertEqual(code, expected_code, f"Failed resolving code for {raw}")

    def test_domain_extraction_positive_and_negative(self):
        """Verify domain extraction patterns work without false positives."""
        # Pattern: Website:
        _, _, _, dom1 = fetch_ransomware.extract_metadata_from_description("Name: Firm | Website: https://rpllplaw.com | City: NY")
        self.assertEqual(dom1, "rpllplaw.com")

        # Pattern: Domain:
        _, _, _, dom2 = fetch_ransomware.extract_metadata_from_description("Organization: County | Domain: internal.seminole.org")
        self.assertEqual(dom2, "internal.seminole.org")

        # Pattern: Parenthetical (domain.com)
        _, _, _, dom3 = fetch_ransomware.extract_metadata_from_description("BW Office World (bw-officeworld.de) is a German retailer")
        self.assertEqual(dom3, "bw-officeworld.de")

        # Pattern: Initial domain
        _, _, _, dom4 = fetch_ransomware.extract_metadata_from_description("otsuka.com.tw Enterprise Cloud Services")
        self.assertEqual(dom4, "otsuka.com.tw")

        # Negative: File extension
        _, _, _, dom5 = fetch_ransomware.extract_metadata_from_description("Financial statement download financial_report.pdf")
        self.assertIsNone(dom5)


if __name__ == '__main__':
    unittest.main()
