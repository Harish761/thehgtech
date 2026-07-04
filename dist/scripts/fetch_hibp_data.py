import urllib.request
import urllib.error
import json
import os
from datetime import datetime

# Define paths
DATA_DIR = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'ioc-data')
OUTPUT_FILE = os.path.join(DATA_DIR, 'verified-breaches.json')

def fetch_hibp_data():
    """Fetches breach data from Have I Been Pwned public API."""
    url = "https://haveibeenpwned.com/api/v3/breaches"
    headers = {
        # HIBP requires a user agent
        "User-Agent": "TheHGTech-ThreatIntel-Collector"
    }
    
    print(f"[{datetime.now().strftime('%Y-%m-%d %H:%M:%S')}] Fetching HIBP breaches...")
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as response:
            data = response.read()
            breaches = json.loads(data)
            print(f"Successfully fetched {len(breaches)} breaches from HIBP.")
            return breaches
    except urllib.error.URLError as e:
        print(f"Error fetching data from HIBP: {e}")
        return None

def process_breaches(breaches):
    """Transforms list of breaches into a domain-keyed lookup dictionary."""
    hibp_lookup = {}
    
    for breach in breaches:
        domain = breach.get("Domain")
        # Only index breaches that have a domain associated with them
        if domain:
            domain = domain.lower()
            if domain not in hibp_lookup:
                hibp_lookup[domain] = []
            
            hibp_lookup[domain].append({
                "Name": breach.get("Name"),
                "Title": breach.get("Title"),
                "BreachDate": breach.get("BreachDate"),
                "AddedDate": breach.get("AddedDate"),
                "PwnCount": breach.get("PwnCount"),
                "DataClasses": breach.get("DataClasses", []),
                "IsVerified": breach.get("IsVerified", False),
                "IsFabricated": breach.get("IsFabricated", False),
                "Description": breach.get("Description", "")
            })
    
    print(f"Processed into {len(hibp_lookup)} unique domains.")
    return hibp_lookup

def save_data(data):
    """Saves the lookup dictionary to the ioc-data directory."""
    if not os.path.exists(DATA_DIR):
        os.makedirs(DATA_DIR)
        
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    print(f"Saved optimized lookup data to {OUTPUT_FILE}")

def main():
    breaches = fetch_hibp_data()
    if breaches:
        lookup_data = process_breaches(breaches)
        save_data(lookup_data)

if __name__ == "__main__":
    main()
