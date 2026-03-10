import os
import re

directory = '/Volumes/Data-Personal/Webpage/thehgtech'

new_grc_html = """                        </a>
                        <a href="/tools/grc-assessment/" class="dropdown-item" style="background: rgba(16, 185, 129, 0.08);">
                            <div class="dropdown-item-icon" style="background: rgba(16, 185, 129, 0.15); color: #10B981;">
                                <i class="fas fa-shield-halved"></i>
                            </div>
                            <div class="dropdown-item-content">
                                <div class="dropdown-item-title" style="color: #10B981;">
                                    GRC Assessment
                                    <span class="dropdown-badge" style="background: #10B981;">NEW</span>
                                </div>
                                <div class="dropdown-item-desc">Free, offline-first ISO 27001 readiness engine</div>
                            </div>"""

# Find the end of Tool Comparisons, and then just grab EVERYTHING until the next divider
target_pattern = r'(<div class="dropdown-item-title">Tool Comparisons</div>[\s\S]*?<div class="dropdown-item-desc">EDR, SIEM, and security tool head-to-head reviews</div>\s*</div>\s*</a>)([\s\S]*?)(<div class="dropdown-divider">)'

def process_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # check if 'Tool Comparisons' is present
    if '<div class="dropdown-item-title">Tool Comparisons</div>' not in content:
        return False
        
    def replacer(match):
        return match.group(1) + "\n" + new_grc_html + "\n                        " + match.group(3)

    new_content = re.sub(target_pattern, replacer, content)
    
    if new_content != content:
        with open(filepath, 'w') as f:
            f.write(new_content)
        return True
    return False

count = 0
for root, dirs, files in os.walk(directory):
    if '.git' in root or '.system_generated' in root:
        continue
    for file in files:
        if file.endswith('.html'):
            filepath = os.path.join(root, file)
            if process_file(filepath):
                count += 1
                
print(f"Total files updated: {count}")
