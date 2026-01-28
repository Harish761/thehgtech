# SEO Improvement Plan - TheHGTech

## Current State (Jan 28, 2026)

| Metric | Value | Target |
|--------|-------|--------|
| Indexed Pages | 40 | 100+ |
| Not Indexed | 74 | < 10 |
| Monthly Clicks | ~71 | 500+ |
| CTR | 0.4% | 2-5% |
| Backlinks | 1 | 10+ |

---

## Part 1: Title Tag Improvements (Boost CTR)

### Current vs Improved Titles

| Page | Current Title | Improved Title |
|------|--------------|----------------|
| openphish-integration.html | "OpenPhish Feed Integration Guide [2025] \| TheHGTech" | **"OpenPhish Feed Setup: Complete Integration Guide [Free Templates 2026]"** |
| threat-intel.html | "Threat Intelligence Dashboard \| TheHGTech" | **"52,000+ Live IOCs Dashboard: Free Threat Intelligence [Updated Hourly]"** |
| guides/index.html | "Security Guides & Tutorials \| TheHGTech" | **"37+ Free Cybersecurity Guides: SIEM, NIST, SOC2, LLM Security [2026]"** |
| cve-tracker.html | "CVE Tracker \| TheHGTech" | **"Live CVE Tracker: CISA KEV + EPSS Scores [2026 Exploited Vulnerabilities]"** |
| ransomware-tracker.html | "Ransomware Tracker \| TheHGTech" | **"Ransomware Attack Tracker: Live Victim & Group Monitoring [2026]"** |

### Title Tag Best Practices:
1. **Add numbers**: "37+ Guides", "52,000+ IOCs"
2. **Add year**: [2026] for freshness signal
3. **Add power words**: "Free", "Live", "Complete", "Updated"
4. **Add brackets**: [Free Download], [Updated Hourly]
5. **Keep under 60 characters** for full display in SERP

---

## Part 2: Meta Description Improvements

### Template:
```
[Action verb] [benefit]. [Specific feature/number]. [Call to action]. [Timeframe/freshness].
```

### Examples:

**OpenPhish Integration Guide**
- Current: Basic description
- Improved: "Learn how to integrate OpenPhish threat feeds in 15 minutes. Free Python scripts, API examples, and SIEM templates included. Updated for 2026."

**Threat Intelligence Dashboard**
- Current: Generic description  
- Improved: "Access 52,000+ live IOCs from 9 trusted sources—OpenPhish, Malware Bazaar, CISA KEV. Export to CSV/JSON. Updated every 4 hours. 100% free."

---

## Part 3: Backlink Building Strategy

### Week 1: Low-Hanging Fruit
- [ ] **Reddit** (already 1 link): Post helpful answers linking to guides
  - r/cybersecurity
  - r/netsec  
  - r/SecurityResearch
  - r/blueteamsec
  - r/sysadmin
  
- [ ] **Hacker News**: Submit best guides during peak hours (10am-12pm EST)

### Week 2: Social Amplification
- [ ] **Twitter/X**: Share threads about LLM jailbreaking, link to guides
- [ ] **LinkedIn**: Post articles and carousels → drives traffic

### Week 3: Community & Directories
- [ ] **Product Hunt**: Launch threat intelligence dashboard
- [ ] **AlternativeTo**: List as alternative to paid threat intel
- [ ] **GitHub**: Create repos for tools → link to guides

### Week 4: Content Marketing
- [ ] **Guest Posts**: Reach out to security blogs
- [ ] **HARO (Help A Reporter Out)**: Get quoted in articles
- [ ] **Podcast Outreach**: Offer to discuss LLM security

---

## Part 4: Fix "Discovered – currently not indexed" (70 pages)

### Why Google isn't indexing:

1. **Thin Content**: Pages may not have enough unique value
2. **Low Authority**: Not enough backlinks to prove trustworthiness
3. **Crawl Budget**: Google hasn't bothered to index yet
4. **Duplicate Content**: Similar content on other pages

### Action Plan:

#### Immediate (Today):
1. Go to GSC → Pages → Click "Discovered – currently not indexed"
2. Find the most important pages from that list
3. Use "URL Inspection" tool → Request Indexing (max 10/day)

#### This Week:
1. Add internal links from indexed pages TO un-indexed pages
2. Share un-indexed pages on social media (signals freshness)
3. Ensure each page has unique H1, title, and 800+ words

#### Priority Pages to Index First:
1. /guides/llm-security-prompt-injection.html
2. /guides/owasp-llm-top-10.html
3. /comparisons/ (all)
4. /guides/ransomware-response-playbook.html
5. Newest articles

---

## Part 5: Content Freshness Signals

### Add "Last Updated" to pages:
```html
<meta property="article:modified_time" content="2026-01-28T00:00:00Z">
```

### Update sitemap lastmod dates:
When you edit a page, update the `<lastmod>` in sitemap.xml

### Add visible "Updated" dates on articles:
```html
<p class="last-updated">Last updated: January 28, 2026</p>
```

---

## Part 6: Technical Quick Wins

### 1. Add IndexNow (instant indexing)
```bash
# Generate key at indexnow.org
# Add key file to root directory
# Ping on publish:
curl "https://api.indexnow.org/indexnow?url=https://thehgtech.com/article-new.html&key=YOUR_KEY"
```

### 2. Add more internal links
Each page should have 3-5 internal links to related content.

### 3. Optimize for featured snippets
Add FAQ sections with proper schema to target featured snippets.

---

## Weekly Tracking Checklist

- [ ] Check GSC indexed pages count
- [ ] Request indexing for top 5 un-indexed pages
- [ ] Share 1 guide on Reddit/HN
- [ ] Post 1 LinkedIn carousel
- [ ] Track clicks/impressions in GSC

---

## Expected Timeline

| Timeframe | Expected Result |
|-----------|-----------------|
| Week 1-2 | 50+ indexed pages |
| Month 1 | 5+ backlinks |
| Month 2 | 200+ monthly clicks |
| Month 3 | 500+ monthly clicks |
| Month 6 | 2000+ monthly clicks |

---

*Created: Jan 28, 2026*
