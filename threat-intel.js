// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2025-12-25T07:52:22.385759+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2025-12-25T07:52:22.023818+05:30",
    "lastUpdatedFormatted": "Dec 25, 2025 at 07:52 AM IST",
    "comparisonPeriod": "Dec 24 \u2013 Dec 25, 2025",
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
                "hxxps://wzlink[.]cc/FbKnRRrh/?regalos-de-navidad-amazon-2025[.]html",
                "hxxps://shortlink[.]st/P-g890iC",
                "hxxps://who-whatsapp[.]com[.]cn/",
                "hxxps://roblox[.]com[.]ge/games/2753915549/Control-Blox-Fruits?privateServerLinkCode=03992416903793253005371261025965",
                "hxxps://cloud-sso-trezr-web[.]typedream[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1077,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1077,
                "newInLastHour": 115,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"6e4cec4872ad7712b3e1cb434be6d3c064bbe79b1b010aa8d3a79e5d4a1fd872",
                " \"1c2f1c37fcc5f26f59a8611aaa487ae33e468f85d28e7367005533b804624563",
                " \"de0cd31e7130ddd012da48351bbb0a2fde351e9299b692583b2b9e874c361545",
                " \"e22eaa0efd2ad956bbcecbeee3e6e1e6cb17cf7ff3c4904998614dbcb6dc44a4",
                " \"09cf198529a81088ec17999541b24a634b784da7f97e4e8bc285c9597d0f4fec"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1474,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1474,
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
                "1[.]1[.]176[.]58",
                "1[.]15[.]149[.]209",
                "1[.]157[.]99[.]66",
                "1[.]171[.]34[.]122",
                "1[.]176[.]134[.]251"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5798,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5798,
                "newInLastHour": 5798,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]13[.]79[.]144",
                "1[.]145[.]64[.]133",
                "1[.]145[.]66[.]82",
                "1[.]171[.]20[.]54",
                "1[.]171[.]34[.]122"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 26825,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 26825,
                "newInLastHour": 26825,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://ul34[.]dua1i5mmuksun[.]ru/citqh2zh",
                "hxxp://123[.]5[.]190[.]85:55574/bin[.]sh",
                "hxxps://t5[.]dua1i5mmuksun[.]ru/quludeu6",
                "hxxps://alpha[.]dua1i5mmuksun[.]ru/u7809lbg",
                "hxxps://ui[.]dua1i5mmuksun[.]ru/7ody32hj"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 785,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 785,
                "newInLastHour": 782,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"138[.]68[.]155[.]86:7707\"",
                " \"t5[.]dua1i5mmuksun[.]ru\"",
                " \"alpha[.]dua1i5mmuksun[.]ru\"",
                " \"ui[.]dua1i5mmuksun[.]ru\"",
                " \"86ds[.]bracket-loam[.]ru\""
            ]
        },
        "Feodo Tracker": {
            "description": "Botnet C2 server IPs from Feodo Tracker. Tracks Dridex, Emotet, TrickBot, QakBot, and BazarLoader.",
            "website": "https://feodotracker.abuse.ch/",
            "updateFrequency": "Hourly",
            "iocCount": 4,
            "iocDataUrl": "https://thehgtech.com/ioc-data/feodo-tracker.json",
            "stats": {
                "total": 4,
                "newInLastHour": 4,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "15[.]204[.]219[.]215",
                "162[.]243[.]103[.]246",
                "167[.]86[.]75[.]145",
                "51[.]210[.]96[.]48"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 8681,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8681,
                "newInLastHour": 1,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "55d4b831d65ff226d922a2811fdc63844de3132c",
                "1a5aa767c2675014c5c0a10b2d9f4c63844a84f8",
                "fdca450de4393b70b271dc71ada5208aef3bcf49",
                "57f2f129b4b92f8a5a9b673485771a148c5d6159",
                "064d9b53d5092f63001ccd5e9626d8c361717e62"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 54656,
            "activeSources": 8,
            "criticalAlerts": 37086,
            "activeCampaigns": 194
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 28429,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8657,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 365,
                "trend": "stable",
                "percentage": -3
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
                "percentage": 98
            },
            {
                "name": "Tech",
                "percentage": 1
            },
            {
                "name": "Finance",
                "percentage": 0
            },
            {
                "name": "Government",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 27289,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://61[.]52[.]111[.]161:38953/bin[.]sh",
                    "hxxp://178[.]16[.]55[.]189/files/1333144962/oAaZo9r[.]exe",
                    "hxxps://lv2[.]fl0wmortar[.]ru/alyynbqq"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]1[.]176[.]58",
                    "1[.]15[.]149[.]209",
                    "1[.]157[.]99[.]66"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1474,
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
                "count": 1363,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "1a5aa767c2675014c5c0a10b2d9f4c63844a84f8",
                    "3a56a66eb43b679afa1edb58e0fddcadf74bb2a4",
                    "47800989ef4eda671b2a76a0cd9123ec7b0bc324"
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
                "count": 599,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "69affd6a91e38229fb655a62a52eb2b7af9fdfb4",
                    "be3b160ebe83bfc2e609bf912b36096e8dd2ffa3",
                    "243253f396aa30124e62cdd95a58cf8a3353fd88"
                ]
            },
            {
                "name": " \"Mirai",
                "count": 567,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"1300be15611ba32b7f330cb31de833f46c5ca2f43ae9133c064ca32e49cfd8d5",
                    " \"ba07e6993d17f59bd1cbbc1a132000b6635e6116e3490f79907cafd5d2325b50",
                    " \"a3719f7fd896d3de0649cbf6b3e3b41bfbd681d2c275e9adea06fdd434f0b825"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 535,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "e2293f74d8d72bde90bb0424038259a9e3126e1b",
                    "69101b8edfa5d5e2ead4512a6d71c84748b0c012",
                    "1d28cc6dca52e95f859739c39a04d794671f66d9"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 386,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"lv2[.]fl0wmortar[.]ru\"",
                    " \"jr33x[.]amber-flint[.]ru\"",
                    " \"nccf0[.]amber-flint[.]ru\""
                ]
            },
            {
                "name": "Rhadamanthys",
                "count": 355,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "f999c0da0e983becc1c935444c5e609be26b0bcf",
                    "4101579ae950c954fc1096adf43bdefcf0364cfd",
                    "0c3ee8188ce35b6bb11d5b12a0e1e28310188b4e"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 48825,
        "lastCalculated": "2025-12-25 07:52 IST"
    }
};
