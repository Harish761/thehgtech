# MOBILE APP-STYLE REDESIGN - MASTER PLAN
**Target:** App-like mobile experience across all pages
**Timeline:** 22 hours total
**Started:** December 11, 2025

---

## DESIGN PRINCIPLES

### Core Requirements:
- **No emojis** - Only Font Awesome icons matching site aesthetic
- **Typography optimized** - Maximum content consumption on screen
- **Balanced performance** - Smooth animations without heavy load
- **Target width:** 390px (middle sweet spot)
- **Dark/Light toggle** - Visible on all pages (not in hamburger)
- **No broken functionality** - Double-check everything works

### User Flow Priority:
1. CS/AI News (highest)
2. CVE Tracker
3. Articles
4. Threat Intelligence (optimized but secondary)

---

## NAVIGATION STRUCTURE

### Bottom Navigation (5 items):
```
┌─────────────────────────────────────────┐
│  Home    News    Articles    Intel    CVEs  │
└─────────────────────────────────────────┘
```

**Changes from current:**
- Replace "Guides" with "Articles"
- Keep: Home, News (CS/AI), Intel, CVEs
- Removed: Guides, Tool Comparisons (accessible via hamburger)

---

## PAGE-BY-PAGE IMPLEMENTATION

### 1. HOMEPAGE (4 hours)
**Status:** 50% complete

**Completed:**
- ✅ Bottom navigation (5 items, perfect spacing)
- ✅ Mobile header with auto-hide
- ✅ Hamburger menu
- ✅ Compact hero (50% height)
- ✅ Cookie banner positioning

**TODO:**
- [ ] Dark/Light mode toggle (top-right, all pages)
- [ ] Swipeable featured news section
- [ ] Optimized stats cards
- [ ] Typography optimization
- [ ] Remove all emojis, use Font Awesome

---

### 2. NEWS PAGE (6 hours)
**Status:** Not started
**Priority:** HIGHEST

**Design:** Full swipeable cards (Tinder-style)

**Features:**
- [ ] One news card at a time (full screen)
- [ ] Swipe left/right to navigate
- [ ] Full news content visible on card
- [ ] Source, date, category badges
- [ ] Share button
- [ ] Save for later
- [ ] Progress dots (1 of 15)
- [ ] Separate tabs: Cybersecurity | AI/ML
- [ ] Pull-to-refresh

**Card Structure:**
```
┌─────────────────────────┐
│ Category Badge  Time    │
│                         │
│ [News Image]            │
│                         │
│ Full Headline           │
│                         │
│ Complete news content   │
│ (scrollable within card)│
│                         │
│ Source: TechCrunch      │
│ [Share] [Save]          │
│                         │
│ ← Swipe to navigate →   │
│ • • ○ • •  (3 of 15)    │
└─────────────────────────┘
```

---

### 3. ARTICLES PAGE (5 hours)
**Status:** Not started
**Priority:** HIGH

**Design:** Swipeable title/excerpt cards → Full article page

**Features:**
- [ ] Swipeable cards (title + excerpt only)
- [ ] "Read Full Article" button
- [ ] Opens new page with rich article content
- [ ] Back button to return to cards
- [ ] Category filters (chips)
- [ ] Search functionality

**Card Structure (Preview):**
```
┌─────────────────────────┐
│ Category    Date        │
│                         │
│ Article Title Here      │
│                         │
│ Brief excerpt of the    │
│ article content to give │
│ users a preview...      │
│                         │
│ [Read Full Article →]   │
└─────────────────────────┘
```

**Full Article Page:**
```
┌─────────────────────────┐
│ ← Back    Share  Save   │
├─────────────────────────┤
│ Full Article Title      │
│                         │
│ By Author | Date        │
│                         │
│ [Featured Image]        │
│                         │
│ Full rich content with  │
│ proper formatting,      │
│ images, code blocks,    │
│ etc. (scrollable)       │
│                         │
└─────────────────────────┘
```

---

### 4. CVE TRACKER (6 hours)
**Status:** Not started
**Priority:** HIGH

**Design:** Card-based, horizontal scroll, tap to expand

**Features:**
- [ ] Card layout (one CVE per card)
- [ ] Horizontal scroll (swipe left/right)
- [ ] Tap card to expand full details
- [ ] Filter chips (Critical, High, Medium, Low)
- [ ] Search bar (sticky)
- [ ] Severity color coding
- [ ] Vendor remediation links
- [ ] Share CVE

**Card Structure (Collapsed):**
```
┌─────────────────────────┐
│ CRITICAL  CVE-2024-1234 │
│                         │
│ Apache HTTP Server      │
│ Remote Code Execution   │
│                         │
│ CVSS: 9.8  Published: 2d│
│                         │
│ [Tap to expand]         │
└─────────────────────────┘
```

