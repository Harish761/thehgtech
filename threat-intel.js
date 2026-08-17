// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-17T07:20:42.957987+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-17T07:20:42.620240+05:30",
    "lastUpdatedFormatted": "Aug 17, 2026 at 07:20 AM IST",
    "comparisonPeriod": "Aug 16 \u2013 Aug 17, 2026",
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
                "hxxps://accountverify[.]au/?r=52af92bf-8b89-4435-b120-23b09c38ef78",
                "hxxp://ecomaicer89teried[.]wasmer[.]app/",
                "hxxp://nologiceries814aug[.]wasmer[.]app/",
                "hxxp://xfinitywebmail26[.]weebly[.]com/",
                "hxxps://www[.]roblox[.]ly/users/2457444922/profile"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 614,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 614,
                "newInLastHour": 80,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"3f96a6e9f20241b149ebbc91f9e22f69722515e79bcbbc3c002fc2364f5e80b0",
                " \"d91e69f6cfc7d484a6a67de2e65712e995590af17a419b0b0c1ea22de3d2f81f",
                " \"57d4d81d179f20dce45e01c06873b803ca8af17ffb3109f471dd54d50e1afb7f",
                " \"45155d8d55da2f7b1b6d23db7bab4bc54f1e8b49d32bfe5a3c66a0e1fe3fde35",
                " \"b3b2d61cca83df235b52368ecff6142594fbfa1ff96bcc0ce5c12d4b3e1a50c1"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1686,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1686,
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
                "1[.]140[.]210[.]242",
                "1[.]15[.]14[.]29",
                "1[.]165[.]10[.]45",
                "1[.]189[.]248[.]114",
                "1[.]190[.]139[.]156"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4936,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4936,
                "newInLastHour": 4936,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]2[.]226[.]1",
                "1[.]20[.]150[.]200",
                "1[.]203[.]174[.]102",
                "1[.]214[.]214[.]114",
                "1[.]220[.]233[.]171"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 16677,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 16677,
                "newInLastHour": 16677,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://123[.]14[.]127[.]32:60165/i",
                "hxxp://42[.]234[.]162[.]6:59734/i",
                "hxxp://114[.]227[.]64[.]43:42442/bin[.]sh",
                "hxxp://91[.]92[.]242[.]236/files-129312398/files/file_4b8d61b5a6f660b5[.]exe",
                "hxxp://61[.]53[.]153[.]109:41774/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4955,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4955,
                "newInLastHour": 4638,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"markazululoom[.]org\"",
                " \"arcexploration[.]com[.]au\"",
                " \"guestlee[.]ch\"",
                " \"osteonat[.]com\"",
                " \"knowhaus[.]es\""
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
            "iocCount": 10441,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10441,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "057b2084f877c8737e60de6c07ad829ea411b9c6",
                "f3ba11a6cb8be921ee0fbd326de9a66220bcc82f",
                "dfde6725130631a83b3d0dc221736bad3db16918",
                "a45080c92a0b2314966517a4643ebf280e88a11b",
                "3141245c066d71ef08936296ffea7ea15082f7fd"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 50020,
            "activeSources": 8,
            "criticalAlerts": 28070,
            "activeCampaigns": 222
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 17650,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10420,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3864,
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
                "count": 17028,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://113[.]239[.]81[.]215:38553/i",
                    "hxxp://27[.]194[.]27[.]62:59829/bin[.]sh",
                    "hxxp://59[.]97[.]252[.]34:44324/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]140[.]210[.]242",
                    "1[.]183[.]161[.]214",
                    "1[.]183[.]17[.]214"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1686,
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
                "count": 1437,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "f50e245dc1e4a89d6cf5e07e31ae1392a3f9ad20",
                    "b5f071dd28b511f0b4b067507602a779feb4301f",
                    "714c56e9e207d5c8e08e1ca28cd9ba85f079d061"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1286,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"47[.]94[.]224[.]229:3306\"",
                    " \"47[.]94[.]224[.]229:21\"",
                    " \"47[.]94[.]224[.]229:22\""
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
                "name": "Vidar",
                "count": 708,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "057b2084f877c8737e60de6c07ad829ea411b9c6",
                    "f3ba11a6cb8be921ee0fbd326de9a66220bcc82f",
                    "d18f8b968bd5981971d6699bdc4ed7b96a3e7248"
                ]
            },
            {
                "name": "QuasarRAT",
                "count": 698,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "9b4c3ff8dc5891693f443320e3c1167c7cebe2b7",
                    "0f1b05653c3b3ab3bb4ecd772dd024668cbe8df1",
                    "b364395fee8c2e4c9eaf9a2531f6f7ac7bf8e4ae"
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
                "name": "OffLoader",
                "count": 460,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "dfde6725130631a83b3d0dc221736bad3db16918",
                    "183d02c077142b8701d1a719cc8cee3f8fb76072",
                    "05b215b1710e56a14f4742b10586af2750da866a"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"js.clearfake\"",
        "totalAttacksThisHour": 41636,
        "lastCalculated": "2026-08-17 07:20 IST"
    }
};
