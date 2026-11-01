# TheHGTech Research Library & Editorial Architecture Implementation

## Overview

TheHGTech publishing architecture has been upgraded to a unified, production-grade cybersecurity research library and editorial monograph reading system.

### Key Architectural Changes

1. **Homepage (`index.html`)**:
   - Modernized editorial hero with live threat research spotlight.
   - Glass rail featuring the top 10 recent research investigations.
   - Direct CTAs into the Research Library (`/articles.html`) and Security Guides (`/guides/`).
   - Clean, light/dark responsive theme switching (Obsidian Dark `#090B10` & Daylight Paper Light `#F8FAFC`).

2. **Research Library (`articles.html`)**:
   - Central discovery hub for 128+ technical monographs, investigations, and threat analyses.
   - Live research statistics dynamically calculated from `ioc-data/articles.json` (total monographs, research topics, latest publication date).
   - Fast client-side faceted filtering: instant keyword search, topic tag selection, and sort ordering (newest, oldest, title).
   - Pre-rendered static HTML fallback grid for search crawlers (Googlebot, Bingbot) and JavaScript-disabled browsers.
   - Direct deep-linking to dedicated standalone articles in `articles/{slug}.html`.

3. **Unified Monograph Format (`articles/*.html`)**:
   - Monograph layout governed by `/css/article-editorial.css` and `/js/article-editorial.js`.
   - **3-Zone Monograph Grid**:
     - *Left Rail*: Sticky Table of Contents auto-mapped to article sections (`#sec-1`, `#sec-2`), with live scroll tracking and a dynamic 3-stop font size scaler (`A-`, `A`, `A+`).
     - *Center Editorial Stream*: High-contrast typographic hierarchy (Crimson Pro & JetBrains Mono), responsive `@container` stacked technical tables (`.table-wrapper.ap-stackable`), styled code blocks with one-click copy buttons, MITRE ATT&CK callouts, and key takeaway boxes.
     - *Right Rail*: Researcher credentials card and reading progress indicator.
   - **Discussion & Newsletter (`.interaction-bar`)**:
     - Embedded Brevo newsletter subscription ("The Daily Intel").
     - GraphComment integration for threat research peer discussions.
     - Social sharing (Twitter, LinkedIn, Copy Link) and clean print formatting.
   - **Related Intelligence Feed**:
     - Automatically suggests 3 related monographs based on shared category and keyword tags from `ioc-data/articles.json`.

---

## Technical Specifications

| Asset | Location | Description |
|---|---|---|
| Central Dataset | `ioc-data/articles.json` | Master JSON datastore containing metadata for all 128+ articles. |
| Editorial Stylesheet | `css/article-editorial.css` | 2,224-line modern CSS system implementing the monograph layout, responsive tables, light/dark themes, and print rules. |
| Editorial Script | `js/article-editorial.js` | TOC tracking, font sizing, code block copy, and related article injection. |
| Interaction Bar | `interaction-bar.min.js` | Newsletter subscription wiring, GraphComment initialization, and social share handling. |
| Pagination Engine | `scripts/generate_pagination.py` | Python script that regenerates static SEO fallback pages (`articles/page/*/index.html`) and updates feed indices. |
| Migration Script | `scripts/migrate_all_articles.py` | Automated migration pipeline that converted all 128 legacy articles into the unified monograph format. |

---

## Verification & Quality Assurance

- **Zero Layout Shifts**: Tested across 1440px desktop, 768px tablet, and 375px mobile viewports.
- **Theme Fidelity**: Checked contrast ratios in both Obsidian Dark and Daylight Paper modes according to WCAG AA guidelines.
- **Email & Newsletter Security**: Brevo API endpoints and validation error containers (`#hg-success`, `#hg-error`, `#hg-field-err`) strictly verified in headless browsers with zero runtime exceptions.
