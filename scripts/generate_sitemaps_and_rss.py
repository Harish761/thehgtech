import os
import re
import json
import html
from datetime import datetime, timezone
import email.utils
from pathlib import Path

repo_root = Path(__file__).resolve().parent.parent
base_url = 'https://thehgtech.com'

def is_noindex_or_redirect(content):
    """Check if the HTML page contains noindex directive or is a redirect stub."""
    if re.search(r'<meta\s+name=[\"\']robots[\"\'][^>]*content=[\"\'][^\"\']*noindex', content, re.IGNORECASE):
        return True
    if re.search(r'<meta\s+http-equiv=[\"\']refresh[\"\']', content, re.IGNORECASE):
        return True
    return False

def extract_metadata(filepath):
    """Extract metadata including title, description, and true datePublished/dateModified."""
    try:
        content = filepath.read_text(encoding='utf-8')
    except Exception:
        return None

    if is_noindex_or_redirect(content):
        return None

    # Title
    title = ""
    title_match = re.search(r'<title>(.*?)</title>', content, re.IGNORECASE | re.DOTALL)
    if title_match:
        raw_title = title_match.group(1).strip()
        title = raw_title.split(' | ')[0].split(' - ')[0].strip()

    # Meta Description
    description = ""
    desc_match = re.search(r'<meta\s+name=[\"\']description[\"\']\s+content=[\"\'](.*?)[\"\']', content, re.IGNORECASE | re.DOTALL)
    if desc_match:
        description = desc_match.group(1).strip()
    else:
        og_desc = re.search(r'<meta\s+property=[\"\']og:description[\"\']\s+content=[\"\'](.*?)[\"\']', content, re.IGNORECASE | re.DOTALL)
        if og_desc:
            description = og_desc.group(1).strip()

    # Date extraction: search all JSON-LD blocks for true dates
    date_published = None
    date_modified = None
    
    json_ld_blocks = re.findall(r'<script type=[\"\']application/ld\+json[\"\']>(.*?)</script>', content, re.DOTALL)
    for block in json_ld_blocks:
        try:
            data = json.loads(block.strip())
            if isinstance(data, dict):
                t = data.get('@type', '')
                if t in ['Article', 'NewsArticle', 'TechArticle', 'BlogPosting']:
                    dp = data.get('datePublished')
                    dm = data.get('dateModified')
                    # Avoid placeholder date 2025-01-01 if another date exists
                    if dp and dp != '2025-01-01':
                        date_published = dp
                    if dm and dm != '2026-06-26':
                        date_modified = dm
        except Exception:
            pass

    # Fallback to visible meta if no json-ld date
    if not date_published:
        meta_date = re.search(r'<meta\s+property=[\"\']article:published_time[\"\']\s+content=[\"\'](.*?)[\"\']', content)
        if meta_date:
            date_published = meta_date.group(1).strip()

    # Determine best date for lastmod (modified > published > file mtime)
    best_date_str = date_modified or date_published
    parsed_dt = None
    if best_date_str:
        try:
            # Handle YYYY-MM-DD or ISO formats
            if len(best_date_str) == 10:
                parsed_dt = datetime.strptime(best_date_str, '%Y-%m-%d').replace(tzinfo=timezone.utc)
            else:
                clean_iso = best_date_str.replace('Z', '+00:00')
                parsed_dt = datetime.fromisoformat(clean_iso)
        except Exception:
            parsed_dt = None

    if not parsed_dt:
        mtime = os.path.getmtime(filepath)
        parsed_dt = datetime.fromtimestamp(mtime, tz=timezone.utc)

    iso_date = parsed_dt.strftime('%Y-%m-%d')
    full_iso_date = parsed_dt.isoformat()

    return {
        'title': title or filepath.stem.replace('-', ' ').title(),
        'description': description,
        'lastmod': iso_date,
        'datetime': parsed_dt,
        'iso_datetime': full_iso_date
    }

