#!/usr/bin/env python3
"""
Easy Article Creator
Simple interactive script to add new articles to TheHGTech
"""

import json
import os
from datetime import datetime
from pathlib import Path

ARTICLES_JSON = Path('articles.json')

def load_articles():
    """Load existing articles"""
    if not ARTICLES_JSON.exists():
        return []
    with open(ARTICLES_JSON, 'r', encoding='utf-8') as f:
        data = json.load(f)
        return data.get('articles', [])

def save_articles(articles):
    """Save articles to JSON"""
    with open(ARTICLES_JSON, 'w', encoding='utf-8') as f:
        json.dump({'articles': articles}, f, indent=2, ensure_ascii=False)
    print(f"\n✅ Saved! Article added to articles.json")

def generate_article_id():
    """Generate unique article ID"""
    timestamp = datetime.now().strftime('%Y%m%d%H%M%S')
    return f"article-{timestamp}"

def format_date():
    """Get current date in 'November 27, 2025' format"""
    return datetime.now().strftime('%B %d, %Y')

def create_article_interactive():
    """Interactive article creation"""
    print("=" * 60)
    print("📝 TheHGTech Article Creator")
    print("=" * 60)
    
    # Get article details
    print("\n1️⃣  Article Title:")
    title = input("   → ").strip()
    
    print("\n2️⃣  Category (Cybersecurity/AI/Policy/Threat Intelligence):")
    category = input("   → ").strip() or "Cybersecurity"
    
    print("\n3️⃣  Short Excerpt (1-2 sentences):")
    excerpt = input("   → ").strip()
    
    print("\n4️⃣  Tags (comma-separated, e.g., 'DDoS, Cloud Security, Azure'):")
    tags_input = input("   → ").strip()
    tags = [tag.strip() for tag in tags_input.split(',') if tag.strip()]
    
    print("\n5️⃣  Author Name:")
    author = input("   → ").strip() or "Harish G"
    
    print("\n6️⃣  Article Content:")
    print("   Options:")
    print("   a) Paste HTML content now")
    print("   b) Provide file path to HTML file")
    print("   c) I'll add content later (creates placeholder)")
    choice = input("   → ").strip().lower()
    
    content = ""
    if choice == 'a':
        print("\n   Paste your HTML content (press Ctrl+D when done):")
        print("   " + "-" * 50)
        lines = []
        try:
            while True:
                line = input()
                lines.append(line)
        except EOFError:
            content = '\n'.join(lines)
    elif choice == 'b':
        file_path = input("   File path: ").strip()
        if os.path.exists(file_path):
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            print(f"   ✓ Loaded content from {file_path}")
        else:
            print(f"   ⚠ File not found, using placeholder")
            content = f"<article>\n  <h1>{title}</h1>\n  <p>Content coming soon...</p>\n</article>"
    else:
        content = f"<article>\n  <h1>{title}</h1>\n  <p>Content coming soon...</p>\n</article>"
    
    # Generate article object
    article = {
        "id": generate_article_id(),
        "title": title,
        "date": format_date(),
        "category": category,
        "excerpt": excerpt,
        "content": content,
        "tags": tags,
        "author": author
    }
    
    # Preview
    print("\n" + "=" * 60)
    print("📋 Article Preview")
    print("=" * 60)
    print(f"ID:       {article['id']}")
    print(f"Title:    {article['title']}")
    print(f"Date:     {article['date']}")
    print(f"Category: {article['category']}")
    print(f"Excerpt:  {article['excerpt']}")
    print(f"Tags:     {', '.join(article['tags'])}")
    print(f"Author:   {article['author']}")
    print(f"Content:  {len(content)} characters")
    
    # Confirm
    print("\n" + "=" * 60)
    confirm = input("💾 Save this article? (y/n): ").strip().lower()
    
    if confirm == 'y':
        # Load existing articles and prepend new one
        articles = load_articles()
        articles.insert(0, article)  # Add to beginning
        save_articles(articles)
        
        print("\n✨ Article created successfully!")
        print(f"📍 Location: {ARTICLES_JSON.absolute()}")
        print(f"🆔 Article ID: {article['id']}")
        print("\n💡 Next steps:")
        print("   1. Review the article in articles.json")
        print("   2. Run: git add articles.json")
        print("   3. Run: git commit -m 'Add new article: {}'".format(title[:50]))
        print("   4. Run: git push")
        return True
    else:
        print("\n❌ Article not saved")
        return False

def create_from_template():
    """Create article from a template file"""
    print("\n📄 Create from Template")
    print("   Place your article HTML in a file and provide the path")
    print("   The script will extract title, excerpt, etc. from the HTML")
    print("\n   Not implemented yet - use interactive mode for now")

def main():
    """Main menu"""
    while True:
        print("\n" + "=" * 60)
        print("📝 TheHGTech Article Creator")
        print("=" * 60)
        print("\n1. Create new article (interactive)")
        print("2. Create from template file")
        print("3. View existing articles")
        print("4. Exit")
        
        choice = input("\nSelect option (1-4): ").strip()
        
        if choice == '1':
            create_article_interactive()
        elif choice == '2':
            create_from_template()
        elif choice == '3':
            articles = load_articles()
            print(f"\n📰 Current articles: {len(articles)}")
            for i, article in enumerate(articles[:5], 1):
                print(f"   {i}. {article.get('title', 'Untitled')} ({article.get('date', 'No date')})")
            if len(articles) > 5:
                print(f"   ... and {len(articles) - 5} more")
        elif choice == '4':
            print("\n👋 Goodbye!")
            break
        else:
            print("\n❌ Invalid option")

if __name__ == '__main__':
    main()
