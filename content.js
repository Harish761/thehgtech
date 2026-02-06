// TheHGTech Website Content
// Update this file to change website content

const websiteContent = {
    "cyberShorts": [
        {
            "date": "Feb 06 2026",
            "headline": "Ingress NGINX Vulnerabilities—Critical Update Required",
            "title": "Four New Vulnerabilities Discovered in Ingress NGINX Traffic Controller",
            "content": "Four security vulnerabilities have been identified in the open-source Ingress NGINX traffic controller, widely used in Kubernetes deployments. Two of these vulnerabilities are particularly severe, with high Common Vulnerability Scoring System (CVSS) scores, though specific CVE IDs were not disclosed. These flaws could potentially allow attackers to disrupt or gain unauthorized access to affected systems. Organizations using Ingress NGINX are advised to upgrade to the latest version immediately to mitigate these risks. This discovery underscores the importance of regular updates and security audits for open-source components in critical infrastructure.",
            "source": "CSO Online",
            "sourceUrl": "https://www.csoonline.com/article/4128439/four-new-vulnerabilities-found-in-ingress-nginx.html",
            "relatedResources": [
                {
                    "label": "CVE Prioritization Guide",
                    "url": "/guides/cve-prioritization-patch-management.html",
                    "icon": "fa-bug"
                }
            ]
        },
        {
            "date": "Feb 06 2026",
            "headline": "Zscaler Buys SquareX—Enhances Browser Security",
            "title": "Zscaler Acquires SquareX to Boost Browser Security Capabilities",
            "content": "Zscaler has announced the acquisition of SquareX, a browser security firm, aiming to enhance security features by allowing customers to embed lightweight extensions into any browser. This strategic move eliminates the need for third-party browsers and offers a more integrated security solution. Zscaler&#x27;s acquisition reflects a growing trend of consolidating security capabilities to address the increasing threats faced by traditional web browsers. The enhanced security measures are expected to provide more robust protection against phishing and malware attacks. Security professionals should monitor how this integration affects their current security protocols.",
            "source": "SecurityWeek",
            "sourceUrl": "https://www.securityweek.com/zscaler-acquires-browser-security-firm-squarex/",
            "relatedResources": []
        },
        {
            "date": "Feb 06 2026",
            "headline": "ISC Stormcast Highlights—February 6th, 2026 Edition",
            "title": "Key Insights from ISC Stormcast for February 6th, 2026",
            "content": "The latest ISC Stormcast podcast provides an overview of current cybersecurity threats and trends, as discussed by the SANS Internet Storm Center. The episode includes updates on recent vulnerabilities, emerging threat actors, and defensive strategies. It serves as a valuable resource for security professionals seeking to stay informed about the evolving cybersecurity landscape. Listeners are encouraged to integrate the discussed insights into their security frameworks to bolster defenses against potential attacks. Regular engagement with such resources can significantly enhance an organization&#x27;s threat awareness and response capabilities.",
            "source": "SANS Internet Storm Center",
            "sourceUrl": "https://isc.sans.edu/diary/rss/32688",
            "relatedResources": []
        },
        {
            "date": "Feb 05 2026",
            "headline": "Asian APT Targets 37 Nations—Urgent Security Alert",
            "title": "New APT Group Breaches Government and Critical Infrastructure in 37 Countries",
            "content": "A new advanced persistent threat (APT) group from Asia has infiltrated 70 government and critical infrastructure organizations across 37 countries over the past year. This cyberespionage group employs a sophisticated arsenal, including phishing attacks, exploitation kits, custom malware, Linux rootkits, and web shells. The widespread impact of these attacks highlights the urgent need for enhanced cybersecurity measures in government and infrastructure sectors. Organizations are advised to strengthen their defenses against these advanced tactics and ensure robust incident response strategies are in place.",
            "source": "CSO Online",
            "sourceUrl": "https://www.csoonline.com/article/4128378/new-apt-group-breached-gov-and-critical-infrastructure-orgs-in-37-countries.html",
            "relatedResources": [
                {
                    "label": "MITRE ATT&CK Mapping",
                    "url": "/guides/mitre-attack-mapping.html",
                    "icon": "fa-map"
                }
            ]
        },
        {
            "date": "Feb 05 2026",
            "headline": "EnCase Driver Exploited—EDR Bypass Alert",
            "title": "EnCase Driver Weaponized as EDR Killers Persist in Cyber Attacks",
            "content": "The driver for EnCase, a popular forensic tool, has been weaponized by attackers to bypass endpoint detection and response (EDR) systems. Despite the driver&#x27;s digital certificate having expired years ago, vulnerabilities in Windows allowed it to be loaded, posing significant security risks. This incident underscores the importance of rigorous certificate management and the need for continuous monitoring of security tools. Organizations are urged to review their EDR configurations and ensure all drivers are up-to-date and verified to prevent similar exploitation.",
            "source": "Dark Reading",
            "sourceUrl": "https://www.darkreading.com/threat-intelligence/encase-driver-weaponized-edr-killers-persist",
            "relatedResources": [
                {
                    "label": "Ransomware Tracker",
                    "url": "/ransomware-tracker.html",
                    "icon": "fa-skull-crossbones"
                },
                {
                    "label": "Zero-Day Detection Guide",
                    "url": "/guides/zero-day-detection.html",
                    "icon": "fa-exclamation-triangle"
                },
                {
                    "label": "EDR Comparison: CrowdStrike vs Defender vs Cortex XDR",
                    "url": "/comparisons/crowdstrike-vs-microsoft-defender-vs-cortex-xdr.html",
                    "icon": "fa-shield-virus"
                }
            ]
        },
        {
            "date": "Feb 05 2026",
            "headline": "AI-Created Site &#x27;Moltbook&#x27; Exposes Data—Security Warning",
            "title": "Agentic AI Site &#x27;Moltbook&#x27; Riddled with Security Risks",
            "content": "The AI-generated web platform &#x27;Moltbook&#x27; has exposed all its data through a publicly accessible API, highlighting significant security risks associated with automated site creation. This incident demonstrates the potential vulnerabilities in AI-driven web development, where security considerations may be overlooked. Organizations leveraging AI for web development should prioritize security audits and implement stringent access controls to protect sensitive data. This case serves as a cautionary tale for developers to incorporate security checks throughout the AI development lifecycle.",
            "source": "Dark Reading",
            "sourceUrl": "https://www.darkreading.com/cyber-risk/agentic-ai-moltbook-security-risks",
            "relatedResources": []
        },
        {
            "date": "Feb 05 2026",
            "headline": "Spanish Science Ministry Breach—Systems Shut Down",
            "title": "Spain&#x27;s Ministry of Science Shuts Down Systems After Breach Claims",
            "content": "Following claims of a security breach, Spain&#x27;s Ministry of Science has partially shut down its IT systems, affecting several services available to citizens and companies. The ministry is currently investigating the breach&#x27;s scope and potential impact on sensitive data. This incident highlights the vulnerabilities faced by governmental institutions and the critical need for robust cybersecurity frameworks. Organizations are advised to review their incident response plans and ensure they are prepared to handle potential breaches effectively.",
            "source": "BleepingComputer",
            "sourceUrl": "https://www.bleepingcomputer.com/news/security/spains-ministry-of-science-shuts-down-systems-after-breach-claims/",
            "relatedResources": [
                {
                    "label": "NIST CSF 2.0 Implementation",
                    "url": "/guides/nist-csf-2-implementation.html",
                    "icon": "fa-check-double"
                }
            ]
        },
        {
            "date": "Mar 23 2026",
            "headline": "RSAC 2026 Registration Opens—Secure Your Spot Now",
            "title": "RSA Conference 2026 Registration Opens for Cybersecurity Professionals",
            "content": "Registration for the RSA Conference 2026 is now open, inviting cybersecurity professionals to secure their spot at one of the industry&#x27;s most anticipated events. Scheduled for April in San Francisco, RSAC 2026 promises to gather experts and leaders to discuss pressing security challenges and innovations. This year&#x27;s conference will focus on emerging threats, AI in cybersecurity, and the future of digital defense. Attendees can expect keynote speeches, technical sessions, and networking opportunities with peers and industry leaders. Early registration is advised as the event typically sells out quickly, reflecting its importance in shaping cybersecurity discourse.",
            "source": "darkreading",
            "sourceUrl": "https://www.darkreading.com/events/rsac-2026-conference",
            "relatedResources": []
        },
        {
            "date": "May 05 2026",
            "title": "GISEC GLOBAL 2026 Unveils Cybersecurity Innovations in Middle East and Africa",
            "content": "GISEC GLOBAL 2026, the largest cybersecurity event in the Middle East and Africa, has kicked off, showcasing the latest advancements in cybersecurity technology and strategy. The event serves as a platform for industry leaders to discuss emerging threats and innovative solutions. This year&#x27;s focus includes AI-driven security tools, advanced threat detection systems, and new compliance frameworks. Professionals from various sectors, including government and private enterprises, are attending to gain insights into protecting critical infrastructure. The event highlights the region&#x27;s growing importance in the global cybersecurity landscape, emphasizing collaboration and knowledge sharing. Attendees are encouraged to engage with workshops and panels to stay ahead of evolving cyber threats.",
            "source": "darkreading",
            "sourceUrl": "https://www.darkreading.com/events/gisec-global"
        }
    ],
    "aiShorts": [
        {
            "date": "Feb 06 2026",
            "headline": "$2B Cloud IAM Risk—Recruitment Fraud Exfiltrates Developer Credentials",
            "title": "Recruitment Fraud Turns Cloud IAM into a $2 Billion Attack Surface",
            "content": "A sophisticated recruitment fraud scheme has exposed a $2 billion attack surface in cloud Identity and Access Management (IAM) systems. Developers receive seemingly legitimate job offers via LinkedIn, which include coding assessments requiring the installation of malicious packages. These packages exfiltrate sensitive cloud credentials, including GitHub personal access tokens and AWS API keys, from the developer&#x27;s machine. The attack compromises cloud environments, potentially affecting thousands of organizations relying on these platforms. Security experts emphasize the need for enhanced credential hygiene and verification processes to mitigate such risks. This incident underscores the growing threat of social engineering attacks targeting the tech industry.",
            "source": "VentureBeat",
            "sourceUrl": "https://venturebeat.com/security/recruitment-fraud-cloud-iam-2-billion-attack-surface",
            "relatedResources": [
                {
                    "label": "Cloud Security Hardening",
                    "url": "/guides/cloud-security-hardening.html",
                    "icon": "fa-cloud"
                }
            ]
        },
        {
            "date": "Feb 05 2026",
            "headline": "Sapiom Secures $15M—Empowers AI Agents with Financial Autonomy",
            "title": "Sapiom Raises $15M to Enable AI Agents to Purchase Tech Tools",
            "content": "Sapiom, a startup supported by Accel, has raised $15 million to develop a financial infrastructure that allows AI agents to autonomously purchase technology tools. This innovative platform manages authentication and micropayments for AI agents, facilitating their operational independence. The funding will accelerate Sapiom&#x27;s efforts to integrate this financial layer into existing AI ecosystems, potentially transforming how AI agents interact with technology markets. This development could significantly impact industries relying on AI for automation and efficiency, as it enables AI systems to dynamically acquire resources without human intervention. Sapiom&#x27;s initiative reflects a broader trend towards increasing AI autonomy.",
            "source": "TechCrunch",
            "sourceUrl": "https://techcrunch.com/2026/02/05/sapiom-raises-15m-to-help-ai-agents-buy-their-own-tech-tools/",
            "relatedResources": [
                {
                    "label": "API Security Best Practices",
                    "url": "/guides/api-security-best-practices.html",
                    "icon": "fa-plug"
                }
            ]
        },
        {
            "date": "Feb 05 2026",
            "headline": "Reddit Eyes AI-Powered Search—Aiming for Market Domination",
            "title": "Reddit Explores AI Search Integration as a Major Growth Opportunity",
            "content": "Reddit is pursuing AI-driven search capabilities as its next strategic growth area, as revealed during its fourth-quarter earnings call. The company plans to merge traditional and AI-powered search functionalities to enhance user experience and capture a larger market share. Although Reddit&#x27;s search feature is currently not monetized, executives highlighted its vast potential, citing the search market as an untapped opportunity. This move aligns with industry trends where AI integration in search technologies is becoming increasingly prevalent. Reddit&#x27;s initiative could redefine its platform&#x27;s utility, attracting more users and advertisers seeking advanced search capabilities.",
            "source": "TechCrunch",
            "sourceUrl": "https://techcrunch.com/2026/02/05/reddit-looks-to-ai-search-as-its-next-big-opportunity/",
            "relatedResources": []
        },
        {
            "date": "Feb 05 2026",
            "headline": "AWS Revenue Surges—AI Demand Fuels Record Growth",
            "title": "AWS Achieves Record Revenue Growth Amidst High Cloud Demand",
            "content": "Amazon Web Services (AWS) reported its highest revenue growth in 13 quarters during Q4 2025, driven by soaring demand for cloud-based AI solutions. The surge reflects the increasing reliance on AWS infrastructure to support AI deployments across various sectors. This growth trend underscores the pivotal role of cloud services in enabling AI advancements, as organizations seek scalable and robust platforms. AWS&#x27;s performance highlights its competitive edge in the cloud market, as it continues to attract enterprises investing in AI technologies. The sustained demand for cloud resources suggests a promising outlook for AWS and the broader cloud industry.",
            "source": "TechCrunch",
            "sourceUrl": "https://techcrunch.com/2026/02/05/aws-revenue-continues-to-soar-as-cloud-demand-remains-high/",
            "relatedResources": [
                {
                    "label": "Ransomware Tracker",
                    "url": "/ransomware-tracker.html",
                    "icon": "fa-skull-crossbones"
                },
                {
                    "label": "Cloud Security Hardening",
                    "url": "/guides/cloud-security-hardening.html",
                    "icon": "fa-cloud"
                }
            ]
        },
        {
            "date": "Feb 05 2026",
            "headline": "Amazon, Google Lead $375B AI Capex Race—What&#x27;s at Stake?",
            "title": "Amazon and Google Dominate AI Capex Investments in 2026",
            "content": "Amazon and Google are leading the AI capital expenditure (capex) race, with Amazon planning a $200 billion investment and Google allocating between $175 billion to $185 billion in 2026. These substantial investments reflect their commitment to advancing AI infrastructure and capabilities. The capex race underscores the fierce competition between tech giants to dominate the AI landscape, with significant implications for innovation and market leadership. The investments are expected to enhance data centers, AI research, and cloud services, driving technological advancements. Industry observers are keenly watching how these investments will shape the future of AI development.",
            "source": "TechCrunch",
            "sourceUrl": "https://techcrunch.com/2026/02/05/amazon-and-google-are-winning-the-ai-capex-race-but-whats-the-prize/",
            "relatedResources": []
        },
        {
            "date": "Feb 05 2026",
            "headline": "GPU Kernel Optimization—TTT-Discover Outpaces Human Experts 2x",
            "title": "TTT-Discover Optimizes GPU Kernels Twice as Fast as Experts",
            "content": "A collaborative effort by researchers from Stanford, Nvidia, and Together AI has led to the development of TTT-Discover, a technique that optimizes GPU kernels twice as fast as human experts. By training during inference, TTT-Discover identifies efficient solutions to complex computational problems, significantly improving performance. This breakthrough demonstrates the potential of AI to enhance hardware efficiency, particularly in fields requiring high computational power. The technique&#x27;s success could lead to widespread adoption in industries relying on GPU-intensive tasks, such as gaming and AI research. The collaboration highlights the importance of cross-institutional efforts in advancing AI capabilities.",
            "source": "VentureBeat",
            "sourceUrl": "https://venturebeat.com/infrastructure/ttt-discover-optimizes-gpu-kernels-2x-faster-than-human-experts-by-training",
            "relatedResources": [
                {
                    "label": "Securing AI/ML Pipelines",
                    "url": "/guides/securing-ai-ml-pipelines.html",
                    "icon": "fa-brain"
                }
            ]
        },
        {
            "date": "Feb 05 2026",
            "headline": "Silicon Valley Loyalty Shifts—Founders Easily Enticed by Offers",
            "title": "Loyalty Declines in Silicon Valley as Founders Pursue Better Offers",
            "content": "A cultural shift is occurring in Silicon Valley, where founders are increasingly open to leaving their companies for more lucrative opportunities. This trend marks a departure from the traditional model where founders remained committed to their ventures. The changing landscape is driven by competitive compensation packages and the dynamic nature of the tech industry. This shift could impact startup stability and innovation, as experienced leaders move between companies. Industry analysts suggest that organizations may need to offer more than financial incentives to retain top talent, emphasizing the importance of culture and growth opportunities.",
            "source": "Artificial Intelligence Latest",
            "sourceUrl": "https://www.wired.com/story/model-behavior-loyalty-is-dead-in-silicon-valley/",
            "relatedResources": [
                {
                    "label": "Securing AI/ML Pipelines",
                    "url": "/guides/securing-ai-ml-pipelines.html",
                    "icon": "fa-brain"
                }
            ]
        }
    ],
    "articles": {},
    "articleCards": [
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
        "about": "<div style='padding: 0.5rem;'><div style='text-align: center; margin-bottom: 2.5rem;'><h2 style='font-size: 2.5rem; font-weight: 800; margin-bottom: 1rem; background: linear-gradient(135deg, #FF3D3D, #00D9FF); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;'>About TheHGTech</h2><p style='font-size: 1.15rem; color: var(--text-secondary); line-height: 1.7; max-width: 700px; margin: 0 auto;'>Your trusted source for cutting-edge insights at the intersection of <strong style='color: #FF3D3D;'>cybersecurity</strong> and <strong style='color: #00D9FF;'>artificial intelligence</strong>.</p></div><div style='display: flex; justify-content: center; gap: 2rem; flex-wrap: wrap; margin-bottom: 2.5rem;'><div style='text-align: center; padding: 1.5rem 2rem; background: rgba(255, 61, 61, 0.1); border-radius: 12px; border: 1px solid rgba(255, 61, 61, 0.2);'><span style='font-size: 2.5rem; font-weight: 800; color: #FF3D3D; display: block;'>52K+</span><span style='font-size: 0.9rem; color: var(--text-secondary);'>Active IOCs</span></div><div style='text-align: center; padding: 1.5rem 2rem; background: rgba(0, 217, 255, 0.1); border-radius: 12px; border: 1px solid rgba(0, 217, 255, 0.2);'><span style='font-size: 2.5rem; font-weight: 800; color: #00D9FF; display: block;'>9</span><span style='font-size: 0.9rem; color: var(--text-secondary);'>Threat Vendors</span></div><div style='text-align: center; padding: 1.5rem 2rem; background: rgba(59, 130, 246, 0.1); border-radius: 12px; border: 1px solid rgba(59, 130, 246, 0.2);'><span style='font-size: 2.5rem; font-weight: 800; color: #3B82F6; display: block;'>20+</span><span style='font-size: 0.9rem; color: var(--text-secondary);'>Security Guides</span></div></div><div style='background: linear-gradient(135deg, rgba(255, 61, 61, 0.05), rgba(0, 217, 255, 0.05)); border: 1px solid rgba(255, 61, 61, 0.2); border-radius: 16px; padding: 2.5rem; margin-bottom: 2.5rem;'><h3 style='color: #FF3D3D; font-size: 1.6rem; margin-bottom: 1.25rem; font-weight: 700;'>Our Mission</h3><p style='color: var(--text-secondary); line-height: 1.9; font-size: 1.1rem;'>We empower security professionals and AI enthusiasts with <strong style='color: var(--text-primary);'>real-time, data-driven intelligence</strong>. In an era of rapid technological shift, we provide the clarity needed to navigate emerging threats and innovations — <strong style='color: var(--text-primary);'>100% free, no login required</strong>.</p></div><div style='display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.5rem; margin-bottom: 2.5rem;'><div style='background: rgba(255, 61, 61, 0.05); border-left: 4px solid #FF3D3D; border-radius: 8px; padding: 1.75rem;'><h4 style='color: #FF3D3D; font-size: 1.2rem; margin-bottom: 0.75rem; font-weight: 700;'><i class='fas fa-shield-alt' style='margin-right: 0.5rem;'></i>Threat Intelligence</h4><p style='color: var(--text-secondary); font-size: 0.95rem; line-height: 1.7;'>52,000+ live IOCs from 9 trusted vendors (OpenPhish, URLhaus, ThreatFox, MalwareBazaar, CINS Army & more). Updated every 4 hours.</p></div><div style='background: rgba(59, 130, 246, 0.05); border-left: 4px solid #3B82F6; border-radius: 8px; padding: 1.75rem;'><h4 style='color: #3B82F6; font-size: 1.2rem; margin-bottom: 0.75rem; font-weight: 700;'><i class='fas fa-robot' style='margin-right: 0.5rem;'></i>AI Security Tracking</h4><p style='color: var(--text-secondary); font-size: 0.95rem; line-height: 1.7;'>MITRE ATLAS AI attack techniques, AI Incident Database monitoring, OWASP LLM Top 10 vulnerabilities.</p></div><div style='background: rgba(0, 217, 255, 0.05); border-left: 4px solid #00D9FF; border-radius: 8px; padding: 1.75rem;'><h4 style='color: #00D9FF; font-size: 1.2rem; margin-bottom: 0.75rem; font-weight: 700;'><i class='fas fa-lock' style='margin-right: 0.5rem;'></i>Ransomware Tracker</h4><p style='color: var(--text-secondary); font-size: 0.95rem; line-height: 1.7;'>Live monitoring of active ransomware gang activity with recent victims, attack patterns, and group profiles.</p></div><div style='background: rgba(255, 61, 61, 0.05); border-left: 4px solid #FF3D3D; border-radius: 8px; padding: 1.75rem;'><h4 style='color: #FF3D3D; font-size: 1.2rem; margin-bottom: 0.75rem; font-weight: 700;'><i class='fas fa-book' style='margin-right: 0.5rem;'></i>Security Guides</h4><p style='color: var(--text-secondary); font-size: 0.95rem; line-height: 1.7;'>20+ in-depth guides including Ransomware Response, Zero Trust, SIEM Analysis, Threat Hunting, and Cloud Security.</p></div><div style='background: rgba(0, 217, 255, 0.05); border-left: 4px solid #00D9FF; border-radius: 8px; padding: 1.75rem;'><h4 style='color: #00D9FF; font-size: 1.2rem; margin-bottom: 0.75rem; font-weight: 700;'><i class='fas fa-balance-scale' style='margin-right: 0.5rem;'></i>Tool Comparisons</h4><p style='color: var(--text-secondary); font-size: 0.95rem; line-height: 1.7;'>Unbiased head-to-head comparisons of security tools — CrowdStrike vs Defender, SIEM platforms, and more. Zero affiliate links.</p></div><div style='background: rgba(255, 61, 61, 0.05); border-left: 4px solid #FF3D3D; border-radius: 8px; padding: 1.75rem;'><h4 style='color: #FF3D3D; font-size: 1.2rem; margin-bottom: 0.75rem; font-weight: 700;'><i class='fas fa-newspaper' style='margin-right: 0.5rem;'></i>Threat News</h4><p style='color: var(--text-secondary); font-size: 0.95rem; line-height: 1.7;'>Breaking cybersecurity news with technical breakdowns, not just headlines. Actionable insights for defenders.</p></div></div><div style='background: linear-gradient(135deg, rgba(255, 61, 61, 0.08), rgba(0, 217, 255, 0.08)); border: 1px solid rgba(255, 61, 61, 0.25); border-radius: 16px; padding: 2.5rem; text-align: center; margin-bottom: 2rem;'><h3 style='color: var(--text-primary); font-size: 1.6rem; margin-bottom: 1.25rem; font-weight: 700;'><i class='fas fa-cogs' style='margin-right: 0.5rem;'></i>Powered by Automation</h3><p style='color: var(--text-secondary); margin-bottom: 1.75rem; line-height: 1.8; font-size: 1.05rem; max-width: 650px; margin-left: auto; margin-right: auto;'>Our platform runs on a <strong style='color: var(--text-primary);'>fully automated GitHub Actions pipeline</strong>, ensuring data freshness and transparency without manual bias or intervention.</p><div style='display: flex; justify-content: center; gap: 2.5rem; flex-wrap: wrap; font-size: 0.95rem;'><span style='color: #FF3D3D; font-weight: 600;'><i class='fas fa-server' style='margin-right: 0.3rem;'></i>Automated Collection</span><span style='color: #3B82F6; font-weight: 600;'><i class='fas fa-brain' style='margin-right: 0.3rem;'></i>AI Processing</span><span style='color: #00D9FF; font-weight: 600;'><i class='fas fa-sync-alt' style='margin-right: 0.3rem;'></i>4-Hour Updates</span></div></div><div style='text-align: center; padding-top: 2rem; border-top: 1px solid rgba(255, 255, 255, 0.1);'><p style='font-style: italic; color: var(--text-muted); font-size: 1.1rem; font-weight: 500;'>Stay secure. Stay informed. Stay ahead.</p></div></div>",
        "privacy": "<h2>Privacy Policy</h2><p style='color: var(--text-muted); font-size: 0.9rem; margin-bottom: 2rem;'>Last Updated: November 18, 2025</p><h3>Information We Collect</h3><p>TheHGTech is committed to protecting your privacy. We collect minimal information necessary to provide our services:</p><ul style='margin-left: 1.5rem; margin-bottom: 1.5rem;'><li>Usage data (pages visited, time spent, browser type) via Google Analytics</li><li>Cookies for theme preferences and site functionality</li></ul><h3>Third-Party Services</h3><p>We use the following third-party services that may collect data:</p><ul style='margin-left: 1.5rem; margin-bottom: 1.5rem;'><li><strong>Google Analytics:</strong> For anonymous traffic analysis</li><li><strong>Carbon Ads (via Fullres):</strong> For displaying privacy-friendly advertisements</li></ul><h3>Advertising</h3><p>We display advertisements through Carbon Ads, a privacy-focused ad network. Carbon Ads:</p><ul style='margin-left: 1.5rem; margin-bottom: 1.5rem;'><li>Does NOT use cookies for tracking</li><li>Does NOT collect personal information</li><li>Only uses contextual targeting based on page content</li><li>Serves ads from ethical, vetted technology companies</li></ul><p>Learn more: <a href='https://www.carbonads.net/privacy' target='_blank' rel='noopener noreferrer' style='color: var(--accent);'>Carbon Ads Privacy Policy</a></p><h3>Cookies</h3><p>We use minimal cookies for:</p><ul style='margin-left: 1.5rem; margin-bottom: 1.5rem;'><li>Remembering your dark/light theme preference</li><li>Tracking cookie consent (if accepted)</li></ul><h3>Data Security</h3><p>We implement industry-standard security measures including HTTPS, Content Security Policy (CSP), and HSTS to protect your information.</p><h3>Your Rights</h3><p>You have the right to:</p><ul style='margin-left: 1.5rem; margin-bottom: 1.5rem;'><li>Access any personal data we hold about you</li><li>Request deletion of your data</li><li>Opt-out of analytics by using browser privacy settings</li><li>Use ad blockers to prevent ad display</li></ul><h3>External Links</h3><p>Our site contains links to external websites. We are not responsible for the privacy practices of these sites.</p><h3>Changes to Policy</h3><p>We may update this policy periodically. The 'Last Updated' date will reflect any changes.</p><h3>Contact</h3><p>For privacy concerns, contact us at: <a href='mailto:harish@thehgtech.com' style='color: var(--accent);'>harish@thehgtech.com</a></p>",
        "terms": "<h2>Terms of Service</h2><p><em>Last Updated: November 2, 2025</em></p><h3>1. Acceptance of Terms</h3><p>By accessing and using TheHGTech website, you accept and agree to be bound by the terms and conditions of this agreement. If you do not agree to these terms, please do not use this website.</p><h3>2. Use License</h3><p>Permission is granted to temporarily access the materials (information or content) on TheHGTech for personal, non-commercial viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p><ul><li>Modify or copy the materials</li><li>Use the materials for any commercial purpose or for any public display</li><li>Attempt to reverse engineer any software contained on TheHGTech website</li><li>Remove any copyright or other proprietary notations from the materials</li><li>Transfer the materials to another person or mirror the materials on any other server</li></ul><h3>3. Content and Information</h3><p>The materials on TheHGTech are provided on an 'as is' basis. TheHGTech makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p><p>All content is sourced from third-party news publications and RSS feeds. We provide attribution and links to original sources. TheHGTech does not claim ownership of third-party content and respects all copyright holders.</p><h3>4. Limitations</h3><p>In no event shall TheHGTech or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on TheHGTech, even if TheHGTech or an authorized representative has been notified orally or in writing of the possibility of such damage.</p><h3>5. External Links</h3><p>TheHGTech has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by TheHGTech of the site. Use of any such linked website is at the user's own risk.</p><h3>6. Modifications</h3><p>TheHGTech may revise these terms of service at any time without notice. By using this website, you are agreeing to be bound by the current version of these terms of service.</p><h3>7. Governing Law</h3><p>These terms and conditions are governed by and construed in accordance with applicable laws, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.</p><p><em>If you have any questions about these Terms of Service, please contact us through our official channels.</em></p>"
    },
    "recentCVEs": [
        {
            "cveId": "CVE-2025-11953",
            "dateAdded": "Feb 05, 2026",
            "vendor": "React Native Community CLI",
            "description": "React Native Community CLI contains an OS command injection vulnerability which could allow unauthenticated network attackers to send POST requests to the Metro Development Server and run arbitrary ex",
            "score": "HIGH",
            "status": "Confirmed",
            "source": "CISA KEV",
            "url": "https://nvd.nist.gov/vuln/detail/CVE-2025-11953",
            "isZeroDay": false
        },
        {
            "cveId": "CVE-2026-24423",
            "dateAdded": "Feb 05, 2026",
            "vendor": "SmarterTools SmarterMail",
            "description": "SmarterTools SmarterMail contains a missing authentication for critical function vulnerability in the ConnectToHub API method. This could allow the attacker to point the SmarterMail instance to a mali",
            "score": "HIGH",
            "status": "Confirmed",
            "source": "CISA KEV",
            "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-24423",
            "isZeroDay": false
        },
        {
            "cveId": "CVE-2021-39935",
            "dateAdded": "Feb 03, 2026",
            "vendor": "GitLab Community and Enterprise Editions",
            "description": "GitLab Community and Enterprise Editions contain a server-side request forgery vulnerability which could allow unauthorized external users to perform Server Side Requests via the CI Lint API.",
            "score": "HIGH",
            "status": "Confirmed",
            "source": "CISA KEV",
            "url": "https://nvd.nist.gov/vuln/detail/CVE-2021-39935",
            "isZeroDay": false
        },
        {
            "cveId": "CVE-2025-64328",
            "dateAdded": "Feb 03, 2026",
            "vendor": "Sangoma FreePBX",
            "description": "Sangoma FreePBX Endpoint Manager contains an OS command injection vulnerability that could allow for a post-authentication command injection by an authenticated known user via the testconnection -&gt; ch",
            "score": "HIGH",
            "status": "Confirmed",
            "source": "CISA KEV",
            "url": "https://nvd.nist.gov/vuln/detail/CVE-2025-64328",
            "isZeroDay": false
        },
        {
            "cveId": "CVE-2019-19006",
            "dateAdded": "Feb 03, 2026",
            "vendor": "Sangoma FreePBX",
            "description": "Sangoma FreePBX contains an improper authentication vulnerability that potentially allows unauthorized users to bypass password authentication and access services provided by the FreePBX admin.",
            "score": "HIGH",
            "status": "Confirmed",
            "source": "CISA KEV",
            "url": "https://nvd.nist.gov/vuln/detail/CVE-2019-19006",
            "isZeroDay": false
        },
        {
            "cveId": "CVE-2025-40551",
            "dateAdded": "Feb 03, 2026",
            "vendor": "SolarWinds Web Help Desk",
            "description": "SolarWinds Web Help Desk contains a deserialization of untrusted data vulnerability that could lead to remote code execution, which would allow an attacker to run commands on the host machine. This co",
            "score": "HIGH",
            "status": "Confirmed",
            "source": "CISA KEV",
            "url": "https://nvd.nist.gov/vuln/detail/CVE-2025-40551",
            "isZeroDay": false
        }
    ],
    "featureCards": []
};