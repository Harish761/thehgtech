import re

with open('index.html', 'r') as f:
    content = f.read()

# 1. CSS optimizations
css_files = [
    r'(<link rel="stylesheet" href="m-core\.min\.css\?v=20260203") media="\(max-width: 768px\)">',
    r'(<link rel="stylesheet" href="m-layout\.min\.css\?v=3\.4") media="\(max-width: 768px\)">',
    r'(<link rel="stylesheet" href="m-components\.min\.css\?v=20260203") media="\(max-width: 768px\)">',
    r'(<link rel="stylesheet" href="theme-toggle\.css")>',
    r'(<link rel="stylesheet" href="mobile-nav\.css")>'
]

for regex in css_files:
    content = re.sub(regex, r'\1 media="print" onload="this.media=\'all\'">', content)

# Remove the synchronous fallback for homepage-styles.css
content = re.sub(r'\s*<link rel="stylesheet" href="homepage-styles\.css\?v=1\.2">\n', '\n', content)

# 2. Main Thread Execution & TBT

# Defer Google Analytics
ga_script = """    <script async src="https://www.googletagmanager.com/gtag/js?id=G-XL6RCXZJE2"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag("js", new Date());
        gtag("config", "G-XL6RCXZJE2");
    </script>"""

ga_deferred = """    <script>
        function loadGA() {
            var script = document.createElement('script');
            script.src = "https://www.googletagmanager.com/gtag/js?id=G-XL6RCXZJE2";
            script.async = true;
            document.head.appendChild(script);
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag("js", new Date());
            gtag("config", "G-XL6RCXZJE2");
        }
        
        // Delay GA until interaction or 3.5 seconds
        var gaLoaded = false;
        function initGA() {
            if (!gaLoaded) {
                gaLoaded = true;
                loadGA();
                ['scroll', 'mousemove', 'touchstart', 'click'].forEach(e => window.removeEventListener(e, initGA));
            }
        }
        ['scroll', 'mousemove', 'touchstart', 'click'].forEach(e => window.addEventListener(e, initGA, {passive: true}));
        setTimeout(initGA, 3500);
    </script>"""

content = content.replace(ga_script, ga_deferred)

# Defer reCAPTCHA
recaptcha_script = '<script src="https://www.google.com/recaptcha/api.js?onload=_hgHomeCaptcha&render=explicit&hl=en" async defer></script>'
recaptcha_deferred = """<script>
        var recaptchaLoaded = false;
        function initRecaptcha() {
            if (!recaptchaLoaded) {
                recaptchaLoaded = true;
                var s = document.createElement('script');
                s.src = "https://www.google.com/recaptcha/api.js?onload=_hgHomeCaptcha&render=explicit&hl=en";
                s.async = true; s.defer = true;
                document.body.appendChild(s);
                ['scroll', 'mousemove', 'touchstart', 'click'].forEach(e => window.removeEventListener(e, initRecaptcha));
            }
        }
        ['scroll', 'mousemove', 'touchstart', 'click'].forEach(e => window.addEventListener(e, initRecaptcha, {passive: true}));
        setTimeout(initRecaptcha, 4000);
</script>"""
content = content.replace(recaptcha_script, recaptcha_deferred)

# Add min-height to counters to prevent CLS
content = content.replace('<div class="stat-item" style="text-align: center; min-width: 100px;">', '<div class="stat-item" style="text-align: center; min-width: 100px; min-height: 55px;">')

with open('index.html', 'w') as f:
    f.write(content)

print("Optimized index.html")
