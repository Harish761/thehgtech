# TheHGTech - Complete Workflows & Content Structure Guide

## 🎯 Core Understanding

### Site Architecture
```
Homepage (index.html)
├── News Shorts (from content.js)
├── CVE Cards (from cve-data.json)
├── Ransomware Cards (from ransomware-data.json)
└── Links to: Articles, Guides, Threat Intel

Articles Page (articles.html)
├── Loads from articles.json
├── Displays via article-loader.js
└── Opens in modal via article-modal.js

Guides Section (guides/)
├── Standalone HTML files
├── Each guide is self-contained
└── Listed in guides/index.html

Tool Comparisons (comparisons/)
├── Research-based comparisons
└── No hands-on testing claims
```

---

## 📰 ARTICLE SYSTEM (CRITICAL)

### How Articles Work

**File Flow:**
```
articles.json → article-loader.js → articles.html → article-modal.js
```

**Article Loading Process:**
1. `articles.html` loads
2. `article-loader.js` fetches `articles.json`
3. Merges with `content.js` articleCards (deprecated, but still checked)
4. Renders article cards in `#articlesGrid`
5. Click triggers `openArticleModal(articleId)`
6. Modal displays `content` field from `articles.json`

### Article JSON Structure

```json
{
  "articles": [
    {
      "id": "unique-slug",
      "title": "Article Title (50-80 chars ideal)",
      "date": "Month Day, Year",
      "category": "Category Name",
      "excerpt": "Brief summary for card (150-200 chars)",
      "content": "<div class=\"article-content\">FULL HTML HERE</div>",
      "tags": ["tag1", "tag2", "tag3"],
      "author": "Author Name",
      "image": "optional/path/to/image.png"
    }
  ]
}
```

### Article Content HTML Structure

```html
<div class="article-content">
    <div class="alert-box">
        <strong>⚠️ ALERT:</strong> Important message
    </div>

    <h2>Main Section</h2>
    <p>Paragraph text...</p>

    <h3>Subsection</h3>
    <p>More content...</p>

    <ul>
        <li>List item</li>
    </ul>

    <div class="info-box">
        <h3>Info Title</h3>
        <p>Info content...</p>
    </div>

    <div class="checklist">
        <h3>Checklist Title</h3>
        <ul>
            <li>Checklist item</li>
        </ul>
    </div>

    <div class="code-block">
        Code or command examples
    </div>

    <div class="related-guides">
        <h3>Related Security Guides</h3>
        <a href="/guides/guide-name.html" class="guide-link">
            <i class="fas fa-icon"></i> Guide Name
        </a>
    </div>
</div>
```

### Article Writing Style

**Language Guidelines:**
- ❌ "our organization", "we implemented", "in our environment"
- ✅ "organizations", "security teams", "environments"
- ❌ "I tested this in my lab"
- ✅ "Security researchers have demonstrated"

**Tone:**
- Professional but accessible
- First-person narrative OK for opinion/analysis
- Technical depth with explanations
- Actionable guidance
- Real-world context

**Structure:**
1. **Hook** - Grab attention with the key development
2. **Context** - Background and why it matters
3. **Technical Details** - How it works, what's affected
4. **Impact Analysis** - Who's at risk, severity
5. **Remediation** - Actionable steps (checklists)
6. **Lessons Learned** - Broader implications
7. **Related Resources** - Links to guides

---

## 📚 GUIDE SYSTEM

### Guide Structure (Standalone HTML)

**Template:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- SEO Meta Tags -->
    <title>Guide Title | TheHGTech</title>
    <meta name="description" content="...">
    <meta name="keywords" content="...">
    
    <!-- Structured Data -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "...",
      ...
    }
    </script>
    
    <!-- FAQ Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      ...
    }
    </script>
    
    <!-- Breadcrumb Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      ...
    }
    </script>
    
    <!-- Inline Styles -->
    <style>
        /* Matches homepage aesthetic */
        :root {
            --bg-primary: #000000;
            --accent-cyan: #00D9FF;
            --accent-red: #FF4C4C;
            ...
        }
    </style>
    
    <!-- External CSS -->
    <link rel="stylesheet" href="/light-mode.css">
    <link rel="stylesheet" href="/interaction-bar.css">
