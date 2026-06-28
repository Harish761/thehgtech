#!/usr/bin/env python3
"""
EPSS Enrichment Script for TheHGTech CVE Tracker
Fetches Exploit Prediction Scoring System (EPSS) data from FIRST.org API

EPSS predicts the probability that a CVE will be exploited in the wild
within the next 30 days.

API: https://api.first.org/data/v1/epss
Rate Limit: None documented (be respectful)
Authentication: None required
"""

import json
import requests
import time
from datetime import datetime
from typing import Dict, List, Optional
import os

# Configuration
EPSS_API_BASE = "https://api.first.org/data/v1/epss"
CVE_DATA_FILE = "cve-data.json"
BATCH_SIZE = 30  # EPSS API supports up to 100 CVEs per request
REQUEST_DELAY = 0.5  # Seconds between batch requests (be nice to the API)

def fetch_epss_batch(cve_ids: List[str]) -> Dict[str, Dict]:
    """
    Fetch EPSS scores for a batch of CVE IDs
    
    Args:
        cve_ids: List of CVE IDs (e.g., ['CVE-2024-21762', 'CVE-2025-14847'])
    
    Returns:
        Dictionary mapping CVE ID to EPSS data
    """
    if not cve_ids:
        return {}
    
    # Build comma-separated CVE list
    cve_param = ",".join(cve_ids)
    
    try:
        response = requests.get(
            EPSS_API_BASE,
            params={"cve": cve_param},
            timeout=30
        )
        response.raise_for_status()
        
        data = response.json()
        
        if data.get("status") != "OK":
            print(f"  ⚠️ EPSS API returned non-OK status: {data.get('status')}")
            return {}
        
        # Convert to dictionary keyed by CVE ID
        results = {}
        for item in data.get("data", []):
            cve_id = item.get("cve")
            if cve_id:
                results[cve_id] = {
                    "score": float(item.get("epss", 0)),
                    "percentile": float(item.get("percentile", 0)),
                    "date": item.get("date", datetime.now().strftime("%Y-%m-%d"))
                }
        
        return results
        
    except requests.exceptions.RequestException as e:
        print(f"  ✗ EPSS API request failed: {e}")
        return {}
    except (json.JSONDecodeError, ValueError) as e:
        print(f"  ✗ EPSS API response parsing failed: {e}")
        return {}


def calculate_patch_priority(cvss_score: float, epss_score: float, 
                              is_kev: bool = False) -> str:
    """
    Calculate patch priority based on CVSS, EPSS, and KEV status
    
    Priority Matrix:
    - CRITICAL-URGENT: KEV listed OR (CVSS >= 9.0 AND EPSS >= 0.7)
    - CRITICAL: CVSS >= 9.0 OR EPSS >= 0.8
    - HIGH: CVSS >= 7.0 AND EPSS >= 0.5
    - MEDIUM: CVSS >= 7.0 OR EPSS >= 0.3
    - LOW: Everything else
    """
    # KEV-listed CVEs are always top priority
    if is_kev:
        return "CRITICAL-URGENT"
    
    # High CVSS + High EPSS = urgent
    if cvss_score >= 9.0 and epss_score >= 0.7:
        return "CRITICAL-URGENT"
    
    # Very high CVSS or very high EPSS
    if cvss_score >= 9.0 or epss_score >= 0.8:
        return "CRITICAL"
    
    # High severity with moderate exploit likelihood
    if cvss_score >= 7.0 and epss_score >= 0.5:
        return "HIGH"
    
    # Moderate severity or exploit likelihood
    if cvss_score >= 7.0 or epss_score >= 0.3:
        return "MEDIUM"
    
    return "LOW"


