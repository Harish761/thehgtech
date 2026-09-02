// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-02T09:50:19.115187+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-02T09:50:18.847509+05:30",
    "lastUpdatedFormatted": "Sep 02, 2026 at 09:50 AM IST",
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
                "hxxps://authentication[.]ms/E[.]6pY1BDA3LAzO?/VGhlIG5leHQgZ2VuZXJhdGlvbiBvZiBzZWN1cml0eSBhd2FyZW5lc3MgaXMgZGVzaWduZWQgZm9yIGVtcGxveWVlcyBhbmQgYnVpbHQgZm9yIGVudGVycHJpc2VzLiBPdXIgaW5kdXN0cnktbGVhZGluZyByZXN1bHRzIGFyZSBwb3dlcmVkIGJ5IGNvZ25pdGl2ZSBhdXRvbWF0aW9uLg",
                "hxxps://tk-mall68[.]com/www/",
                "hxxp://ledger-pro-9u0[.]pages[.]dev/",
                "hxxp://ledger--live-uss[.]pages[.]dev/",
                "hxxp://learn-us-ledger[.]pages[.]dev/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 685,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 685,
                "newInLastHour": 30,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"05c534335612b6c3278f957ab0f40fa1f25f6e26488790416f87720ea04dfce5",
                " \"d226baf09ee2071fd90a2e413d384a98768fd9188314414cf4179aaa1f834a52",
                " \"7c83eaa84cbf4f5bcde0d3d7c636b817e710fc33dbe0ba69f912f906bf93bb9f",
                " \"1dd8bce285a289682e1a21e9e81d9254f091c21bc189682f4afdb82a666bba39",
                " \"d188167a5f520c91143254ebb985715cb590440e9632a39c57201cf5abe69bba"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1709,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1709,
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
                "1[.]119[.]158[.]77",
                "1[.]12[.]229[.]231",
                "1[.]180[.]184[.]182",
                "1[.]183[.]148[.]62",
                "1[.]24[.]16[.]140"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 12568,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 12568,
                "newInLastHour": 12568,
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
            "iocCount": 15290,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 15290,
                "newInLastHour": 15290,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://221[.]203[.]86[.]144:41208/i",
                "hxxp://42[.]225[.]230[.]137:40226/i",
                "hxxp://39[.]79[.]47[.]37:48491/i",
                "hxxp://39[.]79[.]47[.]37:48491/bin[.]sh",
                "hxxp://42[.]225[.]230[.]137:40226/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 5104,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 5104,
                "newInLastHour": 4873,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"152[.]136[.]56[.]105:8888\"",
                " \"130[.]12[.]180[.]237:8888\"",
                " \"183[.]60[.]226[.]2:6622\"",
                " \"xyrerexi[.]workers[.]dev\"",
                " \"wh9w824a[.]shop-dentavive[.]com\""
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
            "iocCount": 10590,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10590,
                "newInLastHour": 0,
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
            "totalIndicators": 49013,
            "activeSources": 8,
            "criticalAlerts": 27014,
            "activeCampaigns": 237
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 16420,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10594,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "Botnet",
                "count": 4534,
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
                "count": 15691,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://112[.]248[.]184[.]44:32848/i",
                    "hxxp://115[.]59[.]37[.]238:56506/i",
                    "hxxp://42[.]233[.]91[.]171:56278/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]120[.]123[.]117",
                    "1[.]12[.]229[.]231",
                    "1[.]183[.]160[.]23"
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
                "count": 1441,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "8c2a430246ca36ca14885fe1a101c61eaab4a96c",
                    "7f44d36f1f6bd375ba4e4a7866328a76047ce498",
                    "f351f7dbe9c583f75758b39cd307f5359d110c73"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1314,
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
                "count": 756,
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
                "count": 545,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"91[.]92[.]47[.]203:56001\"",
                    " \"91[.]92[.]47[.]214:443\"",
                    " \"77[.]83[.]39[.]141:56001\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"win.vidar\"",
        "totalAttacksThisHour": 48066,
        "lastCalculated": "2026-09-02 09:50 IST"
    }
};
