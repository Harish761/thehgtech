// Article Loader - Fetches articles from articles.json
let articlesData = {};

// Load articles from JSON file
async function loadArticlesFromJSON() {
    try {
        const response = await fetch('articles.json');
        const data = await response.json();

        // Convert array format to object format for compatibility
        articlesData = {};
        data.articles.forEach(article => {
            articlesData[article.id] = article;
        });

        // Prepend articles from JSON to existing hardcoded articles
        if (window.contentData && window.contentData.articleCards) {
            const jsonArticles = data.articles.map(article => ({
                id: article.id,
                date: article.date,
                category: article.category,
                title: article.title.length > 50 ? article.title.substring(0, 47) + '...' : article.title,
                excerpt: article.excerpt
            }));

            // Prepend JSON articles (they'll appear first)
            window.contentData.articleCards = [...jsonArticles, ...window.contentData.articleCards];

            // Trigger re-render of article cards
            renderArticleCards();
        }

        console.log('Articles loaded successfully from JSON');
        return articlesData;
    } catch (error) {
        console.error('Error loading articles:', error);
        // Fallback to hardcoded articles if JSON fails
        return null;
    }
}

// Function to re-render article cards
function renderArticleCards() {
    const container = document.querySelector('#articlesGrid');
    if (!container || !window.contentData || !window.contentData.articleCards) return;

    container.innerHTML = window.contentData.articleCards.map(article => `
        <div class="article-card" onclick="openArticleModal('${article.id}')">
            <div class="article-category">${article.category}</div>
            <h3>${article.title}</h3>
            <p>${article.excerpt}</p>
            <div class="article-meta">
                <span>${article.date}</span>
                <span class="read-more">Read Full Article →</span>
            </div>
        </div>
    `).join('');
}

// Initialize articles on page load
if (typeof window !== 'undefined') {
    // Wait for contentData to be defined (it's set by content.js)
    function waitForContentData() {
        if (window.contentData && window.contentData.articleCards) {
            loadArticlesFromJSON();
        } else {
            // Check again in 100ms
            setTimeout(waitForContentData, 100);
        }
    }

    // Start checking after DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', waitForContentData);
    } else {
        waitForContentData();
    }
}

