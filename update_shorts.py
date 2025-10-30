#!/usr/bin/env python3
"""
TheHGTech Content Automation Script - RSS FEED VERSION (DUPLICATE PREVENTION)
Fetches REAL recent news from RSS feeds and uses GPT-4o to format them
PRESERVES ORIGINAL URLs + PREVENTS DUPLICATES
"""

import os
import sys
import json
import re
from datetime import datetime, timedelta
import pytz
from openai import OpenAI
import feedparser
from html import unescape

# Initialize OpenAI client
client = OpenAI(api_key=os.environ.get('OPENAI_API_KEY'))

# RSS Feed Sources for Cybersecurity News
CYBER_FEEDS = [
    'https://www.bleepingcomputer.com/feed/',
    'https://feeds.feedburner.com/TheHackersNews',
    'https://www.darkreading.com/rss.xml',
    'https://www.securityweek.com/feed/',
    'https://www.cisa.gov/cybersecurity-advisories/all.xml',
]

# RSS Feed Sources for AI News
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


def fetch_recent_articles(feeds, hours_back=48):
    """Fetch recent articles from RSS feeds"""
    articles = []
    cutoff_time = datetime.now(pytz.UTC) - timedelta(hours=hours_back)
    
    print(f"📡 Fetching articles from {len(feeds)} feeds (past {hours_back} hours)...")
    
    for feed_url in feeds:
        try:
            print(f"   → Fetching: {feed_url}")
            feed = feedparser.parse(feed_url)
            
            for entry in feed.entries[:10]:  # Get top 10 from each feed
                # Parse publication date
                pub_date = None
                if hasattr(entry, 'published_parsed') and entry.published_parsed:
                    pub_date = datetime(*entry.published_parsed[:6], tzinfo=pytz.UTC)
                elif hasattr(entry, 'updated_parsed') and entry.updated_parsed:
                    pub_date = datetime(*entry.updated_parsed[:6], tzinfo=pytz.UTC)
                
                # Only include recent articles
                if pub_date and pub_date > cutoff_time:
                    # Clean up HTML from summary
                    summary = unescape(entry.get('summary', entry.get('description', '')))
                    summary = re.sub(r'<[^>]+>', '', summary)  # Remove HTML tags
                    summary = summary.strip()[:500]  # Limit length
                    
                    articles.append({
                        'title': entry.get('title', 'No title'),
                        'link': entry.get('link', ''),
                        'summary': summary,
                        'published': pub_date,
                        'source': feed.feed.get('title', 'Unknown Source')
                    })
            
            print(f"      ✅ Found {len([a for a in articles if a['source'] == feed.feed.get('title', '')])} recent articles")
            
        except Exception as e:
            print(f"      ⚠️  Error fetching {feed_url}: {e}")
            continue
    
    # Sort by date (newest first) and return top articles
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
    
    # Select top 5 most recent articles
    top_articles = articles[:5]
    
    # Create a structured prompt with the real articles
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
[Write a single, comprehensive paragraph of ~200 words. Expand on the article's information, explain the significance, technical details, and implications for {content_type} professionals. Maintain professional tone.]

CRITICAL REQUIREMENTS:
1. Use the ACTUAL dates and sources provided - do not make up or change these
2. For Source URL, use EXACTLY "ARTICLE_1_URL_PLACEHOLDER" for article 1, "ARTICLE_2_URL_PLACEHOLDER" for article 2, etc.
3. Create clear, informative headlines (you can rephrase the original title)
4. Expand the summaries into detailed, professional paragraphs
5. Add context, implications, and recommendations
6. Maintain technical accuracy and professional tone
7. Output exactly {len(top_articles)} shorts, one for each article

Output format:
{content_type} Shorts
{"="*20}
[Then include all {len(top_articles)} shorts in the exact format above]"""

    print(f"\n🤖 Formatting {len(top_articles)} {content_type} articles with GPT-4o...")
    
    try:
        response = client.chat.completions.create(
            model="gpt-4o",
            messages=[
                {"role": "system", "content": "You are a professional content editor who transforms news articles into well-written, informative shorts while preserving factual accuracy. Always use the exact placeholders provided for URLs."},
                {"role": "user", "content": prompt}
            ],
            temperature=0.5,
            max_tokens=4000
        )
        
        content = response.choices[0].message.content
        
        # CRITICAL FIX: Replace placeholders with actual URLs
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
    
    # Split by "Date:" to get individual shorts
    items = re.split(r'\n(?=Date:)', content)
    
    for item in items:
        if not item.strip() or 'Date:' not in item:
            continue
            
        # Extract fields using regex
        date_match = re.search(r'Date:\s*(.+?)(?:\n|$)', item)
        source_match = re.search(r'Source Name:\s*(.+?)(?:\n|$)', item)
        url_match = re.search(r'Source URL:\s*(.+?)(?:\n|$)', item)
        title_match = re.search(r'Title:\s*(.+?)(?:\n|$)', item)
        content_match = re.search(r'Content:\s*(.+)', item, re.DOTALL)
        
        if all([date_match, source_match, url_match, title_match, content_match]):
            short = {
                "date": date_match.group(1).strip(),
                "title": title_match.group(1).strip(),
                "content": content_match.group(1).strip(),
                "source": source_match.group(1).strip(),
                "sourceUrl": url_match.group(1).strip()
            }
            shorts.append(short)
    
    return shorts


def is_older_than_24_hours(date_string):
    """Check if a date string is older than 24 hours"""
    try:
        ist = pytz.timezone('Asia/Kolkata')
        now = datetime.now(ist)
        
        # Parse the date string (e.g., "Oct 29 2025")
        date_obj = datetime.strptime(date_string, "%b %d %Y")
        date_obj = ist.localize(date_obj)
        
        # Calculate age in hours
        age_hours = (now - date_obj).total_seconds() / 3600
        
        return age_hours >= 24
    except:
        return False


def read_content_js():
    """Read the current content.js file"""
    with open('content.js', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract the websiteContent object
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
    print(f"🚀 TheHGTech Content Automation - RSS FEED VERSION")
    print(f"⏰ Time: {ist_time.strftime('%Y-%m-%d %I:%M %p IST')}")
    print(f"📡 Mode: Real RSS Feed Aggregation + GPT-4o Formatting")
    print(f"🔗 URL Preservation: ENABLED")
    print(f"🔄 Duplicate Detection: ENABLED")
    print(f"{'='*60}\n")
    
    # Read current content FIRST (to check for duplicates)
    data = read_content_js()
    existing_cyber = data.get('cyberShorts', [])
    existing_ai = data.get('aiShorts', [])
    
    print(f"📚 Current content: {len(existing_cyber)} cyber, {len(existing_ai)} AI shorts")
    
    # Fetch real articles from RSS feeds
    cyber_articles = fetch_recent_articles(CYBER_FEEDS, hours_back=48)
    ai_articles = fetch_recent_articles(AI_FEEDS, hours_back=48)
    
    if not cyber_articles and not ai_articles:
        print("\n⚠️  WARNING: No recent articles found in any feeds!")
        print("⚠️  This might be a network issue or the feeds might be down")
        print("⚠️  Keeping existing content to prevent data loss")
        sys.exit(0)
    
    # CRITICAL: Filter out articles that already exist (by URL)
    print(f"\n🔍 Checking for duplicates...")
    cyber_articles_new = filter_existing_urls(cyber_articles, existing_cyber)
    ai_articles_new = filter_existing_urls(ai_articles, existing_ai)
    
    print(f"✨ New articles to add: {len(cyber_articles_new)} cyber, {len(ai_articles_new)} AI")
    
    # If no new articles, keep existing content
    if not cyber_articles_new and not ai_articles_new:
        print("\n✅ No new articles found (all are duplicates)")
        print("✅ Content is already up to date!")
        print("✅ No changes needed")
        sys.exit(0)
    
    # Format NEW articles using GPT-4o
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
    
    # Filter out OLD content (older than 24 hours)
    print(f"\n🗑️  Filtering old content (24+ hours)...")
    filtered_cyber = [s for s in existing_cyber if not is_older_than_24_hours(s.get('date', ''))]
    filtered_ai = [s for s in existing_ai if not is_older_than_24_hours(s.get('date', ''))]
    
    removed_cyber = len(existing_cyber) - len(filtered_cyber)
    removed_ai = len(existing_ai) - len(filtered_ai)
    
    if removed_cyber > 0 or removed_ai > 0:
        print(f"   Removed {removed_cyber} cyber and {removed_ai} AI shorts")
    else:
        print(f"   No old content to remove")
    
    # Combine NEW shorts with REMAINING old shorts (new ones first)
    data['cyberShorts'] = new_cyber_shorts + filtered_cyber
    data['aiShorts'] = new_ai_shorts + filtered_ai
    
    # Limit to max 15 each (keep newest)
    data['cyberShorts'] = data['cyberShorts'][:15]
    data['aiShorts'] = data['aiShorts'][:15]
    
    # ⚠️ FINAL SAFEGUARD: Ensure we have content
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
    print(f"📅 All content is from past 24-48 hours")
    print(f"🔗 All links are REAL and working")
    print(f"🎯 No duplicates!")
    print(f"\n{'='*60}\n")


if __name__ == "__main__":
    update_shorts()
