import os
import glob
from PIL import Image

def convert_pngs_to_webp(root_dir):
    png_files = []
    # Search for all PNGs in images directory and its subdirectories
    for root, dirs, files in os.walk(os.path.join(root_dir, 'images')):
        for file in files:
            if file.lower().endswith('.png'):
                png_files.append(os.path.join(root, file))

    converted_files = {}

    for png_path in png_files:
        try:
            size_kb = os.path.getsize(png_path) / 1024
            if size_kb > 500:  # Only convert if > 500KB
                webp_path = os.path.splitext(png_path)[0] + '.webp'
                
                # Check if webp already exists
                if not os.path.exists(webp_path):
                    with Image.open(png_path) as img:
                        # Convert to RGB if RGBA because WebP supports RGBA natively but sometimes there are issues.
                        # Wait, WebP DOES support alpha. Let's just save.
                        img.save(webp_path, 'webp', quality=85)
                        
                    new_size_kb = os.path.getsize(webp_path) / 1024
                    print(f"Converted {os.path.basename(png_path)} ({size_kb:.1f}KB) -> {os.path.basename(webp_path)} ({new_size_kb:.1f}KB)")
                    
                    # Store mapping (relative to root)
                    old_rel = os.path.relpath(png_path, root_dir)
                    new_rel = os.path.relpath(webp_path, root_dir)
                    
                    # Also store the basename in case it's referenced directly
                    converted_files[os.path.basename(png_path)] = os.path.basename(webp_path)
        except Exception as e:
            print(f"Failed to convert {png_path}: {e}")

    # Now replace references in HTML files
    html_files = []
    html_files.extend(glob.glob(os.path.join(root_dir, '*.html')))
    html_files.extend(glob.glob(os.path.join(root_dir, 'articles', '*.html')))
    html_files.extend(glob.glob(os.path.join(root_dir, 'guides', '*.html')))
    html_files.extend(glob.glob(os.path.join(root_dir, 'comparisons', '*.html')))
    
    for filepath in html_files:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        modified = False
        for old, new in converted_files.items():
            if old in content:
                content = content.replace(old, new)
                modified = True

        if modified:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Updated HTML: {filepath}")

if __name__ == '__main__':
    convert_pngs_to_webp('/Volumes/Data-Personal/Webpage/thehgtech')
