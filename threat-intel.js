// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-19T22:39:50.379562+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-19T22:39:50.090367+05:30",
    "lastUpdatedFormatted": "Mar 19, 2026 at 10:39 PM IST",
    "comparisonPeriod": "Mar 18 \u2013 Mar 19, 2026",
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
            "iocCount": 773,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 773,
                "newInLastHour": 87,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"c786f503dd4ac3f8b596b2974b51e156021275010f13a993cc7bbc31bb1932f8",
                " \"4160a93073bd698a61c281ec4b12dbc76d708a1b8d9c074d9fe66b936d38bdaf",
                " \"f435070744c41dd8cd85d41b6415d9ad4dd28552e8fcba9092a0fce04d0a31fc",
                " \"f67a9f79d2adf2ed0b74c2ba2f8b841d4b86830f648fa63b654839fb5eff2049",
                " \"f1a9ab1bd8b2d3738c6abfcb2b84820efa405f09915884da57aa421fc42dafdf"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1540,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1540,
                "newInLastHour": 3,
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
            "iocCount": 5526,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5526,
                "newInLastHour": 5526,
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
            "iocCount": 20510,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 20510,
                "newInLastHour": 20510,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://110[.]37[.]35[.]89:48769/i",
                "hxxp://125[.]43[.]227[.]15:45255/i",
                "hxxp://59[.]97[.]255[.]117:37836/bin[.]sh",
                "hxxp://110[.]39[.]252[.]138:46786/bin[.]sh",
                "hxxps://flow4work[.]sinapsov[.]in[.]net/verification[.]google"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 2061,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 2061,
                "newInLastHour": 2034,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"flow4work[.]sinapsov[.]in[.]net\"",
                " \"net3local[.]sinapsov[.]in[.]net\"",
                " \"sys2power[.]sinapsov[.]in[.]net\"",
                " \"mon1point[.]sinapsov[.]in[.]net\"",
                " \"entry4link[.]metravolta[.]in[.]net\""
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
            "iocCount": 9312,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9312,
                "newInLastHour": 38,
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
            "totalIndicators": 49441,
            "activeSources": 8,
            "criticalAlerts": 30476,
            "activeCampaigns": 220
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 21212,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9264,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 796,
                "trend": "stable",
                "percentage": -1
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
                "count": 20401,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://vellithos5[.]domprot[.]in[.]net/verification[.]google",
                    "hxxp://83[.]219[.]1[.]198:60333/i",
                    "hxxps://chec-deliv[.]domprot[.]in[.]net/verification[.]google"
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
                    "1[.]170[.]10[.]139",
                    "1[.]174[.]49[.]202"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1537,
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
                    "c415fb25075e3df71a6a9bf67750cbf6a6c7e868",
                    "e074dd74eb8eb98468a94eb43b3487fe2b7f5980",
                    "d5a586a42fd4e36396467ae8d16045a5efd6bada"
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
                "count": 641,
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
                "count": 542,
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
                "count": 489,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"chec-deliv[.]domprot[.]in[.]net\"",
                    " \"sercore9et[.]domprot[.]in[.]net\"",
                    " \"rend-velve[.]commonit[.]in[.]net\""
                ]
            },
            {
                "name": "Vidar",
                "count": 420,
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
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 43503,
        "lastCalculated": "2026-03-19 22:39 IST"
    }
};
