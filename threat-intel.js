// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-30T20:29:48.510343+05:30 IST (2026-10-30 14:59 UTC)
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-30T20:29:47.939835+05:30",
    "lastUpdatedFormatted": "Oct 30, 2026 at 08:29 PM IST",
    "lastUpdatedUtc": "2026-10-30 14:59 UTC",
    "comparisonPeriod": "Oct 29 \u2013 Oct 30, 2026",
    "stats": {
        "totalIOCs": 103895,
        "byType": {
            "url": 38816,
            "ip": 49707,
            "hash": 641,
            "domain": 2158,
            "ssl-cert": 10818,
            "ip-range": 1755
        },
        "byVendor": {
            "OpenPhish": 3129,
            "Malware Bazaar": 476,
            "Spamhaus DROP": 1755,
            "CINS Army": 36619,
            "Blocklist.de": 10538,
            "URLhaus": 34528,
            "ThreatFox": 6027,
            "Feodo Tracker": 5,
            "SSL Blacklist": 10818
        },
        "topMalware": [
            {
                "name": "Vidar",
                "count": 1624,
                "types": [
                    "hash",
                    "ssl-cert",
                    "domain",
                    "url"
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1614,
                "types": [
                    "hash",
                    "ssl-cert",
                    "ip",
                    "domain"
                ]
            },
            {
                "name": "Cobalt Strike",
                "count": 1183,
                "types": [
                    "hash",
                    "domain",
                    "ip"
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
                "count": 713,
                "types": [
                    "hash",
                    "ssl-cert"
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
                "count": 555,
                "types": [
                    "ssl-cert"
                ]
            },
            {
                "name": "ConnectWise",
                "count": 524,
                "types": [
                    "hash",
                    "ssl-cert"
                ]
            },
            {
                "name": "OffLoader",
                "count": 522,
                "types": [
                    "ssl-cert"
                ]
            },
            {
                "name": "PureRAT",
                "count": 428,
                "types": [
                    "ssl-cert",
                    "ip"
                ]
            },
            {
                "name": "Malware",
                "count": 408,
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
                "name": "Gozi",
                "count": 349,
                "types": [
                    "ssl-cert"
                ]
            },
            {
                "name": "DCRat",
                "count": 348,
                "types": [
                    "ssl-cert",
                    "ip"
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
                "indicator": "8bc6b066cdd4399e5217c58236bb0f32971a4d49",
                "description": "Malicious SSL certificate - OffLoader C&C",
                "timestamp": "2026-10-29 15:13:09",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-30 11:05 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-30T11:05:16.576931+05:30",
                "campaign": "OffLoader",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "a3e3e53c9b5eb4d1d1197181c599f07ca61b3c9e",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-10-29 14:49:27",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-30 11:05 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-30T11:05:16.576931+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "d7d1025725506635e295b7a5eb61c2162f2a1f93",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-10-29 14:49:18",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-30 11:05 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-30T11:05:16.576931+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "88dfcb0baeaaec06b4973eeb6b8bf76e7ff16315",
                "description": "Malicious SSL certificate - ConnectWise C&C",
                "timestamp": "2026-10-29 09:44:22",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-30 11:05 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-30T11:05:16.576931+05:30",
                "campaign": "ConnectWise",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "8439a45334bfd81293cf20abb44f3e20843131db",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-10-29 06:58:49",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-30 11:05 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-30T11:05:16.576931+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "79928c5b3aaa3ea9d05750ba6b2af2aa6cbea154",
                "description": "Malicious SSL certificate - PureRAT C&C",
                "timestamp": "2026-10-22 06:54:29",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-30 11:05 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-30T11:05:16.576931+05:30",
                "campaign": "PureRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "7a5cbff9325f0ca3de3f020b3ba02e51390807cf",
                "description": "Malicious SSL certificate - Malware C&C",
                "timestamp": "2026-10-22 04:23:04",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-30 11:05 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-30T11:05:16.576931+05:30",
                "campaign": "Malware",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "7ed29169b508169575d0d26850aca8a93044067c",
                "description": "Malicious SSL certificate - QuasarRAT C&C",
                "timestamp": "2026-10-22 04:17:21",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-30 11:05 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-30T11:05:16.576931+05:30",
                "campaign": "QuasarRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "082cdbff4a21322dcf87bbc200976465f072ae6e",
                "description": "Malicious SSL certificate - QuasarRAT C&C",
                "timestamp": "2026-10-22 04:05:14",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-30 11:05 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-30T11:05:16.576931+05:30",
                "campaign": "QuasarRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "a546ecee7425b15ec2b0b63cd012b897d627cdc9",
                "description": "Malicious SSL certificate - ConnectWise C&C",
                "timestamp": "2026-10-22 04:04:56",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-30 11:05 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-30T11:05:16.576931+05:30",
                "campaign": "ConnectWise",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "815ef869856dfa28c55e7c5e07f1d0cce6a4e426",
                "description": "Malicious SSL certificate - ConnectWise C&C",
                "timestamp": "2026-10-22 04:04:27",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-30 11:05 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-30T11:05:16.576931+05:30",
                "campaign": "ConnectWise",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "9eabf92b1ca6728e2a32c3a090b11c177ac686c3",
                "description": "Malicious SSL certificate - ConnectWise C&C",
                "timestamp": "2026-10-22 04:03:59",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-30 11:05 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-30T11:05:16.576931+05:30",
                "campaign": "ConnectWise",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "ad4757ff933072cc46f34e8c2935df4a2835905f",
                "description": "Malicious SSL certificate - OffLoader C&C",
                "timestamp": "2026-10-22 04:03:38",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-30 11:05 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-30T11:05:16.576931+05:30",
                "campaign": "OffLoader",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "be6dd6d95188274b338310b78e2bc1315a90f64f",
                "description": "Malicious SSL certificate - PureLogsStealer C&C",
                "timestamp": "2026-10-22 04:02:41",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-30 11:05 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-30T11:05:16.576931+05:30",
                "campaign": "PureLogsStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "c5dac4c5a4feb2fec8886ae4e28e8c9bb87b19e9",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-10-22 03:53:27",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-30 11:05 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-30T11:05:16.576931+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "e4c69c59c688b6b22688718fd601e7a3bc6e2c8a",
                "description": "Malicious SSL certificate - OffLoader C&C",
                "timestamp": "2026-10-21 15:55:24",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-30 11:05 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-30T11:05:16.576931+05:30",
                "campaign": "OffLoader",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "c2cc28a75ec95c7f4109d6af0e02b9c1273fb774",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-10-21 11:43:21",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-30 11:05 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-30T11:05:16.576931+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "ee44c0aa609918ca30691fe0f49b87945d450bcd",
                "description": "Malicious SSL certificate - Malware C&C",
                "timestamp": "2026-10-21 09:43:46",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-30 11:05 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-30T11:05:16.576931+05:30",
                "campaign": "Malware",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "3f00a128af6109bb4ba928f2a73caeb1820f561d",
                "description": "Malicious SSL certificate - Malware C&C",
                "timestamp": "2026-10-21 09:43:11",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-30 11:05 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-30T11:05:16.576931+05:30",
                "campaign": "Malware",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "e86dd566921f2733639879ecd1a3be715644cec6",
                "description": "Malicious SSL certificate - PureLogsStealer C&C",
                "timestamp": "2026-10-21 09:42:36",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-30 11:05 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-30T11:05:16.576931+05:30",
                "campaign": "PureLogsStealer",
                "confidence": "High"
            }
        ],
        "lastUpdated": "2026-10-30T20:29:47.939835+05:30",
        "lastUpdatedFormatted": "Oct 30, 2026 at 08:29 PM IST",
        "lastUpdatedUtc": "2026-10-30 14:59 UTC"
    },
    "vendors": {
        "OpenPhish": {
            "description": "Real-time phishing URL feed updated every 15 minutes. Tracks active phishing sites targeting major brands and financial institutions.",
            "website": "https://openphish.com/",
            "updateFrequency": "Every 15 minutes",
            "iocCount": 3429,
            "iocDataUrl": "https://thehgtech.com/ioc-data/openphish.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 3429,
                "newInLastHour": 300,
                "lastUpdate": "2026-10-30 14:59 UTC",
                "isStale": false,
                "feedStatus": "active"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://imediachile[.]cl/secupdf/10625[.]html",
                "hxxp://hse-review[.]top/",
                "hxxps://phantom-app-4eu8[.]vercel[.]app/",
                "hxxps://doc--exxodus--web3[.]pages[.]dev/",
                "hxxp://decen-tralises-exxod[.]pages[.]dev/"
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
                "lastUpdate": "2026-10-30 14:59 UTC",
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
                "newInLastHour": 2,
                "lastUpdate": "2026-10-30 14:59 UTC",
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
            "iocCount": 37041,
            "iocDataUrl": "https://thehgtech.com/ioc-data/cins-army.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 37041,
                "newInLastHour": 15000,
                "lastUpdate": "2026-10-30 14:59 UTC",
                "isStale": false,
                "feedStatus": "active"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]12[.]229[.]231",
                "1[.]15[.]14[.]29",
                "1[.]179[.]240[.]27",
                "1[.]193[.]57[.]144",
                "1[.]193[.]63[.]52"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 10606,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 10606,
                "newInLastHour": 4850,
                "lastUpdate": "2026-10-30 14:59 UTC",
                "isStale": false,
                "feedStatus": "active"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]15[.]221[.]192",
                "1[.]15[.]42[.]91",
                "1[.]214[.]214[.]114",
                "1[.]222[.]42[.]237",
                "1[.]222[.]57[.]68"
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
                "lastUpdate": "2026-10-30 14:59 UTC",
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
                "lastUpdate": "2026-10-30 14:59 UTC",
                "isStale": true,
                "feedStatus": "stale"
            },
            "types": [
                "hash",
                "ip",
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
                "lastUpdate": "2026-10-30 14:59 UTC",
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
            "iocCount": 11088,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 11088,
                "newInLastHour": 279,
                "lastUpdate": "2026-10-30 14:59 UTC",
                "isStale": false,
                "feedStatus": "active"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "c81dfb846d72043d82cfedada7b5fbc3f1ed956d",
                "de045f977bb3fcb870a7c70433ec3c4055b4df56",
                "794a98bb8dfb1c8707541d2f1136fc7c1faa123f",
                "aebfe1d6a7db6458477771a467698c52ec1cd181",
                "b8b817853b031f3c2ef9ff332422a2f75cdafb14"
            ]
        }
    },
    "overview": [
        {
            "type": "ssl-cert",
            "indicator": "8bc6b066cdd4399e5217c58236bb0f32971a4d49",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-10-29 15:13:09",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "a3e3e53c9b5eb4d1d1197181c599f07ca61b3c9e",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-29 14:49:27",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "d7d1025725506635e295b7a5eb61c2162f2a1f93",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-29 14:49:18",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "88dfcb0baeaaec06b4973eeb6b8bf76e7ff16315",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-10-29 09:44:22",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "8439a45334bfd81293cf20abb44f3e20843131db",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-29 06:58:49",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "79928c5b3aaa3ea9d05750ba6b2af2aa6cbea154",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-10-22 06:54:29",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "7a5cbff9325f0ca3de3f020b3ba02e51390807cf",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-10-22 04:23:04",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "7ed29169b508169575d0d26850aca8a93044067c",
            "description": "Malicious SSL certificate - QuasarRAT C&C",
            "timestamp": "2026-10-22 04:17:21",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "QuasarRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "082cdbff4a21322dcf87bbc200976465f072ae6e",
            "description": "Malicious SSL certificate - QuasarRAT C&C",
            "timestamp": "2026-10-22 04:05:14",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "QuasarRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "a546ecee7425b15ec2b0b63cd012b897d627cdc9",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-10-22 04:04:56",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "815ef869856dfa28c55e7c5e07f1d0cce6a4e426",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-10-22 04:04:27",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "9eabf92b1ca6728e2a32c3a090b11c177ac686c3",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-10-22 04:03:59",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "ad4757ff933072cc46f34e8c2935df4a2835905f",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-10-22 04:03:38",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "be6dd6d95188274b338310b78e2bc1315a90f64f",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-10-22 04:02:41",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "c5dac4c5a4feb2fec8886ae4e28e8c9bb87b19e9",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-22 03:53:27",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "e4c69c59c688b6b22688718fd601e7a3bc6e2c8a",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-10-21 15:55:24",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "c2cc28a75ec95c7f4109d6af0e02b9c1273fb774",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-21 11:43:21",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "ee44c0aa609918ca30691fe0f49b87945d450bcd",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-10-21 09:43:46",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "3f00a128af6109bb4ba928f2a73caeb1820f561d",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-10-21 09:43:11",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "e86dd566921f2733639879ecd1a3be715644cec6",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-10-21 09:42:36",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "5c5c6ce618ac3209dcb239bafd6151d86ca490b4",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-10-21 09:34:40",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "107c3b396e9e46f137c02484e2fdcf9b59d99daa",
            "description": "Malicious SSL certificate - QuasarRAT C&C",
            "timestamp": "2026-10-21 08:51:41",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "QuasarRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "498a4921e2950bf327566b8bc94ebe88188ba48e",
            "description": "Malicious SSL certificate - Meterpreter C&C",
            "timestamp": "2026-10-21 07:24:45",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "Meterpreter",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "c0af8a04dbfca38a9c436cac6afe37edf603a2a8",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-10-21 07:22:34",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "891676e8c7f77b79942835d2079e1ea1bcb6a7ae",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-10-21 07:21:19",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "4c39539092e64bddb231466dd8cce629b0ab53fc",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-21 07:19:03",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "f142b6f4bf3a29d39c2491bdca1e7f7bf5a06d1b",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-21 06:40:04",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "700d7a5261f2ea5f9f4777e37cf2cb68518ae919",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-21 06:39:43",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "1c7f33ad355642475fd0ce679cd224ea3b2709ab",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-21 06:38:59",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "09545cca9c36c76f4982c4b648041a1606799b53",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-14 05:49:58",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "d333c0b7e380afd2f156555b8110c00177b62e5d",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-14 05:48:36",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "001a8f07b150e2b1d6bcb715fd95c20a1e24dac3",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-10-07 17:56:41",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "97b346a6656f38507fae979537c0baa86186a2d7",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-10-07 17:55:17",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "a095f06a7ac8b272c1dd2e14e3b2508f4e4f86e3",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-10-07 16:43:40",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "59478ff95804dce8ca9ac41fab9bee313879a882",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-10-07 16:43:30",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "0f7363fdd9210d5cdcc0c7fa60a88b4a582fef18",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-07 16:43:11",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "01ab8270fefc7b3582d27bafa2283b049ce624eb",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-10-07 16:42:25",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "f8bfca2b3881d0e18e08e3f486124236f55235bc",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-10-07 16:41:52",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "a911c93bcdc127abcc602c9ec97da3ecf425b045",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-10-07 16:40:59",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "d04d7126cb34075240b0bfea2b26b345254b189f",
            "description": "Malicious SSL certificate - ValetiStealer C&C",
            "timestamp": "2026-10-07 15:04:12",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "ValetiStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "e7fdd28d07b292696f1dc9fbca92364ccdcdf174",
            "description": "Malicious SSL certificate - ValetiStealer C&C",
            "timestamp": "2026-10-07 14:48:04",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "ValetiStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "51d76247414a9049df5a415d7f14815346bc92ed",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-10-07 14:35:29",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "6bfc8dafb875c3e2ae6476df215805eb15298cbb",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-07 07:17:48",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "d1f8cdf29e82994d89dfda8a9dcb541be63e83b3",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-09-30 15:34:39",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "c38737bf4c111f6be0d2f75ab9dc922cd8d5c7e3",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-09-30 15:27:36",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "843de70648251c376b18fe872f7b5f4517a0e940",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-09-30 15:26:45",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "5fe196813d0bf092a5d8f3ef550fe959a86ccf87",
            "description": "Malicious SSL certificate - AsyncRAT C&C",
            "timestamp": "2026-09-30 08:24:38",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "AsyncRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "bfe74bc4c5528d9ea8172159d9f77822251ff841",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-09-30 08:10:08",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "1779ccab363236a86e64a2a71f0d2daa44d2351a",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-09-30 07:57:09",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "8a7391f717ea7997c5196091415a9d52e726ddf2",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-09-30 07:56:50",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "bf9e6b1b3169fd64cc1fc836b4307a2c629b46b0",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-09-30 07:56:28",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "c55d2f821936f94e10034b9d5bd8ad5dee234264",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-09-30 07:56:18",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "107432baee23d80d32a4d6fe5d6a43d011114239",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-09-30 05:51:19",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "5b60c9c03e269395e5900a70dc9121c44164a271",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-09-29 14:04:22",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "5cf0d65dab7decdfdf1ae7d08e3d1a3696eee2b3",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-09-29 14:03:51",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "317bcdde2a44975381c24cb95bfcc5c3132e64c5",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-09-29 12:50:07",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "82ad60b5fe3e77f88effbb586db3795a41e5f60b",
            "description": "Malicious SSL certificate - QuasarRAT C&C",
            "timestamp": "2026-09-23 09:49:42",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "QuasarRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "95688000a5176c85f77eb00ba69faef202ae6c24",
            "description": "Malicious SSL certificate - SeroRAT C&C",
            "timestamp": "2026-09-23 09:29:41",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "SeroRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "2c718d1d6454ad663cf963baecf3a1c81495716a",
            "description": "Malicious SSL certificate - SeroRAT C&C",
            "timestamp": "2026-09-23 09:29:37",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "SeroRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "5f1f3725db5f77872c27b2d4b1a6c8c32e4ee257",
            "description": "Malicious SSL certificate - SeroRAT C&C",
            "timestamp": "2026-09-23 09:28:53",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "SeroRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "b29e88da94c7ec5eac25efc49b444efcfb61b7de",
            "description": "Malicious SSL certificate - SeroRAT C&C",
            "timestamp": "2026-09-23 09:26:41",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "SeroRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "9c041662f67bfc6c80fb45353b0d8689858eac3c",
            "description": "Malicious SSL certificate - SeroRAT C&C",
            "timestamp": "2026-09-23 09:26:14",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "SeroRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "2d55d1a98da553c64dca5168488b90de1ac2b6dc",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-09-23 09:10:45",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "35a0137a8428cd4eed7271f69f576e22389c2718",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-09-23 08:37:34",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "8ebcb44e692f32d2a4894ada4a06079a48bdf1a6",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-09-23 08:02:55",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "0217bf61b7498d77ca6ba321aefd3cd7b47310c0",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-09-23 08:01:54",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "cb7fcaede3c6bb75e73ee72b8de7c23de2953dd4",
            "description": "Malicious SSL certificate - AsyncRAT C&C",
            "timestamp": "2026-09-23 08:00:33",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "AsyncRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "e368d5f28111dd2b577e949c59b254f7de1dae2b",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-09-23 07:59:52",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "990472ad57a4d7dcb13689a21b0c84252f5cf0a5",
            "description": "Malicious SSL certificate - AsyncRAT C&C",
            "timestamp": "2026-09-23 07:58:14",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "AsyncRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "ca37313c6e61b15e4027fe2609233851a70e572e",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-09-23 07:57:26",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "b85ab05112c6848ccf2dd6889903e1268cdc6a75",
            "description": "Malicious SSL certificate - QuasarRAT C&C",
            "timestamp": "2026-09-23 07:57:15",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "QuasarRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "2e57d619d591a232e8f11d850822531b3bda29a4",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-09-22 17:54:51",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "e5c15371e2640fdbbed13f9a3d4128f84fe32c9b",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-09-22 17:54:49",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "deb92b7c7be8b03d76c63ea02419b82e6e573f97",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-09-22 17:53:35",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "0f3b052836a1071f9f929ad3516358185d5e078e",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-09-22 17:50:59",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "a88b5b3ce1ac1236c2739396319f187df0f601f3",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-09-22 14:54:39",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "988b6a8c9ba5ac709116cdd1950189d031d508a6",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-09-22 14:44:46",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "4eff1368d9a8d33c6d638153e20b4a5ee7e541a7",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-09-22 14:44:20",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "ac6a2ca4f02ca05caa9149b46edb37fc84344d37",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-09-22 14:41:10",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "a9952734015af670f5fc0a62357e4cf5b16ac0ce",
            "description": "Malicious SSL certificate - SeroRAT C&C",
            "timestamp": "2026-09-22 14:38:09",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "SeroRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "7e5a601afffb3c09f07faa53d0aa0e138444f02a",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-09-22 08:37:04",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "a7a833e979de1f4883108c9756fac1100dcc6fd8",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-09-22 08:36:21",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "cf52101dfe4779d6d145fe111b5bd69043c0a667",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-09-22 05:47:00",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "1e5bfc073ee72f5ae99507c87f2479ec1d5f43b7",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-09-15 15:50:09",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "c3e6df2402e57af3e0b7c66f8282efec4a387ac6",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-09-15 15:49:43",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "ba3714d484afb75fd03911c59aa096cee9595955",
            "description": "Malicious SSL certificate - QuasarRAT C&C",
            "timestamp": "2026-09-15 15:48:52",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "QuasarRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "90bbe9f7eacacb9bff89bbe1345a2cb4a30d2eed",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-09-15 15:36:15",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "46b898af8e29cb2fe186de2bfdf60bc01d617720",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-09-15 12:49:05",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "1ea9baef6f12a280c50e7f473298f326272516d4",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-09-15 12:48:25",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "cb4e3c26f38c41dee4cbb27b77f46221e71821d1",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-09-15 12:47:20",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "f166dfb0e185cab2e7bfdfff50edc67f238195c3",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-09-15 12:47:08",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "7841dc140c85781e29108109b73ab67c276a8eed",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-09-15 12:45:47",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "f4bcfdf7f5ae1e7732a26da5135223f3ef8ebcde",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-09-15 10:52:04",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "9959475fe7721d2c7ebb55e3d5b61ca1c79939f0",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-09-15 10:52:03",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "8f57a784420cc1f07ffc8b9e462edf468963834e",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-09-15 10:51:21",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "44c6dc94a23e05350af1ff687fef8b78cb089b8b",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-09-08 07:57:36",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "32c779b627c28c168bcf744948c35f45462e9307",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-09-08 07:48:16",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "cb2d6049ca9e2a20d92f8ee6ae28060d9d460b85",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-09-08 07:47:43",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "bd12ed0d3f8dac14cb7de27202b10331831dc8c7",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-09-08 07:46:44",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "4c12b6aa784f92a3c50fb7d99289ca32fe21ad4c",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-09-08 07:45:48",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 11:05 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T11:05:16.576931+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        }
    ],
    "dailySummary": {
        "stats": {
            "totalIndicators": 103895,
            "activeSources": 9,
            "criticalAlerts": 46413,
            "activeCampaigns": 216
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
                "count": 11063,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "Botnet",
                "count": 4297,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Phishing",
                "count": 3132,
                "trend": "stable",
                "percentage": -8
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
                "count": 36619,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]15[.]14[.]29",
                    "1[.]193[.]63[.]52",
                    "1[.]215[.]138[.]43"
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
                "count": 10538,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]14[.]240[.]247",
                    "1[.]15[.]106[.]134",
                    "1[.]15[.]221[.]192"
                ]
            },
            {
                "name": "Generic Phishing",
                "count": 3106,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://mu[.]qmmafe[.]com/",
                    "hxxp://www[.]viewdetail2910tbnaplnw[.]usnicvrfauthenservices[.]com/public/index?ref=business-support-center-DASDFDSYUYEE43FJDSHFSDFsetting%25popup%3fclient_id=889943718806-ual26tplnot2ea8b7n5t4p77keo8eb",
                    "hxxp://www[.]viewdetail2910tbnaplnw[.]usnicvrfauthenservices[.]com/"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1755,
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
                "count": 1624,
                "types": [
                    "hash",
                    "ssl-cert",
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
                "count": 1614,
                "types": [
                    "hash",
                    "ssl-cert",
                    "ip",
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
                    "hash",
                    "domain",
                    "ip"
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
                "count": 713,
                "types": [
                    "hash",
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "898a138ef42c7846cd641bd8406a9ec940991b26113389bbc847648a76cf104c",
                    "875a92bb886a52699413fb2e4370adc03c1eda37",
                    "bd8eb13b5f944ac4c4a03a22d8c1b574bd02ee4f"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "CINS Threat List",
        "totalAttacksThisHour": 20436,
        "lastCalculated": "2026-10-30 20:29 IST"
    }
};
