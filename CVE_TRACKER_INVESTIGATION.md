q# CVE Tracker Investigation: Why CVE-2025-66516 is Missing

## Summary
CVE-2025-66516 (Apache Tika XXE, CVSS 10.0) is not appearing in the CVE tracker despite being published in NVD.

## Root Cause
The CVE uses **CVSS v4.0** scoring, but the tracker only queries for CVSS v3.x scores.

### Evidence:
```json
{
  "id": "CVE-2025-66516",
  "published": "2025-12-04T17:15:57.120",
  "cvssMetricV31": null,  // ❌ No v3.1 score
  "cvssMetricV40": {      // ✅ Has v4.0 score
    "baseScore": 10.0,
    "baseSeverity": "CRITICAL"
  }
}
```

### Current Script Behavior:
```python
# enrich_cve_dual_source.py line 43
url = f"{NVD_BASE_URL}?pubStartDate={start_str}&pubEndDate={end_str}&cvssV3Severity=CRITICAL"
#                                                                      ^^^^^^^^^^^^^^^^
#                                                                      Only matches v3.x!
```

## Impact
- **Missing CVEs:** Any CVE scored with CVSS v4.0 won't appear
- **CVSS v4.0 adoption:** More vendors are using v4.0 (released 2023)
- **Future-proofing:** This will become more common

## Solution Options

### Option 1: Query Both v3 and v4 (Recommended)
Make two API calls:
1. `cvssV3Severity=CRITICAL` (existing)
2. `cvssV4Severity=CRITICAL` (new)

Merge results and deduplicate.

### Option 2: Remove Severity Filter
Query all CVEs in date range, then filter by score in Python:
```python
# Get all CVEs
url = f"{NVD_BASE_URL}?pubStartDate={start_str}&pubEndDate={end_str}"

# Filter in Python
for cve in vulnerabilities:
    score = get_cvss_score(cve)  # Check v3.1, v4.0, v2.0
    if score >= 9.0:
        critical_cves.append(cve)
```

### Option 3: Hybrid Approach
1. Query with v3 severity filter (fast, most CVEs)
2. Query without filter for recent CVEs (catch v4.0)
3. Merge and deduplicate

## Recommended Fix
**Option 1** - Query both v3 and v4 severity:

```python
def fetch_nvd_critical_cves(days=7, max_results=50):
    critical_cves = []
    
    # Fetch CVSS v3.x CRITICAL
    url_v3 = f"{NVD_BASE_URL}?pubStartDate={start_str}&pubEndDate={end_str}&cvssV3Severity=CRITICAL"
    cves_v3 = fetch_from_nvd(url_v3)
    critical_cves.extend(cves_v3)
    
    # Fetch CVSS v4.0 CRITICAL
    url_v4 = f"{NVD_BASE_URL}?pubStartDate={start_str}&pubEndDate={end_str}&cvssV4Severity=CRITICAL"
    cves_v4 = fetch_from_nvd(url_v4)
    critical_cves.extend(cves_v4)
    
    # Deduplicate by CVE ID
    seen = set()
    unique_cves = []
    for cve in critical_cves:
        if cve['cveId'] not in seen:
            seen.add(cve['cveId'])
            unique_cves.append(cve)
    
    return unique_cves[:max_results]
```

## Testing
After fix, verify:
```bash
# Should return CVE-2025-66516
curl "https://services.nvd.nist.gov/rest/json/cves/2.0?pubStartDate=2025-12-04T00:00:00.000&pubEndDate=2025-12-06T23:59:59.999&cvssV4Severity=CRITICAL" | jq '.vulnerabilities[].cve.id'
```

## Articles Published
✅ Apache Tika article published (with CVE-2025-66516 details)
✅ ShadyPanda article published
📊 Total articles: 22

## Next Steps
1. Update `enrich_cve_dual_source.py` to query CVSS v4.0
2. Test with CVE-2025-66516
3. Run workflow to update cve-data.json
4. Verify CVE appears on tracker page
