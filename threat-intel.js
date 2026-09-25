// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-26T01:29:42.405698+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-26T01:29:42.140715+05:30",
    "lastUpdatedFormatted": "Sep 26, 2026 at 01:29 AM IST",
    "comparisonPeriod": "Sep 25 \u2013 Sep 26, 2026",
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
                "hxxp://yard749[.]pages[.]dev/",
                "hxxps://idshopee-59[.]blogspot[.]com/",
                "hxxps://security-server-landing-page--ginola080[.]replit[.]app/",
                "hxxps://tinyurl[.]com/2s3bx93x",
                "hxxps://trustpass[.]fun/o/fz204/7333160350973952#selectedbank9"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 2114,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 2114,
                "newInLastHour": 194,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"ea268e740788a9258ad4b8777f951baf27be5bdd35d60c2e8616f41159e158ae",
                " \"e82be29115aea122856decc573abbc6ebf4f9698bd45043fc42afb0309ab319b",
                " \"7acce9503f657d38667113c8fe5dccd12855fe49766e050d4952408ab027ed2c",
                " \"6828e6b6398b94ff7f6ca09f511561ad862c2936e860b262b8c1a6c23cd136ad",
                " \"6c6e2193bbb9b485d1e52a38c1076186d1bfe6bd949c43d8e759dbc1c6a63a82"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1648,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1648,
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
                "2.27.62.0/24",
                "2.56.192.0/22"
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
                "1[.]15[.]14[.]29",
                "1[.]193[.]58[.]176",
                "1[.]193[.]63[.]81",
                "1[.]2[.]173[.]126"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5043,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5043,
                "newInLastHour": 5043,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]161[.]144[.]132",
                "1[.]179[.]158[.]74",
                "1[.]203[.]186[.]149",
                "1[.]214[.]214[.]114"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 14570,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 14570,
                "newInLastHour": 14570,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://61[.]53[.]122[.]4:56888/i",
                "hxxp://105[.]224[.]56[.]236:51453/i",
                "hxxp://60[.]186[.]209[.]6:47036/i",
                "hxxp://13[.]140[.]176[.]180:8911/tadashi[.]x64",
                "hxxp://172[.]86[.]73[.]169:8081/packed_real[.]exe"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 8781,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 8781,
                "newInLastHour": 8416,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"jtshvacindustries[.]com\"",
                " \"kaltaranews[.]com\"",
                " \"judyu[.]com\"",
                " \"84[.]21[.]189[.]110:56003\"",
                " \"45[.]59[.]170[.]162:7443\""
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
            "iocCount": 10518,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10518,
                "newInLastHour": 3,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "6769e788ce8fb4744dfb2ca047f4aa428ed075d5",
                "638b07a5521bc5b2de50dbed49e7eedcf451d838",
                "8130921b7ab8a3ed5d7df7dbedd7a583a7e55b8f",
                "389be5fc932b66d82d59d3b499a37cb540fdb62c",
                "9f25b7b257319fcbba26fb666fb9fb139e6b1100"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 52901,
            "activeSources": 8,
            "criticalAlerts": 27533,
            "activeCampaigns": 276
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 16750,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10783,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4218,
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
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]193[.]58[.]176",
                    "1[.]193[.]63[.]81",
                    "1[.]2[.]173[.]126"
                ]
            },
            {
                "name": "malware_download",
                "count": 14445,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://113[.]230[.]20[.]235:42959/bin[.]sh",
                    "hxxp://115[.]235[.]20[.]5:60263/i",
                    "hxxp://94[.]154[.]43[.]253/ppc64le"
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 1745,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"imersion4cf[.]site\"",
                    " \"winter-finch-slaibteis[.]life\"",
                    " \"hxxps://combeandjasper[.]com/mx\""
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
                "count": 1452,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "cb7fcaede3c6bb75e73ee72b8de7c23de2953dd4",
                    "990472ad57a4d7dcb13689a21b0c84252f5cf0a5",
                    "99500e5de097a58d95775e1f9da85597851bdb71"
                ]
            },
            {
                "name": " \"Mirai",
                "count": 1383,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"3eca32b04244004e09bf20c0dcd93391cefb3ab0fe4e5db99d9f57aade4fb8d6",
                    " \"91af25336ae5256efe42d151f8330a77bf69896f18ee2e58ab35521c8dd5f5ea",
                    " \"d1e1493692f087f68cb42894446c06c44f7dcf8aae9acbe5de19399bcb7fa709"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1371,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"101[.]43[.]53[.]103:9123\"",
                    " \"a[.]bc[.]6a73dbe[.]www[.]aioperao[.]com\"",
                    " \"47[.]109[.]48[.]152:8080\""
                ]
            },
            {
                "name": " \"unknown_loader\"",
                "count": 1271,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxp://91[.]92[.]43[.]245/\"",
                    " \"hxxp://puytrewdv[.]com\"",
                    " \"hxxps://pub-22c5fb19472741eba9206c96fcd10f9c[.]r2[.]dev\""
                ]
            },
            {
                "name": "Vidar",
                "count": 802,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "a4138cfc3c588247705c5cba498d35324463dfa2",
                    "06ba62804f9d40f0ffb38ecd4c42b0229921cbde",
                    "fd081cbaf79596b443b9d591f9dd1390268db7f0"
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
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"unknown_loader\"",
        "totalAttacksThisHour": 43532,
        "lastCalculated": "2026-09-26 01:29 IST"
    }
};
