#!/usr/bin/env python3
"""
CVE Patch Enrichment Script
Fetches CISA KEV data and enriches with vendor patch details from NVD API
"""

import requests
import json
import time
import os
from datetime import datetime, timedelta
from typing import List, Dict, Optional

# Configuration
NVD_API_KEY = os.getenv('NVD_API_KEY', '')  # Optional: Get free key from https://nvd.nist.gov/developers/request-an-api-key
OPENAI_API_KEY = os.getenv('OPENAI_API_KEY', '')
CISA_KEV_URL = "https://www.cisa.gov/sites/default/files/feeds/known_exploited_vulnerabilities.json"
NVD_BASE_URL = "https://services.nvd.nist.gov/rest/json/cves/2.0"
OUTPUT_FILE = "cve-data.json"

# Rate limiting
NVD_RATE_LIMIT = 0.6 if NVD_API_KEY else 6  # seconds between requests (with key: 50/30s, without: 5/30s)


def fetch_cisa_kev() -> Dict:
    """Fetch CISA Known Exploited Vulnerabilities catalog"""
    print("📥 Fetching CISA KEV catalog...")
    try:
        response = requests.get(CISA_KEV_URL, timeout=30)
        response.raise_for_status()
        data = response.json()
        print(f"✓ Fetched {len(data['vulnerabilities'])} CVEs from CISA KEV")
        return data
    except Exception as e:
        print(f"✗ Error fetching CISA KEV: {e}")
        return {"vulnerabilities": []}


def fetch_nvd_cve_details(cve_id: str) -> Optional[Dict]:
    """Fetch detailed CVE information from NVD API"""
    print(f"  🔍 Fetching NVD details for {cve_id}...")
    
    headers = {}
    if NVD_API_KEY:
        headers['apiKey'] = NVD_API_KEY
    
    try:
        url = f"{NVD_BASE_URL}?cveId={cve_id}"
        response = requests.get(url, headers=headers, timeout=30)
        response.raise_for_status()
        data = response.json()
        
        if data.get('vulnerabilities'):
            return data['vulnerabilities'][0]['cve']
        return None
    except Exception as e:
        print(f"    ✗ Error fetching NVD data for {cve_id}: {e}")
        return None
    finally:
        # Rate limiting
        time.sleep(NVD_RATE_LIMIT)


def extract_remediation_links(nvd_data: Dict, vendor: str) -> List[Dict[str, str]]:
    """Extract vendor patch and advisory links from NVD data"""
    if not nvd_data:
        return []
    
    remediation_links = []
    seen_urls = set()
    
    # Extract from references
    references = nvd_data.get('references', [])
    
    # Vendor-specific keywords for filtering relevant links
    vendor_keywords = {
        'microsoft': ['microsoft.com', 'msrc.microsoft.com', 'support.microsoft.com'],
        'cisco': ['cisco.com', 'sec.cloudapps.cisco.com'],
        'adobe': ['adobe.com', 'helpx.adobe.com'],
        'apple': ['apple.com', 'support.apple.com'],
        'google': ['google.com', 'chromereleases.googleblog.com'],
        'oracle': ['oracle.com', 'www.oracle.com/security-alerts'],
        'vmware': ['vmware.com', 'www.vmware.com/security'],
        'fortinet': ['fortinet.com', 'fortiguard.com'],
        'palo alto': ['paloaltonetworks.com', 'security.paloaltonetworks.com'],
        'juniper': ['juniper.net', 'supportportal.juniper.net'],
    }
    
    # Priority tags for patch/advisory links
    priority_tags = ['Patch', 'Vendor Advisory', 'Mitigation', 'Third Party Advisory']
    
    for ref in references:
        url = ref.get('url', '')
        tags = ref.get('tags', [])
        
        # Skip if already seen
        if url in seen_urls:
            continue
        
        # Check if this is a vendor-specific link
        vendor_lower = vendor.lower()
        is_vendor_link = False
        
        for vendor_key, domains in vendor_keywords.items():
            if vendor_key in vendor_lower:
                if any(domain in url.lower() for domain in domains):
                    is_vendor_link = True
                    break
        
        # Also check if URL contains vendor name
        if vendor_lower in url.lower():
            is_vendor_link = True
        
        # Prioritize vendor links with patch/advisory tags
        if is_vendor_link and any(tag in tags for tag in priority_tags):
            title = f"{vendor} Security Advisory"
            if 'Patch' in tags:
                title = f"{vendor} Patch"
            elif 'Mitigation' in tags:
                title = f"{vendor} Mitigation Guide"
            
            remediation_links.append({
                'title': title,
                'url': url,
                'type': 'vendor'
            })
            seen_urls.add(url)
        
        # Also include general patch/advisory links
        elif any(tag in tags for tag in priority_tags) and url not in seen_urls:
            title = "Security Advisory"
            if 'Patch' in tags:
                title = "Patch Information"
            elif 'Mitigation' in tags:
                title = "Mitigation Guide"
            elif 'Third Party Advisory' in tags:
                title = "Third Party Advisory"
            
            remediation_links.append({
                'title': title,
                'url': url,
                'type': 'advisory'
            })
            seen_urls.add(url)
    
    return remediation_links[:5]  # Limit to top 5 most relevant links


