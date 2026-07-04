
import os
import re

# Base paths
BASE_DIR = '/Volumes/Data-Personal/Webpage/thehgtech'
GUIDES_DIR = os.path.join(BASE_DIR, 'guides')
COMPARISONS_DIR = os.path.join(BASE_DIR, 'comparisons')
ARTICLES_DIR = os.path.join(BASE_DIR, 'articles')

# The full New Header HTML (including Logo, Nav, Hamburger)
def get_header_html(section):
    # Highlight Logic
    guides_style = 'class="dropdown-item"'
    guides_title_style = 'class="dropdown-item-title"'
    comparisons_style = 'class="dropdown-item"'
    comparisons_title_style = 'class="dropdown-item-title"'
    
    if section == 'guides':
        guides_style = 'class="dropdown-item" style="background: rgba(0, 217, 255, 0.08);"'
        guides_title_style = 'class="dropdown-item-title" style="color: var(--accent-cyan);"'
    elif section == 'comparisons':
        comparisons_style = 'class="dropdown-item" style="background: rgba(0, 217, 255, 0.08);"'
        comparisons_title_style = 'class="dropdown-item-title" style="color: var(--accent-cyan);"'

    return f'''    <!-- Desktop Header -->
    <header class="header" role="banner">
        <div class="header-content">
            <div class="logo">
                <a href="/index.html" style="text-decoration: none; display: flex; align-items: center; gap: 0.75rem;">
                    <img src="/logo-dark.png" alt="TheHGTech Logo" class="logo-img logo-dark">
                    <img src="/logo-light.png" alt="TheHGTech Logo" class="logo-img logo-light">
                    <span class="logo-text">TheHGTech</span>
                </a>
            </div>

            <nav class="nav nav-modern" role="navigation">
                <a href="/index.html#news">News</a>

                <!-- Intelligence Dropdown -->
                <div class="nav-dropdown">
                    <span class="nav-dropdown-trigger">
                        Intelligence
                        <span class="nav-live-badge">LIVE</span>
                        <i class="fas fa-chevron-down dropdown-arrow"></i>
                    </span>
                    <div class="nav-dropdown-panel">
                        <a href="/threat-intel.html" class="dropdown-item">
                            <div class="dropdown-item-icon intel"><i class="fas fa-satellite-dish"></i></div>
                            <div class="dropdown-item-content">
                                <div class="dropdown-item-title">Threat Intelligence <span
                                        class="dropdown-badge live">LIVE</span></div>
                                <div class="dropdown-item-desc">Live IOCs from 9 trusted feeds, updated every 4 hours
                                </div>
                            </div>
                        </a>
                        <a href="/cve-tracker.html" class="dropdown-item">
                            <div class="dropdown-item-icon cve"><i class="fas fa-bug"></i></div>
                            <div class="dropdown-item-content">
                                <div class="dropdown-item-title">CVE Tracker</div>
                                <div class="dropdown-item-desc">CISA KEV + NVD critical vulnerabilities with EPSS scores
                                </div>
                            </div>
                        </a>
                        <a href="/ransomware-tracker.html" class="dropdown-item">
                            <div class="dropdown-item-icon ransomware"><i class="fas fa-skull-crossbones"></i></div>
                            <div class="dropdown-item-content">
                                <div class="dropdown-item-title">Ransomware Tracker</div>
                                <div class="dropdown-item-desc">Track active ransomware groups and victims</div>
                            </div>
                        </a>
                    </div>
                </div>

                <!-- Resources Dropdown -->
                <div class="nav-dropdown">
                    <span class="nav-dropdown-trigger">
                        Resources
                        <i class="fas fa-chevron-down dropdown-arrow"></i>
                    </span>
                    <div class="nav-dropdown-panel">
                        <a href="/guides/" {guides_style}>
                            <div class="dropdown-item-icon guides"><i class="fas fa-book"></i></div>
                            <div class="dropdown-item-content">
                                <div {guides_title_style}>Security Guides <span
                                        class="dropdown-badge popular">37+</span></div>
                                <div class="dropdown-item-desc">ISO 27001, NIST, SOC2, incident response & more</div>
                            </div>
                        </a>
                        <a href="/comparisons/" {comparisons_style}>
                            <div class="dropdown-item-icon comparisons"><i class="fas fa-balance-scale"></i></div>
                            <div class="dropdown-item-content">
                                <div {comparisons_title_style}>Tool Comparisons</div>
                                <div class="dropdown-item-desc">EDR, SIEM, and security tool head-to-head reviews</div>
                            </div>
                        </a>
                        <div class="dropdown-divider"></div>
                        <a href="/articles.html" class="dropdown-item">
                            <div class="dropdown-item-icon articles"><i class="fas fa-newspaper"></i></div>
                            <div class="dropdown-item-content">
                                <div class="dropdown-item-title">Articles</div>
                                <div class="dropdown-item-desc">Latest cybersecurity news and analysis</div>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="theme-toggle-wrapper">
                    <button class="theme-toggle" id="themeToggle" aria-label="Toggle theme">
                        <div class="toggle-stars">
                            <div class="star"></div>
                            <div class="star"></div>
                            <div class="star"></div>
                            <div class="star"></div>
                        </div>
                    </button>
                </div>
            </nav>

            <button class="mobile-menu-btn" aria-label="Toggle menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </header>'''

