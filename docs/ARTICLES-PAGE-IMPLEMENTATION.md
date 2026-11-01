# TheHGTech Research & Publishing Architecture Implementation

## Overview

TheHGTech article and publishing architecture follows a clear 3-tier user discovery and reading workflow:

```
[ Root Homepage: https://thehgtech.com/ ]
   │
   ▼ (Click "Articles" in header)
[ Articles Editorial Portal: /articles.html ]
   │   - Featured story with dynamic 10-story rail hover switcher
   │   - "Go beyond the headlines." call to action
   │   - Research standards & methodology charter
   │   - Fully styled canonical 5-column footer
   │
   ├─► (Click "Explore All Articles" or "Browse All Articles (197+)")
   │     ▼
   │   [ Full Research Library / Article Archive: /article-list.html ]
   │      - Live statistics (197 analyses, 73 research domains, latest date)
   │      - Instant client-side search across all articles
   │      - Dynamic topic & category filter pills
   │      - Responsive article grid with static SEO fallbacks (/articles/page/*/)
   │
   └─► (Click "Read Full Analysis" or any story card)
         ▼
       [ Monograph Technical Monograph: /articles/{slug}.html ]
          - 3-zone reading workspace (Sticky TOC + 70ch prose + author credentials)
          - Syntax-highlighted code blocks with copy buttons
          - Stackable responsive tables (.table-wrapper.ap-stackable)
          - Interaction bar (.interaction-bar) with Daily Intel newsletter & GraphComment
```

---

## Technical Specifications

| Asset | URL / Path | Description |
|---|---|---|
| Root Homepage | `/index.html` (`/`) | Live Cyber Threat Intelligence Platform, SOC Analyst Tools, live IOCs, and ransomware tracking. |
| Articles Portal | `/articles.html` | The primary entry point for articles, featuring the dynamic 10-story research rail, featured hero, and editorial CTA. |
| Research Library | `/article-list.html` | Complete searchable archive of all 197+ articles, category filters, and static pagination. |
| Monograph System | `/css/article-editorial.css`<br>`/js/article-editorial.js` | 3-zone monograph grid, responsive code blocks, and reading progress. |
| Canonical Footer | `/css/footer.css`<br>`/footer.css` | Universal 5-column responsive footer supporting Obsidian Dark (`#0B0D13`) and Daylight Paper (`#F8FAFC`). |
| Central Datastore | `ioc-data/articles.json` | Master JSON datastore containing metadata for all published articles. |
| Pagination Engine | `scripts/generate_pagination.py` | Automatically builds static HTML fallback pages (`articles/page/*/index.html`) and syncs `article-list.html`. |

---

## Verification & Quality Assurance

- **Zero Layout Shifts**: Tested across 1440px desktop and 375px mobile viewports.
- **Dynamic Switcher**: Interactive hovering over rail items smoothly updates the hero backdrop, title, and deck.
- **Canonical Footer**: All bullet lists removed, grid responsive columns verified, and high contrast maintained across both dark and light modes.
- **Automated Verification**: End-to-end user journey test executed via headless Chrome CDP with 100% assertions passing.
