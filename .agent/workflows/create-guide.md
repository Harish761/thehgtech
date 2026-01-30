---
description: How to create new security guides for TheHGTech
---

# Guide Creation Workflow

When creating a new guide for TheHGTech, follow these standards:

## File Location
- Path: `/guides/[guide-name].html`
- Naming: lowercase with hyphens (e.g., `active-directory-security-hardening.html`)

## Required SEO Elements
```html
<!-- Title: 50-60 characters, include year -->
<title>[Topic] Guide 2025 | [Secondary Keyword] | TheHGTech</title>

<!-- Description: 150-160 characters -->
<meta name="description" content="...">

<!-- Keywords: 8-12 relevant terms -->
<meta name="keywords" content="...">

<!-- Canonical URL -->
<link rel="canonical" href="https://thehgtech.com/guides/[filename]">

<!-- Open Graph -->
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:type" content="article">
<meta property="og:url" content="...">
<meta property="og:image" content="https://thehgtech.com/images/guides/[image-name].png">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">

<!-- Structured Data: TechArticle schema -->

<!-- Structured Data: BreadcrumbList (REQUIRED for SEO) -->
```

## Required Breadcrumb Schema
Every guide MUST include breadcrumb structured data in `<head>`:
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{
    "@type": "ListItem",
    "position": 1,
    "name": "Home",
    "item": "https://thehgtech.com"
  }, {
    "@type": "ListItem",
    "position": 2,
    "name": "Guides",
    "item": "https://thehgtech.com/guides/"
  }, {
    "@type": "ListItem",
    "position": 3,
    "name": "[Guide Title]",
    "item": "https://thehgtech.com/guides/[filename].html"
  }]
}
</script>

## CSS Variables (Use These)
```css
:root {
    --bg-primary: #000000;
    --bg-secondary: #0a0a0a;
    --bg-card: rgba(255, 255, 255, 0.03);
    --accent-cyan: #00D9FF;
    --accent-red: #FF4C4C;
    --accent-green: #10b981;
    --accent-orange: #f59e0b;
    --accent-purple: #8b5cf6;
    --accent-pink: #ec4899;
    --text-primary: #ffffff;
    --text-secondary: #a0a0a0;
    --text-muted: #666666;
    --border: rgba(255, 255, 255, 0.1);
}
```

## Required CSS Includes
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
<link rel="stylesheet" href="/header.css">
<link rel="stylesheet" href="/header-dropdown.css?v=1">
<link rel="stylesheet" href="/print.css">
<link rel="stylesheet" href="/light-mode.css">
<link rel="stylesheet" href="/m-core.css?v=4.2">
<link rel="stylesheet" href="/m-layout.css?v=3.2">
<link rel="stylesheet" href="/m-components.css?v=3.0">
<script src="/m-app.js?v=4.3" defer></script>
```

## Header Structure
```html
<div class="guide-header">
    <h1>[Guide Title]</h1>
    <p style="color: var(--text-muted); font-size: 1.1rem;">[One-line description]</p>
    <div style="margin-top: 1rem; color: var(--text-muted);">
        <span><i class="fas fa-book-open"></i> [X] min read</span> • 
        <span><i class="fas fa-crosshairs"></i> [Beginner/Intermediate/Advanced]</span> • 
        <span><i class="far fa-calendar-alt"></i> [Month Year]</span>
    </div>
</div>
```

## Content Components

### Info Box (Tips/Notes)
```html
<div class="info-box">
    <strong><i class="fas fa-lightbulb"></i> Tip:</strong> [Content]
</div>
```

### Warning Box (Caution/Important)
```html
<div class="warning-box">
    <strong><i class="fas fa-exclamation-triangle"></i> Warning:</strong> [Content]
</div>
```

### Success Box (Best Practices/Quick Wins)
```html
<div class="success-box">
    <strong><i class="fas fa-check-circle"></i> Best Practice:</strong> [Content]
</div>
```

### Table of Contents
```html
<div class="toc">
    <h3><i class="fas fa-list-ul"></i> Table of Contents</h3>
    <ul>
        <li><a href="#section-1">1. Section Title</a></li>
        <!-- ... -->
    </ul>
