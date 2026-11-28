// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-11-28T05:29:43.588558+05:30 IST (2026-11-27 23:59 UTC)
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-11-28T05:29:42.775217+05:30",
    "lastUpdatedFormatted": "Nov 28, 2026 at 05:29 AM IST",
    "lastUpdatedUtc": "2026-11-27 23:59 UTC",
    "comparisonPeriod": "Nov 27 \u2013 Nov 28, 2026",
    "stats": {
        "totalIOCs": 111823,
        "byType": {
            "url": 39504,
            "ip": 56405,
            "hash": 641,
            "domain": 2158,
            "ssl-cert": 11375,
            "ip-range": 1740
        },
        "byVendor": {
            "OpenPhish": 3817,
            "Malware Bazaar": 476,
            "Spamhaus DROP": 1740,
            "CINS Army": 41039,
            "Blocklist.de": 12816,
            "URLhaus": 34528,
            "ThreatFox": 6027,
            "Feodo Tracker": 5,
            "SSL Blacklist": 11375
        },
        "topMalware": [
            {
                "name": "Vidar",
                "count": 1783,
                "types": [
                    "ssl-cert",
                    "url",
                    "hash",
                    "domain"
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1629,
                "types": [
                    "ssl-cert",
                    "ip",
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
                "count": 732,
                "types": [
                    "ssl-cert",
                    "hash"
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
                "name": "OffLoader",
                "count": 584,
                "types": [
                    "ssl-cert"
                ]
            },
            {
                "name": "ConnectWise",
                "count": 561,
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
                "count": 458,
                "types": [
                    "ip",
                    "ssl-cert"
                ]
            },
            {
                "name": "Malware",
                "count": 441,
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
                "count": 351,
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
                "indicator": "ca762af05d70b15789214db60a0f775de37c7b29",
                "description": "Malicious SSL certificate - Malware C&C",
                "timestamp": "2026-11-27 07:07:22",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-28 05:29 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-28T05:29:39.663579+05:30",
                "campaign": "Malware",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "46cd17fe66d9e90a333b3d8544ad6e1ac3ced580",
                "description": "Malicious SSL certificate - FunStealer C&C",
                "timestamp": "2026-11-19 19:26:13",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-28 05:29 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-28T05:29:39.663579+05:30",
                "campaign": "FunStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "1fcc1376b18842bcd8ce9078371843dc9b55ea2b",
                "description": "Malicious SSL certificate - FunStealer C&C",
                "timestamp": "2026-11-19 19:26:12",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-28 05:29 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-28T05:29:39.663579+05:30",
                "campaign": "FunStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "47f4d9c4606c19ddd4c053e84b27e76965058fe8",
                "description": "Malicious SSL certificate - FunStealer C&C",
                "timestamp": "2026-11-19 19:25:01",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-28 05:29 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-28T05:29:39.663579+05:30",
                "campaign": "FunStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "58af3cc8f1ab7b9b4d02c23b5ac169d498cbddbc",
                "description": "Malicious SSL certificate - SheetRAT C&C",
                "timestamp": "2026-11-19 15:04:01",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-28 05:29 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-28T05:29:39.663579+05:30",
                "campaign": "SheetRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "ede2b62ea65aa4d5b6751f6fdb3702f7f55f730a",
                "description": "Malicious SSL certificate - Malware C&C",
                "timestamp": "2026-11-19 15:01:31",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-28 05:29 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-28T05:29:39.663579+05:30",
                "campaign": "Malware",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "70e1fb9b59e223a1d2e45d12b8dbb7f4dd28d1ac",
                "description": "Malicious SSL certificate - RevStealer C&C",
                "timestamp": "2026-11-19 14:57:55",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-28 05:29 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-28T05:29:39.663579+05:30",
                "campaign": "RevStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "ffd76c5a5ab1a81486a34ea5532ba2d5acef9995",
                "description": "Malicious SSL certificate - RevStealer C&C",
                "timestamp": "2026-11-19 14:47:34",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-28 05:29 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-28T05:29:39.663579+05:30",
                "campaign": "RevStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "4815c51736189179ad892b69abe7f44560919e45",
                "description": "Malicious SSL certificate - RevStealer C&C",
                "timestamp": "2026-11-19 14:46:41",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-28 05:29 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-28T05:29:39.663579+05:30",
                "campaign": "RevStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "592d114b8c8f239bc3e0cc38f7e458a07290fa86",
                "description": "Malicious SSL certificate - DCRat C&C",
                "timestamp": "2026-11-19 14:40:59",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-28 05:29 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-28T05:29:39.663579+05:30",
                "campaign": "DCRat",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "4fd67b1aa3023f5b6af9caa4437d22d61100a3a3",
                "description": "Malicious SSL certificate - OffLoader C&C",
                "timestamp": "2026-11-19 14:40:36",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-28 05:29 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-28T05:29:39.663579+05:30",
                "campaign": "OffLoader",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "6c2bc0ebdd7952188d93e5a37784fd1463518ed4",
                "description": "Malicious SSL certificate - OffLoader C&C",
                "timestamp": "2026-11-19 14:39:51",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-28 05:29 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-28T05:29:39.663579+05:30",
                "campaign": "OffLoader",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "1db9370892739b6e96aca4c7474e4f2acb01ba1d",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-11-19 14:38:47",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-28 05:29 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-28T05:29:39.663579+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "38d87ea5d7bfa642d74712be1d9be179ad76fead",
                "description": "Malicious SSL certificate - PureLogsStealer C&C",
                "timestamp": "2026-11-19 14:38:41",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-28 05:29 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-28T05:29:39.663579+05:30",
                "campaign": "PureLogsStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "bcf99cb2b7ea392a9942e31d37f86140eb712e1a",
                "description": "Malicious SSL certificate - Malware C&C",
                "timestamp": "2026-11-19 14:37:51",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-28 05:29 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-28T05:29:39.663579+05:30",
                "campaign": "Malware",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "6cdd0a6d904b5b82cf3bd1f07c29d7f1a0d40b22",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-11-19 14:35:02",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-28 05:29 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-28T05:29:39.663579+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "d54dc8d59374d75ec7cd457b990eeb31dd4593a8",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-11-19 14:34:35",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-28 05:29 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-28T05:29:39.663579+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "3c7781a932aaafc44552a9ba67d2d4cece68df70",
                "description": "Malicious SSL certificate - AsyncRAT C&C",
                "timestamp": "2026-11-19 14:34:14",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-28 05:29 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-28T05:29:39.663579+05:30",
                "campaign": "AsyncRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "bfab9cec77144e041b46102221b3449737c24d4a",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-11-19 14:29:10",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-28 05:29 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-28T05:29:39.663579+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "b87450ca105a8f7fe1936ac4a8690d7d8c549aab",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-11-19 14:26:56",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-28 05:29 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-28T05:29:39.663579+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            }
        ],
        "lastUpdated": "2026-11-28T05:29:42.775217+05:30",
        "lastUpdatedFormatted": "Nov 28, 2026 at 05:29 AM IST",
        "lastUpdatedUtc": "2026-11-27 23:59 UTC"
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
                "lastUpdate": "2026-11-27 23:59 UTC",
                "isStale": false,
                "feedStatus": "active"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://n8turz[.]s3[.]us-east-1[.]amazonaws[.]com/ctgdctopacg/index[.]html?phone=050-3097-5761%3E",
                "hxxps://oook1-x7x-uvql-09gdb-06-10-2026-aa[.]pages[.]dev/",
                "hxxp://n5ezo-a6z-37dj-wyhsv-12-10-2026-aa[.]pages[.]dev/",
                "hxxps://urch-project[.]previewship[.]net/#a[.]b@c",
                "hxxps://6s8[.]aolade[.]cn/"
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
                "lastUpdate": "2026-11-27 23:59 UTC",
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
            "iocCount": 1740,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 1740,
                "newInLastHour": 2,
                "lastUpdate": "2026-11-27 23:59 UTC",
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
            "iocCount": 41039,
            "iocDataUrl": "https://thehgtech.com/ioc-data/cins-army.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 41039,
                "newInLastHour": 15000,
                "lastUpdate": "2026-11-27 23:59 UTC",
                "isStale": false,
                "feedStatus": "active"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]117[.]232[.]51",
                "1[.]12[.]47[.]107",
                "1[.]13[.]17[.]224",
                "1[.]14[.]110[.]192",
                "1[.]14[.]3[.]170"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 12816,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 12816,
                "newInLastHour": 4307,
                "lastUpdate": "2026-11-27 23:59 UTC",
                "isStale": false,
                "feedStatus": "active"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]1[.]220[.]166",
                "1[.]12[.]252[.]163",
                "1[.]13[.]156[.]111",
                "1[.]194[.]211[.]36",
                "1[.]214[.]214[.]114"
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
                "lastUpdate": "2026-11-27 23:59 UTC",
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
                "lastUpdate": "2026-11-27 23:59 UTC",
                "isStale": true,
                "feedStatus": "stale"
            },
            "types": [
                "ip",
                "url",
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
                "lastUpdate": "2026-11-27 23:59 UTC",
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
            "iocCount": 11375,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 11375,
                "newInLastHour": 473,
                "lastUpdate": "2026-11-27 23:59 UTC",
                "isStale": false,
                "feedStatus": "active"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "ca762af05d70b15789214db60a0f775de37c7b29",
                "e3f4ba4c9edce49b6cd05a517115f1c555f35d81",
                "fc106a1b721f1e8f48d8992745a69506ffbfb0f7",
                "9ca8233118bf720ea5c2e141f0dde31c4cc9c818",
                "3ec4de7981b35b599489e6131411bfab779a3993"
            ]
        }
    },
    "overview": [
        {
            "type": "ssl-cert",
            "indicator": "ca762af05d70b15789214db60a0f775de37c7b29",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-11-27 07:07:22",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "46cd17fe66d9e90a333b3d8544ad6e1ac3ced580",
            "description": "Malicious SSL certificate - FunStealer C&C",
            "timestamp": "2026-11-19 19:26:13",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "FunStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "1fcc1376b18842bcd8ce9078371843dc9b55ea2b",
            "description": "Malicious SSL certificate - FunStealer C&C",
            "timestamp": "2026-11-19 19:26:12",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "FunStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "47f4d9c4606c19ddd4c053e84b27e76965058fe8",
            "description": "Malicious SSL certificate - FunStealer C&C",
            "timestamp": "2026-11-19 19:25:01",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "FunStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "58af3cc8f1ab7b9b4d02c23b5ac169d498cbddbc",
            "description": "Malicious SSL certificate - SheetRAT C&C",
            "timestamp": "2026-11-19 15:04:01",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "SheetRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "ede2b62ea65aa4d5b6751f6fdb3702f7f55f730a",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-11-19 15:01:31",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "70e1fb9b59e223a1d2e45d12b8dbb7f4dd28d1ac",
            "description": "Malicious SSL certificate - RevStealer C&C",
            "timestamp": "2026-11-19 14:57:55",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "RevStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "ffd76c5a5ab1a81486a34ea5532ba2d5acef9995",
            "description": "Malicious SSL certificate - RevStealer C&C",
            "timestamp": "2026-11-19 14:47:34",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "RevStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "4815c51736189179ad892b69abe7f44560919e45",
            "description": "Malicious SSL certificate - RevStealer C&C",
            "timestamp": "2026-11-19 14:46:41",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "RevStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "592d114b8c8f239bc3e0cc38f7e458a07290fa86",
            "description": "Malicious SSL certificate - DCRat C&C",
            "timestamp": "2026-11-19 14:40:59",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "DCRat",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "4fd67b1aa3023f5b6af9caa4437d22d61100a3a3",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-11-19 14:40:36",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "6c2bc0ebdd7952188d93e5a37784fd1463518ed4",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-11-19 14:39:51",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "1db9370892739b6e96aca4c7474e4f2acb01ba1d",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-11-19 14:38:47",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "38d87ea5d7bfa642d74712be1d9be179ad76fead",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-11-19 14:38:41",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "bcf99cb2b7ea392a9942e31d37f86140eb712e1a",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-11-19 14:37:51",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "6cdd0a6d904b5b82cf3bd1f07c29d7f1a0d40b22",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-11-19 14:35:02",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "d54dc8d59374d75ec7cd457b990eeb31dd4593a8",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-11-19 14:34:35",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "3c7781a932aaafc44552a9ba67d2d4cece68df70",
            "description": "Malicious SSL certificate - AsyncRAT C&C",
            "timestamp": "2026-11-19 14:34:14",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "AsyncRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "bfab9cec77144e041b46102221b3449737c24d4a",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-11-19 14:29:10",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "b87450ca105a8f7fe1936ac4a8690d7d8c549aab",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-11-19 14:26:56",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "c197cc60215219ca6d3781953e16ed060be8ed9a",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-11-12 09:40:02",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "5961621983c7a3175a43032505457983fd0422f5",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-11-12 09:38:17",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "206699fd6ec97741dcdfe7d8ff2a066f1788a3f7",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-11-12 09:33:43",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "0f01c1b3f102f81f42772aed3893c2c9e0f48fb7",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-11-12 09:09:12",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "8850bca458b507876f7d39297d44bdb1634ba915",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-11-12 09:05:56",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "2d5618f557611ad38b3addcb60b3e7424006b79b",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-11-12 09:05:33",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "7cf49de496a65869f8cf0c0b6a12c6fa5ab1c70f",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-11-12 09:04:22",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "d81ba5307163e9ab6460623840036fff7d856104",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-11-12 09:00:57",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "3c9cf61da071dea44abcb047a6290104588fb791",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-11-12 09:00:22",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "dc26a2f39a41b1f6341aea0fb4cdbe57ff564917",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-11-12 07:31:43",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "69a2602395b7cf2a39cb87cd82a4ce6c5a65b590",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-11-04 18:56:21",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "2d10340053833d2b9662dcde0e36b4fee06991b3",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-11-04 18:40:06",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "4ac16d400d5a82f25683361c46f69fbebcbc746a",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-11-04 15:59:41",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "6b16ed3bacf20a5cb798f5aeafddfdf98936ad33",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-11-04 15:53:12",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "4006b8b2e5cc903cf34d104d4a9557c9cd72474a",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-11-04 10:42:28",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "f40c3e5760bab5d2d8839c0e55a18f660fbbcd94",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-11-04 10:40:41",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "c1079d2e32f2c06188ae5eca7e1d65735358b0b8",
            "description": "Malicious SSL certificate - doxbin.cy",
            "timestamp": "2026-11-04 10:32:59",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "doxbin.cy",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "98cb8edce9e85d99286177ce41e08642663800bb",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-11-04 10:32:58",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "2bc2251b18372479069949ab4554d0309d34be18",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-11-04 10:28:07",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "345306210bfbe41b06d2222a5a6025a355bd05fa",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-11-04 10:24:34",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "5663d22f630385239855507aac3fbb3b9e775b56",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-11-04 10:23:36",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "e10fe9007408391e4c3a808ae4b7c4cb6e7df1a3",
            "description": "Malicious SSL certificate - OnyxC2 C&C",
            "timestamp": "2026-10-20 16:02:55",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "OnyxC2",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "e6c0468f46efe40f3127d33641bfc3df8b2e5c7d",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-10-13 07:58:17",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "4664c47d412c00bf067a325ffa9790db75efbe75",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-10-13 06:59:39",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "b3c1e060a727e4db1cf6131f1eb6e9bcca2ffb5d",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-10-13 06:17:05",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "2c32691ea854fdd88474aec7283283c4e4fe9d10",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-10-06 06:52:06",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "d6b483d29d98e74b22cf0275061f76fbb0574176",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-10-06 06:29:07",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "0446b968d2664c7d195cb91e4938bf6b92d819da",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-10-06 06:28:46",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "85eeedf7693129c522860142f2eb0c84f5fb355e",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-10-06 06:20:57",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "6917195681c5f23ea6ebabed360e26ab7ff93a67",
            "description": "Malicious SSL certificate - DCAgentRMM C&C",
            "timestamp": "2026-10-06 06:19:25",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "DCAgentRMM",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "120de53c383886e618516713331d4b91f87cd855",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-10-06 06:18:40",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "604d5a356e733c294284f85139f3da71d2ee3f34",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-10-06 06:17:32",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "65959355ba118cbe669682caf104b2f3466d12f7",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-10-06 06:16:28",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "99c899767c5745e980b27cf06025ab1e3b2e33d7",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-10-06 06:15:16",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "7a9913813778b16a5bf57aeb7dea4c93340c79c0",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-06 05:31:43",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "adcff1c66a3ba1c9446886eb9f6efdbec4f17688",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-09-21 16:26:12",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "99500e5de097a58d95775e1f9da85597851bdb71",
            "description": "Malicious SSL certificate - AsyncRAT C&C",
            "timestamp": "2026-09-21 15:49:25",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "AsyncRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "54e1ddda090bff894e88ccc2a784f0e9f4c46d97",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-09-21 15:48:46",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "9b798f7d87edcf42680454660f593afd696ef8ca",
            "description": "Malicious SSL certificate - QuasarRAT C&C",
            "timestamp": "2026-09-21 13:21:04",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "QuasarRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "e20ecba521fd923644d154963d32d5cd29f4c0b1",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-09-21 07:57:31",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "9028baa7a4f17d812e2c497cdc6dbe5594780325",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-09-21 07:53:24",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "31ce37e696cdff32d3042b1f9be493c1e43b4b6e",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-09-21 07:53:19",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "ea74c0bba5834a0445661f91c3a220811eb965a3",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-09-21 07:53:12",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "4385dfcee56c1ede34b61cbc84666afe4946cf2a",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-09-21 07:52:50",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "0bf61cf448206d51a0b7a0cdece647df3ea1196f",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-09-21 07:52:03",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "a7bc5bdb50a33449b1f9c6037a703e58caa406bf",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-09-21 07:50:23",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "198fea94392f134f8578e6057c3b6679243e58c3",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-09-21 07:50:00",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "e458b2ccf8647aee41d64e46d1baadfc49e9e853",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-09-14 15:24:00",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "14bc0ce6c63bf1c1554b4cd1772c60b57c38ab09",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-09-14 06:36:14",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "7bc298ef18b49cfd44b5b429209035207250e25e",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-09-14 06:35:59",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "d8f9205907b3bd3de4fb0513e5c53f167064a452",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-09-14 06:35:25",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "b5daf66c6f8a99f2d6fe3fc678264598ec140049",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-09-07 06:44:32",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "b7c32dab3a4cd691ddcfee4bc1fed6d1d6f81c18",
            "description": "Malicious SSL certificate - AsyncRAT C&C",
            "timestamp": "2026-09-07 06:44:09",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "AsyncRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "206850b799a53982b73accdefec94083f2094a6e",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-09-07 06:43:14",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "e00005ae100b2af24cf6d7f71b7cd123f8b916be",
            "description": "Malicious SSL certificate - DCRat C&C",
            "timestamp": "2026-09-07 06:43:05",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "DCRat",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "2a2c44f91a961c0b573d1e823f314fb4ffbc88dd",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-09-07 06:41:53",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "7d7d8f52b3aee2d5233b2f8cc838cd08a6036c1d",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-09-07 06:40:42",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "a974b9d90161d8c5221961c65a975d81959cdb40",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-30 17:53:11",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "0034d3f66acca402e4ae3d683e435f10d513006a",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-08-08 20:40:06",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "1ab7aaf074b1e925322cd328b4d1343f46f4f91b",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-08-08 20:37:37",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "45bbc5ebc131cca9663c35c95459564007049d07",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-07-25 12:04:12",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "1e5253b44aa68a4b31f0dfc07df48b31798debca",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-07-18 18:09:52",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "7f563e6df9b87f615f2d492ba68d5df373a6ca26",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-07-18 17:51:37",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "a133ce088d9ead15855e1343b8e643736d47d7d9",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-07-11 07:17:27",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "dcbc383f1a16d4b8baa7bfca1bb023f7f65c36f7",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-07-11 06:54:46",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "22cb3cb6d7b5b158d2156b1bd4018db8b5433ea7",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-07-11 06:54:09",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "1199461c382373b4645960ca6875028d7c96ce16",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-07-11 06:53:57",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "2516492455c882b6a07fbcb076f31a06b2a71963",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-07-11 06:52:13",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "8b6153391f8b6caaad5e0c11054a98ff35e4b605",
            "description": "Malicious SSL certificate - ZigClipper C&C",
            "timestamp": "2026-07-11 06:52:02",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "ZigClipper",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "b0e16234706cee8e6f50f6397b88aab1d6ee4345",
            "description": "Malicious SSL certificate - ZigClipper C&C",
            "timestamp": "2026-07-11 06:52:00",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "ZigClipper",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "6852cc75937e2d30455d30257da88d19e57d5ef2",
            "description": "Malicious SSL certificate - Malware distribution",
            "timestamp": "2026-07-11 06:51:52",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "ee36218aaa01a8d8f352e02bc851092fbcf1f1a2",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-07-11 06:51:33",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "01dcaf71bc0dc821c2df145680dee05578368355",
            "description": "Malicious SSL certificate - KongTuke C&C",
            "timestamp": "2026-06-19 13:51:31",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "KongTuke",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "e81bedd0d62805a9bcad2b1cd652435cd9a59bcc",
            "description": "Malicious SSL certificate - KongTuke C&C",
            "timestamp": "2026-06-12 06:18:44",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "KongTuke",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "e1c32b52b297f07860e5c2ff0b0ef604d8d929fc",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-06-05 05:40:02",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "ded6028ef62f0258e17121e6beece5d9b124d48f",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-06-05 05:16:17",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "545e17b0c27640889044d9780ef0f3ad8825b55a",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-06-05 05:15:27",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "12a50b5c46ccd3c1dc155c31eb30438cc2225e89",
            "description": "Malicious SSL certificate - CobaltStrike C&C",
            "timestamp": "2026-06-05 05:14:19",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "CobaltStrike",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "7cf0a3e58ceb76c0839efdd4adf64dd64fa6f6f2",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-06-05 05:12:46",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "90e3298b9df7e2c9ba08cc32cab77dee09be4f30",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-06-05 05:06:59",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 05:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T05:29:39.663579+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        }
    ],
    "dailySummary": {
        "stats": {
            "totalIndicators": 111823,
            "activeSources": 9,
            "criticalAlerts": 46970,
            "activeCampaigns": 224
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
                "count": 11620,
                "trend": "stable",
                "percentage": 4
            },
            {
                "category": "Botnet",
                "count": 4297,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Phishing",
                "count": 3820,
                "trend": "stable",
                "percentage": -7
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
                "count": 41039,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]117[.]232[.]51",
                    "1[.]12[.]47[.]107",
                    "1[.]13[.]17[.]224"
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
                "count": 12816,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]1[.]220[.]166",
                    "1[.]12[.]252[.]163",
                    "1[.]13[.]156[.]111"
                ]
            },
            {
                "name": "Generic Phishing",
                "count": 3793,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://n8turz[.]s3[.]us-east-1[.]amazonaws[.]com/ctgdctopacg/index[.]html?phone=050-3097-5761%3E",
                    "hxxps://oook1-x7x-uvql-09gdb-06-10-2026-aa[.]pages[.]dev/",
                    "hxxp://n5ezo-a6z-37dj-wyhsv-12-10-2026-aa[.]pages[.]dev/"
                ]
            },
            {
                "name": "Vidar",
                "count": 1783,
                "types": [
                    "ssl-cert",
                    "url",
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
                "name": "Spamhaus DROP List",
                "count": 1740,
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
                "count": 1629,
                "types": [
                    "ssl-cert",
                    "ip",
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
                "count": 732,
                "types": [
                    "ssl-cert",
                    "hash"
                ],
                "sampleIndicators": [
                    "898a138ef42c7846cd641bd8406a9ec940991b26113389bbc847648a76cf104c",
                    "0d04a50138c74a1ecfa1a7b4a3afddeb2a4be571",
                    "5c8922ff90e264e8d6c22b3c7d6c1c27d5a62d61"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "CINS Threat List",
        "totalAttacksThisHour": 20087,
        "lastCalculated": "2026-11-28 05:29 IST"
    }
};
