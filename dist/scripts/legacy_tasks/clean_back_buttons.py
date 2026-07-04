import os
import re

def main():
    repo_root = '/Volumes/Data-Personal/Webpage/thehgtech'
    
    # Target directories
    target_dirs = ['articles', 'guides', 'comparisons']
    
    modified_files = 0
    
    for target in target_dirs:
        dir_path = os.path.join(repo_root, target)
        if not os.path.exists(dir_path):
            continue
            
        for root, dirs, files in os.walk(dir_path):
            for file in files:
                if file.endswith('.html'):
                    file_path = os.path.join(root, file)
                    
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                        
                    original_content = content
                    
                    # 1. Remove the old back buttons
                    # Patterns to match: <a href="/articles.html" class="back-link"><i class="fas fa-arrow-left"></i> Back to Articles</a>
                    old_btn_pattern = r'<a href="[^"]+" class="back-link">(?:\s*<i class="[^"]+"></i>\s*)?Back to [A-Za-z]+</a>'
                    content = re.sub(old_btn_pattern, '', content)
                    
                    # Also handle if it's just <i class="fas fa-arrow-left"></i> Back to Articles (sometimes it happens)
                    # content = re.sub(r'<i class="fas fa-arrow-left"></i> Back to [A-Za-z]+', '', content)
                    
                    # 2. Make the new pill button visible on desktop by removing m-only
                    # The pattern I injected: class="back-link m-only"
                    content = content.replace('class="back-link m-only"', 'class="back-link"')
                    
                    # 3. Clean up any weird empty spaces left by old buttons
                    content = content.replace('\n\n\n', '\n\n')

                    if content != original_content:
                        with open(file_path, 'w', encoding='utf-8') as f:
                            f.write(content)
                        modified_files += 1

    print(f"\\nDone cleaning back buttons. Modified {modified_files} files.")

if __name__ == "__main__":
    main()
