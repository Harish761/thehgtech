// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-04T03:10:13.661628+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-04T03:10:13.446404+05:30",
    "lastUpdatedFormatted": "Oct 04, 2026 at 03:10 AM IST",
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
            "iocCount": 938,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 938,
                "newInLastHour": 91,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"c3b6bc496135707d7486c7f5e8b5aecca71a992ad08827a9d0fbd940111b1474",
                " \"5da16030099b484460213d2031dc3683197eedbe54517c23e440f4f5af4c5daa",
                " \"e4deb6dd6a9aac86361c0008cff81e92c6e03cf1d2b1b8989f5441cb243ee80f",
                " \"b31852f920b70f65f020718cc028247b7b3dda660219c8bc8f906e4f3a88c9c3",
                " \"24b6c0c9f81ae40b7b995eaad2c42f61e035b9abc62ef0d13d6879f7d7ab014a"
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
                "1[.]12[.]229[.]231",
                "1[.]14[.]149[.]30",
                "1[.]15[.]14[.]29",
                "1[.]189[.]248[.]116",
                "1[.]193[.]63[.]174"
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
            "iocCount": 16217,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 16217,
                "newInLastHour": 16217,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://112[.]229[.]244[.]155:37347/bin[.]sh",
                "hxxp://59[.]180[.]138[.]122:38042/i",
                "hxxp://123[.]190[.]227[.]186:42588/i",
                "hxxp://119[.]185[.]154[.]155:43872/bin[.]sh",
                "hxxp://202[.]1[.]26[.]13:44204/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 11190,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 11190,
                "newInLastHour": 8676,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"misty-ripple-lark-kraiara[.]top\"",
                " \"xeshr05216[.]workers[.]dev\"",
                " \"www[.]iplexus[.]in\"",
                " \"www[.]levnaomi[.]org\"",
                " \"www[.]newerahealthcareservices[.]com\""
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
            "iocCount": 10853,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10853,
                "newInLastHour": 0,
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
            "totalIndicators": 56034,
            "activeSources": 8,
            "criticalAlerts": 27953,
            "activeCampaigns": 256
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 17099,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "C2",
                "count": 10854,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4479,
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
                "count": 16159,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://150[.]255[.]33[.]157:56929/i",
                    "hxxp://180[.]190[.]203[.]41:53547/i",
                    "hxxp://222[.]127[.]71[.]33:33166/i"
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
                "count": 2508,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxps://actualizar5g[.]lat/MiMovistar5G[.]apk\"",
                    " \"fahrzeugvergabe[.]de\"",
                    " \"autoflotte-vergabe[.]de\""
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1692,
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
                "count": 1377,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"forsell[.]tech\"",
                    " \"tg88seru[.]me\"",
                    " \"ryanmorales[.]me\""
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
                "name": " \"js.iclickfix\"",
                "count": 1142,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"grillrecipespro[.]com\"",
                    " \"mastergrillhub[.]com\"",
                    " \"perfectpitmaster[.]com\""
                ]
            },
            {
                "name": " \"elf.mirai\"",
                "count": 1093,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"431c0c23733381e927f9eeebd3b48eb3ad26df5aa381f55789d91772f7d804c0\"",
                    " \"b37f43cdd18ad9b8245273312acf3a92a000a79a8c5ec9be6ff513d30f28a509\"",
                    " \"e98151a43afe36960c4d0a68f77b25b13f86607f20000fff3ec93a8ef51be854\""
                ]
            },
            {
                "name": "Vidar",
                "count": 813,
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
        "fastestRisingThreat": " \"elf.mirai\"",
        "totalAttacksThisHour": 40289,
        "lastCalculated": "2026-10-04 03:10 IST"
    }
};
