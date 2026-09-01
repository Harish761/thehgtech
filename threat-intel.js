// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-02T02:44:17.224656+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-02T02:44:16.868630+05:30",
    "lastUpdatedFormatted": "Sep 02, 2026 at 02:44 AM IST",
    "comparisonPeriod": "Sep 01 \u2013 Sep 02, 2026",
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
                "hxxps://https-wvvw-roblox[.]com/users/1903963388/profile",
                "hxxp://learn-trezro-en-public[.]pages[.]dev/",
                "hxxp://ledger--life[.]pages[.]dev/",
                "hxxps://ledger-io-live-cdn[.]pages[.]dev/",
                "hxxps://hw7393[.]craftum[.]io/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 712,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 712,
                "newInLastHour": 10,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"9a362e54c5fe38a72bf48e3fd7e35cb20e52f85e4e0cfb4b9b152c324714ad50",
                " \"6af5634511b96d2f4e92255fab614aa1eb5f0fb8963375f2c0b7e82ebeac4982",
                " \"39cf634622d15b5139c8646de73d0e69191cc89c4ff3fe6ebfbe71c672a2200f",
                " \"c3291f11a31a8574a725402f364a5ad332836782c6e2b57cca19f670e82eff9d",
                " \"9ecda8119716ad4a113788fc50589e068f078be02423b6b0859fc5f1f29d5cda"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 541,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 541,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ip-range"
            ],
            "sampleIndicators": [
                "2.26.75.0/24",
                "2.27.5.0/24",
                "2.27.62.0/24",
                "2.57.17.0/24",
                "2.58.56.0/24"
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
                "1[.]120[.]123[.]117",
                "1[.]181[.]200[.]22",
                "1[.]183[.]160[.]23",
                "1[.]192[.]176[.]104",
                "1[.]193[.]63[.]118"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 13350,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 13350,
                "newInLastHour": 13350,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]162[.]197[.]67",
                "1[.]162[.]237[.]203",
                "1[.]162[.]247[.]182",
                "1[.]174[.]208[.]30"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 15690,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 15690,
                "newInLastHour": 15690,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://115[.]59[.]37[.]238:56506/i",
                "hxxp://42[.]233[.]91[.]171:56278/i",
                "hxxp://105[.]224[.]39[.]134:50787/i",
                "hxxp://105[.]224[.]39[.]134:50787/bin[.]sh",
                "hxxp://42[.]178[.]153[.]144:51307/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4991,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4991,
                "newInLastHour": 4760,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxp://neortal[.]click:8321/videos\"",
                " \"hxxp://bestals[.]shop:8592/comments\"",
                " \"102[.]220[.]160[.]198:2027\"",
                " \"39[.]102[.]57[.]23:5555\"",
                " \"2[.]91[.]182[.]143:443\""
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
            "iocCount": 10436,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10436,
                "newInLastHour": 28,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "17d881f02866b9e629d39d16bdf43ca953b38d5c",
                "bfb6503c7c6ce8af43c41197a7fcaec491baa810",
                "696ef14e986d01e7d9186a690a06849c9cc49c4b",
                "cab93f3d490ed168600f08e5cc4a55d4e8c503c8",
                "4e1d76e094c1a61d2e1ed367f67545fabe9bc074"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48989,
            "activeSources": 8,
            "criticalAlerts": 27010,
            "activeCampaigns": 237
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 16444,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "C2",
                "count": 10566,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4508,
                "trend": "stable",
                "percentage": 0
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
                "name": "malware_download",
                "count": 15683,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://61[.]54[.]167[.]178:52114/i",
                    "hxxp://146[.]66[.]248[.]182:48109/bin[.]sh",
                    "hxxp://103[.]18[.]13[.]107:44599/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]12[.]229[.]231",
                    "1[.]183[.]160[.]23",
                    "1[.]192[.]176[.]104"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1709,
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
                "count": 1438,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "8c2a430246ca36ca14885fe1a101c61eaab4a96c",
                    "7f44d36f1f6bd375ba4e4a7866328a76047ce498",
                    "f50e245dc1e4a89d6cf5e07e31ae1392a3f9ad20"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1323,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"114[.]66[.]27[.]110:8080\"",
                    " \"114[.]66[.]27[.]110:443\"",
                    " \"114[.]66[.]27[.]110:80\""
                ]
            },
            {
                "name": "Vidar",
                "count": 747,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "bfb6503c7c6ce8af43c41197a7fcaec491baa810",
                    "851e9888eda6290dc6d0c817ac0c82488a9e0bd8",
                    "4bf18cb50cb5bca46aff5785c1ba96a248d1e9fd"
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
                "count": 700,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "a6e6aa58bac84e56b868f5f618ef227b75d7208e",
                    "d123d7f43d63545c7a8f643acbe73e81f35c3f14",
                    "9b4c3ff8dc5891693f443320e3c1167c7cebe2b7"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 558,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "a45080c92a0b2314966517a4643ebf280e88a11b",
                    "501d817bb1780acfe5e47082c43472bda8068e4d",
                    "2beac2ee8b2fe7625d4de9f5381d37f200965f91"
                ]
            },
            {
                "name": " \"win.pure_rat\"",
                "count": 532,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"144[.]31[.]6[.]0:443\"",
                    " \"38[.]18[.]228[.]183:56001\"",
                    " \"91[.]219[.]237[.]84:56001\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 49143,
        "lastCalculated": "2026-09-02 02:44 IST"
    }
};
