import re

# Read index.html header
with open('/Volumes/Data-Personal/Webpage/thehgtech/index.html', 'r') as f:
    index_content = f.read()

header_match = re.search(r'(<header class="header" role="banner">.*?</header>)', index_content, re.DOTALL)
if not header_match:
    print("Could not find header in index.html")
    exit(1)
new_header = header_match.group(1)

# Read article
article_path = '/Volumes/Data-Personal/Webpage/thehgtech/articles/beyond-klue-salesforce-saas-trust-crisis-2026.html'
with open(article_path, 'r') as f:
    article_content = f.read()

# Replace header
article_content = re.sub(r'<header class="header" role="banner">.*?</header>', new_header, article_content, count=1, flags=re.DOTALL)

# Replace image
article_content = article_content.replace(
    'src="/images/articles/beyond-klue-salesforce-saas-trust-crisis-2026.png"',
    'src="/images/articles/beyond-klue-hero-new.jpg"'
)

# Add theme-toggle scripts/styles
if 'theme-toggle.js' not in article_content:
    article_content = article_content.replace('</head>', '    <script src="/theme-toggle.js" defer></script>\n</head>')
if 'theme-toggle.css' not in article_content:
    article_content = article_content.replace('</head>', '    <link rel="stylesheet" href="/theme-toggle.css">\n</head>')

# Ensure app.js or m-app.js is there for mobile menu? It probably is, but index.html has m-app.min.js
if 'm-app.min.js' not in article_content and 'm-app.js' not in article_content:
    article_content = article_content.replace('</head>', '    <script src="/m-app.min.js" defer></script>\n</head>')

with open(article_path, 'w') as f:
    f.write(article_content)

print("Article updated successfully.")
