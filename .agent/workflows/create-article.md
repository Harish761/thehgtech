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
<div class="interaction-bar">
    <!-- Like/Share Buttons code -->
</div>
<script src="../interaction-bar.js"></script>
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
            <div class="nav-dropdown">
                <span class="nav-dropdown-trigger">Intelligence <span class="nav-live-badge">LIVE</span> <i class="fas fa-chevron-down dropdown-arrow"></i></span>
                <div class="nav-dropdown-panel">
                    <a href="/threat-intel.html" class="dropdown-item"><!-- Threat Intel --></a>
                    <a href="/cve-tracker.html" class="dropdown-item"><!-- CVE Tracker --></a>
                    <a href="/ransomware-tracker.html" class="dropdown-item"><!-- Ransomware --></a>
                </div>
            </div>
            <div class="nav-dropdown">
                <span class="nav-dropdown-trigger">Resources <i class="fas fa-chevron-down dropdown-arrow"></i></span>
                <div class="nav-dropdown-panel">
                    <a href="/guides/" class="dropdown-item"><!-- Guides --></a>
                    <a href="/comparisons/" class="dropdown-item"><!-- Comparisons --></a>
                    <a href="/articles.html" class="dropdown-item"><!-- Articles --></a>
                </div>
            </div>
            <div class="theme-toggle-wrapper">
                <button class="theme-toggle" id="themeToggle" aria-label="Toggle theme">
                    <div class="toggle-stars"><div class="star"></div><div class="star"></div><div class="star"></div><div class="star"></div></div>
                </button>
            </div>
        </nav>
        <button class="mobile-menu-btn" aria-label="Toggle menu"><span></span><span></span><span></span></button>
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
