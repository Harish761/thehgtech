import json
import re
from pathlib import Path

repo_root = Path(__file__).resolve().parent.parent

# 1. Update ioc-data/articles.json
articles_json_path = repo_root / 'ioc-data' / 'articles.json'
with open(articles_json_path, 'r', encoding='utf-8') as f:
    art_data = json.load(f)

articles = art_data.get('articles', [])
url_map = {
    '7zip-critical-vulnerability': 'articles/7zip-critical-vulnerability.html',
    'article-barts-health-nhs-clop-breach': 'articles/article-barts-health-nhs-breach.html',
    'article-coupang-breach-33m-users': 'articles/article-coupang-breach-2025.html',
    'article-gentlemen-ransomware-2025': 'articles/gentlemen-ransomware-threat-2025.html',
    'github-cisa-leaks-2026': 'articles/article-github-cisa-leaks-2026.html',
}

cleaned_articles = []
seen_ids = set()

for a in articles:
    aid = a.get('id')
    if aid == 'article-coupang-breach':
        # Remove duplicate coupang entry; article-coupang-breach-33m-users is canonical
        continue
    if aid in seen_ids:
        continue
    seen_ids.add(aid)

    if aid in url_map:
        a['externalUrl'] = url_map[aid]
    elif a.get('externalUrl') == 'article-github-cisa-leaks-2026.html':
        a['externalUrl'] = 'articles/article-github-cisa-leaks-2026.html'

    cleaned_articles.append(a)

art_data['articles'] = cleaned_articles

with open(articles_json_path, 'w', encoding='utf-8') as f:
    json.dump(art_data, f, indent=2, ensure_ascii=False)
print(f"Updated {articles_json_path}: {len(cleaned_articles)} articles retained.")

# 2. Update guides/guides.json
guides_json_path = repo_root / 'guides' / 'guides.json'
with open(guides_json_path, 'r', encoding='utf-8') as f:
    guides_data = json.load(f)

guides_list = guides_data.get('guides', guides_data)
existing_guide_ids = {g.get('id') for g in guides_list}

new_guides_to_add = [
    {
        "id": "cisa-kev-tracker",
        "title": "CISA KEV Tracker: Actively Exploited Vulnerabilities Guide",
        "category": "Vulnerability Management",
        "excerpt": "Learn how to effectively track and respond to CISA Known Exploited Vulnerabilities (KEV) catalog with automated monitoring and risk-based patching.",
        "readTime": "15 min",
        "level": "Intermediate",
        "date": "2025-01-15",
        "badge": "Popular",
        "featured": False,
        "image": "/images/guides/default-guide.png"
    },
    {
        "id": "insider-threat-detection",
        "title": "Insider Threat Detection: Complete Program Guide",
        "category": "Security Operations",
        "excerpt": "Build a comprehensive insider threat detection program with behavioral analytics, monitoring, and response procedures to mitigate data theft and unauthorized access.",
        "readTime": "20 min",
        "level": "Advanced",
        "date": "2025-01-10",
        "badge": "Comprehensive",
        "featured": False,
        "image": "/images/insider_threat_framework.png"
    },
    {
        "id": "malware-hash-analysis",
        "title": "Malware Hash Analysis: Complete Investigation Guide",
        "category": "Threat Intelligence",
        "excerpt": "Learn how to search and analyze malware hashes using threat intelligence databases, sandbox environments, and automated lookup pipelines.",
        "readTime": "15 min",
        "level": "Intermediate",
        "date": "2025-01-12",
        "badge": "Hands-On",
        "featured": False,
        "image": "/images/guides/default-guide.png"
    },
    {
        "id": "network-segmentation-zero-trust",
        "title": "Zero Trust Network Segmentation: Complete Implementation Guide",
        "category": "Network Security",
        "excerpt": "Complete guide to implementing network segmentation in Zero Trust environments with micro-segmentation architectures and policy enforcement.",
        "readTime": "22 min",
        "level": "Advanced",
        "date": "2025-01-08",
        "badge": "Architecture",
        "featured": False,
        "image": "/images/guides/network-segmentation-zero-trust.png"
    },
    {
        "id": "openphish-integration",
        "title": "OpenPhish Integration Guide: Free Phishing Feed Automation",
        "category": "Threat Intelligence",
        "excerpt": "Learn how to integrate OpenPhish feeds into your security infrastructure to automatically detect and block emerging credential harvesting domains.",
        "readTime": "12 min",
        "level": "Beginner",
        "date": "2025-01-05",
        "badge": "Integration",
        "featured": False,
        "image": "/images/guides/default-guide.png"
    },
    {
        "id": "siem-log-analysis",
        "title": "SIEM Log Analysis: Complete Beginner's Guide",
        "category": "Security Operations",
        "excerpt": "Master SIEM log analysis with practical queries, correlation techniques, and alert triage playbooks for modern security operations centers.",
        "readTime": "18 min",
        "level": "Beginner",
        "date": "2025-01-07",
        "badge": "Foundational",
        "featured": False,
        "image": "/images/guides/default-guide.png"
    },
    {
        "id": "threat-intelligence-feeds-comparison",
        "title": "Threat Intelligence Feeds Comparison: Open-Source vs Commercial",
        "category": "Threat Intelligence",
        "excerpt": "Compare top threat intelligence feeds, evaluate data quality and freshness, and choose the right TI sources for your organization's threat profile.",
        "readTime": "16 min",
        "level": "Intermediate",
        "date": "2025-01-14",
        "badge": "Comparison",
        "featured": False,
        "image": "/images/guides/threat-intelligence-feeds-integration.png"
    },
    {
        "id": "threat-intelligence-soc",
        "title": "Threat Intelligence for SOC Analysts: Practical Integration Guide",
        "category": "Security Operations",
        "excerpt": "Complete guide to leveraging threat intelligence feeds for security operations, alert enrichment, and rapid incident response.",
        "readTime": "20 min",
        "level": "Intermediate",
        "date": "2025-01-11",
        "badge": "Playbook",
        "featured": False,
        "image": "/images/guides/threat-intelligence-feeds-integration.png"
    },
    {
        "id": "zero-day-detection",
        "title": "Zero-Day Detection: Methods & Defense Architecture",
        "category": "Vulnerability Management",
        "excerpt": "Technical guide on detecting and responding to zero-day vulnerabilities using behavioral anomaly detection, honeypots, and virtual patching.",
        "readTime": "25 min",
        "level": "Advanced",
        "date": "2025-01-09",
        "badge": "Deep Dive",
        "featured": False,
        "image": "/images/guides/default-guide.png"
    }
]

added_guides = 0
for ng in new_guides_to_add:
    if ng['id'] not in existing_guide_ids:
        guides_list.append(ng)
        existing_guide_ids.add(ng['id'])
        added_guides += 1

guides_data['guides'] = guides_list
with open(guides_json_path, 'w', encoding='utf-8') as f:
    json.dump(guides_data, f, indent=2, ensure_ascii=False)
print(f"Updated {guides_json_path}: added {added_guides} missing guides. Total: {len(guides_list)}")

# 3. Fix link in guides/insider-threat-detection.html
insider_html_path = repo_root / 'guides' / 'insider-threat-detection.html'
if insider_html_path.exists():
    insider_content = insider_html_path.read_text(encoding='utf-8')
    if '/articles.html?id=article-coupang-breach' in insider_content:
        insider_content = insider_content.replace(
            '/articles.html?id=article-coupang-breach',
            '/articles/article-coupang-breach-2025.html'
        )
        insider_html_path.write_text(insider_content, encoding='utf-8')
        print("Updated link in guides/insider-threat-detection.html")
