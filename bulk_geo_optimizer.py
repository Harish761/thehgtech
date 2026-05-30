import os
import re

base_path = '/Volumes/Data-Personal/Webpage/thehgtech'

content_map = {
    # ARTICLES
    "articles/harvard-phone-phishing-breach-2025.html": {
        "takeaways": [
            "Harvard University suffered a major breach through a vishing (voice phishing) attack, bypassing all technical controls.",
            "No malware was used; attackers simply convinced staff to hand over credentials over the phone.",
            "AI voice cloning is making these attacks exponentially more difficult to detect for standard employees."
        ],
        "faqs": [
            {"q": "What is a vishing attack?", "a": "Vishing stands for 'voice phishing.' It is a social engineering attack conducted over the phone, where the attacker uses manipulation to extract sensitive information or credentials."},
            {"q": "How was Harvard breached without malware?", "a": "The attackers relied entirely on human error. By spoofing caller IDs and creating a sense of urgency, they convinced an employee with access to the donor database to hand over their login credentials."},
            {"q": "How can organizations defend against AI vishing?", "a": "Organizations must implement strict callback verification protocols, deploy hardware-based MFA (like FIDO2 keys) that cannot be bypassed via phone codes, and establish internal code words."}
        ]
    },
    "articles/7zip-critical-vulnerability.html": {
        "takeaways": [
            "A critical zero-day vulnerability in 7-Zip exposes millions of Windows users to remote code execution (RCE).",
            "The flaw allows attackers to execute malicious code simply by having the user open a specially crafted archive file.",
            "Immediate patching to the latest version is required, as active exploitation has been observed in the wild."
        ],
        "faqs": [
            {"q": "What is the 7-Zip critical vulnerability?", "a": "It is a severe security flaw that allows attackers to achieve remote code execution when a user extracts a maliciously crafted .7z or .zip archive."},
            {"q": "How do I know if I am affected?", "a": "If you are running an outdated version of 7-Zip on Windows, you are likely vulnerable. Check the software version in the 'Help > About' menu."},
            {"q": "How can I fix the 7-Zip vulnerability?", "a": "You must immediately download and install the latest patch from the official 7-Zip website. In corporate environments, IT should push the update via patch management tools."}
        ]
    },
    "articles/nike-data-breach-1tb-stolen-2026.html": {
        "takeaways": [
            "Nike suffered a massive data breach resulting in the theft of over 1TB of corporate data and customer records.",
            "The breach occurred due to a misconfigured cloud storage bucket that was left exposed to the public internet.",
            "Threat actors are threatening to leak the data unless a multi-million dollar ransom is paid."
        ],
        "faqs": [
            {"q": "How did the Nike data breach happen?", "a": "The breach was traced back to a misconfigured third-party cloud storage instance (like an S3 bucket) that lacked basic authentication controls."},
            {"q": "What customer data was exposed in the Nike breach?", "a": "While the full extent is still being investigated, stolen data reportedly includes customer purchase histories, addresses, and internal corporate supply chain documents."},
            {"q": "What should Nike customers do now?", "a": "Customers should monitor their financial statements for suspicious activity, change their Nike account passwords, and be highly vigilant against targeted phishing emails."}
        ]
    },
    "articles/axios-supply-chain-attack-2026.html": {
        "takeaways": [
            "The popular JavaScript library Axios was compromised in a massive supply chain attack affecting thousands of applications.",
            "Attackers injected malicious code into an update that exfiltrates environment variables (like API keys) to a remote server.",
            "Developers must audit their `package.json` and lock files immediately to ensure they are not running the compromised version."
        ],
        "faqs": [
            {"q": "What is the Axios supply chain attack?", "a": "Attackers gained control of the official Axios NPM package and published a malicious version that steals sensitive environment variables from servers running the library."},
            {"q": "Which versions of Axios are compromised?", "a": "You must check the official security advisory, but generally, any version downloaded during the specific 48-hour compromise window should be considered tainted."},
            {"q": "How do I protect my Node.js app from compromised packages?", "a": "Pin your dependencies to exact versions, use lock files, implement SCA (Software Composition Analysis) tools, and restrict outbound network traffic from your application servers."}
        ]
    },
    "articles/salesforce-billion-record-extortion-2025.html": {
        "takeaways": [
            "A threat actor group successfully breached a misconfigured Salesforce environment, exposing over a billion records.",
            "The attack highlights the shared responsibility model: Salesforce's core infrastructure was not breached, but a customer's implementation was severely misconfigured.",
            "The attackers are attempting to extort the victims rather than deploying traditional ransomware."
        ],
        "faqs": [
            {"q": "Was Salesforce itself hacked?", "a": "No. The breach occurred due to a customer misconfiguring their specific Salesforce environment's access controls, not a flaw in Salesforce's core platform security."},
            {"q": "What is data extortion?", "a": "Unlike ransomware which encrypts files, data extortion involves stealing sensitive data and threatening to release it publicly unless a ransom is paid."},
            {"q": "How can companies secure their Salesforce instances?", "a": "Organizations must regularly audit their SaaS configurations (SSPM), enforce strict Role-Based Access Control (RBAC), and monitor for anomalous bulk data exports."}
        ]
    },
    "articles/beast-ransomware-api-exploits.html": {
        "takeaways": [
            "The 'Beast' ransomware gang is utilizing novel API exploitation techniques to bypass traditional endpoint detection.",
            "Instead of phishing, they are hunting for undocumented or vulnerable external-facing APIs to gain initial access.",
            "Security teams must prioritize API security posture management (ASPM) alongside traditional perimeter defenses."
        ],
        "faqs": [
            {"q": "How does Beast ransomware differ from others?", "a": "Beast primarily focuses on exploiting vulnerable web APIs for initial access and lateral movement, rather than relying on phishing or standard software vulnerabilities."},
            {"q": "What makes API exploits so dangerous?", "a": "APIs often have direct access to backend databases and bypass traditional web application firewalls (WAFs) if they are not specifically configured to inspect API traffic."},
            {"q": "How can we stop the Beast ransomware gang?", "a": "Discover and inventory all shadow APIs, enforce strict rate limiting, require strong authentication for all endpoints, and utilize specialized API security testing tools."}
        ]
    },
    "articles/instagram-e2ee-rollback-2026.html": {
        "takeaways": [
            "Meta has controversially rolled back default end-to-end encryption (E2EE) on Instagram direct messages.",
            "The decision comes after intense pressure from law enforcement agencies citing child safety and criminal investigations.",
            "Privacy advocates warn this creates a dangerous precedent and weakens global communications security."
        ],
        "faqs": [
            {"q": "Why is Instagram removing default E2EE?", "a": "Meta cited technical challenges and regulatory pressure from global law enforcement agencies who argued that default encryption hindered criminal investigations."},
            {"q": "Are my Instagram messages still private?", "a": "Without E2EE, your messages are encrypted in transit but can theoretically be read by Meta on their servers, meaning they can be accessed via a legal subpoena."},
            {"q": "Can I turn E2EE back on?", "a": "Yes, users can manually opt-in to 'Secret Conversations' for specific chats, but it is no longer the default setting for all direct messages."}
        ]
    },
    "articles/anthropic-openai-privacy-ultimatum-2026.html": {
        "takeaways": [
            "A massive privacy showdown is occurring as enterprise clients issue ultimatums to Anthropic and OpenAI regarding data usage.",
            "Corporations are demanding explicit, legally binding guarantees that their proprietary prompts will not be used to train future frontier models.",
            "The outcome of this standoff will likely reshape how AI companies handle enterprise data privacy moving forward."
        ],
        "faqs": [
            {"q": "Why are enterprises threatening AI companies?", "a": "Enterprises are concerned that feeding sensitive corporate data into AI models (like Claude or ChatGPT) could result in that data being memorized and leaked to competitors through future model training."},
            {"q": "Do OpenAI and Anthropic train on user data?", "a": "By default, consumer tier data is often used for training, but both companies claim that enterprise API data is strictly excluded. However, clients are demanding stronger auditing and legal liability."},
            {"q": "What is the alternative for these enterprises?", "a": "Many companies are exploring self-hosted open-source models (like Llama) to ensure 100% data sovereignty, posing a threat to the business models of closed-source AI vendors."}
        ]
    },
    "articles/stryker-wiper-attack-2026.html": {
        "takeaways": [
            "The highly destructive 'Stryker' wiper malware has hit multiple critical infrastructure targets across Europe.",
            "Unlike ransomware, Stryker is designed purely to destroy data and brick systems, offering no decryption key.",
            "The sophisticated attacks heavily suggest state-sponsored origins aiming to disrupt logistics and energy sectors."
        ],
        "faqs": [
            {"q": "What is wiper malware?", "a": "Wiper malware is a type of cyber threat designed to permanently erase data and destroy system functionality, rather than holding it for ransom."},
            {"q": "Who is behind the Stryker wiper attack?", "a": "While attribution is difficult, the complexity and target selection (critical infrastructure) heavily indicate a nation-state advanced persistent threat (APT) group."},
            {"q": "How can you recover from a Stryker attack?", "a": "Because the data is actively overwritten, recovery is only possible if you have offline, immutable backups that were not connected to the network during the attack."}
        ]
    },
    "articles/99-percent-ai-systems-attacked-2025.html": {
        "takeaways": [
            "A new industry report reveals that 99% of deployed enterprise AI systems faced some form of cyberattack in 2025.",
            "The most common attack vector was prompt injection, followed by attempts at training data extraction.",
            "Security teams are struggling to keep pace, as traditional firewalls are ineffective against semantic AI attacks."
        ],
        "faqs": [
            {"q": "What does an attack on an AI system look like?", "a": "Attacks primarily take the form of prompt injections (manipulating the AI to ignore instructions) or adversarial inputs designed to make the model leak sensitive data or output malicious code."},
            {"q": "Why are traditional security tools failing against AI attacks?", "a": "Traditional security tools look for known malicious code signatures or network anomalies. AI attacks are semantic—they use natural language to trick the model, which bypasses standard filters."},
            {"q": "How can companies secure their AI models?", "a": "Companies must implement robust output filtering, strict access controls, system prompt isolation, and continuous red-teaming to discover vulnerabilities before deployment."}
        ]
    },
    "articles/trellix-source-code-breach-2026.html": {
        "takeaways": [
            "Cybersecurity giant Trellix suffered a breach resulting in the theft of proprietary source code for its endpoint detection agents.",
            "The attackers gained access through a compromised developer account that lacked phish-resistant MFA.",
            "The stolen source code could allow threat actors to develop bespoke malware that actively bypasses Trellix defenses."
        ],
        "faqs": [
            {"q": "What was stolen in the Trellix breach?", "a": "Attackers exfiltrated the source code for several of Trellix's core security products, including their EDR (Endpoint Detection and Response) agent."},
            {"q": "Does this mean Trellix customers are vulnerable?", "a": "While the theft of source code doesn't immediately compromise customers, it gives hackers a blueprint to find undiscovered vulnerabilities and bypass techniques."},
            {"q": "How did the attackers breach a cybersecurity company?", "a": "The breach occurred due to human error—a developer fell victim to a sophisticated social engineering attack, highlighting that even security companies are vulnerable to human factors."}
        ]
    },
    "articles/india-ai-summit-2026-wrapper-epidemic.html": {
        "takeaways": [
            "The 2026 India AI Summit highlighted a massive cybersecurity crisis regarding insecure 'AI wrapper' applications.",
            "Thousands of startups are building apps by simply wrapping the OpenAI API, but failing to implement basic authentication or data sanitization.",
            "This 'wrapper epidemic' has led to massive data leaks and API key thefts across the burgeoning tech sector."
        ],
        "faqs": [
            {"q": "What is an AI wrapper application?", "a": "An AI wrapper is a software application that provides a user interface on top of an existing foundational model (like ChatGPT), passing user inputs directly to the API."},
            {"q": "Why are AI wrappers considered a security risk?", "a": "Many developers rush these wrappers to market without implementing basic security controls, leading to prompt injections, cross-site scripting (XSS), and exposed API keys."},
            {"q": "How should developers secure AI wrapper apps?", "a": "Developers must sanitize all user inputs, implement robust authentication, securely store API keys in backend environment variables (never frontend), and rate-limit user requests."}
        ]
    },
    "articles/cybersecurity-predictions-2026.html": {
        "takeaways": [
            "AI-driven automated hacking and autonomous malware will dominate the threat landscape in 2026.",
            "Ransomware gangs will shift further away from encryption toward pure data extortion and regulatory blackmail.",
            "Zero Trust architecture is moving from a buzzword to a mandatory compliance requirement for critical infrastructure."
        ],
        "faqs": [
            {"q": "What is the biggest cybersecurity threat in 2026?", "a": "The weaponization of AI by threat actors to automate vulnerability discovery and craft hyper-personalized phishing campaigns at scale."},
            {"q": "What is regulatory blackmail?", "a": "It is an extortion tactic where hackers steal data and threaten to report the victim company to regulators (like the GDPR or SEC) for compliance failures unless a ransom is paid."},
            {"q": "Is the cybersecurity job market changing?", "a": "Yes, there is a massive shift from manual analysis to engineering. SOC analysts are now expected to know scripting and automation to combat AI-driven threats."}
        ]
    },
    "articles/delve-ai-compliance-scandal-2026.html": {
        "takeaways": [
            "Delve AI is facing a massive compliance scandal after an audit revealed they secretly trained models on EU citizen data in violation of the GDPR.",
            "The company allegedly bypassed data residency restrictions by routing traffic through offshore servers.",
            "Regulators are considering forcing Delve AI to algorithmically delete the illicitly trained models, a process known as 'machine unlearning'."
        ],
        "faqs": [
            {"q": "What did Delve AI do wrong?", "a": "Delve AI violated strict data privacy laws (like the GDPR) by ingesting protected user data without consent to train their commercial large language models."},
            {"q": "What is 'machine unlearning'?", "a": "Machine unlearning is the highly complex technical process of attempting to force an AI model to 'forget' specific training data without having to retrain the entire model from scratch."},
            {"q": "What are the consequences for Delve AI?", "a": "Beyond massive financial fines, regulators possess the unprecedented power to mandate the deletion of the actual AI model if the illicit data cannot be surgically removed."}
        ]
    },
    "articles/gentlemen-ransomware-threat-2025.html": {
        "takeaways": [
            "A new ransomware cartel dubbed 'The Gentlemen' has emerged, utilizing highly polite, corporate-style communication with victims.",
            "Despite their polite facade, they are ruthless in their extortion tactics and utilize advanced double-extortion methods.",
            "They specifically target mid-market financial and legal firms holding highly sensitive client data."
        ],
        "faqs": [
            {"q": "Who are the 'Gentlemen' ransomware group?", "a": "They are a financially motivated cybercriminal syndicate known for their bizarrely polite, business-like customer service approach during ransom negotiations."},
            {"q": "What is double-extortion ransomware?", "a": "It is an attack where hackers first steal sensitive data, then encrypt the local systems. They demand payment both to decrypt the files and to prevent the stolen data from being leaked."},
            {"q": "Why do they target legal and financial firms?", "a": "These firms hold highly privileged and confidential data. The reputational damage of a leak forces them to pay ransoms quickly and quietly."}
        ]
    },
    "articles/mj-rathbun-matplotlib-ai-hallucination-2026.html": {
        "takeaways": [
            "A popular AI coding assistant generated a massive hallucination regarding the Matplotlib library, inventing functions that didn't exist.",
            "Thousands of junior developers integrated this hallucinated code, causing widespread build failures in production environments.",
            "The incident highlights the severe dangers of developers blindly trusting AI-generated code without proper validation."
        ],
        "faqs": [
            {"q": "What is an AI code hallucination?", "a": "It occurs when an AI coding assistant confidentially generates code, functions, or libraries that look plausible but do not actually exist or function in reality."},
            {"q": "How did the Matplotlib hallucination cause production issues?", "a": "Developers blindly copy-pasted the AI's suggestions into their codebases without running adequate tests, causing systems to crash when the code attempted to call non-existent functions."},
            {"q": "How can developers prevent AI hallucinations?", "a": "Developers must thoroughly test all AI-generated code, read the official documentation to verify functions, and rely on strong IDE linting and compilation checks."}
        ]
    },
    "articles/entra-id-ghost-takeover-2026.html": {
        "takeaways": [
            "A novel attack vector dubbed 'Ghost Takeover' is exploiting misconfigurations in Microsoft Entra ID (formerly Azure AD).",
            "Attackers manipulate stale, disabled guest accounts to bypass Conditional Access policies and elevate privileges.",
            "Administrators must immediately audit all guest accounts and implement strict lifecycle management policies."
        ],
        "faqs": [
            {"q": "What is a Ghost Takeover in Entra ID?", "a": "It is an attack where threat actors hijack inactive or improperly offboarded guest accounts in Entra ID to silently gain a foothold in a corporate cloud environment."},
            {"q": "Why doesn't Conditional Access stop this?", "a": "The attack specifically targets edge-case misconfigurations where conditional access policies were not properly applied to B2B guest accounts."},
            {"q": "How do I secure my Entra ID environment against this?", "a": "Implement automated identity lifecycle management, regularly purge stale guest accounts, and ensure Conditional Access policies apply universally to all user types."}
        ]
    },

    # GUIDES
    "guides/network-segmentation-zero-trust.html": {
        "takeaways": [
            "Zero Trust network segmentation eliminates implicit trust, requiring continuous verification regardless of network location.",
            "Micro-segmentation is required for critical assets, replacing traditional coarse-grained VLAN perimeters.",
            "Implementation requires deep asset discovery, mapping data flows, and defining software-defined security zones."
        ],
        "faqs": [
            {"q": "What is Zero Trust Network Segmentation?", "a": "It is a security architecture principle that divides a network into isolated zones and micro-segments, ensuring users and devices only access the specific resources they need, assuming the network is always hostile."},
            {"q": "What is the difference between traditional VLANs and micro-segmentation?", "a": "VLANs provide broad zone-based security but allow unrestricted lateral movement within the zone. Micro-segmentation applies granular, software-defined security policies down to the individual workload or application level."},
            {"q": "How do you map data flows for segmentation?", "a": "You must use network flow analysis tools (like NetFlow) and application dependency mapping to observe real-world traffic, understanding exactly how users and apps communicate before enforcing restrictive policies."}
        ]
    },
    "guides/security-metrics-kpis-dashboard.html": {
        "takeaways": [
            "Effective security metrics must align with business objectives, not just technical vanity numbers.",
            "Key Performance Indicators (KPIs) like Mean Time to Detect (MTTD) and Mean Time to Respond (MTTR) are critical for measuring SOC efficiency.",
            "Dashboards should be tailored to their audience: executives need risk and ROI metrics, while analysts need operational data."
        ],
        "faqs": [
            {"q": "What are the most important cybersecurity KPIs?", "a": "The foundational metrics are Mean Time to Detect (MTTD), Mean Time to Respond (MTTR), patch cadence, and the percentage of systems properly enrolled in endpoint protection."},
            {"q": "How do you present security metrics to the board?", "a": "Board members care about business risk. Present metrics that show risk reduction, compliance posture, and how security spending directly protects business revenue and reputation."},
            {"q": "What is a vanity metric in cybersecurity?", "a": "A vanity metric is a number that looks impressive but provides no actionable insight—for example, 'We blocked 5 million firewall pings today.' It sounds good, but doesn't indicate if the organization is actually secure."}
        ]
    },
    "guides/malware-hash-analysis.html": {
        "takeaways": [
            "Malware hash analysis is the foundation of digital forensics, allowing analysts to uniquely identify malicious files.",
            "SHA-256 is the industry standard for cryptographic hashing in malware analysis due to its resistance to collisions.",
            "Analysts use tools like VirusTotal and threat intelligence platforms to pivot from a single hash to wider threat actor infrastructure."
        ],
        "faqs": [
            {"q": "What is a malware hash?", "a": "A hash is a unique alphanumeric string generated by a cryptographic algorithm (like SHA-256) representing the exact contents of a file. It acts as a digital fingerprint for malware."},
            {"q": "Why is MD5 no longer recommended for malware analysis?", "a": "MD5 is susceptible to hash collisions, meaning attackers can theoretically modify a malicious file so it produces the same MD5 hash as a legitimate file, bypassing security controls."},
            {"q": "How do you analyze a malware hash safely?", "a": "You should never execute the file. Instead, compute the hash using terminal tools (like `shasum`), and submit that string to platforms like VirusTotal or an internal MISP instance to gather intelligence."}
        ]
    },
    "guides/openphish-integration.html": {
        "takeaways": [
            "OpenPhish is a vital threat intelligence feed that provides real-time, zero-day phishing URLs.",
            "Integrating OpenPhish into your SIEM and firewalls enables automated blocking of active phishing infrastructure.",
            "The guide covers utilizing the OpenPhish API to extract actionable IOCs and reduce alert fatigue through proper filtering."
        ],
        "faqs": [
            {"q": "What is OpenPhish?", "a": "OpenPhish is a fully automated threat intelligence platform that identifies and publishes active, zero-day phishing URLs and their associated metadata."},
            {"q": "How do you integrate OpenPhish with a SIEM?", "a": "Integration typically involves writing a custom script or using a native connector to pull the OpenPhish API JSON feed, parse the URLs/IPs, and ingest them into the SIEM's threat intelligence lookup tables."},
            {"q": "Can OpenPhish data be used for automated blocking?", "a": "Yes, high-confidence indicators from the premium OpenPhish feeds can be pushed directly to firewalls, DNS sinkholes, or web proxies to automatically block users from accessing known phishing sites."}
        ]
    },
    "guides/zero-day-detection.html": {
        "takeaways": [
            "Zero-day attacks exploit unknown vulnerabilities, meaning signature-based antivirus tools are completely blind to them.",
            "Effective zero-day detection requires behavior-based analytics, machine learning, and robust EDR capabilities.",
            "Network traffic analysis and strict application allowlisting are critical secondary defenses against unknown exploits."
        ],
        "faqs": [
            {"q": "What is a zero-day vulnerability?", "a": "A zero-day is a software vulnerability that is discovered by attackers before the software vendor is aware of it. Because there is 'zero days' of warning, no patch currently exists."},
            {"q": "How can you detect a zero-day if there is no signature?", "a": "Detection relies on behavioral analysis. Instead of looking for a known bad file, EDR tools look for suspicious actions—like a word processor attempting to spawn a command shell and alter registry keys."},
            {"q": "What is the best defense against zero-day exploits?", "a": "A defense-in-depth approach is required: strict least-privilege access, application whitelisting, behavioral EDR, network segmentation, and rapid incident response procedures."}
        ]
    },
    "guides/owasp-llm-top-10.html": {
        "takeaways": [
            "The OWASP LLM Top 10 highlights the most critical security vulnerabilities facing Large Language Model deployments.",
            "Prompt Injection (LLM01) and Insecure Output Handling (LLM02) are the most prevalent and dangerous risks for AI applications.",
            "Securing LLMs requires a paradigm shift: treating AI models as untrusted input/output engines rather than infallible decision-makers."
        ],
        "faqs": [
            {"q": "What is the OWASP LLM Top 10?", "a": "It is an industry-standard awareness document that identifies the 10 most critical security vulnerabilities specifically related to the deployment and integration of Large Language Models."},
            {"q": "What is Prompt Injection in the context of OWASP?", "a": "Prompt Injection (LLM01) occurs when an attacker crafts malicious inputs to manipulate the LLM into executing unintended actions, ignoring its system instructions, or revealing sensitive data."},
            {"q": "How do you secure against Insecure Output Handling?", "a": "You must treat all output generated by an LLM as inherently untrusted. All AI-generated text must be strictly validated, encoded, and sanitized before being executed in a backend system or rendered in a browser."}
        ]
    },
    "guides/insider-threat-detection.html": {
        "takeaways": [
            "Insider threats—whether malicious, negligent, or compromised—are notoriously difficult to detect because the user already has legitimate access.",
            "Successful detection relies on User and Entity Behavior Analytics (UEBA) to establish baselines and flag anomalous activity.",
            "A strong insider threat program requires cross-departmental collaboration between Security, HR, and Legal."
        ],
        "faqs": [
            {"q": "What are the three types of insider threats?", "a": "The three main types are: Malicious (intentionally stealing or destroying data), Negligent (accidentally exposing data through carelessness), and Compromised (an external attacker hijacking a legitimate employee's account)."},
            {"q": "How does UEBA help detect insider threats?", "a": "User and Entity Behavior Analytics (UEBA) uses machine learning to establish a baseline of normal behavior for every employee. If an employee suddenly downloads gigabytes of data at 3 AM, UEBA flags the anomaly."},
            {"q": "Can you stop insider threats with technology alone?", "a": "No. Effective insider threat mitigation requires strong HR policies, proper offboarding procedures, background checks, and fostering a positive security culture, alongside technical controls like DLP and IAM."}
        ]
    },
    "guides/incident-response-plan.html": {
        "takeaways": [
            "A documented and heavily practiced Incident Response (IR) plan is the difference between a minor disruption and a catastrophic business failure.",
            "The NIST IR Lifecycle—Preparation, Detection/Analysis, Containment/Eradication, and Post-Incident Activity—is the gold standard framework.",
            "Communication plans, out-of-band communication channels, and clear chains of command must be established before an incident occurs."
        ],
        "faqs": [
            {"q": "What are the core phases of an Incident Response plan?", "a": "Following the NIST framework, the phases are: 1) Preparation, 2) Detection & Analysis, 3) Containment, Eradication & Recovery, and 4) Post-Incident Activity (Lessons Learned)."},
            {"q": "Why is the Preparation phase so critical?", "a": "During an active cyberattack, panic sets in. The Preparation phase ensures you have the necessary tools, retainers, communication channels, and practiced playbooks ready so the team can respond mechanically rather than emotionally."},
            {"q": "What is out-of-band communication?", "a": "It is a secondary, highly secure communication channel (like Signal or a separate Slack workspace) used during an incident to ensure attackers cannot eavesdrop on the response team's strategy."}
        ]
    }
}

