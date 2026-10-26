import os
import json
import re
import sys
import html
import shutil
from pathlib import Path

# Get the repo root based on the script location
script_dir = Path(__file__).resolve().parent
repo_root = script_dir.parent if script_dir.name == 'scripts' else Path.cwd()

articles_json_path = repo_root / 'ioc-data' / 'articles.json'
articles_html_path = repo_root / 'articles.html'
index_html_path = repo_root / 'index.html'
guides_json_path = repo_root / 'guides' / 'guides.json'
guides_html_path = repo_root / 'guides' / 'index.html'
pages_dir = repo_root / 'articles' / 'page'

pages_dir.mkdir(parents=True, exist_ok=True)

with open(articles_json_path, 'r', encoding='utf-8') as f:
    data = json.load(f)
articles = data.get('articles', [])

# Filter for standalone articles with valid standalone URLs
standalone_articles = [
    a for a in articles 
    if a.get('externalUrl') and a.get('externalUrl') != '#' and a.get('externalUrl') != 'None'
]

loading_html_articles = '''<div class="loading">
                <div class="spinner"></div>
                <p>Loading articles...</p>
            </div>'''

loading_html_index = '''<div style="text-align: center; padding: 2rem; color: var(--text-muted);">
                                <i class="fas fa-spinner fa-spin"></i> Loading articles...
                            </div>'''

loading_html_guides = '''<div class="loading">
                <div class="spinner"></div>
                <p>Loading guides...</p>
            </div>'''

MARKER_ARTICLES_START = "<!-- GENERATED-ARTICLES-FALLBACK-START -->"
MARKER_ARTICLES_END = "<!-- GENERATED-ARTICLES-FALLBACK-END -->"

MARKER_INDEX_START = "<!-- GENERATED-INDEX-FALLBACK-START -->"
MARKER_INDEX_END = "<!-- GENERATED-INDEX-FALLBACK-END -->"

MARKER_GUIDES_START = "<!-- GENERATED-GUIDES-FALLBACK-START -->"
MARKER_GUIDES_END = "<!-- GENERATED-GUIDES-FALLBACK-END -->"

def make_absolute(match):
    attr = match.group(1)
    val = match.group(2)
    # Do not rewrite absolute URLs, schemes, anchors, or JS template literal expressions
    if (val.startswith('/') or val.startswith('http') or 
        val.startswith('data:') or val.startswith('#') or 
        val.startswith('mailto:') or val.startswith('javascript:') or 
        val.startswith('$') or val.startswith('{')):
        return match.group(0)
    return f'{attr}="/{val}"'

def clean_articles_template(content):
    """Extract clean template by removing any existing generated fallback or accumulated noscripts."""
    if MARKER_ARTICLES_START in content and MARKER_ARTICLES_END in content:
        pattern = re.compile(rf'\s*{re.escape(MARKER_ARTICLES_START)}.*?{re.escape(MARKER_ARTICLES_END)}', re.DOTALL)
        content = pattern.sub('', content)
    # Clean legacy static-article-list if present
    content = re.sub(r'\s*<noscript>\s*<div class="static-article-list".*?</noscript>', '', content, flags=re.DOTALL)
    # Also clean accumulated legacy noscripts if present
    pattern_legacy = re.compile(
        rf'({re.escape(loading_html_articles)})\s*(?:<noscript>\s*<div style=[\"\']display:grid; grid-template-columns: repeat\(auto-fill, minmax\(300px, 1fr\)\); gap:2rem;[\"\']>.*?</noscript>\s*)+',
        re.DOTALL
    )
    return pattern_legacy.sub(r'\1', content)

def clean_index_template(content):
    """Clean index.html by removing existing generated fallback or accumulated noscripts."""
    if MARKER_INDEX_START in content and MARKER_INDEX_END in content:
        pattern = re.compile(rf'\s*{re.escape(MARKER_INDEX_START)}.*?{re.escape(MARKER_INDEX_END)}', re.DOTALL)
        content = pattern.sub('', content)
    pattern_legacy = re.compile(
        rf'({re.escape(loading_html_index)})\s*(?:<noscript>\s*<div style=[\"\']display:flex; flex-direction:column; gap:1rem;[\"\']>.*?</noscript>\s*)+',
        re.DOTALL
    )
    return pattern_legacy.sub(r'\1', content)

def clean_guides_template(content):
    """Clean guides/index.html by removing existing generated fallback."""
    if MARKER_GUIDES_START in content and MARKER_GUIDES_END in content:
        pattern = re.compile(rf'\s*{re.escape(MARKER_GUIDES_START)}.*?{re.escape(MARKER_GUIDES_END)}', re.DOTALL)
        return pattern.sub('', content)
    return content

