// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-11-28T07:05:02.813125+05:30 IST (2026-11-28 01:35 UTC)
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-11-28T07:05:01.932038+05:30",
    "lastUpdatedFormatted": "Nov 28, 2026 at 07:05 AM IST",
    "lastUpdatedUtc": "2026-11-28 01:35 UTC",
    "comparisonPeriod": "Nov 27 \u2013 Nov 28, 2026",
    "stats": {
        "totalIOCs": 107239,
        "byType": {
            "url": 39504,
            "ip": 53513,
            "hash": 641,
            "domain": 2158,
            "ssl-cert": 10924,
            "ip-range": 499
        },
        "byVendor": {
            "OpenPhish": 3817,
            "Malware Bazaar": 476,
            "Spamhaus DROP": 499,
            "CINS Army": 38669,
            "Blocklist.de": 12294,
            "URLhaus": 34528,
            "ThreatFox": 6027,
            "Feodo Tracker": 5,
            "SSL Blacklist": 10924
        },
        "topMalware": [
            {
                "name": "Vidar",
                "count": 1658,
                "types": [
                    "hash",
                    "domain",
                    "ssl-cert",
                    "url"
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1608,
                "types": [
                    "hash",
                    "ip",
                    "ssl-cert",
                    "domain"
                ]
            },
            {
                "name": "Cobalt Strike",
                "count": 1183,
                "types": [
                    "hash",
                    "ip",
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
                "name": "IClickFix",
                "count": 708,
                "types": [
                    "url",
                    "domain"
                ]
            },
            {
                "name": "QuasarRAT",
                "count": 701,
                "types": [
                    "hash",
                    "ssl-cert"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 553,
                "types": [
                    "ssl-cert"
                ]
            },
            {
                "name": "ConnectWise",
                "count": 541,
                "types": [
                    "hash",
                    "ssl-cert"
                ]
            },
            {
                "name": "OffLoader",
                "count": 534,
                "types": [
                    "ssl-cert"
                ]
            },
            {
                "name": "PureRAT",
                "count": 440,
                "types": [
                    "ip",
                    "ssl-cert"
                ]
            },
            {
                "name": "Malware",
                "count": 427,
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
                "count": 350,
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
                "indicator": "d66a7599fc875b9ca6633470adadfa8cc5b9c04f",
                "description": "Malicious SSL certificate - Malware C&C",
                "timestamp": "2026-11-20 09:57:04",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-28 07:04 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-28T07:04:58.822211+05:30",
                "campaign": "Malware",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "391c96cd00389c4b285f60567adb3a3531009fc9",
                "description": "Malicious SSL certificate - Malware C&C",
                "timestamp": "2026-11-20 09:54:36",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-28 07:04 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-28T07:04:58.822211+05:30",
                "campaign": "Malware",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "b80e467af83941a4aa1ebfd18d737059e6ade74f",
                "description": "Malicious SSL certificate - Malware C&C",
                "timestamp": "2026-11-20 09:50:52",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-28 07:04 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-28T07:04:58.822211+05:30",
                "campaign": "Malware",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "c333a3d828305b2a8f6d4f5646774ee30f0be065",
                "description": "Malicious SSL certificate - OffLoader C&C",
                "timestamp": "2026-11-20 08:20:10",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-28 07:04 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-28T07:04:58.822211+05:30",
                "campaign": "OffLoader",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "c3c9181f153a966d5e57ac0da2caa02ee0268451",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-11-20 08:19:15",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-28 07:04 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-28T07:04:58.822211+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "d07fefbb493d25b4e602bd75a5f847a76ce8817a",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-11-20 08:18:44",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-28 07:04 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-28T07:04:58.822211+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "162ae181924c0382ac8c4d1b59bd2a5ab71d68f2",
                "description": "Malicious SSL certificate - Malware distribution",
                "timestamp": "2026-11-20 08:18:25",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-28 07:04 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-28T07:04:58.822211+05:30",
                "campaign": "Malware",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "6e5c85d2f880211cfc2b36d1e5140890c1a26399",
                "description": "Malicious SSL certificate - PureLogsStealer C&C",
                "timestamp": "2026-11-20 08:17:49",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-28 07:04 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-28T07:04:58.822211+05:30",
                "campaign": "PureLogsStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "09d1e05f957a313204823679e8b23199ddfd85d1",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-11-20 08:17:46",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-28 07:04 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-28T07:04:58.822211+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "311d90972082954ffd0a2da52a40209f4ded4de8",
                "description": "Malicious SSL certificate - RemusStealer C&C",
                "timestamp": "2026-11-20 07:58:06",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-28 07:04 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-28T07:04:58.822211+05:30",
                "campaign": "RemusStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "d41dff333ce19bcd2d80a26d9df47718e65e421a",
                "description": "Malicious SSL certificate - RemusStealer C&C",
                "timestamp": "2026-11-20 07:58:05",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-28 07:04 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-28T07:04:58.822211+05:30",
                "campaign": "RemusStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "3978f94a567a7ef1f78b59b404b3794a724bd7da",
                "description": "Malicious SSL certificate - RemusStealer C&C",
                "timestamp": "2026-11-20 07:58:04",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-28 07:04 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-28T07:04:58.822211+05:30",
                "campaign": "RemusStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "788de1386a4226d0993c1434a2d820bc1259b88e",
                "description": "Malicious SSL certificate - PureLogsStealer C&C",
                "timestamp": "2026-11-05 16:25:51",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-28 07:04 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-28T07:04:58.822211+05:30",
                "campaign": "PureLogsStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "8fa5d5b8ff264dcc0eb6b1d29b5520beeba1e81f",
                "description": "Malicious SSL certificate - Malware C&C",
                "timestamp": "2026-11-05 09:16:07",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-28 07:04 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-28T07:04:58.822211+05:30",
                "campaign": "Malware",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "dc7784a75bdb59bd6427e9c2a23384e2094dbba0",
                "description": "Malicious SSL certificate - PureRAT C&C",
                "timestamp": "2026-11-05 09:11:29",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-28 07:04 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-28T07:04:58.822211+05:30",
                "campaign": "PureRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "07c4dd65867a3724a96f2525f6ebcf0d2e3dbbf6",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-11-05 09:08:25",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-28 07:04 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-28T07:04:58.822211+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ip",
                "indicator": "162[.]243[.]103[.]246",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-11-28 07:04 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-11-28 07:04 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-11-28T07:04:57.677965+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "178[.]62[.]3[.]223",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-11-28 07:04 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-11-28 07:04 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-11-28T07:04:57.677965+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "27[.]133[.]154[.]218",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-11-28 07:04 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-11-28 07:04 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-11-28T07:04:57.677965+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "34[.]204[.]119[.]63",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-11-28 07:04 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-11-28 07:04 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-11-28T07:04:57.677965+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            }
        ],
        "lastUpdated": "2026-11-28T07:05:01.932038+05:30",
        "lastUpdatedFormatted": "Nov 28, 2026 at 07:05 AM IST",
        "lastUpdatedUtc": "2026-11-28 01:35 UTC"
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
                "lastUpdate": "2026-11-28 01:34 UTC",
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
                "lastUpdate": "2026-11-28 01:34 UTC",
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
            "iocCount": 499,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 499,
                "newInLastHour": 1,
                "lastUpdate": "2026-11-28 01:34 UTC",
                "isStale": false,
                "feedStatus": "active"
            },
            "types": [
                "ip-range"
            ],
            "sampleIndicators": [
                "2.26.75.0/24",
                "2.27.5.0/24",
                "2.58.56.0/24",
                "2.59.152.0/24",
                "2.59.153.0/24"
            ]
        },
        "CINS Army": {
            "description": "Malicious IPs from CINS Army threat intelligence. Fast-updating list of confirmed attackers.",
            "website": "http://cinsscore.com/",
            "updateFrequency": "Every 15 minutes",
            "iocCount": 38669,
            "iocDataUrl": "https://thehgtech.com/ioc-data/cins-army.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 38669,
                "newInLastHour": 15000,
                "lastUpdate": "2026-11-28 01:34 UTC",
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
                "1[.]14[.]3[.]170",
                "1[.]15[.]14[.]29"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 12294,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 12294,
                "newInLastHour": 4294,
                "lastUpdate": "2026-11-28 01:34 UTC",
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
                "lastUpdate": "2026-11-28 01:34 UTC",
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
                "lastUpdate": "2026-11-28 01:34 UTC",
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
                "lastUpdate": "2026-11-28 01:34 UTC",
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
            "iocCount": 10924,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 10924,
                "newInLastHour": 16,
                "lastUpdate": "2026-11-28 01:35 UTC",
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
            "indicator": "d66a7599fc875b9ca6633470adadfa8cc5b9c04f",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-11-20 09:57:04",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T07:04:58.822211+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "391c96cd00389c4b285f60567adb3a3531009fc9",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-11-20 09:54:36",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T07:04:58.822211+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "b80e467af83941a4aa1ebfd18d737059e6ade74f",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-11-20 09:50:52",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T07:04:58.822211+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "c333a3d828305b2a8f6d4f5646774ee30f0be065",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-11-20 08:20:10",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T07:04:58.822211+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "c3c9181f153a966d5e57ac0da2caa02ee0268451",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-11-20 08:19:15",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T07:04:58.822211+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "d07fefbb493d25b4e602bd75a5f847a76ce8817a",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-11-20 08:18:44",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T07:04:58.822211+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "162ae181924c0382ac8c4d1b59bd2a5ab71d68f2",
            "description": "Malicious SSL certificate - Malware distribution",
            "timestamp": "2026-11-20 08:18:25",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T07:04:58.822211+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "6e5c85d2f880211cfc2b36d1e5140890c1a26399",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-11-20 08:17:49",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T07:04:58.822211+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "09d1e05f957a313204823679e8b23199ddfd85d1",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-11-20 08:17:46",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T07:04:58.822211+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "311d90972082954ffd0a2da52a40209f4ded4de8",
            "description": "Malicious SSL certificate - RemusStealer C&C",
            "timestamp": "2026-11-20 07:58:06",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T07:04:58.822211+05:30",
            "campaign": "RemusStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "d41dff333ce19bcd2d80a26d9df47718e65e421a",
            "description": "Malicious SSL certificate - RemusStealer C&C",
            "timestamp": "2026-11-20 07:58:05",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T07:04:58.822211+05:30",
            "campaign": "RemusStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "3978f94a567a7ef1f78b59b404b3794a724bd7da",
            "description": "Malicious SSL certificate - RemusStealer C&C",
            "timestamp": "2026-11-20 07:58:04",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T07:04:58.822211+05:30",
            "campaign": "RemusStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "788de1386a4226d0993c1434a2d820bc1259b88e",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-11-05 16:25:51",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T07:04:58.822211+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "8fa5d5b8ff264dcc0eb6b1d29b5520beeba1e81f",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-11-05 09:16:07",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T07:04:58.822211+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "dc7784a75bdb59bd6427e9c2a23384e2094dbba0",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-11-05 09:11:29",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T07:04:58.822211+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "07c4dd65867a3724a96f2525f6ebcf0d2e3dbbf6",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-11-05 09:08:25",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-28T07:04:58.822211+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ip",
            "indicator": "162[.]243[.]103[.]246",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-11-28 07:04 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-11-28T07:04:57.677965+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "178[.]62[.]3[.]223",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-11-28 07:04 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-11-28T07:04:57.677965+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "27[.]133[.]154[.]218",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-11-28 07:04 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-11-28T07:04:57.677965+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "34[.]204[.]119[.]63",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-11-28 07:04 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-11-28T07:04:57.677965+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "50[.]16[.]16[.]211",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-11-28 07:04 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-11-28T07:04:57.677965+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "1[.]1[.]220[.]166",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-28 07:04 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-28T07:04:55.570463+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]12[.]252[.]163",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-28 07:04 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-28T07:04:55.570463+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]13[.]156[.]111",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-28 07:04 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-28T07:04:55.570463+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]194[.]211[.]36",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-28 07:04 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-28T07:04:55.570463+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]214[.]214[.]114",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-28 07:04 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-28T07:04:55.570463+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]222[.]42[.]237",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-28 07:04 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-28T07:04:55.570463+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]222[.]80[.]212",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-28 07:04 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-28T07:04:55.570463+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]234[.]53[.]65",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-28 07:04 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-28T07:04:55.570463+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]235[.]192[.]214",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-28 07:04 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-28T07:04:55.570463+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]238[.]106[.]229",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-28 07:04 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-28T07:04:55.570463+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]27[.]251[.]252",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-28 07:04 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-28T07:04:55.570463+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]53[.]143[.]248",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-28 07:04 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-28T07:04:55.570463+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]87[.]254[.]183",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-28 07:04 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-28T07:04:55.570463+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]94[.]62[.]64",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-28 07:04 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-28T07:04:55.570463+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "100[.]54[.]251[.]77",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-28 07:04 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-28T07:04:55.570463+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "100[.]59[.]208[.]132",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-28 07:04 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-28T07:04:55.570463+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]100[.]194[.]252",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-28 07:04 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-28T07:04:55.570463+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]109[.]118",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-28 07:04 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-28T07:04:55.570463+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]26[.]93",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-28 07:04 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-28T07:04:55.570463+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]53[.]14",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-28 07:04 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-28T07:04:55.570463+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]55[.]95",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-28 07:04 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-28T07:04:55.570463+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]64[.]76",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-28 07:04 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-28T07:04:55.570463+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]66[.]30",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-28 07:04 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-28T07:04:55.570463+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]67[.]70",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-28 07:04 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-28T07:04:55.570463+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]69[.]201",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-28 07:04 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-28T07:04:55.570463+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]168[.]23[.]127",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-28 07:04 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-28T07:04:55.570463+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]168[.]53[.]247",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-28 07:04 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-28T07:04:55.570463+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]200[.]243[.]197",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-28 07:04 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-28T07:04:55.570463+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]201[.]38[.]226",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-28 07:04 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-28T07:04:55.570463+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]201[.]71[.]54",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-28 07:04 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-28T07:04:55.570463+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]206[.]211[.]65",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-28 07:04 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-28T07:04:55.570463+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]32[.]240[.]31",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-28 07:04 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-28T07:04:55.570463+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]33[.]210[.]169",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-28 07:04 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-28T07:04:55.570463+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]34[.]58[.]213",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-28 07:04 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-28T07:04:55.570463+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]106[.]89",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-28 07:04 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-28T07:04:55.570463+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]114[.]181",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-28 07:04 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-28T07:04:55.570463+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]119[.]203",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-28 07:04 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-28T07:04:55.570463+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]121[.]22",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-28 07:04 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-28T07:04:55.570463+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]127[.]95",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-28 07:04 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-28T07:04:55.570463+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]228[.]201",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-28 07:04 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-28T07:04:55.570463+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]97[.]131",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-28 07:04 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-28T07:04:55.570463+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]37[.]156[.]70",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-28 07:04 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-28T07:04:55.570463+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]42[.]185[.]117",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-28 07:04 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-28T07:04:55.570463+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]43[.]124[.]60",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-28 07:04 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-28T07:04:55.570463+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]43[.]77[.]85",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-28 07:04 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-28T07:04:55.570463+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]134[.]75",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-28 07:04 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-28T07:04:55.570463+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]158[.]56",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-28 07:04 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-28T07:04:55.570463+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]20[.]56",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-28 07:04 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-28T07:04:55.570463+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]8[.]113",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-28 07:04 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-28T07:04:55.570463+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]8[.]188",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-28 07:04 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-28T07:04:55.570463+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]51[.]251[.]255",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-28 07:04 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-28T07:04:55.570463+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]64[.]178[.]167",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-28 07:04 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-28T07:04:55.570463+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]66[.]165[.]103",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-28 07:04 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-28T07:04:55.570463+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]76[.]244[.]135",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-28 07:04 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-28T07:04:55.570463+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]89[.]141[.]184",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-28 07:04 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-28T07:04:55.570463+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]89[.]182[.]189",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-28 07:04 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-28T07:04:55.570463+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]89[.]76[.]249",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-28 07:04 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-28T07:04:55.570463+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]91[.]114[.]194",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-28 07:04 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-28T07:04:55.570463+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]91[.]126[.]150",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-28 07:04 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-28T07:04:55.570463+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]192[.]88",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-28 07:04 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-28T07:04:55.570463+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]193[.]145",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-28 07:04 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-28T07:04:55.570463+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]193[.]183",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-28 07:04 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-28T07:04:55.570463+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]195[.]17",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-28 07:04 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-28T07:04:55.570463+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]195[.]253",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-28 07:04 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-28T07:04:55.570463+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]195[.]62",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-28 07:04 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-28T07:04:55.570463+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]196[.]243",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-28 07:04 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-28T07:04:55.570463+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]200[.]56",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-28 07:04 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-28T07:04:55.570463+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]202[.]178",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-28 07:04 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-28T07:04:55.570463+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]205[.]145",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-28 07:04 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-28T07:04:55.570463+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]219[.]243",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-28 07:04 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-28T07:04:55.570463+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]99[.]37[.]80",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-28 07:04 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-28T07:04:55.570463+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]113[.]132[.]137",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-28 07:04 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-28T07:04:55.570463+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]140[.]97[.]134",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-28 07:04 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-28T07:04:55.570463+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]177[.]101[.]53",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-28 07:04 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-28T07:04:55.570463+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]180[.]27[.]10",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-28 07:04 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-28T07:04:55.570463+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]203[.]116[.]125",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-28 07:04 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-28T07:04:55.570463+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]207[.]169[.]113",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-28 07:04 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-28T07:04:55.570463+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]210[.]148[.]92",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-28 07:04 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-28T07:04:55.570463+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]210[.]149[.]105",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-28 07:04 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-28 07:04 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-28T07:04:55.570463+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        }
    ],
    "dailySummary": {
        "stats": {
            "totalIndicators": 107239,
            "activeSources": 9,
            "criticalAlerts": 46519,
            "activeCampaigns": 220
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
                "count": 11169,
                "trend": "stable",
                "percentage": -3
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
                "count": 38669,
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
                "count": 12294,
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
                "count": 1658,
                "types": [
                    "hash",
                    "domain",
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
                "name": "AsyncRAT",
                "count": 1608,
                "types": [
                    "hash",
                    "ip",
                    "ssl-cert",
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
                    "ip",
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
                "name": "QuasarRAT",
                "count": 701,
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
        "fastestRisingThreat": "Generic Phishing",
        "totalAttacksThisHour": 19616,
        "lastCalculated": "2026-11-28 07:05 IST"
    }
};
