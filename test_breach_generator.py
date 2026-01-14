#!/usr/bin/env python3
"""
Breach Deep Dive Generator - Using OpenAI GPT-4o
"""

import os
import requests
from datetime import datetime
from bs4 import BeautifulSoup
from openai import OpenAI

CURRENT_DATE = datetime.now()

def fetch_one_breach():
    """Fetch just ONE recent breach to minimize processing"""
    print("📡 Fetching breach news...")
    
    try:
        resp = requests.get(
            "https://www.bleepingcomputer.com/feed/",
            timeout=10,
            headers={'User-Agent': 'TheHGTech/1.0'}
        )
        soup = BeautifulSoup(resp.content, 'xml')
        items = soup.find_all('item')
        
        for item in items:
            title = item.find('title').text if item.find('title') else ""
            if any(kw in title.lower() for kw in ['breach', 'ransomware', 'hack', 'data', 'attack']):
                desc = item.find('description').text if item.find('description') else ""
                # Clean HTML from description
                desc_soup = BeautifulSoup(desc, 'html.parser')
                clean_desc = desc_soup.get_text()[:600]
                
                return {
                    'title': title,
                    'description': clean_desc,
                    'date': item.find('pubDate').text if item.find('pubDate') else ""
                }
    except Exception as e:
        print(f"Error: {e}")
    
    return None