def generate_takeaways_html(takeaways):
    html = '\\n<div class="alert-box" style="background: rgba(0, 217, 255, 0.1); border-left: 4px solid var(--accent-cyan); padding: 1.5rem; margin: 2rem 0; border-radius: 8px;">\\n'
    html += '    <h3 style="color: var(--accent-cyan); margin-top: 0; margin-bottom: 1rem;"><i class="fas fa-key"></i> Key Takeaways</h3>\\n'
    html += '    <ul style="margin-bottom: 0;">\\n'
    for item in takeaways:
        html += f'        <li style="color: var(--text-primary); margin-bottom: 0.5rem;">{item}</li>\\n'
    html += '    </ul>\\n'
    html += '</div>\\n'
    return html

def generate_faqs_html(faqs):
    html = '\\n<div class="faq-section" style="margin-top: 4rem; border-top: 1px solid var(--border); padding-top: 2rem;">\\n'
    html += '    <h2>Frequently Asked Questions (FAQ)</h2>\\n'
    for faq in faqs:
        html += f'    <h3 style="font-size: 1.3rem; margin-top: 1.5rem; color: var(--accent-cyan);">{faq["q"]}</h3>\\n'
        html += f'    <p style="margin-bottom: 1.5rem;">{faq["a"]}</p>\\n'
    html += '</div>\\n'
    return html

