#!/usr/bin/env python3
"""
Enhanced Threat Intel Automation - Multi-Vendor Dashboard
---------------------------------------------------------
Pulls from 6 reputable security sources with per-vendor tracking:
  • OpenPhish (phishing URLs)
  • Malware Bazaar (malware samples, hashes, URLs)
  • Spamhaus DROP (hijacked IP ranges)
  • CINS Army (malicious IPs)
  • Blocklist.de (SSH/brute force attackers)
  • Phishing Database (active phishing URLs)

Features:
  • 50 IOCs per vendor (300 total)
  • NEW tag for IOCs added in last hour
  • RECENT tag for IOCs 1-6 hours old
  • Hourly data updates, daily analytics
  • Overview tab with aggregated view
  • All feeds work without API keys (GitHub Actions safe)
"""

import os
import sys
import json
import time
from datetime import datetime, timedelta, timezone
from urllib.parse import urlparse
import re

try:
    from openai import OpenAI
    OPENAI_AVAILABLE = True
except ImportError:
    print("Warning: OpenAI library not installed. AI insights will be disabled.")
    OPENAI_AVAILABLE = False

# ──────────────────────────────────────────────────────────────
# Config
# ──────────────────────────────────────────────────────────────
# GitHub Releases Configuration (via jsDelivr CDN for CORS support)
GITHUB_REPO = 'Harish761/thehgtech'
GITHUB_RELEASE_TAG = 'iocs-latest'
# Use jsDelivr CDN to bypass CORS restrictions
GITHUB_RELEASE_URL = f'https://cdn.jsdelivr.net/gh/{GITHUB_REPO}@{GITHUB_RELEASE_TAG}'

# Vendor-specific caps - DISABLED for R2 storage (unlimited IOCs!)
# With R2, we store ALL IOCs and load on-demand, so no caps needed
# VENDOR_CAPS = {
#     'Malware Bazaar': 500,
#     'Phishing Database': 500,
#     'Blocklist.de': 500,
#     'CINS Army': 300,
#     'OpenPhish': 200,
#     'Spamhaus DROP': 100
# }

IOC_EXPIRY_HOURS = 24
OUTPUT_FILE = 'threat-intel.js'
HISTORY_FILE = 'threat-intel-history.json'

# IST Timezone
IST = timezone(timedelta(hours=5, minutes=30))

# Threat Categories
CATEGORIES = ['Phishing', 'Malware', 'C2', 'Botnet']

