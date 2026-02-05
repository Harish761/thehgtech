#!/usr/bin/env python3
"""
Daily Security News Generator for TheHGTech
============================================
This script automatically generates 1-2 security news articles daily by:
1. Fetching news from multiple RSS security feeds
2. Using AI (Claude or local) to rewrite/summarize
3. Creating HTML article files
4. Updating articles.json
5. Optionally generating images

Run via GitHub Actions or cron daily.
"""

import json
import os
import sys
import datetime
import hashlib
import re
import feedparser
import requests
from typing import List, Dict, Optional
from html import escape

# ============================================
# CONFIGURATION
# ============================================

# RSS Feeds to monitor (prioritized by importance)
NEWS_FEEDS = [
    # Security News Sites (most reliable)
    {"url": "https://www.bleepingcomputer.com/feed/", "name": "BleepingComputer", "priority": 1},
    {"url": "https://feeds.feedburner.com/TheHackersNews", "name": "TheHackerNews", "priority": 1},
    {"url": "https://krebsonsecurity.com/feed/", "name": "KrebsOnSecurity", "priority": 1},
    {"url": "https://www.darkreading.com/rss.xml", "name": "DarkReading", "priority": 2},
    {"url": "https://www.securityweek.com/feed", "name": "SecurityWeek", "priority": 2},
    
    # Threat Intelligence Vendors
    {"url": "https://securelist.com/feed/", "name": "Kaspersky Securelist", "priority": 2},
    {"url": "https://www.sentinelone.com/blog/feed/", "name": "SentinelOne", "priority": 2},
    {"url": "https://www.crowdstrike.com/blog/feed/", "name": "CrowdStrike", "priority": 2},
    
    # Government Sources
    {"url": "https://www.cisa.gov/news.xml", "name": "CISA", "priority": 1},
    
    # Tech Security Blogs
    {"url": "https://blog.cloudflare.com/rss/", "name": "Cloudflare", "priority": 3},
    {"url": "https://security.googleblog.com/feeds/posts/default", "name": "Google Security", "priority": 2},
]

# Keywords that indicate high-priority stories
HIGH_PRIORITY_KEYWORDS = [
    "zero-day", "0-day", "actively exploited", "cisa kev", "critical vulnerability",
    "ransomware attack", "data breach", "apt", "nation-state", "supply chain attack",
    "rce", "remote code execution", "patch now", "emergency patch"
]

# Keywords to categorize articles
CATEGORY_KEYWORDS = {
    "Zero-Day Vulnerability": ["zero-day", "0-day", "actively exploited"],
    "Ransomware": ["ransomware", "lockbit", "alphv", "blackcat", "akira", "play ransomware"],
    "Data Breach": ["data breach", "leaked", "exposed", "stolen data"],
    "APT / Nation-State": ["apt", "state-sponsored", "nation-state", "china", "russia", "north korea"],
    "Supply Chain": ["supply chain", "npm", "pypi", "dependency", "open source"],
    "Malware": ["malware", "trojan", "backdoor", "infostealer", "rat"],
    "Phishing": ["phishing", "credential theft", "social engineering"],
    "Vulnerability": ["cve-", "vulnerability", "patch", "security update"],
    "AI Security": ["ai security", "llm", "prompt injection", "machine learning"],
}

# Output paths
ARTICLES_DIR = "articles"
ARTICLES_JSON = "articles.json"
GENERATED_LOG = ".generated_articles.json"

# ============================================
# HELPER FUNCTIONS
# ============================================

def load_json(filepath: str) -> dict:
    """Load JSON file"""
    if os.path.exists(filepath):
        with open(filepath, 'r', encoding='utf-8') as f:
            return json.load(f)
    return {}