</div>
```

### Code Blocks
```html
<pre><code># Comment in green
command or code here</code></pre>
```

### Tables
```html
<table>
    <thead>
        <tr><th>Header</th><th>Header</th></tr>
    </thead>
    <tbody>
        <tr><td>Data</td><td>Data</td></tr>
    </tbody>
</table>
```

## ICONS - Use FontAwesome ONLY (No Emojis)

**NEVER use emojis** (✅ ❌ ⚠️ 💡 🔧 📋 🎯 🚀 etc.) in guides.
Always use Font Awesome icons with appropriate styling.

| Purpose | Icon Code |
|---------|-----------|
| Checkmark/Yes | `<i class="fas fa-check-circle" style="color: var(--accent-green);"></i>` |
| Cross/No | `<i class="fas fa-times-circle" style="color: var(--accent-red);"></i>` |
| Warning | `<i class="fas fa-exclamation-triangle" style="color: var(--accent-orange);"></i>` |
| Tip/Info | `<i class="fas fa-lightbulb"></i>` |
| Success | `<i class="fas fa-check-circle"></i>` |
| Read time | `<i class="fas fa-book-open"></i>` |
| Difficulty | `<i class="fas fa-crosshairs"></i>` |
| Date | `<i class="far fa-calendar-alt"></i>` |
| TOC | `<i class="fas fa-list-ul"></i>` |
| Links | `<i class="fas fa-link"></i>` |
| AI/Robot | `<i class="fas fa-robot"></i>` |
| Fire/Hot | `<i class="fas fa-fire"></i>` |
| Alert | `<i class="fas fa-bell"></i>` |
| Network | `<i class="fas fa-network-wired"></i>` |
| Shield | `<i class="fas fa-shield-alt"></i>` |
| Lock | `<i class="fas fa-lock"></i>` |
| Key | `<i class="fas fa-key"></i>` |
| Bug | `<i class="fas fa-bug"></i>` |

## Content Writing Guidelines

### Structure
1. **Start with context** - Explain what something is and why it matters before diving into technical details
2. **Use analogies** - Compare concepts to real-world situations (e.g., "like a restaurant health inspection")
3. **Include real-world examples** - Reference actual incidents (Colonial Pipeline, SolarWinds, etc.) with specific impacts
4. **Add comparison tables** - Before/after, with/without, old way vs new way

### Section Headers
- **DO NOT** use labels like "(For Beginners)" or "(Simple Explanation)"
- Headers should be natural: "Understanding the Basics", "Why This Matters", "Real-World Examples"
- Content should be self-explanatory without calling out skill levels

### Callout Boxes
- **info-box**: Tips, insights, "Think of it like this" analogies
- **warning-box**: Common mistakes, pitfalls, critical cautions
- **success-box**: Best practices, quick wins, key takeaways

### Tables
Use tables liberally for:
- Comparing options (VPN vs ZTNA, Type I vs Type II)
- Listing examples with context (Year | Incident | Impact)
- Breaking down concepts (Component | What It Does | Example)

## Interaction Bar (REQUIRED)
Every guide MUST include the interaction bar at the bottom of the content.

### CSS Include (in `<head>`)
```html
<link rel="stylesheet" href="/interaction-bar.css?v=20251217">
```

### HTML (before `</body>`)
```html
<!-- Interaction Bar -->
<div class="interaction-bar">
    <div class="like-section">
        <button class="like-btn" id="likeBtn" onclick="toggleLike()">
            <i class="far fa-heart"></i> <span id="likeText">Like this guide</span>
        </button>
    </div>
    <div class="action-buttons">
        <div class="share-buttons">
            <a href="#" onclick="shareTwitter(event)" class="share-btn" title="Share on Twitter" aria-label="Share on Twitter">
                <i class="fab fa-twitter"></i>
            </a>
            <a href="#" onclick="shareLinkedIn(event)" class="share-btn" title="Share on LinkedIn" aria-label="Share on LinkedIn">
                <i class="fab fa-linkedin-in"></i>
            </a>
            <button onclick="copyLink()" class="share-btn" title="Copy Link" aria-label="Copy Link">
                <i class="fas fa-link"></i>
            </button>
        </div>
        <div class="button-separator"></div>
        <button onclick="printArticle()" class="print-btn" title="Print" aria-label="Print">
            <i class="fas fa-print"></i>
        </button>
    </div>
