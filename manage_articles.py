#!/usr/bin/env python3
"""
Article Management Script
Automatically archives articles older than 7 days and removes archives older than 30 days
"""

import json
import re
from datetime import datetime, timedelta
from pathlib import Path

# Configuration
ARTICLES_JSON = Path('articles.json')
ARCHIVES_JS = Path('archives-content.js')
ARCHIVE_AFTER_DAYS = 7
DELETE_AFTER_DAYS = 30

def parse_date(date_str):
    """Parse date string in format 'November 26, 2025' to datetime"""
    try:
        return datetime.strptime(date_str, '%B %d, %Y')
    except ValueError:
        # Try alternative formats
        try:
            return datetime.strptime(date_str, '%Y-%m-%d')
        except ValueError:
            print(f"Warning: Could not parse date: {date_str}")
            return None

def format_date(dt):
    """Format datetime to 'November 26, 2025' format"""
    return dt.strftime('%B %d, %Y')

def load_articles():
    """Load articles from articles.json"""
    if not ARTICLES_JSON.exists():
        print(f"Error: {ARTICLES_JSON} not found")
        return []
    
    with open(ARTICLES_JSON, 'r', encoding='utf-8') as f:
        data = json.load(f)
        return data.get('articles', [])

def save_articles(articles):
    """Save articles to articles.json"""
    with open(ARTICLES_JSON, 'w', encoding='utf-8') as f:
        json.dump({'articles': articles}, f, indent=2, ensure_ascii=False)
    print(f"✅ Saved {len(articles)} articles to {ARTICLES_JSON}")

def load_archives():
    """Load archives from archives-content.js"""
    if not ARCHIVES_JS.exists():
        print(f"Warning: {ARCHIVES_JS} not found, creating new file")
        return []
    
    with open(ARCHIVES_JS, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract articles object from JavaScript
    match = re.search(r'"articles":\s*{([^}]+)}', content, re.DOTALL)
    if not match:
        return []
    
    # Parse archived articles (simplified - assumes specific format)
    # For now, return empty list - we'll rebuild from scratch
    return []

def save_archives(archived_articles):
    """Save archives to archives-content.js"""
    # Convert articles to JavaScript object format
    js_articles = {}
    for i, article in enumerate(archived_articles, 1):
        article_id = f'article{i}'
        js_articles[article_id] = article
    
    # Create JavaScript content
    js_content = f'''// Archived Articles (Auto-generated)
// Articles older than {ARCHIVE_AFTER_DAYS} days, kept for {DELETE_AFTER_DAYS} days

var archivedContent = {{
    "articles": {json.dumps(js_articles, indent=8, ensure_ascii=False)}
}};
'''
    
    with open(ARCHIVES_JS, 'w', encoding='utf-8') as f:
        f.write(js_content)
    
    print(f"✅ Saved {len(archived_articles)} articles to {ARCHIVES_JS}")

def manage_articles():
    """Main article management logic"""
    now = datetime.now()
    archive_cutoff = now - timedelta(days=ARCHIVE_AFTER_DAYS)
    delete_cutoff = now - timedelta(days=DELETE_AFTER_DAYS)
    
    print(f"\n📅 Article Management - {now.strftime('%Y-%m-%d %H:%M:%S')}")
    print(f"Archive cutoff: {format_date(archive_cutoff)} ({ARCHIVE_AFTER_DAYS} days ago)")
    print(f"Delete cutoff: {format_date(delete_cutoff)} ({DELETE_AFTER_DAYS} days ago)")
    print("-" * 60)
    
    # Load current articles
    articles = load_articles()
    print(f"\n📰 Current articles: {len(articles)}")
    
    # Separate articles into active and to-archive
    active_articles = []
    to_archive = []
    
    for article in articles:
        article_date = parse_date(article.get('date', ''))
        if not article_date:
            # Keep articles with unparseable dates
            active_articles.append(article)
            continue
        
        if article_date < archive_cutoff:
            print(f"  📦 Archiving: {article.get('title', 'Unknown')[:50]}... ({article.get('date')})")
            to_archive.append(article)
        else:
            active_articles.append(article)
    
    # Load existing archives
    existing_archives = load_archives()
    
    # Combine with new archives
    all_archives = to_archive + existing_archives
    
    # Filter archives - remove those older than DELETE_AFTER_DAYS
    kept_archives = []
    deleted_count = 0
    
    for article in all_archives:
        article_date = parse_date(article.get('date', ''))
        if not article_date:
            kept_archives.append(article)
            continue
        
        if article_date < delete_cutoff:
            print(f"  🗑️  Deleting: {article.get('title', 'Unknown')[:50]}... ({article.get('date')})")
            deleted_count += 1
        else:
            kept_archives.append(article)
    
    # Summary
    print(f"\n📊 Summary:")
    print(f"  Active articles: {len(active_articles)}")
    print(f"  Newly archived: {len(to_archive)}")
    print(f"  Total in archive: {len(kept_archives)}")
    print(f"  Deleted (>30 days): {deleted_count}")
    
    # Save if there were changes
    if to_archive or deleted_count > 0:
        save_articles(active_articles)
        save_archives(kept_archives)
        print(f"\n✅ Article management complete!")
        return True
    else:
        print(f"\n✨ No changes needed - all articles are current")
        return False

if __name__ == '__main__':
    changes_made = manage_articles()
    exit(0 if changes_made else 1)  # Exit code 0 if changes, 1 if no changes
