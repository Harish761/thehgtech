// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-04T19:23:57.060591+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-04T19:23:56.728305+05:30",
    "lastUpdatedFormatted": "Oct 04, 2026 at 07:23 PM IST",
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
                "hxxps://www[.]roblox[.]ly/users/2892759210/profile",
                "hxxp://infomx-account-com[.]help/a[.]php",
                "hxxp://location-gpsmx-satelite[.]help/a[.]php",
                "hxxp://soporte-app-gps[.]us/a[.]php",
                "hxxp://www[.]chat-group-as-ruby[.]vercel[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1096,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1096,
                "newInLastHour": 226,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"291672084703b5197b4559a5b6beca7395e263b3b3c7b8bf9b5b5cb1534b8a9d",
                " \"c9d1bf7bfe1818e071b6b71d10e0a4f2f0a4fcdfcb510acd83fc1f098166c3ee",
                " \"d46a3f21f36c6f6bb0f39bb33d9f59ebb6d8c05df74dd4749a4797258f88e78a",
                " \"9f9999dd227e16293199f29a93e06dd4b9d371bfa97d371a2f56d074a0372290",
                " \"187c6d8e2309a1e4dcda02d46da0ff3506738b63fbd5c6ce72c870bede835d36"
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
                "newInLastHour": 10,
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
                "1[.]189[.]248[.]116",
                "1[.]193[.]56[.]152",
                "1[.]203[.]186[.]149"
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
            "iocCount": 16475,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 16475,
                "newInLastHour": 16475,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://180[.]190[.]203[.]41:50927/bin[.]sh",
                "hxxp://42[.]226[.]65[.]18:39212/bin[.]sh",
                "hxxp://113[.]230[.]63[.]71:50480/i",
                "hxxp://210[.]208[.]104[.]156:34238/bin[.]sh",
                "hxxps://cdn[.]discordapp[.]com/attachments/1521843051192909974/1556292036628316191/bundle[.]zip?ex=6ac3a168&is=6ac24fe8&hm=58f1be0d4cd105b7ec5303f5f0226d507ffde9335bcd81d86b4c292e5fc4a5a6&"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 11142,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 11142,
                "newInLastHour": 8290,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"f2911fe9394e3d09f36be8d6c17b62fde5fab04d1e985173f23a543111c97fac\"",
                " \"fc4e159f8478673943d1d52366f5c274f95fd6ddb3618bd75b873154e72fca0a\"",
                " \"15c488a330362ce5dd621b40a057f8ee98d9f1a962e3f440acec53e34874dbeb\"",
                " \"08f4d444d51993a92e374193007440da52d5e9b375f7ad02fdaae7706280c1b1\"",
                " \"7a95e6de72616d5f010e6a450840791a4cb1451650073a55fd2685cafd7e6a08\""
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
            "iocCount": 10888,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10888,
                "newInLastHour": 50,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "2d22783f272d8fb12ff94ac13466fcd9a9a2ccc2",
                "fec72b31ad1f9e2e080c83f3964b34fe81e4a8e4",
                "bfc3decb728fc2becb887cc23c6cf46a2fdcbb8d",
                "1c04120f29c25a1e06b4f48651fc9eaaecd45eaa",
                "07fa3f9a48cdbe0d045c16a741f09237aacf2c3d"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 55845,
            "activeSources": 8,
            "criticalAlerts": 28003,
            "activeCampaigns": 258
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 17187,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10816,
                "trend": "stable",
                "percentage": 2
            },
            {
                "category": "Botnet",
                "count": 4442,
                "trend": "stable",
                "percentage": -1
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
                "count": 16144,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://119[.]167[.]7[.]197:48851/i",
                    "hxxp://5[.]166[.]76[.]110:36709/bin[.]sh",
                    "hxxp://42[.]6[.]60[.]204:52051/i"
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
                    "1[.]189[.]248[.]116"
                ]
            },
            {
                "name": " \"unknown_loader\"",
                "count": 2604,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"citamu[.]my[.]id\"",
                    " \"culturalandsingaporedress[.]com\"",
                    " \"diligenths[.]com\""
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1681,
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
                "name": " \"elf.mirai\"",
                "count": 1448,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"ed2add9aaf0b3b354331bb952975c5648f185b88743ca5c1af943c7675159695\"",
                    " \"b7c026a5464800b78d27a46a6ba01b553de96e9dfb81a26e2d2940358b3802b9\"",
                    " \"31919da20fdec8f6e2c8811024a1bd89e03c6d2fa5c04fcad97fdb6689501491\""
                ]
            },
            {
                "name": " \"win.asyncrat\"",
                "count": 1384,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"97d66f6298b0680665a959d7c53b9bfc69bfaabd3ccae17f9d313268513fca60\"",
                    " \"91847a5075fd0e938f4aec3a23a4437c6445f4eefc201fa288e0d1513edf0561\"",
                    " \"c40317bafe39ec13bd944009bd6c53e6db8430c488433fdace6a3527b26588bb\""
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1326,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"38[.]76[.]190[.]209:5700\"",
                    " \"191[.]124[.]5[.]229:80\"",
                    " \"191[.]124[.]5[.]229:443\""
                ]
            },
            {
                "name": "Vidar",
                "count": 804,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "33330e829893dd29699f09a04726f7d489b32157",
                    "b243f74faeb0e8cf30b79e84c846f40b31ce5f55",
                    "8bc45d63603370c41a2d7d352cdecb01281f5264"
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
        "fastestRisingThreat": " \"elf.mirai\"",
        "totalAttacksThisHour": 40356,
        "lastCalculated": "2026-10-04 19:23 IST"
    }
};
