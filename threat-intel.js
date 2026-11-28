// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-11-28T13:04:47.761175+05:30 IST (2026-11-28 07:34 UTC)
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-11-28T13:04:47.118076+05:30",
    "lastUpdatedFormatted": "Nov 28, 2026 at 01:04 PM IST",
    "lastUpdatedUtc": "2026-11-28 07:34 UTC",
    "comparisonPeriod": "Nov 27 \u2013 Nov 28, 2026",
    "stats": {
        "totalIOCs": 109849,
        "byType": {
            "url": 39504,
            "ip": 54417,
            "hash": 641,
            "domain": 2158,
            "ssl-cert": 11391,
            "ip-range": 1738
        },
        "byVendor": {
            "OpenPhish": 3817,
            "Malware Bazaar": 476,
            "Spamhaus DROP": 1738,
            "CINS Army": 39407,
            "Blocklist.de": 12460,
            "URLhaus": 34528,
            "ThreatFox": 6027,
            "Feodo Tracker": 5,
            "SSL Blacklist": 11391
        },
        "topMalware": [
            {
                "name": "Vidar",
                "count": 1787,
                "types": [
                    "domain",
                    "hash",
                    "ssl-cert",
                    "url"
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1629,
                "types": [
                    "ip",
                    "domain",
                    "hash",
                    "ssl-cert"
                ]
            },
            {
                "name": "Cobalt Strike",
                "count": 1183,
                "types": [
                    "ip",
                    "domain",
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
                "count": 732,
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
                "name": "OffLoader",
                "count": 585,
                "types": [
                    "ssl-cert"
                ]
            },
            {
                "name": "ConnectWise",
                "count": 561,
                "types": [
                    "hash",
                    "ssl-cert"
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
                "count": 459,
                "types": [
                    "ip",
                    "ssl-cert"
                ]
            },
            {
                "name": "Malware",
                "count": 446,
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
                "indicator": "c18c0c3de038ac37fee18f385a8396789ffe7867",
                "description": "Malicious SSL certificate - FunStealer C&C",
                "timestamp": "2026-11-13 19:52:03",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-28 13:04 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-28T13:04:44.559575+05:30",
                "campaign": "FunStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "6627379996ae380572b3d2893ff2f2f377def6ec",
                "description": "Malicious SSL certificate - FunStealer C&C",
                "timestamp": "2026-11-13 19:52:01",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-28 13:04 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-28T13:04:44.559575+05:30",
                "campaign": "FunStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "262c1f81aee686adb3f6fc3a17951096265bf1b0",
                "description": "Malicious SSL certificate - FunStealer C&C",
                "timestamp": "2026-11-13 19:50:49",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-28 13:04 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-28T13:04:44.559575+05:30",
                "campaign": "FunStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "9c24fe0ff6b7d2e3cd6fba2446f7ba0e4d18b737",
                "description": "Malicious SSL certificate - FunStealer C&C",
                "timestamp": "2026-11-13 13:26:25",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-28 13:04 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-28T13:04:44.559575+05:30",
                "campaign": "FunStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "0799f487e606540102c11948be32f12439eee1ec",
                "description": "Malicious SSL certificate - FunStealer C&C",
                "timestamp": "2026-11-13 13:26:24",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-28 13:04 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-28T13:04:44.559575+05:30",
                "campaign": "FunStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "9d0751a9eab469ff9a399a086ea2531b3c22dc30",
                "description": "Malicious SSL certificate - OffLoader C&C",
                "timestamp": "2026-11-13 08:31:07",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-28 13:04 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-28T13:04:44.559575+05:30",
                "campaign": "OffLoader",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "955d88cd421ad19859f6015a6ba3ea81e07b510c",
                "description": "Malicious SSL certificate - PureLogsStealer C&C",
                "timestamp": "2026-11-13 08:30:13",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-28 13:04 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-28T13:04:44.559575+05:30",
                "campaign": "PureLogsStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "45972ca5b00612d1f51e51325f7662d60cdd7860",
                "description": "Malicious SSL certificate - WARDENStealer C&C",
                "timestamp": "2026-11-13 08:28:49",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-28 13:04 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-28T13:04:44.559575+05:30",
                "campaign": "WARDENStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "adc24b6b9445798ed026d417fe423b72aa290ebc",
                "description": "Malicious SSL certificate - WARDENStealer C&C",
                "timestamp": "2026-11-13 08:28:46",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-28 13:04 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-28T13:04:44.559575+05:30",
                "campaign": "WARDENStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "041028a7248ce181b5c083d17d31ef9443364b70",
                "description": "Malicious SSL certificate - WARDENStealer C&C",
                "timestamp": "2026-11-13 08:28:43",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-28 13:04 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-28T13:04:44.559575+05:30",
                "campaign": "WARDENStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "0335d3d009c55ea6f49e57aeb54fbdb84e5def8e",
                "description": "Malicious SSL certificate - FunStealer C&C",
                "timestamp": "2026-11-13 08:27:01",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-28 13:04 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-28T13:04:44.559575+05:30",
                "campaign": "FunStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "d313c92a2c0c535a7b60359f758b0032db60b99b",
                "description": "Malicious SSL certificate - FunStealer C&C",
                "timestamp": "2026-11-13 08:27:00",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-28 13:04 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-28T13:04:44.559575+05:30",
                "campaign": "FunStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "187d60de02b8184158547240aec75f31b8e93a27",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-11-13 07:31:05",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-28 13:04 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-28T13:04:44.559575+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "e637e68e3a9cdbe38b1c1c3ca411596797a0fd66",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-11-13 07:29:45",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-28 13:04 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-28T13:04:44.559575+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "07e76b646820ea12065b4aa925d2a7e31f2b0841",
                "description": "Malicious SSL certificate - RevStealer C&C",
                "timestamp": "2026-11-06 10:47:34",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-28 13:04 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-28T13:04:44.559575+05:30",
                "campaign": "RevStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "662893890b7e8b8f238a39783415f9f744e29175",
                "description": "Malicious SSL certificate - RevStealer C&C",
                "timestamp": "2026-11-06 10:46:49",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-28 13:04 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-28T13:04:44.559575+05:30",
                "campaign": "RevStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "0afd01382371c84a699766d7f0b736e9440faee6",
                "description": "Malicious SSL certificate - PureLogsStealer C&C",
                "timestamp": "2026-11-06 10:45:19",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-28 13:04 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-28T13:04:44.559575+05:30",
                "campaign": "PureLogsStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "7b10bb2a42505df013247e7fde6b36f4f60ee924",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-11-06 10:42:29",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-28 13:04 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-28T13:04:44.559575+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "de47608bc00bb94984b4e123585b7e8be37bf8b4",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-11-06 10:42:11",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-28 13:04 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-28T13:04:44.559575+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "043d265d8ee6e5c1c8954108716125c638f33752",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-11-06 07:05:29",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-28 13:04 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-28T13:04:44.559575+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            }
        ],
        "lastUpdated": "2026-11-28T13:04:47.118076+05:30",
        "lastUpdatedFormatted": "Nov 28, 2026 at 01:04 PM IST",
        "lastUpdatedUtc": "2026-11-28 07:34 UTC"
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
                "lastUpdate": "2026-11-28 07:34 UTC",
                "isStale": false,
                "feedStatus": "active"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://f0undersfirm[.]com/home",
                "hxxps://www[.]hadiah-telkomsel95[.]blogspot[.]com/",
                "hxxps://hadiah-telkomsel95[.]blogspot[.]com/",
                "hxxp://hadiah-ke2telkomsel1[.]blogspot[.]com/",
                "hxxp://www[.]hadiah-ke2telkomsel1[.]blogspot[.]com/"
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
                "lastUpdate": "2026-11-28 07:34 UTC",
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
            "iocCount": 1738,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 1738,
                "newInLastHour": 1239,
                "lastUpdate": "2026-11-28 07:34 UTC",
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
            "iocCount": 39407,
            "iocDataUrl": "https://thehgtech.com/ioc-data/cins-army.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 39407,
                "newInLastHour": 15000,
                "lastUpdate": "2026-11-28 07:34 UTC",
                "isStale": false,
                "feedStatus": "active"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]12[.]47[.]107",
                "1[.]13[.]17[.]224",
                "1[.]14[.]110[.]192",
                "1[.]15[.]14[.]29",
                "1[.]168[.]206[.]193"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 12460,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 12460,
                "newInLastHour": 4189,
                "lastUpdate": "2026-11-28 07:34 UTC",
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
                "lastUpdate": "2026-11-28 07:34 UTC",
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
                "lastUpdate": "2026-11-28 07:34 UTC",
                "isStale": true,
                "feedStatus": "stale"
            },
            "types": [
                "ip",
                "domain",
                "hash",
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
                "lastUpdate": "2026-11-28 07:34 UTC",
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
            "iocCount": 11391,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 11391,
                "newInLastHour": 467,
                "lastUpdate": "2026-11-28 07:34 UTC",
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
            "indicator": "c18c0c3de038ac37fee18f385a8396789ffe7867",
            "description": "Malicious SSL certificate - FunStealer C&C",
            "timestamp": "2026-11-13 19:52:03",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
            "campaign": "FunStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "6627379996ae380572b3d2893ff2f2f377def6ec",
            "description": "Malicious SSL certificate - FunStealer C&C",
            "timestamp": "2026-11-13 19:52:01",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
            "campaign": "FunStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "262c1f81aee686adb3f6fc3a17951096265bf1b0",
            "description": "Malicious SSL certificate - FunStealer C&C",
            "timestamp": "2026-11-13 19:50:49",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
            "campaign": "FunStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "9c24fe0ff6b7d2e3cd6fba2446f7ba0e4d18b737",
            "description": "Malicious SSL certificate - FunStealer C&C",
            "timestamp": "2026-11-13 13:26:25",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
            "campaign": "FunStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "0799f487e606540102c11948be32f12439eee1ec",
            "description": "Malicious SSL certificate - FunStealer C&C",
            "timestamp": "2026-11-13 13:26:24",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
            "campaign": "FunStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "9d0751a9eab469ff9a399a086ea2531b3c22dc30",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-11-13 08:31:07",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "955d88cd421ad19859f6015a6ba3ea81e07b510c",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-11-13 08:30:13",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "45972ca5b00612d1f51e51325f7662d60cdd7860",
            "description": "Malicious SSL certificate - WARDENStealer C&C",
            "timestamp": "2026-11-13 08:28:49",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
            "campaign": "WARDENStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "adc24b6b9445798ed026d417fe423b72aa290ebc",
            "description": "Malicious SSL certificate - WARDENStealer C&C",
            "timestamp": "2026-11-13 08:28:46",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
            "campaign": "WARDENStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "041028a7248ce181b5c083d17d31ef9443364b70",
            "description": "Malicious SSL certificate - WARDENStealer C&C",
            "timestamp": "2026-11-13 08:28:43",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
            "campaign": "WARDENStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "0335d3d009c55ea6f49e57aeb54fbdb84e5def8e",
            "description": "Malicious SSL certificate - FunStealer C&C",
            "timestamp": "2026-11-13 08:27:01",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
            "campaign": "FunStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "d313c92a2c0c535a7b60359f758b0032db60b99b",
            "description": "Malicious SSL certificate - FunStealer C&C",
            "timestamp": "2026-11-13 08:27:00",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
            "campaign": "FunStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "187d60de02b8184158547240aec75f31b8e93a27",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-11-13 07:31:05",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "e637e68e3a9cdbe38b1c1c3ca411596797a0fd66",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-11-13 07:29:45",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "07e76b646820ea12065b4aa925d2a7e31f2b0841",
            "description": "Malicious SSL certificate - RevStealer C&C",
            "timestamp": "2026-11-06 10:47:34",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
            "campaign": "RevStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "662893890b7e8b8f238a39783415f9f744e29175",
            "description": "Malicious SSL certificate - RevStealer C&C",
            "timestamp": "2026-11-06 10:46:49",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
            "campaign": "RevStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "0afd01382371c84a699766d7f0b736e9440faee6",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-11-06 10:45:19",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "7b10bb2a42505df013247e7fde6b36f4f60ee924",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-11-06 10:42:29",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "de47608bc00bb94984b4e123585b7e8be37bf8b4",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-11-06 10:42:11",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "043d265d8ee6e5c1c8954108716125c638f33752",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-11-06 07:05:29",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "063a72d2da624ba373a1afe5323a674af705bd02",
            "description": "Malicious SSL certificate - RevStealer C&C",
            "timestamp": "2026-11-06 06:47:58",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
            "campaign": "RevStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "e3d64b032db0b875f594b12eb9ad7a624e768383",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-11-06 06:41:47",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "8bc6b066cdd4399e5217c58236bb0f32971a4d49",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-10-29 15:13:09",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
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
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
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
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
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
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
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
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "32facbb63422b11875f949b45ceb306e4673a3b7",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-10-28 16:05:31",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "db1370abc2fbcfc4d9dc332b56f0d2e91deb9d23",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-10-28 09:25:25",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "840910d1faf7f934326f08cd5424862ca50646d5",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-10-28 09:25:17",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "b843ff0bf989bbda8086054a9d9ce65e885e4845",
            "description": "Malicious SSL certificate - RevStealer C&C",
            "timestamp": "2026-10-28 09:00:00",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
            "campaign": "RevStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "62ddff80b88f12d3ca6ba44eb09b5e7ba9e2f390",
            "description": "Malicious SSL certificate - RevStealer C&C",
            "timestamp": "2026-10-28 08:59:01",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
            "campaign": "RevStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "4623e7174a6917c16402029733c2aaa14d2f83dd",
            "description": "Malicious SSL certificate - RevStealer C&C",
            "timestamp": "2026-10-28 08:55:17",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
            "campaign": "RevStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "3a2dc08faa4e47e147c1293b240d7502efa7db48",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-28 08:51:12",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "be3eba6ce90c5d19ee1e986170e96323108d092d",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-28 08:50:53",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "2444b1d1f72da59dc3bcc0191170509822344090",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-28 08:50:11",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "875a92bb886a52699413fb2e4370adc03c1eda37",
            "description": "Malicious SSL certificate - QuasarRAT C&C",
            "timestamp": "2026-10-28 08:49:10",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
            "campaign": "QuasarRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "79928c5b3aaa3ea9d05750ba6b2af2aa6cbea154",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-10-22 06:54:29",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
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
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
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
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
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
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
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
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
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
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
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
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
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
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
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
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
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
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
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
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
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
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
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
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
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
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
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
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
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
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
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
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
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
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
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
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
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
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
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
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
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
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
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
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
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
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
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
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
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
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
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
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
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
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
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
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
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
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
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
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
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
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
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
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
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
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
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
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
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
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
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
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
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
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
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
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
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
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
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
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
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
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
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
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
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
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
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
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
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
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
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
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
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
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
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
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
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
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
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
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "a2e76af14703e85cc8a27f108e0ee93ce2d9afb4",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-09-29 08:26:19",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "c234496c7b0abcd873bb6bb5a54288b6d340b6ff",
            "description": "Malicious SSL certificate - QuasarRAT C&C",
            "timestamp": "2026-09-29 08:13:53",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
            "campaign": "QuasarRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "6aa91683111e7ecf0bc61912fecc00b294754b4e",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-09-29 08:13:12",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "51616539837604afac222acc6e7a1cd2933f9b38",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-09-29 08:07:50",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "557d7dfc6cc7127dfa30f7b31aa6462b21017d0a",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-09-29 07:56:03",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "7cbe2790fbebfc1e6cd0d4a1ec6e75562c96328d",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-09-29 07:53:57",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "89fd8b9884e947aeeed70793c9eed1e42248bf0f",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-09-29 07:23:00",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "205d49b6c7313e16e931e1b5873cc20be0dee85b",
            "description": "Malicious SSL certificate - AsyncRAT C&C",
            "timestamp": "2026-09-29 07:22:26",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
            "campaign": "AsyncRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "8c2815dd9c294efb082c90739f0ede4823a4724d",
            "description": "Malicious SSL certificate - OrcusRAT C&C",
            "timestamp": "2026-09-29 07:22:05",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
            "campaign": "OrcusRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "94c4ec66b6f57c29ac935890d7796decea67af37",
            "description": "Malicious SSL certificate - AsyncRAT C&C",
            "timestamp": "2026-09-29 07:21:07",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
            "campaign": "AsyncRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "38cc7377529ac88a847e31466948df2de25008f4",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-09-29 07:20:53",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "81c9eddccea61f8fa9788208189d79b82e3443a4",
            "description": "Malicious SSL certificate - AsyncRAT C&C",
            "timestamp": "2026-09-29 07:20:46",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 13:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T13:04:44.559575+05:30",
            "campaign": "AsyncRAT",
            "confidence": "High"
        }
    ],
    "dailySummary": {
        "stats": {
            "totalIndicators": 109849,
            "activeSources": 9,
            "criticalAlerts": 46986,
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
                "count": 11636,
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
                "count": 39407,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]12[.]47[.]107",
                    "1[.]13[.]17[.]224",
                    "1[.]14[.]110[.]192"
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
                "count": 12460,
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
                "count": 3797,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://f0undersfirm[.]com/home",
                    "hxxps://www[.]hadiah-telkomsel95[.]blogspot[.]com/",
                    "hxxps://hadiah-telkomsel95[.]blogspot[.]com/"
                ]
            },
            {
                "name": "Vidar",
                "count": 1787,
                "types": [
                    "domain",
                    "hash",
                    "ssl-cert",
                    "url"
                ],
                "sampleIndicators": [
                    "963c8d952db068f9cd6b76e2313e69296ca6124f57755eeaa8c008ee05d349be",
                    "99b335ac5caf5249edc3223b100517d72f4fec0c6012955e3efc8d56c96880ef",
                    "6f38c0aedf5d1163cca3bf5721acb71cb54bf387a69827c8ccdc59064a19d6ed"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1738,
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
                    "ip",
                    "domain",
                    "hash",
                    "ssl-cert"
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
                    "domain",
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
                "count": 732,
                "types": [
                    "hash",
                    "ssl-cert"
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
        "fastestRisingThreat": "Spamhaus DROP List",
        "totalAttacksThisHour": 21200,
        "lastCalculated": "2026-11-28 13:04 IST"
    }
};
