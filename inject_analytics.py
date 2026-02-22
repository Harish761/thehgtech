#!/usr/bin/env python3
"""Inject GA4 + Fullres analytics tracking into all HTML pages that are missing them."""

import os
import glob

GA4_SNIPPET = '''    <!-- Google Analytics 4 -->
    <script>
        window.addEventListener('load', function () {
            setTimeout(function () {
                var gtmScript = document.createElement('script');
                gtmScript.async = true;
                gtmScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-XL6RCXZJE2';
                document.head.appendChild(gtmScript);
                gtmScript.onload = function () {
                    window.dataLayer = window.dataLayer || [];
                    function gtag() { dataLayer.push(arguments); }
                    window.gtag = gtag;
                    gtag('js', new Date());
                    gtag('config', 'G-XL6RCXZJE2');
                };
            }, 100);
        });
    </script>'''

FULLRES_SNIPPET = '''    <!-- Fullres Analytics -->
    <script>
        window.addEventListener('load', function () {
            var fullres = document.createElement('script');
            fullres.async = true;
            fullres.src = 'https://t.fullres.net/thehgtech.js?' + (new Date() - new Date() % 43200000);
            document.head.appendChild(fullres);
        });
    </script>'''

ROOT = '/Volumes/Data-Personal/Webpage/thehgtech'
SKIP_PATTERNS = ['backup', 'node_modules', '.git', 'admin-']

html_files = glob.glob(os.path.join(ROOT, '**', '*.html'), recursive=True)
html_files += glob.glob(os.path.join(ROOT, '*.html'))
html_files = list(set(html_files))  # deduplicate

stats = {'ga4_added': 0, 'fullres_added': 0, 'skipped': 0, 'already_has_both': 0}

for filepath in sorted(html_files):
    # Skip backups and admin files
    if any(skip in filepath for skip in SKIP_PATTERNS):
        stats['skipped'] += 1
        continue

    with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()

    # Skip files that aren't full HTML pages
    if '</head>' not in content:
        stats['skipped'] += 1
        continue

    has_ga4 = 'G-XL6RCXZJE2' in content
    has_fullres = 't.fullres.net/thehgtech.js' in content

    if has_ga4 and has_fullres:
        stats['already_has_both'] += 1
        continue

    modified = False

    if not has_ga4:
        content = content.replace('</head>', GA4_SNIPPET + '\n</head>', 1)
        stats['ga4_added'] += 1
        modified = True

    if not has_fullres:
        content = content.replace('</head>', FULLRES_SNIPPET + '\n</head>', 1)
        stats['fullres_added'] += 1
        modified = True

    if modified:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        rel_path = os.path.relpath(filepath, ROOT)
        print(f"  ✅ {rel_path}" + (" [+GA4]" if not has_ga4 else "") + (" [+Fullres]" if not has_fullres else ""))

print(f"\n--- DONE ---")
print(f"GA4 added to:     {stats['ga4_added']} files")
print(f"Fullres added to: {stats['fullres_added']} files")
print(f"Already had both: {stats['already_has_both']} files")
print(f"Skipped:          {stats['skipped']} files")
