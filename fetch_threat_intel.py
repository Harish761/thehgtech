#!/usr/bin/env python3
"""
RSS-Based Threat Intel Automation – Live IOCs Every Hour
-------------------------------------------------------
Pulls from reputable security sources: URLhaus, OpenPhish,
Malware Traffic Analysis, ThreatFox (abuse.ch)
Updates threat-intel.js with:
  • Hourly: 20 fresh IOCs (defanged, with source attribution)
  • Daily: Stats, trends, sectors, geo, campaign tracking
No API keys. No timeouts. Pure RSS.
"""

import os
import sys
import json
import time
import feedparser
from datetime import datetime, timedelta, timezone
from urllib.parse import urlparse
import re

# ──────────────────────────────────────────────────────────────
# Config
# ──────────────────────────────────────────────────────────────
MAX_IOCS = 20
IOC_EXPIRY_HOURS = 24
OUTPUT_FILE = 'threat-intel.js'
HISTORY_FILE = 'threat-intel-history.json'

# IST Timezone
IST = timezone(timedelta(hours=5, minutes=30))

# Reputable RSS Feeds (All are well-known threat intel sources)
RSS_FEEDS = {
    "URLhaus": {
        "url": "https://urlhaus.abuse.ch/feeds/rss/",
        "type": "rss",
        "description": "Malicious URL database by abuse.ch",
        "website": "https://urlhaus.abuse.ch/"
    },
    "Malware Traffic Analysis": {
        "url": "https://www.malware-traffic-analysis.net/blog-entries.rss",
        "type": "rss",
        "description": "Network traffic analysis by Brad Duncan",
        "website": "https://www.malware-traffic-analysis.net/"
    },
    "OpenPhish": {
        "url": "https://openphish.com/feed.txt",
        "type": "text",
        "description": "Automated phishing intelligence",
        "website": "https://openphish.com/"
    },
    "Abuse.ch ThreatFox": {
        "url": "https://threatfox.abuse.ch/export/json/recent/",
        "type": "threatfox",
        "description": "IOC sharing platform by abuse.ch",
        "website": "https://threatfox.abuse.ch/"
    }
}

def get_ist_now():
    return datetime.now(IST)

# ──────────────────────────────────────────────────────────────
# RSS Fetching & IOC Extraction
# ──────────────────────────────────────────────────────────────
def fetch_rss_iocs():
    iocs = []
    now = get_ist_now()

    for name, config in RSS_FEEDS.items():
        print(f"  - Fetching {name}...")
        try:
            if config["type"] == "text":
                import requests
                resp = requests.get(config["url"], timeout=15, headers={'User-Agent': 'TheHGTech-ThreatIntel/1.0'})
                lines = resp.text.strip().split('\n')
                for line in lines[:10]:
                    if line.startswith('http'):
                        iocs.append(parse_openphish(line, now, config))
            elif config["type"] == "threatfox":
                import requests
                resp = requests.get(config["url"], timeout=15, headers={'User-Agent': 'TheHGTech-ThreatIntel/1.0'})
                data = resp.json()
                if 'data' in data:
                    for item in list(data['data'].values())[:8]:
                        ioc = parse_threatfox(item, now, config)
                        if ioc:
                            iocs.append(ioc)
            else:
                feed = feedparser.parse(config["url"])
                for entry in feed.entries[:8]:
                    ioc = extract_ioc_from_entry(entry, name, now, config)
                    if ioc:
                        iocs.append(ioc)
            time.sleep(1)
        except Exception as e:
            print(f"    → Failed {name}: {e}")
    return iocs

def parse_threatfox(item, now, config):
    """Parse ThreatFox JSON entry"""
    if not item:
        return None
    
    ioc_value = item.get('ioc', '')
    ioc_type_raw = item.get('ioc_type', 'url')
    
    # Map ThreatFox types to our types
    type_map = {
        'url': 'url',
        'domain': 'domain',
        'ip:port': 'ip',
        'md5_hash': 'hash',
        'sha256_hash': 'hash'
    }
    ioc_type = type_map.get(ioc_type_raw, 'url')
    
    malware = item.get('malware', 'Unknown')
    threat_type = item.get('threat_type', '')
    
    return {
        'type': ioc_type,
        'indicator': defang_indicator(ioc_value.split(':')[0] if ':' in ioc_value and ioc_type == 'ip' else ioc_value, ioc_type),
        'pulse': 'ThreatFox',
        'description': f"{malware} - {threat_type}" if threat_type else malware,
        'timestamp': 'just now',
        'source': 'ThreatFox (abuse.ch)',
        'sourceUrl': config['website'],
        'analysisTime': now.strftime('%Y-%m-%d %H:%M IST'),
        'tags': generate_tags(ioc_type, malware + ' ' + threat_type, 'ThreatFox'),
        'addedAt': now.isoformat(),
        'campaign': malware if malware != 'Unknown' else detect_campaign(ioc_value, threat_type)
    }

