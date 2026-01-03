---
description: UI component standards and design system for TheHGTech
---

# TheHGTech UI Components & Design System

## Brand Colors
```css
:root {
    /* Primary Colors */
    --bg-primary: #000000;
    --bg-secondary: #0a0a0a;
    --bg-card: rgba(255, 255, 255, 0.03);
    
    /* Accent Colors */
    --accent-cyan: #00D9FF;      /* Primary accent, links, highlights */
    --accent-red: #FF4C4C;       /* Warnings, critical, errors */
    --accent-green: #10b981;     /* Success, pros, positive */
    --accent-orange: #f59e0b;    /* Warnings, medium severity */
    --accent-purple: #8b5cf6;    /* AI, secondary accent */
    --accent-pink: #ec4899;      /* AI gradient partner */
    
    /* Text Colors */
    --text-primary: #ffffff;
    --text-secondary: #a0a0a0;
    --text-muted: #666666;
    
    /* Borders */
    --border: rgba(255, 255, 255, 0.1);
    --glass: rgba(255, 255, 255, 0.05);
}
```

## Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300 (light), 400 (regular), 500 (medium), 600 (semibold), 700 (bold), 800 (extrabold)
- **Base Size**: 18px on body
- **Line Height**: 1.7

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
```

## Icons - FontAwesome 6
**NEVER use emojis. Always use FontAwesome icons.**

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
```

### Common Icons Reference
| Purpose | Icon HTML |
|---------|-----------|
| Home | `<i class="fas fa-home"></i>` |
| Search | `<i class="fas fa-search"></i>` |
| Menu | `<i class="fas fa-bars"></i>` |
| Close | `<i class="fas fa-times"></i>` |
| Settings | `<i class="fas fa-cog"></i>` |
| User | `<i class="fas fa-user"></i>` |
| Calendar | `<i class="far fa-calendar-alt"></i>` |
| Clock | `<i class="fas fa-clock"></i>` |
| Book/Read | `<i class="fas fa-book-open"></i>` |
| Target | `<i class="fas fa-crosshairs"></i>` |
| List | `<i class="fas fa-list-ul"></i>` |
| Link | `<i class="fas fa-link"></i>` |
| External Link | `<i class="fas fa-external-link-alt"></i>` |
| Download | `<i class="fas fa-download"></i>` |
| Copy | `<i class="fas fa-copy"></i>` |
| Check/Success | `<i class="fas fa-check-circle"></i>` |
| Warning | `<i class="fas fa-exclamation-triangle"></i>` |
| Error | `<i class="fas fa-times-circle"></i>` |
| Info | `<i class="fas fa-info-circle"></i>` |
| Lightbulb/Tip | `<i class="fas fa-lightbulb"></i>` |
| Fire/Hot | `<i class="fas fa-fire"></i>` |
| Shield | `<i class="fas fa-shield-alt"></i>` |
| Bug | `<i class="fas fa-bug"></i>` |
| Lock | `<i class="fas fa-lock"></i>` |
| Unlock | `<i class="fas fa-lock-open"></i>` |
| Key | `<i class="fas fa-key"></i>` |
| Robot/AI | `<i class="fas fa-robot"></i>` |
| Brain | `<i class="fas fa-brain"></i>` |
| Code | `<i class="fas fa-code"></i>` |
| Terminal | `<i class="fas fa-terminal"></i>` |
| Server | `<i class="fas fa-server"></i>` |
| Database | `<i class="fas fa-database"></i>` |
| Cloud | `<i class="fas fa-cloud"></i>` |
| Network | `<i class="fas fa-network-wired"></i>` |
| Globe | `<i class="fas fa-globe"></i>` |
| Chart | `<i class="fas fa-chart-line"></i>` |
| Bell/Alert | `<i class="fas fa-bell"></i>` |
| Newspaper | `<i class="fas fa-newspaper"></i>` |
| Skull | `<i class="fas fa-skull-crossbones"></i>` |

## Buttons

### Primary Button
```html
<button class="btn-primary">Action</button>
```
```css
.btn-primary {
    background: var(--accent-cyan);
    color: #000;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
}
.btn-primary:hover {
    box-shadow: 0 0 20px var(--accent-cyan);
    transform: translateY(-2px);
}
```

### Secondary Button
```html
<button class="btn-secondary">Action</button>
```
```css
.btn-secondary {
    background: transparent;
    color: var(--accent-cyan);
    padding: 0.75rem 1.5rem;
    border: 1px solid var(--accent-cyan);
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
}
```

### Ghost Button
```html
<button class="btn-ghost">Action</button>
```
```css
.btn-ghost {
    background: transparent;
    color: var(--text-secondary);
    padding: 0.75rem 1.5rem;
    border: 1px solid var(--border);
    border-radius: 8px;
    cursor: pointer;
}
```

## Cards

### Standard Card
```html
<div class="card">
    <h3>Card Title</h3>
    <p>Card content</p>
</div>
```
```css
.card {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 1.5rem;
    transition: transform 0.3s, border-color 0.3s;
}
.card:hover {
    transform: translateY(-5px);
    border-color: var(--accent-cyan);
}
```

### Highlighted Card (NEW badge)
```html
<div class="card card-highlighted">
    <span class="new-badge">New</span>
    <h3>Title</h3>
</div>
```
```css
.card-highlighted {
    border: 2px solid var(--accent-cyan);
    box-shadow: 0 0 20px rgba(0, 217, 255, 0.3);
}
.new-badge {
    background: var(--accent-cyan);
    color: #000;
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
}
```

