// Article Modal Handler
// Opens article content in a modal when article card is clicked

function openArticleModal(articleId) {
    console.log('[article-modal] Opening article:', articleId);

    // Find the article in websiteContent.articles or from articles.json
    let article = null;

    // Check websiteContent.articles first (hardcoded articles)
    if (websiteContent && websiteContent.articles && websiteContent.articles[articleId]) {
        article = websiteContent.articles[articleId];
    }

    // Check articlesData from articles.json
    if (!article && typeof articlesData !== 'undefined' && articlesData[articleId]) {
        article = articlesData[articleId];
    }

    if (!article) {
        console.error('[article-modal] Article not found:', articleId);
        alert('Article not found');
        return;
    }

    // Create modal
    const modal = document.createElement('div');
    modal.className = 'article-modal';
    modal.innerHTML = `
        <div class="article-modal-overlay" onclick="closeArticleModal()"></div>
        <div class="article-modal-content">
            <button class="article-modal-close" onclick="closeArticleModal()">×</button>
            <div class="article-modal-body">
                ${article.content || '<p>Article content not available.</p>'}
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';

    console.log('[article-modal] Modal opened');
}

function closeArticleModal() {
    const modal = document.querySelector('.article-modal');
    if (modal) {
        modal.remove();
        document.body.style.overflow = '';
        console.log('[article-modal] Modal closed');
    }
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeArticleModal();
    }
});
