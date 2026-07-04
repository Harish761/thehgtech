/**
 * SEO Enhancement Script
 * Adds Article schema markup to news items dynamically
 */

// Generate Article schema for news items
function generateArticleSchema(article) {
    return {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": article.title,
        "description": article.content ? article.content.substring(0, 200) : "",
        "datePublished": article.date,
        "dateModified": article.date,
        "author": {
            "@type": "Organization",
            "name": "TheHGTech Editorial Team",
            "url": "https://thehgtech.com"
        },
        "publisher": {
            "@type": "NewsMediaOrganization",
            "name": "TheHGTech",
            "logo": {
                "@type": "ImageObject",
                "url": "https://thehgtech.com/logo.png",
                "width": 600,
                "height": 60
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": article.sourceUrl || "https://thehgtech.com"
        },
        "url": article.sourceUrl,
        "articleSection": article.category || "Cybersecurity",
        "keywords": ["cybersecurity", "threat intelligence", "AI", "security news"]
    };
}

// Add Article schema to page
function addArticleSchemas(articles) {
    if (!articles || articles.length === 0) return;

    // Remove existing article schemas
    const existingSchemas = document.querySelectorAll('script[data-schema="article"]');
    existingSchemas.forEach(schema => schema.remove());

    // Add new schemas
    articles.forEach(article => {
        const schema = generateArticleSchema(article);
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-schema', 'article');
        script.textContent = JSON.stringify(schema);
        document.head.appendChild(script);
    });

    console.log(`✓ Added ${articles.length} Article schemas for SEO`);
}

// Export for use in content.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { generateArticleSchema, addArticleSchemas };
}
