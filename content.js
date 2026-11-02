// TheHGTech Website Content
// Update this file to change website content

const websiteContent = {
    "cyberShorts": [
        {
            "date": "Oct 31 2026",
            "headline": "Ivanti Chain Flaws Grant Root Access",
            "title": "Attackers Chain Three Ivanti Connect Secure Flaws to Gain Unauthenticated Root Access",
            "content": "The U.S. Cybersecurity and Infrastructure Security Agency (CISA) added two critical Ivanti Connect Secure (ICS) vulnerabilities to its Known Exploited Vulnerabilities (KEV) catalog after active exploitation. Attackers are chaining CVE-2026-111357 and another unpatched flaw to achieve unauthenticated root access on compromised Linux systems. The exploit chain allows threat actors to bypass authentication, escalate privileges, and maintain persistence on vulnerable VPN gateways. Organizations running Ivanti ICS must immediately apply the latest security patches to mitigate the risk of complete system compromise. This incident underscores the persistent targeting of remote access infrastructure by advanced threat groups.",
            "source": "The Hacker News",
            "sourceUrl": "https://thehackernews.com/2026/10/attackers-chain-three-ivanti-connect.html",
            "relatedResources": []
        },
        {
            "date": "Nov 02 2026",
            "headline": "AI-Powered Infostealer Ranks Victims",
            "title": "New VOLTA Infostealer Uses Claude, Gemini, and Kimi AI to Rank Victims by Financial Value",
            "content": "Cybersecurity researchers identified VOLTA-AUTODOXER (VOLTA), a new Windows infostealer that leverages large language models (LLMs) like Claude, Gemini, and Kimi to prioritize stolen data. The malware harvests credentials and browser data, then uses AI to calculate a victim's monetization value based on financial information. This AI integration allows threat actors to focus their efforts on high-value targets, increasing the return on investment for cybercrime operations. Users should maintain strict password hygiene and deploy endpoint detection and response (EDR) solutions to mitigate the risk of data theft. The emergence of AI-driven crimeware signals a dangerous evolution in the cybercrime economy.",
            "source": "The Hacker News",
            "sourceUrl": "https://thehackernews.com/2026/11/new-volta-infostealer-uses-claude.html",
            "relatedResources": []
        },
        {
            "date": "Oct 30 2026",
            "headline": "Operation Blackout Dismantles Scam Centers",
            "title": "Behind the Scenes of How Operation Blackout Went Down",
            "content": "A recent law enforcement operation successfully dismantled a network of harmful scam centers, marking a major victory against organized cybercrime. Threat intelligence experts revealed that the coordinated takedown targeted call centers responsible for large-scale financial fraud and social engineering attacks. The operation highlights the growing effectiveness of international cooperation in combating transnational cybercrime syndicates. Security professionals should monitor dark web forums for indicators of compromise (IoCs) associated with these specific threat actors. Continued investment in threat intelligence sharing is critical to sustaining these successes and preventing the rapid re-emergence of these criminal enterprises.",
            "source": "darkreading",
            "sourceUrl": "https://www.darkreading.com/cybersecurity-operations/behind-the-scenes-how-operation-blackout-went-down",
            "relatedResources": []
        },
        {
            "date": "Oct 30 2026",
            "headline": "Apple Warns 99 Countries of Spyware",
            "title": "Apple notifications alert victims in 99 countries about mercenary spyware infections",
            "content": "Apple has sent security notifications to users in 99 countries, warning them of potential mercenary spyware infections on their devices. The alerts target users of iPhones and iPads, indicating that sophisticated threat actors may have deployed commercial spyware to compromise their privacy and communications. This move comes ahead of the Pall Mall Process, an international initiative negotiating guidelines for the use of commercial hacking tools. The notifications empower victims to take immediate steps to secure their accounts, including enabling two-factor authentication (2FA) and changing passwords. This highlights the growing threat of state-sponsored and commercial surveillance tools targeting a global user base.",
            "source": "CyberScoop",
            "sourceUrl": "https://cyberscoop.com/apple-spyware-notifications-pall-mall-process/",
            "relatedResources": []
        },
        {
            "date": "Oct 30 2026",
            "headline": "PHP2Shell Enables Linux Root Access",
            "title": "PHP2Shell plus Fragnesia: A dangerous new route from web server to root",
            "content": "Attackers are exploiting the PHP2Shell vulnerability alongside a new Fragnesia Linux kernel flaw to achieve remote code execution and root access on compromised web servers. The Fragnesia vulnerability is a high-severity privilege escalation flaw that allows unprivileged users to gain system-level control. CISA has issued a warning, urging organizations to patch their Linux systems immediately to prevent attackers from compromising critical infrastructure. This attack chain targets the initial web server compromise to pivot into the underlying operating system, bypassing standard security controls. System administrators must verify that all Linux kernels are updated to the latest stable versions to mitigate this critical risk.",
            "source": "CSO Online",
            "sourceUrl": "https://www.csoonline.com/article/4242454/php2shell-plus-fragnesia-a-dangerous-new-route-from-web-server-to-root.html",
            "relatedResources": []
        },
        {
            "date": "Oct 30 2026",
            "headline": "Volt Typhoon Pre-Positions for Infrastructure Attacks",
            "title": "China's Volt Typhoon Group Pre-Positions Access for Potential Infrastructure Assaults",
            "content": "Lumen's Black Lotus Labs identified pre-positioning activities by China's Volt Typhoon group within strategic communications and critical infrastructure ecosystems. The group utilized the \"Silent Train\" attack tactic to establish persistent access without immediate detection. These efforts indicate a potential shift toward large-scale disruptive operations against essential services. Security teams must audit for anomalous access patterns and strengthen network segmentation.",
            "source": "CSO Online",
            "sourceUrl": "https://www.csoonline.com/article/4242439/a-deep-dive-into-chinas-volt-typhoon-suggests-it-is-preparing-for-an-assault-on-infrastructure.html",
            "relatedResources": []
        },
        {
            "date": "Oct 29 2026",
            "headline": "Local Ghidra Server Boosts Malware Lab Efficiency",
            "title": "Deploying a Local Ghidra Server for Your Malware Analysis Lab",
            "content": "A local Ghidra server streamlines malware analysis workflows by enabling persistent, collaborative reverse engineering. Administrators can deploy it to manage shared disassembly projects and custom scripts across a team. The setup supports snapshot-based virtualization, allowing analysts to revert to clean states after executing malicious payloads. This architecture significantly reduces tool latency compared to cloud-based alternatives.",
            "source": "SANS Internet Storm Center",
            "sourceUrl": "https://isc.sans.edu/diary/rss/33470",
            "relatedResources": []
        },
        {
            "date": "Oct 28 2026",
            "headline": "GhostAction Shifts to Cloud and Developer Endpoints",
            "title": "GhostAction Hacking Wave Fizzles, but Attackers Lurk on in GitHub",
            "content": "The GhostAction supply chain attack campaign has pivoted from initial targets to focus on developer endpoints and cloud access. This shift suggests the threat actors are targeting software development environments to compromise build pipelines. Security teams should enforce strict access controls and monitor for unauthorized cloud credential usage. The campaign highlights the ongoing risk of insider threats within DevOps workflows.",
            "source": "darkreading",
            "sourceUrl": "https://www.darkreading.com/application-security/ghostaction-hacking-wave-fizzles-attackers-github",
            "relatedResources": []
        },
        {
            "date": "Oct 28 2026",
            "headline": "Hive Affiliate Sentenced to 70 Months for Ransomware",
            "title": "Hive ransomware affiliate jailed, years after FBI infiltrated the gang's systems",
            "content": "A Ukrainian national received a 70-month prison sentence for executing ransomware attacks as an affiliate for the Hive and Nefilim gangs. The individual targeted law firms and a healthcare provider, encrypting sensitive data and demanding payment during the COVID-19 pandemic. The conviction follows a multi-year FBI operation that successfully infiltrated the Hive gang's infrastructure. Organizations should maintain offline backups and test incident response plans regularly.",
            "source": "GRAHAM CLULEY",
            "sourceUrl": "https://www.bitdefender.com/en-us/blog/hotforsecurity/hive-ransomware-jailed-fbi-infiltrated",
            "relatedResources": []
        },
        {
            "date": "Oct 27 2026",
            "headline": "ShinyHunters Exploits PeopleSoft SSRF to RCE",
            "title": "CVE-2026-35273: SSRF to RCE in Oracle PeopleSoft",
            "content": "The ShinyHunters group is actively exploiting CVE-2026-35273, a Server-Side Request Forgery (SSRF) vulnerability in Oracle PeopleSoft, to achieve Remote Code Execution (RCE). Mandiant reported continued mass exploitation of this flaw, which was initially disclosed to Oracle on June 10, 2026. The vulnerability allows attackers to bypass authentication and execute arbitrary code on affected servers. Administrators must apply Oracle's latest security patches to mitigate the risk.",
            "source": "Zero Day Initiative - Blog",
            "sourceUrl": "https://www.thezdi.com/blog/2026/10/20/cve-2026-35273-ssrf-to-rce-in-oracle-peoplesoft",
            "relatedResources": []
        },
        {
            "date": "Nov 01 2026",
            "headline": "LXD Flaw Bypasses Private Keys—CVSS 10.0",
            "title": "Critical LXD and MicroCloud Flaw Lets Attackers Impersonate Trusted Clients",
            "content": "Canonical has disclosed a critical vulnerability in LXD and MicroCloud that allows attackers to impersonate trusted clients without possessing their private keys. The attacker must reach the HTTPS Application Programming Interface (API) over the network and possess the trusted client's public certificate to exploit the flaw. This critical issue, rated 10.0 on the Common Vulnerability Scoring System (CVSS), could lead to full system compromise with severe consequences for cloud infrastructure. Users are advised to update to the latest patched versions immediately and restrict API access to trusted networks. This vulnerability highlights the risks of improper certificate validation in complex container management systems.",
            "source": "The Hacker News",
            "sourceUrl": "https://thehackernews.com/2026/11/critical-lxd-and-microcloud-flaw-cvss.html",
            "relatedResources": []
        },
        {
            "date": "Nov 01 2026",
            "headline": "Northstar Secures $7M to Map Toxic Risk",
            "title": "Northstar Security Exits Stealth With $7M to Expose Toxic Risk Combinations",
            "content": "Northstar Security has exited stealth mode, securing $7 million in funding to combat complex cyber risks. The startup utilizes AI agents to map the connections between identities, assets, and vulnerabilities, identifying dangerous combinations that traditional tools miss. By analyzing these toxic risk combinations, the platform enables organizations to prioritize remediation efforts effectively. This approach addresses the growing challenge of risk correlation in modern, hybrid IT environments. Security leaders should evaluate platforms that offer contextual, AI-driven risk analysis to reduce alert fatigue and improve patch prioritization.",
            "source": "SecurityWeek",
            "sourceUrl": "https://www.securityweek.com/northstar-security-exits-stealth-with-7m-to-expose-toxic-risk-combinations/",
            "relatedResources": []
        },
        {
            "date": "Nov 01 2026",
            "headline": "$2.7M Polymarket Theft via Hijacked Script",
            "title": "Hackers Steal $2.7 Million From Polymarket Traders via Hijacked DebugBear Script",
            "content": "Hackers compromised the prediction market Polymarket, stealing approximately $2.7 million from 726 signed-in traders on October 29. The attackers achieved this by injecting malicious code into a page-speed script loaded from the external company DebugBear. The compromised script sold traders' positions and transferred the funds directly to the hackers' wallets. Polymarket has confirmed it is refunding all affected users and is investigating the supply-chain compromise. This incident highlights the critical security risks associated with third-party scripts and underscores the need for strict content security policies.",
            "source": "The Hacker News",
            "sourceUrl": "https://thehackernews.com/2026/11/hackers-steal-about-27-million-from.html",
            "relatedResources": []
        },
        {
            "date": "Nov 01 2026",
            "headline": "FBI Links $6.43B Binance Heist to North Korea",
            "title": "FBI Links North Korea's TraderTraitor to Record $6.43 Billion Binance Crypto Heist",
            "content": "The U.S. Federal Bureau of Investigation (FBI) has officially attributed a record $6.43 billion cryptocurrency theft to TraderTraitor, a North Korea-aligned advanced persistent threat (APT) group. This group is also tracked under aliases such as Jade Sleet, Pressure Chollima, PUKCHONG, Slow Pisces, and UNC4899, highlighting its long-standing, sophisticated operations. The heist targeted the Binance exchange, one of the world's largest cryptocurrency platforms, resulting in a massive loss of virtual assets. The FBI's attribution underscores the escalating threat of state-sponsored cybercrime targeting global financial infrastructure. Organizations in the crypto sector must enhance their transaction monitoring and threat intelligence capabilities to detect such large-scale thefts.",
            "source": "The Hacker News",
            "sourceUrl": "https://thehackernews.com/2026/11/fbi-links-north-koreas-tradertraitor-to.html",
            "relatedResources": []
        },
        {
            "date": "Nov 01 2026",
            "headline": "NetamLoader Hits Asia Government Windows 10",
            "title": "NetamLoader Malware Targets Government Windows 10 Systems in Asia",
            "content": "Cybersecurity researchers at Kaspersky have disclosed details of NetamLoader, a highly sophisticated malware strain targeting government organizations in Asia. The infection chain specifically targets a custom Windows 10 build used exclusively by government entities in the region. Attackers leverage .NET injection techniques to establish persistence and execute malicious payloads on these critical systems. This targeted activity highlights the growing threat of nation-state actors focusing on government infrastructure. Government IT teams must ensure strict patch management and network segmentation to defend against such tailored infection chains.",
            "source": "The Hacker News",
            "sourceUrl": "https://thehackernews.com/2026/11/netamloader-malware-targets-government.html",
            "relatedResources": []
        }
    ],
    "aiShorts": [
        {
            "date": "Nov 01 2026",
            "headline": "OpenAI Renames Data Centers to AI Compute Campuses",
            "title": "OpenAI Considers Rebranding Data Centers as 'AI Compute Campuses' to Improve Public Perception",
            "content": "OpenAI is exploring a rebranding of its data centers to \"AI compute campuses\" to mitigate the public and regulatory backlash against the energy-intensive infrastructure required for artificial intelligence. The new terminology aims to reframe these facilities as centers of innovation rather than purely industrial power-hungry assets. This move reflects a broader industry trend of managing the public relations challenges associated with massive AI hardware deployments. The company has not yet announced a formal transition or timeline for this potential rebranding.",
            "source": "TechCrunch",
            "sourceUrl": "https://techcrunch.com/2026/11/01/openai-might-rebrand-its-data-centers-as-ai-compute-campuses/",
            "relatedResources": []
        },
        {
            "date": "Nov 01 2026",
            "headline": "AI Equity: CEO Statements vs. Workforce Reality",
            "title": "AI Equity: Tech CEO Statements on AI's Benefits vs. Workforce Disruption",
            "content": "Tech executives frequently highlight how artificial intelligence simplifies operations for leadership, yet this perspective often overlooks the workforce-wide disruption and job displacement. The disparity between executive convenience and employee reality highlights a growing equity gap in the tech industry's AI transition. Developers and IT professionals are facing increased automation of routine tasks, requiring upskilling to remain relevant. Industry observers note this disconnect as a critical factor in managing employee morale and retention during rapid AI integration.",
            "source": "TechCrunch",
            "sourceUrl": "https://techcrunch.com/2026/11/01/ai-can-make-tech-ceos-lives-easier-what-about-everyone-else/",
            "relatedResources": []
        },
        {
            "date": "Oct 31 2026",
            "headline": "OpenAI Lowers Funding Target Amid Investor Hesitation",
            "title": "OpenAI Lowers Funding Target for New Round Amid Investor Skepticism",
            "content": "OpenAI has reportedly reduced its target valuation for a new funding round, signaling a shift in investor sentiment regarding the company's long-term revenue potential. The adjustment comes after initial discussions reportedly failed to generate the expected level of capital commitment. This development impacts OpenAI's ability to finance the massive computational costs of training and deploying its large language models. Investors are now demanding clearer paths to profitability before committing to the previously anticipated funding levels.",
            "source": "TechCrunch",
            "sourceUrl": "https://techcrunch.com/2026/10/31/openai-reportedly-lowers-funding-target-for-new-round/",
            "relatedResources": []
        },
        {
            "date": "Oct 31 2026",
            "headline": "Meta's AI Tamagotchi vs. Independent Developer",
            "title": "Meta's AI Tamagotchi vs. Independent Developer: The Holiday Charm War",
            "content": "Meta is preparing to sell its AI-powered \"Muse Charm,\" a physical Tamagotchi-style device designed to carry an AI companion, just ahead of the holiday season. The product follows a trend of making AI interfaces more tangible and emotionally engaging through physical hardware. Independent developers, however, are already creating similar AI pet experiences, indicating a rapidly growing market for interactive AI toys. Consumers are now faced with a choice between Meta's polished, integrated ecosystem and more experimental, independent alternatives.",
            "source": "The Verge",
            "sourceUrl": "https://www.theverge.com/gadgets/1013375/muse-charm-gadgets-preview-waveshare-esp32-claude-vibe-code",
            "relatedResources": []
        },
        {
            "date": "Oct 31 2026",
            "headline": "Nvidia Cosigns Nscale's $1B AI Data Center Loan",
            "title": "Nvidia Weighs Cosigning Nscale's $1B AI Data Center Loan in West Virginia",
            "content": "Nvidia is considering acting as a cosigner for a massive loan backing Nscale's new AI data center in West Virginia, a move designed to reassure nervous investors about the project's financial viability. This arrangement directly addresses recent market concerns regarding the return on investment for massive AI infrastructure spending. The partnership underscores the critical role of chip suppliers in stabilizing the broader AI hardware supply chain. Nscale's West Virginia facility is expected to house thousands of Nvidia GPUs to support enterprise AI workloads.",
            "source": "TechCrunch",
            "sourceUrl": "https://techcrunch.com/2026/10/30/nvidia-weighs-playing-the-cosigner-for-nscales-ai-data-center-in-west-virginia/",
            "relatedResources": []
        },
        {
            "date": "Oct 30 2026",
            "headline": "Privacy-Focused AI Assistant Ollie Shuts Down",
            "title": "Ollie AI Assistant Shuts Down After Privacy-Focused Model Fails to Compete",
            "content": "Ollie, an AI assistant designed to respect user privacy, is shutting down in one week as its founder concedes the market is flooded with less-private competitors. The assistant differentiated itself by processing user data locally, avoiding cloud-based data harvesting common in the industry. The closure signals a tough market for privacy-first AI startups facing pressure from larger, resource-rich tech giants. Developers and security professionals should note the end of this niche project as a consolidation trend in the consumer AI space.",
            "source": "TechCrunch",
            "sourceUrl": "https://techcrunch.com/2026/10/30/ollie-a-privacy-focused-ai-assistant-is-shutting-down/",
            "relatedResources": []
        },
        {
            "date": "Oct 30 2026",
            "headline": "Apple Intelligence Launches in China",
            "title": "Apple Intelligence Arrives in China with iOS 27.3 Beta",
            "content": "Apple will launch its Apple Intelligence suite in China with iOS 27.3, the company announced on its Chinese newsroom website. The AI features will be available first in an iOS 27.3 beta launching November 4th, followed by a full public release. This move expands Apple's on-device AI capabilities to one of its largest smartphone markets, though specific regional limitations remain. Users should update to the beta to test the new AI features, but wait for the stable release for critical functions.",
            "source": "The Verge",
            "sourceUrl": "https://www.theverge.com/tech/1023974/apple-intelligence-china-ios-27-3",
            "relatedResources": []
        },
        {
            "date": "Oct 30 2026",
            "headline": "OpenAI CEO Defends AI Math Output",
            "title": "OpenAI CEO Defends AI Math Results, Vows to Continue",
            "content": "OpenAI CEO Sam Altman expressed sympathy for mathematicians struggling with an influx of AI-generated research results, but stated the company will not halt its AI development. He hinted that OpenAI's stockpile of advanced models could yield even more significant mathematical breakthroughs in the future. This aggressive push into academic research is disrupting traditional peer-review processes and challenging human researchers. Security professionals should monitor for potential data poisoning or model manipulation in these automated outputs.",
            "source": "The Verge",
            "sourceUrl": "https://www.theverge.com/ai-artificial-intelligence/1023054/altman-cheeky-pint-ai-math-interview",
            "relatedResources": []
        },
        {
            "date": "Oct 30 2026",
            "headline": "Maine Data Center Protests Target AI",
            "title": "Maine Data Center Protests Highlight AI's Political Impact",
            "content": "Maine Sen. Susan Collins faced public backlash during a midterm debate over AI data centers' environmental impact, with a constituent shouting about climate and water poisoning. The protests reflect growing public concern over the massive energy and water consumption required to power large-scale AI infrastructure. This local political issue could influence national policy on data center construction and AI regulation. Voters and tech leaders should engage with local zoning and environmental policies regarding data center development.",
            "source": "The Verge",
            "sourceUrl": "https://www.theverge.com/ai-artificial-intelligence/1021080/maine-senate-race-susan-collins-ai-data-centers",
            "relatedResources": []
        },
        {
            "date": "Oct 30 2026",
            "headline": "OpenAI Adopts robots.txt for AI Training",
            "title": "OpenAI Adopts robots.txt for Website AI Training Preferences",
            "content": "OpenAI will now honor the shared robots.txt standard, allowing website operators to communicate their AI training preferences directly to participating providers. This standard enables site owners to specify which parts of their content AI crawlers can access and use for training data. The move provides a technical mechanism for content creators to control how their data is used by large language models. Webmasters should update their robots.txt files to opt out of AI training if they wish to protect their content.",
            "source": "OpenAI News",
            "sourceUrl": "https://openai.com/index/helping-websites-express-ai-training-preferences",
            "relatedResources": []
        },
        {
            "date": "Nov 01 2026",
            "headline": "AI Hiker Bots Cause Deadly Backcountry Misadventures",
            "title": "Critical Thinking Erosion by AI Planning Tools Leads to Dangerous Hiking Outcomes",
            "content": "Outsourcing trip planning to AI chatbots has led hikers to surrender their critical thinking, resulting in potentially fatal consequences in remote backcountry areas. These AI systems often generate inaccurate trail maps and unsafe route suggestions without real-time verification. The lack of human judgment in assessing weather, terrain, and personal physical limits creates a severe safety risk for users. Hikers must verify all AI-generated plans against authoritative local park services and weather reports before departure. This trend highlights a growing vulnerability as AI adoption increases in high-stakes, real-world navigation scenarios.",
            "source": "Artificial Intelligence Latest",
            "sourceUrl": "https://www.wired.com/story/chatbots-are-leading-hikers-astray-with-dangerous-consequences/",
            "relatedResources": []
        },
        {
            "date": "Oct 31 2026",
            "headline": "Apple CEO: We Don't Ship AI for AI's Sake",
            "title": "Apple CEO Defends Strategic AI Focus, Rejecting Unnecessary Feature Integration",
            "content": "Apple's new CEO defended the company's deliberate and measured approach to integrating artificial intelligence (AI) into its product ecosystem. He emphasized that Apple prioritizes practical utility and user benefit over deploying AI features solely for market competition. This stance reflects a strategic decision to avoid shipping AI functionalities that do not enhance core user experiences or solve tangible problems. The company is expected to continue focusing on on-device processing and privacy-centric AI models.",
            "source": "TechCrunch",
            "sourceUrl": "https://techcrunch.com/2026/10/31/apple-ceo-says-the-company-doesnt-want-to-ship-ai-for-ais-sake/",
            "relatedResources": []
        },
        {
            "date": "Oct 31 2026",
            "headline": "TechCrunch Summit: 4 Days Left for Early Bird Rates",
            "title": "TechCrunch Founder Summit in Boston Offers Networking and Startup Insights",
            "content": "TechCrunch's annual Founder Summit is scheduled for November 4 at Boston's SoWa Power Station, offering a full day of actionable insights and meaningful networking. The event is designed to help founders scale their ideas by connecting them with industry leaders and potential investors. Early bird registration is currently open, with prices set to increase at the door. Prospective attendees are advised to secure their spots immediately to take advantage of the current rates.",
            "source": "TechCrunch",
            "sourceUrl": "https://techcrunch.com/2026/10/31/4-days-left-how-techcrunch-founder-summit-helps-you-make-more-useful-connections-to-scale/",
            "relatedResources": []
        },
        {
            "date": "Oct 31 2026",
            "headline": "NAACP Clears Path for xAI Clean Air Act Lawsuit",
            "title": "NAACP Lawsuit Against xAI for Clean Air Act Violations Proceeds",
            "content": "A federal judge has allowed an NAACP lawsuit against xAI to move forward, rejecting the company's motion to dismiss. The lawsuit accuses the SpaceX-owned AI company of violating the Clean Air Act by contributing to air pollution at its massive data center. The legal action highlights growing environmental scrutiny of the AI industry's energy-intensive infrastructure. This ruling sets the stage for a trial to determine if xAI's data center operations have caused measurable environmental harm.",
            "source": "TechCrunch",
            "sourceUrl": "https://techcrunch.com/2026/10/31/judge-allows-naacp-lawsuit-over-xai-data-center-pollution-to-move-forward/",
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
            "cveId": "CVE-2026-118527",
            "dateAdded": "Oct 30, 2026",
            "vendor": "Ivanti Connect Secure",
            "description": "Ivanti Connect Secure contains a generation of predictable numbers or identifiers vulnerability that allows a remote authenticated attacker to upload files with attacker-controlled content to a known",
            "score": "HIGH",
            "status": "Confirmed",
            "source": "CISA KEV",
            "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-118527",
            "isZeroDay": false
        },
        {
            "cveId": "CVE-2026-111357",
            "dateAdded": "Oct 30, 2026",
            "vendor": "Ivanti Connect Secure",
            "description": "Ivanti Connect Secure contains a missing authentication for critical function vulnerability that could allow a local authenticated attacker to escalate their privileges. This vulnerability can be chai",
            "score": "HIGH",
            "status": "Confirmed",
            "source": "CISA KEV",
            "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-111357",
            "isZeroDay": false
        },
        {
            "cveId": "CVE-2026-97229",
            "dateAdded": "Oct 29, 2026",
            "vendor": "GitLab Community Edition and Enterprise Edition",
            "description": "GitLab Community Edition and Enterprise Edition contain a integer overflow or wraparound vulnerability that could allow an unauthenticated user to execute arbitrary code on the GitLab server via a spe",
            "score": "HIGH",
            "status": "Confirmed",
            "source": "CISA KEV",
            "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-97229",
            "isZeroDay": false
        },
        {
            "cveId": "CVE-2026-76418",
            "dateAdded": "Oct 29, 2026",
            "vendor": "Cisco Secure Firewall ASA Software and Cisco Secur",
            "description": "Cisco Secure Firewall ASA Software and Cisco Secure FTD Software contains an unchecked return value to NULL pointer dereference vulnerability that could allow an unauthenticated, remote attacker to ca",
            "score": "HIGH",
            "status": "Confirmed",
            "source": "CISA KEV",
            "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-76418",
            "isZeroDay": false
        },
        {
            "cveId": "CVE-2026-41709",
            "dateAdded": "Oct 28, 2026",
            "vendor": "Broadcom VMware ESX",
            "description": "Broadcom VMWare ESX contains an insufficient logging vulnerability that could allow a malicious actor with admin access to perform certain operations without being logged.",
            "score": "HIGH",
            "status": "Confirmed",
            "source": "CISA KEV",
            "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-41709",
            "isZeroDay": false
        },
        {
            "cveId": "CVE-2026-46300",
            "dateAdded": "Oct 28, 2026",
            "vendor": "Linux Kernel",
            "description": "Linux Kernel contains a missing initialization of a variable vulnerability that could allow for unintended modification of page-cache-backed data via failure to preserve the shared-fragment marker dur",
            "score": "HIGH",
            "status": "Confirmed",
            "source": "CISA KEV",
            "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-46300",
            "isZeroDay": false
        },
        {
            "cveId": "CVE-2026-48356",
            "dateAdded": "Oct 27, 2026",
            "vendor": "Adobe Commerce and Magento",
            "description": "Adobe Commerce and Magento contain an unrestricted upload of file with dangerous type vulnerability that could result in arbitrary code execution in the context of the current user, potentially gainin",
            "score": "HIGH",
            "status": "Confirmed",
            "source": "CISA KEV",
            "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-48356",
            "isZeroDay": false
        },
        {
            "cveId": "CVE-2026-111497",
            "dateAdded": "Oct 27, 2026",
            "vendor": "Google Brotli",
            "description": "Google Brotli contains an unchecked return value vulnerability that allows a remote unauthenticated attacker to corrupt adjacent decoder state memory, disclose sensitive memory contents, cause a denia",
            "score": "HIGH",
            "status": "Confirmed",
            "source": "CISA KEV",
            "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-111497",
            "isZeroDay": false
        }
    ],
    "featureCards": []
};