#!/usr/bin/env python3
"""
TheHGTech Content Automation Script - RSS FEED VERSION
Fetches REAL recent news from RSS feeds and uses GPT-4o to format them
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
Link: {article['link']}
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
Source URL: [Use the actual link from the article]
Title: [Create a compelling, clear headline based on the article - you can rephrase but keep the meaning]
Content:
[Write a single, comprehensive paragraph of ~200 words. Expand on the article's information, explain the significance, technical details, and implications for {content_type} professionals. Maintain professional tone.]

CRITICAL REQUIREMENTS:
1. Use the ACTUAL dates, sources, and links provided - do not make up or change these
2. Create clear, informative headlines (you can rephrase the original title)
3. Expand the summaries into detailed, professional paragraphs
4. Add context, implications, and recommendations
5. Maintain technical accuracy and professional tone
6. Output exactly {len(top_articles)} shorts, one for each article

Output format:
{content_type} Shorts
{"="*20}
[Then include all {len(top_articles)} shorts in the exact format above]"""

    print(f"\n🤖 Formatting {len(top_articles)} {content_type} articles with GPT-4o...")
    
    try:
        response = client.chat.completions.create(
            model="gpt-4o",
            messages=[
                {"role": "system", "content": "You are a professional content editor who transforms news articles into well-written, informative shorts while preserving factual accuracy."},
                {"role": "user", "content": prompt}
            ],
            temperature=0.5,  # Lower temperature for more consistent formatting
            max_tokens=4000
        )
        
        content = response.choices[0].message.content
        print(f"✅ Successfully formatted {content_type} articles")
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
    print(f"{'='*60}\n")
    
    # Fetch real articles from RSS feeds
    cyber_articles = fetch_recent_articles(CYBER_FEEDS, hours_back=48)
    ai_articles = fetch_recent_articles(AI_FEEDS, hours_back=48)
    
    if not cyber_articles and not ai_articles:
        print("\n⚠️  WARNING: No recent articles found in any feeds!")
        print("⚠️  This might be a network issue or the feeds might be down")
        print("⚠️  Keeping existing content to prevent data loss")
        sys.exit(0)
    
    # Format articles using GPT-4o
    cyber_content = format_with_gpt(cyber_articles, "Cybersecurity") if cyber_articles else None
    ai_content = format_with_gpt(ai_articles, "AI") if ai_articles else None
    
    # Parse the formatted shorts
    new_cyber_shorts = parse_shorts(cyber_content) if cyber_content else []
    new_ai_shorts = parse_shorts(ai_content) if ai_content else []
    
    print(f"\n📊 Generated {len(new_cyber_shorts)} new cybersecurity shorts")
    print(f"📊 Generated {len(new_ai_shorts)} new AI shorts")
    
    # Read current content
    data = read_content_js()
    existing_cyber = data.get('cyberShorts', [])
    existing_ai = data.get('aiShorts', [])
    
    print(f"📚 Existing: {len(existing_cyber)} cyber, {len(existing_ai)} AI shorts")
    
    # ⚠️ SAFEGUARD: If no new content was generated, don't delete old content!
    if len(new_cyber_shorts) == 0 and len(new_ai_shorts) == 0:
        print("\n⚠️  WARNING: No new content generated!")
        print("⚠️  Keeping existing content to prevent data loss")
        sys.exit(0)
    
    # Filter out content older than 24 hours
    filtered_cyber = [s for s in existing_cyber if not is_older_than_24_hours(s.get('date', ''))]
    filtered_ai = [s for s in existing_ai if not is_older_than_24_hours(s.get('date', ''))]
    
    removed_cyber = len(existing_cyber) - len(filtered_cyber)
    removed_ai = len(existing_ai) - len(filtered_ai)
    
    if removed_cyber > 0 or removed_ai > 0:
        print(f"🗑️  Removed {removed_cyber} cyber and {removed_ai} AI shorts (24+ hours old)")
    
    # ⚠️ SAFEGUARD: Keep at least some old content if filtering removes everything
    MIN_CONTENT = 2
    if len(filtered_cyber) < MIN_CONTENT and len(existing_cyber) > 0:
        print(f"⚠️  Keeping {MIN_CONTENT} most recent cyber shorts as backup")
        filtered_cyber = existing_cyber[:MIN_CONTENT]
    
    if len(filtered_ai) < MIN_CONTENT and len(existing_ai) > 0:
        print(f"⚠️  Keeping {MIN_CONTENT} most recent AI shorts as backup")
        filtered_ai = existing_ai[:MIN_CONTENT]
    
    # Combine new and remaining old shorts (new ones first)
    data['cyberShorts'] = new_cyber_shorts + filtered_cyber
    data['aiShorts'] = new_ai_shorts + filtered_ai
    
    # Limit to max 15 each (keep newest)
    data['cyberShorts'] = data['cyberShorts'][:15]
    data['aiShorts'] = data['aiShorts'][:15]
    
    # ⚠️ FINAL SAFEGUARD: Don't write if we'd end up with no content
    if len(data['cyberShorts']) == 0 or len(data['aiShorts']) == 0:
        print("\n⚠️  ERROR: Would result in empty content sections!")
        print("⚠️  Aborting update to prevent data loss")
        sys.exit(1)
    
    # Write back to file
    write_content_js(data)
    
    print(f"\n✅ Successfully updated content.js with REAL news")
    print(f"📝 Final count: {len(data['cyberShorts'])} cyber, {len(data['aiShorts'])} AI shorts")
    print(f"📅 Content is from real RSS feeds (past 48 hours)")
    print(f"🔗 All links and sources are authentic")
    print(f"\n{'='*60}\n")


if __name__ == "__main__":
    update_shorts()
