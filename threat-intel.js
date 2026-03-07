// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-07T08:11:30.258031+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-07T08:11:29.975410+05:30",
    "lastUpdatedFormatted": "Mar 07, 2026 at 08:11 AM IST",
    "comparisonPeriod": "Mar 06 \u2013 Mar 07, 2026",
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
                "hxxp://danaaindonesia4xl[.]cexd[.]my[.]id/",
                "hxxp://danaid1[.]layanan-resmii[.]biz[.]id/",
                "hxxps://www[.]robiox[.]com[.]gr/users/3473456048/profile",
                "hxxp://myfcivwudlomkmateam[.]saystudio[.]net/",
                "hxxps://www[.]roblox[.]com[.]gl/users/276858650846/profile"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1545,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1545,
                "newInLastHour": 42,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"ed946e15160678e136b1698c20a54248e9dedb63bd4e48e3126a55a8346279bc",
                " \"ee6d44c6b5f2411f4c4e77414efedc48d51f43c33de537bbce9b92b84b910444",
                " \"0c6d4e9924545dbe2d029e42581ff7ab3719f6447e96fa66ae2957da100c83ae",
                " \"92f285cbad9d112adef08464cb0056add9e91ae353f8846948cdcf57ef76fa5d",
                " \"4a86fae08a2ca6ef0b48bb2334fdacc7445476724d71a553d2631ba14c2e8613"
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
                "newInLastHour": 1,
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
                "1[.]170[.]60[.]81",
                "1[.]170[.]61[.]110",
                "1[.]188[.]23[.]25",
                "1[.]190[.]9[.]42"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5735,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5735,
                "newInLastHour": 5735,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]117[.]75[.]174",
                "1[.]12[.]45[.]226",
                "1[.]13[.]6[.]145",
                "1[.]15[.]103[.]109",
                "1[.]15[.]136[.]101"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 18788,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 18788,
                "newInLastHour": 18788,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://115[.]57[.]233[.]214:48305/bin[.]sh",
                "hxxps://move-node[.]dancingvcr[.]in[.]net/verification[.]google",
                "hxxp://115[.]50[.]47[.]213:50338/bin[.]sh",
                "hxxp://115[.]52[.]29[.]206:48762/i",
                "hxxp://115[.]52[.]29[.]206:48762/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1831,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1831,
                "newInLastHour": 1831,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"vcr-logic[.]dancingvcr[.]in[.]net\"",
                " \"lxbrands[.]se\"",
                " \"move-node[.]dancingvcr[.]in[.]net\"",
                " \"dance-vcr[.]dancingvcr[.]in[.]net\"",
                " \"lvlenergy[.]pl\""
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
            "iocCount": 9143,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9143,
                "newInLastHour": 4,
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
            "totalIndicators": 48455,
            "activeSources": 8,
            "criticalAlerts": 29806,
            "activeCampaigns": 216
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 20656,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9150,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 1367,
                "trend": "stable",
                "percentage": 0
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
                "count": 19085,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://123[.]129[.]135[.]56:46233/bin[.]sh",
                    "hxxp://219[.]157[.]17[.]247:51110/bin[.]sh",
                    "hxxp://59[.]98[.]82[.]61:47641/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]15[.]118[.]23",
                    "1[.]170[.]60[.]81",
                    "1[.]176[.]134[.]238"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1544,
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
                "count": 791,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"129[.]213[.]102[.]144:7443\"",
                    " \"136[.]244[.]82[.]119:7443\"",
                    " \"157[.]245[.]218[.]126:7443\""
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
                "name": " \"n/a",
                "count": 533,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"529c9f56c17eeb7f5f49fb924562da572c3eb2a291b33740476b9bafa3abb966",
                    " \"14cfadb8c0154dc1174b0b9af74765f769fad524d17eb2ec494ce02c9a221c8d",
                    " \"6371f599f652fe2126886c487718173008a14bf830d1a1f707201cfcc2e7f552"
                ]
            },
            {
                "name": "Vidar",
                "count": 387,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "55079857bbb8b752780408b8f5ab6e0b6d41b96f",
                    "b242cf8e0628b8a1804d04399e9170fb5ca86d64",
                    "c6c5cbb14fe2839ef4ece10f4b65bf92808f8440"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 41704,
        "lastCalculated": "2026-03-07 08:11 IST"
    }
};
