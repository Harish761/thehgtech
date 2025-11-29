// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2025-11-29T14:05:53.231882+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2025-11-29T14:05:53.199463+05:30",
    "lastUpdatedFormatted": "Nov 29, 2025 at 02:05 PM IST",
    "comparisonPeriod": "Nov 28 \u2013 Nov 29, 2025",
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
                "hxxp://8ujoo-4[.]pages[.]dev/finds?ref_=nav_cs_foundit",
                "hxxp://8ujoo-4[.]pages[.]dev/toys/b/?ie=UTF8&node=165793011&ref_=nav_cs_toys",
                "hxxp://8ujoo-4[.]pages[.]dev/computer-pc-hardware-accessories-add-ons/b/?ie=UTF8&node=541966&ref_=nav_cs_pc",
                "hxxp://tkmall78[.]vip/",
                "hxxp://8ujoo-4[.]pages[.]dev/amazon-fashion/b/?ie=UTF8&node=7141123011&ref_=nav_cs_fashion"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 907,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 907,
                "newInLastHour": 135,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"8986d305ceed84c8dbc430ae7caf31b645f22fe5c4c29bca869eaee9abc46585",
                " \"ba8f2313b3398187c424d9abed5f735907d01ebc9a11077136d2919e369501d6",
                " \"b709907641259451070d2864e5372df1d16b9744f9423ad4c7482b89f330c617",
                " \"b9c6a448c486cde5a856e6f4c7c74f46bede0f1249db139a0c7b27c9f71c52cc",
                " \"48adbba35987c2b3584f40a77b09663db052cf9384e7b4f0a256aaf24fbc9b0c"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1459,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1459,
                "newInLastHour": 0,
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
                "1[.]116[.]180[.]98",
                "1[.]119[.]194[.]226",
                "1[.]15[.]20[.]205",
                "1[.]157[.]242[.]238",
                "1[.]165[.]38[.]89"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5328,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5328,
                "newInLastHour": 5328,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]117[.]227[.]101",
                "1[.]13[.]19[.]219",
                "1[.]161[.]32[.]106",
                "1[.]161[.]60[.]50",
                "1[.]214[.]197[.]163"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 28613,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 28613,
                "newInLastHour": 28613,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://42[.]87[.]139[.]127:34258/bin[.]sh",
                "hxxp://125[.]40[.]121[.]158:45741/i",
                "hxxps://a2x[.]starblend[.]ru/vocqnc6u",
                "hxxp://61[.]3[.]21[.]57:40253/i",
                "hxxps://veil[.]stonefog[.]ru/ogeon2i7"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 9184,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 9184,
                "newInLastHour": 8884,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"pulse[.]starblend[.]ru\"",
                " \"a2x[.]starblend[.]ru\"",
                " \"veil[.]stonefog[.]ru\"",
                " \"107[.]175[.]185[.]73:443\"",
                " \"5[.]39[.]218[.]147:443\""
            ]
        },
        "Feodo Tracker": {
            "description": "Botnet C2 server IPs from Feodo Tracker. Tracks Dridex, Emotet, TrickBot, QakBot, and BazarLoader.",
            "website": "https://feodotracker.abuse.ch/",
            "updateFrequency": "Hourly",
            "iocCount": 4,
            "iocDataUrl": "https://thehgtech.com/ioc-data/feodo-tracker.json",
            "stats": {
                "total": 4,
                "newInLastHour": 4,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "15[.]204[.]219[.]215",
                "152[.]89[.]239[.]34",
                "162[.]243[.]103[.]246",
                "51[.]210[.]96[.]48"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 8522,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8522,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "f30a84e5e4404701c9cdf35dc9f041e9387dd669",
                "12b35a8ec2b2eeeeca8cd423572a2a1e03325bdb",
                "76058b8a13d3e0cc6d94719bca231ed307fef2db",
                "f25d97c413b79f8d2d7b82743796e4de8e0fc734",
                "714be1c77064ad12980b7854e66377d442ed7e1d"
            ]
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
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 58264,
        "lastCalculated": "2025-11-29 14:05 IST"
    }
};
