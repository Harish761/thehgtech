// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2025-11-27T14:03:17.178175+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2025-11-27T14:03:17.148410+05:30",
    "lastUpdatedFormatted": "Nov 27, 2025 at 02:03 PM IST",
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
                "hxxps://is[.]gd/9JuGOY",
                "hxxps://direitossaber[.]sbs/chat/",
                "hxxps://roblox[.]com[.]ge/users/250183357/profile",
                "hxxps://47820492-janehouston[.]pages[.]dev/*https:/virustotal[.]com/vtapi/v2/url",
                "hxxps://roblox[.]com[.]ge/games/109983668079237/Steal-a-Brainrot?privateServerLinkCode=14003079987831002154221438309238"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 672,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 672,
                "newInLastHour": 37,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"69d3c6dc1dcfb9db3bb893a373d2c9611a79f71e71b2d52ca43ef8b369cf40e8",
                " \"8cac54bc651e023650deec2d05080304f0828d30193f750979166eb8575787ac",
                " \"5d0e5b8a6a831be96298de791c5216fbf20f5c5acc420258c3a5d81782bedd6c",
                " \"020b3c9a83e311f217adeab616042f0cd5a9b391ed9a48d8099ef7504885ddd9",
                " \"5803872bb60628ce0e5ea4448ca57cc583f76407dcdd54485d52d71ae03f8be8"
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
                "1[.]119[.]194[.]226",
                "1[.]13[.]197[.]76",
                "1[.]14[.]3[.]240",
                "1[.]15[.]118[.]23",
                "1[.]15[.]135[.]58"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 6595,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6595,
                "newInLastHour": 6595,
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
                "1[.]194[.]200[.]251"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 28578,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 28578,
                "newInLastHour": 28578,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://219[.]157[.]211[.]156:41618/bin[.]sh",
                "hxxp://222[.]138[.]103[.]248:44147/i",
                "hxxp://222[.]141[.]78[.]69:55730/i",
                "hxxp://42[.]231[.]94[.]155:38217/bin[.]sh",
                "hxxps://shard7[.]stoneburst[.]ru/bzt0g6vb"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1529,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1529,
                "newInLastHour": 1360,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"slush5[.]sn0wtrail[.]ru\"",
                " \"quak3r[.]stoneburst[.]ru\"",
                " \"rumbl5[.]stoneburst[.]ru\"",
                " \"shard7[.]stoneburst[.]ru\"",
                " \"brecc8[.]stoneburst[.]ru\""
            ]
        },
        "Feodo Tracker": {
            "description": "Botnet C2 server IPs from Feodo Tracker. Tracks Dridex, Emotet, TrickBot, QakBot, and BazarLoader.",
            "website": "https://feodotracker.abuse.ch/",
            "updateFrequency": "Hourly",
            "iocCount": 3,
            "iocDataUrl": "https://thehgtech.com/ioc-data/feodo-tracker.json",
            "stats": {
                "total": 3,
                "newInLastHour": 3,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
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
        "totalAttacksThisHour": 51873,
        "lastCalculated": "2025-11-27 14:03 IST"
    }
};
