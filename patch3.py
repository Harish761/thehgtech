with open('/Volumes/Data-Personal/Webpage/thehgtech/.agent/workflows/create-article.md', 'r') as f:
    content = f.read()

# Add the global styles requirement to the Required UI Components CSS Includes section
new_css_includes = """<!-- Style System - FULL SET REQUIRED -->
<link rel="stylesheet" href="/header.css">
<link rel="stylesheet" href="/header-dropdown.css?v=1">
<link rel="stylesheet" href="/print.css">
<link rel="stylesheet" href="/m-core.css?v=4.2">
<link rel="stylesheet" href="/m-layout.css?v=3.2">
<link rel="stylesheet" href="/m-components.css?v=3.0">
<link rel="stylesheet" href="/light-mode.css">
<link rel="stylesheet" href="/interaction-bar.css?v=20251207-0041">

<!-- Google Fonts and Font Awesome -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<!-- ========== GLOBAL THEME SCRIPT ========== -->
<script>
    (function() {
        var savedTheme = localStorage.getItem("theme");
        if (savedTheme === "light" || (!savedTheme && window.matchMedia("(prefers-color-scheme: light)").matches)) {
            document.documentElement.setAttribute("data-theme", "light");
            document.body.classList.add("light-mode");
        }
    })();
</script>

<style>
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
</style>

<script src="/m-app.js?v=4.3" defer></script>
<script src="/interaction-bar.js" defer></script>"""

content = content.replace("""<!-- Style System - FULL SET REQUIRED -->
<link rel="stylesheet" href="/header.css">
<link rel="stylesheet" href="/header-dropdown.css?v=1">
<link rel="stylesheet" href="/print.css">
<link rel="stylesheet" href="/m-core.css?v=4.2">
<link rel="stylesheet" href="/m-layout.css?v=3.2">
<link rel="stylesheet" href="/m-components.css?v=3.0">
<link rel="stylesheet" href="/light-mode.css">
<link rel="stylesheet" href="/interaction-bar.css?v=20251207-0041">

<script src="/m-app.js?v=4.3" defer></script>
<script src="/interaction-bar.js" defer></script>""", new_css_includes)

# Replace <div class="container"> with <main class="article-container">
content = content.replace('<div class="container">', '<main class="article-container">')

# Add note about Mobile Header and Mermaid graph syntax
new_desktop_header = """### Required Mobile & Desktop Headers
Must be placed **AFTER** the body tag and **BEFORE** `<main class="article-container">`. 
**Crucially, use `<main class="article-container">` for the article body, NOT `<div class="container">`.**
Also, ensure `<article>` contains `<div class="article-content">` to properly wrap the main text.

**Reference:** You must copy the exact mobile header AND desktop header from an existing article like `/articles/copy-fail-cve-2026-31431.html` or `/guides/ai-agent-security.html`. Ensure all the mobile nav buttons and observers are present.

### Mermaid Diagram Guidelines
When using Mermaid diagrams:
- **Never use spaces/parentheses directly in subgraph IDs.**
  - WRONG: `subgraph Traditional Enterprise Security`
  - CORRECT: `subgraph Traditional_Enterprise_Security ["Traditional Enterprise Security"]`
- Always enclose human-readable labels in brackets and quotes."""

content = content.replace("""### Required Desktop Header
Must be placed **AFTER** `<nav class="m-bottom-nav">` and **BEFORE** `<div class="container">`.""", new_desktop_header)


# Remove the redundant CSS variables section
content = content.replace("""### CSS Variables (Brand Consistency)
```css
:root {
    --bg-primary: #0a0a0a;
    --accent-cyan: #00D9FF;
    --accent-red: #FF3D3D;
    --code-bg: #111;
}
```

""", "")

with open('/Volumes/Data-Personal/Webpage/thehgtech/.agent/workflows/create-article.md', 'w') as f:
    f.write(content)
