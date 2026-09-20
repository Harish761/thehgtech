// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-20T18:31:17.057129+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-20T18:31:16.804021+05:30",
    "lastUpdatedFormatted": "Sep 20, 2026 at 06:31 PM IST",
    "comparisonPeriod": "Sep 19 \u2013 Sep 20, 2026",
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
                "hxxp://suhanir7[.]github[.]io/Amazon_Clone",
                "hxxp://addqo[.]com/pl",
                "hxxps://main[.]d3thcdi1mb7dsr[.]amplifyapp[.]com/",
                "hxxp://varsha24-01[.]github[.]io/Amazon_Clone",
                "hxxps://ledger-live-downlloadd[.]blogspot[.]com/?m=1"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1807,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1807,
                "newInLastHour": 261,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"4a4a668974acf5e47aec4e718951820131de02b221492d2e5b6be6c6da098321",
                " \"3305819118f42c7da67f09817c3d639111ae9491fbf658515f3e7917391facba",
                " \"b5cbc8e01f2d5d07d41f8a245d8cd2b4ffde2acff2dbff2d4ee9365338d21faa",
                " \"efd4d53256b2df19ef79cfe5a80f53b8063ef8b96d9152d7b5367448182ba5b7",
                " \"9fe34d2b52ab275cdeb46f76588ec39c4a8f0a46a7fddaf995cb4649c3a0fbcd"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1711,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1711,
                "newInLastHour": 48,
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
                "1[.]14[.]156[.]5",
                "1[.]14[.]69[.]226",
                "1[.]15[.]14[.]29",
                "1[.]173[.]106[.]65",
                "1[.]189[.]89[.]243"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 12006,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 12006,
                "newInLastHour": 12006,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]14[.]192[.]95",
                "1[.]14[.]209[.]20",
                "1[.]15[.]221[.]192",
                "1[.]161[.]144[.]132"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 12949,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 12949,
                "newInLastHour": 12949,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://210[.]208[.]110[.]21:59565/i",
                "hxxp://61[.]52[.]45[.]235:56991/i",
                "hxxp://182[.]126[.]103[.]176:51069/bin[.]sh",
                "hxxp://210[.]208[.]110[.]21:59565/bin[.]sh",
                "hxxp://42[.]239[.]240[.]176:56878/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 5366,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 5366,
                "newInLastHour": 5162,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"rafytylu[.]workers[.]dev\"",
                " \"sddiadtu[.]gideonconstructioninc[.]com\"",
                " \"8cm45ib0[.]us-slimsplitsmethod[.]com\"",
                " \"gideonconstructioninc[.]com\"",
                " \"cosygazo[.]workers[.]dev\""
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
            "iocCount": 10752,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10752,
                "newInLastHour": 8616,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "0db74536080bbf99f4e8e8b53efd477d1ccaf3e0",
                "8daac8268eaa54e2c2d1aef6108fba9ba29eaa36",
                "372b91c0d31a75b4e1765af998d984881e34dab1",
                "dec7517543aba8ea73a1b336a0e72230bdfab6cc",
                "4c48cf2aee29c6b3dd9aceb27ae6674b27cec999"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 39225,
            "activeSources": 8,
            "criticalAlerts": 16694,
            "activeCampaigns": 159
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 14553,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "Botnet",
                "count": 4352,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 2141,
                "trend": "down",
                "percentage": -80
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
                    "1[.]10[.]172[.]57",
                    "1[.]14[.]69[.]226",
                    "1[.]173[.]106[.]65"
                ]
            },
            {
                "name": "malware_download",
                "count": 12797,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://59[.]180[.]132[.]51:55956/i",
                    "hxxp://42[.]235[.]140[.]223:35556/i",
                    "hxxp://42[.]228[.]105[.]163:39609/i"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1664,
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
                "name": " \"win.cobalt_strike\"",
                "count": 1361,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"81[.]70[.]21[.]163:8080\"",
                    " \"81[.]70[.]21[.]163:443\"",
                    " \"81[.]70[.]21[.]163:8091\""
                ]
            },
            {
                "name": " \"n/a",
                "count": 1022,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"4e2f0e58ec5a9f6f3d0a0fd6b496afdd2df1f38d053c38df682c898226154425",
                    " \"b042caa730d5d29cf55e7c1c570ae1a830f0b1bca3edbb8778f994a674e70deb",
                    " \"5964f962d96b459ed59ac7fc1970703e2242b1919130c2162925cc8d6cf1be26"
                ]
            },
            {
                "name": " \"win.pure_rat\"",
                "count": 617,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"94[.]154[.]32[.]189:56002\"",
                    " \"94[.]154[.]32[.]189:443\"",
                    " \"94[.]154[.]32[.]189:56001\""
                ]
            },
            {
                "name": "Vidar",
                "count": 581,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "6e35a76a571969f0e27a8c8c1c11c8aa21330887",
                    "894348a13bd989cadc0e7dab223b2d98dd2a2a8f",
                    "513c67627217e9e62bf86dad646acdccca6bae7d"
                ]
            },
            {
                "name": " \"unknown\"",
                "count": 531,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxps://squidscript[.]com/\"",
                    " \"squidscript[.]com\"",
                    " \"hxxps://demonsbasement[.]com/\""
                ]
            },
            {
                "name": " \"Mirai",
                "count": 433,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"53947abf12814f52230fc93d614bbd211957c8675ae99a1e0ba43393cbaec11c",
                    " \"e65a3387fe886951238a8db1bba23a51bd41b917bcc6cb936232519018d622a3",
                    " \"e974913b60253b954569dbffc87c22471700eaeb5364a2eeebf2139073189c27"
                ]
            },
            {
                "name": " \"win.asyncrat\"",
                "count": 372,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"91[.]92[.]241[.]149:90\"",
                    " \"67[.]43[.]56[.]25:6606\"",
                    " \"176[.]149[.]202[.]136:8807\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "AsyncRAT",
        "totalAttacksThisHour": 54347,
        "lastCalculated": "2026-09-20 18:31 IST"
    }
};