def generate_article(breach):
    """Generate article using OpenAI GPT-4o"""
    
    api_key = os.environ.get('OPENAI_API_KEY')
    if not api_key:
        print("❌ OPENAI_API_KEY not set!")
        return None
    
    print("🤖 Configuring OpenAI GPT-4o...")
    client = OpenAI(api_key=api_key)
    
    # Optimized prompt
    prompt = f"""Today is {CURRENT_DATE.strftime('%B %d, %Y')} (January 2026).

Write a professional cybersecurity breach analysis article about:

HEADLINE: {breach['title']}
DETAILS: {breach['description']}

Requirements:
- Write 1500-2000 words
- Professional cybersecurity analysis tone
- DO NOT include any source URLs or citations
- DO NOT reference where this information came from
- Write as if from TheHGTech's own security research team analysis
- Include MITRE ATT&CK technique IDs where relevant (e.g., T1566, T1078)

Generate complete HTML article with this structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[SEO Title] | TheHGTech</title>
    <meta name="description" content="[150 char SEO description]">
    <style>
        :root {{
            --bg-primary: #0d1117;
            --bg-secondary: #161b22;
            --text-primary: #e6edf3;
            --text-secondary: #8b949e;
            --accent-blue: #58a6ff;
            --accent-red: #f85149;
            --accent-green: #3fb950;
            --accent-yellow: #d29922;
            --border: #30363d;
        }}
        * {{ box-sizing: border-box; margin: 0; padding: 0; }}
        body {{
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: var(--bg-primary);
            color: var(--text-primary);
            line-height: 1.7;
        }}
        .container {{ max-width: 900px; margin: 0 auto; padding: 2rem; }}
        .badge {{
            display: inline-block;
            padding: 0.25rem 0.75rem;
            border-radius: 2rem;
            font-size: 0.75rem;
            font-weight: 600;
            text-transform: uppercase;
        }}
        .badge-critical {{ background: var(--accent-red); color: white; }}
        .badge-info {{ background: var(--accent-blue); color: white; }}
        h1 {{ font-size: 2.5rem; margin: 1rem 0; line-height: 1.2; }}
        h2 {{ color: var(--accent-blue); margin: 2rem 0 1rem; padding-bottom: 0.5rem; border-bottom: 1px solid var(--border); }}
        h3 {{ color: var(--text-primary); margin: 1.5rem 0 0.75rem; }}
        p {{ margin-bottom: 1rem; color: var(--text-secondary); }}
        .meta {{ color: var(--text-secondary); margin: 1rem 0 2rem; font-size: 0.9rem; }}
        .key-findings {{
            background: var(--bg-secondary);
            border-left: 4px solid var(--accent-blue);
            padding: 1.5rem;
            margin: 1.5rem 0;
            border-radius: 0 8px 8px 0;
        }}
        .warning-box {{
            background: rgba(248, 81, 73, 0.1);
            border-left: 4px solid var(--accent-red);
            padding: 1.5rem;
            margin: 1.5rem 0;
            border-radius: 0 8px 8px 0;
        }}
        .timeline {{
            border-left: 2px solid var(--border);
            padding-left: 2rem;
            margin: 1.5rem 0;
        }}
        .timeline-item {{
            position: relative;
            margin-bottom: 1.5rem;
        }}
        .timeline-item::before {{
            content: '';
            position: absolute;
            left: -2.35rem;
            top: 0.5rem;
            width: 10px;
            height: 10px;
            background: var(--accent-blue);
            border-radius: 50%;
        }}
        .timeline-date {{
            color: var(--accent-blue);
            font-weight: 600;
            font-size: 0.85rem;
        }}
        .mitre-tag {{
            display: inline-block;
            background: var(--bg-secondary);
            border: 1px solid var(--border);
            padding: 0.2rem 0.5rem;
            border-radius: 4px;
            font-family: monospace;
            font-size: 0.8rem;
            color: var(--accent-yellow);
            margin: 0.2rem;
        }}
        ul, ol {{ margin: 1rem 0 1rem 2rem; color: var(--text-secondary); }}
        li {{ margin-bottom: 0.5rem; }}
        .faq {{ background: var(--bg-secondary); padding: 1.5rem; border-radius: 8px; margin: 1rem 0; }}
        .faq h4 {{ color: var(--text-primary); margin-bottom: 0.5rem; }}
        .faq p {{ margin-bottom: 0; }}
        code {{ background: var(--bg-secondary); padding: 0.2rem 0.4rem; border-radius: 4px; font-family: monospace; }}
    </style>
</head>
<body>
    <article class="container">
        <!-- Content starts here -->
        
        <span class="badge badge-critical">Breach Analysis</span>
        <span class="badge badge-info">January 2026</span>
        
        <h1>[Article Title - Make it compelling]</h1>
        
        <div class="meta">
            <strong>Published:</strong> {CURRENT_DATE.strftime('%B %d, %Y')} | 
            <strong>Category:</strong> Data Breach Analysis |
            <strong>Reading Time:</strong> 8 min
        </div>
        
        <div class="key-findings">
            <h3>🔑 Key Findings</h3>
            <ul>
                <li>[Key finding 1]</li>
                <li>[Key finding 2]</li>
                <li>[Key finding 3]</li>
            </ul>
        </div>
        
        <h2>Executive Summary</h2>
        <p>[2-3 detailed paragraphs summarizing what happened]</p>
        
        <h2>Organization Background</h2>
        <p>[Context about the organization, industry, why they're a target]</p>
        
        <h2>Attack Timeline</h2>
        <div class="timeline">
            <div class="timeline-item">
                <div class="timeline-date">[Date/Time]</div>
                <p>[What happened]</p>
            </div>
            <div class="timeline-item">
                <div class="timeline-date">[Date/Time]</div>
                <p>[What happened next]</p>
            </div>
            <div class="timeline-item">
                <div class="timeline-date">[Date/Time]</div>
                <p>[Discovery/Response]</p>
            </div>
        </div>
        
        <h2>Attack Vector Analysis</h2>
        <p>[Detailed technical analysis of HOW the attack happened]</p>
        <p>Relevant MITRE ATT&CK techniques:</p>
        <p><span class="mitre-tag">T1566</span> <span class="mitre-tag">T1078</span> <span class="mitre-tag">T1486</span></p>
        
        <div class="warning-box">
            <h3>⚠️ Critical Vulnerability Exploited</h3>
            <p>[Description of the main vulnerability or weakness]</p>
        </div>
        
        <h2>Impact Assessment</h2>
        <p>[Data compromised, number of people affected, types of data]</p>
        <p>[Regulatory implications - GDPR, HIPAA if applicable]</p>
        <p>[Financial/reputational impact]</p>
        
        <h2>What Went Wrong</h2>
        <ul>
            <li><strong>[Security Failure 1]:</strong> [Explanation]</li>
            <li><strong>[Security Failure 2]:</strong> [Explanation]</li>
            <li><strong>[Security Failure 3]:</strong> [Explanation]</li>
        </ul>
        
        <h2>Lessons Learned & Recommendations</h2>
        <ol>
            <li><strong>[Recommendation 1]:</strong> [Actionable details]</li>
            <li><strong>[Recommendation 2]:</strong> [Actionable details]</li>
            <li><strong>[Recommendation 3]:</strong> [Actionable details]</li>
            <li><strong>[Recommendation 4]:</strong> [Actionable details]</li>
        </ol>
        
        <h2>Frequently Asked Questions</h2>
        
        <div class="faq">
            <h4>[Question about the breach]?</h4>
            <p>[Concise answer]</p>
        </div>
        
        <div class="faq">
            <h4>[Question about impact]?</h4>
            <p>[Concise answer]</p>
        </div>
        
        <div class="faq">
            <h4>[Question about protection]?</h4>
            <p>[Concise answer]</p>
        </div>
        
    </article>
</body>
</html>
```

Fill in ALL the bracketed placeholders with actual, detailed content based on the breach information provided. Generate a complete, production-ready article."""

    print("🤖 Calling OpenAI GPT-4o...")
    
    try:
        response = client.chat.completions.create(
            model="gpt-4o",
            messages=[
                {
                    "role": "system",
                    "content": "You are a senior cybersecurity analyst writing for TheHGTech, a professional cybersecurity news website. Write detailed, accurate, and actionable security content. Today's date is January 15, 2026."
                },
                {
                    "role": "user", 
                    "content": prompt
                }
            ],
            temperature=0.7,
            max_tokens=4000
        )
        
        article = response.choices[0].message.content
        print(f"✅ Generated! ({len(article)} chars)")
        return article
        
    except Exception as e:
        print(f"❌ Error: {e}")
        return None

def main():
    print("=" * 50)
    print("🔐 Breach Deep Dive Generator - GPT-4o")
    print(f"📅 {CURRENT_DATE.strftime('%B %d, %Y')}")
    print("=" * 50)
    
    # Fetch ONE breach
    breach = fetch_one_breach()
    if not breach:
        print("❌ No breach found")
        return
    
    print(f"\n✅ Selected: {breach['title'][:70]}...")
    print(f"   Details: {breach['description'][:100]}...")
    
    # Generate
    article = generate_article(breach)
    if not article:
        return
    
    # Clean the output - extract just HTML if wrapped in markdown code blocks
    if "```html" in article:
        article = article.split("```html")[1].split("```")[0]
    elif "```" in article:
        parts = article.split("```")
        if len(parts) >= 2:
            article = parts[1]
    
    # Save
    output_file = "test_breach_output.html"
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(article.strip())
    
    print(f"\n📄 Saved to: {output_file}")
    print(f"   Size: {len(article)} characters")
    print("\n🎉 Done! Open the HTML file to review.")

if __name__ == "__main__":
    main()
