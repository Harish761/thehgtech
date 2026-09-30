// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-01T02:15:27.484314+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-01T02:15:27.243563+05:30",
    "lastUpdatedFormatted": "Oct 01, 2026 at 02:15 AM IST",
    "comparisonPeriod": "Sep 30 \u2013 Oct 01, 2026",
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
                "hxxps://gobli[.]world/to/pdfstedex[.]html",
                "hxxp://free-5506938[.]webadorsite[.]com/",
                "hxxps://en-ledger-us-live-cdn[.]netlify[.]app/",
                "hxxps://hawaslilaw[.]com/cgi/sfdoxs[.]html",
                "hxxps://mtoken-hk-cdn[.]autos/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1333,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1333,
                "newInLastHour": 193,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"fa4bce734c9d206b56e9d851b29133f8df3c9350f85a24d400b833ee3dfdec62",
                " \"431bffdebb8cd5dab38154867019746ca82f51a223ed6c9d849490e60acee869",
                " \"23dfb2eb90e9eb47b4f48b0ae6cbd6e7b5b838decd550d4a2c4e3c0056050395",
                " \"ece5e684f769eff2eca13663c773af104cbc04394eefe4368a3ebfd927822dfe",
                " \"220bb6d582bde3777ceaafb0f41799ceacb2ed2282004f74931a630a6ca96cdb"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 536,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 536,
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
                "2.58.56.0/24",
                "2.59.152.0/24"
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
                "1[.]117[.]171[.]170",
                "1[.]181[.]89[.]199",
                "1[.]192[.]129[.]106",
                "1[.]193[.]63[.]174",
                "1[.]220[.]119[.]115"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5285,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5285,
                "newInLastHour": 5285,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]117[.]72[.]220",
                "1[.]162[.]216[.]37",
                "1[.]162[.]248[.]139",
                "1[.]2[.]187[.]97"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 15545,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 15545,
                "newInLastHour": 15545,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://91[.]92[.]242[.]236/files-129312398/files/file_edc0660605671232[.]exe",
                "hxxp://175[.]148[.]152[.]102:50579/i",
                "hxxp://175[.]148[.]150[.]233:59983/bin[.]sh",
                "hxxp://60[.]23[.]124[.]249:52853/bin[.]sh",
                "hxxp://158[.]255[.]83[.]202:57385/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 6837,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 6837,
                "newInLastHour": 6381,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"38[.]tcp[.]vip[.]cpolar[.]cn\"",
                " \"www[.]30yrs[.]co\"",
                " \"www[.]html6[.]io\"",
                " \"1100053[.]1100053[.]com\"",
                " \"30yrs[.]co\""
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
            "iocCount": 10643,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10643,
                "newInLastHour": 18,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "d1f8cdf29e82994d89dfda8a9dcb541be63e83b3",
                "c38737bf4c111f6be0d2f75ab9dc922cd8d5c7e3",
                "843de70648251c376b18fe872f7b5f4517a0e940",
                "5fe196813d0bf092a5d8f3ef550fe959a86ccf87",
                "bfe74bc4c5528d9ea8172159d9f77822251ff841"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 51262,
            "activeSources": 8,
            "criticalAlerts": 27529,
            "activeCampaigns": 257
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 16716,
                "trend": "stable",
                "percentage": 2
            },
            {
                "category": "C2",
                "count": 10813,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4721,
                "trend": "stable",
                "percentage": 1
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
                "count": 15362,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://ficus[.]in/img/img_011624[.]png",
                    "hxxps://nota-fical-online[.]lat/d/abaobwl?r=20147CFB5C8ED6466D",
                    "hxxp://5[.]252[.]177[.]210:8090/test[.]bat"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]117[.]171[.]170",
                    "1[.]12[.]229[.]231",
                    "1[.]181[.]89[.]199"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1692,
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
                "count": 1455,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "5fe196813d0bf092a5d8f3ef550fe959a86ccf87",
                    "205d49b6c7313e16e931e1b5873cc20be0dee85b",
                    "94c4ec66b6f57c29ac935890d7796decea67af37"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1340,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"74[.]0[.]32[.]177:50050\"",
                    " \"74[.]0[.]32[.]177:443\"",
                    " \"c6ac51470c5be4b1ea6197b64cd99836\""
                ]
            },
            {
                "name": "Vidar",
                "count": 804,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "107432baee23d80d32a4d6fe5d6a43d011114239",
                    "86b5a5612e53988e28ed6604e8e9ff5476a46d0e",
                    "605e0b79c4a685b7da9524d6b71ec36bbd651b07"
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
                "count": 710,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "c234496c7b0abcd873bb6bb5a54288b6d340b6ff",
                    "7a215b5a8eaf9b132cf84f22d9ee2202c2a028bf",
                    "8410f92dc9367bda715790bb163d32111731527d"
                ]
            },
            {
                "name": " \"unknown_loader\"",
                "count": 661,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"7a8b1398697fccca66cc2f3f25805c5af5d21e846b35a8537cb5c5103f11a366\"",
                    " \"bd254b5c2e1c8bfad3d50eec914fa52839d5faa63232dc3c2af8b87178f3585f\"",
                    " \"hxxp://146[.]19[.]213[.]28:443/?h=146[.]19[.]213[.]28&p=443&t=ws&a=w32&stage=true\""
                ]
            },
            {
                "name": " \"Mirai",
                "count": 625,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"8e3df94a5ee61add57686c5939b1173aefa8be5814b0e76aec69cbf133cbd53d",
                    " \"259669c71b188691d697b453c1bb793ec36922a22296248c95973ede2be474d7",
                    " \"da46979e366816e3d13c4af9368ea25c3abe2f847f322a153879ff87fdd13813"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 42727,
        "lastCalculated": "2026-10-01 02:15 IST"
    }
};
