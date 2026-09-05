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

// Unified Initialization
function initInteractionBar() {
    transformLikeButtonToCommentButton();
    injectGraphComment();
    initZenMode();
    initFloatingDockScroll();
    injectNewsletterForm();
    injectNewsletterScripts();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initInteractionBar);
} else {
    initInteractionBar();
}

// ================================================
// NEWSLETTER SUBSCRIPTION WIDGET
// ================================================
function injectNewsletterForm() {
    const interactionBar = document.querySelector('.interaction-bar');
    if (!interactionBar) return;
    if (document.getElementById('hg-newsletter-global')) return; // Prevent duplicate

    const wrapper = document.createElement('div');
    wrapper.id = 'hg-newsletter-global';
    wrapper.className = 'container';
    wrapper.style.maxWidth = '800px';
    wrapper.style.margin = '4rem auto 2rem';

    wrapper.innerHTML = `

        <div class="hg-newsletter-wrapper">
            <div class="hg-newsletter-title">
                <i class="fas fa-envelope-open-text" style="color: var(--accent-cyan);"></i> The Daily Intel
            </div>
            <div class="hg-newsletter-desc">Get the latest cyber threats, zero-days, and AI security analysis delivered straight to your inbox. No spam, ever.</div>
            
            <div class="sib-form">
                <style>
                    /* Newsletter card wrapper */
                    #hg-newsletter-global .hg-newsletter-wrapper {
                        background: rgba(255,255,255,0.04);
                        border: 1px solid rgba(255,255,255,0.1);
                        border-radius: 16px;
                        padding: 2.5rem 2rem;
                        text-align: center;
                        backdrop-filter: blur(12px);
                        position: relative;
                        overflow: hidden;
                        box-shadow: 0 12px 40px rgba(0,0,0,0.5);
                    }
                    #hg-newsletter-global .hg-newsletter-wrapper::before {
                        content: '';
                        position: absolute;
                        top: 0; left: 0; right: 0; height: 3px;
                        background: linear-gradient(90deg, #00D9FF, #8B5CF6);
                    }
                    #hg-newsletter-global .hg-newsletter-title {
                        font-size: 1.5rem;
                        font-weight: 800;
                        color: #fff;
                        margin-bottom: 0.5rem;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        gap: 0.6rem;
                    }
                    #hg-newsletter-global .hg-newsletter-desc {
                        color: rgba(255,255,255,0.6);
                        font-size: 0.95rem;
                        margin-bottom: 1.75rem;
                        max-width: 480px;
                        margin-left: auto;
                        margin-right: auto;
                        line-height: 1.6;
                    }

                    /* Form elements */
                    #hg-newsletter-global .sib-form { background: transparent !important; padding: 0 !important; }
                    #hg-newsletter-global .sib-form-container { background: transparent !important; border: none !important; box-shadow: none !important; padding: 0 !important; max-width: 100% !important; margin: 0 !important; }
                    #hg-newsletter-global .hg-form-row { display: flex; gap: 0.6rem; justify-content: center; align-items: center; flex-wrap: wrap; }
                    #hg-newsletter-global .hg-newsletter-input {
                        flex: 1;
                        min-width: 200px;
                        max-width: 320px;
                        padding: 0 1.2rem;
                        height: 48px;
                        border-radius: 8px;
                        border: 1px solid rgba(0,217,255,0.3) !important;
                        background: rgba(0,0,0,0.45) !important;
                        color: #fff !important;
                        font-size: 0.95rem;
                        font-family: inherit;
                        outline: none;
                        transition: border-color 0.3s ease, box-shadow 0.3s ease;
                    }
                    #hg-newsletter-global .hg-newsletter-input::placeholder { color: rgba(255,255,255,0.35) !important; }
                    #hg-newsletter-global .hg-newsletter-input:focus {
                        border-color: #00D9FF !important;
                        box-shadow: 0 0 0 3px rgba(0,217,255,0.15) !important;
                    }
                    #hg-newsletter-global .hg-newsletter-btn {
                        height: 48px;
                        padding: 0 1.75rem;
                        background: linear-gradient(135deg, #00D9FF, #00b4cc);
                        color: #000;
                        font-weight: 700;
                        font-size: 0.875rem;
                        letter-spacing: 0.05em;
                        border: none;
                        border-radius: 8px;
                        cursor: pointer;
                        white-space: nowrap;
                        transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s;
                    }
                    #hg-newsletter-global .hg-newsletter-btn:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(0,217,255,0.35); }
                    #hg-newsletter-global .hg-newsletter-btn:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }
                    #hg-newsletter-global .hg-captcha-wrap { display: flex; justify-content: center; margin-top: 1.25rem; }
                    #hg-newsletter-global .hg-form-msg { padding: 0.75rem 1rem; border-radius: 8px; font-size: 0.9rem; margin-bottom: 1.25rem; display: none; text-align: center; }
                    #hg-newsletter-global .hg-form-msg.success { color: #13ce66; background: rgba(19,206,102,0.12); border: 1px solid rgba(19,206,102,0.3); }
                    #hg-newsletter-global .hg-form-msg.error   { color: #ff4949; background: rgba(255,73,73,0.1);   border: 1px solid rgba(255,73,73,0.3); }
                    #hg-newsletter-global .hg-field-error { color: #ff6b6b; font-size: 0.82rem; margin-top: 0.5rem; min-height: 1.2em; display: block; text-align: center; }
                    @media (max-width: 560px) {
                        #hg-newsletter-global .hg-newsletter-input { max-width: 100%; width: 100%; }
                        #hg-newsletter-global .hg-newsletter-btn { width: 100%; }
                        #hg-newsletter-global .hg-form-row { flex-direction: column; }
                    }
                </style>
                <div id="sib-form-container">
                    <div id="hg-success" class="hg-form-msg success">🎉 You're subscribed! Check your inbox to confirm.</div>
                    <div id="hg-error"   class="hg-form-msg error">Something went wrong. Please try again.</div>

                    <form id="sib-form" method="POST"
                        action="https://7dd4d3f2.sibforms.com/serve/MUIFAC5_9yENi4QKhYb_j3fo9r-Z5uOTFwmZNPeLVHikF5SvzjAErq6S9aoLZ-r5mr3wiw9NC8O6-kwDXR0J7lIoG8cvcOZky4sdiMFmuWALZb22o9lrh-g2XsAproAT6YppB29NmkFqNqAgsk_N9NvCnuFe2bioh2CBb-pY4pXt0pXCkOUWJyg55mDF6P5TjoDnqDfbrXCpSU1-7A=="
                        data-type="subscription">

                        <div class="hg-form-row">
                            <input class="hg-newsletter-input" type="email" id="EMAIL" name="EMAIL"
                                   autocomplete="email" placeholder="Enter your email address…" />
                            <button class="hg-newsletter-btn" type="submit" id="hg-sub-btn">SUBSCRIBE</button>
                        </div>
                        <span class="hg-field-error" id="hg-field-err"></span>

                        <div class="hg-captcha-wrap">
                            <div id="sib-captcha"></div>
                        </div>

                        <input type="text" name="email_address_check" value="" style="display:none;">
                        <input type="hidden" name="locale" value="en">
                    </form>
                </div>
            </div>
        </div>

    `;

    // Insert right before interaction bar
    interactionBar.parentNode.insertBefore(wrapper, interactionBar);



}


