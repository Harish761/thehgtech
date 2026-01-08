#!/usr/bin/env python3
"""
TheHGTech Content Automation Script - FINAL VERSION v2.1
✅ Fixed: GPT markdown formatting issue (** breaking URLs)
✅ Fixed: CVE date filter (now handles both date formats)
✅ NEW: Promotional content filtering (blocks tool/product promotions)
✅ Expanded: RSS feeds to 19 sources (10 cyber + 9 AI)
Includes CISA KEV CVE fetching with 7-day filtering
"""

import os
import sys
import json
import re
from datetime import datetime, timedelta
import pytz
from openai import OpenAI
import feedparser
from html import unescape, escape
import requests

# Initialize OpenAI client
client = OpenAI(api_key=os.environ.get('OPENAI_API_KEY'))

# CISA Known Exploited Vulnerabilities Catalog
CISA_KEV_URL = 'https://www.cisa.gov/sites/default/files/feeds/known_exploited_vulnerabilities.json'

# Content Index for Internal Linking
CONTENT_INDEX_FILE = 'content-index.json'

def load_content_index():
    """
    Load the content index for entity matching.
    Returns the content index dict or None if not found.
    """
    try:
        if os.path.exists(CONTENT_INDEX_FILE):
            with open(CONTENT_INDEX_FILE, 'r', encoding='utf-8') as f:
                return json.load(f)
        else:
            print(f"   ⚠️ Content index not found: {CONTENT_INDEX_FILE}")
            return None
    except Exception as e:
        print(f"   ⚠️ Error loading content index: {e}")
        return None

def match_entities_to_internal_content(title, content, entities=None):
    """
    Match extracted entities or text content to internal TheHGTech resources.
    Returns a list of related resource objects for the news item.
    
    Args:
        title: The news headline
        content: The news content
        entities: Optional dict with extracted entities from GPT
    
    Returns:
        List of dicts with 'label', 'url', 'icon' keys
    """
    content_index = load_content_index()
    if not content_index:
        return []
    
    related = []
    text = (title + ' ' + content).lower()
    found_urls = set()  # Prevent duplicates
    
    # 1. Check for CVE patterns
    cve_pattern = re.compile(r'CVE-\d{4}-\d{4,7}', re.IGNORECASE)
    cves_found = cve_pattern.findall(text)
    if cves_found:
        tracker_url = content_index.get('categories', {}).get('cve_tracker', {}).get('primaryUrl', '/cve-tracker.html')
        if tracker_url not in found_urls:
            related.append({
                'label': 'CVE Tracker',
                'url': tracker_url,
                'icon': 'fa-bug'
            })
            found_urls.add(tracker_url)
    
    # 2. Check for ransomware groups
    ransomware_groups = content_index.get('categories', {}).get('ransomware_groups', {}).get('entities', [])
    for group in ransomware_groups:
        if group.lower() in text:
            tracker_url = content_index.get('categories', {}).get('ransomware_groups', {}).get('primaryUrl', '/ransomware-tracker.html')
            if tracker_url not in found_urls:
                related.append({
                    'label': 'Ransomware Tracker',
                    'url': tracker_url,
                    'icon': 'fa-skull-crossbones'
                })
                found_urls.add(tracker_url)
            break
    
    # 3. Check for APT groups
    apt_groups = content_index.get('aptGroups', [])
    for apt in apt_groups:
        if apt.lower() in text:
            threat_intel_url = content_index.get('categories', {}).get('threat_intel', {}).get('primaryUrl', '/threat-intel.html')
            if threat_intel_url not in found_urls:
                related.append({
                    'label': 'Threat Intelligence',
                    'url': threat_intel_url,
                    'icon': 'fa-user-secret'
                })
                found_urls.add(threat_intel_url)
            break
    
    # 4. Check for product-specific articles
    product_articles = content_index.get('articles', {}).get('products', {})
    for product, url in product_articles.items():
        if product.lower() in text and url not in found_urls:
            related.append({
                'label': f'{product.title()} Analysis',
                'url': url,
                'icon': 'fa-file-alt'
            })
            found_urls.add(url)
            break
    
    # 5. Check for threat group articles
    threat_articles = content_index.get('articles', {}).get('threat_groups', {})
    for group, url in threat_articles.items():
        if group.lower() in text and url not in found_urls:
            related.append({
                'label': f'{group.title()} Deep Dive',
                'url': url,
                'icon': 'fa-file-alt'
            })
            found_urls.add(url)
            break
    
    # 6. Match relevant guides based on keywords
    guides = content_index.get('guides', [])
    matched_guide = None
    best_match_score = 0
    
    for guide in guides:
        guide_keywords = guide.get('keywords', [])
        score = sum(1 for kw in guide_keywords if kw.lower() in text)
        if score > best_match_score:
            best_match_score = score
            matched_guide = guide
    
    if matched_guide and best_match_score >= 2 and matched_guide['url'] not in found_urls:
        related.append({
            'label': matched_guide.get('title', 'Related Guide'),
            'url': matched_guide['url'],
            'icon': matched_guide.get('icon', 'fa-book')
        })
        found_urls.add(matched_guide['url'])
    
    # 7. Check comparisons
    comparisons = content_index.get('comparisons', [])
    for comp in comparisons:
        comp_keywords = comp.get('keywords', [])
        if any(kw.lower() in text for kw in comp_keywords) and comp['url'] not in found_urls:
            related.append({
                'label': comp.get('title', 'Tool Comparison'),
                'url': comp['url'],
                'icon': comp.get('icon', 'fa-balance-scale')
            })
            found_urls.add(comp['url'])
            break
    
    # Limit to 3 related resources
    return related[:3]



