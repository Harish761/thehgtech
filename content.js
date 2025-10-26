// TheHGTech Website Content
// Update this file to change website content

var websiteContent = {
    // Cybersecurity Shorts
    cyberShorts: [
        {
            date: "Oct 25, 2025",
            title: "CISA warns of active exploitation of Windows Server Update Services RCE",
            content: "Cybersecurity and Infrastructure Security Agency (CISA) issued an advisory following real-world attacks exploiting a critical remote-code-execution flaw in Windows Server Update Services (WSUS). Attackers used a Base64-encoded .NET payload and custom request header to evade detection. Organisations running WSUS should apply mitigations immediately."
        },
        {
            date: "Oct 25, 2025",
            title: "New malware campaign targets 30 K+ WordPress sites using variable functions and cookie obfuscation",
            content: "A sophisticated malware wave is impacting over 30,000 WordPress sites via PHP variable functions and cookie-based obfuscation to hide malicious scripts from security tools. Site owners should scan for unusual cookie behaviour and apply updated WP-security plugins."
        },
        {
            date: "Oct 25, 2025",
            title: "India's new Telecom (Cyber Security) Amendment Rules enforce mobile number validation and stricter IMEI compliance",
            content: "The Ministry of Communications in India notified the Telecom (Cyber Security) Amendment Rules 2025 adding a Mobile Number Validation (MNV) platform and obliging telecom identifiers to match verified user data. The change aims to tighten identity assurance and cut SIM-fraud risk."
        }
    ],
    
    // AI Shorts
    aiShorts: [
        {
            date: "Oct 25, 2025",
            title: "Election Commission of India issues advisory on misuse of AI-generated content during elections",
            content: "The ECI alerted political parties and platforms to the risk of deepfakes, fake accounts and manipulated content created with AI ahead of elections. It encouraged reporting of suspected misuse and set guidelines for monitoring."
        },
        {
            date: "Oct 25, 2025",
            title: "Business Insider to publish stories written by AI under new byline Business Insider AI",
            content: "Business Insider will begin publishing generative-AI authored articles, edited by humans, under the byline Business Insider AI. The initiative reflects a push across media for AI-driven content production."
        },
        {
            date: "Oct 25, 2025",
            title: "Phil Spencer clarifies AI usage at Xbox - focus on moderation, not studio mandates",
            content: "Xbox CEO Phil Spencer stated AI is used primarily for content moderation on Xbox Live chats and confirmed there is no top-down mandate for game studios to use AI in development. Developers decide their workflows."
        }
    ],
    
    // Full Articles
    articles: {
        article1: {
            title: "Critical Zero-Day Vulnerability Discovered in Enterprise VPN Software",
            date: "October 18, 2025",
            category: "Cybersecurity",
            content: "<p>Security researchers at ThreatWatch Labs have identified a critical zero-day vulnerability (CVE-2025-12345) affecting several major enterprise VPN solutions used by organizations worldwide.</p><h3>Technical Details</h3><p>The vulnerability exists in the authentication module of the VPN software and can be exploited by sending specially crafted packets to the VPN server.</p><ul><li>Access sensitive corporate data</li><li>Deploy ransomware or other malware</li><li>Pivot to other systems on the network</li></ul>"
        },
        article2: {
            title: "New AI Model Achieves Breakthrough in Threat Detection",
            date: "October 17, 2025",
            category: "AI",
            content: "<p>Researchers at MIT's CSAIL have unveiled ThreatGuardian, a revolutionary AI model that achieves 98% accuracy in detecting sophisticated cyber attacks.</p><h3>The Innovation</h3><p>ThreatGuardian utilizes a novel architecture combining transformer-based models with graph neural networks to analyze network traffic patterns in real-time.</p><ul><li>Real-time analysis of millions of events per second</li><li>Behavioral learning without manual retraining</li><li>95% reduction in false alarms</li></ul>"
        },
        article3: {
            title: "The Rise of AI-Powered Phishing Campaigns",
            date: "October 16, 2025",
            category: "Analysis",
            content: "<p>The cybersecurity landscape is facing a new threat: AI-powered phishing campaigns that leverage large language models to create highly convincing, personalized attacks at unprecedented scale.</p><h3>The Evolution of Phishing</h3><p>Modern AI-powered phishing campaigns exhibit perfect grammar, highly personalized content, and context-aware messaging that references real events.</p><h3>Defense Strategies</h3><p>Organizations must adopt multi-layered defenses including AI-powered email security, advanced authentication mechanisms, and regular security awareness training.</p>"
        }
    },
    
    // Article Preview Cards (shown on homepage)
    articleCards: [
        {
            id: "article1",
            date: "Oct 18, 2025",
            category: "Cybersecurity",
            title: "Critical Zero-Day Vulnerability Discovered in Enterprise VPN",
            excerpt: "Security researchers have identified a critical vulnerability affecting major VPN solutions."
        },
        {
            id: "article2",
            date: "Oct 17, 2025",
            category: "AI",
            title: "New AI Model Achieves Breakthrough in Threat Detection",
            excerpt: "Researchers unveil an advanced machine learning system with 98% accuracy."
        },
        {
            id: "article3",
            date: "Oct 16, 2025",
            category: "Analysis",
            title: "The Rise of AI-Powered Phishing Campaigns",
            excerpt: "Deep dive into how attackers leverage large language models."
        }
    ],
    
    // Modal Content
    modals: {
        about: '<h2>About TheHGTech</h2><p>TheHGTech is your trusted source for cutting-edge cybersecurity and artificial intelligence news. We\'re dedicated to keeping security professionals, developers, and tech enthusiasts informed about the latest threats, innovations, and trends shaping the digital landscape.</p><h3>Our Mission</h3><p>To deliver high-quality, curated content that cuts through the noise and provides actionable insights on cybersecurity threats and AI developments.</p>',
        privacy: '<h2>Privacy Policy</h2><p><em>Last updated: October 25, 2025</em></p><h3>Information We Collect</h3><p>TheHGTech is committed to protecting your privacy. We collect minimal information necessary to provide our services.</p><ul><li><strong>Usage Data:</strong> We collect anonymous analytics data to improve our content</li><li><strong>Cookies:</strong> We use essential cookies to maintain site functionality</li></ul><h3>Contact Us</h3><p>If you have questions about this privacy policy, please contact us at <a href="mailto:harish@thehgtech.com">harish@thehgtech.com</a></p>',
        terms: '<h2>Terms of Service</h2><p><em>Last updated: October 25, 2025</em></p><h3>Acceptance of Terms</h3><p>By accessing and using TheHGTech, you accept and agree to be bound by the terms and provision of this agreement.</p><h3>Use License</h3><p>Permission is granted to temporarily access the materials on TheHGTech for personal, non-commercial transitory viewing only.</p><h3>Disclaimer</h3><p>The materials on TheHGTech are provided on an \'as is\' basis. TheHGTech makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties.</p>'
    }
};