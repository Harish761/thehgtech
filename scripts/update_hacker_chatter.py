#!/usr/bin/env python3
"""
Hacker Chatter Data Accumulator 
Fetches the latest victim chatter from public OSINT APIs (e.g., Ransomware.live)
and appends them to our chronological incident database.
No Dark Web or .onion interaction occurs directly.
"""

import urllib.request
import urllib.error
import json
import os
from datetime import datetime

DATA_PATH = os.path.join(os.path.dirname(__file__), '../data/hacker-chatter.json')

def fetch_incident_feed():
    print("🌐 Fetching latest OSINT hacker chatter...")
    victims = []
    headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) TheHGTech-OSINT"}
    
    try:
        # Public Endpoint (Updates daily, 100+ latest victims, no token required)
        url = 'https://api.ransomware.live/v2/recentvictims'
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=30) as response:
            raw_data = json.loads(response.read().decode())
        
        for item in raw_data:
            # Map API structure to our incident feed schema
            incident = {
                "id": _generate_id(item),
                "victim_name": item.get('post_title') or item.get('victim', 'Unknown Organization'),
                "threat_actor": item.get('group_name') or item.get('group', 'Unknown Actor'),
                "date_discovered": item.get('discovered') or item.get('published', datetime.now().isoformat()),
                "industry": item.get('activity') or item.get('industry', 'Unknown'),
                "website": item.get('website', ''),
                "claim": item.get('description', ''),
                "screenshot": item.get('screenshot', ''),
                "url": item.get('post_url') or item.get('claim_url', ''),
                "source": "Ransomware.live OSINT API"
            }
            victims.append(incident)
            
        print(f"✅ Downloaded {len(victims)} recent incidents.")
    except Exception as e:
        print(f"❌ Failed to fetch from Ransomware.live API: {e}")

    return victims

def _generate_id(item):
    """Generate a unique ID to prevent duplicates using actor + victim name"""
    actor = str(item.get('group_name') or item.get('group', 'unknown')).lower().strip()
    victim = str(item.get('post_title') or item.get('victim', 'unknown')).lower().strip()
    return f"{actor}_{victim}".replace(' ', '_').replace('=', '')

def load_existing_data():
    if os.path.exists(DATA_PATH):
        try:
            with open(DATA_PATH, 'r', encoding='utf-8') as f:
                data = json.load(f)
                # Ensure structure
                if isinstance(data, dict) and 'incidents' in data:
                    return data['incidents']
                elif isinstance(data, list):
                    return data
        except Exception as e:
            print(f"⚠️ Could not load existing data, starting fresh: {e}")
    return []

def merge_data(existing_incidents, new_incidents):
    """Merge keeping all existing, adding new ones, keeping sorted chronologically"""
    db = {incident['id']: incident for incident in existing_incidents}
    
    added = 0
    for incident in new_incidents:
        incident_id = incident['id']
        if incident_id not in db:
            db[incident_id] = incident
            added += 1
        else:
            # Backfill missing metadata for existing incidents
            for k in ['screenshot', 'url', 'website', 'claim']:
                if (not db[incident_id].get(k)) and incident.get(k):
                    db[incident_id][k] = incident[k]
            
            # If the OSINT feed updated the claim text specifically, we should override
            if incident.get('claim') and incident['claim'] != db[incident_id].get('claim') and "AI generated" not in incident['claim']:
                 db[incident_id]['claim'] = incident['claim']
    
    print(f"🔀 Merged {added} completely new incidents into the database.")
    
    # Sort chronologically, newest first
    output = list(db.values())
    output.sort(key=lambda x: x.get('date_discovered', ''), reverse=True)
    return output

def save_data(incidents):
    os.makedirs(os.path.dirname(DATA_PATH), exist_ok=True)
    
    # Final payload wrap
    payload = {
        "last_updated": datetime.now().isoformat(),
        "total_incidents": len(incidents),
        "incidents": incidents
    }
    
    with open(DATA_PATH, 'w', encoding='utf-8') as f:
        json.dump(payload, f, indent=2, ensure_ascii=False)
    print(f"💾 Saved {len(incidents)} total incidents to {DATA_PATH}")

def main():
    print("=" * 60)
    print("🕵️  Hacker Chatter DB Sync")
    print("=" * 60)
    
    existing = load_existing_data()
    print(f"📂 Found {len(existing)} incidents heavily archived in DB.")
    
    new_incidents = fetch_incident_feed()
    
    if new_incidents:
        final_db = merge_data(existing, new_incidents)
        save_data(final_db)
    else:
        print("⚠️ No new incidents fetched, shutting down.")
        
    print("=" * 60)

if __name__ == "__main__":
    main()
