# TheHGTech Article Creation & Publishing Guide

This guide describes the standard publishing workflow and technical architecture for publishing new cybersecurity research, vulnerability analyses, and threat intelligence monographs on TheHGTech.

---

## The Standard Publishing Workflow (3 Steps)

1. **Register Metadata in Datastore**: Add article metadata to `ioc-data/articles.json`.
2. **Author the Monograph HTML**: Clone a recent modern article template to `articles/{slug}.html` and populate the editorial content.
3. **Re-generate Pagination & Feeds**: Run `python3 scripts/generate_pagination.py`.

---

## Step 1: Add Metadata to `ioc-data/articles.json`

Append your article object to the array in `ioc-data/articles.json`. Ensure the fields match the schema:

```json
{
  "id": "enterprise-vulnerability-management-exposure-blind-spot-2026",
  "title": "The Exposure Blind Spot: Why Enterprise Vulnerability Management Is Struggling in the AI Era",
  "description": "Enterprise vulnerability management is broken. Threat actors exploit AI-accelerated zero-day pipelines while defenders drown in CVSS 9+ noise. Here is how modern SecOps teams are pivoting to Continuous Threat Exposure Management (CTEM).",
  "category": "Cybersecurity",
  "author": "TheHGTech Security Research",
  "authorRole": "Principal Vulnerability Researcher",
  "date": "2026-10-26",
  "readTime": "11 min read",
  "image": "images/articles/enterprise-vulnerability-management-exposure-blind-spot-2026.png",
  "url": "articles/enterprise-vulnerability-management-exposure-blind-spot-2026.html",
  "featured": true,
  "trending": true
}
```

---

## Step 2: Author the Article HTML (`articles/{slug}.html`)

Always clone from a fully featured modern article to preserve the header, mobile hamburger drawer, search overlay, and theme toggle:

```bash
cp articles/apple-dyld-zero-day-cve-2026-20700.html articles/{your-new-slug}.html
```

### Essential Page Architecture

Each article must include the following structural components:

#### 1. Head Stylesheets & Metadata
```html
<title>[Article Title] | TheHGTech</title>
<meta name="description" content="[Short summary]">
<link rel="canonical" href="https://thehgtech.com/articles/[slug].html">

<!-- Core Editorial Design System Stylesheets -->
<link rel="stylesheet" href="/header.css">
<link rel="stylesheet" href="/css/article-editorial.css">
<link rel="stylesheet" href="/footer.css">
<link rel="stylesheet" href="/interaction-bar.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
```

#### 2. Breadcrumbs & Hero Header
```html
<main id="main-content" class="ap-main">
  <article itemscope itemtype="https://schema.org/NewsArticle">
    <header class="ap-article-header">
      <nav aria-label="Breadcrumb">
        <ol class="ap-breadcrumbs">
          <li><a href="/">Home</a></li>
          <li aria-hidden="true">/</li>
          <li><a href="/articles.html">Research Library</a></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page">[Category]</li>
        </ol>
      </nav>

      <div class="ap-kicker-row">
        <span class="ap-pill ap-pill-category">[CATEGORY]</span>
        <span class="ap-pill">Independent Research</span>
        <span class="ap-pill ap-pill-emerald">Verified Analysis</span>
      </div>

      <h1 class="ap-title" itemprop="headline">[Main Article Headline]</h1>
      <p class="ap-standfirst" itemprop="description">[Executive summary]</p>

      <div class="ap-byline-ledger">
        <div class="ap-byline-author">
          <div class="ap-author-avatar" aria-hidden="true">TS</div>
          <div class="ap-byline-cell">
            <span class="ap-byline-label">Lead Author</span>
            <span class="ap-byline-val"><a href="/about.html" rel="author">TheHGTech Security Research</a></span>
            <span class="ap-byline-sub">TheHGTech Security Research Team</span>
          </div>
        </div>
        <div class="ap-byline-cell">
          <span class="ap-byline-label">Published</span>
          <time class="ap-byline-val" datetime="2026-10-26" itemprop="datePublished">October 26, 2026</time>
          <span class="ap-byline-sub">Peer Reviewed &amp; Field Verified</span>
        </div>
        <div class="ap-byline-cell">
          <span class="ap-byline-label">Reading Scope</span>
          <span class="ap-byline-val">8 min read</span>
          <span class="ap-byline-sub">8 Technical Sections</span>
        </div>
      </div>
    </header>

    <!-- 16:9 Featured Hero Media -->
    <figure class="ap-hero-figure">
      <div class="ap-hero-img-wrap">
        <img src="/images/articles/[image-name].png" alt="[Image description]" width="1200" height="675" fetchpriority="high" decoding="async">
      </div>
    </figure>
```

