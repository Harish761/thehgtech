#!/usr/bin/env python3
"""
Enhanced CVE Enrichment Script - Dual Source
Fetches both CISA KEV (exploited) and NVD Critical (high severity) CVEs
"""

import requests
import json
import time
import os
from datetime import datetime, timedelta
from typing import List, Dict, Optional

# Configuration
NVD_API_KEY = os.getenv('NVD_API_KEY', '')
OPENAI_API_KEY = os.getenv('OPENAI_API_KEY', '')
CISA_KEV_URL = "https://www.cisa.gov/sites/default/files/feeds/known_exploited_vulnerabilities.json"
NVD_BASE_URL = "https://services.nvd.nist.gov/rest/json/cves/2.0"
OUTPUT_FILE = "cve-data.json"

# Rate limiting
NVD_RATE_LIMIT = 0.6 if NVD_API_KEY else 6  # seconds between requests

# Import functions from enrich_cve_patches.py
# (fetch_nvd_cve_details, extract_remediation_links, etc.)

def fetch_nvd_critical_cves(days=7, max_results=50) -> List[Dict]:
    """Fetch critical CVEs from NVD (CVSS >= 9.0) - supports both v3.x and v4.0"""
    print(f"\n📥 Fetching NVD Critical CVEs (last {days} days)...")
    
    end_date = datetime.now()
    start_date = end_date - timedelta(days=days)
    
    start_str = start_date.strftime('%Y-%m-%dT00:00:00.000')
    end_str = end_date.strftime('%Y-%m-%dT23:59:59.999')
    
    headers = {}
    if NVD_API_KEY:
        headers['apiKey'] = NVD_API_KEY
    
    all_vulnerabilities = []
    
    try:
        # Query 1: CVSS v3.x CRITICAL CVEs
        print("  Querying CVSS v3.x CRITICAL...")
        url_v3 = f"{NVD_BASE_URL}?pubStartDate={start_str}&pubEndDate={end_str}&cvssV3Severity=CRITICAL"
        
        response_v3 = requests.get(url_v3, headers=headers, timeout=30)
        response_v3.raise_for_status()
        data_v3 = response_v3.json()
        
        v3_results = data_v3.get('totalResults', 0)
        v3_vulns = data_v3.get('vulnerabilities', [])
        print(f"    ✓ Found {v3_results} CVSS v3.x critical CVEs")
        all_vulnerabilities.extend(v3_vulns)
        
        # Query 2: Fetch ALL CVEs to catch v4.0 scored ones (NVD API doesn't support cvssV4Severity filter yet)
        print("  Querying for CVSS v4.0 CVEs (no API filter available, checking manually)...")
        url_all = f"{NVD_BASE_URL}?pubStartDate={start_str}&pubEndDate={end_str}"
        
        # Rate limiting: wait 1 second between requests if no API key
        if not NVD_API_KEY:
            import time
            time.sleep(1)
        
        response_all = requests.get(url_all, headers=headers, timeout=30)
        response_all.raise_for_status()
        data_all = response_all.json()
        
        all_cves = data_all.get('vulnerabilities', [])
        
        # Filter for v4.0 CRITICAL CVEs manually
        v4_vulns = []
        for vuln in all_cves:
            metrics = vuln['cve'].get('metrics', {})
            if metrics.get('cvssMetricV40'):
                v4_score = metrics['cvssMetricV40'][0]['cvssData'].get('baseScore', 0)
                v4_severity = metrics['cvssMetricV40'][0]['cvssData'].get('baseSeverity', '')
                if v4_severity == 'CRITICAL' or v4_score >= 9.0:
                    v4_vulns.append(vuln)
        
        v4_results = len(v4_vulns)
        print(f"    ✓ Found {v4_results} CVSS v4.0 critical CVEs (score >= 9.0)")
        all_vulnerabilities.extend(v4_vulns)
        
        # Deduplicate by CVE ID (in case a CVE has both v3 and v4 scores)
        seen_cves = set()
        unique_vulnerabilities = []
        for vuln in all_vulnerabilities:
            cve_id = vuln['cve']['id']
            if cve_id not in seen_cves:
                seen_cves.add(cve_id)
                unique_vulnerabilities.append(vuln)
        
        total_unique = len(unique_vulnerabilities)
        print(f"✓ Total unique critical CVEs: {total_unique} (v3: {v3_results}, v4: {v4_results})")
        print(f"  Fetching top {min(max_results, total_unique)} for display")
        
        vulnerabilities = unique_vulnerabilities
        
        # Convert NVD format to our format
        critical_cves = []
        for vuln in vulnerabilities[:max_results]:
            cve_data = vuln['cve']
            cve_id = cve_data['id']
            
            # Extract vendor/product from CPE data
            vendor = "Unknown"
            product = "Unknown"
            
            if cve_data.get('configurations'):
                try:
                    cpe_match = cve_data['configurations'][0]['nodes'][0]['cpeMatch'][0]
                    cpe_parts = cpe_match['criteria'].split(':')
                    if len(cpe_parts) >= 5:
                        vendor = cpe_parts[3].replace('_', ' ').title()
                        product = cpe_parts[4].replace('_', ' ').title()
                except:
                    pass
            
            # Get description
            descriptions = cve_data.get('descriptions', [])
            description = descriptions[0]['value'] if descriptions else "No description available"
            
            # Get CVSS score (check v4.0 first, then v3.1, then v3.0, then v2.0)
            metrics = cve_data.get('metrics', {})
            cvss_score = 9.0  # Default for CRITICAL
            severity = "CRITICAL"
            cvss_version = "Unknown"
            
            # Priority: v4.0 > v3.1 > v3.0 > v2.0
            if metrics.get('cvssMetricV40'):
                cvss_data = metrics['cvssMetricV40'][0]['cvssData']
                cvss_score = cvss_data['baseScore']
                severity = cvss_data['baseSeverity']
                cvss_version = "4.0"
            elif metrics.get('cvssMetricV31'):
                cvss_data = metrics['cvssMetricV31'][0]['cvssData']
                cvss_score = cvss_data['baseScore']
                severity = cvss_data['baseSeverity']
                cvss_version = "3.1"
            elif metrics.get('cvssMetricV30'):
                cvss_data = metrics['cvssMetricV30'][0]['cvssData']
                cvss_score = cvss_data['baseScore']
                severity = cvss_data['baseSeverity']
                cvss_version = "3.0"
            elif metrics.get('cvssMetricV2'):
                cvss_data = metrics['cvssMetricV2'][0]['cvssData']
                cvss_score = cvss_data['baseScore']
                severity = cvss_data['baseSeverity'] if 'baseSeverity' in cvss_data else "HIGH"
                cvss_version = "2.0"
            
            # Get published date
            published = cve_data.get('published', '')
            date_added = published[:10] if published else datetime.now().strftime('%Y-%m-%d')
            
            # Calculate due date (21 days from publication for critical)
            if published:
                pub_date = datetime.fromisoformat(published.replace('Z', '+00:00'))
                due_date = (pub_date + timedelta(days=21)).strftime('%Y-%m-%d')
            else:
                due_date = (datetime.now() + timedelta(days=21)).strftime('%Y-%m-%d')
            
            # Extract remediation links
            remediation_links = []
            for ref in cve_data.get('references', []):
                tags = ref.get('tags', [])
                if 'Patch' in tags or 'Vendor Advisory' in tags:
                    title = "Vendor Advisory" if 'Vendor Advisory' in tags else "Patch"
                    remediation_links.append({
                        'title': f"{vendor} {title}",
                        'url': ref['url'],
                        'type': 'vendor' if vendor.lower() in ref['url'].lower() else 'advisory'
                    })
            
            critical_cves.append({
                'cveId': cve_id,
                'dateAdded': date_added,
                'vendor': vendor,
                'product': product,
                'description': description[:200] + "..." if len(description) > 200 else description,
                'shortDescription': description[:100] + "..." if len(description) > 100 else description,
                'severity': severity,
                'cvssScore': cvss_score,
                'isZeroDay': False,  # NVD doesn't track this explicitly
                'requiredAction': f"Apply security updates per vendor instructions for {vendor} {product}",
                'dueDate': due_date,
                'nvdUrl': f"https://nvd.nist.gov/vuln/detail/{cve_id}",
                'cisaUrl': None,  # Not in CISA KEV
                'remediationLinks': remediation_links[:5],  # Limit to 5
                'source': 'NVD'  # Tag for frontend filtering
            })
        
        print(f"✓ Processed {len(critical_cves)} critical CVEs from NVD")
        return critical_cves
        
    except Exception as e:
        print(f"✗ Error fetching NVD critical CVEs: {e}")
        return []


