# Breach Deep Dive Generator - Implementation Plan

## Overview
Automated content generation system that creates in-depth cybersecurity breach analysis articles using AI.

**Created:** January 15, 2026  
**Status:** ✅ POC Complete - Ready for Enhancement

---

## What We Built (POC)

### Files Created:
```
/test_breach_generator.py          # Main Python script
/.github/workflows/test-breach-generator.yml  # GitHub Action
/test_breach_output.html           # Sample output (ConsentFix OAuth attack)
```

### How It Works:
```
1. Fetch latest breach news from RSS feeds (BleepingComputer, etc.)
                     ↓
2. Select most recent breach/attack story
                     ↓
3. Send context to OpenAI GPT-4o with detailed prompt
                     ↓
4. GPT-4o generates complete HTML article with:
   - Executive summary
   - Attack timeline
   - MITRE ATT&CK mapping
   - Impact assessment
   - Lessons learned
   - FAQ section
                     ↓
5. Commit output to repository
```

### Current Data Sources (RSS):
- BleepingComputer (`https://www.bleepingcomputer.com/feed/`)
- The Record (`https://therecord.media/feed`)
- DataBreaches.net (`https://www.databreaches.net/feed/`)

### API Used:
- **OpenAI GPT-4o** (via `OPENAI_API_KEY` secret)
- Previous attempt with Gemini hit rate limits

---

## Test Results

### Sample Generated Article:
- **Topic:** ConsentFix OAuth Phishing Attack
- **Quality:** ✅ Good - Professional tone, proper structure
- **Length:** ~11,000 characters, 195 lines HTML
- **Source Attribution:** ✅ None visible in output
- **MITRE ATT&CK:** ✅ Included (T1566, T1078)
- **Timeline:** ✅ Included with dates
- **FAQ Section:** ✅ Included (3 questions)

### Issues Identified:
1. Gemini free tier rate limits too restrictive
2. Need to differentiate from original news sources
3. Missing TheHGTech standard template (header, nav, footer)

---

## TODO - Next Steps

### Phase 1: Integrate with TheHGTech Template
- [ ] Add standard header/nav from existing articles
- [ ] Add interaction bar
- [ ] Add footer
- [ ] Match existing article CSS styling
- [ ] Add to sitemap

### Phase 2: Create `/breaches/` Section
- [ ] Create `/breaches/index.html` listing page
- [ ] Design breach article template
- [ ] Add to site navigation
- [ ] Create workflow for proper file naming (slug from title)

### Phase 3: Content Enhancement
- [ ] Add unique TheHGTech commentary/recommendations
- [ ] Include related CVE links from our tracker
- [ ] Add "Similar Breaches" section
- [ ] Link to relevant guides
- [ ] Generate featured image

### Phase 4: Automation Schedule
- [ ] Set up weekly schedule (e.g., every Monday)
- [ ] Add filtering to avoid duplicate topics
- [ ] Add manual review option before publish
- [ ] Track generated articles to avoid repeats

### Phase 5: Threat Actor Profiles (Option B)
- [ ] Create `/threat-actors/` section
- [ ] Script to generate APT group profiles
- [ ] Link to ransomware tracker data
- [ ] Include MITRE ATT&CK mappings

---

## Technical Notes

### Prompt Engineering Key Points:
```python
# Critical: Pass current date so AI knows it's 2026
f"Today is {CURRENT_DATE.strftime('%B %d, %Y')} (January 2026)."

# Instruction to avoid source citations
"DO NOT include any source URLs or citations"
"DO NOT reference where this information came from"
"Write as if from TheHGTech's own security research team analysis"
```

### Token Usage (Estimated):
- Input: ~2,000 tokens (prompt + template)
- Output: ~3,000 tokens (article content)
- **Total per article:** ~5,000 tokens
- **Cost:** ~$0.015 per article (GPT-4o pricing)

### Rate Limits:
| API | Limits |
|-----|--------|
| Gemini Free | 5-15 RPM, 100 RPD, 250K TPM |
| OpenAI GPT-4o | 10,000+ RPM (paid tier) |

---

## Files Reference

### test_breach_generator.py
```python
# Key functions:
fetch_one_breach()      # Fetches latest breach from RSS
generate_article(breach) # Calls GPT-4o to generate HTML
main()                  # Orchestrates the workflow
```

### Workflow Trigger:
```yaml
# Manual trigger only (for testing)
on:
  workflow_dispatch:

# To automate, add:
on:
  schedule:
    - cron: '0 6 * * 1'  # Every Monday at 6 AM UTC
```

---

## Questions to Resolve Later

1. **Content originality:** How to make articles more unique vs source?
   - Add TheHGTech-specific recommendations
   - Include insights from our existing guides
   - Add 24-48 hour delay after news breaks

2. **Quality control:** Manual review before publish?
   - Option A: Auto-publish (fully automated)
   - Option B: Generate to draft folder, manual approval
   - Option C: Notify via email/Slack for review

3. **Topic selection:** How to pick best breach to write about?
   - Currently: First matching result from RSS
   - Future: Score by company size, records affected, SEO potential

4. **Frequency:** How often to generate?
   - Weekly seems reasonable
   - Could do more with multiple sources

---

## Commands to Run

### Manual Test:
```bash
# Trigger workflow manually
# Go to: https://github.com/Harish761/thehgtech/actions
# Click "Test Breach Article Generator" → "Run workflow"
```

### Local Test (if API key available):
```bash
export OPENAI_API_KEY="sk-..."
cd /Volumes/Data-Personal/Webpage/thehgtech
python3 test_breach_generator.py
```

---

## Related Existing Content

This feature connects to:
- `/ransomware-tracker.html` - Can link breach articles to tracked groups
- `/cve-tracker.html` - Link to related CVEs
- `/guides/ransomware-response-playbook.html` - Prevention recommendations
- `/guides/incident-response-automation.html` - Response guidance

---

*Last Updated: January 15, 2026 00:10 IST*
