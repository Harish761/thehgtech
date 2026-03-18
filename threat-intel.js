// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-19T02:21:53.324474+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-19T02:21:53.027499+05:30",
    "lastUpdatedFormatted": "Mar 19, 2026 at 02:21 AM IST",
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
            "iocCount": 750,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 750,
                "newInLastHour": 10,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"df2db25046baec03fde1d8e8ee145c2271dae2b3759ee26b325c54fd7d0821af",
                " \"6062f35b1f11cbf6263d342cfe55ddfaa91a5edc68f0d8ffefc1c63dd9d14449",
                " \"096806c86fe942083e273f7e8a731f42fe4b8684211e61f0bf8ae65a33be0773",
                " \"b05377b492f5773f27febaa9d0a70f3bbbd8d69f7f6b9d1d69514ec878ff621b",
                " \"7fd1f37f932a6959b1ed801cb97c1971339b9fe01b29a091ca7d44a49969e758"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1521,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1521,
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
            "iocCount": 4964,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4964,
                "newInLastHour": 4964,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]145[.]14[.]149",
                "1[.]162[.]198[.]111",
                "1[.]189[.]21[.]20",
                "1[.]214[.]255[.]210",
                "1[.]220[.]64[.]218"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 20497,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 20497,
                "newInLastHour": 20497,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://117[.]200[.]232[.]25:33267/bin[.]sh",
                "hxxp://110[.]36[.]15[.]18:55778/i",
                "hxxp://110[.]37[.]9[.]197:45267/bin[.]sh",
                "hxxps://github[.]com/darkkshah/1-20-assignment/raw/refs/heads/master/isandrous/assignment_1[.]5[.]zip",
                "hxxps://github[.]com/darkkshah/testing1/raw/refs/heads/master/Mullidae/testing-Romanesque[.]zip"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 2268,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 2268,
                "newInLastHour": 2243,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"flow-z9-work[.]punto-viva[.]in[.]net\"",
                " \"hub-v02-local[.]punto-viva[.]in[.]net\"",
                " \"link-p1-power[.]punto-viva[.]in[.]net\"",
                " \"sys-s33-monitor[.]punto-viva[.]in[.]net\"",
                " \"gate-v5-entry[.]densa-materia[.]in[.]net\""
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
            "iocCount": 9290,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9290,
                "newInLastHour": 0,
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
            "totalIndicators": 49763,
            "activeSources": 8,
            "criticalAlerts": 30506,
            "activeCampaigns": 222
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 21220,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9286,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 816,
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
                "count": 20432,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://123[.]132[.]164[.]209:41464/bin[.]sh",
                    "hxxps://raw[.]githubusercontent[.]com/Shivansh-aiml/vuejs-cicd-deploy-on-github-pages/refs/heads/main/src/github_on_cicd_deploy_vuejs_pages_3[.]6-beta[.]2[.]zip",
                    "hxxps://github[.]com/Shivansh-aiml/vuejs-cicd-deploy-on-github-pages/raw/refs/heads/main/src/github_on_cicd_deploy_vuejs_pages_3[.]6-beta[.]2[.]zip"
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
                "count": 1525,
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
                "count": 1391,
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
                "count": 641,
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
                "name": " \"unknown\"",
                "count": 499,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"17661A7D0C3DECA24B2EF18F48D61326FADFBF0069D045B5D51F294526280C53\"",
                    " \"A0C4488B50FDD493A8652F2B5A89B7AFAF0F7EA09021719D257AEEB0ED53E1E2\"",
                    " \"A53B7CC73481DC89A9876638490CE86C3ECE09D9F6454B037831AAD1326C5F07\""
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 495,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"sync-v01-auth[.]optico-voda[.]in[.]net\"",
                    " \"pop-x88-node[.]optico-voda[.]in[.]net\"",
                    " \"node-x33-auth[.]curvaforte[.]in[.]net\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 43019,
        "lastCalculated": "2026-03-19 02:21 IST"
    }
};
