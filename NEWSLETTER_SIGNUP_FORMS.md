# Newsletter Signup Forms - Website Integration
## Custom Styled Forms Matching Your Site Design

---

## 📋 OVERVIEW

This guide contains all the HTML/CSS code to add newsletter signup forms to your website.

**What's included:**
1. Homepage - Big featured section
2. Footer - All pages
3. Articles page - After content
4. Guides - End of guides
5. Tool comparisons - End of comparisons

**All forms match your site's dark theme with cyan/red accents!**

---

## 🏠 PART 1: HOMEPAGE SIGNUP SECTION

### Location
Add this AFTER the "Latest Ransomware" section, BEFORE the footer.

### HTML Code

```html
<!-- ========== NEWSLETTER SECTION ========== -->
<section class="newsletter-section">
    <div class="newsletter-container">
        <div class="newsletter-content">
            <h2>📧 Weekly Threat Intel Newsletter</h2>
            <p class="newsletter-subtitle">
                Get comprehensive threat intelligence delivered to your inbox every Monday. 
                No spam, no BS. Just actionable security insights.
            </p>
            
            <div class="newsletter-benefits">
                <h3>What You'll Get:</h3>
                <ul>
                    <li>
                        <span class="benefit-icon">📊</span>
                        <div>
                            <strong>Weekly IOC Stats</strong>
                            <p>15,000+ indicators from 9 trusted vendors, updated every 4 hours</p>
                        </div>
                    </li>
                    <li>
                        <span class="benefit-icon">🔴</span>
                        <div>
                            <strong>Critical CVEs & Zero-Days</strong>
                            <p>Top 5 vulnerabilities from CISA KEV catalog with severity scores</p>
                        </div>
                    </li>
                    <li>
                        <span class="benefit-icon">🔐</span>
                        <div>
                            <strong>Ransomware Activity</strong>
                            <p>Latest victims, active groups, and industry targeting trends</p>
                        </div>
                    </li>
                    <li>
                        <span class="benefit-icon">📚</span>
                        <div>
                            <strong>New Articles & Guides</strong>
                            <p>Security analysis, tool comparisons, and practical guides</p>
                        </div>
                    </li>
                    <li>
                        <span class="benefit-icon">🎯</span>
                        <div>
                            <strong>Actionable Security Tips</strong>
                            <p>Weekly tips to improve your security posture</p>
                        </div>
                    </li>
                </ul>
            </div>
            
            <div class="newsletter-transparency">
                <p>
                    <strong>🔒 Privacy First:</strong> Powered by <a href="https://beehiiv.com" target="_blank">Beehiiv</a>. 
                    Your email is encrypted and never sold. Unsubscribe anytime. 
                    <a href="/privacy.html">Privacy Policy</a>
                </p>
            </div>
        </div>
        
        <div class="newsletter-form-wrapper">
            <div class="newsletter-form-card">
                <h3>Subscribe Now</h3>
                <p>Join security professionals worldwide</p>
                
                <!-- Beehiiv Form -->
                <form class="newsletter-form" action="https://api.beehiiv.com/v2/publications/YOUR_PUB_ID/subscriptions" method="POST">
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="your@email.com" 
                        required
                        aria-label="Email address"
                    >
                    <button type="submit" class="subscribe-button">
                        Subscribe Free
                        <span class="button-arrow">→</span>
                    </button>
                </form>
                
                <div class="form-footer">
                    <p>✅ 100% free • ✅ Unsubscribe anytime • ✅ Sent every Monday</p>
                </div>
            </div>
        </div>
    </div>
</section>
```

### CSS Code

