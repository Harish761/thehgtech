#!/usr/bin/env python3
"""
Fix ALL Author Schemas — Add @id and Ensure Canonical Person Entity
===================================================================
Ensures every Article, NewsArticle, and TechArticle has the canonical
Person author entity with @id: https://thehgtech.com/about.html#harish-g.
"""
import os
import re
import json
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent

CANONICAL_AUTHOR = {
    "@type": "Person",
    "@id": "https://thehgtech.com/about.html#harish-g",
    "name": "Harish G",
    "url": "https://thehgtech.com/about.html",
    "sameAs": [
        "https://www.linkedin.com/in/harish-g-2216955b/",
        "https://github.com/Harish761"
    ]
}

def fix_file(fpath: Path) -> bool:
    content = fpath.read_text(encoding='utf-8', errors='replace')
    orig = content

    # Find JSON-LD script blocks
    blocks = list(re.finditer(r'<script type=[\"\']application/ld\+json[\"\']>(.*?)</script>', content, re.DOTALL))
    if not blocks:
        return False

    for b in blocks:
        raw_text = b.group(1).strip()
        try:
            data = json.loads(raw_text)
            changed = False

            def update_dict(d):
                nonlocal changed
                if not isinstance(d, dict):
                    return
                t = d.get('@type')
                if t in ['Article', 'NewsArticle', 'TechArticle', 'BlogPosting']:
                    current_author = d.get('author')
                    # Update if missing @id or organization or string
                    author_str = json.dumps(current_author) if current_author else ""
                    if 'https://thehgtech.com/about.html#harish-g' not in author_str:
                        d['author'] = CANONICAL_AUTHOR
                        changed = True

            if isinstance(data, dict):
                update_dict(data)
            elif isinstance(data, list):
                for item in data:
                    update_dict(item)

            if changed:
                new_block = f'<script type="application/ld+json">\n{json.dumps(data, indent=2, ensure_ascii=False)}\n</script>'
                content = content.replace(b.group(0), new_block)
        except Exception:
            pass

    if content != orig:
        fpath.write_text(content, encoding='utf-8')
        return True
    return False

def main():
    modified = 0
    for d in ['articles', 'guides']:
        dir_path = REPO_ROOT / d
        for f in dir_path.glob('*.html'):
            if f.name == 'index.html':
                continue
            if fix_file(f):
                modified += 1

    print(f"Standardized canonical author in {modified} files.")

if __name__ == '__main__':
    main()
