# TheHGTech — Master Brand Integration & Phased Rollout Plan

**Document Version:** 1.0.0  
**Status:** DRAFT (Awaiting User Review & Approval — DO NOT EXECUTE YET)  
**Project Marker:** `HG-BRAND-IDENTITY-V1`  
**Target Repository:** `https://github.com/Harish761/thehgtech`  
**Working Worktree:** `/Volumes/Data-Personal/Webpage/thehgtech-branding`  
**Branch:** `feature/brand-identity-v1`  

---

## 1. Executive Summary

This document defines the zero-risk, phased rollout plan for integrating the newly approved brand identity across TheHGTech website. 

The strategy ensures:
1. **Zero Downtime & Zero Regression**: Non-destructive integration using backward-compatible aliases and canonical includes.
2. **Zero Cumulative Layout Shift (CLS)**: Explicit aspect ratio and intrinsic dimension constraints on all navigation headers.
3. **Dual Theme Continuity**: Seamless, automatic switching between dark and light themes without flash-of-unstyled-logo (FOUL).
4. **Site-Wide PWA & Favicon Refresh**: Instant high-resolution bookmark, tab, and shortcut updates across all 568 site pages.

> [!IMPORTANT]
> **This plan is informational only.** No live website files or headers have been modified. Execution requires explicit user approval.

---

## 2. Architecture & File Placement Strategy

All master brand assets are permanently housed under the versioned directory `assets/brand/`:

```
thehgtech/
├── assets/
│   └── brand/
│       ├── svg/                     # Master scalable vectors
│       │   ├── hg-symbol.svg        # 3D monogram (Dark)
│       │   ├── hg-symbol-flat.svg   # 2D flat monogram (Micro)
│       │   ├── hg-symbol-light.svg  # 3D monogram (Light)
│       │   ├── logo-horizontal-dark.svg
│       │   ├── logo-horizontal-light.svg
│       │   ├── logo-stacked-dark.svg
│       │   ├── logo-stacked-light.svg
│       │   ├── app-icon-dark.svg
│       │   ├── app-icon-red.svg
│       │   ├── favicon-dark.svg
│       │   └── favicon-light.svg
│       ├── png/                     # High-DPI raster exports (1x, 2x, 3x)
│       │   ├── apple-touch-icon.png (180x180)
│       │   ├── app-icon-dark-192x192.png
│       │   ├── app-icon-dark-512x512.png
│       │   ├── logo-horizontal-dark.png
│       │   └── ... (all sizes)
│       ├── favicon/                 # Browser icon packages
│       │   ├── favicon.ico          # Multi-resolution (16/32/48)
│       │   ├── favicon-16x16.png
│       │   ├── favicon-32x32.png
│       │   └── favicon-48x48.png
│       └── preview.html             # Interactive visual test sheet
```

---

## 3. Phased Implementation Roadmap

### Phase 1: Global Root Asset Upgrades (Zero Risk, Immediate Impact)
Without changing any HTML files, copy the newly packaged high-DPI assets to the site root:
- Copy `assets/brand/favicon/favicon.ico` $\to$ `/favicon.ico`
- Copy `assets/brand/favicon/favicon-16x16.png` $\to$ `/favicon-16x16.png`
- Copy `assets/brand/favicon/favicon-32x32.png` $\to$ `/favicon-32x32.png`
- Copy `assets/brand/png/apple-touch-icon.png` $\to$ `/apple-touch-icon.png`
- Copy `assets/brand/png/logo-horizontal-dark.png` $\to$ `/logo-dark.png` (Compatibility fallback)
- Copy `assets/brand/png/logo-horizontal-light.png` $\to$ `/logo-light.png` (Compatibility fallback)

**Result:** All 335 pages with existing favicon tags and all 446 pages with legacy logo tags instantly receive the approved brand identity with zero code modifications.

---

### Phase 2: Canonical Header Component Modernization
Update `components/site-header.html` to leverage the crisp, scalable vector SVG lockups:

#### Desktop Header Replacement:
```html
<!-- BEFORE -->
<div class="logo">
    <a href="/index.html" style="text-decoration: none; display: flex; align-items: center; gap: 0.75rem;">
        <img src="/logo-dark.png" alt="TheHGTech Logo" class="logo-img logo-dark">
        <img src="/logo-light.png" alt="TheHGTech Logo" class="logo-img logo-light">
        <span class="logo-text">TheHGTech</span>
    </a>
</div>

<!-- AFTER -->
<div class="logo">
    <a href="/index.html" aria-label="TheHGTech Home" style="text-decoration: none; display: flex; align-items: center; min-height: 36px;">
        <img src="/assets/brand/svg/logo-horizontal-dark.svg" alt="TheHGTech" class="logo-brand-svg logo-dark" width="138" height="36">
        <img src="/assets/brand/svg/logo-horizontal-light.svg" alt="TheHGTech" class="logo-brand-svg logo-light" width="138" height="36" style="display: none;">
    </a>
</div>
```

