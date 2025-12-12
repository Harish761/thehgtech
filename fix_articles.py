#!/usr/bin/env python3
"""
Restore the renderFullArticle function from a known good version, 
but update it with new mobile navigation CSS
"""

import subprocess

# Get the old clean version of articles.html
result = subprocess.run(
    ['git', 'show', '38765e9:articles.html'],
    capture_output=True, text=True,
    cwd='/Volumes/Data-Personal/Webpage/thehgtech'
)
old_content = result.stdout

# Read the current articles.html
with open('/Volumes/Data-Personal/Webpage/thehgtech/articles.html', 'r') as f:
    current_content = f.read()

# Find the start and end of renderFullArticle in both files
# First, let's find the mobile modal code which should be preserved from current

# Strategy: Take the old file as base up to the mobile modal additions,
# then carefully integrate the mobile modal while keeping the renderFullArticle function clean

# Actually, simplest approach: restore the old articles.html,
# then just update the mobile CSS includes and add the modal code

# Let's just use the old file and update the CSS includes
old_content = old_content.replace(
    '<link rel="stylesheet" href="mobile.css?v=2.0">',
    '<link rel="stylesheet" href="m-core.css?v=4.3">'
)
old_content = old_content.replace(
    '<link rel="stylesheet" href="mobile-typography.css?v=2.0">',
    '<link rel="stylesheet" href="m-layout.css?v=3.2">'
)
old_content = old_content.replace(
    '<script src="mobile.js?v=2.0" defer><\\/script>',
    '''<link rel="stylesheet" href="m-components.css?v=3.0">
<link rel="stylesheet" href="light-mode.css">
<script src="m-app.js?v=4.3" defer><\\/script>'''
)

# Also update the head section mobile CSS
old_content = old_content.replace(
    '    <link rel="stylesheet" href="mobile.css?v=2.0">',
    '    <link rel="stylesheet" href="m-core.css?v=4.3">'
)
old_content = old_content.replace(
    '    <link rel="stylesheet" href="mobile-typography.css?v=2.0">',
    '    <link rel="stylesheet" href="m-layout.css?v=3.2">'
)

# Update old mobile header to new m-header
old_content = old_content.replace(
    'class="mobile-header mobile-only"',
    'class="m-header m-only"'
)
old_content = old_content.replace(
    'class="mobile-header-logo"',
    'class="m-header__logo"'
)

# Save the fixed file
with open('/Volumes/Data-Personal/Webpage/thehgtech/articles.html', 'w') as f:
    f.write(old_content)

print("Restored articles.html from clean version with updated CSS includes")
