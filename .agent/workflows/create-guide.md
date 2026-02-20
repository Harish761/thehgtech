---
description: How to create new Research-Grade Security Guides for TheHGTech
---

# Research-Grade Guide Creation Workflow (v2.0)

This workflow defines the standard for creating defensive "How-To" guides.
**Standard:** Must rival SANS/Red Canary in technical depth. No "Introductory" fluff.

## 1. Pre-Writing Phase (Mandatory)
1.  **Topic Alignment:**
    *   Must be "Advanced" or "Intermediate".
    *   *Check:* Does this exist on SANS? How can we be deeper?
2.  **Empirical Prep:**
    *   Gather benchmarks (e.g., "Detection rate: 94%").
    *   Prepare a "Lab Scenario" (e.g., Docker container or specific Malware Hash to analyze).

## 2. File Location & Naming
- **Path:** `/guides/[topic-hardening-year].html`
- **Naming:** Lowercase, hyphens.
  - ✅ `vscode-supply-chain-hardening-2026.html`

## 3. Image Requirements (Strict Brand Style)
Every guide MUST use a custom generated image following this **EXACT** prompt structure.

**Image Prompt Template:**
```text
Create a professional cybersecurity presentation-style illustration.

1. CHARACTER: Cartoon version of Harish G (Indian man, beard, sunglasses pushed up on head, confident expression) wearing black tech t-shirt. Standing to the LEFT, presenting to a whiteboard.
2. WHITEBOARD (Right Side):
   - Title: "[GUIDE TITLE]" in large CYAN (#00D9FF) bold text.
   - Subtitle: "ADVANCED HARDENING / RESEARCH" in RED (#FF3D3D).
   - Content: 3-4 bullet points with red arrows (→).
   - Diagram: A "Shield" or "Lock" architecture diagram.
3. ELEMENTS:
   - Topic Icons (e.g., VS Code Logo, Docker Whale).
   - "BEST PRACTICE" Green Stamp effect.
   - Background: Dark (#0a0a0a) with subtle circuit board patterns.
4. STYLE: Clean 2D Tech Vector, professional, Dark Mode.
```
- **Location:** `/images/guides/[filename].png`

## 4. Content Structure (The Research-Grade Standard)
**Target Length:** 4,000+ words (25-30 min read).

### Section 1: Threat Model
- **Adversary:** Who is attacking? (e.g., "Lazarus Group via npm").
- **Vectors:** How do they get in? (e.g., "Typosquatting").
- **Visuals:** ASCII Diagram of the attack surface.

### Section 2: Core Defense (The "Meat")
- **Step-by-Step Hardening:**
- **MANDATORY Code Block:**
  ```html
  <div class="technical-box">
      <h3><i class="fas fa-terminal"></i> Implementation</h3>
      <pre><code class="language-yaml"># Production Config</code></pre>
  </div>
  ```

### Section 3: "Lab" or "Red Team" Scenario
- **Exploit:** Show how to break it (safely).
  ```html
  <div class="exploit-box">
      <span class="exploit-label">OFFENSIVE: THE BYPASS</span>
      <p>Here is the Python script that bypasses the default filter...</p>
      <pre><code class="language-python"># Exploit PoC</code></pre>
  </div>
  ```

### Section 4: Maintenance & Auditing
- **YARA/Sigma Rules:** For detecting breaches of this component.
- **Audit Scripts:** "Run this script to check your compliance."

## 5. Technical Implementation (HTML/CSS)

### Required CSS Classes
- `.vuln-card` / `.exploit-box` (Red/Offensive)
- `.defense-box` / `.success-box` (Green/Defensive)
- `.technical-box` (Code/Configuration)
- `.timeline` (Process flows)

### Required Interaction Bar
Must be placed **AFTER** `content` and **BEFORE** `footer`.
```html
<div class="interaction-bar">
    <div class="like-section">
        <button class="like-btn" id="likeBtn" onclick="toggleLike()">
            <i class="far fa-heart"></i> <span id="likeText">Like this guide</span>
        </button>
    </div>
    <div class="action-buttons">
        <div class="share-buttons">
            <a href="#" onclick="shareTwitter(event)" class="share-btn" title="Share on Twitter"><i class="fab fa-twitter"></i></a>
            <a href="#" onclick="shareLinkedIn(event)" class="share-btn" title="Share on LinkedIn"><i class="fab fa-linkedin-in"></i></a>
            <button onclick="copyLink()" class="share-btn" title="Copy Link"><i class="fas fa-link"></i></button>
        </div>
        <div class="button-separator"></div>
        <button onclick="window.print()" class="print-btn" title="Print Guide"><i class="fas fa-print"></i></button>
    </div>
</div>
<script src="/interaction-bar.js?v=20260220"></script>
```

## 6. Required UI Components (Site Consistency)

### Required CSS Includes (in `<head>`)
```html
<!-- Style System - FULL SET REQUIRED -->
<link rel="stylesheet" href="/header.css">
<link rel="stylesheet" href="/header-dropdown.css?v=1">
<link rel="stylesheet" href="/print.css">
<link rel="stylesheet" href="/m-core.css?v=4.2">
<link rel="stylesheet" href="/m-layout.css?v=3.2">
<link rel="stylesheet" href="/m-components.css?v=3.0">
<link rel="stylesheet" href="/light-mode.css">
<link rel="stylesheet" href="/interaction-bar.css?v=20251207-0041">

<script src="/m-app.js?v=4.3" defer></script>
<script src="/interaction-bar.js" defer></script>
```

### Required Desktop Header
Must be placed **AFTER** `<nav class="m-bottom-nav">` and **BEFORE** `<div class="container">`.
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

### Required Back Link
Must be the **FIRST element** inside `<div class="container">`, before the `guide-header`.
```html
<div class="container">
    <a href="/guides/" class="back-link" style="display: inline-block; margin-bottom: 1.5rem; color: var(--accent-cyan); text-decoration: none;">
        <i class="fas fa-arrow-left"></i> Back to Guides
    </a>
    <!-- Then guide-header follows -->
```

**Reference:** See `/guides/ai-agent-security.html` for complete implementation.

## 7. Deployment Checklist
1.  **Create HTML File:** Populate with full content.
2.  **Generate Image:** Save to `/images/guides/`.
3.  **Update `guides.json`:**
    *   Insert at the **TOP** of the list.
    *   Set `"featured": true` for the first 2 weeks.
    *   *Format:* `{"title": "...", "date": "Feb 02, 2026", "url": "..."}`
4.  **Update `/guides/index.html`:** Add the HTML card to the grid (Newest First).
5.  **Update Sitemap:** Add URL to `sitemap.xml`.
6.  **Push:** `git add . && git commit -m "feat(guides): new guide..." && git push`
