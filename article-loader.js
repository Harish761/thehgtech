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

        // Update articleCards
        window.contentData.articleCards = data.articles.map(article => ({
            id: article.id,
            date: article.date,
            category: article.category,
            title: article.title.length > 50 ? article.title.substring(0, 47) + '...' : article.title,
            excerpt: article.excerpt
        }));

        console.log('Articles loaded successfully from JSON');
        return articlesData;
    } catch (error) {
        console.error('Error loading articles:', error);
        // Fallback to hardcoded articles if JSON fails
        return null;
    }
}

// Initialize articles on page load
if (typeof window !== 'undefined') {
    window.addEventListener('DOMContentLoaded', async () => {
        const loadedArticles = await loadArticlesFromJSON();
        if (loadedArticles) {
            window.contentData.articles = loadedArticles;
        }
    });
}
