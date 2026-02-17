// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-02-17T19:06:17.224020+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-02-17T19:06:16.948542+05:30",
    "lastUpdatedFormatted": "Feb 17, 2026 at 07:06 PM IST",
    "comparisonPeriod": "Feb 16 \u2013 Feb 17, 2026",
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
                "hxxp://glistening-bonbon-2acaf3[.]netlify[.]app/",
                "hxxps://easy-bank-psi[.]vercel[.]app/",
                "hxxps://www[.]easy-bank-psi[.]vercel[.]app/",
                "hxxps://financeunisocks[.]xyz/",
                "hxxp://netflix-two-ashy[.]vercel[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 767,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 767,
                "newInLastHour": 26,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"1abc133966ea5edf3820bbab01bdbfb6c14555bd7be174e0be18870e3469ee6e",
                " \"bebf78493db9f3c7bc38fe31f58b85d81305b4f7f27ee62f277dbddb4b8d5af8",
                " \"d14759935f5fb9fbfbb4071b8d9473b88b919698ec2740c789ba2a5b95eb82e8",
                " \"67bc27edf75ac2cbda6aca3c276571190d77d6b1314ae86662c2fed2bfdfb9ad",
                " \"0340bec4784203989cd41ba0910ebe60bf12c64feaad88f693395bc457af61d5"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1470,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1470,
                "newInLastHour": 2,
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
                "1[.]11[.]132[.]194",
                "1[.]15[.]118[.]23",
                "1[.]15[.]22[.]112",
                "1[.]170[.]30[.]220",
                "1[.]170[.]60[.]90"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 7004,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 7004,
                "newInLastHour": 7004,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]13[.]79[.]212",
                "1[.]14[.]12[.]141",
                "1[.]14[.]254[.]146",
                "1[.]145[.]11[.]218",
                "1[.]15[.]77[.]170"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 19801,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 19801,
                "newInLastHour": 19801,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://crate[.]peach3package[.]coupons/edge",
                "hxxp://115[.]54[.]124[.]15:57879/i",
                "hxxp://42[.]176[.]124[.]222:35772/bin[.]sh",
                "hxxp://42[.]239[.]228[.]49:56600/i",
                "hxxps://ni7zcfqx[.]gas98generator[.]digital/?=check&&actmn=UZxljOlCPNqhZYlj"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1076,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1076,
                "newInLastHour": 842,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"crate[.]peach3package[.]coupons\"",
                " \"172[.]86[.]113[.]29:8445\"",
                " \"ni7zcfqx[.]gas98generator[.]digital\"",
                " \"zgxymk8f[.]gas98generator[.]digital\"",
                " \"38[.]246[.]251[.]131:6666\""
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
                "178[.]62[.]3[.]223"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 8959,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8959,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "e89906297ea54d3a4d9648c9b2602552d24f050e",
                "ddc804f989c85db6fb3f1185a6a3f8c73489f827",
                "d9f0ae4d93f594855b95e3fcb9672f882088bf87",
                "c8289f1dbf34119443a3077fd879c3433506f358",
                "b5d66815628fb0cdf61f54d6f5703c146decc1dc"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 47316,
            "activeSources": 8,
            "criticalAlerts": 29459,
            "activeCampaigns": 223
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 20506,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "C2",
                "count": 8953,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 556,
                "trend": "stable",
                "percentage": 0
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
                "count": 19712,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://42[.]230[.]219[.]233:54362/bin[.]sh",
                    "hxxp://27[.]37[.]113[.]11:37596/i",
                    "hxxps://m9jn8b8q[.]ostroy56sagacious[.]digital/?=check&&actmn=uNPxnryPMUaYwcrS"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]11[.]132[.]194",
                    "1[.]15[.]118[.]23",
                    "1[.]15[.]22[.]112"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1472,
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
                "count": 620,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "4091cdf235522076668c6f698479d4af4e5d2bf8",
                    "f7b6ed231ee6c9dc773697ae24f09c559fbee477",
                    "71f4fecadb5ed6289cca27ffaedd2ec02f4450e0"
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
                "count": 379,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"ff38c4c73fbe1c98624a3dba227f51f7c61d10e75a6e0c3ff36b8926a4edb30e",
                    " \"7fbd8b70c4ec11802a8a4e9b857278bf81e4f57ad278f3309a87726f2b79fce6",
                    " \"9eebcd36b43db42e9158f2fa7eba07457494a97b8d1cd110e69cc5c4d9681867"
                ]
            },
            {
                "name": "Vidar",
                "count": 369,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "e89906297ea54d3a4d9648c9b2602552d24f050e",
                    "ddc804f989c85db6fb3f1185a6a3f8c73489f827",
                    "c8289f1dbf34119443a3077fd879c3433506f358"
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
        "totalAttacksThisHour": 42978,
        "lastCalculated": "2026-02-17 19:06 IST"
    }
};
