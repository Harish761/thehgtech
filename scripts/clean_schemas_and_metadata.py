import os
import re
import json
import html
from pathlib import Path

repo_root = Path(__file__).resolve().parent.parent

# 1. Update index.html
index_path = repo_root / 'index.html'
if index_path.exists():
    c = index_path.read_text(encoding='utf-8')
    # Fix logo and add @id to NewsMediaOrganization
    c = c.replace(
        'https://thehgtech.com/images/logo-dark.png',
        'https://thehgtech.com/logo-dark.png'
    )
    if '"@id": "https://thehgtech.com/#organization"' not in c:
        c = re.sub(
            r'("@type":\s*"NewsMediaOrganization",)',
            r'\1\n      "@id": "https://thehgtech.com/#organization",',
            c,
            count=1
        )
    index_path.write_text(c, encoding='utf-8')
    print("Updated index.html Organization schema.")

# 2. Update about.html
about_path = repo_root / 'about.html'
if about_path.exists():
    c = about_path.read_text(encoding='utf-8')
    if '"@id": "https://thehgtech.com/about.html#harish-g"' not in c:
        c = re.sub(
            r'("@type":\s*"Person",)',
            r'\1\n      "@id": "https://thehgtech.com/about.html#harish-g",',
            c,
            count=1
        )
    # Ensure canonical LinkedIn
    c = c.replace('harish-g-03704815a', 'harish-g-2216955b')
    c = c.replace('harish-g-4648781a7', 'harish-g-2216955b')
    about_path.write_text(c, encoding='utf-8')
    print("Updated about.html Person schema.")

# 3. Process all articles and guides
all_files = list((repo_root / 'articles').glob('*.html')) + list((repo_root / 'guides').glob('*.html')) + [index_path, about_path]

broken_og_map = {
    'anthropic-project-glasswing-2026.html': 'https://thehgtech.com/images/articles/glasswing-partner-ecosystem.png',
    'the-agent-tax-corporate-laptop-performance-2026.html': 'https://thehgtech.com/images/guides/the-agent-tax-corporate-laptop-performance-2026.jpg',
    'owasp-llm-top-10.html': 'https://thehgtech.com/images/guides/owasp-llm-top-10.png',
    'siem-log-analysis.html': 'https://thehgtech.com/images/guides-og.jpg',
    'incident-response-automation.html': 'https://thehgtech.com/images/guides-og.jpg',
    'threat-intelligence-feeds-comparison.html': 'https://thehgtech.com/images/guides-og.jpg',
    'malware-hash-analysis.html': 'https://thehgtech.com/images/guides-og.jpg',
    'cisa-kev-tracker.html': 'https://thehgtech.com/images/guides-og.jpg',
    'openphish-integration.html': 'https://thehgtech.com/images/guides-og.jpg',
    'zero-day-detection.html': 'https://thehgtech.com/images/guides-og.jpg',
    'api-security-best-practices.html': 'https://thehgtech.com/images/guides-og.jpg',
    'threat-intelligence-soc.html': 'https://thehgtech.com/images/guides-og.jpg',
    'hacker-chatter.html': 'https://thehgtech.com/images/threat-intel-og.jpg',
}

def score_schema(d, fname):
    score = 0
    t = d.get('@type', '')
    if t in ['NewsArticle', 'TechArticle']: score += 10
    img = d.get('image')
    if img and ('logo' not in str(img) and 'og-image.jpg' not in str(img)): score += 5
    hl = d.get('headline', '')
    if hl and '| TheHGTech' not in hl and '- TheHGTech' not in hl: score += 5
    if d.get('articleSection'): score += 3
    if d.get('keywords'): score += 3
    me = d.get('mainEntityOfPage', {})
    me_id = me.get('@id', '') if isinstance(me, dict) else str(me)
    if fname in me_id: score += 5
    if '/articles/' in me_id: score += 5
    return score

