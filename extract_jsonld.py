import json
import re

with open('articles/delve-ai-compliance-scandal-2026.html', 'r') as f:
    html = f.read()

# Find all JSON-LD scripts
scripts = re.findall(r'<script type="application/ld\+json">(.*?)</script>', html, re.DOTALL)
for i, script in enumerate(scripts):
    print(f"--- JSON-LD Block {i+1} ---")
    try:
        parsed = json.loads(script)
        print(json.dumps(parsed, indent=2))
    except Exception as e:
        print(f"Error parsing JSON: {e}")
        print(script)
