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
        """Verify vendor slug resolution correctly handles dots and hyphens (e.g. Blocklist.de)"""
        blocklist_iocs = load_previous_ioc_data("Blocklist.de")
        self.assertIsInstance(blocklist_iocs, list)
        self.assertGreater(len(blocklist_iocs), 0, "Blocklist.de IOCs must be found in ioc-data/blocklist-de.json")

        bazaar_iocs = load_previous_ioc_data("Malware Bazaar")
        self.assertIsInstance(bazaar_iocs, list)
        self.assertGreater(len(bazaar_iocs), 0, "Malware Bazaar IOCs must be found in ioc-data/malware-bazaar.json")

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
