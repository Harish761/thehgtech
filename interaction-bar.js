/* ================================================
   ARTICLE/GUIDE INTERACTION BAR FUNCTIONALITY
   Consistent Like, Share, Print functionality
   ================================================ */

// Generate a unique ID for the page based on path
function getPageId() {
    return window.location.pathname.replace(/\//g, '_').replace(/\.html$/, '');
}

// Transform the static Like button into a Comments button dynamically
function transformLikeButtonToCommentButton() {
    const likeBtn = document.getElementById('likeBtn');
    if (likeBtn) {
        likeBtn.setAttribute('onclick', 'scrollToComments()');
        likeBtn.innerHTML = '<i class="far fa-comment-dots"></i> <span id="likeText">Join Discussion</span>';
        likeBtn.classList.remove('liked'); // Clear any old like styling
    }
}

// Scroll to GraphComment section
function scrollToComments() {
    const gc = document.getElementById('graphcomment');
    if (gc) {
        const y = gc.getBoundingClientRect().top + window.scrollY - 100; // Offset for sticky header
        window.scrollTo({top: y, behavior: 'smooth'});
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

// Inject GraphComment Widget
function injectGraphComment() {
    const interactionBar = document.querySelector('.interaction-bar');
    if (!interactionBar) return;
    if (document.getElementById('graphcomment')) return; // Prevent duplicate injection

    const gcContainer = document.createElement('div');
    gcContainer.id = 'graphcomment';
    gcContainer.style.marginTop = '2rem';
    gcContainer.style.marginBottom = '2rem';
    
    // Add Privacy Note
    const privacyNote = document.createElement('p');
    privacyNote.style.fontSize = '0.85rem';
    privacyNote.style.color = 'var(--text-muted, #888)';
    privacyNote.style.textAlign = 'center';
    privacyNote.style.marginBottom = '1.5rem';
    privacyNote.innerHTML = 'Comments and reactions are powered by GraphComment. By interacting, you agree to the <a href="https://graphcomment.com/en/privacy-policy/" target="_blank" rel="noopener noreferrer" style="color: var(--accent, #00d9ff);">GraphComment Privacy Policy</a>.';

    // Create wrapper to hold both note and widget
    const wrapper = document.createElement('div');
    wrapper.style.marginTop = '4rem';
    wrapper.appendChild(privacyNote);
    wrapper.appendChild(gcContainer);
    
    // Insert immediately after interaction bar
    interactionBar.parentNode.insertBefore(wrapper, interactionBar.nextSibling);

    // Initialize GraphComment Configuration
    window.__semio__params = {
        graphcommentId: "thehgtech", // User's GraphComment Site ID
        behaviour: {
            uid: getPageId() // Unique page identifier
        }
    };
    
    function __semio__onload() {
        __semio__gc_graphlogin(__semio__params)
    }
    
    // Load the GraphComment Script
    var gc = document.createElement('script'); 
    gc.type = 'text/javascript'; 
    gc.async = true;
    gc.onload = __semio__onload; 
    gc.defer = true; 
    gc.src = 'https://integration.graphcomment.com/gc_graphlogin.js?' + Date.now();
    (document.getElementsByTagName('head')[0] || document.body).appendChild(gc);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function () {
    transformLikeButtonToCommentButton();
    injectGraphComment();
});

// ================================================
// ZEN READER MODE
// ================================================
function initZenMode() {
    // Inject the button
    const actionButtons = document.querySelector('.action-buttons');
    if (actionButtons) {
        const zenBtn = document.createElement('button');
        zenBtn.className = 'share-btn zen-btn';
        zenBtn.title = 'Toggle Zen Reader Mode';
        zenBtn.innerHTML = '<i class="fas fa-book-reader"></i>';
        zenBtn.onclick = toggleZenMode;
        
        // Insert before the print button separator
        const separator = actionButtons.querySelector('.button-separator');
        if (separator) {
            actionButtons.insertBefore(zenBtn, separator);
        } else {
            actionButtons.appendChild(zenBtn);
        }
    }
}

function toggleZenMode() {
    document.body.classList.toggle('zen-mode');
    const btn = document.querySelector('.zen-btn');
    if (document.body.classList.contains('zen-mode')) {
        if(btn) btn.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        if(btn) btn.innerHTML = '<i class="fas fa-book-reader"></i>';
    }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    initZenMode();
});


// ================================================
// FLOATING DOCK SCROLL LOGIC (MOBILE)
// ================================================
function initFloatingDockScroll() {
    let lastScrollY = window.scrollY;
    
    window.addEventListener("scroll", () => {
        // Only apply on mobile where interaction-bar acts as a dock
        if (window.innerWidth > 768) return;
        
        const bar = document.querySelector(".interaction-bar");
        if (!bar) return;
        
        const currentScrollY = window.scrollY;
        
        // If scrolling down and passed 100px from top, hide bar
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            bar.classList.add("hidden-bar");
        } 
        // If scrolling up, show bar
        else if (currentScrollY < lastScrollY) {
            bar.classList.remove("hidden-bar");
        }
        
        lastScrollY = currentScrollY;
    }, { passive: true });
}

// Initialize on DOM load
document.addEventListener("DOMContentLoaded", () => {
    initFloatingDockScroll();
});


// ================================================
// NEWSLETTER INJECTION (EmailOctopus)
// ================================================
function injectNewsletterWidget() {
    // Only inject on article/guide pages. 
    // We detect this if there is an article or interaction bar on the page.
    const articleContainer = document.querySelector(".article-container, article");
    const interactionBar = document.querySelector(".interaction-bar");
    
    // If not an article page, do not inject dynamically (e.g. homepage handles it manually)
    if (!articleContainer || !interactionBar) return;
    
    // Prevent duplicate injection
    if (document.querySelector(".newsletter-widget")) return;

    const widgetHTML = `
        <div class="newsletter-widget">
            <h3>Stay Ahead of the Threat Curve</h3>
            <p class="newsletter-desc">Get expert cybersecurity insights, zero-day alerts, and critical threat intelligence delivered straight to your inbox.</p>
            <form action="https://emailoctopus.com/lists/08258300-62ea-11f1-9abd-43fc2d9c895b/members/embedded/1.3/add" method="post" class="newsletter-form">
                <div class="newsletter-input-group">
                    <input type="email" name="field_0" placeholder="Your email address..." required>
                    <button type="submit" class="newsletter-submit">Subscribe <i class="fas fa-shield-check"></i></button>
                </div>
                <div class="newsletter-privacy">
                    <input type="checkbox" id="newsletter-consent" name="consent" required>
                    <label for="newsletter-consent">I consent to receiving security updates and agree to the <a href="/privacy.html" target="_blank" style="color: #00D9FF; text-decoration: none;">Privacy Policy</a>. Emails are serviced by <a href="https://emailoctopus.com/legal/privacy" target="_blank" style="color: #00D9FF; text-decoration: none;">EmailOctopus</a>.</label>
                </div>
                <!-- Anti-bot honeypot -->
                <div aria-hidden="true" style="position: absolute; left: -5000px;">
                    <input type="text" name="hp1.3" tabindex="-1" autocomplete="nope">
                </div>
            </form>
        </div>
    `;
    
    // Insert right before the interaction bar
    interactionBar.insertAdjacentHTML("beforebegin", widgetHTML);
}

// Ensure it loads with other DOM content
document.addEventListener("DOMContentLoaded", () => {
    injectNewsletterWidget();
});
