# TheHGTech - VERIFIED Data Flow & File Loading

**Last Verified:** December 10, 2025  
**Method:** Direct code inspection of HTML and JavaScript files

---

## ✅ CONFIRMED DATA SOURCES

### Homepage (`index.html`)

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

**Data Files Fetched:**
1. **`cve-display.js`** → fetches `cve-data.json`
   ```javascript
   const response = await fetch('cve-data.json?t=' + Date.now());
   ```

2. **`article-loader.js`** → fetches `articles.json`
   ```javascript
   const response = await fetch('articles.json?v=20251206-2352');
   ```

3. **`ransomware-display.js`** → fetches `ransomware-data.json`
   ```javascript
   const response = await fetch('ransomware-data.json');
   ```

4. **`content.js`** → Contains inline data:
   - `websiteContent.cyberShorts` (news items)
   - `websiteContent.aiShorts` (AI news)
   - `websiteContent.articleCards` (deprecated, but still checked by article-loader.js)

---

### Articles Page (`articles.html`)

**JavaScript Files Loaded:**
```html
<script src="interaction-bar.js?v=20251207-0041" defer></script>
<script src="article-modal.js"></script>
```

**Inline JavaScript in articles.html:**
```javascript
// Line 477: Direct fetch of articles.json
const response = await fetch('articles.json');
const data = await response.json();
allArticles = data.articles;
```

**How It Works:**
1. Page loads, fetches `articles.json`
2. If URL has `?id=article-id` parameter:
   - Finds article by ID
   - Renders full article view (replaces page content)
3. If no ID parameter:
   - Shows article grid/list
   - Each card links to `articles.html?id=article-id`

**CRITICAL:** Articles page does NOT use `article-loader.js` - it has its own inline fetch logic!

---

### Threat Intelligence Page (`threat-intel.html`)

**Data Files Fetched:**
1. **`dashboard-data.js`** → fetches IOC data:
   ```javascript
   fetch(`ioc-data/${vendor}.json`)  // For each vendor
   fetch('threat-intel-history.json')
   ```

2. **`threat-analytics.js`** → fetches:
   ```javascript
   fetch('threat-intel-history.json')
   ```

3. **`threat-intel-tabs.js`** → fetches:
   ```javascript
   fetch('ransomware-data.json')
   ```

---

## 📊 DATA FILE PURPOSES

### `articles.json` (387KB, 26 articles)
**Used by:**
- `articles.html` (inline fetch)
- `article-loader.js` (for homepage, but homepage doesn't display articles grid)

**Structure:**
```json
{
  "articles": [
    {
      "id": "article-slug",
      "title": "Title",
      "date": "Month Day, Year",
      "category": "Category",
      "excerpt": "Summary",
      "content": "<div class=\"article-content\">FULL HTML</div>",
      "tags": ["tag1", "tag2"],
      "author": "Author Name"
    }
  ]
}
```

**Loading Method:**
- Direct fetch in `articles.html` line 477
- Article content displayed when URL has `?id=` parameter

---

### `content.js` (36KB)
**Used by:** Homepage (`index.html`)

**Structure:**
```javascript
const websiteContent = {
  "cyberShorts": [
    {
      "date": "Nov 23 2024",
      "title": "Title",
      "content": "Content...",
      "source": "Source Name",
      "sourceUrl": "https://..."
    }
  ],
  "aiShorts": [...],
  "articleCards": []  // DEPRECATED - empty array
}
```

**Purpose:**
- News shorts displayed on homepage
- Updated by `update_shorts.py` automation script

---

### `cve-data.json` (84KB)
**Used by:** `cve-display.js`

**Fetched from:** Homepage CVE section

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

**Updated by:** `enrich_cve_dual_source.py`

---

### `ransomware-data.json` (56KB)
**Used by:**
- `ransomware-display.js` (homepage)
- `threat-intel-tabs.js` (threat intel page)
- `dashboard.js`

**Updated by:** `fetch_ransomware.py`

---

### `threat-intel-history.json` (81KB)
**Used by:**
- `dashboard-data.js`
- `threat-analytics.js`

**Purpose:** Historical threat intelligence data for trend analysis

---

### `ioc-data/*.json` (13 files)
**Used by:** `dashboard-data.js`

**Vendors:**
- openphish.json
- malware-bazaar.json
- spamhaus-drop.json
- cins-army.json
- blocklist-de.json
- phishing-database.json
- urlhaus.json
- threatfox.json
- feodo-tracker.json
- ssl-blacklist.json
- etc.

**Purpose:** Live IOC (Indicators of Compromise) data

---

## 🔄 ARTICLE WORKFLOW (VERIFIED)

### Adding a New Article

**Step 1: Create Article Content**
```html
<div class="article-content">
    <div class="alert-box">
        <strong>Alert:</strong> Message
    </div>
    <h2>Section</h2>
    <p>Content...</p>
</div>
```

**Step 2: Add to articles.json**
```python
import json

with open('articles.json', 'r') as f:
    data = json.load(f)

new_article = {
    "id": "article-slug",
    "title": "Article Title",
    "date": "December 10, 2025",
    "category": "Cybersecurity",
    "excerpt": "Brief summary...",
    "content": "<div class=\"article-content\">...</div>",
    "tags": ["tag1", "tag2"],
    "author": "Harish G"
}

data['articles'].insert(0, new_article)

with open('articles.json', 'w') as f:
    json.dump(data, f, indent=2)
```

**Step 3: Commit and Push**
```bash
git add articles.json
git commit -m "📰 New Article: Title"
git push
```

**Result:**
- Article appears on `articles.html` (list view)
- Accessible at `articles.html?id=article-slug`
- Content rendered from `content` field

---

## ❌ COMMON MISCONCEPTIONS (CORRECTED)

### WRONG: "article-loader.js loads articles on articles.html"
**CORRECT:** `articles.html` has its own inline fetch logic (line 477). `article-loader.js` is loaded on homepage but doesn't display articles there.

### WRONG: "Articles need separate HTML files"
**CORRECT:** Articles are stored entirely in `articles.json` with HTML in the `content` field. No separate files needed.

### WRONG: "content.js articleCards is used for articles"
**CORRECT:** `articleCards` is deprecated (empty array). Articles come from `articles.json` only.

### WRONG: "article-modal.js displays articles"
**CORRECT:** `articles.html` renders articles inline (replaces page content). `article-modal.js` is loaded but the inline rendering takes precedence.

---

## 🎯 KEY TAKEAWAYS

1. **Articles:** `articles.json` → fetched by `articles.html` inline code
2. **News Shorts:** `content.js` → loaded on homepage
3. **CVEs:** `cve-data.json` → fetched by `cve-display.js`
4. **Ransomware:** `ransomware-data.json` → fetched by `ransomware-display.js`
5. **IOCs:** `ioc-data/*.json` → fetched by `dashboard-data.js`

**All verified by direct code inspection on December 10, 2025.**