```css
/* ========== NEWSLETTER SECTION ========== */
.newsletter-section {
    background: linear-gradient(135deg, rgba(0, 217, 255, 0.1), rgba(255, 76, 76, 0.1));
    border: 1px solid rgba(0, 217, 255, 0.3);
    border-radius: 16px;
    padding: 60px 40px;
    margin: 80px auto;
    max-width: 1400px;
}

.newsletter-container {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 60px;
    align-items: start;
}

.newsletter-content h2 {
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, var(--accent-cyan), var(--accent-red));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.newsletter-subtitle {
    font-size: 1.2rem;
    color: var(--text-secondary);
    margin-bottom: 2rem;
    line-height: 1.6;
}

.newsletter-benefits h3 {
    font-size: 1.3rem;
    color: var(--text-primary);
    margin-bottom: 1.5rem;
}

.newsletter-benefits ul {
    list-style: none;
    padding: 0;
}

.newsletter-benefits li {
    display: flex;
    gap: 15px;
    margin-bottom: 20px;
    align-items: start;
}

.benefit-icon {
    font-size: 1.5rem;
    flex-shrink: 0;
}

.newsletter-benefits strong {
    display: block;
    color: var(--text-primary);
    font-size: 1.1rem;
    margin-bottom: 5px;
}

.newsletter-benefits p {
    color: var(--text-secondary);
    font-size: 0.95rem;
    margin: 0;
}

.newsletter-transparency {
    margin-top: 30px;
    padding: 15px;
    background: rgba(0, 217, 255, 0.05);
    border-left: 3px solid var(--accent-cyan);
    border-radius: 4px;
}

.newsletter-transparency p {
    font-size: 0.9rem;
    color: var(--text-muted);
    margin: 0;
}

.newsletter-transparency a {
    color: var(--accent-cyan);
    text-decoration: none;
}

.newsletter-transparency a:hover {
    text-decoration: underline;
}

.newsletter-form-wrapper {
    position: sticky;
    top: 100px;
}

.newsletter-form-card {
    background: var(--bg-card);
    backdrop-filter: blur(10px);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 40px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.newsletter-form-card h3 {
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 10px;
}

.newsletter-form-card > p {
    color: var(--text-secondary);
    margin-bottom: 25px;
}

.newsletter-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.newsletter-form input[type="email"] {
    padding: 16px 20px;
    background: var(--bg-secondary);
    border: 1px solid var(--border);
    border-radius: 8px;
    color: var(--text-primary);
    font-size: 1rem;
    font-family: inherit;
    transition: all 0.3s ease;
}

.newsletter-form input[type="email"]:focus {
    outline: none;
    border-color: var(--accent-cyan);
    box-shadow: 0 0 0 3px rgba(0, 217, 255, 0.1);
}

.newsletter-form input[type="email"]::placeholder {
    color: var(--text-muted);
}

.subscribe-button {
    padding: 16px 24px;
    background: linear-gradient(135deg, var(--accent-cyan), var(--accent-red));
    border: none;
    border-radius: 8px;
    color: white;
    font-size: 1.1rem;
    font-weight: 700;
    font-family: inherit;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.subscribe-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 217, 255, 0.3);
}

.subscribe-button:active {
    transform: translateY(0);
}

.button-arrow {
    font-size: 1.2rem;
    transition: transform 0.3s ease;
}

.subscribe-button:hover .button-arrow {
    transform: translateX(5px);
}

.form-footer {
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid var(--border);
}

.form-footer p {
    font-size: 0.85rem;
    color: var(--text-muted);
    text-align: center;
    margin: 0;
}

/* Responsive */
@media (max-width: 1024px) {
    .newsletter-container {
        grid-template-columns: 1fr;
        gap: 40px;
    }
    
    .newsletter-form-wrapper {
        position: static;
    }
}

@media (max-width: 768px) {
    .newsletter-section {
        padding: 40px 20px;
        margin: 40px 20px;
    }
    
    .newsletter-content h2 {
        font-size: 2rem;
    }
    
    .newsletter-subtitle {
        font-size: 1rem;
    }
    
    .newsletter-form-card {
        padding: 30px 20px;
    }
}
```

---

## 🦶 PART 2: FOOTER SIGNUP (ALL PAGES)

