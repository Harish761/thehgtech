# Project Agent Rules

- **Zero-Tolerance for Email Errors**: Any scripts, workflows, or templates related to email generation or delivery must be meticulously verified for completeness, correct environment variable alignment (e.g., API keys matching between GitHub Actions and scripts), and lack of placeholder/dry-run outputs before deployment. Emails go directly to users, and errors create a lasting negative impression. Always perform end-to-end alignment checks before modifying email-related logic.

## STRICT PUBLISHING WORKFLOW (CRITICAL)
NEVER manually edit `articles.html`, `index.html`, or `articles/page/*/index.html` to add new articles. The site uses a dynamic build system.
1. **Metadata**: Always append new article metadata to the central datastore: `ioc-data/articles.json`.
2. **Pagination**: Always run `python3 scripts/generate_pagination.py` to auto-build the grids and static fallbacks.
3. **Structure**: When creating the article HTML, you MUST include the bottom interaction bar and mobile scripts. Read `templates/article-template.html` or read a previous article entirely to the `</html>` tag to ensure you do not miss the footer components.
4. **Documentation**: Always consult `docs/ARTICLE_CREATION_GUIDE.md` and `docs/ARTICLES-PAGE-IMPLEMENTATION.md` before attempting structural changes to the publishing pipeline.

## STRICT PUBLISHING WORKFLOW (CRITICAL)
NEVER manually edit `articles.html`, `index.html`, or `articles/page/*/index.html` to add new articles. The site uses a dynamic build system.
1. **Metadata**: Always insert new article metadata to the central datastore: `ioc-data/articles.json`.
2. **Pagination**: Always run `python3 scripts/generate_pagination.py` to auto-build the grids and static fallbacks.
3. **Structure**: When creating the article HTML, you MUST include the bottom interaction bar and mobile scripts. Read `templates/article-template.html` or read a previous article entirely to the `</html>` tag to ensure you do not miss the footer components.
4. **Documentation**: Always consult `docs/ARTICLE_CREATION_GUIDE.md` before publishing.
