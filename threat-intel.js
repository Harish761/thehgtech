// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-31T19:58:43.096027+05:30 IST (2026-10-31 14:28 UTC)
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-31T19:58:42.428662+05:30",
    "lastUpdatedFormatted": "Oct 31, 2026 at 07:58 PM IST",
    "lastUpdatedUtc": "2026-10-31 14:28 UTC",
    "comparisonPeriod": "Oct 30 \u2013 Oct 31, 2026",
    "stats": {
        "totalIOCs": 103627,
        "byType": {
            "url": 38847,
            "ip": 49222,
            "hash": 641,
            "domain": 2158,
            "ssl-cert": 11021,
            "ip-range": 1738
        },
        "byVendor": {
            "OpenPhish": 3160,
            "Malware Bazaar": 476,
            "Spamhaus DROP": 1738,
            "CINS Army": 36119,
            "Blocklist.de": 10553,
            "URLhaus": 34528,
            "ThreatFox": 6027,
            "Feodo Tracker": 5,
            "SSL Blacklist": 11021
        },
        "topMalware": [
            {
                "name": "Vidar",
                "count": 1670,
                "types": [
                    "ssl-cert",
                    "url",
                    "domain",
                    "hash"
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1627,
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
                "name": "LummaStealer",
                "count": 558,
                "types": [
                    "ssl-cert"
                ]
            },
            {
                "name": "ConnectWise",
                "count": 548,
                "types": [
                    "ssl-cert",
                    "hash"
                ]
            },
            {
                "name": "OffLoader",
                "count": 548,
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
                "count": 418,
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
                "indicator": "7f87bd5bde3e0a713e8554f419f7c80768c5ea60",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-09-17 13:19:12",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-31 10:54 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-31T10:54:27.472789+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "9700462dfd419d0295b2753079208e939a853dce",
                "description": "Malicious SSL certificate - AsyncRAT C&C",
                "timestamp": "2026-09-17 13:18:21",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-31 10:54 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-31T10:54:27.472789+05:30",
                "campaign": "AsyncRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "45082929b125b5fb1336345d27ace6b7b85d1f77",
                "description": "Malicious SSL certificate - MiniRMM C&C",
                "timestamp": "2026-09-17 13:16:43",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-31 10:54 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-31T10:54:27.472789+05:30",
                "campaign": "MiniRMM",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "f419fdfce448a7313ebd93fe4d93ea7d07a1e56d",
                "description": "Malicious SSL certificate - PureLogsStealer C&C",
                "timestamp": "2026-09-17 13:01:28",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-31 10:54 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-31T10:54:27.472789+05:30",
                "campaign": "PureLogsStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "d2ea1d53e2027b0378fa9346965edbcc0215e251",
                "description": "Malicious SSL certificate - DCRat C&C",
                "timestamp": "2026-09-02 15:54:37",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-31 10:54 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-31T10:54:27.472789+05:30",
                "campaign": "DCRat",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "dcd0ddb2675731126703bc235532e2fe60457b2a",
                "description": "Malicious SSL certificate - PureRAT C&C",
                "timestamp": "2026-09-02 15:53:43",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-31 10:54 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-31T10:54:27.472789+05:30",
                "campaign": "PureRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "145f0fa0f6134e66fa5c80989c13987baf799bda",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-09-02 13:22:02",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-31 10:54 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-31T10:54:27.472789+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "5df6480942779ca755ba42db5446f6492a3bb99b",
                "description": "Malicious SSL certificate - PureLogsStealer C&C",
                "timestamp": "2026-08-26 12:56:40",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-31 10:54 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-31T10:54:27.472789+05:30",
                "campaign": "PureLogsStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "b73835be5d6f7dbb40f9df1347745bbb0963783c",
                "description": "Malicious SSL certificate - PureLogsStealer C&C",
                "timestamp": "2026-08-26 12:56:09",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-31 10:54 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-31T10:54:27.472789+05:30",
                "campaign": "PureLogsStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "a4a31d169043dc65fd2b36a0352564244c820b1d",
                "description": "Malicious SSL certificate - Malware C&C",
                "timestamp": "2026-08-26 08:33:17",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-31 10:54 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-31T10:54:27.472789+05:30",
                "campaign": "Malware",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "aaf31b3f7acfe6dc859d1b6269c7e17337a61fd7",
                "description": "Malicious SSL certificate - OffLoader C&C",
                "timestamp": "2026-08-26 07:29:33",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-31 10:54 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-31T10:54:27.472789+05:30",
                "campaign": "OffLoader",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "b0dfb9c6353dc65a3b503bcb2258db457c5b5947",
                "description": "Malicious SSL certificate - Malware C&C",
                "timestamp": "2026-08-26 07:28:47",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-31 10:54 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-31T10:54:27.472789+05:30",
                "campaign": "Malware",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "674a11078348ede85c2e978063a1eb6ea1dbfd81",
                "description": "Malicious SSL certificate - OffLoader C&C",
                "timestamp": "2026-08-26 07:21:37",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-31 10:54 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-31T10:54:27.472789+05:30",
                "campaign": "OffLoader",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "efed7c2a381b7d580caf89354c93991ac2de65b3",
                "description": "Malicious SSL certificate - OffLoader C&C",
                "timestamp": "2026-08-26 07:21:12",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-31 10:54 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-31T10:54:27.472789+05:30",
                "campaign": "OffLoader",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "e265df346af246b4a57b638872957cacce04f289",
                "description": "Malicious SSL certificate - DumplingsRAT C&C",
                "timestamp": "2026-08-26 07:07:39",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-31 10:54 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-31T10:54:27.472789+05:30",
                "campaign": "DumplingsRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "0f4085482fb0664e22b9dc962bd87184a2048e28",
                "description": "Malicious SSL certificate - ACRStealer C&C",
                "timestamp": "2026-08-26 06:56:29",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-31 10:54 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-31T10:54:27.472789+05:30",
                "campaign": "ACRStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "eedeb11bc67df6c7b7a714512a59dc346c1b4271",
                "description": "Malicious SSL certificate - Socks5Systemz C&C",
                "timestamp": "2026-08-26 06:55:24",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-31 10:54 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-31T10:54:27.472789+05:30",
                "campaign": "Socks5Systemz",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "ab53f86d2ce32d9306f431e8e82f39cb31f48a53",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-08-19 09:10:44",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-31 10:54 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-31T10:54:27.472789+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "304062e0d9d93dad14b84554abb56fd3af8266ff",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-08-19 09:09:29",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-31 10:54 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-31T10:54:27.472789+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "4442db8ed5780616c630362ab45b8e59f40a2e5a",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-08-19 09:08:27",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-31 10:54 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-31T10:54:27.472789+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            }
        ],
        "lastUpdated": "2026-10-31T19:58:42.428662+05:30",
        "lastUpdatedFormatted": "Oct 31, 2026 at 07:58 PM IST",
        "lastUpdatedUtc": "2026-10-31 14:28 UTC"
    },
    "vendors": {
        "OpenPhish": {
            "description": "Real-time phishing URL feed updated every 15 minutes. Tracks active phishing sites targeting major brands and financial institutions.",
            "website": "https://openphish.com/",
            "updateFrequency": "Every 15 minutes",
            "iocCount": 3451,
            "iocDataUrl": "https://thehgtech.com/ioc-data/openphish.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 3451,
                "newInLastHour": 300,
                "lastUpdate": "2026-10-31 14:28 UTC",
                "isStale": false,
                "feedStatus": "active"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://facebook[.]webmau[.]vn/",
                "hxxps://www[.]roblox[.]com[.]kz/users/137614935/profile",
                "hxxp://xmqrb724nhw-zdcynfyn-2d9e0f-pj388a[.]pages[.]dev/",
                "hxxp://8s1q2g-qw999agreg-mbtz1m8p9z2-fsgc12[.]pages[.]dev/",
                "hxxps://2u8m1c-qw144c84y-mbtz8m9p1z2-qwxk[.]pages[.]dev/"
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
                "lastUpdate": "2026-10-31 14:28 UTC",
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
            "iocCount": 1757,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 1757,
                "newInLastHour": 19,
                "lastUpdate": "2026-10-31 14:28 UTC",
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
            "iocCount": 36383,
            "iocDataUrl": "https://thehgtech.com/ioc-data/cins-army.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 36383,
                "newInLastHour": 15000,
                "lastUpdate": "2026-10-31 14:28 UTC",
                "isStale": false,
                "feedStatus": "active"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]14[.]64[.]144",
                "1[.]193[.]63[.]167",
                "1[.]2[.]252[.]192",
                "1[.]215[.]138[.]43",
                "1[.]24[.]16[.]119"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 10664,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 10664,
                "newInLastHour": 4897,
                "lastUpdate": "2026-10-31 14:28 UTC",
                "isStale": false,
                "feedStatus": "active"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]13[.]181[.]113",
                "1[.]14[.]240[.]247",
                "1[.]14[.]64[.]144",
                "1[.]15[.]221[.]192",
                "1[.]15[.]42[.]91"
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
                "lastUpdate": "2026-10-31 14:28 UTC",
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
                "lastUpdate": "2026-10-31 14:28 UTC",
                "isStale": true,
                "feedStatus": "stale"
            },
            "types": [
                "ip",
                "url",
                "domain",
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
                "lastUpdate": "2026-10-31 14:28 UTC",
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
            "iocCount": 11100,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 11100,
                "newInLastHour": 85,
                "lastUpdate": "2026-10-31 14:28 UTC",
                "isStale": false,
                "feedStatus": "active"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "f9542c3038dc3632d71c1e3735408c8577e8568a",
                "3b1a9b1ca40319bdd405d0dd09923c58d250baa0",
                "44c6ec85d52ecb270148701bc655e2af697e010f",
                "9d47db624532e58342c036323af03246682b8535",
                "d22e586d60cc68c0488c7ede7b46ebc0341cd3ce"
            ]
        }
    },
    "overview": [
        {
            "type": "ssl-cert",
            "indicator": "7f87bd5bde3e0a713e8554f419f7c80768c5ea60",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-09-17 13:19:12",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "9700462dfd419d0295b2753079208e939a853dce",
            "description": "Malicious SSL certificate - AsyncRAT C&C",
            "timestamp": "2026-09-17 13:18:21",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "AsyncRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "45082929b125b5fb1336345d27ace6b7b85d1f77",
            "description": "Malicious SSL certificate - MiniRMM C&C",
            "timestamp": "2026-09-17 13:16:43",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "MiniRMM",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "f419fdfce448a7313ebd93fe4d93ea7d07a1e56d",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-09-17 13:01:28",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "d2ea1d53e2027b0378fa9346965edbcc0215e251",
            "description": "Malicious SSL certificate - DCRat C&C",
            "timestamp": "2026-09-02 15:54:37",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "DCRat",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "dcd0ddb2675731126703bc235532e2fe60457b2a",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-09-02 15:53:43",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "145f0fa0f6134e66fa5c80989c13987baf799bda",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-09-02 13:22:02",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "5df6480942779ca755ba42db5446f6492a3bb99b",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-08-26 12:56:40",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "b73835be5d6f7dbb40f9df1347745bbb0963783c",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-08-26 12:56:09",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "a4a31d169043dc65fd2b36a0352564244c820b1d",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-08-26 08:33:17",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "aaf31b3f7acfe6dc859d1b6269c7e17337a61fd7",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-08-26 07:29:33",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "b0dfb9c6353dc65a3b503bcb2258db457c5b5947",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-08-26 07:28:47",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "674a11078348ede85c2e978063a1eb6ea1dbfd81",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-08-26 07:21:37",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "efed7c2a381b7d580caf89354c93991ac2de65b3",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-08-26 07:21:12",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "e265df346af246b4a57b638872957cacce04f289",
            "description": "Malicious SSL certificate - DumplingsRAT C&C",
            "timestamp": "2026-08-26 07:07:39",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "DumplingsRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "0f4085482fb0664e22b9dc962bd87184a2048e28",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-08-26 06:56:29",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "eedeb11bc67df6c7b7a714512a59dc346c1b4271",
            "description": "Malicious SSL certificate - Socks5Systemz C&C",
            "timestamp": "2026-08-26 06:55:24",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "Socks5Systemz",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "ab53f86d2ce32d9306f431e8e82f39cb31f48a53",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-19 09:10:44",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "304062e0d9d93dad14b84554abb56fd3af8266ff",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-19 09:09:29",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "4442db8ed5780616c630362ab45b8e59f40a2e5a",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-19 09:08:27",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "173cb58c2538a3e2fccf3f3ae72b5713e4f810a3",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-08-19 08:25:36",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "79e9e22d16866b1126c524c08afda88a225d6545",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-08-19 06:57:53",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "ff4362ad98a2821b067bc4ae0624b7da832aad83",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-08-19 06:47:44",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "030279988932ee4115de7e6e8cdeb91927c078db",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-08-19 06:44:45",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "4a6e8bfafdb4754d3fbc09a01e52a88d9d4dd57c",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-08-19 06:43:00",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "b72b8c162f5b2fe045e0445f9be1937d98279092",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-08-19 06:38:26",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "7f44d36f1f6bd375ba4e4a7866328a76047ce498",
            "description": "Malicious SSL certificate - AsyncRAT C&C",
            "timestamp": "2026-08-19 06:37:22",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "AsyncRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "57dd505a5d745deaa32411f3f7e247e6795164a5",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-19 06:35:10",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "4f6db5622e97cb304f7a739d60c8c3acba13f260",
            "description": "Malicious SSL certificate - Stealc C&C",
            "timestamp": "2026-08-19 06:33:54",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "Stealc",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "4c7132f9c8bfa60751049644820c6f3a90884ff2",
            "description": "Malicious SSL certificate - RatonRAT C&C",
            "timestamp": "2026-08-19 06:31:19",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "RatonRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "fd6a25dcc16de5e9b0a4563f8d8c94a5941bf437",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-08-19 06:26:59",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "50c542ca788f012319a8f72453ae5431e0213a4f",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-08-19 06:25:15",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "09f261bec38f8f17f3aba55d8f24e0c11236de40",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-08-19 06:24:49",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "0a2f52fe0e41f4fa2154a7a42134187aa23b6289",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-08-19 06:22:37",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "1e7d6c983d80311dcecc580135dcc216732fd478",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-19 06:13:44",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "d45abb7b4fc7a67b785708f4ba88c080b3d0207c",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-08-19 06:04:04",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "d0e596efec703d8645be9af9f1ab51b27714d9ec",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-08-19 06:00:14",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "64ba3430f767ced74b2828509a653187e9553971",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-11 20:22:54",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "940df23eebede1e1e33a4c521ba05b4b37d04d68",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-11 20:22:25",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "ca9e642c1028f3a7fa79947493c34a981705a05d",
            "description": "Malicious SSL certificate - DonutLoader C&C",
            "timestamp": "2026-08-04 12:41:40",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "DonutLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "f5c8ee530b1fd817432a4bafad12126d1ae744d4",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-08-04 12:40:05",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "b8b339de5ea80d17fb5ce2eb144d7ba28b33337a",
            "description": "Malicious SSL certificate - RatonRAT C&C",
            "timestamp": "2026-07-21 12:29:18",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "RatonRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "9000e46cabc64219fb1447d59d5443afcb412e36",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-07-21 12:29:16",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "632061b26a93455e9c4f0ac413deae710c920216",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-07-21 06:09:26",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "991bf55fc47c006b3eedf6b348296f9f7aba20eb",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-07-21 06:03:04",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "9c124d9fc4b10c04767b554f02b92d6591175e8a",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-07-21 05:52:12",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "4e5b7b186ad51a93d4e1ba0e2b5ca006b62571be",
            "description": "Malicious SSL certificate - AsyncRAT C&C",
            "timestamp": "2026-07-21 05:51:04",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "AsyncRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "48381652ae3e124b686c25282dac3858a5f2de3e",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-07-21 05:48:24",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "b7c2e44b35ac1ac31efad28747f2bc44f5d28de8",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-07-21 05:47:29",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "ca49f3e687d1e1559ffcd877d6292f9997d7782b",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-07-21 05:46:08",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "5dc598df9a1f9cf893ce86b54f8be517475d1ff9",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-07-21 05:42:59",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "e05145a93b7b5def1ca6c0e356cc4cdba3cbed9f",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-07-21 05:41:12",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "eb8e9c5b1aa45b3d4ca6b05695a50aea57f7f56e",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-07-14 10:04:15",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "3e615d9da0efbbbea30584bce2037017460f7251",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-07-14 09:11:22",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "d75206e1bb0d0ab79c93e78178e102f6ef071732",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-07-14 07:49:41",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "aa813482114409b8a5f198a39d02a77d492f7911",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-07-14 07:45:14",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "39977fc471c8a241dbe54f09ba2caaca0261710f",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-07-14 07:05:13",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "fd3af93a62968dfbe18556ec5dd6f9a208c5a294",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-07-14 07:04:57",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "7403dde12ab9b1c61109441a97fcda78ef197155",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-07-14 07:04:09",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "2b05df2a2d8cc657ebb0dce94b5c2914ee21d801",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-07-14 07:03:38",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "824d7a319b89b78f79a191f8c34bcfcd0a69abff",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-07-14 07:02:11",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "3403986d256e4ce608c0b4e9648d867a373ff6cc",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-07-13 21:19:17",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "c6693bd68a3017163e4af03742ea381bed99b122",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-06-22 15:35:54",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "27c7759091f1604717e7ab8d9238a6c507af309d",
            "description": "Malicious SSL certificate - XWorm C&C",
            "timestamp": "2026-06-22 15:35:02",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "XWorm",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "af9b4d589c6b08b420f41d0a13a2571f45d126a2",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-06-22 14:50:07",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "8ccf76e13a2b6ba73ffa36fa1b73f6bc6fd06f56",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-06-22 14:45:07",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "f453b4a0cf623b8f2659c584f583ea90d5f8d432",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-06-22 14:44:24",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "f08626244cfee3511cd3bc45a8c5e65d8c163036",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-06-22 14:41:56",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "85b767752d352a3203c71f6b61fd32aeae6a806b",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-06-22 14:41:24",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "8e35fbf43f4bcf0b871019cc1f03b7219ab2ce73",
            "description": "Malicious SSL certificate - AnyDesk C&C",
            "timestamp": "2026-06-22 14:39:46",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "AnyDesk",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "16226779301874e7f559e68812aa6d03d74baaef",
            "description": "Malicious SSL certificate - RatonRAT C&C",
            "timestamp": "2026-06-22 14:38:50",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "RatonRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "15a47f45b77ef377b9ec7f6aff1fc3fcca1c6035",
            "description": "Malicious SSL certificate - AsyncRAT C&C",
            "timestamp": "2026-06-22 14:38:39",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "AsyncRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "d6ad6ec09b6c8c63651e39d8a5f095260c719804",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-06-22 14:38:01",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "f0a01d22ddf9f4308b99f2121601dc7d49270ea9",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-06-22 14:37:14",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "607697ed7909eda4941f46e16f84f5bfaa63d4c0",
            "description": "Malicious SSL certificate - DCRat C&C",
            "timestamp": "2026-06-22 14:35:23",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "DCRat",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "3361a98a6c2746e41390b299202f149699f5a17d",
            "description": "Malicious SSL certificate - AsyncRAT C&C",
            "timestamp": "2026-06-22 14:34:52",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "AsyncRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "db6dc9a37d3f46e438d40285255b9d194aa6f93b",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-06-22 14:34:32",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "34e224a8400e52919b69759de5c573c7fb73f3e6",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-06-22 14:34:05",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "a75653fb0d720b53ce06b75400144f7348f56859",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-06-22 08:51:45",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "74c412ddb5e5ff23d519ed7f6c71d99fb8ffbaef",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-06-22 06:53:59",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "7e1b7861379d0043ae42bac6a060e5a230bd2576",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-05-31 09:20:53",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "b733673f2c221400c4e14bb6cea0f528a5dff337",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-05-31 09:20:37",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "3b8b88139678299948bf1ccc9c0fbb2b4cb5e861",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-05-31 07:29:53",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "e4f7e7830ac3c9b8f1bbdaa32294eab9a8d105c8",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-05-31 07:28:44",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "39c75b7060656d4df101e3bf55924e78c92ae716",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-05-31 07:24:24",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "2ea4f16bd2149eb975842d425d0ce0b4df4696a5",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-05-31 07:18:17",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "208e5f090262ccca9b722190e4497e69c8fb430e",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-05-31 07:18:16",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "478327adf7a49d7560c8248980f8e1b21f65c12d",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-05-31 07:15:16",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "aad6ca02d3ca8d12cd3d0e08abc9132cb40de179",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-05-31 07:07:23",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "37873872b4ee0938065d51f7571aaf09b5aad19c",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-05-24 14:09:48",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "5a1971fb973e2175e2e76bbbc265794cb03ce094",
            "description": "Malicious SSL certificate - NWHStealer C&C",
            "timestamp": "2026-05-24 14:09:30",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "NWHStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "db67f6cdddbc0b12c1dcbd97099176ac883b27e1",
            "description": "Malicious SSL certificate - NWHStealer C&C",
            "timestamp": "2026-05-24 14:09:28",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "NWHStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "9364c682044d04a298c3fdbfa767aaea8fe8d58d",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-05-24 14:08:17",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "a6822dd585e4b37d1d6196cb2dba01ac95830f0c",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-05-24 14:07:41",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "40ab89009f2bd0ba952f5af4df52867ebea9f18b",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-05-24 14:06:45",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "b333ca9940ac9d48dcdbbb45287c2ff3e62df72d",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-05-24 14:06:43",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "1ddbf3479af73a24c443adee69dcd10af9b79a93",
            "description": "Malicious SSL certificate - PureHVNC C&C",
            "timestamp": "2026-05-24 14:06:36",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "PureHVNC",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "42898c24435acf8ba2bf7fa0428f28a64d49be69",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-05-24 14:03:24",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "0e2aecc13e16525451418dcd9c0d0b41f1adbc13",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-05-24 14:02:41",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "6a998d33a87c7b36c2be68ed5c1c63929c0d6be4",
            "description": "Malicious SSL certificate - AsyncRAT C&C",
            "timestamp": "2026-05-24 14:01:49",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 10:54 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T10:54:27.472789+05:30",
            "campaign": "AsyncRAT",
            "confidence": "High"
        }
    ],
    "dailySummary": {
        "stats": {
            "totalIndicators": 103627,
            "activeSources": 9,
            "criticalAlerts": 46616,
            "activeCampaigns": 218
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
                "count": 11266,
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
                "count": 3163,
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
                "count": 36119,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]14[.]64[.]144",
                    "1[.]179[.]240[.]27",
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
                "count": 10553,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]13[.]181[.]113",
                    "1[.]14[.]240[.]247",
                    "1[.]14[.]64[.]144"
                ]
            },
            {
                "name": "Generic Phishing",
                "count": 3143,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://jkstr12wsed-htpmqskr-8m4h7g-jks91c378[.]pages[.]dev/",
                    "hxxp://skrab-zflon-vstyk-3b82fc-yjbw-vlasco[.]pages[.]dev/",
                    "hxxps://admin-suport-update-com[.]weebly[.]com/"
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
                "name": "Vidar",
                "count": 1670,
                "types": [
                    "ssl-cert",
                    "url",
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
                "count": 1627,
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
        "fastestRisingThreat": "Generic Phishing",
        "totalAttacksThisHour": 20306,
        "lastCalculated": "2026-10-31 19:58 IST"
    }
};
