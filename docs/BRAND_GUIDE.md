# TheHGTech — Official Brand Identity & Design Guidelines

**Document Version:** 1.0.0  
**Status:** Approved Master Specification  
**Project Marker:** `HG-BRAND-IDENTITY-V1`  
**Reference Source:** `media_1792337002809_ef3759f6.png`  
**Asset Location:** `assets/brand/`  

---

## 1. Brand Overview & Visual Philosophy

**TheHGTech** is an authoritative cybersecurity platform delivering real-time threat intelligence, CVE vulnerability tracking, cyber incident research, and security engineering guides.

The brand identity conveys:
- **Precision & Security**: Hard geometric 30° isometric facets forming a hexagonal shield and interlocking monolithic cube.
- **Urgency & Intelligence**: High-energy signal red paired with pure white and deep space charcoal.
- **Modernity & Authority**: Bold, uncompromised geometric sans-serif typography with strict modular alignment.

---

## 2. The HG Monogram Geometry & Mathematical Construction

The HG monogram is an interlocking isometric structure combining the letters **H** and **G** into a regular 30° hexagonal cube.

```
                   (41, 0) [Top Apex]
                     /\
                    /  \
      (0, 24) _____/____\_____ (81, 10) [Red Diag Top]
             |    | |  | |    |
             | H1 | |H2| | G  |
      (0, 50) \   | |  | |   / (81, 50) [Equator]
               \  | |  | |  /
                \_|_|__|_|_/ (81, 75)
                  \ |  | /
                   \|  |/
                    \  /
                     \/
                  (41, 98) [Bottom Apex]
```

### Geometric Principles
1. **Isometric Projection Angle**: All diagonal cuts and bevels strictly follow standard 30° isometric inclination:
   $$\frac{\Delta y}{\Delta x} \approx \tan(30^\circ) \approx 0.577$$
   In discrete raster coordinate space, this resolves to $\frac{7}{13}$ or $\frac{14}{25}$.
2. **Modular Grid**:
   - Total Bounding Box: $82\text{px} \times 98\text{px}$ (Aspect ratio $1 : 1.195$).
   - Base Column Width: $13\text{px}$ per pillar.
   - Inter-Pillar Spacing: $13\text{px}$ modular gap.
   - Symmetry Spine: Vertical axis at $x = 41\text{px}$ ($50\%$ width).
3. **Facet Architecture**:
   - **Left Facets (3D Shadow)**: Every vertical white and red pillar possesses a 2px-wide left shadow bevel.
   - **Front Faces**: Lit front faces receive subtle vertical/isometric linear gradients.
   - **Counter of G**: The red G incorporates a 30° angled notch from $(68, 62)$ down-left to $(56, 69)$, with a vertical right stem from $x=68$ to $x=81$.

---

## 3. Official Color Palette

| Token Name | HEX | RGB | HSL | Semantic Role |
| :--- | :--- | :--- | :--- | :--- |
| **Brand Red (Primary)** | `#DA2228` | `rgb(218, 34, 40)` | `hsl(358°, 73%, 49%)` | Primary brand accent, active states, "HG" wordmark |
| **Brand Red (Bright)** | `#E5242A` | `rgb(229, 36, 42)` | `hsl(358°, 79%, 52%)` | Monogram front face gradient highlight, interactive hover |
| **Brand Red (Shadow/Facet)** | `#7A1418` | `rgb(122, 20, 24)` | `hsl(358°, 72%, 28%)` | 30° isometric top bevels on red crossbar and G |
| **Pure White** | `#FFFFFF` | `rgb(255, 255, 255)` | `hsl(0°, 0%, 100%)` | Front face of H, "The" & "Tech" wordmark on dark |
| **Pillar Highlight (Top)** | `#FFFFFF` | `rgb(255, 255, 255)` | `hsl(0°, 0%, 100%)` | Top stop of white pillar gradient |
| **Pillar Shadow (Facet)** | `#9E9EA4` | `rgb(158, 158, 164)` | `hsl(240°, 3%, 63%)` | 2px left shadow facet on white pillars |
| **Canvas Dark (Master)** | `#0A0A0C` | `rgb(10, 10, 12)` | `hsl(240°, 9%, 4%)` | Primary background canvas in master identity |
| **App Squircle Dark** | `#0E0E12` | `rgb(14, 14, 18)` | `hsl(240°, 13%, 6%)` | Dark app icon squircle fill |
| **Favicon Dark Fill** | `#111116` | `rgb(17, 17, 22)` | `hsl(240°, 13%, 8%)` | Dark favicon background |
| **Pillar Light (Dark Mode Text)**| `#0F172A` | `rgb(15, 23, 42)` | `hsl(222°, 47%, 11%)` | H pillars and wordmark on light backgrounds |
| **Tagline Muted Gray** | `#94A3B8` | `rgb(148, 163, 184)` | `hsl(215°, 20%, 65%)` | Sub-branding tagline and metadata text |

