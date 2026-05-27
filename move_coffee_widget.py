import re

# 1. Remove from interaction-bar.js
with open('interaction-bar.js', 'r', encoding='utf-8') as f:
    js_content = f.read()

# Match the injectCoffeeWidget function and the call to it
js_content = re.sub(r'// Inject Floating Coffee Widget\nfunction injectCoffeeWidget\(\) \{[\s\S]*?\}\n\n', '', js_content)
js_content = re.sub(r'\s*injectCoffeeWidget\(\); // Append floating coffee widget\n', '\n', js_content)

with open('interaction-bar.js', 'w', encoding='utf-8') as f:
    f.write(js_content)


# 2. Remove from interaction-bar.css and capture it
with open('interaction-bar.css', 'r', encoding='utf-8') as f:
    css_content = f.read()

# Capture the CSS
match = re.search(r'/\* ================================================\n   FLOATING COFFEE WIDGET\n   ================================================ \*/\n[\s\S]*', css_content)
coffee_css = match.group(0) if match else ""

# Remove it from interaction-bar.css
css_content = css_content.replace(coffee_css, '')
with open('interaction-bar.css', 'w', encoding='utf-8') as f:
    f.write(css_content.strip() + '\n')

# 3. Add to m-layout.css
with open('m-layout.css', 'a', encoding='utf-8') as f:
    f.write('\n\n' + coffee_css + '\n')

# 4. Add to m-app.js
with open('m-app.js', 'r', encoding='utf-8') as f:
    mapp_content = f.read()

coffee_js = """
    // ========== FLOATING COFFEE WIDGET ==========
    function injectCoffeeWidget() {
        // Ensure we are NOT on the homepage before doing anything
        const path = window.location.pathname;
        const isHomePage = path === '/' || path === '' || path.endsWith('index.html') || document.body.classList.contains('home-page');

        if (isHomePage) return; // Homepage already has its own widget

        // Prevent duplicate injections
        if (document.getElementById('hg-coffee-floating-widget')) return;

        const widgetHTML = `
            <div id="hg-coffee-floating-widget" class="hg-coffee-widget">
                <a href="https://buymeacoffee.com/thehgtech" target="_blank" rel="noopener noreferrer" class="hg-coffee-btn" aria-label="Support the lab">
                    <i class="fas fa-coffee"></i>
                </a>
                <div class="hg-coffee-tooltip">
                    <strong><i class="fas fa-shield-alt"></i> Keep it Free & Ad-Free</strong>
                    We spend dozens of hours researching and writing. If this helped you, consider supporting the lab coffee fund.
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', widgetHTML);
    }
"""

# Insert JS before init()
mapp_content = mapp_content.replace('    // ========== INIT ON DOM READY ==========', coffee_js + '\n    // ========== INIT ON DOM READY ==========')
# Call it in init()
mapp_content = mapp_content.replace('hideBMC();', 'hideBMC();\n        injectCoffeeWidget();')

with open('m-app.js', 'w', encoding='utf-8') as f:
    f.write(mapp_content)

print("Migration successful")
