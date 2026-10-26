import unittest
import json
import re
from pathlib import Path

class TestStructuredDataAndMetadata(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.repo_root = Path(__file__).resolve().parent.parent
        cls.articles = list((cls.repo_root / 'articles').glob('*.html'))
        cls.guides = list((cls.repo_root / 'guides').glob('*.html'))
        cls.all_content_pages = [f for f in cls.articles + cls.guides if f.name != 'index.html']

    def test_01_no_duplicate_article_schemas(self):
        for f in self.all_content_pages:
            content = f.read_text(encoding='utf-8')
            blocks = re.findall(r'<script type=[\"\']application/ld\+json[\"\']>(.*?)</script>', content, re.DOTALL)
            art_schemas = []
            for b in blocks:
                try:
                    d = json.loads(b.strip())
                    if isinstance(d, dict) and d.get('@type') in ['Article', 'NewsArticle', 'TechArticle', 'BlogPosting']:
                        art_schemas.append(d)
                except Exception as e:
                    self.fail(f"Invalid JSON-LD in {f.name}: {e}")

            self.assertLessEqual(
                len(art_schemas), 1,
                f"Page {f.name} still has {len(art_schemas)} article schemas: {[s.get('headline') for s in art_schemas]}"
            )

    def test_02_no_empty_headlines(self):
        for f in self.all_content_pages:
            content = f.read_text(encoding='utf-8')
            blocks = re.findall(r'<script type=[\"\']application/ld\+json[\"\']>(.*?)</script>', content, re.DOTALL)
            for b in blocks:
                try:
                    d = json.loads(b.strip())
                    if isinstance(d, dict) and d.get('@type') in ['Article', 'NewsArticle', 'TechArticle']:
                        headline = d.get('headline')
                        self.assertIsNotNone(headline, f"Headline missing in {f.name}")
                        self.assertNotEqual(headline.strip(), "", f"Headline is empty in {f.name}")
                except Exception:
                    pass

    def test_03_no_broken_publisher_logos(self):
        for f in self.all_content_pages:
            content = f.read_text(encoding='utf-8')
            self.assertNotIn('https://thehgtech.com/images/logo-dark.png', content, f"Broken logo URL in {f.name}")
            self.assertNotIn('"url": "https://thehgtech.com/logo.png"', content, f"Old logo URL in {f.name}")

    def test_04_no_broken_breadcrumb_guide_urls(self):
        for f in self.all_content_pages:
            content = f.read_text(encoding='utf-8')
            self.assertNotIn('https://thehgtech.com/guides.html', content, f"404 breadcrumb guides.html in {f.name}")

    def test_05_no_duplicate_meta_descriptions(self):
        for f in self.all_content_pages:
            content = f.read_text(encoding='utf-8')
            descs = re.findall(r'<meta\s+name=[\"\']description[\"\'].*?>', content, re.DOTALL | re.IGNORECASE)
            self.assertLessEqual(len(descs), 1, f"Page {f.name} has {len(descs)} meta description tags")

    def test_06_entity_ids_in_index_and_about(self):
        index_content = (self.repo_root / 'index.html').read_text(encoding='utf-8')
        about_content = (self.repo_root / 'about.html').read_text(encoding='utf-8')

        self.assertIn('"@id": "https://thehgtech.com/#organization"', index_content)
        self.assertIn('"@id": "https://thehgtech.com/about.html#harish-g"', about_content)

    def test_07_author_linkedin_standardization(self):
        for f in self.all_content_pages:
            content = f.read_text(encoding='utf-8')
            self.assertNotIn('harish-g-03704815a', content, f"Outdated LinkedIn in {f.name}")
            self.assertNotIn('harish-g-4648781a7', content, f"Outdated LinkedIn in {f.name}")

if __name__ == '__main__':
    unittest.main()
