#!/usr/bin/env python3
"""
TheHGTech Content Automation Script
Generates and updates cybersecurity and AI shorts using OpenAI API
"""

import os
import sys
import json
import re
from datetime import datetime
import pytz
from openai import OpenAI

# Initialize OpenAI client
client = OpenAI(api_key=os.environ.get('OPENAI_API_KEY'))

# Prompts
CYBER_PROMPT = """You are my content assistant for TheHGTech.com, a professional publication focused on Cybersecurity.
Generate 4–5 verified cybersecurity news shorts from the *past 24 hours only*.
Each short must be ~200 words and follow this exact format:
Date: [e.g., Oct 29 2025]
Source Name: [Publisher or organisation name]
Source URL: [Full valid link]
Title: [Catchy and concise headline]
Content:
[Write a single, professional, evidence-based paragraph of around 200 words.
Summarise the event, explain its significance, and highlight implications or actions relevant to cybersecurity teams.]
Requirements:
1. Use only verified, reputable sources (e.g., BleepingComputer, MITRE, CISA, Reuters, Microsoft Security Blog, etc.)
2. Do not invent or speculate — use evidence-based facts only.
3. Keep a clear, concise, and professional tone suitable for a cybersecurity audience.
4. No promotional or opinion content.
5. Ensure every short focuses on one main incident, threat, vulnerability, policy update, or research finding.
6. Each update must reflect events that occurred or were publicly reported *within the past 24 hours*.
Output must start with:
Cybersecurity Shorts
--------------------
[Then include 4–5 updates in the exact structure above]"""

AI_PROMPT = """You are my content assistant for TheHGTech.com, a professional publication focused on Artificial Intelligence.
Generate 4–5 verified AI news shorts from the *past 24 hours only*.
Each short must be ~200 words and follow this exact format:
Date: [e.g., Oct 29 2025]
Source Name: [Publisher or organisation name]
Source URL: [Full valid link]
Title: [Catchy and concise headline]
Content:
[Write a single, professional, evidence-based paragraph of around 200 words.
Summarise the update clearly and explain its relevance or impact to the AI ecosystem.]
Requirements:
1. Use only reputable, verifiable sources (e.g., OpenAI Blog, TechCrunch, MIT News, Reuters, Google AI Blog, etc.)
2. Focus on real developments — product launches, research papers, policy changes, investments, or partnerships.
3. Maintain factual accuracy and professional, SEO-friendly tone.
4. No speculation, filler, or subjective commentary.
5. Each item must reflect events that occurred or were reported *within the past 24 hours*.
Output must start with:
AI Shorts
---------
[Then include 4–5 updates in the exact structure above]"""


def get_current_time_ist():
    """Get current time in IST"""
    ist = pytz.timezone('Asia/Kolkata')
    return datetime.now(ist)


def is_older_than_24_hours(date_string):
    """Check if a date string is older than 24 hours"""
    try:
        ist = pytz.timezone('Asia/Kolkata')
        now = datetime.now(ist)
        
        # Parse the date string (e.g., "Oct 29 2025")
        date_obj = datetime.strptime(date_string, "%b %d %Y")
        date_obj = ist.localize(date_obj)
        
        # Calculate age in hours
        age_hours = (now - date_obj).total_seconds() / 3600
        
        return age_hours >= 24
    except:
        # If parsing fails, keep the item (don't remove)
        return False


def generate_content(prompt, content_type):
    """Generate content using OpenAI API"""
    print(f"\n🤖 Generating {content_type} content...")
    
    try:
        response = client.chat.completions.create(
            model="gpt-4o",  # Using GPT-4o for better accuracy
            messages=[
                {"role": "system", "content": "You are a professional tech news content generator. Always provide accurate, verified information with proper sources."},
                {"role": "user", "content": prompt}
            ],
            temperature=0.7,
            max_tokens=3000
        )
        
        content = response.choices[0].message.content
        print(f"✅ Generated {content_type} content successfully")
        return content
        
    except Exception as e:
        print(f"❌ Error generating {content_type} content: {e}")
        sys.exit(1)