### Location
Add this to your footer, before the social links section.

### HTML Code

```html
<!-- Newsletter Signup in Footer -->
<div class="footer-newsletter">
    <h4>📧 Weekly Threat Intel</h4>
    <p>Get security insights delivered every Monday</p>
    
    <form class="footer-newsletter-form" action="https://api.beehiiv.com/v2/publications/YOUR_PUB_ID/subscriptions" method="POST">
        <input 
            type="email" 
            name="email" 
            placeholder="your@email.com" 
            required
            aria-label="Email address"
        >
        <button type="submit">Subscribe</button>
    </form>
    
    <p class="footer-newsletter-note">
        100% free • <a href="/privacy.html">Privacy Policy</a>
    </p>
</div>
```

### CSS Code

```css
/* Footer Newsletter */
.footer-newsletter {
    margin-bottom: 40px;
    padding-bottom: 30px;
    border-bottom: 1px solid var(--border);
}

.footer-newsletter h4 {
    font-size: 1.3rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 8px;
}

.footer-newsletter > p {
    font-size: 0.95rem;
    color: var(--text-secondary);
    margin-bottom: 15px;
}

.footer-newsletter-form {
    display: flex;
    gap: 10px;
    max-width: 500px;
}

.footer-newsletter-form input {
    flex: 1;
    padding: 12px 16px;
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 6px;
    color: var(--text-primary);
    font-size: 0.95rem;
    font-family: inherit;
}

.footer-newsletter-form input:focus {
    outline: none;
    border-color: var(--accent-cyan);
}

.footer-newsletter-form button {
    padding: 12px 24px;
    background: linear-gradient(135deg, var(--accent-cyan), var(--accent-red));
    border: none;
    border-radius: 6px;
    color: white;
    font-weight: 600;
    font-family: inherit;
    cursor: pointer;
    white-space: nowrap;
    transition: opacity 0.3s ease;
}

.footer-newsletter-form button:hover {
    opacity: 0.9;
}

.footer-newsletter-note {
    font-size: 0.85rem;
    color: var(--text-muted);
    margin-top: 10px;
}

.footer-newsletter-note a {
    color: var(--accent-cyan);
    text-decoration: none;
}

.footer-newsletter-note a:hover {
    text-decoration: underline;
}

@media (max-width: 600px) {
    .footer-newsletter-form {
        flex-direction: column;
    }
    
    .footer-newsletter-form button {
        width: 100%;
    }
}
```

---

## 📰 PART 3: ARTICLES PAGE CTA

### Location
Add this AFTER each article content, BEFORE the next article or footer.

### HTML Code

```html
<!-- Article Newsletter CTA -->
<div class="article-newsletter-cta">
    <div class="cta-content">
        <h3>📧 Enjoyed this article?</h3>
        <p>Get weekly threat intelligence insights + new articles delivered to your inbox every Monday.</p>
    </div>
    
    <form class="inline-newsletter-form" action="https://api.beehiiv.com/v2/publications/YOUR_PUB_ID/subscriptions" method="POST">
        <input 
            type="email" 
            name="email" 
            placeholder="your@email.com" 
            required
            aria-label="Email address"
        >
        <button type="submit">Subscribe Free</button>
    </form>
    
    <p class="cta-note">
        ✅ CVEs & Ransomware • ✅ Security Tips • ✅ 100% Free
    </p>
</div>
```

### CSS Code

