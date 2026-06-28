import os
import re

targets = ['evil.com', 'attacker.com', 'maliciouscorgi.net', 'fake-bank-login.com', 'malicious-phishing-site.com']
for root, _, files in os.walk('.'):
    if '.git' in root or '.agent' in root or 'node_modules' in root: continue
    for file in files:
        if file.endswith(('.html', '.js', '.css')):
            fpath = os.path.join(root, file)
            try:
                with open(fpath, 'r', encoding='utf-8') as f:
                    content = f.read()
                    for t in targets:
                        if t in content:
                            print(f"{fpath} contains {t}")
            except Exception:
                pass
