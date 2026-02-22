import re

with open('articles/anthropic-guardian-secops-crash-2026.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Replace <title>
html = re.sub(
    r'<title>.*?</title>', 
    r'<title>Anthropic\'s Claude Code Security Launch Triggers $10-15B Dip in Cybersecurity Stocks | TheHGTech</title>', 
    html
)

# Replace OG tags
html = re.sub(
    r'<meta property="og:title" content=".*?(?=")>',
    r'<meta property="og:title" content="Anthropic\'s Claude Code Security Launch Triggers $10-15B Dip in Cybersecurity Stocks - A Shift in Code Vulnerability Detection?">',
    html
)
html = re.sub(
    r'<meta property="og:description" content=".*?(?=")>',
    r'<meta property="og:description" content="Technical analysis of Anthropic\'s new Claude Code Security preview. We decode how its code vulnerability scanning capabilities sparked a sell-off in legacy cybersecurity stocks and what this means for the future of AppSec.">',
    html
)
html = re.sub(
    r'<meta property="og:url" content=".*?(?=")>',
    r'<meta property="og:url" content="https://thehgtech.com/articles/anthropic-claude-code-security-launch-2026.html">',
    html
)
html = re.sub(
    r'<link rel="canonical" href=".*?(?=")>',
    r'<link rel="canonical" href="https://thehgtech.com/articles/anthropic-claude-code-security-launch-2026.html">',
    html
)

# Extract everything up to the article-hero h1
h1_start = html.find('<h1 class="article-title">')
h1_end = html.find('</h1>', h1_start)

# Replace H1
html = html[:h1_start] + '<h1 class="article-title">Anthropic\'s Claude Code Security Launch Triggers $10-15B Dip in Cybersecurity Stocks – A Shift in Code Vulnerability Detection?' + html[h1_end:]

# Replace image URL
html = html.replace('anthropic-guardian-secops-crash-2026.png', 'anthropic-claude-code-security-launch-2026.png')

# Extract up to the start of <article>
article_start = html.find('<article>')
article_end = html.find('</article>', article_start)
if article_end == -1: 
    # Try the last article tag
    article_end = html.rfind('</article>')

body_content = """<article>

            <div class="executive-summary">
                <h3 style="margin-top:0; color: #fff; font-size: 1.5rem;"><i class="fas fa-file-alt"
                        style="color: var(--accent-cyan); margin-right: 0.5rem;"></i> Executive Summary</h3>
                <p>On February 20, 2026, Anthropic formally unveiled a limited research preview of their new AppSec agent, "Claude Code Security." Immediately following the announcement, several major pure-play cybersecurity stocks—including CrowdStrike, Cloudflare, Okta, and Zscaler—saw a collective $10-15 Billion valuation dip.</p>
                <p>Unlike autonomous SOC "guardian" agents that speculative rumors suggested would integrate directly with EDR and networking hardware, Claude Code Security is primarily an enhancement to Anthropic's Claude Code platform focused on scanning codebases (e.g., GitHub repos) for subtle logic flaws. In internal testing, Anthropic discovered over 500 vulnerabilities in heavily audited open-source code that evaded traditional static analysis.</p>
                <p>While the market's reaction reflects a broader "AI eats SaaS" narrative across the tech sector, this comprehensive deep dive breaks down the technical reality of Claude Code Security. We'll analyze its probabilistic vulnerability detection methodology, the actual economic impact on AppSec workflows, and how enterprise security teams can adapt to what experts call "pyramid compression"—a reduction in the need for junior code reviewers without removing the necessity of human governance.</p>
                
                <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 1rem;"><em>Note: This analysis is based on public announcements and market data as of February 22, 2026; capabilities and actual adoption milestones may evolve.</em></p>

                <div class="exec-grid">
                    <div class="exec-item">
                        <span class="exec-label">Subject Category</span>
                        <span class="exec-value" style="color: var(--accent-cyan);">AI Security & AppSec</span>
                    </div>
                    <div class="exec-item">
                        <span class="exec-label">Primary Impact</span>
                        <span class="exec-value">Code Vulnerability Detection</span>
                    </div>
                    <div class="exec-item">
                        <span class="exec-label">Core Tech</span>
                        <span class="exec-value">Probabilistic Code Scanning (LLM)</span>
                    </div>
                    <div class="exec-item">
                        <span class="exec-label">TLP Status</span>
                        <span class="exec-value" style="color: #00ff88;">TLP:CLEAR</span>
                    </div>
                </div>
            </div>

            <h2>1. What is Claude Code Security? (Reality vs. Rumor)</h2>
            <p>Prior to the official launch, rumors swirled of a fully autonomous SOC agent that would seamlessly ingest SIEM logs and automatically execute complex threat remediation across endpoints and AWS environments. <strong>The reality is much more scoped, but no less significant for its actual target market: Application Security (AppSec) and Developer Security Operations (DevSecOps).</strong></p>
            <p>Claude Code Security is an AI-assisted capability designed to perform high-depth audits of vast, multi-file codebases. Legacy Static Application Security Testing (SAST) tools rely primarily on signature matching and regex patterns, which leads to massive false-positive fatigue and often fails to catch structural logic flaws that span across multiple decoupled files.</p>
            
            <div class="warning-box">
                <h3><i class="fas fa-robot"></i> Probabilistic Detection vs. Static Rules</h3>
                <p>Anthropic's approach moves code vulnerability scanning from deterministic execution to probabilistic identification. Instead of just flagging a known insecure regex pattern, Claude Code Security can detect cross-file contextual flaws, such as improper authentication checks hidden behind complex routing middleware.</p>
                <p>It acts as a tireless code reviewer, providing human developers with a prioritized list of deeply buried vulnerabilities alongside suggested patches for human review. It is not designed to autonomously rewrite Cloud IAM policies in production.</p>
            </div>

            <h2>2. The Market Reaction: A $10-15 Billion Shift</h2>
            <p>Despite the tool's targeted scope being largely confined to AppSec, the market reacted with an immediate and sharp sell-off across the broader cybersecurity sector. Overall, an estimated $10-15 Billion in market value was erased in a single session.</p>

            <table style="width: 100%; text-align: left; border-collapse: collapse; margin: 2rem 0; font-size: 1.1rem; color: #cbd5e1; border: 1px solid var(--border);">
                <thead>
                    <tr style="background: rgba(255,255,255,0.05); border-bottom: 2px solid var(--accent-cyan);">
                        <th style="padding: 1rem;">Company</th>
                        <th style="padding: 1rem;">% Drop</th>
                        <th style="padding: 1rem;">Est. Value Lost</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td style="padding: 1rem;">CrowdStrike</td>
                        <td style="padding: 1rem; color: var(--accent-red);">6-8%</td>
                        <td style="padding: 1rem;">~$5-6B</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td style="padding: 1rem;">Okta</td>
                        <td style="padding: 1rem; color: var(--accent-red);">9%</td>
                        <td style="padding: 1rem;">~$1.4B</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td style="padding: 1rem;">Cloudflare</td>
                        <td style="padding: 1rem; color: var(--accent-red);">6-8%</td>
                        <td style="padding: 1rem;">~$2-2.5B</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td style="padding: 1rem;">Zscaler</td>
                        <td style="padding: 1rem; color: var(--accent-red);">5-6%</td>
                        <td style="padding: 1rem;">~$1.5-1.8B</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td style="padding: 1rem;">SailPoint</td>
                        <td style="padding: 1rem; color: var(--accent-red);">9%</td>
                        <td style="padding: 1rem;">~Private/Tracking Estimate</td>
                    </tr>
                    <tr style="background: rgba(255, 61, 61, 0.05); font-weight: bold; padding: 1rem;">
                        <td colspan="2" style="padding: 1rem; border-top: 2px solid var(--border);">Total Est.</td>
                        <td style="padding: 1rem; border-top: 2px solid var(--border); color: var(--accent-red);">-$10-15B</td>
                    </tr>
                </tbody>
            </table>

            <p>The Global X Cybersecurity ETF fell ~5% to its lowest point since late 2023. This drop reflects less of an immediate operational threat to MDR or endpoint providers and more of the broader "AI eats SaaS" narrative spilling over into the security sector.</p>
            <p>Investors appear to be pricing in the idea that if AI can vastly compress the AppSec code-review pipeline today, it may eventually compress the SIEM log triage pipeline tomorrow, eroding the labor-intensive services margins of large security firms.</p>

            <h2>3. How Claude Code Security Investigates Flaws</h2>
            <p>Claude Code Security is built to tackle the hardest problems in code auditing. It doesn't just scan line-by-line; it builds semantic models of how data flows through an application.</p>
            
            <div class="technical-box">
                <h3><i class="fas fa-code"></i> AI Vulnerability Identification Process</h3>
                <p>Here is an example of the probabilistic thought loop the model executes to identify subtle flaws:</p>
                <div class="code-container">
                    <pre><code class="language-json">[
  {
    "thought": "I observe a data object being passed from the frontend controller to the backend `auth.js` middleware.",
    "action": "analyze_data_flow",
    "payload": { "target": "req.user.role" }
  },
  {
    "thought": "The `auth.js` logic validates the generic JWT but does not enforce tenant-level boundary checks on the database query invoked in `dashboard.js`.",
    "action": "cross_file_reference_check",
    "payload": { "files": ["auth.js", "dashboard.js"] }
  },
  {
    "thought": "This structural flaw enables a potential Broken Access Control / IDOR vulnerability if a user swaps the tenant\_id parameter in the POST request.",
    "action": "generate_patch_proposal",
    "payload": { 
        "recommendation": "Insert a tenant_id validation check before executing the SQL abstraction in dashboard.js",
        "severity": "HIGH",
        "human_review_required": true
    }
  }
]</code></pre>
                </div>
            </div>

            <h2>4. What This Means for Security Teams</h2>
            <p>The introduction of Claude Code Security signals a potential shift toward AI-assisted roles, but it does not equate to the death of human security professionals.</p>
            
            <div class="success-box">
                <strong><i class="fas fa-shield-alt"></i> ADOPTION STRATEGY: HOW TO PREPARE</strong>
                <ul>
                    <li style="margin-bottom: 0.75rem;"><strong>Expect Pyramid Compression in AppSec:</strong> The need for dozens of junior developers conducting basic manual peer reviews for security vulnerabilities will likely shrink. However, the need for Senior L3 Application Security Engineers to review and approve complex, AI-generated patches will drastically increase.</li>
                    <li style="margin-bottom: 0.75rem;"><strong>Focus on Process + People:</strong> Tooling is rarely the ultimate bottleneck in large enterprises. As industry veterans note, the hard part isn't finding issues—it's establishing who owns the asset, who is accountable to fix it, and how to avoid disrupting developers.</li>
                    <li style="margin-bottom: 0.75rem;"><strong>Upskill for AI Governance:</strong> "AI Red Teaming" is going to be huge. As these probabilistic tools enter production, teams will face dual-use risks, where attackers use the exact same LLMs to discover zero-days faster than defenders can patch them. Learning to secure LLM pipelines and validate AI-generated code will become a core cyber competency.</li>
                </ul>
            </div>

            <h2>5. Conclusion: A Signal, Not an Execution</h2>
            <p>The stock plunge may have been a visceral reaction, but it acts as a very loud signal: generative AI is moving from novelty text summarization into deep, programmatic technical workflows.</p>
            <p>While exciting, it is still early days. Claude Code Security is in a limited research preview, and real-world adoption at an enterprise scale remains to be proven. Security scanning is becoming heavily commoditized, but the operational realities of enterprise architecture—tribal knowledge, strict compliance environments, and human governance—ensure that while the tools are changing, the need for security leaders and engineers is more critical than ever.</p>

        </article>"""

html = html[:article_start] + body_content + html[article_end+10:]

with open('articles/anthropic-claude-code-security-launch-2026.html', 'w', encoding='utf-8') as f:
    f.write(html)
