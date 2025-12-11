/* ============================================
   NEWS CARDS DATA INTEGRATION
   Populate swipeable cards from content.js
   ============================================ */

// Function to create a news card element
function createNewsCard(article, index, category) {
    const card = document.createElement('div');
    card.className = 'news-card-stack';
    card.dataset.index = index;
    card.dataset.category = category;

    // Determine category badge
    const categoryClass = category === 'cyber' ? 'cybersecurity' : 'ai';
    const categoryLabel = category === 'cyber' ? 'Cybersecurity' : 'AI & ML';
    const categoryIcon = category === 'cyber' ? 'fa-shield-alt' : 'fa-brain';

    // Calculate time ago
    const timeAgo = article.date || 'Recently';

    // Create card HTML
    card.innerHTML = `
        <div class="news-card-full">
            <!-- Card Header -->
            <div class="news-card-header">
                <div class="news-category-badge ${categoryClass}">
                    <i class="fas ${categoryIcon}"></i>
                    ${categoryLabel}
                </div>
                <div class="news-time">${timeAgo}</div>
            </div>
            
            <!-- Card Image (if available) -->
            ${article.image ? `<img src="${article.image}" alt="${article.title}" class="news-card-image" loading="lazy">` : ''}
            
            <!-- Card Content -->
            <div class="news-card-content-wrapper">
                <h3 class="news-card-title">${article.title}</h3>
                <div class="news-card-content">
                    ${article.content || article.description || article.summary || ''}
                </div>
            </div>
            
            <!-- Card Footer -->
            <div class="news-card-footer">
                <div class="news-source">
                    <i class="fas fa-link"></i>
                    ${article.source || 'TheHGTech'}
                </div>
                <div class="news-card-actions">
                    <button class="news-action-btn share" aria-label="Share" onclick="shareArticle('${article.title}', '${article.url || ''}')">
                        <i class="fas fa-share-alt"></i>
                    </button>
                    <button class="news-action-btn save" aria-label="Save" onclick="saveArticle('${article.id || index}')">
                        <i class="fas fa-bookmark"></i>
                    </button>
                </div>
            </div>
        </div>
    `;

    return card;
}

// Function to populate news cards
function populateNewsCards(category = 'cyber') {
    const container = document.getElementById('newsStackContainer');
    if (!container) return;

    // Clear existing cards
    container.innerHTML = '';

    // Get news data from content.js
    let newsData = [];

    if (typeof websiteContent !== 'undefined') {
        if (category === 'cyber' && websiteContent.cyberNews) {
            newsData = websiteContent.cyberNews;
        } else if (category === 'ai' && websiteContent.aiNews) {
            newsData = websiteContent.aiNews;
        }
    }

    // If no data, show empty state
    if (!newsData || newsData.length === 0) {
        container.innerHTML = `
            <div class="news-empty-state">
                <div class="news-empty-icon">
                    <i class="fas fa-newspaper"></i>
                </div>
                <div class="news-empty-title">No News Available</div>
                <div class="news-empty-text">Check back soon for the latest updates</div>
            </div>
        `;

        // Hide controls
        document.getElementById('newsProgress').style.display = 'none';
        document.getElementById('newsNavControls').style.display = 'none';
        document.getElementById('newsSwipeHint').style.display = 'none';
        return;
    }

    // Create cards
    newsData.forEach((article, index) => {
        const card = createNewsCard(article, index, category);
        container.appendChild(card);
    });

    // Initialize card stack
    const newsStack = new NewsCardStack('newsStackContainer');

    // Create progress dots
    const dotsContainer = document.getElementById('newsProgressDots');
    if (dotsContainer) {
        dotsContainer.innerHTML = '';
        newsData.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.className = 'news-progress-dot';
            if (index === 0) dot.classList.add('active');
            dotsContainer.appendChild(dot);
        });
    }

    // Show controls
    document.getElementById('newsProgress').style.display = 'flex';
    document.getElementById('newsNavControls').style.display = 'flex';
    document.getElementById('newsSwipeHint').style.display = 'flex';

    // Update counter
    const counter = document.getElementById('newsProgressCounter');
    if (counter) {
        counter.textContent = `1 of ${newsData.length}`;
    }
}

// Function to switch news category
function switchNewsCategory(category) {
    // Update tab states
    const tabs = document.querySelectorAll('.news-tab');
    tabs.forEach(tab => {
        if (tab.dataset.category === category) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });

    // Populate cards with new category
    populateNewsCards(category);
}

// Function to share article
function shareArticle(title, url) {
    if (navigator.share) {
        navigator.share({
            title: title,
            url: url || window.location.href
        }).catch(err => console.log('Share failed:', err));
    } else {
        // Fallback: copy to clipboard
        const shareUrl = url || window.location.href;
        navigator.clipboard.writeText(shareUrl).then(() => {
            alert('Link copied to clipboard!');
        });
    }
}

// Function to save article
function saveArticle(articleId) {
    // Get saved articles from localStorage
    let savedArticles = JSON.parse(localStorage.getItem('savedArticles') || '[]');

    // Toggle save
    if (savedArticles.includes(articleId)) {
        savedArticles = savedArticles.filter(id => id !== articleId);
        alert('Article removed from saved items');
    } else {
        savedArticles.push(articleId);
        alert('Article saved!');
    }

    // Save back to localStorage
    localStorage.setItem('savedArticles', JSON.stringify(savedArticles));
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function () {
    // Check if we're on mobile
    if (window.innerWidth <= 768) {
        // Wait for content.js to load
        const checkContent = setInterval(() => {
            if (typeof websiteContent !== 'undefined') {
                clearInterval(checkContent);
                populateNewsCards('cyber'); // Start with cybersecurity news
            }
        }, 100);

        // Timeout after 5 seconds
        setTimeout(() => {
            clearInterval(checkContent);
            if (typeof websiteContent === 'undefined') {
                console.error('websiteContent not loaded');
            }
        }, 5000);
    }
});

// Make functions globally available
window.switchNewsCategory = switchNewsCategory;
window.shareArticle = shareArticle;
window.saveArticle = saveArticle;
