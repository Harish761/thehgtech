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

## 6. Deployment Checklist
1.  **Create HTML File:** Populate with full content.
2.  **Generate Image:** Save to `/images/articles/`.
3.  **Update `articles.json`:**
    *   **CRITICAL:** Insert new entry at the **VERY TOP** (Index 0) of the JSON array.
    *   This drives the Homepage "Latest News" feed.
4.  **Update Sitemap:** Add URL to `sitemap.xml`.
5.  **Post-Audit:** Check against Grok's critique (Is it deep? Does it have code?).
6.  **Push:** `git add . && git commit -m "feat(content): new article..." && git push`

## 7. Quality Control Questions (Self-Audit)
- **Is this generic?** (If yes, rewritten effectively).
- **Would a SOS Analyst use this?** (Must have YARA/IOCs).
- **Is the image correct?** (Harish cartoon visible).
