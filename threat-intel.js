// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-06-18T21:20:25.595364+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-06-18T21:20:25.256480+05:30",
    "lastUpdatedFormatted": "Jun 18, 2026 at 09:20 PM IST",
    "comparisonPeriod": "Jun 17 \u2013 Jun 18, 2026",
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
                "hxxps://www[.]appealhelpspage[.]store/",
                "hxxps://shopee8717[.]blogspot[.]com/?m=1",
                "hxxps://www[.]shopee8717[.]blogspot[.]com/?m=1",
                "hxxps://sx[.]xmugrg[.]net/supprtdocs-remitstatementpdf/office/",
                "hxxps://www[.]roblox[.]com[.]ml/users/172861273338/profile"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 810,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 810,
                "newInLastHour": 51,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"268ef382af6884d8e9ecf11d2640b4beaa6d24a78822db285100f14050e73271",
                " \"550e46e0f77909d9043facbad4d1ac3a666e0a16b327937905fdb7198297efac",
                " \"69fc532c3a846f346f4e800b743c1a341bd73f2bab0cfd94d88a0a34a39446b3",
                " \"f35b27b5ef86f0d4ade3752224fe55641ad7c59976dc085cc5109a4008b7ec1b",
                " \"2df4f4c0b77671fcbadccb2189e3de9fb4fbca0052bc41ef82d58af056bd6dca"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1622,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1622,
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
                "1[.]10[.]185[.]224",
                "1[.]15[.]51[.]236",
                "1[.]164[.]107[.]152",
                "1[.]176[.]118[.]246",
                "1[.]183[.]161[.]114"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5995,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5995,
                "newInLastHour": 5995,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]117[.]229[.]57",
                "1[.]15[.]135[.]116",
                "1[.]15[.]32[.]131",
                "1[.]162[.]223[.]232",
                "1[.]192[.]61[.]19"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 17199,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 17199,
                "newInLastHour": 17199,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://61[.]53[.]5[.]206:43781/bin[.]sh",
                "hxxps://erby3ts4[.]pornbet[.]bet/?ublib=1a45c585-4e5d-4690-812c-d91c06142ebb",
                "hxxps://jam3b5k6[.]enfejarland[.]com/?ublib=0484f84f-c5dd-47de-a8e3-91e0e616ea5e",
                "hxxp://182[.]116[.]95[.]92:55705/i",
                "hxxp://170[.]233[.]57[.]178:32913/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 3851,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 3851,
                "newInLastHour": 3605,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"pornbet[.]bet\"",
                " \"103[.]112[.]97[.]183:4782\"",
                " \"103[.]112[.]97[.]188:4782\"",
                " \"103[.]112[.]97[.]17:4782\"",
                " \"1[.]14[.]46[.]205:4782\""
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
            "iocCount": 9939,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9939,
                "newInLastHour": 7,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "070ad9d359151a2de5af7cd41295758bf1f4227a",
                "7125469fa26c30ae4d89eb2a8bec1c7a382dcd7d",
                "a23f624eee7847ff3939994ff8922ba8eb645e26",
                "61102ef78d52d044b8ded80e2ad0471c68e6f962",
                "49aa56f946089804e2bc8ae77a7b2fbaa5860e50"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48726,
            "activeSources": 8,
            "criticalAlerts": 27838,
            "activeCampaigns": 251
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 17867,
                "trend": "stable",
                "percentage": 2
            },
            {
                "category": "C2",
                "count": 9971,
                "trend": "up",
                "percentage": 607
            },
            {
                "category": "Botnet",
                "count": 2998,
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
                "count": 17021,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://small-morning-8be0[.]fsocietyandtools[.]workers[.]dev/J0YH-KEUX-J9ID-2I7M/img_8omacp[.]png",
                    "hxxps://gitea[.]nightcord[.]st/nightcord/nightcord/releases/download/v1[.]20[.]0/Nightcord-Installer[.]exe",
                    "hxxps://xeno[.]lat/download/Xeno-v1[.]3[.]55[.]zip"
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
                    "1[.]15[.]35[.]79",
                    "1[.]15[.]51[.]236"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1705,
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
                "count": 1416,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "6a998d33a87c7b36c2be68ed5c1c63929c0d6be4",
                    "167ddfd671ef30c31528515389cfdd11d9251558",
                    "d42a4a7e721a0503d81e3f47c72a0f93c53e4f2c"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1415,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"188[.]227[.]14[.]105:547\"",
                    " \"84[.]252[.]139[.]94:80\"",
                    " \"84[.]252[.]139[.]94:8080\""
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
                "count": 688,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "27e3cb5b0043884c7ebc0691e2e73ef3b95339ac",
                    "ae590545961e96de860ea7434c0e8c69b924de6f",
                    "28c3106cd1cec9a5dfec7f2ba3b0dd7e70784429"
                ]
            },
            {
                "name": "Vidar",
                "count": 602,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "59f0554dda32cbf5b5b5b08fe508480d81172f2d",
                    "3c94f5e78cc03430f78033b240e6c065c5937c6a",
                    "54fdaf6635064f8d7e6f84b1118eb60edcc697e8"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 556,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "2beac2ee8b2fe7625d4de9f5381d37f200965f91",
                    "a46841d623a191366909b24375bee0eceea23bbe",
                    "272e76f605bec1da1ea719df8dc0e7269de7d44e"
                ]
            },
            {
                "name": "OffLoader",
                "count": 427,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b7fca0fbc8179ef52e3239907257dcd0315cb2f1",
                    "8f15e3e07c691ae493b4059222638003e0bf0a9b",
                    "031af28814511239c0172b71c2c5092660676632"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 42162,
        "lastCalculated": "2026-06-18 21:20 IST"
    }
};