</head>
<body>
    <div class="container">
        <header>
            <div class="breadcrumb">
                <a href="/">Home</a> / <a href="/guides/">Guides</a> / Guide Name
            </div>
            <h1>Guide Title</h1>
            <div class="meta">Published: Date | Reading time: X minutes</div>
        </header>

        <article class="content">
            <!-- Guide content -->
        </article>

        <!-- Interaction Bar -->
        <div class="interaction-bar">
            <div class="like-section">
                <button class="like-btn" onclick="toggleLike()">
                    <i class="far fa-heart"></i> Like this article
                </button>
            </div>
            <div class="action-buttons">
                <div class="share-buttons">
                    <a href="#" onclick="shareTwitter(event)" class="share-btn">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#" onclick="shareLinkedIn(event)" class="share-btn">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                    <button onclick="copyLink()" class="share-btn">
                        <i class="fas fa-link"></i>
                    </button>
                </div>
                <button onclick="printArticle()" class="print-btn">
                    <i class="fas fa-print"></i>
                </button>
            </div>
        </div>
    </div>

    <script src="/interaction-bar.js"></script>
</body>
</html>
```

### Guide Writing Style

**Characteristics:**
- Educational and comprehensive
- Step-by-step instructions
- Best practices focus
- Tool-agnostic where possible
- Real-world examples
- FAQ section at end

---

## 🔧 TOOL COMPARISON SYSTEM

### Comparison Writing Rules

**CRITICAL - What NOT to Say:**
```
❌ "In our testing..."
❌ "We deployed both solutions..."
❌ "Our lab environment showed..."
❌ Any claim of hands-on testing
```

**What TO Say:**
```
✅ "According to 500+ G2 reviews..."
✅ "Gartner reports indicate..."
✅ "User feedback suggests..."
✅ "Based on our research..."
✅ "Analysis of community discussions reveals..."
```

### Comparison Structure

1. **Executive Summary** - Quick verdict for scenarios
2. **Methodology Disclosure** - Transparent about research sources
3. **Feature Comparison Matrix** - Interactive table
4. **Gartner Positioning** - Cite specific reports
5. **G2 User Ratings Breakdown** - Specific numbers
6. **Strengths & Weaknesses** - Aggregated feedback
7. **Pricing Analysis** - Cost models
8. **Use Case Recommendations** - Who should use what
9. **Migration Considerations** - Community experiences
10. **Verdict** - Honest assessment with caveats

### Data Sources to Cite

1. Gartner Magic Quadrant (specific year)
2. G2 user reviews (exact ratings)
3. Vendor documentation
4. Community forums (Reddit, Stack Overflow)
5. Published benchmarks
6. Industry reports

---

## 🤖 AUTOMATION WORKFLOWS

### News Shorts Update (`update_shorts.py`)

**What it does:**
1. Fetches from 19 RSS feeds (10 cyber + 9 AI)
2. Filters articles from last 72 hours
3. Removes promotional content
4. Removes duplicates (checks existing URLs)
5. Sends to GPT-4o for formatting
6. Parses GPT output into structured JSON
7. Removes old content (>24 hours)
8. Updates `content.js`

**Run:**
```bash
python3 update_shorts.py
```

**Output:** Updates `content.js` with:
- `cyberShorts` array
- `aiShorts` array

### CVE Data Enrichment (`enrich_cve_dual_source.py`)

**What it does:**
1. Fetches from CISA KEV catalog
2. Enriches with NVD data
3. Detects zero-days
4. Updates `cve-data.json`

**Run:**
```bash
python3 enrich_cve_dual_source.py
```

### Weekly Threat Report (`generate_weekly_report.py`)

**What it does:**
1. Analyzes threat data from past week
2. Generates article with statistics
3. Adds to `articles.json`

**Run:**
```bash
python3 generate_weekly_report.py
```

---

## 📝 CONTENT CREATION WORKFLOWS

### Adding a New Article

**Method 1: Manual (Recommended for custom articles)**

1. **Write article content** (HTML body only)
   ```html
   <div class="article-content">
       <!-- Your content -->
   </div>
   ```

2. **Add to articles.json**
   ```bash
   python3 << 'EOF'
   import json
   
   with open('articles.json', 'r') as f:
       data = json.load(f)
   
   new_article = {
       "id": "article-slug",
       "title": "Article Title",
       "date": "Month Day, Year",
       "category": "Category",
       "excerpt": "Summary...",
       "content": "<div class=\"article-content\">...</div>",
       "tags": ["tag1", "tag2"],
       "author": "Author Name"
   }
   
   data['articles'].insert(0, new_article)
   
   with open('articles.json', 'w') as f:
       json.dump(data, f, indent=2)
   EOF
   ```

3. **Commit and push**
   ```bash
   git add articles.json
   git commit -m "📰 New Article: Title"
   git push
   ```

**Method 2: Automated (Weekly reports)**
```bash
python3 generate_weekly_report.py
```

### Adding a New Guide

1. **Copy template from existing guide**
   ```bash
   cp guides/cisa-kev-tracker.html guides/new-guide.html
   ```

2. **Update content:**
   - Meta tags (title, description, keywords)
   - Structured data (Article, FAQ, Breadcrumb schemas)
   - Breadcrumb navigation
   - H1 title
   - Article content
   - FAQ section

3. **Add to guides/index.html**
   ```html
   <div class="guide-card" onclick="location.href='new-guide.html'">
       <div class="guide-icon">🔒</div>
       <h3>Guide Title</h3>
       <p>Guide description...</p>
       <div class="guide-tags">
           <span class="tag">Tag1</span>
           <span class="tag">Tag2</span>
       </div>
   </div>
   ```

4. **Commit and push**
   ```bash
   git add guides/new-guide.html guides/index.html
   git commit -m "📚 New Guide: Title"
   git push
   ```

### Adding News Shorts

**Automated (Recommended):**
```bash
python3 update_shorts.py
```

**Manual:**
1. Edit `content.js`
2. Add to `cyberShorts` or `aiShorts` array
3. Commit and push

---

## 🎨 STYLING CONVENTIONS

### Color Palette
```css
--bg-primary: #000000;
--bg-secondary: #0a0a0a;
--bg-card: rgba(255, 255, 255, 0.03);
--accent-cyan: #00D9FF;
--accent-red: #FF4C4C;
--text-primary: #ffffff;
--text-secondary: #a0a0a0;
--text-muted: #666666;
--border: rgba(255, 255, 255, 0.1);
```

### Typography
```css
font-family: 'Inter', sans-serif;
h1: 3rem, gradient (cyan to red)
h2: 2rem, cyan
h3: 1.5rem, white
body: 18px, text-secondary
```

### Components

**Alert Box:**
```html
<div class="alert-box">
    <strong>⚠️ Title:</strong> Message
