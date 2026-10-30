// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-31T02:11:28.919442+05:30 IST (2026-10-30 20:41 UTC)
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-31T02:11:28.354528+05:30",
    "lastUpdatedFormatted": "Oct 31, 2026 at 02:11 AM IST",
    "lastUpdatedUtc": "2026-10-30 20:41 UTC",
    "comparisonPeriod": "Oct 30 \u2013 Oct 31, 2026",
    "stats": {
        "totalIOCs": 104956,
        "byType": {
            "url": 39116,
            "ip": 50197,
            "hash": 641,
            "domain": 2158,
            "ssl-cert": 11088,
            "ip-range": 1756
        },
        "byVendor": {
            "OpenPhish": 3429,
            "Malware Bazaar": 476,
            "Spamhaus DROP": 1756,
            "CINS Army": 37041,
            "Blocklist.de": 10606,
            "URLhaus": 34528,
            "ThreatFox": 6027,
            "Feodo Tracker": 5,
            "SSL Blacklist": 11088
        },
        "topMalware": [
            {
                "name": "Vidar",
                "count": 1694,
                "types": [
                    "domain",
                    "hash",
                    "url",
                    "ssl-cert"
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1628,
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
                "count": 728,
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
                "name": "ConnectWise",
                "count": 559,
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
                "name": "OffLoader",
                "count": 557,
                "types": [
                    "ssl-cert"
                ]
            },
            {
                "name": "PureRAT",
                "count": 441,
                "types": [
                    "ip",
                    "ssl-cert"
                ]
            },
            {
                "name": "Malware",
                "count": 421,
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
                "indicator": "c81dfb846d72043d82cfedada7b5fbc3f1ed956d",
                "description": "Malicious SSL certificate - AsyncRAT C&C",
                "timestamp": "2026-10-30 07:11:53",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-30 20:29 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-30T20:29:45.618143+05:30",
                "campaign": "AsyncRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "de045f977bb3fcb870a7c70433ec3c4055b4df56",
                "description": "Malicious SSL certificate - AokigaharaStealer C&C",
                "timestamp": "2026-10-30 07:06:01",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-30 20:29 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-30T20:29:45.618143+05:30",
                "campaign": "AokigaharaStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "794a98bb8dfb1c8707541d2f1136fc7c1faa123f",
                "description": "Malicious SSL certificate - Malware C&C",
                "timestamp": "2026-10-30 06:51:16",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-30 20:29 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-30T20:29:45.618143+05:30",
                "campaign": "Malware",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "aebfe1d6a7db6458477771a467698c52ec1cd181",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-10-30 06:47:55",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-30 20:29 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-30T20:29:45.618143+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "b8b817853b031f3c2ef9ff332422a2f75cdafb14",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-10-30 06:47:42",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-30 20:29 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-30T20:29:45.618143+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "6355bba335e57be21b44a9ed609f549cb1384167",
                "description": "Malicious SSL certificate - OverlordRAT C&C",
                "timestamp": "2026-10-08 19:25:07",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-30 20:29 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-30T20:29:45.618143+05:30",
                "campaign": "OverlordRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "09a025b75e698c89b1731847a757ccbc00244f42",
                "description": "Malicious SSL certificate - OffLoader C&C",
                "timestamp": "2026-10-08 18:36:35",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-30 20:29 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-30T20:29:45.618143+05:30",
                "campaign": "OffLoader",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "678674d7911f8cbb945607e91f8f05e7353be1d2",
                "description": "Malicious SSL certificate - OffLoader C&C",
                "timestamp": "2026-10-08 18:36:26",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-30 20:29 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-30T20:29:45.618143+05:30",
                "campaign": "OffLoader",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "7145cd3c537c8b6f07d27038330303754fd086cd",
                "description": "Malicious SSL certificate - OffLoader C&C",
                "timestamp": "2026-10-08 18:10:23",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-30 20:29 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-30T20:29:45.618143+05:30",
                "campaign": "OffLoader",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "1ccf99a4deb337e800230280e82782da64384694",
                "description": "Malicious SSL certificate - Malware C&C",
                "timestamp": "2026-10-08 14:34:06",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-30 20:29 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-30T20:29:45.618143+05:30",
                "campaign": "Malware",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "0916fba7d3ffe7cf2d7f6803f098cdc96077a842",
                "description": "Malicious SSL certificate - OffLoader C&C",
                "timestamp": "2026-10-08 09:02:37",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-30 20:29 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-30T20:29:45.618143+05:30",
                "campaign": "OffLoader",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "d2bf0b9b894431307b05b47812645ef42cf169e6",
                "description": "Malicious SSL certificate - ConnectWise C&C",
                "timestamp": "2026-10-01 14:33:24",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-30 20:29 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-30T20:29:45.618143+05:30",
                "campaign": "ConnectWise",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "b4d984de5a6fad2a262360fede253124b6d08b41",
                "description": "Malicious SSL certificate - ConnectWise C&C",
                "timestamp": "2026-10-01 14:25:32",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-30 20:29 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-30T20:29:45.618143+05:30",
                "campaign": "ConnectWise",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "fae032e423544ab9e33d6e656d1a239e74b04637",
                "description": "Malicious SSL certificate - ConnectWise C&C",
                "timestamp": "2026-10-01 14:24:52",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-30 20:29 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-30T20:29:45.618143+05:30",
                "campaign": "ConnectWise",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "983cbec3d48ec620539fe07e608568279fe973ec",
                "description": "Malicious SSL certificate - ConnectWise C&C",
                "timestamp": "2026-10-01 14:24:31",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-30 20:29 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-30T20:29:45.618143+05:30",
                "campaign": "ConnectWise",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "cc3986460c930a304c6f86172dbafe27e3ab5ff7",
                "description": "Malicious SSL certificate - ConnectWise C&C",
                "timestamp": "2026-10-01 14:24:21",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-30 20:29 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-30T20:29:45.618143+05:30",
                "campaign": "ConnectWise",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "9f429899906495a70ecf478ed1d0f58bf597c991",
                "description": "Malicious SSL certificate - ConnectWise C&C",
                "timestamp": "2026-10-01 14:23:59",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-30 20:29 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-30T20:29:45.618143+05:30",
                "campaign": "ConnectWise",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "b02eaa6a8ac3522babacb424d102c06354e36bf3",
                "description": "Malicious SSL certificate - ZigClipper C&C",
                "timestamp": "2026-10-01 14:04:32",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-30 20:29 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-30T20:29:45.618143+05:30",
                "campaign": "ZigClipper",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "7b4dafe4fe0380670ba4511e29967e69aae422bb",
                "description": "Malicious SSL certificate - Malware C&C",
                "timestamp": "2026-10-01 09:10:38",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-30 20:29 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-30T20:29:45.618143+05:30",
                "campaign": "Malware",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "4768d20d3072a30b168c650b11a9e4d3e1a0dc60",
                "description": "Malicious SSL certificate - QuasarRAT C&C",
                "timestamp": "2026-10-01 06:11:55",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-30 20:29 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-30T20:29:45.618143+05:30",
                "campaign": "QuasarRAT",
                "confidence": "High"
            }
        ],
        "lastUpdated": "2026-10-31T02:11:28.354528+05:30",
        "lastUpdatedFormatted": "Oct 31, 2026 at 02:11 AM IST",
        "lastUpdatedUtc": "2026-10-30 20:41 UTC"
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
                "lastUpdate": "2026-10-30 20:41 UTC",
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
                "lastUpdate": "2026-10-30 20:41 UTC",
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
            "iocCount": 1747,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 1747,
                "newInLastHour": 1,
                "lastUpdate": "2026-10-30 20:41 UTC",
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
            "iocCount": 37187,
            "iocDataUrl": "https://thehgtech.com/ioc-data/cins-army.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 37187,
                "newInLastHour": 15000,
                "lastUpdate": "2026-10-30 20:41 UTC",
                "isStale": false,
                "feedStatus": "active"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]14[.]64[.]144",
                "1[.]179[.]240[.]27",
                "1[.]193[.]57[.]144",
                "1[.]193[.]63[.]52",
                "1[.]215[.]138[.]43"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 10699,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 10699,
                "newInLastHour": 4902,
                "lastUpdate": "2026-10-30 20:41 UTC",
                "isStale": false,
                "feedStatus": "active"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]14[.]240[.]247",
                "1[.]15[.]221[.]192",
                "1[.]15[.]42[.]91",
                "1[.]214[.]214[.]114",
                "1[.]222[.]42[.]237"
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
                "lastUpdate": "2026-10-30 20:41 UTC",
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
                "lastUpdate": "2026-10-30 20:41 UTC",
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
                "lastUpdate": "2026-10-30 20:41 UTC",
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
            "iocCount": 11091,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 11091,
                "newInLastHour": 12,
                "lastUpdate": "2026-10-30 20:41 UTC",
                "isStale": false,
                "feedStatus": "active"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "47477bdad9212d35e0ad21867e929825d5c668a7",
                "c66e709b5d5107c52235593e2e70293f810817e0",
                "7f7f0cc383cc408a31be236f521a474f9fa955bf",
                "c81dfb846d72043d82cfedada7b5fbc3f1ed956d",
                "de045f977bb3fcb870a7c70433ec3c4055b4df56"
            ]
        }
    },
    "overview": [
        {
            "type": "ssl-cert",
            "indicator": "c81dfb846d72043d82cfedada7b5fbc3f1ed956d",
            "description": "Malicious SSL certificate - AsyncRAT C&C",
            "timestamp": "2026-10-30 07:11:53",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "AsyncRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "de045f977bb3fcb870a7c70433ec3c4055b4df56",
            "description": "Malicious SSL certificate - AokigaharaStealer C&C",
            "timestamp": "2026-10-30 07:06:01",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "AokigaharaStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "794a98bb8dfb1c8707541d2f1136fc7c1faa123f",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-10-30 06:51:16",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "aebfe1d6a7db6458477771a467698c52ec1cd181",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-30 06:47:55",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "b8b817853b031f3c2ef9ff332422a2f75cdafb14",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-30 06:47:42",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "6355bba335e57be21b44a9ed609f549cb1384167",
            "description": "Malicious SSL certificate - OverlordRAT C&C",
            "timestamp": "2026-10-08 19:25:07",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "OverlordRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "09a025b75e698c89b1731847a757ccbc00244f42",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-10-08 18:36:35",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "678674d7911f8cbb945607e91f8f05e7353be1d2",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-10-08 18:36:26",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "7145cd3c537c8b6f07d27038330303754fd086cd",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-10-08 18:10:23",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "1ccf99a4deb337e800230280e82782da64384694",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-10-08 14:34:06",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "0916fba7d3ffe7cf2d7f6803f098cdc96077a842",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-10-08 09:02:37",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "d2bf0b9b894431307b05b47812645ef42cf169e6",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-10-01 14:33:24",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "b4d984de5a6fad2a262360fede253124b6d08b41",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-10-01 14:25:32",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "fae032e423544ab9e33d6e656d1a239e74b04637",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-10-01 14:24:52",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "983cbec3d48ec620539fe07e608568279fe973ec",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-10-01 14:24:31",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "cc3986460c930a304c6f86172dbafe27e3ab5ff7",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-10-01 14:24:21",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "9f429899906495a70ecf478ed1d0f58bf597c991",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-10-01 14:23:59",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "b02eaa6a8ac3522babacb424d102c06354e36bf3",
            "description": "Malicious SSL certificate - ZigClipper C&C",
            "timestamp": "2026-10-01 14:04:32",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "ZigClipper",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "7b4dafe4fe0380670ba4511e29967e69aae422bb",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-10-01 09:10:38",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "4768d20d3072a30b168c650b11a9e4d3e1a0dc60",
            "description": "Malicious SSL certificate - QuasarRAT C&C",
            "timestamp": "2026-10-01 06:11:55",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "QuasarRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "8bc45d63603370c41a2d7d352cdecb01281f5264",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-01 06:08:37",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "4f2559300051882eff69dc21bc3d27da6f988751",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-01 06:07:48",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "9dc2883ebb462c65d2f5cacbdb849fecb6d1ebaf",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-10-01 06:07:11",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "5e64c59a01d6dbe03bd0b794c1d505663451c393",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-01 06:05:59",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "8bd32950bda53eb297e5f0a41750cf671d36f1e7",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-10-01 06:03:26",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "de58e571469c72f26cfb59884e06e2aa5db7d6ff",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-09-23 15:11:06",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "180512bde178c27cef6b8597f301558d88f853e2",
            "description": "Malicious SSL certificate - SeroRAT C&C",
            "timestamp": "2026-09-23 15:11:04",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "SeroRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "7f350973861d149efb83b0a1f51d0e0db0329dda",
            "description": "Malicious SSL certificate - Malware distribution",
            "timestamp": "2026-09-09 18:10:15",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "1955a3ce0e4bb011e3e667a51be5f42fb02d769f",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-09-09 17:51:01",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "559a55c8c7779e0037429794a8836a1039dbcdc3",
            "description": "Malicious SSL certificate - AsyncRAT C&C",
            "timestamp": "2026-09-09 17:48:17",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "AsyncRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "8e492f36b0c1412f2d872dc9d51c974d27733d47",
            "description": "Malicious SSL certificate - AsyncRAT C&C",
            "timestamp": "2026-09-09 17:47:32",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "AsyncRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "1edaae5bb268c6ec2f90076a7c47b7bfbc531a15",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-09-09 11:16:41",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "077be211823898ed4eb3d3faf920781321f7ca5c",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-09-09 11:12:55",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "8d2a3d5cb72fac2e04ef51b3e056ab6b75e3f408",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-09-09 11:12:09",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "629ea8772f7b1e8bf216dfc3b2170eb903ee8faa",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-09-09 11:11:48",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "d359f356ed88b04089b7afe53f13a913382bd4da",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-09-09 08:57:59",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "2be2964d2711f536de55aa929fa612ba69ebc405",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-09-09 08:54:05",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "ba98762c6eadc76480a1a97ec9c8b54a3002bc10",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-09-09 08:39:26",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "401d739effc60f0ddbfc096d8b7a64625744824a",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-09-09 08:39:15",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "3a62153757fc44e7a948a9c289a08798ea8e8487",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-09-09 08:39:00",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "9f7f53410f881c40adf0d4e16a67fd8c4446452a",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-09-09 08:38:26",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "6712d3901855387b6d4f3d29576f04df40fa30c1",
            "description": "Malicious SSL certificate - BoratRAT C&C",
            "timestamp": "2026-09-02 08:10:48",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "BoratRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "26edae2d62f7008d9a3ea68999f41316f4cdf762",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-09-02 08:10:31",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "6c6027c8ff18b0f79bd3c40848c2b189a18b49ac",
            "description": "Malicious SSL certificate - QuasarRAT C&C",
            "timestamp": "2026-09-02 08:09:29",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "QuasarRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "6ddb71e5a27eccf80773188066ac92d9d39506d7",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-09-02 06:15:35",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "7f1ed4a13d8a2ba6e690ecaf66a9dfa42dd8d9d1",
            "description": "Malicious SSL certificate - ValleyRAT C&C",
            "timestamp": "2026-08-25 14:43:34",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "ValleyRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "edd934290c1a24e425d4d6f6c82a08ebc392b89f",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-08-25 14:38:52",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "b0cf2650da454ed5cc67102d95f8b9ba00602ead",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-08-25 14:38:35",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "25042ea148aa7ccb23ebabb701cacca1d2fbd1d4",
            "description": "Malicious SSL certificate - HypeAgent C&C",
            "timestamp": "2026-08-25 14:37:51",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "HypeAgent",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "5d801efeb2e22aa0da901ffbce45db05a80a7b0b",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-25 14:36:21",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "3595cb507d47314a6749679e4217ec993c5c3691",
            "description": "Malicious SSL certificate - DCAgentRMM C&C",
            "timestamp": "2026-08-25 14:35:59",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "DCAgentRMM",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "dbb503055e3d10fa9d7c07f445e1cf6e5959f038",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-08-25 14:32:02",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "f351f7dbe9c583f75758b39cd307f5359d110c73",
            "description": "Malicious SSL certificate - AsyncRAT C&C",
            "timestamp": "2026-08-18 16:07:27",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "AsyncRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "e39fdf1800919f6dd77d89bcdbc0b1fe8a9352eb",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-18 16:07:14",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "edbd45e54859ad7082efb79465ba938bb2581132",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-08-18 16:04:11",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "7bf78d44f61a05e919479a1cf3e0ce158a50a0c6",
            "description": "Malicious SSL certificate - AsyncRAT C&C",
            "timestamp": "2026-08-18 16:02:53",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "AsyncRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "ffa6be04fe2e9c6b79776dcfc7ad3f41a403a64d",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-08-18 15:59:59",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "952bcdeea03ea702626a30069c949581bf2d1b05",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-18 15:49:20",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "b00aa24dc7459e8a0a8f5fbb3d2a27bd646de1e3",
            "description": "Malicious SSL certificate - HypeAgent C&C",
            "timestamp": "2026-08-18 09:27:38",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "HypeAgent",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "a52e17fe607d1e562e0cb67c6f2342e6b4dbf191",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-18 09:12:54",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "8d6fdff168340e954aad4f0f924276cd5b6e31b2",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-18 09:05:49",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "ffc71a7ba96b8801333ea2b9e7cd05d4cc2f718d",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-08-11 14:38:19",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "95fcb5ff7bd5e1d06b1e585af4ba3ceb95f01164",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-11 12:31:21",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "1674f349ec288a75ac123a1752d433a21ceddcef",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-11 12:30:11",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "664729bef77ee9c9f2f523fc1305ef65fa05dbae",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-11 12:29:36",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "e11c9cfa144ec7da0f1b77838fd02cfb7e897eaa",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-11 12:28:58",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "1b48b0bd62383ba8f49d25e8584a290016730f3d",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-11 12:28:27",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "dd7323e5437c503d3b0f4bc1d268dfffd58b80ab",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-08-11 09:52:27",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "cc7d79ea8261997821ca3c8ad44b61023ad5af89",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-11 08:10:39",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "19d7b8b5842177ba762fb0b30fd1368e953e73e9",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-08-11 08:06:57",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "aec890965f808398c124d16d25255ac4ed1ce6ca",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-11 07:50:46",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "99e8e296eae361f7ddeb6ce7cc6d4bd521ee24b3",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-11 06:48:32",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "4672fba181056b9df706573af71ad6462ea3df67",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-08-11 06:43:53",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "a0b782d798a48e117c995c9deb013c5cffb0ac58",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-08-11 06:41:53",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "b5f071dd28b511f0b4b067507602a779feb4301f",
            "description": "Malicious SSL certificate - AsyncRAT C&C",
            "timestamp": "2026-08-11 06:41:21",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "AsyncRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "7c3a6c14032bce06d59bd68a7b61a8b88fe222ac",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-08-11 06:41:01",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "f3a38c4fa9a59b250a0a2d351af061fce6a21995",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-08-11 06:23:18",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "ae2744e9ad9fb574cb79ceff176cbfc982e4fddb",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-08-11 06:22:18",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "8a6a82fdb53374bd62b62120a007ceb19d4ad827",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-08-11 06:22:05",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "8befa0033eaaa1693777be12aa7d9236a9caf188",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-11 06:16:44",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "92bebc09af464e669c68d95052916e76f989e043",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-08-04 09:36:35",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "9b5e0b2f2acb07fb226b8805b3a5fb5a28035e6e",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-08-04 08:24:56",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "942c595db95914eb4987a1e7ddd6f728fbc674ec",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-08-04 08:24:26",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "361864879b9712b391b7d1af733e24168f67c419",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-08-04 08:21:43",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "2b7ffb92a05fe5f22a0f26d9c76a3155f04fdd45",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-08-04 08:19:18",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "db767b560efd2f6811b4c4adf2b0fdaee18fdad5",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-08-04 08:05:59",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "0141dfae0d4426123aa2fbdd759162fa82d0f8e1",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-08-04 08:05:49",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "b8b347f5d18be90876c3d3a5458b6e60598246bd",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-08-04 08:05:45",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "a1146ac98390794517ff821a3377458555100eb3",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-08-04 08:04:36",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "ef771150284da548676c603f5a4e1cd2763fd27f",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-08-04 07:44:16",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "d7c3d38e27ab758c908f81b72a6fea1cd1af7369",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-08-04 07:38:53",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "52b3c657964c5ac626f54446cbfb75165d215d65",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-08-04 07:09:00",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "ccc880d541544fedae179d9adcff6f8c74741aed",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-08-04 06:52:27",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "40ab2a74848e4b409900153beb94a6977de80d4a",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-08-04 06:51:40",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "6647f9e4a2e273d7b78ff02be7114b0e9e2a719f",
            "description": "Malicious SSL certificate - AsyncRAT C&C",
            "timestamp": "2026-08-04 06:46:44",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "AsyncRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "9bfa1f9e8d990faec4c91c5b9eaeb15898aff2e7",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-08-04 06:45:49",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "dcf9b87b04998fde1fa03e83bfb8fec67ab1e1e1",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-08-04 06:45:34",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "dd95dacb4419bad92d3d39fa274af4acc1cb6988",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-08-04 06:45:04",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "a5930d8e37f9f2874a281294d8508dd79df36b98",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-08-04 06:44:51",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "9a7e2e73f967101d75a3cb425b8980d50ca5c001",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-08-04 06:44:35",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-30 20:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-30T20:29:45.618143+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        }
    ],
    "dailySummary": {
        "stats": {
            "totalIndicators": 104956,
            "activeSources": 9,
            "criticalAlerts": 46683,
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
                "count": 11333,
                "trend": "stable",
                "percentage": 2
            },
            {
                "category": "Botnet",
                "count": 4297,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Phishing",
                "count": 3432,
                "trend": "stable",
                "percentage": 9
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
                "count": 37041,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]12[.]229[.]231",
                    "1[.]15[.]14[.]29",
                    "1[.]179[.]240[.]27"
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
                "count": 10606,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]15[.]221[.]192",
                    "1[.]15[.]42[.]91",
                    "1[.]214[.]214[.]114"
                ]
            },
            {
                "name": "Generic Phishing",
                "count": 3404,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://imediachile[.]cl/secupdf/10625[.]html",
                    "hxxp://hse-review[.]top/",
                    "hxxps://phantom-app-4eu8[.]vercel[.]app/"
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
                "count": 1694,
                "types": [
                    "domain",
                    "hash",
                    "url",
                    "ssl-cert"
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
                "count": 728,
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
        "totalAttacksThisHour": 20220,
        "lastCalculated": "2026-10-31 02:11 IST"
    }
};
