// TheHGTech Website Content
// Update this file to change website content

const websiteContent = {
    "cyberShorts": [
        {
            "date": "Jun 07 2026",
            "headline": "Microsoft Forks Windows Terminal—Isolated AI Built Directly Into Console",
            "title": "Microsoft Releases Open-Source Intelligent Terminal Fork with Native AI Integration",
            "content": "Microsoft has released an open-source fork of Windows Terminal named Intelligent Terminal, introducing native artificial intelligence capabilities directly into the command-line interface. The tool allows developers and system administrators to interact with an AI assistant without disrupting their active terminal sessions. By running the AI in an isolated side-panel or background process, the terminal prevents AI-generated commands from executing automatically or interfering with standard workflows. This release reflects a growing industry trend of embedding large language models into developer tools to accelerate troubleshooting and command generation. Users can download the open-source repository from GitHub to test the experimental features and integrate their own API keys.",
            "source": "BleepingComputer",
            "sourceUrl": "https://www.bleepingcomputer.com/news/microsoft/hands-on-with-intelligent-terminal-an-ai-powered-windows-terminal/",
            "relatedResources": []
        },
        {
            "date": "Jun 06 2026",
            "headline": "AI Agent Finds 21 FFmpeg Zero-Days—Chrome Patches Record 429 Bugs",
            "title": "Autonomous AI Agent Discovers 21 FFmpeg Vulnerabilities as Chrome Patches 429 Bugs",
            "content": "An autonomous artificial intelligence agent has discovered 21 previously unknown zero-day vulnerabilities within the FFmpeg multimedia framework. FFmpeg is a widely used open-source library integrated into numerous video processing applications, web browsers, and media players, making the potential impact of these flaws highly widespread. Concurrently, Google has released Chrome version 149, which addresses a record-breaking 429 security bugs, highlighting the escalating scale of vulnerability detection. The dual milestones demonstrate how automated tools and AI are rapidly accelerating both the discovery and remediation of software vulnerabilities. Security teams should immediately inventory their environments for FFmpeg dependencies and update Google Chrome installations to version 149 to mitigate potential exploitation risks.",
            "source": "The Hacker News",
            "sourceUrl": "https://thehackernews.com/2026/06/ai-agent-uncovers-21-zero-days-in.html",
            "relatedResources": []
        },
        {
            "date": "Jun 06 2026",
            "headline": "Miasma Worm Infects 73 Microsoft GitHub Repositories—Supply Chain Alert",
            "title": "Self-Replicating Miasma Worm Compromises 73 Microsoft GitHub Repositories",
            "content": "A self-replicating supply chain attack known as the Miasma worm has compromised 73 official Microsoft GitHub repositories. The security incident affected repositories across four distinct Microsoft GitHub organizations, including Azure, Azure-Samples, Microsoft, and MicrosoftDocs. Attackers utilized automated scripts to inject malicious code into these repositories, aiming to compromise downstream developers and systems that trust Microsoft's open-source code. This campaign highlights the persistent threat of automated supply chain attacks targeting trusted developer ecosystems to maximize distribution. Organizations utilizing code from these specific Microsoft repositories should immediately audit their codebases, verify commit signatures, and monitor for unauthorized changes.",
            "source": "The Hacker News",
            "sourceUrl": "https://thehackernews.com/2026/06/miasma-worm-hits-73-microsoft-github.html",
            "relatedResources": []
        },
        {
            "date": "Jun 06 2026",
            "headline": "Zero-Day Alert: Cisco SD-WAN Flaw CVE-2026-20245 Under Active Attack",
            "title": "Unpatched Cisco Catalyst SD-WAN Manager Vulnerability Actively Exploited in the Wild",
            "content": "Cisco has warned customers that a high-severity security vulnerability in its Catalyst SD-WAN Manager is being actively exploited in the wild. Tracked as CVE-2026-20245, the flaw carries a Common Vulnerability Scoring System score of 7.8 out of 10.0. The vulnerability affects both on-premises deployments and Cisco SD-WAN Cloud instances, potentially allowing unauthorized access or administrative privilege escalation. Because Cisco has not yet released a patch to resolve this security flaw, affected organizations face immediate exposure to external threat actors. Network administrators must implement Cisco's recommended temporary workarounds, restrict access to management interfaces, and closely monitor system logs for indicators of compromise.",
            "source": "The Hacker News",
            "sourceUrl": "https://thehackernews.com/2026/06/cisco-catalyst-sd-wan-manager-cve-2026.html",
            "relatedResources": []
        },
        {
            "date": "Jun 06 2026",
            "headline": "Everest Forms Pro Flaw Exploited—WordPress Sites Face Complete Takeover",
            "title": "Critical CVE-2026-3300 Vulnerability in Everest Forms Pro Actively Exploited",
            "content": "Threat actors are actively exploiting a critical security vulnerability in the Everest Forms Pro plugin for WordPress, allowing them to gain complete administrative control over affected websites. Tracked as CVE-2026-3300, the flaw stems from an input validation issue that enables remote attackers to execute arbitrary code without authentication. The vulnerability impacts all versions of Everest Forms Pro prior to version 3.0.1, putting thousands of business websites at immediate risk of data theft and defacement. This campaign aligns with a broader trend of attackers targeting popular WordPress plugins to establish persistent access and deploy malicious payloads. Administrators using Everest Forms Pro must immediately update to version 3.0.1 or later to mitigate the threat and review access logs for unauthorized administrative accounts.",
            "source": "BleepingComputer",
            "sourceUrl": "https://www.bleepingcomputer.com/news/security/critical-everest-forms-pro-flaw-exploited-to-take-over-wordpress-sites/",
            "relatedResources": []
        }
    ],
    "aiShorts": [
        {
            "date": "Jun 06 2026",
            "headline": "OpenAI Launches Lockdown Mode—Mitigating ChatGPT Prompt Injection Risks",
            "title": "OpenAI Introduces Lockdown Mode to Protect Sensitive Enterprise Data From Prompt Injection",
            "content": "OpenAI has introduced Lockdown Mode for ChatGPT, a new security feature designed to restrict the exposure of sensitive data during prompt injection attacks. Prompt injection occurs when malicious inputs manipulate a large language model to bypass safety filters or leak system instructions and user data. While OpenAI acknowledges that Lockdown Mode does not entirely eliminate the risk of sophisticated prompt injections, it significantly reduces the likelihood of unauthorized data exfiltration. Enterprise administrators and developers should enable this mode within their API configurations and workspace settings to establish a stronger security baseline. This release highlights the industry's ongoing struggle to secure LLM-based applications against indirect prompt injection vectors as enterprise adoption scales.",
            "source": "AI News & Artificial Intelligence | TechCrunch",
            "sourceUrl": "https://techcrunch.com/2026/06/06/openai-unveils-lockdown-mode-to-protect-sensitive-data-from-prompt-injection-attacks/",
            "relatedResources": []
        },
        {
            "date": "Jun 03 2026",
            "headline": "OpenAI Outlines Global Policy Agenda—Focusing on Safety and Workforce Transition",
            "title": "OpenAI Releases Comprehensive Public Policy Agenda Targeting AI Safety and Global Standards",
            "content": "OpenAI has published its official public policy agenda, establishing a framework to guide global AI governance, safety protocols, and societal impact. The agenda focuses on four core pillars: robust safety standards, youth protection measures, workforce transition support, and the harmonization of international AI regulations. By outlining these priorities, OpenAI aims to collaborate with policymakers to address the economic disruptions caused by rapid automation and generative AI deployment. Security leaders and compliance officers should review these guidelines to align their internal AI governance frameworks with emerging global regulatory trends. This proactive policy push comes as governments worldwide accelerate efforts to draft binding legislation for frontier AI models.",
            "source": "OpenAI News",
            "sourceUrl": "https://openai.com/index/public-policy-agenda",
            "relatedResources": []
        },
        {
            "date": "Jun 06 2026",
            "headline": "Hugging Face Coordinates 5 Small Models to Run Complex Financial Workflows",
            "title": "Hugging Face Demonstrates Multi-Model Collaborative Framework Using Small Language Models",
            "content": "Hugging Face has detailed a collaborative experiment demonstrating how five distinct small language models can work together to execute complex agentic workflows. By partitioning tasks among specialized models rather than relying on a single massive LLM, the project successfully simulated a dynamic financial drama scenario. This multi-model approach highlights the growing viability of small language models, which offer lower latency, reduced operational costs, and easier on-premises deployment. Developers and system architects can leverage this framework to build highly specialized, cost-effective AI agents for enterprise applications without the overhead of frontier models. The project underscores a broader industry shift toward decentralized, modular AI architectures that prioritize efficiency over sheer parameter size.",
            "source": "Hugging Face - Blog",
            "sourceUrl": "https://huggingface.co/blog/build-small-hackathon/thousand-token-wood-sim-v2",
            "relatedResources": []
        },
        {
            "date": "Jun 06 2026",
            "headline": "Apple WWDC 2026—Siri Revamp and Apple Intelligence Upgrades Expected",
            "title": "Apple Prepares Major Siri Overhaul and Apple Intelligence Updates for WWDC 2026",
            "content": "Apple is set to unveil a major revamp of its Siri virtual assistant alongside significant updates to Apple Intelligence at the upcoming WWDC 2026 conference. The upgrades are expected to integrate advanced on-device generative AI capabilities, allowing Siri to perform more complex multi-step actions and understand context more deeply. Security and privacy professionals will be closely monitoring how Apple maintains its signature on-device processing and Private Cloud Compute standards during this rollout. Developers should prepare for new APIs and SDK updates that will allow third-party applications to hook into these enhanced Apple Intelligence features. This event represents Apple's continued push to compete directly with Google and Microsoft in the consumer-facing generative AI ecosystem.",
            "source": "AI News & Artificial Intelligence | TechCrunch",
            "sourceUrl": "https://techcrunch.com/2026/06/06/what-to-expect-from-wwdc-2026-siris-highly-anticipated-revamp-and-apple-intelligence-updates/",
            "relatedResources": []
        },
        {
            "date": "Jun 06 2026",
            "headline": "Sriram Krishnan Exits White House—Launches New AI Policy Institution",
            "title": "White House AI Advisor Sriram Krishnan Steps Down to Launch Policy Think Tank",
            "content": "Sriram Krishnan is leaving his position as a key White House AI advisor to establish a new external institution focused on shaping national AI policy. During his tenure, Krishnan played a central role in advising the Trump administration on regulatory frameworks, national security implications, and technological competitiveness. The newly planned institution aims to provide independent research and policy recommendations to maintain U.S. leadership in artificial intelligence. Tech executives and policy analysts should monitor this transition, as the new organization is expected to heavily influence future federal AI directives and funding priorities. This move signals a shifting landscape in Washington as private sector experts transition into influential external advocacy and advisory roles.",
            "source": "AI News & Artificial Intelligence | TechCrunch",
            "sourceUrl": "https://techcrunch.com/2026/06/06/sriram-krishnan-is-leaving-his-role-as-white-house-ai-advisor/",
            "relatedResources": []
        }
    ],
    "articles": {},
    "articleCards": [
        {
            "id": "instagram-e2ee-rollback-2026",
            "title": "Meta Deprecates Optional E2EE in Instagram DMs by May 2026: Low Adoption Cited, Privacy Concerns Remain",
            "summary": "Meta’s move to deprecate optional E2EE on Instagram is a significant policy shift. This analysis examines the technical rollback, regulatory factors, and the privacy trade-offs involved.",
            "description": "An analysis of Meta’s decision to remove opt-in E2EE from Instagram Direct Messages, exploring technical architecture shifts and the regulatory landscape.",
            "url": "/articles/instagram-e2ee-rollback-2026.html",
            "date": "March 23, 2026",
            "readTime": "20 min read",
            "category": "Architecture & Privacy",
            "tags": [
                "E2EE",
                "Meta",
                "Instagram",
                "Signal Protocol",
                "Cyber Law",
                "Privacy Rollback"
            ],
            "featured": true,
            "badge": "PRIVACY ROLLBACK",
            "severity": "high"
        },
        {
            "id": "7zip-critical-vulnerability",
            "title": "Critical 7-Zip Vulnerability: What You Need to Know Right Now",
            "summary": "CVE-2025-11001 is being actively exploited in the wild. Learn what this critical RCE vulnerability means for your organization and how to protect yourself immediately.",
            "description": "Active exploitation of a critical remote code execution vulnerability in 7-Zip. NHS England issued urgent advisory. Immediate action required.",
            "url": "/articles/7zip-critical-vulnerability.html",
            "date": "December 9, 2025",
            "readTime": "8 min read",
            "category": "Vulnerability Management",
            "tags": [
                "CVE-2025-11001",
                "7-Zip",
                "RCE",
                "Active Exploitation",
                "Patch Management"
            ],
            "featured": true,
            "severity": "critical"
        }
    ],
    "featureInsights": [
        {
            "icon": "🧩",
            "title": "Third-Party Risk 2.0",
            "description": "Vendor ecosystems are the new cyber front line. In 2026, most breaches will originate from partner infrastructure and cloud intermediaries. Third-Party Risk 2.0 examines how dependency, compliance fatigue, and opaque integrations create systemic exposure — and how governance must evolve to secure what organizations no longer own."
        },
        {
            "icon": "⚙️",
            "title": "Future-Proofing Infrastructure",
            "description": "Datacentres built for AI are redefining scale and sustainability. Future-Proofing Infrastructure explores next-generation compute fabrics, liquid-cooling efficiency, and AI-native orchestration. As workloads outgrow human administration, resilience and automation become the backbone of global continuity."
        },
        {
            "icon": "🧠",
            "title": "Zero Trust Goes Live",
            "description": "Zero Trust has moved from principle to enforcement. Zero Trust Goes Live dissects how continuous identity verification, contextual access, and dynamic segmentation reshape enterprise security in 2026 — where every connection is authenticated, authorised, and observable in real time."
        },
        {
            "icon": "🤖",
            "title": "Agentic AI Arrives",
            "description": "AI is no longer reactive — it’s autonomous. Agentic AI Arrives traces the emergence of multi-agent systems that plan, negotiate, and self-execute goals. As digital agents gain intent, enterprises face a new question: how to govern cognition that acts before it asks."
        },
        {
            "icon": "🧬",
            "title": "Composite Intelligence",
            "description": "The next leap in AI is convergence. Composite Intelligence unpacks how predictive, prescriptive, and generative models fuse into adaptive cognitive frameworks. This synthesis transforms analytics from hindsight to foresight — creating systems that think in context, not in isolation."
        },
        {
            "icon": "🛡",
            "title": "AI + Cybersecurity Merge",
            "description": "When both attackers and defenders use AI, speed becomes survival. AI + Cybersecurity Merge examines the rise of machine-led intrusion and automated defense — from self-learning malware to autonomous SOCs — marking the dawn of algorithmic warfare across digital infrastructure."
        }
    ],
    "modals": {
        "whatsNew": "<h2>What's New at TheHGTech</h2><p><em>Latest updates and improvements to your cybersecurity intelligence hub</em></p><h3>November 2025 - Recent Updates</h3><ul><li><strong>CVE Dashboard (Nov 02, 2025)</strong><br>Real-time tracking of critical vulnerabilities from official sources (CISA KEV). View the latest CVEs from the past 7 days with severity scores, affected vendors, and direct links to official sources.</li><li><strong>Enhanced Content Delivery (Nov 01, 2025)</strong><br>Improved twice-daily automated content updates at 6 AM and 6 PM IST, ensuring you always have the latest cybersecurity and technology news.</li><li><strong>Security Improvements (Oct 31, 2025)</strong><br>Implemented additional XSS protection and HTML sanitization across all content rendering. Enhanced security headers and input validation for safer browsing.</li><li><strong>Source Attribution (Oct 30, 2025)</strong><br>All content now includes clear source links for authenticity and transparency. Click through to verify information from original publishers.</li></ul><h3>October 2025 - Platform Enhancements</h3><ul><li><strong>Quick Insights System (Oct 28, 2025)</strong><br>Introduced Cybersecurity and AI Shorts for rapid information consumption. Navigate through curated insights with improved source tracking.</li><li><strong>Archives Feature (Oct 25, 2025)</strong><br>Access to archived articles with improved search and categorization. Browse historical content by topic and date.</li><li><strong>Performance Optimization (Oct 22, 2025)</strong><br>Reduced page load times by 40% through optimized asset delivery and code splitting. Improved mobile responsiveness across all devices.</li><li><strong>Theme System Update (Oct 20, 2025)</strong><br>Enhanced light/dark mode toggle with better contrast ratios and accessibility features. Theme preference now persists across sessions.</li></ul><h3>Security & Privacy</h3><ul><li>Zero tracking - no cookies, no analytics, no data collection</li><li>All content served over HTTPS with strict CSP headers</li><li>External links open safely with proper security attributes</li><li>Regular security audits and vulnerability scanning</li></ul><h3>Coming Soon</h3><ul><li>Advanced search and filtering capabilities</li><li>Customizable news feed preferences</li><li>Export and sharing features for key insights</li><li>Mobile app for iOS and Android</li></ul><p><em>We're constantly improving to bring you the best cybersecurity and technology intelligence. Have suggestions? Contact us through our official channels.</em></p>",
        "about": "<div style='padding: 0.5rem;'><div style='text-align: center; margin-bottom: 2.5rem;'><h2 style='font-size: 2.5rem; font-weight: 800; margin-bottom: 1rem; background: linear-gradient(135deg, #FF3D3D, #00D9FF); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;'>About TheHGTech</h2><p style='font-size: 1.15rem; color: var(--text-secondary); line-height: 1.7; max-width: 700px; margin: 0 auto;'>Your trusted source for cutting-edge insights at the intersection of <strong style='color: #FF3D3D;'>cybersecurity</strong> and <strong style='color: #00D9FF;'>artificial intelligence</strong>.</p></div><div style='display: flex; justify-content: center; gap: 2rem; flex-wrap: wrap; margin-bottom: 2.5rem;'><div style='text-align: center; padding: 1.5rem 2rem; background: rgba(255, 61, 61, 0.1); border-radius: 12px; border: 1px solid rgba(255, 61, 61, 0.2);'><span style='font-size: 2.5rem; font-weight: 800; color: #FF3D3D; display: block;'>52K+</span><span style='font-size: 0.9rem; color: var(--text-secondary);'>Active IOCs</span></div><div style='text-align: center; padding: 1.5rem 2rem; background: rgba(0, 217, 255, 0.1); border-radius: 12px; border: 1px solid rgba(0, 217, 255, 0.2);'><span style='font-size: 2.5rem; font-weight: 800; color: #00D9FF; display: block;'>9</span><span style='font-size: 0.9rem; color: var(--text-secondary);'>Threat Vendors</span></div><div style='text-align: center; padding: 1.5rem 2rem; background: rgba(59, 130, 246, 0.1); border-radius: 12px; border: 1px solid rgba(59, 130, 246, 0.2);'><span style='font-size: 2.5rem; font-weight: 800; color: #3B82F6; display: block;'>40+</span><span style='font-size: 0.9rem; color: var(--text-secondary);'>Security Guides</span></div></div><div style='background: linear-gradient(135deg, rgba(255, 61, 61, 0.05), rgba(0, 217, 255, 0.05)); border: 1px solid rgba(255, 61, 61, 0.2); border-radius: 16px; padding: 2.5rem; margin-bottom: 2.5rem;'><h3 style='color: #FF3D3D; font-size: 1.6rem; margin-bottom: 1.25rem; font-weight: 700;'>Our Mission</h3><p style='color: var(--text-secondary); line-height: 1.9; font-size: 1.1rem;'>We empower security professionals and AI enthusiasts with <strong style='color: var(--text-primary);'>real-time, data-driven intelligence</strong>. In an era of rapid technological shift, we provide the clarity needed to navigate emerging threats and innovations — <strong style='color: var(--text-primary);'>100% free, no login required</strong>.</p></div><div style='display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.5rem; margin-bottom: 2.5rem;'><div style='background: rgba(255, 61, 61, 0.05); border-left: 4px solid #FF3D3D; border-radius: 8px; padding: 1.75rem;'><h4 style='color: #FF3D3D; font-size: 1.2rem; margin-bottom: 0.75rem; font-weight: 700;'><i class='fas fa-shield-alt' style='margin-right: 0.5rem;'></i>Threat Intelligence</h4><p style='color: var(--text-secondary); font-size: 0.95rem; line-height: 1.7;'>52,000+ live IOCs from 9 trusted vendors (OpenPhish, URLhaus, ThreatFox, MalwareBazaar, CINS Army & more). Updated every 4 hours.</p></div><div style='background: rgba(59, 130, 246, 0.05); border-left: 4px solid #3B82F6; border-radius: 8px; padding: 1.75rem;'><h4 style='color: #3B82F6; font-size: 1.2rem; margin-bottom: 0.75rem; font-weight: 700;'><i class='fas fa-robot' style='margin-right: 0.5rem;'></i>AI Security Tracking</h4><p style='color: var(--text-secondary); font-size: 0.95rem; line-height: 1.7;'>MITRE ATLAS AI attack techniques, AI Incident Database monitoring, OWASP LLM Top 10 vulnerabilities.</p></div><div style='background: rgba(16, 185, 129, 0.05); border-left: 4px solid #10B981; border-radius: 8px; padding: 1.75rem;'><h4 style='color: #10B981; font-size: 1.2rem; margin-bottom: 0.75rem; font-weight: 700;'><i class='fas fa-shield-halved' style='margin-right: 0.5rem;'></i>GRC Assessment</h4><p style='color: var(--text-secondary); font-size: 0.95rem; line-height: 1.7;'>Free, offline-first ISO 27001 readiness engine for deterministic gap analysis.</p></div><div style='background: rgba(255, 107, 53, 0.05); border-left: 4px solid #FF6B35; border-radius: 8px; padding: 1.75rem;'><h4 style='color: #FF6B35; font-size: 1.2rem; margin-bottom: 0.75rem; font-weight: 700;'><i class='fas fa-cogs' style='margin-right: 0.5rem;'></i>Security Workflows</h4><p style='color: var(--text-secondary); font-size: 0.95rem; line-height: 1.7;'>Ready-to-use n8n automation templates for threat hunting and incident response.</p></div><div style='background: rgba(0, 217, 255, 0.05); border-left: 4px solid #00D9FF; border-radius: 8px; padding: 1.75rem;'><h4 style='color: #00D9FF; font-size: 1.2rem; margin-bottom: 0.75rem; font-weight: 700;'><i class='fas fa-lock' style='margin-right: 0.5rem;'></i>Ransomware Tracker</h4><p style='color: var(--text-secondary); font-size: 0.95rem; line-height: 1.7;'>Live monitoring of active ransomware gang activity with recent victims, attack patterns, and group profiles.</p></div><div style='background: rgba(255, 61, 61, 0.05); border-left: 4px solid #FF3D3D; border-radius: 8px; padding: 1.75rem;'><h4 style='color: #FF3D3D; font-size: 1.2rem; margin-bottom: 0.75rem; font-weight: 700;'><i class='fas fa-book' style='margin-right: 0.5rem;'></i>Security Guides</h4><p style='color: var(--text-secondary); font-size: 0.95rem; line-height: 1.7;'>40+ in-depth guides including Ransomware Response, Zero Trust, SIEM Analysis, Threat Hunting, and Cloud Security.</p></div><div style='background: rgba(0, 217, 255, 0.05); border-left: 4px solid #00D9FF; border-radius: 8px; padding: 1.75rem;'><h4 style='color: #00D9FF; font-size: 1.2rem; margin-bottom: 0.75rem; font-weight: 700;'><i class='fas fa-balance-scale' style='margin-right: 0.5rem;'></i>Tool Comparisons</h4><p style='color: var(--text-secondary); font-size: 0.95rem; line-height: 1.7;'>Unbiased head-to-head comparisons of security tools — CrowdStrike vs Defender, SIEM platforms, and more. Zero affiliate links.</p></div><div style='background: rgba(255, 61, 61, 0.05); border-left: 4px solid #FF3D3D; border-radius: 8px; padding: 1.75rem;'><h4 style='color: #FF3D3D; font-size: 1.2rem; margin-bottom: 0.75rem; font-weight: 700;'><i class='fas fa-newspaper' style='margin-right: 0.5rem;'></i>Threat News</h4><p style='color: var(--text-secondary); font-size: 0.95rem; line-height: 1.7;'>Breaking cybersecurity news with technical breakdowns, not just headlines. Actionable insights for defenders.</p></div></div><div style='background: linear-gradient(135deg, rgba(255, 61, 61, 0.08), rgba(0, 217, 255, 0.08)); border: 1px solid rgba(255, 61, 61, 0.25); border-radius: 16px; padding: 2.5rem; text-align: center; margin-bottom: 2rem;'><h3 style='color: var(--text-primary); font-size: 1.6rem; margin-bottom: 1.25rem; font-weight: 700;'><i class='fas fa-cogs' style='margin-right: 0.5rem;'></i>Powered by Automation</h3><p style='color: var(--text-secondary); margin-bottom: 1.75rem; line-height: 1.8; font-size: 1.05rem; max-width: 650px; margin-left: auto; margin-right: auto;'>Our platform runs on a <strong style='color: var(--text-primary);'>fully automated GitHub Actions pipeline</strong>, ensuring data freshness and transparency without manual bias or intervention.</p><div style='display: flex; justify-content: center; gap: 2.5rem; flex-wrap: wrap; font-size: 0.95rem;'><span style='color: #FF3D3D; font-weight: 600;'><i class='fas fa-server' style='margin-right: 0.3rem;'></i>Automated Collection</span><span style='color: #3B82F6; font-weight: 600;'><i class='fas fa-brain' style='margin-right: 0.3rem;'></i>AI Processing</span><span style='color: #00D9FF; font-weight: 600;'><i class='fas fa-sync-alt' style='margin-right: 0.3rem;'></i>4-Hour Updates</span></div></div><div style='text-align: center; padding-top: 2rem; border-top: 1px solid rgba(255, 255, 255, 0.1);'><p style='font-style: italic; color: var(--text-muted); font-size: 1.1rem; font-weight: 500;'>Stay secure. Stay informed. Stay ahead.</p></div></div>",
        "privacy": "<h2>Privacy Policy</h2><p style='color: var(--text-muted); font-size: 0.9rem; margin-bottom: 2rem;'>Last Updated: June 2026</p><h3>Information We Collect</h3><p>TheHGTech is committed to protecting your privacy. We collect minimal information necessary to provide our services:</p><ul style='margin-left: 1.5rem; margin-bottom: 1.5rem;'><li>Usage data (pages visited, time spent, browser type) via Google Analytics</li><li>Cookies for theme preferences and site functionality</li></ul><h3>Third-Party Services</h3><p>We use the following third-party services that may collect data:</p><ul style='margin-left: 1.5rem; margin-bottom: 1.5rem;'><li><strong>Google Analytics:</strong> For anonymous traffic analysis</li><li><strong>Carbon Ads (via Fullres):</strong> For displaying privacy-friendly advertisements</li><li><strong>GraphComment:</strong> For managing article comments and reactions. See the <a href='https://graphcomment.com/en/privacy-policy/' target='_blank' rel='noopener noreferrer' style='color: var(--accent);'>GraphComment Privacy Policy</a></li></ul><h3>Advertising</h3><p>We display advertisements through Carbon Ads, a privacy-focused ad network. Carbon Ads:</p><ul style='margin-left: 1.5rem; margin-bottom: 1.5rem;'><li>Does NOT use cookies for tracking</li><li>Does NOT collect personal information</li><li>Only uses contextual targeting based on page content</li><li>Serves ads from ethical, vetted technology companies</li></ul><p>Learn more: <a href='https://www.carbonads.net/privacy' target='_blank' rel='noopener noreferrer' style='color: var(--accent);'>Carbon Ads Privacy Policy</a></p><h3>Cookies</h3><p>We use minimal cookies for:</p><ul style='margin-left: 1.5rem; margin-bottom: 1.5rem;'><li>Remembering your dark/light theme preference</li><li>Tracking cookie consent (if accepted)</li></ul><h3>Data Security</h3><p>We implement industry-standard security measures including HTTPS, Content Security Policy (CSP), and HSTS to protect your information.</p><h3>Your Rights</h3><p>You have the right to:</p><ul style='margin-left: 1.5rem; margin-bottom: 1.5rem;'><li>Access any personal data we hold about you</li><li>Request deletion of your data</li><li>Opt-out of analytics by using browser privacy settings</li><li>Use ad blockers to prevent ad display</li></ul><h3>External Links</h3><p>Our site contains links to external websites. We are not responsible for the privacy practices of these sites.</p><h3>Changes to Policy</h3><p>We may update this policy periodically. The 'Last Updated' date will reflect any changes.</p><h3>Contact</h3><p>For privacy concerns, contact us at: <a href='mailto:harish@thehgtech.com' style='color: var(--accent);'>harish@thehgtech.com</a></p>",
        "terms": "<h2>Terms of Service</h2><p><em>Last Updated: November 2, 2025</em></p><h3>1. Acceptance of Terms</h3><p>By accessing and using TheHGTech website, you accept and agree to be bound by the terms and conditions of this agreement. If you do not agree to these terms, please do not use this website.</p><h3>2. Use License</h3><p>Permission is granted to temporarily access the materials (information or content) on TheHGTech for personal, non-commercial viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p><ul><li>Modify or copy the materials</li><li>Use the materials for any commercial purpose or for any public display</li><li>Attempt to reverse engineer any software contained on TheHGTech website</li><li>Remove any copyright or other proprietary notations from the materials</li><li>Transfer the materials to another person or mirror the materials on any other server</li></ul><h3>3. Content and Information</h3><p>The materials on TheHGTech are provided on an 'as is' basis. TheHGTech makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p><p>All content is sourced from third-party news publications and RSS feeds. We provide attribution and links to original sources. TheHGTech does not claim ownership of third-party content and respects all copyright holders.</p><h3>4. Limitations</h3><p>In no event shall TheHGTech or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on TheHGTech, even if TheHGTech or an authorized representative has been notified orally or in writing of the possibility of such damage.</p><h3>5. External Links</h3><p>TheHGTech has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by TheHGTech of the site. Use of any such linked website is at the user's own risk.</p><h3>6. Modifications</h3><p>TheHGTech may revise these terms of service at any time without notice. By using this website, you are agreeing to be bound by the current version of these terms of service.</p><h3>7. Governing Law</h3><p>These terms and conditions are governed by and construed in accordance with applicable laws, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.</p><p><em>If you have any questions about these Terms of Service, please contact us through our official channels.</em></p>"
    },
    "recentCVEs": [
        {
            "cveId": "CVE-2026-42271",
            "dateAdded": "Jun 08, 2026",
            "vendor": "BerriAI LiteLLM",
            "description": "BerriAI LiteLLM contains a command injection vulnerability that could allow any authenticated user, including holders of low-privilege internal-user keys, to run arbitrary commands on the host.",
            "score": "HIGH",
            "status": "Confirmed",
            "source": "CISA KEV",
            "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-42271",
            "isZeroDay": false
        },
        {
            "cveId": "CVE-2026-50751",
            "dateAdded": "Jun 08, 2026",
            "vendor": "Check Point Security Gateway",
            "description": "Check Point Security Gateway contains an improper authentication vulnerability in IKEv1 key exchange that could allow an unauthenticated remote attacker to bypass user authentication and establish a r",
            "score": "HIGH",
            "status": "Confirmed",
            "source": "CISA KEV",
            "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-50751",
            "isZeroDay": false
        },
        {
            "cveId": "CVE-2026-28318",
            "dateAdded": "Jun 05, 2026",
            "vendor": "SolarWinds Serv-U",
            "description": "SolarWinds Serv-U contains an uncontrolled resource consumption vulnerability that allows specially crafted POST requests using the Content-Encoding: deflate header to crash the Serv-U service without",
            "score": "HIGH",
            "status": "Confirmed",
            "source": "CISA KEV",
            "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-28318",
            "isZeroDay": false
        },
        {
            "cveId": "CVE-2026-45247",
            "dateAdded": "Jun 03, 2026",
            "vendor": "Mirasvit Mirasvit Full Page Cache Warmer",
            "description": "Mirasvit Full Page Cache Warmer contains a deserialization of untrusted data vulnerability that could allow unauthenticated attackers to achieve remote code execution by supplying a crafted serialized",
            "score": "HIGH",
            "status": "Confirmed",
            "source": "CISA KEV",
            "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-45247",
            "isZeroDay": false
        }
    ],
    "featureCards": []
};