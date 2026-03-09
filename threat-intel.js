// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-09T19:07:07.240785+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-09T19:07:06.965659+05:30",
    "lastUpdatedFormatted": "Mar 09, 2026 at 07:07 PM IST",
    "comparisonPeriod": "Mar 08 \u2013 Mar 09, 2026",
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
                "hxxps://urlyte[.]com/7p8wh",
                "hxxp://asjaga[.]github[.]io/Amazon-Clone",
                "hxxps://roblox[.]com[.]ge/users/2080902816/profile",
                "hxxp://herakumarevoked-pixel[.]github[.]io/bos/",
                "hxxps://roblox[.]com[.]ly/games/920587237/Adopt-Me?privateServerLinkCode=33496133859616239750592447142648"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 646,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 646,
                "newInLastHour": 94,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"3bb394d69af7787043724157b5d76b89fcb9154a77da8a613bf71d03d87a05fd",
                " \"75a5663b7b0b0100688f8004b99630041134c77c457bea2a3f9b55d68b4015d3",
                " \"940773be1f5061eb206c7bbf3030765aac7b973f5a9915c62ba893a2d97b28f2",
                " \"c7fd4c593fc6ccf31d39aee0d13cb287fbeb1c2a5917fb756e5fda0134da12fb",
                " \"b853b61b0ac822b0544f86220bf521bb640c2de25d6de7fe1a92bceecebc3c09"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1525,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1525,
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
                "1[.]14[.]3[.]240",
                "1[.]15[.]51[.]236",
                "1[.]170[.]47[.]69",
                "1[.]170[.]60[.]81",
                "1[.]176[.]134[.]251"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 7485,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 7485,
                "newInLastHour": 7485,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]12[.]45[.]226",
                "1[.]15[.]136[.]28",
                "1[.]161[.]39[.]103",
                "1[.]163[.]253[.]212",
                "1[.]194[.]225[.]247"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 19559,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 19559,
                "newInLastHour": 19559,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://125[.]40[.]155[.]117:49840/i",
                "hxxps://iqdrq[.]slowbend[.]in[.]net/verification[.]google",
                "hxxp://115[.]49[.]65[.]228:46401/bin[.]sh",
                "hxxp://188[.]137[.]224[.]92/cache[.]bin",
                "hxxp://125[.]44[.]19[.]106:60875/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1116,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1116,
                "newInLastHour": 1056,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"ninjaflix-ead[.]bloco101[.]com\"",
                " \"iqdrq[.]slowbend[.]in[.]net\"",
                " \"s0lid-leaf[.]slowbend[.]in[.]net\"",
                " \"warmgrim[.]slowbend[.]in[.]net\"",
                " \"xxhigsz[.]redflat[.]in[.]net\""
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
            "iocCount": 9204,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9204,
                "newInLastHour": 16,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "23943a58946c0e85ada934588e3cdd70909e9d0f",
                "0d967feb37696cc0d8efe72998132dac504a2091",
                "6351234662461217b8b3178bd777b2dffe766ead",
                "8af633744198ffd5bb1e437173eb0292f95c668e",
                "edda834f9d99ba5d22b01adfab9c69873fa7c47c"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 47140,
            "activeSources": 8,
            "criticalAlerts": 29259,
            "activeCampaigns": 216
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 20083,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9176,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 391,
                "trend": "stable",
                "percentage": -4
            },
            {
                "category": "Phishing",
                "count": 302,
                "trend": "stable",
                "percentage": 0
            }
        ],
        "targetedSectors": [
            {
                "name": "General",
                "percentage": 97
            },
            {
                "name": "Tech",
                "percentage": 2
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 19482,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://219[.]154[.]175[.]220:54462/i",
                    "hxxps://link-logic[.]astronis[.]in[.]net/verification[.]google",
                    "hxxp://110[.]37[.]115[.]91:37452/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]14[.]3[.]240",
                    "1[.]170[.]47[.]69",
                    "1[.]170[.]60[.]81"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1538,
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
                "name": "AsyncRAT",
                "count": 1389,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "e074dd74eb8eb98468a94eb43b3487fe2b7f5980",
                    "d5a586a42fd4e36396467ae8d16045a5efd6bada",
                    "b4f112278f6f59e5e9d0a2aeb252c111a3ae8603"
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
                "count": 633,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "6b58bfd60fc3150331254a46d2e75f0856f5d0ae",
                    "78372e9666177fc65dbd5a41286bcd2f22c12bf0",
                    "58d0977e2eb2f58b80c1441ac8a77c7da332b266"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 539,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "f9e8d701de1740086da792e2c9be70df261e1832",
                    "20f30e05d2a2de117bdad78811946e112dc4dd6c",
                    "2987e30402370bdcbf291aedc9cd52a9a79bda0c"
                ]
            },
            {
                "name": "Vidar",
                "count": 394,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "8af633744198ffd5bb1e437173eb0292f95c668e",
                    "edda834f9d99ba5d22b01adfab9c69873fa7c47c",
                    "0ede08cde79bd849d4cb3f6a3bf44159375e7942"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 374,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"link-logic[.]astronis[.]in[.]net\"",
                    " \"niv-flow[.]niventa[.]in[.]net\"",
                    " \"term-sync[.]niventa[.]in[.]net\""
                ]
            },
            {
                "name": "Rhadamanthys",
                "count": 355,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "f999c0da0e983becc1c935444c5e609be26b0bcf",
                    "4101579ae950c954fc1096adf43bdefcf0364cfd",
                    "0c3ee8188ce35b6bb11d5b12a0e1e28310188b4e"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 43515,
        "lastCalculated": "2026-03-09 19:07 IST"
    }
};