def main_dual_source():
    """Main function - fetch from both CISA KEV and NVD Critical"""
    print("=" * 70)
    print("Enhanced CVE Enrichment - Dual Source (CISA KEV + NVD Critical)")
    print("=" * 70)
    
    # Check API keys
    if not NVD_API_KEY:
        print("⚠️  No NVD API key - using slower rate limit")
    else:
        print("✓ NVD API key found")
    
    if OPENAI_API_KEY:
        print("✓ OpenAI API key found")
    
    print()
    
    # Fetch CISA KEV CVEs (exploited)
    print("📊 Source 1: CISA KEV (Actively Exploited)")
    print("-" * 70)
    
    from enrich_cve_patches import fetch_cisa_kev, process_cve
    
    kev_data = fetch_cisa_kev()
    seven_days_ago = (datetime.now() - timedelta(days=7)).strftime('%Y-%m-%d')
    recent_kev = [
        v for v in kev_data.get('vulnerabilities', [])
        if v['dateAdded'] >= seven_days_ago
    ]
    
    print(f"Processing {len(recent_kev)} CISA KEV CVEs...")
    
    cisa_cves = []
    for i, vuln in enumerate(recent_kev, 1):
        print(f"[{i}/{len(recent_kev)}] {vuln['cveID']}...")
        try:
            cve_entry = process_cve(vuln)
            cve_entry['source'] = 'CISA_KEV'  # Tag for frontend
            cisa_cves.append(cve_entry)
        except Exception as e:
            print(f"  ✗ Error: {e}")
    
    # Fetch NVD Critical CVEs
    print("\n📊 Source 2: NVD Critical (CVSS >= 9.0)")
    print("-" * 70)
    
    nvd_cves = fetch_nvd_critical_cves(days=7, max_results=50)
    
    # Combine and deduplicate
    all_cves = cisa_cves + nvd_cves
    
    # Remove duplicates (prefer CISA KEV version if CVE appears in both)
    seen_ids = set()
    unique_cves = []
    
    for cve in all_cves:
        if cve['cveId'] not in seen_ids:
            unique_cves.append(cve)
            seen_ids.add(cve['cveId'])
    
    # Sort by date (most recent first)
    unique_cves.sort(key=lambda x: x['dateAdded'], reverse=True)
    
    # Generate output with source categorization
    output = {
        'lastUpdated': datetime.now().isoformat(),
        'totalCVEs': len(unique_cves),
        'sources': {
            'cisaKev': len([c for c in unique_cves if c.get('source') == 'CISA_KEV']),
            'nvdCritical': len([c for c in unique_cves if c.get('source') == 'NVD']),
            'overlap': len(cisa_cves) + len(nvd_cves) - len(unique_cves)
        },
        'cves': unique_cves,
        'cisaKevOnly': [c for c in unique_cves if c.get('source') == 'CISA_KEV'],
        'nvdCriticalOnly': [c for c in unique_cves if c.get('source') == 'NVD']
    }
    
    # Save to file
    with open(OUTPUT_FILE, 'w') as f:
        json.dump(output, f, indent=2)
    
    print("\n" + "=" * 70)
    print("✓ Processing Complete!")
    print("=" * 70)
    print(f"\n📊 Statistics:")
    print(f"  CISA KEV (Exploited): {output['sources']['cisaKev']}")
    print(f"  NVD Critical (CVSS >= 9.0): {output['sources']['nvdCritical']}")
    print(f"  Overlap (in both): {output['sources']['overlap']}")
    print(f"  Total Unique CVEs: {output['totalCVEs']}")
    print(f"\n✓ Output saved to: {OUTPUT_FILE}")
    print("=" * 70)


if __name__ == '__main__':
    main_dual_source()