#### 3. 3-Zone Monograph Grid & Prose Body
```html
    <!-- 3-Zone Monograph Workspace (Sticky TOC + 70ch Prose) -->
    <div class="ap-workspace">
      <!-- Left Rail: Sticky Table of Contents -->
      <aside class="ap-toc-rail" aria-label="Article Table of Contents">
        <div class="ap-toc-header">
          <span>On This Page</span>
          <span id="apTocPct" class="ap-toc-pct">0%</span>
        </div>
        <div class="ap-toc-scroller">
          <nav class="ap-toc-nav" aria-label="Section links">
            <a href="#sec-1">1. Executive Summary</a>
            <a href="#sec-2">2. Technical Analysis</a>
            <a href="#sec-3">3. Immediate Mitigations</a>
          </nav>
        </div>
      </aside>

      <!-- Center: Long-Form Technical Monograph -->
      <div class="ap-prose" itemprop="articleBody">
        <section id="sec-1">
          <h2>1. Executive Summary</h2>
          <p>Analysis text...</p>
        </section>

        <!-- Code Block Example with Copy Button -->
        <div class="ap-code-block" data-lang="kql">
          <div class="ap-code-header">
            <span class="ap-code-lang">KQL</span>
            <button class="ap-code-btn" data-action="copy-code">Copy</button>
          </div>
          <pre><code>DeviceProcessEvents
| where ProcessCommandLine has_any ("suspicious_flag", "injection")</code></pre>
        </div>

        <!-- Responsive Stackable Table Example -->
        <div class="table-wrapper ap-stackable">
          <table class="ap-editorial-table">
            <thead>
              <tr>
                <th>Attack Vector</th>
                <th>MITRE Technique</th>
                <th>Detection Difficulty</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Dyld Environment Poisoning</td>
                <td>T1574.006</td>
                <td>High</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
```

#### 4. Interaction Bar, Comments & Newsletter
Place the `.interaction-bar` immediately after the article content. The JavaScript (`interaction-bar.min.js`) automatically initializes the Brevo newsletter form, GraphComment discussions, social sharing, and print functionality:

```html
    <div class="interaction-bar" data-article-id="[slug]">
        <div class="like-section">
            <button class="like-btn" id="likeBtn" onclick="toggleLike()">
                <i class="far fa-heart"></i> <span id="likeText">Join Discussion</span>
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
            <button onclick="printArticle()" class="print-btn" title="Print Article" aria-label="Print Article">
                <i class="fas fa-print"></i>
            </button>
        </div>
    </div>
  </article>
</main>
```

#### 5. Footer & Scripts
```html
<footer class="footer">...</footer>

<script src="/header.js"></script>
<script src="/footer.js"></script>
<script src="/interaction-bar.min.js"></script>
<script src="/js/article-editorial.js"></script>
```

---

## Step 3: Run the Pagination Generator

Whenever metadata in `ioc-data/articles.json` is modified or a new article is added:

```bash
python3 scripts/generate_pagination.py
```

This updates the Research Library grids (`articles.html`), static fallback pagination directories (`articles/page/*/index.html`), and RSS feeds.

---

## Testing & Quality Assurance Checklist

- [ ] Dark Mode and Light Mode contrast verified.
- [ ] Table of Contents links properly to numbered sections (`#sec-1`, `#sec-2`, etc.).
- [ ] Code snippets have copy functionality.
- [ ] Tables stack cleanly on mobile (`.ap-stackable`).
- [ ] Newsletter subscription form and comments are initialized by `.interaction-bar`.
- [ ] No broken relative paths (all CSS and JS assets use `/` prefix).
- [ ] Git commit and push to production.
