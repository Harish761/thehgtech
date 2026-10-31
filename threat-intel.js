// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-11-01T01:24:27.135294+05:30 IST (2026-10-31 19:54 UTC)
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-11-01T01:24:26.540000+05:30",
    "lastUpdatedFormatted": "Nov 01, 2026 at 01:24 AM IST",
    "lastUpdatedUtc": "2026-10-31 19:54 UTC",
    "comparisonPeriod": "Oct 31 \u2013 Nov 01, 2026",
    "stats": {
        "totalIOCs": 104391,
        "byType": {
            "url": 39138,
            "ip": 49597,
            "hash": 641,
            "domain": 2158,
            "ssl-cert": 11100,
            "ip-range": 1757
        },
        "byVendor": {
            "OpenPhish": 3451,
            "Malware Bazaar": 476,
            "Spamhaus DROP": 1757,
            "CINS Army": 36383,
            "Blocklist.de": 10664,
            "URLhaus": 34528,
            "ThreatFox": 6027,
            "Feodo Tracker": 5,
            "SSL Blacklist": 11100
        },
        "topMalware": [
            {
                "name": "Vidar",
                "count": 1699,
                "types": [
                    "ssl-cert",
                    "domain",
                    "url",
                    "hash"
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1628,
                "types": [
                    "ssl-cert",
                    "ip",
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
                "count": 728,
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
                "name": "ConnectWise",
                "count": 559,
                "types": [
                    "ssl-cert",
                    "hash"
                ]
            },
            {
                "name": "OffLoader",
                "count": 559,
                "types": [
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
                "count": 443,
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
                "indicator": "f9542c3038dc3632d71c1e3735408c8577e8568a",
                "description": "Malicious SSL certificate - PureRAT C&C",
                "timestamp": "2026-10-31 10:58:29",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-31 19:58 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-31T19:58:40.130201+05:30",
                "campaign": "PureRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "3b1a9b1ca40319bdd405d0dd09923c58d250baa0",
                "description": "Malicious SSL certificate - ACRStealer C&C",
                "timestamp": "2026-10-31 08:52:19",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-31 19:58 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-31T19:58:40.130201+05:30",
                "campaign": "ACRStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "44c6ec85d52ecb270148701bc655e2af697e010f",
                "description": "Malicious SSL certificate - ACRStealer malware distribution",
                "timestamp": "2026-10-31 08:15:05",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-31 19:58 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-31T19:58:40.130201+05:30",
                "campaign": "ACRStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "9d47db624532e58342c036323af03246682b8535",
                "description": "Malicious SSL certificate - ACRStealer malware distribution",
                "timestamp": "2026-10-31 08:14:07",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-31 19:58 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-31T19:58:40.130201+05:30",
                "campaign": "ACRStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "d22e586d60cc68c0488c7ede7b46ebc0341cd3ce",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-10-31 08:07:33",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-31 19:58 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-31T19:58:40.130201+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "cf7e51ae64c43d0e0ecf6f00bddb8899f51af644",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-10-31 08:06:36",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-31 19:58 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-31T19:58:40.130201+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "dad953249b7dc6a1491183ca1f790b78038872c8",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-10-09 19:08:42",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-31 19:58 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-31T19:58:40.130201+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "3013447f5f36ed0c97f878cd6106853088a49ef8",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-10-09 18:40:04",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-31 19:58 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-31T19:58:40.130201+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "3f7c12ee118bce0a51bcb4c1896fa9a79b30bfb7",
                "description": "Malicious SSL certificate - PureRAT C&C",
                "timestamp": "2026-10-09 14:57:51",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-31 19:58 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-31T19:58:40.130201+05:30",
                "campaign": "PureRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "f1007872f795727c952c1f2b20966ec193b646a4",
                "description": "Malicious SSL certificate - MATCHBOIL C&C",
                "timestamp": "2026-10-09 09:14:20",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-31 19:58 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-31T19:58:40.130201+05:30",
                "campaign": "MATCHBOIL",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "f1d3bed8c625dc1785842ced7f1cf6aadb85942a",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-10-09 09:11:00",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-31 19:58 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-31T19:58:40.130201+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "f9ec94288d3a56dcecced514f673587156167472",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-10-09 06:11:50",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-31 19:58 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-31T19:58:40.130201+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "d89e701e024880cfd5f20e3f6ca748ee002f6bcd",
                "description": "Malicious SSL certificate - ConnectWise C&C",
                "timestamp": "2026-10-02 08:24:53",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-31 19:58 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-31T19:58:40.130201+05:30",
                "campaign": "ConnectWise",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "ff21ba4cde93cf84c7160e7bbf2d54a236e3f0ba",
                "description": "Malicious SSL certificate - ConnectWise C&C",
                "timestamp": "2026-10-02 08:21:55",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-31 19:58 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-31T19:58:40.130201+05:30",
                "campaign": "ConnectWise",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "5a0eb0b51d758eeb090d150a8664bafbcaa4bc3d",
                "description": "Malicious SSL certificate - OffLoader C&C",
                "timestamp": "2026-10-02 08:11:27",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-31 19:58 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-31T19:58:40.130201+05:30",
                "campaign": "OffLoader",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "b243f74faeb0e8cf30b79e84c846f40b31ce5f55",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-10-02 08:11:20",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-31 19:58 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-31T19:58:40.130201+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "894348a13bd989cadc0e7dab223b2d98dd2a2a8f",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-09-17 18:45:25",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-31 19:58 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-31T19:58:40.130201+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "633df5171fe70f3fed9d56136ebfa187879b4fb6",
                "description": "Malicious SSL certificate - OffLoader C&C",
                "timestamp": "2026-09-17 18:44:32",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-31 19:58 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-31T19:58:40.130201+05:30",
                "campaign": "OffLoader",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "96d6ce0654736e23138f54e29acbdb72ed65b5c2",
                "description": "Malicious SSL certificate - XWorm C&C",
                "timestamp": "2026-09-17 16:36:56",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-31 19:58 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-31T19:58:40.130201+05:30",
                "campaign": "XWorm",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "0e764db7ce91a22898f0083832b93da4d3b5d19e",
                "description": "Malicious SSL certificate - PureLogsStealer C&C",
                "timestamp": "2026-09-17 14:57:23",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-31 19:58 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-31T19:58:40.130201+05:30",
                "campaign": "PureLogsStealer",
                "confidence": "High"
            }
        ],
        "lastUpdated": "2026-11-01T01:24:26.540000+05:30",
        "lastUpdatedFormatted": "Nov 01, 2026 at 01:24 AM IST",
        "lastUpdatedUtc": "2026-10-31 19:54 UTC"
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
                "lastUpdate": "2026-10-31 19:54 UTC",
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
                "lastUpdate": "2026-10-31 19:54 UTC",
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
                "lastUpdate": "2026-10-31 19:54 UTC",
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
            "iocCount": 36492,
            "iocDataUrl": "https://thehgtech.com/ioc-data/cins-army.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 36492,
                "newInLastHour": 15000,
                "lastUpdate": "2026-10-31 19:54 UTC",
                "isStale": false,
                "feedStatus": "active"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]14[.]64[.]144",
                "1[.]170[.]196[.]186",
                "1[.]179[.]240[.]27",
                "1[.]193[.]63[.]167",
                "1[.]2[.]252[.]192"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 10726,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 10726,
                "newInLastHour": 4925,
                "lastUpdate": "2026-10-31 19:54 UTC",
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
                "lastUpdate": "2026-10-31 19:54 UTC",
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
                "lastUpdate": "2026-10-31 19:54 UTC",
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
                "lastUpdate": "2026-10-31 19:54 UTC",
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
            "iocCount": 11078,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "isStale": true,
            "feedStatus": "stale",
            "stats": {
                "total": 11078,
                "newInLastHour": 0,
                "lastUpdate": "2026-10-31 19:54 UTC",
                "isStale": true,
                "feedStatus": "stale"
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
            "indicator": "f9542c3038dc3632d71c1e3735408c8577e8568a",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-10-31 10:58:29",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T19:58:40.130201+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "3b1a9b1ca40319bdd405d0dd09923c58d250baa0",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-10-31 08:52:19",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T19:58:40.130201+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "44c6ec85d52ecb270148701bc655e2af697e010f",
            "description": "Malicious SSL certificate - ACRStealer malware distribution",
            "timestamp": "2026-10-31 08:15:05",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T19:58:40.130201+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "9d47db624532e58342c036323af03246682b8535",
            "description": "Malicious SSL certificate - ACRStealer malware distribution",
            "timestamp": "2026-10-31 08:14:07",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T19:58:40.130201+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "d22e586d60cc68c0488c7ede7b46ebc0341cd3ce",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-31 08:07:33",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T19:58:40.130201+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "cf7e51ae64c43d0e0ecf6f00bddb8899f51af644",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-31 08:06:36",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T19:58:40.130201+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "dad953249b7dc6a1491183ca1f790b78038872c8",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-09 19:08:42",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T19:58:40.130201+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "3013447f5f36ed0c97f878cd6106853088a49ef8",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-09 18:40:04",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T19:58:40.130201+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "3f7c12ee118bce0a51bcb4c1896fa9a79b30bfb7",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-10-09 14:57:51",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T19:58:40.130201+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "f1007872f795727c952c1f2b20966ec193b646a4",
            "description": "Malicious SSL certificate - MATCHBOIL C&C",
            "timestamp": "2026-10-09 09:14:20",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T19:58:40.130201+05:30",
            "campaign": "MATCHBOIL",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "f1d3bed8c625dc1785842ced7f1cf6aadb85942a",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-09 09:11:00",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T19:58:40.130201+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "f9ec94288d3a56dcecced514f673587156167472",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-09 06:11:50",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T19:58:40.130201+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "d89e701e024880cfd5f20e3f6ca748ee002f6bcd",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-10-02 08:24:53",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T19:58:40.130201+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "ff21ba4cde93cf84c7160e7bbf2d54a236e3f0ba",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-10-02 08:21:55",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T19:58:40.130201+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "5a0eb0b51d758eeb090d150a8664bafbcaa4bc3d",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-10-02 08:11:27",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T19:58:40.130201+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "b243f74faeb0e8cf30b79e84c846f40b31ce5f55",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-02 08:11:20",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T19:58:40.130201+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "894348a13bd989cadc0e7dab223b2d98dd2a2a8f",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-09-17 18:45:25",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T19:58:40.130201+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "633df5171fe70f3fed9d56136ebfa187879b4fb6",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-09-17 18:44:32",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T19:58:40.130201+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "96d6ce0654736e23138f54e29acbdb72ed65b5c2",
            "description": "Malicious SSL certificate - XWorm C&C",
            "timestamp": "2026-09-17 16:36:56",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T19:58:40.130201+05:30",
            "campaign": "XWorm",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "0e764db7ce91a22898f0083832b93da4d3b5d19e",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-09-17 14:57:23",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T19:58:40.130201+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "56054f201f4b39e290583877f7cc026f0649605f",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-09-17 14:36:51",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T19:58:40.130201+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "35f9f438c4787030939c64cb858a48b7bed8c69d",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-09-17 13:34:23",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T19:58:40.130201+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "513c67627217e9e62bf86dad646acdccca6bae7d",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-09-17 13:32:47",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T19:58:40.130201+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "a2ff80e27a773bd7505ce4ecad1b5bb136b78e30",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-09-17 13:28:01",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T19:58:40.130201+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "a6849935d34ec88563267dcc290945712a22a382",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-09-17 13:27:29",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T19:58:40.130201+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "9523fa2cadc7c0e46d0f22350939737b8a85d3e6",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-09-17 13:27:22",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T19:58:40.130201+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "66e45265f8da905b7538b0a81f1ec9b54ea12dd9",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-09-17 13:26:32",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T19:58:40.130201+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "8a6c4a35948fff86f02ab87ac8ea353ddc3f8a8e",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-09-17 13:25:17",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T19:58:40.130201+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "aee6dc1596aba77bde72f0b66a8c32785c6b8e18",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-09-17 13:24:21",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T19:58:40.130201+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "1888b7695f250f9d18e89b7c2da95e4979b65044",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-09-17 13:24:10",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T19:58:40.130201+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "9d11e28c5eacd4bd250c9015c9dd1ba40e7e138b",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-09-17 13:22:20",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T19:58:40.130201+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "9ed32abf115bfd4fd041c03a567c44579db4ed4a",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-09-17 13:21:52",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T19:58:40.130201+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "81b9727d11b0493a919a8faa01815430a0dddef2",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-09-17 13:21:40",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T19:58:40.130201+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "4a5cf0f4e8da154ed1c60ba064f0e733ce9c373e",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-09-10 13:47:04",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T19:58:40.130201+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "da016d8c7ef2176f549cd35927d92a6d9cc9e253",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-09-10 05:58:29",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T19:58:40.130201+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "199e1fd0a2f1c805aae75b33803d0e27b874b892",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-09-10 05:57:16",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T19:58:40.130201+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "5df1d8183a0c35eed21884c00e84299ded6ece0c",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-09-10 05:54:53",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T19:58:40.130201+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "ad1e251a18db0657b238f75305b312593a6276a4",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-09-10 05:54:46",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T19:58:40.130201+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "28f2252914fd660fb663fae3995bfa2202285cfe",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-09-10 05:53:19",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T19:58:40.130201+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "048bd151ab0a9c0add6d5bba9dc73521e42d9a20",
            "description": "Malicious SSL certificate - AsyncRAT C&C",
            "timestamp": "2026-09-10 05:52:55",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T19:58:40.130201+05:30",
            "campaign": "AsyncRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "4157992dbca11ebbe0938db99c79c0769ff4e1b1",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-09-03 06:13:51",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T19:58:40.130201+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "5e9de84aab8968d3a10710904a0844d0c360d2a8",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-09-03 05:31:24",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T19:58:40.130201+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "687928f5bd90cb243f29760de8d299236de2cadf",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-08-19 17:56:30",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T19:58:40.130201+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "9ba597b7a850fe598927a226f6ab2efd3050ff95",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-19 16:49:31",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T19:58:40.130201+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "16545697d78cbada6dac236b73dbeff19c9035d1",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-08-19 16:48:57",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T19:58:40.130201+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "5e7110d4c25e3aef153d9d38610550ad510f23cf",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-19 15:15:21",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T19:58:40.130201+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "0b92ba05df90855d90170858ba91680d33f76e0f",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-08-19 15:15:05",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T19:58:40.130201+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "0b7abd7fefffcfe53a7ae01594e23d9488a214b4",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-08-19 15:15:00",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T19:58:40.130201+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "fca24c810592604f11de7dc12dc790c91cc118df",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-08-19 15:14:55",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T19:58:40.130201+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "abacd13c43005d6868d9b586e029a1d6a74e1470",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-08-19 15:14:50",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T19:58:40.130201+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "01b9a51320b270b527c744a7ebc9f9bc68a94f81",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-08-19 15:14:45",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T19:58:40.130201+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "ab43d834686476fef1094bb0f9c5eef7d0bcd2f9",
            "description": "Malicious SSL certificate - SparkRAT C&C",
            "timestamp": "2026-08-19 15:14:12",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T19:58:40.130201+05:30",
            "campaign": "SparkRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "fb23354c98647902b717bbcc68657256a5dddd37",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-08-19 14:45:34",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T19:58:40.130201+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "d8614f6c4127ebeaf66a898a8e7ce3801cf03c30",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-08-12 07:34:10",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T19:58:40.130201+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "08d8ee8314ace61bcc0481fe9c0e2bfaaccf34e0",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-12 07:22:33",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T19:58:40.130201+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "793ccba0eaedcd1a87bb5200cde5a1c9f21ad4ad",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-12 07:22:19",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T19:58:40.130201+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "8c798a5e27290e239890509e6b0c08c214664a87",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-12 07:22:07",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T19:58:40.130201+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "c0b1920e3d73babea5c2ef2af7ba72977e65586b",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-12 07:21:59",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T19:58:40.130201+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "ec70fdbbd715a57474807302b27f3eb124b05049",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-12 07:21:05",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T19:58:40.130201+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "919d5be1da2b1383786286d0fb199f4575db0d59",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-12 07:20:33",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T19:58:40.130201+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "87feeb825ed6c63616f07bcc03b76454c7e1612f",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-12 07:19:33",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T19:58:40.130201+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "1d6ef2caa8acc4b05edcbf2e8b1e6ee9c7217eb9",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-12 07:17:30",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T19:58:40.130201+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "dce637479f61ac7c43c869dcce6b6a050ee29917",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-08-12 07:12:20",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T19:58:40.130201+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "d5fdf320afff16aee74bb14f25ef245ea75928ad",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-08-12 07:12:19",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T19:58:40.130201+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "4cad5fa297a09de48d002bf034f543fd7a9384ed",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-12 07:06:32",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T19:58:40.130201+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "d31628ba7beba86d4beecc67ae79fea667c1a11e",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-08-12 07:05:58",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T19:58:40.130201+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "3712fb1d824e230a43660016e4e305e623dad067",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-08-12 07:03:44",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T19:58:40.130201+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "fa9ce5456e315652b1373bf913ac45ae7bb4358a",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-12 06:59:04",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T19:58:40.130201+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "9b422835f6e86dcb59e08f1bb9a47576d98fff81",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-12 06:55:23",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T19:58:40.130201+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "7bf6011a10ea612968ea925608fa67b5d599863a",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-12 06:54:12",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T19:58:40.130201+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "25828f9462f9998c2be7214d5db7e092e3878945",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-12 06:51:27",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T19:58:40.130201+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "ded1fe95801f3c3fd8a1c73360fbaef6697bcf34",
            "description": "Malicious SSL certificate - Malware distribution",
            "timestamp": "2026-08-05 07:38:46",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T19:58:40.130201+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "30ae51f106a573be769968e15c0a6f56a2878a16",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-05 07:38:07",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T19:58:40.130201+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "c2826e64fffde42b99ba86c30055eb2dbd064319",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-08-05 07:36:48",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T19:58:40.130201+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "97dd1d6a2bc5769af6e0a7999bfaf2aeaf5452a1",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-05 07:34:31",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T19:58:40.130201+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "964d86f575c50b29d2b7157331d556859dd43e5e",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-05 07:33:41",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T19:58:40.130201+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "400866dbd7d2f51fbab5f7f73e98f60df8e0d798",
            "description": "Malicious SSL certificate - KongTuke C&C",
            "timestamp": "2026-07-07 06:25:25",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T19:58:40.130201+05:30",
            "campaign": "KongTuke",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "145b585a8d477243e229f4d660d1a9fc40b38243",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-07-07 06:18:30",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T19:58:40.130201+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "22549b9d0f61cb1d81ef6aea0ebc3689e38f12df",
            "description": "Malicious SSL certificate - RatonRAT C&C",
            "timestamp": "2026-07-07 06:18:20",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T19:58:40.130201+05:30",
            "campaign": "RatonRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "a838f21e4fbcf93b9dcb1adf61ce9a7e07729594",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-07-07 06:17:15",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T19:58:40.130201+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "c24c5b16d1b72ff6933bdc9a5034808630f1413f",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-07-07 06:17:00",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T19:58:40.130201+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "35c7582e7fe35b257038a3c687d81db0f06a1c38",
            "description": "Malicious SSL certificate - RatonRAT C&C",
            "timestamp": "2026-07-07 06:16:04",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T19:58:40.130201+05:30",
            "campaign": "RatonRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "1b64957d1d878c0c0b0b346849db2e64d487aa17",
            "description": "Malicious SSL certificate - QuasarRAT C&C",
            "timestamp": "2026-07-07 06:15:04",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T19:58:40.130201+05:30",
            "campaign": "QuasarRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "72a2354f33ff1d38b31cb19209b4b90acafaf46d",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-07-07 06:04:44",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T19:58:40.130201+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "038b7aa733f138f1a074c137fbb0430ea8f7b092",
            "description": "Malicious SSL certificate - KongTuke C&C",
            "timestamp": "2026-07-07 06:00:52",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-31T19:58:40.130201+05:30",
            "campaign": "KongTuke",
            "confidence": "High"
        },
        {
            "type": "ip",
            "indicator": "162[.]243[.]103[.]246",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-31 19:58 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-31T19:58:38.851758+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "178[.]62[.]3[.]223",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-31 19:58 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-31T19:58:38.851758+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "27[.]133[.]154[.]218",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-31 19:58 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-31T19:58:38.851758+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "34[.]204[.]119[.]63",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-31 19:58 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-31T19:58:38.851758+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "50[.]16[.]16[.]211",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-31 19:58 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-31T19:58:38.851758+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "1[.]13[.]181[.]113",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 19:58 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T19:58:36.838534+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]14[.]240[.]247",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 19:58 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T19:58:36.838534+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]14[.]64[.]144",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 19:58 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T19:58:36.838534+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]15[.]221[.]192",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 19:58 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T19:58:36.838534+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]15[.]42[.]91",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 19:58 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T19:58:36.838534+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]162[.]226[.]183",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 19:58 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T19:58:36.838534+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]214[.]214[.]114",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 19:58 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T19:58:36.838534+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]222[.]42[.]237",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 19:58 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T19:58:36.838534+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]234[.]27[.]159",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 19:58 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T19:58:36.838534+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]234[.]80[.]94",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-31 19:58 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-31 19:58 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-31T19:58:36.838534+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        }
    ],
    "dailySummary": {
        "stats": {
            "totalIndicators": 104391,
            "activeSources": 9,
            "criticalAlerts": 46695,
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
                "count": 11345,
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
                "count": 3454,
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
                "count": 36383,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]14[.]64[.]144",
                    "1[.]193[.]63[.]167",
                    "1[.]2[.]252[.]192"
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
                "count": 10664,
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
                "count": 3434,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://facebook[.]webmau[.]vn/",
                    "hxxps://www[.]roblox[.]com[.]kz/users/137614935/profile",
                    "hxxp://xmqrb724nhw-zdcynfyn-2d9e0f-pj388a[.]pages[.]dev/"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1757,
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
                "count": 1699,
                "types": [
                    "ssl-cert",
                    "domain",
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
                    "ip",
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
                "count": 728,
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
        "fastestRisingThreat": "CINS Threat List",
        "totalAttacksThisHour": 20230,
        "lastCalculated": "2026-11-01 01:24 IST"
    }
};
