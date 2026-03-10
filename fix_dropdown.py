import os
import re

directory = '/Volumes/Data-Personal/Webpage/thehgtech'

grc_html = """                        </a>
                        <a href="/tools/grc-assessment/" class="dropdown-item" style="background: rgba(16, 185, 129, 0.08);">
                            <div class="dropdown-item-icon" style="background: rgba(16, 185, 129, 0.15); color: #10B981;">
                                <i class="fas fa-shield-check"></i>
                            </div>
                            <div class="dropdown-item-content">
                                <div class="dropdown-item-title" style="color: #10B981;">
                                    GRC Assessment
                                    <span class="dropdown-badge" style="background: #10B981;">NEW</span>
                                </div>
                                <div class="dropdown-item-desc">Free, offline-first ISO 27001 readiness engine</div>
                            </div>"""

target_pattern = r'(<a href="/comparisons/" class="dropdown-item">[\s\S]*?<div class="dropdown-item-title">Tool Comparisons</div>[\s\S]*?<div class="dropdown-item-desc">EDR, SIEM, and security tool head-to-head reviews</div>\n\s*</div>\n\s*)</a>'

count = 0
for root, dirs, files in os.walk(directory):
    if '.git' in root or '.system_generated' in root:
        continue
    for file in files:
        if file.endswith('.html'):
            filepath = os.path.join(root, file)
            with open(filepath, 'r') as f:
                content = f.read()
                
            if 'grc-assessment' not in content or filepath.endswith('index.html') and len(filepath) < 50:
                 if 'Tool Comparisons' in content:
                     new_content = re.sub(target_pattern, r'\1' + grc_html, content)
                     if new_content != content:
                         with open(filepath, 'w') as f:
                             f.write(new_content)
                         print(f"Updated {filepath}")
                         count += 1
print(f"Total files updated: {count}")
