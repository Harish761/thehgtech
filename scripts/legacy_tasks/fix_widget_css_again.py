import re
import os

css_block = """
/* ================================================
   FLOATING COFFEE WIDGET
   ================================================ */

.hg-coffee-widget {
    position: fixed;
    bottom: 2rem;
    left: 2rem;
    z-index: 9990;
    display: flex;
    align-items: center;
    gap: 1rem;
    pointer-events: none;
}

.hg-coffee-btn {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(135deg, #00D9FF, #a78bfa);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    box-shadow: 0 4px 15px rgba(0, 217, 255, 0.3);
    cursor: pointer;
    pointer-events: auto;
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border: 2px solid rgba(255, 255, 255, 0.1);
}

.hg-coffee-btn:hover {
    transform: scale(1.1) translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 217, 255, 0.5);
}

.hg-coffee-tooltip {
    background: rgba(17, 17, 24, 0.95);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 1rem 1.25rem;
    border-radius: 12px;
    width: max-content;
    max-width: 300px;
    color: var(--text-primary);
    font-size: 0.9rem;
    line-height: 1.5;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    opacity: 0;
    visibility: hidden;
    transform: translateX(-10px);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    pointer-events: auto;
}

.hg-coffee-tooltip strong {
    color: var(--accent-cyan);
    display: block;
    margin-bottom: 0.25rem;
    font-size: 0.95rem;
}

.hg-coffee-widget:hover .hg-coffee-tooltip {
    opacity: 1;
    visibility: visible;
    transform: translateX(0);
}

/* Light mode adjustments */
body.light-mode .hg-coffee-tooltip {
    background: rgba(255, 255, 255, 0.95);
    border-color: rgba(0, 0, 0, 0.1);
    color: #333;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
    .hg-coffee-widget {
        bottom: 85px; /* Above the mobile nav bar */
        left: 1rem;
        flex-direction: row-reverse;
    }
    
    .hg-coffee-tooltip {
        transform: translateX(10px);
        max-width: 250px;
        font-size: 0.85rem;
    }
    
    .hg-coffee-widget:hover .hg-coffee-tooltip {
        transform: translateX(0);
    }
}
"""

with open('design-system.css', 'r', encoding='utf-8') as f:
    content = f.read()

# Remove the block from design-system.css
content = re.sub(r'/\* ================================================\n   FLOATING COFFEE WIDGET\n   ================================================ \*/.*?@media \(max-width: 768px\) \{.*?\}\n\}', '', content, flags=re.DOTALL)
with open('design-system.css', 'w', encoding='utf-8') as f:
    f.write(content.strip() + '\n')

with open('ui-enhancements.css', 'a', encoding='utf-8') as f:
    f.write('\n\n' + css_block.strip() + '\n')

# Now update the cache buster across all html files
count = 0
for root, _, files in os.walk('.'):
    if '.git' in root or '.agent' in root or 'node_modules' in root: continue
    for file in files:
        if file.endswith('.html'):
            fpath = os.path.join(root, file)
            with open(fpath, 'r', encoding='utf-8') as f:
                html = f.read()
            
            # replace ui-enhancements.css?v=* with ui-enhancements.css?v=20260528_coffee
            new_html = re.sub(r'href="([^"]*ui-enhancements\.css)(?:\?v=[a-zA-Z0-9_]+)?([^"]*)"', r'href="\1?v=20260528_coffee\2"', html)
            
            if new_html != html:
                count += 1
                with open(fpath, 'w', encoding='utf-8') as f:
                    f.write(new_html)

print(f"Updated cache buster in {count} HTML files.")