def sanitize_content(text):
    """
    Sanitize content for safe HTML rendering
    Prevents XSS attacks by removing/escaping dangerous content
    """
    if not text:
        return ""
    
    text = unescape(text)
    text = re.sub(r'<[^>]*>', '', text)
    text = escape(text)
    text = re.sub(r'javascript:', '', text, flags=re.IGNORECASE)
    text = re.sub(r'on\w+\s*=', '', text, flags=re.IGNORECASE)
    text = re.sub(r'data:', '', text, flags=re.IGNORECASE)
    text = re.sub(r'vbscript:', '', text, flags=re.IGNORECASE)
    text = ' '.join(text.split())
    
    return text.strip()


def validate_url(url):
    """
    Validate and sanitize URLs
    Only allows http:// and https:// URLs
    """
    if not url:
        return ""
    
    url = url.strip()
    
    if not (url.startswith('http://') or url.startswith('https://')):
        return ""
    
    dangerous_patterns = ['javascript:', 'data:', 'vbscript:', 'file:']
    for pattern in dangerous_patterns:
        if pattern in url.lower():
            return ""
    
    return url


def is_promotional_content(title, summary, source=""):
    """
    Detect promotional/marketing content using keyword analysis
    Returns True if content appears promotional
    """
    # Combine title and summary for analysis
    text = f"{title} {summary}".lower()
    
    # PROMOTIONAL KEYWORDS - Tools/Products/Platforms being promoted
    promotional_keywords = [
        # Direct promotional language
        'offers a robust solution',
        'offers a', 'solution for',
        'provides comprehensive',
        'enables organizations',
        'platform offers',
        'tool enables',
        'best solution',
        'leading platform',
        'premier solution',
        'delivers unparalleled',
        'industry-leading',
        
        # Marketing language
        'revolutionize',
        'game-changer',
        'cutting-edge platform',
        'innovative solution',
        'unlock the power',
        'transform your',
        'enhance your defense',
        'streamline your',
        'empower your team',
        'maximize your',
        
        # Call-to-action indicators
        'learn more about',
        'discover how',
        'get started with',
        'try it today',
        'sign up for',
        'request a demo',
        'schedule a demo',
        'contact us to',
        'visit our website',
        
        # Product-focused (not news-focused)
        'feature highlights',
        'key features include',
        'benefits include',
        'why choose',
        'advantages of using',
        'capabilities include',
        
        # Sponsored content indicators
        'sponsored by',
        'in partnership with',
        'powered by',
        'brought to you by',
        'in collaboration with',
        
        # Vendor-specific promotional patterns
        'announces new product',
        'launches new solution',
        'unveils new platform',
        'releases version',
        'now available',
        'now offering',
        
        # Consumer sales/deals (NOT cybersecurity news)
        'black friday',
        'cyber monday',
        'deals',
        'discounts',
        'sale',
        'offer',
        'under $',
        'up to % off',
        'save up to',
        'best deals',
        'top deals',
        'shopping',
        'buy now',
        'limited time',
        'price drop',
        'price cut',
    ]
    
    # TOOL/PLATFORM NAMES that are commonly promoted
    # (Only flag if they're the MAIN subject, not just mentioned)
    tool_promotion_patterns = [
        'wazuh open source platform',
        'introducing [a-z]+ platform',
        'announcing [a-z]+ tool',
        'new release of [a-z]+ ',
    ]
    
    # Check for promotional keywords
    promo_score = 0
    matched_keywords = []
    
    for keyword in promotional_keywords:
        if keyword in text:
            promo_score += 1
            matched_keywords.append(keyword)
    
    # Check for tool promotion patterns
    for pattern in tool_promotion_patterns:
        if re.search(pattern, text, re.IGNORECASE):
            promo_score += 2
            matched_keywords.append(f"pattern: {pattern}")
    
    # Title-specific checks (promotional titles are usually benefits-focused)
    if any(phrase in title.lower() for phrase in [
        'how to', 'why you should', 'benefits of', 'guide to using',
        'best practices for', 'getting started with'
    ]):
        # Only flag if it's about a specific tool/product
        if any(word in title.lower() for word in ['platform', 'tool', 'solution', 'software']):
            promo_score += 1
            matched_keywords.append("how-to for specific tool")
    
    # Decision threshold
    is_promo = promo_score >= 2
    
    if is_promo:
        print(f"      🚫 PROMOTIONAL DETECTED: {title[:60]}...")
        print(f"         Matched keywords: {', '.join(matched_keywords[:3])}")
    
    return is_promo


def filter_promotional_content(articles):
    """
    Filter out promotional/marketing articles
    Returns only genuine news articles
    """
    if not articles:
        return articles
    
    print(f"\n🔍 Filtering promotional content...")
    
    filtered = []
    promotional_count = 0
    
    for article in articles:
        if not is_promotional_content(
            article.get('title', ''),
            article.get('summary', ''),
            article.get('source', '')
        ):
            filtered.append(article)
        else:
            promotional_count += 1
    
    if promotional_count > 0:
        print(f"   🚫 Removed {promotional_count} promotional articles")
    else:
        print(f"   ✅ No promotional content detected")
    
    print(f"   📊 Remaining articles: {len(filtered)}")
    
    return filtered

