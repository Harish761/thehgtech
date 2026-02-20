---
description: How to create new Research-Grade articles for TheHGTech
---

# Research-Grade Article Creation Workflow (v2.0)

This workflow defines the standard for creating high-fidelity Threat Intelligence articles. 
**Standard:** Articles must rival paid intelligence reports (e.g., Mandiant, Red Canary) in depth and utility.

## 1. Pre-Writing Phase (Mandatory)
Before writing a single word, execute this checklist:

1.  **Breaking News Check:**
    *   Search sources (CISA, BleepingComputer, Twitter/X InfoSec) for updates in the last 24 hours.
    *   *Goal:* Avoid stale data. If a patch was bypassed 2 hours ago, COVER THAT.
2.  **Artifact Hunt:**
    *   Locate at least one **Technical Artifact**: YARA rule, Sigma rule, exploited file hash, or source code snippet.
    *   *Rule:* If no public artifact exists, you must ENGINEER a plausible detection rule based on the TTPs.
3.  **Forecast Linkage:**
    *   Check `/articles.html`. Did we predict this trend? 
    *   *Action:* Link back to previous articles ("As forecasted in our Jan report...").

## 2. File Location & Naming
- **Path:** `/articles/[topic-cve-year].html`
- **Format:** Lowercase, hyphens, include year.
  - ✅ `glassworm-vscode-supply-chain-2026.html`
  - ❌ `New_Attack.html`

## 3. Image Requirements (Strict Brand Style)
Every article MUST use a custom generated image following this **EXACT** prompt structure.

**Image Prompt Template:**
```text
Create a professional cybersecurity presentation-style illustration.

1. CHARACTER: Cartoon version of Harish G (Indian man, beard, sunglasses pushed up on head, confident expression) wearing black tech t-shirt. Standing to the LEFT, presenting to a whiteboard.
2. WHITEBOARD (Right Side):
   - Title: "[ARTICLE TITLE]" in large CYAN (#00D9FF) bold text.
   - Subtitle: "CVSS [SCORE] / [SEVERITY]" in RED (#FF3D3D).
   - Content: 3-4 bullet points with red arrows (→).
   - Diagram: Simple attack flow at bottom.
3. ELEMENTS:
   - Red Warning Triangle (⚠).
   - "CRITICAL THREAT" red stamp effect.
   - Background: Dark (#0a0a0a) with subtle circuit board patterns and neon accents.
4. STYLE: Clean 2D Tech Vector, professional, Dark Mode.
```
- **Location:** `/images/articles/[filename].png`
- **Size:** 1200x630 (Open Graph standard)

## 4. Content Structure (The Research-Grade Standard)
**Target Length:** 3,500 - 4,500 words (18-20 min read).

### Section 1: Executive Summary
- **BLUF (Bottom Line Up Front):** Who, What, When, Severity.
- **Confidence Level:** Confirmed / Probable / Unverified.
- **TLP:** CLEAR / GREEN.

### Section 2: Technical Analysis (The "Meat")
- **Deep Dive:** Explain the *mechanic* (e.g., "The deserialization flaw in `Java.util`...").
- **Visuals:** Use ASCII diagrams for attack chains.
- **MANDATORY Code Block:**
  ```html
  <div class="technical-box">
      <h3><i class="fas fa-code"></i> Exploit Primitive</h3>
      <pre><code class="language-python"># Show the code!</code></pre>
  </div>
  ```

### Section 3: Forensic Artifacts
- **YARA/Sigma Rules:** Must be copy-paste ready.
- **Log Patterns:** "Grep for this string..."

### Section 4: Impact & Mitigations
- **Impact:** Regulatory (GDPR), Financial, Operational.
- **Action Plan:** Step-by-step remediation.
  ```html
  <div class="success-box">
      <strong><i class="fas fa-shield-alt"></i> IMMEDIATE ACTION:</strong>
      <ul><li>Block IP 1.2.3.4</li><li>Patch to v10.0</li></ul>
  </div>
  ```

## 5. Technical Implementation (HTML/CSS)

### Required Head Elements (SEO)
```html
<title>Deep Dive: [Title] | TheHGTech</title>
<meta name="description" content="Technical analysis of [Threat], including YARA rules and forensics. Research-grade intel.">
<link rel="canonical" href="https://thehgtech.com/articles/[filename].html">
<!-- Open Graph & Twitter Cards Required -->
<!-- Schema.org: NewsArticle + BreadcrumbList -->
```

### CSS Variables (Brand Consistency)
```css
:root {
    --bg-primary: #0a0a0a;
    --accent-cyan: #00D9FF;
    --accent-red: #FF3D3D;
    --code-bg: #111;
}
```

### Required Interaction Bar
Must be placed **AFTER** `</article>` and **BEFORE** `<footer>`.
```html
<div class="article-footer" style="margin-top: 3rem; padding-top: 2rem; border-top: 1px solid var(--border);">
    <p><strong>Author:</strong> Harish G</p>
    <p><strong>Published:</strong> [DATE]</p>
    <p><strong>Last Updated:</strong> [DATE]</p>
</div>
</article>

<div class="interaction-bar">
    <div class="like-section">
        <button class="like-btn" id="likeBtn" onclick="toggleLike()">
            <i class="far fa-heart"></i> <span id="likeText">Like this article</span>
        </button>
    </div>
    <div class="action-buttons">
        <div class="share-buttons">
            <a href="#" onclick="shareTwitter(event)" class="share-btn" title="Share on Twitter"><i class="fab fa-twitter"></i></a>
            <a href="#" onclick="shareLinkedIn(event)" class="share-btn" title="Share on LinkedIn"><i class="fab fa-linkedin-in"></i></a>
            <button onclick="copyLink()" class="share-btn" title="Copy Link"><i class="fas fa-link"></i></button>
        </div>
        <div class="button-separator"></div>
        <button onclick="window.print()" class="print-btn" title="Print Article"><i class="fas fa-print"></i></button>
    </div>
</div>

<footer>
    <p style="text-align: center; color: var(--text-muted); padding: 2rem;">&copy; 2026 TheHGTech. All rights reserved.</p>
</footer>

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
Must be the **FIRST element** inside `<div class="container">`, before the article header.
```html
<div class="container">
    <a href="/articles.html" class="back-link" style="display: inline-block; margin-bottom: 1.5rem; color: var(--accent-cyan); text-decoration: none;">
        <i class="fas fa-arrow-left"></i> Back to Articles
    </a>
    <!-- Then article header follows -->
```

**Reference:** See `/guides/ai-agent-security.html` for complete desktop header implementation.

## 7. Deployment Checklist
1.  **Create HTML File:** Populate with full content.
2.  **Generate Image:** Save to `/images/articles/`.
3.  **Update `articles.json`:**
    *   **CRITICAL:** Insert new entry at the **VERY TOP** (Index 0) of the JSON array.
    *   This drives the Homepage "Latest News" feed.
4.  **Update Sitemap:** Add URL to `sitemap.xml`.
5.  **Post-Audit:** Check against Grok's critique (Is it deep? Does it have code?).
6.  **Push:** `git add . && git commit -m "feat(content): new article..." && git push`

## 8. Quality Control Questions (Self-Audit)
- **Is this generic?** (If yes, rewritten effectively).
- **Would a SOS Analyst use this?** (Must have YARA/IOCs).
- **Is the image correct?** (Harish cartoon visible).
