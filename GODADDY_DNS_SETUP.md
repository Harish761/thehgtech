# GoDaddy DNS Setup for Newsletter Custom Domain
## Step-by-Step Guide with Screenshots

---

## 🎯 What You're Doing

Adding DNS records to allow Beehiiv to send emails from `newsletter@thehgtech.com`

**Time:** 15 minutes  
**Cost:** $0 (FREE!)  
**Difficulty:** Easy

---

## 📋 BEFORE YOU START

### What You Need:

1. ✅ GoDaddy account login
2. ✅ Domain: `thehgtech.com` (you own this)
3. ✅ DNS records from Beehiiv (from previous step)

### What You DON'T Need:

- ❌ Email hosting ($5.99/month) - **DON'T BUY THIS!**
- ❌ Professional Email - **NOT NEEDED!**
- ❌ Office 365 - **NOT NEEDED!**

**You're just adding FREE DNS records!**

---

## 🚀 STEP-BY-STEP INSTRUCTIONS

### Step 1: Login to GoDaddy

1. **Go to:** https://dcc.godaddy.com/
2. **Sign in** with your email and password
3. **You should see:** GoDaddy Dashboard

---

### Step 2: Navigate to DNS Management

1. **Click "My Products"** in the top menu
2. **Find "Domains"** section
3. **Find "thehgtech.com"** in the list
4. **Click the three dots** (⋮) next to it
5. **Click "Manage DNS"** or "DNS"

**You should now see:** DNS Management page with existing records

---

### Step 3: Understand Existing Records

**You'll see records like:**

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 185.199.108.153 | 1 Hour |
| CNAME | www | Harish761.github.io | 1 Hour |

**Don't touch these!** They're for your website.

**We're adding NEW records below these.**

---

### Step 4: Add SPF Record

**What is SPF?**  
Tells email servers: "Beehiiv is allowed to send emails from my domain"

**How to add:**

1. **Click "Add" button** (usually blue, top right)
2. **Select Type:** `TXT`
3. **Fill in:**
   - **Name:** `@`
   - **Value:** `v=spf1 include:mail.beehiiv.com ~all`
   - **TTL:** `1 Hour` (or `3600`)
4. **Click "Save"**

**What it looks like:**
```
Type: TXT
Name: @
Value: v=spf1 include:mail.beehiiv.com ~all
TTL: 1 Hour
```

**✅ SPF Record Added!**

---

### Step 5: Add DKIM Record

**What is DKIM?**  
Cryptographic signature that proves emails are legitimate

**How to add:**

1. **Click "Add" button** again
2. **Select Type:** `TXT`
3. **Fill in:**
   - **Name:** `beehiiv._domainkey`
   - **Value:** [Long string from Beehiiv - starts with `k=rsa; p=MIGfMA0...`]
   - **TTL:** `1 Hour`
4. **Click "Save"**

**Important:**
- The Value is VERY LONG (200+ characters)
- Copy it EXACTLY from Beehiiv
- Don't add spaces or line breaks

**What it looks like:**
```
Type: TXT
Name: beehiiv._domainkey
Value: k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC... (very long)
TTL: 1 Hour
```

**✅ DKIM Record Added!**

---

### Step 6: Add DMARC Record

**What is DMARC?**  
Policy that tells email servers what to do with suspicious emails

**How to add:**

1. **Click "Add" button** again
2. **Select Type:** `TXT`
3. **Fill in:**
   - **Name:** `_dmarc`
   - **Value:** `v=DMARC1; p=none;`
   - **TTL:** `1 Hour`
4. **Click "Save"**

**What it looks like:**
```
Type: TXT
Name: _dmarc
Value: v=DMARC1; p=none;
TTL: 1 Hour
```

**✅ DMARC Record Added!**

---

### Step 7: Verify Records Were Added

**Check your DNS records:**

You should now see 3 NEW TXT records:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| TXT | @ | v=spf1 include:mail.beehiiv.com ~all | 1 Hour |
| TXT | beehiiv._domainkey | k=rsa; p=MIGfMA0... | 1 Hour |
| TXT | _dmarc | v=DMARC1; p=none; | 1 Hour |

