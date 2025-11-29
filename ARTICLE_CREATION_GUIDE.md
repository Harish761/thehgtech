# Quick Article Creation Guide

## Super Easy Method: Use the Interactive Script

### 1. Run the Article Creator
```bash
cd /Volumes/Data-Personal/Webpage/thehgtech
python3 create_article.py
```

### 2. Follow the Prompts
The script will ask you for:
- **Title**: Your article title
- **Category**: Cybersecurity, AI, Policy, etc.
- **Excerpt**: Short 1-2 sentence summary
- **Tags**: Comma-separated keywords
- **Author**: Your name (defaults to "Harish G")
- **Content**: Paste HTML or provide file path

### 3. Publish
```bash
git add articles.json
git commit -m "Add new article: [Your Title]"
git push
```

**Done!** Article is live in ~1 minute.

---

## Alternative: Write in Your Favorite Editor

### Option A: Use AI to Generate Draft

**1. Get AI to write the article** (ChatGPT, Claude, Gemini):
```
Write a 1500-1700 word cybersecurity analysis article about [TOPIC].

Style: Technical but accessible, analytical, first-person when sharing experience.
Include: Specific technical details, citations to sources, actionable recommendations.
Format: HTML with <article>, <h2>, <h3>, <p>, <ul>, <ol> tags.
Tone: Professional security analyst sharing insights.
```

**2. Save the HTML output** to a file (e.g., `my-article.html`)

**3. Run the script**:
```bash
python3 create_article.py
```
Choose option "b" and provide the file path.

---

### Option B: Write Directly in HTML

**1. Create a new file** (e.g., `article-draft.html`):
```html
<article>
  <header>
    <h1>Your Article Title</h1>
    <p><strong>Author:</strong> Harish G</p>
    <p><strong>Published:</strong> November 27, 2025</p>
  </header>

  <p>Your introduction paragraph...</p>

  <h2>First Section</h2>
  <p>Content here...</p>

  <h2>Second Section</h2>
  <p>More content...</p>

  <h2>Conclusion</h2>
  <p>Final thoughts...</p>
</article>
```

**2. Run the script** and point to your file.

---

## Even Easier: Markdown to HTML Converter

If you prefer writing in Markdown, I can create a converter that:
1. You write article in Markdown (easier than HTML)
2. Script converts to HTML automatically
3. Adds to articles.json

**Want this?** Let me know and I'll build it in 5 minutes.

---

## Workflow Comparison

| Method | Time | Difficulty | Best For |
|--------|------|------------|----------|
| **Interactive Script** | 5 mins | ⭐ Easy | Quick articles |
| **AI + Script** | 10 mins | ⭐⭐ Medium | Long-form analysis |
| **HTML Editor** | 30+ mins | ⭐⭐⭐ Hard | Full control |
| **Markdown** | 15 mins | ⭐ Easy | Writers who prefer MD |

---

## Tips for Faster Article Creation

### 1. Use AI for Research
Ask AI to:
- Summarize 5-10 sources on a topic
- Extract key facts and statistics
- Generate outline with main points

### 2. Keep a Template
Save a template HTML file with your standard structure:
```html
<article>
  <header>
    <h1>[TITLE]</h1>
    <p><strong>Author:</strong> Harish G</p>
    <p><strong>Published:</strong> [DATE]</p>
  </header>

  <p>[INTRO]</p>

  <h2>Background</h2>
  <p>[CONTEXT]</p>

  <h2>Technical Analysis</h2>
  <p>[DETAILS]</p>

  <h2>Implications</h2>
  <p>[IMPACT]</p>

  <h2>Recommendations</h2>
  <ol>
    <li>[ACTION 1]</li>
    <li>[ACTION 2]</li>
  </ol>

  <h2>Conclusion</h2>
  <p>[SUMMARY]</p>
</article>
```

### 3. Batch Your Writing
- Write 2-3 articles in one sitting
- Use the script to add them all at once
- Publish together

### 4. Use Voice-to-Text
- Dictate your article
- Clean up the text
- Convert to HTML
- Add via script

---

## Example: Full Workflow (10 minutes)

**Minute 1-2**: Pick a topic from recent news
**Minute 3-7**: Ask AI to write 1500-word analysis
**Minute 8**: Copy HTML to file
**Minute 9**: Run `python3 create_article.py`, provide file path
**Minute 10**: Git commit and push

**Total**: 10 minutes from idea to published article!

---

## Need Help?

Run the script and it will guide you through everything:
```bash
python3 create_article.py
```

Or create a Markdown converter if you prefer that format.
