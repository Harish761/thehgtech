css = """
/* Premium Futuristic Theme Toggle */
.premium-cyber-toggle {
    background: transparent !important;
    border: none !important;
    padding: 0 !important;
    cursor: pointer !important;
    outline: none !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    width: 64px !important;
    height: 32px !important;
    transform: scale(0.9);
    margin: 0 16px !important;
    -webkit-appearance: none;
}

.premium-cyber-toggle:hover .pct-track {
    box-shadow: inset 0 2px 4px rgba(0,0,0,0.5), 0 0 15px rgba(0, 217, 255, 0.4);
}

.pct-track {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 50px;
    background: #0f172a;
    border: 2px solid #1e293b;
    box-shadow: inset 0 2px 4px rgba(0,0,0,0.5), 0 0 10px rgba(0, 217, 255, 0.2);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 8px;
    box-sizing: border-box;
}

.pct-icon-dark, .pct-icon-light {
    font-size: 11px;
    z-index: 1;
    transition: all 0.3s ease;
}

.pct-icon-dark {
    color: #00D9FF;
    text-shadow: 0 0 8px rgba(0, 217, 255, 0.8);
    opacity: 1;
}

.pct-icon-light {
    color: #475569;
    opacity: 0.5;
}

.pct-thumb {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: linear-gradient(135deg, #00D9FF, #005cff);
    box-shadow: 0 0 12px rgba(0, 217, 255, 0.8), inset 0 0 4px rgba(255,255,255,0.5);
    z-index: 2;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.pct-thumb::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    background: rgba(255,255,255,0.8);
    border-radius: 50%;
    box-shadow: 0 0 8px #fff;
}

/* Light Mode Overrides */
html[data-theme="light"] .premium-cyber-toggle:hover .pct-track,
body.light-mode .premium-cyber-toggle:hover .pct-track {
    box-shadow: inset 0 2px 4px rgba(0,0,0,0.1), 0 0 15px rgba(255, 61, 61, 0.4);
}

html[data-theme="light"] .pct-track,
body.light-mode .pct-track {
    background: #e2e8f0;
    border-color: #cbd5e1;
    box-shadow: inset 0 2px 4px rgba(0,0,0,0.1), 0 0 10px rgba(255, 61, 61, 0.2);
}

html[data-theme="light"] .pct-icon-dark,
body.light-mode .pct-icon-dark {
    color: #94a3b8;
    text-shadow: none;
    opacity: 0.5;
}

html[data-theme="light"] .pct-icon-light,
body.light-mode .pct-icon-light {
    color: #FF3D3D;
    text-shadow: 0 0 8px rgba(255, 61, 61, 0.8);
    opacity: 1;
}

html[data-theme="light"] .pct-thumb,
body.light-mode .pct-thumb {
    left: calc(100% - 26px);
    background: linear-gradient(135deg, #FF3D3D, #ff8c00);
    box-shadow: 0 0 12px rgba(255, 61, 61, 0.8), inset 0 0 4px rgba(255,255,255,0.5);
}

/* Hide legacy elements if they bleed through */
.m-theme-toggle__thumb, .m-theme-toggle__stars, .toggle-stars {
    display: none !important;
}
"""

with open('header.css', 'a') as f:
    f.write(css)

import subprocess
subprocess.run(['python3', 'scripts/minify-assets.py'], check=False)
