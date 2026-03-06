// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-06T22:26:06.312066+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-06T22:26:06.034510+05:30",
    "lastUpdatedFormatted": "Mar 06, 2026 at 10:26 PM IST",
    "comparisonPeriod": "Mar 05 \u2013 Mar 06, 2026",
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
                "hxxp://bitmrtlugie[.]webflow[.]io/",
                "hxxp://dropbox-home-page-cloneable[.]webflow[.]io/",
                "hxxp://www[.]easy-bank-landing-page-ecru[.]vercel[.]app/",
                "hxxps://usmeta-maskloogn[.]godaddysites[.]com/",
                "hxxp://www[.]usmeta-maskloogn[.]godaddysites[.]com/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1289,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1289,
                "newInLastHour": 628,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"03ceed8719bdcef60a9a3b46fee00c2f02df9035e8b9f37b7058e1fc022bbbe9",
                " \"8ddf24152eb78df606522c0a2080bffe9b09b2fffe21ab4ce9bc4cdbf467a992",
                " \"c01cc0a3fe9e26e5734cc7c8fd9bc668164cefce3ec796ec9b516be37666819c",
                " \"1f865dbcdbcadc63d6991c1534342a0c639c67894e545c9e31092faedd2ae1c9",
                " \"586febacf5342b1f3cf15099166a0eb9702154b8f46a504a0ddf2f28808da83c"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1514,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1514,
                "newInLastHour": 14,
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
                "1[.]15[.]118[.]23",
                "1[.]170[.]22[.]164",
                "1[.]170[.]60[.]81",
                "1[.]176[.]134[.]238",
                "1[.]188[.]101[.]189"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 6600,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6600,
                "newInLastHour": 6600,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]117[.]75[.]174",
                "1[.]12[.]45[.]226",
                "1[.]13[.]6[.]145",
                "1[.]15[.]136[.]101",
                "1[.]15[.]51[.]45"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 18842,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 18842,
                "newInLastHour": 18842,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://222[.]138[.]117[.]109:34226/bin[.]sh",
                "hxxp://110[.]37[.]115[.]167:39090/bin[.]sh",
                "hxxp://27[.]215[.]182[.]207:44013/bin[.]sh",
                "hxxp://112[.]198[.]186[.]100:46073/i",
                "hxxp://83[.]142[.]209[.]47/nullnet_load[.]x86_64"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1812,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1812,
                "newInLastHour": 1812,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"adapters-invitations-seating-sims[.]trycloudflare[.]com\"",
                " \"floppy-excited-advertisers-hosted[.]trycloudflare[.]com\"",
                " \"download[.]businessventure[.]cv\"",
                " \"download[.]vercel[.]qpon\"",
                " \"download[.]skibidibopbop[.]lol\""
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
                "178[.]62[.]3[.]223",
                "27[.]133[.]154[.]218",
                "34[.]204[.]119[.]63"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 9138,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9138,
                "newInLastHour": 5,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "23c94cd261c3b8f773e75058ec03edc2a23d8858",
                "e6695638f614e1601ecd6371c876351654623e06",
                "55079857bbb8b752780408b8f5ab6e0b6d41b96f",
                "ce5d858d667d8ff8b7368054839cb9861c6dcfac",
                "bdcaabf46794dc1cddf8c619938430fcfad5d281"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 47284,
            "activeSources": 8,
            "criticalAlerts": 28599,
            "activeCampaigns": 204
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 19450,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9149,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 1358,
                "trend": "stable",
                "percentage": -2
            },
            {
                "category": "Phishing",
                "count": 303,
                "trend": "stable",
                "percentage": 0
            }
        ],
        "targetedSectors": [
            {
                "name": "General",
                "percentage": 98
            },
            {
                "name": "Tech",
                "percentage": 1
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 18665,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://182[.]119[.]163[.]220:47170/bin[.]sh",
                    "hxxp://178[.]206[.]144[.]30:59164/i",
                    "hxxp://115[.]63[.]231[.]252:47275/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]170[.]22[.]164",
                    "1[.]170[.]60[.]81",
                    "1[.]176[.]134[.]238"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1520,
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
                "count": 1387,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "d5a586a42fd4e36396467ae8d16045a5efd6bada",
                    "b4f112278f6f59e5e9d0a2aeb252c111a3ae8603",
                    "08ed72afb9e65a6b0c216c2f47dfea81d64c9289"
                ]
            },
            {
                "name": " \"unknown\"",
                "count": 811,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"157[.]245[.]218[.]126:7443\"",
                    " \"bestbettersolutions[.]com\"",
                    " \"clearstats[.]org\""
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
                    "78372e9666177fc65dbd5a41286bcd2f22c12bf0",
                    "58d0977e2eb2f58b80c1441ac8a77c7da332b266",
                    "f856334cbdfb8b6d59158085280f3b830fab2fba"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 537,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "2987e30402370bdcbf291aedc9cd52a9a79bda0c",
                    "6fd95f4a2d9cec238cbe2e1756890381c4fae3cb",
                    "e2293f74d8d72bde90bb0424038259a9e3126e1b"
                ]
            },
            {
                "name": "Vidar",
                "count": 389,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "55079857bbb8b752780408b8f5ab6e0b6d41b96f",
                    "b242cf8e0628b8a1804d04399e9170fb5ca86d64",
                    "c6c5cbb14fe2839ef4ece10f4b65bf92808f8440"
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
        "fastestRisingThreat": " \"n/a",
        "totalAttacksThisHour": 43204,
        "lastCalculated": "2026-03-06 22:26 IST"
    }
};
