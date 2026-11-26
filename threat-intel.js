// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-11-26T07:24:43.446749+05:30 IST (2026-11-26 01:54 UTC)
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-11-26T07:24:42.599635+05:30",
    "lastUpdatedFormatted": "Nov 26, 2026 at 07:24 AM IST",
    "lastUpdatedUtc": "2026-11-26 01:54 UTC",
    "comparisonPeriod": "Nov 25 \u2013 Nov 26, 2026",
    "stats": {
        "totalIOCs": 103743,
        "byType": {
            "url": 39804,
            "ip": 56686,
            "hash": 641,
            "domain": 2158,
            "ssl-cert": 2750,
            "ip-range": 1704
        },
        "byVendor": {
            "OpenPhish": 4117,
            "Malware Bazaar": 476,
            "Spamhaus DROP": 1704,
            "CINS Army": 40737,
            "Blocklist.de": 13399,
            "URLhaus": 34528,
            "ThreatFox": 6027,
            "Feodo Tracker": 5,
            "SSL Blacklist": 2750
        },
        "topMalware": [
            {
                "name": "Vidar",
                "count": 1569,
                "types": [
                    "hash",
                    "ssl-cert",
                    "url",
                    "domain"
                ]
            },
            {
                "name": "Cobalt Strike",
                "count": 1183,
                "types": [
                    "ip",
                    "hash",
                    "domain"
                ]
            },
            {
                "name": "IClickFix",
                "count": 708,
                "types": [
                    "url",
                    "domain"
                ]
            },
            {
                "name": "PureRAT",
                "count": 452,
                "types": [
                    "ip",
                    "ssl-cert"
                ]
            },
            {
                "name": "OffLoader",
                "count": 329,
                "types": [
                    "ssl-cert"
                ]
            },
            {
                "name": "ConnectWise",
                "count": 286,
                "types": [
                    "hash",
                    "ssl-cert"
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 270,
                "types": [
                    "ip",
                    "hash",
                    "ssl-cert",
                    "domain"
                ]
            },
            {
                "name": "Unknown Loader",
                "count": 258,
                "types": [
                    "url",
                    "hash",
                    "domain"
                ]
            },
            {
                "name": "AdaptixC2",
                "count": 244,
                "types": [
                    "ip",
                    "ssl-cert"
                ]
            },
            {
                "name": "MacSync",
                "count": 244,
                "types": [
                    "url",
                    "domain"
                ]
            },
            {
                "name": "PureLogsStealer",
                "count": 217,
                "types": [
                    "hash",
                    "ssl-cert"
                ]
            },
            {
                "name": "Remus",
                "count": 199,
                "types": [
                    "ip",
                    "url"
                ]
            },
            {
                "name": "DanaBot",
                "count": 177,
                "types": [
                    "ip"
                ]
            },
            {
                "name": "ACRStealer",
                "count": 175,
                "types": [
                    "ssl-cert"
                ]
            },
            {
                "name": "Remcos",
                "count": 141,
                "types": [
                    "ip",
                    "domain"
                ]
            }
        ],
        "recentIOCs": [
            {
                "type": "ssl-cert",
                "indicator": "9ca8233118bf720ea5c2e141f0dde31c4cc9c818",
                "description": "Malicious SSL certificate - PureLogsStealer C&C",
                "timestamp": "2026-11-25 18:28:00",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-26 05:42 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-26T05:42:21.405650+05:30",
                "campaign": "PureLogsStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "3ec4de7981b35b599489e6131411bfab779a3993",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-11-25 17:34:17",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-26 05:42 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-26T05:42:21.405650+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "5531f1af029fc7cccf27c690b6e38a11689308e6",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-11-25 17:08:30",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-26 05:42 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-26T05:42:21.405650+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "07afce465ef29e5bd8b2bf1c86e81cfe37424878",
                "description": "Malicious SSL certificate - PureLogsStealer C&C",
                "timestamp": "2026-11-25 14:10:31",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-26 05:42 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-26T05:42:21.405650+05:30",
                "campaign": "PureLogsStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "5d4337304f628324e97723e352148d9d259ef3c3",
                "description": "Malicious SSL certificate - FennecRAT C&C",
                "timestamp": "2026-11-18 03:51:44",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-26 05:42 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-26T05:42:21.405650+05:30",
                "campaign": "FennecRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "13b6b2f68e58287e1fbe149b9ae41f5259406f38",
                "description": "Malicious SSL certificate - Malware C&C",
                "timestamp": "2026-11-18 03:30:41",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-26 05:42 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-26T05:42:21.405650+05:30",
                "campaign": "Malware",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "c51052b024b7b8fd7afff4c0912d6c00b3d2eb05",
                "description": "Malicious SSL certificate - ACRStealer C&C",
                "timestamp": "2026-11-18 03:26:03",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-26 05:42 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-26T05:42:21.405650+05:30",
                "campaign": "ACRStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "203fb6154172879c08291fefb46062b27eb73f55",
                "description": "Malicious SSL certificate - ConnectWise C&C",
                "timestamp": "2026-11-18 03:25:44",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-26 05:42 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-26T05:42:21.405650+05:30",
                "campaign": "ConnectWise",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "52a71237e3ce64976990f68f176eb8a8c1daa052",
                "description": "Malicious SSL certificate - Malware C&C",
                "timestamp": "2026-11-18 03:24:22",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-26 05:42 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-26T05:42:21.405650+05:30",
                "campaign": "Malware",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "110dc32c90365e41ccfc8eaf47b89c8f5adc45fc",
                "description": "Malicious SSL certificate - WARDENStealer C&C",
                "timestamp": "2026-11-18 03:04:38",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-26 05:42 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-26T05:42:21.405650+05:30",
                "campaign": "WARDENStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "34caba1bef1d1006199db86c6e2d5bf1d67c884e",
                "description": "Malicious SSL certificate - PureLogsStealer C&C",
                "timestamp": "2026-11-03 17:43:08",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-26 05:42 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-26T05:42:21.405650+05:30",
                "campaign": "PureLogsStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "277a06bc0dfdd0da5455bdb3d5b92f7cd5fc9520",
                "description": "Malicious SSL certificate - PureLogsStealer C&C",
                "timestamp": "2026-11-03 16:33:57",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-26 05:42 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-26T05:42:21.405650+05:30",
                "campaign": "PureLogsStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "b04b85ac36b0501fad420e3bc7976c3d31409b4e",
                "description": "Malicious SSL certificate - PureLogsStealer C&C",
                "timestamp": "2026-11-03 16:33:46",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-26 05:42 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-26T05:42:21.405650+05:30",
                "campaign": "PureLogsStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "70e5be14909fe413ceb33179b521e33253b23b25",
                "description": "Malicious SSL certificate - PureLogsStealer C&C",
                "timestamp": "2026-11-03 16:32:56",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-26 05:42 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-26T05:42:21.405650+05:30",
                "campaign": "PureLogsStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "aba67183b38e7af2ffbd3cde35fcaeb1ae838a6c",
                "description": "Malicious SSL certificate - PureLogsStealer C&C",
                "timestamp": "2026-11-03 16:30:45",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-26 05:42 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-26T05:42:21.405650+05:30",
                "campaign": "PureLogsStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "cb99d5384d603d6553a543c657cdd10245327790",
                "description": "Malicious SSL certificate - AzaleaAgent C&C",
                "timestamp": "2026-11-03 16:19:43",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-26 05:42 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-26T05:42:21.405650+05:30",
                "campaign": "AzaleaAgent",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "071723a919a59de8e12007a28efe58cdce47582f",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-11-03 16:13:59",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-26 05:42 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-26T05:42:21.405650+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "51355dd769baf664063ba8e548fba4edbb43d30c",
                "description": "Malicious SSL certificate - PureRAT C&C",
                "timestamp": "2026-11-03 16:12:07",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-26 05:42 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-26T05:42:21.405650+05:30",
                "campaign": "PureRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "d17c1ce0af678753b38a651d6739399aa8e1a9dd",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-11-03 16:12:00",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-26 05:42 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-26T05:42:21.405650+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "14124f6716dafc9943ff7de4b0146934c488b6aa",
                "description": "Malicious SSL certificate - PureRAT C&C",
                "timestamp": "2026-11-03 16:10:37",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-26 05:42 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-26T05:42:21.405650+05:30",
                "campaign": "PureRAT",
                "confidence": "High"
            }
        ],
        "lastUpdated": "2026-11-26T07:24:42.599635+05:30",
        "lastUpdatedFormatted": "Nov 26, 2026 at 07:24 AM IST",
        "lastUpdatedUtc": "2026-11-26 01:54 UTC"
    },
    "vendors": {
        "OpenPhish": {
            "description": "Real-time phishing URL feed updated every 15 minutes. Tracks active phishing sites targeting major brands and financial institutions.",
            "website": "https://openphish.com/",
            "updateFrequency": "Every 15 minutes",
            "iocCount": 3817,
            "iocDataUrl": "https://thehgtech.com/ioc-data/openphish.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 3817,
                "newInLastHour": 300,
                "lastUpdate": "2026-11-26 01:54 UTC",
                "isStale": false,
                "feedStatus": "active"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://roblox[.]com[.]sy/users/834919932/profile",
                "hxxps://mhojiakbar0717-max[.]github[.]io/instagram",
                "hxxps://www[.]roblox[.]com[.]pt/games/2753915549/Blox-Fruits?privateServerLinkCode=22137769717455509702998655069555",
                "hxxps://aprobacion[.]github[.]io/hf[.]com//",
                "hxxps://roblox[.]com[.]ss/communities/7124082469/OBSIDIAN-ANGELS"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 476,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "isStale": true,
            "feedStatus": "stale",
            "stats": {
                "total": 476,
                "newInLastHour": 0,
                "lastUpdate": "2026-11-26 01:54 UTC",
                "isStale": true,
                "feedStatus": "stale"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                "02414b05a19c9ff826c3cfca15849c0a32a26dd5593ce6165f01e883a6fc6ae2",
                "f3e50b8e9f28213c52ad0001a3fd251075bc79583d80d433b4e47d95a238bebd",
                "d73112757c5e01bf2fb84dfb69f5d51bba8e63e72d4eb862266665a93a76be0a",
                "4504dca6f7874b8c561ec4af241fcce472cf760e9b66cafe2aa09fe09116a28c",
                "1c1e6ff2befc51e413c37961e0cfc2e4bca62043560964e9df56abd477568b77"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1628,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 1628,
                "newInLastHour": 39,
                "lastUpdate": "2026-11-26 01:54 UTC",
                "isStale": false,
                "feedStatus": "active"
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
            "iocCount": 39026,
            "iocDataUrl": "https://thehgtech.com/ioc-data/cins-army.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 39026,
                "newInLastHour": 15000,
                "lastUpdate": "2026-11-26 01:54 UTC",
                "isStale": false,
                "feedStatus": "active"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]14[.]3[.]170",
                "1[.]15[.]14[.]29",
                "1[.]15[.]88[.]48",
                "1[.]170[.]200[.]20",
                "1[.]170[.]243[.]169"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 12913,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 12913,
                "newInLastHour": 4607,
                "lastUpdate": "2026-11-26 01:54 UTC",
                "isStale": false,
                "feedStatus": "active"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]1[.]220[.]166",
                "1[.]117[.]72[.]220",
                "1[.]12[.]55[.]80",
                "1[.]13[.]79[.]149",
                "1[.]162[.]242[.]67"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 34528,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "isStale": true,
            "feedStatus": "stale",
            "stats": {
                "total": 34528,
                "newInLastHour": 0,
                "lastUpdate": "2026-11-26 01:54 UTC",
                "isStale": true,
                "feedStatus": "stale"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://raw[.]githubusercontent[.]com/rcrishabh/Loud-No-More/refs/heads/master/endotys/No-More-Loud-v1[.]0[.]zip",
                "hxxps://raw[.]githubusercontent[.]com/Shishir-Singh-666/nodepay2nd/refs/heads/main/src/nd_nodepay_v1[.]9[.]zip",
                "hxxps://raw[.]githubusercontent[.]com/Kurvaan/ptx-tutorial-by-aislop/refs/heads/main/sections/by_ptx_tutorial_aislop_3[.]2[.]zip",
                "hxxps://raw[.]githubusercontent[.]com/Gajaa-Azhura/MERN-application/refs/heads/master/src/assets/application_MER_2[.]1[.]zip",
                "hxxps://raw[.]githubusercontent[.]com/Gourdja/sonic-skills/refs/heads/main/skills/audio-numerics-review/skills-sonic-v3[.]4[.]zip"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 6027,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "isStale": true,
            "feedStatus": "stale",
            "stats": {
                "total": 6027,
                "newInLastHour": 0,
                "lastUpdate": "2026-11-26 01:54 UTC",
                "isStale": true,
                "feedStatus": "stale"
            },
            "types": [
                "ip",
                "hash",
                "url",
                "domain"
            ],
            "sampleIndicators": [
                "b4ec1ea1528a1cf690b1067a214751cfee1ef0eca037c7989b4bef17fbf6b53b",
                "89[.]32[.]41[.]109",
                "89[.]32[.]41[.]111",
                "89[.]32[.]41[.]117",
                "202cd87d43a3908174e7b219c61ad3728cc6d46469a54f86861470c19677a6da"
            ]
        },
        "Feodo Tracker": {
            "description": "Botnet C2 server IPs from Feodo Tracker. Tracks Dridex, Emotet, TrickBot, QakBot, and BazarLoader.",
            "website": "https://feodotracker.abuse.ch/",
            "updateFrequency": "Hourly",
            "iocCount": 5,
            "iocDataUrl": "https://thehgtech.com/ioc-data/feodo-tracker.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 5,
                "newInLastHour": 5,
                "lastUpdate": "2026-11-26 01:54 UTC",
                "isStale": false,
                "feedStatus": "active"
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
            "iocCount": 11224,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 11224,
                "newInLastHour": 8638,
                "lastUpdate": "2026-11-26 01:54 UTC",
                "isStale": false,
                "feedStatus": "active"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "9ca8233118bf720ea5c2e141f0dde31c4cc9c818",
                "3ec4de7981b35b599489e6131411bfab779a3993",
                "5531f1af029fc7cccf27c690b6e38a11689308e6",
                "07afce465ef29e5bd8b2bf1c86e81cfe37424878",
                "040ebeff29b5e3f41e6013e783035be7666fcc53"
            ]
        }
    },
    "overview": [
        {
            "type": "ssl-cert",
            "indicator": "9ca8233118bf720ea5c2e141f0dde31c4cc9c818",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-11-25 18:28:00",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-26T05:42:21.405650+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "3ec4de7981b35b599489e6131411bfab779a3993",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-11-25 17:34:17",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-26T05:42:21.405650+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "5531f1af029fc7cccf27c690b6e38a11689308e6",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-11-25 17:08:30",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-26T05:42:21.405650+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "07afce465ef29e5bd8b2bf1c86e81cfe37424878",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-11-25 14:10:31",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-26T05:42:21.405650+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "5d4337304f628324e97723e352148d9d259ef3c3",
            "description": "Malicious SSL certificate - FennecRAT C&C",
            "timestamp": "2026-11-18 03:51:44",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-26T05:42:21.405650+05:30",
            "campaign": "FennecRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "13b6b2f68e58287e1fbe149b9ae41f5259406f38",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-11-18 03:30:41",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-26T05:42:21.405650+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "c51052b024b7b8fd7afff4c0912d6c00b3d2eb05",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-11-18 03:26:03",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-26T05:42:21.405650+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "203fb6154172879c08291fefb46062b27eb73f55",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-11-18 03:25:44",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-26T05:42:21.405650+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "52a71237e3ce64976990f68f176eb8a8c1daa052",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-11-18 03:24:22",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-26T05:42:21.405650+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "110dc32c90365e41ccfc8eaf47b89c8f5adc45fc",
            "description": "Malicious SSL certificate - WARDENStealer C&C",
            "timestamp": "2026-11-18 03:04:38",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-26T05:42:21.405650+05:30",
            "campaign": "WARDENStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "34caba1bef1d1006199db86c6e2d5bf1d67c884e",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-11-03 17:43:08",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-26T05:42:21.405650+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "277a06bc0dfdd0da5455bdb3d5b92f7cd5fc9520",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-11-03 16:33:57",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-26T05:42:21.405650+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "b04b85ac36b0501fad420e3bc7976c3d31409b4e",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-11-03 16:33:46",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-26T05:42:21.405650+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "70e5be14909fe413ceb33179b521e33253b23b25",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-11-03 16:32:56",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-26T05:42:21.405650+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "aba67183b38e7af2ffbd3cde35fcaeb1ae838a6c",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-11-03 16:30:45",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-26T05:42:21.405650+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "cb99d5384d603d6553a543c657cdd10245327790",
            "description": "Malicious SSL certificate - AzaleaAgent C&C",
            "timestamp": "2026-11-03 16:19:43",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-26T05:42:21.405650+05:30",
            "campaign": "AzaleaAgent",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "071723a919a59de8e12007a28efe58cdce47582f",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-11-03 16:13:59",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-26T05:42:21.405650+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "51355dd769baf664063ba8e548fba4edbb43d30c",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-11-03 16:12:07",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-26T05:42:21.405650+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "d17c1ce0af678753b38a651d6739399aa8e1a9dd",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-11-03 16:12:00",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-26T05:42:21.405650+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "14124f6716dafc9943ff7de4b0146934c488b6aa",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-11-03 16:10:37",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-26T05:42:21.405650+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "c9ef1afcd9bedbf2dc024330895598c74da7cf1a",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-11-03 16:06:40",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-26T05:42:21.405650+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "d5374668b952d61a5b52d0f414ecf19c87302df7",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-11-03 16:05:27",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-26T05:42:21.405650+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "2264e0945e0afa792cdde7b564a6fb1d1e286618",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-11-03 12:23:24",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-26T05:42:21.405650+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ip",
            "indicator": "162[.]243[.]103[.]246",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-11-26 05:42 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-11-26T05:42:20.142660+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "178[.]62[.]3[.]223",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-11-26 05:42 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-11-26T05:42:20.142660+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "27[.]133[.]154[.]218",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-11-26 05:42 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-11-26T05:42:20.142660+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "34[.]204[.]119[.]63",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-11-26 05:42 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-11-26T05:42:20.142660+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "50[.]16[.]16[.]211",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-11-26 05:42 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-11-26T05:42:20.142660+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "1[.]1[.]220[.]166",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-26 05:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-26T05:42:17.997144+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]117[.]72[.]220",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-26 05:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-26T05:42:17.997144+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]12[.]55[.]80",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-26 05:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-26T05:42:17.997144+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]13[.]79[.]149",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-26 05:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-26T05:42:17.997144+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]162[.]242[.]67",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-26 05:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-26T05:42:17.997144+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]194[.]211[.]36",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-26 05:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-26T05:42:17.997144+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]214[.]204[.]138",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-26 05:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-26T05:42:17.997144+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]214[.]214[.]114",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-26 05:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-26T05:42:17.997144+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]222[.]42[.]237",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-26 05:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-26T05:42:17.997144+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]222[.]80[.]212",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-26 05:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-26T05:42:17.997144+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]234[.]53[.]65",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-26 05:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-26T05:42:17.997144+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]235[.]192[.]214",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-26 05:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-26T05:42:17.997144+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]238[.]106[.]229",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-26 05:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-26T05:42:17.997144+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]27[.]251[.]252",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-26 05:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-26T05:42:17.997144+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]87[.]254[.]230",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-26 05:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-26T05:42:17.997144+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]87[.]254[.]50",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-26 05:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-26T05:42:17.997144+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]92[.]125[.]77",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-26 05:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-26T05:42:17.997144+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]94[.]223[.]99",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-26 05:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-26T05:42:17.997144+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]94[.]62[.]64",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-26 05:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-26T05:42:17.997144+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "100[.]50[.]17[.]159",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-26 05:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-26T05:42:17.997144+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]100[.]194[.]252",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-26 05:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-26T05:42:17.997144+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]11[.]137",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-26 05:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-26T05:42:17.997144+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]129[.]127",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-26 05:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-26T05:42:17.997144+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]141[.]163",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-26 05:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-26T05:42:17.997144+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]153[.]162",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-26 05:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-26T05:42:17.997144+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]24[.]71",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-26 05:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-26T05:42:17.997144+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]24[.]74",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-26 05:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-26T05:42:17.997144+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]26[.]93",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-26 05:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-26T05:42:17.997144+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]4[.]240",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-26 05:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-26T05:42:17.997144+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]53[.]14",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-26 05:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-26T05:42:17.997144+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]64[.]76",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-26 05:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-26T05:42:17.997144+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]66[.]30",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-26 05:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-26T05:42:17.997144+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]67[.]70",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-26 05:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-26T05:42:17.997144+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]69[.]201",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-26 05:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-26T05:42:17.997144+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]128[.]70[.]115",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-26 05:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-26T05:42:17.997144+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]168[.]23[.]127",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-26 05:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-26T05:42:17.997144+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]168[.]53[.]247",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-26 05:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-26T05:42:17.997144+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]200[.]243[.]197",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-26 05:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-26T05:42:17.997144+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]200[.]57[.]251",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-26 05:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-26T05:42:17.997144+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]201[.]71[.]54",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-26 05:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-26T05:42:17.997144+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]227[.]203[.]162",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-26 05:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-26T05:42:17.997144+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]32[.]240[.]31",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-26 05:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-26T05:42:17.997144+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]33[.]210[.]169",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-26 05:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-26T05:42:17.997144+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]34[.]58[.]213",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-26 05:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-26T05:42:17.997144+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]35[.]248[.]174",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-26 05:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-26T05:42:17.997144+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]114[.]177",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-26 05:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-26T05:42:17.997144+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]119[.]203",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-26 05:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-26T05:42:17.997144+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]122[.]18",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-26 05:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-26T05:42:17.997144+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]228[.]201",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-26 05:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-26T05:42:17.997144+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]97[.]131",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-26 05:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-26T05:42:17.997144+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]37[.]156[.]70",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-26 05:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-26T05:42:17.997144+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]42[.]185[.]117",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-26 05:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-26T05:42:17.997144+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]43[.]124[.]60",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-26 05:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-26T05:42:17.997144+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]43[.]175[.]238",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-26 05:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-26T05:42:17.997144+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]134[.]75",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-26 05:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-26T05:42:17.997144+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]158[.]56",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-26 05:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-26T05:42:17.997144+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]20[.]56",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-26 05:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-26T05:42:17.997144+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]45[.]28",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-26 05:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-26T05:42:17.997144+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]8[.]113",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-26 05:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-26T05:42:17.997144+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]76[.]244[.]135",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-26 05:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-26T05:42:17.997144+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]79[.]167[.]183",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-26 05:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-26T05:42:17.997144+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]89[.]141[.]184",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-26 05:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-26T05:42:17.997144+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]89[.]148[.]7",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-26 05:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-26T05:42:17.997144+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]89[.]76[.]249",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-26 05:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-26T05:42:17.997144+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]91[.]114[.]194",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-26 05:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-26T05:42:17.997144+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]192[.]45",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-26 05:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-26T05:42:17.997144+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]192[.]88",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-26 05:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-26T05:42:17.997144+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]193[.]145",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-26 05:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-26T05:42:17.997144+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]193[.]183",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-26 05:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-26T05:42:17.997144+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]195[.]17",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-26 05:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-26T05:42:17.997144+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]195[.]62",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-26 05:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-26T05:42:17.997144+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]196[.]243",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-26 05:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-26 05:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-26T05:42:17.997144+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        }
    ],
    "dailySummary": {
        "stats": {
            "totalIndicators": 103743,
            "activeSources": 9,
            "criticalAlerts": 38345,
            "activeCampaigns": 144
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 35323,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4297,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Phishing",
                "count": 4120,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 3022,
                "trend": "down",
                "percentage": -73
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
            },
            {
                "name": "Government",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "CINS Threat List",
                "count": 40737,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]14[.]3[.]170",
                    "1[.]15[.]14[.]29",
                    "1[.]15[.]88[.]48"
                ]
            },
            {
                "name": "malware_download",
                "count": 34528,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://raw[.]githubusercontent[.]com/rcrishabh/Loud-No-More/refs/heads/master/endotys/No-More-Loud-v1[.]0[.]zip",
                    "hxxps://raw[.]githubusercontent[.]com/Shishir-Singh-666/nodepay2nd/refs/heads/main/src/nd_nodepay_v1[.]9[.]zip",
                    "hxxps://raw[.]githubusercontent[.]com/Kurvaan/ptx-tutorial-by-aislop/refs/heads/main/sections/by_ptx_tutorial_aislop_3[.]2[.]zip"
                ]
            },
            {
                "name": "SSH Attacks",
                "count": 13399,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]1[.]220[.]166",
                    "1[.]117[.]72[.]220",
                    "1[.]12[.]55[.]80"
                ]
            },
            {
                "name": "Generic Phishing",
                "count": 4096,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://roblox[.]com[.]sy/users/834919932/profile",
                    "hxxps://mhojiakbar0717-max[.]github[.]io/instagram",
                    "hxxps://www[.]roblox[.]com[.]pt/games/2753915549/Blox-Fruits?privateServerLinkCode=22137769717455509702998655069555"
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
                "name": "Vidar",
                "count": 1569,
                "types": [
                    "hash",
                    "ssl-cert",
                    "url",
                    "domain"
                ],
                "sampleIndicators": [
                    "963c8d952db068f9cd6b76e2313e69296ca6124f57755eeaa8c008ee05d349be",
                    "99b335ac5caf5249edc3223b100517d72f4fec0c6012955e3efc8d56c96880ef",
                    "6f38c0aedf5d1163cca3bf5721acb71cb54bf387a69827c8ccdc59064a19d6ed"
                ]
            },
            {
                "name": "Cobalt Strike",
                "count": 1183,
                "types": [
                    "ip",
                    "hash",
                    "domain"
                ],
                "sampleIndicators": [
                    "4d12d57d6db212de40d9b28811b1e19b",
                    "cdn[.]img[.]5a09f6f2[.]PNAlumni[.]dgitd[.]anchorbolnorth[.]com",
                    "82[.]158[.]89[.]27"
                ]
            },
            {
                "name": "IClickFix",
                "count": 708,
                "types": [
                    "url",
                    "domain"
                ],
                "sampleIndicators": [
                    "kaizentekacademy[.]com",
                    "locandaskansen[.]it",
                    "polymathconsultant[.]com"
                ]
            },
            {
                "name": "PureRAT",
                "count": 452,
                "types": [
                    "ip",
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "80[.]76[.]49[.]242",
                    "70[.]36[.]127[.]16",
                    "197[.]147[.]53[.]146"
                ]
            },
            {
                "name": "Unknown malware",
                "count": 450,
                "types": [
                    "ip",
                    "url",
                    "domain",
                    "hash"
                ],
                "sampleIndicators": [
                    "hxxps://washinweb[.]com/",
                    "198[.]44[.]46[.]58",
                    "130[.]94[.]3[.]67"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "AsyncRAT",
        "totalAttacksThisHour": 28589,
        "lastCalculated": "2026-11-26 07:24 IST"
    }
};
