import re

with open('m-app.js', 'r', encoding='utf-8') as f:
    js_content = f.read()

# We need to change init() to run global things first, then skip mobile things for desktop

old_init = """    // ========== INIT ON DOM READY ==========
    function init() {
        // Skip on desktop
        if (window.innerWidth > 768) return;

        initBottomNav();
        hideBMC();
        injectCoffeeWidget();"""

new_init = """    // ========== INIT ON DOM READY ==========
    function init() {
        // Run global features first (regardless of desktop or mobile)
        hideBMC();
        injectCoffeeWidget();

        // Keep hiding BMC periodically (it loads async)
        setTimeout(hideBMC, 500);
        setTimeout(hideBMC, 1000);
        setTimeout(hideBMC, 2000);
        setTimeout(hideBMC, 5000);

        // Skip mobile-specific features on desktop
        if (window.innerWidth > 768) return;

        initBottomNav();"""

js_content = js_content.replace(old_init, new_init)

# Remove the old periodic hideBMC calls that were at the bottom of init()
old_periodic = """        // Keep hiding BMC periodically (it loads async)
        setTimeout(hideBMC, 500);
        setTimeout(hideBMC, 1000);
        setTimeout(hideBMC, 2000);
        setTimeout(hideBMC, 5000);"""

# Replace the LAST occurrence of old_periodic (which is at the end of init) with empty string
last_idx = js_content.rfind(old_periodic)
if last_idx != -1:
    js_content = js_content[:last_idx] + js_content[last_idx + len(old_periodic):]

with open('m-app.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

