#!/usr/bin/env python3
"""
AI Security Data Fetcher
------------------------
Fetches and processes AI-specific threat intelligence from:
  • MITRE ATLAS (AI attack techniques)
  • AI Incident Database (real-world AI incidents)
  • OWASP LLM Top 10 (2025 vulnerabilities)

Designed to integrate with existing fetch_threat_intel.py pipeline.
"""

import os
import json
import re
import time
import requests
from datetime import datetime, timedelta, timezone

try:
    import yaml
    YAML_AVAILABLE = True
except ImportError:
    YAML_AVAILABLE = False
    print("Warning: pyyaml not installed. MITRE ATLAS parsing will use fallback.")

# ──────────────────────────────────────────────────────────────
# Configuration
# ──────────────────────────────────────────────────────────────
IST = timezone(timedelta(hours=5, minutes=30))

AI_DATA_SOURCES = {
    "MITRE ATLAS": {
        "url": "https://raw.githubusercontent.com/mitre-atlas/atlas-data/main/dist/ATLAS.yaml",
        "type": "yaml",
        "retention": None,  # Permanent - knowledge base
        "description": "AI attack techniques and case studies from MITRE",
        "website": "https://atlas.mitre.org/",
        "update_frequency": "Quarterly"
    },
    "AI Incidents": {
        "url": "https://incidentdatabase.ai/api/graphql",
        "type": "graphql",
        "retention": 90,  # 90-day rolling window
        "description": "Real-world AI failures and security incidents",
        "website": "https://incidentdatabase.ai/",
        "update_frequency": "Daily"
    },
    "OWASP LLM": {
        "base_url": "https://raw.githubusercontent.com/OWASP/www-project-top-10-for-large-language-model-applications/main/2_0_vulns/",
        "type": "markdown",
        "retention": None,  # Permanent - reference
        "description": "LLM Top 10 Vulnerabilities 2025",
        "website": "https://owasp.org/www-project-top-10-for-large-language-model-applications/",
        "update_frequency": "Yearly"
    }
}

OWASP_LLM_FILES = [
    ("LLM01", "LLM01_PromptInjection.md", "Prompt Injection"),
    ("LLM02", "LLM02_SensitiveInformationDisclosure.md", "Sensitive Information Disclosure"),
    ("LLM03", "LLM03_SupplyChain.md", "Supply Chain Vulnerabilities"),
    ("LLM04", "LLM04_DataModelPoisoning.md", "Data and Model Poisoning"),
    ("LLM05", "LLM05_ImproperOutputHandling.md", "Improper Output Handling"),
    ("LLM06", "LLM06_ExcessiveAgency.md", "Excessive Agency"),
    ("LLM07", "LLM07_SystemPromptLeakage.md", "System Prompt Leakage"),
    ("LLM08", "LLM08_VectorAndEmbeddingWeaknesses.md", "Vector and Embedding Weaknesses"),
    ("LLM09", "LLM09_Misinformation.md", "Misinformation"),
    ("LLM10", "LLM10_UnboundedConsumption.md", "Unbounded Consumption")
]

def get_ist_now():
    return datetime.now(IST)

