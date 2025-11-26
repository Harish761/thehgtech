# AlienVault OTX TAXII Setup Guide

## Quick Start

TAXII/STIX integration is now live! AlienVault OTX will fetch automatically, but for better results:

### 1. Get AlienVault OTX API Key (Optional but Recommended)

1. Go to https://otx.alien vault.com/
2. Sign up for free account
3. Navigate to Settings → API
4. Copy your API key

### 2. Add API Key to GitHub Secrets

1. Go to your GitHub repo: Settings → Secrets and variables → Actions
2. Click "New repository secret"
3. Name: `ALIENVAULT_API_KEY`
4. Value: (paste your API key)
5. Click "Add secret"

### 3. That's It!

The system will automatically:
- Fetch STIX 2.1 threat intelligence from AlienVault OTX
- Parse indicators (IPs, domains, URLs, hashes)
- Extract metadata (confidence scores, threat actors)
- Display in your threat intel dashboard

**Without API key:** System will try public access (may have limitations)
**With API key:** Full access to AlienVault's premium feeds

## What You Get

- **500 enriched IOCs** from AlienVault OTX (vs 300 from basic feeds)
- **Confidence scores** (0-100) for each indicator
- **Threat actor attribution** (APT groups, campaigns)
- **Kill chain phases** (reconnaissance, delivery, exploitation, etc.)
- **STIX 2.1 format** (industry standard)

## Manual Test (Local)

```bash
# Install dependencies
pip install -r requirements.txt

# Set API key (optional)
export ALIENVAULT_API_KEY="your_key_here"

# Run threat intel fetch
python3 fetch_threat_intel.py

# Check output
cat threat-intel.js | grep "AlienVault OTX"
```

## Troubleshooting

**"TAXII libraries not available"**
- Run: `pip install taxii2-client==2.3.0 stix2==3.0.1`

**"No API roots found"**
- Check API key is correct
- Try without API key (public access)

**"Connection timeout"**
- AlienVault OTX may be temporarily unavailable
- System will skip and try next update cycle

## Next Steps

Wait for next GitHub Actions run (hourly) and check:
- Threat Intel page: https://thehgtech.com/threat-intel.html
- Look for "AlienVault OTX" tab
- Should show STIX indicators with metadata
