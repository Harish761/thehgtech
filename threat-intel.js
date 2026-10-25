// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-25T18:38:49.788335+05:30 IST (2026-10-25 13:08 UTC)
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-25T18:38:48.856152+05:30",
    "lastUpdatedFormatted": "Oct 25, 2026 at 06:38 PM IST",
    "lastUpdatedUtc": "2026-10-25 13:08 UTC",
    "comparisonPeriod": "Oct 24 \u2013 Oct 25, 2026",
    "stats": {
        "totalIOCs": 122304,
        "byType": {
            "url": 47774,
            "ip": 52488,
            "hash": 5844,
            "domain": 3563,
            "ssl-cert": 11005,
            "ip-range": 1630
        },
        "byVendor": {
            "OpenPhish": 3692,
            "Malware Bazaar": 3316,
            "Spamhaus DROP": 1630,
            "CINS Army": 38923,
            "Blocklist.de": 10523,
            "URLhaus": 35628,
            "ThreatFox": 17582,
            "Feodo Tracker": 5,
            "SSL Blacklist": 11005
        },
        "topMalware": [
            {
                "name": "Vidar",
                "count": 2454,
                "types": [
                    "ssl-cert",
                    "hash",
                    "url",
                    "domain",
                    "ip"
                ]
            },
            {
                "name": "Mirai",
                "count": 1950,
                "types": [
                    "url",
                    "domain",
                    "hash",
                    "ip"
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1663,
                "types": [
                    "ssl-cert",
                    "hash",
                    "url",
                    "domain",
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
                    "domain",
                    "hash",
                    "ip"
                ]
            },
            {
                "name": "AMOS",
                "count": 763,
                "types": [
                    "url",
                    "domain",
                    "hash"
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
                "name": "Unknown Loader",
                "count": 707,
                "types": [
                    "url",
                    "domain",
                    "hash",
                    "ip"
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
                "count": 574,
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
                "name": "ConnectWise",
                "count": 562,
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
            }
        ],
        "recentIOCs": [
            {
                "type": "ssl-cert",
                "indicator": "3904919770fb59a5c74df86090853e3f19a09575",
                "description": "Malicious SSL certificate - SeroRAT C&C",
                "timestamp": "2026-10-10 16:39:58",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-25 10:00 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-25T10:00:04.300816+05:30",
                "campaign": "SeroRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "3644a1d19d369a66e0970ee6e997736f1338727f",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-10-10 13:19:54",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-25 10:00 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-25T10:00:04.300816+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "9f71ec8a14e7a86f050b0484934ce8acc519fa91",
                "description": "Malicious SSL certificate - QuasarRAT C&C",
                "timestamp": "2026-10-10 13:19:14",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-25 10:00 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-25T10:00:04.300816+05:30",
                "campaign": "QuasarRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "6d90086b95e788305c8127c70122f967f1cd2a48",
                "description": "Malicious SSL certificate - DCAgentRMM C&C",
                "timestamp": "2026-10-10 13:18:30",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-25 10:00 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-25T10:00:04.300816+05:30",
                "campaign": "DCAgentRMM",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "1f47c0e1175b385853ea70babda305baf0ac8709",
                "description": "Malicious SSL certificate - ACRStealer C&C",
                "timestamp": "2026-10-10 13:17:47",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-25 10:00 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-25T10:00:04.300816+05:30",
                "campaign": "ACRStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "6286936434232449af5d2cb4e15d6cb1c0ae61a2",
                "description": "Malicious SSL certificate - OffLoader C&C",
                "timestamp": "2026-10-10 13:15:25",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-25 10:00 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-25T10:00:04.300816+05:30",
                "campaign": "OffLoader",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "74257e5a3aa71e6e31fdf871f8055373e57391b4",
                "description": "Malicious SSL certificate - DCAgentRMM C&C",
                "timestamp": "2026-10-10 13:15:16",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-25 10:00 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-25T10:00:04.300816+05:30",
                "campaign": "DCAgentRMM",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "33330e829893dd29699f09a04726f7d489b32157",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-10-03 10:57:14",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-25 10:00 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-25T10:00:04.300816+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "58b3990b07e9caaa2c504a5b9759d14eefcbc5e5",
                "description": "Malicious SSL certificate - AsyncRAT C&C",
                "timestamp": "2026-10-03 10:57:02",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-25 10:00 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-25T10:00:04.300816+05:30",
                "campaign": "AsyncRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "64c5f719aa0111be2ac04d785a8904b5baa22a88",
                "description": "Malicious SSL certificate - AsyncRAT C&C",
                "timestamp": "2026-10-03 10:55:26",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-25 10:00 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-25T10:00:04.300816+05:30",
                "campaign": "AsyncRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "ef85e36f55755b6b85e9b3739ff7bfbb90f22e3b",
                "description": "Malicious SSL certificate - BridgeAgent C&C",
                "timestamp": "2026-10-03 06:27:08",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-25 10:00 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-25T10:00:04.300816+05:30",
                "campaign": "BridgeAgent",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "c625552b0cc88337be1533622d895a90d8f2d227",
                "description": "Malicious SSL certificate - Malware C&C",
                "timestamp": "2026-09-18 13:25:21",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-25 10:00 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-25T10:00:04.300816+05:30",
                "campaign": "Malware",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "0a1192b7efc4408315bb36a29eaa149bf2306e0c",
                "description": "Malicious SSL certificate - PureLogsStealer C&C",
                "timestamp": "2026-09-11 05:41:28",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-25 10:00 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-25T10:00:04.300816+05:30",
                "campaign": "PureLogsStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "031491e9d9e07391f330aef5bbdce9febbf1fe90",
                "description": "Malicious SSL certificate - OffLoader C&C",
                "timestamp": "2026-09-11 05:40:59",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-25 10:00 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-25T10:00:04.300816+05:30",
                "campaign": "OffLoader",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "b43fde87eccd529d630ac6c5aa28931a3e6d52bf",
                "description": "Malicious SSL certificate - OffLoader C&C",
                "timestamp": "2026-09-11 05:40:42",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-25 10:00 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-25T10:00:04.300816+05:30",
                "campaign": "OffLoader",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "755c81877937861388f42dc73d5a6bf24c96e13b",
                "description": "Malicious SSL certificate - PureRAT C&C",
                "timestamp": "2026-09-04 12:19:09",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-25 10:00 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-25T10:00:04.300816+05:30",
                "campaign": "PureRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "972c98978e420c02a8d8c5f87930dadc70adbbd8",
                "description": "Malicious SSL certificate - ConnectWise C&C",
                "timestamp": "2026-09-04 11:30:12",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-25 10:00 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-25T10:00:04.300816+05:30",
                "campaign": "ConnectWise",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "cd4fbb7112546836c61911e6b3a09770b6aebf29",
                "description": "Malicious SSL certificate - DCAgentRMM C&C",
                "timestamp": "2026-09-04 10:00:04",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-25 10:00 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-25T10:00:04.300816+05:30",
                "campaign": "DCAgentRMM",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "09cc432d307b2b2d67a102c9a579f24b511cfea2",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-09-04 09:50:32",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-25 10:00 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-25T10:00:04.300816+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "17ee516f7e99548d2b4d735f2100f2754d814288",
                "description": "Malicious SSL certificate - OffLoader C&C",
                "timestamp": "2026-09-04 09:45:14",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-25 10:00 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-25T10:00:04.300816+05:30",
                "campaign": "OffLoader",
                "confidence": "High"
            }
        ],
        "lastUpdated": "2026-10-25T18:38:48.856152+05:30",
        "lastUpdatedFormatted": "Oct 25, 2026 at 06:38 PM IST",
        "lastUpdatedUtc": "2026-10-25 13:08 UTC"
    },
    "vendors": {
        "OpenPhish": {
            "description": "Real-time phishing URL feed updated every 15 minutes. Tracks active phishing sites targeting major brands and financial institutions.",
            "website": "https://openphish.com/",
            "updateFrequency": "Every 15 minutes",
            "iocCount": 3908,
            "iocDataUrl": "https://thehgtech.com/ioc-data/openphish.json",
            "stats": {
                "total": 3908,
                "newInLastHour": 300,
                "lastUpdate": "2026-10-25 13:08 UTC"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://ldgr-lives-app[.]pages[.]dev/",
                "hxxps://nav-ledgr-eng[.]pages[.]dev/",
                "hxxp://5985n9mff-funfn994784ecd853-8478h84[.]netlify[.]app/",
                "hxxps://ip3dev[.]com/",
                "hxxp://netflix-clone-seven-liard[.]vercel[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 3103,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 3103,
                "newInLastHour": 0,
                "lastUpdate": "2026-10-25 13:08 UTC"
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
            "iocCount": 1688,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1688,
                "newInLastHour": 58,
                "lastUpdate": "2026-10-25 13:08 UTC"
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
            "iocCount": 39937,
            "iocDataUrl": "https://thehgtech.com/ioc-data/cins-army.json",
            "stats": {
                "total": 39937,
                "newInLastHour": 15000,
                "lastUpdate": "2026-10-25 13:08 UTC"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]14[.]3[.]170",
                "1[.]15[.]14[.]29",
                "1[.]192[.]129[.]106",
                "1[.]193[.]57[.]144",
                "1[.]24[.]16[.]119"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 10542,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 10542,
                "newInLastHour": 4626,
                "lastUpdate": "2026-10-25 13:08 UTC"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]117[.]73[.]220",
                "1[.]12[.]55[.]80",
                "1[.]14[.]240[.]247",
                "1[.]15[.]106[.]134",
                "1[.]15[.]179[.]199"
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
                "lastUpdate": "2026-10-25 13:08 UTC"
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
            "iocCount": 11429,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 11429,
                "newInLastHour": 0,
                "lastUpdate": "2026-10-25 13:08 UTC"
            },
            "types": [
                "url",
                "domain",
                "hash",
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
            "stats": {
                "total": 5,
                "newInLastHour": 5,
                "lastUpdate": "2026-10-25 13:08 UTC"
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
            "iocCount": 11000,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 11000,
                "newInLastHour": 44,
                "lastUpdate": "2026-10-25 13:08 UTC"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "f6f18a9147a66682618c0255dd3d376ccbcfed94",
                "882b92d7a268237df18813ca7349fd2092f47618",
                "6d96859790e57d9a9d1acb20ff920a508eb96e1c",
                "a331a0dfcaaab84fb90dce85c86841a80db29e88",
                "aa538a850650cd9657359dd49a50229103e3f3dc"
            ]
        }
    },
    "overview": [
        {
            "type": "ssl-cert",
            "indicator": "3904919770fb59a5c74df86090853e3f19a09575",
            "description": "Malicious SSL certificate - SeroRAT C&C",
            "timestamp": "2026-10-10 16:39:58",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "SeroRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "3644a1d19d369a66e0970ee6e997736f1338727f",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-10 13:19:54",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "9f71ec8a14e7a86f050b0484934ce8acc519fa91",
            "description": "Malicious SSL certificate - QuasarRAT C&C",
            "timestamp": "2026-10-10 13:19:14",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "QuasarRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "6d90086b95e788305c8127c70122f967f1cd2a48",
            "description": "Malicious SSL certificate - DCAgentRMM C&C",
            "timestamp": "2026-10-10 13:18:30",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "DCAgentRMM",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "1f47c0e1175b385853ea70babda305baf0ac8709",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-10-10 13:17:47",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "6286936434232449af5d2cb4e15d6cb1c0ae61a2",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-10-10 13:15:25",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "74257e5a3aa71e6e31fdf871f8055373e57391b4",
            "description": "Malicious SSL certificate - DCAgentRMM C&C",
            "timestamp": "2026-10-10 13:15:16",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "DCAgentRMM",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "33330e829893dd29699f09a04726f7d489b32157",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-03 10:57:14",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "58b3990b07e9caaa2c504a5b9759d14eefcbc5e5",
            "description": "Malicious SSL certificate - AsyncRAT C&C",
            "timestamp": "2026-10-03 10:57:02",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "AsyncRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "64c5f719aa0111be2ac04d785a8904b5baa22a88",
            "description": "Malicious SSL certificate - AsyncRAT C&C",
            "timestamp": "2026-10-03 10:55:26",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "AsyncRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "ef85e36f55755b6b85e9b3739ff7bfbb90f22e3b",
            "description": "Malicious SSL certificate - BridgeAgent C&C",
            "timestamp": "2026-10-03 06:27:08",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "BridgeAgent",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "c625552b0cc88337be1533622d895a90d8f2d227",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-09-18 13:25:21",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "0a1192b7efc4408315bb36a29eaa149bf2306e0c",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-09-11 05:41:28",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "031491e9d9e07391f330aef5bbdce9febbf1fe90",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-09-11 05:40:59",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "b43fde87eccd529d630ac6c5aa28931a3e6d52bf",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-09-11 05:40:42",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "755c81877937861388f42dc73d5a6bf24c96e13b",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-09-04 12:19:09",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "972c98978e420c02a8d8c5f87930dadc70adbbd8",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-09-04 11:30:12",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "cd4fbb7112546836c61911e6b3a09770b6aebf29",
            "description": "Malicious SSL certificate - DCAgentRMM C&C",
            "timestamp": "2026-09-04 10:00:04",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "DCAgentRMM",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "09cc432d307b2b2d67a102c9a579f24b511cfea2",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-09-04 09:50:32",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "17ee516f7e99548d2b4d735f2100f2754d814288",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-09-04 09:45:14",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "1bf12565f5b66f9f938f92411d31aea37d9676e8",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-09-04 06:48:27",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "7f111c69f42266b474927156f103d70843e7f82b",
            "description": "Malicious SSL certificate - RatonRAT C&C",
            "timestamp": "2026-08-27 15:35:05",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "RatonRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "ddac606a1cf89b62cad44ca59ae7986378f191e7",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-08-27 15:31:53",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "77b9903c538d045e266bd4d6cf40ede0b040b403",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-08-27 15:31:40",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "7f73eeb03e7df441484d4610c5a0c3a02f166989",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-08-20 08:00:15",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "3992dd5edcdf2ce5d143f933e2657640e00a58d4",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-08-20 07:42:24",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "e0ffdffb5d9bf9216ea5e70d4fe2bae919f5a6ca",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-08-20 07:32:16",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "e1fadee899789d8e802b8b88dcf67e4cae82ccf1",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-20 07:31:39",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "0ad6076cb27bcdd5dd26fe56c022f4ab61ea00be",
            "description": "Malicious SSL certificate - Meterpreter C&C",
            "timestamp": "2026-08-20 07:31:22",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "Meterpreter",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "732c7efa7d624c30b074e78df6595f54fde9188d",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-20 06:50:47",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "45152caa36a93f2aa9dab483d4c57531221c431d",
            "description": "Malicious SSL certificate - DCRat C&C",
            "timestamp": "2026-08-20 06:24:07",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "DCRat",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "481d7383aaeec383beb3012d8dfd20548837e42b",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-08-20 06:17:34",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "af1a7c59f98298c9d3542e306d0292bdf30b4388",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-08-20 06:15:47",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "ab273c45f00b156514b5b6be664484911dbed547",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-08-20 06:12:31",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "8c6132e27eb7bfe859029b583c55243baf3f3029",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-08-20 06:11:03",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "865a8d01e86bcf06890c09c7b3e9f2c786d7e600",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-08-20 06:05:31",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "03cdb8ba1363fb90f77ab53b6fc78d58a5340c35",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-08-20 06:03:38",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "6d92d180394761c59cc1455cf6a7c773fb4efabe",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-08-20 05:56:56",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "f52ace7c91f1ad88a78ea62eab06e000e2f88f16",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-08-20 05:44:20",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "c6d367c9312830fbe81f12e8be9f1d56d2e10b13",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-08-20 05:42:38",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "d0eec27b6184ec84b6c3274869667f608e30de16",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-08-20 05:38:48",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "b28f42ca50cfb259dfc8dfe16e13631da75d6397",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-08-20 05:18:00",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "2a68cf483216956f8162c0334a75dac483bfaac6",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-13 16:38:39",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "7bbac2b67988c36fa1dbd3a75dc06629f766ccaf",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-13 16:38:19",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "9b4c3ff8dc5891693f443320e3c1167c7cebe2b7",
            "description": "Malicious SSL certificate - QuasarRAT C&C",
            "timestamp": "2026-08-13 16:38:11",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "QuasarRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "0f1b05653c3b3ab3bb4ecd772dd024668cbe8df1",
            "description": "Malicious SSL certificate - QuasarRAT C&C",
            "timestamp": "2026-08-13 13:44:06",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "QuasarRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "9cd7f02e5bd6f0cb16141c3205aa9b00b0fce027",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-08-13 13:42:57",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "e953a8c7f135a5b8867b9dfcfc2a1b402f1e289e",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-08-13 08:47:23",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "3c286904e96ada2549fe774aa6eb2d39920219ec",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-08-13 06:47:43",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "78dc4f50971751cbf98b96219dd56f099095a717",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-13 06:46:56",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "b23101487158938dc99bd731fe372634ad768a0f",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-08-13 06:46:18",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "1869a727516b162905ef9df32d1ad3fe6ceea9f0",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-08-13 06:44:55",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "680cfafa3541d8bdf18c8725016b0d987b9a7dbc",
            "description": "Malicious SSL certificate - DCRat C&C",
            "timestamp": "2026-08-13 06:42:51",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "DCRat",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "261044d91561eedea17eac730254426b193e27fe",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-08-13 06:39:26",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "05b215b1710e56a14f4742b10586af2750da866a",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-08-13 06:39:05",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "5b86c194e3e28190e76652c7a39e9acbf849ada2",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-13 06:36:30",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "9ea13ee5065114aee007c91c941ac3f8483c4326",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-13 06:05:08",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "448bf34943609cd5dcadf4b1dc58512df0718e57",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-08-06 08:09:15",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "28db945e3beaf15a6f6d7fdf2dfc06a5f0319fc3",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-08-06 07:24:20",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "22bedd3b6ea141fbe9b50681baa395909e014ad0",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-08-06 05:57:00",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "059e425acfe2753d135e1b7ba39e30f0b00dbbb3",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-08-06 05:55:30",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "ef74c5ab92e15e7226ba84cce3a45522c74ba902",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-08-06 05:54:38",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "b8b410c62bcb320c20cfee554f472df3fa5734e4",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-08-06 05:53:27",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "6e64e6fafd7922f1100ce4f5334fef6dd75b2e66",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-08-06 05:49:31",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "9b1d8ac99d61fbc0ba58655538c457db69c459e7",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-08-06 05:48:45",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "29e434f384fe91188ce4c8a3f607a781e5c5e5d1",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-08-06 05:38:46",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "d35b4be8b535918a0656df6b58c8ed8fb23692e0",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-08-06 05:34:05",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "097cee540020aa1e282dcf5afefebcb5a6a1dae4",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-08-06 05:30:33",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "12c42acde116383d7b75ae10fc47d5f369f5633e",
            "description": "Malicious SSL certificate - RemusStealer C&C",
            "timestamp": "2026-08-06 05:29:10",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "RemusStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "01cc79c660e1677fc17665e6d8169b5fdad75668",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-08-05 13:09:49",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "5dcd3232fc9873ebedca38f8ba5992fce6dccb61",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-08-05 12:53:53",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "3ddf56dd624309d956cccb6c41eb6fcfbb3c6364",
            "description": "Malicious SSL certificate - ZigClipper C&C",
            "timestamp": "2026-08-05 12:40:02",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "ZigClipper",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "0b260881d660a14c3c0b2e61a6685839c8053bc9",
            "description": "Malicious SSL certificate - KongTuke C&C",
            "timestamp": "2026-07-29 08:12:44",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "KongTuke",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "11a9b0c571e681f4f9e7780e3aff1fe8c2f3d676",
            "description": "Malicious SSL certificate - KongTuke C&C",
            "timestamp": "2026-07-29 08:12:37",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "KongTuke",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "e15c7bdeb747a9fff47c514a10229a2a59d1157d",
            "description": "Malicious SSL certificate - AnimateClipper C&C",
            "timestamp": "2026-07-29 07:48:05",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "AnimateClipper",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "cfce3aaff2ad3eae49b37a60d606984bd1492e16",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-07-22 07:30:49",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "47a42b7e960e081fb973d80964554f4dea813c9d",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-07-15 09:19:00",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "8ef5bc8cb7d00d8b89bacbd4f9405f402d1a002e",
            "description": "Malicious SSL certificate - SheetRAT C&C",
            "timestamp": "2026-07-15 07:30:50",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "SheetRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "0f50074c5489b97def2d220b8cd70bada3361220",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-07-15 06:53:27",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "58a5ded84c93621d72ecc14b386e0e6bea5d103a",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-07-15 06:52:13",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "1dedacf3710f30c15b9e73c9d719a969eec755e5",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-07-15 06:52:11",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "572029fec2909ba613cee3c3698b8a49af83b428",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-07-15 06:51:43",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "3599615abff24cd9b7801d4ee3263d66ab320867",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-07-15 06:51:34",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "c11fd105f60ade90dc2611391ee6aa93e6c73375",
            "description": "Malicious SSL certificate - AsyncRAT C&C",
            "timestamp": "2026-07-15 06:50:29",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "AsyncRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "046fe4e19fe44c7c3a76e7e8651879c4edd9851d",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-07-15 06:48:39",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "68ffb512bc3f1f544502736127d3bdbd6ece390b",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-07-15 06:48:37",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "44319377ae94a257a0c081e5fdcb97d1d93b127d",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-07-15 06:47:19",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "287c688acd02bd779c6315eacc15e3d25145b616",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-07-15 06:46:37",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "a0cd40a589573d515fb3d7c30d6de0d45d40a4fa",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-07-15 06:36:25",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "a3aed5e99b2c6563d265a69702d9071940eed8aa",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-07-15 06:34:41",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "7c27d36636428305d692f50c753e2e9af3897290",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-07-15 06:34:01",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "127e6ea4434d1e7c81918b4032c1282aa7d6d8a7",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-07-15 06:33:10",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "c0ee8887cf0998ae07e71d2f78fb121c3bafc9d5",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-07-15 06:30:49",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "2e22d7adb72403b6ff2b18c7302cbfff8ea45010",
            "description": "Malicious SSL certificate - KongTuke C&C",
            "timestamp": "2026-07-14 21:17:33",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "KongTuke",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "ca3454955272556813ca9be9954e720fa6b6796a",
            "description": "Malicious SSL certificate - KongTuke C&C",
            "timestamp": "2026-07-14 20:52:49",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "KongTuke",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "2d83749ee793d5dd905aebcee10c1898c7ce8110",
            "description": "Malicious SSL certificate - KongTuke C&C",
            "timestamp": "2026-07-08 07:40:07",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "KongTuke",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "bca627ea4b11ce235879ac54bcf5ca2121a6ed0c",
            "description": "Malicious SSL certificate - MSDuckStealer C&C",
            "timestamp": "2026-07-07 14:20:28",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "MSDuckStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "930ad835b903af414bb1a64dc5184fe8850b0d9c",
            "description": "Malicious SSL certificate - PureHVNC C&C",
            "timestamp": "2026-06-23 07:49:25",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "PureHVNC",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "696e8986d2a5ecc7deacdedf0efecd16f249befe",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-06-23 07:49:01",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "dd3ba97127142419e80ef9ae606bec55ca8500fd",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-06-23 07:48:41",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 10:00 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T10:00:04.300816+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        }
    ],
    "dailySummary": {
        "stats": {
            "totalIndicators": 122304,
            "activeSources": 9,
            "criticalAlerts": 53170,
            "activeCampaigns": 377
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 41912,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 11258,
                "trend": "stable",
                "percentage": 3
            },
            {
                "category": "Botnet",
                "count": 10564,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Phishing",
                "count": 3695,
                "trend": "stable",
                "percentage": 5
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
                "count": 38923,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]15[.]14[.]29",
                    "1[.]168[.]172[.]140",
                    "1[.]215[.]138[.]43"
                ]
            },
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
                "name": "SSH Attacks",
                "count": 10523,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]117[.]73[.]220",
                    "1[.]12[.]55[.]80",
                    "1[.]14[.]240[.]247"
                ]
            },
            {
                "name": "Generic Phishing",
                "count": 3674,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://www[.]roblox[.]ly/users/2112515059/profile",
                    "hxxps://u[.]gy/QULKD9",
                    "hxxp://tokinix-cdn6-jh[.]xyz/"
                ]
            },
            {
                "name": "Vidar",
                "count": 2454,
                "types": [
                    "ssl-cert",
                    "hash",
                    "url",
                    "domain",
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
                    "domain",
                    "hash",
                    "ip"
                ],
                "sampleIndicators": [
                    "5c9904bb290ca8b4581ca5337feaf8dc0262630e704faee10052b2385c5979fb",
                    "56530393263a80c470417364da8bcabbc8b819172866cb741304266a246fc639",
                    "1fcf6489f59dc37ee33fe8d772b95a8cb55051295b24f237b0aa9ebd05647b51"
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1663,
                "types": [
                    "ssl-cert",
                    "hash",
                    "url",
                    "domain",
                    "ip"
                ],
                "sampleIndicators": [
                    "195fec1204186bb02fde9ac09f5a45add84dde09533400a354a2d97fd6b20acd",
                    "5ae300101bef874b2d8e9dc927571074d7cd6c706903f4a23d91bf0c2943e256",
                    "c2b10b8c0d346d3e1201daea39713fbfaeb410e8b7fee94b0546a3fcdc91573f"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1630,
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
        "totalAttacksThisHour": 20033,
        "lastCalculated": "2026-10-25 18:38 IST"
    }
};
