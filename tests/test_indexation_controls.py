import unittest
import re
from pathlib import Path

class TestIndexationControls(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.repo_root = Path(__file__).resolve().parent.parent
        cls.controls_dir = cls.repo_root / 'tools' / 'grc-assessment' / 'controls'
        cls.robots_txt = cls.repo_root / 'robots.txt'
        cls.gitignore = cls.repo_root / '.gitignore'

    def test_01_grc_controls_have_noindex(self):
        for f in self.controls_dir.glob('*.html'):
            if f.name == 'index.html':
                # Hub page MUST remain indexable
                content = f.read_text(encoding='utf-8')
                self.assertNotIn('noindex', content, f"{f.name} hub should not have noindex")
            else:
                # 105 individual programmatic control pages MUST have noindex
                content = f.read_text(encoding='utf-8')
                self.assertIn('noindex', content, f"{f.name} missing noindex meta tag")

    def test_02_utility_pages_have_noindex(self):
        for u in ['ti-snapshot.html', 'test_breach_output.html']:
            p = self.repo_root / u
            if p.exists():
                content = p.read_text(encoding='utf-8')
                self.assertIn('noindex', content, f"Utility page {u} missing noindex")
                self.assertIn('<head>', content, f"Utility page {u} missing <head> tag")
                self.assertIn('</head>', content, f"Utility page {u} missing </head> tag")
                head_content = content.split('<head>')[1].split('</head>')[0]
                self.assertIn('noindex', head_content, f"Utility page {u} noindex directive must be located inside <head>")
                # Ensure exactly one robots noindex meta tag exists
                noindex_matches = re.findall(r'<meta[^>]*robots[^>]*noindex', content, re.IGNORECASE)
                self.assertEqual(len(noindex_matches), 1, f"Utility page {u} must contain exactly one robots noindex tag, found {len(noindex_matches)}")

    def test_03_robots_txt_rules(self):
        content = self.robots_txt.read_text(encoding='utf-8')
        # Private/build folders disallowed
        self.assertIn('Disallow: /dist/', content)
        self.assertIn('Disallow: /scripts/', content)
        self.assertIn('Disallow: /templates/', content)
        # Utility pages must NOT be disallowed in robots.txt so crawlers can reach the noindex tag
        self.assertNotIn('Disallow: /ti-snapshot.html', content)
        self.assertNotIn('Disallow: /test_breach_output.html', content)
        # Primary public routes and data feeds must remain allowed
        self.assertNotIn('Disallow: /articles/', content)
        self.assertNotIn('Disallow: /guides/', content)
        self.assertNotIn('Disallow: /ioc-data/', content)

    def test_04_gitignore_rules(self):
        content = self.gitignore.read_text(encoding='utf-8')
        self.assertIn('node_modules/', content)
        self.assertIn('dist/', content)
        self.assertIn('test_breach_output.html', content)

    def test_05_grc_controls_navigation(self):
        hub_file = self.controls_dir / 'index.html'
        self.assertTrue(hub_file.exists(), "GRC controls index.html missing")
        content = hub_file.read_text(encoding='utf-8')

        # No placeholder broken-link attributes should remain
        self.assertNotIn('data-removed-broken-link', content, "Placeholder data-removed-broken-link attributes remain")

        # Find all control links inside the grid
        control_links = re.findall(r'<a href="([^"]+)">([^<]+)</a>', content)
        # Exclude the back link if present
        actual_controls = [(href, title) for href, title in control_links if not href.startswith('/')]

        self.assertEqual(len(actual_controls), 105, f"Expected 105 control links, found {len(actual_controls)}")

        for href, title in actual_controls:
            target_file = self.controls_dir / href
            self.assertTrue(target_file.exists(), f"Control link '{title}' points to non-existent file: {href}")

if __name__ == '__main__':
    unittest.main()
