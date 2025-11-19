#!/usr/bin/env python3
"""
Enhanced Threat Intel Automation - Multi-Vendor Dashboard
---------------------------------------------------------
Pulls from 6 reputable security sources with per-vendor tracking:
  • OpenPhish (phishing URLs)
  • URLhaus (malware distribution URLs)
  • ThreatFox (mixed IOCs - URLs, IPs, hashes)
  • Feodo Tracker (botnet C2 IPs)
  • Blocklist.de (SSH/brute force attackers)
  • SSL Blacklist (malicious SSL certs)

Features:
  • 50 IOCs per vendor (300 total)
  • NEW tag for IOCs added in last hour
  • RECENT tag for IOCs 1-6 hours old
  • Hourly data updates, daily analytics
  • Overview tab with aggregated view
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
MAX_IOCS_PER_VENDOR = 50
IOC_EXPIRY_HOURS = 24
OUTPUT_FILE = 'threat-intel.js'
HISTORY_FILE = 'threat-intel-history.json'

# IST Timezone
IST = timezone(timedelta(hours=5, minutes=30))

# Threat Categories
CATEGORIES = ['Phishing', 'Malware', 'C2', 'Botnet']

# Enhanced RSS Feeds (6 vendors)
RSS_FEEDS = {
    "OpenPhish": {
        "url": "https://openphish.com/feed.txt",
        "type": "text",
        "description": "Real-time phishing URL feed updated every 15 minutes. Tracks active phishing sites targeting major brands and financial institutions.",
        "website": "https://openphish.com/",
        "updateFrequency": "Every 15 minutes"
    },
    "URLhaus": {
        "url": "https://urlhaus.abuse.ch/feeds/rss/",
        "type": "rss",
        "description": "Malicious URL database by abuse.ch. Tracks URLs used for malware distribution including ransomware, trojans, and botnets.",
        "website": "https://urlhaus.abuse.ch/",
        "updateFrequency": "Real-time"
    },
    "ThreatFox": {
        "url": "https://threatfox.abuse.ch/export/json/recent/",
        "type": "threatfox",
        "description": "IOC sharing platform by abuse.ch. Includes URLs, IPs, domains, and hashes associated with active malware campaigns.",
        "website": "https://threatfox.abuse.ch/",
        "updateFrequency": "Real-time"
    },
    "Feodo Tracker": {
        "url": "https://feodotracker.abuse.ch/downloads/ipblocklist_recommended.txt",
        "type": "text",
        "description": "Tracks Feodo/Emotet/Dridex botnet C2 servers. Lists IP addresses of active command and control infrastructure.",
        "website": "https://feodotracker.abuse.ch/",
        "updateFrequency": "Every 5 minutes"
    },
    "Blocklist.de": {
        "url": "https://lists.blocklist.de/lists/ssh.txt",
        "type": "text",
        "description": "SSH brute force attackers. Lists IP addresses that have been reported for SSH login attacks and unauthorized access attempts.",
        "website": "https://www.blocklist.de/",
        "updateFrequency": "Every 30 minutes"
    },
    "SSL Blacklist": {
        "url": "https://sslbl.abuse.ch/blacklist/sslipblacklist.csv",
        "type": "text",
        "description": "Malicious SSL certificates and associated IPs. Tracks SSL certs used by malware C2 servers and phishing sites.",
        "website": "https://sslbl.abuse.ch/",
        "updateFrequency": "Real-time"
    }
}

def get_ist_now():
    return datetime.now(IST)

# ──────────────────────────────────────────────────────────────
# IOC Fetching & Parsing
# ──────────────────────────────────────────────────────────────
def fetch_vendor_iocs(vendor_name, config):
    """Fetch IOCs from a single vendor"""
    iocs = []
    now = get_ist_now()
    
    print(f"  - Fetching {vendor_name}...")
    try:
        if config["type"] == "text":
            import requests
            resp = requests.get(config["url"], timeout=15, headers={'User-Agent': 'TheHGTech-ThreatIntel/2.0'})
            lines = resp.text.strip().split('\n')
            
            # Skip header lines (comments, CSV headers, etc)
            clean_lines = [l.strip() for l in lines if l.strip() and not l.startswith('#') and not l.startswith('//')]
            
            # Parse based on vendor
            if vendor_name == "OpenPhish":
                for line in clean_lines[:MAX_IOCS_PER_VENDOR]:
                    if line.startswith('http'):
                        iocs.append(parse_openphish(line, now, config, vendor_name))
            
            elif vendor_name == "Feodo Tracker":
                for line in clean_lines[:MAX_IOCS_PER_VENDOR]:
                    if re.match(r'^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}', line):
                        ip = line.split(',')[0] if ',' in line else line
                        iocs.append(parse_feodo(ip, now, config, vendor_name))
            
            elif vendor_name == "Blocklist.de":
                for line in clean_lines[:MAX_IOCS_PER_VENDOR]:
                    if re.match(r'^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$', line):
                        iocs.append(parse_blocklist(line, now, config, vendor_name))
            
            elif vendor_name == "SSL Blacklist":
                for line in clean_lines[:MAX_IOCS_PER_VENDOR]:
                    if ',' in line:
                        parts = line.split(',')
                        if len(parts) >= 2 and re.match(r'^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}', parts[1]):
                            iocs.append(parse_ssl_blacklist(parts, now, config, vendor_name))
        
        elif config["type"] == "threatfox":
            import requests
            resp = requests.get(config["url"], timeout=15, headers={'User-Agent': 'TheHGTech-ThreatIntel/2.0'})
            data = resp.json()
            if 'data' in data:
                for item in list(data['data'].values())[:MAX_IOCS_PER_VENDOR]:
                    ioc = parse_threatfox(item, now, config, vendor_name)
                    if ioc:
                        iocs.append(ioc)
        
        else:  # RSS type
            feed = feedparser.parse(config["url"])
            for entry in feed.entries[:MAX_IOCS_PER_VENDOR]:
                ioc = extract_ioc_from_entry(entry, vendor_name, now, config)
                if ioc:
                    iocs.append(ioc)
        
        print(f"    ✓ Got {len(iocs)} IOCs from {vendor_name}")
        time.sleep(1)  # Rate limiting
        
    except Exception as e:
        print(f"    ✗ Failed {vendor_name}: {e}")
    
    return iocs

def parse_openphish(url, now, config, vendor):
    """Parse OpenPhish URL"""
    return {
        'type': 'url',
        'indicator': defang_indicator(url, 'url'),
        'description': 'Active phishing URL',
        'timestamp': format_timestamp(now),
        'source': vendor,
        'sourceUrl': config['website'],
        'analysisTime': now.strftime('%Y-%m-%d %H:%M IST'),
        'tags': ['phishing', 'live'],
        'addedAt': now.isoformat(),
        'campaign': detect_campaign(url, 'phishing')
    }

def parse_feodo(ip, now, config, vendor):
    """Parse Feodo Tracker IP"""
    return {
        'type': 'ip',
        'indicator': defang_indicator(ip, 'ip'),
        'description': 'Feodo/Emotet botnet C2 server',
        'timestamp': format_timestamp(now),
        'source': vendor,
        'sourceUrl': config['website'],
        'analysisTime': now.strftime('%Y-%m-%d %H:%M IST'),
        'tags': ['botnet', 'c2', 'feodo'],
        'addedAt': now.isoformat(),
        'campaign': 'Feodo/Emotet'
    }

def parse_blocklist(ip, now, config, vendor):
    """Parse Blocklist.de IP"""
    return {
        'type': 'ip',
        'indicator': defang_indicator(ip, 'ip'),
        'description': 'SSH brute force attacker',
        'timestamp': format_timestamp(now),
        'source': vendor,
        'sourceUrl': config['website'],
        'analysisTime': now.strftime('%Y-%m-%d %H:%M IST'),
        'tags': ['brute-force', 'ssh'],
        'addedAt': now.isoformat(),
        'campaign': 'SSH Attacks'
    }

def parse_ssl_blacklist(parts, now, config, vendor):
    """Parse SSL Blacklist CSV"""
    timestamp_val = parts[0] if len(parts) > 0 else ''
    ip = parts[1] if len(parts) > 1 else ''
    port = parts[2] if len(parts) > 2 else ''
    
    return {
        'type': 'ip',
        'indicator': defang_indicator(ip, 'ip'),
        'description': f'Malicious SSL cert (port {port})' if port else 'Malicious SSL certificate',
        'timestamp': format_timestamp(now),
        'source': vendor,
        'sourceUrl': config['website'],
        'analysisTime': now.strftime('%Y-%m-%d %H:%M IST'),
        'tags': ['ssl', 'c2'],
        'addedAt': now.isoformat(),
        'campaign': 'SSL C2 Infrastructure'
    }

def parse_threatfox(item, now, config, vendor):
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
    
    # For IP:port, extract just the IP
    if ':' in ioc_value and ioc_type == 'ip':
        ioc_value = ioc_value.split(':')[0]
    
    return {
        'type': ioc_type,
        'indicator': defang_indicator(ioc_value, ioc_type),
        'description': f"{malware} - {threat_type}" if threat_type else malware,
        'timestamp': format_timestamp(now),
        'source': vendor,
        'sourceUrl': config['website'],
        'analysisTime': now.strftime('%Y-%m-%d %H:%M IST'),
        'tags': generate_tags(ioc_type, malware + ' ' + threat_type, vendor),
        'addedAt': now.isoformat(),
        'campaign': malware if malware != 'Unknown' else detect_campaign(ioc_value, threat_type)
    }

def extract_ioc_from_entry(entry, feed_name, now, config):
    """Extract IOC from RSS entry (URLhaus)"""
    title = entry.get('title', '').strip()
    link = entry.get('link', '')
    desc = entry.get('description', '') or entry.get('summary', '')
    
    all_text = title + ' ' + desc
    
    # URLhaus RSS typically has the malicious URL directly
    url_match = re.search(r'https?://[^\s<>"\']+', all_text)
    if url_match:
        indicator = url_match.group(0).rstrip('.,;:)')
        clean_desc = clean_html(desc)[:150] if desc else "Malicious URL"
        
        return {
            'type': 'url',
            'indicator': defang_indicator(indicator, 'url'),
            'description': clean_desc,
            'timestamp': format_timestamp(now),
            'source': feed_name,
            'sourceUrl': link or config['website'],
            'analysisTime': now.strftime('%Y-%m-%d %H:%M IST'),
            'tags': generate_tags('url', clean_desc, feed_name),
            'addedAt': now.isoformat(),
            'campaign': detect_campaign(indicator, clean_desc)
        }
    return None

# ──────────────────────────────────────────────────────────────
# Helper Functions
# ──────────────────────────────────────────────────────────────
def format_timestamp(dt):
    """Format timestamp relative to now"""
    return 'just now'  # JavaScript will handle relative time display

def defang_indicator(indicator, ioc_type):
    """Defang IOC to prevent accidental clicks"""
    if ioc_type == 'url':
        return indicator.replace('http://', 'hxxp://').replace('https://', 'hxxps://').replace('.', '[.]')
    elif ioc_type == 'ip':
        return indicator.replace('.', '[.]')
    elif ioc_type == 'domain':
        return indicator.replace('.', '[.]')
    return indicator

def clean_html(text):
    """Remove HTML tags from text"""
    import re
    return re.sub(r'<[^>]+>', '', text).strip()

def generate_tags(ioc_type, description, source):
    """Generate relevant tags for IOC"""
    tags = []
    desc_lower = description.lower()
    
    # Type-based tags
    if ioc_type in ['url', 'domain']:
        if 'phish' in desc_lower:
            tags.append('phishing')
        if 'malware' in desc_lower or 'trojan' in desc_lower:
            tags.append('malware')
    elif ioc_type == 'ip':
        if 'c2' in desc_lower or 'command' in desc_lower:
            tags.append('c2')
        if 'bot' in desc_lower:
            tags.append('botnet')
    
    # Add live tag
    tags.append('live')
    
    return tags[:4]  # Max 4 tags

def detect_campaign(indicator, description):
    """Detect campaign/malware family"""
    desc_lower = (indicator + ' ' + description).lower()
    
    # Known malware families
    malware_families = [
        'emotet', 'trickbot', 'qakbot', 'cobalt strike', 'dridex',
        'icedid', 'hancitor', 'ursnif', 'formbook', 'agenttesla',
        'remcos', 'njrat', 'asyncrat', 'redline', 'vidar', 'raccoon'
    ]
    
    for family in malware_families:
        if family in desc_lower:
            return family.title()
    
    # Generic categorization
    if 'phish' in desc_lower:
        if 'booking' in desc_lower:
            return 'Booking.com Phishing'
        elif 'bank' in desc_lower or 'paypal' in desc_lower:
            return 'Financial Phishing'
        return 'Generic Phishing'
    elif 'bot' in desc_lower:
        return 'Botnet Activity'
    elif 'ssh' in desc_lower:
        return 'SSH Attacks'
    elif 'ssl' in desc_lower or 'cert' in desc_lower:
        return 'SSL C2 Infrastructure'
    
    return 'Unknown Campaign'

# ──────────────────────────────────────────────────────────────
# File Management
# ──────────────────────────────────────────────────────────────
def load_existing():
    """Load existing threat-intel.js data"""
    if not os.path.exists(OUTPUT_FILE):
        return None
    try:
        with open(OUTPUT_FILE, 'r') as f:
            content = f.read()
            # Extract JSON from JS file
            match = re.search(r'const threatIntelData = ({.*?});', content, re.DOTALL)
            if match:
                return json.loads(match.group(1))
    except Exception as e:
        print(f"Error loading existing data: {e}")
    return None

def load_history():
    """Load historical data"""
    if not os.path.exists(HISTORY_FILE):
        return {}
    try:
        with open(HISTORY_FILE, 'r') as f:
            return json.load(f)
    except:
        return {}

def save_history(data):
    """Save historical data"""
    with open(HISTORY_FILE, 'w') as f:
        json.dump(data, f, indent=2)

def generate_js(data):
    """Generate JavaScript file with data"""
    js_content = f"""// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: {get_ist_now().isoformat()} IST
