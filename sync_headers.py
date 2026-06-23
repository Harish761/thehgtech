import os
import re

def main():
    repo_root = '/Volumes/Data-Personal/Webpage/thehgtech'
    index_path = os.path.join(repo_root, 'index.html')
    
    # 1. Read master header from index.html
    with open(index_path, 'r', encoding='utf-8') as f:
        index_content = f.read()
        
    # Extract desktop header: starts with <header class="header" and ends with </header>
    header_match = re.search(r'(<header class="header"[^>]*>.*?</header>)', index_content, re.DOTALL)
    if not header_match:
        print("Error: Could not find desktop header in index.html")
        return
        
    master_header = header_match.group(1)
    
    # 2. Iterate through all .html files
    skip_dirs = {'.git', '.agent', '.agents', 'node_modules', 'scripts'}
    modified_files = 0
    
    for root, dirs, files in os.walk(repo_root):
        # Modify dirs in-place to skip hidden/unwanted directories
        dirs[:] = [d for d in dirs if d not in skip_dirs]
        
        for file in files:
            if file.endswith('.html'):
                file_path = os.path.join(root, file)
                
                # Skip index.html itself since it's the source of truth
                if file_path == index_path:
                    continue
                    
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                    
                original_content = content
                
                # Replace desktop header
                # Some files might just have <header class="header"> or <header class="header" role="banner">
                content = re.sub(r'<header class="header"[^>]*>.*?</header>', master_header, content, flags=re.DOTALL)
                
                # Ensure theme-toggle.js is present
                # Look for <script src="/theme-toggle.js" defer></script> or similar
                theme_script_pattern = r'<script[^>]*src=["\']/?theme-toggle\.js["\'][^>]*>\s*</script>'
                has_theme_script = re.search(theme_script_pattern, content)
                
                if not has_theme_script:
                    # Inject before </head>
                    theme_script_tag = '\n    <script src="/theme-toggle.js" defer></script>\n'
                    content = re.sub(r'(</head>)', theme_script_tag + r'\1', content, flags=re.IGNORECASE)
                else:
                    # If it exists but isn't absolute, let's just make it absolute to be safe
                    # But wait, replacing it entirely is cleaner:
                    content = re.sub(theme_script_pattern, '<script src="/theme-toggle.js" defer></script>', content)
                
                if content != original_content:
                    with open(file_path, 'w', encoding='utf-8') as f:
                        f.write(content)
                    print(f"Updated: {file_path}")
                    modified_files += 1

    print(f"\\nDone. Modified {modified_files} files.")

if __name__ == "__main__":
    main()
