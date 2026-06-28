import re
with open('/Volumes/Data-Personal/Webpage/thehgtech/articles/claude-fable-ai-governance-2026.html', 'r') as f:
    html = f.read()

# 1. Fix Mermaid error
html = html.replace('subgraph Traditional Enterprise Security', 'subgraph Traditional_Enterprise_Security ["Traditional Enterprise Security"]')
html = html.replace('subgraph Frontier AI Security (The Fable Model)', 'subgraph Frontier_AI_Security ["Frontier AI Security (The Fable Model)"]')

# 2. Fix container to article-container
html = html.replace('<div class="container">', '<main class="article-container">')
html = html.replace('</div>\n\n<footer>', '</main>\n\n<footer>')

# 3. Fix header tags (h1 styling)
html = html.replace('<header style="margin-bottom: 3rem;">', '<header class="article-header">')

# 4. Remove inline styles from image to use class
html = html.replace('alt="Cybersecurity illustration of AI Governance and Control Layers" style="width: 100%; border-radius: 12px; border: 1px solid var(--border); box-shadow: 0 4px 24px rgba(0,217,255,0.1);">', 'alt="Cybersecurity illustration of AI Governance and Control Layers" class="featured-image">')

# 5. Fix <style> block in head
style_block_old = """    <style>
        :root {
            --bg-primary: #0a0a0a;
            --accent-cyan: #00D9FF;
            --accent-red: #FF3D3D;
            --code-bg: #111;
        }
    </style>"""

style_block_new = """    <style>
        :root {
            --bg-primary: #0a0a0a;
            --bg-secondary: #111111;
            --text-primary: #ffffff;
            --text-secondary: #a0a0a0;
            --accent-cyan: #00D9FF;
            --accent-red: #FF3D3D;
            --border: rgba(255, 255, 255, 0.1);
            --code-bg: #111;
        }

        body {
            font-family: 'Inter', sans-serif;
            background: var(--bg-primary);
            color: var(--text-primary);
            line-height: 1.7;
            font-size: 18px;
        }

        .article-container {
            max-width: 800px;
            margin: 80px auto 0;
            padding: 2rem;
        }

        .back-link {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            color: var(--accent-cyan);
            text-decoration: none;
            margin-bottom: 2rem;
            font-size: 0.9rem;
            transition: color 0.3s;
        }

        .back-link:hover {
            color: var(--text-primary);
        }

        .article-header {
            margin-bottom: 2rem;
            padding-bottom: 2rem;
            border-bottom: 1px solid var(--border);
            text-align: left;
        }

        h1 {
            font-size: 2.2rem;
            line-height: 1.2;
            margin-bottom: 1rem;
            background: linear-gradient(135deg, #fff 0%, var(--accent-cyan) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .article-meta {
            display: flex;
            flex-wrap: wrap;
            gap: 1.5rem;
            color: var(--text-secondary);
            font-size: 0.9rem;
            margin-bottom: 1rem;
        }

        .article-content h2 {
            color: var(--accent-cyan);
            margin: 2.5rem 0 1rem;
            font-size: 1.6rem;
            border-bottom: 1px solid var(--border);
            padding-bottom: 0.5rem;
        }

        .article-content h3 {
            color: var(--text-primary);
            margin: 1.5rem 0 1rem;
            font-size: 1.3rem;
        }

        .article-content p {
            margin-bottom: 1.5rem;
            font-size: 1.15rem;
            color: var(--text-secondary);
        }

        .featured-image {
            width: 100%;
            border-radius: 12px;
            margin: 2rem 0;
            border: 1px solid var(--border);
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
        }
        
        .article-image {
            width: 100%;
            border-radius: 8px;
            margin: 1.5rem 0;
            border: 1px solid var(--border);
        }

        .technical-box {
            background: rgba(0, 217, 255, 0.03);
            border: 1px solid var(--border);
            border-left: 5px solid var(--accent-cyan);
            padding: 1.5rem 2rem;
            border-radius: 8px;
            margin: 2.5rem 0;
        }

        .technical-box > *:first-child,
        .warning-box > *:first-child {
            margin-top: 0;
        }

        .warning-box {
            background: rgba(255, 61, 61, 0.05);
            border: 1px solid rgba(255, 61, 61, 0.2);
            border-left: 5px solid var(--accent-red);
            padding: 1.5rem 2rem;
            border-radius: 8px;
            margin: 2.5rem 0;
        }
        
        .success-box {
            background: rgba(16, 185, 129, 0.05);
            border: 1px solid rgba(16, 185, 129, 0.2);
            border-left: 5px solid #10B981;
            padding: 1.5rem 2rem;
            border-radius: 8px;
            margin: 2.5rem 0;
        }

        pre {
            background: #000;
            border: 1px solid var(--border);
            padding: 1.5rem;
            border-radius: 8px;
            margin: 1.5rem 0;
            overflow-x: auto;
        }

        code {
            font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
            font-size: 0.95rem;
            color: #fff;
            line-height: 1.5;
        }

        .article-content p code, .article-content li code {
            background: rgba(255, 255, 255, 0.1);
            padding: 0.2rem 0.4rem;
            border-radius: 4px;
            color: var(--accent-cyan);
        }
    </style>"""

html = html.replace(style_block_old, style_block_new)

# Add article-content class
html = html.replace('<article>', '<article>\n<div class="article-content">')
html = html.replace('</article>', '</div>\n</article>')

with open('/Volumes/Data-Personal/Webpage/thehgtech/articles/claude-fable-ai-governance-2026.html', 'w') as f:
    f.write(html)