def enrich_cve_data() -> Dict:
    """
    Main function to enrich CVE data with EPSS scores
    
    Returns:
        Statistics about the enrichment process
    """
    print("=" * 70)
    print("📊 EPSS Enrichment for TheHGTech CVE Tracker")
    print("=" * 70)
    print(f"Started: {datetime.now().isoformat()}")
    print()
    
    # Load existing CVE data
    if not os.path.exists(CVE_DATA_FILE):
        print(f"✗ CVE data file not found: {CVE_DATA_FILE}")
        return {"status": "error", "message": "CVE data file not found"}
    
    with open(CVE_DATA_FILE, 'r') as f:
        cve_data = json.load(f)
    
    cves = cve_data.get("cves", [])
    total_cves = len(cves)
    
    print(f"📥 Loaded {total_cves} CVEs from {CVE_DATA_FILE}")
    print()
    
    # Extract CVE IDs
    cve_ids = [cve.get("cveId") for cve in cves if cve.get("cveId")]
    
    # Fetch EPSS scores in batches
    print(f"📡 Fetching EPSS scores in batches of {BATCH_SIZE}...")
    all_epss_data = {}
    batches = [cve_ids[i:i + BATCH_SIZE] for i in range(0, len(cve_ids), BATCH_SIZE)]
    
    for i, batch in enumerate(batches, 1):
        print(f"  Batch {i}/{len(batches)} ({len(batch)} CVEs)...", end=" ")
        batch_data = fetch_epss_batch(batch)
        all_epss_data.update(batch_data)
        print(f"✓ Got {len(batch_data)} scores")
        
        # Rate limiting between batches
        if i < len(batches):
            time.sleep(REQUEST_DELAY)
    
    print(f"\n✓ Retrieved EPSS data for {len(all_epss_data)}/{total_cves} CVEs")
    print()
    
    # Enrich CVE entries
    print("🔧 Enriching CVE entries with EPSS data...")
    enriched_count = 0
    priority_counts = {
        "CRITICAL-URGENT": 0,
        "CRITICAL": 0,
        "HIGH": 0,
        "MEDIUM": 0,
        "LOW": 0
    }
    
    for cve in cves:
        cve_id = cve.get("cveId")
        
        if cve_id in all_epss_data:
            epss_data = all_epss_data[cve_id]
            cve["epss"] = epss_data
            
            # Calculate patch priority
            cvss_score = cve.get("cvssScore", 0)
            if isinstance(cvss_score, str):
                try:
                    cvss_score = float(cvss_score)
                except ValueError:
                    cvss_score = 0
            
            is_kev = cve.get("source") == "CISA_KEV"
            
            priority = calculate_patch_priority(
                cvss_score=cvss_score,
                epss_score=epss_data["score"],
                is_kev=is_kev
            )
            
            cve["patchPriority"] = priority
            priority_counts[priority] += 1
            enriched_count += 1
        else:
            # No EPSS data available - set defaults
            cve["epss"] = None
            cve["patchPriority"] = "UNKNOWN"
    
    # Add EPSS metadata to output
    cve_data["epssEnrichment"] = {
        "lastUpdated": datetime.now().isoformat(),
        "enrichedCount": enriched_count,
        "totalCves": total_cves,
        "coveragePercent": round((enriched_count / total_cves) * 100, 1) if total_cves > 0 else 0,
        "priorityDistribution": priority_counts
    }
    
    # Save enriched data
    with open(CVE_DATA_FILE, 'w') as f:
        json.dump(cve_data, f, indent=2)
    
    print(f"✓ Enriched {enriched_count}/{total_cves} CVEs")
    print()
    
    # Summary
    print("=" * 70)
    print("📊 Enrichment Summary")
    print("=" * 70)
    print(f"Total CVEs: {total_cves}")
    print(f"EPSS Data Retrieved: {len(all_epss_data)}")
    print(f"Coverage: {cve_data['epssEnrichment']['coveragePercent']}%")
    print()
    print("Patch Priority Distribution:")
    for priority, count in priority_counts.items():
        bar = "█" * (count * 2) if count > 0 else ""
        print(f"  {priority:18} {count:3} {bar}")
    print()
    print(f"✓ Output saved to: {CVE_DATA_FILE}")
    print("=" * 70)
    
    return {
        "status": "success",
        "totalCves": total_cves,
        "enrichedCount": enriched_count,
        "coveragePercent": cve_data["epssEnrichment"]["coveragePercent"],
        "priorityDistribution": priority_counts
    }


def main():
    """Entry point"""
    try:
        result = enrich_cve_data()
        if result.get("status") == "success":
            print("\n✅ EPSS enrichment completed successfully!")
        else:
            print(f"\n⚠️ EPSS enrichment completed with issues: {result.get('message', 'Unknown')}")
    except Exception as e:
        print(f"\n❌ EPSS enrichment failed: {e}")
        raise


if __name__ == "__main__":
    main()
