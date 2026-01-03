#!/bin/bash
# Script to update all individual pages with the new dropdown header

# The new header CSS link to add (after header.css)
NEW_CSS='    <link rel="stylesheet" href="/header-dropdown.css?v=1">'

# The new navigation HTML to replace the old nav
NEW_NAV='            <nav class="nav nav-modern" role="navigation">
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
                        <a href="/guides/" class="dropdown-item">
                            <div class="dropdown-item-icon guides"><i class="fas fa-book"></i></div>
                            <div class="dropdown-item-content">
                                <div class="dropdown-item-title">Security Guides <span
                                        class="dropdown-badge popular">37+</span></div>
                                <div class="dropdown-item-desc">ISO 27001, NIST, SOC2, incident response \& more</div>
                            </div>
                        </a>
                        <a href="/comparisons/" class="dropdown-item">
                            <div class="dropdown-item-icon comparisons"><i class="fas fa-balance-scale"></i></div>
                            <div class="dropdown-item-content">
                                <div class="dropdown-item-title">Tool Comparisons</div>
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
            </nav>'

# Function to update a single file
update_file() {
    local file="$1"
    echo "Updating: $file"
    
    # Check if file already has header-dropdown.css
    if grep -q "header-dropdown.css" "$file"; then
        echo "  - Already has header-dropdown.css, skipping CSS addition"
    else
        # Add header-dropdown.css after header.css
        sed -i '' 's|<link rel="stylesheet" href="/header.css">|<link rel="stylesheet" href="/header.css">\n    <link rel="stylesheet" href="/header-dropdown.css?v=1">|g' "$file"
        echo "  + Added header-dropdown.css"
    fi
    
    # Check if file already has nav-modern
    if grep -q "nav-modern" "$file"; then
        echo "  - Already has nav-modern, skipping nav update"
    else
        echo "  + Will need nav update (run Python script)"
    fi
}

# Process all files
echo "=== Updating Guide Pages ==="
for file in guides/*.html; do
    if [ "$file" != "guides/index.html" ]; then
        update_file "$file"
    fi
done

echo ""
echo "=== Updating Comparison Pages ==="
for file in comparisons/*.html; do
    if [ "$file" != "comparisons/index.html" ]; then
        update_file "$file"
    fi
done

echo ""
echo "=== Updating Article Pages ==="
for file in articles/*.html; do
    update_file "$file"
done

echo ""
echo "Done! CSS links added. Now run the Python script to update navigation."