</div>
```

### JS Include (before `</body>`)
```html
<script src="/interaction-bar.js?v=20251217"></script>
```

## Footer Section
```html
<p style="margin-top: 3rem; padding-top: 2rem; border-top: 1px solid var(--border); color: var(--text-muted);">
    <strong>Author:</strong> TheHGTech Security Team<br>
    <strong>Last Updated:</strong> [Month Year]<br>
    <strong>Reading Time:</strong> [X] minutes
</p>
```

## After Creating Guide
1. **Add to `/guides/index.html`** with proper card styling
   - **IMPORTANT: Insert by DATE ORDER (newest first)**
   - Date format: `Dec 17, 2025` (use exact format)
   - New guides (Dec 17) go BEFORE guides from Dec 13
   - Dec 13 guides go BEFORE Dec 5 guides, etc.
   - Coming Soon guides go at the END
2. **Add to `/guides/guides.json`** (REQUIRED for homepage)
   - The homepage "Latest Guides" section pulls from `guides.json`
   - The first 2 entries with `featured: true` will appear on the homepage
   - Order by date (newest first) in the JSON file
3. Add to `/sitemap.xml`
4. Create image in `/images/guides/[guide-name].png`
5. Commit and push to GitHub

## Homepage Featured Guides (Auto-Updated)
The homepage displays the 2 most recent guides in the "Latest Guides" column.
- Data source: `/guides/guides.json`
- The static fallback shows Unicode LLM Attacks guides
- For guides to appear: add to `guides.json` with `featured: true`

## Guide Card Styling on Index Page

### DO - Use Subtle Borders
```html
<div class="guide-card" style="border: 1px solid var(--border);">
```

### DO NOT - Use Neon Glows or Colored Borders
```html
<!-- NEVER DO THIS - No neon glow effects -->
<div class="guide-card" style="border: 2px solid #8b5cf6; box-shadow: 0 0 15px rgba(139, 92, 246, 0.2);">
```

**Reason**: Neon glow effects create visual inconsistency and distract from the content. All guide cards should have a clean, consistent design with subtle borders only.

### Badge Styling
For "New" badges on guide cards, use a gradient badge without affecting the card border:
```html
<span class="guide-tag" 
    style="background: linear-gradient(135deg, #8b5cf6, #a78bfa); color: white; border: none; font-weight: 600;">
    <i class="fas fa-star"></i> New
</span>
```

After guides are no longer "new" (after ~2 weeks), change to category-specific badges:
```html
<span class="guide-tag" 
    style="background: rgba(139, 92, 246, 0.15); color: #a78bfa; border: 1px solid #8b5cf6; font-weight: 600;">
    <i class="fas fa-robot"></i> AI Security
</span>
```

## Featured Image Generation Guidelines

### Image Location
- Path: `/images/guides/[guide-name].png` or `/images/articles/[article-name].png`
- Naming: Must match the HTML filename

### Required Visual Style: "Harish at Whiteboard"
ALL images (guides, articles, LinkedIn) MUST follow this EXACT consistent style:

**MANDATORY Image prompt template:**
```
Create a professional cybersecurity presentation-style illustration. 

CHARACTER: Cartoon version of Harish G - Indian man with beard, sunglasses pushed up on head, confident friendly expression, wearing black t-shirt with subtle tech logo. Standing to the left side, holding a marker/stylus, presenting gesture pointing at whiteboard.

