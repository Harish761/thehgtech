// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-26T02:37:24.565953+05:30 IST (2026-10-25 21:07 UTC)
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-26T02:37:23.856718+05:30",
    "lastUpdatedFormatted": "Oct 26, 2026 at 02:37 AM IST",
    "lastUpdatedUtc": "2026-10-25 21:07 UTC",
    "comparisonPeriod": "Oct 25 \u2013 Oct 26, 2026",
    "stats": {
        "totalIOCs": 115762,
        "byType": {
            "url": 41760,
            "ip": 54061,
            "hash": 3645,
            "domain": 3558,
            "ssl-cert": 11050,
            "ip-range": 1688
        },
        "byVendor": {
            "OpenPhish": 3908,
            "Malware Bazaar": 2179,
            "Spamhaus DROP": 1688,
            "CINS Army": 40411,
            "Blocklist.de": 10624,
            "URLhaus": 35628,
            "ThreatFox": 10269,
            "Feodo Tracker": 5,
            "SSL Blacklist": 11050
        },
        "topMalware": [
            {
                "name": "Vidar",
                "count": 2438,
                "types": [
                    "url",
                    "hash",
                    "domain",
                    "ip",
                    "ssl-cert"
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1663,
                "types": [
                    "url",
                    "hash",
                    "domain",
                    "ip",
                    "ssl-cert"
                ]
            },
            {
                "name": "IClickFix",
                "count": 1280,
                "types": [
                    "domain",
                    "url"
                ]
            },
            {
                "name": "Cobalt Strike",
                "count": 1219,
                "types": [
                    "domain",
                    "ip",
                    "hash"
                ]
            },
            {
                "name": "Mirai",
                "count": 954,
                "types": [
                    "domain",
                    "ip",
                    "hash",
                    "url"
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
                "count": 675,
                "types": [
                    "domain",
                    "url",
                    "hash",
                    "ip"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 562,
                "types": [
                    "hash",
                    "ssl-cert"
                ]
            },
            {
                "name": "ConnectWise",
                "count": 554,
                "types": [
                    "hash",
                    "ssl-cert"
                ]
            },
            {
                "name": "OffLoader",
                "count": 554,
                "types": [
                    "ssl-cert"
                ]
            },
            {
                "name": "AMOS",
                "count": 522,
                "types": [
                    "domain",
                    "url",
                    "hash"
                ]
            },
            {
                "name": "PureRAT",
                "count": 463,
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
                "name": "DCRat",
                "count": 360,
                "types": [
                    "ip",
                    "ssl-cert"
                ]
            }
        ],
        "recentIOCs": [
            {
                "type": "ssl-cert",
                "indicator": "6f373dd650805f118832ae3c618d10f0402ea6fe",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-10-25 14:15:35",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-26 00:26 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-26T00:26:35.337129+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "38151a6b2438b2b645a27a891e1e15786f11a783",
                "description": "Malicious SSL certificate - PureLogsStealer C&C",
                "timestamp": "2026-10-18 12:25:30",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-26 00:26 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-26T00:26:35.337129+05:30",
                "campaign": "PureLogsStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "eaefd82da94ee8839666b2a42d24dcc412d7de3c",
                "description": "Malicious SSL certificate - Malware C&C",
                "timestamp": "2026-10-18 12:23:14",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-26 00:26 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-26T00:26:35.337129+05:30",
                "campaign": "Malware",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "e2234aa66c80b118b69211f6e8f4efbd578a7587",
                "description": "Malicious SSL certificate - PureLogsStealer C&C",
                "timestamp": "2026-10-18 12:22:13",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-26 00:26 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-26T00:26:35.337129+05:30",
                "campaign": "PureLogsStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "e2dbc11a546d739d12e547c38cdb4fd6cfacd4c4",
                "description": "Malicious SSL certificate - PureLogsStealer C&C",
                "timestamp": "2026-10-18 12:21:30",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-26 00:26 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-26T00:26:35.337129+05:30",
                "campaign": "PureLogsStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "b97f1ae860fce04e1aae480e10b884da9826b17b",
                "description": "Malicious SSL certificate - PureLogsStealer C&C",
                "timestamp": "2026-10-18 12:20:20",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-26 00:26 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-26T00:26:35.337129+05:30",
                "campaign": "PureLogsStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "97001686e56437dda319c71d5b0deeb8647de6e3",
                "description": "Malicious SSL certificate - QuasarRAT C&C",
                "timestamp": "2026-10-18 12:18:25",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-26 00:26 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-26T00:26:35.337129+05:30",
                "campaign": "QuasarRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "ad71014e839f794407e155508ce8ba98bf9556f7",
                "description": "Malicious SSL certificate - PureRAT C&C",
                "timestamp": "2026-10-18 12:14:31",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-26 00:26 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-26T00:26:35.337129+05:30",
                "campaign": "PureRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "565ad03c4f04a685db081954cc9e5b1b210849e9",
                "description": "Malicious SSL certificate - OffLoader C&C",
                "timestamp": "2026-10-18 12:07:16",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-26 00:26 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-26T00:26:35.337129+05:30",
                "campaign": "OffLoader",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "3aa254a14d2bfefa3f3645be8f87a814edcf3109",
                "description": "Malicious SSL certificate - OffLoader C&C",
                "timestamp": "2026-10-18 12:05:31",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-26 00:26 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-26T00:26:35.337129+05:30",
                "campaign": "OffLoader",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "a1fe9a509cdbfa8cc81db2a1f2216a96b32b2e55",
                "description": "Malicious SSL certificate - ACRStealer C&C",
                "timestamp": "2026-10-18 11:54:15",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-26 00:26 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-26T00:26:35.337129+05:30",
                "campaign": "ACRStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "d4c2969ae8a878031ece0d67457d419eab16358f",
                "description": "Malicious SSL certificate - ACRStealer C&C",
                "timestamp": "2026-10-18 11:54:11",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-26 00:26 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-26T00:26:35.337129+05:30",
                "campaign": "ACRStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "20e506ba84f2b1e681674fed4f44d72024f18cb2",
                "description": "Malicious SSL certificate - WARDENStealer C&C",
                "timestamp": "2026-10-18 11:53:41",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-26 00:26 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-26T00:26:35.337129+05:30",
                "campaign": "WARDENStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "5758a152f5bc1f96581c6530488f830766c45c96",
                "description": "Malicious SSL certificate - QuasarRAT C&C",
                "timestamp": "2026-10-18 11:52:51",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-26 00:26 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-26T00:26:35.337129+05:30",
                "campaign": "QuasarRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "b6e98fa780d26472b70284be1abf84e7cf2bb152",
                "description": "Malicious SSL certificate - Malware C&C",
                "timestamp": "2026-10-18 11:52:15",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-26 00:26 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-26T00:26:35.337129+05:30",
                "campaign": "Malware",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "6dc0b07b0666b932f43af624460a79c98d5d17bb",
                "description": "Malicious SSL certificate - ConnectWise C&C",
                "timestamp": "2026-10-18 11:51:26",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-26 00:26 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-26T00:26:35.337129+05:30",
                "campaign": "ConnectWise",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "28c47a169d83c0017b5db95a0ae29973cf21d13b",
                "description": "Malicious SSL certificate - ConnectWise C&C",
                "timestamp": "2026-10-18 11:50:59",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-26 00:26 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-26T00:26:35.337129+05:30",
                "campaign": "ConnectWise",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "a36fb193d41fdff5259ef4902ef4b33de38f768b",
                "description": "Malicious SSL certificate - DCAgentRMM C&C",
                "timestamp": "2026-10-18 11:48:57",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-26 00:26 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-26T00:26:35.337129+05:30",
                "campaign": "DCAgentRMM",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "c7a0310a47eec71976fbd7a4ac1dbd0aa4b7a7c1",
                "description": "Malicious SSL certificate - PureRAT C&C",
                "timestamp": "2026-10-18 11:48:26",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-26 00:26 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-26T00:26:35.337129+05:30",
                "campaign": "PureRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "ff59f65a5b8f0f847ed3c0ac1f140dc28de2f720",
                "description": "Malicious SSL certificate - OffLoader C&C",
                "timestamp": "2026-10-18 11:46:38",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-26 00:26 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-26T00:26:35.337129+05:30",
                "campaign": "OffLoader",
                "confidence": "High"
            }
        ],
        "lastUpdated": "2026-10-26T02:37:23.856718+05:30",
        "lastUpdatedFormatted": "Oct 26, 2026 at 02:37 AM IST",
        "lastUpdatedUtc": "2026-10-25 21:07 UTC"
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
                "lastUpdate": "2026-10-25 21:07 UTC"
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
            "iocCount": 2154,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 2154,
                "newInLastHour": 0,
                "lastUpdate": "2026-10-25 21:07 UTC"
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
            "iocCount": 1687,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1687,
                "newInLastHour": 0,
                "lastUpdate": "2026-10-25 21:07 UTC"
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
            "iocCount": 40179,
            "iocDataUrl": "https://thehgtech.com/ioc-data/cins-army.json",
            "stats": {
                "total": 40179,
                "newInLastHour": 15000,
                "lastUpdate": "2026-10-25 21:07 UTC"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]12[.]229[.]231",
                "1[.]192[.]129[.]106",
                "1[.]193[.]57[.]144",
                "1[.]215[.]138[.]43",
                "1[.]236[.]254[.]202"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 10841,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 10841,
                "newInLastHour": 4994,
                "lastUpdate": "2026-10-25 21:07 UTC"
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
                "lastUpdate": "2026-10-25 21:07 UTC"
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
            "iocCount": 10228,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 10228,
                "newInLastHour": 0,
                "lastUpdate": "2026-10-25 21:07 UTC"
            },
            "types": [
                "domain",
                "ip",
                "hash",
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
            "stats": {
                "total": 5,
                "newInLastHour": 5,
                "lastUpdate": "2026-10-25 21:07 UTC"
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
            "iocCount": 11048,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 11048,
                "newInLastHour": 0,
                "lastUpdate": "2026-10-25 21:07 UTC"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "6f373dd650805f118832ae3c618d10f0402ea6fe",
                "f6f18a9147a66682618c0255dd3d376ccbcfed94",
                "882b92d7a268237df18813ca7349fd2092f47618",
                "6d96859790e57d9a9d1acb20ff920a508eb96e1c",
                "a331a0dfcaaab84fb90dce85c86841a80db29e88"
            ]
        }
    },
    "overview": [
        {
            "type": "ssl-cert",
            "indicator": "6f373dd650805f118832ae3c618d10f0402ea6fe",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-25 14:15:35",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-26T00:26:35.337129+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "38151a6b2438b2b645a27a891e1e15786f11a783",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-10-18 12:25:30",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-26T00:26:35.337129+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "eaefd82da94ee8839666b2a42d24dcc412d7de3c",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-10-18 12:23:14",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-26T00:26:35.337129+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "e2234aa66c80b118b69211f6e8f4efbd578a7587",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-10-18 12:22:13",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-26T00:26:35.337129+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "e2dbc11a546d739d12e547c38cdb4fd6cfacd4c4",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-10-18 12:21:30",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-26T00:26:35.337129+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "b97f1ae860fce04e1aae480e10b884da9826b17b",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-10-18 12:20:20",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-26T00:26:35.337129+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "97001686e56437dda319c71d5b0deeb8647de6e3",
            "description": "Malicious SSL certificate - QuasarRAT C&C",
            "timestamp": "2026-10-18 12:18:25",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-26T00:26:35.337129+05:30",
            "campaign": "QuasarRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "ad71014e839f794407e155508ce8ba98bf9556f7",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-10-18 12:14:31",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-26T00:26:35.337129+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "565ad03c4f04a685db081954cc9e5b1b210849e9",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-10-18 12:07:16",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-26T00:26:35.337129+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "3aa254a14d2bfefa3f3645be8f87a814edcf3109",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-10-18 12:05:31",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-26T00:26:35.337129+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "a1fe9a509cdbfa8cc81db2a1f2216a96b32b2e55",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-10-18 11:54:15",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-26T00:26:35.337129+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "d4c2969ae8a878031ece0d67457d419eab16358f",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-10-18 11:54:11",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-26T00:26:35.337129+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "20e506ba84f2b1e681674fed4f44d72024f18cb2",
            "description": "Malicious SSL certificate - WARDENStealer C&C",
            "timestamp": "2026-10-18 11:53:41",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-26T00:26:35.337129+05:30",
            "campaign": "WARDENStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "5758a152f5bc1f96581c6530488f830766c45c96",
            "description": "Malicious SSL certificate - QuasarRAT C&C",
            "timestamp": "2026-10-18 11:52:51",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-26T00:26:35.337129+05:30",
            "campaign": "QuasarRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "b6e98fa780d26472b70284be1abf84e7cf2bb152",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-10-18 11:52:15",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-26T00:26:35.337129+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "6dc0b07b0666b932f43af624460a79c98d5d17bb",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-10-18 11:51:26",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-26T00:26:35.337129+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "28c47a169d83c0017b5db95a0ae29973cf21d13b",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-10-18 11:50:59",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-26T00:26:35.337129+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "a36fb193d41fdff5259ef4902ef4b33de38f768b",
            "description": "Malicious SSL certificate - DCAgentRMM C&C",
            "timestamp": "2026-10-18 11:48:57",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-26T00:26:35.337129+05:30",
            "campaign": "DCAgentRMM",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "c7a0310a47eec71976fbd7a4ac1dbd0aa4b7a7c1",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-10-18 11:48:26",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-26T00:26:35.337129+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "ff59f65a5b8f0f847ed3c0ac1f140dc28de2f720",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-10-18 11:46:38",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-26T00:26:35.337129+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "4fcc8c0172b376ebfc85d644c5f64f7cd60321a5",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-18 11:22:53",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-26T00:26:35.337129+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "19f54af30146108b291727f6f4cfb6339b1c8f86",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-18 11:22:14",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-26T00:26:35.337129+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "5189412bc415fe1fb2272c297498a47d2d160601",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-18 11:21:47",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-26T00:26:35.337129+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "a91b47c9e01edba1861a4d17d233fa0925a931f4",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-18 11:21:34",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-26T00:26:35.337129+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "cb98a0f8b53ff8c03b04b02f39807b205e548ca9",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-18 11:20:21",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-26T00:26:35.337129+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "90c309b563f777d4de2436936d275a0487a22baa",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-18 10:31:17",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-26T00:26:35.337129+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "7ef960d6cfa5bae388a927a5e20f9238bcb22f92",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-18 06:52:08",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-26T00:26:35.337129+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "e58d378500a9237df93a66f055ac6e0dc900d7fa",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-09-26 15:39:47",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-26T00:26:35.337129+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "86b5a5612e53988e28ed6604e8e9ff5476a46d0e",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-09-26 15:24:06",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-26T00:26:35.337129+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "d92cdd1624e3d004a180b07c2d2f33406564f839",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-09-26 15:13:56",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-26T00:26:35.337129+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "8cffe4fa8f624cb4c15790c414e04acde61e3651",
            "description": "Malicious SSL certificate - QuasarRAT C&C",
            "timestamp": "2026-09-12 11:00:56",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-26T00:26:35.337129+05:30",
            "campaign": "QuasarRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "00095e3cd5dfc929d16036132665d7e3e9ef7cd6",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-09-12 11:00:35",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-26T00:26:35.337129+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "5e06eaa686adc5ca8fd118752c6667e826bbcad0",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-08-28 19:50:35",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-26T00:26:35.337129+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "41f8e81a4f9b3e7e70353a84e4bf87d687ddc79e",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-08-28 19:50:23",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-26T00:26:35.337129+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "407df66ac87ceb177c560e82df9521c8003b5f0d",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-08-28 19:50:13",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-26T00:26:35.337129+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "1389c26fb7ce71a7aa1514e86879daf6b373325a",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-08-28 19:44:23",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-26T00:26:35.337129+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "8f154a9a3584398eb6be34b0e2f05c79c63cea6a",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-08-28 19:43:53",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-26T00:26:35.337129+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "8508e14457ad7de321edddf3688e124d5f1d652c",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-28 13:41:42",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-26T00:26:35.337129+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "d9da2988d90a2479eb45e1fc66ff46b04f2289f2",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-08-28 13:06:48",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-26T00:26:35.337129+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "5b276d28106cb7d91dd5f810e61d9523d34c7804",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-08-21 08:41:48",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-26T00:26:35.337129+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "1cdb18c33da65a40adad7b51808edf66f3e180e5",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-08-21 08:41:05",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-26T00:26:35.337129+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "bf192adc3dcaba7412e15b567de22e3f3150bbf7",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-08-21 08:37:08",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-26T00:26:35.337129+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "ecae976f3eabcaad996e0a431d47bcead61dfb5e",
            "description": "Malicious SSL certificate - RatonRAT C&C",
            "timestamp": "2026-08-21 08:31:04",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-26T00:26:35.337129+05:30",
            "campaign": "RatonRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "d962e722e22971c6b81f89befbbe949241b8c2ec",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-08-21 08:09:11",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-26T00:26:35.337129+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "a18ccdbee8a145ba523641dc63189ad51cd04064",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-08-21 08:02:50",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-26T00:26:35.337129+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "b94eb3bcd4a57442c30e14dd2067b0c6c46d9619",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-08-21 08:01:46",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-26T00:26:35.337129+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "0bb977bf9e0950a1a818660dde009ac9934bd1e2",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-21 08:01:23",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-26T00:26:35.337129+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "0f47d296ca2a764238bfd644c7b716cffafa1352",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-21 07:27:19",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-26T00:26:35.337129+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "aa50e1b4a6e7c66ba2ce4c1c82e62f8d74cd7202",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-21 07:25:22",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-26T00:26:35.337129+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "5b3c4900b63eb2ca8d0d174ef9e989324bc58c0d",
            "description": "Malicious SSL certificate - TELEPUZ C&C",
            "timestamp": "2026-08-21 07:08:46",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-26T00:26:35.337129+05:30",
            "campaign": "TELEPUZ",
            "confidence": "High"
        },
        {
            "type": "ip",
            "indicator": "162[.]243[.]103[.]246",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-26 00:26 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-26T00:26:34.146290+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "178[.]62[.]3[.]223",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-26 00:26 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-26T00:26:34.146290+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "27[.]133[.]154[.]218",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-26 00:26 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-26T00:26:34.146290+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "34[.]204[.]119[.]63",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-26 00:26 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-26T00:26:34.146290+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "50[.]16[.]16[.]211",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-26 00:26 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-26T00:26:34.146290+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "1[.]117[.]73[.]220",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 00:26 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T00:26:30.107171+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]12[.]55[.]80",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 00:26 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T00:26:30.107171+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]14[.]240[.]247",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 00:26 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T00:26:30.107171+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]15[.]106[.]134",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 00:26 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T00:26:30.107171+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]15[.]179[.]199",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 00:26 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T00:26:30.107171+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]203[.]149[.]250",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 00:26 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T00:26:30.107171+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]214[.]214[.]114",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 00:26 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T00:26:30.107171+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]222[.]42[.]237",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 00:26 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T00:26:30.107171+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]234[.]80[.]94",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 00:26 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T00:26:30.107171+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]238[.]106[.]229",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 00:26 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T00:26:30.107171+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]242[.]33[.]13",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 00:26 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T00:26:30.107171+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]27[.]251[.]252",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 00:26 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T00:26:30.107171+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]100[.]194[.]181",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 00:26 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T00:26:30.107171+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]11[.]137",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 00:26 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T00:26:30.107171+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]141[.]163",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 00:26 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T00:26:30.107171+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]24[.]71",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 00:26 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T00:26:30.107171+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]26[.]93",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 00:26 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T00:26:30.107171+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]4[.]240",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 00:26 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T00:26:30.107171+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]53[.]14",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 00:26 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T00:26:30.107171+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]64[.]76",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 00:26 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T00:26:30.107171+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]66[.]30",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 00:26 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T00:26:30.107171+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]69[.]201",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 00:26 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T00:26:30.107171+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]70[.]177",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 00:26 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T00:26:30.107171+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]201[.]234[.]37",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 00:26 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T00:26:30.107171+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]201[.]55[.]127",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 00:26 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T00:26:30.107171+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]206[.]210[.]3",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 00:26 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T00:26:30.107171+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]227[.]203[.]162",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 00:26 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T00:26:30.107171+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]227[.]236[.]176",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 00:26 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T00:26:30.107171+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]227[.]42[.]99",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 00:26 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T00:26:30.107171+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]227[.]49[.]193",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 00:26 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T00:26:30.107171+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]245[.]96[.]27",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 00:26 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T00:26:30.107171+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]32[.]240[.]31",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 00:26 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T00:26:30.107171+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]33[.]220[.]205",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 00:26 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T00:26:30.107171+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]35[.]102[.]166",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 00:26 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T00:26:30.107171+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]35[.]114[.]193",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 00:26 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T00:26:30.107171+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]35[.]227[.]48",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 00:26 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T00:26:30.107171+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]35[.]95[.]146",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 00:26 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T00:26:30.107171+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]108[.]133",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 00:26 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T00:26:30.107171+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]112[.]205",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 00:26 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T00:26:30.107171+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]119[.]203",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 00:26 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T00:26:30.107171+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]125[.]2",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 00:26 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T00:26:30.107171+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]125[.]72",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 00:26 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T00:26:30.107171+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]127[.]11",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 00:26 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T00:26:30.107171+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]127[.]151",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 00:26 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T00:26:30.107171+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]128[.]39",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 00:26 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 00:26 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T00:26:30.107171+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        }
    ],
    "dailySummary": {
        "stats": {
            "totalIndicators": 115762,
            "activeSources": 9,
            "criticalAlerts": 51012,
            "activeCampaigns": 278
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 39712,
                "trend": "stable",
                "percentage": -4
            },
            {
                "category": "C2",
                "count": 11300,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 5621,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Phishing",
                "count": 3911,
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
                "count": 40411,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]192[.]129[.]106",
                    "1[.]192[.]216[.]192",
                    "1[.]193[.]57[.]144"
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
                "count": 10624,
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
                "count": 3890,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://ldgr-lives-app[.]pages[.]dev/",
                    "hxxps://nav-ledgr-eng[.]pages[.]dev/",
                    "hxxp://5985n9mff-funfn994784ecd853-8478h84[.]netlify[.]app/"
                ]
            },
            {
                "name": "Vidar",
                "count": 2438,
                "types": [
                    "url",
                    "hash",
                    "domain",
                    "ip",
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "963c8d952db068f9cd6b76e2313e69296ca6124f57755eeaa8c008ee05d349be",
                    "99b335ac5caf5249edc3223b100517d72f4fec0c6012955e3efc8d56c96880ef",
                    "6f38c0aedf5d1163cca3bf5721acb71cb54bf387a69827c8ccdc59064a19d6ed"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1688,
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
                "count": 1663,
                "types": [
                    "url",
                    "hash",
                    "domain",
                    "ip",
                    "ssl-cert"
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
                    "domain",
                    "url"
                ],
                "sampleIndicators": [
                    "kaizentekacademy[.]com",
                    "locandaskansen[.]it",
                    "polymathconsultant[.]com"
                ]
            },
            {
                "name": "Cobalt Strike",
                "count": 1219,
                "types": [
                    "domain",
                    "ip",
                    "hash"
                ],
                "sampleIndicators": [
                    "4d12d57d6db212de40d9b28811b1e19b",
                    "cdn[.]img[.]5a09f6f2[.]PNAlumni[.]dgitd[.]anchorbolnorth[.]com",
                    "82[.]158[.]89[.]27"
                ]
            },
            {
                "name": "Mirai",
                "count": 954,
                "types": [
                    "domain",
                    "ip",
                    "hash",
                    "url"
                ],
                "sampleIndicators": [
                    "5c9904bb290ca8b4581ca5337feaf8dc0262630e704faee10052b2385c5979fb",
                    "56530393263a80c470417364da8bcabbc8b819172866cb741304266a246fc639",
                    "1fcf6489f59dc37ee33fe8d772b95a8cb55051295b24f237b0aa9ebd05647b51"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 20299,
        "lastCalculated": "2026-10-26 02:37 IST"
    }
};