files_modified = 0
schemas_cleaned = 0
descs_deduped = 0

for fpath in all_files:
    if fpath.name == 'index.html' and fpath.parent.name == 'page':
        continue
    content = fpath.read_text(encoding='utf-8')
    orig_content = content

    # A. Fix LinkedIn handles to canonical
    content = content.replace('linkedin.com/in/harish-g-03704815a', 'linkedin.com/in/harish-g-2216955b')
    content = content.replace('linkedin.com/in/harish-g-4648781a7', 'linkedin.com/in/harish-g-2216955b')

    # B. Fix broken og:image
    if fpath.name in broken_og_map:
        new_img = broken_og_map[fpath.name]
        content = re.sub(
            r'(<meta property=[\"\']og:image[\"\'] content=)[\"\'][^\"\']+[\"\']',
            rf'\1"{new_img}"',
            content
        )

    # C. Fix publisher logo URLs
    content = content.replace('https://thehgtech.com/images/logo-dark.png', 'https://thehgtech.com/logo-dark.png')
    content = content.replace('https://thehgtech.com/logo.png', 'https://thehgtech.com/logo-dark.png')

    # D. Fix breadcrumb guides.html -> guides/
    content = content.replace('https://thehgtech.com/guides.html', 'https://thehgtech.com/guides/')

    # E. Deduplicate meta descriptions
    descs = list(re.finditer(r'<meta\s+name=[\"\']description[\"\'].*?>', content, re.DOTALL | re.IGNORECASE))
    if len(descs) > 1:
        # Keep the most detailed description (prefer untruncated)
        desc_texts = []
        for d in descs:
            m = re.search(r'content=[\"\'](.*?)[\"\']', d.group(0), re.DOTALL)
            text = m.group(1).strip() if m else ""
            desc_texts.append((len(text), not text.endswith('...'), d.group(0), text))
        
        # Sort by: not ending with '...', then longest length
        desc_texts.sort(key=lambda x: (x[1], x[0]), reverse=True)
        best_tag = desc_texts[0][2]
        
        # Remove all description tags and insert the best one where the first was
        for dt in desc_texts[1:]:
            content = content.replace(dt[2], '')
        descs_deduped += 1

    # F. JSON-LD Schema Cleaning
    # Find all <script type="application/ld+json"> blocks
    script_matches = list(re.finditer(r'<script type=[\"\']application/ld\+json[\"\']>(.*?)</script>', content, re.DOTALL))
    if script_matches:
        parsed_blocks = []
        for sm in script_matches:
            raw_text = sm.group(1).strip()
            try:
                data = json.loads(raw_text)
                parsed_blocks.append({'raw': sm.group(0), 'data': data, 'valid': True})
            except Exception:
                parsed_blocks.append({'raw': sm.group(0), 'data': None, 'valid': False})

        # Count article schemas
        art_blocks = [b for b in parsed_blocks if b['valid'] and isinstance(b['data'], dict) and b['data'].get('@type') in ['Article', 'NewsArticle', 'TechArticle', 'BlogPosting']]
        bread_blocks = [b for b in parsed_blocks if b['valid'] and isinstance(b['data'], dict) and b['data'].get('@type') == 'BreadcrumbList']

        blocks_to_remove = set()

        if len(art_blocks) > 1:
            # Score schemas and keep only the best one
            scored_arts = [(ab, score_schema(ab['data'], fpath.name)) for ab in art_blocks]
            scored_arts.sort(key=lambda x: x[1], reverse=True)
            for ab, s in scored_arts[1:]:
                blocks_to_remove.add(ab['raw'])
                schemas_cleaned += 1

        if len(bread_blocks) > 1:
            # Remove duplicate breadcrumb (keep first authentic one)
            for bb in bread_blocks[1:]:
                blocks_to_remove.add(bb['raw'])

        for raw_block in blocks_to_remove:
            content = content.replace(raw_block, '')

        # Now check remaining blocks and ensure required fields are intact
        # If a single article schema remains and was injected_only, fix its dates and headline
        remaining_scripts = list(re.finditer(r'<script type=[\"\']application/ld\+json[\"\']>(.*?)</script>', content, re.DOTALL))
        for sm in remaining_scripts:
            try:
                data = json.loads(sm.group(1).strip())
                changed = False
                if isinstance(data, dict):
                    # Fix Author @id
                    author = data.get('author')
                    if isinstance(author, dict) and author.get('name') == 'Harish G':
                        if not author.get('@id'):
                            author['@id'] = 'https://thehgtech.com/about.html#harish-g'
                            author['url'] = 'https://thehgtech.com/about.html'
                            author['sameAs'] = ['https://www.linkedin.com/in/harish-g-2216955b/']
                            changed = True
                    elif isinstance(author, list):
                        for a in author:
                            if isinstance(a, dict) and a.get('name') == 'Harish G':
                                if not a.get('@id'):
                                    a['@id'] = 'https://thehgtech.com/about.html#harish-g'
                                    a['url'] = 'https://thehgtech.com/about.html'
                                    a['sameAs'] = ['https://www.linkedin.com/in/harish-g-2216955b/']
                                    changed = True

                    # Fix Publisher @id
                    pub = data.get('publisher')
                    if isinstance(pub, dict) and pub.get('name') == 'TheHGTech':
                        if not pub.get('@id'):
                            pub['@id'] = 'https://thehgtech.com/#organization'
                            pub['logo'] = {
                                '@type': 'ImageObject',
                                'url': 'https://thehgtech.com/logo-dark.png'
                            }
                            changed = True

                    # Fix empty headline
                    if data.get('@type') in ['Article', 'NewsArticle', 'TechArticle']:
                        if not data.get('headline'):
                            title_m = re.search(r'<title>(.*?)</title>', content)
                            if title_m:
                                data['headline'] = title_m.group(1).split('|')[0].strip()
                                changed = True

                    if changed:
                        new_script = f'<script type="application/ld+json">\n{json.dumps(data, indent=2, ensure_ascii=False)}\n</script>'
                        content = content.replace(sm.group(0), new_script)
            except Exception:
                pass

    if content != orig_content:
        fpath.write_text(content, encoding='utf-8')
        files_modified += 1