WHITEBOARD/DISPLAY (right side, futuristic glowing screen):
- Title: "[MAIN TOPIC]" in large cyan (#00D9FF) bold text
- Subtitle: "[KEY METRIC OR TAGLINE]" in red (#FF3D3D)
- Key points with red arrows (→):
  → [Point 1]
  → [Point 2]
  → [Point 3]
  → [Point 4]
- Attack/process flow diagram at bottom: [Step 1] → [Step 2] → [Step 3] → [Step 4]

VISUAL ELEMENTS:
- Red warning triangle icon (⚠) on the whiteboard
- "ACTIVE THREAT" or relevant red stamp in corner
- Topic-specific icon/logo (e.g., Microsoft Teams logo, robot icon, etc.)

BACKGROUND: Dark cybersecurity-themed (#0a0a0a) with subtle glowing circuit patterns, matrix-style code rain, red and cyan neon highlights.

STYLE: Clean cartoon illustration similar to tech explainer videos. Professional but engaging. Dark theme with red/cyan accents. 1200x630 aspect ratio.
```

### CRITICAL RULES:
1. ALWAYS include the cartoon Harish character
2. ALWAYS have a whiteboard/display with structured content
3. ALWAYS use the title + subtitle + bullet points + flow diagram format
4. ALWAYS use dark background with circuit patterns
5. NEVER generate abstract/3D isometric images without the character

### Image Generation Tool
Use the `generate_image` tool with the template above. Customize the [BRACKETS] for each topic.

## Guide Ordering Rules
**Always maintain chronological order (newest first):**
```
Jan 13, 2026  ← newest first
Jan 12, 2026
Jan 9, 2026
Jan 1, 2026
Dec 31, 2025
Dec 23, 2025
Dec 17, 2025
...older dates...
--------------
Coming Soon   ← at the very end
```

## Research-Grade Editorial Framework

For "Advanced" or "Deep Dive" guides, apply the following rigorous standards to ensure content meets a defensive research quality bar.

### 1. Tone & Voice Compliance
*   **Strict Neutrality:** Remove all marketing/hype language.
    *   ❌ Avoid: "Game-changing", "Mind-blowing", "Unstoppable", "Ultimate".
    *   ✅ Use: "Significant", "demonstrated", "high-severity", "comprehensive".
*   **Precision:** Be specific about versions and conditions.
    *   ❌ "LLMs are vulnerable to this."
    *   ✅ "Llama-2-7B-Chat (v1) demonstrated susceptibility in white-box testing."

### 2. Mandatory Research Components
Every research-grade guide must include:

*   **Abstract/Executive Summary:** Replaces generic "Intro". Briefly state the vector, the impact, and the defense.
*   **Ethical Disclaimer:** Explicit statement that content is for defensive purposes.
*   **Threat Model Section:** Define:
    *   **Attacker Capabilities:** (e.g., white-box access, API access).
    *   **Target Assumptions:** (e.g., standard RLHF aligned model).
    *   **Attack Class:** (e.g., Tokenization-level, Prompt Injection).
*   **Scoped Claims:**
    *   Never state absolute success rates without context.
    *   Format: "Achieved [X]% success rate on [Model Name] under [Condition Y]."
*   **Defense Architecture:**
    *   Move beyond "tips". Provide a structural defense strategy (e.g., "Layer 1: Sanitization, Layer 2: Normalization").
    *   Include production-ready code examples (e.g., complete Python classes), not just snippets.
*   **limitations Section:**
    *   Explicitly state what the attack *cannot* do.
    *   Explicitly state where the defense *might fail* (adaptive attacks).
*   **References Section:**
    *   Cite specific papers (Author, Year, Title, ArXiv/Conference).
    *   Cite CVEs with links.

### 3. Prompt Skeleton for "Research-Grade" Output
When generating content, use this structural prompt to enforce quality:

```markdown
# ROLE
Act as a Principal Security Researcher. Your goal is to write a definitive, defensive research paper formatted as a technical guide.

# CONSTRAINTS
- NO checklist-style "how-to" tone. Use analytical narrative.
- NO marketing adjectives (revolutionary, scary, shocking).
- Claims regarding "bypass" or "jailbreak" MUST be scoped to specific model versions or experimental settings.

# STRUCTURE
1. **Header**: Title (Technical), Abstract (Summary of findings).
2. **Threat Model**: Define the adversary (Capabilities: API vs Weights).
3. **Technical Analysis**:
   - Deep dive into the mechanic (e.g., Tokenization logic, Helper function abuse).
   - Use "Attack Scenario" tables (Vector | Precondition | Impact).
4. **Evidence/Impact**:
   - Cite specific CVEs or Papers (e.g., "Zou et al., 2023").
   - Use "Impact Analysis" info-boxes, not generic "Danger" boxes.
5. **Defense Engineering**:
   - Provide "Enterprise Architecture" diagrams (ASCII).
   - Provide "Production-Ready" code (Classes with type hints, error handling).
6. **Limitations**: What does this NOT work on?
7. **References**: IEEE/ACM style citations.

# VISUALS
- Use <div class="architecture-diagram"> for system flows.
- Use <div class="token-viz"> for NLP/Token breakdowns.
```
