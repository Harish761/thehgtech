# TheHGTech Enterprise Design System
## "Built for Security Professionals"

**Version:** 2.0  
**Date:** January 4, 2026  
**Status:** APPROVED - Ready for Implementation

---

## VISION

> TheHGTech should look like it belongs alongside CrowdStrike, Mandiant, and Recorded Future - not a side project, but a **serious threat intelligence platform**.

---

## THE TRANSFORMATION

### Before → After

| Aspect | Current (Before) | Enterprise (After) |
|--------|------------------|-------------------|
| Colors | Rainbow neon chaos | 3-color discipline |
| Typography | Basic, inconsistent | Premium, hierarchical |
| Spacing | Cramped, varied | Generous, consistent |
| Tone | "Tech blogger" | "Security operations center" |
| Feel | Enthusiast project | Enterprise platform |

---

## PART 1: TYPOGRAPHY SYSTEM

### Font Stack

```css
/* Primary - Headlines & UI */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Monospace - Code, CVE IDs, Hashes */
font-family: 'JetBrains Mono', 'Fira Code', 'SF Mono', monospace;
```

**Why Inter?**
- Used by Vercel, Linear, Notion - modern tech credibility
- Excellent readability at all sizes
- Professional without being corporate-stuffy
- Free from Google Fonts

### Type Scale (Desktop)

| Element | Size | Weight | Letter-spacing | Line-height |
|---------|------|--------|----------------|-------------|
| Display (Hero) | 56px | 700 | -0.02em | 1.1 |
| H1 | 40px | 700 | -0.01em | 1.2 |
| H2 | 32px | 600 | -0.01em | 1.25 |
| H3 | 24px | 600 | 0 | 1.3 |
| H4 | 20px | 600 | 0 | 1.4 |
| Body Large | 18px | 400 | 0 | 1.7 |
| Body | 16px | 400 | 0 | 1.7 |
| Body Small | 14px | 400 | 0 | 1.6 |
| Caption | 12px | 500 | 0.02em | 1.5 |
| Overline | 11px | 600 | 0.1em | 1.4 |

### Type Scale (Mobile)

| Element | Size | Notes |
|---------|------|-------|
| Display | 36px | Reduced for mobile |
| H1 | 28px | |
| H2 | 24px | |
| H3 | 20px | |
| Body | 16px | Keep readable |

### Heading Styles

```css
h1, h2, h3 {
  color: #FFFFFF;
  font-weight: 600;
  letter-spacing: -0.01em;
}

h4, h5, h6 {
  color: #B0B0B0;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 12px;
}
```

### Special Text Treatments

```css
/* CVE IDs, Hashes, Technical Data */
.mono {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.9em;
  background: rgba(255,255,255,0.05);
  padding: 2px 6px;
  border-radius: 4px;
}

/* Section Labels */
.overline {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #FF3D3D;
}

/* Statistics Numbers */
.stat-number {
  font-size: 48px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #FFFFFF;
}
```

---

## PART 2: COLOR SYSTEM

### Tier 1: Brand Colors (Use Liberally)

| Color | Name | Hex | Usage |
|-------|------|-----|-------|
| 🔴 | **Threat Red** | `#FF3D3D` | Primary brand, alerts, emphasis, CTAs |
| ⚫ | **Void Black** | `#0A0A0A` | Background |
| ⚪ | **Signal White** | `#FFFFFF` | Primary text, headings |

### Tier 2: Action Color (Use Selectively)

| Color | Name | Hex | Usage |
|-------|------|-----|-------|
| 🔵 | **Cyber Cyan** | `#00D9FF` | Links ONLY, interactive elements, hover states |

**Rule:** Cyan is ONLY for things you can click.

### Tier 3: Neutral Grays (Structure)

| Color | Name | Hex | Usage |
|-------|------|-----|-------|
| – | Text Secondary | `#B0B0B0` | Body text, descriptions |
| – | Text Muted | `#666666` | Timestamps, metadata |
| – | Border | `rgba(255,255,255,0.1)` | Card borders, dividers |
| – | Surface | `rgba(255,255,255,0.03)` | Card backgrounds |

### Tier 4: Semantic Colors (Contextual Only)

**ONLY used for actual severity/status indicators:**

| Level | Color | Hex | When to Use |
|-------|-------|-----|-------------|
| CRITICAL | 🔴 | `#FF3D3D` | CVE critical, active ransomware |
| HIGH | 🟠 | `#F59E0B` | CVE high severity |
| MEDIUM | 🟡 | `#EAB308` | CVE medium severity |
| LOW | 🟢 | `#22C55E` | CVE low severity |
| INFO | 🔵 | `#3B82F6` | Informational badges |

**Rule:** These colors NEVER appear as decorative text.

---

## TYPOGRAPHY HIERARCHY

### Headings
```css
h1 { color: #FFFFFF; font-weight: 700; }
h2 { color: #FFFFFF; font-weight: 600; }
h3 { color: #FFFFFF; font-weight: 600; }
h4 { color: #B0B0B0; font-weight: 600; }
```

### Body Text
```css
p { color: #B0B0B0; }
.emphasis { color: #FFFFFF; }
.muted { color: #666666; }
```

### Links
```css
a { color: #00D9FF; }
a:hover { color: #00D9FF; text-decoration: underline; }
```

### Never Do This:
❌ Pink headings  
❌ Purple text  
❌ Orange descriptions  
❌ Green paragraph text  
❌ Neon anything except red/cyan  

---

## PAGE-SPECIFIC APPLICATION