function injectNewsletterScripts() {
    // Set Brevo required globals before any script loads
    window.REQUIRED_CODE_ERROR_MESSAGE = 'Please choose a country code';
    window.LOCALE = 'en';
    window.EMAIL_INVALID_MESSAGE = window.SMS_INVALID_MESSAGE = "The information provided is invalid. Please review the field format and try again.";
    window.REQUIRED_ERROR_MESSAGE = "This field cannot be left blank.";
    window.GENERIC_INVALID_MESSAGE = "The information provided is invalid. Please review the field format and try again.";
    window.translation = { common: { selectedList: '{quantity} list selected', selectedLists: '{quantity} lists selected', selectedOption: '{quantity} selected', selectedOptions: '{quantity} selected' } };
    window.AUTOHIDE = Boolean(0);

    // Define captcha callback
    window.handleCaptchaResponse = function() {
        var cap = document.getElementById('sib-captcha');
        if (cap) cap.dispatchEvent(new Event('captchaChange'));
    };

    // Our own form submit handler — no dependency on Brevo's main.js
    function wireFormSubmit() {
        const form = document.getElementById('sib-form');
        if (!form || form._hgWired) return;
        form._hgWired = true;

        const btn = form.querySelector('[type="submit"]');
        const successDiv = document.getElementById('success-message');
        const errorDiv = document.getElementById('error-message');
        const emailInput = document.getElementById('EMAIL');
        const errorLabel = form.querySelector('.entry__error--primary');

        form.addEventListener('submit', function(e) {
            e.preventDefault();

            // Clear previous state
            if (errorLabel) errorLabel.textContent = '';
            if (errorDiv) errorDiv.style.display = 'none';

            const email = emailInput ? emailInput.value.trim() : '';

            // Validate email
            if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                if (errorLabel) errorLabel.textContent = 'Please enter a valid email address.';
                return;
            }

            // Validate captcha
            if (typeof grecaptcha !== 'undefined') {
                const response = grecaptcha.getResponse(window._hgCaptchaWidgetId);
                if (!response) {
                    if (errorLabel) errorLabel.textContent = 'Please tick "I am not a robot" first.';
                    return;
                }
            }

            // Disable button while submitting
            if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }

            fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                mode: 'no-cors'  // Cross-origin: can't read response, assume success
            }).then(function() {
                if (successDiv) successDiv.style.display = 'block';
                if (errorDiv) errorDiv.style.display = 'none';
                form.reset();
                if (typeof grecaptcha !== 'undefined') grecaptcha.reset(window._hgCaptchaWidgetId);
            }).catch(function() {
                if (errorDiv) errorDiv.style.display = 'block';
            }).finally(function() {
                if (btn) { btn.disabled = false; btn.textContent = 'SUBSCRIBE'; }
            });
        });
    }

    // Render captcha into #sib-captcha using explicit mode
    function renderCaptcha() {
        const el = document.getElementById('sib-captcha');
        if (!el || typeof grecaptcha === 'undefined' || el.childElementCount > 0) return;
        window._hgCaptchaWidgetId = grecaptcha.render(el, {
            sitekey: '6Lc84CstAAAAANsXefkpCbb-Jyq-JD6PSck4F9l0',
            theme: 'dark',
            callback: 'handleCaptchaResponse'
        });
    }

    // Wire the form submit handler (the form is already in DOM)
    wireFormSubmit();

    // Inject reCAPTCHA with explicit render mode
    if (!document.querySelector('script[src*="recaptcha/api.js"]')) {
        // Set a global that reCAPTCHA's onload will call
        window._hgRenderCaptcha = function() {
            renderCaptcha();
            // Also wire form now that captcha is ready
            wireFormSubmit();
        };
        const s = document.createElement('script');
        s.src = 'https://www.google.com/recaptcha/api.js?onload=_hgRenderCaptcha&render=explicit&hl=en';
        s.async = true;
        document.body.appendChild(s);
    } else {
        // api.js already on page — try rendering immediately, then poll
        renderCaptcha();
        if (!window._hgCaptchaWidgetId && window._hgCaptchaWidgetId !== 0) {
            var attempts = 0;
            var poll = setInterval(function() {
                renderCaptcha();
                attempts++;
                if (window._hgCaptchaWidgetId >= 0 || attempts > 20) clearInterval(poll);
            }, 200);
        }
    }
}
