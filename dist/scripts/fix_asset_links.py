import os
import re

base_dir = '/Volumes/Data-Personal/Webpage/thehgtech'

directories = [
    os.path.join(base_dir, 'articles'),
    os.path.join(base_dir, 'guides')
]

# Assets that are known to exist at root and are linked relatively
assets_to_fix = [
    'light-mode.css',
    'm-app.min.js',
    'm-components.min.css',
    'm-core.min.css',
    'm-layout.min.css',
    'mobile-nav.css',
    'mobile-nav.js',
    'ui-enhancements.css',
    'ui-enhancements.js',
    'nav-loader.js',
    'article-links-fix.min.css',
    'header-dropdown.min.css',
    'header.css'
]

# Patterns for src="xxx" and href="xxx"
# We'll use a regex that handles potential query params like ?v=3.5
def replace_links(content):
    for asset in assets_to_fix:
        # e.g. href="light-mode.css" -> href="/light-mode.css"
        # We use a regex to only match exactly "asset..." or 'asset...' not already prefixed with /
        pattern = r'(href|src)=([\'"])(?!/|http|https)(' + re.escape(asset) + r'[^a-zA-Z0-9_\-\.\/]*.*?)([\'"])'
        
        # Replace function to prepend /
        def replacer(match):
            return f'{match.group(1)}={match.group(2)}/{match.group(3)}{match.group(4)}'
            
        content = re.sub(pattern, replacer, content)
        
    return content

count = 0
for directory in directories:
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.html'):
                file_path = os.path.join(root, file)
                
                with open(file_path, 'r') as f:
                    content = f.read()
                    
                new_content = replace_links(content)
                
                if new_content != content:
                    with open(file_path, 'w') as f:
                        f.write(new_content)
                    count += 1

print(f"Fixed asset links in {count} HTML files.")
