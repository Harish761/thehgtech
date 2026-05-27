---
description: How to create new Research-Grade Security Guides for TheHGTech
---

# Research-Grade Guide Creation Workflow (v3.0)

This workflow defines the **complete, non-negotiable standard** for every security guide.
Must rival SANS/Red Canary in technical depth. No introductory fluff. Every rule here applies **regardless of the AI model used**.

---

## RULE 0 — ABSOLUTE PROHIBITIONS

These apply to every guide, every time, without exception:

- **NO EMOJIS.** Never use Unicode emoji characters (✅ 🔒 🔍 ⚡ 🏗️ 🔑 🕵️ etc.) anywhere in the HTML. Use Font Awesome icons (`<i class="fas fa-...">`) instead. Run a post-write emoji scan before committing.
- **NO PLACEHOLDER TEXT.** Every section must have real, researched technical content.
- **NO GENERIC ICONS.** Skill cards, callout boxes, and list items use Font Awesome icons styled inline — never emoji.
- **NO INLINE STYLE OVERRIDES** that contradict the design system (colour, font, spacing tokens must come from CSS variables).

---

## 1. Pre-Writing Phase (Mandatory)

1. **Topic Alignment:**
   - Must target "Intermediate" or "Advanced" security practitioners.
   - Ask: Does SANS cover this? How do we go deeper?

2. **Empirical Prep:**
   - Gather verifiable benchmarks, CVE numbers, real incident references.
   - Only include data whose source is publicly verifiable — no unverifiable claims.
   - Do not include data that creates legal liability.

3. **Tone — Balanced and Authoritative:**
   - Guides must present both advantages and risks of any technology covered.
   - Avoid one-sided criticism or advocacy. Acknowledge what the technology gets right before discussing risks.
   - Target audience: Security Engineers who need actionable intelligence, not opinion.

---

## 2. File Location & Naming

- **Path:** `/guides/[topic-name-year].html`
- **Naming:** All lowercase, hyphens only. Example: `active-directory-vs-entra-id-security-2026.html`
- **Reference Template:** `/guides/active-directory-vs-entra-id-security-2026.html` — this is the canonical UI/UX reference. Match it exactly.

---

## 3. Image Requirements

Every guide MUST have a custom generated hero image and supporting images where relevant.

**Image Prompt Template:**
```
Create a professional, premium cinematic storyboard-style editorial illustration for a cybersecurity magazine.

1. STYLE: High-end 2D concept art, graphic novel aesthetics, dramatic rim lighting, dark mode with neon cyan (#00D9FF) and crimson (#FF3D3D) accents. Highly detailed. NO cheap clipart or generic stock art.
2. CHARACTER (optional): Comic-style version of Harish G (Indian man, beard, sunglasses pushed up on head, confident expression, black tech t-shirt) placed prominently, deeply engaged with the threat or technology depicted.
3. BACKGROUND: A dynamic, dramatic environment fitting the guide's technical theme (architectural diagrams floating in mid-air, server rooms, terminal screens, abstract data flows). The background must tell a cybersecurity story.
4. TEXT: Key concept words integrated as a cinematic title card, glowing hologram, or holographic display. Exact spelling required.
```

- **Save location:** `/images/guides/[descriptive-filename].png`
- Generate **multiple images** for long guides (hero + section-specific context images).
- Image `alt` text must be a full descriptive sentence, not a label.

---

## 4. Full HTML Page Structure

Use this **exact** structure. Do not deviate.

### 4.1 `<head>` — CSS, Fonts, Analytics

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[Guide Title] | TheHGTech</title>
    <meta name="description" content="[160-char SEO description]">
    <meta name="keywords" content="[comma, separated, keywords]">
    <meta property="og:title" content="[Guide Title] | TheHGTech">
    <meta property="og:description" content="[OG description]">
    <meta property="og:type" content="article">
    <meta name="twitter:card" content="summary_large_image">

    <!-- Font Awesome (icons — DO NOT use emoji) -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">

    <!-- Style System — ALL REQUIRED -->
    <link rel="stylesheet" href="/header.css">
    <link rel="stylesheet" href="/header-dropdown.css?v=1">
    <link rel="stylesheet" href="/print.css">
    <link rel="stylesheet" href="/m-core.css?v=4.2">
    <link rel="stylesheet" href="/m-layout.css?v=3.2">
    <link rel="stylesheet" href="/m-components.css?v=3.0">
    <link rel="stylesheet" href="/light-mode.css">
    <link rel="stylesheet" href="/interaction-bar.css?v=20251207-0041">

    <script src="/m-app.js?v=4.3" defer></script>

    <!-- Guide-specific styles go in a <style> block here (see Section 4.2) -->

    <!-- Analytics — MANDATORY -->
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
    <script>
        window.addEventListener('load', function () {
            var fullres = document.createElement('script');
            fullres.async = true;
            fullres.src = 'https://t.fullres.net/thehgtech.js?' + (new Date() - new Date() % 43200000);
            document.head.appendChild(fullres);
        });
    </script>