# ──────────────────────────────────────────────────────────────
# MITRE ATLAS Fetcher
# ──────────────────────────────────────────────────────────────
def fetch_mitre_atlas():
    """Fetch and parse MITRE ATLAS AI attack techniques"""
    print("  - Fetching MITRE ATLAS...")
    
    try:
        response = requests.get(
            AI_DATA_SOURCES["MITRE ATLAS"]["url"],
            timeout=30,
            headers={'User-Agent': 'TheHGTech-AISecurityTracker/1.0'}
        )
        response.raise_for_status()
        
        if YAML_AVAILABLE:
            atlas_data = yaml.safe_load(response.text)
        else:
            # Fallback: Simple regex extraction
            atlas_data = parse_atlas_fallback(response.text)
        
        # Extract techniques
        techniques = []
        tactics = []
        case_studies = []
        
        if 'matrices' in atlas_data:
            for matrix in atlas_data.get('matrices', []):
                # Extract tactics
                for tactic in matrix.get('tactics', []):
                    tactics.append({
                        'id': tactic.get('id', ''),
                        'name': tactic.get('name', ''),
                        'description': tactic.get('description', '')[:300] + '...' if len(tactic.get('description', '')) > 300 else tactic.get('description', ''),
                        'type': 'tactic'
                    })
                
                # Extract techniques
                for technique in matrix.get('techniques', []):
                    techniques.append({
                        'id': technique.get('id', ''),
                        'name': technique.get('name', ''),
                        'description': technique.get('description', '')[:300] + '...' if len(technique.get('description', '')) > 300 else technique.get('description', ''),
                        'tactic': technique.get('tactic', ''),
                        'type': 'technique',
                        'severity': classify_technique_severity(technique.get('name', ''))
                    })
        
        # Extract case studies if available
        for study in atlas_data.get('case-studies', []):
            case_studies.append({
                'id': study.get('id', ''),
                'name': study.get('name', ''),
                'summary': study.get('summary', '')[:200] + '...' if len(study.get('summary', '')) > 200 else study.get('summary', ''),
                'techniques': study.get('techniques', [])
            })
        
        print(f"    ✓ Got {len(tactics)} tactics, {len(techniques)} techniques, {len(case_studies)} case studies")
        
        return {
            'version': atlas_data.get('version', 'unknown'),
            'name': atlas_data.get('name', 'MITRE ATLAS'),
            'tactics': tactics,
            'techniques': techniques,
            'caseStudies': case_studies,
            'stats': {
                'totalTactics': len(tactics),
                'totalTechniques': len(techniques),
                'totalCaseStudies': len(case_studies)
            },
            'lastUpdated': get_ist_now().isoformat()
        }
        
    except Exception as e:
        print(f"    ✗ Failed to fetch MITRE ATLAS: {e}")
        return None

def parse_atlas_fallback(yaml_text):
    """Fallback parser if pyyaml not available"""
    # Basic extraction using regex
    data = {'matrices': [{'tactics': [], 'techniques': []}], 'case-studies': []}
    
    # Extract version
    version_match = re.search(r'version:\s*([^\n]+)', yaml_text)
    if version_match:
        data['version'] = version_match.group(1).strip()
    
    # Extract tactic names and IDs
    tactic_matches = re.findall(r'id:\s*(AML\.TA\d+)\s*\n\s*name:\s*([^\n]+)', yaml_text)
    for tac_id, tac_name in tactic_matches:
        data['matrices'][0]['tactics'].append({
            'id': tac_id.strip(),
            'name': tac_name.strip(),
            'description': ''
        })
    
    # Extract technique names
    technique_matches = re.findall(r'id:\s*(AML\.T\d+)\s*\n\s*name:\s*([^\n]+)', yaml_text)
    for tech_id, tech_name in technique_matches:
        data['matrices'][0]['techniques'].append({
            'id': tech_id.strip(),
            'name': tech_name.strip(),
            'description': ''
        })
    
    return data

def classify_technique_severity(name):
    """Classify technique severity based on name"""
    high_severity = ['injection', 'poison', 'exfiltration', 'manipulation', 'evasion', 'bypass']
    medium_severity = ['reconnaissance', 'discovery', 'collection']
    
    name_lower = name.lower()
    if any(keyword in name_lower for keyword in high_severity):
        return 'high'
    elif any(keyword in name_lower for keyword in medium_severity):
        return 'medium'
    return 'low'