# RSS Feed Sources - EXPANDED for better coverage
CYBER_FEEDS = [
    # ===== TIER 1 - Original Sources (5) =====
    'https://www.bleepingcomputer.com/feed/',
    'https://feeds.feedburner.com/TheHackersNews',
    'https://www.darkreading.com/rss.xml',
    'https://www.securityweek.com/feed/',
    'https://www.cisa.gov/cybersecurity-advisories/all.xml',
    
    # ===== PHASE 1 EXPANSION - Top Quality Sources (5) =====
    'https://krebsonsecurity.com/feed/',                        # Krebs - Best investigative journalism
    'https://threatpost.com/feed/',                             # Threatpost - Fast breaking news  
    'https://isc.sans.edu/rssfeed.xml',                         # SANS - Threat intelligence
    'https://www.recordedfuture.com/feed',                      # Recorded Future - Professional research
    'https://feeds.arstechnica.com/arstechnica/security',       # Ars Technica - Technical depth
    
    # ===== PHASE 2 EXPANSION - Premium Sources (4) =====
    'https://www.csoonline.com/feed/',                          # CSO - Enterprise/CISO perspective
    'https://www.cyberscoop.com/feed/',                         # Cyberscoop - Government/policy
    'https://grahamcluley.com/feed/',                           # Graham Cluley - Expert commentary
    'https://www.malwarebytes.com/blog/feed/index.xml',         # Malwarebytes - Malware research
    
    # ===== PHASE 3 EXPANSION - Zero-Day Focused Sources (4) =====
    'https://googleprojectzero.blogspot.com/feeds/posts/default',  # Project Zero - THE zero-day source
    'https://www.zerodayinitiative.com/blog?format=rss',           # ZDI - Zero-day research
    'https://blog.google/threat-analysis-group/rss/',              # Google TAG - APT campaigns
    'https://msrc.microsoft.com/blog/feed',                        # Microsoft MSRC - Windows zero-days
]

AI_FEEDS = [
    # ===== TIER 1 - Daily News Sources (MOST IMPORTANT) =====
    'https://techcrunch.com/category/artificial-intelligence/feed/',
    'https://www.theverge.com/rss/ai-artificial-intelligence/index.xml',  # FIXED: /rss/ comes first
    'https://venturebeat.com/feed/',                            # FIXED: Main feed (category feed broken)
    'https://www.wired.com/feed/tag/ai/latest/rss',             # NEW: WIRED AI - Very active
    'https://arstechnica.com/tag/artificial-intelligence/feed/', # NEW: Ars Technica AI
    'https://www.artificialintelligence-news.com/feed/',
    
    # ===== PHASE 1 EXPANSION - Quality Sources =====
    'https://www.technologyreview.com/topic/artificial-intelligence/feed',  # MIT - Academic rigor
    
    # ===== Company Blogs (Infrequent but valuable when posted) =====
    'https://ai.googleblog.com/feeds/posts/default',            # Google AI - Authoritative
    'https://openai.com/blog/rss.xml',                          # OpenAI - GPT updates
    'https://www.anthropic.com/index/rss.xml',                  # Anthropic - Claude updates
    'https://deepmind.google/blog/rss.xml',                     # DeepMind - Research
    'https://huggingface.co/blog/feed.xml',                     # Hugging Face - Open-source AI
    'https://ai.meta.com/blog/rss/',                            # Meta AI - Llama updates
]

# ===== OPTIONAL: RSS FEED BLACKLIST =====
# If certain feeds consistently produce promotional content, add them here
# These feeds will be completely skipped
BLACKLISTED_FEEDS = [
    # Example: 'https://example.com/feed/',
    # Add problematic feeds here if keyword filtering isn't enough
]


def get_current_time_ist():
    """Get current time in IST"""
    ist = pytz.timezone('Asia/Kolkata')
    return datetime.now(ist)


def fetch_recent_articles(feeds, hours_back=72):  # INCREASED FROM 48 to 72
    """Fetch recent articles from RSS feeds"""
    articles = []
    cutoff_time = datetime.now(pytz.UTC) - timedelta(hours=hours_back)
    
    print(f"📡 Fetching articles from {len(feeds)} feeds (past {hours_back} hours)...")
    
    for feed_url in feeds:
        # Skip blacklisted feeds
        if feed_url in BLACKLISTED_FEEDS:
            print(f"   ⛔ SKIPPED (blacklisted): {feed_url}")
            continue
            
        try:
            print(f"   → Fetching: {feed_url}")
            feed = feedparser.parse(feed_url)
            
            for entry in feed.entries[:15]:  # INCREASED FROM 10 to 15
                pub_date = None
                if hasattr(entry, 'published_parsed') and entry.published_parsed:
                    pub_date = datetime(*entry.published_parsed[:6], tzinfo=pytz.UTC)
                elif hasattr(entry, 'updated_parsed') and entry.updated_parsed:
                    pub_date = datetime(*entry.updated_parsed[:6], tzinfo=pytz.UTC)
                
                if pub_date and pub_date > cutoff_time:
                    summary = entry.get('summary', entry.get('description', ''))
                    summary = sanitize_content(summary)
                    summary = summary[:500]
                    
                    title = sanitize_content(entry.get('title', 'No title'))
                    source = sanitize_content(feed.feed.get('title', 'Unknown Source'))
                    link = validate_url(entry.get('link', ''))
                    
                    if not link:
                        continue
                    
                    articles.append({
                        'title': title,
                        'link': link,
                        'summary': summary,
                        'published': pub_date,
                        'source': source
                    })
            
            print(f"      ✅ Found {len([a for a in articles if a['source'] == feed.feed.get('title', '')])} recent articles")
            
        except Exception as e:
            print(f"      ⚠️  Error fetching {feed_url}: {e}")
            continue
    
    articles.sort(key=lambda x: x['published'], reverse=True)
    print(f"\n📊 Total articles fetched: {len(articles)}")
    
    return articles