def generate_article_html(article):
    url = article.get('externalUrl', '')
    if not url or url == '#' or url == 'None':
        return ""
    if not url.startswith('/') and not url.startswith('http'):
        url = '/' + url
    image_url = article.get('image', '')
    if image_url and not image_url.startswith('/') and not image_url.startswith('http'):
        image_url = '/' + image_url
    title = article.get('title', '')
    title_escaped = html.escape(title, quote=True)
    url_escaped = html.escape(url, quote=True)
    image_url_escaped = html.escape(image_url, quote=True)
    excerpt_escaped = html.escape(article.get('excerpt', ''), quote=True)
    category_escaped = html.escape(article.get('category', 'Article'), quote=True)
    date_escaped = html.escape(article.get('date', ''), quote=True)
    read_time_escaped = html.escape(article.get('readTime', ''), quote=True)
    
    return f"""
    <article class="article-card" style="display:block;">
        <a href="{url_escaped}" style="text-decoration:none; color:inherit;">
            <div class="article-image">
                <img src="{image_url_escaped}" alt="{title_escaped}" loading="lazy">
                <div class="article-category">{category_escaped}</div>
            </div>
            <div class="article-content">
                <div class="article-meta">
                    <span>{date_escaped}</span>
                    <span>{read_time_escaped}</span>
                </div>
                <h2 class="article-title">{title_escaped}</h2>
                <p class="article-excerpt">{excerpt_escaped}</p>
            </div>
        </a>
    </article>
    """

with open(articles_html_path, 'r', encoding='utf-8') as f:
    raw_articles_html = f.read()

clean_template = clean_articles_template(raw_articles_html)
template_abs = re.sub(r'(href)="([^"]+)"', make_absolute, clean_template)
template_abs = re.sub(r'(src)="([^"]+)"', make_absolute, template_abs)

ITEMS_PER_PAGE = 12
total_pages = (len(standalone_articles) + ITEMS_PER_PAGE - 1) // ITEMS_PER_PAGE

# 1. Generate Paginated Pages
for page in range(1, total_pages + 1):
    page_dir = pages_dir / str(page)
    page_dir.mkdir(parents=True, exist_ok=True)
        
    start_idx = (page - 1) * ITEMS_PER_PAGE
    end_idx = start_idx + ITEMS_PER_PAGE
    page_articles = standalone_articles[start_idx:end_idx]
    
    articles_html_block = "".join(generate_article_html(a) for a in page_articles)
        
    pagination_html = '<div class="pagination" style="display:flex; justify-content:center; gap:10px; margin-top:2rem; width:100%;">'
    if page > 1:
        prev_url = f"/articles/page/{page-1}/" if page > 2 else "/articles.html"
        pagination_html += f'<a href="{prev_url}" style="padding:10px 20px; background:var(--glass-border); border-radius:5px; color:#fff; text-decoration:none;">Previous</a>'
    
    for p in range(max(1, page-2), min(total_pages + 1, page+3)):
        url = f"/articles/page/{p}/" if p > 1 else "/articles.html"
        active = 'background:var(--accent-cyan); color:#000;' if p == page else 'background:var(--glass-border); color:#fff;'
        pagination_html += f'<a href="{url}" style="padding:10px 15px; border-radius:5px; text-decoration:none; {active}">{p}</a>'
        
    if page < total_pages:
        pagination_html += f'<a href="/articles/page/{page+1}/" style="padding:10px 20px; background:var(--glass-border); border-radius:5px; color:#fff; text-decoration:none;">Next</a>'
    pagination_html += '</div>'
    
    page_fallback = f"\n{MARKER_ARTICLES_START}\n<noscript>\n<div style='display:grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap:2rem;'>{articles_html_block}</div>{pagination_html}\n</noscript>\n{MARKER_ARTICLES_END}"
    
    page_content = template_abs.replace(loading_html_articles, loading_html_articles + page_fallback)
    
    # Metadata adjustments for paginated pages
    if page == 1:
        # Page 1 canonical points to articles.html
        page_content = re.sub(
            r'<link\s+rel="canonical"\s+href="[^"]*"[^>]*>',
            '<link rel="canonical" href="https://thehgtech.com/articles.html">',
            page_content
        )
    else:
        # Page 2+ canonical
        page_content = re.sub(
            r'<link\s+rel="canonical"\s+href="[^"]*"[^>]*>',
            f'<link rel="canonical" href="https://thehgtech.com/articles/page/{page}/">',
            page_content
        )
        # Unique Title
        page_content = re.sub(
            r'<title>(.*?)</title>',
            f'<title>Cybersecurity & AI Articles - Page {page} | TheHGTech</title>',
            page_content,
            count=1
        )
        # Unique Meta Description
        page_content = re.sub(
            r'<meta\s+name="description"\s+content="[^"]*"',
            f'<meta name="description" content="Browse page {page} of expert cybersecurity analysis, AI security research, threat intelligence, and vulnerability research from TheHGTech."',
            page_content,
            count=1
        )
        # Unique OG tags
        page_content = re.sub(
            r'<meta\s+property="og:url"\s+content="[^"]*"',
            f'<meta property="og:url" content="https://thehgtech.com/articles/page/{page}/"',
            page_content,
            count=1
        )
        page_content = re.sub(
            r'<meta\s+property="og:title"\s+content="[^"]*"',
            f'<meta property="og:title" content="Cybersecurity & AI Articles - Page {page} | TheHGTech"',
            page_content,
            count=1
        )

    with open(page_dir / 'index.html', 'w', encoding='utf-8') as f:
        f.write(page_content)

