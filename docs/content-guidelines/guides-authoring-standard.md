# TheHGTech Guides Authoring Standard & Editorial Specification

> **Version:** 1.0  
> **Status:** Active / Production Standard  
> **Scope:** Security Guides, Technical Monographs, Field Manuals, and n8n Content Workflows  
> **CSS Scope:** Scoped via `body.guides-editorial` in `/css/guides-editorial.css`

---

## 1. Overview & Purpose

This standard defines the authoring, metadata, typographic, structural, and validation specifications for **TheHGTech Technical Monographs & Field Manuals** (`/guides/`). It serves as the single source of truth for both human contributors and automated content pipelines (e.g. n8n workflows, Python generation scripts).

TheHGTech separates interactive security tools (such as the CVE Tracker and Threat Intel workbench) from editorial content. All guides adhere to a high-craft technical publishing format characterized by:
- Strict **68ch reading measure** to prevent eye fatigue.
- Dual-adaptive surfaces: **Obsidian Reading Studio** (`#0B0C0E` warm canvas) and **Daylight Paper Monograph** (`#FAF8F5` stone paper).
- 3-zone layout: Sticky Table of Contents, focused prose column, and marginalia dossier.
- Machine-verifiable structured metadata across JSON-LD, `guides.json`, and static HTML fallbacks.

---

## 2. Central Datastore & Required Metadata

Every guide must be registered in the central datastore: `/guides/guides.json`.

The datastore file uses a top-level JSON object containing a `guides` array: `{"guides": [...]}`. New entries must always be appended to this existing `guides` array rather than replacing the file with a standalone object or bare array.

```json
{
  "guides": [
    {
      "id": "windows-vs-macos-endpoint-security-2026",
      "title": "Windows vs macOS Endpoint Security 2026: Architecture, Tools, Management & Real-World Effectiveness",
      "category": "Endpoint Security",
      "excerpt": "The definitive 2026 guide from 18+ years of enterprise fleet management: EDR/XDR tools, Intune vs Jamf Pro, OS architecture, detection effectiveness, hardening playbooks, and who should choose what.",
      "readTime": "25 min",
      "level": "Intermediate to Advanced",
      "date": "May 22, 2026",
      "badge": "New",
      "featured": true,
      "image": "/images/guides/windows-vs-macos-endpoint-security-2026.png"
    }
  ]
}
```

### Metadata Fields Definition

| Field | Type | Required | Description / Allowed Values |
| :--- | :--- | :--- | :--- |
| `id` | String | **Yes** | Slug identifier. Must match filename: `/guides/{id}.html`. Lowercase, hyphen-delimited. |
| `title` | String | **Yes** | Clear, authoritative headline. Avoid sensationalist clickbait. |
| `category` | String | **Yes** | Must match one of the established catalog domains (e.g., `Endpoint Security`, `Identity & Access Management`, `Ransomware & Malware`, `AI & LLM Security`, `Threat Intelligence`, `Security Operations`, `Cloud Security`, `Compliance & Governance`, `ICS/OT Security`). |
| `excerpt` | String | **Yes** | 2–3 sentences summarizing the technical problem, analysis, and practical takeaway. Used in search cards and SEO descriptions. |
| `readTime` | String | **Yes** | Approximate read time in minutes, e.g. `"20 min"`, `"25 min"`, `"35 min"`. Format: `{number} min`. |
| `level` | String | **Yes** | Difficulty level for practitioner filtering: `"Beginner"`, `"Intermediate"`, `"Advanced"`, `"All Levels"`, or `"Intermediate to Advanced"`. |
| `date` | String | **Yes** | Publication or major revision date in human-readable format: `"MMM D, YYYY"` (e.g. `"Jun 1, 2026"`). |
| `badge` | String | Optional | Visual badge text in index cards (e.g. `"New"`, `"Updated"`). |
| `featured` | Boolean | Optional | Set to `true` to nominate the guide for the Lead Monograph feature on `/guides/`. |
| `image` | String | **Yes** | Absolute root path to primary figure: `/images/guides/{id}.(png|jpg)`. Standard aspect ratio is 16:9 (`1200x630px` or `1280x720px`). |

