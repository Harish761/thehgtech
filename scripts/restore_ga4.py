import os
from pathlib import Path

repo_root = Path(__file__).resolve().parent.parent

GA4_SNIPPET = """    <!-- Google Analytics 4 -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-XL6RCXZJE2"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', 'G-XL6RCXZJE2');
    </script>
"""

target_files = [
    'ransomware-tracker.html',
    'newsletter.html',
    'community.html',
    'privacy.html',
    'articles/tcs-digital-experience-monitoring-controversy.html',
    'articles/beyond-klue-salesforce-saas-trust-crisis-2026.html',
]

for tf in target_files:
    fpath = repo_root / tf
    if not fpath.exists():
        print(f"File not found: {tf}")
        continue
    content = fpath.read_text(encoding='utf-8')
    if 'G-XL6RCXZJE2' in content:
        print(f"Already has GA4: {tf}")
        continue
    if '</head>' in content:
        content = content.replace('</head>', f"{GA4_SNIPPET}</head>", 1)
        fpath.write_text(content, encoding='utf-8')
        print(f"Injected GA4 into: {tf}")
    else:
        print(f"No </head> found in: {tf}")
