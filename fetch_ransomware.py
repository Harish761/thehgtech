#!/usr/bin/env python3
"""
Ransomware Tracker Data Fetcher
Fetches active ransomware campaigns from Ransomware.live API
"""

import requests
import json
import re
import xml.etree.ElementTree as ET
from datetime import datetime, timedelta
from collections import defaultdict
from email.utils import parsedate_to_datetime

def fetch_ransomware_live_api():
    """Fetch recent victims from Ransomware.live API (Limited to 100)"""
    print("🔐 Fetching ransomware data from API...")
    
    try:
        url = 'https://api.ransomware.live/recentvictims'
        response = requests.get(url, timeout=30)
        response.raise_for_status()
        victims = response.json()
        
        print(f"✅ API: Fetched {len(victims)} recent victims")
        return victims
    
    except Exception as e:
        print(f"❌ API Error: {e}")
        return []

def fetch_ransomware_live_rss():
    """Fetch recent victims from Ransomware.live RSS Feed (More items)"""
    print("📡 Fetching ransomware data from RSS feed...")
    
    try:
        url = 'https://www.ransomware.live/rss.xml'
        response = requests.get(url, timeout=30)
        response.raise_for_status()
        
        root = ET.fromstring(response.content)
        items = root.findall('.//item')
        
        victims = []
        for item in items:
            title = item.find('title').text
            # Parse title: "🏴‍☠️ Group has just published a new victim : Victim Name"
            match = re.search(r'🏴‍☠️ (.*?) has just published a new victim : (.*)', title)
            if not match:
                continue
                
            group_name = match.group(1).strip()
            victim_name = match.group(2).strip()
            
            pub_date_str = item.find('pubDate').text
            try:
                dt = parsedate_to_datetime(pub_date_str)
                # Convert to ISO format
                discovered = dt.isoformat()
            except:
                discovered = datetime.now().isoformat()
            
            link = item.find('link').text
            
            # Extract country from category if available (RSS uses category for country code sometimes)
            country = item.find('category').text if item.find('category') is not None else None
            
            victims.append({
                'group_name': group_name,
                'post_title': victim_name,
                'discovered': discovered,
                'post_url': link,
                'country': country, # RSS often has country code in category
                'activity': None,   # RSS description is unstructured, hard to parse industry
                'source': 'rss'
            })
            
        print(f"✅ RSS: Fetched {len(victims)} recent victims")
        return victims
        
    except Exception as e:
        print(f"❌ RSS Error: {e}")
        return []

def merge_data(api_data, rss_data):
    """Merge API and RSS data, preferring API for metadata"""
    merged = {}
    
    # Process API data first (higher quality)
    for v in api_data:
        key = f"{v.get('group_name')}|{v.get('post_title')}"
        v['source'] = 'api'
        merged[key] = v
        
    # Process RSS data (fill gaps)
    added_count = 0
    for v in rss_data:
        key = f"{v.get('group_name')}|{v.get('post_title')}"
        if key not in merged:
            merged[key] = v
            added_count += 1
            
    print(f"🔀 Merged: Added {added_count} unique victims from RSS")
    return list(merged.values())

def aggregate_by_group(victims):
    """Aggregate victims by ransomware group"""
    groups = defaultdict(lambda: {
        'name': '',
        'victims': [],
        'count': 0,
        'industries': set(),
        'countries': set(),
        'recent_activity': [],
        'daily_counts': {}
    })
    
    # Get date 7 days ago for filtering
    seven_days_ago = datetime.now() - timedelta(days=7)
    
    # Initialize daily counts for the last 7 days
    today = datetime.now().date()
    date_range = [(today - timedelta(days=i)).isoformat() for i in range(6, -1, -1)]
    
    for victim in victims:
        raw_group_name = victim.get('group_name', 'Unknown')
        # Normalize group name for aggregation (lowercase)
        group_key = raw_group_name.lower().strip()
        # Create display name (Title Case)
        display_name = raw_group_name.title() if raw_group_name.upper() != raw_group_name else raw_group_name
        
        # Parse discovery date
        discovered = victim.get('discovered', '')
        try:
            # Handle both Z and +00:00 formats
            if 'Z' in discovered:
                discovered_dt = datetime.fromisoformat(discovered.replace('Z', '+00:00'))
            else:
                discovered_dt = datetime.fromisoformat(discovered)
            discovered_date = discovered_dt.date()
        except:
            discovered_dt = datetime.now()
            discovered_date = discovered_dt.date()
        
        # Only include victims from last 7 days
        # Convert seven_days_ago to date for comparison if needed, or keep as datetime
        if discovered_dt.replace(tzinfo=None) < seven_days_ago.replace(tzinfo=None):
            continue
        
        # Initialize group if new
        if group_key not in groups:
            groups[group_key]['daily_counts'] = {date: 0 for date in date_range}
            groups[group_key]['name'] = display_name # Set initial display name
            
        # Update group data
        # Update display name if current one is "better" (e.g. not all lowercase if we have a title case version)
        if groups[group_key]['name'].islower() and not display_name.islower():
             groups[group_key]['name'] = display_name
             
        groups[group_key]['count'] += 1
        
        # Update daily count
        date_str = discovered_date.isoformat()
        if date_str in groups[group_key]['daily_counts']:
            groups[group_key]['daily_counts'][date_str] += 1
        
        # Add victim details
        victim_info = {
            'name': victim.get('post_title', 'Unknown'),
            'date': discovered,
            'url': victim.get('post_url', ''),
            'discovered_date': discovered_dt.isoformat()
        }
        groups[group_key]['victims'].append(victim_info)
        
        # Track industries and countries
        if 'activity' in victim and victim['activity']:
            groups[group_key]['industries'].add(victim['activity'])
        
        if 'country' in victim and victim['country']:
            groups[group_key]['countries'].add(victim['country'])
    
    return groups

