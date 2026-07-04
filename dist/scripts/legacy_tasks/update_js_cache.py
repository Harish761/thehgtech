import os
import re

def update_cache_buster():
    count = 0
    for root, _, files in os.walk('.'):
        if '.git' in root or '.agent' in root or 'node_modules' in root: continue
        for file in files:
            if file.endswith('.html'):
                fpath = os.path.join(root, file)
                with open(fpath, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Replace m-app.js?v=* with m-app.js?v=20260528_coffee
                new_content = re.sub(r'src="([^"]*m-app\.js)(?:\?v=[a-zA-Z0-9_\.]+)?([^"]*)"', r'src="\1?v=20260528_coffee\2"', content)
                
                if new_content != content:
                    count += 1
                    with open(fpath, 'w', encoding='utf-8') as f:
                        f.write(new_content)
    print(f"Updated JS cache buster in {count} HTML files.")

update_cache_buster()