---

## 3. SEO, Canonical URLs & Structured Data Requirements

Every guide HTML file (`/guides/{id}.html`) must include standard head metadata and schema blocks.

### Mandatory Head Elements
- **Canonical Link:** `<link rel="canonical" href="https://thehgtech.com/guides/{id}.html">`
- **Robots Directive:** `<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">`
- **Color Scheme Meta:** `<meta name="color-scheme" content="dark light">`
- **OpenGraph & Twitter Card:**
  - `og:type` = `"article"`
  - `og:url` = `https://thehgtech.com/guides/{id}.html`
  - `og:title` & `twitter:title` = Plain text title matching `<h1>`
  - `og:description` & `twitter:description` = Matches `excerpt`
  - `og:image` & `twitter:image` = `https://thehgtech.com/images/guides/{id}.png`
- **Analytics:**
  - Google Analytics 4 (`G-XL6RCXZJE2`)
  - Fullres privacy analytics (`t.fullres.net/thehgtech.js`)

### Structured Data (JSON-LD)
A guide must include at least two JSON-LD blocks:
1. **`TechArticle`:**
   ```json
   {
     "@context": "https://schema.org",
     "@type": "TechArticle",
     "headline": "Full Guide Title",
     "description": "Article summary...",
     "image": "https://thehgtech.com/images/guides/{id}.png",
     "datePublished": "2026-06-01T00:00:00Z",
     "dateModified": "2026-06-01T00:00:00Z",
     "author": {
       "@type": "Person",
       "name": "Harish G",
       "url": "https://thehgtech.com/about.html#harish"
     },
     "publisher": {
       "@type": "Organization",
       "name": "TheHGTech",
       "url": "https://thehgtech.com"
     }
   }
   ```
2. **`BreadcrumbList`:**
   ```json
   {
     "@context": "https://schema.org",
     "@type": "BreadcrumbList",
     "itemListElement": [
       {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thehgtech.com"},
       {"@type": "ListItem", "position": 2, "name": "Guides", "item": "https://thehgtech.com/guides/"},
       {"@type": "ListItem", "position": 3, "name": "Guide Short Name", "item": "https://thehgtech.com/guides/{id}.html"}
     ]
   }
   ```
3. **Optional Extensions:** Include `FAQPage` if the guide has a designated FAQ section, and `HowTo` if step-by-step remediation procedures are provided.

---

## 4. Document Heading Hierarchy & Structure

```
h1: Document Title (Exactly one per page, class="ed-monograph-title")
  └── p.ed-monograph-standfirst (Executive overview / standfirst deck)
  └── h2#slug: Major Section 1
        ├── h3: Conceptual Subtopic
        │     └── h4: Detailed Component / Parameter
        └── h3: Technical Analysis
  └── h2#slug: Major Section 2 (Remediation / Configuration)
  └── h2#faq: FAQ Section
```

### Critical Rules
- **No heading skipping:** Never jump from `<h2>` directly to `<h4>`.
- **Anchor IDs on `<h2>`:** Every `<h2>` must have a URL-safe `id` attribute matching the Table of Contents anchor links (e.g. `<h2 id="kernel-architecture">`).
- **Single `<h1>`:** The page must contain exactly one `<h1>`. Do not wrap logo or rail titles in `<h1>`.
- **No headings inside `<summary>`:** In `<details class="ed-mobile-toc">`, use plain text inside `<summary>`, never heading tags.

---

## 5. The 3-Zone Monograph Template Architecture

All guide monographs use a 3-zone grid structure:

