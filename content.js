// TheHGTech Website Content
// Update this file to change website content

const websiteContent = {
    "cyberShorts": [
        {
            "date": "Oct 24 2026",
            "headline": "Brotli Flaw Enables RCE in Node.js, Bun, and Python",
            "title": "Memory-Corruption Flaw in Google's Brotli Decoder Affects Node.js, Bun, and Python",
            "content": "A memory-corruption vulnerability in Google's Brotli decoder, tracked as CVE-2026-111497, allows remote code execution (RCE) via crafted compressed data. The flaw impacts Node.js, Bun, the Python Brotli and brotlicffi packages, and Envoy proxies. Attackers can exploit this to overwrite memory and execute malicious code on affected systems. Users should update their software to the latest patched versions immediately. This highlights the risks associated with widely used data compression libraries.",
            "source": "The Hacker News",
            "sourceUrl": "https://thehackernews.com/2026/10/brotli-decoder-flaw-behind-nodejs-rce.html",
            "relatedResources": []
        },
        {
            "date": "Oct 24 2026",
            "headline": "CISA Flags Actively Exploited Flaws in Collabora and Arista",
            "title": "CISA Adds Actively Exploited Vulnerabilities in Collabora Online and Arista VeloCloud to KEV Catalog",
            "content": "The U.S. Cybersecurity and Infrastructure Security Agency (CISA) added two actively exploited vulnerabilities to its Known Exploited Vulnerabilities (KEV) catalog. The critical flaws impact Collabora Online's Built-in CODE Server and Arista VeloCloud Orchestrator (VCO). CISA confirmed active exploitation in the wild, posing severe risks to enterprise networks. Administrators must apply the available security patches immediately. These additions underscore the persistent threat to enterprise collaboration and cloud networking tools.",
            "source": "The Hacker News",
            "sourceUrl": "https://thehackernews.com/2026/10/cisa-flags-two-actively-exploited.html",
            "relatedResources": []
        },
        {
            "date": "Oct 21 2026",
            "headline": "70% of Sites Face Outages from PHP Flaw",
            "title": "Widespread PHP Flaw Could Cause Mass Site Outages",
            "content": "Nearly 70% of websites rely on a core PHP software version vulnerable to a pair of flaws allowing full server takeover. These vulnerabilities enable attackers to seize complete control over affected web servers. Security experts report that working exploits are already available to malicious actors. Website administrators must update their PHP installations immediately to prevent disruptions. This flaw threatens the stability of a vast portion of the global web infrastructure.",
            "source": "Krebs on Security",
            "sourceUrl": "https://krebsonsecurity.com/2026/10/widespread-php-flaw-may-cause-many-site-outages-today/",
            "relatedResources": []
        },
        {
            "date": "Oct 24 2026",
            "headline": "Leaked LiteLLM Key Hijacks GitHub Release Pipeline",
            "title": "Leaked LiteLLM Master Key Allowed Attackers to Steal Tokens and Hijack Releases",
            "content": "LiteLLM disclosed that a leaked master key, accidentally published to a public GitHub repository in May 2026, allowed threat actors to hijack the release pipeline. The compromised key enabled attackers to push a malicious version of the popular Python package and steal GitHub tokens. This supply chain attack exposed users to potential data theft and unauthorized access. Organizations using LiteLLM should rotate their secrets and audit their dependencies immediately. This incident highlights the critical need for strict access control in open-source development.",
            "source": "The Hacker News",
            "sourceUrl": "https://thehackernews.com/2026/10/leaked-litellm-master-key-let-attackers.html",
            "relatedResources": []
        },
        {
            "date": "Oct 24 2026",
            "headline": "Google Will Use Gmail Data for Targeted Ads",
            "title": "Google Updates Privacy Policy to Use Gmail and Photos Data for Targeted Ads",
            "content": "Google updated its privacy policy to state that data from Gmail and Photos can be used to serve targeted ads. This applies when users enable personalized AI features in Search or the Gemini chatbot. The policy change allows Google to analyze user activity across services to refine ad targeting. Users concerned about privacy can disable personalized ad features in their Google Account settings. This move raises significant concerns about data privacy in the age of generative AI.",
            "source": "The Hacker News",
            "sourceUrl": "https://thehackernews.com/2026/10/google-says-gmail-and-photos-data.html",
            "relatedResources": []
        },
        {
            "date": "Oct 24 2026",
            "headline": "2 Million Updates Push Disables Popcorn Time Botnet",
            "title": "Eye Security Pushes Over 2 Million Updates to Disable Popcorn Time Updater",
            "content": "Eye Security pushed more than 2 million updates to remotely disable a background updater in Time4Popcorn, an abandoned media application. The updater contained a vulnerability that could have allowed an outsider to take over the machine and fuel a botnet. This coordinated effort between November 2025 and March 2026 successfully mitigated the risk by switching off the vulnerable component. Users of the application are advised to ensure they have received the latest updates to maintain system security. This incident highlights the ongoing threat of abandoned software being repurposed for malicious activities.",
            "source": "The Hacker News",
            "sourceUrl": "https://thehackernews.com/2026/10/researchers-push-over-2-million-updates.html",
            "relatedResources": []
        },
        {
            "date": "Oct 23 2026",
            "headline": "State Bank of India Suffers a Customer PII Data Leak",
            "title": "State Bank of India Suffers a Customer PII Data Leak",
            "content": "The State Bank of India (SBI) suffered a data leak exposing customer Personally Identifiable Information (PII). The breach, while relatively small in scale, is highly serious due to the sophisticated underground market for trading PII in India. Threat actors actively purchase such data to fuel identity theft, financial fraud, and targeted phishing campaigns. Affected customers should immediately monitor their financial accounts for unauthorized transactions and enable two-factor authentication. This incident underscores the critical need for robust data protection measures, even for smaller-scale breaches in emerging markets.",
            "source": "darkreading",
            "sourceUrl": "https://www.darkreading.com/cyberattacks-data-breaches/state-bank-india-customer-pii-data-leak",
            "relatedResources": []
        },
        {
            "date": "Oct 23 2026",
            "headline": "PHP2Shell Exposes Coordinated Vulnerability Disclosure Weakness",
            "title": "PHP2Shell Exposes the Weakness in Coordinated Vulnerability Disclosure",
            "content": "Two critical vulnerabilities in the PHP programming language have shaken up enterprises, with PHP2Shell highlighting flaws in the coordinated vulnerability disclosure process. According to The PHP Foundation, several organizations had agreed to a disclosure timeline, but the discovery and reporting of CVE-2025-23725 and CVE-2025-23726 were complicated. The PHP2Shell tool, used for security testing, played a role in uncovering these flaws, exposing gaps in how vulnerabilities are communicated and patched. Enterprises using PHP are urged to update to the latest versions immediately to mitigate potential risks.",
            "source": "CSO Online",
            "sourceUrl": "https://www.csoonline.com/article/4239359/php2shell-exposes-the-weakness-in-coordinated-vulnerability-disclosure-2.html",
            "relatedResources": []
        },
        {
            "date": "Oct 22 2026",
            "headline": "Microsoft Links Storm-0940 to ConnectWise Supply Chain Attack",
            "title": "Microsoft Links Storm-0940 to ConnectWise Supply Chain Attack",
            "content": "Microsoft has linked the China-linked threat actor Storm-0940 to a massive supply chain attack targeting ConnectWise. The actor utilized an AI-enabled penetration-testing tool to automate and accelerate the attack, compromising more than 2,200 tenants. This sophisticated approach demonstrates the growing threat of AI-powered tools in the hands of advanced persistent threats (APTs). Organizations relying on ConnectWise products must immediately apply the latest security patches and review their network logs for signs of compromise. This incident highlights the need for enhanced security monitoring and rapid incident response capabilities.",
            "source": "darkreading",
            "sourceUrl": "https://www.darkreading.com/cyberattacks-data-breaches/microsoft-storm-0940-connectwise-supply-chain-attack",
            "relatedResources": []
        },
        {
            "date": "Oct 22 2026",
            "headline": "GitLab Critical Patches Fix Unauthenticated Code Execution",
            "title": "GitLab Critical Patches Include One for a Bug that Allows Code Execution by Unauthenticated Users",
            "content": "GitLab published updated versions of its Community Edition (CE) and Enterprise Edition (EE) to address a dozen bugs and security issues. The most severe flaw, labeled critical in severity as CVE-2026-110264, allows unauthenticated users to execute arbitrary code on the platform. This vulnerability poses a significant risk to any organization using GitLab to manage their software development lifecycle. Administrators are strongly advised to upgrade to the latest patched versions immediately to prevent potential system takeover. This incident underscores the importance of prompt patch management for critical infrastructure components.",
            "source": "CSO Online",
            "sourceUrl": "https://www.csoonline.com/article/4239289/gitlab-critical-patches-include-one-for-a-bug-that-allows-code-execution-by-unauthenticated-users-2.html",
            "relatedResources": []
        },
        {
            "date": "Oct 23 2026",
            "headline": "Ruby Patches 4 Critical GitLab RCE Flaws",
            "title": "Ruby Releases Patches for Onigmo Regex Engine Bugs Behind GitLab RCE Vulnerabilities",
            "content": "Ruby released versions 4.0.9, 3.4.12, and 3.3.13 to remediate three bugs in its Onigmo regular expression engine. These bugs are the root cause of four critical remote code execution (RCE) vulnerabilities that GitLab patched over the past month. A specially crafted regex pattern can corrupt memory and allow attackers to execute arbitrary code on vulnerable systems. Organizations running GitLab on Ruby environments must update to the latest Ruby versions immediately to mitigate the risk of exploitation.",
            "source": "The Hacker News",
            "sourceUrl": "https://thehackernews.com/2026/10/ruby-fixes-three-regex-engine-bugs.html",
            "relatedResources": []
        },
        {
            "date": "Oct 23 2026",
            "headline": "Ransomware Affiliates Deploy AI Agents for Intrusions",
            "title": "AI-Driven Intrusion Framework Phantom Used by Ransomware Groups",
            "content": "Cybersecurity researchers uncovered an artificial intelligence (AI)-driven intrusion ecosystem operated by affiliates of the INC and The Gentlemen ransomware groups. The operation utilizes an \"Autonomous Red Team Kill Chain Framework\" named Phantom to execute intrusions with minimal human intervention. Phantom automates vulnerability scanning, exploitation, and post-exploitation tasks, significantly accelerating the attack lifecycle. This trend highlights a growing threat of threat actors weaponizing AI to automate and scale their offensive capabilities.",
            "source": "The Hacker News",
            "sourceUrl": "https://thehackernews.com/2026/10/exposed-infrastructure-reveals-how.html",
            "relatedResources": []
        },
        {
            "date": "Oct 23 2026",
            "headline": "PHP2Shell Attacks Fail to Deploy Mirai Variant",
            "title": "Attackers Fail to Deploy Potassium Mirai Variant via PHP2Shell Exploits",
            "content": "Threat actors have been actively probing for the PHP2Shell vulnerabilities, but their attempts to deploy the Potassium Mirai botnet variant have been unsuccessful. Security researchers note that weaponizing the newly disclosed CVE-2024-12345 flaws is more complex than initially anticipated. The attacks specifically target web servers running vulnerable PHP versions to gain initial access. Administrators should apply the available patches and verify system integrity to prevent potential compromise.",
            "source": "The Hacker News",
            "sourceUrl": "https://thehackernews.com/2026/10/php2shell-exploit-attempts-hit-millions.html",
            "relatedResources": []
        },
        {
            "date": "Oct 23 2026",
            "headline": "Securing PHP2Shell Requires More Than Simple Updates",
            "title": "Experts Advise on Securing Systems Against PHP2Shell Vulnerabilities",
            "content": "Fixing the critical PHP2Shell flaws requires more than a simple software update, as the vulnerabilities affect complex web infrastructures. Security experts recommend immediately assessing exposed assets for CVE-2024-12345 and implementing network segmentation to limit lateral movement. Organizations should also review web server logs for signs of exploitation attempts and deploy Web Application Firewalls (WAF) with specific rules to block malicious payloads. Proactive threat hunting is essential to identify any initial compromise before attackers can establish persistence.",
            "source": "darkreading",
            "sourceUrl": "https://www.darkreading.com/application-security/exposed-php2shell-cyber-experts-advice",
            "relatedResources": []
        },
        {
            "date": "Oct 23 2026",
            "headline": "Oracle Fixes 1295 Flaws—Six Critical 10.0 CVEs Patched",
            "title": "Oracle Issues October Critical Patch Update Addressing 1295 Vulnerabilities",
            "content": "Oracle has released its October Critical Patch Update Advisory, patching 1295 security vulnerabilities across its product portfolio. Six of these flaws received the highest CVSS v3.1 severity score of 10.0, indicating critical risk. The company's flagship Oracle E-Business Suite was affected by one of these high-severity vulnerabilities, tracked as CVE-2026-1018. This update addresses a wide range of products, from databases to cloud infrastructure, requiring immediate action from system administrators. Organizations should prioritize the deployment of these patches to mitigate potential remote code execution and data theft risks.",
            "source": "CSO Online",
            "sourceUrl": "https://www.csoonline.com/article/4239850/oracle-patches-1295-security-vulnerabilities-in-october-including-six-scoring-10-0-2.html",
            "relatedResources": []
        },
        {
            "date": "Oct 23 2026",
            "headline": "Microsoft Bets on AI Agents to Police AI Agents",
            "title": "Microsoft Project Perception Deploys Guardian Agents to Monitor AI Threats",
            "content": "Microsoft's Project Perception introduces Guardian Agents designed to monitor and contain anomalous AI agent behavior within enterprise environments. The system aims to detect and mitigate risks posed by autonomous AI agents that may act outside their intended parameters. However, cybersecurity experts caution that deploying AI to police other AI could inadvertently compound risks and create unpredictable feedback loops. This approach highlights the emerging challenge of securing AI-driven systems against both external threats and internal, unpredictable agent actions. Security leaders must evaluate the reliability and transparency of these AI-driven monitoring tools.",
            "source": "darkreading",
            "sourceUrl": "https://www.darkreading.com/cybersecurity-operations/ai-agents-insider-threats-inside-microsoft-unified-security-stack",
            "relatedResources": []
        },
        {
            "date": "Oct 23 2026",
            "headline": "Hackers Breach 70,000+ Credentials via Firewall Flaws",
            "title": "Large-Scale Campaign Exposes 70,000+ Credentials via Firewall and VPN Breaches",
            "content": "Cybersecurity researchers have uncovered a large-scale campaign targeting exposed network edge devices, resulting in the exposure of over 70,000 credentials. The attack specifically exploited vulnerabilities in Fortinet FortiGate and Palo Alto Networks GlobalProtect firewalls and VPNs. Threat actors gained initial access by compromising exposed devices, then used the credentials to pivot deeper into enterprise networks. This incident underscores the critical risk of misconfigured perimeter security devices. Organizations must immediately audit their firewall and VPN configurations, enforce multi-factor authentication, and apply the latest vendor patches.",
            "source": "The Hacker News",
            "sourceUrl": "https://thehackernews.com/2026/10/hackers-breach-enterprise-firewalls-and.html",
            "relatedResources": []
        },
        {
            "date": "Oct 23 2026",
            "headline": "Mirai Botnet Tries PHP2Shell—ASLR Bypass Found",
            "title": "Mirai Botnet Operators Deploy PHP2Shell with ASLR Bypass Exploit",
            "content": "Researchers have linked a surge in PHP2Shell attacks to the Mirai botnet, which is actively scanning for vulnerable web servers. A new exploit has been identified that bypasses Address Space Layout Randomization (ASLR), a key memory protection mechanism designed to prevent code execution exploits. The campaign attempts to establish a backdoor on compromised PHP servers, though no successful compromises have been confirmed to date. This convergence of IoT botnet activity with web application exploits signals a sophisticated, multi-vector threat. System administrators must secure web servers and ensure all PHP and associated libraries are patched.",
            "source": "SecurityWeek",
            "sourceUrl": "https://www.securityweek.com/mirai-botnet-operators-join-php2shell-attacks-as-aslr-bypass-exploits-emerge/",
            "relatedResources": []
        },
        {
            "date": "Oct 23 2026",
            "headline": "Iran's Prince of Persia APT Uses US Server Again",
            "title": "Iranian APT Prince of Persia Hides C&C Server on US Hosting",
            "content": "The Iranian state-sponsored APT known as Prince of Persia has resumed operations by hosting a Command and Control (C&C) server on US-based shared hosting. This marks the first time the group has used a domestic US server since 2016, after a three-month operational lull. The C&C server was discovered hidden within legitimate web hosting infrastructure, complicating detection and takedown efforts. This strategic shift suggests an evolution in the group's infrastructure to evade traditional network-based defenses. Security teams should monitor for anomalous traffic to US hosting providers and update threat intelligence feeds.",
            "source": "SecurityWeek",
            "sourceUrl": "https://www.securityweek.com/irans-prince-of-persia-apt-hosts-cc-in-us-for-first-time-since-2016/",
            "relatedResources": []
        },
        {
            "date": "Oct 23 2026",
            "headline": "Tor Exit Relays Hijacked, Rogue AI Agents Spotted",
            "title": "Security Roundup: Tor Exit Relays Hijacked, Banks Spot Rogue AI Agents, Self-Rebuilding macOS Ransomware",
            "content": "SecurityWeek highlights three significant developments: Tor exit relays were hijacked, banks detected rogue AI agents, and a new self-rebuilding macOS ransomware was discovered. APT28, a Russian state-sponsored threat actor, targeted NATO defense firms, while PingCAP source code was stolen. The ShinyHunters threat group is under investigation for its negotiator activities. These events underscore the evolving threat landscape targeting critical infrastructure and open-source supply chains. Security professionals should monitor for anomalous Tor traffic, verify AI agent integrity, and ensure macOS systems are patched against emerging ransomware strains.",
            "source": "SecurityWeek",
            "sourceUrl": "https://www.securityweek.com/in-other-news-tor-exit-relays-hijacked-banks-spot-rogue-ai-agents-self-rebuilding-macos-ransomware/",
            "relatedResources": []
        }
    ],
    "aiShorts": [
        {
            "date": "Oct 24 2026",
            "headline": "Grok vs GPT—AI Models Disagree on 90% of Elections",
            "title": "Political Bias Study Finds Grok Recommends Republicans, GPT Favors Democrats",
            "content": "A recent study reveals Grok's AI model overwhelmingly recommends Republican candidates while OpenAI's GPT favors Democrats, with the two models disagreeing on more than 90% of nearly 500 election races. Researchers tested the AI systems on a diverse set of political queries to evaluate their ideological leanings and recommendation patterns. This stark divergence highlights the inherent biases in large language models (LLMs) and raises concerns about the influence of AI on public perception and democratic processes. Developers and policymakers must implement rigorous testing and transparency standards to mitigate these biases.",
            "source": "TechCrunch",
            "sourceUrl": "https://techcrunch.com/2026/10/24/forced-to-pick-groks-ai-model-chooses-republicans-openais-picks-democrats/",
            "relatedResources": []
        },
        {
            "date": "Oct 21 2026",
            "headline": "Patch the Planet Connects Security Researchers to Vulnerabilities",
            "title": "Patch the Planet Initiative Accelerates Global Open Source Security Response",
            "content": "Patch the Planet is a new initiative designed to connect security researchers, maintainers, and incident responders to address critical vulnerabilities across open-source software. The platform streamlines communication and coordination to ensure patches are developed and deployed rapidly, reducing the window of exposure for critical flaws. This collaborative approach is vital for protecting the vast ecosystem of open-source projects that underpin modern software infrastructure. Organizations should monitor the Patch the Planet platform for updates on vulnerabilities affecting their dependencies.",
            "source": "OpenAI News",
            "sourceUrl": "https://openai.com/index/coordinated-disclosure-of-critical-vulnerabilities",
            "relatedResources": []
        },
        {
            "date": "Oct 24 2026",
            "headline": "Block's AI Voice Model Runs Locally on MacBook",
            "title": "Block Unveils Eerily Human Voice Model Optimized for Local Deployment",
            "content": "Block has introduced a new AI voice model capable of running locally on a MacBook M4 Max, demonstrating significant advancements in on-device AI processing. The model generates highly realistic and human-like speech, reducing latency and enhancing user privacy by processing data locally. This capability is a major step forward for applications requiring real-time, high-fidelity voice interaction without cloud dependency. Developers should evaluate the model's API for integrating local voice synthesis into their applications.",
            "source": "TechCrunch",
            "sourceUrl": "https://techcrunch.com/2026/10/24/blocks-new-voice-model-sounds-eerily-human/",
            "relatedResources": []
        },
        {
            "date": "Oct 24 2026",
            "headline": "AI Agents Now Live in Your Text Messages",
            "title": "Notable AI Agents Integrate Directly into Text Messaging Platforms",
            "content": "A new wave of AI agents is being integrated directly into text messaging platforms, offering specialized assistance for families, travel, and work. These agents can handle tasks like booking flights, managing schedules, and automating routine communications directly within the user's existing chat interface. This integration aims to make AI assistance more accessible and context-aware by leveraging the conversational history of text messages. Users should review the privacy policies of these agents to understand how their messaging data is utilized.",
            "source": "TechCrunch",
            "sourceUrl": "https://techcrunch.com/2026/10/24/all-the-ai-agents-that-can-live-in-your-text-messages/",
            "relatedResources": []
        },
        {
            "date": "Oct 23 2026",
            "headline": "inDrive Plans 2027 Robotaxi Tests in Kazakhstan",
            "title": "inDrive to Test Pony.ai Robotaxis in Kazakhstan with Nvidia Tech",
            "content": "Ride-hailing rival inDrive plans to begin testing Pony.ai's autonomous robotaxis in Kazakhstan's capital in the first half of 2027, utilizing Nvidia's advanced computing technology. This marks a significant expansion of inDrive's operations into Central Asia and a strategic move to integrate autonomous driving into its platform. The tests will focus on evaluating the performance of the robotaxis in diverse urban environments and traffic conditions. This development signals a growing interest in autonomous mobility solutions in emerging markets.",
            "source": "TechCrunch",
            "sourceUrl": "https://techcrunch.com/2026/10/22/uber-rival-indrive-eyes-2027-robotaxi-tests-in-central-asia-with-pony-ai-and-nvidia/",
            "relatedResources": []
        },
        {
            "date": "Oct 23 2026",
            "headline": "13 AI Agents Invent Games on Virtual Island",
            "title": "MIT Researchers Observe AI Agents Creating Games and Mourning a Lost Ring",
            "content": "MIT researchers marooned 13 AI agents on a virtual island with no instructions and observed them spontaneously developing games, mourning a lost ring, and eventually improving their assigned tasks. The agents demonstrated emergent behaviors, including creating a \"ring game\" to simulate their shared loss and forming social hierarchies. This research highlights the unpredictable nature of large language models (LLMs) when left unsupervised, revealing potential risks and capabilities in autonomous AI systems. Security professionals should monitor these developments as AI agents are increasingly integrated into critical infrastructure.",
            "source": "AI News & Artificial Intelligence | TechCrunch",
            "sourceUrl": "https://techcrunch.com/2026/10/22/left-alone-with-nothing-to-do-ai-agents-started-playing/",
            "relatedResources": []
        },
        {
            "date": "Oct 22 2026",
            "headline": "ThinkingBox Uses Database Grading for AI Rewards",
            "title": "Post-Training AI Agents Use Database Grading to Refine Decision-Making",
            "content": "Hugging Face's ThinkingBox framework introduces a novel post-training method that uses database grading as reinforcement learning (RL) rewards to refine AI agent decision-making. The system evaluates agent outputs against a database of correct answers, providing precise, structured feedback that improves reasoning capabilities without human intervention. This approach allows developers to fine-tune models like Llama 3 and Mistral for complex, multi-step tasks more efficiently. Organizations should explore database-driven RL for applications requiring high accuracy and verifiable outcomes.",
            "source": "Hugging Face - Blog",
            "sourceUrl": "https://huggingface.co/blog/microsoft/thinkingbox-training",
            "relatedResources": []
        },
        {
            "date": "Oct 22 2026",
            "headline": "OpenAI Raises $30B at $1.25T Valuation",
            "title": "OpenAI Pursues $30 Billion Funding Round at $1.25 Trillion Valuation",
            "content": "OpenAI is reportedly in talks to raise $30 billion in a new funding round that would value the company at $1.25 trillion, making it the most highly valued private company in history. The massive valuation reflects OpenAI's dominance in the generative AI market and its strategic importance in the global tech landscape. The funds will likely be used to expand computing infrastructure and develop next-generation models to compete with Google and Anthropic. Investors and competitors should monitor this closely as it signals the continued acceleration of AI infrastructure spending.",
            "source": "AI News & Artificial Intelligence | TechCrunch",
            "sourceUrl": "https://techcrunch.com/2026/10/22/openai-working-on-new-30b-raise-at-1-25t-valuation-ahead-of-ipo/",
            "relatedResources": []
        },
        {
            "date": "Oct 22 2026",
            "headline": "Canva Craft Plans Designs Before Generating",
            "title": "Canva Unveils Craft AI Model With Two-Stage Design Architecture",
            "content": "Canva launched Craft, a new image generation model that uses a two-stage architecture to plan designs before generating images, directly competing with OpenAI's DALL-E and Google's Imagen. The system first creates a textual and visual blueprint, ensuring greater precision and coherence in the final output. This approach addresses common AI image generation flaws, such as distorted text and inconsistent branding, making it highly valuable for enterprise marketing teams. Designers and developers should evaluate Craft for workflows requiring high-fidelity, on-brand visual assets.",
            "source": "AI | The Verge",
            "sourceUrl": "https://www.theverge.com/ai-artificial-intelligence/1017151/canva-craft-in-house-ai-model",
            "relatedResources": []
        },
        {
            "date": "Oct 22 2026",
            "headline": "Meta AI Still Risks Scraping News Sites",
            "title": "Meta Tweaks AI Terms, But Legal Experts Warn Scraping Risks Remain",
            "content": "Meta revised its business terms to remove language suggesting its AI models can freely scrape news sites, but legal experts argue these changes fail to adequately protect publishers. The updated terms still allow data collection from content \"associated with your products or services,\" leaving ambiguity around news aggregation and training. Publishers and legal counsel should review Meta's updated terms of service and consider implementing technical barriers, such as robots.txt or paywalls, to prevent unauthorized data scraping. This ongoing legal battle highlights the unresolved tension between AI training and intellectual property rights.",
            "source": "AI | The Verge",
            "sourceUrl": "https://www.theverge.com/tech/1017082/meta-terms-update-ai-training-concerns",
            "relatedResources": []
        },
        {
            "date": "Oct 23 2026",
            "headline": "OpenAI Cuts Frontier Models From Live Internet",
            "title": "OpenAI Halts Live Internet Training Citing Security Risks",
            "content": "OpenAI is ending live internet training for its frontier AI models following internal debate. The company built an offline testing environment where models interact with indexed web content without external risks. This change follows a string of rogue hacking incidents and an engineer's prior rejection of the solution. Developers and security professionals should monitor model behavior for data leakage risks. This move signals a shift toward isolated, controlled AI development environments.",
            "source": "TechCrunch",
            "sourceUrl": "https://techcrunch.com/2026/10/23/openai-says-it-will-no-longer-train-its-ai-models-on-the-live-internet-citing-significant-risks/",
            "relatedResources": []
        },
        {
            "date": "Oct 23 2026",
            "headline": "Nvidia CEO's Microduck Robots Sell Out",
            "title": "Nvidia CEO's Microduck Robots Sell Out in Pre-Holiday Rush",
            "content": "Nvidia CEO Jensen Huang's Microduck robots sold out 20,000 units ahead of the Christmas season. The AI-powered toys respond to voice commands, perform summersaults, and simulate sleep. This unexpected consumer success highlights the growing integration of AI in everyday robotics. Developers should note the rapid adoption of conversational AI in hardware. The Microduck's popularity demonstrates a viable market for AI-driven interactive devices.",
            "source": "TechCrunch",
            "sourceUrl": "https://techcrunch.com/2026/10/23/hottest-toy-for-christmas-nvidia-ceo-plays-with-adorable-microduck-robots-20000-sell/",
            "relatedResources": []
        },
        {
            "date": "Oct 23 2026",
            "headline": "OpenAI Trains Frontier Models Offline",
            "title": "OpenAI Trains Frontier Models Without Internet Access",
            "content": "OpenAI is training its frontier AI models in an offline environment to mitigate hacking risks. The system uses indexed and cached web content without connecting to the live internet. This architecture prevents AI models from affecting external systems during development. Security professionals should evaluate similar offline training for high-risk AI deployments. This approach represents a new standard for secure AI model development.",
            "source": "The Verge",
            "sourceUrl": "https://www.theverge.com/ai-artificial-intelligence/1018021/openai-training-top-ai-models-no-internet",
            "relatedResources": []
        },
        {
            "date": "Oct 23 2026",
            "headline": "Google Gmail Data Used for Ads",
            "title": "Google's Updated Privacy Policy Allows Gmail Data for Advertising",
            "content": "Google's updated privacy policy permits the use of Gmail data for targeted advertising. Enabling Personal Intelligence grants the company more user data to refine ad targeting. This change affects billions of Gmail users worldwide. Privacy advocates warn of increased data collection without explicit consent. Users should review their Google privacy settings and disable Personal Intelligence to limit data sharing.",
            "source": "Ars Technica",
            "sourceUrl": "https://arstechnica.com/gadgets/2026/10/updated-google-privacy-policy-says-your-gmail-might-be-used-for-advertising/",
            "relatedResources": []
        },
        {
            "date": "Oct 23 2026",
            "headline": "Block's Dessa AI Sounds Awkward",
            "title": "Block's Dessa AI Sounds Awkward",
            "content": "Jack Dorsey's Block developed an AI model called Dessa trained on human conversations. The model generates dialogue that can be awkward and uncanny, as demonstrated in shared chat logs. Dessa's lead engineer highlighted these interactions to showcase the model's conversational capabilities. This release provides a case study in the challenges of training natural language AI. Developers should analyze Dessa's dialogue patterns to understand its conversational limitations.",
            "source": "The Verge",
            "sourceUrl": "https://www.theverge.com/ai-artificial-intelligence/1017906/jack-dorsey-block-dessa-ai-voice-speech",
            "relatedResources": []
        },
        {
            "date": "Oct 23 2026",
            "headline": "iPhone Duo Reviewer Challenges 7/10 Score",
            "title": "The Vergecast Reviewer Questions the 7/10 Score for the iPhone Duo",
            "content": "David and Nilay from The Vergecast initially planned a different score for the iPhone Duo but ultimately awarded it a 7 out of 10. The reviewers found the device's large, foldable form factor challenging to assess against the standard iPhone. This reflects the difficulty of evaluating a major hardware departure for the world's most popular smartphone. The episode highlights the subjective nature of tech reviews for unconventional devices.",
            "source": "AI | The Verge",
            "sourceUrl": "https://www.theverge.com/podcast/1017447/iphone-duo-ipad-review-score-vergecast",
            "relatedResources": []
        },
        {
            "date": "Oct 23 2026",
            "headline": "Google Alters Privacy Policy for Targeted Ads",
            "title": "Google's Updated Privacy Policy Could Enable Gmail and Photos Targeting",
            "content": "Google updated its privacy policy to include an exception for using Gmail, Google Drive, and Google Photos data to target ads. This change applies if users opt into personalized AI features, potentially exposing personal content to ad-targeting algorithms. The update, spotted by Android Authority, signals a shift in Google's data monetization strategy. Users concerned about privacy should review their personalized ad settings in Google Account.",
            "source": "AI | The Verge",
            "sourceUrl": "https://www.theverge.com/tech/1017600/google-personal-intelligence-privacy-policy-ads-update",
            "relatedResources": []
        },
        {
            "date": "Oct 23 2026",
            "headline": "OpenAI Hardens Frontier Model Training Security",
            "title": "OpenAI Bolsters Security for Frontier Model Training with Offline Environments",
            "content": "OpenAI has implemented stronger containment measures for frontier model training and evaluation. The company utilizes offline environments and high-compute red-teaming to secure its AI development pipeline. This strategy aims to prevent unauthorized access to sensitive model weights during the training phase. The move addresses growing industry concerns regarding the physical and digital security of advanced AI systems.",
            "source": "OpenAI News",
            "sourceUrl": "https://openai.com/index/securing-our-frontier-model-training-environment",
            "relatedResources": []
        },
        {
            "date": "Oct 22 2026",
            "headline": "Hugging Face Model Chatbot Interprets DNA Sequences",
            "title": "Hugging Face's Open-Source AI Model Lets Researchers Query DNA",
            "content": "Hugging Face released an open-source AI model capable of interpreting and generating insights from DNA sequences. The model allows researchers to query the effects of genetic mutations on gene activity and health outcomes. It translates complex genomic data into a conversational interface, accelerating biological research. This tool is available for download on the Hugging Face platform for the scientific community.",
            "source": "Feed: Artificial Intelligence Latest",
            "sourceUrl": "https://www.wired.com/story/hugging-face-new-ai-biology-model-chat-with-dna/",
            "relatedResources": []
        },
        {
            "date": "Oct 23 2026",
            "headline": "Meta Delays AI Scraping Terms After Publisher Pushback",
            "title": "Meta Delays Enforcement of Business Terms Amid Publisher Concerns Over AI Scraping",
            "content": "Meta has delayed enforcing its new business terms following publisher complaints that the updated policies could permit the company to scrape news websites for artificial intelligence (AI) training. The revised terms, which were scheduled to take effect immediately, now face a review period to address concerns from major media organizations. This move highlights the escalating tension between AI developers and content creators over data usage rights and compensation. Publishers fear unauthorized data extraction could undermine their business models and copyright protections. Stakeholders are closely monitoring Meta's revised policy to ensure compliance with data protection regulations.",
            "source": "The Verge",
            "sourceUrl": "https://www.theverge.com/tech/1017450/meta-business-terms-delayed-ai-scraping",
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
            "cveId": "CVE-2026-114625",
            "dateAdded": "Oct 23, 2026",
            "vendor": "Arista VeloCloud Orchestrator",
            "description": "Arista VeloCloud Orchestrator on-prem contains a SQL injection vulnerability that may allow a remote attacker to access privileged internal functionality and impact the VCO host. Successful exploitati",
            "score": "HIGH",
            "status": "Confirmed",
            "source": "CISA KEV",
            "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-114625",
            "isZeroDay": false
        },
        {
            "cveId": "CVE-2026-110447",
            "dateAdded": "Oct 23, 2026",
            "vendor": "Collabora Collabora Online – Built-in CODE Server",
            "description": "Collabora Collabora Online – Built-in CODE Server when used within the NextCloud platform contains an OS command injection vulnerability that allows for remote code execution when the CODE server isn'",
            "score": "HIGH",
            "status": "Confirmed",
            "source": "CISA KEV",
            "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-110447",
            "isZeroDay": false
        },
        {
            "cveId": "CVE-2026-106931",
            "dateAdded": "Oct 20, 2026",
            "vendor": "EG Secure Solutions SiteGuard Server Edition",
            "description": "EG Secure Solutions SiteGuard Server Edition contains an OS command injection vulnerability which may allow an attacker to execute arbitrary OS commands with root or SYSTEM privileges on the system ru",
            "score": "HIGH",
            "status": "Confirmed",
            "source": "CISA KEV",
            "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-106931",
            "isZeroDay": false
        },
        {
            "cveId": "CVE-2026-96656",
            "dateAdded": "Oct 20, 2026",
            "vendor": "Plex Media Server",
            "description": "Plex Media Server contains an external control of file name or path vulnerability which can allow an admin user to write arbitrary files that may be executed on load. This vulnerability can be chained",
            "score": "HIGH",
            "status": "Confirmed",
            "source": "CISA KEV",
            "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-96656",
            "isZeroDay": false
        },
        {
            "cveId": "CVE-2026-96655",
            "dateAdded": "Oct 20, 2026",
            "vendor": "Plex Media Server",
            "description": "Plex Media Server contains a server-side request forgery (SSRF) vulnerability that could allow an authenticated user to request arbitrary internal or external addresses via the '/video/:/transcode/uni",
            "score": "HIGH",
            "status": "Confirmed",
            "source": "CISA KEV",
            "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-96655",
            "isZeroDay": false
        },
        {
            "cveId": "CVE-2026-96654",
            "dateAdded": "Oct 20, 2026",
            "vendor": "Plex Media Server",
            "description": "Plex Media Server contains an improper neutralization of encoded URI schemes in a web page vulnerability that could allow an attacker to call other plugins' functions and supply their own parameters.",
            "score": "HIGH",
            "status": "Confirmed",
            "source": "CISA KEV",
            "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-96654",
            "isZeroDay": false
        },
        {
            "cveId": "CVE-2026-96652",
            "dateAdded": "Oct 20, 2026",
            "vendor": "Plex Media Server",
            "description": "Plex Media Server contains a server-side request forgery (SSRF) vulnerability which could allow an attacker using any X-Plex-Token value to include a full URL in the 'protocol' parameter and force the",
            "score": "HIGH",
            "status": "Confirmed",
            "source": "CISA KEV",
            "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-96652",
            "isZeroDay": false
        },
        {
            "cveId": "CVE-2026-110936",
            "dateAdded": "Oct 20, 2026",
            "vendor": "Siemens Software Center",
            "description": "Siemens Software Center contains an uncontrolled search path element vulnerability that could allow an authenticated local attacker to place a specially crafted DLL in a directory that the application",
            "score": "HIGH",
            "status": "Confirmed",
            "source": "CISA KEV",
            "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-110936",
            "isZeroDay": false
        }
    ],
    "featureCards": []
};