**Card Structure (Expanded):**
```
┌─────────────────────────┐
│ ← Back    Share         │
├─────────────────────────┤
│ CRITICAL                │
│ CVE-2024-1234           │
│                         │
│ Apache HTTP Server      │
│ Remote Code Execution   │
│                         │
│ CVSS Score: 9.8         │
│ Published: 2 days ago   │
│ Due Date: Jan 15, 2025  │
│                         │
│ Description:            │
│ Full vulnerability desc │
│                         │
│ Affected Versions:      │
│ 2.4.0 - 2.4.58          │
│                         │
│ [Vendor Fix] [CISA]     │
└─────────────────────────┘
```

---

### 5. RANSOMWARE TRACKER (4 hours)
**Status:** Not started
**Priority:** MEDIUM

**Design:** Card-based timeline, swipe to navigate

**Features:**
- [ ] Card per ransomware attack
- [ ] Horizontal scroll
- [ ] Tap to expand details
- [ ] Filter by ransomware gang
- [ ] Timeline view
- [ ] Victim organization
- [ ] Date discovered

---

### 6. THREAT INTEL DASHBOARD (4 hours)
**Status:** Not started
**Priority:** MEDIUM (Pro users, desktop-first)

**Design:** Tabbed interface, simplified for mobile

**Features:**
- [ ] Tabs: IOCs | Analytics | Trends
- [ ] Simplified charts (mobile-friendly)
- [ ] Vendor cards (swipeable)
- [ ] Search IOCs
- [ ] Export functionality
- [ ] Summary cards

**Tab Structure:**
```
┌─────────────────────────┐
│ IOCs | Analytics | Trends│
├─────────────────────────┤
│                         │
│ [Content for active tab]│
│                         │
└─────────────────────────┘
```

---

### 7. GUIDES PAGE (2 hours)
**Status:** Not started
**Priority:** LOW (accessible via hamburger)

**Design:** List view with expand/collapse

**Features:**
- [ ] Collapsible sections
- [ ] Search guides
- [ ] Category filters
- [ ] Progress indicators

---

### 8. TOOL COMPARISONS (2 hours)
**Status:** Not started
**Priority:** LOW (accessible via hamburger)

**Design:** Tabbed comparison cards

**Features:**
- [ ] Swipe between tools
- [ ] Comparison table (mobile-optimized)
- [ ] Feature highlights

---

## GLOBAL COMPONENTS

### Dark/Light Mode Toggle
**Location:** Top-right on all pages
**Design:**
```
☀️ / 🌙 toggle switch
```

**Implementation:**
- [ ] Add to mobile header (all pages)
- [ ] Persist preference (localStorage)
- [ ] Smooth transition
- [ ] Update all page colors

### Typography Optimization
**Goals:** Maximum content consumption

**Font Sizes (Mobile):**
- H1: 1.75rem (28px)
- H2: 1.5rem (24px)
- H3: 1.25rem (20px)
- Body: 0.95rem (15.2px)
- Small: 0.85rem (13.6px)

**Line Heights:**
- Headlines: 1.2
- Body: 1.5
- Compact: 1.3

**Font Weight:**
- Headlines: 700
- Subheads: 600
- Body: 400
- Labels: 500

---

## IMPLEMENTATION PHASES

### Phase 1: Foundation (CURRENT)
- [x] Bottom navigation
- [x] Mobile header
- [x] Hamburger menu
- [ ] Dark/Light toggle
- [ ] Typography system
- [ ] Remove all emojis

### Phase 2: News & Articles (PRIORITY)
- [ ] Swipeable news cards
- [ ] Article preview cards
- [ ] Full article pages
- [ ] Category filters

### Phase 3: CVE & Ransomware
- [ ] CVE card system
- [ ] Ransomware timeline
- [ ] Filters and search
- [ ] Expand/collapse

### Phase 4: Threat Intel
- [ ] Tabbed interface
- [ ] Simplified charts
- [ ] IOC search
- [ ] Vendor cards

### Phase 5: Polish & Testing
- [ ] Animation tuning
- [ ] Performance optimization
- [ ] Cross-device testing
- [ ] Accessibility audit

---

## TESTING CHECKLIST

### Devices:
- [ ] iPhone SE (375px)
- [ ] iPhone 14 Pro (393px) - PRIMARY
- [ ] Samsung Galaxy S23 (412px)
- [ ] iPad Mini (768px)

### Browsers:
- [ ] Safari iOS
- [ ] Chrome Android
- [ ] Firefox Mobile

### Functionality:
- [ ] All swipe gestures work
- [ ] All taps register (48px min)
- [ ] Dark/Light mode on all pages
- [ ] Navigation works
- [ ] Content loads correctly
- [ ] No broken links
- [ ] Images load (lazy)
- [ ] Animations smooth (60fps)

---

## PERFORMANCE TARGETS

- Load time: < 2 seconds
- First Contentful Paint: < 1 second
- Time to Interactive: < 2 seconds
- Lighthouse Score: 90+
- No layout shifts
- Smooth 60fps animations

---

## NEXT STEPS

1. Update bottom navigation (replace Guides with Articles)
2. Add Dark/Light toggle to all pages
3. Remove all emojis, replace with Font Awesome
4. Optimize typography
5. Implement swipeable news cards
6. Create article preview/full page system
7. Build CVE card system
8. Continue with remaining pages

---

**READY TO START IMPLEMENTATION!**
