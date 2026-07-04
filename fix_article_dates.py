import os, re, glob, json
from datetime import datetime

# Map of article slug -> real publish date (derived from content/slug context)
# Strategy: extract year from slug, use git log date if available, else derive from slug
def get_date_from_slug(slug):
    """Try to infer publish date from slug name and file mtime."""
    # Slugs ending in -2026 or -2025 give us the year
    year_match = re.search(r'-(202[456])(?:\.html)?$', slug)
    year = year_match.group(1) if year_match else None
    return year

fixed = 0
unchanged = 0
errors = 0

article_files = glob.glob('articles/*.html')

for filepath in article_files:
    slug = os.path.basename(filepath).replace('.html', '')
    year = get_date_from_slug(slug)
    
    if not year:
        # Can't determine year - skip
        unchanged += 1
        continue
    
    with open(filepath, 'r') as f:
        content = f.read()
    
    # Find the NewsArticle JSON-LD block
    def fix_dates(match):
        pre = match.group(1)
        json_block = match.group(2)
        post = match.group(3)
        
        if '"NewsArticle"' not in json_block and '"Article"' not in json_block:
            return match.group(0)
        
        try:
            data = json.loads(json_block)
        except:
            return match.group(0)
        
        changed = False
        
        # Fix placeholder datePublished
        pub = data.get('datePublished', '')
        if pub in ('2026-01-01T12:00:00+00:00', '2025-01-01T12:00:00+00:00', '2025-01-01', '2026-01-01'):
            # Use git log to get real commit date for this file
            import subprocess
            result = subprocess.run(
                ['git', 'log', '--follow', '--format=%aI', '-1', filepath],
                capture_output=True, text=True
            )
            git_date = result.stdout.strip()
            
            if git_date:
                # Use the actual git date
                data['datePublished'] = git_date
                data['dateModified'] = git_date
                changed = True
            else:
                # Fallback: use file mtime
                mtime = os.path.getmtime(filepath)
                dt = datetime.fromtimestamp(mtime).strftime('%Y-%m-%dT%H:%M:%S+00:00')
                data['datePublished'] = dt
                data['dateModified'] = dt
                changed = True
        
        if changed:
            return pre + '\n' + json.dumps(data, indent=2) + '\n' + post
        return match.group(0)
    
    new_content = re.sub(
        r'(<script type="application/ld\+json">\s*)(.*?)(\s*</script>)',
        fix_dates,
        content,
        flags=re.DOTALL
    )
    
    if new_content != content:
        with open(filepath, 'w') as f:
            f.write(new_content)
        fixed += 1
    else:
        unchanged += 1

print(f"datePublished fixed: {fixed} files")
print(f"Unchanged: {unchanged} files")
