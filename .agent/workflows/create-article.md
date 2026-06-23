---
description: How to create new Research-Grade articles for TheHGTech
---

# Research-Grade Article Creation Workflow (v2.0)

This workflow defines the standard for creating high-fidelity Threat Intelligence articles. 
**Standard:** Articles must rival paid intelligence reports (e.g., Mandiant, Red Canary) in depth and utility.

## 0. SOURCE VERIFICATION GATE (MANDATORY — DO NOT SKIP)

> **LESSON LEARNED:** In Feb 2026, we published an article about Anthropic's security agent with a fabricated product name ("Guardian Core"), invented $50B loss figures, and speculative capabilities presented as fact. It was flagged on Reddit as misinformation. This gate exists to prevent that from EVER happening again.

**This step is a HARD GATE. No writing begins until ALL items below are completed.**

### 0.1 Primary Source Verification
- [ ] **Locate the official announcement** (vendor blog post, press release, SEC filing). Use `search_web` or `read_url_content` to fetch it.
- [ ] **Read the full primary source** and extract: exact product name, stated capabilities, launch status (GA / preview / beta), and any quoted figures.
- [ ] **Save source URLs** — these will be cited in the article.

### 0.2 Market Data Verification (if covering financial impact)
- [ ] **Use real stock data** — search Bloomberg, Yahoo Finance, or Google Finance for actual percentage drops.
- [ ] **Calculate estimated losses yourself** from market cap × % drop. Do NOT invent round numbers.
- [ ] **Name only companies with confirmed drops** — do not speculatively add companies to the list.

### 0.3 Anti-Hallucination Checklist
Before writing, explicitly answer these questions:
- [ ] **Product name:** What is the EXACT official name? (Not what I think it might be called)
- [ ] **Capabilities:** What does the vendor SAY it does? (Not what I extrapolate it could do)
- [ ] **Scope:** Is it GA, limited preview, research-only? (Do NOT describe preview features as production-ready)
- [ ] **Numbers:** Are ALL figures sourced from a specific report/filing? (If not, clearly label as "estimated")

### 0.4 Labeling Rules
- **Verified fact** → Write normally
- **Reasonable analysis/opinion** → Prefix with "Our analysis suggests..." or "This likely indicates..."
- **Speculation** → Use a clearly labeled callout box: `⚠️ Editorial Analysis` 
- **NEVER** present speculation as confirmed fact. NEVER invent product names, features, or data points.

---

## 1. Pre-Writing Phase (Mandatory)
Before writing a single word, execute this checklist:

1.  **Breaking News Check:**
    *   Search sources (CISA, BleepingComputer, Twitter/X InfoSec) for updates in the last 24 hours.
    *   *Goal:* Avoid stale data. If a patch was bypassed 2 hours ago, COVER THAT.
2.  **Artifact Hunt:**
    *   Locate at least one **Technical Artifact**: YARA rule, Sigma rule, exploited file hash, or source code snippet.
    *   *Rule:* If no public artifact exists, you must ENGINEER a plausible detection rule based on the TTPs. **Label it clearly as "Example Detection Rule" — not as the vendor's actual output.**
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
Create a professional, premium cinematic storyboard style editorial illustration for a cybersecurity magazine.