```css
/* Article Newsletter CTA */
.article-newsletter-cta {
    background: linear-gradient(135deg, rgba(0, 217, 255, 0.1), rgba(255, 76, 76, 0.1));
    border-left: 4px solid var(--accent-cyan);
    padding: 40px;
    margin: 60px 0;
    border-radius: 8px;
    text-align: center;
}

.cta-content h3 {
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 10px;
}

.cta-content p {
    font-size: 1.1rem;
    color: var(--text-secondary);
    margin-bottom: 25px;
}

.inline-newsletter-form {
    display: flex;
    gap: 12px;
    max-width: 500px;
    margin: 0 auto 15px;
}

.inline-newsletter-form input {
    flex: 1;
    padding: 14px 18px;
    background: var(--bg-secondary);
    border: 1px solid var(--border);
    border-radius: 6px;
    color: var(--text-primary);
    font-size: 1rem;
    font-family: inherit;
}

.inline-newsletter-form input:focus {
    outline: none;
    border-color: var(--accent-cyan);
}

.inline-newsletter-form button {
    padding: 14px 28px;
    background: linear-gradient(135deg, var(--accent-cyan), var(--accent-red));
    border: none;
    border-radius: 6px;
    color: white;
    font-weight: 600;
    font-family: inherit;
    cursor: pointer;
    white-space: nowrap;
}

.inline-newsletter-form button:hover {
    opacity: 0.9;
}

.cta-note {
    font-size: 0.9rem;
    color: var(--text-muted);
    margin: 0;
}

@media (max-width: 600px) {
    .article-newsletter-cta {
        padding: 30px 20px;
    }
    
    .inline-newsletter-form {
        flex-direction: column;
    }
}
```

---

## 📖 PART 4: GUIDES PAGE CTA

### Location
Add this at the END of each guide, before the footer.

### HTML Code

```html
<!-- Guide Newsletter CTA -->
<div class="guide-newsletter-cta">
    <div class="cta-icon">📖</div>
    <h3>Want More Security Guides?</h3>
    <p>Get weekly threat intel + new guides delivered to your inbox. Practical security advice, no fluff.</p>
    
    <form class="guide-form" action="https://api.beehiiv.com/v2/publications/YOUR_PUB_ID/subscriptions" method="POST">
        <input 
            type="email" 
            name="email" 
            placeholder="your@email.com" 
            required
        >
        <button type="submit">Get Weekly Updates</button>
    </form>
    
    <p class="guide-cta-benefits">
        ✅ How-to guides • ✅ Tool comparisons • ✅ Security tips
    </p>
</div>
```

### CSS Code

```css
/* Guide Newsletter CTA */
.guide-newsletter-cta {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 50px 40px;
    margin: 60px 0;
    text-align: center;
}

.cta-icon {
    font-size: 3rem;
    margin-bottom: 20px;
}

.guide-newsletter-cta h3 {
    font-size: 2rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 15px;
}

.guide-newsletter-cta > p {
    font-size: 1.1rem;
    color: var(--text-secondary);
    margin-bottom: 30px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}

.guide-form {
    display: flex;
    gap: 12px;
    max-width: 500px;
    margin: 0 auto 20px;
}

.guide-form input {
    flex: 1;
    padding: 14px 18px;
    background: var(--bg-secondary);
    border: 1px solid var(--border);
    border-radius: 6px;
    color: var(--text-primary);
    font-size: 1rem;
    font-family: inherit;
}

.guide-form input:focus {
    outline: none;
    border-color: var(--accent-cyan);
}

.guide-form button {
    padding: 14px 28px;
    background: linear-gradient(135deg, var(--accent-cyan), var(--accent-red));
    border: none;
    border-radius: 6px;
    color: white;
    font-weight: 600;
    font-family: inherit;
    cursor: pointer;
    white-space: nowrap;
}

.guide-form button:hover {
    opacity: 0.9;
}

.guide-cta-benefits {
    font-size: 0.9rem;
    color: var(--text-muted);
}

@media (max-width: 600px) {
    .guide-newsletter-cta {
        padding: 40px 20px;
    }
    
    .guide-form {
        flex-direction: column;
    }
}
```

---

## 🔍 PART 5: TOOL COMPARISON CTA

### Location
Add this at the END of tool comparison pages.

### HTML Code

