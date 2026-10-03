// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-04T04:19:55.285692+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-04T04:19:54.844372+05:30",
    "lastUpdatedFormatted": "Oct 04, 2026 at 04:19 AM IST",
    "comparisonPeriod": "Oct 03 \u2013 Oct 04, 2026",
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
                "hxxp://www[.]supershopf[.]vip/",
                "hxxps://facebook-auto-liker[.]blogspot[.]com/",
                "hxxps://nhengenharia[.]com/crchildrenscare/crchildrenscare[.]htm",
                "hxxps://facebook-logiin[.]vercel[.]app/",
                "hxxps://roblox[.]com[.]bo/users/3950918659/profile"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 935,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 935,
                "newInLastHour": 7,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"f4d0a5783f8822c8c1e28590016be6320cf67be1969790aceb507b98605f14d2",
                " \"6a514da7cac790d657c1785c71c2d5efdbacadd117e3220f9221c40e245d9508",
                " \"dae56eed89e6af9c4e18ed8ccdce08256646bffa58989ef1def040d10c9ffff4",
                " \"9ece95d5db18dc890ab82cdb416b2bcf898425fc8f07dbd3df553a8adbc74abc",
                " \"d26d2cd679fa7c81b19e6a724f414cedc50769c214d9f4d130fcbb2bd3cad5b3"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1675,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1675,
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
                "1[.]14[.]149[.]30",
                "1[.]15[.]14[.]29",
                "1[.]189[.]248[.]116",
                "1[.]193[.]63[.]174",
                "1[.]213[.]214[.]233"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 0,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 0,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [],
            "sampleIndicators": []
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 16237,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 16237,
                "newInLastHour": 16237,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://121[.]231[.]117[.]51:34841/bin[.]sh",
                "hxxp://39[.]90[.]148[.]38:35621/bin[.]sh",
                "hxxp://154[.]242[.]244[.]29:49130/i",
                "hxxp://175[.]151[.]177[.]19:38792/bin[.]sh",
                "hxxp://59[.]180[.]142[.]74:49007/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 10809,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 10809,
                "newInLastHour": 8221,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxps://bankaifze[.]com/\"",
                " \"5szd8uv8[.]udeur[.]org\"",
                " \"peluqueriastyloslapelu[.]com\"",
                " \"petasport[.]ir\"",
                " \"podologiacanto[.]com\""
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
            "iocCount": 10590,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10590,
                "newInLastHour": 23,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "33330e829893dd29699f09a04726f7d489b32157",
                "58b3990b07e9caaa2c504a5b9759d14eefcbc5e5",
                "64c5f719aa0111be2ac04d785a8904b5baa22a88",
                "ef85e36f55755b6b85e9b3739ff7bfbb90f22e3b",
                "8c4c2867daf5d6ef1cc9d304fb4c6be488cd645a"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 56194,
            "activeSources": 8,
            "criticalAlerts": 28012,
            "activeCampaigns": 257
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 17181,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10831,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4500,
                "trend": "stable",
                "percentage": 0
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
                "count": 16217,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://112[.]229[.]244[.]155:37347/bin[.]sh",
                    "hxxp://59[.]180[.]138[.]122:38042/i",
                    "hxxp://123[.]190[.]227[.]186:42588/i"
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
                    "1[.]14[.]149[.]30",
                    "1[.]15[.]14[.]29"
                ]
            },
            {
                "name": " \"unknown_loader\"",
                "count": 2540,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"www[.]iplexus[.]in\"",
                    " \"www[.]levnaomi[.]org\"",
                    " \"www[.]newerahealthcareservices[.]com\""
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1691,
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
                "count": 1459,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "58b3990b07e9caaa2c504a5b9759d14eefcbc5e5",
                    "64c5f719aa0111be2ac04d785a8904b5baa22a88",
                    "5fe196813d0bf092a5d8f3ef550fe959a86ccf87"
                ]
            },
            {
                "name": " \"win.asyncrat\"",
                "count": 1381,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"46[.]246[.]84[.]17:2703\"",
                    " \"2[.]26[.]30[.]186:8808\"",
                    " \"128[.]90[.]167[.]136:7777\""
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1325,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"144[.]172[.]68[.]200:80\"",
                    " \"144[.]172[.]68[.]200:8080\"",
                    " \"153[.]80[.]242[.]105:2080\""
                ]
            },
            {
                "name": " \"elf.mirai\"",
                "count": 1163,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"fc2c3f2f744a85974a80e1d9cb8b90da884801a1282068b807349f561986c022\"",
                    " \"511fe46150f3e39ba1bcb08cfc09d27da85f61805e08a17e84f356c4a107a903\"",
                    " \"f37a854fe5bd02a8246633942f4a65c24e9b5de58ae416a1874f21a6a7a3c909\""
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 1134,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"misty-ripple-lark-kraiara[.]top\"",
                    " \"checkdvvc99[.]cc\"",
                    " \"grillrecipespro[.]com\""
                ]
            },
            {
                "name": "Vidar",
                "count": 807,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "33330e829893dd29699f09a04726f7d489b32157",
                    "b243f74faeb0e8cf30b79e84c846f40b31ce5f55",
                    "8bc45d63603370c41a2d7d352cdecb01281f5264"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"unknown_loader\"",
        "totalAttacksThisHour": 39793,
        "lastCalculated": "2026-10-04 04:19 IST"
    }
};
