import os
import glob
import re

def add_lazy_loading(root_dir):
    html_files = []
    html_files.extend(glob.glob(os.path.join(root_dir, '*.html')))
    html_files.extend(glob.glob(os.path.join(root_dir, 'articles', '*.html')))
    html_files.extend(glob.glob(os.path.join(root_dir, 'guides', '*.html')))
    html_files.extend(glob.glob(os.path.join(root_dir, 'comparisons', '*.html')))
    
    # regex to find img tags without loading attributes
    # We should skip logos and hero images, so we'll look for img tags and add loading="lazy" if not present
    
    img_pattern = re.compile(r'<img([^>]+)>', re.IGNORECASE)
    
    for filepath in html_files:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        modified = False
        
        def repl(match):
            attrs = match.group(1)
            # Skip if already has loading=
            if 'loading=' in attrs.lower():
                return match.group(0)
            
            # Skip logos or header images
            if 'logo' in attrs.lower() or 'hero' in attrs.lower() or 'header' in attrs.lower() or 'carbon' in attrs.lower():
                return match.group(0)
            
            # Add loading="lazy"
            return f'<img loading="lazy"{attrs}>'
            
        new_content, num_subs = img_pattern.subn(repl, content)
        
        if num_subs > 0 and new_content != content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Added lazy loading to {num_subs} images in {filepath}")

if __name__ == '__main__':
    add_lazy_loading('/Volumes/Data-Personal/Webpage/thehgtech')