# ──────────────────────────────────────────────────────────────
# AI Incident Database Fetcher
# ──────────────────────────────────────────────────────────────
def fetch_aiid_incidents():
    """Fetch AI incidents from AIID GraphQL API"""
    print("  - Fetching AI Incident Database...")
    
    # GraphQL query to get all incidents
    query = """
    query {
        incidents {
            incident_id
            title
            date_modified
        }
    }
    """
    
    try:
        response = requests.post(
            AI_DATA_SOURCES["AI Incidents"]["url"],
            json={"query": query},
            headers={
                'Content-Type': 'application/json',
                'User-Agent': 'TheHGTech-AISecurityTracker/1.0'
            },
            timeout=60
        )
        response.raise_for_status()
        
        data = response.json()
        
        if 'errors' in data:
            print(f"    ⚠ GraphQL errors: {data['errors']}")
            return None
        
        incidents = data.get('data', {}).get('incidents', [])
        
        # Filter to last 90 days
        now = get_ist_now()
        cutoff = now - timedelta(days=90)
        
        recent_incidents = []
        for incident in incidents:
            try:
                date_str = incident.get('date_modified', '')
                if date_str:
                    incident_date = datetime.fromisoformat(date_str.replace('Z', '+00:00'))
                    if incident_date >= cutoff:
                        recent_incidents.append({
                            'id': f"AIID-{incident.get('incident_id', 0)}",
                            'incident_id': incident.get('incident_id'),
                            'title': incident.get('title', '')[:100],
                            'date': incident_date.strftime('%Y-%m-%d'),
                            'category': categorize_incident(incident.get('title', '')),
                            'severity': classify_incident_severity(incident.get('title', ''))
                        })
            except Exception as e:
                continue
        
        # Sort by date (newest first)
        recent_incidents.sort(key=lambda x: x['date'], reverse=True)
        
        print(f"    ✓ Got {len(recent_incidents)} incidents (last 90 days)")
        
        return {
            'incidents': recent_incidents,
            'stats': {
                'total': len(recent_incidents),
                'last7Days': len([i for i in recent_incidents if is_within_days(i['date'], 7)]),
                'last30Days': len([i for i in recent_incidents if is_within_days(i['date'], 30)])
            },
            'lastUpdated': get_ist_now().isoformat()
        }
        
    except Exception as e:
        print(f"    ✗ Failed to fetch AIID: {e}")
        return None

def categorize_incident(title):
    """Categorize incident based on title keywords"""
    title_lower = title.lower()
    
    categories = {
        'deepfake': ['deepfake', 'synthetic', 'fake video', 'face swap'],
        'prompt_injection': ['prompt', 'injection', 'jailbreak', 'bypass'],
        'data_leak': ['leak', 'exposure', 'disclosed', 'breach'],
        'misinformation': ['misinformation', 'false', 'fabricated', 'hallucination'],
        'bias': ['bias', 'discriminat', 'unfair', 'racial'],
        'autonomous_vehicle': ['waymo', 'tesla', 'autonomous', 'self-driving'],
        'content_moderation': ['moderation', 'harmful', 'inappropriate'],
        'fraud': ['fraud', 'scam', 'impersonat']
    }
    
    for category, keywords in categories.items():
        if any(kw in title_lower for kw in keywords):
            return category
    
    return 'other'

def classify_incident_severity(title):
    """Classify incident severity based on title"""
    title_lower = title.lower()
    
    critical_keywords = ['death', 'killed', 'million', 'breach', 'criminal']
    high_keywords = ['fraud', 'scam', 'leak', 'exploit', 'lawsuit', 'sued']
    
    if any(kw in title_lower for kw in critical_keywords):
        return 'critical'
    elif any(kw in title_lower for kw in high_keywords):
        return 'high'
    return 'medium'

def is_within_days(date_str, days):
    """Check if date is within N days of now"""
    try:
        date = datetime.strptime(date_str, '%Y-%m-%d').replace(tzinfo=IST)
        return (get_ist_now() - date).days <= days
    except:
        return False