def process_file(filepath, content_data):
    full_path = os.path.join(base_path, filepath)
    if not os.path.exists(full_path):
        print(f"File not found: {full_path}")
        return

    with open(full_path, 'r', encoding='utf-8') as f:
        html_content = f.read()

    # Inject Takeaways
    takeaways_html = generate_takeaways_html(content_data['takeaways'])
    # Look for the best place to inject. Usually after the hero image or the first opening <p> in article-content or content.
    if '<div class="article-content">' in html_content:
        html_content = html_content.replace('<div class="article-content">', f'<div class="article-content">{takeaways_html}')
    elif '<article class="content">' in html_content:
        html_content = html_content.replace('<article class="content">', f'<article class="content">{takeaways_html}')
    else:
        print(f"Warning: Could not find injection point for Takeaways in {filepath}")

    # Inject FAQs
    faqs_html = generate_faqs_html(content_data['faqs'])
    # Look for the best place to inject. Usually before the closing </div> of article-content or </article>.
    if '</div>\\n\\n    </div>\\n\\n    <!-- Footer -->' in html_content: # Articles structure
        html_content = html_content.replace('</div>\\n\\n    </div>\\n\\n    <!-- Footer -->', f'{faqs_html}\\n</div>\\n\\n    </div>\\n\\n    <!-- Footer -->')
    elif '</article>' in html_content: # Guides structure
        html_content = html_content.replace('</article>', f'{faqs_html}\\n</article>')
    else:
        # Fallback for articles
        # regex find last </div> before footer
        if "<!-- Footer -->" in html_content:
            parts = html_content.split("<!-- Footer -->")
            parts[0] = parts[0] + faqs_html
            html_content = "<!-- Footer -->".join(parts)
        else:
             print(f"Warning: Could not find injection point for FAQs in {filepath}")

    # Inject Schema for FAQ if not exists
    if 'application/ld+json' not in html_content or 'FAQPage' not in html_content:
        schema_html = '\\n    <!-- ========== STRUCTURED DATA - FAQPAGE ========== -->\\n'
        schema_html += '    <script type="application/ld+json">\\n'
        schema_html += '    {\\n'
        schema_html += '      "@context": "https://schema.org",\\n'
        schema_html += '      "@type": "FAQPage",\\n'
        schema_html += '      "mainEntity": [\\n'
        for i, faq in enumerate(content_data['faqs']):
            schema_html += '        {\\n'
            schema_html += '          "@type": "Question",\\n'
            schema_html += f'          "name": "{faq["q"]}",\\n'
            schema_html += '          "acceptedAnswer": {\\n'
            schema_html += '            "@type": "Answer",\\n'
            schema_html += f'            "text": "{faq["a"]}"\\n'
            schema_html += '          }\\n'
            schema_html += '        }' + (',' if i < len(content_data['faqs']) - 1 else '') + '\\n'
        schema_html += '      ]\\n'
        schema_html += '    }\\n'
        schema_html += '    </script>\\n'
        
        if '</head>' in html_content:
            html_content = html_content.replace('</head>', f'{schema_html}</head>')

    with open(full_path, 'w', encoding='utf-8') as f:
        f.write(html_content)
    
    print(f"Successfully processed {filepath}")

for filepath, data in content_map.items():
    process_file(filepath, data)
