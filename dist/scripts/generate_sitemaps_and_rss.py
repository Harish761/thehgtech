import os
import re
import json
from datetime import datetime, timedelta
import email.utils

def extract_metadata(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Try to extract datePublished from JSON-LD
    date_published = None
    title = None
    description = None

    # Title
    title_match = re.search(r'<title>(.*?)</title>', content)
    if title_match:
        title = title_match.group(1).replace(' | TheHGTech', '').replace(' - TheHGTech', '').strip()

    # Description
    desc_match = re.search(r'<meta name="description" content="(.*?)">', content)
    if desc_match:
        description = desc_match.group(1).strip()

    # Date
    date_match = re.search(r'"datePublished"\s*:\s*"([^"]+)"', content)
    if date_match:
        date_published = date_match.group(1)
    else:
        # Fallback to file modification time
        mtime = os.path.getmtime(filepath)
        date_published = datetime.fromtimestamp(mtime).strftime('%Y-%m-%dT%H:%M:%S+00:00')

    return {
        'title': title or 'TheHGTech Article',
        'description': description or '',
        'date': date_published
    }

def build_sitemaps():
    base_url = 'https://thehgtech.com'
    root_dir = '/Volumes/Data-Personal/Webpage/thehgtech'
    
    sections = [
        ('articles', '/articles/'),
        ('guides', '/guides/'),
        ('comparisons', '/comparisons/')
    ]

    all_pages = []
    
    # Core pages
    core_pages = ['index.html', 'cve-tracker.html', 'ransomware-tracker.html', 'threat-intel.html', 'about.html']
    for p in core_pages:
        all_pages.append({
            'url': f'{base_url}/{p}' if p != 'index.html' else f'{base_url}/',
            'date': datetime.now().strftime('%Y-%m-%dT%H:%M:%S+00:00'),
            'priority': '1.0' if p == 'index.html' else '0.9',
            'is_news': False
        })
    
    # Hub pages
    hub_pages = ['articles.html']
    for p in hub_pages:
        all_pages.append({
            'url': f'{base_url}/{p}',
            'date': datetime.now().strftime('%Y-%m-%dT%H:%M:%S+00:00'),
            'priority': '0.9',
            'is_news': False
        })

    news_pages = []

    for section, url_prefix in sections:
        section_dir = os.path.join(root_dir, section)
        if not os.path.exists(section_dir): continue
        
        # Add index if exists
        if os.path.exists(os.path.join(section_dir, 'index.html')):
            all_pages.append({
                'url': f'{base_url}{url_prefix}',
                'date': datetime.now().strftime('%Y-%m-%dT%H:%M:%S+00:00'),
                'priority': '0.9',
                'is_news': False
            })

        for filename in os.listdir(section_dir):
            if filename.endswith('.html') and filename != 'index.html':
                filepath = os.path.join(section_dir, filename)
                meta = extract_metadata(filepath)
                
                # Priority logic
                try:
                    dt = datetime.fromisoformat(meta['date'].replace('Z', '+00:00'))
                    # handle offset-naive vs offset-aware
                    now = datetime.now(dt.tzinfo) if dt.tzinfo else datetime.now()
                    days_old = (now - dt).days
                except:
                    days_old = 30

                if days_old <= 7:
                    priority = '0.9'
                elif days_old <= 30:
                    priority = '0.8'
                else:
                    priority = '0.7'

                page_info = {
                    'url': f'{base_url}{url_prefix}{filename}',
                    'date': meta['date'],
                    'priority': priority,
                    'title': meta['title'],
                    'description': meta['description'],
                    'is_news': section == 'articles',
                    'days_old': days_old
                }
                all_pages.append(page_info)
                if page_info['is_news']:
                    news_pages.append(page_info)

    # Move root articles to articles/ directory
    for filename in os.listdir(root_dir):
        if filename.startswith('article-') and filename.endswith('.html'):
            old_path = os.path.join(root_dir, filename)
            new_path = os.path.join(root_dir, 'articles', filename)
            print(f"Moving {old_path} to {new_path}")
            os.rename(old_path, new_path)
            
            meta = extract_metadata(new_path)
            try:
                dt = datetime.fromisoformat(meta['date'].replace('Z', '+00:00'))
                now = datetime.now(dt.tzinfo) if dt.tzinfo else datetime.now()
                days_old = (now - dt).days
            except:
                days_old = 30

            page_info = {
                'url': f'{base_url}/articles/{filename}',
                'date': meta['date'],
                'priority': '0.8',
                'title': meta['title'],
                'description': meta['description'],
                'is_news': True,
                'days_old': days_old
            }
            all_pages.append(page_info)
            news_pages.append(page_info)

    # 1. Generate sitemap.xml
    sitemap_xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
    sitemap_xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
    for page in all_pages:
        sitemap_xml += '  <url>\n'
        sitemap_xml += f'    <loc>{page["url"]}</loc>\n'
        sitemap_xml += f'    <lastmod>{page["date"]}</lastmod>\n'
        sitemap_xml += f'    <priority>{page["priority"]}</priority>\n'
        sitemap_xml += '  </url>\n'
    sitemap_xml += '</urlset>'

    with open(os.path.join(root_dir, 'sitemap.xml'), 'w', encoding='utf-8') as f:
        f.write(sitemap_xml)
    print("Generated sitemap.xml")

    # 2. Generate news-sitemap.xml (Google News only allows up to 48 hours old)
    news_sitemap_xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
    news_sitemap_xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">\n'
    
    # Sort news by date descending
    news_pages.sort(key=lambda x: x['date'], reverse=True)
    recent_news = [p for p in news_pages if p['days_old'] <= 7]
    if not recent_news and news_pages:
        # If no recent news, just include the 5 latest
        recent_news = news_pages[:5]
        
    for page in recent_news:
        news_sitemap_xml += '  <url>\n'
        news_sitemap_xml += f'    <loc>{page["url"]}</loc>\n'
        news_sitemap_xml += '    <news:news>\n'
        news_sitemap_xml += '      <news:publication>\n'
        news_sitemap_xml += '        <news:name>TheHGTech</news:name>\n'
        news_sitemap_xml += '        <news:language>en</news:language>\n'
        news_sitemap_xml += '      </news:publication>\n'
        news_sitemap_xml += f'      <news:publication_date>{page["date"]}</news:publication_date>\n'
        news_sitemap_xml += f'      <news:title>{page["title"]}</news:title>\n'
        news_sitemap_xml += '    </news:news>\n'
        news_sitemap_xml += '  </url>\n'
    news_sitemap_xml += '</urlset>'

    with open(os.path.join(root_dir, 'news-sitemap.xml'), 'w', encoding='utf-8') as f:
        f.write(news_sitemap_xml)
    print("Generated news-sitemap.xml")

    # 3. Generate rss.xml (latest 30 articles)
    latest_30 = news_pages[:30]
    
    rss_xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
    rss_xml += '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:dc="http://purl.org/dc/elements/1.1/">\n'
    rss_xml += '  <channel>\n'
    rss_xml += '    <title>TheHGTech - Cybersecurity &amp; AI News</title>\n'
    rss_xml += f'    <link>{base_url}</link>\n'
    rss_xml += '    <description>Breaking news, analysis, and insights on cybersecurity threats and artificial intelligence</description>\n'
    rss_xml += '    <language>en-us</language>\n'
    rss_xml += f'    <lastBuildDate>{email.utils.formatdate(usegmt=True)}</lastBuildDate>\n'
    rss_xml += f'    <atom:link href="{base_url}/rss.xml" rel="self" type="application/rss+xml" />\n'

    for page in latest_30:
        # Convert iso date to rfc822
        try:
            dt = datetime.fromisoformat(page['date'].replace('Z', '+00:00'))
            rfc_date = email.utils.format_datetime(dt)
        except:
            rfc_date = email.utils.formatdate(usegmt=True)

        rss_xml += '    <item>\n'
        rss_xml += f'      <title>{page["title"].replace("&", "&amp;").replace("<", "&lt;")}</title>\n'
        rss_xml += f'      <link>{page["url"]}</link>\n'
        rss_xml += f'      <guid isPermaLink="true">{page["url"]}</guid>\n'
        rss_xml += f'      <pubDate>{rfc_date}</pubDate>\n'
        rss_xml += f'      <description>{page["description"].replace("&", "&amp;").replace("<", "&lt;")}</description>\n'
        # Add a simple content:encoded block
        rss_xml += f'      <content:encoded><![CDATA[ <p>{page["description"]}</p><p><a href="{page["url"]}">Read the full article at TheHGTech</a></p> ]]></content:encoded>\n'
        rss_xml += '    </item>\n'

    rss_xml += '  </channel>\n</rss>\n'
    
    with open(os.path.join(root_dir, 'rss.xml'), 'w', encoding='utf-8') as f:
        f.write(rss_xml)
    print("Generated rss.xml")

if __name__ == "__main__":
    build_sitemaps()
