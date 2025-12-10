# Newsletter Automation - Complete Setup Guide

## 🎯 Overview

This guide will help you set up the automated weekly newsletter system for TheHGTech.

**What you'll achieve:**
- ✅ Automated weekly newsletter every Monday at 2:30 PM IST
- ✅ Professional emails from `newsletter@thehgtech.com`
- ✅ Custom signup forms on your website
- ✅ 100% automated - no manual work required

**Time required:** 45 minutes  
**Cost:** $0 (completely free!)

---

## 📋 PART 1: BEEHIIV SETUP (15 minutes)

### Step 1: Get Your API Credentials

1. **Go to Beehiiv Dashboard:**
   - https://app.beehiiv.com/

2. **Navigate to Settings:**
   - Click gear icon (⚙️) in sidebar
   - Click "Integrations" or "API"

3. **Get Publication ID:**
   - Select your publication: "TheHGTech"
   - Copy the Publication ID (starts with `pub_`)
   - Example: `pub_abc123xyz...`
   - **Save this securely!**

4. **Generate API Key:**
   - Click "Create API Key" or "Generate Key"
   - Give it a name: "GitHub Actions"
   - Copy the API key
   - **Save this securely!** (You won't see it again)

---

### Step 2: Add Secrets to GitHub

1. **Go to Your Repository:**
   - https://github.com/Harish761/thehgtech

2. **Navigate to Settings:**
   - Click "Settings" tab
   - Click "Secrets and variables" → "Actions"

3. **Add BEEHIIV_API_KEY:**
   - Click "New repository secret"
   - Name: `BEEHIIV_API_KEY`
   - Value: [paste your API key here]
   - Click "Add secret"

4. **Add BEEHIIV_PUB_ID:**
   - Click "New repository secret"
   - Name: `BEEHIIV_PUB_ID`
   - Value: [paste your publication ID here]
   - Click "Add secret"

**✅ Secrets are now securely stored!**

---

## 📋 PART 2: CUSTOM DOMAIN SETUP (30 minutes + 24-48h verification)

### Step 1: Get DNS Records from Beehiiv

1. **Go to Beehiiv Dashboard:**
   - Settings → Email Settings

2. **Click "Add Custom Domain":**
   - Enter: `thehgtech.com`
   - Click "Continue"

3. **Copy DNS Records:**
   - Beehiiv will show you 3-4 DNS records
   - Keep this page open!

**You'll see something like:**
```
SPF Record (TXT):
Name: @
Value: v=spf1 include:mail.beehiiv.com ~all

DKIM Record (TXT):
Name: beehiiv._domainkey
Value: k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4...

DMARC Record (TXT):
Name: _dmarc
Value: v=DMARC1; p=none;
```

---

### Step 2: Add DNS Records in GoDaddy

1. **Go to GoDaddy:**
   - https://dcc.godaddy.com/

2. **Sign in** with your account

3. **Navigate to DNS:**
   - Click "My Products"
   - Find "thehgtech.com"
   - Click "DNS" or "Manage DNS"

4. **Add SPF Record:**
   - Click "Add" button
   - Type: `TXT`
   - Name: `@`
   - Value: `v=spf1 include:mail.beehiiv.com ~all`
   - TTL: `1 Hour`
   - Click "Save"

5. **Add DKIM Record:**
   - Click "Add" button
   - Type: `TXT`
   - Name: `beehiiv._domainkey`
   - Value: [paste the long DKIM value from Beehiiv]
   - TTL: `1 Hour`
   - Click "Save"

6. **Add DMARC Record:**
   - Click "Add" button
   - Type: `TXT`
   - Name: `_dmarc`
   - Value: `v=DMARC1; p=none;`
   - TTL: `1 Hour`
   - Click "Save"

**✅ DNS records added!**

---

### Step 3: Verify Domain in Beehiiv

1. **Go back to Beehiiv tab**

2. **Click "Verify DNS Records"**

3. **Wait for verification:**
   - Initial check: May fail (DNS not propagated yet)
   - Wait 10-15 minutes
   - Click "Verify" again
   - Repeat until successful

4. **DNS Propagation:**
   - Full propagation: 24-48 hours
   - Partial propagation: 1-2 hours
   - You can start sending once verified!

**✅ Domain verified!**

---

### Step 4: Configure Sender Settings

1. **In Beehiiv → Email Settings:**
   - Sender Name: `TheHGTech`
   - Sender Email: `newsletter@thehgtech.com`
   - Reply-To Email: [your personal email]

2. **Save settings**

**✅ Custom domain configured!**

---

## 📋 PART 3: TEST THE AUTOMATION (10 minutes)

### Step 1: Manual Test Run

1. **Go to GitHub Repository:**
   - https://github.com/Harish761/thehgtech

2. **Navigate to Actions:**
   - Click "Actions" tab
   - Click "Send Weekly Newsletter" workflow

3. **Run Manually:**
   - Click "Run workflow" button
   - Select branch: `main`
   - Click "Run workflow"

4. **Monitor Progress:**
   - Click on the running workflow
   - Watch the logs
   - Should complete in ~1 minute

**Expected output:**
```
🚀 TheHGTech Weekly Newsletter Generator
==================================================

📝 Generating newsletter content...
📧 Sending newsletter via Beehiiv...
📧 Sending newsletter: Weekly Threat Intel - December 11, 2025
✅ Newsletter sent successfully!

✅ Newsletter automation complete!
```

---

### Step 2: Check Your Email

1. **Subscribe to your newsletter:**
   - Go to your Beehiiv publication page
   - Subscribe with your email

2. **Check inbox:**
   - You should receive the test newsletter
   - Check formatting, links, content

3. **Verify:**
   - From: `TheHGTech <newsletter@thehgtech.com>` ✅
   - Subject: `Weekly Threat Intel - [Date]` ✅
   - Content: Stats, CVEs, Ransomware ✅
   - Links work ✅

**✅ Newsletter working!**

---

## 📋 PART 4: ENABLE AUTOMATIC SENDING

### The workflow is already set up!

**Schedule:**
- Every Monday at 9:00 AM UTC (2:30 PM IST)
- Defined in `.github/workflows/weekly-newsletter.yml`

**What happens automatically:**
1. GitHub Actions triggers every Monday
2. Loads your latest threat intel data
3. Generates newsletter HTML
4. Sends via Beehiiv API
5. Beehiiv delivers to all subscribers

**No action needed!** It's already automated! ✅

---

## 📋 PART 5: ADD SIGNUP FORMS TO WEBSITE

See `NEWSLETTER_SIGNUP_FORMS.md` for:
- Homepage signup section
- Footer signup form
- Articles page CTA
- Guides page CTA
- Privacy policy

---

## 🔧 TROUBLESHOOTING

### Issue 1: "BEEHIIV_API_KEY not set"

**Cause:** GitHub Secrets not configured

**Solution:**
1. Go to GitHub → Settings → Secrets
2. Verify `BEEHIIV_API_KEY` exists
3. Verify `BEEHIIV_PUB_ID` exists
4. Re-run workflow

---

### Issue 2: "Error sending newsletter: 401 Unauthorized"

**Cause:** Invalid API key

**Solution:**
1. Go to Beehiiv → Settings → API
2. Generate new API key
3. Update GitHub Secret
4. Re-run workflow

---

### Issue 3: "Error sending newsletter: 404 Not Found"

**Cause:** Invalid Publication ID

**Solution:**
1. Go to Beehiiv → Settings
2. Copy correct Publication ID
3. Update GitHub Secret `BEEHIIV_PUB_ID`
4. Re-run workflow

---

### Issue 4: DNS Verification Failing

**Cause:** DNS not propagated yet

**Solution:**
1. Wait 1-2 hours
2. Check DNS propagation: https://dnschecker.org/
3. Search for: `beehiiv._domainkey.thehgtech.com`
4. Verify TXT record appears
5. Try verification again in Beehiiv

---

### Issue 5: Newsletter Not Sending on Monday

**Cause:** Workflow disabled or failed

**Solution:**
1. Go to GitHub → Actions
2. Check "Send Weekly Newsletter" workflow
3. Verify it's enabled (green checkmark)
4. Check recent runs for errors
5. Fix errors and re-enable

---

## 📊 MONITORING

### Weekly Checks (5 minutes)

**Every Monday after 2:30 PM IST:**

1. **Check GitHub Actions:**
   - Go to Actions tab
   - Verify workflow ran successfully
   - Check for any errors

2. **Check Beehiiv Dashboard:**
   - Go to Posts
   - Verify newsletter was sent
   - Check open rates, clicks

3. **Check Your Email:**
   - Verify you received newsletter
   - Check formatting looks good

---

### Monthly Review (15 minutes)

**First Monday of each month:**

1. **Subscriber Growth:**
   - How many new subscribers?
   - Unsubscribe rate?

2. **Engagement:**
   - Open rate (target: >20%)
   - Click rate (target: >2%)
   - Most clicked links?

3. **Content Performance:**
   - Which CVEs got most clicks?
   - Which articles were popular?
   - Adjust content strategy

---

## 🎯 SUCCESS METRICS

### Week 1:
- ✅ Newsletter sent successfully
- ✅ 0 errors in GitHub Actions
- ✅ 10-20 subscribers

### Month 1:
- ✅ 4 newsletters sent (every Monday)
- ✅ 50-100 subscribers
- ✅ 20%+ open rate

### Month 3:
- ✅ 12 newsletters sent
- ✅ 200-500 subscribers
- ✅ 25%+ open rate
- ✅ Traffic increase from newsletter

---

## 🚀 NEXT STEPS

After setup is complete:

1. **Add signup forms to website** (see NEWSLETTER_SIGNUP_FORMS.md)
2. **Promote newsletter** on Twitter, LinkedIn, Reddit
3. **Monitor performance** weekly
4. **Iterate and improve** based on data

---

## 📚 ADDITIONAL RESOURCES

- **Beehiiv Documentation:** https://docs.beehiiv.com/
- **GitHub Actions Docs:** https://docs.github.com/en/actions
- **DNS Checker:** https://dnschecker.org/
- **Email Tester:** https://www.mail-tester.com/

---

## ✅ CHECKLIST

Use this to track your progress:

### Beehiiv Setup
- [ ] Created Beehiiv account
- [ ] Renamed publication to "TheHGTech"
- [ ] Got Publication ID
- [ ] Generated API key
- [ ] Added secrets to GitHub

### DNS Setup
- [ ] Got DNS records from Beehiiv
- [ ] Added SPF record to GoDaddy
- [ ] Added DKIM record to GoDaddy
- [ ] Added DMARC record to GoDaddy
- [ ] Verified domain in Beehiiv
- [ ] Configured sender settings

### Testing
- [ ] Ran manual test workflow
- [ ] Received test newsletter
- [ ] Verified formatting
- [ ] Verified links work
- [ ] Checked sender email

### Website Integration
- [ ] Added signup form to homepage
- [ ] Added signup form to footer
- [ ] Added signup form to articles
- [ ] Added privacy policy
- [ ] Tested signup flow

### Monitoring
- [ ] Subscribed to newsletter
- [ ] Set up weekly checks
- [ ] Bookmarked Beehiiv dashboard
- [ ] Bookmarked GitHub Actions

---

**🎉 Congratulations! Your newsletter automation is complete!**

**Questions?** Check the troubleshooting section or review the code in `weekly_newsletter.py`.
