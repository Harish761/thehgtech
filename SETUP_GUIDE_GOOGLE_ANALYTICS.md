# Step-by-Step Guide: Google Analytics 4 Setup
## Complete Setup in 15 Minutes

---

## STEP 1: Create Google Analytics Account

### 1.1 Go to Google Analytics
- Open browser and go to: **https://analytics.google.com/**
- Sign in with your Google account (Gmail)
- If you don't have a Google account, create one first at gmail.com

### 1.2 Start Setup
- You'll see a welcome screen
- Click the blue **"Start measuring"** button
- (If you already have GA accounts, click **"Admin"** in bottom left, then **"Create Property"**)

---

## STEP 2: Create Property

### 2.1 Account Setup
You'll see a form with these fields:

**Account name:**
```
TheHGTech
```

**Account Data Sharing Settings:**
- ✅ Check all boxes (recommended for better insights)
- These help Google improve the service

Click **"Next"** button

### 2.2 Property Setup
Fill in these details:

**Property name:**
```
TheHGTech Website
```

**Reporting time zone:**
```
India - (GMT+05:30) India Standard Time
```
- Search for "India" in the dropdown
- Select: (GMT+05:30) India Standard Time

**Currency:**
```
Indian Rupee (₹)
```
- Search for "rupee" in the dropdown
- Select: Indian Rupee (₹)

Click **"Next"** button

### 2.3 Business Information
Fill in these details:

**Industry category:**
```
Technology
```
- Or select: "Computers and Electronics"

**Business size:**
```
Small (1-10 employees)
```
- Select based on your actual size

**How do you intend to use Google Analytics?**
- ✅ Check: "Examine user behavior"
- ✅ Check: "Measure advertising ROI"

Click **"Create"** button

### 2.4 Accept Terms
- Read the Terms of Service
- Check the boxes:
  - ✅ I accept the Google Analytics Terms of Service
  - ✅ I accept the Data Processing Amendment
- Click **"I Accept"** button

---

## STEP 3: Set Up Data Stream (Web)

### 3.1 Choose Platform
You'll see: "Choose a platform to get started"

Click on **"Web"** icon (globe icon)

### 3.2 Set Up Web Stream
Fill in these details:

**Website URL:**
```
https://thehgtech.com
```
- Make sure to include `https://`
- Do NOT include trailing slash

**Stream name:**
```
TheHGTech Main Site
```

**Enhanced measurement:**
- ✅ Leave this ON (enabled by default)
- This automatically tracks:
  - Page views
  - Scrolls
  - Outbound clicks
  - Site search
  - Video engagement
  - File downloads

Click **"Create stream"** button

---

## STEP 4: Get Your Measurement ID

### 4.1 Copy Measurement ID
After creating the stream, you'll see:

**Web stream details** page with:
- Stream name: TheHGTech Main Site
- Stream URL: https://thehgtech.com
- **Measurement ID: G-XXXXXXXXXX** ← This is what you need!

**IMPORTANT:** Your Measurement ID will look like:
```
G-ABC123XYZ
```
or
```
G-1234567890
```

### 4.2 Copy the Full Tracking Code (Optional)
Scroll down to see **"Google tag"** section

You'll see:
- **Global site tag (gtag.js)**
- A code snippet that looks like this:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**You don't need to copy this** - we already have the code in your site!

Just copy the **Measurement ID** (G-XXXXXXXXXX)

---

## STEP 5: Add Measurement ID to Your Website

### 5.1 Open Your index.html File
```bash
# In your terminal or code editor, open:
/Volumes/Data-Personal/Webpage/thehgtech/index.html
```

### 5.2 Find the Google Analytics Section
Search for this line (around line 79):
```html
<!-- ========== GOOGLE ANALYTICS 4 ========== -->
```

You'll see:
```html
<!-- TODO: Replace G-XXXXXXXXXX with your actual Google Analytics 4 Measurement ID -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
</script>
```

### 5.3 Replace Placeholder with Your ID
Replace **BOTH** instances of `G-XXXXXXXXXX` with your actual Measurement ID

**Before:**
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
</script>
```

**After:** (example with ID G-ABC123XYZ)
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-ABC123XYZ"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-ABC123XYZ');
</script>
```

### 5.4 Save the File
- Save `index.html`

---

## STEP 6: Deploy to Production

### 6.1 Commit Changes
```bash
cd /Volumes/Data-Personal/Webpage/thehgtech
git add index.html
git commit -m "🔧 Add Google Analytics 4 tracking (G-XXXXXXXXXX)"
```

### 6.2 Push to GitHub
```bash
git push
```

Wait 1-2 minutes for GitHub Pages to deploy.

---

