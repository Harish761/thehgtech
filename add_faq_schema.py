#!/usr/bin/env python3
"""
Add FAQ Schema to All Guides and Articles
------------------------------------------
Generates relevant FAQs based on page content and adds FAQPage schema.
"""

import os
import re
from pathlib import Path

def get_page_title(content):
    """Extract page title from HTML"""
    match = re.search(r'<title>([^|<]+)', content)
    if match:
        return match.group(1).strip()
    return None

def has_faq_schema(content):
    """Check if page already has FAQPage schema"""
    return 'FAQPage' in content

def generate_faq_for_topic(title, page_type):
    """Generate relevant FAQs based on page title"""
    
    # Clean title
    title_clean = re.sub(r'\[.*?\]', '', title).strip()
    title_lower = title_clean.lower()
    
    # Generate topic-specific FAQs
    faqs = []
    
    if 'ransomware' in title_lower:
        faqs = [
            ("What is ransomware and how does it work?", "Ransomware is malicious software that encrypts files and demands payment for decryption. Attackers typically gain access through phishing emails, vulnerable RDP, or software exploits, then deploy encryption across the network."),
            ("How can organizations protect against ransomware?", "Key protections include regular backups, network segmentation, endpoint detection and response (EDR), email filtering, patch management, and security awareness training for employees."),
            ("Should you pay the ransomware demand?", "Security experts and law enforcement generally advise against paying ransoms as it funds criminal operations and doesn't guarantee data recovery. Focus on backup restoration and incident response instead.")
        ]
    elif 'cve' in title_lower or 'vulnerability' in title_lower:
        faqs = [
            ("What is a CVE and why does it matter?", "CVE (Common Vulnerabilities and Exposures) is a standardized identifier for security vulnerabilities. It helps organizations track, prioritize, and remediate security issues across their infrastructure."),
            ("How should organizations prioritize CVE patching?", "Prioritize based on CVSS score, EPSS exploit probability, CISA KEV status (actively exploited), and asset criticality. Focus on critical/high severity vulnerabilities affecting internet-facing systems first."),
            ("What tools help track CVE vulnerabilities?", "Popular tools include vulnerability scanners (Nessus, Qualys), CISA KEV catalog, NVD database, and platforms like TheHGTech CVE Tracker that aggregate and enrich vulnerability data.")
        ]
    elif 'ai' in title_lower or 'llm' in title_lower or 'ml' in title_lower:
        faqs = [
            ("What are the main security risks with AI systems?", "Key risks include prompt injection attacks, data poisoning, model theft, adversarial inputs, hallucinations leading to misinformation, and privacy breaches from training data exposure."),
            ("How can organizations secure their AI deployments?", "Implement input validation, output filtering, model access controls, regular security testing, monitoring for anomalies, and follow frameworks like OWASP LLM Top 10 and MITRE ATLAS."),
            ("What is prompt injection and how do you prevent it?", "Prompt injection is an attack where malicious inputs manipulate AI behavior. Prevention includes input sanitization, output validation, system prompt protection, and using AI-specific security tools.")
        ]
    elif 'phishing' in title_lower:
        faqs = [
            ("What are the warning signs of a phishing attack?", "Common indicators include urgent language, sender address mismatches, suspicious links, requests for sensitive information, poor grammar, and unexpected attachments or requests."),
            ("How can organizations prevent phishing attacks?", "Implement email filtering, DMARC/DKIM/SPF, security awareness training, multi-factor authentication, and phishing simulation programs to test and educate employees."),
            ("What should you do if you fall for a phishing attack?", "Immediately change passwords, disconnect affected devices, report to IT security, monitor accounts for suspicious activity, and preserve evidence for investigation.")
        ]
    elif 'breach' in title_lower or 'hack' in title_lower or 'attack' in title_lower:
        faqs = [
            ("How do data breaches typically occur?", "Common attack vectors include phishing, credential theft, unpatched vulnerabilities, misconfigured systems, insider threats, and supply chain compromises."),
            ("What should organizations do after a breach?", "Contain the incident, preserve evidence, assess the scope, notify affected parties, report to regulators if required, conduct root cause analysis, and implement improvements."),
            ("How can you check if your data was exposed?", "Use services like Have I Been Pwned, monitor for unusual account activity, check dark web monitoring services, and review breach notification letters from affected companies.")
        ]
    elif 'iso' in title_lower or 'compliance' in title_lower or 'soc' in title_lower:
        faqs = [
            ("How long does it take to achieve compliance?", "Timeline varies by framework and organization size. ISO 27001 typically takes 6-18 months, SOC 2 takes 3-12 months, depending on current security maturity and resources."),
            ("What are the main benefits of security compliance?", "Benefits include reduced risk, competitive advantage, customer trust, regulatory requirement fulfillment, improved security posture, and protection against legal liability."),
            ("Do you need external auditors for certification?", "Yes, certifications like ISO 27001 and SOC 2 require external auditors. ISO 27001 needs an accredited certification body, while SOC 2 requires a licensed CPA firm.")
        ]
    elif 'siem' in title_lower or 'detection' in title_lower or 'monitoring' in title_lower:
        faqs = [
            ("What is the difference between SIEM and SOAR?", "SIEM (Security Information and Event Management) collects and analyzes logs to detect threats. SOAR (Security Orchestration, Automation and Response) automates incident response workflows."),
            ("How do you reduce false positives in security monitoring?", "Tune detection rules, use threat intelligence correlation, implement behavioral baselines, leverage machine learning, and regularly review and adjust alert thresholds."),
            ("What logs should organizations collect for security?", "Critical sources include authentication logs, firewall logs, endpoint events, email gateway logs, DNS queries, cloud service logs, and application-specific security events.")
        ]
    else:
        # Generic security FAQs
        topic = title_clean.split(':')[0] if ':' in title_clean else title_clean
        faqs = [
            (f"What is {topic} and why is it important?", f"{topic} is a critical aspect of cybersecurity that helps organizations protect their assets, detect threats, and respond to incidents effectively."),
            (f"How can organizations implement {topic}?", f"Implementation involves assessing current capabilities, defining requirements, selecting appropriate tools, training staff, and establishing ongoing processes for continuous improvement."),
            (f"What are the best practices for {topic}?", f"Best practices include following industry frameworks, regular testing and validation, continuous monitoring, documentation, and keeping up with evolving threats and technologies.")
        ]
    
    return faqs

