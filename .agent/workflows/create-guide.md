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
```

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
2. Add to `/sitemap.xml`
3. Create image in `/images/guides/[guide-name].png`
4. Commit and push to GitHub

## Guide Ordering Rules
**Always maintain chronological order (newest first):**
```
Dec 17, 2025  ← newest first
Dec 13, 2025
Dec 5, 2025
Dec 4, 2025
Dec 2, 2025
Nov 29, 2025
Nov 27, 2025
November 2025 ← general month last
--------------
Coming Soon   ← at the very end
```
