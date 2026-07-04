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
                    
                    # 1. Remove m-bottom-nav
                    content = re.sub(r'<nav class="m-bottom-nav">.*?</nav>', '', content, flags=re.DOTALL)
                    
                    # 2. Inject back button if not present
                    # Check if already present
                    if 'class="back-to-articles' not in content and 'class="back-link m-only"' not in content:
                        
                        # Determine parent link
                        parent_link = "/articles.html"
                        parent_name = "Articles"
                        
                        if target == 'guides':
                            parent_link = "/guides/"
                            parent_name = "Guides"
                        elif target == 'comparisons':
                            parent_link = "/comparisons/"
                            parent_name = "Comparisons"
                            
                        back_btn_html = f'''
        <!-- Mobile Back Button -->
        <a href="{parent_link}" class="back-link m-only" style="display: inline-flex; align-items: center; gap: 8px; color: var(--accent-cyan, #00D9FF); text-decoration: none; font-weight: 600; margin-bottom: 1.5rem; font-size: 0.95rem; background: rgba(0, 217, 255, 0.1); padding: 8px 16px; border-radius: 20px; border: 1px solid rgba(0, 217, 255, 0.2);">
            <i class="fas fa-arrow-left"></i> Back to {parent_name}
        </a>
'''
                        
                        # Find where to inject. Usually right after <main class="article-container"> or <article class="article-content">
                        # Let's try <main class="article-container">
                        main_pattern = r'(<main[^>]*class="[^"]*article-container[^"]*"[^>]*>)'
                        article_pattern = r'(<article[^>]*class="[^"]*article-content[^"]*"[^>]*>)'
                        
                        if re.search(main_pattern, content):
                            content = re.sub(main_pattern, r'\1' + back_btn_html, content, count=1)
                        elif re.search(article_pattern, content):
                            content = re.sub(article_pattern, r'\1' + back_btn_html, content, count=1)
                        else:
                            # Fallback, put it before <header class="article-header">
                            header_pattern = r'(<header[^>]*class="[^"]*article-header[^"]*"[^>]*>)'
                            if re.search(header_pattern, content):
                                content = re.sub(header_pattern, back_btn_html + r'\1', content, count=1)

                    if content != original_content:
                        with open(file_path, 'w', encoding='utf-8') as f:
                            f.write(content)
                        print(f"Updated layout: {file_path}")
                        modified_files += 1

    print(f"\\nDone updating mobile layouts. Modified {modified_files} files.")

if __name__ == "__main__":
    main()
