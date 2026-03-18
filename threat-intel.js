// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-19T01:02:36.947480+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-19T01:02:36.637506+05:30",
    "lastUpdatedFormatted": "Mar 19, 2026 at 01:02 AM IST",
    "comparisonPeriod": "Mar 18 \u2013 Mar 19, 2026",
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
                "hxxps://dracaroline[.]com/chvfz2wbz/",
                "hxxp://pub-502b05dd72194beeb3dbb59e5ca29d96[.]r2[.]dev/index[.]html",
                "hxxps://s3-deprecated[.]us-east-1[.]amazonaws[.]com/mashdwsa4115[.]jkdsaksimfssdawerfdd026fgfhgfdhsdhcfgthsdzd/index[.]html",
                "hxxps://confirmationportal[.]com/92457791-0bce-4181-b8dc-8c4510be8e3e/a/5a442cb9-c593-4961-8949-5914700c3a05/ccp?lid=bde818e3-49e4-42b7-8568-e80cac6cddcf",
                "hxxp://pdi[.]or[.]kr/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 764,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 764,
                "newInLastHour": 20,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"09db02307346921bb4e49dcf6f4b89c49584b994c08dbbecadd7f087c1c41961",
                " \"6740023be829f84fa543ebfb2f745e33cba576ed8f51d4fdb4331dc36c16a3b7",
                " \"0346c9d56c2539ad5d4997770903845a2d3d1ee24e0032035eb3856644cf9a2b",
                " \"36189b508dcf09a63a8462c11beb5b134d95afa492061f8d9a102e24651b697b",
                " \"e8c5f71924994f4a98f8247c3f1bd83b46fb5cd47f0365fcbb6dc4b310680224"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1525,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1525,
                "newInLastHour": 3,
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
                "1[.]10[.]185[.]224",
                "1[.]15[.]118[.]23",
                "1[.]170[.]10[.]139",
                "1[.]172[.]216[.]100",
                "1[.]192[.]179[.]163"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5264,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5264,
                "newInLastHour": 5264,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]145[.]14[.]149",
                "1[.]162[.]198[.]111",
                "1[.]189[.]21[.]20",
                "1[.]214[.]117[.]218",
                "1[.]214[.]255[.]210"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 20432,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 20432,
                "newInLastHour": 20432,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://123[.]132[.]164[.]209:41464/bin[.]sh",
                "hxxps://raw[.]githubusercontent[.]com/Shivansh-aiml/vuejs-cicd-deploy-on-github-pages/refs/heads/main/src/github_on_cicd_deploy_vuejs_pages_3[.]6-beta[.]2[.]zip",
                "hxxps://github[.]com/Shivansh-aiml/vuejs-cicd-deploy-on-github-pages/raw/refs/heads/main/src/github_on_cicd_deploy_vuejs_pages_3[.]6-beta[.]2[.]zip",
                "hxxps://pop-x88-node[.]optico-voda[.]in[.]net/verification[.]google",
                "hxxps://raw[.]githubusercontent[.]com/Roop81/Interlink-Multi-Bot/refs/heads/main/Chiwere/Interlink_Bot_Multi_2[.]7[.]zip"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 2429,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 2429,
                "newInLastHour": 2393,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"sync-v01-auth[.]optico-voda[.]in[.]net\"",
                " \"pop-x88-node[.]optico-voda[.]in[.]net\"",
                " \"node-x33-auth[.]curvaforte[.]in[.]net\"",
                " \"l22vyxd8[.]fastbit[.]digital\"",
                " \"04cbe3jm[.]fastbit[.]digital\""
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
            "iocCount": 9308,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9308,
                "newInLastHour": 9,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "839451714776101bc6be92d420544060c7e49097",
                "71cda6714845dc13a7c001d3933047f2c7119c09",
                "8ebe0d48a1178a816162ca9b034b7b653d0fc12b",
                "a9af792faf99fff3d0df33db513b536fc8d5459c",
                "9a7d2413b51e8298dd81a5b972171256a92314a5"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 49739,
            "activeSources": 8,
            "criticalAlerts": 30400,
            "activeCampaigns": 220
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 21123,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9277,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 821,
                "trend": "stable",
                "percentage": -7
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
                "percentage": 94
            },
            {
                "name": "Tech",
                "percentage": 5
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 20320,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://base-f11-infra[.]durolocus[.]in[.]net/verification[.]google",
                    "hxxp://117[.]209[.]92[.]74:46563/i",
                    "hxxps://net-v8-global[.]metropunto[.]in[.]net/verification[.]google"
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
                    "1[.]15[.]118[.]23",
                    "1[.]170[.]10[.]139"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1523,
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
                "count": 1390,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "c415fb25075e3df71a6a9bf67750cbf6a6c7e868",
                    "ba3e7e73b6c654a979d4e4fe20b4aa24890b4518",
                    "e074dd74eb8eb98468a94eb43b3487fe2b7f5980"
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
                "count": 640,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "d9fa0ea682b5e53c1fcad5edfc64b89fbfd468da",
                    "7692429d5ce694bd30c57fae26a56dd8fd960faf",
                    "f021dc8a50b47d94a454ff92d78bd1215597a759"
                ]
            },
            {
                "name": " \"unknown\"",
                "count": 584,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"maxxingtoken[.]lat\"",
                    " \"ikeaorangutancoin[.]lat\"",
                    " \"speedruntoken[.]lat\""
                ]
            },
            {
                "name": "LummaStealer",
                "count": 542,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "8ebe0d48a1178a816162ca9b034b7b653d0fc12b",
                    "da0f6a5937d3c2d365ffeddb881b4136313e1afa",
                    "e30905555de39d1e66f834f672f6f14e9106839b"
                ]
            },
            {
                "name": " \"elf.mozi\"",
                "count": 529,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxp://110[.]37[.]5[.]55:33751/i\"",
                    " \"hxxp://115[.]48[.]47[.]68:55835/i\"",
                    " \"hxxp://42[.]59[.]115[.]239:60942/i\""
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 488,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"db-g3-point[.]durolocus[.]in[.]net\"",
                    " \"base-f11-infra[.]durolocus[.]in[.]net\"",
                    " \"net-v8-global[.]metropunto[.]in[.]net\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 43426,
        "lastCalculated": "2026-03-19 01:02 IST"
    }
};