def enhance_with_ai(cve_id: str, remediation_links: List[Dict], vendor: str, product: str) -> List[Dict[str, str]]:
    """Use OpenAI to generate better titles for remediation links"""
    if not OPENAI_API_KEY or not remediation_links:
        return remediation_links
    
    try:
        # Prepare link descriptions
        links_text = "\n".join([f"- {link['url']}" for link in remediation_links])
        
        prompt = f"""Given these security advisory links for {cve_id} ({vendor} {product}), generate concise, user-friendly titles (max 50 chars each).

Links:
{links_text}

Return JSON array with format: [{{"title": "...", "url": "..."}}]
Make titles specific and actionable (e.g., "Microsoft Security Update", "Cisco Patch Download", "Vendor Mitigation Guide")."""

        response = requests.post(
            'https://api.openai.com/v1/chat/completions',
            headers={
                'Authorization': f'Bearer {OPENAI_API_KEY}',
                'Content-Type': 'application/json'
            },
            json={
                'model': 'gpt-4o-mini',
                'messages': [{'role': 'user', 'content': prompt}],
                'temperature': 0.3,
                'max_tokens': 500
            },
            timeout=30
        )
        
        if response.status_code == 200:
            result = response.json()
            content = result['choices'][0]['message']['content']
            
            # Extract JSON from response
            import re
            json_match = re.search(r'\[.*\]', content, re.DOTALL)
            if json_match:
                enhanced_links = json.loads(json_match.group())
                return enhanced_links
        
    except Exception as e:
        print(f"    ⚠️  AI enhancement failed: {e}")
    
    return remediation_links


def determine_severity(nvd_data: Dict) -> str:
    """Determine severity from NVD CVSS scores"""
    if not nvd_data:
        return "HIGH"
    
    metrics = nvd_data.get('metrics', {})
    
    # Try CVSS v3.1 first
    cvss_v31 = metrics.get('cvssMetricV31', [])
    if cvss_v31:
        base_score = cvss_v31[0]['cvssData']['baseScore']
    else:
        # Fallback to CVSS v3.0
        cvss_v30 = metrics.get('cvssMetricV30', [])
        if cvss_v30:
            base_score = cvss_v30[0]['cvssData']['baseScore']
        else:
            # Fallback to CVSS v2
            cvss_v2 = metrics.get('cvssMetricV2', [])
            if cvss_v2:
                base_score = cvss_v2[0]['cvssData']['baseScore']
            else:
                return "HIGH"
    
    # Map score to severity
    if base_score >= 9.0:
        return "CRITICAL"
    elif base_score >= 7.0:
        return "HIGH"
    elif base_score >= 4.0:
        return "MEDIUM"
    else:
        return "LOW"