### Homepage
- Hero: Red gradient accent
- News cards: White text, gray borders, cyan links
- CTAs: Red buttons

### CVE Tracker
- Header: Red accent
- CVE cards: White title, gray description
- Severity badges: Semantic colors (only place they appear)
- Links: Cyan

### Ransomware Tracker
- Header: Red accent (skulls, threat imagery)
- Group cards: White names, gray stats
- Status: Semantic colors for active/inactive
- Links: Cyan

### Threat Intel
- Header: Red accent
- IOC cards: White indicators, gray descriptions
- Type badges: Subtle gray background, white text
- Links: Cyan

### Guides & Articles
- Header: Red accent
- Body: White headings, gray text
- Code blocks: Subtle gray background
- Links: Cyan
- Callouts: Blue info, red warning, green success

---

## COMPONENT PATTERNS

### Card Pattern
```
┌─────────────────────────────────────┐
│ [Red accent bar on left]            │
│                                      │
│ HEADING (White)                      │
│ Description text (Gray)              │
│                                      │
│ → Link Text (Cyan)                   │
│                                      │
│ Metadata: Source • Date (Muted)      │
└─────────────────────────────────────┘
```

### Button Hierarchy
```
[████ Primary Action ████]  ← Red background, white text
[──── Secondary Action ────]  ← Gray border, white text  
Link Action →                 ← Cyan text only
```

### Badge Patterns
```
CRITICAL  ← Red bg, white text (semantic)
HIGH      ← Orange bg, dark text (semantic)
NEW       ← Red bg, white text (non-semantic)
LIVE      ← Green bg, dark text (status)
```

---

## WHAT TO REMOVE

### Current Colors to Eliminate:

| Color | Current Usage | Remove? |
|-------|---------------|---------|
| Purple (#9d4edd) | AI section, some badges | YES - replace with gray/white |
| Pink (#ec4899) | Zero-day badges | YES - use red instead |
| Teal (#14b8a6) | Various accents | YES - use cyan if link, else gray |
| Orange (#f97316) | Various highlights | Only for HIGH severity |
| Green (#10b981) | Various accents | Only for LOW severity or success |
| Yellow (#eab308) | Various accents | Only for MEDIUM severity |

### Elements to Re-color:

1. **AI Section Header** → Red instead of purple
2. **Related Links** → Cyan (action) with subtle gray background
3. **Category Badges** → Gray background with white text (not colored)
4. **Source Attribution** → Muted gray
5. **Dates/Timestamps** → Muted gray
6. **Stat Numbers** → White (not neon)

---

## IMPLEMENTATION PHASES

### Phase 1: Create Design Tokens (CSS Variables)
```css
:root {
  /* Brand */
  --color-primary: #FF3D3D;
  --color-action: #00D9FF;
  
  /* Neutral */
  --color-bg: #0A0A0A;
  --color-surface: rgba(255,255,255,0.03);
  --color-border: rgba(255,255,255,0.1);
  --color-text-primary: #FFFFFF;
  --color-text-secondary: #B0B0B0;
  --color-text-muted: #666666;
  
  /* Semantic */
  --color-critical: #FF3D3D;
  --color-high: #F59E0B;
  --color-medium: #EAB308;
  --color-low: #22C55E;
  --color-info: #3B82F6;
}
```

### Phase 2: Update Core Styles
- index.css - Global variables
- m-styles.css - Mobile consistency
- All page-specific CSS

### Phase 3: Update Components
- News cards
- CVE cards
- Ransomware cards
- Guide headers
- Article layouts

### Phase 4: Update Accent Colors
- Remove purple from AI section
- Remove random neon from various elements
- Standardize all links to cyan

---

## VISUAL COMPARISON

### Before (Current)
```
┌─────────────────────────────────────┐
│ 🔴 Red heading                       │
│ 🟣 Purple subheading                 │
│ 🟢 Green stat  🔵 Cyan stat          │
│ 🟠 Orange text  🩷 Pink badge        │
│ 🟡 Yellow highlight                  │
└─────────────────────────────────────┘
Result: Chaotic, inconsistent, "gamer"
```

### After (Proposed)
```
┌─────────────────────────────────────┐
│ ⚪ White heading                     │
│ 🔴 Red accent bar                    │
│ ⬜ Gray stat     ⬜ Gray stat        │
│ ⬜ Gray text    [🔵 Link →]          │
│ ⚪ White highlight                   │
└─────────────────────────────────────┘
Result: Clean, professional, enterprise
```

---

## INSPIRATION MAPPING

| Brand | Their Secret | Our Application |
|-------|--------------|-----------------|
| CrowdStrike | Red + minimal | Red as hero, reduce clutter |
| Palo Alto | Clean whites/grays | Gray text hierarchy |
| Mandiant | Dark + orange accent | Dark bg + single accent |
| Recorded Future | Blue + clean | Clean card patterns |

---

## SUCCESS METRICS

After implementation, TheHGTech should:
- [ ] Have no more than 3 prominent colors on any page
- [ ] All links are cyan, no exceptions
- [ ] All emphasis is red or white, no exceptions
- [ ] No random neon colors in body text
- [ ] Category badges are neutral (gray), not rainbow
- [ ] Feels "enterprise security" not "gaming site"

---

## NEXT STEP

When approved, I will:
1. Create the CSS variable system
2. Update all pages systematically
3. Ensure mobile consistency
4. Document in UI components workflow

**Estimated effort:** 4-6 hours for full site
**Risk:** Low (mostly CSS changes)

---

*"In a world of neon chaos, disciplined design wins."*
