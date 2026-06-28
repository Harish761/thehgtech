#!/usr/bin/env python3
"""
Add mobile navigation to all guide pages
"""

import os
import re

MOBILE_NAV_CSS = '''
    <!-- Mobile Navigation CSS -->
    <link rel="stylesheet" href="/m-core.css?v=4.2">
    <link rel="stylesheet" href="/m-layout.css?v=3.2">
    <link rel="stylesheet" href="/m-components.css?v=3.0">
    <script src="/m-app.js?v=4.3" defer></script>
'''

MOBILE_NAV_HTML = '''
    <!-- Mobile Header -->
    <header class="m-header m-only">
        <div class="m-header__logo">TheHGTech</div>
        <div class="m-header__actions">
            <!-- Premium Theme Toggle -->
            <button class="m-theme-toggle" onclick="mToggleTheme()" aria-label="Toggle Theme">
                <span class="m-theme-toggle__thumb"></span>
                <span class="m-theme-toggle__stars">
                    <span class="m-theme-toggle__star"></span>
                    <span class="m-theme-toggle__star"></span>
                </span>
            </button>
            <!-- Search Button -->
            <button class="m-header__btn m-header__btn--search" data-action="search" aria-label="Search">
                <i class="fas fa-search"></i>
            </button>
        </div>
    </header>

    <!-- Bottom Navigation -->
    <nav class="m-bottom-nav m-only">
        <a href="/" class="m-bottom-nav__item">
            <i class="fas fa-home"></i>
            <span>Home</span>
        </a>
        <a href="/cve-tracker.html" class="m-bottom-nav__item">
            <i class="fas fa-bug"></i>
            <span>CVE</span>
        </a>
        <a href="/threat-intel.html" class="m-bottom-nav__item">
            <i class="fas fa-shield-alt"></i>
            <span>Intel</span>
        </a>
        <a href="/articles.html" class="m-bottom-nav__item">
            <i class="fas fa-newspaper"></i>
            <span>Articles</span>
        </a>
        <a href="/guides/" class="m-bottom-nav__item active">
            <i class="fas fa-book"></i>
            <span>Guides</span>
        </a>
    </nav>

'''

def add_mobile_nav_to_file(filepath):
    """Add mobile navigation to a guide file"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Check if already has mobile nav
    if 'm-core.css' in content:
        print(f"  Skipping {filepath} - already has mobile CSS")
        return False
    
    # Add CSS before </head>
    if '</head>' in content:
        content = content.replace('</head>', MOBILE_NAV_CSS + '</head>')
    
    # Add HTML after <body...>
    body_match = re.search(r'<body[^>]*>', content)
    if body_match:
        insert_pos = body_match.end()
        content = content[:insert_pos] + MOBILE_NAV_HTML + content[insert_pos:]
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"  Updated {filepath}")
    return True

def main():
    guides_dir = '/Volumes/Data-Personal/Webpage/thehgtech/guides'
    
    updated = 0
    for filename in os.listdir(guides_dir):
        if filename.endswith('.html') and filename != 'index.html':
            filepath = os.path.join(guides_dir, filename)
            if add_mobile_nav_to_file(filepath):
                updated += 1
    
    print(f"\nUpdated {updated} guide files")

if __name__ == '__main__':
    main()
