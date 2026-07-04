import os
import re
from collections import Counter

urls = []
for root, _, files in os.walk('.'):
    if '.git' in root or '.agent' in root or 'node_modules' in root: continue
    for file in files:
        if file.endswith(('.html', '.js', '.css')):
            fpath = os.path.join(root, file)
            try:
                with open(fpath, 'r', encoding='utf-8') as f:
                    content = f.read()
                    matches = re.findall(r'https?://[a-zA-Z0-9.-]+', content)
                    urls.extend(matches)
            except Exception:
                pass

for k, v in Counter(urls).most_common():
    print(f"{v:4} {k}")
