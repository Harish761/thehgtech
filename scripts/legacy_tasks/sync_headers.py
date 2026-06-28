import os
import re

def main():
    repo_root = '/Volumes/Data-Personal/Webpage/thehgtech'
    index_path = os.path.join(repo_root, 'index.html')
    
    # 1. Read master headers from index.html
    with open(index_path, 'r', encoding='utf-8') as f:
        index_content = f.read()
        
    # Extract desktop header: starts with <header class="header" and ends with </header>
    desktop_header_match = re.search(r'(<header class="header"[^>]*>.*?</header>)', index_content, re.DOTALL)
    if not desktop_header_match:
        print("Error: Could not find desktop header in index.html")
        return
        
    master_desktop_header = desktop_header_match.group(1)

    # Extract mobile header block: starts with <header class="m-header m-only"> and ends with </div> of search overlay
    # Using specific markers from index.html
    mobile_header_match = re.search(r'(<header class="m-header m-only">.*?</header>\s*<!-- ========== FULLSCREEN MOBILE MENU OBSERVER ========== -->\s*<div class="m-menu-overlay m-only".*?</div>\s*</div>\s*<!-- Search Overlay -->\s*<div class="m-search-overlay m-only">.*?</div>\s*</div>)', index_content, re.DOTALL)
    
    if not mobile_header_match:
        # Try a more forgiving regex
        mobile_header_match = re.search(r'(<!-- ========== NEW SMART MOBILE HEADER ========== -->.*?<!-- Noscript fallback -->)', index_content, re.DOTALL)
        if mobile_header_match:
            # strip the noscript fallback part
            master_mobile_header = mobile_header_match.group(1).replace('<!-- Noscript fallback -->', '').strip()
        else:
            print("Error: Could not find mobile header block in index.html")
            return
    else:
        master_mobile_header = mobile_header_match.group(1)

    
    # 2. Iterate through all .html files
    skip_dirs = {'.git', '.agent', '.agents', 'node_modules', 'scripts'}
    modified_files = 0
    
    for root, dirs, files in os.walk(repo_root):
        dirs[:] = [d for d in dirs if d not in skip_dirs]
        
        for file in files:
            if file.endswith('.html'):
                file_path = os.path.join(root, file)
                
                if file_path == index_path:
                    continue
                    
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                    
                original_content = content
                
                # Replace desktop header
                content = re.sub(r'<header class="header"[^>]*>.*?</header>', master_desktop_header, content, flags=re.DOTALL)
                
                # Now sync mobile header.
                # First, remove existing m-header, m-menu-overlay, and m-search-overlay blocks
                content = re.sub(r'<header class="m-header m-only">.*?</header>', '', content, flags=re.DOTALL)
                content = re.sub(r'<!-- ========== FULLSCREEN MOBILE MENU OBSERVER ========== -->\s*<div class="m-menu-overlay m-only".*?</div>\s*</div>', '', content, flags=re.DOTALL)
                content = re.sub(r'<div class="m-menu-overlay m-only".*?</div>\s*</div>', '', content, flags=re.DOTALL)
                content = re.sub(r'<!-- Search Overlay -->\s*<div class="m-search-overlay m-only">.*?</div>\s*</div>', '', content, flags=re.DOTALL)
                content = re.sub(r'<div class="m-search-overlay m-only">.*?</div>\s*</div>', '', content, flags=re.DOTALL)
                content = re.sub(r'<!-- ========== NEW SMART MOBILE HEADER ========== -->', '', content, flags=re.DOTALL)
                
                # Insert master mobile header right before the desktop header
                content = content.replace(master_desktop_header, f"{master_mobile_header}\n\n{master_desktop_header}")
                
                # Ensure theme-toggle.js is present
                theme_script_pattern = r'<script[^>]*src=["\']/?theme-toggle\.js["\'][^>]*>\s*</script>'
                has_theme_script = re.search(theme_script_pattern, content)
                
                if not has_theme_script:
                    theme_script_tag = '\n    <script src="/theme-toggle.js" defer></script>\n'
                    content = re.sub(r'(</head>)', theme_script_tag + r'\1', content, flags=re.IGNORECASE)
                else:
                    content = re.sub(theme_script_pattern, '<script src="/theme-toggle.js" defer></script>', content)
                
                if content != original_content:
                    with open(file_path, 'w', encoding='utf-8') as f:
                        f.write(content)
                    print(f"Updated: {file_path}")
                    modified_files += 1

    print(f"\\nDone. Modified {modified_files} files.")

if __name__ == "__main__":
    main()
