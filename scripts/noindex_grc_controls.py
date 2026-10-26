#!/usr/bin/env python3
"""
Add noindex to GRC Controls pages and internal utility templates.
These 105 ISO 27001 control pages (~5KB each) and template/snapshot files
should not dilute site authority or waste Googlebot crawl budget.
"""
import os
import re
from pathlib import Path

repo_root = Path(__file__).resolve().parent.parent
CONTROLS_DIR = repo_root / 'tools' / 'grc-assessment' / 'controls'
NOINDEX_META = '<meta name="robots" content="noindex, follow">'

def inject_noindex(fpath):
    if not fpath.exists():
        return False
    content = fpath.read_text(encoding='utf-8', errors='replace')
    if 'noindex' in content:
        return False

    # Check for <head> or viewport
    if '<head>' in content:
        new_content = content.replace('<head>', f'<head>\n    {NOINDEX_META}', 1)
    elif '<meta name="viewport"' in content:
        new_content = re.sub(r'(<meta name="viewport"[^>]*>)', rf'\1\n    {NOINDEX_META}', content, count=1)
    elif '<html' in content:
        new_content = re.sub(r'(<html[^>]*>)', rf'\1\n<head>\n    {NOINDEX_META}\n</head>', content, count=1)
    else:
        new_content = f"{NOINDEX_META}\n" + content

    fpath.write_text(new_content, encoding='utf-8')
    return True

# 1. GRC Controls
grc_count = 0
if CONTROLS_DIR.exists():
    for fpath in CONTROLS_DIR.glob("*.html"):
        if fpath.name == "index.html":
            continue  # Keep hub index page indexable
        if inject_noindex(fpath):
            grc_count += 1

print(f"Added noindex to {grc_count} GRC control pages (controls/index.html preserved as indexable hub)")

# 2. Utility pages
utility_pages = [
    'ti-snapshot.html',
    'test_breach_output.html',
    'm-nav-template.html',
    'template-nav.html',
    'ti-hero-animation.html',
]

util_count = 0
for u in utility_pages:
    p = repo_root / u
    if inject_noindex(p):
        util_count += 1

print(f"Added noindex to {util_count} utility pages.")