print(f"Schema and Metadata Cleaned! Files modified: {files_modified}, duplicate schemas removed: {schemas_cleaned}, meta descriptions deduped: {descs_deduped}")

# G. Inactivate scripts/inject_schema.py and scripts/generate_meta_descriptions.py
inject_script = repo_root / 'scripts' / 'inject_schema.py'
if inject_script.exists():
    c = inject_script.read_text(encoding='utf-8')
    if "RETIRED / DEPRECATED" not in c:
        header = '"""RETIRED / DEPRECATED SCRIPT\nDO NOT EXECUTE. This legacy script injected duplicate schemas and hardcoded placeholder dates.\nSchema is now maintained deterministically per article and validated by CI.\n"""\nimport sys\n# sys.exit(0)\n\n'
        inject_script.write_text(header + c, encoding='utf-8')
        print("Marked scripts/inject_schema.py as retired.")

meta_script = repo_root / 'scripts' / 'generate_meta_descriptions.py'
if meta_script.exists():
    c = meta_script.read_text(encoding='utf-8')
    if "RETIRED / DEPRECATED" not in c:
        header = '"""RETIRED / DEPRECATED SCRIPT\nDO NOT EXECUTE. This legacy script injected duplicate truncated descriptions due to single-line regex.\nMeta descriptions are maintained directly in HTML and validated by CI.\n"""\nimport sys\n# sys.exit(0)\n\n'
        meta_script.write_text(header + c, encoding='utf-8')
        print("Marked scripts/generate_meta_descriptions.py as retired.")