# Clean up any obsolete page directories beyond total_pages
for entry in pages_dir.iterdir():
    if entry.is_dir() and entry.name.isdigit():
        if int(entry.name) > total_pages:
            shutil.rmtree(entry)
            print(f"Removed obsolete page directory: {entry}")

# 2. Inject static fallback into articles.html
articles_html_block = "".join(generate_article_html(a) for a in standalone_articles[:ITEMS_PER_PAGE])
articles_fallback = f"\n{MARKER_ARTICLES_START}\n<noscript>\n<div style='display:grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap:2rem;'>{articles_html_block}</div><div style='text-align:center; margin-top:2rem;'><a href='/articles/page/2/' style='color:#fff;'>Next Page</a></div>\n</noscript>\n{MARKER_ARTICLES_END}"

final_articles_html = clean_template.replace(loading_html_articles, loading_html_articles + articles_fallback)

with open(articles_html_path, 'w', encoding='utf-8') as f:
    f.write(final_articles_html)

# 3. Inject static fallback into index.html
with open(index_html_path, 'r', encoding='utf-8') as f:
    raw_index_html = f.read()

clean_index = clean_index_template(raw_index_html)

index_articles_html = ""
for article in standalone_articles[:6]:
    url = article.get('externalUrl', '#')
    if not url.startswith('/') and not url.startswith('http'):
        url = '/' + url
    image_url = article.get('image', '')
    if image_url and not image_url.startswith('/') and not image_url.startswith('http'):
        image_url = '/' + image_url
    title_escaped = html.escape(article.get('title', ''), quote=True)
    url_escaped = html.escape(url, quote=True)
    image_url_escaped = html.escape(image_url, quote=True)
    date_escaped = html.escape(article.get('date', ''), quote=True)
    
    index_articles_html += f"""
    <a href="{url_escaped}" class="featured-card" style="display:flex; gap:1.5rem; text-decoration:none; background:var(--bg-card); padding:1.5rem; border-radius:12px; border:1px solid var(--border);">
        <img src="{image_url_escaped}" alt="{title_escaped}" style="width:120px; height:80px; object-fit:cover; border-radius:8px;" loading="lazy">
        <div>
            <div style="font-size:0.8rem; color:var(--text-muted); margin-bottom:0.5rem;">{date_escaped}</div>
            <h3 style="font-size:1.1rem; color:var(--text-primary); margin-bottom:0.5rem;">{title_escaped}</h3>
        </div>
    </a>
    """

index_fallback = f"\n{MARKER_INDEX_START}\n<noscript>\n<div style='display:flex; flex-direction:column; gap:1rem;'>{index_articles_html}</div>\n</noscript>\n{MARKER_INDEX_END}"

final_index_html = clean_index.replace(loading_html_index, loading_html_index + index_fallback)

with open(index_html_path, 'w', encoding='utf-8') as f:
    f.write(final_index_html)

# 4. Inject static fallback into guides/index.html
if guides_json_path.exists() and guides_html_path.exists():
    with open(guides_json_path, 'r', encoding='utf-8') as f:
        gdata = json.load(f)
    guides_list = gdata.get('guides', gdata)
    
    with open(guides_html_path, 'r', encoding='utf-8') as f:
        raw_guides_html = f.read()
        
    clean_guides = clean_guides_template(raw_guides_html)
    
    guides_cards_html = ""
    for g in guides_list:
        gid = g.get('id', '')
        gurl = f"/guides/{gid}.html"
        gtitle = html.escape(g.get('title', ''), quote=True)
        gcat = html.escape(g.get('category', 'Guide'), quote=True)
        gexcerpt = html.escape(g.get('excerpt', ''), quote=True)
        gimg = g.get('image', '/images/guides/default-guide.png')
        if not gimg.startswith('/') and not gimg.startswith('http'):
            gimg = '/' + gimg
        gimg_escaped = html.escape(gimg, quote=True)
        
        guides_cards_html += f"""
        <article class="guide-card" style="display:block;">
            <a href="{gurl}" style="text-decoration:none; color:inherit;">
                <div class="guide-image">
                    <img src="{gimg_escaped}" alt="{gtitle}" loading="lazy">
                    <div class="guide-category">{gcat}</div>
                </div>
                <div class="guide-content">
                    <h2 class="guide-title">{gtitle}</h2>
                    <p class="guide-excerpt">{gexcerpt}</p>
                </div>
            </a>
        </article>
        """
        
    guides_fallback = f"\n{MARKER_GUIDES_START}\n<noscript>\n<div style='display:grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap:2rem;'>{guides_cards_html}</div>\n</noscript>\n{MARKER_GUIDES_END}"
    
    final_guides_html = clean_guides.replace(loading_html_guides, loading_html_guides + guides_fallback)
    with open(guides_html_path, 'w', encoding='utf-8') as f:
        f.write(final_guides_html)
    print("Injected static fallback into guides/index.html")

print(f"Pagination and static fallbacks generated successfully! Total pages: {total_pages}")
