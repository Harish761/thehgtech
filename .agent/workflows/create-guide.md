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
    <!-- Like/Share Buttons code (Same as Article) -->
</div>
<script src="/interaction-bar.js"></script>
```

## 6. Deployment Checklist
1.  **Create HTML File:** Populate with full content.
2.  **Generate Image:** Save to `/images/guides/`.
3.  **Update `guides.json`:**
    *   Insert at the **TOP** of the list.
    *   Set `"featured": true` for the first 2 weeks.
    *   *Format:* `{"title": "...", "date": "Feb 02, 2026", "url": "..."}`
4.  **Update `/guides/index.html`:** Add the HTML card to the grid (Newest First).
5.  **Update Sitemap:** Add URL to `sitemap.xml`.
6.  **Push:** `git add . && git commit -m "feat(guides): new guide..." && git push`