def build_sitemaps():
    all_pages = []
    news_pages = []
    seen_urls = set()

    # 1. Core pages (exclude non-canonical or utility pages)
    core_pages = [
        ('', 'index.html', '1.0'),
        ('articles.html', 'articles.html', '0.9'),
        ('cve-tracker.html', 'cve-tracker.html', '0.9'),
        ('ransomware-tracker.html', 'ransomware-tracker.html', '0.9'),
        ('threat-intel.html', 'threat-intel.html', '0.9'),
        ('about.html', 'about.html', '0.8'),
        ('newsletter.html', 'newsletter.html', '0.7'),
        ('community.html', 'community.html', '0.7'),
        ('privacy.html', 'privacy.html', '0.5'),
        ('tools/grc-assessment/', 'tools/grc-assessment/index.html', '0.8'),
        ('guides/', 'guides/index.html', '0.9'),
    ]

    for url_suffix, rel_path, priority in core_pages:
        full_path = repo_root / rel_path
        if full_path.exists():
            meta = extract_metadata(full_path)
            if meta:
                target_url = f"{base_url}/{url_suffix}" if url_suffix else f"{base_url}/"
                all_pages.append({
                    'url': target_url,
                    'lastmod': meta['lastmod'],
                    'priority': priority,
                    'title': meta['title'],
                    'description': meta['description'],
                    'datetime': meta['datetime'],
                    'is_news': False
                })
                seen_urls.add(target_url)

    # 2. Section pages: articles, guides, comparisons
    sections = [
        ('articles', '/articles/', '0.8', True),
        ('guides', '/guides/', '0.8', False),
        ('comparisons', '/comparisons/', '0.8', False),
    ]

    for section_dir_name, url_prefix, priority, is_news_sec in sections:
        section_dir = repo_root / section_dir_name
        if not section_dir.exists():
            continue

        for html_file in sorted(section_dir.glob('*.html')):
            if html_file.name == 'index.html':
                continue
            meta = extract_metadata(html_file)
            if not meta:
                continue

            url = f"{base_url}{url_prefix}{html_file.name}"
            if url in seen_urls:
                continue
            seen_urls.add(url)

            page_info = {
                'url': url,
                'lastmod': meta['lastmod'],
                'priority': priority,
                'title': meta['title'],
                'description': meta['description'],
                'datetime': meta['datetime'],
                'iso_datetime': meta['iso_datetime'],
                'is_news': is_news_sec
            }
            all_pages.append(page_info)
            if is_news_sec:
                news_pages.append(page_info)

    # Sort all pages by url
    all_pages.sort(key=lambda x: x['url'])

    # 1. Generate sitemap.xml
    sitemap_xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
    sitemap_xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
    for page in all_pages:
        sitemap_xml += '  <url>\n'
        sitemap_xml += f'    <loc>{html.escape(page["url"])}</loc>\n'
        sitemap_xml += f'    <lastmod>{page["lastmod"]}</lastmod>\n'
        sitemap_xml += f'    <priority>{page["priority"]}</priority>\n'
        sitemap_xml += '  </url>\n'
    sitemap_xml += '</urlset>\n'

    sitemap_path = repo_root / 'sitemap.xml'
    sitemap_path.write_text(sitemap_xml, encoding='utf-8')
    print(f"Generated {sitemap_path} ({len(all_pages)} URLs)")

    # 2. Generate news-sitemap.xml (Google News strictly requires articles published within the last 48 hours)
    now_utc = datetime.now(timezone.utc)
    recent_news = [
        p for p in news_pages 
        if (now_utc - p['datetime']).total_seconds() <= (48 * 3600) and (now_utc - p['datetime']).total_seconds() >= 0
    ]

    news_sitemap_xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
    news_sitemap_xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">\n'
    
    for page in recent_news:
        news_sitemap_xml += '  <url>\n'
        news_sitemap_xml += f'    <loc>{html.escape(page["url"])}</loc>\n'
        news_sitemap_xml += '    <news:news>\n'
        news_sitemap_xml += '      <news:publication>\n'
        news_sitemap_xml += '        <news:name>TheHGTech</news:name>\n'
        news_sitemap_xml += '        <news:language>en</news:language>\n'
        news_sitemap_xml += '      </news:publication>\n'
        news_sitemap_xml += f'      <news:publication_date>{page["iso_datetime"]}</news:publication_date>\n'
        news_sitemap_xml += f'      <news:title>{html.escape(page["title"])}</news:title>\n'
        news_sitemap_xml += '    </news:news>\n'
        news_sitemap_xml += '  </url>\n'
    news_sitemap_xml += '</urlset>\n'

    news_sitemap_path = repo_root / 'news-sitemap.xml'
    news_sitemap_path.write_text(news_sitemap_xml, encoding='utf-8')
    print(f"Generated {news_sitemap_path} ({len(recent_news)} articles within 48h)")

    # 3. Generate rss.xml (latest 30 articles)
    news_pages.sort(key=lambda x: x['datetime'], reverse=True)
    latest_30 = news_pages[:30]

    rss_xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
    rss_xml += '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:dc="http://purl.org/dc/elements/1.1/">\n'
    rss_xml += '  <channel>\n'
    rss_xml += '    <title>TheHGTech - Cybersecurity &amp; AI Intelligence</title>\n'
    rss_xml += f'    <link>{base_url}</link>\n'
    rss_xml += '    <description>Expert cybersecurity analysis, threat intelligence briefings, ransomware forensics, and zero-day research.</description>\n'
    rss_xml += '    <language>en-us</language>\n'
    rss_xml += f'    <lastBuildDate>{email.utils.formatdate(usegmt=True)}</lastBuildDate>\n'
    rss_xml += f'    <atom:link href="{base_url}/rss.xml" rel="self" type="application/rss+xml" />\n'

    for page in latest_30:
        rfc_date = email.utils.format_datetime(page['datetime'])
        escaped_title = html.escape(page['title'])
        escaped_desc = html.escape(page['description'])
        escaped_url = html.escape(page['url'])

        rss_xml += '    <item>\n'
        rss_xml += f'      <title>{escaped_title}</title>\n'
        rss_xml += f'      <link>{escaped_url}</link>\n'
        rss_xml += f'      <guid isPermaLink="true">{escaped_url}</guid>\n'
        rss_xml += f'      <pubDate>{rfc_date}</pubDate>\n'
        rss_xml += f'      <description>{escaped_desc}</description>\n'
        rss_xml += f'      <content:encoded><![CDATA[<p>{page["description"]}</p><p><a href="{page["url"]}">Read the full analysis at TheHGTech</a></p>]]></content:encoded>\n'
        rss_xml += '    </item>\n'

    rss_xml += '  </channel>\n</rss>\n'

    rss_path = repo_root / 'rss.xml'
    rss_path.write_text(rss_xml, encoding='utf-8')
    print(f"Generated {rss_path} ({len(latest_30)} items)")

if __name__ == '__main__':
    build_sitemaps()