</head>
```

### 4.2 Guide-Specific `<style>` Block

Every guide defines its own `<style>` block inside `<head>`. The following CSS must always be included — copy from the reference template and extend as needed:

**Required CSS Variables & Base:**
```css
:root {
    --bg-primary: #0a0a0f;
    --bg-card: #111118;
    --text-primary: #e8eaf0;
    --text-secondary: #a0a8b8;
    --text-muted: #6b7280;
    --accent-cyan: #00D9FF;
    --accent-red: #FF3D3D;
    --accent-green: #10B981;
    --border: rgba(255, 255, 255, 0.08);
}
```

**Required Components (must all be present):**
- `h1` — gradient text (`linear-gradient(135deg, #00D9FF, #a78bfa)`)
- `h2` — cyan left border (`border-top: 2px solid var(--accent-cyan)`)
- `.info-box`, `.warning-box`, `.success-box`, `.technical-box`, `.exploit-box`, `.defense-box`, `.opinion-box`
- `.comparison-table-wrapper` + `.comparison-table` + `th.ad-col` / `th.entra-col`
- `.badge-ad`, `.badge-entra`, `.badge-both`, `.badge-risk`, `.badge-tie` — inline status badges
- `.score-grid` + `.score-card.ad-card` / `.score-card.entra-card` — two-column scored cards
- `.toc` — table of contents block
- `.tlp-badge`, `.confidence-badge` — metadata badges for the BLUF box
- `.skill-grid` + `.skill-card` — skill card grid (icons must be Font Awesome `<i>` tags, NOT emoji)
- `.phase-card` — phased playbook steps with security gate checklists
- `.cta-section` + `.cta-btn-primary` / `.cta-btn-secondary`
- `code`, `pre` — styled code blocks
- `@media (max-width: 768px)` — full responsive breakpoint

### 4.3 Mobile Header

```html
<!-- Smart Mobile Header -->
<header class="m-header m-only">
    <div class="m-header__logo">
        <a href="/" style="display: flex; align-items: center; gap: 0.75rem; text-decoration: none;">
            <img src="/logo-dark.png" alt="TheHGTech" class="m-logo-img logo-dark" style="height: 28px; width: auto; margin: 0;">
            <img src="/logo-light.png" alt="TheHGTech" class="m-logo-img logo-light" style="height: 28px; width: auto; margin: 0; display: none;">
            <span style="font-size: 1.2rem; font-weight: 700; background: linear-gradient(135deg, #FF3D3D, #ff8c8c); -webkit-background-clip: text; color: #ffffff; -webkit-text-fill-color: transparent; background-clip: text;">TheHGTech</span>
        </a>
    </div>
    <div class="m-header__actions">
        <button class="m-header__btn" id="m-theme-toggle-top" aria-label="Toggle Theme">
            <i class="fas fa-moon"></i>
        </button>
        <button class="m-header__btn" data-action="command-palette" aria-label="Search">
            <i class="fas fa-search"></i>
        </button>
        <button class="m-header__btn" id="m-hamburger-btn" aria-label="Menu">
            <i class="fas fa-bars"></i>
        </button>
    </div>
</header>

<!-- Fullscreen Mobile Menu -->
<div class="m-menu-overlay m-only" id="m-menu-overlay">
    <div class="m-menu-header">
        <span style="font-size: 1.2rem; font-weight: 700; color: var(--text-primary);">Navigation</span>
        <button class="m-menu-close" id="m-menu-close-btn" aria-label="Close Menu"><i class="fas fa-times"></i></button>
    </div>
    <div class="m-menu-content">
        <div class="m-menu-section">
            <div class="m-menu-title">Intelligence</div>
            <a href="/threat-intel.html" class="m-menu-link"><i class="fas fa-shield-alt"></i> Threat Intel</a>
            <a href="/cve-tracker.html" class="m-menu-link"><i class="fas fa-bug"></i> CVE Tracker</a>
            <a href="/ransomware-tracker.html" class="m-menu-link"><i class="fas fa-skull-crossbones"></i> Ransomware</a>
        </div>
        <div class="m-menu-section">
            <div class="m-menu-title">Resources</div>
            <a href="/guides/" class="m-menu-link"><i class="fas fa-book"></i> Security Guides</a>
            <a href="/articles.html" class="m-menu-link"><i class="fas fa-newspaper"></i> Articles &amp; News</a>
            <a href="/comparisons/" class="m-menu-link"><i class="fas fa-balance-scale"></i> Tool Comparisons</a>
        </div>
        <div class="m-menu-section">
            <div class="m-menu-title">Settings</div>
            <button class="m-menu-theme-btn" onclick="toggleTheme(); if(typeof updateMenuThemeLabel === 'function') updateMenuThemeLabel();">
                <i class="fas fa-moon" id="m-menu-theme-icon"></i> <span id="m-menu-theme-text">Toggle Dark Mode</span>
            </button>
        </div>
    </div>
</div>
```

### 4.4 Desktop Header

```html
<header class="header" role="banner">
    <div class="header-content">
        <div class="logo">
            <a href="/index.html" style="text-decoration: none; display: flex; align-items: center; gap: 0.75rem; border-bottom: none;">
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
                    <a href="/guides/" class="dropdown-item" style="background: rgba(0, 217, 255, 0.08);">
                        <div class="dropdown-item-icon guides"><i class="fas fa-book"></i></div>
                        <div class="dropdown-item-content">
                            <div class="dropdown-item-title" style="color: var(--accent-cyan);">Security Guides <span class="dropdown-badge popular">60+</span></div>
                            <div class="dropdown-item-desc">ISO 27001, NIST, SOC2, incident response &amp; more</div>
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

            <button class="desktop-search-btn" data-action="command-palette" aria-label="Search" title="Search (Cmd+K)" style="margin-left: 20px; display: inline-flex; align-items: center; justify-content: center; width: 36px; height: 36px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 50%; color: var(--text-primary); cursor: pointer; transition: all 0.3s ease;"><i class="fas fa-search"></i></button>
            <button class="m-theme-toggle" id="themeToggle" onclick="toggleTheme()" aria-label="Toggle Theme" style="margin-left: 20px; display: inline-flex; position: relative; width: 56px; height: 28px; background: linear-gradient(135deg, #1a1a2e, #16213e); border: 1.5px solid rgba(255,255,255,0.15); border-radius: 50px; cursor: pointer; transform: scale(0.9);">
                <span class="m-theme-toggle__thumb" style="position: absolute; top: 2px; left: 2px; width: 22px; height: 22px; background: linear-gradient(135deg, #c0c0c0, #e8e8e8); border-radius: 50%; box-shadow: 0 2px 8px rgba(0,0,0,0.3); transition: all 0.3s ease;"></span>
            </button>
        </nav>
        <button class="mobile-menu-btn" aria-label="Toggle menu">
            <span></span><span></span><span></span>
        </button>
    </div>
</header>
```

### 4.5 Container, Guide Header & BLUF

```html
<div class="container">
    <!-- Back Link — ALWAYS FIRST inside container -->
    <a href="/guides/" class="back-link" style="display: inline-block; margin-bottom: 1.5rem; color: var(--accent-cyan); text-decoration: none; border-bottom: none;">
        <i class="fas fa-arrow-left"></i> Back to Guides
    </a>

    <div class="guide-header">
        <span class="guide-badge"><i class="fas fa-[icon]"></i> [Category Name]</span>
        <h1>[Full Guide Title]</h1>
        <div style="font-size: 0.9rem; color: var(--accent-cyan); margin-bottom: 1.5rem;">
            <i class="fas fa-calendar-check"></i> <strong>Last updated:</strong> [Month Year]
        </div>
        <p style="color: var(--text-muted); font-size: 1.1rem;">[One-paragraph summary — what the reader will learn and why it matters to them as a security engineer.]</p>
        <div style="margin-top: 1rem; color: var(--text-muted); display: flex; flex-wrap: wrap; gap: 1.5rem;">
            <span><i class="fas fa-book-open"></i> [N] min read</span>
            <span>|</span>
            <span><i class="fas fa-crosshairs"></i> [Level]</span>
            <span>|</span>
            <span><i class="far fa-calendar-alt"></i> [Month Year]</span>
            <span>|</span>
            <span><i class="fas fa-user"></i> Harish G</span>
        </div>
    </div>

    <!-- Hero Image -->
    <img src="/images/guides/[filename].png"
         alt="[Full descriptive sentence about what the image shows]"
         class="featured-image"
         style="width: 100%; object-fit: cover; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 10px 30px rgba(0,217,255,0.2);"
         loading="eager">

    <!-- BLUF Box — ALWAYS present -->
    <div class="info-box">
        <strong><i class="fas fa-shield-alt"></i> BLUF (Bottom Line Up Front):</strong>
        [2–3 sentence summary of the guide's core thesis — balanced, authoritative, actionable. Lead with what the reader gains.]
        <br><br>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
            <span class="confidence-badge"><i class="fas fa-check-circle"></i> Research-Grade</span>
            <span class="tlp-badge tlp-clear"><i class="fas fa-globe"></i> TLP: CLEAR</span>
            <span style="display: inline-flex; align-items: center; gap: 0.4rem; padding: 0.3rem 0.8rem; background: rgba(168,85,247,0.15); color: #a855f7; border: 1px solid rgba(168,85,247,0.3); border-radius: 4px; font-size: 0.75rem; font-weight: 700; letter-spacing: 1px; text-transform: uppercase;"><i class="fas fa-user-shield"></i> Security Engineer Guide</span>
        </div>
    </div>

    <!-- Table of Contents -->
    <div class="toc">
        <h3><i class="fas fa-list-ul"></i> Table of Contents</h3>
        <ul>
            <li><a href="#section-1">1. [Section Name]</a></li>
            <!-- ... -->
        </ul>
    </div>
```

---

## 5. Content Standards

### 5.1 Target Length
- Minimum **4,000 words** (25–30 min read). Deep-dive guides should reach 6,000–8,000 words.
- Every section must add technical value. Remove padding, not depth.

### 5.2 Content Box Usage

| Box Class | When to Use |
|---|---|
| `info-box` | Key concepts, BLUF, important context |
| `warning-box` | Risks, caveats, things that can go wrong |
| `success-box` | Security wins, positive outcomes, what works |
| `technical-box` | Config snippets, architecture detail, protocol specs |
| `exploit-box` | Attack vectors, misconfigurations, how attackers exploit |
| `defense-box` | Nested inside exploit-box — the mitigation for that specific exploit |
| `opinion-box` | Analysis, editorial perspective, "uncomfortable truths" |

### 5.3 Comparison Tables

All tables use `.comparison-table-wrapper` + `.comparison-table`. Rules:
- Column headers use `.ad-col` (blue) / `.entra-col` (purple) / neutral for general tables.
- Feature column uses `class="feature"` on `<td>` (bold white).
- Verdict/status columns use inline badge spans (see 5.4).
- Tables must have a minimum of **8–10 rows** to justify their presence.
- Add a `<th>` risk/verdict column where applicable.

### 5.4 Badge System — Use Instead of Emojis

```html
<!-- Risk level -->
<span class="badge-risk">Critical</span>
<span class="badge-risk">High</span>

<!-- Advantage badges -->
<span class="badge-ad">AD Advantage</span>
<span class="badge-entra">Entra Advantage</span>
<span class="badge-both">Both</span>
<span class="badge-tie">Different Surface</span>

<!-- Inline FA icons for list items — never emoji -->
<i class="fas fa-check-circle" style="color: #10B981; margin-right: 6px;"></i>
<i class="fas fa-shield-alt" style="color: var(--accent-cyan); margin-right: 6px;"></i>
<i class="fas fa-filter" style="color: #a78bfa; margin-right: 6px;"></i>
<i class="fas fa-exclamation-triangle" style="color: var(--accent-red); margin-right: 6px;"></i>
```

### 5.5 Skill Cards

Skill cards use `.skill-grid` + `.skill-card`. The `.skill-icon` div must contain a **Font Awesome `<i>` tag** — never an emoji character.

```html
<div class="skill-grid">
    <div class="skill-card">
        <div class="skill-icon"><i class="fas fa-search"></i></div>
        <h4>Skill Name</h4>
        <p>Description of what to learn and why.</p>
    </div>
</div>
```

Appropriate FA icons for skill cards: `fa-search`, `fa-key`, `fa-bolt`, `fa-user-shield`, `fa-user-secret`, `fa-drafting-compass`, `fa-terminal`, `fa-cloud`, `fa-lock`, `fa-chart-bar`, `fa-code`, `fa-shield-alt`.

### 5.6 Phase / Playbook Cards

Migration and operational playbooks use `.phase-card`. Each phase MUST include **explicit security gate criteria** — items the reader must verify before proceeding to the next phase.

```html
<div class="phase-card">
    <h4><i class="fas fa-[icon]" style="color: #[color];"></i> Phase N: [Phase Name] ([Timeframe])</h4>
    <p>[What this phase accomplishes and why it comes at this point in the sequence.]</p>
    <ul>
        <li><i class="fas fa-shield-alt" style="color: var(--accent-cyan); margin-right: 6px;"></i> <strong>Security Gate:</strong> [Specific, measurable criterion that must be true before advancing.]</li>
        <li><i class="fas fa-shield-alt" style="color: var(--accent-cyan); margin-right: 6px;"></i> <strong>Security Gate:</strong> [Another criterion.]</li>
    </ul>
</div>
```

### 5.7 CIS Benchmark / Checklist Tables

When covering hardening or compliance topics, include a structured table mapping control IDs to descriptions and audit methods:

```html
<div class="comparison-table-wrapper">
    <table class="comparison-table">
        <thead>
            <tr>
                <th>Control ID</th>
                <th>Description</th>
                <th>Level</th>
                <th>How to Audit / Verify</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="feature">[ID]</td>
                <td>[Description]</td>
                <td><span class="badge-risk">L1</span></td>
                <td>[Exact command or portal path]</td>
            </tr>
        </tbody>
    </table>
</div>
```

### 5.8 KQL / Detection Queries

Include at least **2–3 KQL or detection queries** for any guide covering a technology with Microsoft Sentinel/Defender integration. Format using `<pre><code>`:

```html
<div class="technical-box">
    <h4><i class="fas fa-search"></i> KQL Detection: [Query Name]</h4>
    <pre><code>// Description of what this detects
TableName
| where Column == "value"
| project TimeGenerated, Column1, Column2
| order by TimeGenerated desc</code></pre>
</div>
```

### 5.9 Attack Vector / Exploit Format

```html
<div class="exploit-box">
    <span class="exploit-label"><i class="fas fa-skull-crossbones"></i> Attack Vector N: [Name]</span>
    <p>[Technical explanation of the attack — how it works, what the attacker gains, real-world examples if available.]</p>
    <div class="defense-box">
        [Specific mitigation — exact config, policy, or detection rule. Not generic advice.]
    </div>
</div>
```

---

## 6. Typography & Formatting Rules

- **h1:** One per page. Gradient text. The guide title.
- **h2:** Section titles. Cyan left border top. Numbered (e.g., "1. Introduction").
- **h3:** Sub-sections within h2. No numbering required.
- **Bold (`<strong>`):** For key terms, control names, product names.
- **Italic (`<em>`):** For emphasis within a sentence.
- **`<code>` inline:** For command names, file paths, config values, API names.
- **`<pre><code>` blocks:** For multi-line commands, scripts, KQL, config files.
- **Lists:** Use `<ul>` with `<li>` — never use emoji as bullet prefixes. Use FA icons where visual differentiation is needed.
- **No emoji anywhere.** Every place you think an emoji belongs, use a Font Awesome icon.

---

## 7. Post-Write Verification

Before committing, run this check — it must return zero matches:

```bash
python3 -c "
import re, sys
text = open('guides/[filename].html', encoding='utf-8').read()
emoji_pattern = re.compile('[\U0001F000-\U0001FFFF\U00002600-\U000027FF\U00002B00-\U00002BFF\U0001F900-\U0001F9FF]')
matches = list(emoji_pattern.finditer(text))
if matches:
    for m in matches:
        print(f'EMOJI FOUND at pos {m.start()}: {m.group()} — context: {text[max(0,m.start()-40):m.start()+40]}')
    sys.exit(1)
else:
    print('Clean — no emojis found.')
"
```

---

## 8. Deployment Checklist

1. **Create HTML file** at `/guides/[topic-year].html` following all standards above.
2. **Generate images** and save to `/images/guides/`.
3. **Run emoji scan** — must be clean before proceeding.
4. **Update `guides/guides.json`:**
   - Insert at the **TOP** of the array (newest first).
   - Set `"featured": true` for the first 2 weeks.
   - Format: `{"title": "...", "date": "Month DD, YYYY", "url": "/guides/[filename].html", "category": "...", "readTime": "X min", "difficulty": "Intermediate|Advanced"}`
5. **Update sitemap:** Add URL to `sitemap.xml`.
6. **Commit and push:**
   ```bash
   git add . && git commit -m "feat(guides): add [guide title]" && git pull --rebase && git push
   ```
