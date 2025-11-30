# CVE Enrichment - Quick Start Guide

## 🎉 You Have the NVD API Key!

Great! Now let's get your CVE dashboard enriched with vendor patch details.

## 🚀 Quick Setup (5 Minutes)

### Step 1: Set Your NVD API Key

Open your terminal and run:

```bash
# Set the API key (replace with your actual key)
export NVD_API_KEY="your-nvd-api-key-here"

# Verify it's set
echo $NVD_API_KEY
```

**Make it permanent** (recommended):

```bash
# Add to your shell profile (zsh for macOS)
echo 'export NVD_API_KEY="your-actual-key-here"' >> ~/.zshrc
source ~/.zshrc

# Verify
echo $NVD_API_KEY
```

### Step 2: Test the Enrichment

```bash
# Navigate to your project
cd /Volumes/Data-Personal/Webpage/thehgtech

# Run the test script
./test_cve_enrichment.sh
```

**Or run directly:**

```bash
python3 enrich_cve_patches.py
```

### Step 3: Check the Results

```bash
# View the enriched data
cat cve-data.json | jq '.cves[0]'

# Check statistics
cat cve-data.json | jq '{
  totalCVEs: .totalCVEs,
  withPatches: [.cves[] | select(.remediationLinks | length > 0)] | length
}'
```

## 📊 What You'll See

### Expected Output:

```
============================================================
CVE Patch Enrichment Script
============================================================
✓ NVD API key found - using faster rate limit (50 req/30s)
✓ OpenAI API key found - will enhance link titles

📥 Fetching CISA KEV catalog...
✓ Fetched 20 CVEs from CISA KEV

📊 Processing 20 CVEs from last 7 days...
⏱️  Estimated time: 0.4 minutes

[1/20] Processing CVE-2024-43451...
  🔍 Fetching NVD details for CVE-2024-43451...
  ✓ Processed CVE-2024-43451 - 3 remediation links found

[2/20] Processing CVE-2024-43093...
  🔍 Fetching NVD details for CVE-2024-43093...
  ✓ Processed CVE-2024-43093 - 2 remediation links found

...

============================================================
✓ Successfully processed 20 CVEs
✓ Output saved to: cve-data.json

📊 Statistics:
  - CVEs with patch links: 14/20 (70%)
  - Critical: 5
  - High: 12
  - Zero-day: 2
============================================================
```

### Sample Enriched CVE:

```json
{
  "cveId": "CVE-2024-43451",
  "vendor": "Microsoft",
  "product": "Windows MSHTML",
  "severity": "HIGH",
  "dateAdded": "2024-11-28",
  "remediationLinks": [
    {
      "title": "Microsoft Security Update",
      "url": "https://msrc.microsoft.com/update-guide/...",
      "type": "vendor"
    },
    {
      "title": "Patch Download",
      "url": "https://support.microsoft.com/...",
      "type": "vendor"
    },
    {
      "title": "Mitigation Guide",
      "url": "https://microsoft.com/security/...",
      "type": "advisory"
    }
  ]
}
```

## 🔄 Automate with GitHub Actions

Once tested locally, add to `.github/workflows/update-content.yml`:

```yaml
- name: Enrich CVE Data with Patches
  env:
    NVD_API_KEY: ${{ secrets.NVD_API_KEY }}
    OPENAI_API_KEY: ${{ secrets.OPENAI_API_KEY }}
  run: |
    python3 enrich_cve_patches.py
    
- name: Commit CVE Data
  run: |
    git config user.name "GitHub Actions"
    git config user.email "actions@github.com"
    git add cve-data.json
    git diff --quiet && git diff --staged --quiet || git commit -m "Update CVE data with patch links"
    git push
```

**Add NVD_API_KEY to GitHub Secrets:**

1. Go to your repo: https://github.com/Harish761/thehgtech
2. Settings → Secrets and variables → Actions
3. Click "New repository secret"
4. Name: `NVD_API_KEY`
5. Value: Your NVD API key
6. Click "Add secret"

## 🎯 Dual-Source Dashboard (Optional)

Want to show both CISA KEV and NVD Critical CVEs?

```bash
# Run the dual-source enrichment
python3 enrich_cve_dual_source.py
```

This will give you:
- **Tab 1:** 20 CISA KEV (actively exploited)
- **Tab 2:** 20 NVD Critical (CVSS ≥ 9.0)
- **Total:** ~40 CVEs with patch details

## 🐛 Troubleshooting

### Issue: "NVD_API_KEY not found"

**Solution:**
```bash
# Check if it's set
echo $NVD_API_KEY

# If empty, set it
export NVD_API_KEY="your-key-here"

# Make it permanent
echo 'export NVD_API_KEY="your-key"' >> ~/.zshrc
source ~/.zshrc
```

### Issue: "API key is invalid"

**Solution:**
- Verify your key is correct (no extra spaces)
- Check if key has expired
- Get new key: https://nvd.nist.gov/developers/request-an-api-key

### Issue: "Rate limit exceeded"

**Solution:**
- You're hitting the limit (very rare)
- Wait 30 seconds and try again
- With API key, you have 50 req/30s (very generous)

### Issue: "No remediation links found"

**Explanation:**
- Some CVEs don't have vendor advisories yet
- This is normal (~30% of CVEs)
- Script continues and shows "See CISA Guidance" instead

## 📝 Next Steps

1. ✅ Set NVD_API_KEY environment variable
2. ✅ Run `python3 enrich_cve_patches.py`
3. ✅ Verify `cve-data.json` has remediation links
4. ✅ Add NVD_API_KEY to GitHub Secrets
5. ✅ Update GitHub Actions workflow
6. ✅ Deploy and enjoy! 🎉

## 💡 Pro Tips

### Tip 1: Check Patch Coverage
```bash
# See how many CVEs have patches
cat cve-data.json | jq '[.cves[] | select(.remediationLinks | length > 0)] | length'
```

### Tip 2: View Specific Vendor
```bash
# See all Microsoft CVEs
cat cve-data.json | jq '.cves[] | select(.vendor == "Microsoft")'
```

### Tip 3: Monitor Processing Time
```bash
# Time the enrichment
time python3 enrich_cve_patches.py
```

### Tip 4: Test Single CVE
```bash
# Quick test with one CVE
python3 -c "
from enrich_cve_patches import fetch_nvd_cve_details, extract_remediation_links
nvd_data = fetch_nvd_cve_details('CVE-2024-43451')
links = extract_remediation_links(nvd_data, 'Microsoft')
print(f'Found {len(links)} remediation links')
for link in links:
    print(f'  → {link[\"title\"]}: {link[\"url\"]}')
"
```

## 🎉 You're All Set!

Your CVE dashboard will now show:
- ✅ Vendor security advisories
- ✅ Patch download links
- ✅ Mitigation guides
- ✅ Third-party advisories

**Processing time:** ~12 seconds for 20 CVEs
**Patch coverage:** ~60-70% of CVEs
**Cost:** $0 (completely FREE!)

---

**Need help?** Check the full guide: `CVE_PATCH_ENRICHMENT_GUIDE.md`