#### Mobile Header Replacement:
```html
<!-- BEFORE -->
<div class="m-header__logo">
    <a href="/index.html" style="display: flex; align-items: center; gap: 0.75rem; text-decoration: none;">
        <img src="/logo-dark.png" alt="TheHGTech" class="m-logo-img logo-dark" style="height: 28px; width: auto; margin: 0;">
        <img src="/logo-light.png" alt="TheHGTech" class="m-logo-img logo-light" style="height: 28px; width: auto; margin: 0; display: none;">
        <span style="font-size: 1.2rem; font-weight: 700; ...">TheHGTech</span>
    </a>
</div>

<!-- AFTER -->
<div class="m-header__logo">
    <a href="/index.html" aria-label="TheHGTech Home" style="display: flex; align-items: center; min-height: 28px; text-decoration: none;">
        <img src="/assets/brand/svg/logo-horizontal-dark.svg" alt="TheHGTech" class="m-logo-brand-svg logo-dark" width="107" height="28" style="height: 28px; width: auto; margin: 0;">
        <img src="/assets/brand/svg/logo-horizontal-light.svg" alt="TheHGTech" class="m-logo-brand-svg logo-light" width="107" height="28" style="height: 28px; width: auto; margin: 0; display: none;">
    </a>
</div>
```

---

### Phase 3: CSS Sizing & Layout Stability (Zero CLS)
Add explicit CSS rules in `header.css` / `m-components.css` / `theme-toggle.css`:

```css
/* Zero-CLS Intrinsic Dimensions for Brand Logo */
.logo-brand-svg {
    height: 36px;
    width: auto;
    aspect-ratio: 380 / 99;
    display: block;
    transition: opacity 0.2s ease;
}

.m-logo-brand-svg {
    height: 28px;
    width: auto;
    aspect-ratio: 380 / 99;
    display: block;
    transition: opacity 0.2s ease;
}

/* Light Theme Switching */
[data-theme="light"] .logo-dark,
body.light-theme .logo-dark {
    display: none !important;
}

[data-theme="light"] .logo-light,
body.light-theme .logo-light {
    display: block !important;
}
```

---

### Phase 4: Automated Propagation via `sync_site_header.py`
Run the verified synchronization script to propagate the new header to all targeted pages:

```bash
# Check status before sync
python3 scripts/sync_site_header.py --check threat-intel.html

# Sync canonical header
python3 scripts/sync_site_header.py threat-intel.html cve-tracker.html index.html
```

---

### Phase 5: PWA Web App Manifest Update
Update `manifest.json` to link the new 192x192 and 512x512 app icons:
```json
{
  "name": "TheHGTech",
  "short_name": "TheHGTech",
  "icons": [
    {
      "src": "/assets/brand/png/app-icon-dark-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/assets/brand/png/app-icon-dark-512x512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ]
}
```

---

## 4. Verification Protocol

### Pre-Deployment Checks
- [ ] Validate all SVG syntax and well-formed XML:
  `python3 -c "import xml.etree.ElementTree as ET; [ET.parse(f) for f in glob.glob('assets/brand/svg/*.svg')]"`
- [ ] Verify HTTP 200 responses on all asset URLs via local test server.
- [ ] Measure Cumulative Layout Shift (CLS) on desktop ($1440\times900$) and mobile ($375\times812$)—target $\le 0.001$.
- [ ] Verify light/dark theme toggling does not produce layout jumping or missing graphics.
- [ ] Confirm `scripts/sync_site_header.py --check` passes cleanly.

### Post-Deployment Checks
- [ ] Verify Chrome, Safari, Firefox, and Edge render the multi-res `favicon.ico` in tab chrome.
- [ ] Verify mobile Safari renders the dark squircle `apple-touch-icon.png` when added to Home Screen.
- [ ] Inspect Lighthouse Performance and Accessibility audits (target 100 on Best Practices and SEO).

---

## 5. Rollback Plan

If any visual or operational defect is detected:
1. Revert `components/site-header.html` to git HEAD.
2. Re-run `python3 scripts/sync_site_header.py` across updated pages.
3. Git checkout legacy root files:
   `git checkout HEAD -- favicon.ico favicon-16x16.png favicon-32x32.png logo-dark.png logo-light.png`
