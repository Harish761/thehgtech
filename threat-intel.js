// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-08T00:26:58.530733+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-08T00:26:58.253372+05:30",
    "lastUpdatedFormatted": "Mar 08, 2026 at 12:26 AM IST",
    "comparisonPeriod": "Mar 07 \u2013 Mar 08, 2026",
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
                "hxxps://m-facebookk[.]com[.]vn/1mdf3g383mb?v",
                "hxxp://twtr023[.]surge[.]sh/",
                "hxxps://khalid9096[.]github[.]io/Amazon-Clone-Website",
                "hxxps://authfile[.]us-east-1[.]linodeobjects[.]com/moon052026[.]html",
                "hxxps://kucoin-logink[.]gitbook[.]io/us/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1399,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1399,
                "newInLastHour": 44,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"ceffb43a1accb587a4d7dcff57320c74d60cdd7c73cdc287518fe2e269390258",
                " \"d37362975822e819a528acd9339b880fd7de69d13a41d13e67dbbfc3d6ba80b7",
                " \"4c5efe32d54de7b8c37fa0a4f242b905cd21fe3dbde1c44b7dba9f044d87c551",
                " \"a17a344830e556045218bd17f6004c62203406ba7712154d0bdac44edf8193ca",
                " \"5fae4370735e01518bfa6fa64491e947ac864e31b960379a7f8192b0a1c67f00"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1536,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1536,
                "newInLastHour": 6,
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
                "1[.]15[.]14[.]29",
                "1[.]170[.]60[.]81",
                "1[.]177[.]63[.]24",
                "1[.]180[.]252[.]30",
                "1[.]188[.]101[.]189"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 6242,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6242,
                "newInLastHour": 6242,
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
                "1[.]15[.]136[.]28"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 19219,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 19219,
                "newInLastHour": 19219,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://ccleaner[.]gl",
                "hxxp://219[.]157[.]64[.]60:51110/i",
                "hxxps://par-v33[.]parishwhale[.]in[.]net/verification[.]google",
                "hxxp://185[.]38[.]142[.]156/huhu/titanjr[.]",
                "hxxp://46[.]8[.]68[.]4/bins/sora[.]x86_64"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1961,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1961,
                "newInLastHour": 1790,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"burning-edge[.]sbs\"",
                " \"ccleaner[.]gl\"",
                " \"par-v33[.]parishwhale[.]in[.]net\"",
                " \"144[.]31[.]130[.]135:443\"",
                " \"178[.]208[.]187[.]77:666\""
            ]
        },
        "Feodo Tracker": {
            "description": "Botnet C2 server IPs from Feodo Tracker. Tracks Dridex, Emotet, TrickBot, QakBot, and BazarLoader.",
            "website": "https://feodotracker.abuse.ch/",
            "updateFrequency": "Hourly",
            "iocCount": 4,
            "iocDataUrl": "https://thehgtech.com/ioc-data/feodo-tracker.json",
            "stats": {
                "total": 4,
                "newInLastHour": 4,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "162[.]243[.]103[.]246",
                "178[.]62[.]3[.]223",
                "27[.]133[.]154[.]218",
                "34[.]204[.]119[.]63"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 9198,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9198,
                "newInLastHour": 25,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "fc13b72e3fbc49e25fb617047297c3d1bf51da7f",
                "493192edea58ec659ee270032660c6113e9b448e",
                "f9e8d701de1740086da792e2c9be70df261e1832",
                "f8a1e818bbf73503bfd83ab3f81850ef797fd2b7",
                "b84f367205c3150a29707120bc237a5161d8886e"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48364,
            "activeSources": 8,
            "criticalAlerts": 29679,
            "activeCampaigns": 224
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 20528,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9151,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 1281,
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
                "count": 19120,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://salv-net[.]crucifionsalval[.]in[.]net/verification[.]google",
                    "hxxp://115[.]51[.]93[.]196:53431/bin[.]sh",
                    "hxxp://115[.]49[.]203[.]152:35447/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]15[.]14[.]29",
                    "1[.]170[.]60[.]81",
                    "1[.]177[.]63[.]24"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1532,
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
                "count": 1388,
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
                "name": " \"unknown\"",
                "count": 643,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"20[.]100[.]168[.]21:7443\"",
                    " \"hxxps://cdn3-cloudservices-verify[.]t3[.]storage[.]dev/follow/index[.]html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=tid_Nl_UVnrlTsPFGJopLnpfmGrvpgTyRTbexMsA_zhm_SbzIxFvyp%2F20260306%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20260306T125126Z&X-Amz-Expires=172800&X-Amz-SignedHeaders=host&X-Amz-Signature=119933e7d1a96d2c07ac541a641e6de626ce18247ab1555cf5da7838efe9c897\"",
                    " \"tricitiesbydesign[.]com\""
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
                "count": 531,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"b93fd9dfa9d03389fc29b4cbeff96b1ebf2da55fd90ef11e64a193bb98d66eb8",
                    " \"66adeedfb739774fcc09aa7426c8fad29f8047ab4caee8040d07c0e84d011611",
                    " \"34d64b3cd9430e85edefcb883973a086dd5de9917e05fabec89b1f4ab9627e91"
                ]
            },
            {
                "name": "Vidar",
                "count": 386,
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
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 42630,
        "lastCalculated": "2026-03-08 00:26 IST"
    }
};
