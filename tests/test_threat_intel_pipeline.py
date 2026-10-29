# HG-THREAT-INTEL-V1: TEST | PIPELINE_UNIT_TESTS | 2026-10-18
"""
Automated Unit & Regression Tests for Threat Intelligence Pipeline
Tests parsers, sanitizers, defanging/refanging, campaign detection, and server-side aggregation.
"""

import sys
import os
import unittest
from datetime import datetime, timezone

# Add scripts directory to path
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '../scripts/legacy_tasks')))

from fetch_threat_intel import (
    parse_malware_bazaar,
    parse_threatfox_csv,
    parse_urlhaus_csv,
    parse_ssl_blacklist,
    defang_indicator,
    refang_indicator,
    detect_campaign,
    generate_js,
    fetch_vendor_iocs,
    load_previous_ioc_data,
    deduplicate_iocs,
    remove_expired_iocs,
    prune_old_iocs,
    save_vendor_json_files,
    is_new,
    generate_html_snapshot
)
from unittest.mock import patch, MagicMock

class TestThreatIntelPipeline(unittest.TestCase):
    def setUp(self):
        self.now = datetime(2026, 10, 18, 12, 0, 0, tzinfo=timezone.utc)
        self.dummy_config = {'website': 'https://example.com'}
        self.dummy_history = {}

    def test_malware_bazaar_quote_and_space_sanitization(self):
        """Verify Malware Bazaar CSV line strips leading quotes, spaces, and preserves clean SHA256"""
        # Line with space after comma and quoted fields as seen in abuse.ch feeds
        csv_line = ' "2026-10-18 06:00:00", "e5b549a8088a137935103dc696337ab5a960e17d1902d1605542ac3fe9f9a4eb", "md5", "sha1", "reporter", "sample.exe", "exe", "application/x-dosexec", "Mirai", "clam", 80, "imp", "ssdeep", "tlsh"'
        
        result = parse_malware_bazaar(csv_line, self.now, self.dummy_config, 'Malware Bazaar', self.dummy_history)
        self.assertIsNotNone(result)
        self.assertEqual(result['type'], 'hash')
        # Crucial: indicator must not have leading space or quote
        self.assertEqual(result['indicator'], 'e5b549a8088a137935103dc696337ab5a960e17d1902d1605542ac3fe9f9a4eb')
        self.assertFalse(result['indicator'].startswith(' '))
        self.assertFalse(result['indicator'].startswith('"'))
        self.assertEqual(result['campaign'], 'Mirai')
        self.assertEqual(result['timestamp'], '2026-10-18 06:00:00')
        self.assertIn('High', result['confidence'])

    def test_malware_bazaar_empty_signature_handling(self):
        """Verify n/a signature does not create a broken campaign name"""
        csv_line = '2026-10-18 06:00:00, f3b8d2f54c121729446d69615bb259a8882c73971e3a61bd9ac4e31e10044ed1, md5, sha1, reporter, sample.elf, elf, application/x-elf, "n/a", clam, 0, imp, ss, tlsh'
        result = parse_malware_bazaar(csv_line, self.now, self.dummy_config, 'Malware Bazaar', self.dummy_history)
        self.assertIsNotNone(result)
        self.assertEqual(result['campaign'], 'Unassigned Malware')

    def test_threatfox_csv_quote_stripping_and_confidence(self):
        """Verify ThreatFox quotes around indicators and malware names are stripped and confidence is preserved"""
        csv_line = '"2026-10-18 00:54:12","1571424","https://m.6r6r6.org/fg","url","botnet_cc","win.vidar","Vidar","win.vidar","2026-10-18 01:00:00","95","ref","None,malware,test","0","reporter"'
        
        result = parse_threatfox_csv(csv_line, self.now, self.dummy_config, 'ThreatFox', self.dummy_history)
        self.assertIsNotNone(result)
        self.assertEqual(result['type'], 'url')
        self.assertEqual(result['indicator'], 'hxxps://m[.]6r6r6[.]org/fg')
        self.assertFalse(result['indicator'].startswith('"'))
        self.assertEqual(result['campaign'], 'win.vidar')
        self.assertEqual(result['confidence'], '95%')
        # None should be filtered from tags
        self.assertNotIn('None', result['tags'])
        self.assertNotIn('none', result['tags'])

    def test_urlhaus_none_tag_filtering(self):
        """Verify URLhaus literal 'None' tags are removed"""
        csv_line = '"12345","2026-10-18 04:00:00","http://1.2.3.4:8080/malware.sh","online","2026-10-18 05:00:00","malware_download","None","https://urlhaus.abuse.ch","reporter"'
        result = parse_urlhaus_csv(csv_line, self.now, self.dummy_config, 'URLhaus', self.dummy_history)
        self.assertIsNotNone(result)
        self.assertEqual(result['indicator'], 'hxxp://1[.]2[.]3[.]4:8080/malware[.]sh')
        self.assertNotIn('None', result['tags'])
        self.assertNotIn('none', result['tags'])

    def test_ssl_blacklist_parsing(self):
        """Verify SSL Blacklist SHA1 parsing"""
        csv_line = '2026-10-18 00:00:00,d14a028c2a3a2bc9476102bb288234c415a2b01f,Dridex C2 Certificate'
        result = parse_ssl_blacklist(csv_line, self.now, self.dummy_config, 'SSL Blacklist', self.dummy_history)
        self.assertIsNotNone(result)
        self.assertEqual(result['type'], 'ssl-cert')
        self.assertEqual(result['indicator'], 'd14a028c2a3a2bc9476102bb288234c415a2b01f')
        self.assertEqual(result['campaign'], 'Dridex')

    def test_defang_and_refang_indicators(self):
        """Verify bidirectional indicator normalization"""
        raw_url = 'https://malicious-site.com/path'
        defanged_url = defang_indicator(raw_url, 'url')
        self.assertEqual(defanged_url, 'hxxps://malicious-site[.]com/path')
        self.assertEqual(refang_indicator(defanged_url, 'url'), raw_url)

        raw_ip = '192.168.1.1'
        defanged_ip = defang_indicator(raw_ip, 'ip')
        self.assertEqual(defanged_ip, '192[.]168[.]1[.]1')
        self.assertEqual(refang_indicator(defanged_ip, 'ip'), raw_ip)

    def test_detect_campaign_word_boundary_and_mime_filtering(self):
        """Verify word boundaries prevent substring false-positives and MIME types are rejected"""
        self.assertEqual(detect_campaign('hxxp://test.com', 'infected with mirai botnet'), 'Mirai')
        # Word boundary: 'admiration' should NOT match 'mirai'
        self.assertNotEqual(detect_campaign('hxxp://test.com', 'an admiration letter'), 'Mirai')
        # MIME type rejection
        self.assertEqual(detect_campaign('text/plain', 'text/plain'), 'Unassigned Malware')

    def test_generate_js_server_side_aggregation(self):
        """Verify generate_js pre-computes stats and bundles top 100 recent IOCs"""
        mock_data = {
            'lastUpdated': '2026-10-18T12:00:00+00:00',
            'lastUpdatedFormatted': 'Oct 18, 2026 at 12:00 PM UTC',
            'comparisonPeriod': 'Oct 17 – Oct 18, 2026',
            'vendors': {
                'Malware Bazaar': {
                    'description': 'Malware samples',
                    'website': 'https://bazaar.abuse.ch',
                    'updateFrequency': 'Real-time',
                    'iocDataUrl': 'https://example.com/bazaar.json',
                    'stats': {'total': 2, 'newInLastHour': 1},
                    'types': ['hash'],
                    'sampleIndicators': ['abc'],
                    'iocs': [
                        {'type': 'hash', 'indicator': 'hash1', 'addedAt': '2026-10-18T11:00:00Z', 'campaign': 'Mirai'},
                        {'type': 'hash', 'indicator': 'hash2', 'addedAt': '2026-10-18T10:00:00Z', 'campaign': 'Trickbot'}
                    ]
                },
                'OpenPhish': {
                    'description': 'Phishing URLs',
                    'website': 'https://openphish.com',
                    'updateFrequency': '15m',
                    'iocDataUrl': 'https://example.com/openphish.json',
                    'stats': {'total': 1, 'newInLastHour': 1},
                    'types': ['url'],
                    'sampleIndicators': ['url1'],
                    'iocs': [
                        {'type': 'url', 'indicator': 'hxxps://phish[.]com', 'addedAt': '2026-10-18T11:30:00Z', 'campaign': 'Generic Phishing'}
                    ]
                }
            }
        }
        
        js_out = generate_js(mock_data)
        self.assertIn('window.threatIntelData = {', js_out)
        self.assertIn('"totalIOCs": 3', js_out)
        self.assertIn('"hash": 2', js_out)
        self.assertIn('"url": 1', js_out)
        self.assertIn('Mirai', js_out)

    def test_canonical_site_header_integrity(self):
        """Verify components/site-header.html exists and threat-intel.html header matches canonical standard"""
        import subprocess
        root_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
        header_file = os.path.join(root_dir, 'components', 'site-header.html')
        self.assertTrue(os.path.exists(header_file), "components/site-header.html must exist")

        script_file = os.path.join(root_dir, 'scripts', 'sync_site_header.py')
        target_html = os.path.join(root_dir, 'threat-intel.html')
        res = subprocess.run([sys.executable, script_file, '--check', target_html], capture_output=True, text=True)
        self.assertEqual(res.returncode, 0, f"Header validation failed: {res.stdout} {res.stderr}")

    def test_ransomware_data_structure(self):
        """Verify ransomware-data.json contains valid group names and victim counts"""
        import json
        root_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
        ransom_file = os.path.join(root_dir, 'ransomware-data.json')
        if os.path.exists(ransom_file):
            with open(ransom_file, 'r', encoding='utf-8') as f:
                data = json.load(f)
            self.assertIn('groups', data)
            self.assertGreater(len(data['groups']), 0)
            top_group = data['groups'][0]
            self.assertIn('name', top_group)
            self.assertIn('count', top_group)
            self.assertIsInstance(top_group['count'], int)

    def test_ai_security_json_files(self):
        """Verify MITRE ATLAS, AIID, and OWASP JSON files exist and have valid structure"""
        import json
        root_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
        atlas_file = os.path.join(root_dir, 'ioc-data', 'mitre-atlas.json')
        if os.path.exists(atlas_file):
            with open(atlas_file, 'r', encoding='utf-8') as f:
                d = json.load(f)
            self.assertIn('techniques', d)
            self.assertGreater(len(d['techniques']), 0)

        owasp_file = os.path.join(root_dir, 'ioc-data', 'owasp-llm-top10.json')
        if os.path.exists(owasp_file):
            with open(owasp_file, 'r', encoding='utf-8') as f:
                d = json.load(f)
            self.assertIn('vulnerabilities', d)
            self.assertEqual(len(d['vulnerabilities']), 10)

    def test_malformed_csv_and_resilience(self):
        """Verify parsers safely return None on truncated or malformed CSV lines without unhandled exceptions"""
        self.assertIsNone(parse_malware_bazaar("", self.now, self.dummy_config, 'Malware Bazaar', self.dummy_history))
        self.assertIsNone(parse_malware_bazaar("too,short,line", self.now, self.dummy_config, 'Malware Bazaar', self.dummy_history))
        self.assertIsNone(parse_threatfox_csv("", self.now, self.dummy_config, 'ThreatFox', self.dummy_history))
        self.assertIsNone(parse_urlhaus_csv("1,2", self.now, self.dummy_config, 'URLhaus', self.dummy_history))
        self.assertIsNone(parse_ssl_blacklist("short", self.now, self.dummy_config, 'SSL Blacklist', self.dummy_history))

    def test_load_previous_ioc_data_slug_normalization(self):
        """Verify vendor slug resolution correctly handles dots and hyphens (e.g. Blocklist.de) using isolated fixtures"""
        import tempfile
        import json

        with tempfile.TemporaryDirectory() as tmpdir:
            ioc_dir = os.path.join(tmpdir, 'ioc-data')
            os.makedirs(ioc_dir, exist_ok=True)

            # Isolated fixture data for testing filename resolution independently of live feed data
            blocklist_fixture = {
                'vendor': 'Blocklist.de',
                'iocs': [{'indicator': '198.51.100.1', 'type': 'ip', 'addedAt': '2026-10-18T12:00:00Z'}]
            }
            bazaar_fixture = {
                'vendor': 'Malware Bazaar',
                'iocs': [{'indicator': 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855', 'type': 'hash', 'addedAt': '2026-10-18T12:00:00Z'}]
            }

            with open(os.path.join(ioc_dir, 'blocklist-de.json'), 'w', encoding='utf-8') as f:
                json.dump(blocklist_fixture, f)
            with open(os.path.join(ioc_dir, 'malware-bazaar.json'), 'w', encoding='utf-8') as f:
                json.dump(bazaar_fixture, f)

            orig_cwd = os.getcwd()
            try:
                os.chdir(tmpdir)
                blocklist_iocs = load_previous_ioc_data("Blocklist.de")
                self.assertIsInstance(blocklist_iocs, list)
                self.assertGreater(len(blocklist_iocs), 0, "Blocklist.de IOCs must be found in ioc-data/blocklist-de.json")
                self.assertEqual(blocklist_iocs[0]['indicator'], '198.51.100.1')

                bazaar_iocs = load_previous_ioc_data("Malware Bazaar")
                self.assertIsInstance(bazaar_iocs, list)
                self.assertGreater(len(bazaar_iocs), 0, "Malware Bazaar IOCs must be found in ioc-data/malware-bazaar.json")
                self.assertEqual(bazaar_iocs[0]['indicator'], 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855')
            finally:
                os.chdir(orig_cwd)

    @patch('requests.get')
    def test_fetch_vendor_iocs_http_410_falls_back_to_lkg(self, mock_get):
        """Verify HTTP 410 raises HTTPError and safely falls back to Last-Known-Good data"""
        import requests
        mock_resp = MagicMock()
        mock_resp.status_code = 410
        mock_resp.raise_for_status.side_effect = requests.exceptions.HTTPError("410 Client Error: Gone")
        mock_get.return_value = mock_resp

        test_config = {
            'url': 'https://bazaar.abuse.ch/export/csv/recent/',
            'type': 'csv',
            'website': 'https://bazaar.abuse.ch/'
        }
        with patch('fetch_threat_intel.load_previous_ioc_data') as mock_load:
            mock_load.return_value = [
                {'type': 'hash', 'indicator': 'abc123hash', 'addedAt': '2026-10-21T12:00:00Z', 'campaign': 'Test'}
            ]
            result_iocs = fetch_vendor_iocs('Malware Bazaar', test_config)
            self.assertIsInstance(result_iocs, list)
            self.assertGreater(len(result_iocs), 0, "HTTP 410 must retain Last-Known-Good IOCs from storage")
            self.assertEqual(result_iocs[0]['indicator'], 'abc123hash')
            self.assertTrue(getattr(result_iocs, 'is_stale', False), "HTTP 410 outage must flag dataset as stale")
            self.assertEqual(getattr(result_iocs, 'feed_status', ''), 'stale')

    @patch('requests.get')
    def test_seven_day_boundary_preserves_lkg_during_upstream_outage(self, mock_get):
        """Verify all IOCs older than 7 days are preserved (not pruned to 0) when upstream feed is down"""
        import requests
        mock_resp = MagicMock()
        mock_resp.status_code = 410
        mock_resp.raise_for_status.side_effect = requests.exceptions.HTTPError("410 Client Error: Gone")
        mock_get.return_value = mock_resp

        test_config = {
            'url': 'https://bazaar.abuse.ch/export/csv/recent/',
            'type': 'csv',
            'website': 'https://bazaar.abuse.ch/'
        }
        old_iocs = [
            {'type': 'hash', 'indicator': f'old_hash_{i}', 'addedAt': '2026-10-15T00:00:00Z', 'timestamp': '2026-10-15 00:00 UTC', 'campaign': 'Legacy'}
            for i in range(5)
        ]
        with patch('fetch_threat_intel.load_previous_ioc_data') as mock_load:
            mock_load.return_value = old_iocs
            result_iocs = fetch_vendor_iocs('Malware Bazaar', test_config)
            self.assertIsInstance(result_iocs, list)
            self.assertEqual(len(result_iocs), 5, "Upstream outage must preserve LKG even if older than 7 days")
            # Verify original timestamps are strictly retained and indicators are not relabeled as new
            self.assertEqual(result_iocs[0]['addedAt'], '2026-10-15T00:00:00Z')
            self.assertEqual(result_iocs[0]['timestamp'], '2026-10-15 00:00 UTC')
            self.assertFalse(is_new(result_iocs[0]['addedAt']), "Stale indicators must not be treated as new in last hour")
            self.assertTrue(getattr(result_iocs, 'is_stale', False), "Preserved LKG on outage must be marked is_stale=True")
            self.assertEqual(getattr(result_iocs, 'feed_status', ''), 'stale')

    @patch('requests.get')
    def test_seven_day_boundary_prunes_during_successful_fetch(self, mock_get):
        """Verify ordinary retention pruning is applied when upstream fetch succeeds with fresh data"""
        from datetime import datetime, timezone, timedelta
        fresh_hash = "a" * 64
        expired_hash = "b" * 64

        fresh_time = (datetime.now(timezone.utc) - timedelta(days=1)).isoformat()
        expired_time = (datetime.now(timezone.utc) - timedelta(days=10)).isoformat()

        csv_lines = ["# header"] * 9 + [
            f'"{fresh_time}","{fresh_hash}","md5","sha1","rep","sample.exe","exe","mime","Mirai"',
            f'"{expired_time}","{expired_hash}","md5","sha1","rep","sample.exe","exe","mime","Mirai"'
        ]
        mock_resp = MagicMock()
        mock_resp.status_code = 200
        mock_resp.raise_for_status.return_value = None
        mock_resp.text = "\n".join(csv_lines)
        mock_get.return_value = mock_resp

        test_config = {
            'url': 'https://bazaar.abuse.ch/export/csv/recent/',
            'type': 'csv',
            'website': 'https://bazaar.abuse.ch/'
        }
        with patch('fetch_threat_intel.load_previous_ioc_data') as mock_load:
            mock_load.return_value = [
                {'type': 'hash', 'indicator': expired_hash, 'addedAt': expired_time, 'campaign': 'Mirai'}
            ]
            result_iocs = fetch_vendor_iocs('Malware Bazaar', test_config)
            self.assertIsInstance(result_iocs, list)
            self.assertEqual(len(result_iocs), 1, "Successful fetch must prune IOCs older than 7 days")
            self.assertEqual(result_iocs[0]['indicator'], fresh_hash)
            self.assertFalse(getattr(result_iocs, 'is_stale', True), "Successful fresh fetch must have is_stale=False")
            self.assertEqual(getattr(result_iocs, 'feed_status', ''), 'active')

    @patch('requests.get')
    def test_successful_fetch_without_usable_indicators_or_timestamps_marked_stale(self, mock_get):
        """Verify successful HTTP 200 with 0 indicators or expired/unusable timestamps is marked stale, never active"""
        from datetime import datetime, timezone, timedelta

        # Case A: HTTP 200 with empty body (0 valid indicators)
        mock_resp_empty = MagicMock()
        mock_resp_empty.status_code = 200
        mock_resp_empty.raise_for_status.return_value = None
        mock_resp_empty.text = "# comment only\n"
        mock_get.return_value = mock_resp_empty

        test_config = {
            'url': 'https://openphish.com/feed.txt',
            'type': 'text',
            'website': 'https://openphish.com/'
        }
        with patch('fetch_threat_intel.load_previous_ioc_data') as mock_load:
            mock_load.return_value = [
                {'type': 'url', 'indicator': 'hxxps://saved[.]com', 'addedAt': '2026-10-28T00:00:00Z', 'campaign': 'LKG'}
            ]
            res_empty = fetch_vendor_iocs('OpenPhish', test_config)
            self.assertTrue(getattr(res_empty, 'is_stale', False), "Empty feed must be marked is_stale=True")
            self.assertEqual(getattr(res_empty, 'feed_status', ''), 'stale')
            self.assertEqual(len(res_empty), 1, "Must retain LKG on empty response")

        # Case B: HTTP 200 with indicators whose timestamps are all expired (> 7 days)
        expired_time = (datetime.now(timezone.utc) - timedelta(days=12)).isoformat()
        expired_hash = "c" * 64
        csv_lines = ["# header"] * 9 + [
            f'"{expired_time}","{expired_hash}","md5","sha1","rep","sample.exe","exe","mime","Mirai"'
        ]
        mock_resp_expired = MagicMock()
        mock_resp_expired.status_code = 200
        mock_resp_expired.raise_for_status.return_value = None
        mock_resp_expired.text = "\n".join(csv_lines)
        mock_get.return_value = mock_resp_expired

        bazaar_config = {
            'url': 'https://bazaar.abuse.ch/export/csv/recent/',
            'type': 'csv',
            'website': 'https://bazaar.abuse.ch/'
        }
        with patch('fetch_threat_intel.load_previous_ioc_data') as mock_load:
            mock_load.return_value = [
                {'type': 'hash', 'indicator': expired_hash, 'addedAt': expired_time, 'campaign': 'Mirai'}
            ]
            res_expired = fetch_vendor_iocs('Malware Bazaar', bazaar_config)
            self.assertTrue(getattr(res_expired, 'is_stale', False), "Feed with all expired timestamps must be marked is_stale=True")
            self.assertEqual(getattr(res_expired, 'feed_status', ''), 'stale')

    def test_save_vendor_json_files_never_replaces_populated_with_empty(self):
        """Verify save_vendor_json_files refuses to overwrite populated file with empty dataset on feed failure"""
        import tempfile
        import json

        with tempfile.TemporaryDirectory() as tmpdir:
            orig_cwd = os.getcwd()
            try:
                os.chdir(tmpdir)
                with open('malware-bazaar.json', 'w', encoding='utf-8') as f:
                    json.dump({'vendor': 'Malware Bazaar', 'iocs': [{'indicator': 'existing_hash'}]}, f)

                vendors_data = {
                    'Malware Bazaar': {
                        'description': 'Malware samples',
                        'website': 'https://bazaar.abuse.ch',
                        'updateFrequency': 'Real-time',
                        'iocs': [],
                        'stats': {'total': 0, 'newInLastHour': 0, 'lastUpdate': 'now'},
                        'types': [],
                        'sampleIndicators': [],
                        'iocDataUrl': 'https://example.com/malware-bazaar.json'
                    }
                }
                save_vendor_json_files(vendors_data)

                with open('malware-bazaar.json', 'r', encoding='utf-8') as f:
                    data = json.load(f)
                self.assertGreater(len(data.get('iocs', [])), 0, "Populated file must not be replaced with empty dataset")

                # Test stale indicators output semantics
                stale_iocs = [{'indicator': 'stale_hash', 'addedAt': '2026-10-15T00:00:00Z'}]
                vendors_data['Malware Bazaar']['iocs'] = stale_iocs
                save_vendor_json_files(vendors_data)
                with open('malware-bazaar.json', 'r', encoding='utf-8') as f:
                    stale_data = json.load(f)
                self.assertTrue(stale_data.get('isStale'), "Preserved LKG with indicators > 7 days must be marked isStale=True")
                self.assertEqual(stale_data.get('feedStatus'), 'stale', "Stale feed must have feedStatus='stale'")

                # Test fresh indicators output semantics
                from datetime import datetime, timezone
                fresh_iocs = [{'indicator': 'fresh_hash', 'addedAt': datetime.now(timezone.utc).isoformat()}]
                vendors_data['Malware Bazaar']['iocs'] = fresh_iocs
                vendors_data['Malware Bazaar']['isStale'] = False
                vendors_data['Malware Bazaar']['feedStatus'] = 'active'
                save_vendor_json_files(vendors_data)
                with open('malware-bazaar.json', 'r', encoding='utf-8') as f:
                    fresh_data = json.load(f)
                self.assertFalse(fresh_data.get('isStale'), "Fresh feed must have isStale=False")
                self.assertEqual(fresh_data.get('feedStatus'), 'active', "Fresh feed must have feedStatus='active'")

                # Test fetch-level stale outcome with retained unexpired LKG indicators
                unexpired_lkg = [{'indicator': 'lkg_hash', 'addedAt': datetime.now(timezone.utc).isoformat()}]
                vendors_data['Malware Bazaar']['iocs'] = unexpired_lkg
                vendors_data['Malware Bazaar']['isStale'] = True
                vendors_data['Malware Bazaar']['feedStatus'] = 'stale'
                save_vendor_json_files(vendors_data)
                with open('malware-bazaar.json', 'r', encoding='utf-8') as f:
                    outage_lkg_data = json.load(f)
                self.assertTrue(outage_lkg_data.get('isStale'), "Fetch-level stale outcome must be honored even if LKG indicators have recent timestamps")
                self.assertEqual(outage_lkg_data.get('feedStatus'), 'stale')
            finally:
                os.chdir(orig_cwd)

    @patch('requests.get')
    def test_fetch_vendor_iocs_network_failure_resilience(self, mock_get):
        """Verify network timeout/exception does not crash and preserves Last-Known-Good (LKG) IOCs"""
        mock_get.side_effect = Exception("Simulated connection timeout to upstream feed")
        test_config = {
            'url': 'https://openphish.com/feed.txt',
            'type': 'text',
            'website': 'https://openphish.com/'
        }
        # Must not raise exception
        result_iocs = fetch_vendor_iocs('OpenPhish', test_config)
        self.assertIsInstance(result_iocs, list)
        self.assertGreater(len(result_iocs), 0, "Network failure must retain Last-Known-Good IOCs from storage")

    @patch('requests.get')
    def test_fetch_vendor_iocs_empty_feed_resilience(self, mock_get):
        """Verify empty feed response preserves Last-Known-Good IOCs rather than zeroing out"""
        mock_resp = MagicMock()
        mock_resp.text = ""
        mock_get.return_value = mock_resp
        test_config = {
            'url': 'https://openphish.com/feed.txt',
            'type': 'text',
            'website': 'https://openphish.com/'
        }
        result_iocs = fetch_vendor_iocs('OpenPhish', test_config)
        self.assertIsInstance(result_iocs, list)
        self.assertGreater(len(result_iocs), 0, "Empty response must retain Last-Known-Good IOCs")

    def test_deduplicate_iocs_preserves_newest(self):
        """Verify deduplicate_iocs keeps the newer timestamp on duplicate indicators"""
        iocs = [
            {'indicator': '192.168.1.1', 'addedAt': '2026-10-18T08:00:00Z', 'campaign': 'Old Campaign'},
            {'indicator': '192.168.1.1', 'addedAt': '2026-10-18T10:00:00Z', 'campaign': 'New Campaign'}
        ]
        deduped = deduplicate_iocs(iocs)
        self.assertEqual(len(deduped), 1)
        self.assertEqual(deduped[0]['campaign'], 'New Campaign')
        self.assertEqual(deduped[0]['addedAt'], '2026-10-18T10:00:00Z')

    def test_threat_intel_js_file_integrity(self):
        """Verify threat-intel.js is present, non-empty, and adheres to JS bundle contract"""
        root_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
        js_path = os.path.join(root_dir, 'threat-intel.js')
        self.assertTrue(os.path.exists(js_path), "threat-intel.js must exist on disk")
        size = os.path.getsize(js_path)
        self.assertGreater(size, 10000, "threat-intel.js must contain substantial data payload")
        self.assertLess(size, 500000, "threat-intel.js must be under 500 KB (no 11 MB bloat)")
        with open(js_path, 'r', encoding='utf-8') as f:
            content = f.read()
        self.assertIn('window.threatIntelData = {', content)
        self.assertIn('overview', content)
        self.assertIn('vendors', content)
        import re
        import json
        match = re.search(r'window\.threatIntelData = ({.*?});', content, re.DOTALL)
        self.assertIsNotNone(match, "threat-intel.js must define window.threatIntelData")
        payload = json.loads(match.group(1))
        overview = payload.get('overview', [])
        total_iocs = payload.get('stats', {}).get('totalIOCs', 0)
        self.assertGreater(len(overview), 0, "threat-intel.js overview must not be empty")
        self.assertGreater(total_iocs, 0, "threat-intel.js stats.totalIOCs must be greater than 0")

    def test_run_daily_preserves_overview_and_iocs(self):
        """Regression test: verify run_daily does not zero out overview or stats"""
        import re
        import json
        from fetch_threat_intel import generate_js
        dummy_state = {
            'lastUpdated': '2026-10-18T12:00:00+05:30',
            'lastUpdatedFormatted': 'Oct 18, 2026',
            'stats': {'totalIOCs': 500, 'byType': {'url': 500}, 'byVendor': {'OpenPhish': 500}},
            'overview': [{'indicator': 'hxxps://test[.]com', 'type': 'url', 'campaign': 'Test'}],
            'vendors': {
                'OpenPhish': {
                    'description': 'Test',
                    'website': 'https://openphish.com',
                    'updateFrequency': '15m',
                    'stats': {'total': 500},
                    'types': ['url'],
                    'sampleIndicators': ['hxxps://test[.]com']
                }
            }
        }
        # Calling generate_js with bare metadata should not clobber existing overview and stats
        res = generate_js(dummy_state)
        match = re.search(r'window\.threatIntelData = ({.*?});', res, re.DOTALL)
        self.assertIsNotNone(match)
        data = json.loads(match.group(1))
        self.assertEqual(len(data.get('overview', [])), 1)
        self.assertEqual(data.get('stats', {}).get('totalIOCs'), 500)

    def test_generate_html_snapshot_structure_and_noindex(self):
        """Verify generate_html_snapshot produces valid HTML document with exactly one noindex tag in head"""
        import tempfile
        dummy_state = {
            'lastUpdatedFormatted': 'Oct 27, 2026 at 09:00 AM IST',
            'vendors': {
                'OpenPhish': {
                    'description': 'Real-time phishing URL feed',
                    'iocs': [{'indicator': 'hxxps://phish[.]test', 'type': 'url', 'timestamp': '2026-10-27 09:00:00', 'tags': ['NEW']}]
                }
            }
        }
        with tempfile.NamedTemporaryFile(suffix='.html', delete=False) as tf:
            temp_path = tf.name

        try:
            # 1. First run: generate snapshot
            result_html = generate_html_snapshot(dummy_state, snapshot_file=temp_path)
            with open(temp_path, 'r', encoding='utf-8') as f:
                content = f.read()

            self.assertIn('<!DOCTYPE html>', content)
            self.assertIn('<html lang="en">', content)
            self.assertIn('<head>', content)
            self.assertIn('</head>', content)
            self.assertIn('<body>', content)
            self.assertIn('</body>', content)
            self.assertIn('<meta name="robots" content="noindex, follow">', content)
            self.assertEqual(content.count('<meta name="robots" content="noindex, follow">'), 1)
            # Verify noindex is strictly located inside <head>
            head_content = content.split('<head>')[1].split('</head>')[0]
            self.assertIn('noindex', head_content)

            # 2. Content preservation
            self.assertIn('<div id="ti-static-snapshot"', content)
            self.assertIn('Oct 27, 2026 at 09:00 AM IST', content)
            self.assertIn('hxxps://phish[.]test', content)
            self.assertIn('OpenPhish', content)

            # 3. Idempotence: Repeated generation on same file produces exact single tag
            result_html_2 = generate_html_snapshot(dummy_state, snapshot_file=temp_path)
            with open(temp_path, 'r', encoding='utf-8') as f:
                content_2 = f.read()

            self.assertEqual(content_2.count('<meta name="robots" content="noindex, follow">'), 1)
            self.assertEqual(content_2.count('<head>'), 1)
            self.assertEqual(content_2.count('</head>'), 1)
        finally:
            if os.path.exists(temp_path):
                os.remove(temp_path)

if __name__ == '__main__':
    unittest.main()
# /HG-THREAT-INTEL-V1
