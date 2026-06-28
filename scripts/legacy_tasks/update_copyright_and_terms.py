import os

TERMS_CONTENT = """<div id="termsContent">
                <h2>Terms of Service</h2>
                <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 2rem;">Last Updated: May 2026</p>

                <h3>1. Intellectual Property and Copyright</h3>
                <p>All content on TheHGTech, including but not limited to articles, guides, research, text, graphics, logos, and UI design, is the exclusive property of TheHGTech and is protected by international copyright laws.</p>
                <ul style="margin-left: 1.5rem; margin-bottom: 1.5rem;">
                    <li><strong>No Reproduction:</strong> You may not copy, reproduce, scrape, republish, or distribute any content from this site without explicit written permission.</li>
                    <li><strong>Fair Use:</strong> You may quote short excerpts (up to 50 words) provided that you give clear attribution and a direct hyperlink back to the original page on TheHGTech.</li>
                    <li><strong>Automated Access:</strong> Web scraping, data mining, or using automated systems to extract data from TheHGTech for commercial or public use is strictly prohibited.</li>
                </ul>

                <h3>2. DMCA & Copyright Infringement Policy</h3>
                <p>TheHGTech respects the intellectual property rights of others. If you believe that your work has been copied in a way that constitutes copyright infringement, please provide us with the following information:</p>
                <ul style="margin-left: 1.5rem; margin-bottom: 1.5rem;">
                    <li>A description of the copyrighted work that you claim has been infringed.</li>
                    <li>The exact URL where the alleged infringing material is located.</li>
                    <li>Your contact information (name, email address).</li>
                    <li>A statement that you have a good faith belief that the use is not authorized by the copyright owner.</li>
                </ul>
                <p>Please send all DMCA notices to <a href="mailto:harish@thehgtech.com" style="color: var(--accent);">harish@thehgtech.com</a>.</p>

                <h3>3. Disclaimer of Warranties</h3>
                <p>The information provided on TheHGTech, including cybersecurity guides, threat intelligence, and OSINT data, is for educational and defensive purposes only. We do not warrant the completeness, reliability, or accuracy of this information.</p>

                <h3>4. Changes to Terms</h3>
                <p>We reserve the right to modify these Terms of Service at any time. Your continued use of the site following any changes signifies your acceptance of the revised terms.</p>
            </div>"""

def process_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        changed = False
        
        # 1. Update copyright footer
        old_copyright1 = "&copy; 2025 TheHGTech. All rights reserved."
        new_copyright1 = "&copy; <script>document.write(new Date().getFullYear())</script> TheHGTech. All rights reserved."
        
        old_copyright2 = "© 2025 TheHGTech. All rights reserved."
        new_copyright2 = "&copy; <script>document.write(new Date().getFullYear())</script> TheHGTech. All rights reserved."

        if old_copyright1 in content:
            content = content.replace(old_copyright1, new_copyright1)
            changed = True
        if old_copyright2 in content:
            content = content.replace(old_copyright2, new_copyright2)
            changed = True
            
        # 2. Inject Terms of Service
        old_terms_empty = '<div id="termsContent"></div>'
        if old_terms_empty in content:
            content = content.replace(old_terms_empty, TERMS_CONTENT)
            changed = True

        if changed:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Updated: {filepath}")

    except Exception as e:
        print(f"Error processing {filepath}: {e}")

if __name__ == "__main__":
    html_files = []
    for root, dirs, files in os.walk('.'):
        if 'node_modules' in dirs:
            dirs.remove('node_modules')
        if '.git' in dirs:
            dirs.remove('.git')
        if 'mobile_backup' in dirs:
            dirs.remove('mobile_backup')
            
        for file in files:
            if file.endswith('.html'):
                html_files.append(os.path.join(root, file))
                
    print(f"Found {len(html_files)} HTML files. Processing...")
    for filepath in html_files:
        process_file(filepath)
    print("Done!")