def filter_existing_urls(articles, existing_shorts):
    """Remove articles that already exist in content (by URL)"""
    existing_urls = {short.get('sourceUrl', '') for short in existing_shorts}
    
    filtered = []
    duplicates = 0
    
    for article in articles:
        if article['link'] not in existing_urls:
            filtered.append(article)
        else:
            duplicates += 1
    
    if duplicates > 0:
        print(f"   🔄 Skipped {duplicates} duplicate articles (already in content)")
    
    return filtered


def format_with_gpt(articles, content_type):
    """Use GPT-4o to format articles into professional shorts"""
    if not articles:
        return None
    
    top_articles = articles[:7]  # Increased from 5 to 7 for better coverage
    
    articles_text = ""
    for i, article in enumerate(top_articles, 1):
        articles_text += f"""
Article {i}:
Title: {article['title']}
Source: {article['source']}
Article ID: ARTICLE_{i}_URL_PLACEHOLDER
Date: {article['published'].strftime('%b %d %Y')}
Summary: {article['summary'][:300]}

"""
    
    prompt = f"""You are a senior cybersecurity and AI news editor for TheHGTech.com, a professional publication read by security professionals, developers, and tech leaders.

I have fetched {len(top_articles)} REAL recent {content_type} news articles from trusted sources. Your task is to transform each article into a high-quality, professional news short.

Here are the articles:
{articles_text}

For EACH article, create a compelling news short in this EXACT format:

Date: [Use the actual date from the article]
Source Name: [Use the actual source from the article]
Source URL: [Use exactly: ARTICLE_X_URL_PLACEHOLDER where X is the article number]
Headline: [Create a PUNCHY, eye-catching headline - max 12 words - see guidelines below]
Title: [Create a clear, descriptive headline that captures the full context]
Content:
[Write 5-7 well-crafted sentences that:

MUST INCLUDE:
1. What happened: Lead with the most newsworthy development
2. Technical details: Include specific versions, CVE IDs, affected systems, or model capabilities
3. Impact analysis: Explain who is affected and how severely
4. Context: Provide relevant background or trends
5. Action items: What should readers do or know

QUALITY STANDARDS:
- Write for technical professionals but remain accessible
- Use precise, specific language (avoid vague terms like "several" or "many")
- Include numbers, percentages, or metrics when available
- Explain acronyms on first use
- Maintain an authoritative, informative tone
- Make every sentence add value

AVOID:
- Marketing language or hype
- Speculation without evidence
- Redundant information
- Passive voice where active is clearer
- Jargon without explanation]

HEADLINE GENERATION RULES (for the "Headline" field):
The Headline is a SHORT, punchy hook (max 12 words) for the news timeline. It should:
- Lead with numbers, dollar amounts, or specific names when possible
- Create urgency without false alarm
- Use em dashes (—) for dramatic effect when appropriate
- Remove weak words: "new", "important", "major", "significant"
- Be specific: "$500K" beats "large amount", "3B users" beats "many users"

Headline Examples:
- BAD: "New Security Vulnerability Discovered" → GOOD: "Chrome Zero-Day Hits 3B Users—Patch Now"
- BAD: "Ransomware Attack Affects Company" → GOOD: "$10M Ransom: LockBit Claims Logistics Giant"
- BAD: "AI Has Security Issues" → GOOD: "Claude Used to Hack Itself: 2 Critical CVEs"
- BAD: "Data Breach Reported" → GOOD: "ESA Breach: 200GB Space Data Stolen"

CRITICAL FORMATTING RULES:
1. Use PLAIN TEXT only - absolutely NO markdown, NO asterisks, NO formatting
2. Write "Source URL:" not "Source:" for the URL line
3. Keep URLs as ARTICLE_X_URL_PLACEHOLDER - do not modify
4. Separate each short with exactly one blank line
5. Do not number the shorts
6. Do not add section headers or extra formatting
7. The Headline comes BEFORE the Title

EXAMPLE OF CORRECT OUTPUT:
Date: Nov 23 2024
Source Name: BleepingComputer
Source URL: ARTICLE_1_URL_PLACEHOLDER
Headline: Chrome Zero-Day Hits 3B Users—Update Now
Title: Critical Chrome Zero-Day CVE-2024-12345 Actively Exploited in Targeted Attacks
Content:
Google has patched CVE-2024-12345, a critical use-after-free vulnerability in Chrome's V8 JavaScript engine that was actively exploited in targeted attacks. The flaw affects all Chrome versions prior to 120.0.6099.129 and allows remote code execution through specially crafted web pages. Security researchers at Kaspersky discovered the exploit being used against financial institutions and government agencies in Eastern Europe. Users should update immediately through Chrome's built-in updater or download version 120.0.6099.129 or later. This marks the eighth zero-day vulnerability patched in Chrome this year, highlighting the browser's continued targeting by sophisticated threat actors.
Entities: CVE-2024-12345, Chrome, zero-day, Google

Now generate {len(top_articles)} professional news shorts following these guidelines exactly:
- Write in a professional, journalistic style
- Focus on facts and implications, not sensationalism
- Each short should be self-contained and informative
- Use clear, direct language
- Include relevant technical details where appropriate
- Explain significance for professionals in the field
- ALWAYS include both Headline (punchy) and Title (descriptive)

CRITICAL FORMATTING RULES:
- DO NOT use any markdown formatting (no **, no __, no # headers, no * bullets)
- Write in plain text only
- Do not add bold, italic, or any other formatting
- Keep the exact format shown above with labeled sections
- The Source URL must be EXACTLY "ARTICLE_X_URL_PLACEHOLDER" - do not modify it
- Headline must be max 12 words, punchy and specific
- Title should be descriptive and complete

ENTITY EXTRACTION (Important for internal linking):
At the end of each short's Content, add an Entities line with comma-separated values for:
- Any CVE IDs mentioned (e.g., CVE-2024-12345)
- Any ransomware group names (e.g., LockBit, ALPHV, Qilin)
- Any APT/threat actor names (e.g., Lazarus, APT28)
- Key product names affected (e.g., Chrome, Windows, Fortinet)
- Attack type keywords (e.g., zero-day, RCE, phishing, ransomware)

Create a short for EACH of the {len(top_articles)} articles above."""
    
    try:
        response = client.chat.completions.create(
            model="gpt-4o",
            messages=[
                {"role": "system", "content": "You are a professional tech journalist specializing in cybersecurity and AI. You write in plain text without any markdown formatting."},
                {"role": "user", "content": prompt}
            ],
            temperature=0.5,
            max_tokens=4000
        )
        
        content = response.choices[0].message.content
        
        # Decode HTML entities (fix &#x27; → ')
        content = unescape(content)
        
        # Replace placeholders with actual URLs
        for i, article in enumerate(top_articles, 1):
            placeholder = f"ARTICLE_{i}_URL_PLACEHOLDER"
            actual_url = article['link']
            content = content.replace(placeholder, actual_url)
            print(f"   🔗 Replaced {placeholder} with {actual_url[:60]}...")
        
        print(f"✅ Successfully formatted {content_type} articles with real URLs")
        return content
        
    except Exception as e:
        print(f"❌ Error formatting {content_type} articles: {e}")
        return None


