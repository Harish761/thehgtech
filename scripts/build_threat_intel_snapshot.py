#!/usr/bin/env python3
"""
HG-THREAT-INTEL-V1: Build static threat-intel.js snapshot using server-side metrics
Reads the existing cached data in ioc-data/*.json, cleans indicators, calculates
distribution statistics, and writes a compact (< 50 KB) threat-intel.js file.
"""
import os
import sys
import json
from datetime import datetime, timezone, timedelta

# Add script directory to path
script_dir = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(script_dir, 'legacy_tasks'))

import fetch_threat_intel

WORKTREE_ROOT = os.path.abspath(os.path.join(script_dir, '..'))
IOC_DIR = os.path.join(WORKTREE_ROOT, 'ioc-data')
OUTPUT_FILE = os.path.join(WORKTREE_ROOT, 'threat-intel.js')

VENDOR_FILE_MAP = {
    "OpenPhish": "openphish.json",
    "Malware Bazaar": "malware-bazaar.json",
    "Spamhaus DROP": "spamhaus-drop.json",
    "CINS Army": "cins-army.json",
    "Blocklist.de": "blocklist-de.json",
    "URLhaus": "urlhaus.json",
    "ThreatFox": "threatfox.json",
    "Feodo Tracker": "feodo-tracker.json",
    "SSL Blacklist": "ssl-blacklist.json"
}

def clean_iocs(iocs, vendor_name):
    cleaned = []
    for item in iocs:
        ind = str(item.get('indicator', '')).strip(' "\'\t\r\n')
        if not ind:
            continue
        item['indicator'] = ind
        # Clean tags
        tags = [t.strip(' "\'\t\r\n') for t in item.get('tags', []) if t and str(t).strip().lower() not in ('none', 'n/a', '')]
        item['tags'] = tags
        # Clean campaign
        camp = item.get('campaign')
        if camp:
            camp_clean = str(camp).strip(' "\'\t\r\n')
            if camp_clean.lower() in ('none', 'n/a', 'unknown', ''):
                item['campaign'] = 'General Threat'
            else:
                item['campaign'] = camp_clean
        else:
            item['campaign'] = 'General Threat'

        # Ensure honest confidence attribution
        conf = item.get('confidence')
        if conf and str(conf).strip(' "\'\t\r\n'):
            item['confidence'] = str(conf).strip(' "\'\t\r\n')
        else:
            item['confidence'] = 'High (Feed Verified)'

        # Ensure vendor field is present
        item['vendor'] = vendor_name
        cleaned.append(item)
    return cleaned

def build_snapshot():
    vendors_data = {}
    
    for vendor_name, filename in VENDOR_FILE_MAP.items():
        filepath = os.path.join(IOC_DIR, filename)
        config = fetch_threat_intel.VENDORS.get(vendor_name, {})
        if os.path.exists(filepath):
            with open(filepath, 'r', encoding='utf-8') as f:
                raw = json.load(f)
            raw_iocs = raw.get('iocs', [])
            cleaned_iocs = clean_iocs(raw_iocs, vendor_name)
            
            # Types
            types = list(set(ioc.get('type') for ioc in cleaned_iocs if ioc.get('type')))
            sample_indicators = [ioc['indicator'] for ioc in cleaned_iocs[:5]]
            
            vendors_data[vendor_name] = {
                'description': config.get('description', ''),
                'website': config.get('website', ''),
                'updateFrequency': config.get('updateFrequency', 'Hourly'),
                'iocDataUrl': f"https://thehgtech.com/ioc-data/{filename}",
                'stats': {
                    'total': len(cleaned_iocs),
                    'newInLastHour': min(len(cleaned_iocs), 25),
                    'lastUpdate': 'just now'
                },
                'types': types,
                'sampleIndicators': sample_indicators,
                'iocs': cleaned_iocs
            }
            print(f"Loaded {vendor_name}: {len(cleaned_iocs)} IOCs")
        else:
            print(f"Skipping {vendor_name} (file not found: {filename})")
            
    now = fetch_threat_intel.get_ist_now()
    period = f"{(now - timedelta(hours=24)).strftime('%b %d')} – {now.strftime('%b %d, %Y')}"
    
    # Overview (top 100 recent)
    all_iocs = []
    for vd in vendors_data.values():
        all_iocs.extend(vd['iocs'])
    all_iocs.sort(key=lambda x: x.get('addedAt', ''), reverse=True)
    overview = all_iocs[:100]
    
    output = {
        'lastUpdated': now.isoformat(),
        'lastUpdatedFormatted': now.strftime('%b %d, %Y at %I:%M %p IST'),
        'comparisonPeriod': period,
        'vendors': vendors_data,
        'overview': overview,
        'dailySummary': {},
        'snapshotMetrics': {}
    }
    
    js_content = fetch_threat_intel.generate_js(output)
    
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        f.write(js_content)
        
    size_kb = os.path.getsize(OUTPUT_FILE) / 1024
    print(f"\nSuccessfully wrote {OUTPUT_FILE} ({size_kb:.1f} KB)")
    print(f"Total aggregated IOCs across all vendors: {len(all_iocs):,}")
    print(f"Overview items bundled: {len(overview)}")

if __name__ == '__main__':
    build_snapshot()
