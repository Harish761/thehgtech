// TheHGTech Website Content
// Update this file to change website content

const websiteContent = {
    "cyberShorts": [
        {
            "date": "Oct 19 2026",
            "headline": "Drupal Core RCE Risk—Fast Exploitation Imminent",
            "title": "Critical Drupal Core RCE Flaw Poses Immediate Fast-Exploitation Risk",
            "content": "SecurityWeek reports that Drupal has issued an urgent warning regarding a critical remote code execution (RCE) flaw in its core, which attackers can exploit rapidly. The vulnerability impacts the Entity List and Field UI modules and can be triggered through paths involving contributed modules. The severity lies in the speed at which malicious actors can weaponize the flaw to compromise web servers running the content management system. System administrators are urged to apply the latest security patches immediately and audit all active modules for unauthorized changes. This incident underscores the critical need for rapid patch management in open-source ecosystems.",
            "source": "SecurityWeek",
            "sourceUrl": "https://www.securityweek.com/drupal-warns-of-fast-exploitation-risk-for-critical-core-rce-flaw/",
            "relatedResources": []
        },
        {
            "date": "Oct 19 2026",
            "headline": "Rank Math PRO Malware Injected—Supply Chain Breach",
            "title": "Rank Math PRO WordPress Plugin Compromised in Supply Chain Attack",
            "content": "Hackers injected malware into the Rank Math PRO version 3.0.123 packages distributed between October 15 and October 16, compromising the popular WordPress SEO plugin. The supply chain attack targeted developers and site administrators who automatically installed the compromised update, potentially exposing sensitive site data and credentials. The malicious code was embedded directly within the software distribution channel, bypassing standard security checks. Users must immediately check their installation history, remove the compromised version, and reinstall the clean package from the official repository. This breach highlights the persistent risks of relying on third-party software distribution channels.",
            "source": "SecurityWeek",
            "sourceUrl": "https://www.securityweek.com/rank-math-pro-wordpress-plugin-compromised-in-supply-chain-attack/",
            "relatedResources": []
        },
        {
            "date": "Oct 19 2026",
            "headline": "98 Zero-Days, $100M Crypto Theft—Weekly Cyber Recap",
            "title": "Weekly Cyber Recap: 98 Zero-Days, Rogue AI Agents, and $100M Crypto Theft",
            "content": "This week's security landscape was marked by a surge in critical vulnerabilities, including 98 disclosed zero-day flaws, alongside a staggering $100 million cryptocurrency theft. The week also saw the emergence of rogue AI agents, raising new concerns about the security of autonomous systems and large language models. In a major physical-digital breach, 700 supermarkets were hit by a widespread point-of-sale (POS) malware campaign that stole customer payment data. These incidents demonstrate that threats increasingly exploit trusted services and overlooked systems, causing significant damage before detection. Security professionals must prioritize patching, threat intelligence, and robust monitoring of third-party integrations.",
            "source": "The Hacker News",
            "sourceUrl": "https://thehackernews.com/2026/10/weekly-recap-98-zero-days-rogue-ai.html",
            "relatedResources": []
        },
        {
            "date": "Oct 19 2026",
            "headline": "ShinyHunters Extortion Site Run by Ransom Negotiator",
            "title": "U.S. Feds Suspect Ransom Negotiator Ran ShinyHunters Extortion Site",
            "content": "U.S. federal investigators have identified executives at two ransomware negotiation firms who allegedly maintained unusually close relations with the ShinyHunters hacking group. The investigation centers on the group's recent theft of highly sensitive data from the FBI, which was subsequently published on an extortion site. Sources indicate that these executives may have actively facilitated the group's operations, blurring the lines between legitimate negotiation services and criminal facilitation. This development suggests a deeper infiltration of the ransomware ecosystem by state-affiliated actors. Law enforcement is expected to pursue further indictments as the investigation progresses.",
            "source": "Krebs on Security",
            "sourceUrl": "https://krebsonsecurity.com/2026/10/feds-suspect-ransom-negotiator-ran-shinyhunters-extortion-site/",
            "relatedResources": []
        },
        {
            "date": "Oct 19 2026",
            "headline": "GhostAction Steals Credentials—Font File Malware",
            "title": "GhostAction Attackers Plant Credential Stealer Disguised as Font in GitHub",
            "content": "The threat actor behind the GhostAction campaign has expanded its tactics by planting a credential stealer disguised as a font file across 94 GitHub repositories. The malicious payloads are delivered via phishing emails targeting open-source developers, tricking them into downloading the fake font. Once executed, the malware harvests browser credentials and system information from the compromised development machines. This evolution from workflow injections to targeted phishing demonstrates the attackers' adaptability in compromising the software supply chain. Developers are advised to verify all email attachments and use multi-factor authentication (MFA) to mitigate credential theft risks.",
            "source": "The Hacker News",
            "sourceUrl": "https://thehackernews.com/2026/10/ghostaction-attackers-plant-credential.html",
            "relatedResources": []
        },
        {
            "date": "Oct 19 2026",
            "headline": "Salesforce Agents Inherit Email Risks",
            "title": "How Salesforce Agentforce Inherited Email-to-Case Vulnerabilities",
            "content": "Salesforce Agentforce's recommended event-driven architecture using Flow creates an unintended security gap. The standard Email-to-Case and Web-to-Case mechanisms automatically ingest inbound messages into agent prompts, bypassing intended governance controls. This design allows malicious actors to inject prompts directly into agent workflows via customer support channels. Organizations relying on these agents must implement strict input validation and separate ingestion pipelines. The flaw highlights a critical architectural oversight where inherited software components undermine modern AI governance.",
            "source": "The Hacker News",
            "sourceUrl": "https://thehackernews.com/2026/10/from-email-to-case-to-boardroom-how.html",
            "relatedResources": []
        },
        {
            "date": "Oct 14 2026",
            "headline": "UK Sanctions Russian Crypto Conduit",
            "title": "U.K. Sanctions Cryptomus for Russian Money Laundering",
            "content": "The U.K. government sanctioned the cryptocurrency exchange Cryptomus for facilitating money laundering for Russian entities. The platform served as a major conduit for payments related to ransomware, narcotics, and cybercrime services. Sanctions specifically target Cryptomus's ability to help Russia circumvent existing financial restrictions. This action aims to disrupt the financial infrastructure supporting Russian cyber operations. Users and exchanges must review their compliance protocols to avoid secondary sanctions.",
            "source": "Krebs on Security",
            "sourceUrl": "https://krebsonsecurity.com/2026/10/u-k-sanctions-cryptomus-for-ru-money-laundering/",
            "relatedResources": []
        },
        {
            "date": "Oct 19 2026",
            "headline": "1.7M California Students' Data Stolen",
            "title": "Millions of California Students' Sensitive Data Stolen in ETS Breach",
            "content": "The California Department of Education notified students of a data breach at contractor Educational Testing Service (ETS). The incident compromised sensitive data belonging to approximately 1.7 million students across the state. The breach was discovered during routine security monitoring by the California Department of Education. ETS has engaged third-party cybersecurity firms to investigate the unauthorized access and secure affected systems. Students should monitor their accounts for identity theft and enroll in offered credit monitoring services.",
            "source": "Malwarebytes",
            "sourceUrl": "https://www.malwarebytes.com/blog/data-breaches/2026/10/millions-of-california-students-sensitive-data-stolen-in-breach",
            "relatedResources": []
        },
        {
            "date": "Oct 19 2026",
            "headline": "AI Fuels Malware Evolution",
            "title": "9 Rising Malware Trends Security Pros Must Track",
            "content": "Malware is evolving rapidly due to advances in artificial intelligence (AI) and new computing infrastructures. Security professionals must adapt to threats like polymorphic malware that changes its code to evade signature-based detection. The rise of AI-powered malware enables automated vulnerability discovery and more convincing social engineering attacks. Traditional signature-based antivirus solutions are increasingly insufficient against these advanced threats. Organizations must invest in behavior-based detection and threat intelligence platforms.",
            "source": "CSO Online",
            "sourceUrl": "https://www.csoonline.com/article/3997388/6-rising-malware-trends-every-security-pro-should-know.html",
            "relatedResources": []
        },
        {
            "date": "Oct 19 2026",
            "headline": "Siemens Center Used in ClickFix Attacks",
            "title": "Siemens Software Center Vulnerability Exploited in ClickFix Malware Attacks",
            "content": "Attackers exploited a vulnerability in the Siemens Software Center to distribute malware through ClickFix social engineering lures. The campaign involved replacing a genuine, signed copy of the application with malicious dynamic-link libraries (DLLs). This technique leverages the trust associated with legitimate software to bypass endpoint security controls on Windows PCs. Users are tricked into executing malicious payloads by following fake error-fixing instructions. Organizations must verify software integrity and restrict unsigned application execution.",
            "source": "SecurityWeek",
            "sourceUrl": "https://www.securityweek.com/siemens-software-center-vulnerability-exploited-in-clickfix-malware-attacks/",
            "relatedResources": []
        },
        {
            "date": "Oct 18 2026",
            "headline": "US Job Postings Drop 26%—AI Security Demand Soars",
            "title": "US Cybersecurity Job Postings Fall 26% as AI Security Engineer Demand Soars",
            "content": "CyberSN’s Cybersecurity Jobs Report reveals a 26% year-over-year decline in total cybersecurity job postings in the United States. Concurrently, demand for specialized AI Security Engineer roles has increased significantly, reflecting a market shift toward artificial intelligence governance. This divergence indicates a skills gap, with employers struggling to find talent proficient in both traditional security and advanced machine learning models. Organizations should invest in upskilling programs to address this emerging talent shortage.",
            "source": "SecurityWeek",
            "sourceUrl": "https://www.securityweek.com/us-cybersecurity-job-postings-fall-26-as-ai-security-engineer-demand-soars/",
            "relatedResources": []
        },
        {
            "date": "Oct 18 2026",
            "headline": "ConnectWise Suspends Cloud Backup After M365 Breach",
            "title": "ConnectWise Suspends Cloud Backup After Attackers Compromise Microsoft 365 Tenants",
            "content": "ConnectWise has temporarily suspended its cloud backup services after threat actors compromised seven application identities and gained unauthorized access to Microsoft 365 tenants. The company is actively investigating the incident to determine the full scope of the unauthorized access and potential data exposure. This breach highlights the risks associated with third-party application permissions and identity management. Customers should verify their current backup status and review recent access logs for anomalous activity.",
            "source": "The Hacker News",
            "sourceUrl": "https://thehackernews.com/2026/10/connectwise-suspends-cloud-backup-after.html",
            "relatedResources": []
        }
    ],
    "aiShorts": [
        {
            "date": "Oct 16 2026",
            "headline": "Jev Becomes Vercel's Fastest-Adopted AI Model Ever",
            "title": "Vercel's AI Gateway Data Shows Jev as the Platform's Fastest-Adopted Model",
            "content": "Vercel's AI Gateway, a unified API service similar to OpenRouter, reports that Jev has become the platform's fastest-adopted AI model in its history. The model's rapid adoption highlights its high performance and efficiency in handling complex AI tasks. Developers and tech leaders are increasingly integrating Jev into their applications for superior speed. This trend indicates a strong market preference for models that offer quick deployment and robust capabilities. Users should evaluate Jev for projects requiring high-throughput AI inference.",
            "source": "TechCrunch",
            "sourceUrl": "https://techcrunch.com/2026/10/16/jev-is-vercels-fastest-adopted-ai-model-ever/",
            "relatedResources": []
        },
        {
            "date": "Oct 15 2026",
            "headline": "FTC Probes Anthropic, OpenAI After Trump Dismisses AI Fears",
            "title": "FTC Probes Anthropic, OpenAI Following Trump's Dismissal of AI Risks",
            "content": "The Federal Trade Commission (FTC) is investigating Anthropic and OpenAI over potential data privacy and consumer protection violations. This scrutiny follows President Trump's dismissal of AI-related risks as a \"hoax,\" intensifying regulatory pressure on the industry. The FTC is considering imposing fines on the AI firms comparable to penalties for delayed data breach reporting. This action signals a shift toward stricter enforcement of existing data protection laws against AI developers. Industry stakeholders must ensure rigorous compliance with data handling and reporting protocols.",
            "source": "Ars Technica",
            "sourceUrl": "https://arstechnica.com/tech-policy/2026/10/ftc-probes-if-openai-anthropic-security-incidents-harmed-americans-report-says/",
            "relatedResources": []
        },
        {
            "date": "Oct 14 2026",
            "headline": "DeepMind, Singapore Build Scam Detection AI Model",
            "title": "Google DeepMind and Singapore Government Collaborate on Scam Detection AI",
            "content": "Google DeepMind and Singapore's GovTech have partnered to develop a fine-tuned AI model for intercepting conversational scams. The system uses lightweight on-device Gemma models to analyze private chats without sending data to the cloud. This on-device processing ensures user privacy by preventing zero cloud data egress. The model is designed to identify and flag scam attempts in real-time during conversations. This initiative sets a precedent for privacy-preserving AI applications in public safety.",
            "source": "Google DeepMind News",
            "sourceUrl": "https://deepmind.google/blog/on-device-ai-scam-detection-mddi/",
            "relatedResources": []
        },
        {
            "date": "Oct 13 2026",
            "headline": "Gemini 4 Argon Rolls Out—But Only for Paying Users",
            "title": "Google's Gemini 4 Argon Model Begins Rolling Out to Paying Subscribers",
            "content": "Google is rolling out the Gemini 4 Argon model to the Gemini app and Antigravity, but access is restricted to paying subscribers. The company is offering developers a 50 percent discount on API rates through November to encourage adoption. This tiered rollout strategy allows Google to manage server load while monetizing its advanced capabilities. The discounted API rates provide a cost-effective entry point for developers integrating the new model. Organizations should evaluate the new model's performance for their specific use cases.",
            "source": "Ars Technica",
            "sourceUrl": "https://arstechnica.com/ai/2026/10/gemini-4-argon-begins-rolling-out-in-gemini-app-and-antigravity-but-only-if-you-pay/",
            "relatedResources": []
        },
        {
            "date": "Oct 19 2026",
            "headline": "Tenstorrent Hits $6.2B Valuation to Scale AI Chips",
            "title": "Tenstorrent Reaches $6.2B Valuation to Scale Open-Weight AI Chips",
            "content": "Tenstorrent, an Nvidia challenger, has achieved a $6.2 billion valuation to fund the scaling of its open-weight AI chips. The company raised $1.5 billion in funding to remain independent after drawing acquisition interest earlier this year. This capital injection will accelerate the development of its high-performance computing hardware. The move positions Tenstorrent as a formidable competitor in the AI chip market. Tech leaders should monitor Tenstorrent's progress as a potential alternative to Nvidia's offerings.",
            "source": "TechCrunch",
            "sourceUrl": "https://techcrunch.com/2026/10/19/tenstorrent-hits-6-2b-valuation-to-scale-open-weight-ai-chips/",
            "relatedResources": []
        },
        {
            "date": "Oct 19 2026",
            "headline": "Users Use AI to Strip Smart TV Bloatware",
            "title": "Smart TV Owners Deploy AI Agents to Remove Ads and Tracking",
            "content": "Smart TV owners are utilizing AI agents to strip away unwanted bloatware, advertisements, and tracking features from their devices. This trend highlights growing consumer frustration with sluggish interfaces and privacy intrusions from smart home ecosystems. By leveraging AI, users can automate the removal of pre-installed applications and restore device performance. This shift indicates a broader demand for user-centric control over connected consumer electronics.",
            "source": "AI News & Artificial Intelligence | TechCrunch",
            "sourceUrl": "https://techcrunch.com/2026/10/19/people-are-using-ai-to-make-their-smart-tvs-dumb-again/",
            "relatedResources": []
        },
        {
            "date": "Oct 19 2026",
            "headline": "Nvidia Launches Open Models for Private Enterprise AI",
            "title": "Nvidia Expands Open Model Portfolio for Enterprise and On-Device AI Agents",
            "content": "Nvidia is advancing enterprise AI adoption by releasing new open models designed for on-premise data centers and on-device private AI agents. The move caters to corporate demand for data sovereignty and reduced reliance on cloud-based artificial intelligence services. These models aim to enable secure, localized inference for sensitive enterprise workloads. Nvidia's strategy positions it to capture market share in the burgeoning private AI infrastructure sector.",
            "source": "AI News & Artificial Intelligence | TechCrunch",
            "sourceUrl": "https://techcrunch.com/2026/10/19/nvidia-launches-new-open-models-to-run-agents-in-the-enterprise-and-on-pcs/",
            "relatedResources": []
        },
        {
            "date": "Oct 19 2026",
            "headline": "Gov. Pritzker Weighs AI's 100-Year Lifespan Promise",
            "title": "Illinois Governor JB Pritzker Discusses AI's Potential and Existential Risks",
            "content": "Illinois Governor JB Pritzker highlighted the dual-edged nature of artificial intelligence, suggesting it could extend human lifespans to 100 years while simultaneously posing threats comparable to nuclear weapons. In a recent discussion, Pritzker emphasized the urgent need for robust privacy protections and regulatory frameworks. He argued that these technological and privacy issues are driving an unexpected political realignment ahead of upcoming midterm elections. The discussion underscores the growing intersection of AI policy, tech regulation, and electoral politics.",
            "source": "AI | The Verge",
            "sourceUrl": "https://www.theverge.com/podcast/1012839/pritzker-ai-privacy-data-centers-flock-congress-laws",
            "relatedResources": []
        },
        {
            "date": "Oct 19 2026",
            "headline": "AI Agent Army Breaches 100+ Sites",
            "title": "Autonomous AI Agents Used in Large-Scale Cyberattacks",
            "content": "A hacker successfully breached more than 100 websites using an autonomous army of AI agents, according to findings from the AI security firm Norforge. The automated agents operated with minimal human intervention, exploiting vulnerabilities across multiple corporate networks. Victims included major industrial manufacturers such as John Deere, SharkNinja, and Cummins, though specific vulnerabilities were not publicly disclosed. Norforge's report highlights the emerging threat of fully autonomous AI-driven cyberattacks against critical infrastructure. Organizations must review their security postures to defend against AI-powered intrusion methods.",
            "source": "AI | The Verge",
            "sourceUrl": "https://www.theverge.com/ai-artificial-intelligence/1013643/ai-agents-hack-john-deere-shark-ninja-cummins",
            "relatedResources": []
        },
        {
            "date": "Oct 19 2026",
            "headline": "Laplace Intelligence Pre-Empts Autonomous Vehicle Failures",
            "title": "Startup Laplace Intelligence Uses AI to Red-Team Autonomous Vehicles",
            "content": "University of Michigan spinout Laplace Intelligence is utilizing AI agents and interactive simulation to red-team robots and self-driving cars before they are deployed in the real world. The startup competes in the Startup Battlefield at TechCrunch Disrupt, focusing on stress-testing autonomous systems for critical vulnerabilities. By simulating complex environmental interactions, Laplace Intelligence identifies safety flaws that traditional testing might miss. This proactive approach is essential for ensuring the reliability of autonomous technologies in high-stakes environments.",
            "source": "AI News & Artificial Intelligence | TechCrunch",
            "sourceUrl": "https://techcrunch.com/2026/10/19/laplace-intelligence-red-teams-robots-and-self-driving-cars-before-they-hit-the-real-world/",
            "relatedResources": []
        },
        {
            "date": "Oct 18 2026",
            "headline": "Disney Hires Majority of Character.AI Workforce",
            "title": "Disney Acquires Majority of Character.AI's Talent in Strategic Talent Acquisition",
            "content": "Disney has secured the majority of Character.AI's workforce through a formal acquisition agreement. The filing confirms that most employees who received job offers accepted them, though the deal remains a stalking horse bid subject to higher offers. This strategic move bolsters Disney's AI capabilities and competitive positioning in the generative AI market. The acquisition follows Character.AI's recent $41 million funding round at a $1 billion valuation. The broader industry trend shows tech giants aggressively acquiring AI startups for talent and intellectual property.",
            "source": "TechCrunch",
            "sourceUrl": "https://techcrunch.com/2026/10/18/disney-agrees-to-hire-the-majority-of-character-ais-workforce/",
            "relatedResources": []
        },
        {
            "date": "Oct 18 2026",
            "headline": "Anthropic Donates 5% Shares to Public Benefit Fund",
            "title": "Anthropic Commits 5% of Shares to Public Benefit Fund",
            "content": "Anthropic has pledged to commit 5% of its company shares to a dedicated public benefit fund. This initiative aligns with the company's stated mission to ensure artificial general intelligence benefits all of humanity. The move represents a notable corporate governance approach in the AI sector, potentially influencing industry standards. Anthropic's commitment demonstrates growing emphasis on ethical AI development and stakeholder capitalism. The fund's structure and impact metrics remain to be fully disclosed.",
            "source": "TechCrunch",
            "sourceUrl": "https://techcrunch.com/2026/10/18/anthropic-says-its-committing-5-of-its-shares-to-a-public-benefit-fund/",
            "relatedResources": []
        },
        {
            "date": "Oct 18 2026",
            "headline": "Philly Woman Arrested Blocking Delivery Robot",
            "title": "Protester Arrested for Blocking Uber Delivery Robot Path",
            "content": "Carolyn Marvin was arrested in Philadelphia and charged with disorderly conduct after blocking an Uber delivery robot's path. Marvin explicitly stated she was protesting the robot's role in displacing human delivery workers. This incident highlights growing tensions between autonomous delivery systems and labor markets. The case raises questions about public space usage, autonomous vehicle regulations, and worker displacement. Cities and companies must develop clearer policies for integrating delivery robots into urban environments.",
            "source": "The Verge",
            "sourceUrl": "https://www.theverge.com/ai-artificial-intelligence/1013541/a-woman-was-arrested-in-philly-for-blocking-a-delivery-robot",
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
            "cveId": "CVE-2026-102764",
            "dateAdded": "Oct 16, 2026",
            "vendor": "BeyondTrust Remote Support",
            "description": "BeyondTrust Remote Support contains an authentication bypass by spoofing vulnerability that could allow a remote attacker to perform file operations on the appliance.",
            "score": "HIGH",
            "status": "Confirmed",
            "source": "CISA KEV",
            "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-102764",
            "isZeroDay": false
        },
        {
            "cveId": "CVE-2025-61624",
            "dateAdded": "Oct 16, 2026",
            "vendor": "Fortinet Multiple Products",
            "description": "FortiOS, FortiPAM, FortiProxy, and FortiSwitchManager contain a path traversal vulnerability that may allow an authenticated attacker with admin profile and at least read-write permissions to write or",
            "score": "HIGH",
            "status": "Confirmed",
            "source": "CISA KEV",
            "url": "https://nvd.nist.gov/vuln/detail/CVE-2025-61624",
            "isZeroDay": false
        },
        {
            "cveId": "CVE-2026-21589",
            "dateAdded": "Oct 15, 2026",
            "vendor": "Atlassian Multiple Products",
            "description": "Multiple Atlassian products (Bitbucket Data Center ,Confluence Data Center, Jira Service Management Data Center, Jira Software Data Center, Bamboo Data Center, Crowd Data Center, Crucible and Fisheye)",
            "score": "HIGH",
            "status": "Confirmed",
            "source": "CISA KEV",
            "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-21589",
            "isZeroDay": false
        },
        {
            "cveId": "CVE-2026-105134",
            "dateAdded": "Oct 14, 2026",
            "vendor": "Ahsay AhsayCBS",
            "description": "Ahsay AhsayCBS contains a command injection vulnerability that could allow a remote attacker to execute operating system commands via manipulation of the random parameter in the Replication Receiver c",
            "score": "HIGH",
            "status": "Confirmed",
            "source": "CISA KEV",
            "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-105134",
            "isZeroDay": false
        },
        {
            "cveId": "CVE-2026-76519",
            "dateAdded": "Oct 14, 2026",
            "vendor": "Cisco Secure Email Gateway",
            "description": "Cisco Secure Email Gateway contains a relative path traversal vulnerability that could allow an unauthenticated, remote attacker to write arbitrary files on the underlying operating system.",
            "score": "HIGH",
            "status": "Confirmed",
            "source": "CISA KEV",
            "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-76519",
            "isZeroDay": false
        },
        {
            "cveId": "CVE-2026-105133",
            "dateAdded": "Oct 14, 2026",
            "vendor": "Ahsay AhsayCBS",
            "description": "Ahsay AhsayCBS contains an improper authentication vulnerability that could allow a remote attacker to bypass authentication via manipulation of the random parameter in the API component’s checkSysPwd",
            "score": "HIGH",
            "status": "Confirmed",
            "source": "CISA KEV",
            "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-105133",
            "isZeroDay": false
        },
        {
            "cveId": "CVE-2026-0322",
            "dateAdded": "Oct 14, 2026",
            "vendor": "Palo Alto Networks PAN-OS",
            "description": "Palo Alto Networks PAN-OS contains a code injection vulnerability that could allow an authenticated attacker with network access to execute arbitrary code with root privileges on the firewall.",
            "score": "HIGH",
            "status": "Confirmed",
            "source": "CISA KEV",
            "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-0322",
            "isZeroDay": false
        },
        {
            "cveId": "CVE-2026-104935",
            "dateAdded": "Oct 13, 2026",
            "vendor": "Ivanti Connect Secure",
            "description": "Ivanti Connect Secure contains an authentication bypass by spoofing vulnerability that allows a remote unauthenticated attacker to execute arbitrary commands.",
            "score": "HIGH",
            "status": "Confirmed",
            "source": "CISA KEV",
            "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-104935",
            "isZeroDay": false
        },
        {
            "cveId": "CVE-2026-96951",
            "dateAdded": "Oct 13, 2026",
            "vendor": "Microsoft Windows",
            "description": "Microsoft Windows Shell contains a command injection vulnerability that allows an unauthorized attacker to bypass a security feature over a network.",
            "score": "HIGH",
            "status": "Confirmed",
            "source": "CISA KEV",
            "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-96951",
            "isZeroDay": false
        }
    ],
    "featureCards": []
};