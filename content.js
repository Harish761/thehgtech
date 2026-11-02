// TheHGTech Website Content
// Update this file to change website content

const websiteContent = {
    "cyberShorts": [
        {
            "date": "Nov 02 2026",
            "headline": "Linux DDoS Botnet Exploits Unpatched Systems",
            "title": "Weekly Recap Highlights Critical CVEs, Linux DDoS Botnet, and Device-Code Phishing",
            "content": "This week's cybersecurity landscape featured a diverse array of threats, from low-effort social engineering to sophisticated botnets. A Linux-based botnet is actively targeting unpatched systems for distributed denial-of-service (DDoS) attacks. Concurrently, attackers are exploiting device-code phishing schemes and leveraging trusted browser extensions for unauthorized access. These incidents underscore the critical need for robust patch management and user education. Organizations must enforce strict endpoint security and continuously monitor for anomalous network traffic.",
            "source": "The Hacker News",
            "sourceUrl": "https://thehackernews.com/2026/11/weekly-recap-critical-cves-linux-ddos.html",
            "relatedResources": []
        },
        {
            "date": "Nov 02 2026",
            "headline": "Revolve Breach Exposes 180,000 Customers",
            "title": "Revolve Data Breach Impacts at Least 180,000 People",
            "content": "Hackers successfully infiltrated Revolve's online shopping platform, compromising the personal and payment card information of at least 180,000 customers. The breach highlights the ongoing risks associated with third-party e-commerce integrations and cloud infrastructure. Affected individuals are at high risk of financial fraud and targeted phishing campaigns. Revolve has initiated a forensic investigation and is notifying impacted users directly. Consumers should monitor their financial statements and enable two-factor authentication (2FA) on all accounts.",
            "source": "SecurityWeek",
            "sourceUrl": "https://www.securityweek.com/revolve-data-breach-impacts-at-least-180000-people/",
            "relatedResources": []
        },
        {
            "date": "Nov 02 2026",
            "headline": "Langflow Flaws Enable Unauthenticated RCE",
            "title": "Critical Langflow Flaws Could Let Unauthenticated Attackers Run Code on Servers",
            "content": "IBM identified two critical vulnerabilities in Langflow, an open-source AI workflow tool, that allow unauthenticated remote code execution (RCE) on servers. The flaws, tracked as CVE-2024-21213 and CVE-2024-21214, affect all versions from 1.0.0 through 1.12.8. A remote attacker can exploit these weaknesses to bypass authentication and execute arbitrary commands. Organizations using Langflow must upgrade to version 1.12.9 or later immediately. This incident highlights the growing security challenges within the AI development ecosystem.",
            "source": "The Hacker News",
            "sourceUrl": "https://thehackernews.com/2026/11/critical-langflow-flaws-could-let.html",
            "relatedResources": []
        },
        {
            "date": "Nov 02 2026",
            "headline": "40% of SOCs Use AI—Are They Ready?",
            "title": "Is Your SOC Ready for AI Agents? A Maturity Check Before You Deploy",
            "content": "A new survey reveals that 40% of security operations centers (SOCs) now use artificial intelligence (AI) daily, while 56% are actively testing it. With such rapid adoption, only 4% of surveyed organizations have no plans to implement AI-driven security tools. However, many teams lack the maturity to secure these new AI agents effectively. Security leaders must prioritize developing robust AI governance and threat modeling frameworks. Proactive security measures are essential to prevent AI agents from becoming attack vectors.",
            "source": "The Hacker News",
            "sourceUrl": "https://thehackernews.com/2026/11/is-your-soc-ready-for-ai-agents.html",
            "relatedResources": []
        },
        {
            "date": "Nov 02 2026",
            "headline": "Cursor Attack Deploys Malicious Claude Extension",
            "title": "Malicious Claude Code Extension Served in Cursor Supply Chain Attack",
            "content": "Attackers compromised the popular Cursor code editor to distribute a malicious extension impersonating Claude Code. The extension performed host reconnaissance and attempted to establish a reverse SSH tunnel to exfiltrate data. This supply chain attack highlights the risks of relying on third-party extensions and package repositories. Developers using Cursor must verify the integrity of their installed tools and review extension permissions. Organizations should enforce strict software supply chain security policies and monitor for unauthorized network connections.",
            "source": "SecurityWeek",
            "sourceUrl": "https://www.securityweek.com/malicious-claude-code-extension-served-in-cursor-supply-chain-attack/",
            "relatedResources": []
        },
        {
            "date": "Nov 02 2026",
            "headline": "AI Agents Breach Chainalysis—Data Leaked",
            "title": "Chainalysis Discloses Data Breach Following AI-Driven Cyberattack",
            "content": "Chainalysis disclosed a data breach after attackers utilized offensive agentic AI techniques to compromise the company's internal systems and tools. The attackers successfully exfiltrated sensitive data, including customer information and proprietary blockchain analytics. The incident highlights a growing trend where threat actors leverage autonomous AI systems to bypass traditional security controls. Organizations relying on advanced analytics platforms must review their access controls and monitoring protocols to mitigate similar risks.",
            "source": "SecurityWeek",
            "sourceUrl": "https://www.securityweek.com/chainalysis-discloses-data-breach-following-ai-driven-cyberattack/",
            "relatedResources": []
        },
        {
            "date": "Nov 02 2026",
            "headline": "Ivanti Patches 2 Zero-Days—CISA Adds to KEV",
            "title": "Ivanti Patches Two More Zero-Days Exploited in Connect Secure Attack Chain",
            "content": "Ivanti has released security patches for two additional zero-day vulnerabilities, CVE-2026-111357 and CVE-2026-118527, which were chained in attacks targeting its Connect Secure VPN appliances. The U.S. Cybersecurity and Infrastructure Security Agency (CISA) has added these flaws to its Known Exploited Vulnerabilities (KEV) catalog due to active exploitation. Attackers chain these flaws to achieve remote code execution, allowing them to compromise VPN infrastructure and pivot into internal networks. System administrators must immediately apply the latest Ivanti patches and audit their VPN logs for signs of intrusion.",
            "source": "SecurityWeek",
            "sourceUrl": "https://www.securityweek.com/ivanti-patches-two-more-zero-days-exploited-in-connect-secure-attack-chain/",
            "relatedResources": []
        },
        {
            "date": "Nov 02 2026",
            "headline": "Linux TCP Option Bug Enables 1-Byte DoS",
            "title": "Mutipath TCP: Use and Detection",
            "content": "A vulnerability in the Linux implementation of Multipath TCP (RFC 8684, CVE-2026-98432) allows an attacker to crash network connections using a single malformed byte. The flaw targets an often-ignored TCP option introduced in 2020, enabling a denial-of-service (DoS) attack that disrupts data transmission. This vulnerability affects all modern Linux distributions and can be exploited remotely without authentication. Network defenders should deploy detection signatures for anomalous TCP options and update their Linux kernels to mitigate the risk of connection-flooding attacks.",
            "source": "SANS Internet Storm Center",
            "sourceUrl": "https://isc.sans.edu/diary/rss/33482",
            "relatedResources": []
        },
        {
            "date": "Nov 02 2026",
            "headline": "Cursor Removes Malicious Claude Code Extension",
            "title": "Cursor removes malicious Claude Code extension after SSH backdoor attempt",
            "content": "Cursor, a popular AI-powered code editor, removed a malicious version of Anthropic’s Claude Code extension distributed via its marketplace. The compromised extension attempted to install a persistent Secure Shell (SSH) backdoor on developers' machines, granting attackers remote access to source code and credentials. This attack demonstrates how supply chain compromises in developer tools can directly threaten intellectual property and corporate networks. Developers must verify the integrity of all marketplace extensions and monitor for unauthorized SSH connections on their systems.",
            "source": "CSO Online",
            "sourceUrl": "https://www.csoonline.com/article/4243210/cursor-removes-malicious-claude-code-extension-after-ssh-backdoor-attempt.html",
            "relatedResources": []
        },
        {
            "date": "Nov 02 2026",
            "headline": "Google Takedowns 1.3M Device Android Botnet",
            "title": "Google Disrupts 1.3 Million-Device Android Botnet, Says TV Box Maker Sold Criminal Access",
            "content": "Google dismantled a massive Android botnet comprising over 1.3 million devices, primarily TV set-top boxes, by seizing its command-and-control servers. The company alleges that device manufacturer Videostrong intentionally embedded a backdoor in its hardware and sold remote access to criminal affiliates. This takedown prevented the botnet from executing large-scale distributed denial-of-service (DDoS) attacks and data theft operations. Users of Videostrong devices should immediately update their firmware to revoke any unauthorized remote access and disable remote management features.",
            "source": "The Hacker News",
            "sourceUrl": "https://thehackernews.com/2026/11/google-disrupts-13-million-device.html",
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
            "date": "Nov 02 2026",
            "headline": "$16M Deal: Omen AI Buys Aquatic Labs",
            "title": "Omen AI Acquires Aquatic Labs for $16 Million to Solve Data Center Water Crisis",
            "content": "Omen AI has acquired Aquatic Labs in a $16 million deal to consolidate expertise in liquid cooling for hyperscale data centers. The combined entity will integrate Aquatic Labs' thermal management algorithms with Omen AI's AI-driven predictive modeling to optimize water usage and prevent leaks. This move directly addresses the escalating water consumption of modern AI training clusters, which can use millions of gallons annually. The integration is expected to reduce water waste by up to 30% in partner facilities. Data center operators should evaluate Omen AI's combined platform for their next-generation cooling infrastructure.",
            "source": "TechCrunch",
            "sourceUrl": "https://techcrunch.com/2026/11/02/omen-ai-adds-liquid-know-how-in-16-million-aquatic-labs-acquisition/",
            "relatedResources": []
        },
        {
            "date": "Nov 02 2026",
            "headline": "Squarespace Cuts 19% of Workforce",
            "title": "Squarespace Restructures, Laying Off 19% of Employees",
            "content": "Website builder Squarespace is eliminating 19% of its workforce as part of a broader corporate restructuring. The layoffs impact approximately 400 employees across engineering, marketing, and support divisions globally. The company stated the cuts are designed to streamline operations and accelerate its pivot toward an AI-driven website builder platform. This represents one of the largest tech workforce reductions of 2026. Developers and marketers should monitor Squarespace's API stability and feature roadmap for potential service interruptions during this transition.",
            "source": "TechCrunch",
            "sourceUrl": "https://techcrunch.com/2026/11/02/web-host-squarespace-lays-off-19-of-its-employees/",
            "relatedResources": []
        },
        {
            "date": "Nov 02 2026",
            "headline": "NYT Sues Brave Over Content Scraping",
            "title": "New York Times Sues Brave Browser Over Alleged AI Content Scraping",
            "content": "The New York Times and other major publishers have filed a lawsuit against the privacy-focused Brave browser. The complaint alleges Brave unlawfully scraped copyrighted news content to train its AI models and distribute it to customers like Anthropic and Perplexity. This legal action highlights the growing friction between legacy media and AI companies over data usage rights. The outcome of this case will set a critical precedent for AI training data sourcing. Publishers and developers must closely track the litigation's impact on web scraping ethics and AI data acquisition strategies.",
            "source": "TechCrunch",
            "sourceUrl": "https://techcrunch.com/2026/11/02/new-york-times-and-other-outlets-sue-web-browser-brave-over-alleged-content-scraping/",
            "relatedResources": []
        },
        {
            "date": "Nov 02 2026",
            "headline": "Anthropic Bans Claude AI for Video Game Clones",
            "title": "Anthropic Updates Claude Code to Block Video Game Recreation",
            "content": "Anthropic has updated Claude Code's system prompt to prevent the AI tool from generating clones or decompilations of existing video games. The policy change targets the current surge in AI-made game ports and recompilations that violate intellectual property rights. While users can still discuss game mechanics, Claude Code will now refuse to write code that replicates proprietary game engines or assets. Retro gaming communities and developers should note this restriction, which aligns Claude Code with stricter IP enforcement. This shift reflects growing pressure on AI vendors to prevent copyright infringement in creative coding.",
            "source": "The Verge",
            "sourceUrl": "https://www.theverge.com/ai-artificial-intelligence/1024632/anthropic-claude-ai-video-game-clones",
            "relatedResources": []
        },
        {
            "date": "Nov 02 2026",
            "headline": "OpenAI Pilots Grid Protectors in Georgia",
            "title": "OpenAI Launches Grid Protectors Program in Georgia",
            "content": "OpenAI will pilot its \"Grid Protectors Program\" at an upcoming data center in Effingham County, Georgia, to enhance local grid resilience. The program promises to free up to 1,000 megawatts of power during extreme weather or emergencies, enough to power air conditioners for approximately 700,000 homes. This initiative addresses the massive energy demands of AI infrastructure, which is straining regional power grids. Local municipalities and utility providers should engage with OpenAI's grid integration plans to prevent brownouts. The pilot will serve as a blueprint for future AI facility deployments in high-demand regions.",
            "source": "The Verge",
            "sourceUrl": "https://www.theverge.com/ai-artificial-intelligence/1024604/openai-data-center-grid-protection-program",
            "relatedResources": []
        },
        {
            "date": "Nov 02 2026",
            "headline": "NYT Sues Brave—AI Scraping, Paywall Bypass",
            "title": "The New York Times and Other Publications File Lawsuit Against Brave Browser for AI Scraping and Paywall Bypass",
            "content": "The New York Times and other publishers have filed a lawsuit against Brave, alleging the browser unlawfully scrapes content to train AI models and allows users to bypass digital paywalls. The complaint specifically targets Brave's automated web scraping and its \"Brave Search\" AI summarization features. This legal action highlights the escalating conflict between traditional media and AI companies over intellectual property rights. Publishers face revenue erosion as AI systems replicate their content without compensation. Users should be aware that AI-driven browsers may operate in legally ambiguous gray areas regarding content access.",
            "source": "The Verge",
            "sourceUrl": "https://www.theverge.com/tech/1024588/brave-lawsuit-ai-scraping-new-york-times",
            "relatedResources": []
        },
        {
            "date": "Nov 02 2026",
            "headline": "42AI's $62.5M World Model Predicts Human Behavior",
            "title": "42AI Secures $62.5M to Launch a World Model That Predicts Human Behavior",
            "content": "French AI startup 42AI has emerged from stealth mode, raising $62.5 million to develop a world model capable of predicting human behavior in novel situations. The company's proprietary model aims to simulate complex decision-making processes, moving beyond traditional language prediction. This development signals a shift toward more advanced, reasoning-based AI architectures. The technology could impact sectors from autonomous driving to personalized healthcare. Developers and security professionals should monitor 42AI's progress for potential integration into enterprise systems.",
            "source": "TechCrunch",
            "sourceUrl": "https://techcrunch.com/2026/11/02/42ai-comes-out-of-stealth-with-62-5m-and-a-world-model-that-can-predict-human-behavior/",
            "relatedResources": []
        },
        {
            "date": "Nov 02 2026",
            "headline": "Musk Throttles Grok—Unsustainably High Costs",
            "title": "Elon Musk Imposes Grok Bot Limits Citing Unsustainably High Infrastructure Costs",
            "content": "Elon Musk has implemented usage throttling on xAI's Grok Bot, citing \"unsustainably high\" computational costs associated with its rapid user growth. The move directly impacts Grok's availability on X, limiting the number of prompts users can send. This decision underscores the significant financial burden of running large language models (LLMs) at scale. xAI must balance user demand with the high expenses of GPU clusters and data centers. Users should expect intermittent access to Grok features until xAI secures more efficient infrastructure.",
            "source": "TechCrunch",
            "sourceUrl": "https://techcrunch.com/2026/11/02/elon-musk-throttles-grok-bot-limits-due-to-unsustainably-high-costs/",
            "relatedResources": []
        },
        {
            "date": "Nov 02 2026",
            "headline": "OpenAI Launches Grid Protectors Program",
            "title": "OpenAI Launches Grid Protectors Program to Support Utility Grid Reliability",
            "content": "OpenAI has introduced the Grid Protectors Program, a new initiative to collaborate with utility companies on supporting grid reliability for future AI compute campuses. The program aims to mitigate the strain that massive data centers place on local power grids, protecting consumer electricity costs from volatile demand spikes. As AI training requires immense power, this proactive approach addresses a growing infrastructure bottleneck. The initiative will likely involve advanced grid monitoring and load-balancing technologies. Stakeholders in the energy and tech sectors should monitor this program for potential partnerships.",
            "source": "OpenAI News",
            "sourceUrl": "https://openai.com/index/grid-protectors-program",
            "relatedResources": []
        },
        {
            "date": "Nov 02 2026",
            "headline": "ChatGPT Merges Chat and Work Tabs",
            "title": "OpenAI Merges ChatGPT's Chat and Work Tabs into Unified Allocation Pool",
            "content": "OpenAI has announced the merging of ChatGPT's Chat and Work tabs, drawing usage from the same allocation pool under a new subscription tier. This change means that interactions with the standard ChatGPT and the advanced Codex coding assistant will share a common usage limit. The move aims to simplify the user interface and streamline resource management across OpenAI's platform. It may affect developers and power users who previously relied on separate, higher limits for Codex. Users should review their new usage metrics to avoid unexpected service interruptions.",
            "source": "TechCrunch",
            "sourceUrl": "https://techcrunch.com/2026/11/02/openai-is-finally-merging-chatgpts-chat-and-work-tabs/",
            "relatedResources": []
        },
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
            "date": "Nov 01 2026",
            "headline": "AI Hiker Bots Cause Deadly Backcountry Misadventures",
            "title": "Critical Thinking Erosion by AI Planning Tools Leads to Dangerous Hiking Outcomes",
            "content": "Outsourcing trip planning to AI chatbots has led hikers to surrender their critical thinking, resulting in potentially fatal consequences in remote backcountry areas. These AI systems often generate inaccurate trail maps and unsafe route suggestions without real-time verification. The lack of human judgment in assessing weather, terrain, and personal physical limits creates a severe safety risk for users. Hikers must verify all AI-generated plans against authoritative local park services and weather reports before departure. This trend highlights a growing vulnerability as AI adoption increases in high-stakes, real-world navigation scenarios.",
            "source": "Artificial Intelligence Latest",
            "sourceUrl": "https://www.wired.com/story/chatbots-are-leading-hikers-astray-with-dangerous-consequences/",
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