# ──────────────────────────────────────────────────────────────
# OWASP LLM Top 10 Fetcher
# ──────────────────────────────────────────────────────────────
def fetch_owasp_llm():
    """Fetch OWASP LLM Top 10 2025 vulnerabilities"""
    print("  - Fetching OWASP LLM Top 10...")
    
    base_url = AI_DATA_SOURCES["OWASP LLM"]["base_url"]
    vulnerabilities = []
    
    for rank, (vuln_id, filename, name) in enumerate(OWASP_LLM_FILES, 1):
        try:
            url = f"{base_url}{filename}"
            response = requests.get(
                url,
                timeout=15,
                headers={'User-Agent': 'TheHGTech-AISecurityTracker/1.0'}
            )
            
            if response.status_code == 200:
                content = response.text
                
                # Extract description (first paragraph after ## Description)
                desc_match = re.search(r'### Description\n\n(.+?)(?=\n\n###|\n\n##|$)', content, re.DOTALL)
                description = desc_match.group(1).strip()[:300] + '...' if desc_match else ''
                
                # Extract prevention strategies count
                prevention_count = content.count('####')
                
                vulnerabilities.append({
                    'rank': rank,
                    'id': vuln_id,
                    'name': name,
                    'description': description,
                    'severity': 'critical' if rank <= 3 else 'high' if rank <= 6 else 'medium',
                    'preventionStrategies': prevention_count,
                    'sourceUrl': f"https://github.com/OWASP/www-project-top-10-for-large-language-model-applications/blob/main/2_0_vulns/{filename}"
                })
                
            time.sleep(0.5)  # Rate limiting
            
        except Exception as e:
            print(f"    ⚠ Failed to fetch {filename}: {e}")
            vulnerabilities.append({
                'rank': rank,
                'id': vuln_id,
                'name': name,
                'description': 'Description not available',
                'severity': 'high',
                'preventionStrategies': 0,
                'sourceUrl': ''
            })
    
    print(f"    ✓ Got {len(vulnerabilities)} vulnerabilities")
    
    return {
        'version': '2.0',
        'year': 2025,
        'vulnerabilities': vulnerabilities,
        'stats': {
            'total': len(vulnerabilities),
            'critical': len([v for v in vulnerabilities if v['severity'] == 'critical']),
            'high': len([v for v in vulnerabilities if v['severity'] == 'high'])
        },
        'lastUpdated': get_ist_now().isoformat()
    }

# ──────────────────────────────────────────────────────────────
# Top Threats Detection
# ──────────────────────────────────────────────────────────────
def generate_top_threats(ioc_campaigns, ai_data):
    """Generate unified top threats from all sources"""
    threats = []
    now = get_ist_now()
    
    # 1. Add trending IOC campaigns
    if ioc_campaigns:
        for campaign_name, campaign_data in list(ioc_campaigns.items())[:5]:
            score = min(campaign_data.get('count', 0) * 2, 200)
            threats.append({
                'type': 'campaign',
                'name': campaign_name,
                'score': score,
                'source': campaign_data.get('primary_source', 'Multiple'),
                'details': f"{campaign_data.get('count', 0)} IOCs detected",
                'icon': 'virus',
                'color': '#ff4c4c'
            })
    
    # 2. Add recent AI incidents
    if ai_data.get('aiid'):
        for incident in ai_data['aiid'].get('incidents', [])[:3]:
            severity_score = {'critical': 150, 'high': 100, 'medium': 50}.get(incident.get('severity', 'medium'), 50)
            threats.append({
                'type': 'ai_incident',
                'name': incident['title'],
                'score': severity_score,
                'source': 'AIID',
                'details': incident['date'],
                'icon': 'robot',
                'color': '#9d4edd'
            })
    
    # 3. Add trending ATLAS techniques (based on incident mentions)
    if ai_data.get('atlas'):
        # Prompt Injection is always trending
        threats.append({
            'type': 'ai_technique',
            'name': 'AML.T0051: LLM Prompt Injection',
            'score': 180,
            'source': 'MITRE ATLAS',
            'details': 'Most exploited AI attack technique',
            'icon': 'crosshairs',
            'color': '#ff9500'
        })
    
    # Sort by score and return top 5
    threats.sort(key=lambda x: x['score'], reverse=True)
    
    top_threats = []
    for i, threat in enumerate(threats[:5], 1):
        severity = 'critical' if threat['score'] >= 150 else 'high' if threat['score'] >= 100 else 'medium'
        top_threats.append({
            'rank': i,
            'type': threat['type'],
            'name': threat['name'][:60] + ('...' if len(threat['name']) > 60 else ''),
            'severity': severity,
            'source': threat['source'],
            'details': threat['details'],
            'icon': threat['icon'],
            'color': threat['color']
        })
    
    return top_threats

