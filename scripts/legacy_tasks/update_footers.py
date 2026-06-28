import os

def main():
    repo_root = '/Volumes/Data-Personal/Webpage/thehgtech'
    skip_dirs = {'.git', '.agent', '.agents', 'node_modules', 'scripts'}
    modified_files = 0
    
    old_string = '<li><a href="/about.html">About</a></li>'
    new_string = '<li><a href="/about.html">About</a></li>\n                        <li><a href="/newsletter.html">Newsletter</a></li>\n                        <li><a href="/community.html">Community Guidelines</a></li>'
    
    for root, dirs, files in os.walk(repo_root):
        dirs[:] = [d for d in dirs if d not in skip_dirs]
        
        for file in files:
            if file.endswith('.html'):
                file_path = os.path.join(root, file)
                
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                    
                original_content = content
                
                if old_string in content and new_string not in content:
                    content = content.replace(old_string, new_string)
                
                if content != original_content:
                    with open(file_path, 'w', encoding='utf-8') as f:
                        f.write(content)
                    print(f"Updated: {file_path}")
                    modified_files += 1

    print(f"\\nDone. Modified {modified_files} files.")

if __name__ == "__main__":
    main()
