import email.utils
import re
import unittest
import xml.etree.ElementTree as ET
from pathlib import Path


class TestSitemapGenerator(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.repo_root = Path(__file__).resolve().parent.parent
        cls.sitemap_path = cls.repo_root / "sitemap.xml"
        cls.news_sitemap_path = cls.repo_root / "news-sitemap.xml"
        cls.rss_path = cls.repo_root / "rss.xml"
        cls.robots_path = cls.repo_root / "robots.txt"

    def test_01_sitemap_xml_validity(self):
        self.assertTrue(self.sitemap_path.exists())
        tree = ET.parse(self.sitemap_path)
        root = tree.getroot()
        self.assertIn("urlset", root.tag)

        urls = []
        ns = {"ns": "http://www.sitemaps.org/schemas/sitemap/0.9"}
        for url_tag in root.findall("ns:url", ns):
            loc = url_tag.find("ns:loc", ns).text
            urls.append(loc)
            self.assertTrue(loc.startswith("https://thehgtech.com/"))
            lastmod_el = url_tag.find("ns:lastmod", ns)
            if lastmod_el is not None and lastmod_el.text:
                self.assertRegex(lastmod_el.text, r"^\d{4}-\d{2}-\d{2}")

        # No duplicate URLs
        self.assertEqual(len(urls), len(set(urls)), "Duplicate URLs found in sitemap.xml")

        # Must include core indexable hubs
        for required in [
            "https://thehgtech.com/",
            "https://thehgtech.com/cve-tracker.html",
            "https://thehgtech.com/threat-intel.html",
            "https://thehgtech.com/ransomware-tracker.html",
            "https://thehgtech.com/hacker-chatter.html",
            "https://thehgtech.com/guides/",
            "https://thehgtech.com/comparisons/",
            "https://thehgtech.com/workflows/",
            "https://thehgtech.com/editorial-standards.html",
            "https://thehgtech.com/tools/grc-assessment/",
            "https://thehgtech.com/tools/grc-assessment/iso27001-grc-guide.html",
            "https://thehgtech.com/tools/grc-assessment/controls/",
            "https://thehgtech.com/articles/article-coupang-breach-2025.html",
        ]:
            self.assertIn(required, urls, f"Required indexable hub missing from sitemap.xml: {required}")

        # Must exclude noindex archives while they remain noindex
        self.assertNotIn("https://thehgtech.com/articles.html", urls)
        self.assertNotIn("https://thehgtech.com/article-list.html", urls)
        self.assertNotIn("https://thehgtech.com/articles-list.html", urls)

        # Must exclude redirect stubs
        self.assertNotIn("https://thehgtech.com/articles/windows-vs-macos-endpoint-security-2026.html", urls)
        self.assertNotIn("https://thehgtech.com/guides/incident-response-plan.html", urls)

        # Must exclude non-canonical utility pages
        self.assertNotIn("https://thehgtech.com/ti-snapshot.html", urls)
        self.assertNotIn("https://thehgtech.com/test_breach_output.html", urls)

    def test_02_news_sitemap_xml_validity_and_not_advertised_in_robots(self):
        self.assertTrue(self.news_sitemap_path.exists())
        tree = ET.parse(self.news_sitemap_path)
        root = tree.getroot()
        self.assertIn("urlset", root.tag)

        # No redirect stub should ever appear in news-sitemap.xml
        raw_news = self.news_sitemap_path.read_text(encoding="utf-8")
        self.assertNotIn("windows-vs-macos-endpoint-security-2026.html", raw_news)
        self.assertNotIn("Redirecting...", raw_news)

        # robots.txt should advertise sitemap.xml only, not retired/empty news-sitemap.xml
        robots_txt = self.robots_path.read_text(encoding="utf-8")
        self.assertIn("Sitemap: https://thehgtech.com/sitemap.xml", robots_txt)
        self.assertNotIn("news-sitemap.xml", robots_txt)

    def test_03_robots_txt_no_bot_allow_override(self):
        robots_txt = self.robots_path.read_text(encoding="utf-8")
        # Ensure Googlebot / Bingbot / etc. do not define separate Allow: / groups overriding User-agent: *
        for bot in ("Googlebot", "Bingbot", "DuckDuckBot", "GPTBot", "Claude-Web"):
            self.assertNotRegex(
                robots_txt,
                rf"(?mi)^User-agent:\s*{re.escape(bot)}\s*$",
                f"robots.txt must not override User-agent: * with separate {bot} group",
            )
        # Preserve scraper blocks
        self.assertIn("User-agent: AhrefsBot", robots_txt)
        self.assertIn("User-agent: SemrushBot", robots_txt)

    def test_04_rss_xml_validity(self):
        self.assertTrue(self.rss_path.exists())
        tree = ET.parse(self.rss_path)
        root = tree.getroot()
        self.assertEqual(root.tag, "rss")
        self.assertEqual(root.attrib.get("version"), "2.0")

        channel = root.find("channel")
        self.assertIsNotNone(channel)
        items = channel.findall("item")
        self.assertGreater(len(items), 0)
        self.assertLessEqual(len(items), 30)

        for item in items:
            title = item.find("title").text
            link = item.find("link").text
            pub_date = item.find("pubDate").text
            self.assertTrue(title)
            self.assertTrue(link.startswith("https://thehgtech.com/"))
            self.assertNotIn("windows-vs-macos-endpoint-security-2026.html", link)
            parsed_date = email.utils.parsedate(pub_date)
            self.assertIsNotNone(parsed_date)


if __name__ == "__main__":
    unittest.main()
