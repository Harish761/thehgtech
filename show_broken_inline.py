import re
with open('index.html') as f:
    html = f.read()
scripts = re.findall(r'<script[^>]*>(.*?)</script>', html, re.DOTALL)
for i in range(4, 10):
    print(f"--- SCRIPT {i} ---")
    script = scripts[i]
    if script.strip():
        print(script.strip()[:200])
        print("...")
