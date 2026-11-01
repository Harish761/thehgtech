// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-11-02T03:45:58.044277+05:30 IST (2026-11-01 22:15 UTC)
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-11-02T03:45:57.237961+05:30",
    "lastUpdatedFormatted": "Nov 02, 2026 at 03:45 AM IST",
    "lastUpdatedUtc": "2026-11-01 22:15 UTC",
    "comparisonPeriod": "Nov 01 \u2013 Nov 02, 2026",
    "stats": {
        "totalIOCs": 105648,
        "byType": {
            "url": 39285,
            "ip": 50738,
            "hash": 641,
            "domain": 2158,
            "ssl-cert": 11070,
            "ip-range": 1756
        },
        "byVendor": {
            "OpenPhish": 3598,
            "Malware Bazaar": 476,
            "Spamhaus DROP": 1756,
            "CINS Army": 37318,
            "Blocklist.de": 10870,
            "URLhaus": 34528,
            "ThreatFox": 6027,
            "Feodo Tracker": 5,
            "SSL Blacklist": 11070
        },
        "topMalware": [
            {
                "name": "Vidar",
                "count": 1691,
                "types": [
                    "domain",
                    "ssl-cert",
                    "url",
                    "hash"
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1628,
                "types": [
                    "ssl-cert",
                    "domain",
                    "ip",
                    "hash"
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
                "name": "Dridex",
                "count": 737,
                "types": [
                    "ssl-cert"
                ]
            },
            {
                "name": "QuasarRAT",
                "count": 726,
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
                "name": "LummaStealer",
                "count": 558,
                "types": [
                    "ssl-cert"
                ]
            },
            {
                "name": "ConnectWise",
                "count": 553,
                "types": [
                    "ssl-cert",
                    "hash"
                ]
            },
            {
                "name": "OffLoader",
                "count": 553,
                "types": [
                    "ssl-cert"
                ]
            },
            {
                "name": "PureRAT",
                "count": 445,
                "types": [
                    "ssl-cert",
                    "ip"
                ]
            },
            {
                "name": "Malware",
                "count": 419,
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
                    "ssl-cert",
                    "ip"
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
                "analysisTime": "2026-11-02 01:56 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-02T01:56:27.699967+05:30",
                "campaign": "Malware",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "f6f18a9147a66682618c0255dd3d376ccbcfed94",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-10-25 10:56:45",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-02 01:56 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-02T01:56:27.699967+05:30",
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
                "analysisTime": "2026-11-02 01:56 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-02T01:56:27.699967+05:30",
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
                "analysisTime": "2026-11-02 01:56 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-02T01:56:27.699967+05:30",
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
                "analysisTime": "2026-11-02 01:56 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-02T01:56:27.699967+05:30",
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
                "analysisTime": "2026-11-02 01:56 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-02T01:56:27.699967+05:30",
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
                "analysisTime": "2026-11-02 01:56 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-02T01:56:27.699967+05:30",
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
                "analysisTime": "2026-11-02 01:56 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-02T01:56:27.699967+05:30",
                "campaign": "nullRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "a09be1ba7013678b6385135c590d4894b890dc75",
                "description": "Malicious SSL certificate - SheetRAT C&C",
                "timestamp": "2026-09-26 08:26:15",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-02 01:56 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-02T01:56:27.699967+05:30",
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
                "analysisTime": "2026-11-02 01:56 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-02T01:56:27.699967+05:30",
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
                "analysisTime": "2026-11-02 01:56 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-02T01:56:27.699967+05:30",
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
                "analysisTime": "2026-11-02 01:56 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-02T01:56:27.699967+05:30",
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
                "analysisTime": "2026-11-02 01:56 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-02T01:56:27.699967+05:30",
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
                "analysisTime": "2026-11-02 01:56 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-02T01:56:27.699967+05:30",
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
                "analysisTime": "2026-11-02 01:56 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-02T01:56:27.699967+05:30",
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
                "analysisTime": "2026-11-02 01:56 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-02T01:56:27.699967+05:30",
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
                "analysisTime": "2026-11-02 01:56 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-02T01:56:27.699967+05:30",
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
                "analysisTime": "2026-11-02 01:56 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-02T01:56:27.699967+05:30",
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
                "analysisTime": "2026-11-02 01:56 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-02T01:56:27.699967+05:30",
                "campaign": "QuasarRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "9d495a9c646e3962ac5445e9b4da6832164dc4ee",
                "description": "Malicious SSL certificate - OffLoader C&C",
                "timestamp": "2026-08-28 08:06:54",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-02 01:56 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-02T01:56:27.699967+05:30",
                "campaign": "OffLoader",
                "confidence": "High"
            }
        ],
        "lastUpdated": "2026-11-02T03:45:57.237961+05:30",
        "lastUpdatedFormatted": "Nov 02, 2026 at 03:45 AM IST",
        "lastUpdatedUtc": "2026-11-01 22:15 UTC"
    },
    "vendors": {
        "OpenPhish": {
            "description": "Real-time phishing URL feed updated every 15 minutes. Tracks active phishing sites targeting major brands and financial institutions.",
            "website": "https://openphish.com/",
            "updateFrequency": "Every 15 minutes",
            "iocCount": 3598,
            "iocDataUrl": "https://thehgtech.com/ioc-data/openphish.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 3598,
                "newInLastHour": 300,
                "lastUpdate": "2026-11-01 22:15 UTC",
                "isStale": false,
                "feedStatus": "active"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://instagram-cloud[.]blogspot[.]com/",
                "hxxp://www[.]instagram-cloud[.]blogspot[.]com/",
                "hxxp://mvdcy1ekqlo-qwbrmlos-8e1f2b-mvd83w[.]pages[.]dev/",
                "hxxps://www[.]faccbook[.]vercel[.]app/",
                "hxxp://sp3ct10-melvuni-biz-kavzelo[.]pages[.]dev/"
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
                "lastUpdate": "2026-11-01 22:15 UTC",
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
            "iocCount": 1756,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 1756,
                "newInLastHour": 0,
                "lastUpdate": "2026-11-01 22:15 UTC",
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
            "iocCount": 37166,
            "iocDataUrl": "https://thehgtech.com/ioc-data/cins-army.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 37166,
                "newInLastHour": 15000,
                "lastUpdate": "2026-11-01 22:15 UTC",
                "isStale": false,
                "feedStatus": "active"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]12[.]229[.]231",
                "1[.]145[.]89[.]105",
                "1[.]15[.]14[.]29",
                "1[.]170[.]196[.]186",
                "1[.]193[.]63[.]167"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 10880,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 10880,
                "newInLastHour": 5100,
                "lastUpdate": "2026-11-01 22:15 UTC",
                "isStale": false,
                "feedStatus": "active"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]10[.]160[.]127",
                "1[.]117[.]73[.]220",
                "1[.]12[.]55[.]80",
                "1[.]13[.]181[.]113",
                "1[.]14[.]192[.]95"
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
                "lastUpdate": "2026-11-01 22:15 UTC",
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
                "lastUpdate": "2026-11-01 22:15 UTC",
                "isStale": true,
                "feedStatus": "stale"
            },
            "types": [
                "domain",
                "url",
                "ip",
                "hash"
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
                "lastUpdate": "2026-11-01 22:15 UTC",
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
            "iocCount": 11120,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 11120,
                "newInLastHour": 50,
                "lastUpdate": "2026-11-01 22:15 UTC",
                "isStale": false,
                "feedStatus": "active"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "39addcc32a42a6e5e02bc47df50ae4382f7985ea",
                "937b0696c1b45add349c0bb80ccb2c5bf1b45e8d",
                "7971c98d08ecbd1c681c9b7e24d9c051b2cab4d5",
                "ea4723a7e20c5d7a484f1839bbdeb7264e390b67",
                "557e284271700e2d215ccfd45928ca26e7010195"
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
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-02T01:56:27.699967+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "f6f18a9147a66682618c0255dd3d376ccbcfed94",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-25 10:56:45",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-02T01:56:27.699967+05:30",
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
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-02T01:56:27.699967+05:30",
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
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-02T01:56:27.699967+05:30",
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
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-02T01:56:27.699967+05:30",
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
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-02T01:56:27.699967+05:30",
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
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-02T01:56:27.699967+05:30",
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
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-02T01:56:27.699967+05:30",
            "campaign": "nullRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "a09be1ba7013678b6385135c590d4894b890dc75",
            "description": "Malicious SSL certificate - SheetRAT C&C",
            "timestamp": "2026-09-26 08:26:15",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-02T01:56:27.699967+05:30",
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
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-02T01:56:27.699967+05:30",
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
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-02T01:56:27.699967+05:30",
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
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-02T01:56:27.699967+05:30",
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
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-02T01:56:27.699967+05:30",
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
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-02T01:56:27.699967+05:30",
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
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-02T01:56:27.699967+05:30",
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
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-02T01:56:27.699967+05:30",
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
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-02T01:56:27.699967+05:30",
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
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-02T01:56:27.699967+05:30",
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
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-02T01:56:27.699967+05:30",
            "campaign": "QuasarRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "9d495a9c646e3962ac5445e9b4da6832164dc4ee",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-08-28 08:06:54",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-02T01:56:27.699967+05:30",
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
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-02T01:56:27.699967+05:30",
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
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-02T01:56:27.699967+05:30",
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
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-02T01:56:27.699967+05:30",
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
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-02T01:56:27.699967+05:30",
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
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-02T01:56:27.699967+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "ece1b6bdc8e62d35188aab274bdb0be28d84c43f",
            "description": "Malicious SSL certificate - QuasarRAT C&C",
            "timestamp": "2026-08-06 14:20:21",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-02T01:56:27.699967+05:30",
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
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-02T01:56:27.699967+05:30",
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
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-02T01:56:27.699967+05:30",
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
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-02T01:56:27.699967+05:30",
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
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-02T01:56:27.699967+05:30",
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
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-02T01:56:27.699967+05:30",
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
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-02T01:56:27.699967+05:30",
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
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-02T01:56:27.699967+05:30",
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
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-02T01:56:27.699967+05:30",
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
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-02T01:56:27.699967+05:30",
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
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-02T01:56:27.699967+05:30",
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
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-02T01:56:27.699967+05:30",
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
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-02T01:56:27.699967+05:30",
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
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-02T01:56:27.699967+05:30",
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
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-02T01:56:27.699967+05:30",
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
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-02T01:56:27.699967+05:30",
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
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-02T01:56:27.699967+05:30",
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
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-02T01:56:27.699967+05:30",
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
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-02T01:56:27.699967+05:30",
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
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-02T01:56:27.699967+05:30",
            "campaign": "AsyncRAT",
            "confidence": "High"
        },
        {
            "type": "ip",
            "indicator": "162[.]243[.]103[.]246",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-11-02 01:56 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-11-02T01:56:26.410357+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "178[.]62[.]3[.]223",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-11-02 01:56 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-11-02T01:56:26.410357+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "27[.]133[.]154[.]218",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-11-02 01:56 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-11-02T01:56:26.410357+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "34[.]204[.]119[.]63",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-11-02 01:56 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-11-02T01:56:26.410357+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "50[.]16[.]16[.]211",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-11-02 01:56 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-11-02T01:56:26.410357+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "1[.]10[.]160[.]127",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-02 01:56 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-02T01:56:24.126229+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]117[.]73[.]220",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-02 01:56 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-02T01:56:24.126229+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]12[.]55[.]80",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-02 01:56 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-02T01:56:24.126229+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]13[.]181[.]113",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-02 01:56 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-02T01:56:24.126229+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]14[.]240[.]247",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-02 01:56 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-02T01:56:24.126229+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]14[.]64[.]144",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-02 01:56 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-02T01:56:24.126229+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]15[.]221[.]192",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-02 01:56 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-02T01:56:24.126229+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]162[.]226[.]183",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-02 01:56 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-02T01:56:24.126229+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]173[.]231[.]52",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-02 01:56 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-02T01:56:24.126229+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]214[.]214[.]114",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-02 01:56 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-02T01:56:24.126229+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]222[.]42[.]237",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-02 01:56 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-02T01:56:24.126229+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]234[.]27[.]159",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-02 01:56 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-02T01:56:24.126229+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]234[.]80[.]94",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-02 01:56 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-02T01:56:24.126229+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]238[.]106[.]229",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-02 01:56 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-02T01:56:24.126229+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]245[.]161[.]206",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-02 01:56 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-02T01:56:24.126229+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]95[.]133[.]61",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-02 01:56 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-02T01:56:24.126229+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "100[.]31[.]87[.]143",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-02 01:56 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-02T01:56:24.126229+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "100[.]49[.]117[.]77",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-02 01:56 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-02T01:56:24.126229+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]100[.]194[.]181",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-02 01:56 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-02T01:56:24.126229+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]11[.]137",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-02 01:56 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-02T01:56:24.126229+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]129[.]127",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-02 01:56 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-02T01:56:24.126229+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]141[.]163",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-02 01:56 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-02T01:56:24.126229+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]24[.]71",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-02 01:56 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-02T01:56:24.126229+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]24[.]74",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-02 01:56 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-02T01:56:24.126229+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]4[.]240",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-02 01:56 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-02T01:56:24.126229+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]53[.]14",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-02 01:56 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-02T01:56:24.126229+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]64[.]76",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-02 01:56 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-02T01:56:24.126229+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]66[.]30",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-02 01:56 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-02T01:56:24.126229+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]67[.]70",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-02 01:56 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-02T01:56:24.126229+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]69[.]201",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-02 01:56 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-02T01:56:24.126229+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]70[.]177",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-02 01:56 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-02T01:56:24.126229+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]132[.]85[.]130",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-02 01:56 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-02T01:56:24.126229+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]200[.]181[.]225",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-02 01:56 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-02T01:56:24.126229+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]200[.]236[.]207",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-02 01:56 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-02T01:56:24.126229+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]201[.]233[.]222",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-02 01:56 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-02T01:56:24.126229+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]201[.]234[.]37",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-02 01:56 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-02T01:56:24.126229+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]201[.]38[.]226",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-02 01:56 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-02T01:56:24.126229+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]206[.]210[.]3",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-02 01:56 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-02T01:56:24.126229+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]227[.]203[.]162",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-02 01:56 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-02T01:56:24.126229+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]254[.]159[.]210",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-02 01:56 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-02T01:56:24.126229+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]32[.]240[.]31",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-02 01:56 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-02T01:56:24.126229+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]33[.]213[.]67",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-02 01:56 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-02T01:56:24.126229+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]34[.]59[.]249",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-02 01:56 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-02T01:56:24.126229+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]35[.]102[.]166",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-02 01:56 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-02T01:56:24.126229+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]35[.]227[.]48",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-02 01:56 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-02T01:56:24.126229+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]107[.]233",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-02 01:56 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-02T01:56:24.126229+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]108[.]160",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-02 01:56 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-02T01:56:24.126229+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]108[.]202",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-02 01:56 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-02T01:56:24.126229+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]108[.]72",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-02 01:56 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-02T01:56:24.126229+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]116[.]216",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-02 01:56 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-02 01:56 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-02T01:56:24.126229+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        }
    ],
    "dailySummary": {
        "stats": {
            "totalIndicators": 105648,
            "activeSources": 9,
            "criticalAlerts": 46665,
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
                "count": 11315,
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
                "count": 3601,
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
            },
            {
                "name": "Government",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "CINS Threat List",
                "count": 37318,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]145[.]89[.]105",
                    "1[.]15[.]14[.]29",
                    "1[.]193[.]63[.]167"
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
                "count": 10870,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]10[.]160[.]127",
                    "1[.]117[.]73[.]220",
                    "1[.]12[.]55[.]80"
                ]
            },
            {
                "name": "Generic Phishing",
                "count": 3582,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://instagram-cloud[.]blogspot[.]com/",
                    "hxxp://www[.]instagram-cloud[.]blogspot[.]com/",
                    "hxxp://mvdcy1ekqlo-qwbrmlos-8e1f2b-mvd83w[.]pages[.]dev/"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1756,
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
                "count": 1691,
                "types": [
                    "domain",
                    "ssl-cert",
                    "url",
                    "hash"
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
                    "ssl-cert",
                    "domain",
                    "ip",
                    "hash"
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
                "count": 726,
                "types": [
                    "ssl-cert",
                    "hash"
                ],
                "sampleIndicators": [
                    "898a138ef42c7846cd641bd8406a9ec940991b26113389bbc847648a76cf104c",
                    "937b0696c1b45add349c0bb80ccb2c5bf1b45e8d",
                    "875a92bb886a52699413fb2e4370adc03c1eda37"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "Vidar",
        "totalAttacksThisHour": 20455,
        "lastCalculated": "2026-11-02 03:45 IST"
    }
};
