import os, re, glob

pagination_dirs = sorted(glob.glob('articles/page/*/index.html'))

for filepath in pagination_dirs:
    # Extract page number from path e.g. articles/page/3/index.html -> 3
    page_num = filepath.split('/')[2]
    
    # The correct self-referencing canonical URL
    correct_canonical = f"https://thehgtech.com/articles/page/{page_num}/"
    
    with open(filepath, 'r') as f:
        content = f.read()
    
    # Replace canonical href
    old_canonical_pattern = r'<link rel="canonical" href="https://thehgtech\.com/articles\.html">'
    new_canonical = f'<link rel="canonical" href="{correct_canonical}">'
    
    # Also fix og:url
    old_og_url_pattern = r'<meta property="og:url" content="https://thehgtech\.com/articles\.html">'
    new_og_url = f'<meta property="og:url" content="{correct_canonical}">'
    
    new_content = re.sub(old_canonical_pattern, new_canonical, content)
    new_content = re.sub(old_og_url_pattern, new_og_url, new_content)
    
    if new_content != content:
        with open(filepath, 'w') as f:
            f.write(new_content)
        print(f"Fixed: {filepath} -> canonical: {correct_canonical}")
    else:
        print(f"No change needed: {filepath}")

print(f"\nProcessed {len(pagination_dirs)} pagination pages.")
