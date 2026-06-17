// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-06-18T02:04:45.392348+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-06-18T02:04:45.066221+05:30",
    "lastUpdatedFormatted": "Jun 18, 2026 at 02:04 AM IST",
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
                "hxxps://hklogin[.]uat[.]mizuhoscfglobal[.]com/oauth2/authorize?response_type=code&client_id=bca4f495-a205-4cb4-8b0a-07f4d88a7584&scope=openid%20email%20profile&state=CeEiDbj5pJ71cSO2lzi7pvcGOXH7mmevbD7DFNqgeXo%3D&redirect_uri=hxxps://hk[.]uat[.]mizuhoscfglobal[.]com/scf/login/oauth2/code/fusionauth&nonce=-f1ca21YpsZjdNfCQ4Svmqe-0XxilP2uxOGLJ32BGs8",
                "hxxps://hk[.]uat[.]mizuhoscfglobal[.]com/scf/login/oauth2/code/fusionauth",
                "hxxps://docment[.]e-docssign[.]net/education_redirect_second?5372b28b-1718-482e-afd8-5ae0571cba68",
                "hxxps://docment[.]e-docssign[.]net/a6f4ab/5372b28b-1718-482e-afd8-5ae0571cba68",
                "hxxps://alexgalho[.]com[.]br/anodur"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 809,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 809,
                "newInLastHour": 35,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"cbace011d78aefb90c9bf01be7d66a3b10eed67a225f3bfe6ae3225eaac72ad9",
                " \"204f86c47da8639dbe2ebc5a58cceb8c7d0cd3fe630d04da5d50fbfe808b59f0",
                " \"f42afc9673f7d57272ed9b56e098c94d5bf6a139e59b1c0c86a946b60f7b9853",
                " \"f3018d17bc0776de43a4f475cbe858f5a03d73c206141bc208b50002baf10461",
                " \"e2b744ee6daa7bc475b480d1c3134aaf93cb7a2ec6ff4dd7a283d1cf0a70394f"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1698,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1698,
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
                "1[.]12[.]229[.]231",
                "1[.]15[.]14[.]29",
                "1[.]159[.]13[.]9",
                "1[.]164[.]110[.]70"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 6060,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6060,
                "newInLastHour": 6060,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]116[.]110[.]170",
                "1[.]117[.]150[.]44",
                "1[.]117[.]229[.]57",
                "1[.]117[.]47[.]94",
                "1[.]14[.]28[.]29"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 17221,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 17221,
                "newInLastHour": 17221,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://138[.]204[.]196[.]254:53747/i",
                "hxxps://h2vkq89b[.]angizeshfarahani[.]store/?ublib=39d78721-7bb0-4538-ac2e-93420490df7e",
                "hxxps://bbztdp6a[.]akhbarsport[.]info/?ublib=74aac300-d1f2-489e-b4f0-b0d37c75b09a",
                "hxxp://42[.]179[.]166[.]141:56628/bin[.]sh",
                "hxxp://27[.]37[.]101[.]163:36350/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 3939,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 3939,
                "newInLastHour": 3695,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"h2vkq89b[.]angizeshfarahani[.]store\"",
                " \"143[.]92[.]43[.]153:8087\"",
                " \"156[.]238[.]233[.]97:8084\"",
                " \"198[.]23[.]185[.]136:80\"",
                " \"221[.]132[.]29[.]137:81\""
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
            "iocCount": 9987,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9987,
                "newInLastHour": 3,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "487963ef755a226940a6b402895cc6cfe8ed2594",
                "010a6503f80cc4ae9d2cf4bc58b96754f8979a2b",
                "aa5491d3ac54bf6004f7b74c72ba71a18367773a",
                "27444283cb0b64a2a46f818afffc657a4fd4817b",
                "653a0e0eafd93c71a0363a99f55c8537a23843dc"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 49003,
            "activeSources": 8,
            "criticalAlerts": 28041,
            "activeCampaigns": 256
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 18073,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9968,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3000,
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
                "percentage": 98
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
                "count": 17199,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://1ycpksxw[.]hugugmadani6[.]xyz/?ublib=64c9da85-2ede-4432-9eaa-83553b084903",
                    "hxxp://110[.]39[.]255[.]227:59661/i",
                    "hxxp://110[.]39[.]255[.]227:59661/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]12[.]229[.]231",
                    "1[.]123[.]205[.]141",
                    "1[.]14[.]250[.]106"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1708,
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
                "count": 1413,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"209[.]126[.]7[.]188:443\"",
                    " \"209[.]126[.]7[.]188:8080\"",
                    " \"209[.]126[.]7[.]188:80\""
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
        "totalAttacksThisHour": 42319,
        "lastCalculated": "2026-06-18 02:04 IST"
    }
};
