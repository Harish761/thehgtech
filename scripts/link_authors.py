import glob
import re
from pathlib import Path

repo_root = Path(__file__).resolve().parent.parent

files = list((repo_root / 'articles').glob('*.html')) + list((repo_root / 'guides').glob('*.html'))
updated = 0

for fpath in files:
    if fpath.name == 'index.html':
        continue
    content = fpath.read_text(encoding='utf-8')
    orig = content

    # 1. <p><strong>Author:</strong> Harish G</p>
    content = re.sub(
        r'(<strong>\s*Author:?\s*</strong>\s*)Harish G(?!\s*</a>)',
        r'\1<a href="/about.html#harish-g" rel="author">Harish G</a>',
        content,
        flags=re.IGNORECASE
    )

    # 2. <span><i class="fa... fa-user..."></i> Harish G</span>
    content = re.sub(
        r'(<i class=[\"\']fa[srb]? fa-user[^\"]*[\"\']></i>\s*)Harish G(?!\s*</a>)',
        r'\1<a href="/about.html#harish-g" rel="author" style="color:inherit; text-decoration:none;">Harish G</a>',
        content,
        flags=re.IGNORECASE
    )

    # 3. <span class="author">Harish G</span>
    content = re.sub(
        r'(<span[^>]*class=[\"\'][^\"\']*author[^\"]*[\"\'][^>]*>\s*)Harish G(?!\s*</a>)',
        r'\1<a href="/about.html#harish-g" rel="author" style="color:inherit; text-decoration:none;">Harish G</a>',
        content,
        flags=re.IGNORECASE
    )

    # 4. In article header/meta: By Harish G
    content = re.sub(
        r'(\bBy\s+)Harish G(?!\s*</a>)',
        r'\1<a href="/about.html#harish-g" rel="author">Harish G</a>',
        content
    )

    # 5. Fix any LinkedIn references to canonical
    content = content.replace('linkedin.com/in/harish-g-03704815a', 'linkedin.com/in/harish-g-2216955b')
    content = content.replace('linkedin.com/in/harish-g-4648781a7', 'linkedin.com/in/harish-g-2216955b')

    if content != orig:
        fpath.write_text(content, encoding='utf-8')
        updated += 1

print(f"Upgraded author bylines in {updated} files.")
