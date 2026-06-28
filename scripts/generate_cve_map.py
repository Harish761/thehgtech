import os
import json
import re

articles_dir = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'articles')
data_dir = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'data')

if not os.path.exists(data_dir):
    os.makedirs(data_dir)

# Pattern to match CVEs (e.g., CVE-2023-1234, CVE-2024-12345)
cve_pattern = re.compile(r'CVE-\d{4}-\d{4,7}')
cve_map = {}

def get_article_title(content):
    title_match = re.search(r'<title>([^<]+)</title>', content)
    if title_match:
        # Strip branding if present
        title = title_match.group(1).split('|')[0].strip()
        return title
    return "Untitled Article"

for fname in os.listdir(articles_dir):
    if not fname.endswith('.html'):
        continue
    
    path = os.path.join(articles_dir, fname)
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    cves_found = set(cve_pattern.findall(content))
    if cves_found:
        title = get_article_title(content)
        url = f"/articles/{fname}"
        
        for cve in cves_found:
            if cve not in cve_map:
                cve_map[cve] = []
            cve_map[cve].append({
                "title": title,
                "url": url
            })

# Remove duplicates if any (though set handles it per file, we might have multiple matches if we expand this later)

out_path = os.path.join(data_dir, 'cve-mentions.json')
with open(out_path, 'w', encoding='utf-8') as f:
    json.dump(cve_map, f, indent=2)

print(f"Generated CVE map for {len(cve_map)} CVEs.")