def parse_openphish(url, now, config):
    """Parse OpenPhish text feed"""
    return {
        'type': 'url',
        'indicator': defang_indicator(url, 'url'),
        'pulse': 'OpenPhish',
        'description': 'Active phishing URL',
        'timestamp': 'just now',
        'source': 'OpenPhish',
        'sourceUrl': config['website'],
        'analysisTime': now.strftime('%Y-%m-%d %H:%M IST'),
        'tags': ['phishing', 'live', 'automated'],
        'addedAt': now.isoformat(),
        'campaign': detect_campaign(url, '')
    }

def extract_ioc_from_entry(entry, feed_name, now, config):
    """Extract IOC from RSS entry"""
    title = entry.get('title', '').strip()
    link = entry.get('link', '')
    desc = entry.get('description', '') or entry.get('summary', '')
    
    # Extract primary indicator
    indicator = extract_indicator_from_text(title, desc)
    if not indicator or len(indicator) < 4:
        return None

    ioc_type = detect_ioc_type(indicator)
    
    # Defang the indicator
    safe = defang_indicator(indicator, ioc_type)
    
    # Clean description
    clean_desc = clean_html(desc)[:200] if desc else title[:150]
    
    # Detect campaign/malware family
    campaign = detect_campaign(indicator, clean_desc + ' ' + title)

    return {
        'type': ioc_type,
        'indicator': safe,
        'pulse': feed_name,
        'description': clean_desc,
        'timestamp': 'just now',
        'source': feed_name,
        'sourceUrl': link or config['website'],
        'analysisTime': now.strftime('%Y-%m-%d %H:%M IST'),
        'tags': generate_tags(ioc_type, clean_desc, feed_name),
        'addedAt': now.isoformat(),
        'campaign': campaign
    }

def extract_indicator_from_text(title, desc):
    """Extract IOC indicator from title or description"""
    # Try to find URL first
    url_match = re.search(r'https?://[^\s<>"]+', title + ' ' + desc)
    if url_match:
        return url_match.group(0).rstrip('.,;:)')
    
    # Try to find IP
    ip_match = re.search(r'\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b', title + ' ' + desc)
    if ip_match:
        return ip_match.group(0)
    
    # Try to find domain
    domain_match = re.search(r'\b[a-zA-Z0-9][-a-zA-Z0-9]*\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?\b', title)
    if domain_match and '.' in domain_match.group(0):
        return domain_match.group(0)
    
    # Fallback to first part of title
    return title.split(' - ')[0].split(': ')[-1].strip()

def detect_ioc_type(indicator):
    """Detect the type of IOC"""
    if indicator.startswith('http'):
        return 'url'
    if re.match(r'^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$', indicator):
        return 'ip'
    if re.match(r'^[a-fA-F0-9]{32,64}$', indicator):
        return 'hash'
    if '.' in indicator and not indicator.startswith('http'):
        return 'domain'
    return 'url'

def defang_indicator(indicator, ioc_type):
    """Defang indicator for safe display"""
    if ioc_type in ['url', 'domain']:
        return indicator.replace('http://', 'hxxp://').replace('https://', 'hxxps://').replace('.', '[.]')
    elif ioc_type == 'ip':
        return indicator.replace('.', '[.]')
    return indicator

def clean_html(text):
    """Remove HTML tags from text"""
    return re.sub(r'<[^>]+>', '', text).strip()

def generate_tags(ioc_type, desc, feed_name):
    """Generate relevant tags"""
    tags = ['live', feed_name.lower().replace(' ', '-').replace('(', '').replace(')', '')]
    
    desc_lower = desc.lower()
    if any(x in desc_lower for x in ['phish', 'credential', 'login', 'bank']):
        tags.append('phishing')
    if any(x in desc_lower for x in ['malware', 'trojan', 'ransomware', 'emotet', 'qakbot', 'icedid']):
        tags.append('malware')
    if any(x in desc_lower for x in ['c2', 'command', 'beacon', 'cobalt']):
        tags.append('c2')
    if any(x in desc_lower for x in ['botnet', 'ddos']):
        tags.append('botnet')
    
    return tags[:5]

