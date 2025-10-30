#!/usr/bin/env python3
"""
TheHGTech Content Automation Script - DEBUG VERSION
Generates and updates cybersecurity and AI shorts using OpenAI API
WITH DETAILED LOGGING TO TROUBLESHOOT ISSUES
"""

import os
import sys
import json
import re
from datetime import datetime
import pytz
from openai import OpenAI

# Initialize OpenAI client
api_key = os.environ.get('OPENAI_API_KEY')
print(f"🔑 API Key present: {'Yes' if api_key else 'No'}")
print(f"🔑 API Key length: {len(api_key) if api_key else 0} characters")

if not api_key:
    print("❌ ERROR: OPENAI_API_KEY environment variable is not set!")
    sys.exit(1)

client = OpenAI(api_key=api_key)

# Prompts
CYBER_PROMPT = """You are my content assistant for TheHGTech.com, a professional publication focused on Cybersecurity.
Generate 4–5 verified cybersecurity news shorts from the *past 24 hours only*.
Each short must be ~200 words and follow this exact format:
Date: [e.g., Oct 30 2025]
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
Date: [e.g., Oct 30 2025]
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
        
        print(f"   📅 Date '{date_string}' is {age_hours:.1f} hours old")
        
        return age_hours >= 24
    except Exception as e:
        print(f"   ⚠️  Could not parse date '{date_string}': {e}")
        # If parsing fails, keep the item (don't remove)
        return False


def generate_content(prompt, content_type):
    """Generate content using OpenAI API"""
    print(f"\n🤖 Generating {content_type} content...")
    print(f"   Model: gpt-4o")
    print(f"   Prompt length: {len(prompt)} characters")
    
    try:
        response = client.chat.completions.create(
            model="gpt-4o",
            messages=[
                {"role": "system", "content": "You are a professional tech news content generator. Always provide accurate, verified information with proper sources."},
                {"role": "user", "content": prompt}
            ],
            temperature=0.7,
            max_tokens=3000
        )
        
        content = response.choices[0].message.content
        print(f"✅ Generated {content_type} content successfully")
        print(f"   Response length: {len(content)} characters")
        print(f"   First 100 chars: {content[:100]}...")
        return content
        
    except Exception as e:
        print(f"❌ Error generating {content_type} content: {e}")
        print(f"   Error type: {type(e).__name__}")
        return None


def parse_shorts(content):
    """Parse the generated content into structured shorts"""
    if not content:
        print("   ⚠️  No content to parse")
        return []
    
    shorts = []
    
    # Split by "Date:" to get individual shorts
    items = re.split(r'\n(?=Date:)', content)
    print(f"   Found {len(items)} potential items")
    
    for i, item in enumerate(items):
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
            print(f"   ✅ Parsed item {i+1}: {short['title'][:50]}...")
        else:
            print(f"   ❌ Failed to parse item {i+1} (missing fields)")
    
    return shorts


def read_content_js():
    """Read the current content.js file"""
    print("\n📖 Reading content.js...")
    
    if not os.path.exists('content.js'):
        print("   ❌ content.js file not found!")
        print(f"   Current directory: {os.getcwd()}")
        print(f"   Files in directory: {os.listdir('.')}")
        sys.exit(1)
    
    with open('content.js', 'r', encoding='utf-8') as f:
        content = f.read()
    
    print(f"   File size: {len(content)} bytes")
    
    # Extract the websiteContent object
    match = re.search(r'var websiteContent = ({.*?});', content, re.DOTALL)
    if not match:
        print("❌ Could not parse content.js - websiteContent not found")
        sys.exit(1)
    
    print("   ✅ Successfully parsed content.js")
    return json.loads(match.group(1))


def write_content_js(data):
    """Write updated content back to content.js"""
    print("\n💾 Writing to content.js...")
    
    js_content = f"""// TheHGTech Website Content
// Update this file to change website content

