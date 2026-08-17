// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-17T18:30:59.133219+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-17T18:30:58.761125+05:30",
    "lastUpdatedFormatted": "Aug 17, 2026 at 06:30 PM IST",
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
                "hxxps://qnkxz71mjwy-mtvljren-6j5j7g-zl299a[.]pages[.]dev/welcome_aboard?welcome=1000968689063090&token248=1000968689063090&name_token136=Debbie%20Anderson%20for%20School%20Board",
                "hxxps://prime-video[.]app/?token=2a0e3d50",
                "hxxp://www[.]ozatak[.]com/office/",
                "hxxps://abaxmt-v6e0unyq[.]vercel[.]app/landing[.]html",
                "hxxps://www[.]roblox[.]com[.]mu/users/126763005/profile"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 645,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 645,
                "newInLastHour": 44,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"6ca59bf579f576cae1e08b2696d2cd461a9813009ace9ee7d410d0187f318efa",
                " \"dfdfdde4a0346e8870aadddb03736318b5138c89bbf290e1c0143a7723046701",
                " \"a77b9a651bd09e64215bdfc65d99fe93bff5dfa8a50748f02bf5d9b699399736",
                " \"093db91d8a9c42faf74d6531eacab95e1175952a8defd0a86113ab92403e4f22",
                " \"a817e8e27b29552bbb35fccc35d0fa5cc4076b3590d42412b6e1b43b266b7c41"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1650,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1650,
                "newInLastHour": 8,
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
                "1[.]119[.]194[.]226",
                "1[.]165[.]27[.]71",
                "1[.]188[.]102[.]97",
                "1[.]190[.]44[.]221",
                "1[.]192[.]129[.]106"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4873,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4873,
                "newInLastHour": 4873,
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
            "iocCount": 16996,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 16996,
                "newInLastHour": 16996,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://91[.]92[.]242[.]236/files-129312398/files/file_ebb368c7ee29bd5e[.]exe",
                "hxxp://123[.]12[.]17[.]244:47351/i",
                "hxxp://112[.]226[.]200[.]149:34560/i",
                "hxxp://112[.]226[.]200[.]149:34560/bin[.]sh",
                "hxxp://212[.]164[.]115[.]235:52521/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 5091,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 5091,
                "newInLastHour": 4775,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"fdda100481ab895fa5c81d4b2ed55176d36b988feb213fa6145478c9fa197fa9\"",
                " \"raw[.]githubusercontent[.]co\"",
                " \"ffec9d57ae6924f08a8d815ecf33d152e4d7783ac8177da2bad6912680eed45a\"",
                " \"ujdq6i5l[.]drubenginecologo[.]com\"",
                " \"hermanoscalatayud[.]com\""
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
            "iocCount": 10338,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10338,
                "newInLastHour": 71,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "abe57abc8722c69494113060260ba340cd897744",
                "89bbec947a91917d4676037abb417ceb72770851",
                "b26d3f583556acab11cbfa864f596c143b15f32d",
                "fc5d9dddb01c263a67e7c485e04277afa82fbabf",
                "a6268e092f3de555c67dac2f9e52eae979b3d8e3"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 49958,
            "activeSources": 8,
            "criticalAlerts": 27866,
            "activeCampaigns": 232
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 17511,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10355,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3826,
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
                "count": 16854,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://117[.]131[.]92[.]150:58096/i",
                    "hxxp://113[.]237[.]104[.]66:52097/i",
                    "hxxp://36[.]36[.]197[.]26:60794/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]119[.]194[.]226",
                    "1[.]12[.]229[.]231",
                    "1[.]140[.]210[.]242"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1679,
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
                "count": 1433,
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
                "count": 1315,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"8[.]163[.]59[.]20:8082\"",
                    " \"43[.]225[.]157[.]17:1080\"",
                    " \"43[.]106[.]16[.]169:50050\""
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
                "count": 695,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "89bbec947a91917d4676037abb417ceb72770851",
                    "b26d3f583556acab11cbfa864f596c143b15f32d",
                    "fc5d9dddb01c263a67e7c485e04277afa82fbabf"
                ]
            },
            {
                "name": "QuasarRAT",
                "count": 688,
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
                "count": 555,
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
                "name": "ConnectWise",
                "count": 458,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "3141245c066d71ef08936296ffea7ea15082f7fd",
                    "46a2a90c5813eda22263c058742902faf1def5a6",
                    "2b05666e08e41d03ae03a5f282434e36229ea962"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 42072,
        "lastCalculated": "2026-08-17 18:30 IST"
    }
};