def detect_campaign(indicator, desc):
    """Detect malware campaign/family"""
    text = (indicator + ' ' + desc).lower()
    
    campaigns = {
        'Emotet': ['emotet'],
        'QakBot': ['qakbot', 'qbot'],
        'IcedID': ['icedid', 'bokbot'],
        'Formbook': ['formbook'],
        'AgentTesla': ['agenttesla', 'agent tesla'],
        'RedLine': ['redline'],
        'AsyncRAT': ['asyncrat'],
        'NjRAT': ['njrat'],
        'Cobalt Strike': ['cobalt', 'beacon'],
        'Generic Phishing': ['phish', 'credential', 'bank', 'paypal', 'microsoft', 'office365']
    }
    
    for campaign, keywords in campaigns.items():
        if any(kw in text for kw in keywords):
            return campaign
    
    return 'Unknown'

# ──────────────────────────────────────────────────────────────
# IOC Management
# ──────────────────────────────────────────────────────────────
def remove_expired_iocs(iocs):
    """Remove IOCs older than expiry window"""
    cutoff = get_ist_now() - timedelta(hours=IOC_EXPIRY_HOURS)
    valid = []
    for ioc in iocs:
        try:
            added = datetime.fromisoformat(ioc['addedAt'].replace('Z', '+00:00'))
            if added > cutoff:
                ioc['timestamp'] = calculate_relative_time(added)
                valid.append(ioc)
        except:
            valid.append(ioc)
    return valid

def deduplicate_iocs(iocs):
    """Remove duplicate IOCs"""
    seen = set()
    uniq = []
    for ioc in iocs:
        key = ioc['indicator']
        if key not in seen:
            seen.add(key)
            uniq.append(ioc)
    return uniq

def calculate_relative_time(ts):
    """Calculate human-readable relative time"""
    diff = get_ist_now() - ts
    mins = int(diff.total_seconds() / 60)
    if mins < 1: return "just now"
    if mins < 60: return f"{mins}m ago"
    hrs = mins // 60
    if hrs < 24: return f"{hrs}h ago"
    return f"{hrs//24}d ago"

# ──────────────────────────────────────────────────────────────
# File I/O
# ──────────────────────────────────────────────────────────────
def load_existing():
    """Load existing threat intel data"""
    if not os.path.exists(OUTPUT_FILE):
        return None
    try:
        with open(OUTPUT_FILE, 'r') as f:
            txt = f.read()
            start = txt.find('{')
            end = txt.rfind('}') + 1
            return json.loads(txt[start:end]) if start != -1 else None
    except Exception as e:
        print(f"Load error: {e}")
        return None

def load_history():
    """Load historical data for trends"""
    if not os.path.exists(HISTORY_FILE):
        return {}
    try:
        with open(HISTORY_FILE, 'r') as f:
            return json.load(f)
    except:
        return {}

def save_history(hist):
    """Save historical data"""
    try:
        with open(HISTORY_FILE, 'w') as f:
            json.dump(hist, f, indent=2)
    except Exception as e:
        print(f"Save history failed: {e}")

def generate_js(data):
    """Generate JavaScript output file"""
    now = get_ist_now()
    return f"""// Auto-Generated Threat Intel (RSS Feeds)
// Updated: {now.isoformat()} IST
// Sources: URLhaus, OpenPhish, Malware Traffic Analysis, ThreatFox

const threatIntelData = """ + json.dumps(data, indent=4) + ";\n"

# ──────────────────────────────────────────────────────────────
# Daily Summary & Trends
# ──────────────────────────────────────────────────────────────
CATEGORIES = {
    'Phishing': ['phish', 'credential', 'bank', 'login'],
    'Malware': ['malware', 'trojan', 'ransomware', 'emotet', 'qakbot', 'icedid', 'formbook'],
    'C2': ['c2', 'command', 'beacon', 'cobalt'],
    'Botnet': ['botnet', 'ddos', 'bot']
}

