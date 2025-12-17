---
description: How to create new articles for TheHGTech
---

# Article Creation Workflow

When creating a new article for TheHGTech, follow these standards:

## File Location
- Path: `/articles/[article-name].html`
- Naming: lowercase with hyphens, include year (e.g., `harvard-phone-phishing-breach-2025.html`)

## Article Types
1. **News/Breach Reports** - Current events, recent breaches, industry news
2. **Analysis** - Deep dives into threats, trends, predictions
3. **Research** - Original research, statistics, reports

## Required SEO Elements
```html
<!-- Title: Include year, brand keywords -->
<title>[Compelling Title] | TheHGTech</title>

<!-- Description: 150-160 characters, newsworthy hook -->
<meta name="description" content="...">

<!-- Keywords: Topic-specific -->
<meta name="keywords" content="...">

<!-- Canonical URL -->
<link rel="canonical" href="https://thehgtech.com/articles/[filename]">

<!-- Open Graph -->
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:type" content="article">
<meta property="og:url" content="...">
<meta property="og:image" content="https://thehgtech.com/images/articles/[image-name].png">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">

<!-- Article-specific -->
<meta property="article:published_time" content="2025-12-17T00:00:00Z">
<meta property="article:author" content="TheHGTech">
<meta property="article:section" content="Cybersecurity">

<!-- Structured Data: NewsArticle or Article schema -->
```

## CSS Variables (Same as guides)
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
    --text-primary: #ffffff;
    --text-secondary: #a0a0a0;
    --text-muted: #666666;
    --border: rgba(255, 255, 255, 0.1);
}
```

## Article Header Structure
```html
<div class="article-header">
    <div class="article-category">[Category]</div>
    <h1>[Article Title]</h1>
    <p class="article-excerpt">[One-line compelling hook]</p>
    <div class="article-meta">
        <span><i class="far fa-calendar-alt"></i> Event Date: [Date]</span>
        <span><i class="fas fa-clock"></i> Published: [Date]</span>
        <span><i class="fas fa-book-open"></i> [X] min read</span>
        <span class="category-tag">[Tag]</span>
    </div>
</div>
```

## Content Structure for News Articles
1. **Hook/Lead** - Most important info first (who, what, when, where)
2. **Key Details** - Expand on the story
3. **Impact/Analysis** - Why it matters
4. **Technical Details** - For security audience
5. **What To Do** - Actionable recommendations
6. **Timeline** (if applicable)
7. **Related Articles**

## Content Components

### Key Takeaway Box
```html
<div class="info-box">
    <strong><i class="fas fa-key"></i> Key Takeaway:</strong> [Main point]
</div>
```

### Impact/Warning Box  
```html
<div class="warning-box">
    <strong><i class="fas fa-exclamation-triangle"></i> Impact:</strong> [Severity description]
</div>
```

### Action Items Box
```html
<div class="success-box">
    <strong><i class="fas fa-shield-alt"></i> What To Do:</strong>
    <ul>
        <li>Action 1</li>
        <li>Action 2</li>
    </ul>
</div>
```

### Timeline
```html
<div class="timeline">
    <div class="timeline-item">
        <span class="timeline-date">[Date]</span>
        <span class="timeline-event">[Event]</span>
    </div>
</div>
```

### Quote/Source Attribution
```html
<blockquote>
    "[Quote text]"
    <cite>— [Source Name]</cite>
</blockquote>
```

## NO EMOJIS - Use FontAwesome Instead
(Same icon set as guides - see /create-guide workflow)

## Article Footer
```html
<div class="article-footer">
    <p><strong>Author:</strong> TheHGTech Security Team</p>
    <p><strong>Published:</strong> [Date]</p>
    <p><strong>Last Updated:</strong> [Date]</p>
    
    <div class="related-articles">
        <h3>Related Articles</h3>
        <ul>
            <li><a href="...">[Related Article 1]</a></li>
            <li><a href="...">[Related Article 2]</a></li>
        </ul>
    </div>
</div>
```

## After Creating Article
1. Add entry to `/articles.json` with `externalUrl` field pointing to HTML file
2. Add to `/sitemap.xml` 
3. Add to `/news-sitemap.xml` for Google News
4. Create OG image in `/images/articles/`
5. Commit and push to GitHub

## articles.json Entry Format
```json
{
    "id": "article-[slug]",
    "title": "[Title]",
    "date": "[Month Day, Year]",
    "category": "[Category]",
    "excerpt": "[2-3 sentence summary]",
    "image": "images/articles/[image].jpg",
    "externalUrl": "articles/[filename].html",
    "tags": ["tag1", "tag2"],
    "author": "TheHGTech Security Team"
}
```

## Categories
- Ransomware
- Data Breach
- AI Security
- Threat Intelligence
- Vulnerability
- Industry News
- Research
- Predictions