---

## 4. Typography Specifications

### Primary Wordmark: `TheHGTech`
- **Spelling & Case:** Exact camelCase `TheHGTech` (Capital **T**, lowercase **he**, Capital **HG**, Capital **T**, lowercase **ech**).
- **Color Partition:**
  - `The`: Pure White `#FFFFFF` (or Slate Dark `#0F172A` on light).
  - `HG`: Brand Red `#DA2228`.
  - `Tech`: Pure White `#FFFFFF` (or Slate Dark `#0F172A` on light).
- **Typeface Family:** Clean, bold, geometric sans-serif:
  `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
- **Weight:** `800` (ExtraBold) or `700` (Bold).
- **Tracking / Letter Spacing:** `-0.025em` (tight, cohesive modern kerning).

### Official Tagline: `CYBERSECURITY INSIGHTS | TOOLS | INTELLIGENCE`
- **Case:** All-caps uppercase.
- **Punctuation:** Thin pipe separators (`|`) spaced with single space on each side.
- **Typeface Family:** `'Inter', -apple-system, BlinkMacSystemFont, sans-serif`
- **Weight:** `700` (Bold).
- **Tracking / Letter Spacing:** `+0.16em` (wide tracked uppercase).
- **Color:** `#94A3B8` (Dark backgrounds) / `#64748B` (Light backgrounds).

---

## 5. Logo Lockups & Clear Space Rules

### A. Primary Horizontal Logo (`logo-horizontal-dark.svg`, `logo-horizontal-light.svg`)
- **Proportions:** Monogram ($82 \times 99$) on left, thin $1.5\text{px}$ vertical divider line, followed by wordmark `TheHGTech`.
- **Divider Specs:** Height $= 78\text{px}$, centered vertically with the monogram and wordmark cap height.
- **Inter-Element Spacing:**
  - Monogram right edge to Divider: $25\text{px}$ ($0.3\times$ monogram width).
  - Divider to Wordmark left edge: $25\text{px}$ ($0.3\times$ monogram width).
- **Clear Space:** Minimum clear space around the horizontal lockup is $0.5\times$ the monogram width ($40\text{px}$ in vector units) on all sides.

### B. Stacked / Vertical Logo (`logo-stacked-dark.svg`, `logo-stacked-light.svg`)
- **Proportions:** Monogram centered horizontally at the top, wordmark `TheHGTech` centered beneath, and tagline centered below.
- **Vertical Spacing:**
  - Monogram bottom to Wordmark baseline: $48\text{px}$.
  - Wordmark baseline to Tagline baseline: $32\text{px}$.
- **Clear Space:** Minimum clear space of $0.5\times$ monogram width on all 4 sides.

### C. Minimum Sizing Rules
| Asset | Minimum Size | Recommended Usage |
| :--- | :--- | :--- |
| Primary Horizontal Logo | $140\text{px}$ width | Desktop header, report covers, footer |
| Horizontal Logo (Mobile) | $110\text{px}$ width | Mobile navigation bar |
| Stacked Logo | $160\text{px}$ width | Hero sections, splash screens, documentation |
| Standalone HG Monogram | $24\text{px}$ height | Micro-icons, app headers, profile avatars |
| Flat 2D Monogram | $16\text{px}$ height | Micro-indicators, print, monochrome stamps |
| Favicon | $16\times16\text{px}$ | Browser tabs, bookmarks bar |

---

## 6. Approved vs. Prohibited Usage

### Approved Usages
- Use `logo-horizontal-dark.svg` on all dark canvas areas (`#09090B` to `#18181B`).
- Use `logo-horizontal-light.svg` on crisp light surfaces (`#FFFFFF` to `#F8FAFC`).
- Use `app-icon-dark.svg` for dark mode PWA / Apple Touch icons.
- Use `app-icon-red.svg` for branded promotional graphics, social media cards, and secondary iOS icon options.
- Use `favicon.ico` (multi-resolution container) for root browser tab recognition.

### Prohibited Usages (Brand Violations)
- **DO NOT** alter the 30° isometric slant angle of any facet.
- **DO NOT** change the spelling or capitalization to `thehgtech`, `THEHGTECH`, or `The Hg Tech`.
- **DO NOT** color the wordmark entirely white or entirely red (the "The" and "Tech" must contrast with "HG").
- **DO NOT** remove the vertical divider in horizontal lockups where the monogram and wordmark appear together.
- **DO NOT** apply drop shadows, glowing neons, or blurred halos around the monogram.
- **DO NOT** squish, stretch, or alter the $82:99$ aspect ratio of the monogram.
