// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-11-10T00:11:23.674961+05:30 IST (2026-11-09 18:41 UTC)
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-11-10T00:11:22.889798+05:30",
    "lastUpdatedFormatted": "Nov 10, 2026 at 12:11 AM IST",
    "lastUpdatedUtc": "2026-11-09 18:41 UTC",
    "comparisonPeriod": "Nov 09 \u2013 Nov 10, 2026",
    "stats": {
        "totalIOCs": 106658,
        "byType": {
            "url": 39219,
            "ip": 51691,
            "hash": 641,
            "domain": 2158,
            "ssl-cert": 11185,
            "ip-range": 1764
        },
        "byVendor": {
            "OpenPhish": 3532,
            "Malware Bazaar": 476,
            "Spamhaus DROP": 1764,
            "CINS Army": 39040,
            "Blocklist.de": 10101,
            "URLhaus": 34528,
            "ThreatFox": 6027,
            "Feodo Tracker": 5,
            "SSL Blacklist": 11185
        },
        "topMalware": [
            {
                "name": "Vidar",
                "count": 1725,
                "types": [
                    "ssl-cert",
                    "hash",
                    "domain",
                    "url"
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1628,
                "types": [
                    "ip",
                    "ssl-cert",
                    "hash",
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
                "name": "Dridex",
                "count": 737,
                "types": [
                    "ssl-cert"
                ]
            },
            {
                "name": "QuasarRAT",
                "count": 731,
                "types": [
                    "ssl-cert",
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
                "name": "OffLoader",
                "count": 565,
                "types": [
                    "ssl-cert"
                ]
            },
            {
                "name": "ConnectWise",
                "count": 559,
                "types": [
                    "ssl-cert",
                    "hash"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 558,
                "types": [
                    "ssl-cert"
                ]
            },
            {
                "name": "PureRAT",
                "count": 455,
                "types": [
                    "ip",
                    "ssl-cert"
                ]
            },
            {
                "name": "Malware",
                "count": 429,
                "types": [
                    "ssl-cert"
                ]
            },
            {
                "name": "Rhadamanthys",
                "count": 355,
                "types": [
                    "ssl-cert"
                ]
            },
            {
                "name": "DCRat",
                "count": 349,
                "types": [
                    "ip",
                    "ssl-cert"
                ]
            },
            {
                "name": "Gozi",
                "count": 349,
                "types": [
                    "ssl-cert"
                ]
            },
            {
                "name": "Quakbot",
                "count": 292,
                "types": [
                    "ssl-cert"
                ]
            }
        ],
        "recentIOCs": [
            {
                "type": "ssl-cert",
                "indicator": "39addcc32a42a6e5e02bc47df50ae4382f7985ea",
                "description": "Malicious SSL certificate - Malware C&C",
                "timestamp": "2026-11-01 15:16:38",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-09 11:35 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-09T11:35:18.228142+05:30",
                "campaign": "Malware",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "6f373dd650805f118832ae3c618d10f0402ea6fe",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-10-25 14:15:35",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-09 11:35 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-09T11:35:18.228142+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "f6f18a9147a66682618c0255dd3d376ccbcfed94",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-10-25 10:56:45",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-09 11:35 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-09T11:35:18.228142+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "882b92d7a268237df18813ca7349fd2092f47618",
                "description": "Malicious SSL certificate - DCRat C&C",
                "timestamp": "2026-10-25 10:51:44",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-09 11:35 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-09T11:35:18.228142+05:30",
                "campaign": "DCRat",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "6d96859790e57d9a9d1acb20ff920a508eb96e1c",
                "description": "Malicious SSL certificate - PureRAT C&C",
                "timestamp": "2026-10-25 10:48:16",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-09 11:35 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-09T11:35:18.228142+05:30",
                "campaign": "PureRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "a331a0dfcaaab84fb90dce85c86841a80db29e88",
                "description": "Malicious SSL certificate - PureRAT C&C",
                "timestamp": "2026-10-25 10:47:50",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-09 11:35 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-09T11:35:18.228142+05:30",
                "campaign": "PureRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "aa538a850650cd9657359dd49a50229103e3f3dc",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-10-25 10:40:46",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-09 11:35 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-09T11:35:18.228142+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "e22f91a1cca032454ef45d769cd9b3374283b2a2",
                "description": "Malicious SSL certificate - QuasarRAT C&C",
                "timestamp": "2026-10-25 07:27:56",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-09 11:35 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-09T11:35:18.228142+05:30",
                "campaign": "QuasarRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "cfac3216fbbc990e5c606fa5b6b513f2773df7ab",
                "description": "Malicious SSL certificate - nullRAT C&C",
                "timestamp": "2026-10-25 07:24:48",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-09 11:35 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-09T11:35:18.228142+05:30",
                "campaign": "nullRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "38151a6b2438b2b645a27a891e1e15786f11a783",
                "description": "Malicious SSL certificate - PureLogsStealer C&C",
                "timestamp": "2026-10-18 12:25:30",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-09 11:35 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-09T11:35:18.228142+05:30",
                "campaign": "PureLogsStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "eaefd82da94ee8839666b2a42d24dcc412d7de3c",
                "description": "Malicious SSL certificate - Malware C&C",
                "timestamp": "2026-10-18 12:23:14",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-09 11:35 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-09T11:35:18.228142+05:30",
                "campaign": "Malware",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "e2234aa66c80b118b69211f6e8f4efbd578a7587",
                "description": "Malicious SSL certificate - PureLogsStealer C&C",
                "timestamp": "2026-10-18 12:22:13",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-09 11:35 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-09T11:35:18.228142+05:30",
                "campaign": "PureLogsStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "e2dbc11a546d739d12e547c38cdb4fd6cfacd4c4",
                "description": "Malicious SSL certificate - PureLogsStealer C&C",
                "timestamp": "2026-10-18 12:21:30",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-09 11:35 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-09T11:35:18.228142+05:30",
                "campaign": "PureLogsStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "b97f1ae860fce04e1aae480e10b884da9826b17b",
                "description": "Malicious SSL certificate - PureLogsStealer C&C",
                "timestamp": "2026-10-18 12:20:20",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-09 11:35 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-09T11:35:18.228142+05:30",
                "campaign": "PureLogsStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "97001686e56437dda319c71d5b0deeb8647de6e3",
                "description": "Malicious SSL certificate - QuasarRAT C&C",
                "timestamp": "2026-10-18 12:18:25",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-09 11:35 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-09T11:35:18.228142+05:30",
                "campaign": "QuasarRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "ad71014e839f794407e155508ce8ba98bf9556f7",
                "description": "Malicious SSL certificate - PureRAT C&C",
                "timestamp": "2026-10-18 12:14:31",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-09 11:35 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-09T11:35:18.228142+05:30",
                "campaign": "PureRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "565ad03c4f04a685db081954cc9e5b1b210849e9",
                "description": "Malicious SSL certificate - OffLoader C&C",
                "timestamp": "2026-10-18 12:07:16",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-09 11:35 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-09T11:35:18.228142+05:30",
                "campaign": "OffLoader",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "3aa254a14d2bfefa3f3645be8f87a814edcf3109",
                "description": "Malicious SSL certificate - OffLoader C&C",
                "timestamp": "2026-10-18 12:05:31",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-09 11:35 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-09T11:35:18.228142+05:30",
                "campaign": "OffLoader",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "a1fe9a509cdbfa8cc81db2a1f2216a96b32b2e55",
                "description": "Malicious SSL certificate - ACRStealer C&C",
                "timestamp": "2026-10-18 11:54:15",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-09 11:35 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-09T11:35:18.228142+05:30",
                "campaign": "ACRStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "d4c2969ae8a878031ece0d67457d419eab16358f",
                "description": "Malicious SSL certificate - ACRStealer C&C",
                "timestamp": "2026-10-18 11:54:11",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-09 11:35 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-09T11:35:18.228142+05:30",
                "campaign": "ACRStealer",
                "confidence": "High"
            }
        ],
        "lastUpdated": "2026-11-10T00:11:22.889798+05:30",
        "lastUpdatedFormatted": "Nov 10, 2026 at 12:11 AM IST",
        "lastUpdatedUtc": "2026-11-09 18:41 UTC"
    },
    "vendors": {
        "OpenPhish": {
            "description": "Real-time phishing URL feed updated every 15 minutes. Tracks active phishing sites targeting major brands and financial institutions.",
            "website": "https://openphish.com/",
            "updateFrequency": "Every 15 minutes",
            "iocCount": 3413,
            "iocDataUrl": "https://thehgtech.com/ioc-data/openphish.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 3413,
                "newInLastHour": 300,
                "lastUpdate": "2026-11-09 18:41 UTC",
                "isStale": false,
                "feedStatus": "active"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://testlanigs[.]blogspot[.]com/",
                "hxxps://s4w[.]in/Wgtsg",
                "hxxps://www[.]instagram-real[.]blogspot[.]com/",
                "hxxps://startq-trzr-bridge[.]pages[.]dev/appeals/submit-appeal-form/return",
                "hxxps://sp30ct-kemix-biz-zadul-noval[.]pages[.]dev/"
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
                "lastUpdate": "2026-11-09 18:41 UTC",
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
            "iocCount": 1739,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 1739,
                "newInLastHour": 3,
                "lastUpdate": "2026-11-09 18:41 UTC",
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
            "iocCount": 39071,
            "iocDataUrl": "https://thehgtech.com/ioc-data/cins-army.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 39071,
                "newInLastHour": 15000,
                "lastUpdate": "2026-11-09 18:41 UTC",
                "isStale": false,
                "feedStatus": "active"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]12[.]229[.]231",
                "1[.]15[.]14[.]29",
                "1[.]160[.]141[.]202",
                "1[.]164[.]152[.]19",
                "1[.]169[.]35[.]122"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 10239,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 10239,
                "newInLastHour": 4353,
                "lastUpdate": "2026-11-09 18:41 UTC",
                "isStale": false,
                "feedStatus": "active"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]12[.]70[.]212",
                "1[.]13[.]181[.]113",
                "1[.]162[.]217[.]195",
                "1[.]180[.]246[.]242",
                "1[.]203[.]149[.]250"
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
                "lastUpdate": "2026-11-09 18:41 UTC",
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
                "lastUpdate": "2026-11-09 18:41 UTC",
                "isStale": true,
                "feedStatus": "stale"
            },
            "types": [
                "ip",
                "hash",
                "domain",
                "url"
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
                "lastUpdate": "2026-11-09 18:41 UTC",
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
            "iocCount": 11195,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 11195,
                "newInLastHour": 17,
                "lastUpdate": "2026-11-09 18:41 UTC",
                "isStale": false,
                "feedStatus": "active"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "abc4b076eb276da57cf8a36e7eeca9df713dd83c",
                "19191f7bd7d31b4da986d645a6dfba8fef74fdf9",
                "4943decccfc5b78cd1d60fab5424bd93d5243aa3",
                "699efdab8a4d32ffa62dd1a97261e3edd5c5f87a",
                "d7f8e6d688805e759b5e9346215212cd246a4b3c"
            ]
        }
    },
    "overview": [
        {
            "type": "ssl-cert",
            "indicator": "39addcc32a42a6e5e02bc47df50ae4382f7985ea",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-11-01 15:16:38",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "6f373dd650805f118832ae3c618d10f0402ea6fe",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-25 14:15:35",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "f6f18a9147a66682618c0255dd3d376ccbcfed94",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-25 10:56:45",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "882b92d7a268237df18813ca7349fd2092f47618",
            "description": "Malicious SSL certificate - DCRat C&C",
            "timestamp": "2026-10-25 10:51:44",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "DCRat",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "6d96859790e57d9a9d1acb20ff920a508eb96e1c",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-10-25 10:48:16",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "a331a0dfcaaab84fb90dce85c86841a80db29e88",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-10-25 10:47:50",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "aa538a850650cd9657359dd49a50229103e3f3dc",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-25 10:40:46",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "e22f91a1cca032454ef45d769cd9b3374283b2a2",
            "description": "Malicious SSL certificate - QuasarRAT C&C",
            "timestamp": "2026-10-25 07:27:56",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "QuasarRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "cfac3216fbbc990e5c606fa5b6b513f2773df7ab",
            "description": "Malicious SSL certificate - nullRAT C&C",
            "timestamp": "2026-10-25 07:24:48",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "nullRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "38151a6b2438b2b645a27a891e1e15786f11a783",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-10-18 12:25:30",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "eaefd82da94ee8839666b2a42d24dcc412d7de3c",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-10-18 12:23:14",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "e2234aa66c80b118b69211f6e8f4efbd578a7587",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-10-18 12:22:13",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "e2dbc11a546d739d12e547c38cdb4fd6cfacd4c4",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-10-18 12:21:30",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "b97f1ae860fce04e1aae480e10b884da9826b17b",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-10-18 12:20:20",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "97001686e56437dda319c71d5b0deeb8647de6e3",
            "description": "Malicious SSL certificate - QuasarRAT C&C",
            "timestamp": "2026-10-18 12:18:25",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "QuasarRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "ad71014e839f794407e155508ce8ba98bf9556f7",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-10-18 12:14:31",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "565ad03c4f04a685db081954cc9e5b1b210849e9",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-10-18 12:07:16",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "3aa254a14d2bfefa3f3645be8f87a814edcf3109",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-10-18 12:05:31",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "a1fe9a509cdbfa8cc81db2a1f2216a96b32b2e55",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-10-18 11:54:15",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "d4c2969ae8a878031ece0d67457d419eab16358f",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-10-18 11:54:11",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "20e506ba84f2b1e681674fed4f44d72024f18cb2",
            "description": "Malicious SSL certificate - WARDENStealer C&C",
            "timestamp": "2026-10-18 11:53:41",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "WARDENStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "5758a152f5bc1f96581c6530488f830766c45c96",
            "description": "Malicious SSL certificate - QuasarRAT C&C",
            "timestamp": "2026-10-18 11:52:51",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "QuasarRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "b6e98fa780d26472b70284be1abf84e7cf2bb152",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-10-18 11:52:15",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "6dc0b07b0666b932f43af624460a79c98d5d17bb",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-10-18 11:51:26",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "28c47a169d83c0017b5db95a0ae29973cf21d13b",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-10-18 11:50:59",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "a36fb193d41fdff5259ef4902ef4b33de38f768b",
            "description": "Malicious SSL certificate - DCAgentRMM C&C",
            "timestamp": "2026-10-18 11:48:57",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "DCAgentRMM",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "c7a0310a47eec71976fbd7a4ac1dbd0aa4b7a7c1",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-10-18 11:48:26",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "ff59f65a5b8f0f847ed3c0ac1f140dc28de2f720",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-10-18 11:46:38",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "4fcc8c0172b376ebfc85d644c5f64f7cd60321a5",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-18 11:22:53",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "19f54af30146108b291727f6f4cfb6339b1c8f86",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-18 11:22:14",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "5189412bc415fe1fb2272c297498a47d2d160601",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-18 11:21:47",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "a91b47c9e01edba1861a4d17d233fa0925a931f4",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-18 11:21:34",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "cb98a0f8b53ff8c03b04b02f39807b205e548ca9",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-18 11:20:21",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "90c309b563f777d4de2436936d275a0487a22baa",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-18 10:31:17",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "7ef960d6cfa5bae388a927a5e20f9238bcb22f92",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-18 06:52:08",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "e58d378500a9237df93a66f055ac6e0dc900d7fa",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-09-26 15:39:47",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "86b5a5612e53988e28ed6604e8e9ff5476a46d0e",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-09-26 15:24:06",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "d92cdd1624e3d004a180b07c2d2f33406564f839",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-09-26 15:13:56",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "a09be1ba7013678b6385135c590d4894b890dc75",
            "description": "Malicious SSL certificate - SheetRAT C&C",
            "timestamp": "2026-09-26 08:26:15",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "SheetRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "7a215b5a8eaf9b132cf84f22d9ee2202c2a028bf",
            "description": "Malicious SSL certificate - QuasarRAT C&C",
            "timestamp": "2026-09-26 08:23:46",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "QuasarRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "ec560bb2220f9640b3c9564c9f0ccf6f4a8da390",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-09-26 08:23:38",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "6b615019c25c4b72d6e9a3e30395c21cc1ca323d",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-09-26 08:23:19",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "1ffb85092fad1e9bdebb6bfa9a48a62828fd5def",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-09-26 08:22:32",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "605e0b79c4a685b7da9524d6b71ec36bbd651b07",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-09-26 08:21:55",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "2d1fce636c81c10590cc4d0d853b1c6396690d36",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-09-26 08:21:34",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "48561744f5ca383ed077fb47d2471f58a0442d47",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-09-26 08:19:53",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "75c4ec617ba3bb3d062cd4ad9f0ca62f3f258b1a",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-09-26 08:17:52",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "5f5d3a3225006f45ff8194536ef8e09cb194884d",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-09-26 08:17:44",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "8410f92dc9367bda715790bb163d32111731527d",
            "description": "Malicious SSL certificate - QuasarRAT C&C",
            "timestamp": "2026-09-26 08:16:39",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "QuasarRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "8cffe4fa8f624cb4c15790c414e04acde61e3651",
            "description": "Malicious SSL certificate - QuasarRAT C&C",
            "timestamp": "2026-09-12 11:00:56",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "QuasarRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "00095e3cd5dfc929d16036132665d7e3e9ef7cd6",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-09-12 11:00:35",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "5e06eaa686adc5ca8fd118752c6667e826bbcad0",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-08-28 19:50:35",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "41f8e81a4f9b3e7e70353a84e4bf87d687ddc79e",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-08-28 19:50:23",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "407df66ac87ceb177c560e82df9521c8003b5f0d",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-08-28 19:50:13",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "1389c26fb7ce71a7aa1514e86879daf6b373325a",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-08-28 19:44:23",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "8f154a9a3584398eb6be34b0e2f05c79c63cea6a",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-08-28 19:43:53",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "8508e14457ad7de321edddf3688e124d5f1d652c",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-28 13:41:42",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "d9da2988d90a2479eb45e1fc66ff46b04f2289f2",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-08-28 13:06:48",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "9d495a9c646e3962ac5445e9b4da6832164dc4ee",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-08-28 08:06:54",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "841672d728070f0e4519a650a9c8618f9b80c502",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-08-28 07:54:58",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "d123d7f43d63545c7a8f643acbe73e81f35c3f14",
            "description": "Malicious SSL certificate - QuasarRAT C&C",
            "timestamp": "2026-08-28 07:54:40",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "QuasarRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "94711c109335059bb2dc4d338f33d3083004d6fa",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-08-28 07:54:30",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "4a67cf0297c6308d31cbd2e89cd5246817bb1330",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-08-28 07:54:28",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "9f0464e29fb94333e1ad31740bf4d4bff89cbd28",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-28 07:54:17",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "5b276d28106cb7d91dd5f810e61d9523d34c7804",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-08-21 08:41:48",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "1cdb18c33da65a40adad7b51808edf66f3e180e5",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-08-21 08:41:05",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "bf192adc3dcaba7412e15b567de22e3f3150bbf7",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-08-21 08:37:08",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "ecae976f3eabcaad996e0a431d47bcead61dfb5e",
            "description": "Malicious SSL certificate - RatonRAT C&C",
            "timestamp": "2026-08-21 08:31:04",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "RatonRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "d962e722e22971c6b81f89befbbe949241b8c2ec",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-08-21 08:09:11",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "a18ccdbee8a145ba523641dc63189ad51cd04064",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-08-21 08:02:50",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "b94eb3bcd4a57442c30e14dd2067b0c6c46d9619",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-08-21 08:01:46",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "0bb977bf9e0950a1a818660dde009ac9934bd1e2",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-21 08:01:23",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "0f47d296ca2a764238bfd644c7b716cffafa1352",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-21 07:27:19",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "aa50e1b4a6e7c66ba2ce4c1c82e62f8d74cd7202",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-21 07:25:22",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "5b3c4900b63eb2ca8d0d174ef9e989324bc58c0d",
            "description": "Malicious SSL certificate - TELEPUZ C&C",
            "timestamp": "2026-08-21 07:08:46",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "TELEPUZ",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "ece1b6bdc8e62d35188aab274bdb0be28d84c43f",
            "description": "Malicious SSL certificate - QuasarRAT C&C",
            "timestamp": "2026-08-06 14:20:21",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "QuasarRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "a9ebd28ce7e4ac020e6d263e228b8547e1914bfa",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-06 14:19:07",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "dc4932b1ea50ef699fed8fa52e2a1d6b75987878",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-06-09 18:12:23",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "11af63139ec0f70cc1136a44aa45fe1c2b481955",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-06-09 18:11:35",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "b6489631abc0396854c92e63917b4bbd2e2b3168",
            "description": "Malicious SSL certificate - DCRat C&C",
            "timestamp": "2026-06-09 18:07:42",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "DCRat",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "86ee48a5c44b140149fba77b22b93900cf3e883b",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-06-09 17:52:40",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "94672f2ecc719189d50fbaca2f1597f783470188",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-06-09 17:52:38",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "ac7ad70f430454f1f0a90101cb267e938c7cb9a6",
            "description": "Malicious SSL certificate - KongTuke C&C",
            "timestamp": "2026-06-09 17:48:40",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "KongTuke",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "496d191aedf6be136391a1828962864b479bfec7",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-06-09 06:05:44",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "cc060f5f00fde826f5252c47765f1f0a74e8cb1b",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-06-09 06:05:32",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "5556255c430a2dff1a61bf266d7c3eaeedd885ab",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-06-09 06:00:05",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "1f0736f9b04b5580fae76c56ad9b5b4d3db31171",
            "description": "Malicious SSL certificate - ResolverRAT C&C",
            "timestamp": "2026-03-07 19:09:51",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "ResolverRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "e1eee0b991daeddda5eb790822cace341505480d",
            "description": "Malicious SSL certificate - AsyncRAT C&C",
            "timestamp": "2026-01-16 16:20:14",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "AsyncRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "6ea8fc3980ed947d6d2c509c02a2e439c8d5f7e1",
            "description": "Malicious SSL certificate - DCRat C&C",
            "timestamp": "2026-01-16 16:19:43",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "DCRat",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "77ccc60769c2fcec1b720094cdaa0ff49e37227d",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2025-12-26 07:38:52",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "50def7da0eb236fcb1d55eb802039ddd95049da9",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2025-12-11 13:34:11",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "d6e284f5f98ea579d66235833e9f2dc1bfaa59dd",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2025-12-11 13:31:58",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "3581e9cc8d250929c19ac08fd592430cd63145ba",
            "description": "Malicious SSL certificate - AsyncRAT C&C",
            "timestamp": "2025-12-04 10:18:44",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "AsyncRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "1af063753cd3a9491c82807c3e25f805519c6e5a",
            "description": "Malicious SSL certificate - AsyncRAT C&C",
            "timestamp": "2025-12-04 10:18:31",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "AsyncRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "c31308a551fcc811ddcd8af515501106bd1b9e7f",
            "description": "Malicious SSL certificate - AsyncRAT C&C",
            "timestamp": "2025-12-04 10:18:01",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-09T11:35:18.228142+05:30",
            "campaign": "AsyncRAT",
            "confidence": "High"
        },
        {
            "type": "ip",
            "indicator": "162[.]243[.]103[.]246",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-11-09 11:35 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-11-09T11:35:16.933684+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "178[.]62[.]3[.]223",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-11-09 11:35 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-11-09T11:35:16.933684+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "27[.]133[.]154[.]218",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-11-09 11:35 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-11-09T11:35:16.933684+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "34[.]204[.]119[.]63",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-11-09 11:35 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-11-09T11:35:16.933684+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "50[.]16[.]16[.]211",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-11-09 11:35 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-11-09 11:35 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-11-09T11:35:16.933684+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        }
    ],
    "dailySummary": {
        "stats": {
            "totalIndicators": 106658,
            "activeSources": 9,
            "criticalAlerts": 46780,
            "activeCampaigns": 219
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 35350,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 11430,
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
                "count": 3535,
                "trend": "stable",
                "percentage": -1
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
                "count": 39040,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]169[.]35[.]122",
                    "1[.]183[.]226[.]72",
                    "1[.]192[.]129[.]106"
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
                "count": 10101,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]12[.]70[.]212",
                    "1[.]13[.]181[.]113",
                    "1[.]14[.]192[.]95"
                ]
            },
            {
                "name": "Generic Phishing",
                "count": 3506,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://www[.]r[.]oblox[.]com[.]et/users/893593163/profile",
                    "hxxps://hkdiscord[.]antsoon[.]com/blog/iwd-2023-two-women-owned-servers",
                    "hxxps://hkdiscord[.]antsoon[.]com/blog/how-we-used-discord-to-build-a-dream-community-for-our-game-descenders"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1764,
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
                "count": 1725,
                "types": [
                    "ssl-cert",
                    "hash",
                    "domain",
                    "url"
                ],
                "sampleIndicators": [
                    "963c8d952db068f9cd6b76e2313e69296ca6124f57755eeaa8c008ee05d349be",
                    "99b335ac5caf5249edc3223b100517d72f4fec0c6012955e3efc8d56c96880ef",
                    "6f38c0aedf5d1163cca3bf5721acb71cb54bf387a69827c8ccdc59064a19d6ed"
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1628,
                "types": [
                    "ip",
                    "ssl-cert",
                    "hash",
                    "domain"
                ],
                "sampleIndicators": [
                    "195fec1204186bb02fde9ac09f5a45add84dde09533400a354a2d97fd6b20acd",
                    "46[.]246[.]4[.]16",
                    "34[.]51[.]206[.]15"
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
                "count": 731,
                "types": [
                    "ssl-cert",
                    "hash"
                ],
                "sampleIndicators": [
                    "898a138ef42c7846cd641bd8406a9ec940991b26113389bbc847648a76cf104c",
                    "5c8922ff90e264e8d6c22b3c7d6c1c27d5a62d61",
                    "8053e4267e87455b7f8aa3a6ff698d65616aca26"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 19678,
        "lastCalculated": "2026-11-10 00:11 IST"
    }
};