def save_json(filepath: str, data: dict):
    """Save JSON file"""
    with open(filepath, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

def generate_slug(title: str) -> str:
    """Generate URL-friendly slug from title"""
    slug = title.lower()
    slug = re.sub(r'[^a-z0-9\s-]', '', slug)
    slug = re.sub(r'[\s_]+', '-', slug)
    slug = re.sub(r'-+', '-', slug)
    slug = slug.strip('-')
    return slug[:80]  # Max 80 chars

def calculate_hash(content: str) -> str:
    """Calculate hash of content to detect duplicates"""
    return hashlib.md5(content.encode()).hexdigest()[:12]

def detect_category(text: str) -> str:
    """Detect article category based on keywords"""
    text_lower = text.lower()
    for category, keywords in CATEGORY_KEYWORDS.items():
        for keyword in keywords:
            if keyword in text_lower:
                return category
    return "Security News"

def detect_badge(text: str) -> str:
    """Detect badge based on content"""
    text_lower = text.lower()
    
    if any(k in text_lower for k in ["zero-day", "0-day", "actively exploited"]):
        return "ZERO-DAY"
    if any(k in text_lower for k in ["critical", "cvss 9", "cvss 10"]):
        return "CRITICAL"
    if any(k in text_lower for k in ["breaking", "just released", "today"]):
        return "BREAKING"
    if any(k in text_lower for k in ["ransomware"]):
        return "RANSOMWARE"
    if any(k in text_lower for k in ["apt", "nation-state", "state-sponsored"]):
        return "APT"
    if any(k in text_lower for k in ["data breach", "leaked"]):
        return "BREACH"
    return "NEW"

def extract_cves(text: str) -> List[str]:
    """Extract CVE IDs from text"""
    pattern = r'CVE-\d{4}-\d{4,7}'
    return list(set(re.findall(pattern, text, re.IGNORECASE)))

def is_high_priority(title: str, summary: str) -> bool:
    """Check if article is high priority"""
    text = f"{title} {summary}".lower()
    return any(kw in text for kw in HIGH_PRIORITY_KEYWORDS)

# ============================================
# FEED FETCHING
# ============================================

def fetch_feeds() -> List[Dict]:
    """Fetch all RSS feeds and return normalized entries"""
    all_entries = []
    
    # User-Agent required - many sites block default feedparser
    headers = {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) TheHGTech/1.0 (+https://thehgtech.com)'
    }
    
    for feed_config in NEWS_FEEDS:
        try:
            print(f"Fetching {feed_config['name']}...")
            
            # Fetch with requests first (proper User-Agent)
            response = requests.get(feed_config['url'], headers=headers, timeout=15)
            if response.status_code != 200:
                print(f"  HTTP {response.status_code} for {feed_config['name']}")
                continue
            
            # Parse the content
            feed = feedparser.parse(response.text)
            
            for entry in feed.entries[:10]:  # Last 10 entries per feed
                # Normalize entry
                normalized = {
                    "source": feed_config['name'],
                    "priority": feed_config['priority'],
                    "title": entry.get('title', ''),
                    "link": entry.get('link', ''),
                    "summary": entry.get('summary', entry.get('description', '')),
                    "published": entry.get('published', entry.get('updated', '')),
                    "content": entry.get('content', [{}])[0].get('value', '') if entry.get('content') else '',
                }
                
                # Skip if no title
                if not normalized['title']:
                    continue
                    
                # Calculate relevance score
                normalized['is_high_priority'] = is_high_priority(
                    normalized['title'], 
                    normalized['summary']
                )
                
                # Add CVEs if found
                normalized['cves'] = extract_cves(f"{normalized['title']} {normalized['summary']}")
                
                all_entries.append(normalized)
                
            print(f"  Found {len(feed.entries)} entries from {feed_config['name']}")
                
        except Exception as e:
            print(f"Error fetching {feed_config['name']}: {e}")
            continue
    
    return all_entries

def filter_recent_entries(entries: List[Dict], hours: int = 48) -> List[Dict]:
    """Filter entries from last N hours"""
    cutoff = datetime.datetime.now() - datetime.timedelta(hours=hours)
    recent = []
    
    for entry in entries:
        try:
            # Try common date formats
            pub_date = None
            for fmt in [
                "%a, %d %b %Y %H:%M:%S %z",
                "%Y-%m-%dT%H:%M:%S%z",
                "%Y-%m-%d %H:%M:%S",
            ]:
                try:
                    pub_date = datetime.datetime.strptime(entry['published'], fmt)
                    break
                except:
                    continue
            
            if pub_date:
                # Make timezone-naive for comparison
                if pub_date.tzinfo:
                    pub_date = pub_date.replace(tzinfo=None)
                if pub_date > cutoff:
                    recent.append(entry)
            else:
                # If can't parse date, include it (might be recent)
                recent.append(entry)
                
        except Exception:
            recent.append(entry)
    
    return recent

def deduplicate_entries(entries: List[Dict], generated_log: Dict) -> List[Dict]:
    """Remove already-generated articles"""
    unique = []
    seen_hashes = set(generated_log.get('hashes', []))
    
    for entry in entries:
        content_hash = calculate_hash(entry['title'])
        if content_hash not in seen_hashes:
            unique.append(entry)
            seen_hashes.add(content_hash)
    
    return unique

def rank_entries(entries: List[Dict]) -> List[Dict]:
    """Rank entries by priority and relevance"""
    def score(entry):
        s = 0
        s += (4 - entry['priority']) * 10  # Lower priority number = higher score
        s += 20 if entry['is_high_priority'] else 0
        s += len(entry.get('cves', [])) * 5  # More CVEs = more important
        return s
    
    return sorted(entries, key=score, reverse=True)

# ============================================
# ARTICLE GENERATION
# ============================================

def generate_article_content(entry: Dict) -> str:
    """Generate article HTML content from feed entry
    
    This is a basic version. For better quality, integrate with:
    - Claude API (Anthropic)
    - OpenAI API
    - Local LLM (Ollama)
    """
    
    title = escape(entry['title'])
    source = escape(entry['source'])
    summary = entry.get('summary', '')
    content = entry.get('content', summary)
    link = entry.get('link', '')
    cves = entry.get('cves', [])
    
    # Clean HTML from summary
    summary_clean = re.sub(r'<[^>]+>', '', summary)[:500]
    
    # Build article HTML
    html = f"""
<p class="article-intro">{summary_clean}</p>

<h2>Key Details</h2>
<p>According to {source}, {summary_clean[:200]}...</p>

"""
    
    if cves:
        html += f"""
<h2>Affected CVEs</h2>
<ul>
"""
        for cve in cves:
            html += f'    <li><code>{cve}</code> - <a href="https://nvd.nist.gov/vuln/detail/{cve}" target="_blank">NVD Details</a></li>\n'
        html += "</ul>\n"
    
    html += f"""
<h2>Recommendations</h2>
<ul>
    <li>Monitor for indicators of compromise (IOCs) related to this threat</li>
    <li>Review your organization's exposure to affected systems</li>
    <li>Apply patches and mitigations as recommended by vendors</li>
    <li>Share this intelligence with your security team</li>
</ul>

<h2>Source</h2>
<p>This article is based on reporting from <a href="{link}" target="_blank" rel="nofollow">{source}</a>. Visit the original source for full technical details.</p>

<p><em>This article was auto-generated by TheHGTech's threat intelligence system and may be updated as more information becomes available.</em></p>
"""
    
    return html

def create_article_html(entry: Dict, date_str: str) -> str:
    """Create full HTML article file"""
    
    title = entry['title']
    category = detect_category(f"{title} {entry.get('summary', '')}")
    content = generate_article_content(entry)
    
    # Load template
    template_path = "templates/article-template.html"
    if os.path.exists(template_path):
        with open(template_path, 'r', encoding='utf-8') as f:
            template = f.read()
    else:
        print(f"Warning: Template not found at {template_path}")
        return None
    
    # Replace placeholders - IMPORTANT: replace longer/specific strings first
    slug = generate_slug(title)
    html = template.replace("ARTICLE TITLE GOES HERE", title)  # Replace specific first
    html = html.replace("ARTICLE TITLE", title)  # Then general
    html = html.replace("ARTICLE DESCRIPTION", entry.get('summary', '')[:160])
    html = html.replace("article-SLUG", f"articles/{slug}")
    html = html.replace("December XX, 2025", date_str)
    html = html.replace("X min read", "3 min read")
    html = html.replace("KEYWORDS", f"{category}, security news, {entry.get('source', '')}")
    
    # Replace content placeholder
    content_placeholder = """<!-- YOUR ARTICLE CONTENT STARTS HERE -->

            <p>Introduction paragraph goes here...</p>

            <h2>First Section</h2>
            <p>Section content...</p>

            <h3>Subsection</h3>
            <p>Subsection content...</p>

            <ul>
                <li>List item 1</li>
                <li>List item 2</li>
            </ul>

            <h2>Second Section</h2>
            <p>More content...</p>

            <h2>Conclusion</h2>
            <p>Conclusion paragraph...</p>

            <!-- YOUR ARTICLE CONTENT ENDS HERE -->"""
    
    html = html.replace(content_placeholder, content)
    
    # Fix asset paths for articles in subdirectory
    # Template assumes root, but we store in /articles/
    html = html.replace('href="m-core.css', 'href="../m-core.css')
    html = html.replace('href="m-layout.css', 'href="../m-layout.css')
    html = html.replace('href="m-components.css', 'href="../m-components.css')
    html = html.replace('href="light-mode.css', 'href="../light-mode.css')
    html = html.replace('href="interaction-bar.css', 'href="../interaction-bar.css')
    html = html.replace('src="m-app.js', 'src="../m-app.js')
    html = html.replace('src="interaction-bar.js', 'src="../interaction-bar.js')
    html = html.replace('href="favicon-32x32.png', 'href="../favicon-32x32.png')
    html = html.replace('href="cve-tracker.html', 'href="../cve-tracker.html')
    html = html.replace('href="threat-intel.html', 'href="../threat-intel.html')
    html = html.replace('href="articles.html', 'href="../articles.html')
    html = html.replace('href="guides/"', 'href="../guides/"')
    
    return html

def save_article(entry: Dict, html: str, date: datetime.date) -> Dict:
    """Save article HTML and return articles.json entry"""
    
    title = entry['title']
    slug = generate_slug(title)
    date_str = date.strftime("%B %d, %Y")
    filename = f"{slug}.html"
    filepath = os.path.join(ARTICLES_DIR, filename)
    
    # Create articles directory if needed
    os.makedirs(ARTICLES_DIR, exist_ok=True)
    
    # Save HTML
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(html)
    
    print(f"Created: {filepath}")
    
    # Create articles.json entry
    category = detect_category(f"{title} {entry.get('summary', '')}")
    badge = detect_badge(f"{title} {entry.get('summary', '')}")
    
    article_entry = {
        "id": f"article-{slug}",
        "title": title,
        "date": date_str,
        "category": category,
        "badge": badge,
        "excerpt": entry.get('summary', '')[:200].replace('\n', ' ').strip() + "...",
        "image": "images/articles/auto-generated-news.png",
        "tags": [category, entry.get('source', 'News'), "Auto-Generated"],
        "author": "TheHGTech Bot",
        "externalUrl": f"articles/{filename}"
    }
    
    if entry.get('cves'):
        article_entry['tags'].extend(entry['cves'][:3])
    
    return article_entry

def update_articles_json(new_articles: List[Dict]):
    """Add new articles to articles.json"""
    articles_data = load_json(ARTICLES_JSON)
    
    if 'articles' not in articles_data:
        articles_data['articles'] = []
    
    # Prepend new articles (newest first)
    for article in reversed(new_articles):
        articles_data['articles'].insert(0, article)
    
    save_json(ARTICLES_JSON, articles_data)
    print(f"Updated {ARTICLES_JSON} with {len(new_articles)} new articles")

def update_generated_log(entries: List[Dict]):
    """Update log of generated articles to prevent duplicates"""
    log = load_json(GENERATED_LOG)
    
    if 'hashes' not in log:
        log['hashes'] = []
    if 'articles' not in log:
        log['articles'] = []
    
    for entry in entries:
        content_hash = calculate_hash(entry['title'])
        log['hashes'].append(content_hash)
        log['articles'].append({
            'title': entry['title'],
            'date': datetime.date.today().isoformat(),
            'hash': content_hash
        })
    
    # Keep only last 500 hashes
    log['hashes'] = log['hashes'][-500:]
    log['articles'] = log['articles'][-500:]
    
    save_json(GENERATED_LOG, log)

# ============================================
# MAIN
# ============================================

def main():
    """Main function to generate daily news articles"""
    
    print("=" * 60)
    print("TheHGTech Daily News Generator")
    print(f"Date: {datetime.date.today()}")
    print("=" * 60)
    
    # 1. Fetch feeds
    print("\n📡 Fetching RSS feeds...")
    all_entries = fetch_feeds()
    print(f"Found {len(all_entries)} total entries")
    
    # 2. Filter to recent (last 48 hours)
    print("\n⏰ Filtering recent entries...")
    recent = filter_recent_entries(all_entries, hours=48)
    print(f"Found {len(recent)} recent entries")
    
    # 3. Deduplicate
    print("\n🔍 Removing duplicates...")
    generated_log = load_json(GENERATED_LOG)
    unique = deduplicate_entries(recent, generated_log)
    print(f"Found {len(unique)} unique new entries")
    
    if not unique:
        print("\n✅ No new articles to generate today")
        return
    
    # 4. Rank by importance
    print("\n📊 Ranking by importance...")
    ranked = rank_entries(unique)
    
    # 5. Select top 1-2 articles
    articles_to_generate = ranked[:2]
    print(f"\n📰 Generating {len(articles_to_generate)} articles:")
    for entry in articles_to_generate:
        print(f"  - {entry['title'][:60]}...")
    
    # 6. Generate articles
    new_articles = []
    today = datetime.date.today()
    date_str = today.strftime("%B %d, %Y")
    
    for entry in articles_to_generate:
        try:
            html = create_article_html(entry, date_str)
            if html:
                article_entry = save_article(entry, html, today)
                new_articles.append(article_entry)
        except Exception as e:
            print(f"Error generating article: {e}")
            continue
    
    # 7. Update articles.json
    if new_articles:
        update_articles_json(new_articles)
        update_generated_log(articles_to_generate)
    
    print(f"\n✅ Successfully generated {len(new_articles)} articles")
    print("=" * 60)

if __name__ == "__main__":
    main()
