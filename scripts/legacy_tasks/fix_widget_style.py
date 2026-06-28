import re

with open('ui-enhancements.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Replace the button styles
old_btn = """.hg-coffee-btn {
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
}"""

new_btn = """.hg-coffee-btn {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: #FFDD00;
    color: #000000;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.6rem;
    box-shadow: 0 4px 15px rgba(255, 221, 0, 0.4);
    cursor: pointer;
    pointer-events: auto;
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border: none;
}

.hg-coffee-btn:hover {
    transform: scale(1.1) translateY(-2px);
    box-shadow: 0 8px 25px rgba(255, 221, 0, 0.6);
    color: #000000;
}
"""

css = css.replace(old_btn, new_btn)

with open('ui-enhancements.css', 'w', encoding='utf-8') as f:
    f.write(css)