// Sources: {', '.join(RSS_FEEDS.keys())}

const threatIntelData = {json.dumps(data, indent=4)};
"""
    return js_content

# ──────────────────────────────────────────────────────────────
# Data Processing
# ──────────────────────────────────────────────────────────────
def remove_expired_iocs(iocs):
    """Remove IOCs older than 24 hours"""
    now = get_ist_now()
    cutoff = now - timedelta(hours=IOC_EXPIRY_HOURS)
    
    filtered = []
    for ioc in iocs:
        try:
            added = datetime.fromisoformat(ioc['addedAt'].replace('Z', '+00:00'))
            if added > cutoff:
                filtered.append(ioc)
        except:
            pass
    
    return filtered

def deduplicate_iocs(iocs):
    """Remove duplicate IOCs, keeping newest"""
    seen = {}
    for ioc in iocs:
        indicator = ioc.get('indicator', '')
        if indicator not in seen:
            seen[indicator] = ioc
        else:
            # Keep newer one
            existing_time = seen[indicator].get('addedAt', '')
            new_time = ioc.get('addedAt', '')
            if new_time > existing_time:
                seen[indicator] = ioc
    
    return list(seen.values())

def categorize_iocs(iocs):
    """Categorize IOCs by type"""
    cats = {cat: 0 for cat in CATEGORIES}
    sectors = {'Finance': 0, 'Tech': 0, 'Government': 0, 'General': 0}
    
    for ioc in iocs:
        tags = ioc.get('tags', [])
        desc = ioc.get('description', '').lower()
        indicator = ioc.get('indicator', '').lower()
        
        # Categorize
        if 'phishing' in tags or 'phish' in desc:
            cats['Phishing'] += 1
        elif 'malware' in tags or 'trojan' in desc or 'ransomware' in desc:
            cats['Malware'] += 1
        elif 'c2' in tags or 'command' in desc:
            cats['C2'] += 1
        elif 'botnet' in tags or 'bot' in desc:
            cats['Botnet'] += 1
        
        # Sectors
        if any(x in desc or x in indicator for x in ['bank', 'paypal', 'visa', 'mastercard', 'finance']):
            sectors['Finance'] += 1
        elif any(x in desc or x in indicator for x in ['.gov', 'government', 'federal']):
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
                'indicators': []
            }
        campaigns[campaign]['count'] += 1
        campaigns[campaign]['types'].add(ioc.get('type', 'unknown'))
        if len(campaigns[campaign]['indicators']) < 3:
            campaigns[campaign]['indicators'].append(ioc.get('indicator', ''))
    
    # Convert sets to lists
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

def generate_daily_summary(all_vendors_data, history):
    """Generate daily analytics (calculated at midnight)"""
    # Combine all IOCs for analysis
    all_iocs = []
    for vendor_data in all_vendors_data.values():
        all_iocs.extend(vendor_data['iocs'])
    
    prev = history.get('previous_day', {})
    cats, secs = categorize_iocs(all_iocs)
    top = calculate_trends(cats, prev.get('categories', {}))
    campaigns = detect_campaigns(all_iocs)
    
    # Count unique sources
    sources = set(i.get('source', '') for i in all_iocs)
    
    # Critical alerts
    critical = cats.get('Malware', 0) + cats.get('C2', 0)
    
    # Active campaigns
    active_campaigns = [c for c in campaigns.values() if c['count'] >= 2]
    
    summary = {
        'stats': {
            'totalIndicators': len(all_iocs),
            'activeSources': len(sources),
            'criticalAlerts': critical,
            'activeCampaigns': len(active_campaigns)
        },
        'topThreats': top,
        'targetedSectors': [
            {'name': k, 'percentage': int((v/max(len(all_iocs), 1))*100)} 
            for k, v in sorted(secs.items(), key=lambda x: x[1], reverse=True) if v > 0
        ][:5],
        'campaigns': [
            {
                'name': c['name'],
                'count': c['count'],
                'types': c['types'],
                'sampleIndicators': c['indicators']
            }
            for c in sorted(active_campaigns, key=lambda x: x['count'], reverse=True)[:10]
        ]
    }
    
    # Update history
    hist = load_history()
    hist['previous_day'] = {
        'date': get_ist_now().strftime('%Y-%m-%d'),
        'categories': cats
    }
    save_history(hist)
    
    return summary

# ──────────────────────────────────────────────────────────────
# Runners
# ──────────────────────────────────────────────────────────────
def run_hourly():
    """Hourly update - fetch fresh IOCs from all vendors"""
    print(f"\n[{get_ist_now().isoformat()}] Hourly Multi-Vendor Update")
    print("="*60)
    
    existing = load_existing() or {}
    vendors_data = {}
    
    # Fetch from each vendor
    for vendor_name, config in RSS_FEEDS.items():
        # Load existing IOCs for this vendor
        existing_vendor = existing.get('vendors', {}).get(vendor_name, {})
        current_iocs = remove_expired_iocs(existing_vendor.get('iocs', []))
        
        # Fetch new IOCs
        new_iocs = fetch_vendor_iocs(vendor_name, config)
        
        # Combine and deduplicate
        all_iocs = deduplicate_iocs(new_iocs + current_iocs)[:MAX_IOCS_PER_VENDOR]
        
        # Store vendor data
        vendors_data[vendor_name] = {
            'description': config['description'],
            'website': config['website'],
            'updateFrequency': config['updateFrequency'],
            'iocs': all_iocs,
            'stats': {
                'total': len(all_iocs),
                'newInLastHour': len([i for i in all_iocs if is_new(i['addedAt'])]),
                'lastUpdate': format_timestamp(get_ist_now())
            }
        }
    
    # Generate overview (top 20 most recent across all vendors)
    all_iocs_for_overview = []
    for vendor_data in vendors_data.values():
        all_iocs_for_overview.extend(vendor_data['iocs'])
    
    # Sort by addedAt timestamp and take top 20
    all_iocs_for_overview.sort(key=lambda x: x['addedAt'], reverse=True)
    overview = all_iocs_for_overview[:20]
    
    # Keep existing daily summary or create empty one
    daily_summary = existing.get('dailySummary', {
        'stats': {'totalIndicators': 0, 'activeSources': 0, 'criticalAlerts': 0, 'activeCampaigns': 0},
        'topThreats': [],
        'targetedSectors': [],
        'campaigns': []
    })
    
    now = get_ist_now()
    period = f"{(now - timedelta(hours=24)).strftime('%b %d')} – {now.strftime('%b %d, %Y')}"
    
    output = {
        'lastUpdated': now.isoformat(),
        'comparisonPeriod': period,
        'vendors': vendors_data,
        'overview': overview,
        'dailySummary': daily_summary
    }
    
    with open(OUTPUT_FILE, 'w') as f:
        f.write(generate_js(output))
    
    total_iocs = sum(v['stats']['total'] for v in vendors_data.values())
    print("="*60)
    print(f"✓ Update complete - {total_iocs} total IOCs across {len(vendors_data)} vendors")
    print(f"  Output: {OUTPUT_FILE}")

def run_daily():
    """Daily update - calculate analytics at midnight"""
    print(f"\n[{get_ist_now().isoformat()}] Daily Analytics Calculation")
    print("="*60)
    
    existing = load_existing()
    if not existing or 'vendors' not in existing:
        print("  ✗ No existing data to calculate analytics from")
        return
    
    # Calculate daily summary
    summary = generate_daily_summary(existing['vendors'], load_history())
    
    # Update existing data with new summary
    existing['dailySummary'] = summary
    existing['comparisonPeriod'] = f"{(get_ist_now() - timedelta(days=1)).strftime('%b %d')} – {get_ist_now().strftime('%b %d, %Y')}"
    
    with open(OUTPUT_FILE, 'w') as f:
        f.write(generate_js(existing))
    
    print("="*60)
    print("✓ Daily analytics updated")
    print(f"  Total Indicators: {summary['stats']['totalIndicators']}")
    print(f"  Active Sources: {summary['stats']['activeSources']}")
    print(f"  Critical Alerts: {summary['stats']['criticalAlerts']}")
    print(f"  Active Campaigns: {summary['stats']['activeCampaigns']}")

def is_new(added_at_str):
    """Check if IOC was added in the last hour"""
    try:
        added = datetime.fromisoformat(added_at_str.replace('Z', '+00:00'))
        now = get_ist_now()
        return (now - added).total_seconds() < 3600
    except:
        return False

# ──────────────────────────────────────────────────────────────
# Main
# ──────────────────────────────────────────────────────────────
def main():
    import argparse
    parser = argparse.ArgumentParser()
    parser.add_argument('--hourly', action='store_true', help='Run hourly data fetch')
    parser.add_argument('--daily', action='store_true', help='Run daily analytics calculation')
    parser.add_argument('--both', action='store_true', help='Run both hourly and daily')
    args = parser.parse_args()
    
    if not (args.hourly or args.daily or args.both):
        args.both = True
    
    if args.hourly or args.both:
        run_hourly()
    if args.daily or args.both:
        run_daily()
    
    print("\n✓ All done!")

if __name__ == '__main__':
    main()
