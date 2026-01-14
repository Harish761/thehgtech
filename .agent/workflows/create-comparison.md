---
description: How to create tool comparison pages for TheHGTech
---

# Tool Comparison Creation Workflow

When creating a tool comparison page for TheHGTech, follow these standards:

## File Location
- Path: `/comparisons/[tool1]-vs-[tool2]-vs-[tool3].html`
- Naming: lowercase with hyphens, tools separated by `-vs-`
- Example: `crowdstrike-vs-microsoft-defender-vs-cortex-xdr.html`

## Purpose
Tool comparisons help security professionals choose the right solutions. They should be:
- **Objective** - Present facts, not opinions
- **Comprehensive** - Cover all major features
- **Updated** - Include version/year info
- **Actionable** - Help readers make decisions

## Required SEO Elements
```html
<!-- Title: Include all tool names -->
<title>[Tool1] vs [Tool2] vs [Tool3] Comparison 2025 | TheHGTech</title>

<!-- Description: Highlight comparison value -->
<meta name="description" content="Comprehensive comparison of [Tool1], [Tool2], and [Tool3]. Features, pricing, pros/cons, and which is best for your organization.">

<!-- Keywords -->
<meta name="keywords" content="[tool1] vs [tool2], [tool1] comparison, [tool2] review, security tools comparison">

<!-- Structured Data: Use comparison/review schema -->

<!-- Structured Data: BreadcrumbList (REQUIRED for SEO) -->
```

## Required Breadcrumb Schema
Every comparison MUST include breadcrumb structured data in `<head>`:
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{
    "@type": "ListItem",
    "position": 1,
    "name": "Home",
    "item": "https://thehgtech.com"
  }, {
    "@type": "ListItem",
    "position": 2,
    "name": "Comparisons",
    "item": "https://thehgtech.com/comparisons/"
  }, {
    "@type": "ListItem",
    "position": 3,
    "name": "[Comparison Title]",
    "item": "https://thehgtech.com/comparisons/[filename].html"
  }]
}
</script>

## Comparison Structure

### Header Section
```html
<div class="comparison-header">
    <h1>[Tool1] vs [Tool2] vs [Tool3]</h1>
    <p class="comparison-subtitle">In-depth security tool comparison for 2025</p>
    <div class="comparison-meta">
        <span><i class="far fa-calendar-alt"></i> Last Updated: [Month Year]</span>
        <span><i class="fas fa-book-open"></i> [X] min read</span>
    </div>
</div>
```

### Quick Comparison Table (At Top)
```html
<div class="quick-comparison">
    <table>
        <thead>
            <tr>
                <th>Feature</th>
                <th>[Tool1]</th>
                <th>[Tool2]</th>
                <th>[Tool3]</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Category</td>
                <td>[Type]</td>
                <td>[Type]</td>
                <td>[Type]</td>
            </tr>
            <tr>
                <td>Pricing</td>
                <td>$$$</td>
                <td>$$</td>
                <td>$$$</td>
            </tr>
            <tr>
                <td>Best For</td>
                <td>[Use case]</td>
                <td>[Use case]</td>
                <td>[Use case]</td>
            </tr>
        </tbody>
    </table>
</div>
```

### Individual Tool Sections
For each tool, include:
```html
<section id="[tool-slug]" class="tool-section">
    <h2>[Tool Name]</h2>
    
    <!-- Overview -->
    <h3>Overview</h3>
    <p>[Description of the tool]</p>
    
    <!-- Key Features -->
    <h3>Key Features</h3>
    <ul>
        <li><strong>[Feature 1]:</strong> Description</li>
        <li><strong>[Feature 2]:</strong> Description</li>
    </ul>
    
    <!-- Pros -->
    <div class="pros-box">
        <h4><i class="fas fa-check-circle"></i> Pros</h4>
        <ul>
            <li>Pro 1</li>
            <li>Pro 2</li>
        </ul>
    </div>
    
    <!-- Cons -->
    <div class="cons-box">
        <h4><i class="fas fa-times-circle"></i> Cons</h4>
        <ul>
            <li>Con 1</li>
            <li>Con 2</li>
        </ul>
    </div>
    
    <!-- Pricing -->
    <h3>Pricing</h3>
    <p>[Pricing info - tiers, per-user, etc.]</p>
    
    <!-- Best For -->
    <h3>Best For</h3>
    <p>[Ideal use cases and organization types]</p>
</section>
```

