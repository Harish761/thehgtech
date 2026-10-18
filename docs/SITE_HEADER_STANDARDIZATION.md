# Site Header Standardization: Architecture & Reuse Guide

**Project Marker**: `HG-THREAT-INTEL-V1`  
**Reference Standard**: CVE Tracker (`cve-tracker.html`)  
**Target Implementation**: Threat Intelligence (`threat-intel.html`)  
**Canonical Component**: `components/site-header.html`  
**Sync / Validation Tool**: `scripts/sync_site_header.py`  
**Date**: 2026-10-18  

---

## 1. Architectural Context & Problem Statement

TheHGTech is deployed statically via GitHub Pages and served via Cloudflare CDN. In pure static hosting without a server-side include (SSI) or full-site templating framework (e.g. Next.js, Hugo, 11ty):
1. **Client-Side Header Injection is Contraindicated**:
   - Injecting the site header via JavaScript (e.g., `fetch('header.html')` or custom Web Components) induces:
     - **Cumulative Layout Shift (CLS)**: The page content jumps down once the 52px navigation finishes downloading and rendering.
     - **Flash of Unstyled Content (FOUC)**: Users on slower networks see an unnavigable page until JS executes.
     - **SEO Crawl Degradation**: Search engines (Googlebot, Bingbot) and social scrapers receive raw HTML without primary navigation breadcrumbs and links.
     - **Accessibility Failure**: Screen readers encountering delayed DOM mutations lose initial focus landmarks (`role="banner"`, skip links).
2. **Manual Copy-Paste is Error-Prone**:
   - Previous page creations resulted in drifted headers, mismatched dropdown items (e.g. missing Harish G profile or GRC Assessment tool), inconsistent theme toggles, and varying mobile menu drawer logic.

---

## 2. The Recommended Maintainable Solution

To reconcile **0ms Cumulative Layout Shift + 100% SEO Accessibility** with **Zero-Drift Maintainability**, we implement a **Canonical Component + Idempotent Sync Architecture**:

```
┌──────────────────────────────────────┐
│     components/site-header.html      │  <-- Single Source of Truth
│ (Mobile Header, Overlays, Desktop)   │
└──────────────────┬───────────────────┘
                   │
         [scripts/sync_site_header.py]
                   │
      ┌────────────┴────────────┐
      ▼                         ▼
threat-intel.html         cve-tracker.html   (and future tools/pages)
<!-- SITE-HEADER-START -->
[Canonical Inlined HTML]
<!-- SITE-HEADER-END -->
```

### Key Properties:
- **Zero FOUC & Zero CLS**: The header HTML is statically pre-inlined in the document, rendering instantly on initial paint.
- **Single Source of Truth**: `components/site-header.html` contains the exact, approved navigation structure, branding, accessibility attributes, and dropdown links.
- **Automated Validation**: `python3 scripts/sync_site_header.py --check [files...]` can run in GitHub Actions to verify that pages have not drifted.
- **Safe, Phased Adoption**: Does not require modifying 300+ historical static articles at once. Standardizes the high-traffic flagship tools first (`threat-intel.html`, `cve-tracker.html`) and documents the workflow for all future pages.

---

## 3. Canonical Header Component Structure

The canonical component in `components/site-header.html` includes:

1. **Mobile Header (`header.m-header.m-only`)**:
   - High-contrast SVG/PNG logo (`logo-dark.png` / `logo-light.png`).
   - Official brand gradient on logo text (`linear-gradient(135deg, #FF3D3D, #ff8c8c)`).
   - Fast-action buttons: Mobile Theme Toggle (`#m-theme-toggle-top`), Search trigger (`data-action="command-palette"`), Hamburger menu button (`#m-hamburger-btn`).
2. **Fullscreen Mobile Menu Overlay (`div.m-menu-overlay.m-only`)**:
   - Categorized sections: Intelligence, Resources, Tools, Settings.
   - Live theme toggle with active label synchronization.
3. **Search Overlay (`div.m-search-overlay.m-only`)**:
   - Instant search input wired to global command palette.
4. **Desktop Header (`header.header[role="banner"]`)**:
   - Semantic `<nav class="nav nav-modern" role="navigation" aria-label="Primary Navigation">`.
   - **Intelligence Dropdown**: Threat Intelligence (`LIVE`), CVE Tracker, Ransomware Tracker, Hacker Chatter (`NEW`).
   - **Resources Dropdown**: Security Guides (`40+`), n8n Workflows (`NEW`), Tool Comparisons, GRC Assessment (`NEW`), Articles.
   - **Tools Dropdown**: ISO 27001 GRC Tool.
   - **About Dropdown**: About TheHGTech, Harish G (`/about.html#harish`), Contact.
   - **Social Links**: X/Twitter and LinkedIn with verified accessible SVGs.
   - **Search & Theme Controls**: Desktop search button (`Cmd+K`) and tactile dual-state theme toggle switch.

---

## 4. How Future Pages & Articles Should Reuse the Header

### For New Interactive Tools or Landing Pages:
1. Create the page structure.
2. In the `<head>`, include the core header stylesheets:
   ```html
   <link rel="stylesheet" href="header.css">
   <link rel="stylesheet" href="header-dropdown.min.css?v=1">
   <link rel="stylesheet" href="m-core.min.css?v=4.2">
   <link rel="stylesheet" href="m-layout.min.css?v=3.4">
   <link rel="stylesheet" href="m-components.min.css?v=3.0">
   <link rel="stylesheet" href="theme-toggle.css">
   <link rel="stylesheet" href="mobile-nav.css">
   ```
3. Run the synchronization tool:
   ```bash
   python3 scripts/sync_site_header.py path/to/new-page.html
   ```
4. At the bottom of `<body>`, include the standard navigation scripts:
   ```html
   <script>
       const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
       const nav = document.querySelector('.nav');
       if (mobileMenuBtn && nav) {
           mobileMenuBtn.addEventListener('click', () => {
               nav.classList.toggle('active');
           });
       }
   </script>
   <script src="m-app.min.js?v=20260528_coffee" defer></script>
   <script src="theme-toggle.js" defer></script>
   <script src="command-palette.js" defer></script>
   <script src="mobile-nav.js" defer></script>
   ```

### For New Articles (Publishing Pipeline):
- When cloning an existing article per `docs/ARTICLE_CREATION_GUIDE.md`, verify header integrity:
  ```bash
  python3 scripts/sync_site_header.py --check articles/new-article.html
  ```
  If drift is detected, automatically synchronize it:
  ```bash
  python3 scripts/sync_site_header.py articles/new-article.html
  ```

---

## 5. Verification & Testing

Verify that the header in `threat-intel.html` passes validation:
```bash
python3 scripts/sync_site_header.py --check threat-intel.html
# Output: ✓ Header in threat-intel.html matches canonical component
```
