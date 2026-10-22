// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-23T01:29:22.855017+05:30 IST (2026-10-22 19:59 UTC)
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-23T01:29:21.921553+05:30",
    "lastUpdatedFormatted": "Oct 23, 2026 at 01:29 AM IST",
    "lastUpdatedUtc": "2026-10-22 19:59 UTC",
    "comparisonPeriod": "Oct 22 \u2013 Oct 23, 2026",
    "stats": {
        "totalIOCs": 116054,
        "byType": {
            "url": 47681,
            "ip": 45575,
            "hash": 6537,
            "domain": 3563,
            "ssl-cert": 11009,
            "ip-range": 1689
        },
        "byVendor": {
            "OpenPhish": 2334,
            "Malware Bazaar": 4009,
            "Spamhaus DROP": 1689,
            "CINS Army": 33614,
            "Blocklist.de": 8919,
            "URLhaus": 35628,
            "ThreatFox": 18847,
            "Feodo Tracker": 5,
            "SSL Blacklist": 11009
        },
        "topMalware": [
            {
                "name": "Vidar",
                "count": 2453,
                "types": [
                    "hash",
                    "ssl-cert",
                    "url",
                    "ip",
                    "domain"
                ]
            },
            {
                "name": "Mirai",
                "count": 1950,
                "types": [
                    "hash",
                    "url",
                    "domain",
                    "ip"
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1665,
                "types": [
                    "hash",
                    "ssl-cert",
                    "url",
                    "ip",
                    "domain"
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
                "count": 562,
                "types": [
                    "hash",
                    "ssl-cert"
                ]
            }
        ],
        "recentIOCs": [
            {
                "type": "ssl-cert",
                "indicator": "79928c5b3aaa3ea9d05750ba6b2af2aa6cbea154",
                "description": "Malicious SSL certificate - PureRAT C&C",
                "timestamp": "2026-10-22 06:54:29",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-22 19:13 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-22T19:13:15.245315+05:30",
                "campaign": "PureRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "7a5cbff9325f0ca3de3f020b3ba02e51390807cf",
                "description": "Malicious SSL certificate - Malware C&C",
                "timestamp": "2026-10-22 04:23:04",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-22 19:13 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-22T19:13:15.245315+05:30",
                "campaign": "Malware",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "001a8f07b150e2b1d6bcb715fd95c20a1e24dac3",
                "description": "Malicious SSL certificate - ConnectWise C&C",
                "timestamp": "2026-10-07 17:56:41",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-22 19:13 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-22T19:13:15.245315+05:30",
                "campaign": "ConnectWise",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "97b346a6656f38507fae979537c0baa86186a2d7",
                "description": "Malicious SSL certificate - OffLoader C&C",
                "timestamp": "2026-10-07 17:55:17",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-22 19:13 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-22T19:13:15.245315+05:30",
                "campaign": "OffLoader",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "a095f06a7ac8b272c1dd2e14e3b2508f4e4f86e3",
                "description": "Malicious SSL certificate - PureRAT C&C",
                "timestamp": "2026-10-07 16:43:40",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-22 19:13 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-22T19:13:15.245315+05:30",
                "campaign": "PureRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "59478ff95804dce8ca9ac41fab9bee313879a882",
                "description": "Malicious SSL certificate - ACRStealer C&C",
                "timestamp": "2026-10-07 16:43:30",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-22 19:13 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-22T19:13:15.245315+05:30",
                "campaign": "ACRStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "0f7363fdd9210d5cdcc0c7fa60a88b4a582fef18",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-10-07 16:43:11",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-22 19:13 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-22T19:13:15.245315+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "01ab8270fefc7b3582d27bafa2283b049ce624eb",
                "description": "Malicious SSL certificate - OffLoader C&C",
                "timestamp": "2026-10-07 16:42:25",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-22 19:13 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-22T19:13:15.245315+05:30",
                "campaign": "OffLoader",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "f8bfca2b3881d0e18e08e3f486124236f55235bc",
                "description": "Malicious SSL certificate - PureRAT C&C",
                "timestamp": "2026-10-07 16:41:52",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-22 19:13 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-22T19:13:15.245315+05:30",
                "campaign": "PureRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "a911c93bcdc127abcc602c9ec97da3ecf425b045",
                "description": "Malicious SSL certificate - PureLogsStealer C&C",
                "timestamp": "2026-10-07 16:40:59",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-22 19:13 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-22T19:13:15.245315+05:30",
                "campaign": "PureLogsStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "5fe196813d0bf092a5d8f3ef550fe959a86ccf87",
                "description": "Malicious SSL certificate - AsyncRAT C&C",
                "timestamp": "2026-09-30 08:24:38",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-22 19:13 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-22T19:13:15.245315+05:30",
                "campaign": "AsyncRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "bfe74bc4c5528d9ea8172159d9f77822251ff841",
                "description": "Malicious SSL certificate - OffLoader C&C",
                "timestamp": "2026-09-30 08:10:08",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-22 19:13 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-22T19:13:15.245315+05:30",
                "campaign": "OffLoader",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "1779ccab363236a86e64a2a71f0d2daa44d2351a",
                "description": "Malicious SSL certificate - Malware C&C",
                "timestamp": "2026-09-30 07:57:09",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-22 19:13 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-22T19:13:15.245315+05:30",
                "campaign": "Malware",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "8a7391f717ea7997c5196091415a9d52e726ddf2",
                "description": "Malicious SSL certificate - PureRAT C&C",
                "timestamp": "2026-09-30 07:56:50",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-22 19:13 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-22T19:13:15.245315+05:30",
                "campaign": "PureRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "bf9e6b1b3169fd64cc1fc836b4307a2c629b46b0",
                "description": "Malicious SSL certificate - PureRAT C&C",
                "timestamp": "2026-09-30 07:56:28",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-22 19:13 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-22T19:13:15.245315+05:30",
                "campaign": "PureRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "c55d2f821936f94e10034b9d5bd8ad5dee234264",
                "description": "Malicious SSL certificate - OffLoader C&C",
                "timestamp": "2026-09-30 07:56:18",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-22 19:13 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-22T19:13:15.245315+05:30",
                "campaign": "OffLoader",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "107432baee23d80d32a4d6fe5d6a43d011114239",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-09-30 05:51:19",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-22 19:13 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-22T19:13:15.245315+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "17d881f02866b9e629d39d16bdf43ca953b38d5c",
                "description": "Malicious SSL certificate - OffLoader C&C",
                "timestamp": "2026-09-01 14:19:57",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-22 19:13 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-22T19:13:15.245315+05:30",
                "campaign": "OffLoader",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "bfb6503c7c6ce8af43c41197a7fcaec491baa810",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-09-01 14:15:26",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-22 19:13 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-22T19:13:15.245315+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "696ef14e986d01e7d9186a690a06849c9cc49c4b",
                "description": "Malicious SSL certificate - ConnectWise C&C",
                "timestamp": "2026-09-01 06:13:28",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-22 19:13 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-22T19:13:15.245315+05:30",
                "campaign": "ConnectWise",
                "confidence": "High"
            }
        ],
        "lastUpdated": "2026-10-23T01:29:21.921553+05:30",
        "lastUpdatedFormatted": "Oct 23, 2026 at 01:29 AM IST",
        "lastUpdatedUtc": "2026-10-22 19:59 UTC"
    },
    "vendors": {
        "OpenPhish": {
            "description": "Real-time phishing URL feed updated every 15 minutes. Tracks active phishing sites targeting major brands and financial institutions.",
            "website": "https://openphish.com/",
            "updateFrequency": "Every 15 minutes",
            "iocCount": 2334,
            "iocDataUrl": "https://thehgtech.com/ioc-data/openphish.json",
            "stats": {
                "total": 2334,
                "newInLastHour": 300,
                "lastUpdate": "2026-10-22 19:59 UTC"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://my-top-juno-webmail-site[.]webflow[.]io/",
                "hxxps://g5[.]lu/tyc4k",
                "hxxp://bridge-browser[.]framer[.]website/",
                "hxxp://new-indexproject[.]vercel[.]app/",
                "hxxps://sp25ct-zunelo-biz-mareku-vorik[.]pages[.]dev/"
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
                "lastUpdate": "2026-10-22 19:59 UTC"
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
            "iocCount": 545,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 545,
                "newInLastHour": 0,
                "lastUpdate": "2026-10-22 19:59 UTC"
            },
            "types": [
                "ip-range"
            ],
            "sampleIndicators": [
                "2.26.75.0/24",
                "2.27.5.0/24",
                "2.27.62.0/24",
                "2.58.56.0/24",
                "2.59.152.0/24"
            ]
        },
        "CINS Army": {
            "description": "Malicious IPs from CINS Army threat intelligence. Fast-updating list of confirmed attackers.",
            "website": "http://cinsscore.com/",
            "updateFrequency": "Every 15 minutes",
            "iocCount": 34248,
            "iocDataUrl": "https://thehgtech.com/ioc-data/cins-army.json",
            "stats": {
                "total": 34248,
                "newInLastHour": 15000,
                "lastUpdate": "2026-10-22 19:59 UTC"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]12[.]229[.]231",
                "1[.]14[.]149[.]30",
                "1[.]145[.]89[.]105",
                "1[.]168[.]172[.]140",
                "1[.]188[.]100[.]173"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 9101,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 9101,
                "newInLastHour": 5142,
                "lastUpdate": "2026-10-22 19:59 UTC"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]117[.]72[.]220",
                "1[.]12[.]36[.]175",
                "1[.]12[.]55[.]80",
                "1[.]12[.]70[.]212",
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
                "lastUpdate": "2026-10-22 19:59 UTC"
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
            "iocCount": 18841,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 18841,
                "newInLastHour": 0,
                "lastUpdate": "2026-10-22 19:59 UTC"
            },
            "types": [
                "hash",
                "url",
                "domain",
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
                "lastUpdate": "2026-10-22 19:59 UTC"
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
            "iocCount": 10817,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10817,
                "newInLastHour": 18,
                "lastUpdate": "2026-10-22 19:59 UTC"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "79928c5b3aaa3ea9d05750ba6b2af2aa6cbea154",
                "7a5cbff9325f0ca3de3f020b3ba02e51390807cf",
                "7ed29169b508169575d0d26850aca8a93044067c",
                "082cdbff4a21322dcf87bbc200976465f072ae6e",
                "a546ecee7425b15ec2b0b63cd012b897d627cdc9"
            ]
        }
    },
    "overview": [
        {
            "type": "ssl-cert",
            "indicator": "79928c5b3aaa3ea9d05750ba6b2af2aa6cbea154",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-10-22 06:54:29",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "7a5cbff9325f0ca3de3f020b3ba02e51390807cf",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-10-22 04:23:04",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "001a8f07b150e2b1d6bcb715fd95c20a1e24dac3",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-10-07 17:56:41",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "97b346a6656f38507fae979537c0baa86186a2d7",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-10-07 17:55:17",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "a095f06a7ac8b272c1dd2e14e3b2508f4e4f86e3",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-10-07 16:43:40",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "59478ff95804dce8ca9ac41fab9bee313879a882",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-10-07 16:43:30",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "0f7363fdd9210d5cdcc0c7fa60a88b4a582fef18",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-07 16:43:11",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "01ab8270fefc7b3582d27bafa2283b049ce624eb",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-10-07 16:42:25",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "f8bfca2b3881d0e18e08e3f486124236f55235bc",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-10-07 16:41:52",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "a911c93bcdc127abcc602c9ec97da3ecf425b045",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-10-07 16:40:59",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "5fe196813d0bf092a5d8f3ef550fe959a86ccf87",
            "description": "Malicious SSL certificate - AsyncRAT C&C",
            "timestamp": "2026-09-30 08:24:38",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "AsyncRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "bfe74bc4c5528d9ea8172159d9f77822251ff841",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-09-30 08:10:08",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "1779ccab363236a86e64a2a71f0d2daa44d2351a",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-09-30 07:57:09",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "8a7391f717ea7997c5196091415a9d52e726ddf2",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-09-30 07:56:50",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "bf9e6b1b3169fd64cc1fc836b4307a2c629b46b0",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-09-30 07:56:28",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "c55d2f821936f94e10034b9d5bd8ad5dee234264",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-09-30 07:56:18",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "107432baee23d80d32a4d6fe5d6a43d011114239",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-09-30 05:51:19",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "17d881f02866b9e629d39d16bdf43ca953b38d5c",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-09-01 14:19:57",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "bfb6503c7c6ce8af43c41197a7fcaec491baa810",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-09-01 14:15:26",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "696ef14e986d01e7d9186a690a06849c9cc49c4b",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-09-01 06:13:28",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "cab93f3d490ed168600f08e5cc4a55d4e8c503c8",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-09-01 06:12:24",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "4e1d76e094c1a61d2e1ed367f67545fabe9bc074",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-09-01 06:11:34",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "d55545d9e23fbf6f6b667d4e055454de1108a627",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-09-01 06:11:07",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "4cc4e635af94a219c0c1eaa78c7c1eebdda49e1f",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-09-01 06:07:01",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "8cbedfb429f0d39039f26e2ce229191f21723e88",
            "description": "Malicious SSL certificate - RatonRAT C&C",
            "timestamp": "2026-09-01 05:56:32",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "RatonRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "c877ab2eec4efcc42bae4819dce27744bd41c0ef",
            "description": "Malicious SSL certificate - HypeAgent C&C",
            "timestamp": "2026-09-01 05:51:14",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "HypeAgent",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "851e9888eda6290dc6d0c817ac0c82488a9e0bd8",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-09-01 05:19:58",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "4bf18cb50cb5bca46aff5785c1ba96a248d1e9fd",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-09-01 05:19:19",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "64e6fe29e84ea3ecaaef08920d8ceb9567240166",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-25 06:58:54",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "fa62c7ce7b7ec943d8853832560bc5a386aaf17e",
            "description": "Malicious SSL certificate - HypeAgent C&C",
            "timestamp": "2026-08-18 06:53:52",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "HypeAgent",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "847e013a4d337babfdf203eba82d2d32717b9d2d",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-08-10 15:48:17",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "13f40ae70a0fe1ae9e727ad329583635cf8090be",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-08-10 14:34:39",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "263a7098595232fb1c9536d18a903858431212c0",
            "description": "Malicious SSL certificate - MeshAgent C&C",
            "timestamp": "2026-08-10 14:33:41",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "MeshAgent",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "283042355c89f2c59e260246d1488a73a8bef7b2",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-07-27 08:30:02",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "e6cc4eebe2d73c7174be4be73bc00d4642122ac4",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-07-27 07:00:32",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "7ddfe490347dc28f3e39de9be9d61940b6b98526",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-07-13 06:11:28",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "25b12b6623c85699b128e0b49fab305fa6b53291",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-07-13 06:10:27",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "078541bcc8ca1f620034dc2b29cbd968faf02ea6",
            "description": "Malicious SSL certificate - KongTuke C&C",
            "timestamp": "2026-06-28 08:04:50",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "KongTuke",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "a01bd4e7cb1064b5af288d0fbc48a06314f4c9af",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-06-06 08:22:31",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "e88df6fa5cbae7002d552047f52594c7dbe46baa",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-06-06 08:17:57",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "1826e244059546f2728d9dca86494828c95d0313",
            "description": "Malicious SSL certificate - RatonRAT C&C",
            "timestamp": "2026-06-06 07:03:33",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "RatonRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "44d317f1bdfcf7670d288c912cecd0737bc4cc1b",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-06-06 07:03:14",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "ae590545961e96de860ea7434c0e8c69b924de6f",
            "description": "Malicious SSL certificate - QuasarRAT C&C",
            "timestamp": "2026-06-06 07:02:21",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "QuasarRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "839f5f87d73ca215f864886dc5852a55faf89287",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-06-06 07:01:29",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "5d56416d22dff9c9c1fa6afa542760ffb799b627",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-06-06 07:00:42",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "6fdf1f145d05c569111ae66cca64e713dc122150",
            "description": "Malicious SSL certificate - CobaltStrike C&C",
            "timestamp": "2026-06-06 06:59:38",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "CobaltStrike",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "1635aa6d937f44887d7871b10ce2ccbdf76d09f0",
            "description": "Malicious SSL certificate - KongTuke C&C",
            "timestamp": "2026-06-06 06:45:46",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "KongTuke",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "d913080ef794a3bb0a60e395bfd72c00cc4712ac",
            "description": "Malicious SSL certificate - HijackLoader C&C",
            "timestamp": "2026-06-06 06:28:06",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "HijackLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "d401a5c721a25dd94d6eb02284f5e7b918c2b5df",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-05-15 16:03:42",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "42874ed125e23b73be13b7b8a7b89305ce979661",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-05-15 14:43:39",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "6da5a6bce253699b8db995f8955a4bf6482f12a3",
            "description": "Malicious SSL certificate - PureHVNC C&C",
            "timestamp": "2026-05-08 15:36:12",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "PureHVNC",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "04472c9faf1014830def8016729f50a2b773a0ab",
            "description": "Malicious SSL certificate - PureHVNC C&C",
            "timestamp": "2026-05-08 14:31:58",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "PureHVNC",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "fbcc12262a5020c472cea81fd415980a42d1eeaa",
            "description": "Malicious SSL certificate - SimpleHelp C&C",
            "timestamp": "2026-04-17 13:16:52",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "SimpleHelp",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "eca99021f65f962d0ffc0d4cda1a9fe9456750df",
            "description": "Malicious SSL certificate - PureHVNC C&C",
            "timestamp": "2026-04-17 12:29:43",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "PureHVNC",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "e7af95eaaa4c87398f4c4c80a66972f342bb3328",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-04-17 12:29:34",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "037598803e2603499edbf7275e43f7dd82abd8f3",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-04-17 12:27:42",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "9d77eb9cdbe47e39906a6a8a2cfb6b4eef6f29b0",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-03-19 13:25:40",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "f506d6391b6121bb867912603f1c231627013cb2",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-03-19 13:25:34",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "126fb0c3c98f6c3f9e359774e9b174a810eb9871",
            "description": "Malicious SSL certificate - QuasarRAT C&C",
            "timestamp": "2026-03-19 13:25:28",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "QuasarRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "2b0d3754fbe14d940ef67296b7fbcc7b6b780c93",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-03-19 13:21:59",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "bb50d3d5c445956dc5d72db51cf488465a463719",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-03-19 13:19:13",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "215840407d92940f9363e0a797f705109c7fd0d3",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-03-19 13:11:21",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "def7fb74c173cda2f51283b126ef8c9864fe5ff9",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-03-19 13:11:17",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "0e0d56550d563f4d94b33d0d0b433cd15ebfd8d2",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-03-19 13:08:40",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "0211433cfdfedfc7352c1228fc58d9d2f9d49032",
            "description": "Malicious SSL certificate - LummaStealer C&C",
            "timestamp": "2026-03-19 13:00:02",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "LummaStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "3d3dbc8d03c535c06e440e38d103d9a15313eab9",
            "description": "Malicious SSL certificate - CountLoader C&C",
            "timestamp": "2026-03-19 12:59:47",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "CountLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "7eb40ff4c8059bcd482cc2cf960d55ecf0814512",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-03-19 12:59:12",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "6c194c35aa5be04c429e06d95815c82e7b87ecca",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-03-19 12:57:23",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "de60402f64bb62866f674251249bffe1a457b86c",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-03-19 12:56:24",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "ab655f36219efa7e00e46889bf043f512e11038c",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-03-19 12:52:33",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "4f458ffb3f76e8e6e2623d4a54c1b117d3fcec62",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-03-19 06:44:01",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "ab0726d263109b70c7f73e4e739868d68699a641",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-03-19 06:44:00",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "4ec241d16098181c4e15f1f324ba96db74f2e7bc",
            "description": "Malicious SSL certificate - PureHVNC C&C",
            "timestamp": "2026-03-12 15:33:08",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "PureHVNC",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "9f301a45cd5aa087acc97ff0746bea7a05b366de",
            "description": "Malicious SSL certificate - DonutLoader C&C",
            "timestamp": "2026-03-12 15:31:56",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "DonutLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "407d4bc9cc3b67c3a5e48aeae8f384639df29105",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-03-12 15:26:30",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "0d0d241befba98f7b59445e7866d09e86bf8b7bc",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-03-12 08:58:12",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "de885c1d1276149530e9be3d8f622e5330c1c4c7",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-03-12 07:19:04",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "ba3e7e73b6c654a979d4e4fe20b4aa24890b4518",
            "description": "Malicious SSL certificate - AsyncRAT C&C",
            "timestamp": "2026-03-12 07:17:15",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "AsyncRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "e30905555de39d1e66f834f672f6f14e9106839b",
            "description": "Malicious SSL certificate - LummaStealer C&C",
            "timestamp": "2026-03-12 07:14:14",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "LummaStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "78372e9666177fc65dbd5a41286bcd2f22c12bf0",
            "description": "Malicious SSL certificate - QuasarRAT C&C",
            "timestamp": "2026-03-05 10:12:16",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "QuasarRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "bd3dbd030cec05e2791d201eb1b53e16c2886a81",
            "description": "Malicious SSL certificate - AmateraStealer C&C",
            "timestamp": "2026-03-05 07:46:06",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "AmateraStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "33237b8da591e88d22504745d99763c7562f01e9",
            "description": "Malicious SSL certificate - AmateraStealer C&C",
            "timestamp": "2026-03-05 07:21:56",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "AmateraStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "3593aa845bae12f840247f57f3d8624a84cf4d9a",
            "description": "Malicious SSL certificate - SantaStealer C&C",
            "timestamp": "2026-03-05 07:16:57",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "SantaStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "58d0977e2eb2f58b80c1441ac8a77c7da332b266",
            "description": "Malicious SSL certificate - QuasarRAT C&C",
            "timestamp": "2026-03-05 07:15:36",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "QuasarRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "badc8a27ad79d6a5d2ee9c006acb231efd88a90e",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-03-05 07:12:00",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "cee7df9454bddae395cf94accc9032c8e6133e3f",
            "description": "Malicious SSL certificate - OrcusRAT C&C",
            "timestamp": "2026-03-05 07:10:34",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "OrcusRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "90e1f340440d267677b6759911fe1369b2c301e8",
            "description": "Malicious SSL certificate - AmateraStealer C&C",
            "timestamp": "2026-03-05 07:06:09",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "AmateraStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "cc85bdad5c0335bd568b4557e49a4003bcc31be9",
            "description": "Malicious SSL certificate - AmateraStealer C&C",
            "timestamp": "2026-03-05 06:24:32",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "AmateraStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "66afb632b2131a12c4ee5896e88bc485662077eb",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-02-18 16:57:37",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "a38f2bfbc5ca952122a8e9fd9e5ed3bb2b734063",
            "description": "Malicious SSL certificate - XillenStealer C&C",
            "timestamp": "2026-02-11 16:47:46",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "XillenStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "ae2bcb77201c2a5e7e3e14a58238c30dfac0cf0a",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-02-04 13:15:14",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "18e41b19704dec838e6450de8c40398ea4dbc635",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-02-04 13:14:02",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "c4d77ce7e29209bf99a32d7f4eeb80e2bc81d7ac",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-02-04 13:13:43",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "4e73f6155ee7d6ab862fb322cd8a3dd29c0b8958",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-02-04 13:12:18",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "2ca092e86fab38941f83b4d6c138ddb3470a0231",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-02-04 13:12:03",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "c7530882a66889a4d175d1d430018beade260a2b",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-02-04 13:10:31",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "628e04408a0b1b7abe6dc33497f54c91b6e6b458",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-02-04 13:07:35",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "9a7f513131875d65772b4de3cf96ae39079d9963",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-02-04 10:27:21",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "70221c99bc051726ee982e4dca0093d7be4599cd",
            "description": "Malicious SSL certificate - XillenStealer C&C",
            "timestamp": "2026-02-04 09:59:15",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "XillenStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "1ec8c9cd11a5262c570a4e48e4115016614edc08",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-02-04 09:55:56",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-22 19:13 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-22T19:13:15.245315+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        }
    ],
    "dailySummary": {
        "stats": {
            "totalIndicators": 116054,
            "activeSources": 9,
            "criticalAlerts": 53867,
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
                "count": 11262,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 10564,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Phishing",
                "count": 2337,
                "trend": "up",
                "percentage": 13
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
                "count": 33614,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]12[.]229[.]231",
                    "1[.]14[.]149[.]30",
                    "1[.]145[.]89[.]105"
                ]
            },
            {
                "name": "SSH Attacks",
                "count": 8919,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]117[.]72[.]220",
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
                    "url",
                    "ip",
                    "domain"
                ],
                "sampleIndicators": [
                    "963c8d952db068f9cd6b76e2313e69296ca6124f57755eeaa8c008ee05d349be",
                    "99b335ac5caf5249edc3223b100517d72f4fec0c6012955e3efc8d56c96880ef",
                    "6f38c0aedf5d1163cca3bf5721acb71cb54bf387a69827c8ccdc59064a19d6ed"
                ]
            },
            {
                "name": "Generic Phishing",
                "count": 2327,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://my-top-juno-webmail-site[.]webflow[.]io/",
                    "hxxps://g5[.]lu/tyc4k",
                    "hxxp://bridge-browser[.]framer[.]website/"
                ]
            },
            {
                "name": "Mirai",
                "count": 1950,
                "types": [
                    "hash",
                    "url",
                    "domain",
                    "ip"
                ],
                "sampleIndicators": [
                    "5c9904bb290ca8b4581ca5337feaf8dc0262630e704faee10052b2385c5979fb",
                    "56530393263a80c470417364da8bcabbc8b819172866cb741304266a246fc639",
                    "1fcf6489f59dc37ee33fe8d772b95a8cb55051295b24f237b0aa9ebd05647b51"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1689,
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
                "count": 1665,
                "types": [
                    "hash",
                    "ssl-cert",
                    "url",
                    "ip",
                    "domain"
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
        "totalAttacksThisHour": 20465,
        "lastCalculated": "2026-10-23 01:29 IST"
    }
};
