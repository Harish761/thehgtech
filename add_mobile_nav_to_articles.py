#!/usr/bin/env python3
"""
Add mobile navigation to all article pages
"""

import os
import re
import glob

MOBILE_NAV_CSS = '''
    <!-- Mobile Navigation CSS -->
    <link rel="stylesheet" href="m-core.css?v=4.2">
    <link rel="stylesheet" href="m-layout.css?v=3.2">
    <link rel="stylesheet" href="m-components.css?v=3.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="light-mode.css">
    <script src="m-app.js?v=4.3" defer></script>
    <style>
        :root {
            --bg-primary: #0a0a0a;
            --text-primary: #fff;
            --text-secondary: #aaa;
            --accent-cyan: #00D9FF;
            --border: rgba(255, 255, 255, 0.1);
        }
        body { 
            font-family: 'Inter', -apple-system, sans-serif; 
            background: var(--bg-primary); 
            color: var(--text-primary); 
            line-height: 1.8;
            padding: 0;
            margin: 0;
        }
        article {
            max-width: 800px;
            margin: 0 auto;
            padding: 80px 1.5rem 120px;
        }
        article h1 {
            font-size: 1.75rem;
            background: linear-gradient(135deg, var(--accent-cyan), #ff006e);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 1rem;
        }
        article h2 { color: var(--accent-cyan); margin: 2rem 0 1rem; font-size: 1.4rem; }
        article h3 { color: var(--text-primary); margin: 1.5rem 0 0.75rem; font-size: 1.2rem; }
        article p { color: var(--text-secondary); margin-bottom: 1rem; }
        article ul, article ol { color: var(--text-secondary); margin-left: 1.5rem; margin-bottom: 1rem; }
        article li { margin-bottom: 0.5rem; }
        article strong { color: var(--text-primary); }
        @media (max-width: 768px) {
            article h1 { font-size: 1.5rem; }
        }
        .light-mode body { background: #fff; color: #1a1a1a; }
        .light-mode article p { color: #555; }
        .light-mode article h1 { background: linear-gradient(135deg, #0077aa, #c41e3a); -webkit-background-clip: text; }
    </style>
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
        <a href="cve-tracker.html" class="m-bottom-nav__item">
            <i class="fas fa-bug"></i>
            <span>CVE</span>
        </a>
        <a href="threat-intel.html" class="m-bottom-nav__item">
            <i class="fas fa-shield-alt"></i>
            <span>Intel</span>
        </a>
        <a href="articles.html" class="m-bottom-nav__item active">
            <i class="fas fa-newspaper"></i>
            <span>Articles</span>
        </a>
        <a href="guides/" class="m-bottom-nav__item">
            <i class="fas fa-book"></i>
            <span>Guides</span>
        </a>
    </nav>

'''

def add_mobile_nav_to_file(filepath):
    """Add mobile navigation to an article file"""
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
    base_dir = '/Volumes/Data-Personal/Webpage/thehgtech'
    
    # Find all article-*.html files
    pattern = os.path.join(base_dir, 'article-*.html')
    files = glob.glob(pattern)
    
    updated = 0
    for filepath in files:
        if add_mobile_nav_to_file(filepath):
            updated += 1
    
    print(f"\nUpdated {updated} article files")

if __name__ == '__main__':
    main()
