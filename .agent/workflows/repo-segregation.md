---
description: How to migrate to private/public repo setup
---

# Repository Segregation Migration

## Purpose
Protect automation scripts and intellectual property by moving them to a private repository while keeping the website in a public repository.

## Pre-requisites (User Steps - ~6 minutes)

### Step 1: Create Private Repository
1. Go to https://github.com/new
2. Repository name: `thehgtech-automation`
3. Visibility: **Private**
4. DO NOT initialize with README, .gitignore, or license
5. Click "Create repository"

### Step 2: Clone Locally
```bash
cd /Volumes/Data-Personal/Webpage
git clone https://github.com/Harish761/thehgtech-automation.git
```

### Step 3: Add to IDE Workspace
- In your IDE, add the folder `/Volumes/Data-Personal/Webpage/thehgtech-automation` to your workspace
- This enables Claude to access and modify the private repo

### Step 4: Create Personal Access Token (PAT)
1. Go to https://github.com/settings/tokens
2. Generate new token (classic)
3. Name: `thehgtech-automation-pat`
4. Expiration: 90 days (or longer)
5. Scopes: `repo` (full control)
6. Copy the token - you'll need it for GitHub Actions secrets

### Step 5: Notify Claude
Tell Claude: "I've created the private repo `thehgtech-automation`, cloned it locally, and added it to my workspace. Here's the PAT: [token]"

## Migration (Claude Steps - ~1.5 hours)

### Phase 1: Setup Private Repo Structure
// turbo-all
1. Create directory structure in private repo
2. Copy Python scripts (17 files)
3. Copy GitHub workflows (4 files)
4. Create requirements.txt
5. Update file paths in scripts
6. Commit and push to private repo

### Phase 2: Modify Workflows
1. Update workflows to checkout public repo
2. Add PAT secret for cross-repo push
3. Configure push to public repo
4. Add error handling and notifications

### Phase 3: Testing
1. Run dry test of each workflow
2. Verify content updates work
3. Test rollback procedure

### Phase 4: Cutover
1. Disable workflows in public repo
2. Enable workflows in private repo
3. Monitor first automated run
4. Verify website content updates

### Phase 5: Cleanup
1. Remove Python scripts from public repo
2. Remove workflows from public repo
3. Update .gitignore
4. Final documentation update

## Files to Migrate

### Python Scripts (17 files)
- update_shorts.py
- enrich_cve_dual_source.py
- enrich_cve_patches.py
- enrich_epss.py
- fetch_ai_security.py
- fetch_ransomware.py
- fetch_threat_intel.py
- generate_weekly_report.py
- monitor_github_actions.py
- add_interaction_bar_to_articles.py
- add_mobile_nav_to_articles.py
- add_mobile_nav_to_comparisons.py
- add_mobile_nav_to_guides.py
- create_iso_templates.py
- replace_nav.py
- replace_nav_v2.py
- update_guides_interaction_bar.py

### GitHub Workflows (4 files)
- .github/workflows/update-shorts.yml
- .github/workflows/threat-intel.yml
- .github/workflows/ransomware.yml
- .github/workflows/weekly-report.yml

## Rollback Procedure

If anything fails, rollback in < 5 minutes:

```bash
# 1. Disable private repo workflows (GitHub UI)

# 2. Restore public repo
cd /Volumes/Data-Personal/Webpage/thehgtech
git checkout pre-migration-backup -- .github/workflows/
git checkout pre-migration-backup -- *.py
git add .
git commit -m "ROLLBACK: Restored original automation"
git push origin main

# 3. Re-enable public repo workflows (GitHub UI)
```

## Post-Migration Verification

- [ ] Website loads correctly
- [ ] News section updates (wait for next scheduled run)
- [ ] CVE tracker shows data
- [ ] Ransomware tracker shows data
- [ ] No Python files visible in public repo
- [ ] GitHub Actions running in private repo

## Reference Document
Full assessment: `.agent/REPO-SEGREGATION-ASSESSMENT.md`
