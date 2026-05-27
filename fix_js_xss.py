import os
import re

def fix_js_files():
    # 1. threat-analytics.js
    f = 'threat-analytics.js'
    if os.path.exists(f):
        with open(f, 'r') as file:
            content = file.read()
        
        # Add escape function if not present
        if 'escapeHTMLBasic' not in content:
            escape_func = "function escapeHTMLBasic(str) { if (!str) return ''; return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\"/g, '&quot;'); }\n"
            content = escape_func + content

        content = content.replace('${error.message}', '${escapeHTMLBasic(error.message)}')
        
        with open(f, 'w') as file:
            file.write(content)

    # 2. tools/grc-assessment/grc-engine.js
    f = 'tools/grc-assessment/grc-engine.js'
    if os.path.exists(f):
        with open(f, 'r') as file:
            content = file.read()
            
        if 'escapeHTMLBasic' not in content:
            escape_func = "function escapeHTMLBasic(str) { if (!str) return ''; return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\"/g, '&quot;'); }\n"
            content = escape_func + content
            
        content = content.replace('${lastEntry.score}', '${escapeHTMLBasic(lastEntry.score)}')
        content = content.replace('${preset.icon}', '${escapeHTMLBasic(preset.icon)}')
        content = content.replace('${preset.label}', '${escapeHTMLBasic(preset.label)}')
        content = content.replace('${diff}', '${escapeHTMLBasic(diff)}')
        content = content.replace('${Math.abs(diff)}', '${escapeHTMLBasic(Math.abs(diff))}')

        with open(f, 'w') as file:
            file.write(content)
            
    # 3. ui-enhancements.js
    f = 'ui-enhancements.js'
    if os.path.exists(f):
        with open(f, 'r') as file:
            content = file.read()
            
        if 'escapeHTMLBasic' not in content:
            escape_func = "function escapeHTMLBasic(str) { if (!str) return ''; return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\"/g, '&quot;'); }\n"
            content = escape_func + content
            
        content = content.replace("${item.icon || 'fa-bolt'}", "${escapeHTMLBasic(item.icon) || 'fa-bolt'}")
        
        with open(f, 'w') as file:
            file.write(content)
            
    # 4. ai-security-display.js
    f = 'ai-security-display.js'
    if os.path.exists(f):
        with open(f, 'r') as file:
            content = file.read()
            
        if 'escapeHTMLBasic' not in content:
            escape_func = "function escapeHTMLBasic(str) { if (!str) return ''; return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\"/g, '&quot;'); }\n"
            content = escape_func + content
            
        content = content.replace('${iconClass}', '${escapeHTMLBasic(iconClass)}')
        content = content.replace('${iconColor}', '${escapeHTMLBasic(iconColor)}')
        
        with open(f, 'w') as file:
            file.write(content)

fix_js_files()
print("JS files patched for DOM XSS")
