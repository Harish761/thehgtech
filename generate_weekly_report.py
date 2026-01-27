import json
import os
import datetime
from collections import Counter
import glob

# Configuration
IOC_DATA_DIR = 'ioc-data'
ARTICLES_FILE = 'articles.json'
AUTHOR = "TheHGTech Bot"

def load_json_file(filepath):
    """Load JSON data from file"""
    if not os.path.exists(filepath):
        return []
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            return json.load(f)
    except Exception as e:
        print(f"Error loading {filepath}: {e}")
        return []

def get_top_malware_families(limit=10):
    """Get top malware families from ThreatFox and URLhaus"""
    families = []
    
    # ThreatFox
    threatfox_data = load_json_file(os.path.join(IOC_DATA_DIR, 'threatfox.json'))
    if isinstance(threatfox_data, dict) and 'iocs' in threatfox_data:
        threatfox_data = threatfox_data['iocs']
        
    for item in threatfox_data:
        if 'tags' in item:
            # Tags often contain family names
            families.extend(item['tags'])
        if 'malware_printable' in item: # ThreatFox specific
             families.append(item['malware_printable'])

    # URLhaus
    urlhaus_data = load_json_file(os.path.join(IOC_DATA_DIR, 'urlhaus.json'))
    if isinstance(urlhaus_data, dict) and 'iocs' in urlhaus_data:
        urlhaus_data = urlhaus_data['iocs']
        
    for item in urlhaus_data:
        if 'tags' in item:
            families.extend(item['tags'])
            
    # Filter out generic tags
    generic_tags = ['malware', 'url', 'exe', 'elf', 'zip', 'dll', 'doc', 'docx', 'xls', 'xlsx', 'apk', 'unknown', 'hash', 'botnet', 'c2', 'banking-trojan', 'ssl', 'certificate', 'ip-address']
    filtered_families = [f for f in families if f.lower() not in generic_tags and len(f) > 2]
    
    return Counter(filtered_families).most_common(limit)

def get_botnet_c2_stats():
    """Get Botnet C2 stats from Feodo Tracker"""
    feodo_data = load_json_file(os.path.join(IOC_DATA_DIR, 'feodo-tracker.json'))
    if isinstance(feodo_data, dict) and 'iocs' in feodo_data:
        feodo_data = feodo_data['iocs']
        
    families = []
    for item in feodo_data:
        if 'malware' in item:
            families.append(item['malware'])
        elif 'tags' in item:
             families.extend(item['tags'])
    
    # Filter generic tags
    generic_tags = ['botnet', 'c2', 'banking-trojan', 'malware', 'ip-address']
    filtered_families = [f for f in families if f.lower() not in generic_tags]
             
    return Counter(filtered_families).most_common(5)

def get_ssl_stats():
    """Get SSL Blacklist stats"""
    ssl_data = load_json_file(os.path.join(IOC_DATA_DIR, 'ssl-blacklist.json'))
    if isinstance(ssl_data, dict) and 'iocs' in ssl_data:
        ssl_data = ssl_data['iocs']
        
    reasons = []
    for item in ssl_data:
        if 'listing_reason' in item:
            reasons.append(item['listing_reason'])
        elif 'tags' in item:
             reasons.extend(item['tags'])
    
    # Filter generic tags
    generic_tags = ['ssl', 'certificate', 'c2', 'botnet', 'malware']
    filtered_reasons = [r for r in reasons if r.lower() not in generic_tags]
             
    return len(ssl_data), Counter(filtered_reasons).most_common(5)

def generate_html_content(date_str, top_families, botnet_stats, ssl_count, ssl_reasons):
    """Generate HTML content for the article"""
    
    html = f"""<article>
  <header>
    <h1>Weekly Threat Intelligence Report: {date_str}</h1>
    <p><strong>Author:</strong> {AUTHOR}</p>
    <p><strong>Published:</strong> {date_str}</p>
  </header>

  <p>Welcome to TheHGTech's weekly threat intelligence summary. This report analyzes data from our automated threat feeds, including URLhaus, ThreatFox, Feodo Tracker, and SSL Blacklist, to highlight the most active threats in the wild over the past week.</p>

  <h2>🚨 Top Active Malware Families</h2>
  <p>Based on our analysis of thousands of IOCs, these are the most active malware families currently being distributed:</p>
  <ul>"""
    
    for family, count in top_families:
        html += f"\n    <li><strong>{family}:</strong> {count} detections</li>"
        
    html += """
  </ul>
  <p>Organizations should prioritize detection logic for these families, as they represent the highest volume of current attacks.</p>

  <h2>🤖 Botnet C2 Infrastructure</h2>
  <p>Feodo Tracker has identified active Command & Control (C2) servers for the following botnets:</p>
  <ul>"""
  
    for family, count in botnet_stats:
        html += f"\n    <li><strong>{family}:</strong> {count} active C2s</li>"

    html += f"""
  </ul>
  <p>Blocking these IPs at the perimeter is a critical defense against botnet command execution.</p>

  <h2>🔒 Malicious SSL Certificates</h2>
  <p>We are currently tracking <strong>{ssl_count}</strong> malicious SSL certificates. These certificates are often used to encrypt C2 traffic or host phishing sites.</p>
  <p>Top associated threats:</p>
  <ul>"""

    for reason, count in ssl_reasons:
        html += f"\n    <li><strong>{reason}:</strong> {count} certificates</li>"

    html += """
  </ul>

  <h2>🛡️ Recommendations</h2>
  <ol>
    <li><strong>Update Blocklists:</strong> Ensure your firewalls and proxies are ingesting the latest IOCs from our feeds.</li>
    <li><strong>Patch Priority:</strong> Focus on vulnerabilities exploited by the top malware families listed above.</li>
    <li><strong>User Awareness:</strong> Warn employees about the current phishing themes associated with these campaigns.</li>
  </ol>

  <p><em>Data generated automatically by TheHGTech Threat Intel Platform.</em></p>
</article>"""

    return html

def update_articles_json(article_obj):
    """Append new article to articles.json"""
    try:
        with open(ARTICLES_FILE, 'r', encoding='utf-8') as f:
            data = json.load(f)
        
        # Prepend to list (newest first)
        data['articles'].insert(0, article_obj)
        
        with open(ARTICLES_FILE, 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
            
        print(f"Successfully added article: {article_obj['title']}")
        return True
    except Exception as e:
        print(f"Error updating articles.json: {e}")
        return False

def main():
    today = datetime.date.today()
    date_str = today.strftime("%B %d, %Y")
    
    print("Generating Weekly Threat Report...")
    
    # 1. Gather Stats
    top_families = get_top_malware_families()
    botnet_stats = get_botnet_c2_stats()
    ssl_count, ssl_reasons = get_ssl_stats()
    
    # 2. Generate Content
    html_content = generate_html_content(date_str, top_families, botnet_stats, ssl_count, ssl_reasons)
    
    # 3. Create Article Object
    article_id = f"report-{today.strftime('%Y%m%d')}"
    article = {
        "id": article_id,
        "title": f"Weekly Threat Report: {date_str}",
        "date": date_str,
        "category": "Threat Intelligence",
        "badge": "WEEKLY",
        "image": "images/articles/weekly-threat-report-generic.png",
        "excerpt": f"Weekly analysis of top malware families, botnets, and SSL threats. Top threat: {top_families[0][0] if top_families else 'Unknown'}.",
        "content": html_content,
        "tags": ["Threat Report", "Malware", "Botnet", "Statistics", "Automated"],
        "author": AUTHOR
    }
    
    # 4. Save
    update_articles_json(article)

if __name__ == "__main__":
    main()
