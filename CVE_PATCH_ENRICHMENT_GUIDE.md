# CVE Vendor Patch Enrichment Guide

## Overview
This guide explains how to add vendor patch details to your CVE dashboard using free APIs.

## What You Get
- **Vendor Security Advisories**: Direct links to Microsoft, Cisco, Adobe, etc. security bulletins
- **Patch Downloads**: Links to official patches and updates
- **Mitigation Guides**: Vendor-provided workarounds and mitigations
- **Third-Party Advisories**: Security research and analysis

## Data Sources

### 1. NVD API (Primary Source) - **FREE**
- **URL**: https://services.nvd.nist.gov/rest/json/cves/2.0
- **Cost**: FREE
- **Rate Limits**:
  - Without API key: 5 requests per 30 seconds
  - With FREE API key: 50 requests per 30 seconds
- **Get Free API Key**: https://nvd.nist.gov/developers/request-an-api-key
- **Data Provided**:
  - Vendor advisory links
  - Patch URLs
  - CVSS scores
  - CVE references with tags (Patch, Vendor Advisory, Mitigation)

### 2. CISA KEV API - **FREE**
- **URL**: https://www.cisa.gov/sites/default/files/feeds/known_exploited_vulnerabilities.json
- **Cost**: FREE
- **Rate Limits**: None
- **Data Provided**:
  - Known exploited vulnerabilities
  - Required actions
  - Due dates

### 3. OpenAI API (Optional Enhancement)
- **Cost**: ~$0.0001 per CVE (GPT-4o-mini)
- **Purpose**: Generate better titles for remediation links
- **You already have this**: Your existing OPENAI_API_KEY works!

## Gemini API - NOT Suitable

❌ **Gemini Free Tier does NOT support API access**
- Only available through paid Vertex AI
- Not cost-effective for this use case
- Stick with OpenAI GPT-4o-mini (you already have it!)

## Implementation Steps

### Step 1: Get NVD API Key (Optional but Recommended)

1. Visit: https://nvd.nist.gov/developers/request-an-api-key
2. Fill out the form (takes 2 minutes)
3. Receive API key via email instantly
4. Add to your environment:

```bash
export NVD_API_KEY="your-api-key-here"
```

**Why get the key?**
- Without key: Process 20 CVEs in ~24 minutes (5 req/30s)
- With key: Process 20 CVEs in ~2.4 minutes (50 req/30s)
- **10x faster processing!**

### Step 2: Set Up Environment Variables

```bash
# Required for faster processing (FREE)
export NVD_API_KEY="your-nvd-api-key"

# Optional for AI-enhanced titles (you already have this)
export OPENAI_API_KEY="your-openai-api-key"
```

### Step 3: Run the Enrichment Script

```bash
# Make script executable
chmod +x enrich_cve_patches.py

# Run the script
python3 enrich_cve_patches.py
```

**What it does:**
1. Fetches CISA KEV data (last 7 days)
2. For each CVE, queries NVD API for patch details
3. Extracts vendor-specific remediation links
4. (Optional) Uses OpenAI to generate better link titles
5. Saves enriched data to `cve-data.json`

### Step 4: Automate with GitHub Actions

Update your `.github/workflows/update-content.yml`:

```yaml
- name: Enrich CVE Data with Patches
  env:
    NVD_API_KEY: ${{ secrets.NVD_API_KEY }}
    OPENAI_API_KEY: ${{ secrets.OPENAI_API_KEY }}
  run: |
    python3 enrich_cve_patches.py
```

Add `NVD_API_KEY` to GitHub Secrets:
1. Go to repo Settings → Secrets and variables → Actions
2. Click "New repository secret"
3. Name: `NVD_API_KEY`
4. Value: Your NVD API key

## Example Output

### Before (Current):
```json
{
  "cveId": "CVE-2024-12345",
  "vendor": "Microsoft",
  "product": "Windows",
  "remediationLinks": []
}
```

### After (Enriched):
```json
{
  "cveId": "CVE-2024-12345",
  "vendor": "Microsoft",
  "product": "Windows",
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

## Frontend Display

Your frontend (`cve-display.js`) already supports this! It will automatically show:

**CVE Card Footer:**
```
✓ 3 Fixes Available
```

**CVE Modal:**
```
Vendor Patches & Advisories
→ Microsoft Security Update
→ Patch Download
→ Mitigation Guide
```

## Cost Analysis

### Option 1: NVD API Only (FREE)
- **Cost**: $0
- **Processing Time**: 
  - Without key: ~24 minutes for 20 CVEs
  - With FREE key: ~2.4 minutes for 20 CVEs
- **Patch Coverage**: ~60-70% of CVEs will have remediation links

### Option 2: NVD + OpenAI (Recommended)
- **Cost**: ~$0.002 per run (20 CVEs × $0.0001)
- **Processing Time**: ~2.5 minutes for 20 CVEs
- **Patch Coverage**: ~60-70% with better titles
- **Monthly Cost**: ~$0.12 (twice daily updates)

### Option 3: Manual Curation
- **Cost**: $0
- **Processing Time**: ~2 hours per run
- **Not scalable**

## Recommended Setup

✅ **Best Configuration:**
1. Get FREE NVD API key (10x faster)
2. Use existing OpenAI API key (better titles, minimal cost)
3. Run twice daily via GitHub Actions
4. **Total monthly cost**: ~$0.12

## Monitoring & Maintenance

### Check Enrichment Success Rate

```bash
# View statistics
python3 enrich_cve_patches.py

# Output shows:
# - CVEs with patch links: 14/20 (70%)
# - Critical: 5
# - High: 12
# - Zero-day: 2
```

### Troubleshooting

**No patch links found:**
- Some CVEs don't have vendor advisories yet
- Check NVD manually: https://nvd.nist.gov/vuln/detail/CVE-XXXX-XXXXX

**Rate limit errors:**
- Add NVD API key for faster processing
- Increase `NVD_RATE_LIMIT` in script

**OpenAI errors:**
- Script continues without AI enhancement
- Links still work, just less polished titles

## Alternative: Manual Patch Links

If you prefer manual curation for specific high-priority CVEs:

```json
{
  "cveId": "CVE-2024-12345",
  "remediationLinks": [
    {
      "title": "Microsoft Patch Tuesday Update",
      "url": "https://msrc.microsoft.com/...",
      "type": "vendor"
    }
  ]
}
```

## Next Steps

1. **Get NVD API key** (2 minutes, FREE)
2. **Test the script** locally
3. **Add to GitHub Actions** for automation
4. **Monitor patch coverage** and adjust as needed

## Support

- NVD API Docs: https://nvd.nist.gov/developers
- CISA KEV: https://www.cisa.gov/known-exploited-vulnerabilities-catalog
- Issues: Check script logs for detailed error messages