def update_file_nav(filepath, section):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # 1. Ensure CSS is present (redundancy check)
        if 'header-dropdown.css' not in content:
            if '<link rel="stylesheet" href="/header.css">' in content:
                content = content.replace(
                    '<link rel="stylesheet" href="/header.css">', 
                    '<link rel="stylesheet" href="/header.css">\n    <link rel="stylesheet" href="/header-dropdown.css?v=1">'
                )
                print(f"  + Added CSS to {os.path.basename(filepath)}")
            else:
                 # Fallback: add after title or other css
                 pass 

        # 2. Check for existing desktop header
        header_pattern = re.compile(r'<header class="header"[^>]*>.*?</header>', re.DOTALL)
        
        new_header = get_header_html(section)
        
        if header_pattern.search(content):
            # REPLACE existing header
            content = header_pattern.sub(new_header, content)
            print(f"  * Replaced existing header in {os.path.basename(filepath)}")
        else:
            # INSERT new header
            # Try to find a good insertion point. 
            # Usually after <nav class="m-bottom-nav ..."> or before <div class="container">
            
            # Strategy: Look for the mobile nav end, or body start if no mobile nav
            if '<nav class="m-bottom-nav' in content:
                # Insert after the closing </nav> of bottom nav
                pattern = re.compile(r'(<nav class="m-bottom-nav[^>]*>.*?</nav>)', re.DOTALL)
                if pattern.search(content):
                    content = pattern.sub(r'\1\n\n' + new_header, content)
                    print(f"  + Inserted header after mobile nav in {os.path.basename(filepath)}")
            elif '<div class="container">' in content:
                 content = content.replace('<div class="container">', new_header + '\n\n    <div class="container">')
                 print(f"  + Inserted header before container in {os.path.basename(filepath)}")
            elif '<div class="article-container">' in content:
                 content = content.replace('<div class="article-container">', new_header + '\n\n    <div class="article-container">')
                 print(f"  + Inserted header before article-container in {os.path.basename(filepath)}")
            else:
                print(f"  ! Could not find insertion point for {os.path.basename(filepath)}")
                return # Skip writing if we can't safely insert

        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)

    except Exception as e:
        print(f"Error processing {filepath}: {e}")

# Main execution
def main():
    # Update Guides
    print("--- Updating Guides ---")
    for filename in os.listdir(GUIDES_DIR):
        if filename.endswith(".html") and filename != "index.html":
            update_file_nav(os.path.join(GUIDES_DIR, filename), "guides")

    # Update Comparisons
    print("\n--- Updating Comparisons ---")
    for filename in os.listdir(COMPARISONS_DIR):
        if filename.endswith(".html") and filename != "index.html":
            update_file_nav(os.path.join(COMPARISONS_DIR, filename), "comparisons")
            
    # Update Articles
    print("\n--- Updating Articles ---")
    for filename in os.listdir(ARTICLES_DIR):
        if filename.endswith(".html"):
            update_file_nav(os.path.join(ARTICLES_DIR, filename), "articles")

if __name__ == "__main__":
    main()
