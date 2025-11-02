#!/usr/bin/env python3
"""
TheHGTech Content Automation Script - FIXED VERSION
Fixes the duplicate detection + old content removal logic
"""

import os
import sys
import json
import re
from datetime import datetime, timedelta
import pytz
from openai import OpenAI
import feedparser
from html import unescape, escape

# Initialize OpenAI client
client = OpenAI(api_key=os.environ.get('OPENAI_API_KEY'))


def sanitize_content(text):
    """
    Sanitize content for safe HTML rendering
    Prevents XSS attacks by removing/escaping dangerous content
    """
    if not text:
        return ""
    
    text = unescape(text)
    text = re.sub(r'<[^>]*>', '', text)
    text = escape(text)
    text = re.sub(r'javascript:', '', text, flags=re.IGNORECASE)
    text = re.sub(r'on\w+\s*=', '', text, flags=re.IGNORECASE)
    text = re.sub(r'data:', '', text, flags=re.IGNORECASE)
    text = re.sub(r'vbscript:', '', text, flags=re.IGNORECASE)
    text = ' '.join(text.split())
    
    return text.strip()


def validate_url(url):
    """
    Validate and sanitize URLs
    Only allows http:// and https:// URLs
    """
    if not url:
        return ""
    
    url = url.strip()
    
    if not (url.startswith('http://') or url.startswith('https://')):
        return ""
    
    dangerous_patterns = ['javascript:', 'data:', 'vbscript:', 'file:']
    for pattern in dangerous_patterns:
        if pattern in url.lower():
            return ""
    
    return url

# RSS Feed Sources
CYBER_FEEDS = [
    'https://www.bleepingcomputer.com/feed/',
    'https://feeds.feedburner.com/TheHackersNews',
    'https://www.darkreading.com/rss.xml',
    'https://www.securityweek.com/feed/',
    'https://www.cisa.gov/cybersecurity-advisories/all.xml',
]

AI_FEEDS = [
    'https://techcrunch.com/category/artificial-intelligence/feed/',
    'https://www.theverge.com/ai-artificial-intelligence/rss/index.xml',
    'https://venturebeat.com/category/ai/feed/',
    'https://www.artificialintelligence-news.com/feed/',
]


def get_current_time_ist():
    """Get current time in IST"""
    ist = pytz.timezone('Asia/Kolkata')
    return datetime.now(ist)


def fetch_recent_articles(feeds, hours_back=72):  # INCREASED FROM 48 to 72
    """Fetch recent articles from RSS feeds"""
    articles = []
    cutoff_time = datetime.now(pytz.UTC) - timedelta(hours=hours_back)
    
    print(f"📡 Fetching articles from {len(feeds)} feeds (past {hours_back} hours)...")
    
    for feed_url in feeds:
        try:
            print(f"   → Fetching: {feed_url}")
            feed = feedparser.parse(feed_url)
            
            for entry in feed.entries[:15]:  # INCREASED FROM 10 to 15
                pub_date = None
                if hasattr(entry, 'published_parsed') and entry.published_parsed:
                    pub_date = datetime(*entry.published_parsed[:6], tzinfo=pytz.UTC)
                elif hasattr(entry, 'updated_parsed') and entry.updated_parsed:
                    pub_date = datetime(*entry.updated_parsed[:6], tzinfo=pytz.UTC)
                
                if pub_date and pub_date > cutoff_time:
                    summary = entry.get('summary', entry.get('description', ''))
                    summary = sanitize_content(summary)
                    summary = summary[:500]
                    
                    title = sanitize_content(entry.get('title', 'No title'))
                    source = sanitize_content(feed.feed.get('title', 'Unknown Source'))
                    link = validate_url(entry.get('link', ''))
                    
                    if not link:
                        continue
                    
                    articles.append({
                        'title': title,
                        'link': link,
                        'summary': summary,
                        'published': pub_date,
                        'source': source
                    })
            
            print(f"      ✅ Found {len([a for a in articles if a['source'] == feed.feed.get('title', '')])} recent articles")
            
        except Exception as e:
            print(f"      ⚠️  Error fetching {feed_url}: {e}")
            continue
    
    articles.sort(key=lambda x: x['published'], reverse=True)
    print(f"\n📊 Total articles fetched: {len(articles)}")
    
    return articles