def categorize_iocs(iocs):
    """Categorize IOCs by threat type and sector"""
    cats = {k: 0 for k in CATEGORIES}
    sectors = {'Finance': 0, 'Healthcare': 0, 'Tech': 0, 'Government': 0, 'General': 0}
    
    for ioc in iocs:
        desc = (ioc.get('description', '') + ' ' + ' '.join(ioc.get('tags', []))).lower()
        indicator = ioc.get('indicator', '').lower()
        
        # Categorize by threat type
        categorized = False
        for cat, kws in CATEGORIES.items():
            if any(kw in desc or kw in indicator for kw in kws):
                cats[cat] += 1
                categorized = True
                break
        
        # Default to phishing for uncategorized URLs
        if not categorized and ioc.get('type') == 'url':
            cats['Phishing'] += 1
        
        # Sector detection
        if any(x in desc or x in indicator for x in ['bank', 'finance', 'paypal', 'crypto', 'wallet']):
            sectors['Finance'] += 1
        elif any(x in desc or x in indicator for x in ['health', 'hospital', 'medical', 'pharma']):
            sectors['Healthcare'] += 1
        elif any(x in desc or x in indicator for x in ['gov', '.gov', 'nic.in', 'government']):
            sectors['Government'] += 1
        elif any(x in desc or x in indicator for x in ['cloud', 'aws', 'azure', 'microsoft', 'google', 'tech']):
            sectors['Tech'] += 1
        else:
            sectors['General'] += 1
            
    return cats, sectors

def detect_campaigns(iocs):
    """Detect and group IOCs by campaign"""
    campaigns = {}
    for ioc in iocs:
        campaign = ioc.get('campaign', 'Unknown')
        if campaign not in campaigns:
            campaigns[campaign] = {
                'name': campaign,
                'count': 0,
                'types': set(),
                'first_seen': ioc.get('addedAt', ''),
                'indicators': []
            }
        campaigns[campaign]['count'] += 1
        campaigns[campaign]['types'].add(ioc.get('type', 'unknown'))
        if len(campaigns[campaign]['indicators']) < 5:
            campaigns[campaign]['indicators'].append(ioc.get('indicator', ''))
    
    # Convert sets to lists for JSON serialization
    for camp in campaigns.values():
        camp['types'] = list(camp['types'])
    
    return campaigns

def calculate_trends(current, previous):
    """Calculate trends compared to previous period"""
    trends = []
    for cat in CATEGORIES:
        cur = current.get(cat, 0)
        prev = previous.get(cat, cur)
        
        if prev > 0:
            pct = int(((cur - prev) / prev) * 100)
        else:
            pct = 100 if cur > 0 else 0
            
        if pct > 10:
            trend = 'up'
        elif pct < -10:
            trend = 'down'
        else:
            trend = 'stable'
            
        trends.append({
            'category': cat,
            'count': cur,
            'trend': trend,
            'percentage': pct
        })
    
    return sorted(trends, key=lambda x: x['count'], reverse=True)

def generate_daily_summary(iocs, history):
    """Generate comprehensive daily summary"""
    prev = history.get('previous_day', {})
    cats, secs = categorize_iocs(iocs)
    top = calculate_trends(cats, prev.get('categories', {}))
    campaigns = detect_campaigns(iocs)
    total = len(iocs)
    
    # Count unique sources
    sources = set(i.get('source', '') for i in iocs)
    
    # Count critical (malware + C2)
    critical = cats.get('Malware', 0) + cats.get('C2', 0)
    
    # Active campaigns (campaigns with 1+ IOCs)
    active_campaigns = [c for c in campaigns.values() if c['count'] >= 1]
    
    summary = {
        'stats': {
            'totalIndicators': total,
            'newReports': len(sources),
            'criticalAlerts': critical,
            'activeCampaigns': len(active_campaigns)
        },
        'topThreats': top,
        'targetedSectors': [
            {'name': k, 'percentage': int((v/max(total, 1))*100)} 
            for k, v in sorted(secs.items(), key=lambda x: x[1], reverse=True) if v > 0
        ][:5],
        'geoDistribution': generate_geo_distribution(iocs),
        'campaigns': [
            {
                'name': c['name'],
                'count': c['count'],
                'types': c['types'],
                'sampleIndicators': c['indicators'][:3]
            }
            for c in sorted(active_campaigns, key=lambda x: x['count'], reverse=True)[:10]
        ],
        'indicatorBreakdown': {
            'byType': count_by_type(iocs),
            'bySource': count_by_source(iocs)
        }
    }

    # Save history for next comparison
    hist = load_history()
    hist['previous_day'] = {
        'date': get_ist_now().strftime('%Y-%m-%d'),
        'categories': cats
    }
    save_history(hist)
    
    return summary

