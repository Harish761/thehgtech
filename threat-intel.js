// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-30T19:16:15.668498+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-30T19:16:15.322124+05:30",
    "lastUpdatedFormatted": "Aug 30, 2026 at 07:16 PM IST",
    "comparisonPeriod": "Aug 29 \u2013 Aug 30, 2026",
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
                "hxxps://pc[.]ioo-gate[.]cn/",
                "hxxps://get-ladgrehelp[.]zapier[.]app/",
                "hxxps://rroll[.]derlin[.]ch/t1/fE3B620b6e0fFdA",
                "hxxp://apple-khf[.]bvyqr[.]xyz/en/main",
                "hxxps://www[.]roblox-login[.]vercel[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 928,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 928,
                "newInLastHour": 115,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"c4d07d32ed5996c76914346d5f4744e96effdc891cde0df883667bc4b0f38727",
                " \"a0aef8a4b5353ab679426ee78baf87d4753bf7ebd18c8b8a58619c2314e39b5b",
                " \"d325f25fa9f46c4ba2408e351b6f1195ff0e2b8d9111f8b55a746399694ce789",
                " \"4cebb8127ff12c49fa1663f9ae0e913414b651cdad642dfe188e3ed94eb145ec",
                " \"14c6f15776b5befb362dac716e911240702dc223727ae798688c33aa145fdb0d"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1702,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1702,
                "newInLastHour": 1,
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
                "1[.]15[.]14[.]29",
                "1[.]177[.]162[.]4",
                "1[.]183[.]160[.]23",
                "1[.]188[.]5[.]46",
                "1[.]192[.]129[.]106"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 7572,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 7572,
                "newInLastHour": 7572,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]162[.]198[.]126",
                "1[.]174[.]212[.]190",
                "1[.]193[.]63[.]184",
                "1[.]2[.]174[.]204"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 15614,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 15614,
                "newInLastHour": 15614,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://119[.]114[.]63[.]69:50707/i",
                "hxxp://113[.]221[.]76[.]194:54955/i",
                "hxxp://91[.]184[.]241[.]245/bins/psh4",
                "hxxp://91[.]184[.]241[.]245/bins/pmips",
                "hxxp://91[.]184[.]241[.]245/bins/parm6"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4675,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4675,
                "newInLastHour": 4439,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"lufytiqi[.]workers[.]dev\"",
                " \"demuqyle[.]workers[.]dev\"",
                " \"hxxp://uiccvbk[.]click:8839/notifications\"",
                " \"hxxp://cdire[.]shop:9048/imports\"",
                " \"hxxp://cdire[.]shop:9048/documents\""
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
            "iocCount": 10587,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10587,
                "newInLastHour": 19,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "ca8a5bbb1e6b22fa9ad9757c50f1bdaf2c22011d",
                "bfbcd2802186b6c5707f7ff6341b87c12b97f4a4",
                "a7fa6117a38135c4d9c26ec7e37f15b361535edf",
                "711c3a7bd15ae5377f4c395e23b3d8b8f1327ced",
                "a0d553e2a130766628359bea489166c63b9892d7"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 50763,
            "activeSources": 7,
            "criticalAlerts": 26804,
            "activeCampaigns": 228
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 16260,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "C2",
                "count": 10544,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4263,
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
                "count": 15359,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://125[.]41[.]2[.]240:38275/i",
                    "hxxp://115[.]59[.]226[.]41:37592/i",
                    "hxxp://125[.]41[.]8[.]191:33647/bin[.]sh"
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
                    "1[.]183[.]160[.]23",
                    "1[.]192[.]129[.]106"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1704,
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
                "name": " \"js.iclickfix\"",
                "count": 1499,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxps://clickzona[.]net/embed/\"",
                    " \"tin[.]tokyo77hit[.]com\"",
                    " \"piomilokao[.]icu\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1439,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "7f44d36f1f6bd375ba4e4a7866328a76047ce498",
                    "f351f7dbe9c583f75758b39cd307f5359d110c73",
                    "7bf78d44f61a05e919479a1cf3e0ce158a50a0c6"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1350,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"161[.]35[.]173[.]98:80\"",
                    " \"161[.]35[.]173[.]98:8080\"",
                    " \"47[.]86[.]9[.]253:10982\""
                ]
            },
            {
                "name": "Vidar",
                "count": 742,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "d43c9f366658adf98f67c12dd8fcb3bca52db900",
                    "ef5c2a4999763064e2213dbe1c8ed696c0e8914b",
                    "8508e14457ad7de321edddf3688e124d5f1d652c"
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
                "count": 700,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "a6e6aa58bac84e56b868f5f618ef227b75d7208e",
                    "d123d7f43d63545c7a8f643acbe73e81f35c3f14",
                    "9b4c3ff8dc5891693f443320e3c1167c7cebe2b7"
                ]
            },
            {
                "name": " \"unknown_loader\"",
                "count": 696,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"forecast-chaos[.]com\"",
                    " \"sound-obstacle[.]com\"",
                    " \"embersummit[.]cfd\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 43065,
        "lastCalculated": "2026-08-30 19:16 IST"
    }
};