## Alert/Info Boxes

### Info Box
```html
<div class="info-box">
    <strong><i class="fas fa-lightbulb"></i> Tip:</strong> Content here
</div>
```
```css
.info-box {
    background: rgba(0, 217, 255, 0.05);
    border-left: 4px solid var(--accent-cyan);
    padding: 1.5rem;
    margin: 2rem 0;
    border-radius: 8px;
}
```

### Warning Box
```html
<div class="warning-box">
    <strong><i class="fas fa-exclamation-triangle"></i> Warning:</strong> Content
</div>
```
```css
.warning-box {
    background: rgba(255, 76, 76, 0.05);
    border-left: 4px solid var(--accent-red);
    padding: 1.5rem;
    margin: 2rem 0;
    border-radius: 8px;
}
```

### Success Box
```html
<div class="success-box">
    <strong><i class="fas fa-check-circle"></i> Success:</strong> Content
</div>
```
```css
.success-box {
    background: rgba(16, 185, 129, 0.05);
    border-left: 4px solid var(--accent-green);
    padding: 1.5rem;
    margin: 2rem 0;
    border-radius: 8px;
}
```

### AI Box (Gradient)
```html
<div class="ai-box">
    <strong><i class="fas fa-robot"></i> AI Insight:</strong> Content
</div>
```
```css
.ai-box {
    background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1));
    border-left: 4px solid;
    border-image: linear-gradient(135deg, #8b5cf6, #ec4899) 1;
    padding: 1.5rem;
    margin: 2rem 0;
    border-radius: 8px;
}
```

## Tables
```html
<table>
    <thead>
        <tr>
            <th>Header 1</th>
            <th>Header 2</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Data 1</td>
            <td>Data 2</td>
        </tr>
    </tbody>
</table>
```
```css
table {
    width: 100%;
    border-collapse: collapse;
    margin: 1.5rem 0;
    background: var(--bg-card);
    border-radius: 8px;
    overflow: hidden;
}
th, td {
    padding: 1rem;
    text-align: left;
    border-bottom: 1px solid var(--border);
}
th {
    background: rgba(0, 217, 255, 0.1);
    color: var(--accent-cyan);
    font-weight: 600;
}
td {
    color: var(--text-secondary);
}
```

## Code Blocks
```html
<pre><code>// Code here</code></pre>
```
```css
pre {
    background: var(--bg-secondary);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 1.5rem;
    overflow-x: auto;
    margin: 1.5rem 0;
}
code {
    font-family: 'Courier New', monospace;
    color: var(--accent-green);
}
```

## Badges/Tags

### Category Badge
```html
<span class="badge">[Category]</span>
```
```css
.badge {
    display: inline-block;
    padding: 0.3rem 0.8rem;
    background: rgba(0, 217, 255, 0.1);
    color: var(--accent-cyan);
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 500;
}
```

### Severity Badges
```css
.severity-critical { color: var(--accent-red); }
.severity-high { color: var(--accent-orange); }
.severity-medium { color: var(--accent-purple); }
.severity-low { color: var(--accent-green); }
```

## Required Includes for All Pages
```html
<!-- Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<!-- Site CSS -->
<link rel="stylesheet" href="/header.css">
<link rel="stylesheet" href="/header-dropdown.css?v=1">
<link rel="stylesheet" href="/light-mode.css">

<!-- Mobile CSS -->
<link rel="stylesheet" href="/m-core.css?v=4.2">
<link rel="stylesheet" href="/m-layout.css?v=3.2">
<link rel="stylesheet" href="/m-components.css?v=3.0">
<script src="/m-app.js?v=4.3" defer></script>
```

## Light Mode Support
All pages must support light mode via the `/light-mode.css` file. 
Theme is toggled by adding class `light-mode` to body.

## Standard Header HTML Structure
All pages (Articles, Guides, Comparisons) MUST use this header structure. Highlights can be added to the active section link.

```html
<!-- Desktop Header -->
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
                            <div class="dropdown-item-title">Threat Intelligence <span class="dropdown-badge live">LIVE</span></div>
                            <div class="dropdown-item-desc">Live IOCs from 9 trusted feeds, updated every 4 hours</div>
                        </div>
                    </a>
                    <a href="/cve-tracker.html" class="dropdown-item">
                        <div class="dropdown-item-icon cve"><i class="fas fa-bug"></i></div>
                        <div class="dropdown-item-content">
                            <div class="dropdown-item-title">CVE Tracker</div>
                            <div class="dropdown-item-desc">CISA KEV + NVD critical vulnerabilities with EPSS scores</div>
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
                    <!-- Add 'active' styles here if needed: style="background: rgba(0, 217, 255, 0.08);" -->
                    <a href="/guides/" class="dropdown-item">
                        <div class="dropdown-item-icon guides"><i class="fas fa-book"></i></div>
                        <div class="dropdown-item-content">
                            <div class="dropdown-item-title">Security Guides <span class="dropdown-badge popular">37+</span></div>
                            <div class="dropdown-item-desc">ISO 27001, NIST, SOC2, incident response & more</div>
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
        </nav>

        <button class="mobile-menu-btn" aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
        </button>
    </div>
</header>
```