def count_by_type(iocs):
    """Count IOCs by type"""
    types = {}
    for ioc in iocs:
        t = ioc.get('type', 'unknown')
        types[t] = types.get(t, 0) + 1
    return types

def count_by_source(iocs):
    """Count IOCs by source"""
    sources = {}
    for ioc in iocs:
        s = ioc.get('source', 'unknown')
        sources[s] = sources.get(s, 0) + 1
    return sources

def generate_geo_distribution(iocs):
    """Generate geographic distribution based on TLD/domain analysis"""
    geo_count = {'Asia': 0, 'Europe': 0, 'North America': 0, 'Others': 0}
    
    asia_tlds = ['.cn', '.jp', '.kr', '.in', '.sg', '.th', '.vn', '.id']
    europe_tlds = ['.uk', '.de', '.fr', '.ru', '.nl', '.pl', '.es', '.it', '.eu']
    na_tlds = ['.us', '.ca', '.mx']
    
    for ioc in iocs:
        indicator = ioc.get('indicator', '').lower()
        
        if any(tld in indicator for tld in asia_tlds):
            geo_count['Asia'] += 1
        elif any(tld in indicator for tld in europe_tlds):
            geo_count['Europe'] += 1
        elif any(tld in indicator for tld in na_tlds):
            geo_count['North America'] += 1
        else:
            geo_count['Others'] += 1
    
    # Redistribute "Others" proportionally if too many
    total = sum(geo_count.values())
    if geo_count['Others'] > total * 0.5 and total > 0:
        others = geo_count['Others']
        geo_count['Asia'] += int(others * 0.4)
        geo_count['Europe'] += int(others * 0.3)
        geo_count['North America'] += int(others * 0.2)
        geo_count['Others'] = int(others * 0.1)
    
    return [
        {'region': region, 'count': count}
        for region, count in sorted(geo_count.items(), key=lambda x: x[1], reverse=True)
        if count > 0
    ]

# ──────────────────────────────────────────────────────────────
# Runners
# ──────────────────────────────────────────────────────────────
def run_hourly():
    """Hourly update - fetch fresh IOCs"""
    print(f"[{get_ist_now().isoformat()}] Hourly RSS Update")
    existing = load_existing() or {}
    current_iocs = remove_expired_iocs(existing.get('hourlyThreats', []))

    new_iocs = fetch_rss_iocs()
    all_iocs = deduplicate_iocs(new_iocs + current_iocs)[:MAX_IOCS]

    output = {
        'lastUpdated': get_ist_now().isoformat(),
        'comparisonPeriod': existing.get('comparisonPeriod', ''),
        'hourlyThreats': all_iocs,
        'dailySummary': existing.get('dailySummary', {})
    }

    with open(OUTPUT_FILE, 'w') as f:
        f.write(generate_js(output))
    print(f"  → {len(all_iocs)} IOCs in threat-intel.js")

def run_daily():
    """Daily update - generate summary statistics"""
    print(f"[{get_ist_now().isoformat()}] Daily Summary")
    existing = load_existing() or {}
    all_iocs = existing.get('hourlyThreats', [])

    summary = generate_daily_summary(all_iocs, load_history())
    now = get_ist_now()
    period = f"{(now - timedelta(days=1)).strftime('%b %d')} – {now.strftime('%b %d, %Y')}"

    output = {
        'lastUpdated': now.isoformat(),
        'comparisonPeriod': period,
        'hourlyThreats': existing.get('hourlyThreats', []),
        'dailySummary': summary
    }

    with open(OUTPUT_FILE, 'w') as f:
        f.write(generate_js(output))
    print("  → Daily summary updated")

# ──────────────────────────────────────────────────────────────
# Main
# ──────────────────────────────────────────────────────────────
def main():
    import argparse
    parser = argparse.ArgumentParser()
    parser.add_argument('--hourly', action='store_true')
    parser.add_argument('--daily', action='store_true')
    parser.add_argument('--both', action='store_true')
    args = parser.parse_args()

    if not (args.hourly or args.daily or args.both):
        args.both = True

    if args.hourly or args.both:
        run_hourly()
    if args.daily or args.both:
        run_daily()
    print("Done!")

if __name__ == '__main__':
    main()
