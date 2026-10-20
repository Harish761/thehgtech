#!/usr/bin/env python3
"""
Ransomware Tracker Data Pipeline & Ingestion Engine
Fetches, validates, enriches, and snapshots active ransomware extortion campaigns.
Primary Source: Ransomware.live Real-Time OSINT RSS Feed (https://www.ransomware.live/rss.xml)
Secondary / Fallback: Ransomware.live API

Architecture Safeguards:
1. Schema & completeness validation before accepting snapshots.
2. Defensive zero-wipeout fail-safe (never erase valid data on upstream failure).
3. Atomic file writes (tempfile -> atomic rename).
4. Timestamp normalization & real velocity calculations (no fabricated percentages).
5. Granular sector and country metadata extraction from feed descriptions.
6. Preserves full victim ledger without arbitrary slice loss.
"""

import os
import sys
import json
import re
import html
import tempfile
import hashlib
from datetime import datetime, timezone, timedelta
from collections import defaultdict
from email.utils import parsedate_to_datetime
import requests
import xml.etree.ElementTree as ET

# Common ISO Country Codes to Display Names Map
COUNTRY_MAP = {
    'US': 'United States',
    'USA': 'United States',
    'GB': 'United Kingdom',
    'UK': 'United Kingdom',
    'CA': 'Canada',
    'AU': 'Australia',
    'DE': 'Germany',
    'FR': 'France',
    'IT': 'Italy',
    'ES': 'Spain',
    'NL': 'Netherlands',
    'BE': 'Belgium',
    'CH': 'Switzerland',
    'AT': 'Austria',
    'SE': 'Sweden',
    'NO': 'Norway',
    'DK': 'Denmark',
    'FI': 'Finland',
    'IE': 'Ireland',
    'NZ': 'New Zealand',
    'JP': 'Japan',
    'BR': 'Brazil',
    'IN': 'India',
    'MX': 'Mexico',
    'ZA': 'South Africa',
    'SG': 'Singapore',
    'KR': 'South Korea',
    'IL': 'Israel',
    'AE': 'United Arab Emirates',
    'SA': 'Saudi Arabia',
    'PL': 'Poland',
    'CZ': 'Czech Republic',
    'RO': 'Romania',
    'HU': 'Hungary',
    'GR': 'Greece',
    'PT': 'Portugal',
    'CL': 'Chile',
    'CO': 'Colombia',
    'AR': 'Argentina',
    'TN': 'Tunisia',
    'TT': 'Trinidad and Tobago',
    'ET': 'Ethiopia',
    'NG': 'Nigeria',
    'KE': 'Kenya',
    'EG': 'Egypt',
    'PH': 'Philippines',
    'ID': 'Indonesia',
    'MY': 'Malaysia',
    'TH': 'Thailand',
    'VN': 'Vietnam',
    'TW': 'Taiwan',
    'HK': 'Hong Kong',
    'TR': 'Turkey',
    'EC': 'Ecuador',
    'PE': 'Peru',
    'CR': 'Costa Rica',
    'PA': 'Panama'
}

def clean_text(text):
    """Clean and unescape raw text from feeds, resolving nested entities."""
    if not text:
        return ''
    prev = str(text)
    # Loop unescape in case upstream has double-escaped entities (e.g. &amp;amp;)
    for _ in range(3):
        curr = html.unescape(prev)
        if curr == prev:
            break
        prev = curr
    cleaned = prev.strip()
    # Remove control characters
    cleaned = re.sub(r'[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]', '', cleaned)
    return cleaned

def normalize_country(raw_country):
    """Normalize country code or name to standard display name and ISO code."""
    if not raw_country:
        return None, None
    raw = clean_text(raw_country).strip()
    if not raw or raw.upper() in ('N/A', 'NONE', 'UNKNOWN', 'NULL'):
        return None, None

    # Check direct code match
    code_candidate = raw.upper()
    if code_candidate in COUNTRY_MAP:
        return COUNTRY_MAP[code_candidate], code_candidate

    # Check reversed match by name
    for code, name in COUNTRY_MAP.items():
        if raw.lower() == name.lower():
            return name, code

    # Match substrings e.g. "Tennessee, USA" -> United States
    if 'USA' in raw.upper() or 'UNITED STATES' in raw.upper():
        return 'United States', 'US'
    if 'UNITED KINGDOM' in raw.upper():
        return 'United Kingdom', 'GB'

    # Fallback to sanitized raw title
    return raw.title(), None