1. STYLE: High-end 2D concept art, graphic novel aesthetics, dramatic rim lighting, dark mode with neon cyan (#00D9FF) and crimson (#FF3D3D) accents. Highly detailed.
2. CHARACTER: Comic-style version of Harish G (Indian man, beard, sunglasses pushed up on head, confident expression, black tech t-shirt) placed prominently in the foreground or an active pose, deeply analyzing or engaging with the threat.
3. BACKGROUND: A dynamic, dramatic environment fitting the article's theme (e.g., shattered glass, glowing holographic network grids, dark server rooms, zero-trust architecture visuals). The background should tell a cyber story.
4. TEXT: The words "[ARTICLE TITLE OR CORE CONCEPT]" integrated beautifully and seamlessly into the environment (e.g., as a cinematic title card, glowing hologram, or neon sign). Do NOT use random symbols like currency signs unless strictly relevant. Ensure exact spelling.
```
- **Location:** `/images/articles/[filename].png`
- **Size:** 1200x630 (Open Graph standard)

## 4. Content Structure (The Research-Grade Standard)
**Target Length:** 3,500 - 4,500 words (18-20 min read).

### Section 1: Executive Summary
- **BLUF (Bottom Line Up Front):** Who, What, When, Severity.
- **Confidence Level:** Confirmed / Probable / Unverified.
- **TLP:** CLEAR / GREEN.
- **Sources disclaimer** (at bottom of summary): _"This analysis is based on [source names] as of [date]; details may evolve."_

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

<script src="/interaction-bar.min.js?v=20260623"></script>
```

> [!IMPORTANT]
> **COMMENT SECTION IS MANDATORY.** The `<div class="interaction-bar">` block and `<script src="/interaction-bar.min.js">` tag MUST be present on every article. The `interaction-bar.min.js` script automatically injects the GraphComment comment system immediately below the interaction bar. **If the interaction bar is missing, the comment section will not appear.** Never omit it.

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

<!-- Google Fonts and Font Awesome -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<!-- ========== GLOBAL THEME SCRIPT ========== -->
<script>
    (function() {
        var savedTheme = localStorage.getItem("theme");
        if (savedTheme === "light" || (!savedTheme && window.matchMedia("(prefers-color-scheme: light)").matches)) {
            document.documentElement.setAttribute("data-theme", "light");
            document.body.classList.add("light-mode");
        }
    })();
</script>

<style>
    :root {
        --bg-primary: #0a0a0a;
        --bg-secondary: #111111;
        --text-primary: #ffffff;
        --text-secondary: #a0a0a0;
        --accent-cyan: #00D9FF;
        --accent-red: #FF3D3D;
        --border: rgba(255, 255, 255, 0.1);
        --code-bg: #111;
    }

    body {
        font-family: 'Inter', sans-serif;
        background: var(--bg-primary);
        color: var(--text-primary);
        line-height: 1.7;
        font-size: 18px;
    }

    .article-container {
        max-width: 800px;
        margin: 80px auto 0;
        padding: 2rem;
    }

    .back-link {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        color: var(--accent-cyan);
        text-decoration: none;
        margin-bottom: 2rem;
        font-size: 0.9rem;
        transition: color 0.3s;
    }

    .back-link:hover {
        color: var(--text-primary);
    }

    .article-header {
        margin-bottom: 2rem;
        padding-bottom: 2rem;
        border-bottom: 1px solid var(--border);
        text-align: left;
    }

    h1 {
        font-size: 2.2rem;
        line-height: 1.2;
        margin-bottom: 1rem;
        background: linear-gradient(135deg, #fff 0%, var(--accent-cyan) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    .article-meta {
        display: flex;
        flex-wrap: wrap;
        gap: 1.5rem;
        color: var(--text-secondary);
        font-size: 0.9rem;
        margin-bottom: 1rem;
    }

    .article-content h2 {
        color: var(--accent-cyan);
        margin: 2.5rem 0 1rem;
        font-size: 1.6rem;
        border-bottom: 1px solid var(--border);
        padding-bottom: 0.5rem;
    }

    .article-content h3 {
        color: var(--text-primary);
        margin: 1.5rem 0 1rem;
        font-size: 1.3rem;
    }

    .article-content p {
        margin-bottom: 1.5rem;
        font-size: 1.15rem;
        color: var(--text-secondary);
    }

    .featured-image {
        width: 100%;
        border-radius: 12px;
        margin: 2rem 0;
        border: 1px solid var(--border);
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
    }
    
    .article-image {
        width: 100%;
        border-radius: 8px;
        margin: 1.5rem 0;
        border: 1px solid var(--border);
    }

    .technical-box {
        background: rgba(0, 217, 255, 0.03);
        border: 1px solid var(--border);
        border-left: 5px solid var(--accent-cyan);
        padding: 1.5rem 2rem;
        border-radius: 8px;
        margin: 2.5rem 0;
    }

    .technical-box > *:first-child,
    .warning-box > *:first-child {
        margin-top: 0;
    }

    .warning-box {
        background: rgba(255, 61, 61, 0.05);
        border: 1px solid rgba(255, 61, 61, 0.2);
        border-left: 5px solid var(--accent-red);
        padding: 1.5rem 2rem;
        border-radius: 8px;
        margin: 2.5rem 0;
    }
    
    .success-box {
        background: rgba(16, 185, 129, 0.05);
        border: 1px solid rgba(16, 185, 129, 0.2);
        border-left: 5px solid #10B981;
        padding: 1.5rem 2rem;
        border-radius: 8px;
        margin: 2.5rem 0;
    }

    pre {
        background: #000;
        border: 1px solid var(--border);
        padding: 1.5rem;
        border-radius: 8px;
        margin: 1.5rem 0;
        overflow-x: auto;
    }

    code {
        font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
        font-size: 0.95rem;
        color: #fff;
        line-height: 1.5;
    }

    .article-content p code, .article-content li code {
        background: rgba(255, 255, 255, 0.1);
        padding: 0.2rem 0.4rem;
        border-radius: 4px;
        color: var(--accent-cyan);
    }
</style>

<script src="/m-app.js?v=4.3" defer></script>
<script src="/interaction-bar.js" defer></script>

<!-- ========== ANALYTICS (MANDATORY on every page) ========== -->
<!-- GA4 -->
<script>
    window.addEventListener('load', function () {
        setTimeout(function () {
            var gtmScript = document.createElement('script');
            gtmScript.async = true;
            gtmScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-XL6RCXZJE2';
            document.head.appendChild(gtmScript);
            gtmScript.onload = function () {
                window.dataLayer = window.dataLayer || [];
                function gtag() { dataLayer.push(arguments); }
                window.gtag = gtag;
                gtag('js', new Date());
                gtag('config', 'G-XL6RCXZJE2');
            };
        }, 100);
    });
</script>
<!-- Fullres -->
<script>
    window.addEventListener('load', function () {
        var fullres = document.createElement('script');
        fullres.async = true;
        fullres.src = 'https://t.fullres.net/thehgtech.js?' + (new Date() - new Date() % 43200000);
        document.head.appendChild(fullres);
    });
</script>
```

### Required Desktop Header
Must be placed **AFTER** `<nav class="m-bottom-nav">` and **BEFORE** `<main class="article-container">`.
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
Must be the **FIRST element** inside `<main class="article-container">`, before the article header.
```html
<main class="article-container">
    <a href="/articles.html" class="back-link" style="display: inline-block; margin-bottom: 1.5rem; color: var(--accent-cyan); text-decoration: none;">
        <i class="fas fa-arrow-left"></i> Back to Articles
    </a>
    <!-- Then article header follows -->
```

**Reference:** See `/guides/ai-agent-security.html` for complete desktop header implementation.

## 7. Generative Engine Optimization (GEO) Requirements
To ensure the article ranks well in AI search engines (ChatGPT, Perplexity, Gemini, Google AI Overviews), every new article MUST include:

1. **Key Takeaways (BLUF)**
   - Placed immediately after the header/hero image.
   - Use an unordered list `<ul>` inside an `.alert-box` or `.info-box`.
2. **Frequently Asked Questions (FAQ)**
   - Placed at the bottom of the article, before the footer/interaction bar.
   - Must be an `<h2>` section titled "Frequently Asked Questions (FAQ)".
   - Include 3-4 conversational Q&A pairs relevant to the topic.
3. **Structured Data (Schema.org)**
   - In the `<head>`, include `<script type="application/ld+json">` for `FAQPage` containing the exact Q&A pairs from the FAQ section.
4. **Semantic HTML Tables**
   - Whenever comparing data, listing IOCs, or detailing timelines, use standard HTML `<table>` elements. AI engines highly prioritize extracting data from tables.

## 8. Deployment Checklist
1.  **Create HTML File:** Populate with full content.
2.  **Generate Image:** Save to `/images/articles/`.
3.  **Update `ioc-data/articles.json`:**
    *   **CRITICAL:** Insert new entry at the **VERY TOP** (Index 0) of the JSON array.
    *   This drives the Homepage "Latest News" feed, the Articles List, and the Notification Center.
4.  **Update Sitemap:** Add URL to `sitemap.xml`.
5.  **Fact-Check Review:** Re-read the article and verify every claim against sources from Step 0.
6.  **Push:** `git add . && git commit -m "feat(content): new article..." && git push`

## 8. Quality Control Questions (Self-Audit)

### Accuracy (HIGHEST PRIORITY)
- [ ] **Is every product/tool name exactly correct?** (Verified against official source)
- [ ] **Are all numbers (dollar figures, percentages, CVE IDs) sourced?** (Not estimated or rounded for effect)
- [ ] **Is the scope accurately described?** (Preview vs GA, code scanning vs SOC automation, etc.)
- [ ] **Is speculation clearly labeled as such?** (No opinions dressed up as facts)
- [ ] **Would this survive a Reddit r/cybersecurity fact-check?** (If not, fix it before publishing)

### Quality
- **Is this generic?** (If yes, rewrite with specific technical depth).
- **Would a SOC Analyst use this?** (Must have actionable IOCs/rules).
- **Is the image correct?** (Harish cartoon visible, text spelled correctly).

### Sources
- [ ] **Are primary sources linked or cited in the article?**
- [ ] **Is the disclaimer present in the Executive Summary?**

### Pre-Publish UI Verification (MANDATORY)
Before pushing changes to GitHub, you MUST locally verify or double-check the code for the following UI elements:
- [ ] **Interaction Bar Presence:** Does the `<div class="interaction-bar">...</div>` block exist exactly as specified (after `</article>` and before `<footer>`)?
- [ ] **Script Tag Presence:** Is the `<script src="/interaction-bar.min.js?v=20260623"></script>` tag present at the bottom of the page?
- [ ] **Cache Busting:** Does the script tag include the `?v=...` query parameter to avoid stale caches from breaking the comment/newsletter injection?
- [ ] **No Local Syntax Errors:** If you modified `interaction-bar.js`, did you re-minify it to `interaction-bar.min.js` and verify it has no syntax errors (`node -c interaction-bar.min.js`)?
