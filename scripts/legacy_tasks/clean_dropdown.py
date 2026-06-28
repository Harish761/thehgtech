import os
import re

directory = '/Volumes/Data-Personal/Webpage/thehgtech'

grc_html = """                        </a>
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
                            </div>
                        </a>"""

# We look for the "Tool Comparisons" block ending in "</a>", then any whitespace/content up to the "dropdown-divider".
# We replace whatever is between them (the old/duplicated GRC blocks) with our single clean GRC block.
pattern = re.compile(
    r'(<div class="dropdown-item-title">Tool Comparisons</div>[\s\S]*?<div class="dropdown-item-desc">EDR, SIEM, and security tool head-to-head reviews</div>\n\s*</div>\n\s*</a>)([\s\S]*?)(<div class="dropdown-divider">)'
)

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    if '<div class="dropdown-item-title">Tool Comparisons</div>' not in content:
        return False
        
    def replacer(match):
        part1 = match.group(1)
        part3 = match.group(3)
        # return part1 (Tool Comparisons </a>) + newline + fresh GRC HTML + newline + part3 (<div class="dropdown-divider">)
        # Note: grc_html already starts with "                        </a>" which looks like an extra closing a.
        # Wait, grc_html starts with "</a>" which is wrong because match.group(1) already has the </a> for Tool Comparisons.
        return part1 + "\n" + grc_html_fixed + "\n                        " + part3

    grc_html_fixed = """                        <a href="/tools/grc-assessment/" class="dropdown-item" style="background: rgba(16, 185, 129, 0.08);">
                            <div class="dropdown-item-icon" style="background: rgba(16, 185, 129, 0.15); color: #10B981;">
                                <i class="fas fa-shield-halved"></i>
                            </div>
                            <div class="dropdown-item-content">
                                <div class="dropdown-item-title" style="color: #10B981;">
                                    GRC Assessment
                                    <span class="dropdown-badge" style="background: #10B981;">NEW</span>
                                </div>
                                <div class="dropdown-item-desc">Free, offline-first ISO 27001 readiness engine</div>
                            </div>
                        </a>"""

    new_content = pattern.sub(replacer, content)
    
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        return True
    return False

count = 0
for root, dirs, files in os.walk(directory):
    if '.git' in root or '.system_generated' in root or 'node_modules' in root:
        continue
    for file in files:
        if file.endswith('.html'):
            filepath = os.path.join(root, file)
            if process_file(filepath):
                count += 1
                
print(f"Total files updated: {count}")