def extract_metadata_from_description(desc_text):
    """
    Extract sector, country, status, and domain from the RSS description.
    Pattern A: 'Sector · Country | [STATUS]'
    Pattern B: Domain-prefixed corporate profile
    """
    if not desc_text:
        return None, None, None, None

    desc = clean_text(desc_text)
    sector = None
    country = None
    status = None
    domain = None

    # Check for domain at the beginning (e.g. otsuka.com.tw, policia.gob.ec, alpinetec.ch)
    domain_match = re.search(r'^(?:https?://)?([a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,})(?:\s|/|$)', desc)
    if domain_match:
        domain = domain_match.group(1).lower().rstrip('.')

    # Check for status tag like [PENDING EXPOSURE], [NOT PAID — EXPOSED]
    status_match = re.search(r'\[(.*?)\]', desc)
    if status_match:
        status = status_match.group(1).strip()

    # Pattern A: middle dot ' · ' separating sector and country/status
    if ' · ' in desc:
        parts = desc.split(' · ', 1)
        candidate_sector = parts[0].strip()
        # Avoid treating entire long paragraphs as a sector
        if len(candidate_sector) < 120 and not candidate_sector.lower().startswith('data is not'):
            sector = candidate_sector.title()

        rest = parts[1]
        if ' | ' in rest:
            candidate_country = rest.split(' | ')[0].strip()
        else:
            candidate_country = rest.strip()
        # Clean country
        candidate_country = re.sub(r'\[.*?\]', '', candidate_country).strip()
        if candidate_country and len(candidate_country) < 60:
            country = candidate_country
    elif ' ·' in desc:
        parts = desc.split(' ·', 1)
        candidate_sector = parts[0].strip()
        if len(candidate_sector) < 120 and not candidate_sector.lower().startswith('data is not'):
            sector = candidate_sector.title()

    # Normalize sector if generic or meaningless
    if sector and sector.lower() in ('n/a', 'none', 'unknown', 'data is not available now.'):
        sector = None

    return sector, country, status, domain

def fetch_rss_feed():
    """Fetch and parse disclosures from Ransomware.live RSS feed."""
    url = 'https://www.ransomware.live/rss.xml'
    headers = {
        'User-Agent': 'TheHGTech-RansomwareTracker/2.0 (+https://thehgtech.com/ransomware-tracker.html)',
        'Accept': 'application/rss+xml, application/xml, text/xml;q=0.9, */*;q=0.8'
    }

    print(f"📡 Fetching live disclosures from RSS feed ({url})...")
    try:
        response = requests.get(url, headers=headers, timeout=25)
        response.raise_for_status()

        # Validate content type or xml declaration
        if b'<rss' not in response.content and b'<feed' not in response.content:
            print("❌ RSS response did not contain valid RSS XML structure")
            return []

        root = ET.fromstring(response.content)
        items = root.findall('.//item')

        victims = []
        now_utc = datetime.now(timezone.utc)

        for item in items:
            title_el = item.find('title')
            if title_el is None or not title_el.text:
                continue

            title = clean_text(title_el.text)

            # Match title pattern: "🏴‍☠️ Group has just published a new victim : Victim Name"
            # Or variations without emojis or slightly different spacing
            match = re.search(r'(?:🏴‍☠️\s*)?(.*?)\s*(?:has just published a new victim|published a new victim)\s*:\s*(.*)', title, re.IGNORECASE)
            if match:
                group_name = match.group(1).strip()
                victim_name = match.group(2).strip()
            else:
                # Fallback colon split if simple "Group : Victim"
                if ' : ' in title:
                    parts = title.split(' : ', 1)
                    group_name = re.sub(r'^[^\w]+', '', parts[0]).strip()
                    victim_name = parts[1].strip()
                else:
                    continue

            # Standardize group name
            if not group_name or not victim_name:
                continue

            # Parse Publication Date
            pub_date_str = item.find('pubDate').text if item.find('pubDate') is not None else ''
            try:
                dt = parsedate_to_datetime(pub_date_str)
                if dt.tzinfo is None:
                    dt = dt.replace(tzinfo=timezone.utc)
                else:
                    dt = dt.astimezone(timezone.utc)
                discovered = dt.isoformat()
            except Exception:
                dt = now_utc
                discovered = now_utc.isoformat()

            # Link
            link_el = item.find('link')
            link = clean_text(link_el.text) if link_el is not None and link_el.text else 'https://www.ransomware.live/'

            # Category / Country Code
            cat_el = item.find('category')
            cat_text = clean_text(cat_el.text) if cat_el is not None and cat_el.text else None

            # Description Metadata
            desc_el = item.find('description')
            desc_text = desc_el.text if desc_el is not None else ''
            sector, desc_country, status, domain = extract_metadata_from_description(desc_text)

            # Country Resolution (Category code takes precedence, then parsed name)
            country_name, country_code = normalize_country(cat_text)
            if not country_name and desc_country:
                country_name, country_code = normalize_country(desc_country)

            # Compute stable ID
            unique_key = f"{group_name.lower().strip()}|{victim_name.lower().strip()}|{dt.strftime('%Y%m%d')}"
            rec_id = hashlib.sha1(unique_key.encode('utf-8')).hexdigest()[:12]

            victims.append({
                'id': rec_id,
                'group_name': group_name,
                'victim_name': victim_name,
                'discovered': discovered,
                'discovered_date': dt.strftime('%Y-%m-%d'),
                'dt_obj': dt,
                'post_url': link,
                'country': country_name,
                'country_code': country_code,
                'sector': sector,
                'domain': domain,
                'status': status,
                'description_snippet': clean_text(desc_text)[:200] if desc_text else '',
                'source': 'ransomware.live/rss'
            })

        print(f"✅ RSS: Successfully parsed {len(victims)} victim records from feed.")
        return victims

    except Exception as e:
        print(f"❌ RSS Error: {e}")
        return []