## STEP 7: Verify Installation

### 7.1 Test with Google Tag Assistant (Chrome Extension)
1. Install Chrome extension: **Tag Assistant Legacy (by Google)**
   - Go to: https://chrome.google.com/webstore/
   - Search: "Tag Assistant Legacy"
   - Click "Add to Chrome"

2. Visit your website: https://thehgtech.com

3. Click the Tag Assistant icon in Chrome toolbar

4. Click "Enable" button

5. Refresh the page

6. You should see:
   - ✅ Google Analytics: GA4 - G-XXXXXXXXXX
   - Status: Working

### 7.2 Test with Real-Time Reports
1. Go back to Google Analytics: https://analytics.google.com/

2. In left sidebar, click **"Reports"**

3. Click **"Realtime"**

4. Open your website in a new tab: https://thehgtech.com

5. Within 30 seconds, you should see:
   - **Users in last 30 minutes: 1** (that's you!)
   - Your page view in the list
   - Your location on the map

### 7.3 If You Don't See Data
Wait 5 minutes and check again. Sometimes it takes a few minutes for data to appear.

If still no data:
1. Check that you replaced BOTH instances of G-XXXXXXXXXX
2. Check that your site is live at https://thehgtech.com
3. Make sure you're not using an ad blocker
4. Try in incognito/private browsing mode

---

## STEP 8: Configure Additional Settings (Optional but Recommended)

### 8.1 Enable Google Signals
This allows you to track users across devices.

1. In Google Analytics, click **"Admin"** (bottom left)
2. Under "Property" column, click **"Data Settings"** → **"Data Collection"**
3. Toggle ON: **"Google signals data collection"**
4. Click **"Continue"** → **"Activate"**

### 8.2 Set Up Enhanced Measurement Events
Already enabled by default, but verify:

1. Click **"Admin"** → **"Data Streams"**
2. Click on your stream: **"TheHGTech Main Site"**
3. Scroll to **"Enhanced measurement"**
4. Click the gear icon ⚙️
5. Make sure these are enabled:
   - ✅ Page views
   - ✅ Scrolls
   - ✅ Outbound clicks
   - ✅ Site search
   - ✅ Video engagement
   - ✅ File downloads

### 8.3 Link to Google Search Console (Do this after Search Console setup)
1. Click **"Admin"** → **"Product Links"**
2. Click **"Search Console Links"**
3. Click **"Link"**
4. Select your Search Console property
5. Click **"Next"** → **"Submit"**

---

## STEP 9: Explore Your Dashboard

### 9.1 Key Reports to Check Daily
1. **Realtime** - See who's on your site right now
2. **Acquisition** → **Traffic acquisition** - Where visitors come from
3. **Engagement** → **Pages and screens** - Most popular pages
4. **User attributes** → **Demographics** - Age, gender, location

### 9.2 Set Up Custom Reports (Later)
Once you have some data (after 1 week), you can create custom reports for:
- CVE tracker page views
- Ransomware tracker page views
- Threat intel dashboard usage
- Guide downloads

---

## TROUBLESHOOTING

### Problem: "Not receiving any data"
**Solution:**
1. Wait 24-48 hours for data to accumulate
2. Check Realtime reports (data appears within 30 seconds)
3. Verify Measurement ID is correct in index.html
4. Clear browser cache and try again
5. Check browser console for errors (F12 → Console tab)

### Problem: "Seeing duplicate page views"
**Solution:**
- Make sure you only have ONE gtag.js script on the page
- Check that you didn't add the code twice

### Problem: "Can't find Measurement ID"
**Solution:**
1. Go to https://analytics.google.com/
2. Click **"Admin"** (bottom left)
3. Under "Property" column, click **"Data Streams"**
4. Click on your stream name
5. Your Measurement ID is at the top: **G-XXXXXXXXXX**

---

## WHAT TO TRACK (Week 1)

### Daily Checks (5 minutes)
1. **Realtime** → Users in last 30 minutes
2. **Acquisition** → Traffic sources
3. **Engagement** → Top pages

### Weekly Review (15 minutes)
1. Total users (week over week)
2. Top traffic sources
3. Most popular pages
4. Average engagement time
5. Bounce rate

### Set Goals
After 1 week, set up these goals:
- Newsletter signup
- CVE tracker page view
- Ransomware tracker page view
- Guide download
- Threat intel dashboard usage

---

## NEXT STEP

Once Google Analytics is set up and verified, proceed to:
**Google Search Console Setup** (see next guide)

---

**Estimated Time:** 15 minutes  
**Difficulty:** Easy  
**Cost:** Free

✅ **You're done!** Your website is now tracking visitors with Google Analytics 4.
