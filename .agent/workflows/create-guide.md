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

## NO EMOJIS - Use FontAwesome Instead
| Purpose | Icon |
|---------|------|
| Read time | `<i class="fas fa-book-open"></i>` |
| Difficulty | `<i class="fas fa-crosshairs"></i>` |
| Date | `<i class="far fa-calendar-alt"></i>` |
| TOC | `<i class="fas fa-list-ul"></i>` |
| Warning | `<i class="fas fa-exclamation-triangle"></i>` |
| Tip/Info | `<i class="fas fa-lightbulb"></i>` |
| Success | `<i class="fas fa-check-circle"></i>` |
| Links | `<i class="fas fa-link"></i>` |
| AI/Robot | `<i class="fas fa-robot"></i>` |
| Fire/Hot | `<i class="fas fa-fire"></i>` |
| Alert | `<i class="fas fa-bell"></i>` |

## Footer Section
```html
<p style="margin-top: 3rem; padding-top: 2rem; border-top: 1px solid var(--border); color: var(--text-muted);">
    <strong>Author:</strong> TheHGTech Security Team<br>
    <strong>Last Updated:</strong> [Month Year]<br>
    <strong>Reading Time:</strong> [X] minutes
</p>
```

## After Creating Guide
1. Add to `/guides/index.html` with proper card styling
2. Add to `/sitemap.xml`
3. Create placeholder image in `/images/guides/[guide-name].png`
4. Commit and push to GitHub
