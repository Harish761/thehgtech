#!/usr/bin/env python3
"""
Ransomware Tracker Data Fetcher
Fetches active ransomware campaigns from Ransomware.live API
"""

import requests
import json
from datetime import datetime, timedelta
from collections import defaultdict

def fetch_ransomware_live():
    """Fetch recent victims from Ransomware.live API"""
    print("🔐 Fetching ransomware data from Ransomware.live...")
    
    try:
        # Fetch recent victims
        url = 'https://api.ransomware.live/recentvictims'
        response = requests.get(url, timeout=30)
        response.raise_for_status()
        victims = response.json()
        
        print(f"✅ Fetched {len(victims)} recent victims")
        return victims
    
    except requests.exceptions.RequestException as e:
        print(f"❌ Error fetching data: {e}")
        return []

def aggregate_by_group(victims):
    """Aggregate victims by ransomware group"""
    groups = defaultdict(lambda: {
        'name': '',
        'victims': [],
        'count': 0,
        'industries': set(),
        'countries': set(),
        'recent_activity': []
    })
    
    # Get date 7 days ago for filtering
    seven_days_ago = datetime.now() - timedelta(days=7)
    
    for victim in victims:
        group_name = victim.get('group_name', 'Unknown')
        
        # Parse discovery date
        discovered = victim.get('discovered', '')
        try:
            discovered_date = datetime.fromisoformat(discovered.replace('Z', '+00:00'))
        except:
            discovered_date = datetime.now()
        
        # Only include victims from last 7 days
        if discovered_date < seven_days_ago:
            continue
        
        # Update group data
        groups[group_name]['name'] = group_name
        groups[group_name]['count'] += 1
        
        # Add victim details
        victim_info = {
            'name': victim.get('post_title', 'Unknown'),
            'date': discovered,
            'url': victim.get('post_url', ''),
            'discovered_date': discovered_date.isoformat()
        }
        groups[group_name]['victims'].append(victim_info)
        
        # Track industries and countries
        if 'activity' in victim and victim['activity']:
            groups[group_name]['industries'].add(victim['activity'])
        
        if 'country' in victim and victim['country']:
            groups[group_name]['countries'].add(victim['country'])
    
    return groups

def calculate_trends(groups):
    """Calculate week-over-week trends for each group"""
    # For now, we'll just mark groups as trending
    # In future, we can compare with historical data
    
    for group_name, data in groups.items():
        # Simple trend: groups with >10 victims are "trending up"
        if data['count'] > 10:
            data['trend'] = 'up'
            data['trend_percentage'] = 15  # Placeholder
        elif data['count'] > 5:
            data['trend'] = 'stable'
            data['trend_percentage'] = 0
        else:
            data['trend'] = 'down'
            data['trend_percentage'] = -5
    
    return groups

def format_output(groups):
    """Format data for JSON output"""
    # Convert sets to lists for JSON serialization
    formatted_groups = []
    
    for group_name, data in groups.items():
        formatted_group = {
            'name': data['name'],
            'count': data['count'],
            'victims': data['victims'][:10],  # Limit to 10 most recent
            'industries': sorted(list(data['industries']))[:5],  # Top 5
            'countries': sorted(list(data['countries']))[:5],  # Top 5
            'trend': data.get('trend', 'stable'),
            'trend_percentage': data.get('trend_percentage', 0)
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
        'groups': groups[:10]  # Top 10 groups
    }
    
    # Save to file
    with open('ransomware-data.json', 'w', encoding='utf-8') as f:
        json.dump(output, f, indent=2, ensure_ascii=False)
    
    print(f"✅ Saved ransomware data:")
    print(f"   - Total groups: {len(groups)}")
    print(f"   - Total victims (7d): {total_victims}")
    print(f"   - Top group: {groups[0]['name']} ({groups[0]['count']} victims)")
    
    return output

def main():
    """Main execution"""
    print("=" * 60)
    print("🔐 Ransomware Tracker Data Fetcher")
    print("=" * 60)
    
    # Fetch data
    victims = fetch_ransomware_live()
    
    if not victims:
        print("⚠️  No data fetched, using empty dataset")
        victims = []
    
    # Aggregate by group
    groups = aggregate_by_group(victims)
    
    if not groups:
        print("⚠️  No groups found in last 7 days")
        # Create minimal output
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
