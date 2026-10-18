# TheHGTech — Brand Asset Map & Production Inventory

**Project Marker:** `HG-BRAND-IDENTITY-V1`  
**Base Directory:** `assets/brand/`  
**Master Target:** TheHGTech Production Site (`thehgtech.com`)  

---

## 1. Master Asset Inventory

### A. Vector Assets (`assets/brand/svg/`)

| Filename | Dimensions | Description & Purpose | Background |
| :--- | :--- | :--- | :--- |
| `hg-symbol.svg` | `82x99` (Scalable) | Master standalone HG monogram with 3D bevels & gradients | Transparent |
| `hg-symbol-flat.svg` | `82x99` (Scalable) | 2D flat vector monogram for ultra-small sizes & monochrome use | Transparent |
| `hg-symbol-light.svg` | `82x99` (Scalable) | Light surface standalone monogram with dark slate pillars | Transparent |
| `logo-horizontal-dark.svg` | `380x99` (Scalable) | Primary horizontal logo: Monogram + Divider + `TheHGTech` wordmark | Transparent |
| `logo-horizontal-light.svg` | `380x99` (Scalable) | Light surface horizontal logo: Dark pillars + Divider + Slate wordmark | Transparent |
| `logo-stacked-dark.svg` | `300x196` (Scalable) | Stacked logo with centered monogram, wordmark, and official tagline | Transparent |
| `logo-stacked-light.svg` | `300x196` (Scalable) | Light surface stacked logo with tagline | Transparent |
| `app-icon-dark.svg` | `512x512` | Dark squircle (`#0E0E12`) with 3D monogram inside | Solid Dark |
| `app-icon-red.svg` | `512x512` | Red gradient squircle with monochrome white/silver monogram | Solid Red |
| `favicon-dark.svg` | `128x128` | Dark squircle (`#111116`) with high-contrast monogram | Solid Dark |
| `favicon-light.svg` | `128x128` | White squircle (`#FFFFFF`) with dark/red monogram | Solid White |

---

### B. Favicon & Root Web Assets (`assets/brand/favicon/`)

| Filename | Resolution | Format | Purpose |
| :--- | :--- | :--- | :--- |
| `favicon.ico` | `16x16`, `32x32`, `48x48` | Multi-resolution ICO | Canonical browser icon for root placement |
| `favicon-light.ico` | `16x16`, `32x32`, `48x48` | Multi-resolution ICO | Alternative light-themed ICO container |
| `favicon-16x16.png` | `16x16` px | PNG (32-bit RGBA) | Standard legacy browser tabs |
| `favicon-32x32.png` | `32x32` px | PNG (32-bit RGBA) | Retina browser tabs and desktop shortcuts |
| `favicon-48x48.png` | `48x48` px | PNG (32-bit RGBA) | High-DPI bookmarks and Windows desktop shortcuts |
| `favicon-light-16x16.png`| `16x16` px | PNG (32-bit RGBA) | Light squircle 16px variant |
| `favicon-light-32x32.png`| `32x32` px | PNG (32-bit RGBA) | Light squircle 32px variant |
| `favicon-light-48x48.png`| `48x48` px | PNG (32-bit RGBA) | Light squircle 48px variant |

---

### C. Mobile & App Raster Assets (`assets/brand/png/`)

| Filename | Resolution | Format | Target Consumer |
| :--- | :--- | :--- | :--- |
| `apple-touch-icon.png` | `180x180` px | PNG (32-bit RGBA) | iOS Safari home screen bookmark (Dark default) |
| `apple-touch-icon-red.png`| `180x180` px | PNG (32-bit RGBA) | iOS Safari home screen bookmark (Red alternate) |
| `app-icon-dark-192x192.png`| `192x192` px | PNG (32-bit RGBA) | Android PWA web app manifest (`manifest.json`) |
| `app-icon-dark-512x512.png`| `512x512` px | PNG (32-bit RGBA) | Android PWA splash screen & high-res store icon |
| `app-icon-red-192x192.png` | `192x192` px | PNG (32-bit RGBA) | PWA alternate red app manifest icon |
| `app-icon-red-512x512.png` | `512x512` px | PNG (32-bit RGBA) | PWA alternate red splash icon |

---

### D. Production Logo Raster Exports (`assets/brand/png/`)

