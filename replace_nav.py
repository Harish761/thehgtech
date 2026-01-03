
import os
import re

# Base paths
BASE_DIR = '/Volumes/Data-Personal/Webpage/thehgtech'
GUIDES_DIR = os.path.join(BASE_DIR, 'guides')
COMPARISONS_DIR = os.path.join(BASE_DIR, 'comparisons')
ARTICLES_DIR = os.path.join(BASE_DIR, 'articles')

# New Navigation Components (Templates)
NAV_START = '''            <nav class="nav nav-modern" role="navigation">
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
                    <div class="nav-dropdown-panel">'''

NAV_END = '''                        <div class="dropdown-divider"></div>
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
            </nav>'''

# Helper to generate the Middle part of Nav (with active highlighting)
def get_nav_middle(section):
    # Default Styles
    guides_style = 'class="dropdown-item"'
    guides_title_style = 'class="dropdown-item-title"'
    
    comparisons_style = 'class="dropdown-item"'
    comparisons_title_style = 'class="dropdown-item-title"'
    
    # Highlight Logic
    if section == 'guides':
        guides_style = 'class="dropdown-item" style="background: rgba(0, 217, 255, 0.08);"'
        guides_title_style = 'class="dropdown-item-title" style="color: var(--accent-cyan);"'
    elif section == 'comparisons':
        comparisons_style = 'class="dropdown-item" style="background: rgba(0, 217, 255, 0.08);"'
        comparisons_title_style = 'class="dropdown-item-title" style="color: var(--accent-cyan);"'

    return f'''
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
                        </a>'''

def update_file_nav(filepath, section):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        # Regex to match the old nav
        # It looks for <nav class="nav" ...> ... </nav>
        nav_pattern = re.compile(r'<nav class="nav"[^>]*>.*?</nav>', re.DOTALL)
        
        if not nav_pattern.search(content):
            print(f"Skipping {filepath}: No old navigation found.")
            return

        # Construct new nav
        new_nav = NAV_START + get_nav_middle(section) + NAV_END
        
        # Replace
        new_content = nav_pattern.sub(new_nav, content)
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
            
        print(f"Updated: {filepath}")

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
             # Articles don't have a dedicated "Articles" active state in the "Resources" dropdown in the design, 
             # but we can optionally highlight it if we wanted. For now, no highlighting.
            update_file_nav(os.path.join(ARTICLES_DIR, filename), "articles")

if __name__ == "__main__":
    main()