# ──────────────────────────────────────────────────────────────
# Main Functions
# ──────────────────────────────────────────────────────────────
def fetch_all_ai_data():
    """Fetch data from all AI security sources"""
    print("\n[AI Security Data Fetch]")
    print("=" * 60)
    
    ai_data = {}
    
    # Fetch MITRE ATLAS
    atlas = fetch_mitre_atlas()
    if atlas:
        ai_data['atlas'] = atlas
    
    time.sleep(1)
    
    # Fetch AIID
    aiid = fetch_aiid_incidents()
    if aiid:
        ai_data['aiid'] = aiid
    
    time.sleep(1)
    
    # Fetch OWASP LLM
    owasp = fetch_owasp_llm()
    if owasp:
        ai_data['owasp'] = owasp
    
    # Calculate combined stats
    ai_data['stats'] = {
        'totalTechniques': atlas['stats']['totalTechniques'] if atlas else 0,
        'totalIncidents': aiid['stats']['total'] if aiid else 0,
        'incidentsLast7Days': aiid['stats']['last7Days'] if aiid else 0,
        'owaspVersion': owasp['version'] if owasp else 'N/A'
    }
    
    ai_data['lastUpdated'] = get_ist_now().isoformat()
    
    print("=" * 60)
    print(f"✓ AI Security data fetch complete")
    
    return ai_data

def save_ai_data(ai_data, output_dir='ioc-data'):
    """Save AI data to JSON files"""
    os.makedirs(output_dir, exist_ok=True)
    
    if ai_data.get('atlas'):
        with open(f'{output_dir}/mitre-atlas.json', 'w') as f:
            json.dump(ai_data['atlas'], f, indent=2)
        print(f"  ✓ Saved {output_dir}/mitre-atlas.json")
    
    if ai_data.get('aiid'):
        with open(f'{output_dir}/aiid-incidents.json', 'w') as f:
            json.dump(ai_data['aiid'], f, indent=2)
        print(f"  ✓ Saved {output_dir}/aiid-incidents.json")
    
    if ai_data.get('owasp'):
        with open(f'{output_dir}/owasp-llm-top10.json', 'w') as f:
            json.dump(ai_data['owasp'], f, indent=2)
        print(f"  ✓ Saved {output_dir}/owasp-llm-top10.json")

def load_ai_data(input_dir='ioc-data'):
    """Load existing AI data from JSON files"""
    ai_data = {}
    
    try:
        with open(f'{input_dir}/mitre-atlas.json', 'r') as f:
            ai_data['atlas'] = json.load(f)
    except:
        pass
    
    try:
        with open(f'{input_dir}/aiid-incidents.json', 'r') as f:
            ai_data['aiid'] = json.load(f)
    except:
        pass
    
    try:
        with open(f'{input_dir}/owasp-llm-top10.json', 'r') as f:
            ai_data['owasp'] = json.load(f)
    except:
        pass
    
    return ai_data

# ──────────────────────────────────────────────────────────────
# CLI Entry Point
# ──────────────────────────────────────────────────────────────
if __name__ == '__main__':
    import argparse
    
    parser = argparse.ArgumentParser(description='Fetch AI Security Data')
    parser.add_argument('--output', default='ioc-data', help='Output directory')
    args = parser.parse_args()
    
    ai_data = fetch_all_ai_data()
    save_ai_data(ai_data, args.output)
    
    print("\n✓ All AI security data saved!")
