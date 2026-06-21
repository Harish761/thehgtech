import os
import glob

related_html = """
            <!-- ========== RELATED ARTICLES ========== -->
            <div class="related-articles-section" style="margin-top: 3rem; padding-top: 2rem; border-top: 1px solid var(--glass-border);">
                <h3 style="color: var(--accent-cyan); margin-bottom: 1.5rem; font-size: 1.3rem;">Related Analysis</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
                    
                    <a href="/articles/anthropic-project-glasswing-2026.html" style="text-decoration: none;">
                        <div class="related-card" style="background: rgba(255,255,255,0.03); border: 1px solid var(--glass-border); border-radius: 8px; padding: 1rem; height: 100%; transition: all 0.3s ease;">
                            <div style="font-size: 0.75rem; color: var(--accent-cyan); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 0.5rem;">AI Security</div>
                            <h4 style="color: var(--text-primary); margin: 0 0 0.5rem; font-size: 1.1rem; line-height: 1.3;">Project Glasswing: Anthropic's Defensive AI</h4>
                            <p style="color: var(--text-secondary); font-size: 0.9rem; margin: 0; line-height: 1.4;">How autonomous agents are transforming incident response.</p>
                        </div>
                    </a>

                    <a href="/articles/axios-supply-chain-attack-2026.html" style="text-decoration: none;">
                        <div class="related-card" style="background: rgba(255,255,255,0.03); border: 1px solid var(--glass-border); border-radius: 8px; padding: 1rem; height: 100%; transition: all 0.3s ease;">
                            <div style="font-size: 0.75rem; color: #ff3d3d; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 0.5rem;">Supply Chain</div>
                            <h4 style="color: var(--text-primary); margin: 0 0 0.5rem; font-size: 1.1rem; line-height: 1.3;">Axios npm Package Compromise</h4>
                            <p style="color: var(--text-secondary); font-size: 0.9rem; margin: 0; line-height: 1.4;">Inside the 2026 supply chain attack affecting millions of builds.</p>
                        </div>
                    </a>

                    <a href="/articles/forticlient-ems-zero-day-cve-2026-35616.html" style="text-decoration: none;">
                        <div class="related-card" style="background: rgba(255,255,255,0.03); border: 1px solid var(--glass-border); border-radius: 8px; padding: 1rem; height: 100%; transition: all 0.3s ease;">
                            <div style="font-size: 0.75rem; color: #ff3d3d; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 0.5rem;">Zero-Day</div>
                            <h4 style="color: var(--text-primary); margin: 0 0 0.5rem; font-size: 1.1rem; line-height: 1.3;">FortiClient EMS Critical Vulnerability</h4>
                            <p style="color: var(--text-secondary); font-size: 0.9rem; margin: 0; line-height: 1.4;">CVE-2026-35616 analysis and immediate mitigation steps.</p>
                        </div>
                    </a>

                </div>
            </div>
"""

def add_related_articles(root_dir):
    article_files = glob.glob(os.path.join(root_dir, 'articles', '*.html'))
    
    for filepath in article_files:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        if 'Related Analysis' in content or 'related-articles-section' in content or 'Related Articles' in content:
            continue
            
        # Find </article> and insert before it
        if '</article>' in content:
            content = content.replace('</article>', related_html + '\n        </article>')
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Added related articles to {filepath}")

if __name__ == '__main__':
    add_related_articles('/Volumes/Data-Personal/Webpage/thehgtech')
