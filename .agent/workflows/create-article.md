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

## Article Length Requirements - IMPORTANT!
All articles MUST be comprehensive and in-depth:
- **Minimum Reading Time:** 18-20 minutes
- **Minimum Word Count:** ~3,500-4,500 words
- **Content Depth:** Include background, analysis, implications, recommendations

### Required Content Sections for Each Article:
1. **Introduction/Lead** - Hook + key facts (who, what, when, where)
2. **Background Context** - Why this matters, industry context
3. **Detailed Technical Analysis** - Deep dive into the specifics
4. **Timeline of Events** - Chronological breakdown
5. **Impact Assessment** - Who is affected, how severe
6. **Expert Analysis** - Our perspective and insights
7. **Comparison to Similar Incidents** - Historical context
8. **Defense/Mitigation Strategies** - Actionable recommendations
9. **Future Implications** - What this means going forward
10. **Key Takeaways** - Summary of main points

**DO NOT create short 5-minute articles. Every article should be a comprehensive resource.**

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

<!-- Structured Data: BreadcrumbList (REQUIRED for SEO) -->
```

## Required Breadcrumb Schema
Every article MUST include breadcrumb structured data in `<head>`:
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
    "name": "Articles",
    "item": "https://thehgtech.com/articles.html"
  }, {
    "@type": "ListItem",
    "position": 3,
    "name": "[Article Title]",
    "item": "https://thehgtech.com/articles/[filename].html"
  }]
}
</script>

## Featured Image Requirements - IMPORTANT!

Every article MUST have a custom presentation-style illustration as the featured image.

### Image Style Specifications
Generate a **presenter-style illustration** with these elements:

1. **Presenter Character:**
   - Cartoon/illustrated version of Harish G (use reference photo)
   - Indian man with beard, sunglasses on head, confident expression
   - Black t-shirt with subtle tech logo
   - Standing to the left, holding a marker, presenting gesture

2. **Whiteboard Content (Right Side):**
   - **Title:** Article key term in large bold text (use red/cyan accents)
   - **Subtitle:** Severity score or key metric (e.g., "CVSS 10.0", "200GB Stolen")
   - **Bullet Points:** 3-4 key facts with arrows (→)
   - **Flow Diagram:** Simple attack chain or process flow at bottom

3. **Visual Elements:**
   - Red warning triangle icon (!) for critical/breach articles
   - "CRITICAL" or "BREACH" stamp for severity
   - Dark cybersecurity-themed background with circuit patterns
   - Red/cyan accent colors matching TheHGTech brand

4. **Technical Specs:**
   - Format: PNG
   - Location: `/images/articles/[article-slug].png`
   - Minimum dimensions: 1200x630px (OG image standard)

### Image Generation Prompt Template
```
Create a professional cybersecurity presentation-style illustration. A cartoon/illustrated version of the man from the reference photo (Indian man with beard, sunglasses pushed up, confident expression) standing in front of a whiteboard, wearing a black t-shirt with a subtle tech logo, holding a marker and presenting.

The whiteboard shows:
- Title: "[KEY TERM]" in red bold text
- Subtitle: "[SEVERITY/METRIC]"
- Key points with arrows:
  → [Point 1]
  → [Point 2]
  → [Point 3]
  → [Point 4]

Visual elements include:
- Red warning triangle icon with "!" on the left side
- "[STAMP TEXT]" red stamp
- Small flow diagram showing: [Step 1] → [Step 2] → [Step 3] → [Result]
- Dark cybersecurity-themed background with subtle circuit patterns and red/cyan highlights

Style: Clean cartoon illustration similar to tech explainer videos, professional but engaging, dark theme with red accents for danger.
```

### Reference Image for Presenter
Use this photo as the base for the cartoon presenter:
- Location: `/.agent/assets/harish-profile-photo.jpg`
- Style: Maintain recognizable features while creating clean cartoon style

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

## Interaction Bar (REQUIRED)
Every article MUST include the interaction bar. 

### Placement Rules - IMPORTANT!
The interaction bar MUST be placed:
- **AFTER** the `</article>` closing tag
- **BEFORE** the `</main>` closing tag  
- **BEFORE** the `<footer>` element
- **NOT** after the featured image (this is wrong!)

### Required Includes
```html
<!-- In <head> -->
<link rel="stylesheet" href="/interaction-bar.css?v=20251207-0041">

<!-- Before </body> -->
<script src="/interaction-bar.js?v=20251207-0041"></script>
```

### Correct Interaction Bar HTML
```html
        </article>

        <!-- Interaction Bar - MUST be here, after article, before footer -->
        <div class="interaction-bar">
            <div class="like-section">
                <button class="like-btn" id="likeBtn" onclick="toggleLike()">
                    <i class="far fa-heart"></i> <span id="likeText">Like this article</span>
                </button>
            </div>
            <div class="action-buttons">
                <div class="share-buttons">
                    <a href="#" onclick="shareTwitter(event)" class="share-btn" title="Share on Twitter">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#" onclick="shareLinkedIn(event)" class="share-btn" title="Share on LinkedIn">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                    <button onclick="copyLink()" class="share-btn" title="Copy Link">
                        <i class="fas fa-link"></i>
                    </button>
                </div>
                <div class="button-separator"></div>
                <button onclick="window.print()" class="print-btn" title="Print Article">
                    <i class="fas fa-print"></i>
                </button>
            </div>
        </div>
    </main>

    <footer>
        <p>&copy; 2025 TheHGTech. All rights reserved.</p>
    </footer>
```


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
