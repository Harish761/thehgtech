import os

GA_SNIPPET = """    <!-- Google Analytics 4 -->
    <script>
        window.addEventListener('load', function () {
            setTimeout(function () {
                var gtmScript = document.createElement('script');
                gtmScript.async = true;
                gtmScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-XL6RCXZJE2';
                document.head.appendChild(gtmScript);
                gtmScript.onload = function () {
                    window.dataLayer = window.dataLayer || [];
                    function gtag() { dataLayer.push(arguments); }
                    window.gtag = gtag;
                    gtag('js', new Date());
                    gtag('config', 'G-XL6RCXZJE2');
                };
            }, 100);
        });
    </script>"""

FULLRES_SNIPPET = """    <!-- Fullres Analytics -->
    <script>
        window.addEventListener('load', function () {
            var fullres = document.createElement('script');
            fullres.async = true;
            fullres.src = 'https://t.fullres.net/thehgtech.js?' + (new Date() - new Date() % 43200000);
            document.head.appendChild(fullres);
        });
    </script>"""

files_to_patch = [
    "tools/zero-day-checker.html",
    "tools/grc-assessment/iso27001-grc-guide.html",
    "admin-articles.html",
    "guides/incident-response-plan.html",
    "articles/instagram-e2ee-rollback-2026.html"
]

for filepath in files_to_patch:
    with open(filepath, 'r') as f:
        content = f.read()
    
    needs_ga = "G-XL6RCXZJE2" not in content
    needs_fullres = "t.fullres.net" not in content
    
    insertions = []
    if needs_ga:
        insertions.append(GA_SNIPPET)
    if needs_fullres:
        insertions.append(FULLRES_SNIPPET)
        
    if insertions:
        to_insert = "\n" + "\n".join(insertions) + "\n</head>"
        content = content.replace("</head>", to_insert)
        with open(filepath, 'w') as f:
            f.write(content)
        print(f"Patched {filepath}")
    else:
        print(f"No patch needed for {filepath}")