```html
<!-- Comparison Newsletter CTA -->
<div class="comparison-newsletter-cta">
    <h3>🔍 Comparing Security Tools?</h3>
    <p>Get weekly threat intel + new tool comparisons delivered to your inbox. Make informed decisions with our research.</p>
    
    <form class="comparison-form" action="https://api.beehiiv.com/v2/publications/YOUR_PUB_ID/subscriptions" method="POST">
        <input 
            type="email" 
            name="email" 
            placeholder="your@email.com" 
            required
        >
        <button type="submit">Subscribe for Updates</button>
    </form>
    
    <p class="comparison-note">
        ✅ Tool reviews • ✅ Feature comparisons • ✅ Pricing analysis
    </p>
</div>
```

### CSS Code

```css
/* Comparison Newsletter CTA */
.comparison-newsletter-cta {
    background: linear-gradient(135deg, rgba(0, 217, 255, 0.05), rgba(255, 76, 76, 0.05));
    border: 2px dashed var(--border);
    border-radius: 12px;
    padding: 40px;
    margin: 60px 0;
    text-align: center;
}

.comparison-newsletter-cta h3 {
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 15px;
}

.comparison-newsletter-cta > p {
    font-size: 1.1rem;
    color: var(--text-secondary);
    margin-bottom: 25px;
}

.comparison-form {
    display: flex;
    gap: 12px;
    max-width: 500px;
    margin: 0 auto 15px;
}

.comparison-form input {
    flex: 1;
    padding: 14px 18px;
    background: var(--bg-secondary);
    border: 1px solid var(--border);
    border-radius: 6px;
    color: var(--text-primary);
    font-size: 1rem;
    font-family: inherit;
}

.comparison-form input:focus {
    outline: none;
    border-color: var(--accent-cyan);
}

.comparison-form button {
    padding: 14px 28px;
    background: linear-gradient(135deg, var(--accent-cyan), var(--accent-red));
    border: none;
    border-radius: 6px;
    color: white;
    font-weight: 600;
    font-family: inherit;
    cursor: pointer;
    white-space: nowrap;
}

.comparison-form button:hover {
    opacity: 0.9;
}

.comparison-note {
    font-size: 0.9rem;
    color: var(--text-muted);
}

@media (max-width: 600px) {
    .comparison-newsletter-cta {
        padding: 30px 20px;
    }
    
    .comparison-form {
        flex-direction: column;
    }
}
```

---

## 🔧 IMPLEMENTATION STEPS

### Step 1: Replace YOUR_PUB_ID

In ALL forms above, replace:
```html
action="https://api.beehiiv.com/v2/publications/YOUR_PUB_ID/subscriptions"
```

With your actual Publication ID:
```html
action="https://api.beehiiv.com/v2/publications/pub_abc123xyz/subscriptions"
```

### Step 2: Add to index.html

1. Open `index.html`
2. Find the section AFTER "Latest Ransomware"
3. Add the Homepage Newsletter Section (Part 1)
4. Find the `<footer>` section
5. Add the Footer Newsletter (Part 2) at the top of footer

### Step 3: Add to articles.html

1. Open `articles.html`
2. Find where articles end
3. Add the Article Newsletter CTA (Part 3)

### Step 4: Add to Guide Pages

1. Open each guide HTML file
2. Add Guide Newsletter CTA (Part 4) at the end

### Step 5: Add to Comparison Pages

1. Open comparison pages
2. Add Comparison Newsletter CTA (Part 5) at the end

### Step 6: Test

1. Visit each page
2. Check forms display correctly
3. Test signup flow
4. Verify email confirmation

---

## ✅ CHECKLIST

- [ ] Replaced `YOUR_PUB_ID` with actual ID
- [ ] Added homepage section to index.html
- [ ] Added footer form to all pages
- [ ] Added article CTA to articles.html
- [ ] Added guide CTA to guide pages
- [ ] Added comparison CTA to comparison pages
- [ ] Tested all forms
- [ ] Verified mobile responsiveness

---

**All forms are now ready to collect subscribers!** 🎉
