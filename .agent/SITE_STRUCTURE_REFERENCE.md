# TheHGTech Website - Complete Structure Reference

## Overview
TheHGTech is a cybersecurity and AI newsletter website providing real-time threat intelligence, CVE tracking, security guides, and professional articles.

## Core Pages

### 1. Homepage (`index.html`)
- **URL**: https://thehgtech.com
- **Sections**:
  - Hero section with rotating text
  - Cyber Shorts (news feed from `content.js`)
  - AI Insights (AI news from `content.js`)
  - Featured Insights
  - Top CVEs (from `cve-data.json`)
  - Latest Ransomware Incidents (from `ransomware-data.json`)
- **Key Files**:
  - `content.js` - Contains cyberShorts, aiShorts, articleCards
  - `cve-display.js` - CVE rendering
  - `ransomware-display.js` - Ransomware rendering

### 2. Articles Page (`articles.html`)
- **URL**: https://thehgtech.com/articles.html
- **Functionality**:
  - Lists all articles from `articles.json`
  - Search, filter by category, sort options
  - Click article → loads via `?id=article-id` parameter
  - Article content loaded from `content` field in `articles.json`
- **Key Files**:
  - `articles.json` - **MAIN ARTICLE SOURCE** (387KB, 26 articles)
  - `article-loader.js` - Loads and displays articles
  - `article-modal.js` - Modal functionality

### 3. Threat Intelligence (`threat-intel.html`)
- **URL**: https://thehgtech.com/threat-intel.html
- **Features**: Live threat intelligence data, IOC tracking
- **Data Sources**: `ioc-data/` directory

### 4. Guides (`guides/index.html`)
- **URL**: https://thehgtech.com/guides/
- **16 Security Guides**:
  - CISA KEV Tracker
  - Security Metrics & KPIs Dashboard
  - Phishing Simulation & Security Awareness
  - Network Segmentation & Zero Trust
  - Incident Response Automation
  - And 11 more...
- **Structure**: Each guide is a standalone HTML file

### 5. Tool Comparisons (`comparisons/`)
- Security tool comparison pages

## Critical Data Files

### articles.json (MOST IMPORTANT FOR ARTICLES)
```json
{
  "articles": [
    {
      "id": "unique-id",
      "title": "Article Title",
      "date": "December 9, 2025",
      "category": "Category Name",
      "excerpt": "Brief summary",
      "content": "<article>FULL HTML CONTENT HERE</article>",
      "tags": ["tag1", "tag2"],
      "author": "Author Name",
      "image": "optional-image-path.png"
    }
  ]
}
```
**CRITICAL**: 
- Articles MUST have `content` field with full HTML
- Article loads via `articles.html?id=article-id`
- DO NOT create separate HTML files in `/articles/` folder
- The `content` field contains the entire article HTML

### content.js
```javascript
const websiteContent = {
  "cyberShorts": [...],  // Homepage news items
  "aiShorts": [...],     // AI news items
  "articleCards": [...], // DEPRECATED - not used anymore
  "featureInsights": [...]
}
```

### cve-data.json
- CVE vulnerability data
- Updated by `enrich_cve_dual_source.py`

### ransomware-data.json
- Ransomware incident data
- Updated by `fetch_ransomware.py`

## Python Scripts (Automation)

1. **fetch_threat_intel.py** - Fetches threat intelligence data
2. **enrich_cve_dual_source.py** - Enriches CVE data
3. **update_shorts.py** - Updates news shorts
4. **generate_weekly_report.py** - Generates weekly threat reports
5. **add_interaction_bar_to_articles.py** - Adds interaction features

## Styling & Assets

### CSS Files
- `header.css` - Navigation header
- `light-mode.css` - Light mode styling
- `cve-display.css` - CVE card styling
- `article-modal.css` - Article modal styling
- `interaction-bar.css` - Like/share buttons

### JavaScript Files
- `article-loader.js` - **LOADS ARTICLES FROM articles.json**
- `cve-display.js` - CVE rendering
- `threat-intel.js` - Threat intelligence
- `copy-to-clipboard.js` - Copy functionality

## Workflow for Adding New Content

### Adding a New Article (CORRECT WAY)
1. Create article content (HTML body only, no wrapper)
2. Add entry to `articles.json`:
   ```json
   {
     "id": "article-slug",
     "title": "Article Title",
     "date": "Month Day, Year",
     "category": "Category",
     "excerpt": "Summary",
     "content": "<div class=\"article-content\">FULL HTML HERE</div>",
     "tags": ["tag1", "tag2"],
     "author": "Author Name"
   }
   ```
3. Commit and push `articles.json`
4. Article appears at `articles.html?id=article-slug`

### Adding News Shorts
1. Edit `content.js`
2. Add to `cyberShorts` or `aiShorts` array
3. Commit and push

### Adding a Guide
1. Create HTML file in `guides/` directory
2. Follow existing guide structure
3. Update `guides/index.html` to list the new guide

## Common Mistakes to Avoid

❌ **DON'T**: Create standalone HTML files in `/articles/` folder and expect them to show up
✅ **DO**: Add article content to `articles.json` with full HTML in `content` field

❌ **DON'T**: Add articles to `content.js` `articleCards` array
✅ **DO**: Add articles to `articles.json`

❌ **DON'T**: Use "our organization" or personal references in articles
✅ **DO**: Use generic language ("organizations", "environments", etc.)

❌ **DON'T**: Create complex file structures without checking existing patterns
✅ **DO**: Follow the established patterns in the repository

## Git Workflow
- Main branch: `main`
- All production code on `main`
- GitHub Pages serves from `main` branch
- Live site: https://thehgtech.com

## Key Learnings from Recent Work

1. **Articles System**: Uses `articles.json` exclusively, not separate HTML files
2. **Article Loading**: Via `article-loader.js` using `?id=` parameter
3. **Content Field**: Must contain complete HTML article body
4. **No Personal References**: Keep content generic and professional
5. **Image Placeholders**: Use Font Awesome icons or add `image` field to article

## Directory Structure
```
thehgtech/
├── index.html              # Homepage
├── articles.html           # Articles listing page
├── articles.json           # MAIN ARTICLE DATA SOURCE
├── content.js              # News shorts data
├── cve-data.json          # CVE data
├── ransomware-data.json   # Ransomware data
├── guides/                # Security guides
│   ├── index.html         # Guides listing
│   └── *.html             # Individual guides
├── comparisons/           # Tool comparisons
├── ioc-data/              # IOC threat data
├── images/                # Image assets
├── *.css                  # Styling files
├── *.js                   # JavaScript files
└── *.py                   # Python automation scripts
```

## Next Steps for Efficient Work

1. **Always check `articles.json` structure** before adding articles
2. **Use browser to verify** changes on live site
3. **Follow existing patterns** - don't reinvent the wheel
4. **Test locally** before pushing to production
5. **Keep content generic** - no personal/organizational references

---
**Last Updated**: December 10, 2025
**Purpose**: Reference guide for efficient website maintenance and content addition
