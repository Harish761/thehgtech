// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-02-14T22:15:34.933194+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-02-14T22:15:34.657972+05:30",
    "lastUpdatedFormatted": "Feb 14, 2026 at 10:15 PM IST",
    "comparisonPeriod": "Feb 13 \u2013 Feb 14, 2026",
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
                "hxxp://kucoin-login-authh[.]webflow[.]io/",
                "hxxp://krrakeionutyusloggin[.]webflow[.]io/",
                "hxxp://login-kucoinin[.]webflow[.]io/",
                "hxxp://itrustcepitaloginus[.]webflow[.]io/",
                "hxxp://secure--s-netcoins-com---auth[.]webflow[.]io/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 819,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 819,
                "newInLastHour": 44,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"6bd1f3734896ee37b26a838fcc20c5a9915f58ff9bad49a9debbfe5a42b988cd",
                " \"d6c8c18dbc47521d80575eee4f4267e8076eaf360d72d423e4b7056cbc8bc830",
                " \"e5f83c66e93fc7e36cd7141ef14520ddeb95e90a8d86db4882fd9c04c68a1aa0",
                " \"2086ece64145022a260c7676e660e93d2a1be44a767a8233daa4f14d0125e0bd",
                " \"7205de836fde1eb31c903a31ce94f8de8b1cfe51b880a04b63e0050d29a782bd"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1474,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1474,
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
                "1[.]119[.]209[.]130",
                "1[.]15[.]116[.]189",
                "1[.]15[.]118[.]23",
                "1[.]15[.]22[.]112",
                "1[.]15[.]51[.]236"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5654,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5654,
                "newInLastHour": 5654,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]13[.]79[.]212",
                "1[.]15[.]116[.]189",
                "1[.]15[.]136[.]28",
                "1[.]15[.]77[.]170",
                "1[.]194[.]219[.]159"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 19602,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 19602,
                "newInLastHour": 19602,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://k0zhev-rnix[.]kozhevnik6lan[.]coupons/string",
                "hxxp://42[.]224[.]149[.]89:42230/bin[.]sh",
                "hxxp://110[.]39[.]230[.]3:49066/i",
                "hxxp://112[.]242[.]190[.]54:33161/i",
                "hxxp://42[.]236[.]239[.]79:46087/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1244,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1244,
                "newInLastHour": 1055,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"k0zhev-rnix[.]kozhevnik6lan[.]coupons\"",
                " \"glacier[.]kozhevnik6lan[.]coupons\"",
                " \"199[.]101[.]111[.]135:3790\"",
                " \"150[.]109[.]63[.]68:64443\"",
                " \"105[.]68[.]228[.]221:80\""
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
                "162[.]243[.]103[.]246",
                "172[.]232[.]59[.]14",
                "34[.]204[.]119[.]63"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 8944,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8944,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "c1c0073363896e9c687faf206199b45ffe4297b6",
                "c5091d64084fde2aa1305d4f4eb4eb136d8af5eb",
                "952943ce38e1497736f79a88ec948506a915990d",
                "e448b00d829b3223ae7fc3f099436017d2bb01a4",
                "5324e2c55e596d1d2e68031819751c0703ac9cd1"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 47139,
            "activeSources": 8,
            "criticalAlerts": 29231,
            "activeCampaigns": 213
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 20293,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8938,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 773,
                "trend": "down",
                "percentage": -27
            },
            {
                "category": "Phishing",
                "count": 301,
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
                "count": 19467,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://f1int-0rb[.]flint1zarco[.]coupons/string",
                    "hxxp://61[.]52[.]102[.]99:57204/bin[.]sh",
                    "hxxp://219[.]155[.]210[.]45:54045/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]119[.]209[.]130",
                    "1[.]15[.]116[.]189",
                    "1[.]15[.]118[.]23"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1486,
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
                "count": 1383,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "bef81c1fd26e84e5e25a4182bf668304ba2891da",
                    "adb1b31a6283691b205839f5e3ce4f8ed7aa5f54",
                    "97e58eec776ad990a10d1f4a932e1a4ae48636b3"
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
                "count": 619,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "f7b6ed231ee6c9dc773697ae24f09c559fbee477",
                    "71f4fecadb5ed6289cca27ffaedd2ec02f4450e0",
                    "1ea8ec48d9f0b8873db62ceb0d56bc89bd5b326e"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 535,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "e2293f74d8d72bde90bb0424038259a9e3126e1b",
                    "69101b8edfa5d5e2ead4512a6d71c84748b0c012",
                    "1d28cc6dca52e95f859739c39a04d794671f66d9"
                ]
            },
            {
                "name": " \"Mirai",
                "count": 402,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"c7f5bb4ecdd08137d77827aa0b5b8b3c9d964bc80c634b67ab3aef7f80f6490b",
                    " \"260d639a1615daf0eb6130bb399b08b7b0c4dbf4817d9474ff95c0e73ffe81c5",
                    " \"1d73dfa85a6ab46e4685def50046a45758f428206f50a52917e2b8c48e2225bf"
                ]
            },
            {
                "name": "Vidar",
                "count": 366,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "c99dd917e7a01d0c7fdbc8edf8fe14b6a4673bf8",
                    "3e86dd1b2a8a50c4263271ffbe28deb2837b320f",
                    "a5ed9149808f93889c8c68e55082d39cf24ae8d7"
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
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 41658,
        "lastCalculated": "2026-02-14 22:15 IST"
    }
};
