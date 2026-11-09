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
article_list_html_path = repo_root / 'article-list.html'
articles_list_html_path = repo_root / 'articles-list.html'
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

def generate_rl_card_html(article):
    url = article.get('externalUrl', '')
    if not url or url == '#' or url == 'None':
        return ""
    if not url.startswith('/') and not url.startswith('http'):
        url = '/' + url
    image_url = article.get('image', '')
    if image_url and not image_url.startswith('/') and not image_url.startswith('http'):
        image_url = '/' + image_url
    title_escaped = html.escape(article.get('title', ''), quote=True)
    url_escaped = html.escape(url, quote=True)
    image_url_escaped = html.escape(image_url, quote=True)
    excerpt_escaped = html.escape(article.get('excerpt', ''), quote=True)
    category_escaped = html.escape(article.get('category', 'Threat Intelligence'), quote=True)
    date_escaped = html.escape(article.get('date', 'Recent'), quote=True)
    read_time_escaped = html.escape(article.get('readTime', '6 min read'), quote=True)
    author_escaped = html.escape(article.get('author', 'Harish G'), quote=True)
    aid_escaped = html.escape(article.get('id', ''), quote=True)
    
    if image_url:
        media_html = f'<img src="{image_url_escaped}" alt="{title_escaped}" class="rl-card-img" loading="lazy" onerror="this.outerHTML=getPlaceholderSvg(\'{category_escaped}\');">'
    else:
        media_html = f'''<div class="rl-card-placeholder">
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" style="margin-bottom:0.5rem;color:var(--cs-brand-red);">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            <span style="font-family:var(--ed-font-mono);font-size:0.75rem;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;">{category_escaped}</span>
        </div>'''
    
    return f"""
    <a href="{url_escaped}" class="rl-card" data-id="{aid_escaped}" aria-label="{title_escaped}">
        <div class="rl-card-media">
            {media_html}
            <span class="rl-card-category-pill">{category_escaped}</span>
            <span class="rl-card-read-badge">{read_time_escaped}</span>
        </div>
        <div class="rl-card-body">
            <div class="rl-card-meta">
                <span class="rl-card-date">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right:3px;"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
                    {date_escaped}
                </span>
            </div>
            <h3 class="rl-card-title">{title_escaped}</h3>
            <p class="rl-card-excerpt">{excerpt_escaped}</p>
            <div class="rl-card-footer">
                <span class="rl-card-author">By {author_escaped}</span>
                <span class="rl-card-action">
                    Read Full Analysis
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </span>
            </div>
        </div>
    </a>"""

def generate_rl_pagination_html(current_page, total_pages):
    html_out = '<nav class="rl-pagination" id="rlPagination" aria-label="Research Library Pagination">\n'
    if current_page > 1:
        prev_href = f"/articles/page/{current_page-1}/" if current_page > 2 else "/article-list.html"
        html_out += f'    <a href="{prev_href}" class="rl-page-btn" aria-label="Previous Page">&larr; Prev</a>\n'
    else:
        html_out += '    <button type="button" class="rl-page-btn" disabled aria-label="Previous Page">&larr; Prev</button>\n'
        
    for p in range(1, total_pages + 1):
        if p == current_page:
            html_out += f'    <button type="button" class="rl-page-btn active" aria-current="page">{p}</button>\n'
        else:
            p_href = f"/articles/page/{p}/" if p > 1 else "/article-list.html"
            html_out += f'    <a href="{p_href}" class="rl-page-btn">{p}</a>\n'
            
    if current_page < total_pages:
        next_href = f"/articles/page/{current_page+1}/"
        html_out += f'    <a href="{next_href}" class="rl-page-btn" aria-label="Next Page">Next &rarr;</a>\n'
    else:
        html_out += '    <button type="button" class="rl-page-btn" disabled aria-label="Next Page">Next &rarr;</button>\n'
        
    html_out += '</nav>'
    return html_out

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

with open(article_list_html_path, 'r', encoding='utf-8') as f:
    raw_articles_html = f.read()

# Update embeddedArticlesData with current articles (including repaired externalUrls)
updated_articles_json_str = json.dumps(articles, indent=4)
raw_articles_html = re.sub(
    r'<script id="embeddedArticlesData" type="application/json">.*?</script>',
    lambda m: f'<script id="embeddedArticlesData" type="application/json">\n{updated_articles_json_str}\n    </script>',
    raw_articles_html,
    flags=re.DOTALL
)

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
    
    page_cards = "\n".join(generate_rl_card_html(a) for a in page_articles)
    page_nav = generate_rl_pagination_html(page, total_pages)
    
    page_content = template_abs
    
    # Replace the article grid with static HTML cards for this page
    page_content = re.sub(
        r'<section class="rl-grid" id="rlArticlesGrid"[^>]*>.*?</section>',
        lambda m: f'<section class="rl-grid" id="rlArticlesGrid" aria-label="Articles Listing">\n{page_cards}\n        </section>',
        page_content,
        flags=re.DOTALL
    )
    
    # Replace pagination controls
    page_content = re.sub(
        r'<nav class="rl-pagination" id="rlPagination"[^>]*>.*?</nav>',
        lambda m: page_nav,
        page_content,
        flags=re.DOTALL
    )
    
    # Update results counter
    page_content = re.sub(
        r'<div id="rlResultsCounter">[^<]*</div>',
        f'<div id="rlResultsCounter">Showing {start_idx + 1}–{min(end_idx, len(standalone_articles))} of {len(standalone_articles)} published analyses</div>',
        page_content
    )
    
    # Metadata adjustments for paginated pages
    # Enforce noindex, follow to keep archives out of search results while following article links
    page_content = re.sub(
        r'<meta\s+name=["\']robots["\']\s+content=["\'][^"\']*["\'][^>]*>+',
        '<meta name="robots" content="noindex, follow">',
        page_content,
        count=1
    )
    if page == 1:
        # Page 1 canonical points to article-list.html
        page_content = re.sub(
            r'<link\s+rel="canonical"\s+href="[^"]*"[^>]*>',
            '<link rel="canonical" href="https://thehgtech.com/article-list.html">',
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

# 2. Update article-list.html and articles-list.html
page_1_cards = "\n".join(generate_rl_card_html(a) for a in standalone_articles[:ITEMS_PER_PAGE])
page_1_nav = generate_rl_pagination_html(1, total_pages)

final_articles_html = clean_template
final_articles_html = re.sub(
    r'<section class="rl-grid" id="rlArticlesGrid"[^>]*>.*?</section>',
    lambda m: f'<section class="rl-grid" id="rlArticlesGrid" aria-label="Articles Listing">\n{page_1_cards}\n        </section>',
    final_articles_html,
    flags=re.DOTALL
)
final_articles_html = re.sub(
    r'<nav class="rl-pagination" id="rlPagination"[^>]*>.*?</nav>',
    lambda m: page_1_nav,
    final_articles_html,
    flags=re.DOTALL
)
final_articles_html = re.sub(
    r'<div id="rlResultsCounter">[^<]*</div>',
    f'<div id="rlResultsCounter">Showing 1–{min(ITEMS_PER_PAGE, len(standalone_articles))} of {len(standalone_articles)} published analyses</div>',
    final_articles_html
)
final_articles_html = re.sub(
    r'<meta\s+name=["\']robots["\']\s+content=["\'][^"\']*["\'][^>]*>+',
    '<meta name="robots" content="noindex, follow">',
    final_articles_html,
    count=1
)

with open(article_list_html_path, 'w', encoding='utf-8') as f:
    f.write(final_articles_html)

with open(articles_list_html_path, 'w', encoding='utf-8') as f:
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