def create_faq_schema(faqs):
    """Generate FAQPage JSON-LD schema"""
    faq_items = []
    for q, a in faqs:
        # Escape quotes
        q = q.replace('"', '\\"')
        a = a.replace('"', '\\"')
        faq_items.append(f'''{{
        "@type": "Question",
        "name": "{q}",
        "acceptedAnswer": {{
          "@type": "Answer",
          "text": "{a}"
        }}
      }}''')
    
    items_str = ", ".join(faq_items)
    
    return f'''
    <!-- ========== STRUCTURED DATA - FAQPAGE ========== -->
    <script type="application/ld+json">
    {{
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [{items_str}]
    }}
    </script>
'''

def add_faq_to_file(filepath, page_type):
    """Add FAQ schema to a file if missing"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if has_faq_schema(content):
        return False, "Already has FAQ"
    
    title = get_page_title(content)
    if not title:
        return False, "No title found"
    
    # Skip index files
    if 'index.html' in str(filepath):
        return False, "Index page skipped"
    
    # Generate FAQs
    faqs = generate_faq_for_topic(title, page_type)
    faq_schema = create_faq_schema(faqs)
    
    # Find insertion point - before </head>
    if '</head>' in content:
        content = content.replace('</head>', faq_schema + '</head>')
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        
        return True, title[:50]
    
    return False, "No </head> found"

def main():
    base_path = Path('/Volumes/Data-Personal/Webpage/thehgtech')
    
    stats = {'guides': 0, 'articles': 0, 'skipped': 0}
    
    print("=" * 60)
    print("📋 Adding FAQ Schema to All Pages")
    print("=" * 60)
    
    # Process Guides
    print("\n📚 Processing Guides...")
    guides_dir = base_path / 'guides'
    for filepath in sorted(guides_dir.glob('*.html')):
        success, result = add_faq_to_file(filepath, 'guide')
        if success:
            stats['guides'] += 1
            print(f"  ✅ {filepath.name}")
        else:
            if 'Already' not in result and 'Index' not in result:
                stats['skipped'] += 1
    
    # Process Articles
    print("\n📰 Processing Articles...")
    articles_dir = base_path / 'articles'
    for filepath in sorted(articles_dir.glob('*.html')):
        success, result = add_faq_to_file(filepath, 'article')
        if success:
            stats['articles'] += 1
            print(f"  ✅ {filepath.name}")
        else:
            if 'Already' not in result:
                stats['skipped'] += 1
    
    # Summary
    print("\n" + "=" * 60)
    print("📊 SUMMARY")
    print("=" * 60)
    print(f"✅ Guides updated:   {stats['guides']}")
    print(f"✅ Articles updated: {stats['articles']}")
    print(f"⏭️  Skipped:          {stats['skipped']}")
    print("=" * 60)
    
    total = stats['guides'] + stats['articles']
    print(f"\n🎉 Total pages updated: {total}")

if __name__ == "__main__":
    main()
