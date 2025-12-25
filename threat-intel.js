// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2025-12-25T10:16:16.304123+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2025-12-25T10:16:15.951835+05:30",
    "lastUpdatedFormatted": "Dec 25, 2025 at 10:16 AM IST",
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
            "iocCount": 1068,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1068,
                "newInLastHour": 26,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"e1b8b76b327b7253e25566550b8d05c711522e5174ac75da9c2409920e372e5e",
                " \"c33b723bec37bb942be0b3d50ae047e93e66bff86f11fa271c44c62bc7d82081",
                " \"d2e8ad3035bf734c4ab18d298b44dae38c3841eb5e37532bef4ca89e3bb8c35b",
                " \"5d688674b9f476bcaf74a9a1c453b79cca1045dfb3e30597696d399139bd17b6",
                " \"1b95497b3247ace77bd2c28c96803a47f69ec7d35ad84dde377d1ee3684193c5"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1470,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1470,
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
            "iocCount": 5480,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5480,
                "newInLastHour": 5480,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]13[.]79[.]144",
                "1[.]145[.]64[.]133",
                "1[.]145[.]66[.]82",
                "1[.]161[.]62[.]69",
                "1[.]171[.]20[.]54"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 26887,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 26887,
                "newInLastHour": 26887,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://27[.]220[.]10[.]3:50823/bin[.]sh",
                "hxxps://2bej[.]0ctave5pairi[.]ru/erk77lat",
                "hxxp://110[.]39[.]242[.]135:37999/i",
                "hxxps://nova[.]0ctave5pairi[.]ru/jksc9pz0",
                "hxxp://123[.]5[.]131[.]236:51197/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 794,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 794,
                "newInLastHour": 791,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"91[.]92[.]243[.]55:2404\"",
                " \"2bej[.]0ctave5pairi[.]ru\"",
                " \"nova[.]0ctave5pairi[.]ru\"",
                " \"wrbe[.]0ctave5pairi[.]ru\"",
                " \"6o2p1[.]0ctave5pairi[.]ru\""
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
            "iocCount": 8659,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8659,
                "newInLastHour": 0,
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
            "totalIndicators": 54146,
            "activeSources": 8,
            "criticalAlerts": 36586,
            "activeCampaigns": 191
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 27928,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "C2",
                "count": 8658,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 356,
                "trend": "stable",
                "percentage": -2
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
                "percentage": 0
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
                "count": 26825,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://ul34[.]dua1i5mmuksun[.]ru/citqh2zh",
                    "hxxp://123[.]5[.]190[.]85:55574/bin[.]sh",
                    "hxxps://t5[.]dua1i5mmuksun[.]ru/quludeu6"
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
                "name": " \"Mirai",
                "count": 523,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"8a692ea27709b97defa8408394882f2f59756472ce62e0e9309da85c3ae81976",
                    " \"0e296b89ece175baab9df3b832d6c9a028f2d62a8fc51fcc9c3950688e143e18",
                    " \"15fe9e1f028f0f5b3dcaa8f1bd8403d658dc22f986b9dff2ca60ab62ae45165c"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 385,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"t5[.]dua1i5mmuksun[.]ru\"",
                    " \"alpha[.]dua1i5mmuksun[.]ru\"",
                    " \"ui[.]dua1i5mmuksun[.]ru\""
                ]
            },
            {
                "name": " \"n/a",
                "count": 368,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"6e4cec4872ad7712b3e1cb434be6d3c064bbe79b1b010aa8d3a79e5d4a1fd872",
                    " \"1c2f1c37fcc5f26f59a8611aaa487ae33e468f85d28e7367005533b804624563",
                    " \"de0cd31e7130ddd012da48351bbb0a2fde351e9299b692583b2b9e874c361545"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 48488,
        "lastCalculated": "2025-12-25 10:16 IST"
    }
};
