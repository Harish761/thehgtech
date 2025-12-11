# Mobile UI/UX Fresh Start - Implementation Plan

## Overview
Complete mobile redesign inspired by Apple News+ for TheHGTech website.

## Target Specifications
- **Screen Width**: 375px - 428px (iPhone range, sweet spot for modern phones)
- **Breakpoint**: max-width: 768px (mobile), min-width: 769px (desktop)
- **Design Language**: Apple News+ inspired - clean, card-based, gesture-friendly

## Pages to Optimize
1. `index.html` - Homepage (News, Hero, Sections)
2. `articles.html` - Article listing & reading
3. `threat-intel.html` - Threat Intelligence dashboard
4. `cve-tracker.html` - CVE list with expand
5. `ransomware-tracker.html` - Ransomware list with expand
6. `guides/` - Guide pages (14+ files)
7. `comparisons/` - Comparison pages

## Files to DELETE (Old Mobile System)
- `mobile.css`
- `mobile.js`
- `mobile-typography.css`
- `homepage-mobile.css`
- `news-cards.css`
- `news-cards.js`
- `news-cards-data.js`

## New Files to CREATE
1. `m-core.css` - Core mobile styles, variables, utilities
2. `m-components.css` - Reusable components (cards, buttons, nav)
3. `m-layout.css` - Layout patterns (bottom nav, header, containers)
4. `m-pages.css` - Page-specific overrides
5. `m-app.js` - Core mobile JavaScript (gestures, nav, theme)

## Component Architecture

### 1. Bottom Navigation Bar (Persistent)
```
┌─────────────────────────────────────┐
│  🏠    📰    🛡️    ⚠️    ☰  │
│ Home  News  Intel  CVE  More │
└─────────────────────────────────────┘
```
- Fixed at bottom, 64px height
- 5 items: Home, News, Intel, CVE, More (hamburger for rest)
- Active state with gradient highlight
- Safe area padding for notched phones

### 2. Mobile Header
```
┌─────────────────────────────────────┐
│ TheHGTech              🌙  🔍  │
└─────────────────────────────────────┘
```
- Fixed at top, 56px height
- Logo left, Theme toggle + Search right
- Backdrop blur effect

### 3. News Cards (Swipeable)
```
┌─────────────────────────────────────┐
│  [Category Badge]                   │
│                                     │
│  Article Title Here                 │
│  Brief excerpt text...              │
│                                     │
│  ← Swipe for more →                │
│  [Share] [Save] [Read]              │
└─────────────────────────────────────┘
```
- Horizontal swipe stack
- Touch gestures for navigation
- Action buttons at bottom

### 4. CVE/Ransomware List (Expandable)
```
┌─────────────────────────────────────┐
│ CVE-2024-XXXXX      CRITICAL   ▼   │
├─────────────────────────────────────┤
│ (Expanded details when tapped)      │
│ Description, Vendor, Score, etc.    │
└─────────────────────────────────────┘
```
- Compact list view
- Tap to expand details
- Color-coded severity badges

### 5. Article Tiles
```
┌────────────┐ ┌────────────┐
│ [Image]    │ │ [Image]    │
│ Title      │ │ Title      │
│ Date       │ │ Date       │
│ [Read →]   │ │ [Read →]   │
└────────────┘ └────────────┘
```
- 2-column grid
- Thumbnail + title + CTA
- Smooth transitions

## Theme System
- CSS Variables for colors
- `data-theme="dark"` / `data-theme="light"` on `<html>`
- Stored in localStorage
- Smooth color transitions

## Gesture Support
- Swipe left/right for news cards
- Pull-down refresh animation (visual only)
- Scroll snap for sections
- Touch feedback on all interactive elements

## Implementation Order
1. Phase 1: Core CSS Framework (m-core.css)
2. Phase 2: Bottom Nav + Header (m-layout.css, m-app.js)
3. Phase 3: Homepage (index.html modifications)
4. Phase 4: News Cards System
5. Phase 5: CVE/Ransomware Lists
6. Phase 6: Articles Page
7. Phase 7: Other Pages (Threat Intel, Guides, Comparisons)
8. Phase 8: Testing & Polish

## Notes
- All changes are mobile-only (inside @media queries or .mobile-only class)
- Desktop remains completely untouched
- Content/data remains untouched - only presentation changes
