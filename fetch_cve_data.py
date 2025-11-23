#!/usr/bin/env python3
"""
CVE Data Fetcher with NVD Scraping
Fetches CISA KEV catalog and enriches with vendor remediation links from NVD
"""

import requests
import json
import time
from datetime import datetime
from bs4 import BeautifulSoup

def fetch_cisa_kev():
    """Fetch CISA Known Exploited Vulnerabilities catalog"""
    print("📥 Fetching CISA KEV catalog...")
    url = "https://www.cisa.gov/sites/default/files/feeds/known_exploited_vulnerabilities.json"
    
    try:
        response = requests.get(url, timeout=30)
        response.raise_for_status()
        data = response.json()
        print(f"✓ Fetched {len(data['vulnerabilities'])} CVEs from CISA KEV")
        return data['vulnerabilities']
    except Exception as e:
        print(f"❌ Error fetching CISA KEV: {e}")
        return []

def scrape_nvd_references(cve_id):
    """Scrape NVD for vendor advisory/patch links"""
    print(f"  🔍 Scraping NVD for {cve_id}...")
    url = f"https://nvd.nist.gov/vuln/detail/{cve_id}"
    
    try:
        response = requests.get(url, timeout=30, headers={
            'User-Agent': 'Mozilla/5.0 (compatible; CVE-Tracker/1.0)'
        })
        response.raise_for_status()
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # Find references section
        references = []
        ref_table = soup.find('table', {'data-testid': 'vuln-hyperlinks-table'})
        
        if ref_table:
            links = ref_table.find_all('a', {'data-testid': 'vuln-hyperlinks-link'})
            
            # Keywords for vendor advisories/patches
            vendor_keywords = [
                'microsoft', 'oracle', 'cisco', 'adobe', 'apple', 'google',
                'security', 'advisory', 'bulletin', 'patch', 'update',
                'vulnerability', 'fix', 'mitigation', 'cve'
            ]
            
            for link in links:
                href = link.get('href', '')
                text = link.get_text(strip=True)
                
                # Filter for likely vendor/patch links
                if any(keyword in href.lower() or keyword in text.lower() 
                       for keyword in vendor_keywords):
                    references.append({
                        'title': text[:100],  # Truncate long titles
                        'url': href
                    })
        
        print(f"    ✓ Found {len(references)} remediation links")
        return references[:5]  # Limit to top 5 most relevant
        
    except Exception as e:
        print(f"    ⚠️  Error scraping NVD for {cve_id}: {e}")
        return []

def get_severity_from_description(description):
    """Determine severity from description keywords"""
    desc_lower = description.lower()
    
    if any(word in desc_lower for word in ['critical', 'remote code execution', 'rce', 'authentication bypass']):
        return 'CRITICAL'
    elif any(word in desc_lower for word in ['high', 'elevation of privilege', 'privilege escalation']):
        return 'HIGH'
    elif any(word in desc_lower for word in ['medium', 'moderate', 'information disclosure']):
        return 'MEDIUM'
    else:
        return 'HIGH'  # Default to HIGH for KEV

def process_cves(cisa_cves, limit=20):
    """Process CVEs and enrich with NVD data"""
    print(f"\n🔄 Processing {min(limit, len(cisa_cves))} most recent CVEs...")
    
    # Sort by date added (most recent first)
    sorted_cves = sorted(cisa_cves, 
                        key=lambda x: x.get('dateAdded', ''), 
                        reverse=True)[:limit]
    
    enhanced_cves = []
    
    for idx, cve in enumerate(sorted_cves, 1):
        print(f"\n[{idx}/{len(sorted_cves)}] Processing {cve['cveID']}...")
        
        # Get remediation links from NVD
        remediation_links = scrape_nvd_references(cve['cveID'])
        
        # Build enhanced CVE object
        enhanced_cve = {
            'cveId': cve['cveID'],
            'dateAdded': cve.get('dateAdded', ''),
            'vendor': cve.get('vendorProject', 'Unknown'),
            'product': cve.get('product', 'Unknown'),
            'description': cve.get('vulnerabilityName', ''),
            'shortDescription': cve.get('shortDescription', '')[:200],  # Truncate
            'severity': get_severity_from_description(cve.get('vulnerabilityName', '')),
            'requiredAction': cve.get('requiredAction', 'Apply vendor updates'),
            'dueDate': cve.get('dueDate', ''),
            'nvdUrl': f"https://nvd.nist.gov/vuln/detail/{cve['cveID']}",
            'cisaUrl': 'https://www.cisa.gov/known-exploited-vulnerabilities-catalog',
            'remediationLinks': remediation_links
        }
        
        enhanced_cves.append(enhanced_cve)
        
        # Rate limiting - be respectful to NVD
        if idx < len(sorted_cves):
            time.sleep(2)  # 2 second delay between requests
    
    return enhanced_cves

def save_cve_data(cves):
    """Save enhanced CVE data to JSON file"""
    output = {
        'lastUpdated': datetime.utcnow().isoformat() + 'Z',
        'totalCVEs': len(cves),
        'cves': cves
    }
    
    with open('cve-data.json', 'w', encoding='utf-8') as f:
        json.dump(output, f, indent=2, ensure_ascii=False)
    
    print(f"\n✅ Saved {len(cves)} CVEs to cve-data.json")

def main():
    print("=" * 60)
    print("🛡️  CVE Data Fetcher with NVD Scraping")
    print("=" * 60)
    
    # Fetch CISA KEV
    cisa_cves = fetch_cisa_kev()
    
    if not cisa_cves:
        print("❌ No CVEs fetched. Exiting.")
        return
    
    # Process and enrich CVEs (limit to 20 most recent)
    enhanced_cves = process_cves(cisa_cves, limit=20)
    
    # Save to file
    save_cve_data(enhanced_cves)
    
    print("\n" + "=" * 60)
    print("✨ CVE data fetch complete!")
    print("=" * 60)

if __name__ == '__main__':
    main()
