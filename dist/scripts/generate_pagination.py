import os
import json
import re

import sys

# Get the repo root based on the script location (assuming it's in scripts/ or a subdirectory)
script_dir = os.path.dirname(os.path.abspath(__file__))
# Check if we are inside scripts/ or root
if os.path.basename(script_dir) == 'scripts':
    repo_root = os.path.dirname(script_dir)
else:
    repo_root = os.getcwd()

articles_json_path = os.path.join(repo_root, 'ioc-data', 'articles.json')
articles_html_path = os.path.join(repo_root, 'articles.html')
index_html_path = os.path.join(repo_root, 'index.html')
pages_dir = os.path.join(repo_root, 'articles', 'page')

if not os.path.exists(pages_dir):
    os.makedirs(pages_dir)

with open(articles_json_path, 'r') as f:
    data = json.load(f)
articles = data.get('articles', [])

with open(articles_html_path, 'r') as f:
    template = f.read()

def make_absolute(match):
    attr = match.group(1)
    val = match.group(2)
    if val.startswith('/') or val.startswith('http') or val.startswith('data:') or val.startswith('#') or val.startswith('mailto:') or val.startswith('javascript:'):
        return match.group(0)
    return f'{attr}="/{val}"'

template_abs = re.sub(r'(href)="([^"]+)"', make_absolute, template)
template_abs = re.sub(r'(src)="([^"]+)"', make_absolute, template_abs)

ITEMS_PER_PAGE = 12
total_pages = (len(articles) + ITEMS_PER_PAGE - 1) // ITEMS_PER_PAGE

loading_html_articles = '''<div class="loading">
                <div class="spinner"></div>
                <p>Loading articles...</p>
            </div>'''

def generate_article_html(article):
    url = article.get('externalUrl', '#')
    if not url.startswith('/') and not url.startswith('http'):
        url = '/' + url
    image_url = article.get('image', '')
    if image_url and not image_url.startswith('/') and not image_url.startswith('http'):
        image_url = '/' + image_url
    return f"""
    <article class="article-card" style="display:block;">
        <a href="{url}" style="text-decoration:none; color:inherit;">
            <div class="article-image">
                <img src="{image_url}" alt="{article.get('title', '')}" loading="lazy">
                <div class="article-category">{article.get('category', 'Article')}</div>
            </div>
            <div class="article-content">
                <div class="article-meta">
                    <span>{article.get('date', '')}</span>
                    <span>{article.get('readTime', '')}</span>
                </div>
                <h2 class="article-title">{article.get('title', '')}</h2>
                <p class="article-excerpt">{article.get('excerpt', '')}</p>
            </div>
        </a>
    </article>
    """

# 1. Generate Paginated Pages
for page in range(1, total_pages + 1):
    page_dir = os.path.join(pages_dir, str(page))
    if not os.path.exists(page_dir):
        os.makedirs(page_dir)
        
    start_idx = (page - 1) * ITEMS_PER_PAGE
    end_idx = start_idx + ITEMS_PER_PAGE
    page_articles = articles[start_idx:end_idx]
    
    articles_html = ""
    for article in page_articles:
        articles_html += generate_article_html(article)
        
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
    
    page_content = template_abs.replace(
        loading_html_articles,
        loading_html_articles + "\n<noscript>\n<div style='display:grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap:2rem;'>" + articles_html + "</div>" + pagination_html + "\n</noscript>"
    )
    
    if page > 1:
        page_content = page_content.replace(
            '<link rel="canonical" href="https://thehgtech.com/articles.html">',
            f'<link rel="canonical" href="https://thehgtech.com/articles/page/{page}/">'
        )
        
    with open(os.path.join(page_dir, 'index.html'), 'w') as f:
        f.write(page_content)

# 2. Inject static fallback into articles.html
articles_html = ""
for article in articles[:ITEMS_PER_PAGE]:
    articles_html += generate_article_html(article)

with open(articles_html_path, 'r') as f:
    orig_articles_html = f.read()

orig_articles_html = orig_articles_html.replace(
    loading_html_articles,
    loading_html_articles + "\n<noscript>\n<div style='display:grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap:2rem;'>" + articles_html + "</div><div style='text-align:center; margin-top:2rem;'><a href='/articles/page/2/' style='color:#fff;'>Next Page</a></div>\n</noscript>"
)

with open(articles_html_path, 'w') as f:
    f.write(orig_articles_html)

# 3. Inject static fallback into index.html
with open(index_html_path, 'r') as f:
    orig_index_html = f.read()
    
loading_html_index = '''<div style="text-align: center; padding: 2rem; color: var(--text-muted);">
                                <i class="fas fa-spinner fa-spin"></i> Loading articles...
                            </div>'''

index_articles_html = ""
for article in articles[:6]: # Index usually shows fewer articles
    url = article.get('externalUrl', '#')
    if not url.startswith('/') and not url.startswith('http'):
        url = '/' + url
    image_url = article.get('image', '')
    if image_url and not image_url.startswith('/') and not image_url.startswith('http'):
        image_url = '/' + image_url
    index_articles_html += f"""
    <a href="{url}" class="featured-card" style="display:flex; gap:1.5rem; text-decoration:none; background:var(--bg-card); padding:1.5rem; border-radius:12px; border:1px solid var(--border);">
        <img src="{image_url}" alt="{article.get('title', '')}" style="width:120px; height:80px; object-fit:cover; border-radius:8px;" loading="lazy">
        <div>
            <div style="font-size:0.8rem; color:var(--text-muted); margin-bottom:0.5rem;">{article.get('date', '')}</div>
            <h3 style="font-size:1.1rem; color:var(--text-primary); margin-bottom:0.5rem;">{article.get('title', '')}</h3>
        </div>
    </a>
    """
    
orig_index_html = orig_index_html.replace(
    loading_html_index,
    loading_html_index + "\n<noscript>\n<div style='display:flex; flex-direction:column; gap:1rem;'>" + index_articles_html + "</div>\n</noscript>"
)

with open(index_html_path, 'w') as f:
    f.write(orig_index_html)

print("Pagination and static fallbacks generated successfully!")
