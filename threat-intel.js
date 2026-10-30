// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-31T04:04:57.705289+05:30 IST (2026-10-30 22:34 UTC)
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-31T04:04:56.907714+05:30",
    "lastUpdatedFormatted": "Oct 31, 2026 at 04:04 AM IST",
    "lastUpdatedUtc": "2026-10-30 22:34 UTC",
    "comparisonPeriod": "Oct 30 \u2013 Oct 31, 2026",
    "stats": {
        "totalIOCs": 105189,
        "byType": {
            "url": 39116,
            "ip": 50436,
            "hash": 641,
            "domain": 2158,
            "ssl-cert": 11091,
            "ip-range": 1747
        },
        "byVendor": {
            "OpenPhish": 3429,
            "Malware Bazaar": 476,
            "Spamhaus DROP": 1747,
            "CINS Army": 37187,
            "Blocklist.de": 10699,
            "URLhaus": 34528,
            "ThreatFox": 6027,
            "Feodo Tracker": 5,
            "SSL Blacklist": 11091
        },
        "topMalware": [
            {
                "name": "Vidar",
                "count": 1695,
                "types": [
                    "url",
                    "ssl-cert",
                    "domain",
                    "hash"
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1628,
                "types": [
                    "ip",
                    "ssl-cert",
                    "domain",
                    "hash"
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
                "count": 727,
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
                "name": "OffLoader",
                "count": 557,
                "types": [
                    "ssl-cert"
                ]
            },
            {
                "name": "PureRAT",
                "count": 442,
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
                "indicator": "47477bdad9212d35e0ad21867e929825d5c668a7",
                "description": "Malicious SSL certificate - OffLoader C&C",
                "timestamp": "2026-10-30 19:12:16",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-31 02:11 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-31T02:11:26.020787+05:30",
                "campaign": "OffLoader",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "c66e709b5d5107c52235593e2e70293f810817e0",
                "description": "Malicious SSL certificate - PureRAT C&C",
                "timestamp": "2026-10-30 19:12:00",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-31 02:11 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-31T02:11:26.020787+05:30",
                "campaign": "PureRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "7f7f0cc383cc408a31be236f521a474f9fa955bf",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-10-30 19:11:51",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-31 02:11 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-31T02:11:26.020787+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "f8ac3547b3ec163234ebcb90d325eec86069a42f",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-10-23 12:50:39",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-31 02:11 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-31T02:11:26.020787+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "3c99c5d67f2afafad06b3da29af5d1ab97bf5273",
                "description": "Malicious SSL certificate - PureLogsStealer C&C",
                "timestamp": "2026-10-23 11:43:19",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-31 02:11 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-31T02:11:26.020787+05:30",
                "campaign": "PureLogsStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "4bba6041d3bd00dd1eb5d436f7d17c7e786eb5ee",
                "description": "Malicious SSL certificate - PureLogsStealer C&C",
                "timestamp": "2026-10-23 11:28:26",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-31 02:11 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-31T02:11:26.020787+05:30",
                "campaign": "PureLogsStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "e8e1ee53a4b01fe4d284f3edf82c0dfd5b6c63cf",
                "description": "Malicious SSL certificate - CobaltStrike C&C",
                "timestamp": "2026-10-23 08:28:22",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-31 02:11 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-31T02:11:26.020787+05:30",
                "campaign": "CobaltStrike",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "d0cbe76e7158ac0762ebaf34f37e8a357cdfb6b2",
                "description": "Malicious SSL certificate - OffLoader C&C",
                "timestamp": "2026-10-23 06:49:54",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-31 02:11 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-31T02:11:26.020787+05:30",
                "campaign": "OffLoader",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "3eba611997b2a74274fd3974dad68bd2d64a936d",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-10-23 06:46:48",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-31 02:11 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-31T02:11:26.020787+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "6f89137efd938f732c38a20125c58d0248016909",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-10-23 06:45:59",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-31 02:11 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-31T02:11:26.020787+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "fe097ea5a213100162ccf6811a78483695f0f8a5",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-10-23 06:45:31",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-31 02:11 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-31T02:11:26.020787+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "b5b9054786b6c3877c16c507e4589388e3f2d08c",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-10-23 06:44:32",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-31 02:11 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-31T02:11:26.020787+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ip",
                "indicator": "162[.]243[.]103[.]246",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-10-31 02:11 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-10-31 02:11 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-10-31T02:11:24.772039+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "178[.]62[.]3[.]223",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-10-31 02:11 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-10-31 02:11 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-10-31T02:11:24.772039+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "27[.]133[.]154[.]218",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-10-31 02:11 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-10-31 02:11 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-10-31T02:11:24.772039+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "34[.]204[.]119[.]63",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-10-31 02:11 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-10-31 02:11 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-10-31T02:11:24.772039+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "50[.]16[.]16[.]211",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-10-31 02:11 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-10-31 02:11 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-10-31T02:11:24.772039+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "1[.]14[.]240[.]247",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-10-31 02:11 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-10-31 02:11 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-10-31T02:11:22.849963+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]15[.]221[.]192",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-10-31 02:11 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-10-31 02:11 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-10-31T02:11:22.849963+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]15[.]42[.]91",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-10-31 02:11 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-10-31 02:11 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-10-31T02:11:22.849963+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            }
        ],
        "lastUpdated": "2026-10-31T04:04:56.907714+05:30",
        "lastUpdatedFormatted": "Oct 31, 2026 at 04:04 AM IST",
        "lastUpdatedUtc": "2026-10-30 22:34 UTC"
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
                "lastUpdate": "2026-10-30 22:34 UTC",
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
                "lastUpdate": "2026-10-30 22:34 UTC",
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
                "newInLastHour": 10,
                "lastUpdate": "2026-10-30 22:34 UTC",
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
            "iocCount": 37060,
            "iocDataUrl": "https://thehgtech.com/ioc-data/cins-army.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 37060,
                "newInLastHour": 15000,
                "lastUpdate": "2026-10-30 22:34 UTC",
                "isStale": false,
                "feedStatus": "active"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]12[.]229[.]231",
                "1[.]14[.]64[.]144",
                "1[.]15[.]14[.]29",
                "1[.]179[.]240[.]27",
                "1[.]193[.]57[.]144"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 10716,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 10716,
                "newInLastHour": 4823,
                "lastUpdate": "2026-10-30 22:34 UTC",
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
                "lastUpdate": "2026-10-30 22:34 UTC",
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
                "lastUpdate": "2026-10-30 22:34 UTC",
                "isStale": true,
                "feedStatus": "stale"
            },
            "types": [
                "ip",
                "domain",
                "url",
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
                "lastUpdate": "2026-10-30 22:34 UTC",
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
            "iocCount": 10946,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 10946,
                "newInLastHour": 9,
                "lastUpdate": "2026-10-30 22:34 UTC",
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
            "indicator": "47477bdad9212d35e0ad21867e929825d5c668a7",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-10-30 19:12:16",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T02:11:26.020787+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "c66e709b5d5107c52235593e2e70293f810817e0",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-10-30 19:12:00",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T02:11:26.020787+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "7f7f0cc383cc408a31be236f521a474f9fa955bf",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-30 19:11:51",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T02:11:26.020787+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "f8ac3547b3ec163234ebcb90d325eec86069a42f",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-23 12:50:39",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T02:11:26.020787+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "3c99c5d67f2afafad06b3da29af5d1ab97bf5273",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-10-23 11:43:19",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T02:11:26.020787+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "4bba6041d3bd00dd1eb5d436f7d17c7e786eb5ee",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-10-23 11:28:26",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T02:11:26.020787+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "e8e1ee53a4b01fe4d284f3edf82c0dfd5b6c63cf",
            "description": "Malicious SSL certificate - CobaltStrike C&C",
            "timestamp": "2026-10-23 08:28:22",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T02:11:26.020787+05:30",
            "campaign": "CobaltStrike",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "d0cbe76e7158ac0762ebaf34f37e8a357cdfb6b2",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-10-23 06:49:54",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T02:11:26.020787+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "3eba611997b2a74274fd3974dad68bd2d64a936d",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-23 06:46:48",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T02:11:26.020787+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "6f89137efd938f732c38a20125c58d0248016909",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-23 06:45:59",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T02:11:26.020787+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "fe097ea5a213100162ccf6811a78483695f0f8a5",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-23 06:45:31",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T02:11:26.020787+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "b5b9054786b6c3877c16c507e4589388e3f2d08c",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-23 06:44:32",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T02:11:26.020787+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ip",
            "indicator": "162[.]243[.]103[.]246",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-31T02:11:24.772039+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "178[.]62[.]3[.]223",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-31T02:11:24.772039+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "27[.]133[.]154[.]218",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-31T02:11:24.772039+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "34[.]204[.]119[.]63",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-31T02:11:24.772039+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "50[.]16[.]16[.]211",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-31T02:11:24.772039+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "1[.]14[.]240[.]247",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T02:11:22.849963+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]15[.]221[.]192",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T02:11:22.849963+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]15[.]42[.]91",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T02:11:22.849963+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]214[.]214[.]114",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T02:11:22.849963+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]222[.]42[.]237",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T02:11:22.849963+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]234[.]80[.]94",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T02:11:22.849963+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]238[.]106[.]229",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T02:11:22.849963+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]27[.]251[.]252",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T02:11:22.849963+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]94[.]239[.]233",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T02:11:22.849963+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]95[.]90[.]125",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T02:11:22.849963+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "100[.]34[.]34[.]5",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T02:11:22.849963+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "100[.]49[.]117[.]77",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T02:11:22.849963+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "100[.]58[.]116[.]226",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T02:11:22.849963+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]100[.]194[.]181",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T02:11:22.849963+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]11[.]137",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T02:11:22.849963+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]129[.]127",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T02:11:22.849963+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]141[.]163",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T02:11:22.849963+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]153[.]162",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T02:11:22.849963+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]24[.]71",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T02:11:22.849963+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]35[.]232",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T02:11:22.849963+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]4[.]215",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T02:11:22.849963+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]53[.]14",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T02:11:22.849963+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]64[.]76",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T02:11:22.849963+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]66[.]30",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T02:11:22.849963+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]67[.]70",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T02:11:22.849963+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]69[.]201",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T02:11:22.849963+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]70[.]177",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T02:11:22.849963+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]132[.]85[.]130",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T02:11:22.849963+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]200[.]236[.]207",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T02:11:22.849963+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]200[.]243[.]197",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T02:11:22.849963+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]201[.]234[.]37",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T02:11:22.849963+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]201[.]38[.]226",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T02:11:22.849963+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]206[.]210[.]3",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T02:11:22.849963+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]227[.]203[.]162",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T02:11:22.849963+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]227[.]42[.]99",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T02:11:22.849963+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]227[.]49[.]193",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T02:11:22.849963+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]32[.]240[.]31",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T02:11:22.849963+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]33[.]213[.]67",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T02:11:22.849963+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]35[.]102[.]166",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T02:11:22.849963+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]35[.]248[.]174",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T02:11:22.849963+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]106[.]134",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T02:11:22.849963+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]107[.]233",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T02:11:22.849963+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]107[.]240",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T02:11:22.849963+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]108[.]160",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T02:11:22.849963+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]108[.]72",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T02:11:22.849963+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]116[.]216",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T02:11:22.849963+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]116[.]236",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T02:11:22.849963+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]119[.]203",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T02:11:22.849963+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]125[.]170",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T02:11:22.849963+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]125[.]72",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T02:11:22.849963+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]228[.]201",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T02:11:22.849963+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]133[.]255",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T02:11:22.849963+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]134[.]222",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T02:11:22.849963+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]134[.]74",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T02:11:22.849963+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]152[.]216",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T02:11:22.849963+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]158[.]56",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T02:11:22.849963+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]20[.]56",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T02:11:22.849963+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]28[.]226",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T02:11:22.849963+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]5[.]149",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T02:11:22.849963+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]8[.]113",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T02:11:22.849963+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]8[.]188",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T02:11:22.849963+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]53[.]236[.]155",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T02:11:22.849963+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]76[.]244[.]135",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T02:11:22.849963+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]79[.]165[.]43",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T02:11:22.849963+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]89[.]141[.]184",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T02:11:22.849963+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]89[.]148[.]7",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T02:11:22.849963+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]89[.]182[.]189",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T02:11:22.849963+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]89[.]76[.]249",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T02:11:22.849963+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]91[.]114[.]194",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T02:11:22.849963+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]91[.]126[.]150",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T02:11:22.849963+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]192[.]45",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T02:11:22.849963+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]192[.]88",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T02:11:22.849963+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]193[.]131",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T02:11:22.849963+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]193[.]145",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T02:11:22.849963+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]193[.]183",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T02:11:22.849963+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]195[.]17",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T02:11:22.849963+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]195[.]253",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T02:11:22.849963+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]195[.]62",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T02:11:22.849963+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]196[.]243",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T02:11:22.849963+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]196[.]3",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T02:11:22.849963+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]196[.]4",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T02:11:22.849963+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]197[.]182",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T02:11:22.849963+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]199[.]69",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 02:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 02:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T02:11:22.849963+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        }
    ],
    "dailySummary": {
        "stats": {
            "totalIndicators": 105189,
            "activeSources": 9,
            "criticalAlerts": 46686,
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
                "count": 11336,
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
                "count": 3432,
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
                "count": 37187,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]14[.]64[.]144",
                    "1[.]179[.]240[.]27",
                    "1[.]193[.]57[.]144"
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
                "count": 10699,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]14[.]240[.]247",
                    "1[.]15[.]221[.]192",
                    "1[.]15[.]42[.]91"
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
                "count": 1747,
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
                "count": 1695,
                "types": [
                    "url",
                    "ssl-cert",
                    "domain",
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
                    "ip",
                    "ssl-cert",
                    "domain",
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
                "count": 727,
                "types": [
                    "ssl-cert",
                    "hash"
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
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 20147,
        "lastCalculated": "2026-10-31 04:04 IST"
    }
};
