// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-22T10:01:32.361179+05:30 IST (2026-10-22 04:31 UTC)
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-22T10:01:31.232560+05:30",
    "lastUpdatedFormatted": "Oct 22, 2026 at 10:01 AM IST",
    "lastUpdatedUtc": "2026-10-22 04:31 UTC",
    "comparisonPeriod": "Oct 21 \u2013 Oct 22, 2026",
    "stats": {
        "totalIOCs": 113531,
        "byType": {
            "url": 47216,
            "ip": 43507,
            "hash": 6537,
            "domain": 3563,
            "ssl-cert": 11017,
            "ip-range": 1691
        },
        "byVendor": {
            "OpenPhish": 1840,
            "Malware Bazaar": 4009,
            "Spamhaus DROP": 1691,
            "CINS Army": 32025,
            "Blocklist.de": 8440,
            "URLhaus": 35628,
            "ThreatFox": 18876,
            "Feodo Tracker": 5,
            "SSL Blacklist": 11017
        },
        "topMalware": [
            {
                "name": "Vidar",
                "count": 2456,
                "types": [
                    "ssl-cert",
                    "domain",
                    "url",
                    "hash",
                    "ip"
                ]
            },
            {
                "name": "Mirai",
                "count": 1950,
                "types": [
                    "url",
                    "hash",
                    "ip",
                    "domain"
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1667,
                "types": [
                    "ssl-cert",
                    "domain",
                    "url",
                    "hash",
                    "ip"
                ]
            },
            {
                "name": "IClickFix",
                "count": 1280,
                "types": [
                    "url",
                    "domain"
                ]
            },
            {
                "name": "win.cobalt_strike",
                "count": 1265,
                "types": [
                    "url"
                ]
            },
            {
                "name": "Cobalt Strike",
                "count": 1219,
                "types": [
                    "hash",
                    "ip",
                    "domain"
                ]
            },
            {
                "name": "AMOS",
                "count": 763,
                "types": [
                    "url",
                    "hash",
                    "domain"
                ]
            },
            {
                "name": "QuasarRAT",
                "count": 740,
                "types": [
                    "hash",
                    "ssl-cert"
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
                "name": "Unknown Loader",
                "count": 707,
                "types": [
                    "url",
                    "hash",
                    "ip",
                    "domain"
                ]
            },
            {
                "name": "elf.mirai",
                "count": 703,
                "types": [
                    "url"
                ]
            },
            {
                "name": "win.pure_rat",
                "count": 650,
                "types": [
                    "url"
                ]
            },
            {
                "name": "win.vidar",
                "count": 596,
                "types": [
                    "url"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 563,
                "types": [
                    "hash",
                    "ssl-cert"
                ]
            },
            {
                "name": "ConnectWise",
                "count": 560,
                "types": [
                    "hash",
                    "ssl-cert"
                ]
            }
        ],
        "recentIOCs": [
            {
                "type": "ssl-cert",
                "indicator": "d04d7126cb34075240b0bfea2b26b345254b189f",
                "description": "Malicious SSL certificate - ValetiStealer C&C",
                "timestamp": "2026-10-07 15:04:12",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-22 04:44 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-22T04:44:34.499126+05:30",
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
                "analysisTime": "2026-10-22 04:44 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-22T04:44:34.499126+05:30",
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
                "analysisTime": "2026-10-22 04:44 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-22T04:44:34.499126+05:30",
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
                "analysisTime": "2026-10-22 04:44 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-22T04:44:34.499126+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "2e57d619d591a232e8f11d850822531b3bda29a4",
                "description": "Malicious SSL certificate - Malware C&C",
                "timestamp": "2026-09-22 17:54:51",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-22 04:44 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-22T04:44:34.499126+05:30",
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
                "analysisTime": "2026-10-22 04:44 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-22T04:44:34.499126+05:30",
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
                "analysisTime": "2026-10-22 04:44 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-22T04:44:34.499126+05:30",
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
                "analysisTime": "2026-10-22 04:44 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-22T04:44:34.499126+05:30",
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
                "analysisTime": "2026-10-22 04:44 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-22T04:44:34.499126+05:30",
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
                "analysisTime": "2026-10-22 04:44 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-22T04:44:34.499126+05:30",
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
                "analysisTime": "2026-10-22 04:44 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-22T04:44:34.499126+05:30",
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
                "analysisTime": "2026-10-22 04:44 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-22T04:44:34.499126+05:30",
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
                "analysisTime": "2026-10-22 04:44 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-22T04:44:34.499126+05:30",
                "campaign": "SeroRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "1e5bfc073ee72f5ae99507c87f2479ec1d5f43b7",
                "description": "Malicious SSL certificate - PureLogsStealer C&C",
                "timestamp": "2026-09-15 15:50:09",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-22 04:44 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-22T04:44:34.499126+05:30",
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
                "analysisTime": "2026-10-22 04:44 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-22T04:44:34.499126+05:30",
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
                "analysisTime": "2026-10-22 04:44 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-22T04:44:34.499126+05:30",
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
                "analysisTime": "2026-10-22 04:44 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-22T04:44:34.499126+05:30",
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
                "analysisTime": "2026-10-22 04:44 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-22T04:44:34.499126+05:30",
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
                "analysisTime": "2026-10-22 04:44 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-22T04:44:34.499126+05:30",
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
                "analysisTime": "2026-10-22 04:44 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-22T04:44:34.499126+05:30",
                "campaign": "ACRStealer",
                "confidence": "High"
            }
        ],
        "lastUpdated": "2026-10-22T10:01:31.232560+05:30",
        "lastUpdatedFormatted": "Oct 22, 2026 at 10:01 AM IST",
        "lastUpdatedUtc": "2026-10-22 04:31 UTC"
    },
    "vendors": {
        "OpenPhish": {
            "description": "Real-time phishing URL feed updated every 15 minutes. Tracks active phishing sites targeting major brands and financial institutions.",
            "website": "https://openphish.com/",
            "updateFrequency": "Every 15 minutes",
            "iocCount": 2063,
            "iocDataUrl": "https://thehgtech.com/ioc-data/openphish.json",
            "stats": {
                "total": 2063,
                "newInLastHour": 300,
                "lastUpdate": "2026-10-22 04:31 UTC"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://www[.]anz-internetbanking[.]blogspot[.]com/",
                "hxxp://www[.]authenticateuseridentity[.]vercel[.]app/",
                "hxxps://aminu-gal-expenses[.]netlify[.]app/",
                "hxxp://sp28ct-dureq-biz-qamel-ranek[.]pages[.]dev/",
                "hxxps://sp26ct10-zulvako-biz-taremi[.]pages[.]dev/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4009,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 4009,
                "newInLastHour": 0,
                "lastUpdate": "2026-10-22 04:31 UTC"
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
            "iocCount": 1652,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1652,
                "newInLastHour": 0,
                "lastUpdate": "2026-10-22 04:31 UTC"
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
            "iocCount": 32400,
            "iocDataUrl": "https://thehgtech.com/ioc-data/cins-army.json",
            "stats": {
                "total": 32400,
                "newInLastHour": 15000,
                "lastUpdate": "2026-10-22 04:31 UTC"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]14[.]149[.]30",
                "1[.]168[.]172[.]140",
                "1[.]193[.]57[.]156",
                "1[.]214[.]29[.]155",
                "1[.]215[.]138[.]43"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 8610,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 8610,
                "newInLastHour": 5210,
                "lastUpdate": "2026-10-22 04:31 UTC"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]117[.]72[.]220",
                "1[.]12[.]36[.]175",
                "1[.]12[.]55[.]80",
                "1[.]14[.]110[.]231",
                "1[.]14[.]240[.]247"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 35628,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 35628,
                "newInLastHour": 0,
                "lastUpdate": "2026-10-22 04:31 UTC"
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
            "iocCount": 18876,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 18876,
                "newInLastHour": 0,
                "lastUpdate": "2026-10-22 04:31 UTC"
            },
            "types": [
                "url",
                "hash",
                "ip",
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
            "stats": {
                "total": 5,
                "newInLastHour": 5,
                "lastUpdate": "2026-10-22 04:31 UTC"
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
            "iocCount": 10900,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10900,
                "newInLastHour": 8,
                "lastUpdate": "2026-10-22 04:31 UTC"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "7ed29169b508169575d0d26850aca8a93044067c",
                "082cdbff4a21322dcf87bbc200976465f072ae6e",
                "a546ecee7425b15ec2b0b63cd012b897d627cdc9",
                "815ef869856dfa28c55e7c5e07f1d0cce6a4e426",
                "9eabf92b1ca6728e2a32c3a090b11c177ac686c3"
            ]
        }
    },
    "overview": [
        {
            "type": "ssl-cert",
            "indicator": "d04d7126cb34075240b0bfea2b26b345254b189f",
            "description": "Malicious SSL certificate - ValetiStealer C&C",
            "timestamp": "2026-10-07 15:04:12",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
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
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
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
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
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
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "2e57d619d591a232e8f11d850822531b3bda29a4",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-09-22 17:54:51",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
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
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
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
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
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
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
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
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
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
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
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
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
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
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
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
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
            "campaign": "SeroRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "1e5bfc073ee72f5ae99507c87f2479ec1d5f43b7",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-09-15 15:50:09",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
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
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
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
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
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
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
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
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
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
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
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
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
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
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
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
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
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
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
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
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
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
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
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
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
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
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
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
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
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
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
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
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "a7a6a1125d19a58e8b9ca2c7d187915e06c0adce",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-08-31 14:10:21",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "52a61a5bae1d5d4fb771c4d8ab668c3570c77283",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-08-31 14:04:17",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "ed312f7ad58a9faec6d3c93aabf598335fdf494c",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-31 14:00:27",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "b1382377a32ee6c85e47edf264f1f6ef5b49e2a3",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-08-31 09:29:01",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "d268bd42f68634bb226be6b56dc4b7c13e930d2a",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-08-31 08:31:55",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "2e5d32f48396874bdbf9e30cbf56d9d5440f24ec",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-08-31 08:23:52",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "fabe6574c3ef1f4a4782c88475755b7b97f1410d",
            "description": "Malicious SSL certificate - HypeAgent C&C",
            "timestamp": "2026-08-31 07:36:16",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
            "campaign": "HypeAgent",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "9df53aa0bf7a64882c66ee9c8122b4eae9cf79a6",
            "description": "Malicious SSL certificate - HypeAgent C&C",
            "timestamp": "2026-08-31 07:34:54",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
            "campaign": "HypeAgent",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "f0e6af342ccf5fe1beb177e2bf3cb2cac4aa1fa6",
            "description": "Malicious SSL certificate - RatonRAT C&C",
            "timestamp": "2026-08-31 07:34:24",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
            "campaign": "RatonRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "328089d815eb8db2dcb741cd603fc451295636d4",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-08-31 07:12:40",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "dac0432f5f74d7d465966420968c96166217923f",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-31 07:12:28",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "8c2a430246ca36ca14885fe1a101c61eaab4a96c",
            "description": "Malicious SSL certificate - AsyncRAT C&C",
            "timestamp": "2026-08-31 07:11:50",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
            "campaign": "AsyncRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "4af902fc388e5b848db1767a6c708e2ada0ad99a",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-31 06:57:14",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "fba4408cd54abbe1ba49117ceab8a90335b03217",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-31 06:52:51",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "7a9be497f84c09e7591ba7c7d69539a6e0468302",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-24 13:38:10",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "277cf8e1227351964ba2a8e57b49b26f8f8e353a",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-24 13:37:35",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "abe57abc8722c69494113060260ba340cd897744",
            "description": "Malicious SSL certificate - ShellterLoader C&C",
            "timestamp": "2026-08-17 09:55:55",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
            "campaign": "ShellterLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "89bbec947a91917d4676037abb417ceb72770851",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-17 07:50:14",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "b26d3f583556acab11cbfa864f596c143b15f32d",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-17 07:48:17",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "fc5d9dddb01c263a67e7c485e04277afa82fbabf",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-17 07:47:55",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "a6268e092f3de555c67dac2f9e52eae979b3d8e3",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-17 07:46:46",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "40d55bdf808d31690157cc7865a3161d6f44f073",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-17 07:45:17",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "b9e2100c0408138edfedb92704bfc57ef9fb59f0",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-08-10 09:49:18",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "32a8651489a0a5fb3fb0679514bed1e86c0c576c",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-08-10 09:33:43",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "8f0bfca0ab1d555a035d5b498c9e26acdab3d7aa",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-08-10 09:33:42",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "10444531944b9b521661ef3bd8d9848d70902bbd",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-08-10 08:24:13",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "930851db267db9c407bc5adaa9d49f5c994abece",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-08-10 08:22:09",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "88b2180ded8f8a30de34b4dc84c2328bbd0af49f",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-08-10 08:21:04",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "3e3c44169f96771a93af70cef73772afc6530f39",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-10 08:20:51",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "b364395fee8c2e4c9eaf9a2531f6f7ac7bf8e4ae",
            "description": "Malicious SSL certificate - QuasarRAT C&C",
            "timestamp": "2026-08-10 08:20:31",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
            "campaign": "QuasarRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "5b0334a2bc768aa1fef1eb0d10bf52edb071bf1c",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-10 08:19:54",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "55828dc9278fe7cc50514d9e95e64422804a0b84",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-08-10 08:19:30",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "da841f680c2699118b0f96b74c16b0625e03f180",
            "description": "Malicious SSL certificate - Amadey C&C",
            "timestamp": "2026-08-10 08:19:07",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
            "campaign": "Amadey",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "e61c2fca353a70e5eef94a7a6a0d72fa1fcd2df2",
            "description": "Malicious SSL certificate - Amadey C&C",
            "timestamp": "2026-08-10 08:19:06",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
            "campaign": "Amadey",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "11a907f87c27b67e87f201281797b95f53508752",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-08-10 08:19:03",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "60df0e327f3736946e966b453ef233da0c42b927",
            "description": "Malicious SSL certificate - Havoc C&C",
            "timestamp": "2026-08-10 08:18:38",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
            "campaign": "Havoc",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "05ba9d18bc4c00bec6bb5ed461fd889259929709",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-02 14:35:50",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "131d534087149d0095a326dcb33e77afcbec308c",
            "description": "Malicious SSL certificate - AnimateClipper C&C",
            "timestamp": "2026-07-26 11:17:38",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
            "campaign": "AnimateClipper",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "7a8f361d188e552651fea1204d5399d889312da2",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-07-12 08:12:14",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "b87dc4ee057f64c6592d11ed074e03caf92e2851",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-07-04 07:16:41",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "85725890743b16375132651911e3f692115128a8",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-06-27 06:45:40",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "68a81d42abb025f982a44a7caefb588f515b6790",
            "description": "Malicious SSL certificate - DonutLoader C&C",
            "timestamp": "2026-06-20 09:06:08",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
            "campaign": "DonutLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "d4ea5c5ed890d658f9ef23555e312c694793d831",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-06-20 06:23:55",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "8cb01cefc1fb1be2b68c00ad8a801a40ff0dacf3",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-06-20 06:13:51",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "535bea5950f28c905e73148a5d0d69229eca4ad2",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-06-20 06:13:31",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "dcd708a5925943afaf7eaf3b7a7fabeb332155c5",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-05-29 06:31:12",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "34a8dc4fb4f4b41fc7bbae738f988305739eb56a",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-05-22 08:23:57",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "bb1df8c1e6236408eb85294e9ce002f9222e57db",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-05-15 13:57:26",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "fe322929a69e13348a8824c9eb27d58d8a82313b",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-05-15 13:56:48",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "cf08f1d2e3da9567cd2398ecb5f8df0503ce857f",
            "description": "Malicious SSL certificate - SnappyClient C&C",
            "timestamp": "2026-05-08 09:21:41",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
            "campaign": "SnappyClient",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "d30376a0f461e6cc126e18beb023e71c703912c0",
            "description": "Malicious SSL certificate - SnappyClient C&C",
            "timestamp": "2026-05-08 09:21:40",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
            "campaign": "SnappyClient",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "12adb13f09a921ef558cd28c50ac4de81e1b8ad3",
            "description": "Malicious SSL certificate - RatonRAT C&C",
            "timestamp": "2026-05-08 09:20:28",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
            "campaign": "RatonRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "646821885b9e966ba8bb62c511f6b90a0b8d58c8",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-05-08 09:19:27",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "693673f31128d9637630776f2989b5c29c77b04d",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-05-08 09:18:44",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "e7794a6055d9e3d5ead7741379a14058e0387c18",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-05-08 09:18:24",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "5bb5b87a8f5d20bf3d5c6d64b3cf71fba84b43fd",
            "description": "Malicious SSL certificate - AsyncRAT C&C",
            "timestamp": "2026-05-08 09:17:02",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
            "campaign": "AsyncRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "e98a74657b20c543eae044a0c30c754b74e0be47",
            "description": "Malicious SSL certificate - SnappyClient C&C",
            "timestamp": "2026-05-08 09:13:16",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
            "campaign": "SnappyClient",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "72acf314bf4f7e4404003f03407ab3cee9f87121",
            "description": "Malicious SSL certificate - SnappyClient C&C",
            "timestamp": "2026-05-08 09:13:00",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
            "campaign": "SnappyClient",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "0b4af41022c93826bef925fd3b0f658ea3307c6f",
            "description": "Malicious SSL certificate - SnappyClient C&C",
            "timestamp": "2026-05-08 09:12:59",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
            "campaign": "SnappyClient",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "df02815d50b3d1684f2f5ad2b3fd3ce9b907a57d",
            "description": "Malicious SSL certificate - MaksRAT C&C",
            "timestamp": "2026-05-08 09:12:04",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
            "campaign": "MaksRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "0f6b3491e94f40a637680924c507a494426e534c",
            "description": "Malicious SSL certificate - AsyncRAT C&C",
            "timestamp": "2026-05-08 09:10:23",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
            "campaign": "AsyncRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "65e7ee12cf141d831c697091f161c0c23544abbc",
            "description": "Malicious SSL certificate - PureHVNC C&C",
            "timestamp": "2026-05-08 09:07:50",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
            "campaign": "PureHVNC",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "e34b073422d220ec2338ca09738db9fe3481ba68",
            "description": "Malicious SSL certificate - PureHVNC C&C",
            "timestamp": "2026-05-08 09:05:51",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
            "campaign": "PureHVNC",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "4ea9780c4039e050f0e2433deaa076a1ed3e1cec",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-05-08 09:04:05",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "8a9c74049483847464da1ca3cf6f1f44e17a5f0f",
            "description": "Malicious SSL certificate - QuasarRAT C&C",
            "timestamp": "2026-05-08 08:49:40",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
            "campaign": "QuasarRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "c3a91892391bdb3668731a49dc409376e6aa2d93",
            "description": "Malicious SSL certificate - Meterpreter C&C",
            "timestamp": "2026-05-08 08:48:54",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
            "campaign": "Meterpreter",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "87e5589d7d33aa32595bc8f2ac6275a4f1620fb1",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-05-08 08:35:04",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "19d15b1da5879c55171757e38482a9b1a260c0a4",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-05-08 08:34:14",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "11344933894b37ecf2ba315ded6d752eff899716",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-04-16 18:34:11",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "a37f6c18cf9097917437a4ac38798dee443f302e",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-04-16 18:26:28",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 04:44 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T04:44:34.499126+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        }
    ],
    "dailySummary": {
        "stats": {
            "totalIndicators": 113531,
            "activeSources": 9,
            "criticalAlerts": 53875,
            "activeCampaigns": 404
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 42605,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 11270,
                "trend": "stable",
                "percentage": 2
            },
            {
                "category": "Botnet",
                "count": 10564,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Phishing",
                "count": 1843,
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
                "name": "malware_download",
                "count": 35628,
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
                "name": "CINS Threat List",
                "count": 32025,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]117[.]58[.]215",
                    "1[.]12[.]229[.]231",
                    "1[.]14[.]149[.]30"
                ]
            },
            {
                "name": "SSH Attacks",
                "count": 8440,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]12[.]36[.]175",
                    "1[.]12[.]55[.]80",
                    "1[.]14[.]110[.]231"
                ]
            },
            {
                "name": "Vidar",
                "count": 2456,
                "types": [
                    "ssl-cert",
                    "domain",
                    "url",
                    "hash",
                    "ip"
                ],
                "sampleIndicators": [
                    "963c8d952db068f9cd6b76e2313e69296ca6124f57755eeaa8c008ee05d349be",
                    "99b335ac5caf5249edc3223b100517d72f4fec0c6012955e3efc8d56c96880ef",
                    "6f38c0aedf5d1163cca3bf5721acb71cb54bf387a69827c8ccdc59064a19d6ed"
                ]
            },
            {
                "name": "Mirai",
                "count": 1950,
                "types": [
                    "url",
                    "hash",
                    "ip",
                    "domain"
                ],
                "sampleIndicators": [
                    "5c9904bb290ca8b4581ca5337feaf8dc0262630e704faee10052b2385c5979fb",
                    "56530393263a80c470417364da8bcabbc8b819172866cb741304266a246fc639",
                    "1fcf6489f59dc37ee33fe8d772b95a8cb55051295b24f237b0aa9ebd05647b51"
                ]
            },
            {
                "name": "Generic Phishing",
                "count": 1837,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://info-ledgr-live[.]pages[.]dev/",
                    "hxxp://41hyh-fgg-6s73-70oib-14-09-2026-hh[.]pages[.]dev/",
                    "hxxps://phmacentral[.]info/dashboard-eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzUxMiJ9[.]eyJjYW1wYWlnbklkIjoiNWFiYmY2MjQtOTc3ZC0xMWVmLWJhZWItMjk2ZWI2NWZmZDY2IiwiZW1haWwiOiJicnlhbkBtY2tl-gg/"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1691,
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
                "count": 1667,
                "types": [
                    "ssl-cert",
                    "domain",
                    "url",
                    "hash",
                    "ip"
                ],
                "sampleIndicators": [
                    "195fec1204186bb02fde9ac09f5a45add84dde09533400a354a2d97fd6b20acd",
                    "5ae300101bef874b2d8e9dc927571074d7cd6c706903f4a23d91bf0c2943e256",
                    "c2b10b8c0d346d3e1201daea39713fbfaeb410e8b7fee94b0546a3fcdc91573f"
                ]
            },
            {
                "name": "IClickFix",
                "count": 1280,
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
                "name": " \"win.cobalt_strike\"",
                "count": 1265,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"140[.]143[.]193[.]143:443\"",
                    " \"118[.]26[.]111[.]141:80\"",
                    " \"118[.]26[.]111[.]141:8080\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "CINS Threat List",
        "totalAttacksThisHour": 20523,
        "lastCalculated": "2026-10-22 10:01 IST"
    }
};
