/* ================================================
   ARTICLE/GUIDE INTERACTION BAR FUNCTIONALITY
   Consistent Like, Share, Print functionality
   ================================================ */

// Generate a unique ID for the page based on path
function getPageId() {
    return window.location.pathname.replace(/\//g, '_').replace(/\.html$/, '');
}

// Like Functionality
function toggleLike() {
    const likeBtn = document.getElementById('likeBtn');
    const likeText = document.getElementById('likeText');
    const pageId = getPageId();
    const likeKey = `liked_${pageId}`;

    const isLiked = localStorage.getItem(likeKey) === 'true';

    if (isLiked) {
        // Unlike
        localStorage.removeItem(likeKey);
        likeBtn.classList.remove('liked');
        likeText.innerText = 'Like this article';

        // Change icon back to outline
        const icon = likeBtn.querySelector('i');
        icon.classList.remove('fas');
        icon.classList.add('far');
    } else {
        // Like
        localStorage.setItem(likeKey, 'true');
        likeBtn.classList.add('liked');
        likeText.innerText = 'Liked!';

        // Change icon to solid
        const icon = likeBtn.querySelector('i');
        icon.classList.remove('far');
        icon.classList.add('fas');
    }
}

// Check if page is already liked on load
function checkLikeStatus() {
    const pageId = getPageId();
    const likeKey = `liked_${pageId}`;
    const isLiked = localStorage.getItem(likeKey) === 'true';

    if (isLiked) {
        const likeBtn = document.getElementById('likeBtn');
        const likeText = document.getElementById('likeText');

        if (likeBtn && likeText) {
            likeBtn.classList.add('liked');
            likeText.innerText = 'Liked!';

            // Change icon to solid
            const icon = likeBtn.querySelector('i');
            if (icon) {
                icon.classList.remove('far');
                icon.classList.add('fas');
            }
        }
    }
}

// Share on Twitter
function shareTwitter(event) {
    event.preventDefault();
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(document.title);
    const twitterUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
    window.open(twitterUrl, '_blank', 'width=600,height=400');
}

// Share on LinkedIn
function shareLinkedIn(event) {
    event.preventDefault();
    const url = encodeURIComponent(window.location.href);
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
    window.open(linkedInUrl, '_blank', 'width=600,height=600');
}

// Copy Link to Clipboard
function copyLink() {
    const url = window.location.href;

    // Modern clipboard API
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(() => {
            showCopyFeedback();
        }).catch(err => {
            // Fallback for older browsers
            fallbackCopyLink(url);
        });
    } else {
        // Fallback for older browsers
        fallbackCopyLink(url);
    }
}

// Fallback copy method for older browsers
function fallbackCopyLink(url) {
    const textArea = document.createElement('textarea');
    textArea.value = url;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    document.body.appendChild(textArea);
    textArea.select();

    try {
        document.execCommand('copy');
        showCopyFeedback();
    } catch (err) {
        console.error('Failed to copy:', err);
        alert('Failed to copy link. Please copy manually: ' + url);
    }

    document.body.removeChild(textArea);
}

// Show copy feedback
function showCopyFeedback() {
    const copyBtn = event.target.closest('.share-btn');
    const originalIcon = copyBtn.innerHTML;

    copyBtn.innerHTML = '<i class="fas fa-check"></i>';
    copyBtn.style.background = 'rgba(0, 255, 136, 0.15)';
    copyBtn.style.borderColor = 'rgba(0, 255, 136, 0.4)';
    copyBtn.style.color = '#00FF88';

    setTimeout(() => {
        copyBtn.innerHTML = originalIcon;
        copyBtn.style.background = '';
        copyBtn.style.borderColor = '';
        copyBtn.style.color = '';
    }, 2000);
}

// Print Article
function printArticle() {
    window.print();
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function () {
    checkLikeStatus();
});
