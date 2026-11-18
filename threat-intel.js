// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-11-18T22:40:17.923222+05:30 IST (2026-11-18 17:10 UTC)
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-11-18T22:40:17.256743+05:30",
    "lastUpdatedFormatted": "Nov 18, 2026 at 10:40 PM IST",
    "lastUpdatedUtc": "2026-11-18 17:10 UTC",
    "comparisonPeriod": "Nov 17 \u2013 Nov 18, 2026",
    "stats": {
        "totalIOCs": 99952,
        "byType": {
            "url": 39835,
            "ip": 52937,
            "hash": 641,
            "domain": 2158,
            "ssl-cert": 2662,
            "ip-range": 1719
        },
        "byVendor": {
            "OpenPhish": 4148,
            "Malware Bazaar": 476,
            "Spamhaus DROP": 1719,
            "CINS Army": 38745,
            "Blocklist.de": 11642,
            "URLhaus": 34528,
            "ThreatFox": 6027,
            "Feodo Tracker": 5,
            "SSL Blacklist": 2662
        },
        "topMalware": [
            {
                "name": "Vidar",
                "count": 1541,
                "types": [
                    "url",
                    "ssl-cert",
                    "hash",
                    "domain"
                ]
            },
            {
                "name": "Cobalt Strike",
                "count": 1183,
                "types": [
                    "domain",
                    "ip",
                    "hash"
                ]
            },
            {
                "name": "IClickFix",
                "count": 708,
                "types": [
                    "domain",
                    "url"
                ]
            },
            {
                "name": "PureRAT",
                "count": 451,
                "types": [
                    "ip",
                    "ssl-cert"
                ]
            },
            {
                "name": "OffLoader",
                "count": 323,
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
                "count": 269,
                "types": [
                    "domain",
                    "ip",
                    "hash",
                    "ssl-cert"
                ]
            },
            {
                "name": "Unknown Loader",
                "count": 258,
                "types": [
                    "domain",
                    "url",
                    "hash"
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
                    "domain",
                    "url"
                ]
            },
            {
                "name": "PureLogsStealer",
                "count": 206,
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
                "count": 173,
                "types": [
                    "ssl-cert"
                ]
            },
            {
                "name": "Remcos",
                "count": 141,
                "types": [
                    "domain",
                    "ip"
                ]
            }
        ],
        "recentIOCs": [
            {
                "type": "ssl-cert",
                "indicator": "5d4337304f628324e97723e352148d9d259ef3c3",
                "description": "Malicious SSL certificate - FennecRAT C&C",
                "timestamp": "2026-11-18 03:51:44",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-18 12:42 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-18T12:42:04.116850+05:30",
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
                "analysisTime": "2026-11-18 12:42 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-18T12:42:04.116850+05:30",
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
                "analysisTime": "2026-11-18 12:42 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-18T12:42:04.116850+05:30",
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
                "analysisTime": "2026-11-18 12:42 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-18T12:42:04.116850+05:30",
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
                "analysisTime": "2026-11-18 12:42 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-18T12:42:04.116850+05:30",
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
                "analysisTime": "2026-11-18 12:42 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-18T12:42:04.116850+05:30",
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
                "analysisTime": "2026-11-18 12:42 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-18T12:42:04.116850+05:30",
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
                "analysisTime": "2026-11-18 12:42 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-18T12:42:04.116850+05:30",
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
                "analysisTime": "2026-11-18 12:42 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-18T12:42:04.116850+05:30",
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
                "analysisTime": "2026-11-18 12:42 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-18T12:42:04.116850+05:30",
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
                "analysisTime": "2026-11-18 12:42 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-18T12:42:04.116850+05:30",
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
                "analysisTime": "2026-11-18 12:42 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-18T12:42:04.116850+05:30",
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
                "analysisTime": "2026-11-18 12:42 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-18T12:42:04.116850+05:30",
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
                "analysisTime": "2026-11-18 12:42 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-18T12:42:04.116850+05:30",
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
                "analysisTime": "2026-11-18 12:42 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-18T12:42:04.116850+05:30",
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
                "analysisTime": "2026-11-18 12:42 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-18T12:42:04.116850+05:30",
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
                "analysisTime": "2026-11-18 12:42 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-18T12:42:04.116850+05:30",
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
                "analysisTime": "2026-11-18 12:42 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-18T12:42:04.116850+05:30",
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
                "analysisTime": "2026-11-18 12:42 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-18T12:42:04.116850+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ip",
                "indicator": "162[.]243[.]103[.]246",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-11-18 12:42 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-11-18 12:42 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-11-18T12:42:02.971987+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            }
        ],
        "lastUpdated": "2026-11-18T22:40:17.256743+05:30",
        "lastUpdatedFormatted": "Nov 18, 2026 at 10:40 PM IST",
        "lastUpdatedUtc": "2026-11-18 17:10 UTC"
    },
    "vendors": {
        "OpenPhish": {
            "description": "Real-time phishing URL feed updated every 15 minutes. Tracks active phishing sites targeting major brands and financial institutions.",
            "website": "https://openphish.com/",
            "updateFrequency": "Every 15 minutes",
            "iocCount": 4448,
            "iocDataUrl": "https://thehgtech.com/ioc-data/openphish.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 4448,
                "newInLastHour": 300,
                "lastUpdate": "2026-11-18 17:10 UTC",
                "isStale": false,
                "feedStatus": "active"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://booking-ledger-phi[.]vercel[.]app/",
                "hxxp://phantomchain[.]github[.]io/paper-wallet",
                "hxxps://92394365756[.]com/",
                "hxxps://www[.]info-pemenang-shopee17[.]blogspot[.]com/",
                "hxxps://www[.]infohadiah-shopee66[.]blogspot[.]com/"
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
                "lastUpdate": "2026-11-18 17:10 UTC",
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
            "iocCount": 1652,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 1652,
                "newInLastHour": 48,
                "lastUpdate": "2026-11-18 17:10 UTC",
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
            "iocCount": 39254,
            "iocDataUrl": "https://thehgtech.com/ioc-data/cins-army.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 39254,
                "newInLastHour": 15000,
                "lastUpdate": "2026-11-18 17:10 UTC",
                "isStale": false,
                "feedStatus": "active"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]15[.]14[.]29",
                "1[.]168[.]168[.]47",
                "1[.]179[.]240[.]157",
                "1[.]20[.]151[.]114",
                "1[.]214[.]98[.]143"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 11796,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 11796,
                "newInLastHour": 5244,
                "lastUpdate": "2026-11-18 17:10 UTC",
                "isStale": false,
                "feedStatus": "active"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]1[.]220[.]166",
                "1[.]100[.]15[.]8",
                "1[.]13[.]156[.]111",
                "1[.]13[.]22[.]101",
                "1[.]14[.]240[.]247"
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
                "lastUpdate": "2026-11-18 17:10 UTC",
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
                "lastUpdate": "2026-11-18 17:10 UTC",
                "isStale": true,
                "feedStatus": "stale"
            },
            "types": [
                "url",
                "ip",
                "hash",
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
                "lastUpdate": "2026-11-18 17:10 UTC",
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
            "iocCount": 11138,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 11138,
                "newInLastHour": 8638,
                "lastUpdate": "2026-11-18 17:10 UTC",
                "isStale": false,
                "feedStatus": "active"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "c2c7c65a60e250f94f78944558c5db7d8086dca4",
                "5d4337304f628324e97723e352148d9d259ef3c3",
                "13b6b2f68e58287e1fbe149b9ae41f5259406f38",
                "c51052b024b7b8fd7afff4c0912d6c00b3d2eb05",
                "203fb6154172879c08291fefb46062b27eb73f55"
            ]
        }
    },
    "overview": [
        {
            "type": "ssl-cert",
            "indicator": "5d4337304f628324e97723e352148d9d259ef3c3",
            "description": "Malicious SSL certificate - FennecRAT C&C",
            "timestamp": "2026-11-18 03:51:44",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-18T12:42:04.116850+05:30",
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
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-18T12:42:04.116850+05:30",
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
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-18T12:42:04.116850+05:30",
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
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-18T12:42:04.116850+05:30",
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
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-18T12:42:04.116850+05:30",
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
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-18T12:42:04.116850+05:30",
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
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-18T12:42:04.116850+05:30",
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
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-18T12:42:04.116850+05:30",
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
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-18T12:42:04.116850+05:30",
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
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-18T12:42:04.116850+05:30",
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
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-18T12:42:04.116850+05:30",
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
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-18T12:42:04.116850+05:30",
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
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-18T12:42:04.116850+05:30",
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
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-18T12:42:04.116850+05:30",
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
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-18T12:42:04.116850+05:30",
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
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-18T12:42:04.116850+05:30",
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
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-18T12:42:04.116850+05:30",
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
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-18T12:42:04.116850+05:30",
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
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-18T12:42:04.116850+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ip",
            "indicator": "162[.]243[.]103[.]246",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-11-18 12:42 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-11-18T12:42:02.971987+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "178[.]62[.]3[.]223",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-11-18 12:42 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-11-18T12:42:02.971987+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "27[.]133[.]154[.]218",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-11-18 12:42 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-11-18T12:42:02.971987+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "34[.]204[.]119[.]63",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-11-18 12:42 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-11-18T12:42:02.971987+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "50[.]16[.]16[.]211",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-11-18 12:42 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-11-18T12:42:02.971987+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "1[.]1[.]220[.]166",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-18 12:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-18T12:42:00.533366+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]13[.]156[.]111",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-18 12:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-18T12:42:00.533366+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]13[.]22[.]101",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-18 12:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-18T12:42:00.533366+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]14[.]240[.]247",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-18 12:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-18T12:42:00.533366+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]163[.]28[.]132",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-18 12:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-18T12:42:00.533366+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]2[.]252[.]192",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-18 12:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-18T12:42:00.533366+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]20[.]178[.]157",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-18 12:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-18T12:42:00.533366+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]203[.]149[.]250",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-18 12:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-18T12:42:00.533366+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]214[.]214[.]114",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-18 12:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-18T12:42:00.533366+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]222[.]42[.]237",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-18 12:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-18T12:42:00.533366+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]234[.]53[.]65",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-18 12:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-18T12:42:00.533366+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]234[.]80[.]94",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-18 12:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-18T12:42:00.533366+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]235[.]192[.]214",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-18 12:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-18T12:42:00.533366+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]250[.]67[.]114",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-18 12:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-18T12:42:00.533366+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]28[.]220[.]226",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-18 12:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-18T12:42:00.533366+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]64[.]16[.]166",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-18 12:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-18T12:42:00.533366+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]80[.]243[.]219",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-18 12:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-18T12:42:00.533366+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]92[.]80[.]86",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-18 12:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-18T12:42:00.533366+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "100[.]33[.]23[.]13",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-18 12:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-18T12:42:00.533366+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "100[.]36[.]60[.]185",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-18 12:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-18T12:42:00.533366+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "100[.]49[.]117[.]77",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-18 12:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-18T12:42:00.533366+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]0[.]105[.]22",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-18 12:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-18T12:42:00.533366+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]11[.]137",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-18 12:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-18T12:42:00.533366+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]129[.]127",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-18 12:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-18T12:42:00.533366+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]141[.]163",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-18 12:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-18T12:42:00.533366+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]24[.]74",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-18 12:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-18T12:42:00.533366+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]43[.]201",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-18 12:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-18T12:42:00.533366+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]53[.]14",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-18 12:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-18T12:42:00.533366+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]55[.]95",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-18 12:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-18T12:42:00.533366+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]64[.]76",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-18 12:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-18T12:42:00.533366+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]67[.]70",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-18 12:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-18T12:42:00.533366+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]69[.]201",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-18 12:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-18T12:42:00.533366+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]70[.]177",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-18 12:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-18T12:42:00.533366+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]13[.]2[.]183",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-18 12:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-18T12:42:00.533366+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]168[.]3[.]207",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-18 12:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-18T12:42:00.533366+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]187[.]203[.]166",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-18 12:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-18T12:42:00.533366+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]201[.]38[.]226",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-18 12:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-18T12:42:00.533366+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]227[.]203[.]162",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-18 12:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-18T12:42:00.533366+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]32[.]240[.]31",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-18 12:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-18T12:42:00.533366+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]33[.]210[.]169",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-18 12:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-18T12:42:00.533366+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]114[.]181",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-18 12:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-18T12:42:00.533366+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]116[.]230",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-18 12:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-18T12:42:00.533366+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]119[.]203",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-18 12:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-18T12:42:00.533366+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]119[.]242",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-18 12:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-18T12:42:00.533366+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]121[.]238",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-18 12:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-18T12:42:00.533366+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]37[.]156[.]70",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-18 12:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-18T12:42:00.533366+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]43[.]124[.]60",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-18 12:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-18T12:42:00.533366+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]134[.]75",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-18 12:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-18T12:42:00.533366+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]158[.]56",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-18 12:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-18T12:42:00.533366+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]20[.]56",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-18 12:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-18T12:42:00.533366+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]28[.]226",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-18 12:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-18T12:42:00.533366+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]8[.]113",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-18 12:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-18T12:42:00.533366+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]8[.]188",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-18 12:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-18T12:42:00.533366+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]66[.]165[.]103",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-18 12:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-18T12:42:00.533366+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]76[.]244[.]135",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-18 12:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-18T12:42:00.533366+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]89[.]141[.]184",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-18 12:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-18T12:42:00.533366+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]89[.]182[.]189",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-18 12:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-18T12:42:00.533366+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]89[.]76[.]249",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-18 12:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-18T12:42:00.533366+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]91[.]114[.]194",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-18 12:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-18T12:42:00.533366+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]91[.]126[.]150",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-18 12:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-18T12:42:00.533366+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]192[.]45",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-18 12:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-18T12:42:00.533366+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]192[.]88",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-18 12:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-18T12:42:00.533366+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]193[.]145",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-18 12:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-18T12:42:00.533366+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]193[.]183",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-18 12:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-18T12:42:00.533366+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]195[.]17",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-18 12:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-18T12:42:00.533366+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]196[.]243",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-18 12:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-18T12:42:00.533366+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]197[.]182",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-18 12:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-18T12:42:00.533366+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]202[.]144",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-18 12:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-18T12:42:00.533366+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]202[.]177",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-18 12:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-18T12:42:00.533366+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]202[.]48",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-18 12:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-18T12:42:00.533366+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]203[.]141",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-18 12:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-18T12:42:00.533366+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]205[.]145",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-18 12:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-18T12:42:00.533366+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]209[.]234",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-18 12:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-18T12:42:00.533366+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]212[.]62",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-18 12:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-18T12:42:00.533366+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]214[.]116",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-18 12:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-18T12:42:00.533366+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]221[.]200",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-18 12:42 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-18 12:42 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-18T12:42:00.533366+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        }
    ],
    "dailySummary": {
        "stats": {
            "totalIndicators": 99952,
            "activeSources": 9,
            "criticalAlerts": 38257,
            "activeCampaigns": 143
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
                "count": 4151,
                "trend": "stable",
                "percentage": -4
            },
            {
                "category": "C2",
                "count": 2934,
                "trend": "down",
                "percentage": -74
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
                "count": 38745,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]12[.]229[.]231",
                    "1[.]14[.]3[.]170",
                    "1[.]168[.]185[.]245"
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
                "count": 11642,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]1[.]220[.]166",
                    "1[.]13[.]156[.]111",
                    "1[.]13[.]22[.]101"
                ]
            },
            {
                "name": "Generic Phishing",
                "count": 4117,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://mapslocatlphone[.]help/isignesp[.]php",
                    "hxxps://spi86[.]com/",
                    "hxxp://info-resmi325[.]blogspot[.]com/"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1719,
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
                "count": 1541,
                "types": [
                    "url",
                    "ssl-cert",
                    "hash",
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
                    "domain",
                    "ip",
                    "hash"
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
                    "domain",
                    "url"
                ],
                "sampleIndicators": [
                    "kaizentekacademy[.]com",
                    "locandaskansen[.]it",
                    "polymathconsultant[.]com"
                ]
            },
            {
                "name": "PureRAT",
                "count": 451,
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
                    "domain",
                    "ip",
                    "url",
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
        "totalAttacksThisHour": 29235,
        "lastCalculated": "2026-11-18 22:40 IST"
    }
};
