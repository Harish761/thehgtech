import os
import json
import re
import glob

base_dir = '/Volumes/Data-Personal/Webpage/thehgtech'

def inject_schema(file_path, schema_json):
    with open(file_path, 'r') as f:
        content = f.read()
    
    # Check if this exact schema is already present
    schema_str = json.dumps(schema_json, indent=2)
    schema_tag = f'<script type="application/ld+json">\n{schema_str}\n    </script>'
    
    if schema_tag in content:
        return # Already injected
        
    # Find </head>
    head_end_idx = content.find('</head>')
    if head_end_idx != -1:
        content = content[:head_end_idx] + '    ' + schema_tag + '\n' + content[head_end_idx:]
        with open(file_path, 'w') as f:
            f.write(content)

# 1. Homepage Schema (Organization, WebSite, FAQPage)
index_path = os.path.join(base_dir, 'index.html')

org_schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "TheHGTech",
    "url": "https://thehgtech.com",
    "logo": "https://thehgtech.com/images/logo-dark.png",
    "sameAs": [
        "https://twitter.com/thehgtech",
        "https://www.linkedin.com/company/thehgtech"
    ]
}

website_schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://thehgtech.com/",
    "potentialAction": {
        "@type": "SearchAction",
        "target": "https://thehgtech.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
    }
}

# FAQPage schema for the homepage
faq_schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "What is TheHGTech?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "TheHGTech is a cybersecurity intelligence hub targeting SOC analysts and security professionals, providing live threat intel, CVE tracking, and expert cyber security news."
            }
        },
        {
            "@type": "Question",
            "name": "Are the cybersecurity tools on TheHGTech free?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, TheHGTech provides free open-source security tools, including a live threat intel dashboard and real-time CVE tracker."
            }
        }
    ]
}

inject_schema(index_path, org_schema)
inject_schema(index_path, website_schema)
inject_schema(index_path, faq_schema)


# 2. Guides & Articles Schema (Article, BreadcrumbList)
def process_inner_pages(directory, section_name):
    html_files = glob.glob(os.path.join(base_dir, directory, '*.html'))
    for file_path in html_files:
        if file_path.endswith('index.html'):
            continue
            
        with open(file_path, 'r') as f:
            content = f.read()
            
        title_match = re.search(r'<title>(.*?)</title>', content, re.IGNORECASE)
        title = title_match.group(1) if title_match else ""
        
        desc_match = re.search(r'<meta[^>]*name="description"[^>]*content="([^"]*)"', content, re.IGNORECASE)
        desc = desc_match.group(1) if desc_match else ""
        
        filename = os.path.basename(file_path)
        url = f"https://thehgtech.com/{directory}/{filename}"
        
        article_schema = {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": title,
            "description": desc,
            "image": "https://thehgtech.com/images/og-image.jpg",  # Default image
            "author": {
                "@type": "Person",
                "name": "Harish G"
            },
            "publisher": {
                "@type": "Organization",
                "name": "TheHGTech",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://thehgtech.com/images/logo-dark.png"
                }
            },
            "datePublished": "2025-01-01", # Placeholder, ideally extracted from content
            "dateModified": "2026-06-26"
        }
        
        breadcrumb_schema = {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://thehgtech.com/"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": section_name,
                    "item": f"https://thehgtech.com/{directory}.html"
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "name": title,
                    "item": url
                }
            ]
        }
        
        inject_schema(file_path, article_schema)
        inject_schema(file_path, breadcrumb_schema)

process_inner_pages('guides', 'Guides')
process_inner_pages('articles', 'Articles')

print("Injected JSON-LD Schema successfully!")