| Filename | Resolution | Density | Purpose |
| :--- | :--- | :--- | :--- |
| `logo-horizontal-dark.png` | `380x99` px | 1x | Legacy non-SVG dark fallback |
| `logo-horizontal-dark@2x.png`| `760x198` px | 2x | Retina dark fallback |
| `logo-horizontal-dark@3x.png`| `1140x297` px | 3x | High-density print / marketing dark fallback |
| `logo-horizontal-light.png` | `380x99` px | 1x | Legacy non-SVG light fallback |
| `logo-horizontal-light@2x.png`| `760x198` px | 2x | Retina light fallback |
| `logo-horizontal-light@3x.png`| `1140x297` px | 3x | High-density print / marketing light fallback |
| `logo-stacked-dark.png` | `300x196` px | 1x | Stacked card / hero raster |
| `logo-stacked-dark@2x.png` | `600x392` px | 2x | Retina stacked card / hero raster |
| `logo-stacked-dark@3x.png` | `900x588` px | 3x | High-res stacked card / hero raster |
| `logo-stacked-light.png` | `300x196` px | 1x | Light stacked card / hero raster |
| `logo-stacked-light@2x.png` | `600x392` px | 2x | Retina light stacked card / hero raster |
| `logo-stacked-light@3x.png` | `900x588` px | 3x | High-res light stacked card / hero raster |

---

### E. Standalone Symbol PNG Exports (`assets/brand/png/`)

| Filename | Resolution | Purpose |
| :--- | :--- | :--- |
| `hg-symbol-16.png` | `16x19` px | Micro-indicator / status badge |
| `hg-symbol-32.png` | `32x39` px | Small navigation icon / table symbol |
| `hg-symbol-48.png` | `48x58` px | Toolbar symbol / small avatar |
| `hg-symbol-64.png` | `64x77` px | Standard avatar / modal icon |
| `hg-symbol-128.png` | `128x155` px | Card header icon / profile image |
| `hg-symbol-256.png` | `256x309` px | Feature hero badge / slide asset |
| `hg-symbol-512.png` | `512x618` px | High-res display asset / wallpaper |

---

## 2. Website Mapping & Replacement Plan

### Existing Placeholder Assets vs. New Master Replacements

| Current Location | Existing Placeholder | New Master Brand Asset | Action Required |
| :--- | :--- | :--- | :--- |
| Root `/favicon.ico` | `favicon.ico` (2.3 KB) | `assets/brand/favicon/favicon.ico` | Replace with multi-res package |
| Root `/favicon-16x16.png` | `favicon-16x16.png` (1.4 KB) | `assets/brand/favicon/favicon-16x16.png` | Replace with new dark squircle 16px |
| Root `/favicon-32x32.png` | `favicon-32x32.png` (2.3 KB) | `assets/brand/favicon/favicon-32x32.png` | Replace with new dark squircle 32px |
| Root `/apple-touch-icon.png` | `apple-touch-icon.png` | `assets/brand/png/apple-touch-icon.png` | Replace with new 180x180 squircle |
| Root `/logo-dark.png` | `logo-dark.png` (3.3 KB) | `assets/brand/svg/logo-horizontal-dark.svg` | Update header component link |
| Root `/logo-light.png` | `logo-light.png` (3.9 KB) | `assets/brand/svg/logo-horizontal-light.svg`| Update header component link |
| Root `/manifest.json` | `manifest.json` | Update icon entries to point to `/assets/brand/png/app-icon-dark-*.png` | Update JSON metadata |

---

## 3. Recommended HTML `<head>` Integration Snippet

When applying the new identity to HTML `<head>` tags across the site, use this standardized block:

```html
<!-- Canonical Favicon & Brand Icons -->
<link rel="icon" type="image/x-icon" href="/favicon.ico">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="48x48" href="/assets/brand/favicon/favicon-48x48.png">
<link rel="icon" type="image/svg+xml" href="/assets/brand/svg/hg-symbol.svg">

<!-- Apple Touch Icon -->
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">

<!-- Web App Manifest -->
<link rel="manifest" href="/manifest.json">
<meta name="theme-color" content="#0A0A0C">
```

### Manifest Configuration (`manifest.json`)
```json
{
  "name": "TheHGTech",
  "short_name": "TheHGTech",
  "description": "Cybersecurity Insights, Tools & Threat Intelligence",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#0A0A0C",
  "theme_color": "#0A0A0C",
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

## 4. Header Sizing & Zero-CLS Guardrails

To eliminate Cumulative Layout Shift (CLS), all logo images in navigation bars must declare explicit intrinsic dimensions and aspect ratios in CSS:

```css
/* Desktop Header Logo */
.logo a {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  min-height: 36px;
}

.logo-brand-svg {
  height: 36px;
  width: auto;
  aspect-ratio: 380 / 99;
  display: block;
}

/* Mobile Header Logo */
.m-header__logo a {
  display: flex;
  align-items: center;
  min-height: 28px;
}

.m-logo-brand-svg {
  height: 28px;
  width: auto;
  aspect-ratio: 380 / 99;
  display: block;
}
```
