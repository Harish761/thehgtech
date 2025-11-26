// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2025-11-27T00:18:45.317852+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2025-11-27T00:18:45.292886+05:30",
    "lastUpdatedFormatted": "Nov 27, 2025 at 12:18 AM IST",
    "comparisonPeriod": "Nov 26 \u2013 Nov 27, 2025",
    "vendors": {
        "OpenPhish": {
            "description": "Real-time phishing URL feed updated every 15 minutes. Tracks active phishing sites targeting major brands and financial institutions.",
            "website": "https://openphish.com/",
            "updateFrequency": "Every 15 minutes",
            "iocCount": 300,
            "iocDataUrl": "https://thehgtech.com/ioc-data/openphish.json",
            "stats": {
                "total": 300,
                "newInLastHour": 300,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://www[.]kaancagirman[.]com/",
                "hxxp://spotiwap[.]com/latest-version",
                "hxxps://wordpress-1555654-6027424[.]cloudwaysapps[.]com/Contractandcontactdocs[.]html",
                "hxxp://central[.]pr-universe[.]com/s/63bzgfsvbwsfcdx7y9/584dd8/90eab167-7429-489f-99f6-ce86e8d0d81a",
                "hxxp://a1[.]hb1p[.]com/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 683,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 683,
                "newInLastHour": 85,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"cc8647d34d96630920abcb2ac1fa22872315c31401bdc7fb5137f66cc60a960b",
                " \"3a8655c048dd54b912b7c4288558175008ec5e2f34e56de255f639812b43cc8b",
                " \"4da7e9a3122a7ec168055ab07dcf97bdfae52e0281e32edc8cd1c9dc381b2062",
                " \"b03a5f108f245b038d7b66ccd846f7849434ac6da43bdc97e7e170b7546ce80f",
                " \"9d4322dc5ec24b907d138356416a7c749a7415a721fd38a6b8c0279d70837b6e"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1461,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1461,
                "newInLastHour": 6,
                "lastUpdate": "just now"
            },
            "types": [
                "ip-range"
            ],
            "sampleIndicators": [
                "1.10.16.0/20",
                "1.19.0.0/16",
                "1.32.128.0/18",
                "2.56.192.0/22",
                "2.57.122.0/24"
            ]
        },
        "CINS Army": {
            "description": "Malicious IPs from CINS Army threat intelligence. Fast-updating list of confirmed attackers.",
            "website": "http://cinsscore.com/",
            "updateFrequency": "Every 15 minutes",
            "iocCount": 15000,
            "iocDataUrl": "https://thehgtech.com/ioc-data/cins-army.json",
            "stats": {
                "total": 15000,
                "newInLastHour": 15000,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]1[.]176[.]58",
                "1[.]119[.]194[.]226",
                "1[.]13[.]197[.]76",
                "1[.]14[.]3[.]240",
                "1[.]15[.]118[.]23"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5776,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5776,
                "newInLastHour": 5776,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]13[.]79[.]144",
                "1[.]15[.]100[.]2",
                "1[.]15[.]114[.]102",
                "1[.]161[.]60[.]50",
                "1[.]214[.]179[.]202"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 18965,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 18965,
                "newInLastHour": 56,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                "2025-11-26 18:37:16",
                "2025-11-26 18:36:09",
                "2025-11-26 18:36:08",
                "2025-11-26 18:34:06",
                "2025-11-26 18:10:09"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1363,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1363,
                "newInLastHour": 28,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"1651150",
                " \"1651149",
                " \"1651148",
                " \"1651147",
                " \"1651146"
            ]
        },
        "Feodo Tracker": {
            "description": "Botnet C2 server IPs from Feodo Tracker. Tracks Dridex, Emotet, TrickBot, QakBot, and BazarLoader.",
            "website": "https://feodotracker.abuse.ch/",
            "updateFrequency": "Hourly",
            "iocCount": 0,
            "iocDataUrl": "https://thehgtech.com/ioc-data/feodo-tracker.json",
            "stats": {
                "total": 0,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [],
            "sampleIndicators": []
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 0,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 0,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [],
            "sampleIndicators": []
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 0,
            "activeSources": 0,
            "criticalAlerts": 0,
            "activeCampaigns": 0
        },
        "topThreats": [
            {
                "category": "Phishing",
                "count": 0,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Malware",
                "count": 0,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 0,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 0,
                "trend": "stable",
                "percentage": 0
            }
        ],
        "targetedSectors": [],
        "campaigns": []
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 21251,
        "lastCalculated": "2025-11-27 00:18 IST"
    }
};
