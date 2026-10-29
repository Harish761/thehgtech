// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-29T22:43:21.557389+05:30 IST (2026-10-29 17:13 UTC)
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-29T22:43:20.831237+05:30",
    "lastUpdatedFormatted": "Oct 29, 2026 at 10:43 PM IST",
    "lastUpdatedUtc": "2026-10-29 17:13 UTC",
    "comparisonPeriod": "Oct 28 \u2013 Oct 29, 2026",
    "stats": {
        "totalIOCs": 106304,
        "byType": {
            "url": 39319,
            "ip": 51369,
            "hash": 641,
            "domain": 2158,
            "ssl-cert": 11059,
            "ip-range": 1758
        },
        "byVendor": {
            "OpenPhish": 3632,
            "Malware Bazaar": 476,
            "Spamhaus DROP": 1758,
            "CINS Army": 37931,
            "Blocklist.de": 10888,
            "URLhaus": 34528,
            "ThreatFox": 6027,
            "Feodo Tracker": 5,
            "SSL Blacklist": 11059
        },
        "topMalware": [
            {
                "name": "Vidar",
                "count": 1691,
                "types": [
                    "domain",
                    "hash",
                    "url",
                    "ssl-cert"
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1623,
                "types": [
                    "domain",
                    "hash",
                    "ip",
                    "ssl-cert"
                ]
            },
            {
                "name": "Cobalt Strike",
                "count": 1183,
                "types": [
                    "domain",
                    "hash",
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
                "count": 726,
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
                "count": 558,
                "types": [
                    "ssl-cert"
                ]
            },
            {
                "name": "ConnectWise",
                "count": 557,
                "types": [
                    "hash",
                    "ssl-cert"
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
                "count": 438,
                "types": [
                    "ip",
                    "ssl-cert"
                ]
            },
            {
                "name": "Malware",
                "count": 416,
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
                "indicator": "e10fe9007408391e4c3a808ae4b7c4cb6e7df1a3",
                "description": "Malicious SSL certificate - OnyxC2 C&C",
                "timestamp": "2026-10-20 16:02:55",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-28 10:57 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-28T10:57:06.477873+05:30",
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
                "analysisTime": "2026-10-28 10:57 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-28T10:57:06.477873+05:30",
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
                "analysisTime": "2026-10-28 10:57 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-28T10:57:06.477873+05:30",
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
                "analysisTime": "2026-10-28 10:57 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-28T10:57:06.477873+05:30",
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
                "analysisTime": "2026-10-28 10:57 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-28T10:57:06.477873+05:30",
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
                "analysisTime": "2026-10-28 10:57 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-28T10:57:06.477873+05:30",
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
                "analysisTime": "2026-10-28 10:57 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-28T10:57:06.477873+05:30",
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
                "analysisTime": "2026-10-28 10:57 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-28T10:57:06.477873+05:30",
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
                "analysisTime": "2026-10-28 10:57 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-28T10:57:06.477873+05:30",
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
                "analysisTime": "2026-10-28 10:57 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-28T10:57:06.477873+05:30",
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
                "analysisTime": "2026-10-28 10:57 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-28T10:57:06.477873+05:30",
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
                "analysisTime": "2026-10-28 10:57 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-28T10:57:06.477873+05:30",
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
                "analysisTime": "2026-10-28 10:57 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-28T10:57:06.477873+05:30",
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
                "analysisTime": "2026-10-28 10:57 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-28T10:57:06.477873+05:30",
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
                "analysisTime": "2026-10-28 10:57 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-28T10:57:06.477873+05:30",
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
                "analysisTime": "2026-10-28 10:57 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-28T10:57:06.477873+05:30",
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
                "analysisTime": "2026-10-28 10:57 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-28T10:57:06.477873+05:30",
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
                "analysisTime": "2026-10-28 10:57 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-28T10:57:06.477873+05:30",
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
                "analysisTime": "2026-10-28 10:57 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-28T10:57:06.477873+05:30",
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
                "analysisTime": "2026-10-28 10:57 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-28T10:57:06.477873+05:30",
                "campaign": "OffLoader",
                "confidence": "High"
            }
        ],
        "lastUpdated": "2026-10-29T22:43:20.831237+05:30",
        "lastUpdatedFormatted": "Oct 29, 2026 at 10:43 PM IST",
        "lastUpdatedUtc": "2026-10-29 17:13 UTC"
    },
    "vendors": {
        "OpenPhish": {
            "description": "Real-time phishing URL feed updated every 15 minutes. Tracks active phishing sites targeting major brands and financial institutions.",
            "website": "https://openphish.com/",
            "updateFrequency": "Every 15 minutes",
            "iocCount": 3438,
            "iocDataUrl": "https://thehgtech.com/ioc-data/openphish.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 3438,
                "newInLastHour": 300,
                "lastUpdate": "2026-10-29 17:13 UTC",
                "isStale": false,
                "feedStatus": "active"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://web-ldgrlive-desktop[.]pages[.]dev/",
                "hxxps://digitalbr[.]myftp[.]org/",
                "hxxps://free-consultoria[.]services/",
                "hxxp://service[.]courrierar24[.]co/",
                "hxxps://security-server-page--richardgilbert3[.]replit[.]app/"
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
                "lastUpdate": "2026-10-29 17:13 UTC",
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
            "iocCount": 1639,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 1639,
                "newInLastHour": 3,
                "lastUpdate": "2026-10-29 17:13 UTC",
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
            "iocCount": 37659,
            "iocDataUrl": "https://thehgtech.com/ioc-data/cins-army.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 37659,
                "newInLastHour": 15000,
                "lastUpdate": "2026-10-29 17:13 UTC",
                "isStale": false,
                "feedStatus": "active"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]12[.]229[.]231",
                "1[.]15[.]14[.]29",
                "1[.]189[.]248[.]116",
                "1[.]193[.]63[.]52",
                "1[.]214[.]29[.]155"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 10809,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 10809,
                "newInLastHour": 4841,
                "lastUpdate": "2026-10-29 17:13 UTC",
                "isStale": false,
                "feedStatus": "active"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]117[.]72[.]220",
                "1[.]14[.]240[.]247",
                "1[.]15[.]106[.]134",
                "1[.]2[.]252[.]192",
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
                "lastUpdate": "2026-10-29 17:13 UTC",
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
                "lastUpdate": "2026-10-29 17:13 UTC",
                "isStale": true,
                "feedStatus": "stale"
            },
            "types": [
                "domain",
                "hash",
                "url",
                "ip"
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
                "lastUpdate": "2026-10-29 17:13 UTC",
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
            "iocCount": 10693,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 10693,
                "newInLastHour": 28,
                "lastUpdate": "2026-10-29 17:13 UTC",
                "isStale": false,
                "feedStatus": "active"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "32facbb63422b11875f949b45ceb306e4673a3b7",
                "db1370abc2fbcfc4d9dc332b56f0d2e91deb9d23",
                "840910d1faf7f934326f08cd5424862ca50646d5",
                "b843ff0bf989bbda8086054a9d9ce65e885e4845",
                "62ddff80b88f12d3ca6ba44eb09b5e7ba9e2f390"
            ]
        }
    },
    "overview": [
        {
            "type": "ssl-cert",
            "indicator": "e10fe9007408391e4c3a808ae4b7c4cb6e7df1a3",
            "description": "Malicious SSL certificate - OnyxC2 C&C",
            "timestamp": "2026-10-20 16:02:55",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
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
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
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
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
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
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
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
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
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
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
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
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
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
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
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
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
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
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
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
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
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
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
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
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
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
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
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
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
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
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
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
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
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
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
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
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
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
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
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
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
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
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
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
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
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
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
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
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
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
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
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
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
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
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
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
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
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
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
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
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
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
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
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
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
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
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
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
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
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
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
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
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
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
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
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
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
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
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
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
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
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
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
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
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
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
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
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
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
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
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
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
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
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
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
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
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
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
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
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
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
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
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
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
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
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
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
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
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
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
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
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
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
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
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
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
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "28c3106cd1cec9a5dfec7f2ba3b0dd7e70784429",
            "description": "Malicious SSL certificate - QuasarRAT C&C",
            "timestamp": "2026-06-04 18:12:37",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
            "campaign": "QuasarRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "7162dcab7590a4a6080e97d04f49cf0939db039c",
            "description": "Malicious SSL certificate - KongTuke C&C",
            "timestamp": "2026-06-04 17:57:47",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
            "campaign": "KongTuke",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "e42d598b3e6edb6b1899c5a72d03de435a82e4a3",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-06-04 14:32:26",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "ff83fb186112903cb2e39578e268e1937cea9317",
            "description": "Malicious SSL certificate - LiberiumRAT C&C",
            "timestamp": "2026-06-04 08:30:43",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
            "campaign": "LiberiumRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "f9f3f5ba3c746db5200118359cc83768d457e849",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-06-04 08:29:15",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "caff4adfa4b82c536fb487576f223a5ee64d4194",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-06-04 08:27:15",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "f86f5e9268dc6dda71fc61ebb657feeaadb9cec9",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-06-04 08:26:29",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "25cec5dfbffe744af691b5fe996769cc84244f78",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-06-04 08:19:06",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "73fd6642b1856961ecc5c484d64b8e4fdbc52938",
            "description": "Malicious SSL certificate - RatonRAT C&C",
            "timestamp": "2026-06-04 07:58:45",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
            "campaign": "RatonRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "bf26c599e3f5ea932f7b8c592138d42d49837713",
            "description": "Malicious SSL certificate - QuasarRAT C&C",
            "timestamp": "2026-06-04 07:58:25",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
            "campaign": "QuasarRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "c03231e2f73ff60033ad62bb15825fe300250b40",
            "description": "Malicious SSL certificate - PureHVNC C&C",
            "timestamp": "2026-06-04 07:58:11",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
            "campaign": "PureHVNC",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "ae87b4dab40e1d42fe3558bab959204a915be547",
            "description": "Malicious SSL certificate - GhostPulse C&C",
            "timestamp": "2026-06-04 07:58:00",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
            "campaign": "GhostPulse",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "564b4902e12a0412bc9df5369f51cd6d273d5974",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-06-04 07:57:34",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "c8e467b8079c136bf678b3d96129f3f73e1af7ea",
            "description": "Malicious SSL certificate - BloxStealer C&C",
            "timestamp": "2026-06-04 07:57:18",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
            "campaign": "BloxStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "fb65cb3929bf5df8ed6de3cb5b2c6b87b3f6e3d9",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-06-04 07:55:44",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "5b27051d67aa2cce9314596003b68709a13fc003",
            "description": "Malicious SSL certificate - QuasarRAT C&C",
            "timestamp": "2026-06-04 07:55:11",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
            "campaign": "QuasarRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "8d3af387e977c9f7725d1b7815d94d19855f1bfb",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-06-04 07:55:00",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "1ac05fe7afa7319eeb2b9778c1e5813b3a812cbc",
            "description": "Malicious SSL certificate - PureHVNC C&C",
            "timestamp": "2026-06-04 07:47:29",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
            "campaign": "PureHVNC",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "0ec9537b097728cac0888bf4e5ea33aa93dc8b0f",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-06-04 06:43:18",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "81a2f4a6d8b0f68689ef88ab80f910bc49dee5b0",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-06-04 06:00:16",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "b50cde8b1aad72f56fcdb45ed3478618b0f23bda",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-06-04 05:58:51",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "a4533c805837a80effd9ff29809a4b3bdd0de131",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-06-04 05:38:31",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "5ee4d7b604f171d33d76834a9189a8ebb4cf7948",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-06-04 05:37:21",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "7846af5f9280411a6026de26920ac9ea9b2c4bcd",
            "description": "Malicious SSL certificate - KongTuke C&C",
            "timestamp": "2026-06-04 05:28:34",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
            "campaign": "KongTuke",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "8e733b34e95a7b98ada40292b8d35e9040016e65",
            "description": "Malicious SSL certificate - QuasarRAT C&C",
            "timestamp": "2026-05-28 13:09:53",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
            "campaign": "QuasarRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "4b19add85966daaef23fdea4c1527633a36a88ba",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-05-28 13:09:31",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "9c5605a73a159de919523a8f844814d47e79a321",
            "description": "Malicious SSL certificate - PureHVNC C&C",
            "timestamp": "2026-05-28 11:46:44",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
            "campaign": "PureHVNC",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "1fe4d1c9b7106f25e606894cb6a64f69c4862b29",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-05-28 09:13:19",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "5d7baf5503517e28f05467332d905eb8193e651b",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-05-28 07:50:17",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "9f0d33c1eaa7afd41009d0ec594c0a408d2df123",
            "description": "Malicious SSL certificate - QuasarRAT C&C",
            "timestamp": "2026-05-28 07:48:46",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
            "campaign": "QuasarRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "572a6064cb85cd5eef1204d45625640cf982c1ce",
            "description": "Malicious SSL certificate - RatonRAT C&C",
            "timestamp": "2026-05-28 07:48:41",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
            "campaign": "RatonRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "2de4fd0094bc96c8339f3b8c67985f8a7b89b84a",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-05-28 07:48:03",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "a9f5a1cdf5c8168262c2e6cf9351698e156eeebd",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-05-28 07:21:32",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "e46daac5110a9833887fb014ff2abfe4d93acca3",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-05-28 07:21:11",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "753813a52be7893b0d66184503b62cc2bfcaebc4",
            "description": "Malicious SSL certificate - DCRat C&C",
            "timestamp": "2026-05-28 07:17:47",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
            "campaign": "DCRat",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "3b1e86b2d02b689e8fe1bf9416c64129e87f71ae",
            "description": "Malicious SSL certificate - RatonRAT C&C",
            "timestamp": "2026-05-28 07:16:07",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
            "campaign": "RatonRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "1b697067f699bc99bf6a48d003bfd9c9b289450d",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-05-28 07:15:42",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "e69e1ee3a1dd8500353a3d45dbc8ebd21c584863",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-05-28 07:14:21",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "7bba8eb1da43142534144a1aaf30b1be8a5ed134",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-05-28 07:14:05",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "d094f88c63e4ec8e84ec40ac2d22d5a3d87c419a",
            "description": "Malicious SSL certificate - PureHVNC C&C",
            "timestamp": "2026-05-28 07:13:27",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
            "campaign": "PureHVNC",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "f3b02175ff6d2bbf0149b4a450acdf2a9f2897c8",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-05-28 07:04:01",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 10:57 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T10:57:06.477873+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        }
    ],
    "dailySummary": {
        "stats": {
            "totalIndicators": 106304,
            "activeSources": 9,
            "criticalAlerts": 46654,
            "activeCampaigns": 218
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 35350,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "C2",
                "count": 11304,
                "trend": "stable",
                "percentage": 3
            },
            {
                "category": "Botnet",
                "count": 4297,
                "trend": "stable",
                "percentage": -6
            },
            {
                "category": "Phishing",
                "count": 3635,
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
                "count": 37931,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]214[.]29[.]155",
                    "1[.]215[.]138[.]43",
                    "1[.]236[.]254[.]202"
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
                "count": 10888,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]117[.]72[.]220",
                    "1[.]14[.]149[.]30",
                    "1[.]14[.]192[.]95"
                ]
            },
            {
                "name": "Generic Phishing",
                "count": 3604,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://2017-facebook[.]blogspot[.]com/",
                    "hxxps://www[.]2017-facebook[.]blogspot[.]com/",
                    "hxxp://microfis-password-recovery[.]wasmer[.]app/"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1758,
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
                "count": 1623,
                "types": [
                    "domain",
                    "hash",
                    "ip",
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
                    "domain",
                    "hash",
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
                "count": 726,
                "types": [
                    "hash",
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "898a138ef42c7846cd641bd8406a9ec940991b26113389bbc847648a76cf104c",
                    "bd8eb13b5f944ac4c4a03a22d8c1b574bd02ee4f",
                    "e22f91a1cca032454ef45d769cd9b3374283b2a2"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "RevStealer",
        "totalAttacksThisHour": 20177,
        "lastCalculated": "2026-10-29 22:43 IST"
    }
};
