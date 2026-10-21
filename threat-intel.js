// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-22T01:34:18.901537+05:30 IST (2026-10-21 20:04 UTC)
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-22T01:34:17.822102+05:30",
    "lastUpdatedFormatted": "Oct 22, 2026 at 01:34 AM IST",
    "lastUpdatedUtc": "2026-10-21 20:04 UTC",
    "comparisonPeriod": "Oct 21 \u2013 Oct 22, 2026",
    "stats": {
        "totalIOCs": 112682,
        "byType": {
            "url": 47216,
            "ip": 42664,
            "hash": 6537,
            "domain": 3563,
            "ssl-cert": 11011,
            "ip-range": 1691
        },
        "byVendor": {
            "OpenPhish": 1840,
            "Malware Bazaar": 4009,
            "Spamhaus DROP": 1691,
            "CINS Army": 31480,
            "Blocklist.de": 8142,
            "URLhaus": 35628,
            "ThreatFox": 18876,
            "Feodo Tracker": 5,
            "SSL Blacklist": 11011
        },
        "topMalware": [
            {
                "name": "Vidar",
                "count": 2453,
                "types": [
                    "hash",
                    "ssl-cert",
                    "domain",
                    "url",
                    "ip"
                ]
            },
            {
                "name": "Mirai",
                "count": 1950,
                "types": [
                    "hash",
                    "url",
                    "ip",
                    "domain"
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1667,
                "types": [
                    "hash",
                    "ssl-cert",
                    "domain",
                    "url",
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
                    "hash",
                    "url",
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
                    "hash",
                    "url",
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
                "indicator": "c2cc28a75ec95c7f4109d6af0e02b9c1273fb774",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-10-21 11:43:21",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-21 19:12 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-21T19:12:00.914263+05:30",
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
                "analysisTime": "2026-10-21 19:12 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-21T19:12:00.914263+05:30",
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
                "analysisTime": "2026-10-21 19:12 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-21T19:12:00.914263+05:30",
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
                "analysisTime": "2026-10-21 19:12 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-21T19:12:00.914263+05:30",
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
                "analysisTime": "2026-10-21 19:12 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-21T19:12:00.914263+05:30",
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
                "analysisTime": "2026-10-21 19:12 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-21T19:12:00.914263+05:30",
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
                "analysisTime": "2026-10-21 19:12 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-21T19:12:00.914263+05:30",
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
                "analysisTime": "2026-10-21 19:12 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-21T19:12:00.914263+05:30",
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
                "analysisTime": "2026-10-21 19:12 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-21T19:12:00.914263+05:30",
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
                "analysisTime": "2026-10-21 19:12 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-21T19:12:00.914263+05:30",
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
                "analysisTime": "2026-10-21 19:12 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-21T19:12:00.914263+05:30",
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
                "analysisTime": "2026-10-21 19:12 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-21T19:12:00.914263+05:30",
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
                "analysisTime": "2026-10-21 19:12 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-21T19:12:00.914263+05:30",
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
                "analysisTime": "2026-10-21 19:12 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-21T19:12:00.914263+05:30",
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
                "analysisTime": "2026-10-21 19:12 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-21T19:12:00.914263+05:30",
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
                "analysisTime": "2026-10-21 19:12 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-21T19:12:00.914263+05:30",
                "campaign": "Malware",
                "confidence": "High"
            },
            {
                "type": "ip",
                "indicator": "162[.]243[.]103[.]246",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-10-21 19:11 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-10-21 19:11 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-10-21T19:11:59.524455+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "178[.]62[.]3[.]223",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-10-21 19:11 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-10-21 19:11 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-10-21T19:11:59.524455+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "27[.]133[.]154[.]218",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-10-21 19:11 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-10-21 19:11 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-10-21T19:11:59.524455+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "34[.]204[.]119[.]63",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-10-21 19:11 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-10-21 19:11 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-10-21T19:11:59.524455+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            }
        ],
        "lastUpdated": "2026-10-22T01:34:17.822102+05:30",
        "lastUpdatedFormatted": "Oct 22, 2026 at 01:34 AM IST",
        "lastUpdatedUtc": "2026-10-21 20:04 UTC"
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
                "lastUpdate": "2026-10-21 20:04 UTC"
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
                "newInLastHour": 0,
                "lastUpdate": "2026-10-21 20:04 UTC"
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
            "iocCount": 1692,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1692,
                "newInLastHour": 1,
                "lastUpdate": "2026-10-21 20:04 UTC"
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
            "iocCount": 31796,
            "iocDataUrl": "https://thehgtech.com/ioc-data/cins-army.json",
            "stats": {
                "total": 31796,
                "newInLastHour": 15000,
                "lastUpdate": "2026-10-21 20:04 UTC"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]14[.]149[.]30",
                "1[.]177[.]162[.]2",
                "1[.]177[.]162[.]4",
                "1[.]193[.]57[.]156",
                "1[.]208[.]108[.]242"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 8355,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 8355,
                "newInLastHour": 5234,
                "lastUpdate": "2026-10-21 20:04 UTC"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]12[.]36[.]175",
                "1[.]12[.]55[.]80",
                "1[.]14[.]110[.]231",
                "1[.]14[.]240[.]247",
                "1[.]14[.]94[.]193"
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
                "lastUpdate": "2026-10-21 20:04 UTC"
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
                "lastUpdate": "2026-10-21 20:04 UTC"
            },
            "types": [
                "hash",
                "url",
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
                "lastUpdate": "2026-10-21 20:04 UTC"
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
            "iocCount": 11017,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 11017,
                "newInLastHour": 6,
                "lastUpdate": "2026-10-21 20:04 UTC"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "e4c69c59c688b6b22688718fd601e7a3bc6e2c8a",
                "c2cc28a75ec95c7f4109d6af0e02b9c1273fb774",
                "ee44c0aa609918ca30691fe0f49b87945d450bcd",
                "3f00a128af6109bb4ba928f2a73caeb1820f561d",
                "e86dd566921f2733639879ecd1a3be715644cec6"
            ]
        }
    },
    "overview": [
        {
            "type": "ssl-cert",
            "indicator": "c2cc28a75ec95c7f4109d6af0e02b9c1273fb774",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-21 11:43:21",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 19:12 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T19:12:00.914263+05:30",
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
            "analysisTime": "2026-10-21 19:12 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T19:12:00.914263+05:30",
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
            "analysisTime": "2026-10-21 19:12 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T19:12:00.914263+05:30",
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
            "analysisTime": "2026-10-21 19:12 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T19:12:00.914263+05:30",
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
            "analysisTime": "2026-10-21 19:12 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T19:12:00.914263+05:30",
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
            "analysisTime": "2026-10-21 19:12 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T19:12:00.914263+05:30",
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
            "analysisTime": "2026-10-21 19:12 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T19:12:00.914263+05:30",
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
            "analysisTime": "2026-10-21 19:12 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T19:12:00.914263+05:30",
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
            "analysisTime": "2026-10-21 19:12 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T19:12:00.914263+05:30",
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
            "analysisTime": "2026-10-21 19:12 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T19:12:00.914263+05:30",
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
            "analysisTime": "2026-10-21 19:12 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T19:12:00.914263+05:30",
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
            "analysisTime": "2026-10-21 19:12 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T19:12:00.914263+05:30",
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
            "analysisTime": "2026-10-21 19:12 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T19:12:00.914263+05:30",
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
            "analysisTime": "2026-10-21 19:12 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T19:12:00.914263+05:30",
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
            "analysisTime": "2026-10-21 19:12 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T19:12:00.914263+05:30",
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
            "analysisTime": "2026-10-21 19:12 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T19:12:00.914263+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ip",
            "indicator": "162[.]243[.]103[.]246",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-21 19:11 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-21 19:11 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-21T19:11:59.524455+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "178[.]62[.]3[.]223",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-21 19:11 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-21 19:11 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-21T19:11:59.524455+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "27[.]133[.]154[.]218",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-21 19:11 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-21 19:11 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-21T19:11:59.524455+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "34[.]204[.]119[.]63",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-21 19:11 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-21 19:11 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-21T19:11:59.524455+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "50[.]16[.]16[.]211",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-21 19:11 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-21 19:11 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-21T19:11:59.524455+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "hash",
            "indicator": "b4ec1ea1528a1cf690b1067a214751cfee1ef0eca037c7989b4bef17fbf6b53b",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-21 13:39:54",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 19:11 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://www.virustotal.com/gui/file/b4ec1ea1528a1cf690b1067a214751cfee1ef0eca037c7989b4bef17fbf6b53b"
            ],
            "addedAt": "2026-10-21T19:11:57.899572+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "ip",
            "indicator": "89[.]32[.]41[.]109",
            "description": "Potassium (botnet_cc)",
            "timestamp": "2026-10-21 13:38:28",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 19:11 IST",
            "tags": [
                "botnet",
                "verified",
                "https://github.com/deepfield/public-research/tree/main/potassium"
            ],
            "addedAt": "2026-10-21T19:11:57.899572+05:30",
            "campaign": "Potassium",
            "confidence": "100%"
        },
        {
            "type": "ip",
            "indicator": "89[.]32[.]41[.]111",
            "description": "Potassium (botnet_cc)",
            "timestamp": "2026-10-21 13:38:28",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 19:11 IST",
            "tags": [
                "botnet",
                "verified",
                "https://github.com/deepfield/public-research/tree/main/potassium"
            ],
            "addedAt": "2026-10-21T19:11:57.899572+05:30",
            "campaign": "Potassium",
            "confidence": "100%"
        },
        {
            "type": "ip",
            "indicator": "89[.]32[.]41[.]117",
            "description": "Potassium (botnet_cc)",
            "timestamp": "2026-10-21 13:38:28",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 19:11 IST",
            "tags": [
                "botnet",
                "verified",
                "https://github.com/deepfield/public-research/tree/main/potassium"
            ],
            "addedAt": "2026-10-21T19:11:57.899572+05:30",
            "campaign": "Potassium",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "202cd87d43a3908174e7b219c61ad3728cc6d46469a54f86861470c19677a6da",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-21 13:37:05",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 19:11 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://www.virustotal.com/gui/file/202cd87d43a3908174e7b219c61ad3728cc6d46469a54f86861470c19677a6da"
            ],
            "addedAt": "2026-10-21T19:11:57.899572+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://uki[.]abc212[.]org/vg/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-21 13:35:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 19:11 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T19:11:57.899572+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "uberdox[.]aishdas[.]org",
            "description": "StrelaStealer (payload_delivery)",
            "timestamp": "2026-10-21 13:35:23",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 19:11 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T19:11:57.899572+05:30",
            "campaign": "StrelaStealer",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "fa8b547639ddc7edcf86f146102b69e3782b94cf8e65a0d69e0f519c92b918e3",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-21 13:34:06",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 19:11 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://www.virustotal.com/gui/file/fa8b547639ddc7edcf86f146102b69e3782b94cf8e65a0d69e0f519c92b918e3"
            ],
            "addedAt": "2026-10-21T19:11:57.899572+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "sajapyly[.]workers[.]dev",
            "description": "php.shin_webshell (payload_delivery)",
            "timestamp": "2026-10-21 13:32:57",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 19:11 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T19:11:57.899572+05:30",
            "campaign": "php.shin_webshell",
            "confidence": "50%"
        },
        {
            "type": "url",
            "indicator": "hxxps://o[.]a9bet[.]org/g/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-21 13:30:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 19:11 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T19:11:57.899572+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://uki[.]abc212[.]org/xd/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-21 13:30:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 19:11 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T19:11:57.899572+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "30b4ae5036e76367f9d1165253dc81d4c7ae9fdced72c95cb4ecffc1f6aefcfd",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-21 13:30:22",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 19:11 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://www.virustotal.com/gui/file/30b4ae5036e76367f9d1165253dc81d4c7ae9fdced72c95cb4ecffc1f6aefcfd"
            ],
            "addedAt": "2026-10-21T19:11:57.899572+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "testes[.]graficca[.]com[.]br",
            "description": "StrelaStealer (payload_delivery)",
            "timestamp": "2026-10-21 13:27:27",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 19:11 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T19:11:57.899572+05:30",
            "campaign": "StrelaStealer",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://uki[.]abc212[.]org/n/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-21 13:25:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 19:11 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T19:11:57.899572+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://uki[.]abc212[.]org/yu/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-21 13:20:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 19:11 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T19:11:57.899572+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://uki[.]abc212[.]org/nl/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-21 13:15:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 19:11 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T19:11:57.899572+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://o[.]a9bet[.]org",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-21 13:13:30",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 19:11 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T19:11:57.899572+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://uki[.]abc212[.]org/rj/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-21 13:10:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 19:11 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T19:11:57.899572+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "108[.]199[.]58[.]34[.]bc[.]googleusercontent[.]com",
            "description": "php.shin_webshell (payload_delivery)",
            "timestamp": "2026-10-21 13:07:28",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 19:11 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T19:11:57.899572+05:30",
            "campaign": "php.shin_webshell",
            "confidence": "50%"
        },
        {
            "type": "domain",
            "indicator": "o[.]a9bet[.]org",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-21 13:05:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 19:11 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T19:11:57.899572+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://o[.]a9bet[.]org/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-21 13:05:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 19:11 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T19:11:57.899572+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://uki[.]abc212[.]org/bt1/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-21 13:05:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 19:11 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T19:11:57.899572+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "ip",
            "indicator": "156[.]240[.]41[.]164",
            "description": "VShell (botnet_cc)",
            "timestamp": "2026-10-21 13:05:04",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 19:11 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-21T19:11:57.899572+05:30",
            "campaign": "VShell",
            "confidence": "100%"
        },
        {
            "type": "ip",
            "indicator": "156[.]240[.]41[.]166",
            "description": "VShell (botnet_cc)",
            "timestamp": "2026-10-21 13:05:04",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 19:11 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-21T19:11:57.899572+05:30",
            "campaign": "VShell",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://z[.]a9bet[.]org/a/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-21 13:00:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 19:11 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T19:11:57.899572+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://s8[.]abc212[.]org/s79/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-21 13:00:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 19:11 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T19:11:57.899572+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "e55abaf0401637d610ba4fdc769d3211630916857027f0ffcbd2a9c3226a6989",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-21 12:57:07",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 19:11 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://www.virustotal.com/gui/file/e55abaf0401637d610ba4fdc769d3211630916857027f0ffcbd2a9c3226a6989"
            ],
            "addedAt": "2026-10-21T19:11:57.899572+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://s8[.]abc212[.]org/gm/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-21 12:55:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 19:11 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T19:11:57.899572+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "9d4cb16e7cac37c07d980b4c9f77e37bd149d3e3e1f88e0d6498192816dd0e10",
            "description": "Mirai (payload)",
            "timestamp": "2026-10-21 12:54:39",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 19:11 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-21T19:11:57.899572+05:30",
            "campaign": "Mirai",
            "confidence": "90%"
        },
        {
            "type": "hash",
            "indicator": "1fcf6489f59dc37ee33fe8d772b95a8cb55051295b24f237b0aa9ebd05647b51",
            "description": "Mirai (payload)",
            "timestamp": "2026-10-21 12:54:38",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 19:11 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-21T19:11:57.899572+05:30",
            "campaign": "Mirai",
            "confidence": "90%"
        },
        {
            "type": "hash",
            "indicator": "e0e2345d7814f964fe4e13570a41308263d9ed94fd1ebcddae122abd4653e804",
            "description": "Mirai (payload)",
            "timestamp": "2026-10-21 12:54:37",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 19:11 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-21T19:11:57.899572+05:30",
            "campaign": "Mirai",
            "confidence": "90%"
        },
        {
            "type": "hash",
            "indicator": "0a1327d4807c606bdbbb54b1bf56d82ee289a1e1dd41848a8d72fcfdf97a24bc",
            "description": "Mirai (payload)",
            "timestamp": "2026-10-21 12:54:36",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 19:11 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-21T19:11:57.899572+05:30",
            "campaign": "Mirai",
            "confidence": "90%"
        },
        {
            "type": "hash",
            "indicator": "a01b0d7f1eb245aa77675984691e1d015cbbe0928b00ec6d521657a596c8b6a4",
            "description": "Mirai (payload)",
            "timestamp": "2026-10-21 12:54:35",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 19:11 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-21T19:11:57.899572+05:30",
            "campaign": "Mirai",
            "confidence": "90%"
        },
        {
            "type": "hash",
            "indicator": "bcace72a031f60220ec6458c37813f156d81435a1aecf56eb743c31738aaccbb",
            "description": "Mirai (payload)",
            "timestamp": "2026-10-21 12:54:34",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 19:11 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-21T19:11:57.899572+05:30",
            "campaign": "Mirai",
            "confidence": "90%"
        },
        {
            "type": "hash",
            "indicator": "d1047f11c8de333f7a22aac42b3f3c4d566f8114bc8c008961eda70e1c53fca8",
            "description": "Agent Tesla (payload)",
            "timestamp": "2026-10-21 12:54:32",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 19:11 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-21T19:11:57.899572+05:30",
            "campaign": "Agent Tesla",
            "confidence": "75%"
        },
        {
            "type": "hash",
            "indicator": "a38be60dd7d73ae87c2ef820b3cb752bbafe1d6d35d4a83f7983da2d5adbd62b",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-21 12:54:19",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 19:11 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://www.virustotal.com/gui/file/a38be60dd7d73ae87c2ef820b3cb752bbafe1d6d35d4a83f7983da2d5adbd62b"
            ],
            "addedAt": "2026-10-21T19:11:57.899572+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://teakbasilica[.]org/signin/identity-deploy",
            "description": "SmartApeSG (payload_delivery)",
            "timestamp": "2026-10-21 12:52:33",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 19:11 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T19:11:57.899572+05:30",
            "campaign": "SmartApeSG",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "teakbasilica[.]org",
            "description": "SmartApeSG (payload_delivery)",
            "timestamp": "2026-10-21 12:52:33",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 19:11 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T19:11:57.899572+05:30",
            "campaign": "SmartApeSG",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://teakbasilica[.]org/signin/callback-state[.]js",
            "description": "SmartApeSG (payload_delivery)",
            "timestamp": "2026-10-21 12:52:32",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 19:11 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T19:11:57.899572+05:30",
            "campaign": "SmartApeSG",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://s8[.]abc212[.]org/nr/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-21 12:50:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 19:11 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T19:11:57.899572+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "7a231740d8361d302ff1b3991f23844e83ca8e344750701650ef7f84e73cbb78",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-21 12:50:42",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 19:11 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://www.virustotal.com/gui/file/7a231740d8361d302ff1b3991f23844e83ca8e344750701650ef7f84e73cbb78"
            ],
            "addedAt": "2026-10-21T19:11:57.899572+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "ip",
            "indicator": "207[.]189[.]25[.]218",
            "description": "Remcos (botnet_cc)",
            "timestamp": "2026-10-21 12:50:21",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 19:11 IST",
            "tags": [
                "botnet",
                "verified",
                "https://bazaar.abuse.ch/sample/239cc1ad3b7f433a4dbab6dad822e36673c4613eb6728812fa43132784bbc687/"
            ],
            "addedAt": "2026-10-21T19:11:57.899572+05:30",
            "campaign": "Remcos",
            "confidence": "75%"
        },
        {
            "type": "hash",
            "indicator": "4ac83d57beea52283ce42318ab935b92dcde57fb105689afe9413fa0435ca071",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-21 12:45:53",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 19:11 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://www.virustotal.com/gui/file/4ac83d57beea52283ce42318ab935b92dcde57fb105689afe9413fa0435ca071"
            ],
            "addedAt": "2026-10-21T19:11:57.899572+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://s8[.]abc212[.]org/jti/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-21 12:45:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 19:11 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T19:11:57.899572+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "bc4f3f020f9e362195c7c1d55ae3a5bde09f60abe7d1e56f8b5cd9621db6fa04",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-21 12:40:50",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 19:11 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://www.virustotal.com/gui/file/bc4f3f020f9e362195c7c1d55ae3a5bde09f60abe7d1e56f8b5cd9621db6fa04"
            ],
            "addedAt": "2026-10-21T19:11:57.899572+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://s8[.]abc212[.]org/nv/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-21 12:40:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 19:11 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T19:11:57.899572+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "kaizentekacademy[.]com",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-21 12:39:58",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 19:11 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T19:11:57.899572+05:30",
            "campaign": "IClickFix",
            "confidence": "75%"
        },
        {
            "type": "domain",
            "indicator": "locandaskansen[.]it",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-21 12:39:58",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 19:11 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T19:11:57.899572+05:30",
            "campaign": "IClickFix",
            "confidence": "75%"
        },
        {
            "type": "domain",
            "indicator": "polymathconsultant[.]com",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-21 12:39:58",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 19:11 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T19:11:57.899572+05:30",
            "campaign": "IClickFix",
            "confidence": "75%"
        },
        {
            "type": "domain",
            "indicator": "ttz-graz[.]at",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-21 12:39:58",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 19:11 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T19:11:57.899572+05:30",
            "campaign": "IClickFix",
            "confidence": "75%"
        },
        {
            "type": "domain",
            "indicator": "12startups[.]de",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-21 12:39:57",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 19:11 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T19:11:57.899572+05:30",
            "campaign": "IClickFix",
            "confidence": "75%"
        },
        {
            "type": "domain",
            "indicator": "bimalinstitute[.]com",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-21 12:39:57",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 19:11 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T19:11:57.899572+05:30",
            "campaign": "IClickFix",
            "confidence": "75%"
        },
        {
            "type": "domain",
            "indicator": "esif[.]online",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-21 12:39:57",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 19:11 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T19:11:57.899572+05:30",
            "campaign": "IClickFix",
            "confidence": "75%"
        },
        {
            "type": "domain",
            "indicator": "gambeta10kasino[.]fi",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-21 12:38:16",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 19:11 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T19:11:57.899572+05:30",
            "campaign": "IClickFix",
            "confidence": "75%"
        },
        {
            "type": "domain",
            "indicator": "grootcasino[.]org",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-21 12:38:16",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 19:11 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T19:11:57.899572+05:30",
            "campaign": "IClickFix",
            "confidence": "75%"
        },
        {
            "type": "domain",
            "indicator": "lotusdmc[.]com",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-21 12:38:16",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 19:11 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T19:11:57.899572+05:30",
            "campaign": "IClickFix",
            "confidence": "75%"
        },
        {
            "type": "domain",
            "indicator": "mdltransportes[.]com[.]br",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-21 12:38:16",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 19:11 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T19:11:57.899572+05:30",
            "campaign": "IClickFix",
            "confidence": "75%"
        },
        {
            "type": "domain",
            "indicator": "milanosostenibile[.]com",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-21 12:38:16",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 19:11 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T19:11:57.899572+05:30",
            "campaign": "IClickFix",
            "confidence": "75%"
        },
        {
            "type": "domain",
            "indicator": "ranjanclinic[.]com",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-21 12:38:16",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 19:11 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T19:11:57.899572+05:30",
            "campaign": "IClickFix",
            "confidence": "75%"
        },
        {
            "type": "domain",
            "indicator": "venusbottega[.]com",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-21 12:38:16",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 19:11 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T19:11:57.899572+05:30",
            "campaign": "IClickFix",
            "confidence": "75%"
        },
        {
            "type": "domain",
            "indicator": "aaghazedosti[.]com",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-21 12:38:15",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 19:11 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T19:11:57.899572+05:30",
            "campaign": "IClickFix",
            "confidence": "75%"
        },
        {
            "type": "domain",
            "indicator": "asperteccr[.]com",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-21 12:38:15",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 19:11 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T19:11:57.899572+05:30",
            "campaign": "IClickFix",
            "confidence": "75%"
        },
        {
            "type": "domain",
            "indicator": "culturaerealidade[.]com[.]br",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-21 12:38:15",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 19:11 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T19:11:57.899572+05:30",
            "campaign": "IClickFix",
            "confidence": "75%"
        },
        {
            "type": "hash",
            "indicator": "3e0773af5ccb3c201b3acb64b56d55282d95421441874e3d14695e51adb98719",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-21 12:38:11",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 19:11 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://www.virustotal.com/gui/file/3e0773af5ccb3c201b3acb64b56d55282d95421441874e3d14695e51adb98719"
            ],
            "addedAt": "2026-10-21T19:11:57.899572+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "taxi-supetar-bol[.]com",
            "description": "StrelaStealer (payload_delivery)",
            "timestamp": "2026-10-21 12:37:46",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 19:11 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T19:11:57.899572+05:30",
            "campaign": "StrelaStealer",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://z[.]a9bet[.]org/t",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-21 12:36:02",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 19:11 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T19:11:57.899572+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://s8[.]abc212[.]org/n0/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-21 12:35:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 19:11 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T19:11:57.899572+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "d91ab9708e5c414402d0b742518847e6a9e6ccad281154b59ca597cb7ced9497",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-21 12:35:34",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 19:11 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://www.virustotal.com/gui/file/d91ab9708e5c414402d0b742518847e6a9e6ccad281154b59ca597cb7ced9497"
            ],
            "addedAt": "2026-10-21T19:11:57.899572+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "3aeae0c7102ced8c24183c77e4252da66e1c4118c10527bfdb1e14bb291f0c7f",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-21 12:32:31",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 19:11 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://www.virustotal.com/gui/file/3aeae0c7102ced8c24183c77e4252da66e1c4118c10527bfdb1e14bb291f0c7f"
            ],
            "addedAt": "2026-10-21T19:11:57.899572+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://z[.]a9bet[.]org/t/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-21 12:30:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 19:11 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T19:11:57.899572+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://s8[.]abc212[.]org/k7/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-21 12:30:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 19:11 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T19:11:57.899572+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "diqopo[.]workers[.]dev",
            "description": "php.shin_webshell (payload_delivery)",
            "timestamp": "2026-10-21 12:29:30",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 19:11 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T19:11:57.899572+05:30",
            "campaign": "php.shin_webshell",
            "confidence": "50%"
        },
        {
            "type": "hash",
            "indicator": "9eabfb31f281ed61b993abe535472ef490a7ac5b94a78e9e229beae92b80b2cf",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-21 12:29:29",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 19:11 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://www.virustotal.com/gui/file/9eabfb31f281ed61b993abe535472ef490a7ac5b94a78e9e229beae92b80b2cf"
            ],
            "addedAt": "2026-10-21T19:11:57.899572+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://z[.]a9bet[.]org/z",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-21 12:26:11",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 19:11 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T19:11:57.899572+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://s8[.]abc212[.]org/rpr/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-21 12:25:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 19:11 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T19:11:57.899572+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "0tk8d2ri[.]bewiseimmunize[.]com",
            "description": "ClearFake (payload_delivery)",
            "timestamp": "2026-10-21 12:21:37",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 19:11 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T19:11:57.899572+05:30",
            "campaign": "ClearFake",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://s8[.]abc212[.]org/v0/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-21 12:20:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 19:11 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T19:11:57.899572+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxp://112[.]253[.]124[.]106:54515/Mozi[.]m",
            "description": "Mozi (payload_delivery)",
            "timestamp": "2026-10-21 12:20:22",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 19:11 IST",
            "tags": [
                "verified",
                "https://honeylabs.net/lookup/112.253.124.106"
            ],
            "addedAt": "2026-10-21T19:11:57.899572+05:30",
            "campaign": "Mozi",
            "confidence": "75%"
        },
        {
            "type": "url",
            "indicator": "hxxp://115[.]57[.]185[.]78:50789/Mozi[.]m",
            "description": "Mozi (payload_delivery)",
            "timestamp": "2026-10-21 12:20:22",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 19:11 IST",
            "tags": [
                "verified",
                "https://honeylabs.net/lookup/115.57.185.78"
            ],
            "addedAt": "2026-10-21T19:11:57.899572+05:30",
            "campaign": "Mozi",
            "confidence": "75%"
        }
    ],
    "dailySummary": {
        "stats": {
            "totalIndicators": 112682,
            "activeSources": 9,
            "criticalAlerts": 53869,
            "activeCampaigns": 404
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 42605,
                "trend": "stable",
                "percentage": 3
            },
            {
                "category": "C2",
                "count": 11264,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 10564,
                "trend": "stable",
                "percentage": 2
            },
            {
                "category": "Phishing",
                "count": 1843,
                "trend": "up",
                "percentage": 19
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
                "count": 31480,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]12[.]229[.]231",
                    "1[.]14[.]149[.]30",
                    "1[.]168[.]172[.]140"
                ]
            },
            {
                "name": "SSH Attacks",
                "count": 8142,
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
                "count": 2453,
                "types": [
                    "hash",
                    "ssl-cert",
                    "domain",
                    "url",
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
                    "hash",
                    "url",
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
                    "hash",
                    "ssl-cert",
                    "domain",
                    "url",
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
        "totalAttacksThisHour": 20546,
        "lastCalculated": "2026-10-22 01:34 IST"
    }
};