def process_cve(cisa_vuln: Dict) -> Dict:
    """Process a single CVE and enrich with patch details"""
    cve_id = cisa_vuln['cveID']
    vendor = cisa_vuln['vendorProject']
    product = cisa_vuln['product']
    
    # Fetch NVD details
    nvd_data = fetch_nvd_cve_details(cve_id)
    
    # Extract remediation links
    remediation_links = extract_remediation_links(nvd_data, vendor)
    
    # Enhance with AI if available
    if OPENAI_API_KEY and remediation_links:
        remediation_links = enhance_with_ai(cve_id, remediation_links, vendor, product)
    
    # Determine severity
    severity = determine_severity(nvd_data)
    
    # Check if zero-day (published date close to date added)
    is_zero_day = False
    if nvd_data:
        published = nvd_data.get('published', '')
        if published:
            pub_date = datetime.fromisoformat(published.replace('Z', '+00:00'))
            added_date = datetime.fromisoformat(cisa_vuln['dateAdded'])
            days_diff = (added_date - pub_date).days
            is_zero_day = days_diff < 7  # Published within 7 days of being added to KEV
    
    cve_entry = {
        'cveId': cve_id,
        'dateAdded': cisa_vuln['dateAdded'],
        'vendor': vendor,
        'product': product,
        'description': cisa_vuln['vulnerabilityName'],
        'shortDescription': cisa_vuln.get('shortDescription', ''),
        'severity': severity,
        'isZeroDay': is_zero_day,
        'requiredAction': cisa_vuln['requiredAction'],
        'dueDate': cisa_vuln['dueDate'],
        'nvdUrl': f"https://nvd.nist.gov/vuln/detail/{cve_id}",
        'cisaUrl': "https://www.cisa.gov/known-exploited-vulnerabilities-catalog",
        'remediationLinks': remediation_links
    }
    
    print(f"  ✓ Processed {cve_id} - {len(remediation_links)} remediation links found")
    return cve_entry


def main():
    """Main execution function"""
    print("=" * 60)
    print("CVE Patch Enrichment Script")
    print("=" * 60)
    
    # Check for API keys
    if not NVD_API_KEY:
        print("⚠️  No NVD API key found. Using slower rate limit (5 req/30s)")
        print("   Get free key: https://nvd.nist.gov/developers/request-an-api-key")
    else:
        print("✓ NVD API key found - using faster rate limit (50 req/30s)")
    
    if not OPENAI_API_KEY:
        print("⚠️  No OpenAI API key found. Skipping AI enhancement")
    else:
        print("✓ OpenAI API key found - will enhance link titles")
    
    print()
    
    # Fetch CISA KEV data
    kev_data = fetch_cisa_kev()
    if not kev_data.get('vulnerabilities'):
        print("✗ No CVE data to process")
        return
    
    # Filter to last 30 days (instead of 7 to show more CVEs)
    thirty_days_ago = (datetime.now() - timedelta(days=30)).strftime('%Y-%m-%d')
    recent_vulns = [
        v for v in kev_data['vulnerabilities']
        if v['dateAdded'] >= thirty_days_ago
    ]
    
    print(f"\n📊 Processing {len(recent_vulns)} CVEs from last 30 days...")
    print(f"⏱️  Estimated time: {len(recent_vulns) * NVD_RATE_LIMIT / 60:.1f} minutes\n")
    
    # Process each CVE
    enriched_cves = []
    for i, vuln in enumerate(recent_vulns, 1):
        print(f"[{i}/{len(recent_vulns)}] Processing {vuln['cveID']}...")
        try:
            cve_entry = process_cve(vuln)
            enriched_cves.append(cve_entry)
        except Exception as e:
            print(f"  ✗ Error processing {vuln['cveID']}: {e}")
    
    # Sort by date (most recent first)
    enriched_cves.sort(key=lambda x: x['dateAdded'], reverse=True)
    
    # Generate output
    output = {
        'lastUpdated': datetime.now().isoformat(),
        'totalCVEs': len(enriched_cves),
        'cves': enriched_cves
    }
    
    # Save to file
    with open(OUTPUT_FILE, 'w') as f:
        json.dump(output, f, indent=2)
    
    print("\n" + "=" * 60)
    print(f"✓ Successfully processed {len(enriched_cves)} CVEs")
    print(f"✓ Output saved to: {OUTPUT_FILE}")
    
    # Statistics
    with_patches = sum(1 for cve in enriched_cves if cve['remediationLinks'])
    print(f"\n📊 Statistics:")
    print(f"  - CVEs with patch links: {with_patches}/{len(enriched_cves)} ({with_patches/len(enriched_cves)*100:.1f}%)")
    print(f"  - Critical: {sum(1 for c in enriched_cves if c['severity'] == 'CRITICAL')}")
    print(f"  - High: {sum(1 for c in enriched_cves if c['severity'] == 'HIGH')}")
    print(f"  - Zero-day: {sum(1 for c in enriched_cves if c['isZeroDay'])}")
    print("=" * 60)


if __name__ == '__main__':
    main()