```html
<body class="guides-editorial guide-monograph-page">
  <!-- Top Reading Progress Hairline -->
  <div class="ed-progress-track" aria-hidden="true">
    <div class="ed-progress-bar" id="edReadingProgress"></div>
  </div>

  <!-- Canonical Header Component -->
  <!-- ... -->

  <main class="ed-shell">
    <!-- Header Block: Breadcrumb, Reader Comfort Toolbar, Kicker, Title, Byline Ledger -->
    <header class="ed-monograph-header">
      <!-- ... -->
    </header>

    <!-- Featured Technical Figure -->
    <figure class="ed-monograph-figure">
      <img src="/images/guides/{id}.jpg" alt="Descriptive figure text" width="1200" height="630">
      <figcaption class="ed-monograph-figcaption">
        <span><strong>FIG. 01</strong> // Caption describing the architectural workflow.</span>
        <span>SOURCE: THEHGTECH ARCHITECTURE LAB</span>
      </figcaption>
    </figure>

    <!-- Mobile Collapsible TOC -->
    <details class="ed-mobile-toc">
      <summary><span><i class="fas fa-list-ul"></i> Monograph Contents</span><i class="fas fa-chevron-down"></i></summary>
      <div class="ed-mobile-toc-body">
        <ul class="ed-toc-list">...</ul>
      </div>
    </details>

    <!-- 3-ZONE EDITORIAL MONOGRAPH WORKSPACE -->
    <div class="ed-monograph-grid">
      <!-- ZONE 1: Left Sticky TOC Rail -->
      <aside class="ed-toc-rail" aria-label="Table of Contents">
        <div class="ed-toc-heading">
          <span>Contents</span>
          <span id="edTocPercent">0%</span>
        </div>
        <nav aria-label="Guide sections">
          <ul class="ed-toc-list" id="edDesktopToc">
            <li><a href="#section-1" aria-current="true">1. Section Title</a></li>
            <!-- ... -->
          </ul>
        </nav>
      </aside>

      <!-- ZONE 2: 68ch Prose Column -->
      <article id="edMonographArticle" class="ed-prose-column">
        <!-- BLUF / Abstract Callout -->
        <div class="info-box">
          <div class="info-box-title"><i class="fas fa-shield-alt"></i> Executive Abstract // BLUF</div>
          <p>Key architectural conclusion...</p>
        </div>

        <h2 id="section-1">1. Section Title</h2>
        <p>Paragraph content...</p>

        <!-- Monograph CTA -->
        <div class="ed-monograph-cta">...</div>

        <!-- Author Dossier -->
        <aside class="ed-author-dossier" aria-label="About the Author">...</aside>

        <!-- Preserved Interaction Bar (Likes, Social Share, Copy Link, Print) -->
        <div class="interaction-bar">...</div>
      </article>

      <!-- ZONE 3: Right Marginalia Rail -->
      <aside class="ed-marginalia-rail" aria-label="Key Takeaways and Related Resources">
        <div class="ed-rail-card">
          <h2 class="ed-rail-title">Practitioner Dossier</h2>
          <ul class="ed-rail-list">
            <li><strong>Core Bottleneck:</strong> Summary point...</li>
            <li><strong>Primary Fix:</strong> Summary point...</li>
          </ul>
        </div>
        <div class="ed-rail-card">
          <h2 class="ed-rail-title">Related Monographs &amp; Tools</h2>
          <ul class="ed-rail-list">
            <li><a href="/guides/companion.html" class="ed-rail-link">...</a></li>
          </ul>
        </div>
      </aside>
    </div>
  </main>
</body>
```

---

## 6. Technical Components & Style Guide

### 6.1 Callout Boxes
Use semantic callouts to break up long technical prose:

- **Executive Abstract / BLUF / General Info:**
  ```html
  <div class="info-box">
    <div class="info-box-title"><i class="fas fa-info-circle"></i> Technical Note</div>
    <p>Detailed analysis...</p>
  </div>
  ```
- **Warning / Risk Alert:**
  ```html
  <div class="warning-box">
    <div class="info-box-title"><i class="fas fa-exclamation-triangle"></i> Security Risk</div>
    <p>Operational pitfall to avoid...</p>
  </div>
  ```