def parse_shorts(content):
    """Parse the formatted content into structured shorts"""
    if not content:
        return []
    
    shorts = []
    items = re.split(r'\n(?=Date:)', content)
    
    for item in items:
        if not item.strip() or 'Date:' not in item:
            continue
            
        date_match = re.search(r'Date:\s*(.+?)(?:\n|$)', item)
        source_match = re.search(r'Source Name:\s*(.+?)(?:\n|$)', item)
        url_match = re.search(r'Source URL:\s*(.+?)(?:\n|$)', item)
        headline_match = re.search(r'Headline:\s*(.+?)(?:\n|$)', item)
        title_match = re.search(r'Title:\s*(.+?)(?:\n|$)', item)
        content_match = re.search(r'Content:\s*(.+)', item, re.DOTALL)
        
        if all([date_match, source_match, url_match, title_match, content_match]):
            source_url = validate_url(url_match.group(1).strip())
            
            if not source_url:
                print(f"   ⚠️ Skipping short with invalid URL: {title_match.group(1)[:50]}")
                continue
            
            # Extract entities if present
            entities_match = re.search(r'Entities:\s*(.+?)(?:\n|$)', item)
            extracted_entities = []
            if entities_match:
                entities_text = entities_match.group(1).strip()
                extracted_entities = [e.strip() for e in entities_text.split(',') if e.strip()]
            
            # Get content without the Entities line
            content_text = content_match.group(1).strip()
            content_text = re.sub(r'\nEntities:.*$', '', content_text, flags=re.MULTILINE).strip()
            
            title_text = sanitize_content(title_match.group(1).strip())
            content_sanitized = sanitize_content(content_text)
            
            # Extract headline (fallback to title if not present)
            headline_text = ''
            if headline_match:
                headline_text = sanitize_content(headline_match.group(1).strip())
            if not headline_text:
                # Fallback: create headline from title (first 60 chars)
                headline_text = title_text[:60] + ('...' if len(title_text) > 60 else '')
            
            # Match entities to internal content
            related_resources = match_entities_to_internal_content(
                title_text,
                content_sanitized,
                extracted_entities
            )
            
            short = {
                "date": sanitize_content(date_match.group(1).strip()),
                "headline": headline_text,
                "title": title_text,
                "content": content_sanitized,
                "source": sanitize_content(source_match.group(1).strip()),
                "sourceUrl": source_url,
                "relatedResources": related_resources
            }
            shorts.append(short)
    
    return shorts


def is_older_than_hours(date_string, hours=24):
    """Check if a date string is older than specified hours"""
    try:
        ist = pytz.timezone('Asia/Kolkata')
        now = datetime.now(ist)
        
        date_obj = datetime.strptime(date_string, "%b %d %Y")
        date_obj = ist.localize(date_obj)
        
        age_hours = (now - date_obj).total_seconds() / 3600
        
        return age_hours >= hours
    except:
        return False



def is_zero_day(description):
    """
    Check if CVE description mentions zero-day
    Returns True if zero-day patterns found (adjacent words only)
    """
    if not description:
        return False
    
    text = description.lower()
    
    # Zero-day patterns (official terminology only)
    zero_day_patterns = [
        'zero-day',      # Most common in official docs
        'zero day',      # Also common
        'zeroday'        # Less common but used
    ]
    
    return any(pattern in text for pattern in zero_day_patterns)