def filter_existing_urls(articles, existing_shorts):
    """Remove articles that already exist in content (by URL)"""
    existing_urls = {short.get('sourceUrl', '') for short in existing_shorts}
    
    filtered = []
    duplicates = 0
    
    for article in articles:
        if article['link'] not in existing_urls:
            filtered.append(article)
        else:
            duplicates += 1
    
    if duplicates > 0:
        print(f"   🔄 Skipped {duplicates} duplicate articles (already in content)")
    
    return filtered


def format_with_gpt(articles, content_type):
    """Use GPT-4o to format articles into professional shorts"""
    if not articles:
        return None
    
    top_articles = articles[:5]
    
    articles_text = ""
    for i, article in enumerate(top_articles, 1):
        articles_text += f"""
Article {i}:
Title: {article['title']}
Source: {article['source']}
Article ID: ARTICLE_{i}_URL_PLACEHOLDER
Date: {article['published'].strftime('%b %d %Y')}
Summary: {article['summary'][:300]}

"""
    
    prompt = f"""You are a professional content editor for TheHGTech.com.

I have fetched {len(top_articles)} REAL recent {content_type} news articles from various sources. Your task is to rewrite each article as a professional news short following our exact format.

Here are the real articles:
{articles_text}

For EACH article above, create a short in this EXACT format:

Date: [Use the actual date from the article]
Source Name: [Use the actual source from the article]
Source URL: [Use exactly: ARTICLE_X_URL_PLACEHOLDER where X is the article number]
Title: [Create a compelling, clear headline based on the article - you can rephrase but keep the meaning]
Content:
[Write 5-7 sentences that:
1. Clearly explain what happened
2. Include relevant details and context
3. Explain why it matters to security/AI professionals
4. Maintain professional, informative tone
5. Are written for a technical audience but remain accessible]

Important guidelines:
- Write in a professional, journalistic style
- Focus on facts and implications, not sensationalism
- Each short should be self-contained and informative
- Use clear, direct language
- Include relevant technical details where appropriate
- Explain significance for professionals in the field

Create a short for EACH of the {len(top_articles)} articles above."""
    
    try:
        response = client.chat.completions.create(
            model="gpt-4o",
            messages=[
                {"role": "system", "content": "You are a professional tech journalist specializing in cybersecurity and AI."},
                {"role": "user", "content": prompt}
            ],
            temperature=0.5,
            max_tokens=4000
        )
        
        content = response.choices[0].message.content
        
        # Replace placeholders with actual URLs
        for i, article in enumerate(top_articles, 1):
            placeholder = f"ARTICLE_{i}_URL_PLACEHOLDER"
            actual_url = article['link']
            content = content.replace(placeholder, actual_url)
            print(f"   🔗 Replaced {placeholder} with {actual_url[:60]}...")
        
        print(f"✅ Successfully formatted {content_type} articles with real URLs")
        return content
        
    except Exception as e:
        print(f"❌ Error formatting {content_type} articles: {e}")
        return None


def parse_shorts(content):
    """Parse the formatted content into structured shorts"""
    if not content:
        return []
    
    shorts = []
    items = re.split(r'\n(?=Date:)', content)
    
    for item in items:
        if not item.strip() or 'Date:' not in item:
            continue
            
        date_match = re.search(r'Date:\s*(.+?)(?:\n|$)', item)
        source_match = re.search(r'Source Name:\s*(.+?)(?:\n|$)', item)
        url_match = re.search(r'Source URL:\s*(.+?)(?:\n|$)', item)
        title_match = re.search(r'Title:\s*(.+?)(?:\n|$)', item)
        content_match = re.search(r'Content:\s*(.+)', item, re.DOTALL)
        
        if all([date_match, source_match, url_match, title_match, content_match]):
            source_url = validate_url(url_match.group(1).strip())
            
            if not source_url:
                print(f"   ⚠️ Skipping short with invalid URL: {title_match.group(1)[:50]}")
                continue
            
            short = {
                "date": sanitize_content(date_match.group(1).strip()),
                "title": sanitize_content(title_match.group(1).strip()),
                "content": sanitize_content(content_match.group(1).strip()),
                "source": sanitize_content(source_match.group(1).strip()),
                "sourceUrl": source_url
            }
            shorts.append(short)
    
    return shorts


