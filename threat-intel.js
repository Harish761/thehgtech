// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-19T10:16:36.072087+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-19T10:16:35.819768+05:30",
    "lastUpdatedFormatted": "Aug 19, 2026 at 10:16 AM IST",
    "comparisonPeriod": "Aug 18 \u2013 Aug 19, 2026",
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
                "hxxp://www[.]deskthipk[.]com/",
                "hxxps://llori807[.]github[.]io/Netflix-Clone-2[.]0",
                "hxxp://vp-nm[.]abouali-mohammad-arad[.]workers[.]dev/",
                "hxxps://g5[.]lu/vu39k",
                "hxxps://loginfacebook3[.]blogspot[.]com/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1217,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1217,
                "newInLastHour": 196,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"982912aa1912dd9fa4a39581d8b38dba0e1d5c0108db53edab0d0a8d5a613607",
                " \"8dcf2faec833a016f0754c87d26ac7798b8c1fa42eda09b5e248a02699c5c9ea",
                " \"1ef61d490483af2715af8889cca733804be3cfae351a6170a36a827e4046207e",
                " \"efbc966f0dc8c5647ce01d933798b8e5fe0d22b9463436d0cdf709e97ab8df1c",
                " \"decd05faa551bbe6233cc69704a8d9b71dac11f373fe38b6b39bd31612dc13df"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1690,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1690,
                "newInLastHour": 12,
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
                "1[.]140[.]210[.]242",
                "1[.]15[.]14[.]29",
                "1[.]180[.]190[.]250",
                "1[.]192[.]177[.]51"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4841,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4841,
                "newInLastHour": 4841,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]14[.]64[.]225",
                "1[.]20[.]150[.]200",
                "1[.]214[.]214[.]114",
                "1[.]222[.]42[.]237"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 16564,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 16564,
                "newInLastHour": 16564,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://175[.]173[.]72[.]28:43930/bin[.]sh",
                "hxxp://218[.]13[.]149[.]41:34202/i",
                "hxxp://218[.]13[.]149[.]41:34202/bin[.]sh",
                "hxxps://mitraperijinan[.]co[.]id/wp-content/uploads/2026/Updater[.]exe",
                "hxxp://123[.]11[.]13[.]6:54335/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 8929,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 8929,
                "newInLastHour": 8887,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"alpen-initiative[.]ch\"",
                " \"tiafe[.]ch\"",
                " \"sistem-electromenager[.]ch\"",
                " \"galfetti[.]ch\"",
                " \"47[.]108[.]86[.]120:80\""
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
            "iocCount": 10432,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10432,
                "newInLastHour": 79,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "f351f7dbe9c583f75758b39cd307f5359d110c73",
                "e39fdf1800919f6dd77d89bcdbc0b1fe8a9352eb",
                "edbd45e54859ad7082efb79465ba938bb2581132",
                "7bf78d44f61a05e919479a1cf3e0ce158a50a0c6",
                "ffa6be04fe2e9c6b79776dcfc7ad3f41a403a64d"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 53855,
            "activeSources": 8,
            "criticalAlerts": 27972,
            "activeCampaigns": 234
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 17615,
                "trend": "stable",
                "percentage": -2
            },
            {
                "category": "C2",
                "count": 10357,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4671,
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
            },
            {
                "name": "Government",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 16552,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://39[.]74[.]33[.]126:60319/i",
                    "hxxp://27[.]194[.]211[.]108:59780/bin[.]sh",
                    "hxxp://27[.]44[.]146[.]78:40164/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]119[.]158[.]77",
                    "1[.]140[.]210[.]242",
                    "1[.]15[.]14[.]29"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1680,
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
                "name": " \"unknown_loader\"",
                "count": 1676,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"eggsjelly[.]space\"",
                    " \"cdn[.]zrorolite[.]com\"",
                    " \"hxxps://cdn[.]zrorolite[.]com/5NPL[.]js\""
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 1650,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"voksenasenmusicacademies[.]com\"",
                    " \"planetaryshelter[.]com\"",
                    " \"renovadeco[.]be\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1435,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "f351f7dbe9c583f75758b39cd307f5359d110c73",
                    "7bf78d44f61a05e919479a1cf3e0ce158a50a0c6",
                    "f50e245dc1e4a89d6cf5e07e31ae1392a3f9ad20"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1429,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"47[.]94[.]224[.]229:888\"",
                    " \"149[.]88[.]66[.]234:8089\"",
                    " \"124[.]220[.]34[.]180:80\""
                ]
            },
            {
                "name": " \"unknown\"",
                "count": 1052,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"intensivverlegung[.]ch\"",
                    " \"aufstellungstage[.]ch\"",
                    " \"dugrangranitos[.]com[.]br\""
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
                "count": 695,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "9b4c3ff8dc5891693f443320e3c1167c7cebe2b7",
                    "0f1b05653c3b3ab3bb4ecd772dd024668cbe8df1",
                    "b364395fee8c2e4c9eaf9a2531f6f7ac7bf8e4ae"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"Mirai",
        "totalAttacksThisHour": 45884,
        "lastCalculated": "2026-08-19 10:16 IST"
    }
};
