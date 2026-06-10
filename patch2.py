with open('/tmp/m-header.html', 'r') as f:
    m_header = f.read()

with open('/Volumes/Data-Personal/Webpage/thehgtech/articles/claude-fable-ai-governance-2026.html', 'r') as f:
    html = f.read()

html = html.replace('<!-- Desktop Header -->', m_header + '\n<!-- Desktop Header -->')
html = html.replace('<h1 style="font-size: 3rem; line-height: 1.2; margin-bottom: 1rem;">', '<h1>')

# Make sure google fonts and font awesome were injected properly
if 'https://fonts.googleapis.com/css2?family=Inter' not in html:
    html = html.replace('<link rel="stylesheet" href="/header.css">', '    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">\n    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">\n    <link rel="stylesheet" href="/header.css">')

with open('/Volumes/Data-Personal/Webpage/thehgtech/articles/claude-fable-ai-governance-2026.html', 'w') as f:
    f.write(html)
