import unittest
import hashlib
import json
import re
import subprocess
from pathlib import Path

class TestPaginationIdempotency(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.repo_root = Path(__file__).resolve().parent.parent
        cls.script_path = cls.repo_root / 'scripts' / 'generate_pagination.py'
        cls.articles_html = cls.repo_root / 'articles.html'
        cls.index_html = cls.repo_root / 'index.html'
        cls.guides_html = cls.repo_root / 'guides' / 'index.html'
        cls.pages_dir = cls.repo_root / 'articles' / 'page'

    def test_01_script_runs_successfully(self):
        res = subprocess.run(['python3', str(self.script_path)], capture_output=True, text=True)
        self.assertEqual(res.returncode, 0, f"Script failed: {res.stderr}")

    def test_02_idempotency_no_diff_on_repeated_runs(self):
        # Hash all targets before
        def hash_files():
            hashes = {}
            for p in [self.articles_html, self.index_html, self.guides_html] + list(self.pages_dir.glob('*/index.html')):
                hashes[str(p)] = hashlib.sha256(p.read_bytes()).hexdigest()
            return hashes

        h1 = hash_files()
        res = subprocess.run(['python3', str(self.script_path)], capture_output=True, text=True)
        self.assertEqual(res.returncode, 0)
        h2 = hash_files()

        for path, hash_val in h1.items():
            self.assertEqual(hash_val, h2.get(path), f"File changed on repeated run: {path}")

    def test_03_no_excessive_noscript_accumulation(self):
        articles_content = self.articles_html.read_text(encoding='utf-8')
        index_content = self.index_html.read_text(encoding='utf-8')

        # The only noscript in articles.html should be fontawesome + 1 fallback block (was 83)
        self.assertLessEqual(articles_content.count('<noscript>'), 2)
        # index.html should have at most 4 legitimate noscript blocks (was 85)
        self.assertLessEqual(index_content.count('<noscript>'), 4)

    def test_04_root_relative_json_fetch(self):
        articles_content = self.articles_html.read_text(encoding='utf-8')
        page2_html = self.pages_dir / '2' / 'index.html'
        self.assertTrue(page2_html.exists())
        page2_content = page2_html.read_text(encoding='utf-8')

        self.assertIn("fetch('/ioc-data/articles.json", articles_content)
        self.assertIn("fetch('/ioc-data/articles.json", page2_content)
        self.assertNotIn("fetch('ioc-data/articles.json", page2_content)

    def test_05_no_dummy_hash_links_in_generated_fallbacks(self):
        articles_content = self.articles_html.read_text(encoding='utf-8')
        # Check links in fallback block
        marker_start = "<!-- GENERATED-ARTICLES-FALLBACK-START -->"
        marker_end = "<!-- GENERATED-ARTICLES-FALLBACK-END -->"
        if marker_start in articles_content and marker_end in articles_content:
            fallback = articles_content.split(marker_start)[1].split(marker_end)[0]
            self.assertNotIn('href="/#"', fallback)
            self.assertNotIn('href="#"', fallback)
            self.assertNotIn('href="None"', fallback)
            self.assertNotIn('href="/None"', fallback)

    def test_06_unique_titles_and_canonicals(self):
        page1 = (self.pages_dir / '1' / 'index.html').read_text(encoding='utf-8')
        page2 = (self.pages_dir / '2' / 'index.html').read_text(encoding='utf-8')

        self.assertIn('href="https://thehgtech.com/articles.html"', page1)
        self.assertIn('href="https://thehgtech.com/articles/page/2/"', page2)
        self.assertIn('<title>Cybersecurity & AI Articles - Page 2 | TheHGTech</title>', page2)

if __name__ == '__main__':
    unittest.main()
