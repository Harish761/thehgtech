// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-20T00:58:21.862094+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-20T00:58:21.570553+05:30",
    "lastUpdatedFormatted": "Mar 20, 2026 at 12:58 AM IST",
    "comparisonPeriod": "Mar 19 \u2013 Mar 20, 2026",
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
                "hxxps://nkhhkiyuui[.]weebly[.]com/",
                "hxxps://yuvraj-pal-2007[.]github[.]io/ShopVerse",
                "hxxp://kinsqarlogon[.]webflow[.]io/",
                "hxxps://site-9gzodesty[.]godaddysites[.]com/politique-de-confidentialit%C3%A9",
                "hxxp://www[.]cloneofair[.]vercel[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 811,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 811,
                "newInLastHour": 53,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"5b6430e115eb28e10d4e38f3cf311fd9fd39b358ab0dcd6d7ff49bf9d01dab3a",
                " \"9611dd668b4c8f4b9b4853c3877f724f0cd55a0cc3ab2390c3a826203fe20568",
                " \"992fc254a18612926413e6317e13654efafc1d80fc670e0ee46ddcb128c49dde",
                " \"3507a2757ff8521aec61165f7cb7a42c8c96f7058bfd4a7b26a81006b67198a3",
                " \"518305c46011c61a65763430383565c8c4e50a2f4a22116e67c682b2b5ed7ccd"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1539,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1539,
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
                "1[.]10[.]185[.]224",
                "1[.]15[.]118[.]23",
                "1[.]174[.]49[.]202",
                "1[.]176[.]134[.]253",
                "1[.]188[.]100[.]103"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5324,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5324,
                "newInLastHour": 5324,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]145[.]14[.]149",
                "1[.]162[.]198[.]111",
                "1[.]163[.]233[.]52",
                "1[.]189[.]21[.]20",
                "1[.]197[.]102[.]62"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 20670,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 20670,
                "newInLastHour": 20670,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://rack1node[.]astropoint[.]in[.]net/verification[.]google",
                "hxxp://42[.]227[.]203[.]243:34216/bin[.]sh",
                "hxxp://110[.]39[.]238[.]26:39255/i",
                "hxxp://182[.]121[.]194[.]203:52297/bin[.]sh",
                "hxxps://data3sync[.]lumenlabs[.]in[.]net/verification[.]google"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 2059,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 2059,
                "newInLastHour": 2031,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"main4point[.]lumenlabs[.]in[.]net\"",
                " \"asyc[.]pukkre[.]com\"",
                " \"data3sync[.]lumenlabs[.]in[.]net\"",
                " \"gate2proxy[.]lumenlabs[.]in[.]net\"",
                " \"38[.]240[.]55[.]119:1912\""
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
            "iocCount": 9323,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9323,
                "newInLastHour": 12,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "9d77eb9cdbe47e39906a6a8a2cfb6b4eef6f29b0",
                "f506d6391b6121bb867912603f1c231627013cb2",
                "126fb0c3c98f6c3f9e359774e9b174a810eb9871",
                "2b0d3754fbe14d940ef67296b7fbcc7b6b780c93",
                "bb50d3d5c445956dc5d72db51cf488465a463719"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 49501,
            "activeSources": 8,
            "criticalAlerts": 30597,
            "activeCampaigns": 223
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 21307,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9290,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 742,
                "trend": "stable",
                "percentage": -6
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
                "percentage": 94
            },
            {
                "name": "Tech",
                "percentage": 5
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 20510,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://110[.]37[.]35[.]89:48769/i",
                    "hxxp://125[.]43[.]227[.]15:45255/i",
                    "hxxp://59[.]97[.]255[.]117:37836/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]10[.]185[.]224",
                    "1[.]15[.]118[.]23",
                    "1[.]174[.]49[.]202"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1540,
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
                "count": 1391,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "c415fb25075e3df71a6a9bf67750cbf6a6c7e868",
                    "ba3e7e73b6c654a979d4e4fe20b4aa24890b4518",
                    "e074dd74eb8eb98468a94eb43b3487fe2b7f5980"
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
                "count": 640,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "126fb0c3c98f6c3f9e359774e9b174a810eb9871",
                    "d9fa0ea682b5e53c1fcad5edfc64b89fbfd468da",
                    "7692429d5ce694bd30c57fae26a56dd8fd960faf"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 543,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "0211433cfdfedfc7352c1228fc58d9d2f9d49032",
                    "8ebe0d48a1178a816162ca9b034b7b653d0fc12b",
                    "da0f6a5937d3c2d365ffeddb881b4136313e1afa"
                ]
            },
            {
                "name": " \"elf.mozi\"",
                "count": 529,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxp://110[.]37[.]5[.]55:33751/i\"",
                    " \"hxxp://115[.]48[.]47[.]68:55835/i\"",
                    " \"hxxp://42[.]59[.]115[.]239:60942/i\""
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 492,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"flow4work[.]sinapsov[.]in[.]net\"",
                    " \"net3local[.]sinapsov[.]in[.]net\"",
                    " \"sys2power[.]sinapsov[.]in[.]net\""
                ]
            },
            {
                "name": "Vidar",
                "count": 435,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "9d77eb9cdbe47e39906a6a8a2cfb6b4eef6f29b0",
                    "f506d6391b6121bb867912603f1c231627013cb2",
                    "2b0d3754fbe14d940ef67296b7fbcc7b6b780c93"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 43395,
        "lastCalculated": "2026-03-20 00:58 IST"
    }
};
