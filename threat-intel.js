// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-04T00:40:47.824449+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-04T00:40:47.350058+05:30",
    "lastUpdatedFormatted": "Oct 04, 2026 at 12:40 AM IST",
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
            "iocCount": 914,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 914,
                "newInLastHour": 225,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"8a5c37a8c915c0960ba4ca8e5b18c718d6fa39c01b0c7fa25a9538f558372880",
                " \"e20a0c603ba91a6d5d2b11cc5a10ca95f57ddbc1f8e10e7e4c9ef560ac8013c9",
                " \"8ef31fa519c7c8ed78a2c44961356be2fc44b833b0cfe2c57f33d3edbb7b5800",
                " \"4c49dbbce842ee8489eb38080e2eb258cc15aad68aab77aa1e7a38e691ab948a",
                " \"bd35282b6d5af3ea795a504fea3513d63073ad2706bc8a8dc067d3235151aedc"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1692,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1692,
                "newInLastHour": 60,
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
                "1[.]193[.]56[.]152",
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
            "iocCount": 16159,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 16159,
                "newInLastHour": 16159,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://150[.]255[.]33[.]157:56929/i",
                "hxxp://180[.]190[.]203[.]41:53547/i",
                "hxxp://222[.]127[.]71[.]33:33166/i",
                "hxxp://120[.]28[.]196[.]74:60042/i",
                "hxxp://120[.]28[.]196[.]74:60042/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 11088,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 11088,
                "newInLastHour": 8825,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"179[.]43[.]170[.]151:8443\"",
                " \"99xfcl1y[.]techvigilante[.]com\"",
                " \"431c0c23733381e927f9eeebd3b48eb3ad26df5aa381f55789d91772f7d804c0\"",
                " \"b37f43cdd18ad9b8245273312acf3a92a000a79a8c5ec9be6ff513d30f28a509\"",
                " \"e98151a43afe36960c4d0a68f77b25b13f86607f20000fff3ec93a8ef51be854\""
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
            "iocCount": 10876,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10876,
                "newInLastHour": 37,
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
            "totalIndicators": 55778,
            "activeSources": 8,
            "criticalAlerts": 27732,
            "activeCampaigns": 262
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 16915,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "C2",
                "count": 10817,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4524,
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
                "count": 15882,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://123[.]190[.]235[.]239:55013/i",
                    "hxxp://42[.]230[.]69[.]42:32990/bin[.]sh",
                    "hxxp://42[.]239[.]238[.]71:33555/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]14[.]149[.]30",
                    "1[.]15[.]14[.]29",
                    "1[.]189[.]248[.]116"
                ]
            },
            {
                "name": " \"unknown_loader\"",
                "count": 2519,
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
                "count": 1632,
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
                "count": 1455,
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
                "count": 1385,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"31[.]56[.]209[.]82:7707\"",
                    " \"31[.]56[.]209[.]82:8808\"",
                    " \"217[.]60[.]102[.]47:7707\""
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1323,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"156[.]254[.]20[.]47:5998\"",
                    " \"153[.]80[.]242[.]105:8443\"",
                    " \"153[.]80[.]242[.]105:143\""
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 1192,
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
                "count": 895,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"b917460b2f8c5ccc99d24bef30b04011618c75ee9563bd3f5fed003ac90be065\"",
                    " \"9bc3b56742c90d4d36f4d550488cb19ac5f4be5c6d78c4e5dfc2ca410e2ae718\"",
                    " \"03a83f75a6b3a58bf840d41a61f82808036dee034d1682fd028ace7e6007bca8\""
                ]
            },
            {
                "name": "Vidar",
                "count": 802,
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
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 40611,
        "lastCalculated": "2026-10-04 00:40 IST"
    }
};
