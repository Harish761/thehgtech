import os
import re
from collections import defaultdict

def scan_directory(path):
    html_files = []
    js_files = []
    for root, _, files in os.walk(path):
        if '.git' in root or '.agent' in root or 'node_modules' in root:
            continue
        for file in files:
            if file.endswith('.html'):
                html_files.append(os.path.join(root, file))
            elif file.endswith('.js') and not file.endswith('.min.js'):
                js_files.append(os.path.join(root, file))
    return html_files, js_files

def check_target_blank(html_files):
    issues = []
    # Pattern looks for target="_blank" without rel="noopener"
    # This is a bit naive but catches obvious ones
    for fpath in html_files:
        with open(fpath, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
            # find all <a> tags
            a_tags = re.findall(r'<a\s+[^>]*>', content, re.IGNORECASE)
            for tag in a_tags:
                if 'target="_blank"' in tag or "target='_blank'" in tag:
                    if 'rel=' not in tag or ('noopener' not in tag and 'noreferrer' not in tag):
                        issues.append((fpath, tag))
    return issues

def check_inner_html(js_files):
    issues = []
    # Simple check for innerHTML assignments that might not be using escapeHTML
    for fpath in js_files:
        with open(fpath, 'r', encoding='utf-8', errors='ignore') as f:
            lines = f.readlines()
            for i, line in enumerate(lines):
                if '.innerHTML' in line and '=' in line:
                    # check if it looks like we are injecting variables without escapeHtml
                    if '${' in line and 'escapeHtml' not in line and 'escapeHTMLBasic' not in line:
                        issues.append((fpath, i+1, line.strip()))
    return issues

def check_security_meta_tags(html_files):
    issues = []
    # Checking for Content-Security-Policy in index.html specifically
    index_path = next((f for f in html_files if f.endswith('index.html')), None)
    if index_path:
        with open(index_path, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
            if 'Content-Security-Policy' not in content:
                issues.append((index_path, "Missing Content-Security-Policy meta tag"))
            if 'X-Content-Type-Options' not in content:
                issues.append((index_path, "Missing X-Content-Type-Options meta tag (though meta support is limited)"))
    return issues

html_files, js_files = scan_directory('.')
target_blank_issues = check_target_blank(html_files)
inner_html_issues = check_inner_html(js_files)
meta_issues = check_security_meta_tags(html_files)

print("=== SECURITY AUDIT RESULTS ===")
print(f"Target Blank Issues (missing rel=\"noopener\"): {len(target_blank_issues)}")
for filepath, tag in target_blank_issues:
    print(f"  {filepath}: {tag}")
if len(target_blank_issues) > 5: print("  ... and more")

print(f"\nPotential DOM XSS via innerHTML (variables without escapeHtml): {len(inner_html_issues)}")
for filepath, line_num, line in inner_html_issues:
    print(f"  {filepath}:{line_num} -> {line}")
if len(inner_html_issues) > 5: print("  ... and more")

print(f"\nMissing Security Meta Tags (Headers): {len(meta_issues)}")
for filepath, issue in meta_issues:
    print(f"  {filepath}: {issue}")