# Enhanced Threat Intel Feeds (6 vendors - all RSS/public, no API keys)
VENDORS = {
    "OpenPhish": {
        "url": "https://openphish.com/feed.txt",
        "type": "text",
        "description": "Real-time phishing URL feed updated every 15 minutes. Tracks active phishing sites targeting major brands and financial institutions.",
        "website": "https://openphish.com/",
        "updateFrequency": "Every 15 minutes"
    },
    "Malware Bazaar": {
        "url": "https://bazaar.abuse.ch/export/csv/recent/",
        "type": "csv",
        "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
        "website": "https://bazaar.abuse.ch/",
        "updateFrequency": "Real-time"
    },
    "Spamhaus DROP": {
        "url": "https://www.spamhaus.org/drop/drop.txt",
        "type": "text",
        "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
        "website": "https://www.spamhaus.org/",
        "updateFrequency": "Daily"
    },
    "CINS Army": {
        "url": "http://cinsscore.com/list/ci-badguys.txt",
        "type": "text",
        "description": "Malicious IPs from CINS Army threat intelligence. Fast-updating list of confirmed attackers.",
        "website": "http://cinsscore.com/",
        "updateFrequency": "Every 15 minutes"
    },
    "Blocklist.de": {
        "url": "https://lists.blocklist.de/lists/ssh.txt",
        "type": "text",
        "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
        "website": "https://www.blocklist.de/",
        "updateFrequency": "Hourly"
    },
    "Phishing Database": {
        "url": "https://raw.githubusercontent.com/mitchellkrogza/Phishing.Database/master/phishing-links-ACTIVE.txt",
        "type": "text",
        "description": "Large database of active phishing URLs. Complements OpenPhish with additional phishing site coverage.",
        "website": "https://github.com/mitchellkrogza/Phishing.Database",
        "updateFrequency": "Hourly"
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
            # No cap - store all IOCs for R2
            if vendor_name == "OpenPhish" or vendor_name == "Phishing Database":
                for line in clean_lines:
                    if line.startswith('http'):
                        iocs.append(parse_phishing_url(line, now, config, vendor_name))
            
            elif vendor_name == "Spamhaus DROP":
                for line in clean_lines:
                    # Spamhaus DROP format: CIDR ; SBL number
                    if line and not line.startswith(';'):
                        parts = line.split(';')
                        if parts and '/' in parts[0]:  # CIDR notation
                            iocs.append(parse_spamhaus(parts[0].strip(), now, config, vendor_name))
            
            elif vendor_name == "CINS Army":
                for line in clean_lines:
                    if re.match(r'^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$', line):
                        iocs.append(parse_cins_army(line, now, config, vendor_name))
            
            elif vendor_name == "Blocklist.de":
                for line in clean_lines:
                    if re.match(r'^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$', line):
                        iocs.append(parse_blocklist(line, now, config, vendor_name))
        
        elif config["type"] == "csv":
            # Malware Bazaar CSV format
            import requests
            resp = requests.get(config["url"], timeout=15, headers={'User-Agent': 'TheHGTech-ThreatIntel/2.0'})
            lines = resp.text.strip().split('\n')
            # No cap - store all IOCs for R2
            for line in lines[9:]:  # Skip 9-line header
                if line.startswith('#') or not line.strip():
                    continue
                ioc = parse_malware_bazaar(line, now, config, vendor_name)
                if ioc:
                    iocs.append(ioc)
        
        else:  # RSS type (if any remain)
            feed = feedparser.parse(config["url"])
            # No cap - store all IOCs for R2
            for entry in feed.entries:
                ioc = extract_ioc_from_entry(entry, vendor_name, now, config)
                if ioc:
                    iocs.append(ioc)
        
        print(f"    ✓ Got {len(iocs)} IOCs from {vendor_name}")
        time.sleep(1)  # Rate limiting
        
    except Exception as e:
        print(f"    ✗ Failed {vendor_name}: {e}")
    
    return iocs

def parse_phishing_url(url, now, config, vendor):
    """Parse phishing URL (OpenPhish or Phishing Database)"""
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

def parse_malware_bazaar(csv_line, now, config, vendor):
    """Parse Malware Bazaar CSV line"""
    try:
        parts = csv_line.split(',')
        if len(parts) < 8:
            return None
        
        # CSV format: timestamp,sha256_hash,md5_hash,sha1_hash,reporter,file_name,file_type,mime_type,signature,clamav,vtpercent,imphash,ssdeep,tlsh
        sha256 = parts[1].strip('"') if len(parts) > 1 else ''
        file_type = parts[6].strip('"') if len(parts) > 6 else 'unknown'
        signature = parts[8].strip('"') if len(parts) > 8 else 'Unknown malware'
        
        if not sha256:
            return None
            
        return {
            'type': 'hash',
            'indicator': sha256,  # Full hash for VirusTotal/analysis
            'description': f'{signature} ({file_type})',
            'timestamp': format_timestamp(now),
            'source': vendor,
            'sourceUrl': config['website'],
            'analysisTime': now.strftime('%Y-%m-%d %H:%M IST'),
            'tags': ['malware', 'hash'],
            'addedAt': now.isoformat(),
            'campaign': signature
        }
    except Exception as e:
        return None

def parse_spamhaus(cidr, now, config, vendor):
    """Parse Spamhaus DROP CIDR range"""
    return {
        'type': 'ip-range',
        'indicator': cidr,
        'description': 'Hijacked/leased IP range (criminal control)',
        'timestamp': format_timestamp(now),
        'source': vendor,
        'sourceUrl': config['website'],
        'analysisTime': now.strftime('%Y-%m-%d %H:%M IST'),
        'tags': ['hijacked', 'criminal-network'],
        'addedAt': now.isoformat(),
        'campaign': 'Spamhaus DROP List'
    }

def parse_cins_army(ip, now, config, vendor):
    """Parse CINS Army malicious IP"""
    return {
        'type': 'ip',
        'indicator': defang_indicator(ip, 'ip'),
        'description': 'Confirmed malicious IP',
        'timestamp': format_timestamp(now),
        'source': vendor,
        'sourceUrl': config['website'],
        'analysisTime': now.strftime('%Y-%m-%d %H:%M IST'),
        'tags': ['malicious-ip', 'attacker'],
        'addedAt': now.isoformat(),
        'campaign': 'CINS Threat List'
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
            match = re.search(r'window\.threatIntelData = ({.*?});', content, re.DOTALL)
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

def save_daily_snapshot(all_vendors_data, snapshot_metrics):
    """Save daily snapshot for 7-day trend tracking"""
    history = load_history()
    
    # Initialize dailySnapshots if not exists
    if 'dailySnapshots' not in history:
        history['dailySnapshots'] = []
    
    today = get_ist_now().strftime('%Y-%m-%d')
    
    # Check if today's snapshot already exists
    existing_dates = [s['date'] for s in history['dailySnapshots']]
    if today in existing_dates:
        print(f"  ✓ Daily snapshot for {today} already exists")
        return history
    
    # Count total IOCs and new IOCs
    total_iocs = sum(v['stats']['total'] for v in all_vendors_data.values())
    new_iocs = sum(v['stats']['newInLastHour'] for v in all_vendors_data.values())
    
    # Get campaign counts
    all_iocs = []
    for vendor_data in all_vendors_data.values():
        all_iocs.extend(vendor_data.get('iocs', []))
    
    campaigns = detect_campaigns(all_iocs)
    campaign_counts = {name: data['count'] for name, data in campaigns.items()}
    
    # Create vendor stats
    vendor_stats = {}
    for vendor_name, vendor_data in all_vendors_data.items():
        vendor_stats[vendor_name] = {
            'total': vendor_data['stats']['total'],
            'new': vendor_data['stats']['newInLastHour']
        }
    
    # Create snapshot
    snapshot = {
        'date': today,
        'timestamp': get_ist_now().isoformat(),
        'metrics': {
            'totalIOCs': total_iocs,
            'newIOCs': new_iocs,
            'topAttackVector': snapshot_metrics.get('topAttackVector', 'N/A'),
            'mostTargetedRegion': snapshot_metrics.get('mostTargetedRegion', 'Global'),
            'campaignCounts': campaign_counts,
            'vendorStats': vendor_stats
        }
    }
    
    history['dailySnapshots'].append(snapshot)
    print(f"  ✓ Saved daily snapshot for {today}")
    
    return history

def maintain_rolling_window(history):
    """Keep only last 7 days of snapshots"""
    if 'dailySnapshots' not in history:
        return history
    
    # Sort by date descending
    history['dailySnapshots'].sort(key=lambda x: x['date'], reverse=True)
    
    # Keep only last 7 days
    history['dailySnapshots'] = history['dailySnapshots'][:7]
    
    print(f"  ✓ Maintaining {len(history['dailySnapshots'])}-day rolling window")
    return history

def generate_history_js(history):
    """Generate JavaScript file with historical data"""
    js_content = f"""// Threat Intelligence Historical Data
// Auto-generated by fetch_threat_intel.py
// Stores rolling 7-day window of threat metrics
// Updated: {get_ist_now().isoformat()} IST

const threatIntelHistory = {json.dumps(history, indent=4)};
"""
    
    with open('threat-intel-history.js', 'w') as f:
        f.write(js_content)
    
    print(f"  ✓ Generated threat-intel-history.js with {len(history.get('dailySnapshots', []))} snapshots")

# ──────────────────────────────────────────────────────────────
# AI-Powered Insights
# ──────────────────────────────────────────────────────────────
def call_openai_api(prompt, model="gpt-4o-mini"):
    """Call OpenAI API with error handling"""
    if not OPENAI_AVAILABLE:
        return None
    
    api_key = os.getenv('OPENAI_API_KEY')
    if not api_key:
        print("  ⚠ OPENAI_API_KEY not set, skipping AI insights")
        return None
    
    try:
        client = OpenAI(api_key=api_key)
        response = client.chat.completions.create(
            model=model,
            messages=[{"role": "user", "content": prompt}],
            temperature=0.7,
            max_tokens=500 if model == "gpt-4o-mini" else 1000
        )
        return response.choices[0].message.content
    except Exception as e:
        print(f"  ⚠ OpenAI API error: {e}")
        return None

def generate_daily_ai_summary(vendors_data, snapshot_metrics):
    """Generate daily AI summary using GPT-4o-mini"""
    if not OPENAI_AVAILABLE:
        return None
    
    # Count total and new IOCs
    total_iocs = sum(v['stats']['total'] for v in vendors_data.values())
    new_iocs = sum(v['stats']['newInLastHour'] for v in vendors_data.values())
    
    # Get top campaigns
    all_iocs = []
    for vendor_data in vendors_data.values():
        all_iocs.extend(vendor_data.get('iocs', []))
    campaigns = detect_campaigns(all_iocs)
    top_campaigns = sorted(campaigns.items(), key=lambda x: x[1]['count'], reverse=True)[:5]
    campaign_str = ", ".join([f"{name} ({data['count']} IOCs)" for name, data in top_campaigns])
    
    # Calculate analytics metrics
    # IOC Type Distribution
    type_counts = {}
    severity_counts = {'Critical': 0, 'High': 0, 'Medium': 0, 'Low': 0}
    attack_vectors = {'Phishing': 0, 'Malware': 0, 'Network': 0, 'C2/Botnet': 0}
    
    for ioc in all_iocs:
        ioc_type = ioc.get('type', 'unknown')
        type_counts[ioc_type] = type_counts.get(ioc_type, 0) + 1
        
        # Severity based on source
        source = ioc.get('source', '')
        if 'Malware Bazaar' in source:
            severity_counts['Critical'] += 1
        elif source in ['Spamhaus DROP', 'CINS Army', 'Blocklist.de']:
            severity_counts['High'] += 1
        elif source in ['OpenPhish', 'Phishing Database']:
            severity_counts['Medium'] += 1
        else:
            severity_counts['Low'] += 1
        
        # Attack vectors
        if ioc_type == 'url':
            attack_vectors['Phishing'] += 1
        elif ioc_type == 'hash':
            attack_vectors['Malware'] += 1
        elif ioc_type in ['ip', 'cidr']:
            attack_vectors['Network'] += 1
    
    # Calculate threat velocity (IOCs per hour)
    threat_velocity = round(total_iocs / 24, 1)
    
    # Calculate data freshness (% from last 24h)
    now = get_ist_now()
    last_24h = now - timedelta(hours=24)
    fresh_count = 0
    for ioc in all_iocs:
        try:
            added = datetime.fromisoformat(ioc['addedAt'].replace('Z', '+00:00'))
            if added >= last_24h:
                fresh_count += 1
        except:
            pass
    data_freshness = round((fresh_count / max(total_iocs, 1)) * 100, 1)
    
    # Format analytics for prompt
    type_dist = ", ".join([f"{t}: {c}" for t, c in sorted(type_counts.items(), key=lambda x: x[1], reverse=True)])
    severity_dist = ", ".join([f"{s}: {c}" for s, c in severity_counts.items() if c > 0])
    vector_dist = ", ".join([f"{v}: {c}" for v, c in sorted(attack_vectors.items(), key=lambda x: x[1], reverse=True) if c > 0])
    
    prompt = f"""Analyze today's threat intelligence data and provide a concise, professional summary (3-4 sentences).

**Comprehensive Analytics:**
- Total IOCs: {total_iocs} ({new_iocs} new in last hour)
- Threat Velocity: {threat_velocity} IOCs/hour
- Data Freshness: {data_freshness}% from last 24h
- Critical Threats: {severity_counts['Critical']}

**IOC Type Distribution:** {type_dist}
**Threat Severity:** {severity_dist}
**Attack Vectors:** {vector_dist}
**Top Campaigns:** {campaign_str or 'None detected'}
**Primary Attack Vector:** {snapshot_metrics.get('topAttackVector', 'N/A')}

Focus on: Key trends, notable threats, severity distribution, and actionable insights. Be specific and technical."""
    
    summary = call_openai_api(prompt, model="gpt-4o-mini")
    if summary:
        return {
            'date': get_ist_now().strftime('%Y-%m-%d'),
            'summary': summary.strip(),
            'keyFindings': [
                f"{new_iocs} new IOCs detected (Velocity: {threat_velocity}/hr)",
                f"Top vector: {snapshot_metrics.get('topAttackVector', 'N/A')}",
                f"Active campaigns: {len(campaigns)}",
                f"Critical threats: {severity_counts['Critical']}",
                f"Data freshness: {data_freshness}%"
            ],
            'generatedAt': get_ist_now().isoformat()
        }
    return None

def generate_weekly_ai_analysis(history):
    """Generate weekly AI analysis using GPT-4o"""
    if not OPENAI_AVAILABLE:
        return None
    
    snapshots = history.get('dailySnapshots', [])
    if len(snapshots) < 2:
        return None
    
    # Sort by date
    snapshots.sort(key=lambda x: x['date'])
    
    # Prepare summary of 7 days
    summary_lines = []
    for snap in snapshots:
        metrics = snap['metrics']
        summary_lines.append(f"- {snap['date']}: {metrics['totalIOCs']} total, {metrics['newIOCs']} new, vector: {metrics['topAttackVector']}")
    
    snapshots_summary = "\n".join(summary_lines)
    
    prompt = f"""Analyze the past {len(snapshots)} days of threat intelligence data and provide a comprehensive analysis.

7-Day Data:
{snapshots_summary}

Provide a JSON response with:
1. "trends": Array of 2-3 key trends observed
2. "anomalies": Array of unusual patterns detected
3. "recommendations": Array of 2-3 actionable security recommendations

Be specific, technical, and focus on cybersecurity implications."""
    
    response = call_openai_api(prompt, model="gpt-4o")
    if response:
        try:
            # Try to parse JSON response
            analysis = json.loads(response)
            return {
                'weekStart': snapshots[0]['date'],
                'weekEnd': snapshots[-1]['date'],
                'trends': analysis.get('trends', []),
                'anomalies': analysis.get('anomalies', []),
                'recommendations': analysis.get('recommendations', []),
                'generatedAt': get_ist_now().isoformat()
            }
        except json.JSONDecodeError:
            # Fallback if not JSON
            return {
                'weekStart': snapshots[0]['date'],
                'weekEnd': snapshots[-1]['date'],
                'summary': response.strip(),
                'generatedAt': get_ist_now().isoformat()
            }
    return None

def should_run_daily_ai(history):
    """Check if daily AI should run (once per day)"""
    today = get_ist_now().strftime('%Y-%m-%d')
    ai_insights = history.get('aiInsights', {})
    daily_summary = ai_insights.get('dailySummary', {})
    
    # Run if no summary exists or if it's from a different day
    return daily_summary.get('date') != today

def should_run_weekly_ai(history):
    """Check if weekly AI should run (Monday 12 AM IST)"""
    now = get_ist_now()
    
    # Check if it's Monday
    if now.weekday() != 0:  # 0 = Monday
        return False
    
    # Check if it's within first hour of Monday
    if now.hour != 0:
        return False
    
    ai_insights = history.get('aiInsights', {})
    weekly_summary = ai_insights.get('weeklySummary', {})
    
    # Run if no weekly summary or if it's from a different week
    if not weekly_summary:
        return True
    
    last_generated = weekly_summary.get('generatedAt', '')
    if not last_generated:
        return True
    
    # Check if last generated was more than 6 days ago
    try:
        last_gen_date = datetime.fromisoformat(last_generated)
        days_since = (now - last_gen_date).days
        return days_since >= 6
    except:
        return True

def save_vendor_json_files(vendors_data):
    """Save each vendor's IOCs to separate JSON files for GitHub Releases"""
    saved_files = []
    
    for vendor_name, vendor_data in vendors_data.items():
        filename = f"{vendor_name.lower().replace(' ', '-').replace('.', '-')}.json"
        iocs = vendor_data.get('iocs', [])
        
        data = {
            'vendor': vendor_name,
            'lastUpdated': get_ist_now().isoformat(),
            'iocCount': len(iocs),
            'iocs': iocs
        }
        
        try:
            with open(filename, 'w') as f:
                json.dump(data, f, indent=2)
            print(f"    ✓ Saved {filename} ({len(iocs)} IOCs)")
            saved_files.append(filename)
        except Exception as e:
            print(f"    ✗ Failed to save {filename}: {e}")
    
    return saved_files

def generate_js(data):
    """Generate lightweight JavaScript file with metadata only (full IOCs in GitHub Releases)"""
    
    # Create lightweight version with metadata only
    lightweight_data = {
        'lastUpdated': data['lastUpdated'],
        'lastUpdatedFormatted': data['lastUpdatedFormatted'],
        'comparisonPeriod': data.get('comparisonPeriod', ''),
        'vendors': {}
    }
    
    # For each vendor, include metadata but NOT full IOC list
    for vendor_name, vendor_data in data['vendors'].items():
        lightweight_data['vendors'][vendor_name] = {
            'description': vendor_data['description'],
            'website': vendor_data['website'],
            'updateFrequency': vendor_data['updateFrequency'],
            'iocCount': vendor_data.get('stats', {}).get('total', 0),  # Use stats.total instead of len(iocs)
            'r2Url': vendor_data.get('r2Url'),
            'stats': vendor_data.get('stats', {}),
            'types': vendor_data.get('types', []),
            'sampleIndicators': vendor_data.get('sampleIndicators', [])
        }
    
    # Add overview with top 20 most recent IOCs (for homepage)
    all_iocs = []
    for vendor_data in data['vendors'].values():
        all_iocs.extend(vendor_data.get('iocs', []))
    all_iocs.sort(key=lambda x: x.get('addedAt', ''), reverse=True)
    lightweight_data['overview'] = all_iocs[:20]
    
    # Add daily summary and snapshot metrics
    lightweight_data['dailySummary'] = data.get('dailySummary', {})
    lightweight_data['snapshotMetrics'] = data.get('snapshotMetrics', {})
    
    js_content = f"""// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: {get_ist_now().isoformat()} IST
// Sources: {', '.join(data['vendors'].keys())}
// NOTE: Full IOC lists are stored in Cloudflare R2 and loaded on-demand

window.threatIntelData = {json.dumps(lightweight_data, indent=4)};
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

def generate_snapshot_metrics(all_vendors_data, history):
    """
    Generate real-time snapshot metrics for homepage dashboard
    Returns: dict with top attack vector, most targeted region, fastest rising threat, hourly count
    """
    # Combine all IOCs for analysis
    all_iocs = []
    for vendor_data in all_vendors_data.values():
        all_iocs.extend(vendor_data.get('iocs', []))
    
    # Filter IOCs from last hour only
    now = get_ist_now()
    one_hour_ago = now - timedelta(hours=1)
    recent_iocs = []
    
    for ioc in all_iocs:
        try:
            added = datetime.fromisoformat(ioc['addedAt'].replace('Z', '+00:00'))
            if added >= one_hour_ago:
                recent_iocs.append(ioc)
        except:
            pass
    
    # 1. Top Attack Vector (most common IOC type in last hour)
    type_counts = {}
    for ioc in recent_iocs:
        ioc_type = ioc.get('type', 'unknown')
        type_counts[ioc_type] = type_counts.get(ioc_type, 0) + 1
    
    top_vector = 'N/A'
    if type_counts:
        top_type = max(type_counts.items(), key=lambda x: x[1])
        type_map = {
            'url': 'Malicious URLs',
            'ip': 'Malicious IPs',
            'domain': 'Malicious Domains',
            'hash': 'Malware Hashes',
            'cve': 'CVE Exploits'
        }
        top_vector = type_map.get(top_type[0], top_type[0].upper())
    
    # 2. Most Targeted Region (simple geo-analysis from campaigns/descriptions)
    region_keywords = {
        'North America': ['us', 'usa', 'united states', 'canada', 'american'],
        'Europe': ['eu', 'europe', 'european', 'uk', 'germany', 'france'],
        'Asia': ['asia', 'china', 'japan', 'korea', 'india', 'singapore'],
        'Global': ['global', 'worldwide', 'international']
    }
    
    region_counts = {region: 0 for region in region_keywords.keys()}
    
    for ioc in all_iocs:
        text = (ioc.get('description', '') + ' ' + ioc.get('campaign', '')).lower()
        for region, keywords in region_keywords.items():
            if any(kw in text for kw in keywords):
                region_counts[region] += 1
    
    most_targeted = 'Global'
    if sum(region_counts.values()) > 0:
        most_targeted = max(region_counts.items(), key=lambda x: x[1])[0]
    
    # 3. Fastest Rising Threat (campaign with highest growth rate)
    campaigns = detect_campaigns(all_iocs)
    prev_campaigns = history.get('previous_hour_campaigns', {})
    
    fastest_rising = 'N/A'
    max_growth = 0
    
    for campaign_name, campaign_data in campaigns.items():
        current_count = campaign_data['count']
        prev_count = prev_campaigns.get(campaign_name, 0)
        growth = current_count - prev_count
        
        if growth > max_growth:
            max_growth = growth
            fastest_rising = campaign_name
    
    # Update history with current campaigns
    hist = load_history()
    hist['previous_hour_campaigns'] = {name: data['count'] for name, data in campaigns.items()}
    save_history(hist)
    
    # 4. Total Attacks This Hour
    total_attacks = len(recent_iocs)
    
    return {
        'topAttackVector': top_vector,
        'mostTargetedRegion': most_targeted,
        'fastestRisingThreat': fastest_rising if fastest_rising != 'N/A' else 'No significant changes',
        'totalAttacksThisHour': total_attacks,
        'lastCalculated': now.strftime('%Y-%m-%d %H:%M IST')
    }

def generate_daily_summary(all_vendors_data, history):
    """Generate daily analytics (calculated at midnight)"""
    # Combine all IOCs for analysis
    all_iocs = []
    for vendor_data in all_vendors_data.values():
        all_iocs.extend(vendor_data.get('iocs', []))
    
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
# Static HTML Snapshot Generation (for SEO)
# ──────────────────────────────────────────────────────────────

def generate_html_snapshot(threat_data):
    """
    Generate static HTML snapshot for search engine indexing.
    This allows Google to see actual threat intelligence data.
    """
    html = []
    html.append('<!-- Static Threat Intelligence Snapshot for SEO -->')
    html.append('<div id="ti-static-snapshot" style="display: block;">')
    
    # Header
    last_updated = threat_data.get('lastUpdatedFormatted', 'Recently')
    html.append(f'<div style="margin-bottom: 2rem; padding: 1.5rem; background: rgba(255, 255, 255, 0.03); border-radius: 12px;">')
    html.append(f'<p style="color: var(--text-muted); margin: 0;"><strong>Last Updated:</strong> {last_updated}</p>')
    html.append(f'<p style="color: var(--text-muted); margin: 0.5rem 0 0 0;">Showing recent indicators of compromise from 6 security vendors</p>')
    html.append('</div>')
    
    # Vendors
    vendors = threat_data.get('vendors', {})
    for vendor_name, vendor_data in vendors.items():
        iocs = vendor_data.get('iocs', [])
        if not iocs:
            continue
            
        html.append(f'<div style="margin-bottom: 2rem; padding: 1.5rem; background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 12px;">')
        html.append(f'<h3 style="color: var(--accent-cyan); margin: 0 0 1rem 0; font-size: 1.2rem;">{vendor_name}</h3>')
        html.append(f'<p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1rem;">{vendor_data.get("description", "")}</p>')
        
        # Show top 10 IOCs per vendor
        html.append('<ul style="list-style: none; padding: 0; margin: 0;">')
        for ioc in iocs[:10]:
            indicator = ioc.get('indicator', 'N/A')
            ioc_type = ioc.get('type', 'unknown')
            timestamp = ioc.get('timestamp', '')
            tags = ioc.get('tags', [])
            
            # Format tags
            tag_html = ''
            if 'NEW' in tags or 'new' in tags:
                tag_html = '<span style="background: rgba(255, 76, 76, 0.2); color: #ff4c4c; padding: 0.2rem 0.5rem; border-radius: 4px; font-size: 0.75rem; margin-left: 0.5rem;">NEW</span>'
            elif 'RECENT' in tags or 'recent' in tags:
                tag_html = '<span style="background: rgba(255, 165, 0, 0.2); color: #ffa500; padding: 0.2rem 0.5rem; border-radius: 4px; font-size: 0.75rem; margin-left: 0.5rem;">RECENT</span>'
            
            html.append(f'<li style="padding: 0.75rem; margin-bottom: 0.5rem; background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 8px;">')
            html.append(f'<div style="display: flex; justify-content: space-between; align-items: center;">')
            html.append(f'<div>')
            html.append(f'<code style="color: var(--accent-cyan); font-size: 0.9rem;">{indicator}</code>{tag_html}')
            html.append(f'<div style="color: var(--text-muted); font-size: 0.8rem; margin-top: 0.25rem;">Type: {ioc_type} | {timestamp}</div>')
            html.append(f'</div>')
            html.append(f'</div>')
            html.append('</li>')
        
        if len(iocs) > 10:
            html.append(f'<p style="color: var(--text-muted); font-size: 0.85rem; margin-top: 1rem; text-align: center;">...and {len(iocs) - 10} more indicators</p>')
        
        html.append('</ul>')
        html.append('</div>')
    
    html.append('</div>')
    html.append('<!-- End Static Snapshot -->')
    
    snapshot_html = '\n'.join(html)
    
    # Save to file
    snapshot_file = 'ti-snapshot.html'
    try:
        with open(snapshot_file, 'w', encoding='utf-8') as f:
            f.write(snapshot_html)
        print(f"✓ Generated HTML snapshot: {snapshot_file}")
    except Exception as e:
        print(f"✗ Error generating HTML snapshot: {e}")
    
    return snapshot_html

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
    for vendor_name, config in VENDORS.items():
        # Load existing IOCs for this vendor
        existing_vendor = existing.get('vendors', {}).get(vendor_name, {})
        current_iocs = remove_expired_iocs(existing_vendor.get('iocs', []))
        
        # Fetch new IOCs
        new_iocs = fetch_vendor_iocs(vendor_name, config)
        
        # Combine and deduplicate (NO CAP - store unlimited IOCs!)
        all_iocs = deduplicate_iocs(new_iocs + current_iocs)
        
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
            },
            'types': list(set(ioc.get('type', 'unknown') for ioc in all_iocs)),
            'sampleIndicators': [ioc['indicator'] for ioc in all_iocs[:5]],
            # GitHub Release URL for lazy loading
            'r2Url': f"{GITHUB_RELEASE_URL}/{vendor_name.lower().replace(' ', '-')}.json"
        }
    
    # Save vendor JSON files for GitHub Actions to upload as release assets
    print("\nSaving vendor JSON files:")
    saved_files = save_vendor_json_files(vendors_data)
    print(f"  ✓ Saved {len(saved_files)} vendor JSON files")
    
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
    
    # Generate snapshot metrics for homepage dashboard
    snapshot_metrics = generate_snapshot_metrics(vendors_data, load_history())
    
    # Save daily snapshot for 7-day trend tracking
    print("\n7-Day Trend Tracking:")
    history = save_daily_snapshot(vendors_data, snapshot_metrics)
    history = maintain_rolling_window(history)
    save_history(history)
    generate_history_js(history)
    
    # Generate AI insights
    print("\nAI-Powered Insights:")
    if 'aiInsights' not in history:
        history['aiInsights'] = {}
    
    # Daily AI Summary (GPT-4o-mini)
    if should_run_daily_ai(history):
        print("  → Generating daily AI summary (GPT-4o-mini)...")
        daily_summary = generate_daily_ai_summary(vendors_data, snapshot_metrics)
        if daily_summary:
            history['aiInsights']['dailySummary'] = daily_summary
            print(f"  ✓ Daily summary generated")
        else:
            print("  ⚠ Daily summary generation skipped")
    else:
        print("  ✓ Daily summary already exists for today")
    
    # Weekly AI Analysis (GPT-4o, Monday 12 AM IST)
    if should_run_weekly_ai(history):
        print("  → Generating weekly AI analysis (GPT-4o)...")
        weekly_analysis = generate_weekly_ai_analysis(history)
        if weekly_analysis:
            history['aiInsights']['weeklySummary'] = weekly_analysis
            print(f"  ✓ Weekly analysis generated")
        else:
            print("  ⚠ Weekly analysis generation skipped")
    else:
        print("  ✓ Weekly analysis not scheduled (runs Monday 12 AM IST)")
    
    # Save updated history with AI insights
    save_history(history)
    generate_history_js(history)
    
    now = get_ist_now()
    period = f"{(now - timedelta(hours=24)).strftime('%b %d')} – {now.strftime('%b %d, %Y')}"
    
    output = {
        'lastUpdated': now.isoformat(),
        'lastUpdatedFormatted': now.strftime('%b %d, %Y at %I:%M %p IST'),
        'comparisonPeriod': period,
        'vendors': vendors_data,
        'overview': overview,
        'dailySummary': daily_summary,
        'snapshotMetrics': snapshot_metrics
    }
    
    with open(OUTPUT_FILE, 'w') as f:
        f.write(generate_js(output))
    
    # Generate static HTML snapshot for SEO
    generate_html_snapshot(output)
    
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
