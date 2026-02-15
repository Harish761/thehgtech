// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-02-15T08:48:46.546509+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-02-15T08:48:46.308158+05:30",
    "lastUpdatedFormatted": "Feb 15, 2026 at 08:48 AM IST",
    "comparisonPeriod": "Feb 14 \u2013 Feb 15, 2026",
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
                "hxxp://metaimak9_logii[.]godaddysites[.]com/",
                "hxxps://www[.]roblox[.]com[.]ml/communities/1031569618/BladeBallX",
                "hxxp://lzrst43fyyui4[.]amalia11-8f7[.]workers[.]dev/",
                "hxxps://gatiky27[.]github[.]io/Amazon-Replica",
                "hxxps://api[.]jhiconline[.]com/thrr/kundenportalcss/mycss/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 800,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 800,
                "newInLastHour": 84,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"b967112eb909f04f1d94a5d748af30eea79fdcecd91499242aa7fc4fd8a36ace",
                " \"b62bfd01bac40dec3cb308f63a7c439581c958d7dcc1652d6b1f35191c36a8ae",
                " \"11fe6fba059c7656ebcceddab119c1be0cc728fb9d7df710405b5f8b174fd9de",
                " \"042f6d9dd8f2216fd42c97f53cface4b23a3544a69ad0e458e06fdb368bb538c",
                " \"e072470520b6ef0b5556d9f883878b6f59c5a02aa7dbd07ae739e9a2389b5dab"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1482,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1482,
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
                "1[.]15[.]116[.]189",
                "1[.]15[.]118[.]23",
                "1[.]15[.]22[.]112",
                "1[.]157[.]9[.]5",
                "1[.]170[.]30[.]220"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5611,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5611,
                "newInLastHour": 5611,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]13[.]79[.]212",
                "1[.]15[.]136[.]28",
                "1[.]15[.]77[.]170",
                "1[.]194[.]219[.]159",
                "1[.]214[.]197[.]163"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 19259,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 19259,
                "newInLastHour": 19259,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://182[.]121[.]105[.]204:44059/bin[.]sh",
                "hxxp://42[.]227[.]204[.]139:34238/i",
                "hxxps://static-assets-srv[.]stillesee[.]coupons/amdkmdag",
                "hxxp://115[.]53[.]49[.]169:56183/bin[.]sh",
                "hxxp://110[.]37[.]118[.]241:45902/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1454,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1454,
                "newInLastHour": 1258,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"120[.]192[.]67[.]135:10001\"",
                " \"156[.]234[.]94[.]199:28713\"",
                " \"156[.]234[.]94[.]214:28713\"",
                " \"43[.]249[.]175[.]67:28713\"",
                " \"23[.]235[.]179[.]116:28713\""
            ]
        },
        "Feodo Tracker": {
            "description": "Botnet C2 server IPs from Feodo Tracker. Tracks Dridex, Emotet, TrickBot, QakBot, and BazarLoader.",
            "website": "https://feodotracker.abuse.ch/",
            "updateFrequency": "Hourly",
            "iocCount": 2,
            "iocDataUrl": "https://thehgtech.com/ioc-data/feodo-tracker.json",
            "stats": {
                "total": 2,
                "newInLastHour": 2,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "162[.]243[.]103[.]246",
                "172[.]232[.]59[.]14"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 8961,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8961,
                "newInLastHour": 8523,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "c1c0073363896e9c687faf206199b45ffe4297b6",
                "c5091d64084fde2aa1305d4f4eb4eb136d8af5eb",
                "952943ce38e1497736f79a88ec948506a915990d",
                "e448b00d829b3223ae7fc3f099436017d2bb01a4",
                "5324e2c55e596d1d2e68031819751c0703ac9cd1"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 38898,
            "activeSources": 8,
            "criticalAlerts": 20887,
            "activeCampaigns": 120
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 20445,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 825,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 442,
                "trend": "down",
                "percentage": -95
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
                "count": 19700,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://115[.]57[.]57[.]121:42590/bin[.]sh",
                    "hxxps://r2k6d[.]plea36slavneck[.]coupons/string",
                    "hxxp://221[.]15[.]17[.]206:53448/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]119[.]209[.]130",
                    "1[.]15[.]116[.]189",
                    "1[.]15[.]118[.]23"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1486,
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
                "name": " \"Mirai",
                "count": 406,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"5021ff1f9a0d8aa6c5057ec412d1217f7cdce0d7214122e856c6ce7c44077e55",
                    " \"eda3f92d30d86d828ce0c1c96c697b7c692fa5ea74ffb9f1e7e4df10bfaea5d5",
                    " \"819c9bd4817be5930309817b24d71a867a3e71af6385ba8a3b52208dfd2e9021"
                ]
            },
            {
                "name": "Generic Phishing",
                "count": 298,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://kucoin-login-authh[.]webflow[.]io/",
                    "hxxp://krrakeionutyusloggin[.]webflow[.]io/",
                    "hxxp://login-kucoinin[.]webflow[.]io/"
                ]
            },
            {
                "name": " \"win.formbook\"",
                "count": 289,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"www[.]reumatologonorte[.]com\"",
                    " \"www[.]rockfest-game[.]com\"",
                    " \"www[.]selinavordest[.]asia\""
                ]
            },
            {
                "name": "Vidar",
                "count": 173,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "c99dd917e7a01d0c7fdbc8edf8fe14b6a4673bf8",
                    "3e86dd1b2a8a50c4263271ffbe28deb2837b320f",
                    "a5ed9149808f93889c8c68e55082d39cf24ae8d7"
                ]
            },
            {
                "name": " \"n/a",
                "count": 134,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"416a3fe028bb705a5f27abc78465f0f3e40598eaac2a1cd1fc007bbd2963ea32",
                    " \"16b7b3a5b3e0a7de6d9cedaab4fe4a6ae1c61ef839f1583d6af9eb5f6ab2ca72",
                    " \"3879e4ecf84ca8e3cb38c0e3d800f2c937d89fdbabf9133f35be75357151e14c"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 110,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"r2k6d[.]plea36slavneck[.]coupons\"",
                    " \"h0m0-vvex[.]homo483geneous[.]coupons\"",
                    " \"artifact[.]homo483geneous[.]coupons\""
                ]
            },
            {
                "name": " \"unknown\"",
                "count": 95,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxp://endlessgrumbler[.]cc:8080/updater?for=365BCB25A26273DDB4F98D8D4B16A4C2\"",
                    " \"172[.]235[.]171[.]65:40639\"",
                    " \"510a87871053e239479f28101f013d0f\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "AsyncRAT",
        "totalAttacksThisHour": 50037,
        "lastCalculated": "2026-02-15 08:48 IST"
    }
};
