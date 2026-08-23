# Project Agent Rules

- **Zero-Tolerance for Email Errors**: Any scripts, workflows, or templates related to email generation or delivery must be meticulously verified for completeness, correct environment variable alignment (e.g., API keys matching between GitHub Actions and scripts), and lack of placeholder/dry-run outputs before deployment. Emails go directly to users, and errors create a lasting negative impression. Always perform end-to-end alignment checks before modifying email-related logic.

## STRICT PUBLISHING WORKFLOW (CRITICAL)
NEVER manually edit `articles.html`, `index.html`, or `articles/page/*/index.html` to add new articles. The site uses a dynamic build system.

1. **Metadata**: Always append new article metadata to the central datastore: `ioc-data/articles.json`.
2. **Pagination**: Always run `python3 scripts/generate_pagination.py` to auto-build the grids and static fallbacks.
3. **HTML Structure & Boilerplate (CRITICAL RULE)**: 
   - **DO NOT** generate new article HTML from scratch using scripts, f-strings, or basic templates. 
   - Because the site is statically structured without a server-side include system, the top navigation mega-menu, search overlays, stylesheets, and bottom interaction bars are **massive and hardcoded**.
   - **YOU MUST** create new articles by completely cloning a recent, fully-featured article (e.g., `cp articles/apple-dyld-zero-day-cve-2026-20700.html articles/new-article.html`).
   - After cloning, use targeted replacements to overwrite ONLY the `<title>`, SEO `<meta>` tags, JSON-LD `<script>` blocks, and the inner `<article> ... </article>` content. Leave the `<body>` wrapper, `<header>`, and `<nav>` entirely untouched.
4. **Documentation**: Always consult `docs/ARTICLE_CREATION_GUIDE.md` and `docs/ARTICLES-PAGE-IMPLEMENTATION.md` before attempting structural changes to the publishing pipeline.
