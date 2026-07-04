import re

with open('m-app.js', 'r', encoding='utf-8') as f:
    js_content = f.read()

# 1. Update hideBMC selector
js_content = js_content.replace("'a[href*=\"buymeacoffee\"]'", "'a[href*=\"buymeacoffee\"]:not(.hg-coffee-btn):not(.coffee-btn)'")

# 2. Allow the widget on the homepage
js_content = js_content.replace(
    'if (isHomePage) return; // Homepage already has its own widget',
    '// if (isHomePage) return; // Homepage now gets the global widget too'
)

with open('m-app.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