- **Success / Best Practice:**
  ```html
  <div class="success-box">
    <div class="info-box-title"><i class="fas fa-check-circle"></i> Recommended Architecture</div>
    <p>Validated configuration...</p>
  </div>
  ```
- **Architectural Opinion / Editorial Stance:**
  ```html
  <div class="opinion-box">
    <p class="opinion-text">"Security controls that degrade performance by more than 15% inevitably drive employees to shadow IT."</p>
    <div class="opinion-attribution">// TheHGTech Architecture Review Board</div>
  </div>
  ```

### 6.2 Code Blocks & Configurations
Always format code and configuration files inside `<pre><code>` with semantic comments:
```html
<pre><code># CrowdStrike Falcon Sensor Configuration Check (Linux / macOS)
sudo /opt/CrowdStrike/falconctl -g --rfm-state
sudo /opt/CrowdStrike/falconctl -g --version</code></pre>
```

### 6.3 Data & Comparison Tables
Tables must be wrapped in `<div class="table-responsive">` or `<div class="ed-table-scroll">` for mobile overflow safety and contain `<th scope="col">`:
```html
<div class="table-responsive">
  <table class="comparison-table">
    <thead>
      <tr>
        <th scope="col">Agent Type</th>
        <th scope="col">Kernel Mechanism</th>
        <th scope="col">I/O Multiplier</th>
        <th scope="col">Impact Rating</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>EDR / XDR</strong></td>
        <td>Minifilter / ESF</td>
        <td>2.5x – 4.0x</td>
        <td><span class="tax-badge tax-high">High</span></td>
      </tr>
      <tr>
        <td><strong>SASE / VPN</strong></td>
        <td>WFP / Network Extension</td>
        <td>1.2x – 1.8x</td>
        <td><span class="tax-badge tax-med">Medium</span></td>
      </tr>
    </tbody>
  </table>
</div>
```

### 6.4 Skill & Agent Architecture Grids
To display 2-column or 4-column breakdowns of technologies or tool capabilities:
```html
<div class="skill-grid">
  <div class="skill-card">
    <div class="skill-icon"><i class="fas fa-shield-halved"></i></div>
    <h4>Kernel Telemetry</h4>
    <p>eBPF on Linux, Endpoint Security Framework (ESF) on macOS, ETW Threat Intelligence on Windows.</p>
  </div>
  <div class="skill-card">
    <div class="skill-icon"><i class="fas fa-microchip"></i></div>
    <h4>I/O Offloading</h4>
    <p>Asynchronous verdict queues preventing synchronous thread starvation in developer compile loops.</p>
  </div>
</div>
```

---

## 7. Pre-Publication Verification Checklist

Before publishing any new guide or deploying changes, run the following automated and manual checks:

```bash
# 1. Verify JSON validity of guides catalog
python3 -c "import json; json.load(open('guides/guides.json'))"

# 2. Check canonical site header synchronization
python3 scripts/sync_site_header.py --check guides/{id}.html

# 3. Generate static pagination and noscript fallbacks
python3 scripts/generate_pagination.py

# 4. Verify core tests pass
python3 -m unittest tests/test_structured_data_and_metadata.py tests/test_pagination_idempotency.py

# 5. Inspect Git status to ensure no unintended files are modified
git status -s
```

### Manual Visual Verification
- [ ] View at desktop width (`1440px`): Verify left TOC highlights correctly as you scroll, center prose remains `68ch`, right marginalia stays sticky.
- [ ] View at mobile width (`390px`–`420px`): Verify hamburger menu opens, mobile `<details class="ed-mobile-toc">` functions, and table horizontal scroll works without causing full-page viewport overflow.
- [ ] Test the **Surface** toggle: Verify seamless transition between Obsidian Reading Studio and Daylight Paper Monograph modes.
- [ ] Test Font Controls: Verify `A-`, `A`, and `A+` scale prose text comfortably without shifting page layout.
- [ ] Sharing Toolbar: Verify Like counter, X/Twitter share, LinkedIn share, Copy Link, and Print Guide buttons operate cleanly.