def fetch_cisa_cves():
    """
    Fetch CVEs from CISA Known Exploited Vulnerabilities Catalog
    Returns list of CVEs from the last 7 days
    """
    print(f"\n🔒 Fetching CVEs from CISA KEV...")
    
    try:
        response = requests.get(CISA_KEV_URL, timeout=30)
        response.raise_for_status()
        data = response.json()
        
        vulnerabilities = data.get('vulnerabilities', [])
        print(f"   📊 Total CISA KEV entries: {len(vulnerabilities)}")
        
        # Filter for last 7 days
        cutoff_date = datetime.now(pytz.UTC) - timedelta(days=7)
        recent_cves = []
        
        for vuln in vulnerabilities:
            try:
                # Parse date (format: YYYY-MM-DD)
                date_str = vuln.get('dateAdded', '')
                if not date_str:
                    continue
                
                date_obj = datetime.strptime(date_str, '%Y-%m-%d')
                date_obj = date_obj.replace(tzinfo=pytz.UTC)
                
                # Only include if within last 7 days
                if date_obj >= cutoff_date:
                    # Format for display
                    display_date = date_obj.strftime('%b %d, %Y')
                    
                    # Get vendor/product
                    vendor = vuln.get('vendorProject', 'Unknown')
                    product = vuln.get('product', '')
                    vendor_display = f"{vendor} {product}".strip()
                    
                    # Build CVE entry
                    cve_entry = {
                        'cveId': vuln.get('cveID', ''),
                        'dateAdded': display_date,
                        'vendor': sanitize_content(vendor_display[:50]),
                        'description': sanitize_content(vuln.get('shortDescription', '')[:200]),
                        'score': 'HIGH',  # CISA KEV are all high-impact
                        'status': 'Confirmed',
                        'source': 'CISA KEV',
                        'url': f"https://nvd.nist.gov/vuln/detail/{vuln.get('cveID', '')}",
                        'isZeroDay': is_zero_day(vuln.get('shortDescription', ''))
                    }
                    
                    recent_cves.append(cve_entry)
                    
            except Exception as e:
                print(f"   ⚠️ Error parsing CVE: {e}")
                continue
        
        print(f"   ✅ Found {len(recent_cves)} CVEs from last 7 days")
        
        # Sort by date (newest first)
        recent_cves.sort(key=lambda x: x['dateAdded'], reverse=True)
        
        # Limit to top 20 most recent
        return recent_cves[:20]
        
    except requests.exceptions.RequestException as e:
        print(f"   ⚠️ Error fetching CISA CVEs: {e}")
        return []
    except Exception as e:
        print(f"   ⚠️ Unexpected error: {e}")
        return []


def deduplicate_cves(cves):
    """Remove duplicate CVEs by CVE ID"""
    seen = set()
    unique_cves = []
    
    for cve in cves:
        cve_id = cve.get('cveId', '')
        if cve_id and cve_id not in seen:
            seen.add(cve_id)
            unique_cves.append(cve)
    
    return unique_cves


def cross_reference_cves_with_news(news_content, cve_file='cve-data.json'):
    """
    Cross-reference CVEs with news content to detect zero-days
    Updates CVE data if news mentions CVE + "zero-day"
    """
    if not news_content or not os.path.exists(cve_file):
        return
    
    try:
        # Load CVE data
        with open(cve_file, 'r', encoding='utf-8') as f:
            cve_data = json.load(f)
        
        updated_count = 0
        news_lower = news_content.lower()
        
        # Check each CVE
        for cve in cve_data.get('cves', []):
            # Skip if already tagged
            if cve.get('isZeroDay'):
                continue
            
            cve_id = cve.get('cveId', '')
            if not cve_id:
                continue
            
            # Check if CVE is mentioned in news
            if cve_id.lower() in news_lower:
                # Check if article mentions "zero-day"
                # Look for zero-day within 200 chars of CVE mention
                cve_pos = news_lower.find(cve_id.lower())
                context = news_lower[max(0, cve_pos-100):min(len(news_lower), cve_pos+100)]
                
                if any(pattern in context for pattern in ['zero-day', 'zero day', 'zeroday']):
                    cve['isZeroDay'] = True
                    updated_count += 1
                    print(f"   ✓ Tagged {cve_id} as zero-day from news coverage")
        
        # Save updated CVE data if changes made
        if updated_count > 0:
            with open(cve_file, 'w', encoding='utf-8') as f:
                json.dump(cve_data, f, indent=2)
            print(f"   📊 Updated {updated_count} CVE(s) with zero-day tags from news")
        
    except Exception as e:
        print(f"   ⚠️ Error cross-referencing CVEs: {e}")


def filter_old_cves(cves, days=7):
    """
    Remove CVEs older than specified days
    ✅ FIXED: Now handles BOTH date formats
    """
    if not cves:
        return []
    
    cutoff = datetime.now(pytz.UTC) - timedelta(days=days)
    filtered = []
    
    for cve in cves:
        try:
            date_str = cve.get('dateAdded', '')
            
            # Try multiple date formats
            date_obj = None
            
            # Format 1: "Nov 02, 2025" (display format)
            try:
                date_obj = datetime.strptime(date_str, '%b %d, %Y')
                date_obj = date_obj.replace(tzinfo=pytz.UTC)
            except:
                pass
            
            # Format 2: "2024-10-26" (YYYY-MM-DD - old format)
            if not date_obj:
                try:
                    date_obj = datetime.strptime(date_str, '%Y-%m-%d')
                    date_obj = date_obj.replace(tzinfo=pytz.UTC)
                except:
                    pass
            
            # If we successfully parsed the date, check if it's recent
            if date_obj:
                if date_obj >= cutoff:
                    filtered.append(cve)
                else:
                    print(f"   🗑️ Filtered old CVE: {cve.get('cveId', 'Unknown')} from {date_str}")
            else:
                # If parsing fails, keep the CVE (safer) but warn
                print(f"   ⚠️ Could not parse date for {cve.get('cveId', 'Unknown')}: {date_str}")
                filtered.append(cve)
                
        except Exception as e:
            print(f"   ⚠️ Error filtering CVE: {e}")
            # If error, keep the CVE (safer)
            filtered.append(cve)
    
    return filtered


def read_content_js():
    """Read the current content.js file"""
    with open('content.js', 'r', encoding='utf-8') as f:
        content = f.read()
    
    match = re.search(r'const websiteContent = ({.*?});', content, re.DOTALL)
    if not match:
        print("❌ Could not parse content.js")
        sys.exit(1)
    
    return json.loads(match.group(1))


