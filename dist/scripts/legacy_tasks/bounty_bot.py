
import requests
import json
import os
import time
from datetime import datetime

# Configuration
H1_GRAPHQL_URL = "https://hackerone.com/graphql"
DISCORD_WEBHOOK_URL = os.environ.get("DISCORD_WEBHOOK_URL")  # Set this in your environment
DATA_FILE = "bounty_state.json"

# GraphQL Query tailored for Public Hacktivity/Programs
# Note: H1 keeps changing this. A more reliable method for "new programs" is the Directory Search API.
# Let's use the Directory API endpoint if possible, or fallback to scraping the directory page.
# Actually, the most robust way without an API key is to check the `bounty-targets-data`
# or similar public aggregation. But here we try direct.

def get_hackerone_programs():
    """Fetches a list of public bug bounty programs from HackerOne directory."""
    try:
        # Using a known reliable endpoint for directory listing (often used by other tools)
        # This mimics a search for all programs.
        # Pagination handling is omitted for brevity in MVP, focusing on first page = newest.
        
        # Note: Direct H1 scraping is tough due to intricate GraphQL/Protection.
        # We will use a known community-maintained JSON source as a proxy for the 'raw' data 
        # to ensure stability, then filter for 'new' locally.
        # Source: https://raw.githubusercontent.com/arkadiyt/bounty-targets-data/master/data/hackerone_data.json
        # This repo updates daily. For 10-minute updates, we'd need our own scraper, but let's start here.
        
        url = "https://raw.githubusercontent.com/arkadiyt/bounty-targets-data/master/data/hackerone_data.json"
        response = requests.get(url)
        if response.status_code == 200:
            return response.json()
        else:
            print(f"Error fetching data: {response.status_code}")
            return []
    except Exception as e:
        print(f"Exception: {e}")
        return []

def get_crt_sh_subdomains(domain):
    """(The Twist) Passive Recon: Count subdomains via crt.sh"""
    try:
        url = f"https://crt.sh/?q=%.{domain}&output=json"
        resp = requests.get(url, timeout=10)
        if resp.status_code == 200:
            data = resp.json()
            # unique subdomains
            subs = set()
            for entry in data:
                subs.add(entry.get('name_value', '').lower())
            return len(subs)
    except:
        return 0
    return 0

def load_state():
    if os.path.exists(DATA_FILE):
        with open(DATA_FILE, 'r') as f:
            return json.load(f)
    return {}

def save_state(data):
    with open(DATA_FILE, 'w') as f:
        json.dump(data, f)

def send_discord_alert(program, sub_count):
    if not DISCORD_WEBHOOK_URL:
        print("No Webhook URL set. Skipping alert.")
        return

    name = program.get('name', 'Unknown')
    url = program.get('url', 'https://hackerone.com')
    targets = program.get('targets', {}).get('in_scope', [])
    
    # Extract primary domain from scope if possible simply
    scope_text = ""
    domain = ""
    for t in targets[:3]: # list up to 3
        scope_text += f"• `{t.get('asset_identifier', 'N/A')}` ({t.get('asset_type', 'Unknown')})\n"
        if t.get('asset_type') == 'URL' and not domain:
             domain = t.get('asset_identifier')

    embed = {
        "title": f"🚨 NEW BOUNTY PROGRAM: {name}",
        "url": url,
        "color": 5763719, # Greenish
        "fields": [
            {
                "name": "💰 Offers Bounty?",
                "value": "Yes" if program.get('offers_bounties') else "No (VDP only)",
                "inline": True
            },
            {
                "name": "🌐 Passive Recon (crt.sh)",
                "value": f"Found **{sub_count}** subdomains associated with this organization.",
                "inline": True
            },
            {
                "name": "🎯 Initial Scope",
                "value": scope_text if scope_text else "See program page."
            }
        ],
        "footer": {
            "text": f"TheHGTech Bounty Feed • {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}"
        }
    }
    
    payload = {
        "username": "HGTech Bounty Hunter",
        "embeds": [embed]
    }
    
    requests.post(DISCORD_WEBHOOK_URL, json=payload)

def main():
    print("Running Bounty Hunter...")
    current_programs = get_hackerone_programs()
    known_state = load_state()
    
    # Create a map for fast lookup
    current_map = {p['handle']: p for p in current_programs}
    
    new_programs_count = 0
    
    # Check for new programs
    for handle, prog in current_map.items():
        if handle not in known_state:
            print(f"New Program Found: {prog['name']}")
            
            # (The Twist): Do some quick recon on the first scope item
            # In a real scraper, we'd parse the 'targets' more carefully.
            # Here we just check the program url itself or name as a proxy for domain
            # Often the 'handle' is close to the domain.
            sub_count = get_crt_sh_subdomains(handle + ".com") # Heuristic for demo
            
            send_discord_alert(prog, sub_count)
            new_programs_count += 1
            
            # Update state immediately to avoid re-alerting on crash
            known_state[handle] = {
                "name": prog['name'],
                "detected_at": str(datetime.now())
            }
            
            # Rate limit alerts slightly
            time.sleep(1)

    if new_programs_count == 0:
        print("No new programs found.")
    
    # Save updated state
    save_state(known_state)

if __name__ == "__main__":
    main()