def fetch_api_feed():
    """Optional attempt to fetch from Ransomware.live API v2 if available."""
    url = 'https://api.ransomware.live/v2/recentvictims'
    headers = {
        'User-Agent': 'TheHGTech-RansomwareTracker/2.0 (+https://thehgtech.com/ransomware-tracker.html)',
        'Accept': 'application/json'
    }

    try:
        response = requests.get(url, headers=headers, timeout=12)
        if response.status_code == 200 and 'application/json' in response.headers.get('content-type', ''):
            data = response.json()
            if isinstance(data, list):
                print(f"✅ API v2: Fetched {len(data)} items.")
                return data
        print(f"ℹ️ API v2 returned status {response.status_code} ({response.headers.get('content-type', '')}). Using RSS fallback.")
        return []
    except Exception as e:
        print(f"ℹ️ API v2 unavailable ({e}). Relying on primary RSS feed.")
        return []

def deduplicate_victims(victims_list):
    """Deduplicate records by group + victim title."""
    unique_map = {}
    for v in victims_list:
        key = f"{v['group_name'].lower().strip()}|{v['victim_name'].lower().strip()}"
        if key not in unique_map:
            unique_map[key] = v
        else:
            # Merge richer fields if existing record lacked them
            existing = unique_map[key]
            if not existing.get('sector') and v.get('sector'):
                existing['sector'] = v['sector']
            if not existing.get('country') and v.get('country'):
                existing['country'] = v['country']
                existing['country_code'] = v.get('country_code')
            if not existing.get('domain') and v.get('domain'):
                existing['domain'] = v['domain']

    return list(unique_map.values())

