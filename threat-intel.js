// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-01T04:00:07.629381+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-01T04:00:07.377047+05:30",
    "lastUpdatedFormatted": "Oct 01, 2026 at 04:00 AM IST",
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
            "iocCount": 1321,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1321,
                "newInLastHour": 4,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"882e93fd3b383afe1c21cf64240d5137a48ddc6ac08f3b1cbd3e7246a559ed48",
                " \"021fd8eaae8f604c93acf5091583bb3141e2afccf09a4b17d4a4a23bac100081",
                " \"9ee13bb527e6c4057fae2a59df5f128e99d7a58fcd02ce5bdf37940d3e55cd55",
                " \"46c6c2329020e9d4281af383813b3139efc9d0bc19f5859229cd93f8c277f54c",
                " \"fa4bce734c9d206b56e9d851b29133f8df3c9350f85a24d400b833ee3dfdec62"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1691,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1691,
                "newInLastHour": 1156,
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
                "1[.]12[.]229[.]231",
                "1[.]181[.]89[.]199",
                "1[.]24[.]16[.]10",
                "1[.]24[.]16[.]102",
                "1[.]24[.]16[.]103"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5275,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5275,
                "newInLastHour": 5275,
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
            "iocCount": 15589,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 15589,
                "newInLastHour": 15589,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://36[.]65[.]51[.]208:60234/bin[.]sh",
                "hxxp://123[.]190[.]22[.]203:45590/i",
                "hxxp://117[.]63[.]84[.]107:50448/bin[.]sh",
                "hxxp://154[.]23[.]75[.]238:43368/i",
                "hxxp://27[.]204[.]247[.]42:42958/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 6751,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 6751,
                "newInLastHour": 6224,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxp://petcarv[.]click:8239/files\"",
                " \"hxxp://creesbs[.]sbs:9932/settings\"",
                " \"www[.]kellerbooks[.]com\"",
                " \"www[.]lamdhabooks[.]com[.]au\"",
                " \"www[.]needleworkbooks[.]com\""
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
            "iocCount": 10843,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10843,
                "newInLastHour": 210,
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
            "totalIndicators": 50199,
            "activeSources": 8,
            "criticalAlerts": 27525,
            "activeCampaigns": 258
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 16904,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "C2",
                "count": 10621,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "Botnet",
                "count": 4868,
                "trend": "stable",
                "percentage": 3
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
                "count": 15545,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://91[.]92[.]242[.]236/files-129312398/files/file_edc0660605671232[.]exe",
                    "hxxp://175[.]148[.]152[.]102:50579/i",
                    "hxxp://175[.]148[.]150[.]233:59983/bin[.]sh"
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
                    "1[.]181[.]89[.]199",
                    "1[.]192[.]129[.]106"
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1447,
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
                "count": 1332,
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
                "count": 741,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "d1f8cdf29e82994d89dfda8a9dcb541be63e83b3",
                    "107432baee23d80d32a4d6fe5d6a43d011114239",
                    "86b5a5612e53988e28ed6604e8e9ff5476a46d0e"
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
                "count": 699,
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
                "name": " \"win.pure_rat\"",
                "count": 632,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"45[.]225[.]135[.]166:56003\"",
                    " \"202[.]146[.]222[.]156:56002\"",
                    " \"202[.]146[.]222[.]156:56001\""
                ]
            },
            {
                "name": " \"unknown_loader\"",
                "count": 626,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"104[.]234[.]94[.]198:1144\"",
                    " \"107[.]182[.]130[.]226:1144\"",
                    " \"3635ee889c55579c417141237e13b5014b7296f2926d310a67c5e4a61046bd81\""
                ]
            },
            {
                "name": " \"Mirai",
                "count": 597,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"fa4bce734c9d206b56e9d851b29133f8df3c9350f85a24d400b833ee3dfdec62",
                    " \"431bffdebb8cd5dab38154867019746ca82f51a223ed6c9d849490e60acee869",
                    " \"23dfb2eb90e9eb47b4f48b0ae6cbd6e7b5b838decd550d4a2c4e3c0056050395"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "Spamhaus DROP List",
        "totalAttacksThisHour": 43763,
        "lastCalculated": "2026-10-01 04:00 IST"
    }
};
