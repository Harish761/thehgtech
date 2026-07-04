import os
from datetime import datetime

base_dir = '/Volumes/Data-Personal/Webpage/thehgtech'
base_url = 'https://thehgtech.com'
sitemap_path = os.path.join(base_dir, 'sitemap.xml')

def get_html_files(directory):
    html_files = []
    for root, dirs, files in os.walk(directory):
        # Exclude directories
        dirs[:] = [d for d in dirs if not d.startswith('.') and d not in ['node_modules', 'venv', 'mobile_backup']]
        for file in files:
            if file.endswith('.html') and not file.startswith('admin-') and file != '404.html':
                html_files.append(os.path.join(root, file))
    return html_files

html_files = get_html_files(base_dir)

today = datetime.now().strftime('%Y-%m-%d')

sitemap_content = """<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
"""

for file_path in html_files:
    rel_path = os.path.relpath(file_path, base_dir)
    
    # Handle index.html mappings
    if rel_path == 'index.html':
        url_path = '/'
        priority = "1.0"
    elif rel_path.endswith('/index.html'):
        url_path = '/' + rel_path[:-10] # remove index.html
        priority = "0.8"
    else:
        url_path = '/' + rel_path
        priority = "0.8"
        if rel_path.startswith('guides/'):
            priority = "0.9"
        elif rel_path.startswith('articles/'):
            priority = "0.7"
            
    # Use forward slashes
    url_path = url_path.replace('\\', '/')
    
    url = base_url + url_path
    
    sitemap_content += f"""  <url>
    <loc>{url}</loc>
    <lastmod>{today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>{priority}</priority>
  </url>
"""

sitemap_content += "</urlset>"

with open(sitemap_path, 'w') as f:
    f.write(sitemap_content)

print(f"Generated sitemap with {len(html_files)} URLs.")