def aggregate_and_enrich(victims, window_days=7):
    """
    Aggregate victims into group dossiers and compute genuine, evidence-based metrics.
    No fabricated trends or percentages.
    """
    now = datetime.now(timezone.utc)
    window_cutoff = now - timedelta(days=window_days)
    mid_cutoff = now - timedelta(days=window_days / 2.0) # Split window for trend velocity

    # Keep all victims within window, but also retain slightly older if feed contains them
    in_window_victims = []
    for v in victims:
        # If dt_obj is missing, parse discovered
        dt = v.get('dt_obj')
        if not dt:
            try:
                dt = datetime.fromisoformat(v['discovered'])
                if dt.tzinfo is None:
                    dt = dt.replace(tzinfo=timezone.utc)
            except Exception:
                dt = now
            v['dt_obj'] = dt

        if dt >= window_cutoff:
            in_window_victims.append(v)

    # If window filter leaves very few items due to feed timeline, preserve all feed items
    active_victims = in_window_victims if len(in_window_victims) >= 20 else victims

    groups_data = defaultdict(lambda: {
        'name': '',
        'victims': [],
        'count': 0,
        'recent_half_count': 0,
        'earlier_half_count': 0,
        'industries': set(),
        'countries': set(),
        'country_codes': set(),
        'daily_counts': defaultdict(int),
        'first_seen': None,
        'last_seen': None
    })

    # Prepare daily buckets for the last 7 days
    date_labels = [(now.date() - timedelta(days=i)).isoformat() for i in range(window_days - 1, -1, -1)]

    for v in active_victims:
        raw_group = v['group_name']
        group_key = raw_group.lower().strip()
        display_name = raw_group.title() if raw_group.upper() != raw_group and not any(c.isupper() for c in raw_group[1:]) else raw_group

        g = groups_data[group_key]
        if not g['name']:
            g['name'] = display_name

        g['count'] += 1
        dt = v['dt_obj']

        # Trend velocity measurement
        if dt >= mid_cutoff:
            g['recent_half_count'] += 1
        else:
            g['earlier_half_count'] += 1

        # Daily distribution
        date_str = dt.date().isoformat()
        g['daily_counts'][date_str] += 1

        # Timeline tracking
        if g['first_seen'] is None or dt < g['first_seen']:
            g['first_seen'] = dt
        if g['last_seen'] is None or dt > g['last_seen']:
            g['last_seen'] = dt

        # Sector & Geography tracking
        if v.get('sector'):
            g['industries'].add(v['sector'])
        if v.get('country'):
            g['countries'].add(v['country'])
        if v.get('country_code'):
            g['country_codes'].add(v['country_code'])

        # Store victim record without dt_obj for serialization
        clean_v = {k: val for k, val in v.items() if k != 'dt_obj'}
        g['victims'].append(clean_v)

    # Compute genuine trends per group
    formatted_groups = []
    for group_key, g in groups_data.items():
        # Sort victims descending by date
        g['victims'].sort(key=lambda x: x.get('discovered', ''), reverse=True)

        recent = g['recent_half_count']
        earlier = g['earlier_half_count']

        # Determine trend velocity from actual observation
        if g['count'] < 3:
            trend = 'insufficient_data'
            trend_label = 'Limited Data'
        elif recent > earlier:
            trend = 'up'
            trend_label = 'Accelerating'
        elif recent < earlier:
            trend = 'down'
            trend_label = 'Decelerating'
        else:
            trend = 'stable'
            trend_label = 'Steady'

        # Daily counts ordered matching the date_labels
        daily_series = [g['daily_counts'][d] for d in date_labels]

        formatted_groups.append({
            'name': g['name'],
            'count': g['count'],
            'victims': g['victims'], # FULL VICTIMS PRESERVED - NO TRUNCATION
            'industries': sorted(list(g['industries'])),
            'countries': sorted(list(g['countries'])),
            'country_codes': sorted(list(g['country_codes'])),
            'trend': trend,
            'trend_label': trend_label,
            'recent_velocity': {
                'last_3_days': recent,
                'prior_3_days': earlier
            },
            'daily_counts': daily_series,
            'daily_labels': date_labels,
            'first_seen': g['first_seen'].isoformat() if g['first_seen'] else None,
            'last_seen': g['last_seen'].isoformat() if g['last_seen'] else None
        })

    # Sort groups descending by victim disclosure count
    formatted_groups.sort(key=lambda x: x['count'], reverse=True)

    # Master list of all victims sorted by discovery date descending
    master_victims = [{k: val for k, val in v.items() if k != 'dt_obj'} for v in active_victims]
    master_victims.sort(key=lambda x: x.get('discovered', ''), reverse=True)

    # Calculate global metrics
    today_iso = now.date().isoformat()
    today_count = sum(1 for v in master_victims if v.get('discovered_date') == today_iso)

    # Top target sector
    sector_counts = defaultdict(int)
    for v in master_victims:
        if v.get('sector'):
            sector_counts[v['sector']] += 1
    top_sector = max(sector_counts.items(), key=lambda x: x[1])[0] if sector_counts else 'Technology'

    top_actor = formatted_groups[0]['name'] if formatted_groups else 'Unknown'

    output = {
        'last_updated': now.isoformat(),
        'last_updated_formatted': now.strftime('%b %d, %Y %H:%M UTC'),
        'period': f'Last {window_days} days',
        'provenance': 'Extortion leak site disclosure monitoring via Ransomware.live OSINT feed',
        'verification_note': 'Victim notices reflect claims published by extortion groups on dark web leak sites and do not constitute independent forensics or incident confirmation.',
        'total_groups': len(formatted_groups),
        'total_victims': len(master_victims),
        'disclosures_today': today_count,
        'top_threat_actor': top_actor,
        'top_target_sector': top_sector,
        'groups': formatted_groups,
        'victims': master_victims
    }

    return output

