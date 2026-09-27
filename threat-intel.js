// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-27T19:22:13.506157+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-27T19:22:13.123692+05:30",
    "lastUpdatedFormatted": "Sep 27, 2026 at 07:22 PM IST",
    "comparisonPeriod": "Sep 26 \u2013 Sep 27, 2026",
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
                "hxxp://sockscheker[.]ru/config/config/bits225/session/?Search=Search&q=",
                "hxxps://amarulalodgewau[.]com/Wetransfer2/clients/",
                "hxxps://versandzentrum11[.]ink/tF7m4VX",
                "hxxps://timotimo34bb34-design[.]github[.]io/-insta-verify",
                "hxxps://1url[.]at/www/roblox-users-480257643212-profile"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1361,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1361,
                "newInLastHour": 351,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"b16ab770e95cd2aef7910b61515d25c7f0bc5adff9999ced9a5856085b041cee",
                " \"72a62bcc740fe3e0b6c02667216ae3a2b35156458ddd02427898b603765cdba9",
                " \"c0dfb472c3106c449a358297c1cec2619c19fec3a772719cd1d129df9a9044b6",
                " \"147d9709a32ba4fac8a6a5802f04b9810ce18bc7c7fc526e2becf3087070623a",
                " \"1c3f7b86185b53c8b1e47d8afc641ff3cb87f7bc2221c84a69ef88ddec08a877"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1662,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1662,
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
                "2.26.75.0/24",
                "2.27.5.0/24"
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
                "1[.]193[.]58[.]176",
                "1[.]2[.]173[.]126",
                "1[.]24[.]16[.]10",
                "1[.]24[.]16[.]103",
                "1[.]24[.]16[.]108"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 11776,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 11776,
                "newInLastHour": 11776,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]15[.]77[.]170",
                "1[.]161[.]144[.]132",
                "1[.]162[.]197[.]67",
                "1[.]162[.]247[.]182"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 14732,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 14732,
                "newInLastHour": 14732,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://185[.]89[.]156[.]101:34940/i",
                "hxxp://111[.]185[.]147[.]232:47470/i",
                "hxxp://161[.]81[.]121[.]227:44381/bin[.]sh",
                "hxxp://193[.]111[.]117[.]135/bins/mirai[.]arm8",
                "hxxp://193[.]111[.]117[.]135/bins/mirai[.]armb8"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 13592,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 13592,
                "newInLastHour": 13352,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"38[.]190[.]196[.]25:5638\"",
                " \"14[.]225[.]212[.]124:53\"",
                " \"ns1[.]kcsc[.]tf\"",
                " \"ns2[.]kcsc[.]tf\"",
                " \"www[.]comoshops[.]com\""
            ]
        },
        "Feodo Tracker": {
            "description": "Botnet C2 server IPs from Feodo Tracker. Tracks Dridex, Emotet, TrickBot, QakBot, and BazarLoader.",
            "website": "https://feodotracker.abuse.ch/",
            "updateFrequency": "Hourly",
            "iocCount": 5,
            "iocDataUrl": "https://thehgtech.com/ioc-data/feodo-tracker.json",
            "stats": {
                "total": 5,
                "newInLastHour": 5,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "162[.]243[.]103[.]246",
                "178[.]62[.]3[.]223",
                "27[.]133[.]154[.]218",
                "34[.]204[.]119[.]63",
                "50[.]16[.]16[.]211"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 2206,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 2206,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "e58d378500a9237df93a66f055ac6e0dc900d7fa",
                "86b5a5612e53988e28ed6604e8e9ff5476a46d0e",
                "d92cdd1624e3d004a180b07c2d2f33406564f839",
                "a09be1ba7013678b6385135c590d4894b890dc75",
                "7a215b5a8eaf9b132cf84f22d9ee2202c2a028bf"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 52659,
            "activeSources": 8,
            "criticalAlerts": 26427,
            "activeCampaigns": 266
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 15627,
                "trend": "stable",
                "percentage": -2
            },
            {
                "category": "C2",
                "count": 10800,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4587,
                "trend": "up",
                "percentage": 100
            },
            {
                "category": "Phishing",
                "count": 300,
                "trend": "stable",
                "percentage": 0
            }
        ],
        "targetedSectors": [
            {
                "name": "General",
                "percentage": 99
            },
            {
                "name": "Tech",
                "percentage": 0
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]117[.]171[.]170",
                    "1[.]2[.]173[.]126",
                    "1[.]24[.]16[.]110"
                ]
            },
            {
                "name": "malware_download",
                "count": 14399,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://185[.]141[.]233[.]178:43580/bin[.]sh",
                    "hxxp://180[.]190[.]200[.]74:52008/i",
                    "hxxp://45[.]194[.]88[.]27:51441/i"
                ]
            },
            {
                "name": " \"unknown_loader\"",
                "count": 2141,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"wildsoulexpedition[.]com\"",
                    " \"williamdouglasjohnson[.]com\"",
                    " \"windblow[.]co[.]kr\""
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1710,
                "types": [
                    "ip-range"
                ],
                "sampleIndicators": [
                    "1.10.16.0/20",
                    "1.19.0.0/16",
                    "1.32.128.0/18"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1678,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"101[.]34[.]208[.]175:50050\"",
                    " \"101[.]34[.]208[.]175:22\"",
                    " \"23[.]238[.]82[.]42:3388\""
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 1522,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"trademarkairpro[.]com\"",
                    " \"trakino[.]fr\"",
                    " \"travaux-decoration-maison[.]fr\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1452,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "cb7fcaede3c6bb75e73ee72b8de7c23de2953dd4",
                    "990472ad57a4d7dcb13689a21b0c84252f5cf0a5",
                    "99500e5de097a58d95775e1f9da85597851bdb71"
                ]
            },
            {
                "name": "Vidar",
                "count": 806,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "86b5a5612e53988e28ed6604e8e9ff5476a46d0e",
                    "605e0b79c4a685b7da9524d6b71ec36bbd651b07",
                    "5f5d3a3225006f45ff8194536ef8e09cb194884d"
                ]
            },
            {
                "name": "Dridex",
                "count": 737,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "550e1cde5c59d03b6f3b9bd3ebfc4af6c7dbec48",
                    "38ecc7c543c90d25571eae05fbd1948a310761b7",
                    "6c1cd5f3b4f1a6da97a199397b1bae8226aac7bc"
                ]
            },
            {
                "name": "QuasarRAT",
                "count": 711,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "7a215b5a8eaf9b132cf84f22d9ee2202c2a028bf",
                    "8410f92dc9367bda715790bb163d32111731527d",
                    "9c6bff6fdc543dd366ea35f536945acd7177853a"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 55516,
        "lastCalculated": "2026-09-27 19:22 IST"
    }
};
