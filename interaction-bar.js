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
    copyBtn.style.color = '#22C55E';

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

// Inject Newsletter Lead Magnet
function injectLeadMagnet() {
    // Only inject on article/guide pages that actually have an interaction bar
    const interactionBar = document.querySelector('.interaction-bar');
    if (!interactionBar) return;

    // Prevent duplicate injections
    if (document.getElementById('hg-lead-magnet')) return;

    // Adding dynamic styles for the input and button focus/hover states
    const styleId = 'hg-lead-magnet-styles';
    if (!document.getElementById(styleId)) {
        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = `
            #hg-lead-magnet input:focus {
                border-color: var(--accent-primary) !important;
                box-shadow: 0 0 0 3px rgba(255, 61, 61, 0.2);
            }
            #hg-lead-magnet button:hover {
                transform: translateY(-2px);
                box-shadow: 0 4px 15px rgba(255, 61, 61, 0.4);
                filter: brightness(1.1);
            }
        `;
        document.head.appendChild(style);
    }

    const magnetHTML = `
        <div id="hg-lead-magnet" class="lead-magnet-container" style="margin: 4rem 0 2rem; padding: 3rem 2rem; background: var(--bg-secondary); border: 1px solid var(--border); border-radius: 16px; text-align: center; position: relative; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.15);">
            <!-- Glow effect border top -->
            <div style="position: absolute; top: 0; left: 0; width: 100%; height: 3px; background: linear-gradient(90deg, var(--accent-primary), var(--accent-secondary), var(--accent-purple));"></div>
            
            <div style="font-size: 2.5rem; color: var(--accent-secondary); margin-bottom: 1rem;">
                <i class="fas fa-envelope-open-text"></i>
            </div>
            
            <h3 style="font-size: 1.8rem; font-weight: 900; color: var(--text-primary); margin-bottom: 0.5rem; letter-spacing: -0.5px;">
                The Cyber Intel Brief
            </h3>
            
            <p style="color: var(--text-secondary); font-size: 1.05rem; margin-bottom: 2rem; max-width: 500px; margin-left: auto; margin-right: auto; line-height: 1.6;">
                Join 500+ security professionals getting our Friday morning Threat Intel & Zero-Day breakdown. No fluff, just actionable intelligence.
            </p>
            
            <!-- Replace 'YOUR_SUBSTACK_NAME' with your actual Substack subdomain -->
            <form action="https://YOUR_SUBSTACK_NAME.substack.com/api/v1/free?nojs=true" method="post" target="_blank" style="display: flex; gap: 0.75rem; max-width: 500px; margin: 0 auto; position: relative; z-index: 2; flex-wrap: wrap; justify-content: center;">
                <input type="email" name="email" placeholder="Enter your business email..." required 
                    style="flex: 1; min-width: 250px; padding: 1rem 1.25rem; background: var(--bg-primary); border: 1px solid var(--border); border-radius: 8px; color: var(--text-primary); font-family: inherit; font-size: 1rem; outline: none; transition: all 0.3s ease;">
                <button type="submit" 
                    style="padding: 1rem 2rem; background: var(--accent-primary); color: #fff; border: none; border-radius: 8px; font-size: 1rem; font-weight: 800; cursor: pointer; transition: all 0.3s ease; font-family: inherit; white-space: nowrap;">
                    Join Free
                </button>
            </form>
            
            <p style="color: var(--text-muted); font-size: 0.8rem; margin-top: 1.5rem; margin-bottom: 0;">
                <i class="fas fa-shield-alt"></i> We respect your inbox. 100% Signal. 0% Noise.
            </p>
        </div>
    `;

    // Insert right before interaction bar
    if (interactionBar) {
        interactionBar.insertAdjacentHTML('beforebegin', magnetHTML);
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function () {
    checkLikeStatus();
    injectLeadMagnet(); // Automatically append the newsletter UI
});
