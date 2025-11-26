# Article Management Workflow

## Easy Workflow for Adding New Articles

### Step 1: Give Me the Topic
Just tell me the article topic, for example:
- "Write an article about the latest ransomware attack on healthcare"
- "Article on new AI regulations in EU"
- "Cover the recent zero-day in Chrome"

### Step 2: I Do the Research & Writing
I will:
1. Research the topic thoroughly (news sources, technical details, expert analysis)
2. Write a comprehensive 1500-1800 word article
3. Include proper citations and sources
4. Format in your site's style
5. Add to `articles.json` via the admin panel

### Step 3: Automatic Archiving
**You don't need to do anything!** The system automatically:
- ✅ **Archives articles older than 7 days** (moves to `archives-content.js`)
- ✅ **Deletes archives older than 30 days** (permanent removal)
- ✅ **Runs daily at midnight IST** (GitHub Actions)

---

## How the Automation Works

### Daily Schedule (Midnight IST)
```
1. Script checks all articles in articles.json
2. Finds articles older than 7 days → moves to archive
3. Checks archive for articles older than 30 days → deletes
4. Commits changes to git
5. Auto-deploys to your site
```

### Manual Trigger (If Needed)
```bash
# Run locally to test
python manage_articles.py

# Or trigger via GitHub Actions
# Go to: Actions → Article Management → Run workflow
```

---

## Current Article Lifecycle

```
New Article (Day 0)
    ↓
Active on Homepage (Days 1-7)
    ↓
Moved to Archive (Day 7)
    ↓
Kept in Archive (Days 8-30)
    ↓
Permanently Deleted (Day 30+)
```

---

## What You Need to Do

### To Add a New Article:
1. **Tell me the topic** (e.g., "Write about the Microsoft breach")
2. **I handle everything else:**
   - Research
   - Writing (1500-1800 words)
   - Citations
   - Adding to `articles.json`
   - Committing to git

### To Manage Articles:
**Nothing!** It's fully automated.

---

## Manual Management (If Needed)

### Using the Admin Panel
1. Open `admin-articles.html` locally
2. Edit/delete articles as needed
3. Export `articles.json`
4. Upload to your repo

### Using the Script
```bash
# Archive old articles manually
python manage_articles.py

# Check what would be archived (dry run)
python manage_articles.py --dry-run  # (feature to be added if needed)
```

---

## Files Involved

- **`articles.json`** - Active articles (displayed on homepage)
- **`archives-content.js`** - Archived articles (7-30 days old)
- **`manage_articles.py`** - Automation script
- **`.github/workflows/manage-articles.yml`** - Daily automation
- **`admin-articles.html`** - Manual management interface (local only)

---

## Example Workflow

### You Say:
> "Write an article about the new Cloudflare outage"

### I Do:
1. Research the Cloudflare outage
2. Write 1600-word comprehensive article
3. Add proper citations
4. Update `articles.json`
5. Commit and push to git
6. Article goes live immediately

### Automation Does:
- Day 7: Moves article to archive
- Day 30: Permanently deletes from archive

---

## Benefits

✅ **Zero manual work** - Just give me topics
✅ **Automatic archiving** - No need to remember
✅ **Automatic cleanup** - No old articles cluttering
✅ **Version controlled** - All changes in git
✅ **Fully automated** - Runs daily without intervention

---

## Questions?

- **"How do I add an article?"** → Just tell me the topic
- **"How do I archive old articles?"** → Automatic (daily at midnight)
- **"How do I delete old archives?"** → Automatic (after 30 days)
- **"Can I manually manage?"** → Yes, use `admin-articles.html` or run `manage_articles.py`
- **"What if I want to keep an article longer?"** → Edit the date in `articles.json` to make it newer

---

## Next Steps

1. ✅ Automation is set up and ready
2. ✅ Just give me article topics when you want new content
3. ✅ System handles everything else automatically

**That's it! Super simple workflow.** 🎉
