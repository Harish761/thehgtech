import unittest
from pathlib import Path

class TestGA4Tracking(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.repo_root = Path(__file__).resolve().parent.parent

    def test_01_all_core_pages_have_ga4(self):
        core_pages = [
            'index.html',
            'articles.html',
            'cve-tracker.html',
            'ransomware-tracker.html',
            'threat-intel.html',
            'about.html',
            'newsletter.html',
            'community.html',
            'privacy.html',
            'articles/tcs-digital-experience-monitoring-controversy.html',
            'articles/beyond-klue-salesforce-saas-trust-crisis-2026.html',
        ]
        for p in core_pages:
            path = self.repo_root / p
            self.assertTrue(path.exists(), f"File does not exist: {p}")
            content = path.read_text(encoding='utf-8')
            self.assertIn('G-XL6RCXZJE2', content, f"GA4 missing from {p}")

    def test_02_index_html_no_artificial_delay(self):
        index_content = (self.repo_root / 'index.html').read_text(encoding='utf-8')
        self.assertNotIn('setTimeout(initGA, 3500)', index_content)
        self.assertNotIn('initGA()', index_content)

if __name__ == '__main__':
    unittest.main()
