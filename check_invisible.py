import re
with open('index.html', 'rb') as f:
    content = f.read().decode('utf8', errors='replace')

# Find all non-ASCII characters inside <script> tags
scripts = re.findall(r'<script[^>]*>([\s\S]*?)</script>', content)
for i, script in enumerate(scripts):
    if 'application/ld+json' in script: continue
    non_ascii = [c for c in script if ord(c) > 127]
    if non_ascii:
        print(f"Script {i} contains non-ASCII characters: {set(non_ascii)}")