</div>
```

**Info Box:**
```html
<div class="info-box">
    <h3>Title</h3>
    <p>Content...</p>
</div>
```

**Checklist:**
```html
<div class="checklist">
    <h3>Title</h3>
    <ul>
        <li>Item</li>
    </ul>
</div>
```

**Code Block:**
```html
<div class="code-block">
    code here
</div>
```

**Guide Link:**
```html
<a href="/guides/guide.html" class="guide-link">
    <i class="fas fa-icon"></i> Guide Name
</a>
```

---

## ✅ QUALITY CHECKLIST

### Before Adding Article
- [ ] Content is in `<div class="article-content">` wrapper
- [ ] No "our organization" or personal references
- [ ] Links to relevant guides included
- [ ] Proper HTML structure (h2, h3, p, ul, etc.)
- [ ] Actionable guidance provided
- [ ] Technical details explained
- [ ] Added to `articles.json` (not separate HTML file)
- [ ] Tested on live site

### Before Adding Guide
- [ ] All meta tags updated
- [ ] Structured data (Article, FAQ, Breadcrumb) included
- [ ] Breadcrumb navigation correct
- [ ] FAQ section included
- [ ] Interaction bar added
- [ ] Added to `guides/index.html`
- [ ] Tested on live site

### Before Adding Comparison
- [ ] No hands-on testing claims
- [ ] All sources cited (Gartner, G2, etc.)
- [ ] Methodology disclosed
- [ ] Balanced pros/cons
- [ ] Specific numbers/ratings included
- [ ] Use case recommendations clear

---

## 🚀 DEPLOYMENT

### Git Workflow
```bash
# Check status
git status

# Add files
git add <files>

# Commit with descriptive message
git commit -m "📰 Article: Title" # or 📚 Guide: or 🔧 Fix:

# Pull latest (if needed)
git pull --rebase

# Push to production
git push
```

### Live Site
- **URL:** https://thehgtech.com
- **Hosting:** GitHub Pages
- **Branch:** main
- **Auto-deploy:** Yes (on push to main)

---

## 📊 DATA FILES

### articles.json
- **Size:** ~387KB
- **Articles:** 26+
- **Update:** Manual or via Python scripts
- **Backup:** Git history

### content.js
- **Contains:** cyberShorts, aiShorts, articleCards (deprecated)
- **Update:** `update_shorts.py` or manual
- **Format:** JavaScript object

### cve-data.json
- **Contains:** CVE vulnerability data
- **Update:** `enrich_cve_dual_source.py`
- **Frequency:** Twice daily (automated)

### ransomware-data.json
- **Contains:** Ransomware incident data
- **Update:** `fetch_ransomware.py`
- **Frequency:** Daily (automated)

---

**Last Updated:** December 10, 2025  
**Purpose:** Complete reference for all content workflows and structures