### Head-to-Head Comparison Section
```html
<section id="comparison" class="comparison-section">
    <h2>Feature-by-Feature Comparison</h2>
    
    <table class="feature-comparison">
        <thead>
            <tr>
                <th>Capability</th>
                <th>[Tool1]</th>
                <th>[Tool2]</th>
                <th>[Tool3]</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>[Feature]</td>
                <td><i class="fas fa-check text-green"></i></td>
                <td><i class="fas fa-check text-green"></i></td>
                <td><i class="fas fa-times text-red"></i></td>
            </tr>
            <!-- More features... -->
        </tbody>
    </table>
</section>
```

### Verdict Section
```html
<section id="verdict" class="verdict-section">
    <h2>Our Verdict</h2>
    
    <div class="verdict-box">
        <h3>Choose [Tool1] if:</h3>
        <ul>
            <li>You need [specific requirement]</li>
        </ul>
    </div>
    
    <div class="verdict-box">
        <h3>Choose [Tool2] if:</h3>
        <ul>
            <li>You need [specific requirement]</li>
        </ul>
    </div>
    
    <div class="verdict-box">
        <h3>Choose [Tool3] if:</h3>
        <ul>
            <li>You need [specific requirement]</li>
        </ul>
    </div>
</section>
```

## CSS Classes for Comparisons
```css
.pros-box {
    background: rgba(16, 185, 129, 0.05);
    border-left: 4px solid var(--accent-green);
    padding: 1.5rem;
    margin: 1rem 0;
    border-radius: 8px;
}

.cons-box {
    background: rgba(255, 76, 76, 0.05);
    border-left: 4px solid var(--accent-red);
    padding: 1.5rem;
    margin: 1rem 0;
    border-radius: 8px;
}

.text-green { color: var(--accent-green); }
.text-red { color: var(--accent-red); }
.text-orange { color: var(--accent-orange); }
```

## Comparison Icons
| Symbol | Meaning | HTML |
|--------|---------|------|
| ✓ | Has feature | `<i class="fas fa-check text-green"></i>` |
| ✗ | Missing | `<i class="fas fa-times text-red"></i>` |
| ◐ | Partial | `<i class="fas fa-circle-half-stroke text-orange"></i>` |
| ★ | Best in class | `<i class="fas fa-star text-cyan"></i>` |


## NO EMOJIS - Use FontAwesome Instead

## Interaction Bar (REQUIRED)
Every comparison MUST include the interaction bar. See `/create-guide` workflow for full HTML.

### Required Includes
```html
<!-- In <head> -->
<link rel="stylesheet" href="/interaction-bar.css?v=20251217">

<!-- Before </body> -->
<script src="/interaction-bar.js?v=20251217"></script>
```

## After Creating Comparison
1. Add to `/comparisons/index.html`
2. Add to `/sitemap.xml`
3. Create OG image in `/images/comparisons/`
4. Commit and push to GitHub

## Common Comparison Categories
- **EDR/XDR**: CrowdStrike, Microsoft Defender, SentinelOne, Cortex XDR
- **SIEM**: Splunk, Elastic Security, Microsoft Sentinel, LogRhythm
- **Vulnerability Scanners**: Nessus, Qualys, Rapid7, OpenVAS
- **SOAR**: Splunk SOAR, Palo Alto XSOAR, IBM QRadar SOAR
- **Cloud Security**: Wiz, Orca, Prisma Cloud, Lacework