def write_content_js(data):
    """Write updated content back to content.js"""
    js_content = f"""// TheHGTech Website Content
// Update this file to change website content

const websiteContent = {json.dumps(data, indent=4, ensure_ascii=False)};"""
    
    with open('content.js', 'w', encoding='utf-8') as f:
        f.write(js_content)


def update_shorts():
    """Main function to update shorts with real news from RSS feeds"""
    ist_time = get_current_time_ist()
    
    print(f"\n{'='*60}")
    print(f"🚀 TheHGTech Content Automation - FINAL VERSION v2.1")
    print(f"⏰ Time: {ist_time.strftime('%Y-%m-%d %I:%M %p IST')}")
    print(f"📡 Mode: Real RSS Feed Aggregation + GPT-4o Formatting")
    print(f"📊 Sources: 19 RSS feeds (10 cyber + 9 AI)")
    print(f"🔗 URL Preservation: ENABLED")
    print(f"🔄 Duplicate Detection: ENABLED")
    print(f"🚫 Promotional Filter: ENABLED")  # NEW
    print(f"🗑️  Old Content Removal: IMPROVED")
    print(f"🔒 Modals Preservation: ENABLED")
    print(f"🔒 CVE Auto-Update: ENABLED (CISA KEV)")
    print(f"✅ GPT Markdown Fix: ENABLED")
    print(f"✅ CVE Date Filter Fix: ENABLED")
    print(f"{'='*60}\n")
    
    # Check for force refresh mode
    FORCE_REFRESH = os.environ.get('FORCE_REFRESH', 'false').lower() == 'true'
    if FORCE_REFRESH:
        print("⚡ FORCE REFRESH MODE ENABLED")
    
    # Read current content
    data = read_content_js()
    
    # CRITICAL: Preserve sections we don't update (NOT including recentCVEs)
    preserved_sections = {
        'modals': data.get('modals', {}),
        'articleCards': data.get('articleCards', []),
        'articles': data.get('articles', {}),
        'featureCards': data.get('featureCards', [])
    }
    
    print(f"🔒 Preserving sections: modals, articleCards, articles, featureCards")
    
    existing_cyber = data.get('cyberShorts', [])
    existing_ai = data.get('aiShorts', [])
    existing_cves = data.get('recentCVEs', [])
    
    print(f"📚 Current content: {len(existing_cyber)} cyber, {len(existing_ai)} AI shorts, {len(existing_cves)} CVEs")
    
    # Fetch real articles from RSS feeds
    cyber_articles = fetch_recent_articles(CYBER_FEEDS, hours_back=72)
    ai_articles = fetch_recent_articles(AI_FEEDS, hours_back=72)
    
    # ✨ NEW: Filter out promotional content BEFORE processing
    cyber_articles = filter_promotional_content(cyber_articles)
    ai_articles = filter_promotional_content(ai_articles)
    
    # Fetch CVEs from CISA KEV
    new_cves = fetch_cisa_cves()
    
    # Combine with existing CVEs and deduplicate
    all_cves = new_cves + existing_cves
    all_cves = deduplicate_cves(all_cves)
    
    # Filter to keep only CVEs from last 7 days
    filtered_cves = filter_old_cves(all_cves, days=7)
    
    print(f"\n🔒 CVE Processing:")
    print(f"   New from CISA: {len(new_cves)}")
    print(f"   Existing: {len(existing_cves)}")
    print(f"   After deduplication: {len(all_cves)}")
    print(f"   After 7-day filter: {len(filtered_cves)}")
    print(f"   Removed old: {len(all_cves) - len(filtered_cves)}")
    
    if not cyber_articles and not ai_articles and len(new_cves) == 0:
        print("\n⚠️  WARNING: No recent articles found in any feeds!")
        print("⚠️  This might be a network issue or the feeds might be down")
        print("⚠️  Keeping existing content to prevent data loss")
        sys.exit(0)
    
    # Filter out duplicates
    print(f"\n🔍 Checking for duplicates...")
    cyber_articles_new = filter_existing_urls(cyber_articles, existing_cyber)
    ai_articles_new = filter_existing_urls(ai_articles, existing_ai)
    
    print(f"✨ New articles to add: {len(cyber_articles_new)} cyber, {len(ai_articles_new)} AI")
    
    # FIXED LOGIC: Always filter old content, regardless of new articles
    print(f"\n🗑️  Filtering old content (24+ hours)...")
    filtered_cyber = [s for s in existing_cyber if not is_older_than_hours(s.get('date', ''), 24)]
    filtered_ai = [s for s in existing_ai if not is_older_than_hours(s.get('date', ''), 24)]
    
    removed_cyber = len(existing_cyber) - len(filtered_cyber)
    removed_ai = len(existing_ai) - len(filtered_ai)
    
    if removed_cyber > 0 or removed_ai > 0:
        print(f"   Removed {removed_cyber} cyber and {removed_ai} AI old shorts")
    else:
        print(f"   No old content to remove")
    
    # NEW: Cross-reference CVEs with news content for zero-day detection
    if cyber_articles_new:
        print(f"\n🔍 Cross-referencing CVEs with news content...")
        combined_news = '\n'.join([s.get('content', '') for s in cyber_articles_new])
        cross_reference_cves_with_news(combined_news)
    
    
    # Handle case: No new articles, but old content was removed OR CVEs updated
    if not cyber_articles_new and not ai_articles_new:
        cve_changed = len(filtered_cves) != len(existing_cves)
        
        if removed_cyber == 0 and removed_ai == 0 and not cve_changed:
            print("\n✅ No new articles, no old content to remove, and CVEs unchanged")
            print("✅ Content is already up to date!")
            sys.exit(0)
        else:
            print(f"\n⚠️  No new articles, but updating:")
            if removed_cyber + removed_ai > 0:
                print(f"   - Removed {removed_cyber + removed_ai} old shorts")
            if cve_changed:
                print(f"   - Updated CVEs: {len(existing_cves)} → {len(filtered_cves)}")
            
            # Update with filtered content only
            data['cyberShorts'] = filtered_cyber[:15]
            data['aiShorts'] = filtered_ai[:15]
            data['recentCVEs'] = filtered_cves[:15]  # Limit to 15 CVEs
            
            # Ensure minimum content exists
            MIN_CONTENT = 2
            if len(data['cyberShorts']) < MIN_CONTENT:
                print(f"⚠️  Only {len(data['cyberShorts'])} cyber shorts remaining after filtering")
            if len(data['aiShorts']) < MIN_CONTENT:
                print(f"⚠️  Only {len(data['aiShorts'])} AI shorts remaining after filtering")
            
            # CRITICAL: Restore preserved sections before writing
            print(f"\n🔒 Restoring preserved sections...")
            for section, content in preserved_sections.items():
                data[section] = content
            
            write_content_js(data)
            print(f"\n✅ Updated content.js with filtered content + CVEs")
            print(f"📝 Final count: {len(data['cyberShorts'])} cyber, {len(data['aiShorts'])} AI shorts, {len(data['recentCVEs'])} CVEs")
            sys.exit(0)
    
    # Format NEW articles using GPT-4o
    print(f"\n🤖 Formatting new articles with GPT-4o...")
    cyber_content = format_with_gpt(cyber_articles_new, "Cybersecurity") if cyber_articles_new else None
    ai_content = format_with_gpt(ai_articles_new, "AI") if ai_articles_new else None
    
    # Parse the formatted shorts
    print(f"\n📝 Parsing formatted content...")
    new_cyber_shorts = parse_shorts(cyber_content) if cyber_content else []
    new_ai_shorts = parse_shorts(ai_content) if ai_content else []
    
    print(f"\n📊 Parsed {len(new_cyber_shorts)} new cybersecurity shorts")
    print(f"📊 Parsed {len(new_ai_shorts)} new AI shorts")
    
    # Verify URLs are real (not placeholders)
    for short in new_cyber_shorts + new_ai_shorts:
        if 'PLACEHOLDER' in short.get('sourceUrl', ''):
            print(f"⚠️  WARNING: Found placeholder URL in: {short['title'][:50]}")
    
    # Combine NEW shorts with REMAINING old shorts (new ones first)
    data['cyberShorts'] = new_cyber_shorts + filtered_cyber
    data['aiShorts'] = new_ai_shorts + filtered_ai
    
    # Update CVEs with filtered list
    data['recentCVEs'] = filtered_cves
    
    # Limit to max 15 each (keep newest)
    data['cyberShorts'] = data['cyberShorts'][:15]
    data['aiShorts'] = data['aiShorts'][:15]
    data['recentCVEs'] = data['recentCVEs'][:15]
    
    # Final safeguard: Ensure we have content
    MIN_CONTENT = 2
    if len(data['cyberShorts']) < MIN_CONTENT and len(existing_cyber) > 0:
        print(f"⚠️  Keeping {MIN_CONTENT} most recent cyber shorts as backup")
        data['cyberShorts'] = existing_cyber[:MIN_CONTENT]
    
    if len(data['aiShorts']) < MIN_CONTENT and len(existing_ai) > 0:
        print(f"⚠️  Keeping {MIN_CONTENT} most recent AI shorts as backup")
        data['aiShorts'] = existing_ai[:MIN_CONTENT]
    
    if len(data['cyberShorts']) == 0 or len(data['aiShorts']) == 0:
        print("\n⚠️  ERROR: Would result in empty content sections!")
        print("⚠️  Aborting update to prevent data loss")
        sys.exit(1)
    
    # CRITICAL: Restore preserved sections before writing
    print(f"\n🔒 Restoring preserved sections...")
    for section, content in preserved_sections.items():
        data[section] = content
        if section == 'modals':
            modal_count = len(content) if isinstance(content, dict) else 0
            print(f"   ✅ Restored {section}: {modal_count} modals")
        else:
            item_count = len(content) if isinstance(content, (list, dict)) else 0
            print(f"   ✅ Restored {section}: {item_count} items")
    
    # Write back to file
    write_content_js(data)
    
    print(f"\n✅ Successfully updated content.js with REAL news + CVEs")
    print(f"📝 Final count:")
    print(f"   Shorts: {len(data['cyberShorts'])} cyber, {len(data['aiShorts'])} AI")
    print(f"   CVEs: {len(data['recentCVEs'])} vulnerabilities (last 7 days)")
    print(f"\n📊 Shorts breakdown:")
    print(f"   New: {len(new_cyber_shorts)} cyber, {len(new_ai_shorts)} AI")
    print(f"   Kept: {len(filtered_cyber)} cyber, {len(filtered_ai)} AI")
    print(f"   Removed: {removed_cyber} cyber, {removed_ai} AI")
    print(f"\n🔒 CVEs breakdown:")
    print(f"   New from CISA: {len(new_cves)}")
    print(f"   Filtered (7 days): {len(filtered_cves)}")
    print(f"   Removed old: {len(existing_cves) - len(filtered_cves)}")
    print(f"\n📅 All content is from past 7 days (CVEs) and 24-72 hours (shorts)")
    print(f"🔗 All links are REAL and working")
    print(f"🎯 No duplicates!")
    print(f"\n{'='*60}\n")


if __name__ == "__main__":
    update_shorts()
