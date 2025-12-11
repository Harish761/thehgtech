# TheHGTech - Complete Knowledge Base
## Verified December 10, 2025 - All Facts Confirmed from Source Code

---

## 📋 TABLE OF CONTENTS

1. [Repository Structure](#repository-structure)
2. [GitHub Actions Automation](#github-actions-automation)
3. [Python Scripts & Data Processing](#python-scripts--data-processing)
4. [Frontend Architecture](#frontend-architecture)
5. [Data Files & Formats](#data-files--formats)
6. [Content Workflows](#content-workflows)
7. [Deployment & Git](#deployment--git)
8. [Complete File Inventory](#complete-file-inventory)

---

## 1. REPOSITORY STRUCTURE

### Root Directory Files (Verified)
```
/Volumes/Data-Personal/Webpage/thehgtech/
├── .git/                          # Git repository
├── .github/workflows/             # GitHub Actions (4 workflows)
├── .venv/                         # Python virtual environment
├── articles/                      # Article HTML files (1 file)
├── comparisons/                   # Tool comparison pages (4 files)
├── guides/                        # Security guides (16 HTML files + images)
├── ioc-data/                      # IOC JSON files (13 vendor files)
├── images/                        # Site images (2 files)
├── data/                          # Additional data directory
├── docs/                          # Documentation (13 files)
├── vendors/                       # Vendor-specific data
├── __pycache__/                   # Python cache
│
├── index.html                     # Homepage (183KB, 5059 lines)
├── articles.html                  # Articles listing page (36KB, 963 lines)
├── threat-intel.html              # Threat intelligence dashboard
├── ti-snapshot.html               # Threat intel snapshot
├── ti-hero-animation.html         # Hero animation
│
├── articles.json                  # Article data (387KB, 26 articles)
├── content.js                     # News shorts data (36KB)
├── cve-data.json                  # CVE data (84KB)
├── ransomware-data.json           # Ransomware incidents (56KB)
├── threat-intel-history.json      # Historical threat data (81KB)
├── archives-content.js            # Archived content (73KB)
│
├── *.py                           # Python automation scripts (10 files)
├── *.js                           # JavaScript files (20+ files)
├── *.css                          # Stylesheets (15+ files)
│
├── README.md
├── CNAME                          # Domain: thehgtech.com
├── robots.txt
├── sitemap.xml
├── requirements.txt               # Python dependencies
└── *.md                           # Documentation files
```

---

## 2. GITHUB ACTIONS AUTOMATION

### Workflow 1: Update Shorts (`update-shorts.yml`)

**Schedule:**
- Morning: 6 AM IST (0:30 UTC)
- Evening: 6 PM IST (12:30 UTC)
- Manual trigger: Available

**What It Does:**
```yaml
1. Checkout repository
2. Setup Python 3.11
3. Install: feedparser, requests, openai, beautifulsoup4, pytz
4. Run: python update_shorts.py
   - Fetches from 19 RSS feeds (10 cyber + 9 AI)
   - Filters last 72 hours
   - Removes promotional content
   - Formats with GPT-4o
   - Updates content.js
5. Commit changes (if any)
6. Push to main branch
```

**Files Modified:**
- `content.js` (cyberShorts, aiShorts arrays)

**Environment Variables:**
- `OPENAI_API_KEY` (required)

---

### Workflow 2: Threat Intel Update (`threat-intel.yml`)

**Schedule:**
- Every 4 hours at :05 minutes
- Daily at 00:05 IST (18:35 UTC) for summary

**What It Does:**
```yaml
1. Checkout repository
2. Setup Python 3.11
3. Install: feedparser, requests, beautifulsoup4
4. Run: python fetch_threat_intel.py --both
   - Fetches from 9 security vendors
   - Processes IOCs (7-day retention)
   - Generates threat-intel.js
   - Updates threat-intel-history.json
5. Prepare IOC files (copy to ioc-data/)
6. Run: python enrich_cve_dual_source.py
   - Fetches CISA KEV catalog
   - Fetches NVD critical CVEs
   - Enriches with remediation links
   - Updates cve-data.json
7. Commit and push all changes
```

**Files Modified:**
- `threat-intel.js`
- `threat-intel-history.json`
- `threat-intel-history.js`
- `ti-snapshot.html`
- `ioc-data/*.json` (13 vendor files)
- `cve-data.json`

**Environment Variables:**
- `NVD_API_KEY` (optional, improves rate limit)
- `OPENAI_API_KEY` (for AI insights)

---

### Workflow 3: Ransomware Update (`ransomware.yml`)

**Schedule:**
- Midnight UTC (0:00)
- Noon UTC (12:00)
- Manual trigger: Available

**What It Does:**
```yaml
1. Checkout repository
2. Setup Python 3.11
3. Install: requests
4. Run: python3 fetch_ransomware.py
   - Fetches from Ransomware.live API
   - Updates ransomware-data.json
5. Commit changes (if any)
6. Pull --rebase and push
```

**Files Modified:**
- `ransomware-data.json`

---

### Workflow 4: Weekly Report (`weekly-report.yml`)

**Schedule:**
- Every Monday at 09:00 UTC
- Manual trigger: Available

**What It Does:**
```yaml
1. Checkout repository
2. Setup Python 3.9
3. Run: python3 generate_weekly_report.py
   - Analyzes past week's threat data
   - Generates article with statistics
   - Adds to articles.json
4. Commit and push
```

**Files Modified:**
- `articles.json`

---

## 3. PYTHON SCRIPTS & DATA PROCESSING

### Script 1: `update_shorts.py` (998 lines, 38KB)

**Purpose:** Fetch and format news shorts from RSS feeds

**Configuration:**
```python
CYBER_FEEDS = 23 feeds  # Bleeping Computer, The Hacker News, etc.
AI_FEEDS = 9 feeds      # TechCrunch AI, The Verge AI, etc.
HOURS_BACK = 72         # Fetch articles from last 72 hours
```

**Process Flow:**
1. Fetch articles from RSS feeds
2. Filter by date (last 72 hours)
3. Remove duplicates (check existing URLs)
4. Filter promotional content (keyword detection)
5. Send top 7 articles to GPT-4o for formatting
6. Parse GPT output into structured JSON
7. Remove old content (>24 hours)
8. Update `content.js`

**Promotional Filter Keywords:**
- "offers a robust solution"
- "best solution"
- "learn more about"
- "black friday", "cyber monday", "deals"
- 50+ marketing phrases

**Output Format:**
```javascript
{
  "date": "Nov 23 2024",
  "title": "Article Title",
  "content": "5-7 sentences...",
  "source": "Source Name",
  "sourceUrl": "https://..."
}
```

---

### Script 2: `fetch_threat_intel.py` (1684 lines, 66KB)

**Purpose:** Fetch IOCs from 9 security vendors

**Vendors:**
1. **OpenPhish** - Phishing URLs (every 15 min)
2. **Malware Bazaar** - Malware hashes/URLs (real-time)
3. **Spamhaus DROP** - Hijacked IP ranges (daily)
4. **CINS Army** - Malicious IPs (every 15 min)
5. **Blocklist.de** - SSH brute-force IPs (hourly)
6. **URLhaus** - Malware distribution URLs (real-time)
7. **ThreatFox** - Multi-type IOCs (real-time)
8. **Feodo Tracker** - Botnet C2 IPs (hourly)
9. **SSL Blacklist** - Malicious SSL certs (daily)

**IOC Retention:** 7 days (168 hours)

**Process Flow:**
1. Load previous IOC data for each vendor
2. Fetch new IOCs from vendor feeds
3. Parse based on feed type (text/CSV/RSS)
4. Defang indicators (hxxp://, [.])
5. Add tags and campaign detection
6. Prune IOCs older than 7 days
7. Save to `ioc-data/{vendor}.json`
8. Generate `threat-intel.js` with aggregated data
9. Save daily snapshot to `threat-intel-history.json`
10. Maintain 7-day rolling window

**IOC Structure:**
```javascript
{
  "type": "url|ip|hash|domain|ssl-cert|ip-range",
  "indicator": "hxxp://example[.]com",
  "description": "Description...",
  "timestamp": "just now",
  "source": "Vendor Name",
  "sourceUrl": "https://vendor.com",
  "analysisTime": "2025-12-10 15:30 IST",
  "tags": ["phishing", "live"],
  "addedAt": "2025-12-10T10:00:00+05:30",
  "campaign": "Campaign Name"
}
```

---

### Script 3: `enrich_cve_dual_source.py` (306 lines, 12KB)

**Purpose:** Fetch and enrich CVE data from dual sources

**Sources:**
1. **CISA KEV** - Known Exploited Vulnerabilities
2. **NVD** - Critical CVEs (CVSS ≥ 9.0)

**Process Flow:**
1. Fetch CISA KEV catalog (JSON)
2. Fetch NVD critical CVEs (last 7 days)
   - CVSS v3.x CRITICAL
   - CVSS v4.0 CRITICAL (manual filter)
3. Merge and deduplicate by CVE ID
4. Enrich with:
   - Vendor/product info
   - CVSS scores
   - Zero-day detection
   - Remediation links
5. Save to `cve-data.json`

**Rate Limiting:**
- With API key: 0.6 seconds between requests
- Without API key: 6 seconds between requests

**CVE Structure:**
```javascript
{
  "cveId": "CVE-2024-12345",
  "dateAdded": "Nov 02, 2025",
  "vendor": "Vendor Product",
  "description": "Description...",
  "score": "HIGH|CRITICAL",
  "status": "Confirmed",
  "source": "CISA KEV|NVD",
  "url": "https://nvd.nist.gov/vuln/detail/CVE-2024-12345",
  "isZeroDay": false
}
```

---

### Script 4: `fetch_ransomware.py` (10097 bytes)

**Purpose:** Fetch ransomware incident data

**Source:** Ransomware.live API

**Process Flow:**
1. Fetch recent ransomware incidents
2. Parse and format data
3. Save to `ransomware-data.json`

---

### Script 5: `generate_weekly_report.py` (7367 bytes)

**Purpose:** Generate weekly threat intelligence report

**Process Flow:**
1. Analyze past week's data from:
   - `threat-intel-history.json`
   - `cve-data.json`
   - `ransomware-data.json`
2. Generate statistics:
   - Top malware families
   - Top botnets
   - CVE count
   - Ransomware incidents
3. Create article HTML
4. Add to `articles.json`

---

## 4. FRONTEND ARCHITECTURE

### Homepage (`index.html`) - 5059 lines, 183KB

**JavaScript Files Loaded (in order):**
```html
<script src="content.js?v=20251130"></script>
<script src="article-loader.js?v=20251207-1255"></script>
<script src="article-modal.js"></script>
<script src="interaction-bar.js?v=20251206"></script>
<script src="visual-enhancements.js"></script>
<script src="rotating-text.js?v=4"></script>
<script src="cve-display.js?v=20251125"></script>
<script src="archives-content.js?v=20251130"></script>
<script src="threat-intel.js?v=20251125"></script>
<script src="update-ioc-counts.js?v=20251125d"></script>
<script src="seo-enhancements.js?v=20251125"></script>
<script src="ransomware-display.js"></script>
<script src="copy-to-clipboard.js"></script>
```

**Data Loading:**
- `content.js` → Inline data (cyberShorts, aiShorts)
- `cve-display.js` → Fetches `cve-data.json`
- `ransomware-display.js` → Fetches `ransomware-data.json`
- `article-loader.js` → Fetches `articles.json` (but homepage doesn't display articles)

**Sections:**
1. Hero with rotating text
2. Cyber Shorts (from content.js)
3. AI Insights (from content.js)
4. Top CVEs (from cve-data.json)
5. Latest Ransomware (from ransomware-data.json)
6. Footer

---

### Articles Page (`articles.html`) - 963 lines, 36KB

**JavaScript Files Loaded:**
```html
<script src="interaction-bar.js?v=20251207-0041" defer></script>
<script src="article-modal.js"></script>
```

**Inline JavaScript (Line 477):**
```javascript
async function loadArticles() {
    const response = await fetch('articles.json');
    const data = await response.json();
    allArticles = data.articles;
    
    // Check for ?id= parameter
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = urlParams.get('id');
    
    if (articleId) {
        // Render full article
        renderFullArticle(article);
    } else {
        // Render article grid
        renderArticles();
    }
}
```

**URL Patterns:**
- List view: `articles.html`
- Article view: `articles.html?id=article-slug`

**Display Logic:**
- If `?id=` present: Renders full article (replaces page content)
- If no `?id=`: Shows article grid with search/filter/sort

---

### Threat Intelligence Page (`threat-intel.html`)

**Data Loading:**
- `dashboard-data.js` → Fetches `ioc-data/{vendor}.json` for each vendor
- `threat-analytics.js` → Fetches `threat-intel-history.json`
- `threat-intel-tabs.js` → Fetches `ransomware-data.json`

**Features:**
- 9 vendor tabs
- Overview tab with aggregated stats
- Search/filter/export (CSV/JSON)
- 7-day trend charts
- Live IOC counts

---

## 5. DATA FILES & FORMATS

### `articles.json` (387KB, 26 articles)

**Structure:**
```json
{
  "articles": [
    {
      "id": "article-slug",
      "title": "Article Title",
      "date": "December 10, 2025",
      "category": "Cybersecurity",
      "excerpt": "Brief summary (150-200 chars)",
      "content": "<div class=\"article-content\">FULL HTML</div>",
      "tags": ["tag1", "tag2"],
      "author": "Harish G"
    }
  ]
}
```

**Updated By:**
- `generate_weekly_report.py` (automated weekly)
- Manual edits

---

### `content.js` (36KB)

**Structure:**
```javascript
const websiteContent = {
  "cyberShorts": [
    {
      "date": "Nov 23 2024",
      "title": "Title",
      "content": "Content...",
      "source": "Source",
      "sourceUrl": "https://..."
    }
  ],
  "aiShorts": [...],
  "articleCards": []  // DEPRECATED - empty
}
```

**Updated By:**
- `update_shorts.py` (automated 2x daily)

---

### `cve-data.json` (84KB)

**Structure:**
```json
{
  "cves": [
    {
      "cveId": "CVE-2024-12345",
      "dateAdded": "Nov 02, 2025",
      "vendor": "Vendor Product",
      "description": "Description...",
      "score": "HIGH",
      "status": "Confirmed",
      "source": "CISA KEV",
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2024-12345",
      "isZeroDay": false
    }
  ]
}
```

**Updated By:**
- `enrich_cve_dual_source.py` (automated every 4 hours)

---

### `ransomware-data.json` (56KB)

**Updated By:**
- `fetch_ransomware.py` (automated 2x daily)

---

### `threat-intel-history.json` (81KB)

**Structure:**
```json
{
  "dailySnapshots": [
    {
      "date": "2025-12-10",
      "timestamp": "2025-12-10T15:30:00+05:30",
      "metrics": {
        "totalIOCs": 15000,
        "newIOCs": 250,
        "topAttackVector": "Phishing",
        "campaignCounts": {...},
        "vendorStats": {...}
      }
    }
  ]
}
```

**Retention:** 7 days rolling window

**Updated By:**
- `fetch_threat_intel.py` (automated every 4 hours)

---

### `ioc-data/{vendor}.json` (13 files)

**Vendors:**
- openphish.json
- malware-bazaar.json
- spamhaus-drop.json
- cins-army.json
- blocklist-de.json
- urlhaus.json
- threatfox.json
- feodo-tracker.json
- ssl-blacklist.json

**Structure:**
```json
{
  "vendor": "Vendor Name",
  "description": "Description...",
  "updateFrequency": "Every 15 minutes",
  "iocs": [
    {
      "type": "url",
      "indicator": "hxxp://example[.]com",
      "description": "Description...",
      "timestamp": "just now",
      "source": "Vendor",
      "tags": ["phishing"],
      "addedAt": "2025-12-10T10:00:00+05:30",
      "campaign": "Campaign"
    }
  ],
  "stats": {
    "total": 1000,
    "newInLastHour": 50,
    "recentInLast6Hours": 200
  }
}
```

**Updated By:**
- `fetch_threat_intel.py` (automated every 4 hours)

---

## 6. CONTENT WORKFLOWS

### Adding a New Article

**Method 1: Manual**
```python
import json

with open('articles.json', 'r') as f:
    data = json.load(f)

new_article = {
    "id": "article-slug",
    "title": "Article Title",
    "date": "December 10, 2025",
    "category": "Cybersecurity",
    "excerpt": "Summary...",
    "content": "<div class=\"article-content\">...</div>",
    "tags": ["tag1", "tag2"],
    "author": "Harish G"
}

data['articles'].insert(0, new_article)

with open('articles.json', 'w') as f:
    json.dump(data, f, indent=2)
```

**Method 2: Automated (Weekly)**
- Runs every Monday at 09:00 UTC
- `generate_weekly_report.py` analyzes past week
- Automatically adds report to `articles.json`

---

### Adding News Shorts

**Automated (Recommended):**
- Runs 2x daily (6 AM, 6 PM IST)
- `update_shorts.py` fetches from 19 RSS feeds
- Automatically updates `content.js`

**Manual:**
1. Edit `content.js`
2. Add to `cyberShorts` or `aiShorts` array
3. Commit and push

---

### Adding a Guide

1. Create HTML file in `guides/` directory
2. Follow existing guide structure:
   - SEO meta tags
   - Structured data (Article, FAQ, Breadcrumb)
   - Breadcrumb navigation
   - Interaction bar
3. Add to `guides/index.html`
4. Commit and push

---

## 7. DEPLOYMENT & GIT

### GitHub Pages Configuration
- **Repository:** Harish761/thehgtech
- **Branch:** main
- **Domain:** thehgtech.com (via CNAME)
- **Auto-deploy:** Yes (on push to main)

### Git Workflow
```bash
# Check status
git status

# Add files
git add <files>

# Commit
git commit -m "📰 Article: Title"  # or 📚 Guide: or 🔧 Fix:

# Pull latest
git pull --rebase

# Push to production
git push
```

### Automated Commits
- **update-shorts.yml:** `🤖 Auto-update: TheHGTech shorts + CVEs - YYYY-MM-DD HH:MM UTC`
- **threat-intel.yml:** `🛡️ Threat Intel update [YYYY-MM-DD HH:MM] UTC`
- **ransomware.yml:** `🔐 Update ransomware data - YYYY-MM-DD HH:MM UTC`
- **weekly-report.yml:** `content: Auto-generated weekly threat report`

---

## 8. COMPLETE FILE INVENTORY

### HTML Pages (7 files)
- `index.html` (183KB, 5059 lines) - Homepage
- `articles.html` (36KB, 963 lines) - Articles listing
- `threat-intel.html` (108KB) - Threat intelligence dashboard
- `ti-snapshot.html` (45KB) - Threat snapshot
- `ti-hero-animation.html` (2KB) - Hero animation
- `admin-articles.html` (31KB) - Admin interface
- `article-barts-health-nhs-breach.html` (24KB) - Article
- `article-coupang-breach-2025.html` (21KB) - Article

### JavaScript Files (25+ files)
- `content.js` (36KB) - News shorts data
- `article-loader.js` (4KB) - Article loading
- `article-modal.js` (1KB) - Article modal
- `cve-display.js` (11KB) - CVE rendering
- `ransomware-display.js` (14KB) - Ransomware display
- `threat-intel.js` (14KB) - Threat intel logic
- `threat-intel-tabs.js` (24KB) - Threat intel tabs
- `threat-analytics.js` (14KB) - Analytics
- `dashboard.js` (13KB) - Dashboard logic
- `dashboard-data.js` (5KB) - Dashboard data
- `vendor-modal.js` (23KB) - Vendor modals
- `archives-content.js` (73KB) - Archived content
- `threat-intel-history.js` (108KB) - Historical data
- `visual-enhancements.js` (9KB) - Visual effects
- `rotating-text.js` (1KB) - Text rotation
- `interaction-bar.js` (4KB) - Like/share buttons
- `copy-to-clipboard.js` (8KB) - Copy functionality
- `update-ioc-counts.js` (1KB) - IOC counter
- `seo-enhancements.js` (2KB) - SEO features
- `advanced-filters.js` (15KB) - Filtering logic

### CSS Files (15+ files)
- `header.css` (5KB) - Header styles
- `light-mode.css` (8KB) - Light mode theme
- `cve-display.css` (20KB) - CVE card styles
- `ransomware-display.css` (8KB) - Ransomware styles
- `threat-intel-tabs.css` (3KB) - Tab styles
- `dashboard.css` (10KB) - Dashboard styles
- `article-modal.css` (2KB) - Modal styles
- `article-links-fix.css` (1KB) - Link fixes
- `interaction-bar.css` (4KB) - Interaction bar
- `advanced-filters.css` (7KB) - Filter styles
- `ransomware-modal.css` (7KB) - Ransomware modal
- `rotating-text.css` (0.6KB) - Text animation
- `visual-enhancements.css` (7KB) - Visual effects
- `ti-hero-animation.css` (18KB) - Hero animation
- `print.css` (3KB) - Print styles

### Data Files (10+ files)
- `articles.json` (387KB, 26 articles)
- `content.js` (36KB) - News shorts
- `cve-data.json` (84KB) - CVE data
- `ransomware-data.json` (56KB) - Ransomware
- `threat-intel-history.json` (81KB) - Historical
- `archives-content.js` (73KB) - Archives
- `ioc-data/*.json` (13 vendor files)

### Python Scripts (10 files)
- `update_shorts.py` (38KB, 998 lines)
- `fetch_threat_intel.py` (66KB, 1684 lines)
- `enrich_cve_dual_source.py` (12KB, 306 lines)
- `enrich_cve_patches.py` (17KB)
- `fetch_ransomware.py` (10KB)
- `generate_weekly_report.py` (7KB)
- `add_interaction_bar_to_articles.py` (3KB)
- `update_guides_interaction_bar.py` (6KB)

### GitHub Actions (4 workflows)
- `.github/workflows/update-shorts.yml` (2KB)
- `.github/workflows/threat-intel.yml` (1KB)
- `.github/workflows/ransomware.yml` (1KB)
- `.github/workflows/weekly-report.yml` (0.8KB)

### Guides (16 HTML files)
- `guides/index.html` (28KB) - Guides listing
- `guides/cisa-kev-tracker.html` (25KB)
- `guides/security-metrics-kpis-dashboard.html` (25KB)
- `guides/phishing-simulation-security-awareness.html` (29KB)
- `guides/network-segmentation-zero-trust.html` (32KB)
- `guides/incident-response-automation.html` (36KB)
- `guides/insider-threat-detection.html` (26KB)
- `guides/container-security.html` (25KB)
- `guides/api-security-best-practices.html` (27KB)
- `guides/siem-log-analysis.html` (24KB)
- `guides/threat-intelligence-soc.html` (26KB)
- `guides/ransomware-response-playbook.html` (28KB)
- `guides/threat-intelligence-feeds-comparison.html` (31KB)
- `guides/openphish-integration.html` (27KB)
- `guides/malware-hash-analysis.html` (17KB)
- `guides/zero-day-detection.html` (16KB)

### Comparisons (4 files)
- `comparisons/index.html` (22KB)
- `comparisons/splunk-vs-elastic-security-vs-logrhythm.html` (61KB)
- `comparisons/COMPARISON_GUIDE.md` (2KB)
- `comparisons/DATA_SUMMARY.md` (3KB)

---

## 📊 AUTOMATION SUMMARY

### Daily Automated Tasks
- **6 AM IST:** Update news shorts (cyberShorts, aiShorts)
- **6 PM IST:** Update news shorts
- **Every 4 hours:** Update threat intelligence (IOCs, CVEs)
- **Midnight UTC:** Update ransomware data
- **Noon UTC:** Update ransomware data

### Weekly Automated Tasks
- **Monday 09:00 UTC:** Generate weekly threat report

### Manual Triggers
- All workflows support manual trigger via GitHub Actions UI

---

## 🔑 ENVIRONMENT VARIABLES

### Required
- `OPENAI_API_KEY` - For GPT-4o formatting (update-shorts, threat-intel)

### Optional
- `NVD_API_KEY` - Improves NVD rate limit (0.6s vs 6s)

---

## 📝 WRITING STYLE GUIDELINES

### Articles
- Professional but accessible
- First-person narrative OK for analysis
- No "our organization" references
- Technical depth with explanations
- Actionable guidance
- Real-world context

### Guides
- Educational and comprehensive
- Step-by-step instructions
- Best practices focus
- Tool-agnostic where possible
- FAQ section at end

### Tool Comparisons
- Research-based only (NO hands-on testing claims)
- Must cite sources (Gartner, G2, vendor docs)
- Transparent methodology
- Balanced pros/cons
- Use case recommendations

---

**Last Updated:** December 10, 2025  
**Verified By:** Direct code inspection  
**Purpose:** Complete factual reference for all site operations
