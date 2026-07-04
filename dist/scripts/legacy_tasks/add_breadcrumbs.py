#!/usr/bin/env python3
"""
Add Breadcrumb Structured Data to All Guides and Articles
----------------------------------------------------------
This script adds BreadcrumbList JSON-LD schema to pages that don't have it.
This improves SEO by helping Google understand site hierarchy.
"""

import os
import re
from pathlib import Path

def get_page_title(content, filename):
    """Extract page title from HTML"""
    # Try to get from <title> tag
    title_match = re.search(r'<title>([^|<]+)', content)
    if title_match:
        return title_match.group(1).strip()
    
    # Try h1
    h1_match = re.search(r'<h1[^>]*>([^<]+)</h1>', content)
    if h1_match:
        return h1_match.group(1).strip()
    
    # Fallback to filename
    return filename.replace('.html', '').replace('-', ' ').title()

def has_breadcrumb(content):
    """Check if page already has BreadcrumbList schema"""
    return 'BreadcrumbList' in content

def create_breadcrumb_schema(page_type, page_name, page_url):
    """Generate BreadcrumbList JSON-LD schema"""
    
    if page_type == 'guide':
        return f'''
    <!-- ========== STRUCTURED DATA - BREADCRUMB ========== -->
    <script type="application/ld+json">
    {{
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [{{
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://thehgtech.com"
      }}, {{
        "@type": "ListItem",
        "position": 2,
        "name": "Guides",
        "item": "https://thehgtech.com/guides/"
      }}, {{
        "@type": "ListItem",
        "position": 3,
        "name": "{page_name}",
        "item": "https://thehgtech.com{page_url}"
      }}]
    }}
    </script>
'''
    
    elif page_type == 'article':
        return f'''
    <!-- ========== STRUCTURED DATA - BREADCRUMB ========== -->
    <script type="application/ld+json">
    {{
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [{{
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://thehgtech.com"
      }}, {{
        "@type": "ListItem",
        "position": 2,
        "name": "Articles",
        "item": "https://thehgtech.com/articles.html"
      }}, {{
        "@type": "ListItem",
        "position": 3,
        "name": "{page_name}",
        "item": "https://thehgtech.com{page_url}"
      }}]
    }}
    </script>
'''
    
    elif page_type == 'comparison':
        return f'''
    <!-- ========== STRUCTURED DATA - BREADCRUMB ========== -->
    <script type="application/ld+json">
    {{
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [{{
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://thehgtech.com"
      }}, {{
        "@type": "ListItem",
        "position": 2,
        "name": "Comparisons",
        "item": "https://thehgtech.com/comparisons/"
      }}, {{
        "@type": "ListItem",
        "position": 3,
        "name": "{page_name}",
        "item": "https://thehgtech.com{page_url}"
      }}]
    }}
    </script>
'''
    
    return ''

def add_breadcrumb_to_file(filepath, page_type):
    """Add breadcrumb schema to a single file"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if has_breadcrumb(content):
        return False, "Already has breadcrumb"
    
    filename = os.path.basename(filepath)
    
    # Skip index files
    if filename == 'index.html':
        return False, "Index page skipped"
    
    # Get page title
    page_name = get_page_title(content, filename)
    
    # Escape quotes for JSON
    page_name = page_name.replace('"', '\\"')
    
    # Truncate if too long
    if len(page_name) > 60:
        page_name = page_name[:57] + "..."
    
    # Build URL
    if page_type == 'guide':
        page_url = f"/guides/{filename}"
    elif page_type == 'article':
        page_url = f"/articles/{filename}"
    elif page_type == 'comparison':
        page_url = f"/comparisons/{filename}"
    else:
        return False, "Unknown page type"
    
    # Create schema
    breadcrumb_schema = create_breadcrumb_schema(page_type, page_name, page_url)
    
    # Find insertion point - after last </script> in head or before </head>
    # Best to insert before closing </head>
    
    # Look for a good insertion point - after existing structured data or before </head>
    if '</head>' in content:
        # Insert just before </head>
        content = content.replace('</head>', breadcrumb_schema + '</head>')
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        
        return True, page_name
    
    return False, "Could not find </head>"

def main():
    base_path = Path('/Volumes/Data-Personal/Webpage/thehgtech')
    
    stats = {
        'guides_updated': 0,
        'guides_skipped': 0,
        'articles_updated': 0,
        'articles_skipped': 0,
        'comparisons_updated': 0,
        'comparisons_skipped': 0,
    }
    
    print("=" * 60)
    print("🍞 Adding Breadcrumb Structured Data")
    print("=" * 60)
    
    # Process Guides
    print("\n📚 Processing Guides...")
    guides_dir = base_path / 'guides'
    for filepath in guides_dir.glob('*.html'):
        success, result = add_breadcrumb_to_file(filepath, 'guide')
        if success:
            stats['guides_updated'] += 1
            print(f"  ✅ {filepath.name}: {result}")
        else:
            stats['guides_skipped'] += 1
            if 'Already' not in result:
                print(f"  ⏭️  {filepath.name}: {result}")
    
    # Process Articles
    print("\n📰 Processing Articles...")
    articles_dir = base_path / 'articles'
    for filepath in articles_dir.glob('*.html'):
        success, result = add_breadcrumb_to_file(filepath, 'article')
        if success:
            stats['articles_updated'] += 1
            print(f"  ✅ {filepath.name}: {result}")
        else:
            stats['articles_skipped'] += 1
            if 'Already' not in result:
                print(f"  ⏭️  {filepath.name}: {result}")
    
    # Process Comparisons
    print("\n⚖️  Processing Comparisons...")
    comparisons_dir = base_path / 'comparisons'
    for filepath in comparisons_dir.glob('*.html'):
        success, result = add_breadcrumb_to_file(filepath, 'comparison')
        if success:
            stats['comparisons_updated'] += 1
            print(f"  ✅ {filepath.name}: {result}")
        else:
            stats['comparisons_skipped'] += 1
            if 'Already' not in result:
                print(f"  ⏭️  {filepath.name}: {result}")
    
    # Summary
    print("\n" + "=" * 60)
    print("📊 SUMMARY")
    print("=" * 60)
    print(f"✅ Guides updated:      {stats['guides_updated']}")
    print(f"⏭️  Guides skipped:      {stats['guides_skipped']}")
    print(f"✅ Articles updated:    {stats['articles_updated']}")
    print(f"⏭️  Articles skipped:    {stats['articles_skipped']}")
    print(f"✅ Comparisons updated: {stats['comparisons_updated']}")
    print(f"⏭️  Comparisons skipped: {stats['comparisons_skipped']}")
    print("=" * 60)
    
    total = stats['guides_updated'] + stats['articles_updated'] + stats['comparisons_updated']
    print(f"\n🎉 Total pages updated: {total}")
    print("\nNext step: Commit changes and wait for Google to re-crawl.")

if __name__ == "__main__":
    main()