**Plus your existing A and CNAME records (don't touch those!)**

**✅ All DNS Records Added!**

---

## ⏱️ STEP 8: WAIT FOR DNS PROPAGATION

### What is DNS Propagation?

DNS changes take time to spread across the internet.

**Timeline:**
- **Immediate:** Changes saved in GoDaddy ✅
- **10-15 minutes:** Beehiiv can verify ⏳
- **1-2 hours:** Most servers updated ⏳
- **24-48 hours:** Fully propagated worldwide ✅

### What to do:

1. **Wait 10-15 minutes**
2. **Go back to Beehiiv**
3. **Click "Verify DNS Records"**
4. **If it fails:** Wait another 15 minutes, try again
5. **If it succeeds:** You're done! ✅

---

## 🔍 STEP 9: CHECK DNS PROPAGATION (OPTIONAL)

Want to see if DNS is working?

1. **Go to:** https://dnschecker.org/
2. **Enter:** `beehiiv._domainkey.thehgtech.com`
3. **Select:** `TXT` record type
4. **Click "Search"**

**You should see:**
- Green checkmarks around the world
- Your DKIM value appearing

**If you see:**
- ❌ Red X's: DNS not propagated yet (wait longer)
- ✅ Green checks: DNS propagated! (you're good!)

---

## 🎯 STEP 10: VERIFY IN BEEHIIV

1. **Go back to Beehiiv tab**
2. **Settings → Email Settings → Custom Domain**
3. **Click "Verify DNS Records"**

**If successful:**
```
✅ SPF Record: Verified
✅ DKIM Record: Verified
✅ DMARC Record: Verified
✅ Domain verified!
```

**If failed:**
```
❌ SPF Record: Not found
```
- Wait 15 more minutes
- Try again

---

## ⚠️ COMMON MISTAKES

### Mistake 1: Buying Email Hosting

**GoDaddy might show:**
```
"Get Professional Email for $5.99/month"
"Office 365 Email for $5.99/month"
```

**DON'T BUY THIS!** ❌

You're just adding DNS records (FREE!), not creating email accounts.

---

### Mistake 2: Wrong Name Field

**Wrong:**
```
Name: @thehgtech.com
```

**Correct:**
```
Name: @
```

GoDaddy automatically adds the domain name.

---

### Mistake 3: Extra Spaces in Value

**Wrong:**
```
Value: v=spf1 include:mail.beehiiv.com ~all 
       (extra space at end)
```

**Correct:**
```
Value: v=spf1 include:mail.beehiiv.com ~all
```

Copy-paste exactly from Beehiiv!

---

### Mistake 4: Deleting Existing Records

**DON'T delete:**
- A records (@ → 185.199.108.153)
- CNAME records (www → Harish761.github.io)

These are for your website!

**ONLY add NEW TXT records!**

---

## 🔧 TROUBLESHOOTING

### Issue 1: Can't Find "Add" Button

**Solution:**
- Look for "+ Add Record" or "+ Add"
- Usually top right of DNS records table
- Blue or green button

---

### Issue 2: TXT Record Not Showing

**Solution:**
- Scroll down in DNS records list
- TXT records might be at the bottom
- Use search/filter if available

---

### Issue 3: Verification Failing After 24 Hours

**Solution:**
1. Double-check record values (copy-paste again)
2. Check for typos in Name field
3. Try deleting and re-adding records
4. Contact GoDaddy support (rare)

---

### Issue 4: Multiple SPF Records

**Problem:** GoDaddy shows existing SPF record

**Solution:**
- If you have: `v=spf1 include:_spf.google.com ~all`
- Change to: `v=spf1 include:_spf.google.com include:mail.beehiiv.com ~all`
- (Add Beehiiv to existing SPF, don't create duplicate)

---

## ✅ FINAL CHECKLIST

- [ ] Logged into GoDaddy
- [ ] Navigated to DNS Management for thehgtech.com
- [ ] Added SPF record (@ → v=spf1...)
- [ ] Added DKIM record (beehiiv._domainkey → k=rsa...)
- [ ] Added DMARC record (_dmarc → v=DMARC1...)
- [ ] Waited 10-15 minutes
- [ ] Verified in Beehiiv
- [ ] All 3 records verified ✅

---

## 🎉 SUCCESS!

**You've successfully configured custom domain for newsletter!**

**Emails will now be sent from:**
```
From: TheHGTech <newsletter@thehgtech.com>
```

**Instead of:**
```
From: TheHGTech <newsletter@mail.beehiiv.com>
```

**Much more professional!** ✅

---

## 📊 WHAT'S NEXT?

1. **Test newsletter** (send test email)
2. **Add signup forms** to website
3. **Start collecting** subscribers
4. **Send first newsletter** next Monday!

---

## 📚 ADDITIONAL HELP

**GoDaddy Support:**
- Help Center: https://www.godaddy.com/help
- Phone: 1-480-505-8877
- Chat: Available in dashboard

**Beehiiv Support:**
- Help Center: https://docs.beehiiv.com/
- Email: support@beehiiv.com

**DNS Checker:**
- https://dnschecker.org/
- https://mxtoolbox.com/

---

**Questions?** Check the troubleshooting section or contact support!

**Cost:** $0 (completely FREE!) ✅