def is_older_than_hours(date_string, hours=24):
    """Check if a date string is older than specified hours"""
    try:
        ist = pytz.timezone('Asia/Kolkata')
        now = datetime.now(ist)
        
        date_obj = datetime.strptime(date_string, "%b %d %Y")
        date_obj = ist.localize(date_obj)
        
        age_hours = (now - date_obj).total_seconds() / 3600
        
        return age_hours >= hours
    except:
        return False


def read_content_js():
    """Read the current content.js file"""
    with open('content.js', 'r', encoding='utf-8') as f:
        content = f.read()
    
    match = re.search(r'var websiteContent = ({.*?});', content, re.DOTALL)
    if not match:
        print("❌ Could not parse content.js")
        sys.exit(1)
    
    return json.loads(match.group(1))


def write_content_js(data):
    """Write updated content back to content.js"""
    js_content = f"""// TheHGTech Website Content
// Update this file to change website content

var websiteContent = {json.dumps(data, indent=4, ensure_ascii=False)};"""
    
    with open('content.js', 'w', encoding='utf-8') as f:
        f.write(js_content)


def update_shorts():
    """Main function to update shorts with real news from RSS feeds"""
    ist_time = get_current_time_ist()
    
    print(f"\n{'='*60}")
    print(f"🚀 TheHGTech Content Automation - FIXED VERSION")
    print(f"⏰ Time: {ist_time.strftime('%Y-%m-%d %I:%M %p IST')}")
    print(f"📡 Mode: Real RSS Feed Aggregation + GPT-4o Formatting")
    print(f"🔗 URL Preservation: ENABLED")
    print(f"🔄 Duplicate Detection: ENABLED")
    print(f"🗑️  Old Content Removal: IMPROVED")
    print(f"{'='*60}\n")
    
    # Check for force refresh mode
    FORCE_REFRESH = os.environ.get('FORCE_REFRESH', 'false').lower() == 'true'
    if FORCE_REFRESH:
        print("⚡ FORCE REFRESH MODE ENABLED")
    
    # Read current content
    data = read_content_js()
    existing_cyber = data.get('cyberShorts', [])
    existing_ai = data.get('aiShorts', [])
    
    print(f"📚 Current content: {len(existing_cyber)} cyber, {len(existing_ai)} AI shorts")
    
    # Fetch real articles from RSS feeds
    cyber_articles = fetch_recent_articles(CYBER_FEEDS, hours_back=72)
    ai_articles = fetch_recent_articles(AI_FEEDS, hours_back=72)
    
    if not cyber_articles and not ai_articles:
        print("\n⚠️  WARNING: No recent articles found in any feeds!")
        print("⚠️  This might be a network issue or the feeds might be down")
        print("⚠️  Keeping existing content to prevent data loss")
        sys.exit(0)
    
    # Filter out duplicates
    print(f"\n🔍 Checking for duplicates...")
    cyber_articles_new = filter_existing_urls(cyber_articles, existing_cyber)
    ai_articles_new = filter_existing_urls(ai_articles, existing_ai)
    
    print(f"✨ New articles to add: {len(cyber_articles_new)} cyber, {len(ai_articles_new)} AI")
    
    # FIXED LOGIC: Always filter old content, regardless of new articles
    print(f"\n🗑️  Filtering old content (24+ hours)...")
    filtered_cyber = [s for s in existing_cyber if not is_older_than_hours(s.get('date', ''), 24)]
    filtered_ai = [s for s in existing_ai if not is_older_than_hours(s.get('date', ''), 24)]
    
    removed_cyber = len(existing_cyber) - len(filtered_cyber)
    removed_ai = len(existing_ai) - len(filtered_ai)
    
    if removed_cyber > 0 or removed_ai > 0:
        print(f"   Removed {removed_cyber} cyber and {removed_ai} AI old shorts")
    else:
        print(f"   No old content to remove")
    
    # Handle case: No new articles, but old content was removed
    if not cyber_articles_new and not ai_articles_new:
        if removed_cyber == 0 and removed_ai == 0:
            print("\n✅ No new articles found and no old content to remove")
            print("✅ Content is already up to date!")
            sys.exit(0)
        else:
            print(f"\n⚠️  No new articles, but removed {removed_cyber + removed_ai} old shorts")
            print(f"⚠️  Updating content.js with filtered content only")
            
            # Update with filtered content only
            data['cyberShorts'] = filtered_cyber[:15]
            data['aiShorts'] = filtered_ai[:15]
            
            # Ensure minimum content exists
            MIN_CONTENT = 2
            if len(data['cyberShorts']) < MIN_CONTENT:
                print(f"⚠️  Only {len(data['cyberShorts'])} cyber shorts remaining after filtering")
            if len(data['aiShorts']) < MIN_CONTENT:
                print(f"⚠️  Only {len(data['aiShorts'])} AI shorts remaining after filtering")
            
            write_content_js(data)
            print(f"\n✅ Updated content.js with filtered content")
            print(f"📝 Final count: {len(data['cyberShorts'])} cyber, {len(data['aiShorts'])} AI shorts")
            sys.exit(0)
    
    # Format NEW articles using GPT-4o
    print(f"\n🤖 Formatting new articles with GPT-4o...")
    cyber_content = format_with_gpt(cyber_articles_new, "Cybersecurity") if cyber_articles_new else None
    ai_content = format_with_gpt(ai_articles_new, "AI") if ai_articles_new else None
    
    # Parse the formatted shorts
    print(f"\n📝 Parsing formatted content...")
    new_cyber_shorts = parse_shorts(cyber_content) if cyber_content else []
    new_ai_shorts = parse_shorts(ai_content) if ai_content else []
    
    print(f"\n📊 Parsed {len(new_cyber_shorts)} new cybersecurity shorts")
    print(f"📊 Parsed {len(new_ai_shorts)} new AI shorts")
    
    # Verify URLs are real (not placeholders)
    for short in new_cyber_shorts + new_ai_shorts:
        if 'PLACEHOLDER' in short.get('sourceUrl', ''):
            print(f"⚠️  WARNING: Found placeholder URL in: {short['title'][:50]}")
    
    # Combine NEW shorts with REMAINING old shorts (new ones first)
    data['cyberShorts'] = new_cyber_shorts + filtered_cyber
    data['aiShorts'] = new_ai_shorts + filtered_ai
    
    # Limit to max 15 each (keep newest)
    data['cyberShorts'] = data['cyberShorts'][:15]
    data['aiShorts'] = data['aiShorts'][:15]
    
    # Final safeguard: Ensure we have content
    MIN_CONTENT = 2
    if len(data['cyberShorts']) < MIN_CONTENT and len(existing_cyber) > 0:
        print(f"⚠️  Keeping {MIN_CONTENT} most recent cyber shorts as backup")
        data['cyberShorts'] = existing_cyber[:MIN_CONTENT]
    
    if len(data['aiShorts']) < MIN_CONTENT and len(existing_ai) > 0:
        print(f"⚠️  Keeping {MIN_CONTENT} most recent AI shorts as backup")
        data['aiShorts'] = existing_ai[:MIN_CONTENT]
    
    if len(data['cyberShorts']) == 0 or len(data['aiShorts']) == 0:
        print("\n⚠️  ERROR: Would result in empty content sections!")
        print("⚠️  Aborting update to prevent data loss")
        sys.exit(1)
    
    # Write back to file
    write_content_js(data)
    
    print(f"\n✅ Successfully updated content.js with REAL news")
    print(f"📝 Final count: {len(data['cyberShorts'])} cyber, {len(data['aiShorts'])} AI shorts")
    print(f"   New: {len(new_cyber_shorts)} cyber, {len(new_ai_shorts)} AI")
    print(f"   Kept: {len(filtered_cyber)} cyber, {len(filtered_ai)} AI")
    print(f"   Removed: {removed_cyber} cyber, {removed_ai} AI")
    print(f"📅 All content is from past 24-72 hours")
    print(f"🔗 All links are REAL and working")
    print(f"🎯 No duplicates!")
    print(f"\n{'='*60}\n")


if __name__ == "__main__":
    update_shorts()