def validate_snapshot(output_data):
    """
    Strict validation of generated snapshot.
    Returns (is_valid, reason).
    """
    if not isinstance(output_data, dict):
        return False, "Snapshot root is not a dictionary"

    groups = output_data.get('groups')
    victims = output_data.get('victims')

    if not isinstance(groups, list) or not isinstance(victims, list):
        return False, "Snapshot 'groups' or 'victims' is not a list"

    # Rule: Must have a reasonable baseline of live records
    if len(groups) < 5:
        return False, f"Suspiciously low group count: {len(groups)} (minimum expected: 5)"

    if len(victims) < 20:
        return False, f"Suspiciously low victim count: {len(victims)} (minimum expected: 20)"

    # Rule: Check structure of first 5 records
    for i, v in enumerate(victims[:5]):
        if not v.get('group_name') or not v.get('victim_name') or not v.get('discovered'):
            return False, f"Victim record #{i} missing required fields (group, victim, discovered)"

    return True, "Valid snapshot"

def save_snapshot_safely(output_data, output_file='ransomware-data.json'):
    """
    Atomic write with last-known-good fail-safe protection.
    Never overwrites with an empty or broken dataset.
    """
    # 1. Validate incoming snapshot
    is_valid, reason = validate_snapshot(output_data)
    if not is_valid:
        print(f"🚨 VALIDATION REJECTED: {reason}")
        print("🛡️ FAIL-SAFE ACTIVATED: Preserving existing data file. No write performed.")
        return False

    # 2. Check existing file to prevent regression
    if os.path.exists(output_file):
        try:
            with open(output_file, 'r', encoding='utf-8') as f:
                existing = json.load(f)
            existing_count = existing.get('total_victims', 0)
            new_count = output_data.get('total_victims', 0)

            # If existing had significant data and new data drops by > 75%, trigger warning
            if existing_count > 50 and new_count < (existing_count * 0.25):
                print(f"⚠️ SUSPICIOUS DATA DROP: Existing had {existing_count} victims, new has {new_count}.")
                print("🛡️ FAIL-SAFE ACTIVATED: Rejecting drastic drop to prevent data loss.")
                return False
        except Exception as e:
            print(f"ℹ️ Could not inspect existing file ({e}); proceeding with validated write.")

    # 3. Perform atomic write
    dir_name = os.path.dirname(os.path.abspath(output_file))
    with tempfile.NamedTemporaryFile('w', dir=dir_name, delete=False, encoding='utf-8') as tf:
        json.dump(output_data, tf, indent=2, ensure_ascii=False)
        temp_name = tf.name

    # Atomic swap
    os.replace(temp_name, output_file)
    print(f"💾 Snapshot safely written to {output_file} (Atomic swap complete)")
    print(f"   - Total Syndicates: {output_data['total_groups']}")
    print(f"   - Total Disclosures: {output_data['total_victims']}")
    print(f"   - Top Actor: {output_data['top_threat_actor']}")
    print(f"   - Top Sector: {output_data['top_target_sector']}")
    return True

def main():
    print("=" * 65)
    print("🔐 TheHGTech Ransomware Tracker Pipeline (Hardened OSINT Engine)")
    print("=" * 65)

    # 1. Ingest RSS Feed (Primary live channel)
    rss_victims = fetch_rss_feed()

    # 2. Ingest API v2 (Secondary / enrichment)
    api_victims = fetch_api_feed()

    # 3. Combine & Deduplicate
    all_raw = rss_victims + api_victims
    if not all_raw:
        print("❌ Upstream sources returned zero records.")
        print("🛡️ FAIL-SAFE: Aborting without modifying existing database.")
        sys.exit(1)

    unique_victims = deduplicate_victims(all_raw)
    print(f"🔀 Deduplicated: {len(unique_victims)} unique victim disclosures.")

    # 4. Aggregate & Enrich
    snapshot = aggregate_and_enrich(unique_victims, window_days=7)

    # 5. Output path
    # Support running from repo root or scripts directory
    output_path = 'ransomware-data.json'
    if not os.path.exists(output_path) and os.path.exists('../../ransomware-data.json'):
        output_path = '../../ransomware-data.json'

    # 6. Validate & Save with fail-safe
    success = save_snapshot_safely(snapshot, output_path)
    if not success:
        sys.exit(1)

    print("=" * 65)
    print("✅ Pipeline execution successful!")
    print("=" * 65)

if __name__ == '__main__':
    main()
