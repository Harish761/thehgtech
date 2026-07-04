import os
import glob

replacements = {
    'cve-display.js': 'cve-display.min.js',
    'm-app.js': 'm-app.min.js',
    'news-timeline.js': 'news-timeline.min.js',
    'visual-enhancements.js': 'visual-enhancements.min.js',
    'interaction-bar.js': 'interaction-bar.min.js',
    'article-loader.js': 'article-loader.min.js',
    'article-modal.js': 'article-modal.min.js',
    'rotating-text.js': 'rotating-text.min.js',
    
    'cve-display.css': 'cve-display.min.css',
    'm-core.css': 'm-core.min.css',
    'm-layout.css': 'm-layout.min.css',
    'm-components.css': 'm-components.min.css',
    'design-system.css': 'design-system.min.css',
    'quick-wins.css': 'quick-wins.min.css',
    'news-timeline.css': 'news-timeline.min.css',
    'ransomware-display.css': 'ransomware-display.min.css',
    'header-dropdown.css': 'header-dropdown.min.css',
    'article-links-fix.css': 'article-links-fix.min.css',
    'rotating-text.css': 'rotating-text.min.css'
}

def update_html_files(root_dir):
    html_files = []
    html_files.extend(glob.glob(os.path.join(root_dir, '*.html')))
    html_files.extend(glob.glob(os.path.join(root_dir, 'articles', '*.html')))
    html_files.extend(glob.glob(os.path.join(root_dir, 'guides', '*.html')))
    html_files.extend(glob.glob(os.path.join(root_dir, 'comparisons', '*.html')))
    
    for filepath in html_files:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        modified = False
        for old, new in replacements.items():
            for prefix in ['"', '"/', "'", "'/"]:
                if f'href={prefix}{old}' in content or f'src={prefix}{old}' in content:
                    content = content.replace(f'href={prefix}{old}', f'href={prefix}{new}')
                    content = content.replace(f'src={prefix}{old}', f'src={prefix}{new}')
                    modified = True
                
            if f"'{old}'" in content or f'"{old}"' in content or f"'/{old}'" in content or f'"/{old}"' in content:
                content = content.replace(f"'{old}'", f"'{new}'")
                content = content.replace(f'"{old}"', f'"{new}"')
                content = content.replace(f"'/{old}'", f"'/{new}'")
                content = content.replace(f'"/{old}"', f'"/{new}"')
                modified = True

        if modified:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Updated {filepath}")

if __name__ == '__main__':
    update_html_files('/Volumes/Data-Personal/Webpage/thehgtech')
