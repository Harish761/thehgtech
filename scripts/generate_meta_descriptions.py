import os
import re

BASE_DIR = '/Volumes/Data-Personal/Webpage/thehgtech'
DIRS = ['articles', 'guides']

def clean_html(text):
    """Strip HTML tags and normalize whitespace."""
    text = re.sub(r'<[^>]+>', ' ', text)
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

def make_description(text, max_len=155):
    """Trim to max_len chars at a word boundary, add ellipsis if cut."""
    text = text.strip()
    if len(text) <= max_len:
        return text
    trimmed = text[:max_len].rsplit(' ', 1)[0]
    return trimmed.rstrip('.,;:') + '...'

def extract_description(content, fpath):
    """Extract best available description from page content."""

    # Priority 1: og:description (already written, usually great)
    m = re.search(r'<meta property=["\']og:description["\'] content=["\']([^"\']+)["\']', content)
    if m and m.group(1).strip():
        return make_description(m.group(1).strip())

    # Priority 2: JSON-LD "description" field
    m = re.search(r'"description":\s*"((?:[^"\\]|\\.)+)"', content)
    if m and m.group(1).strip():
        desc = m.group(1).replace('\\n', ' ').replace('\\"', '"').strip()
        return make_description(desc)

    # Priority 3: article-excerpt class
    m = re.search(r'class=["\']article-excerpt["\'][^>]*>(.*?)</p>', content, re.DOTALL)
    if m:
        desc = clean_html(m.group(1))
        if len(desc) > 30:
            return make_description(desc)

    # Priority 4: First meaningful <p> inside the main content
    # Look for content inside article/section/main tags
    content_block = re.search(r'<(?:article|main|section)[^>]*>(.*?)</(?:article|main|section)>', content, re.DOTALL)
    if content_block:
        paragraphs = re.findall(r'<p[^>]*>(.*?)</p>', content_block.group(1), re.DOTALL)
        for p in paragraphs:
            text = clean_html(p)
            # Skip very short paragraphs, nav-like text, etc.
            if len(text) > 60 and not text.startswith('<') and 'cookie' not in text.lower():
                return make_description(text)

    # Priority 5: Any paragraph with enough content
    paragraphs = re.findall(r'<p[^>]*>(.*?)</p>', content, re.DOTALL)
    for p in paragraphs:
        text = clean_html(p)
        if len(text) > 80 and 'cookie' not in text.lower() and 'privacy' not in text.lower()[:30]:
            return make_description(text)

    # Fallback: derive from title
    title = re.search(r'<title>(.*?)</title>', content, re.DOTALL)
    if title:
        t = clean_html(title.group(1)).replace(' | TheHGTech', '').strip()
        return make_description(f'In-depth cybersecurity analysis: {t}. Expert insights from TheHGTech.')

    return ''

def inject_meta_description(content, description):
    """Inject <meta name='description'> right after <meta name='title'> or after charset."""
    meta_tag = f'<meta name="description" content="{description}">'

    # Try to insert after existing <meta name="title"> tag
    m = re.search(r'(<meta name=["\']title["\'][^>]+>)', content)
    if m:
        return content[:m.end()] + '\n    ' + meta_tag + content[m.end():]

    # Fallback: insert after charset meta
    m = re.search(r'(<meta charset=[^>]+>)', content)
    if m:
        return content[:m.end()] + '\n    ' + meta_tag + content[m.end():]

    return content

fixed = 0
skipped = 0
errors = []

for d in DIRS:
    dir_path = os.path.join(BASE_DIR, d)
    for fname in os.listdir(dir_path):
        if not fname.endswith('.html'):
            continue
        fpath = os.path.join(dir_path, fname)
        try:
            with open(fpath, encoding='utf-8') as f:
                content = f.read()

            # Skip if already has a meta description
            existing = re.search(r'<meta name=["\']description["\'] content=["\']([^"\']*)["\']', content)
            if existing and existing.group(1).strip():
                skipped += 1
                continue

            description = extract_description(content, fpath)
            if not description:
                errors.append(f'NO DESC FOUND: {fname}')
                continue

            new_content = inject_meta_description(content, description)

            # Also inject into og:description if missing
            if 'og:description' not in new_content:
                og_tag = f'<meta property="og:description" content="{description}">'
                m = re.search(r'(<meta property=["\']og:type["\'][^>]+>)', new_content)
                if m:
                    new_content = new_content[:m.start()] + og_tag + '\n    ' + new_content[m.start():]

            with open(fpath, 'w', encoding='utf-8') as f:
                f.write(new_content)

            fixed += 1
            print(f'✓ {d}/{fname}')
            print(f'  → {description[:100]}...' if len(description) > 100 else f'  → {description}')

        except Exception as e:
            errors.append(f'ERROR {fname}: {e}')

print()
print(f'=== DONE ===')
print(f'Fixed:   {fixed}')
print(f'Skipped: {skipped} (already had descriptions)')
if errors:
    print(f'Errors:  {len(errors)}')
    for e in errors:
        print(f'  {e}')
