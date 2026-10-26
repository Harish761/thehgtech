import unittest
import xml.etree.ElementTree as ET
from pathlib import Path
import email.utils

class TestSitemapGenerator(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.repo_root = Path(__file__).resolve().parent.parent
        cls.sitemap_path = cls.repo_root / 'sitemap.xml'
        cls.news_sitemap_path = cls.repo_root / 'news-sitemap.xml'
        cls.rss_path = cls.repo_root / 'rss.xml'

    def test_01_sitemap_xml_validity(self):
        self.assertTrue(self.sitemap_path.exists())
        tree = ET.parse(self.sitemap_path)
        root = tree.getroot()
        self.assertIn('urlset', root.tag)

        urls = []
        ns = {'ns': 'http://www.sitemaps.org/schemas/sitemap/0.9'}
        for url_tag in root.findall('ns:url', ns):
            loc = url_tag.find('ns:loc', ns).text
            urls.append(loc)
            self.assertTrue(loc.startswith('https://thehgtech.com/'))
            lastmod = url_tag.find('ns:lastmod', ns).text
            self.assertRegex(lastmod, r'^\d{4}-\d{2}-\d{2}')

        # No duplicate URLs
        self.assertEqual(len(urls), len(set(urls)), "Duplicate URLs found in sitemap.xml")

        # Must include core pages
        self.assertIn('https://thehgtech.com/', urls)
        self.assertIn('https://thehgtech.com/articles.html', urls)
        self.assertIn('https://thehgtech.com/cve-tracker.html', urls)

        # Must exclude redirect stubs
        self.assertNotIn('https://thehgtech.com/articles/windows-vs-macos-endpoint-security-2026.html', urls)
        self.assertNotIn('https://thehgtech.com/guides/incident-response-plan.html', urls)

        # Must exclude non-canonical utility pages
        self.assertNotIn('https://thehgtech.com/ti-snapshot.html', urls)
        self.assertNotIn('https://thehgtech.com/test_breach_output.html', urls)

    def test_02_news_sitemap_xml_validity(self):
        self.assertTrue(self.news_sitemap_path.exists())
        tree = ET.parse(self.news_sitemap_path)
        root = tree.getroot()
        self.assertIn('urlset', root.tag)

    def test_03_rss_xml_validity(self):
        self.assertTrue(self.rss_path.exists())
        tree = ET.parse(self.rss_path)
        root = tree.getroot()
        self.assertEqual(root.tag, 'rss')
        self.assertEqual(root.attrib.get('version'), '2.0')

        channel = root.find('channel')
        self.assertIsNotNone(channel)
        items = channel.findall('item')
        self.assertGreater(len(items), 0)
        self.assertLessEqual(len(items), 30)

        for item in items:
            title = item.find('title').text
            link = item.find('link').text
            pub_date = item.find('pubDate').text
            self.assertTrue(title)
            self.assertTrue(link.startswith('https://thehgtech.com/'))
            # Verify RFC 822 date
            parsed_date = email.utils.parsedate(pub_date)
            self.assertIsNotNone(parsed_date)

if __name__ == '__main__':
    unittest.main()
