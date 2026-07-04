import os
import re
from urllib.parse import urlparse

base_dir = '/Volumes/Data-Personal/Webpage/thehgtech'

html_files = []
for root, dirs, files in os.walk(base_dir):
    dirs[:] = [d for d in dirs if not d.startswith('.') and d not in ['node_modules', 'venv', 'mobile_backup']]
    for file in files:
        if file.endswith('.html'):
            html_files.append(os.path.join(root, file))

broken_links = []
href_pattern = re.compile(r'href=["\'](.*?)["\']', re.IGNORECASE)
src_pattern = re.compile(r'src=["\'](.*?)["\']', re.IGNORECASE)

for file_path in html_files:
    with open(file_path, 'r') as f:
        try:
            content = f.read()
        except:
            continue
            
    # check links
    links = href_pattern.findall(content) + src_pattern.findall(content)
    for href in links:
        # Ignore external, mailto, tel, anchor, javascript, data
        if href.startswith(('http://', 'https://', 'mailto:', 'tel:', '#', 'javascript:', 'data:', '<?')):
            continue
            
        if href == '':
            # broken_links.append((file_path, href, 'Empty link'))
            continue
            
        # Strip query string and fragments
        parsed = urlparse(href)
        path = parsed.path
        
        if not path:
            continue
            
        # Resolve path
        if path.startswith('/'):
            target_path = os.path.join(base_dir, path.lstrip('/'))
        else:
            target_path = os.path.normpath(os.path.join(os.path.dirname(file_path), path))
            
        if os.path.isdir(target_path):
            target_path = os.path.join(target_path, 'index.html')
            
        if not os.path.exists(target_path) and not path.startswith(('articles/page/', '/articles/page/')):
            broken_links.append((file_path, href, f'File not found: {target_path}'))

print(f"Checked {len(html_files)} HTML files for broken internal links.")
# Deduplicate
broken_links = list(set(broken_links))
broken_links.sort()
for link in broken_links[:30]:
    rel_file = os.path.relpath(link[0], base_dir)
    print(f"{rel_file}: {link[1]}")
if len(broken_links) > 30:
    print(f"... and {len(broken_links) - 30} more.")
if not broken_links:
    print("No broken internal links found!")
