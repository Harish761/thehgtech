// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-21T19:12:05.058593+05:30 IST (2026-10-21 13:42 UTC)
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-21T19:12:04.112638+05:30",
    "lastUpdatedFormatted": "Oct 21, 2026 at 07:12 PM IST",
    "lastUpdatedUtc": "2026-10-21 13:42 UTC",
    "comparisonPeriod": "Oct 20 \u2013 Oct 21, 2026",
    "stats": {
        "totalIOCs": 108399,
        "byType": {
            "url": 45844,
            "ip": 41227,
            "hash": 5896,
            "domain": 2742,
            "ssl-cert": 11000,
            "ip-range": 1690
        },
        "byVendor": {
            "OpenPhish": 1540,
            "Malware Bazaar": 3533,
            "Spamhaus DROP": 1690,
            "CINS Army": 30496,
            "Blocklist.de": 7788,
            "URLhaus": 34772,
            "ThreatFox": 17575,
            "Feodo Tracker": 5,
            "SSL Blacklist": 11000
        },
        "topMalware": [
            {
                "name": "Vidar",
                "count": 2279,
                "types": [
                    "ssl-cert",
                    "domain",
                    "hash",
                    "url",
                    "ip"
                ]
            },
            {
                "name": "Mirai",
                "count": 1870,
                "types": [
                    "url",
                    "domain",
                    "ip",
                    "hash"
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1661,
                "types": [
                    "ssl-cert",
                    "domain",
                    "hash",
                    "url",
                    "ip"
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
                "count": 1211,
                "types": [
                    "ip",
                    "domain"
                ]
            },
            {
                "name": "QuasarRAT",
                "count": 738,
                "types": [
                    "ssl-cert",
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
                "name": "IClickFix",
                "count": 716,
                "types": [
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
                "name": "AMOS",
                "count": 666,
                "types": [
                    "url",
                    "domain",
                    "hash"
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
                    "ssl-cert",
                    "hash"
                ]
            },
            {
                "name": "OffLoader",
                "count": 550,
                "types": [
                    "ssl-cert"
                ]
            },
            {
                "name": "ConnectWise",
                "count": 516,
                "types": [
                    "ssl-cert",
                    "hash"
                ]
            }
        ],
        "recentIOCs": [
            {
                "type": "ssl-cert",
                "indicator": "a2e76af14703e85cc8a27f108e0ee93ce2d9afb4",
                "description": "Malicious SSL certificate - Malware C&C",
                "timestamp": "2026-09-29 08:26:19",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-21 10:02 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-21T10:02:31.498916+05:30",
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
                "analysisTime": "2026-10-21 10:02 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-21T10:02:31.498916+05:30",
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
                "analysisTime": "2026-10-21 10:02 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-21T10:02:31.498916+05:30",
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
                "analysisTime": "2026-10-21 10:02 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-21T10:02:31.498916+05:30",
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
                "analysisTime": "2026-10-21 10:02 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-21T10:02:31.498916+05:30",
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
                "analysisTime": "2026-10-21 10:02 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-21T10:02:31.498916+05:30",
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
                "analysisTime": "2026-10-21 10:02 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-21T10:02:31.498916+05:30",
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
                "analysisTime": "2026-10-21 10:02 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-21T10:02:31.498916+05:30",
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
                "analysisTime": "2026-10-21 10:02 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-21T10:02:31.498916+05:30",
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
                "analysisTime": "2026-10-21 10:02 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-21T10:02:31.498916+05:30",
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
                "analysisTime": "2026-10-21 10:02 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-21T10:02:31.498916+05:30",
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
                "analysisTime": "2026-10-21 10:02 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-21T10:02:31.498916+05:30",
                "campaign": "AsyncRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "c5fad8ac582663e331f0a5bea7a2c0b919b1b275",
                "description": "Malicious SSL certificate - Malware C&C",
                "timestamp": "2026-09-29 07:19:54",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-21 10:02 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-21T10:02:31.498916+05:30",
                "campaign": "Malware",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "b9a4c53e64dd5dd4e23e24d4f525bd30e58a875a",
                "description": "Malicious SSL certificate - Havoc C&C",
                "timestamp": "2026-09-29 07:19:17",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-21 10:02 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-21T10:02:31.498916+05:30",
                "campaign": "Havoc",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "1a0f195729623afdd81c23edb2b2fbbc6675bce7",
                "description": "Malicious SSL certificate - OffLoader C&C",
                "timestamp": "2026-09-29 07:15:17",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-21 10:02 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-21T10:02:31.498916+05:30",
                "campaign": "OffLoader",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "ac9d756502ee8def404c880dc79c4b607fa91e1e",
                "description": "Malicious SSL certificate - PureRAT C&C",
                "timestamp": "2026-09-29 07:07:57",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-21 10:02 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-21T10:02:31.498916+05:30",
                "campaign": "PureRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "2be66749a6e32a9c93985853c2baffa660357354",
                "description": "Malicious SSL certificate - AsyncRAT C&C",
                "timestamp": "2026-09-29 07:06:42",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-21 10:02 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-21T10:02:31.498916+05:30",
                "campaign": "AsyncRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "f871be6da75524aa3438fe29e8efdb3adf8e854e",
                "description": "Malicious SSL certificate - PureLogsStealer C&C",
                "timestamp": "2026-09-29 06:34:43",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-21 10:02 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-21T10:02:31.498916+05:30",
                "campaign": "PureLogsStealer",
                "confidence": "High"
            },
            {
                "type": "ip",
                "indicator": "162[.]243[.]103[.]246",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-10-21 10:02 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-10-21 10:02 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-10-21T10:02:30.246718+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "178[.]62[.]3[.]223",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-10-21 10:02 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-10-21 10:02 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-10-21T10:02:30.246718+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            }
        ],
        "lastUpdated": "2026-10-21T19:12:04.112638+05:30",
        "lastUpdatedFormatted": "Oct 21, 2026 at 07:12 PM IST",
        "lastUpdatedUtc": "2026-10-21 13:42 UTC"
    },
    "vendors": {
        "OpenPhish": {
            "description": "Real-time phishing URL feed updated every 15 minutes. Tracks active phishing sites targeting major brands and financial institutions.",
            "website": "https://openphish.com/",
            "updateFrequency": "Every 15 minutes",
            "iocCount": 1840,
            "iocDataUrl": "https://thehgtech.com/ioc-data/openphish.json",
            "stats": {
                "total": 1840,
                "newInLastHour": 300,
                "lastUpdate": "2026-10-21 13:41 UTC"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://info-ledgr-live[.]pages[.]dev/",
                "hxxp://41hyh-fgg-6s73-70oib-14-09-2026-hh[.]pages[.]dev/",
                "hxxps://phmacentral[.]info/dashboard-eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzUxMiJ9[.]eyJjYW1wYWlnbklkIjoiNWFiYmY2MjQtOTc3ZC0xMWVmLWJhZWItMjk2ZWI2NWZmZDY2IiwiZW1haWwiOiJicnlhbkBtY2tl-gg/",
                "hxxps://www[.]zqwxw[.]com/news/1174[.]html",
                "hxxps://sp26ct10-norvake-biz-zulimo[.]pages[.]dev/"
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
                "newInLastHour": 476,
                "lastUpdate": "2026-10-21 13:41 UTC"
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
            "iocCount": 1691,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1691,
                "newInLastHour": 1,
                "lastUpdate": "2026-10-21 13:41 UTC"
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
            "iocCount": 31480,
            "iocDataUrl": "https://thehgtech.com/ioc-data/cins-army.json",
            "stats": {
                "total": 31480,
                "newInLastHour": 15000,
                "lastUpdate": "2026-10-21 13:41 UTC"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]12[.]229[.]231",
                "1[.]14[.]149[.]30",
                "1[.]168[.]172[.]140",
                "1[.]177[.]162[.]4",
                "1[.]193[.]57[.]156"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 8142,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 8142,
                "newInLastHour": 5266,
                "lastUpdate": "2026-10-21 13:41 UTC"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]117[.]73[.]220",
                "1[.]12[.]36[.]175",
                "1[.]12[.]55[.]80",
                "1[.]12[.]70[.]212",
                "1[.]14[.]110[.]231"
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
                "newInLastHour": 34528,
                "lastUpdate": "2026-10-21 13:41 UTC"
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
                "newInLastHour": 6027,
                "lastUpdate": "2026-10-21 13:41 UTC"
            },
            "types": [
                "url",
                "domain",
                "ip",
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
            "stats": {
                "total": 5,
                "newInLastHour": 5,
                "lastUpdate": "2026-10-21 13:42 UTC"
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
            "iocCount": 11011,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 11011,
                "newInLastHour": 16,
                "lastUpdate": "2026-10-21 13:42 UTC"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "c2cc28a75ec95c7f4109d6af0e02b9c1273fb774",
                "ee44c0aa609918ca30691fe0f49b87945d450bcd",
                "3f00a128af6109bb4ba928f2a73caeb1820f561d",
                "e86dd566921f2733639879ecd1a3be715644cec6",
                "5c5c6ce618ac3209dcb239bafd6151d86ca490b4"
            ]
        }
    },
    "overview": [
        {
            "type": "ssl-cert",
            "indicator": "a2e76af14703e85cc8a27f108e0ee93ce2d9afb4",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-09-29 08:26:19",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T10:02:31.498916+05:30",
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
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T10:02:31.498916+05:30",
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
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T10:02:31.498916+05:30",
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
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T10:02:31.498916+05:30",
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
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T10:02:31.498916+05:30",
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
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T10:02:31.498916+05:30",
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
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T10:02:31.498916+05:30",
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
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T10:02:31.498916+05:30",
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
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T10:02:31.498916+05:30",
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
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T10:02:31.498916+05:30",
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
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T10:02:31.498916+05:30",
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
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T10:02:31.498916+05:30",
            "campaign": "AsyncRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "c5fad8ac582663e331f0a5bea7a2c0b919b1b275",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-09-29 07:19:54",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T10:02:31.498916+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "b9a4c53e64dd5dd4e23e24d4f525bd30e58a875a",
            "description": "Malicious SSL certificate - Havoc C&C",
            "timestamp": "2026-09-29 07:19:17",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T10:02:31.498916+05:30",
            "campaign": "Havoc",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "1a0f195729623afdd81c23edb2b2fbbc6675bce7",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-09-29 07:15:17",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T10:02:31.498916+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "ac9d756502ee8def404c880dc79c4b607fa91e1e",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-09-29 07:07:57",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T10:02:31.498916+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "2be66749a6e32a9c93985853c2baffa660357354",
            "description": "Malicious SSL certificate - AsyncRAT C&C",
            "timestamp": "2026-09-29 07:06:42",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T10:02:31.498916+05:30",
            "campaign": "AsyncRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "f871be6da75524aa3438fe29e8efdb3adf8e854e",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-09-29 06:34:43",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T10:02:31.498916+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ip",
            "indicator": "162[.]243[.]103[.]246",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-21 10:02 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-21T10:02:30.246718+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "178[.]62[.]3[.]223",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-21 10:02 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-21T10:02:30.246718+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "27[.]133[.]154[.]218",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-21 10:02 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-21T10:02:30.246718+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "34[.]204[.]119[.]63",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-21 10:02 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-21T10:02:30.246718+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "50[.]16[.]16[.]211",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-21 10:02 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-21T10:02:30.246718+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "hash",
            "indicator": "c5bd449668102c0e01da1394d924d61e71b8e166a03c98b22d26c10cdf9b98ed",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-21 04:28:22",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://www.virustotal.com/gui/file/c5bd449668102c0e01da1394d924d61e71b8e166a03c98b22d26c10cdf9b98ed"
            ],
            "addedAt": "2026-10-21T10:02:28.982756+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://yb[.]abblbet[.]org/o5/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-21 04:25:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T10:02:28.982756+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "8c503247e0851e81980e1205ad7578b2b39a0d87c6acefb8d2b876206f71d68b",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-21 04:24:27",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://www.virustotal.com/gui/file/8c503247e0851e81980e1205ad7578b2b39a0d87c6acefb8d2b876206f71d68b"
            ],
            "addedAt": "2026-10-21T10:02:28.982756+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "d9a13c77484e0f62d7db9f224bc87acaa0bb8a8bbccbaaaf96738a9b8f022ecb",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-21 04:20:52",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://www.virustotal.com/gui/file/d9a13c77484e0f62d7db9f224bc87acaa0bb8a8bbccbaaaf96738a9b8f022ecb"
            ],
            "addedAt": "2026-10-21T10:02:28.982756+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "c[.]9winn[.]org",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-21 04:20:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T10:02:28.982756+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://c[.]9winn[.]org/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-21 04:20:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T10:02:28.982756+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://yb[.]abblbet[.]org/kyr/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-21 04:20:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T10:02:28.982756+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "612b706f54d148111f20e393792fda57f73590b6bc6865a4e49656e670f9eefd",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-21 04:16:20",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://www.virustotal.com/gui/file/612b706f54d148111f20e393792fda57f73590b6bc6865a4e49656e670f9eefd"
            ],
            "addedAt": "2026-10-21T10:02:28.982756+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://yb[.]abblbet[.]org/nc/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-21 04:15:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T10:02:28.982756+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://yb[.]abblbet[.]org/wb/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-21 04:10:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T10:02:28.982756+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://yb[.]abblbet[.]org/hq0/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-21 04:05:47",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T10:02:28.982756+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "ip",
            "indicator": "156[.]240[.]41[.]110",
            "description": "VShell (botnet_cc)",
            "timestamp": "2026-10-21 04:05:10",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-21T10:02:28.982756+05:30",
            "campaign": "VShell",
            "confidence": "100%"
        },
        {
            "type": "ip",
            "indicator": "156[.]240[.]41[.]11",
            "description": "VShell (botnet_cc)",
            "timestamp": "2026-10-21 04:05:09",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-21T10:02:28.982756+05:30",
            "campaign": "VShell",
            "confidence": "100%"
        },
        {
            "type": "ip",
            "indicator": "156[.]240[.]41[.]109",
            "description": "VShell (botnet_cc)",
            "timestamp": "2026-10-21 04:05:07",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-21T10:02:28.982756+05:30",
            "campaign": "VShell",
            "confidence": "100%"
        },
        {
            "type": "ip",
            "indicator": "156[.]240[.]41[.]107",
            "description": "VShell (botnet_cc)",
            "timestamp": "2026-10-21 04:05:05",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-21T10:02:28.982756+05:30",
            "campaign": "VShell",
            "confidence": "100%"
        },
        {
            "type": "ip",
            "indicator": "156[.]240[.]41[.]108",
            "description": "VShell (botnet_cc)",
            "timestamp": "2026-10-21 04:05:05",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-21T10:02:28.982756+05:30",
            "campaign": "VShell",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://c[.]9winn[.]org",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-21 04:03:39",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T10:02:28.982756+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://a7[.]abbc123[.]org/yq/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-21 04:00:47",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T10:02:28.982756+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://a7[.]abbc123[.]org/gb/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-21 03:55:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T10:02:28.982756+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "2261c63c17c6ae904a419f98f51a8fd7607a3a0a952d87c4e85c36aaea158387",
            "description": "Unknown Loader (payload)",
            "timestamp": "2026-10-21 03:54:34",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-21T10:02:28.982756+05:30",
            "campaign": "Unknown Loader",
            "confidence": "85%"
        },
        {
            "type": "hash",
            "indicator": "878c7206ad7699a6d1db1422b83de0b8cc1fb5d9cb0a76c7eded858e9808638b",
            "description": "Unknown Loader (payload)",
            "timestamp": "2026-10-21 03:54:32",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-21T10:02:28.982756+05:30",
            "campaign": "Unknown Loader",
            "confidence": "85%"
        },
        {
            "type": "hash",
            "indicator": "47f831411856e1523ff9ad36f02e16ac5ac57682002ff54ad917877e4601ce3a",
            "description": "Mirai (payload)",
            "timestamp": "2026-10-21 03:54:31",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-21T10:02:28.982756+05:30",
            "campaign": "Mirai",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "7a65172b9a59f8d7e958871a5e55f215f32bb17d8ec4e167c891373f83669973",
            "description": "Mirai (payload)",
            "timestamp": "2026-10-21 03:54:30",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-21T10:02:28.982756+05:30",
            "campaign": "Mirai",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "6a80656ba9750f7999eb71786bd9c38017022f5fdc8810572678863692a335b1",
            "description": "Mirai (payload)",
            "timestamp": "2026-10-21 03:54:29",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-21T10:02:28.982756+05:30",
            "campaign": "Mirai",
            "confidence": "90%"
        },
        {
            "type": "hash",
            "indicator": "a3ffb06d9250492d20f6e3b72508d3a305908607198790cdd75f7ab1b1acab35",
            "description": "Mirai (payload)",
            "timestamp": "2026-10-21 03:54:27",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-21T10:02:28.982756+05:30",
            "campaign": "Mirai",
            "confidence": "90%"
        },
        {
            "type": "url",
            "indicator": "hxxps://a7[.]abbc123[.]org/rf/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-21 03:50:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T10:02:28.982756+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "6b7b2ec7b07f39e78c899fa934e6250a5d50b9cf52b32156e5dcdd9ec3952bd8",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-21 03:48:57",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://www.virustotal.com/gui/file/6b7b2ec7b07f39e78c899fa934e6250a5d50b9cf52b32156e5dcdd9ec3952bd8"
            ],
            "addedAt": "2026-10-21T10:02:28.982756+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://a7[.]abbc123[.]org/pi/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-21 03:45:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T10:02:28.982756+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "proxy-us-east007-cip3[.]ahrefs[.]net",
            "description": "php.shin_webshell (payload_delivery)",
            "timestamp": "2026-10-21 03:45:07",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T10:02:28.982756+05:30",
            "campaign": "php.shin_webshell",
            "confidence": "50%"
        },
        {
            "type": "domain",
            "indicator": "rodcq94758[.]workers[.]dev",
            "description": "php.shin_webshell (payload_delivery)",
            "timestamp": "2026-10-21 03:44:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T10:02:28.982756+05:30",
            "campaign": "php.shin_webshell",
            "confidence": "50%"
        },
        {
            "type": "hash",
            "indicator": "bba5d18a8648bb4fbfa156e21d49fb8c9993032dfd57d56a22645f608283e105",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-21 03:44:26",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://www.virustotal.com/gui/file/bba5d18a8648bb4fbfa156e21d49fb8c9993032dfd57d56a22645f608283e105"
            ],
            "addedAt": "2026-10-21T10:02:28.982756+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://a7[.]abbc123[.]org/fb/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-21 03:40:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T10:02:28.982756+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "fb0721fa5d76d41995cb60b11099964d37bc15a9fdd6e5379ac6c6614481990f",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-21 03:39:23",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://www.virustotal.com/gui/file/fb0721fa5d76d41995cb60b11099964d37bc15a9fdd6e5379ac6c6614481990f"
            ],
            "addedAt": "2026-10-21T10:02:28.982756+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://a7[.]abbc123[.]org/to/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-21 03:35:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T10:02:28.982756+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "03cbd76b6c3aea11ca539ae2bee8f73f194da17410aed505c3a5c13cfa1f2351",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-21 03:34:53",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://www.virustotal.com/gui/file/03cbd76b6c3aea11ca539ae2bee8f73f194da17410aed505c3a5c13cfa1f2351"
            ],
            "addedAt": "2026-10-21T10:02:28.982756+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://n[.]9winn[.]org/u/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-21 03:30:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T10:02:28.982756+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://a7[.]abbc123[.]org/f/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-21 03:30:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T10:02:28.982756+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "9b6f929c97407341e0f71276e0a243da3e4d152c8e6e0f078e398d421da9a47e",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-21 03:28:46",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://www.virustotal.com/gui/file/9b6f929c97407341e0f71276e0a243da3e4d152c8e6e0f078e398d421da9a47e"
            ],
            "addedAt": "2026-10-21T10:02:28.982756+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://n[.]9winn[.]org/s",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-21 03:27:19",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T10:02:28.982756+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://a7[.]abbc123[.]org/kn6/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-21 03:25:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T10:02:28.982756+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "64d9ba25063f6c1b6f3e2c931a63b519a1366f8094765dde6e6da3f5f8d45594",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-21 03:24:08",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://www.virustotal.com/gui/file/64d9ba25063f6c1b6f3e2c931a63b519a1366f8094765dde6e6da3f5f8d45594"
            ],
            "addedAt": "2026-10-21T10:02:28.982756+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxp://retas3[.]help:7713/profiles",
            "description": "Remus (botnet_cc)",
            "timestamp": "2026-10-21 03:22:37",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T10:02:28.982756+05:30",
            "campaign": "Remus",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://a7[.]abbc123[.]org/gq/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-21 03:20:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T10:02:28.982756+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "bdc543dd2998636ff7c5fd82ae1dd87a704dbed64f3b583f59d67b6b7bf4584e",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-21 03:20:05",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://www.virustotal.com/gui/file/bdc543dd2998636ff7c5fd82ae1dd87a704dbed64f3b583f59d67b6b7bf4584e"
            ],
            "addedAt": "2026-10-21T10:02:28.982756+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "201-0-236-74[.]dial-up[.]telesp[.]net[.]br",
            "description": "php.shin_webshell (payload_delivery)",
            "timestamp": "2026-10-21 03:18:12",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T10:02:28.982756+05:30",
            "campaign": "php.shin_webshell",
            "confidence": "50%"
        },
        {
            "type": "domain",
            "indicator": "google-proxy-66-249-93-35[.]google[.]com",
            "description": "php.shin_webshell (payload_delivery)",
            "timestamp": "2026-10-21 03:18:03",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T10:02:28.982756+05:30",
            "campaign": "php.shin_webshell",
            "confidence": "50%"
        },
        {
            "type": "domain",
            "indicator": "google-proxy-66-249-93-41[.]google[.]com",
            "description": "php.shin_webshell (payload_delivery)",
            "timestamp": "2026-10-21 03:17:46",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T10:02:28.982756+05:30",
            "campaign": "php.shin_webshell",
            "confidence": "50%"
        },
        {
            "type": "domain",
            "indicator": "google-proxy-66-249-93-225[.]google[.]com",
            "description": "php.shin_webshell (payload_delivery)",
            "timestamp": "2026-10-21 03:17:21",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T10:02:28.982756+05:30",
            "campaign": "php.shin_webshell",
            "confidence": "50%"
        },
        {
            "type": "domain",
            "indicator": "google-proxy-66-249-93-224[.]google[.]com",
            "description": "php.shin_webshell (payload_delivery)",
            "timestamp": "2026-10-21 03:17:06",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T10:02:28.982756+05:30",
            "campaign": "php.shin_webshell",
            "confidence": "50%"
        },
        {
            "type": "url",
            "indicator": "hxxps://a7[.]abbc123[.]org/sq/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-21 03:15:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T10:02:28.982756+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "fa5a12657457684283559ee563d93bc689ce36fe013cc4da9912a6a525a3f5c6",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-21 03:13:44",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://www.virustotal.com/gui/file/fa5a12657457684283559ee563d93bc689ce36fe013cc4da9912a6a525a3f5c6"
            ],
            "addedAt": "2026-10-21T10:02:28.982756+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://a7[.]abbc123[.]org/i0/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-21 03:10:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T10:02:28.982756+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "ip",
            "indicator": "154[.]64[.]250[.]38",
            "description": "ValleyRAT (botnet_cc)",
            "timestamp": "2026-10-21 03:10:10",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-21T10:02:28.982756+05:30",
            "campaign": "ValleyRAT",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "d8bf8c21d883816c4686d577a0cfaaf9399695d3bd1d80c10e70be069682c089",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-21 03:07:40",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://www.virustotal.com/gui/file/d8bf8c21d883816c4686d577a0cfaaf9399695d3bd1d80c10e70be069682c089"
            ],
            "addedAt": "2026-10-21T10:02:28.982756+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://n[.]9winn[.]org/s/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-21 03:05:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T10:02:28.982756+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://a7[.]abbc123[.]org/ruc/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-21 03:05:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T10:02:28.982756+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "ip",
            "indicator": "156[.]240[.]41[.]104",
            "description": "VShell (botnet_cc)",
            "timestamp": "2026-10-21 03:05:08",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-21T10:02:28.982756+05:30",
            "campaign": "VShell",
            "confidence": "100%"
        },
        {
            "type": "ip",
            "indicator": "156[.]240[.]41[.]105",
            "description": "VShell (botnet_cc)",
            "timestamp": "2026-10-21 03:05:08",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-21T10:02:28.982756+05:30",
            "campaign": "VShell",
            "confidence": "100%"
        },
        {
            "type": "ip",
            "indicator": "156[.]240[.]41[.]102",
            "description": "VShell (botnet_cc)",
            "timestamp": "2026-10-21 03:05:07",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-21T10:02:28.982756+05:30",
            "campaign": "VShell",
            "confidence": "100%"
        },
        {
            "type": "ip",
            "indicator": "156[.]240[.]41[.]101",
            "description": "VShell (botnet_cc)",
            "timestamp": "2026-10-21 03:05:05",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-21T10:02:28.982756+05:30",
            "campaign": "VShell",
            "confidence": "100%"
        },
        {
            "type": "ip",
            "indicator": "156[.]240[.]41[.]100",
            "description": "VShell (botnet_cc)",
            "timestamp": "2026-10-21 03:05:04",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-21T10:02:28.982756+05:30",
            "campaign": "VShell",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://oa[.]abbc123[.]org/i/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-21 03:00:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T10:02:28.982756+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://n[.]9winn[.]org/w",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-21 03:00:27",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T10:02:28.982756+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "1djyax1p[.]minterest[.]org",
            "description": "ClearFake (payload_delivery)",
            "timestamp": "2026-10-21 02:57:33",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T10:02:28.982756+05:30",
            "campaign": "ClearFake",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://oa[.]abbc123[.]org/dc/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-21 02:55:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T10:02:28.982756+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "minterest[.]org",
            "description": "ClearFake (payload_delivery)",
            "timestamp": "2026-10-21 02:55:21",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T10:02:28.982756+05:30",
            "campaign": "ClearFake",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "509e9f420cf7afd64a56ddf53f9276916037b7a0e35e4b24f881e11d086f3777",
            "description": "Unknown Loader (payload)",
            "timestamp": "2026-10-21 02:54:37",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-21T10:02:28.982756+05:30",
            "campaign": "Unknown Loader",
            "confidence": "85%"
        },
        {
            "type": "hash",
            "indicator": "06340f4194e60554bb71db5e50067307f41494e2e3e70c548bf85ebd38a6e62d",
            "description": "Unknown Loader (payload)",
            "timestamp": "2026-10-21 02:54:36",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-21T10:02:28.982756+05:30",
            "campaign": "Unknown Loader",
            "confidence": "85%"
        },
        {
            "type": "hash",
            "indicator": "20d5b6679943bfeeaf8bc6ad71ab726c795b04c8c218dc6fd13c92a058fc5bfb",
            "description": "Unknown Loader (payload)",
            "timestamp": "2026-10-21 02:54:35",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-21T10:02:28.982756+05:30",
            "campaign": "Unknown Loader",
            "confidence": "85%"
        },
        {
            "type": "hash",
            "indicator": "c99f4b61d0e5c2c8b80910244a58eaa80bc62bf9a12c81209170a1ee428e4a77",
            "description": "Mirai (payload)",
            "timestamp": "2026-10-21 02:54:34",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-21T10:02:28.982756+05:30",
            "campaign": "Mirai",
            "confidence": "90%"
        },
        {
            "type": "hash",
            "indicator": "e1a4d414cb857b1535f0b3f7306492153e5d4726b2dae796937fa1cf106e535c",
            "description": "Mirai (payload)",
            "timestamp": "2026-10-21 02:54:33",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-21T10:02:28.982756+05:30",
            "campaign": "Mirai",
            "confidence": "90%"
        },
        {
            "type": "hash",
            "indicator": "3f49aa5fe7183942af44585355ddab790050cc581ae83875f5152fcaa98f2f28",
            "description": "Mirai (payload)",
            "timestamp": "2026-10-21 02:54:32",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-21T10:02:28.982756+05:30",
            "campaign": "Mirai",
            "confidence": "95%"
        },
        {
            "type": "hash",
            "indicator": "c869584f3e17fdde01a26bdf58d92837d8f396aad9944dffb08627c1f7e1323f",
            "description": "Mirai (payload)",
            "timestamp": "2026-10-21 02:54:31",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-21T10:02:28.982756+05:30",
            "campaign": "Mirai",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "4e3700db45af47ab456f788e85815aec8855f27f02c20d6112aab69dcbbfd770",
            "description": "Mirai (payload)",
            "timestamp": "2026-10-21 02:54:29",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-21T10:02:28.982756+05:30",
            "campaign": "Mirai",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "f5e89953bf910c1f03b146ad886c7d132987a234c8844eeeab732aaf88032271",
            "description": "SNOWLIGHT (payload)",
            "timestamp": "2026-10-21 02:54:28",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-21T10:02:28.982756+05:30",
            "campaign": "SNOWLIGHT",
            "confidence": "95%"
        },
        {
            "type": "hash",
            "indicator": "f315faf21a2971d025d51e520c668b19f34adbc3ebd4dda4a7ba21c8fe986b20",
            "description": "Mirai (payload)",
            "timestamp": "2026-10-21 02:54:27",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-21T10:02:28.982756+05:30",
            "campaign": "Mirai",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://oa[.]abbc123[.]org/pca/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-21 02:50:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 10:02 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T10:02:28.982756+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        }
    ],
    "dailySummary": {
        "stats": {
            "totalIndicators": 108399,
            "activeSources": 9,
            "criticalAlerts": 52341,
            "activeCampaigns": 395
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 41089,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 11252,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 10263,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "Phishing",
                "count": 1542,
                "trend": "up",
                "percentage": 24
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
                "count": 34772,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://123[.]14[.]233[.]91:52224/bin[.]sh",
                    "hxxp://123[.]4[.]235[.]65:55563/bin[.]sh",
                    "hxxp://112[.]248[.]190[.]135:55046/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 30496,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]14[.]149[.]30",
                    "1[.]192[.]129[.]106",
                    "1[.]193[.]57[.]156"
                ]
            },
            {
                "name": "SSH Attacks",
                "count": 7788,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]117[.]73[.]220",
                    "1[.]12[.]36[.]175",
                    "1[.]12[.]55[.]80"
                ]
            },
            {
                "name": "Vidar",
                "count": 2279,
                "types": [
                    "ssl-cert",
                    "domain",
                    "hash",
                    "url",
                    "ip"
                ],
                "sampleIndicators": [
                    "038cc0421ef5641c0565b39f51a4ce2bb768fa8190da3971c785e292c2f704d2",
                    "379a2944024fe73ff4af0d02eeb4764918f3009aa236207e0edd616cbfb84ccc",
                    "0d8f1752831cd45fbf6e4786cfd7e36997ab9835efdcfb7950b1db52e59f63f2"
                ]
            },
            {
                "name": "Mirai",
                "count": 1870,
                "types": [
                    "url",
                    "domain",
                    "ip",
                    "hash"
                ],
                "sampleIndicators": [
                    "a3ffb06d9250492d20f6e3b72508d3a305908607198790cdd75f7ab1b1acab35",
                    "6a80656ba9750f7999eb71786bd9c38017022f5fdc8810572678863692a335b1",
                    "93c1e4abbfea104915121466b5f1ad6b02a5cc44b567043259a8791ff56cb100"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1690,
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
                "count": 1661,
                "types": [
                    "ssl-cert",
                    "domain",
                    "hash",
                    "url",
                    "ip"
                ],
                "sampleIndicators": [
                    "5ae300101bef874b2d8e9dc927571074d7cd6c706903f4a23d91bf0c2943e256",
                    "c2b10b8c0d346d3e1201daea39713fbfaeb410e8b7fee94b0546a3fcdc91573f",
                    "1e98a36b2c40441a1bf33060bad8b52bf74ee659472aa15d3463bd51b118725f"
                ]
            },
            {
                "name": "Generic Phishing",
                "count": 1537,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://nus[.]nbt[.]mybluehost[.]me/website_9f694753/055/Newcorreos%20(1)/cc/login[.]php?clckid=4e6f526c",
                    "hxxps://www[.]roblox[.]com[.]ml/users/346612762043/profile",
                    "hxxps://sp20ct10-davrelo-biz-kunima[.]pages[.]dev/send_appeal_request"
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
            },
            {
                "name": "Cobalt Strike",
                "count": 1211,
                "types": [
                    "ip",
                    "domain"
                ],
                "sampleIndicators": [
                    "1[.]92[.]135[.]168",
                    "49[.]232[.]42[.]116",
                    "217[.]154[.]212[.]25"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "CINS Threat List",
        "totalAttacksThisHour": 61619,
        "lastCalculated": "2026-10-21 19:12 IST"
    }
};