def parse_shorts(content):
    """Parse the generated content into structured shorts"""
    shorts = []
    
    # Split by "Date:" to get individual shorts
    items = re.split(r'\n(?=Date:)', content)
    
    for item in items:
        if not item.strip() or 'Date:' not in item:
            continue
            
        # Extract fields using regex
        date_match = re.search(r'Date:\s*(.+?)(?:\n|$)', item)
        source_match = re.search(r'Source Name:\s*(.+?)(?:\n|$)', item)
        url_match = re.search(r'Source URL:\s*(.+?)(?:\n|$)', item)
        title_match = re.search(r'Title:\s*(.+?)(?:\n|$)', item)
        content_match = re.search(r'Content:\s*(.+)', item, re.DOTALL)
        
        if all([date_match, source_match, url_match, title_match, content_match]):
            short = {
                "date": date_match.group(1).strip(),
                "title": title_match.group(1).strip(),
                "content": content_match.group(1).strip(),
                "source": source_match.group(1).strip(),
                "sourceUrl": url_match.group(1).strip()
            }
            shorts.append(short)
    
    return shorts


def read_content_js():
    """Read the current content.js file"""
    with open('content.js', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract the websiteContent object
    match = re.search(r'var websiteContent = ({.*?});', content, re.DOTALL)
    if not match:
        print("❌ Could not parse content.js")
        sys.exit(1)
    
    return json.loads(match.group(1))


def write_content_js(data):
    """Write updated content back to content.js"""
    js_content = f"""// TheHGTech Website Content
// Update this file to change website content

var websiteContent = {json.dumps(data, indent=4, ensure_ascii=False)};"""
    
    with open('content.js', 'w', encoding='utf-8') as f:
        f.write(js_content)


def update_shorts():
    """Main function to update shorts with 24-hour rolling window"""
    ist_time = get_current_time_ist()
    
    print(f"\n{'='*60}")
    print(f"🚀 TheHGTech Content Automation")
    print(f"⏰ Time: {ist_time.strftime('%Y-%m-%d %I:%M %p IST')}")
    print(f"🔄 Mode: 24-Hour Rolling Window")
    print(f"{'='*60}\n")
    
    # Generate new content
    cyber_content = generate_content(CYBER_PROMPT, "Cybersecurity")
    ai_content = generate_content(AI_PROMPT, "AI")
    
    # Parse the shorts
    new_cyber_shorts = parse_shorts(cyber_content)
    new_ai_shorts = parse_shorts(ai_content)
    
    print(f"\n📊 Generated {len(new_cyber_shorts)} new cybersecurity shorts")
    print(f"📊 Generated {len(new_ai_shorts)} new AI shorts")
    
    # Read current content
    data = read_content_js()
    existing_cyber = data.get('cyberShorts', [])
    existing_ai = data.get('aiShorts', [])
    
    print(f"📚 Existing: {len(existing_cyber)} cyber, {len(existing_ai)} AI shorts")
    
    # Filter out content older than 24 hours
    filtered_cyber = [s for s in existing_cyber if not is_older_than_24_hours(s.get('date', ''))]
    filtered_ai = [s for s in existing_ai if not is_older_than_24_hours(s.get('date', ''))]
    
    removed_cyber = len(existing_cyber) - len(filtered_cyber)
    removed_ai = len(existing_ai) - len(filtered_ai)
    
    if removed_cyber > 0 or removed_ai > 0:
        print(f"🗑️  Removed {removed_cyber} cyber and {removed_ai} AI shorts (24+ hours old)")
    else:
        print(f"✅ No content older than 24 hours to remove")
    
    # Combine new and remaining old shorts (new ones first)
    data['cyberShorts'] = new_cyber_shorts + filtered_cyber
    data['aiShorts'] = new_ai_shorts + filtered_ai
    
    # Limit to max 15 each (keep newest)
    data['cyberShorts'] = data['cyberShorts'][:15]
    data['aiShorts'] = data['aiShorts'][:15]
    
    # Write back to file
    write_content_js(data)
    
    print(f"\n✅ Successfully updated content.js")
    print(f"📝 Final count: {len(data['cyberShorts'])} cyber, {len(data['aiShorts'])} AI shorts")
    print(f"📅 All content is from the last 24 hours")
    print(f"\n{'='*60}\n")


if __name__ == "__main__":
    update_shorts()
