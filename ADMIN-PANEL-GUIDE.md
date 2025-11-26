# Article Admin Panel - User Guide

## Overview
The Article Admin Panel is a comprehensive content management system for managing your website articles. It provides an easy-to-use interface for creating, editing, and managing articles without touching code.

## Files Created
1. **`articles.json`** - Stores all article data in JSON format
2. **`admin-articles.html`** - Admin panel interface (keep this locally, don't deploy)
3. **`article-loader.js`** - Loads articles from JSON into your site

## How to Use the Admin Panel

### Opening the Admin Panel
1. Open `admin-articles.html` in your browser locally
2. The panel will automatically load articles from `articles.json`

### Creating a New Article
1. Click the **"+ New"** button in the sidebar
2. Fill in all fields:
   - **Article ID**: Unique identifier (e.g., article3, article4)
   - **Title**: Full article title
   - **Date**: Publication date
   - **Category**: Select from dropdown
   - **Author**: Your name (default: Harish G)
   - **Excerpt**: Short description for article cards
   - **Tags**: Type and press Enter to add tags
   - **Content**: Paste your HTML article content

3. Click **"💾 Save"** to save the article

### Editing an Article
1. Click on any article in the sidebar
2. Make your changes
3. Click **"💾 Save"** to update

### Deleting an Article
1. Select the article you want to delete
2. Click **"🗑️ Delete"**
3. Confirm the deletion

### Previewing Articles
1. While editing, click **"👁️ Preview"** to see how the article will look
2. Click **"✏️ Edit"** to return to editing mode

### Exporting Articles
1. Click **"📥 Export JSON"** to download the current `articles.json` file
2. This creates a backup of all your articles

## Deploying Changes

### Step 1: Export from Admin Panel
1. Make your changes in the admin panel
2. Click **"📥 Export JSON"**
3. Save the file as `articles.json`

### Step 2: Upload to Your Site
1. Replace the `articles.json` file on your server with the new one
2. Make sure `article-loader.js` is included in your HTML pages

### Step 3: Include the Loader
Add this to your HTML pages (e.g., `index.html`, `threat-intel.html`):

```html
<script src="article-loader.js"></script>
```

Place it **before** your `content.js` script.

## Features

### ✨ Auto-Save
- Changes are automatically saved to browser localStorage every 2 seconds
- You won't lose work if you accidentally close the tab

### 📊 Statistics
- Total articles count
- Total word count across all articles
- Last updated timestamp

### 🎨 Dark Theme
- Matches your website's design
- Professional and easy on the eyes

### 🏷️ Tag Management
- Easy tag addition (press Enter)
- Click × to remove tags
- Visual tag display

### 📝 Rich HTML Editor
- Full HTML support
- Syntax highlighting
- Large textarea for comfortable editing

## Tips

1. **Keep Backups**: Regularly export your `articles.json` file
2. **Test Locally**: Always preview articles before deploying
3. **Consistent Formatting**: Use the same HTML structure for all articles
4. **SEO-Friendly**: Include proper headings (h2, h3) and links
5. **Word Count**: Aim for 1500-1800 words for comprehensive articles

## Troubleshooting

### Articles not loading?
- Check that `articles.json` is in the same directory as your HTML files
- Verify `article-loader.js` is included before `content.js`
- Check browser console for errors

### Changes not showing?
- Clear your browser cache
- Make sure you exported and uploaded the new `articles.json`
- Verify the JSON file is valid (use a JSON validator)

### Admin panel not saving?
- Check browser console for errors
- Try exporting the JSON manually
- Verify all required fields are filled

## Security Note
**Keep `admin-articles.html` LOCAL only!** Never upload it to your public website. It's meant for local use only to manage your content.

## Workflow Example

1. **Write Article**: Create comprehensive article (1500-1800 words)
2. **Open Admin**: Open `admin-articles.html` locally
3. **Add Article**: Click "+ New" and fill in all fields
4. **Preview**: Check how it looks
5. **Save**: Click "💾 Save"
6. **Export**: Click "📥 Export JSON"
7. **Upload**: Replace `articles.json` on your server
8. **Verify**: Check your live site

That's it! You now have a professional article management system. 🎉
