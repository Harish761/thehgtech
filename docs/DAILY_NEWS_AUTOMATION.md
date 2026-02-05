# 🤖 Daily News Automation System

## Overview

TheHGTech now has an automated news generation system that publishes 1-2 security articles daily.

## How It Works

```
┌─────────────────────────────────────────────────────────────┐
│                    Daily News Pipeline                       │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  1. FETCH      2. FILTER     3. RANK       4. GENERATE      │
│  ┌──────┐      ┌───────┐     ┌───────┐     ┌──────────┐     │
│  │ RSS  │ ───► │Recent │ ───►│Priority│ ───►│  HTML    │     │
│  │Feeds │      │48 hrs │     │+ CVEs  │     │ Article  │     │
│  └──────┘      └───────┘     └───────┘     └──────────┘     │
│                                                   │          │
│  5. UPDATE     6. COMMIT                          ▼          │
│  ┌──────────┐  ┌─────────┐               ┌──────────┐       │
│  │articles  │  │ GitHub  │ ◄───────────  │ /articles│       │
│  │.json     │  │  Push   │               │  folder  │       │
│  └──────────┘  └─────────┘               └──────────┘       │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

## Files

| File | Purpose |
|------|---------|
| `generate_daily_news.py` | Main Python script |
| `.github/workflows/daily-news.yml` | GitHub Actions schedule |
| `.generated_articles.json` | Tracks published articles (prevents duplicates) |
| `templates/article-template.html` | HTML template for articles |

## RSS Sources (Priority Order)

1. **Priority 1 (Critical)**: BleepingComputer, TheHackerNews, KrebsOnSecurity, CISA
2. **Priority 2 (Important)**: DarkReading, SecurityWeek, Kaspersky, SentinelOne, CrowdStrike, Google Security
3. **Priority 3 (General)**: Cloudflare

## Article Selection Criteria

Articles are ranked by:
1. **High-priority keywords** (+20 points):
   - zero-day, actively exploited, CISA KEV, ransomware attack
   - data breach, APT, nation-state, supply chain attack
   - RCE, emergency patch

2. **Source priority** (1-3 scale, lower = better)

3. **CVE count** (+5 points per CVE mentioned)

## Auto-Generated Features

Each article automatically includes:
- ✅ Proper title and meta description
- ✅ Category detection (Zero-Day, Ransomware, Data Breach, etc.)
- ✅ Badge assignment (ZERO-DAY, CRITICAL, BREAKING, etc.)
- ✅ CVE extraction with NVD links
- ✅ Source attribution
- ✅ Recommendations section
- ✅ Mobile-responsive layout
- ✅ Interaction bar (like, share, print)

## Schedule

| Time (UTC) | Time (IST) | Run |
|------------|------------|-----|
| 06:00 | 11:30 AM | Morning run |
| 18:00 | 11:30 PM | Evening run |

## Manual Trigger

```bash
# Run locally
cd /Volumes/Data-Personal/Webpage/thehgtech
python3 generate_daily_news.py

# Or trigger via GitHub Actions
# Go to Actions → Daily Security News → Run workflow
```

## Customization

### Add More RSS Feeds
Edit `NEWS_FEEDS` list in `generate_daily_news.py`:
```python
NEWS_FEEDS = [
    {"url": "https://example.com/feed/", "name": "Example", "priority": 2},
    ...
]
```

### Change Article Count
Edit line 490:
```python
articles_to_generate = ranked[:2]  # Change 2 to desired count
```

### Add AI Enhancement (Future)
The script is prepared for AI integration. Add to `generate_article_content()`:
```python
# Example with Claude API
import anthropic
client = anthropic.Anthropic()
response = client.messages.create(
    model="claude-3-haiku-20240307",
    max_tokens=1000,
    messages=[{"role": "user", "content": f"Rewrite this security news: {summary}"}]
)
```

## Monitoring

Check `.generated_articles.json` to see:
- List of generated article hashes (prevents duplicates)
- Article titles and generation dates

## Troubleshooting

| Issue | Solution |
|-------|----------|
| "0 entries found" | Check User-Agent headers; site may block bots |
| Duplicate articles | Clear `.generated_articles.json` hashes |
| Bad formatting | Check template at `templates/article-template.html` |
| Wrong paths | Script auto-fixes paths for `/articles/` subdirectory |

---

## Expected Impact

| Metric | Before | After |
|--------|--------|-------|
| Articles/day | 0-1 (manual) | 2 (automated) |
| Articles/week | 2-3 | 14 |
| Articles/month | 8-12 | 60+ |
| Time spent | 2-3 hours/article | 0 (automated) |
| News velocity | 1-2 days delay | Same-day coverage |

---

*System created February 5, 2026*