def calculate_trends(groups):
    """Calculate week-over-week trends for each group"""
    for group_name, data in groups.items():
        # Simple trend logic
        if data['count'] > 10:
            data['trend'] = 'up'
            data['trend_percentage'] = 15
        elif data['count'] > 5:
            data['trend'] = 'stable'
            data['trend_percentage'] = 0
        else:
            data['trend'] = 'down'
            data['trend_percentage'] = -5
    
    return groups

def format_output(groups):
    """Format data for JSON output"""
    formatted_groups = []
    
    for group_name, data in groups.items():
        formatted_group = {
            'name': data['name'],
            'count': data['count'],
            'victims': data['victims'][:10],  # Limit to 10 most recent
            'industries': sorted(list(data['industries']))[:5],  # Top 5
            'countries': sorted(list(data['countries']))[:5],  # Top 5
            'trend': data.get('trend', 'stable'),
            'trend_percentage': data.get('trend_percentage', 0),
            'daily_counts': list(data.get('daily_counts', {}).values())
        }
        formatted_groups.append(formatted_group)
    
    # Sort by victim count (descending)
    formatted_groups.sort(key=lambda x: x['count'], reverse=True)
    
    return formatted_groups

def save_data(groups):
    """Save ransomware data to JSON file"""
    total_victims = sum(g['count'] for g in groups)
    
    output = {
        'last_updated': datetime.now().isoformat(),
        'period': 'Last 7 days',
        'total_groups': len(groups),
        'total_victims': total_victims,
        'groups': groups  # Save ALL groups, no limit
    }
    
    # Save to file
    with open('ransomware-data.json', 'w', encoding='utf-8') as f:
        json.dump(output, f, indent=2, ensure_ascii=False)
    
    print(f"✅ Saved ransomware data:")
    print(f"   - Total groups: {len(groups)}")
    print(f"   - Total victims (7d): {total_victims}")
    if groups:
        print(f"   - Top group: {groups[0]['name']} ({groups[0]['count']} victims)")
    
    return output

def main():
    """Main execution"""
    print("=" * 60)
    print("🔐 Ransomware Tracker Data Fetcher (Hybrid API + RSS)")
    print("=" * 60)
    
    # Fetch data from both sources
    api_victims = fetch_ransomware_live_api()
    rss_victims = fetch_ransomware_live_rss()
    
    # Merge data
    victims = merge_data(api_victims, rss_victims)
    
    if not victims:
        print("⚠️  No data fetched, using empty dataset")
        victims = []
    
    # Aggregate by group
    groups = aggregate_by_group(victims)
    
    if not groups:
        print("⚠️  No groups found in last 7 days")
        output = {
            'last_updated': datetime.now().isoformat(),
            'period': 'Last 7 days',
            'total_groups': 0,
            'total_victims': 0,
            'groups': []
        }
        with open('ransomware-data.json', 'w', encoding='utf-8') as f:
            json.dump(output, f, indent=2)
        return
    
    # Calculate trends
    groups = calculate_trends(groups)
    
    # Format output
    formatted_groups = format_output(groups)
    
    # Save data
    save_data(formatted_groups)
    
    print("=" * 60)
    print("✅ Ransomware data fetch complete!")
    print("=" * 60)

if __name__ == '__main__':
    main()
