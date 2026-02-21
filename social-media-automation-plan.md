# Social Media Automation for Live Dashboards
**Goal: Drive recurring, high-intent traffic to TheHGTech by automatically publishing daily threat summaries to platforms like LinkedIn, X, and Reddit.**

## The Concept
Leverage the unique, live data already being aggregated on the website (CVEs, Ransomware Victims, and Threat Intelligence IOCs) as "link bait". Instead of writing manual posts, a script will automatically extract the most critical data points from the last 24 hours and format them into an engaging social media briefing.

Example Output:
> 🚨 **TheHGTech Daily Threat Briefing** 🚨
> 
> 🔴 **CVEs:** 2 new Critical Vulnerabilities added to the CISA KEV catalog today, including a CVSS 9.8 remote code execution in [Vendor Name]. 
> 💀 **Ransomware:** 14 new victims posted to leak sites overnight. LockBit 3.0 is highly active. 
> 🛡️ **Threat Intel:** 4,120 active malicious IPs detected targeting SSH ports.
> 
> Don't wait for the weekly audit. Track these threats live and view mitigation steps on our free Intelligence Dashboards:
> ↳ https://thehgtech.com/threat-intel.html

## Implementation Blueprint

### Phase 1: Manual Generation (Proof of Concept)
Before fully automating, we build the engine to generate the posts so they can be reviewed and manually published.
1. **Create `generate_daily_briefing.py`:** A Python script that reads the local `cve-data.json`, `ransomware-data.json`, and Threat Intel feeds.
2. **Data Extraction Logic:** The script identifies key metrics:
   - New critical/zero-day CVEs added today.
   - Sudden spikes in ransomware victims.
   - Total active botnet/malicious IPs.
3. **Template Formatting:** The script formats the numerical data into an engaging, emoji-rich text template and outputs it to the console or a markdown file.

### Phase 2: API Integration
Once the post format is dialed in, connect it to the publishing channels.
1. **LinkedIn Connection:** Generate an OAuth access token for the LinkedIn company page or personal profile. Implement the LinkedIn REST API within the Python script.
2. **X (Twitter) Connection:** Use the `tweepy` library to connect to the X Developer API (Free tier).
3. **Alternative (No-Code):** If API management is too complex, have the Python script push the formatted text payload via Webhook to a service like Zapier or Make.com, which then handles the multi-platform distribution.

### Phase 3: Total Automation (GitHub Actions)
Remove the need for human intervention.
1. **Create `.github/workflows/daily-social-post.yml`:** A new GitHub Actions workflow file.
2. **Schedule (Cron):** Set the workflow to trigger automatically every day at a high-engagement time (e.g., 8:00 AM EST).
3. **Execution:** The action checks out the code, runs `generate_daily_briefing.py`, pulls the necessary API keys from GitHub Secrets, publishes the post to social media, and shuts down.

## Next Steps
When ready to begin, the first action is to write the `generate_daily_briefing.py` script and run it locally to see what the generated posts look like based on the live JSON data.
