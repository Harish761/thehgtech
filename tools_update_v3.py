import os, re

def update_html_files():
    tools_dropdown_html = '''                <!-- Tools Dropdown -->
                <div class="nav-dropdown">
                    <span class="nav-dropdown-trigger" style="cursor:pointer;">
                        <i class="fas fa-tools" style="color: #10B981; margin-right: 4px;"></i> Tools
                        <span class="nav-live-badge" style="background: rgba(16, 185, 129, 0.2); color: #10B981; letter-spacing: 0.5px; margin-left:6px;">NEW</span>
                        <i class="fas fa-chevron-down dropdown-arrow"></i>
                    </span>
                    <div class="nav-dropdown-panel" style="min-width: 250px;">
                        <a href="/tools/grc-assessment/" class="dropdown-item" style="background: rgba(16, 185, 129, 0.05);">
                            <div class="dropdown-item-icon" style="background: rgba(16, 185, 129, 0.15); color: #10B981;">
                                <i class="fas fa-clipboard-check"></i>
                            </div>
                            <div class="dropdown-item-content">
                                <div class="dropdown-item-title" style="color: #10B981;">
                                    ISO 27001 GRC Tool
                                    <span class="dropdown-badge" style="background: #10B981;">NEW</span>
                                </div>
                                <div class="dropdown-item-desc">Interactive scope builder & Gap assessment</div>
                            </div>
                        </a>
                    </div>
                </div>'''

    modified_files = 0
    for root, dirs, files in os.walk('.'):
        if any(ignored in root for ignored in ['node_modules', '.git', '.gemini', 'venv']):
            continue
        for file in files:
            if not file.endswith('.html'):
                continue
                
            filepath = os.path.join(root, file)
            try:
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()

                original = content
                
                # Use a very specific regex that matches the exact structure we know:
                content = re.sub(r'[ \t]*<!--\s*Tools Navigation Link[ \s\S]*?</a>\n', '', content)

                # And old dropdown if any
                content = re.sub(r'[ \t]*<!--\s*Tools Dropdown[ \s\S]*?</div>\n[ \t]*</div>\n', '', content)

                if '<!-- Tools Dropdown -->' not in content:
                    if '<!-- About Dropdown -->' in content:
                        content = content.replace('<!-- About Dropdown -->', tools_dropdown_html + '\n\n                <!-- About Dropdown -->')
                    elif '<button class="m-theme-toggle"' in content:
                        content = content.replace('<button class="m-theme-toggle"', tools_dropdown_html + '\n\n                <button class="m-theme-toggle"')
                    elif '<!-- Theme Toggle -->' in content:
                        content = content.replace('<!-- Theme Toggle -->', tools_dropdown_html + '\n\n                <!-- Theme Toggle -->')
                    elif '<button id="themeToggle"' in content:
                        content = content.replace('<button id="themeToggle"', tools_dropdown_html + '\n\n                <button id="themeToggle"')

                if content != original:
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(content)
                    modified_files += 1
            except Exception as e:
                pass
                
    print(f"Updated {modified_files} files.")

if __name__ == '__main__':
    update_html_files()