var websiteContent = {json.dumps(data, indent=4, ensure_ascii=False)};"""
    
    with open('content.js', 'w', encoding='utf-8') as f:
        f.write(js_content)
    
    print(f"   ✅ Written {len(js_content)} bytes to content.js")


def update_shorts():
    """Main function to update shorts with 24-hour rolling window"""
    ist_time = get_current_time_ist()
    
    print(f"\n{'='*60}")
    print(f"🚀 TheHGTech Content Automation - DEBUG MODE")
    print(f"⏰ Time: {ist_time.strftime('%Y-%m-%d %I:%M %p IST')}")
    print(f"📂 Working directory: {os.getcwd()}")
    print(f"🔄 Mode: 24-Hour Rolling Window with Safeguards")
    print(f"{'='*60}\n")
    
    # Read current content FIRST
    data = read_content_js()
    existing_cyber = data.get('cyberShorts', [])
    existing_ai = data.get('aiShorts', [])
    
    print(f"\n📚 EXISTING CONTENT:")
    print(f"   Cyber shorts: {len(existing_cyber)}")
    print(f"   AI shorts: {len(existing_ai)}")
    
    if existing_cyber:
        print(f"   Latest cyber: {existing_cyber[0].get('title', 'N/A')[:50]}...")
        print(f"   Latest cyber date: {existing_cyber[0].get('date', 'N/A')}")
    
    if existing_ai:
        print(f"   Latest AI: {existing_ai[0].get('title', 'N/A')[:50]}...")
        print(f"   Latest AI date: {existing_ai[0].get('date', 'N/A')}")
    
    # Generate new content
    cyber_content = generate_content(CYBER_PROMPT, "Cybersecurity")
    ai_content = generate_content(AI_PROMPT, "AI")
    
    # Parse the shorts (will return empty list if generation failed)
    new_cyber_shorts = parse_shorts(cyber_content)
    new_ai_shorts = parse_shorts(ai_content)
    
    print(f"\n📊 NEW CONTENT GENERATED:")
    print(f"   Cybersecurity shorts: {len(new_cyber_shorts)}")
    print(f"   AI shorts: {len(new_ai_shorts)}")
    
    if new_cyber_shorts:
        print(f"   First new cyber: {new_cyber_shorts[0].get('title', 'N/A')[:50]}...")
    
    if new_ai_shorts:
        print(f"   First new AI: {new_ai_shorts[0].get('title', 'N/A')[:50]}...")
    
    # ⚠️ SAFEGUARD: If no new content was generated, don't delete old content!
    if len(new_cyber_shorts) == 0 and len(new_ai_shorts) == 0:
        print("\n⚠️  WARNING: No new content generated!")
        print("⚠️  Keeping existing content to prevent data loss")
        print("⚠️  Check your OpenAI API key and try again later")
        print("\n❌ EXITING WITHOUT CHANGES")
        sys.exit(0)  # Exit without changes
    
    print(f"\n🗑️  FILTERING OLD CONTENT (24+ hours):")
    # Filter out content older than 24 hours
    filtered_cyber = [s for s in existing_cyber if not is_older_than_24_hours(s.get('date', ''))]
    filtered_ai = [s for s in existing_ai if not is_older_than_24_hours(s.get('date', ''))]
    
    removed_cyber = len(existing_cyber) - len(filtered_cyber)
    removed_ai = len(existing_ai) - len(filtered_ai)
    
    print(f"\n   Removed {removed_cyber} cyber shorts")
    print(f"   Removed {removed_ai} AI shorts")
    print(f"   Kept {len(filtered_cyber)} cyber shorts")
    print(f"   Kept {len(filtered_ai)} AI shorts")
    
    # ⚠️ SAFEGUARD: Keep at least some old content if filtering removes everything
    MIN_CONTENT = 3
    if len(filtered_cyber) < MIN_CONTENT and len(existing_cyber) > 0:
        print(f"\n⚠️  Applying backup: keeping {MIN_CONTENT} most recent cyber shorts")
        filtered_cyber = existing_cyber[:MIN_CONTENT]
    
    if len(filtered_ai) < MIN_CONTENT and len(existing_ai) > 0:
        print(f"⚠️  Applying backup: keeping {MIN_CONTENT} most recent AI shorts")
        filtered_ai = existing_ai[:MIN_CONTENT]
    
    # Combine new and remaining old shorts (new ones first)
    data['cyberShorts'] = new_cyber_shorts + filtered_cyber
    data['aiShorts'] = new_ai_shorts + filtered_ai
    
    # Limit to max 15 each (keep newest)
    data['cyberShorts'] = data['cyberShorts'][:15]
    data['aiShorts'] = data['aiShorts'][:15]
    
    print(f"\n📝 COMBINED CONTENT:")
    print(f"   Total cyber shorts: {len(data['cyberShorts'])}")
    print(f"   Total AI shorts: {len(data['aiShorts'])}")
    
    # ⚠️ FINAL SAFEGUARD: Don't write if we'd end up with no content
    if len(data['cyberShorts']) == 0 or len(data['aiShorts']) == 0:
        print("\n❌ ERROR: Would result in empty content sections!")
        print("❌ Aborting update to prevent data loss")
        sys.exit(1)
    
    # Write back to file
    write_content_js(data)
    
    print(f"\n{'='*60}")
    print(f"✅ SUCCESS: Updated content.js")
    print(f"📊 Final count: {len(data['cyberShorts'])} cyber, {len(data['aiShorts'])} AI shorts")
    print(f"📅 Content mix: new + recent (within rolling window)")
    print(f"{'='*60}\n")


if __name__ == "__main__":
    try:
        update_shorts()
    except Exception as e:
        print(f"\n❌ FATAL ERROR: {e}")
        print(f"   Error type: {type(e).__name__}")
        import traceback
        print("\n📋 Full traceback:")
        traceback.print_exc()
        sys.exit(1)
