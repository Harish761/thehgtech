// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-28T04:01:01.143124+05:30 IST (2026-10-27 22:31 UTC)
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-28T04:01:00.285164+05:30",
    "lastUpdatedFormatted": "Oct 28, 2026 at 04:01 AM IST",
    "lastUpdatedUtc": "2026-10-27 22:31 UTC",
    "comparisonPeriod": "Oct 27 \u2013 Oct 28, 2026",
    "stats": {
        "totalIOCs": 110064,
        "byType": {
            "url": 40141,
            "ip": 53792,
            "hash": 1060,
            "domain": 2253,
            "ssl-cert": 11064,
            "ip-range": 1754
        },
        "byVendor": {
            "OpenPhish": 3932,
            "Malware Bazaar": 737,
            "Spamhaus DROP": 1754,
            "CINS Army": 40131,
            "Blocklist.de": 11012,
            "URLhaus": 34822,
            "ThreatFox": 6607,
            "Feodo Tracker": 5,
            "SSL Blacklist": 11064
        },
        "topMalware": [
            {
                "name": "Vidar",
                "count": 1880,
                "types": [
                    "ssl-cert",
                    "domain",
                    "hash",
                    "url"
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1630,
                "types": [
                    "ssl-cert",
                    "ip",
                    "domain",
                    "hash"
                ]
            },
            {
                "name": "Cobalt Strike",
                "count": 1187,
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
                "count": 726,
                "types": [
                    "ssl-cert",
                    "hash"
                ]
            },
            {
                "name": "IClickFix",
                "count": 709,
                "types": [
                    "domain",
                    "url"
                ]
            },
            {
                "name": "ConnectWise",
                "count": 560,
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
                "count": 553,
                "types": [
                    "ssl-cert"
                ]
            },
            {
                "name": "PureRAT",
                "count": 444,
                "types": [
                    "ssl-cert",
                    "ip"
                ]
            },
            {
                "name": "Malware",
                "count": 419,
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
                "count": 350,
                "types": [
                    "ssl-cert",
                    "ip"
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
                "indicator": "b3419f377a0765d386af3f3a61bede653db873f7",
                "description": "Malicious SSL certificate - ArvionRAT C&C",
                "timestamp": "2026-10-27 15:35:42",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-28 02:07 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-28T02:07:59.072406+05:30",
                "campaign": "ArvionRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "891b265025da1fe909b4792dfe0f3df462694bef",
                "description": "Malicious SSL certificate - ConnectWise C&C",
                "timestamp": "2026-10-27 15:02:13",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-28 02:07 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-28T02:07:59.072406+05:30",
                "campaign": "ConnectWise",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "d8d068667512bafa6720747c23266764f70638a9",
                "description": "Malicious SSL certificate - ConnectWise C&C",
                "timestamp": "2026-10-27 15:01:45",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-28 02:07 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-28T02:07:59.072406+05:30",
                "campaign": "ConnectWise",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "f7c6d6e9767952571df5b177956e71f6e664711d",
                "description": "Malicious SSL certificate - ConnectWise C&C",
                "timestamp": "2026-10-27 15:00:47",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-28 02:07 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-28T02:07:59.072406+05:30",
                "campaign": "ConnectWise",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "9c1e389a6cea4a7eb32b2e1d89acedfd5b7a52f9",
                "description": "Malicious SSL certificate - ConnectWise C&C",
                "timestamp": "2026-10-27 15:00:16",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-28 02:07 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-28T02:07:59.072406+05:30",
                "campaign": "ConnectWise",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "8a6380c8c1857ae5e6c215fc9593e152d2350c87",
                "description": "Malicious SSL certificate - ConnectWise C&C",
                "timestamp": "2026-10-27 13:45:32",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-28 02:07 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-28T02:07:59.072406+05:30",
                "campaign": "ConnectWise",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "33f97c9513d957c407b1fb86aee23c20f9145680",
                "description": "Malicious SSL certificate - ConnectWise C&C",
                "timestamp": "2026-10-27 13:44:58",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-28 02:07 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-28T02:07:59.072406+05:30",
                "campaign": "ConnectWise",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "b850658af6eba65201db37e5e0491bc33b8bba8e",
                "description": "Malicious SSL certificate - ConnectWise C&C",
                "timestamp": "2026-10-27 13:44:00",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-28 02:07 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-28T02:07:59.072406+05:30",
                "campaign": "ConnectWise",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "d7ab2ab9aa49099722347f16ecdebd91097d1aa0",
                "description": "Malicious SSL certificate - ConnectWise C&C",
                "timestamp": "2026-10-27 13:43:23",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-28 02:07 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-28T02:07:59.072406+05:30",
                "campaign": "ConnectWise",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "bea642be1361616c46c371216f52414d41ad58d7",
                "description": "Malicious SSL certificate - ConnectWise C&C",
                "timestamp": "2026-10-27 13:43:11",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-28 02:07 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-28T02:07:59.072406+05:30",
                "campaign": "ConnectWise",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "6ea4447a4cff2bc512fc4d7ccc412111d64f8af8",
                "description": "Malicious SSL certificate - ConnectWise C&C",
                "timestamp": "2026-10-27 13:41:10",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-28 02:07 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-28T02:07:59.072406+05:30",
                "campaign": "ConnectWise",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "4f77e6691513a2677569524e2331ab29238f07b2",
                "description": "Malicious SSL certificate - Malware C&C",
                "timestamp": "2026-10-27 13:40:34",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-28 02:07 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-28T02:07:59.072406+05:30",
                "campaign": "Malware",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "9061737b3e3cb6dae0a02abe33346d72ccd27af4",
                "description": "Malicious SSL certificate - RatonRAT C&C",
                "timestamp": "2026-10-20 15:40:31",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-28 02:07 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-28T02:07:59.072406+05:30",
                "campaign": "RatonRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "59fb8a90649cac57e345fbd3af9f76d6a73fac12",
                "description": "Malicious SSL certificate - OffLoader C&C",
                "timestamp": "2026-10-20 06:27:30",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-28 02:07 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-28T02:07:59.072406+05:30",
                "campaign": "OffLoader",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "9a2205a15c886d6278d9e0d60747e8ad287b6c7b",
                "description": "Malicious SSL certificate - PureLogsStealer C&C",
                "timestamp": "2026-10-20 06:27:07",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-28 02:07 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-28T02:07:59.072406+05:30",
                "campaign": "PureLogsStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "75964711a6e10849d232b5df09f428a4eaa48a68",
                "description": "Malicious SSL certificate - PureRAT C&C",
                "timestamp": "2026-10-20 06:25:14",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-28 02:07 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-28T02:07:59.072406+05:30",
                "campaign": "PureRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "9001ac2344ddd1b2e32f5d25b5e56b323e6fc862",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-10-20 05:22:47",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-28 02:07 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-28T02:07:59.072406+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "11cfb1e85c316e9b9785c6778bc077bb04093dfd",
                "description": "Malicious SSL certificate - PureLogsStealer C&C",
                "timestamp": "2026-10-12 18:59:42",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-28 02:07 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-28T02:07:59.072406+05:30",
                "campaign": "PureLogsStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "c389945d4fc75250b291953e0abad0662dd9ce7d",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-10-12 18:14:36",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-28 02:07 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-28T02:07:59.072406+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "24ec954313877b212b522682aef606180ff6f343",
                "description": "Malicious SSL certificate - OffLoader C&C",
                "timestamp": "2026-10-12 18:14:12",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-28 02:07 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-28T02:07:59.072406+05:30",
                "campaign": "OffLoader",
                "confidence": "High"
            }
        ],
        "lastUpdated": "2026-10-28T04:01:00.285164+05:30",
        "lastUpdatedFormatted": "Oct 28, 2026 at 04:01 AM IST",
        "lastUpdatedUtc": "2026-10-27 22:31 UTC"
    },
    "vendors": {
        "OpenPhish": {
            "description": "Real-time phishing URL feed updated every 15 minutes. Tracks active phishing sites targeting major brands and financial institutions.",
            "website": "https://openphish.com/",
            "updateFrequency": "Every 15 minutes",
            "iocCount": 3932,
            "iocDataUrl": "https://thehgtech.com/ioc-data/openphish.json",
            "stats": {
                "total": 3932,
                "newInLastHour": 300,
                "lastUpdate": "2026-10-27 22:30 UTC"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://make-troll-318071[.]framer[.]app/",
                "hxxp://avdveulfdasxf[.]square[.]site/",
                "hxxp://himorhis[.]square[.]site/",
                "hxxps://facebookloginuser[.]blogspot[.]com/",
                "hxxps://www[.]facebookloginuser[.]blogspot[.]com/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 711,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 711,
                "newInLastHour": 0,
                "lastUpdate": "2026-10-27 22:30 UTC"
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
            "iocCount": 1701,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1701,
                "newInLastHour": 5,
                "lastUpdate": "2026-10-27 22:30 UTC"
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
            "iocCount": 39897,
            "iocDataUrl": "https://thehgtech.com/ioc-data/cins-army.json",
            "stats": {
                "total": 39897,
                "newInLastHour": 15000,
                "lastUpdate": "2026-10-27 22:30 UTC"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]12[.]229[.]231",
                "1[.]145[.]89[.]105",
                "1[.]193[.]57[.]144",
                "1[.]215[.]138[.]43",
                "1[.]220[.]119[.]115"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 11039,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 11039,
                "newInLastHour": 5278,
                "lastUpdate": "2026-10-27 22:30 UTC"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]117[.]72[.]220",
                "1[.]12[.]55[.]80",
                "1[.]14[.]149[.]30",
                "1[.]14[.]192[.]95",
                "1[.]14[.]240[.]247"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 34822,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 34822,
                "newInLastHour": 0,
                "lastUpdate": "2026-10-27 22:30 UTC"
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
            "iocCount": 6546,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 6546,
                "newInLastHour": 0,
                "lastUpdate": "2026-10-27 22:30 UTC"
            },
            "types": [
                "ip",
                "domain",
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
                "lastUpdate": "2026-10-27 22:30 UTC"
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
            "iocCount": 10645,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10645,
                "newInLastHour": 0,
                "lastUpdate": "2026-10-27 22:30 UTC"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "b3419f377a0765d386af3f3a61bede653db873f7",
                "891b265025da1fe909b4792dfe0f3df462694bef",
                "d8d068667512bafa6720747c23266764f70638a9",
                "f7c6d6e9767952571df5b177956e71f6e664711d",
                "9c1e389a6cea4a7eb32b2e1d89acedfd5b7a52f9"
            ]
        }
    },
    "overview": [
        {
            "type": "ssl-cert",
            "indicator": "b3419f377a0765d386af3f3a61bede653db873f7",
            "description": "Malicious SSL certificate - ArvionRAT C&C",
            "timestamp": "2026-10-27 15:35:42",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "ArvionRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "891b265025da1fe909b4792dfe0f3df462694bef",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-10-27 15:02:13",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "d8d068667512bafa6720747c23266764f70638a9",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-10-27 15:01:45",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "f7c6d6e9767952571df5b177956e71f6e664711d",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-10-27 15:00:47",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "9c1e389a6cea4a7eb32b2e1d89acedfd5b7a52f9",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-10-27 15:00:16",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "8a6380c8c1857ae5e6c215fc9593e152d2350c87",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-10-27 13:45:32",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "33f97c9513d957c407b1fb86aee23c20f9145680",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-10-27 13:44:58",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "b850658af6eba65201db37e5e0491bc33b8bba8e",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-10-27 13:44:00",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "d7ab2ab9aa49099722347f16ecdebd91097d1aa0",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-10-27 13:43:23",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "bea642be1361616c46c371216f52414d41ad58d7",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-10-27 13:43:11",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "6ea4447a4cff2bc512fc4d7ccc412111d64f8af8",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-10-27 13:41:10",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "4f77e6691513a2677569524e2331ab29238f07b2",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-10-27 13:40:34",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "9061737b3e3cb6dae0a02abe33346d72ccd27af4",
            "description": "Malicious SSL certificate - RatonRAT C&C",
            "timestamp": "2026-10-20 15:40:31",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "RatonRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "59fb8a90649cac57e345fbd3af9f76d6a73fac12",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-10-20 06:27:30",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "9a2205a15c886d6278d9e0d60747e8ad287b6c7b",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-10-20 06:27:07",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "75964711a6e10849d232b5df09f428a4eaa48a68",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-10-20 06:25:14",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "9001ac2344ddd1b2e32f5d25b5e56b323e6fc862",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-20 05:22:47",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "11cfb1e85c316e9b9785c6778bc077bb04093dfd",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-10-12 18:59:42",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "c389945d4fc75250b291953e0abad0662dd9ce7d",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-12 18:14:36",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "24ec954313877b212b522682aef606180ff6f343",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-10-12 18:14:12",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "515574d4dc4957fbd0043d3a4269485384e504e7",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-12 18:12:34",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "51f9d6339bfdb9321630392913941e04d921cf7d",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-12 18:11:48",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "9d4574e66ed485ca617fe78078a7dba674937bb3",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-12 18:10:31",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "6def2654b3b68fb89142113e6c5ad1b9e866134c",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-05 13:04:04",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "920de17c5bfce79df2950dacfb6a1f473e918edc",
            "description": "Malicious SSL certificate - AokigaharaStealer C&C",
            "timestamp": "2026-10-05 12:57:51",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "AokigaharaStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "184e5ede55f2eaf584182989d8a41411b6d34ae0",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-10-05 08:51:24",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "77c620cd80ac90a263808350b4133b607d973373",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-10-05 08:42:42",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "4e01833ef19ddbe7747012a4b08e54601bc318ae",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-10-05 08:17:27",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "9df78fcc97d1d3ee0d6a49ad2f2ac31559d77e8b",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-10-05 08:13:44",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "4bacdd95bace5a7e29064123c1326e2035f617c6",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-10-05 08:13:13",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "f8f56c66c440df5666400e34a532c04d6ca4e5b0",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-05 08:12:45",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "a06e3d9da60d6d6b57b1ef0bc4bf4a5187196fef",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-05 08:12:29",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "9d97ad9422a82188bb315281c6a5afdc851a04c1",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-10-05 08:11:17",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "3ab97a242ba3d2cfb46ca928f9941131f0849b59",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-10-05 08:08:58",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "ff19b149ab6b98a3051ae96de6c0942ab0444fa0",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-10-05 08:08:28",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "a600c01abd88a26bd9187ec2805992644f98ae8f",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-10-05 08:04:34",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "0ef7a55ce8aea56c72d1486b2a42d43c85ae1ff0",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-05 06:26:03",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "009a05eaf082d20ae13a65abda12afd959cd76de",
            "description": "Malicious SSL certificate - VenomRAT C&C",
            "timestamp": "2026-09-13 19:23:01",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "VenomRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "e129189e0ed0545baad30c054b5f51301d766516",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-09-13 19:21:19",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "fcfc3b257b12e4c699e343f4c415b60f642d88f6",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-09-13 19:01:33",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "b1709ae370ca3fb7ddb3fb49b6c1fca1303a4a97",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-09-06 18:14:32",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "a66308a1fb09c8345228ca00335e633b2dabde53",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-09-06 13:49:38",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "7fa3afaafe3b7c5eab63712e58c9414a86d559ec",
            "description": "Malicious SSL certificate - AsyncRAT C&C",
            "timestamp": "2026-09-06 07:52:59",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "AsyncRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "1baea4f8295715f075d3c0510b61017840047ae3",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-09-06 07:49:17",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "5efdc565e73e10756c6962ebadd15cf4b1075ea9",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-09-06 07:44:05",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "e649d5c0e33423531f5404ed8f985a3fc42fb934",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-09-06 07:43:05",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "4454daf3ef7f7d71cf8e4ce8067c880f9976c952",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-09-06 07:26:53",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "de0a287fb9997f0ffbd36df79b13cfda63f0bfcd",
            "description": "Malicious SSL certificate - QuasarRAT C&C",
            "timestamp": "2026-09-06 07:26:11",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "QuasarRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "d538bd18d7e63dfe3a67c02c253cc277e2b9733a",
            "description": "Malicious SSL certificate - DCAgentRMM C&C",
            "timestamp": "2026-09-06 07:25:43",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "DCAgentRMM",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "7d5d941b4a1e4732fad44cce2a4ded87a20d5508",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-09-06 07:25:12",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "78527fc92bcf8d188b3bcab1b35ac5881e2aaa43",
            "description": "Malicious SSL certificate - AsyncRAT C&C",
            "timestamp": "2026-09-06 07:24:56",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "AsyncRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "b3cbb7925cba0c91ef00f0208b35cfffc96614c7",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-09-06 07:20:14",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "a1f081f8dbb13e90a644017441c648053495a708",
            "description": "Malicious SSL certificate - VenomRAT C&C",
            "timestamp": "2026-09-06 07:19:39",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "VenomRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "070aa492d4afcb841457f33f366206805947160f",
            "description": "Malicious SSL certificate - Socks5Systemz C&C",
            "timestamp": "2026-09-06 07:19:24",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "Socks5Systemz",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "22d945ac6c7c00fb7bb5d0dc3618a82d46cfd1e2",
            "description": "Malicious SSL certificate - QuasarRAT C&C",
            "timestamp": "2026-09-06 07:19:03",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "QuasarRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "05fb6a6fa12c1638063b36498703b24fbbc2df43",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-09-06 07:18:47",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "b637337f25fe0290aaa04de866605bd70748c263",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-09-06 07:18:39",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "5750697f5e734c9105b89e13cc68fa51ae35e726",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-09-06 07:17:59",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "e61c15649184bdcdb39ae1fee964f8681677da35",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-09-06 07:17:35",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "b2b4ba87b84f146bbd2f8baa34ea5d555945af28",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-09-06 07:17:33",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "a5b119da03c543fa703dcf1f1470b547c88bc0ef",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-09-06 07:15:41",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "ca8a5bbb1e6b22fa9ad9757c50f1bdaf2c22011d",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-08-30 09:18:51",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "bfbcd2802186b6c5707f7ff6341b87c12b97f4a4",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-08-30 08:30:35",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "a7fa6117a38135c4d9c26ec7e37f15b361535edf",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-30 08:29:49",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "711c3a7bd15ae5377f4c395e23b3d8b8f1327ced",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-30 07:34:17",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "a0d553e2a130766628359bea489166c63b9892d7",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-30 07:33:36",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "1f494cd829ce4d2c465b8e981a0c7f9288354328",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-30 07:33:16",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "057b2084f877c8737e60de6c07ad829ea411b9c6",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-15 15:52:47",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "f3ba11a6cb8be921ee0fbd326de9a66220bcc82f",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-15 15:52:36",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "b5b8bebd73d8e8aec88ccc17b1e27c34921667ae",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-08 17:20:14",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "508ab3696a27249abc7ea437ee1b8bcb8a999d65",
            "description": "Malicious SSL certificate - OverlordRAT C&C",
            "timestamp": "2026-08-08 17:16:45",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "OverlordRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "02df529de5d2da5b01c0b557b02b289b060f344b",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-08-08 17:14:54",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "26d708c6ce4554e9fed0ae35556501faf8d0b01c",
            "description": "Malicious SSL certificate - ZigClipper C&C",
            "timestamp": "2026-08-08 17:14:39",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "ZigClipper",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "3b0855807c94981dca90ba6eb15e94087c91fb52",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-08-08 17:12:48",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "16237ea9476a99f34c740649ccb7119db3af5df0",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-08-08 17:10:49",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "aaaa57850472f7c23d75d9470b1f98655d5c3655",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-08-08 17:10:10",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "9aba7caceb4b84b49aaa4285d73183a94f4a50d5",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-08-08 17:09:27",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "cbde10c2baa3d573791b7e6044ba4e8f15094cd2",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-08-08 17:08:34",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "714c56e9e207d5c8e08e1ca28cd9ba85f079d061",
            "description": "Malicious SSL certificate - AsyncRAT C&C",
            "timestamp": "2026-08-08 17:08:25",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "AsyncRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "e6b44935f6416b11d4ec5d51bbcae9e6f2ab5ce7",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-08-08 17:07:50",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "2d410f6e2daaf4665a958610ce94242145c714e3",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-08-08 17:07:31",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "cfe6dcd7527099d525ffa8cec0bd1ab5020d47a7",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-08 17:00:10",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "988bb7e571418b2800a0cc2d33a794ecf1eb42a7",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-07-03 12:22:09",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "a37d8c8b3e427201148b485e4b23a59067fd3812",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-07-03 09:24:03",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "fa925f013a4c8ed98cda12d1d8f06ef638b11301",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-07-03 07:17:53",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "6617b3218632fe78cd223bfae98ae55ef69c13c2",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-07-03 07:17:37",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "0d9b7493086b8a7b2687ee21026ed1cb8eac55e5",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-07-03 07:16:51",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "adee7459752a33ec85d89a1837d84e9e75f8ac6e",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-07-03 07:16:38",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "ac563907d31a21443760cee92a98b50bba6152aa",
            "description": "Malicious SSL certificate - QuasarRAT C&C",
            "timestamp": "2026-07-03 07:15:08",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "QuasarRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "c7e0ca50174d919b1026d232418e208969a4d818",
            "description": "Malicious SSL certificate - KongTuke C&C",
            "timestamp": "2026-07-03 07:15:06",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "KongTuke",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "cdccad6e6ef6dc82ff5cfb3cb15d71bfb4df7d1a",
            "description": "Malicious SSL certificate - RatonRAT C&C",
            "timestamp": "2026-07-03 07:14:21",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "RatonRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "a3f065adb1d37aa01e6632753e8db17fb392d558",
            "description": "Malicious SSL certificate - KongTuke C&C",
            "timestamp": "2026-07-03 06:41:59",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "KongTuke",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "48cf152a0f547ca2ee9668e57c7136e157ec96f5",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-06-11 08:10:39",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "78e36aa21e77cf60799204d1fb0bac1f063aec42",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-06-11 06:09:38",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "e3c434a1fc0269f0ad0fb43cdf93494e726d2f68",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-06-11 06:08:47",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "a4f368e4e4c305b60212c016a4f1fa3a3a96a3de",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-06-11 06:08:17",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "0505fd5b451911f764cd457d591ec4d355e609c8",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-06-11 06:07:56",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "a8f5e9a021f8df5a11743cc4ad447ccf81e7c300",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-06-11 06:06:32",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "16400ecdd4f566aa796c3c06c7698b1966d07cc6",
            "description": "Malicious SSL certificate - PureHVNC C&C",
            "timestamp": "2026-06-11 06:06:26",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "PureHVNC",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "50e95582f4719b4eb6c316e332813b41adf449ed",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-05-20 08:04:28",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-28 02:07 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-28T02:07:59.072406+05:30",
            "campaign": "Malware",
            "confidence": "High"
        }
    ],
    "dailySummary": {
        "stats": {
            "totalIndicators": 110064,
            "activeSources": 9,
            "criticalAlerts": 47380,
            "activeCampaigns": 224
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 36071,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "C2",
                "count": 11309,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "Botnet",
                "count": 4629,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Phishing",
                "count": 3935,
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
                "count": 40131,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]12[.]229[.]231",
                    "1[.]145[.]89[.]105",
                    "1[.]15[.]14[.]29"
                ]
            },
            {
                "name": "malware_download",
                "count": 34822,
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
                "count": 11012,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]117[.]72[.]220",
                    "1[.]12[.]55[.]80",
                    "1[.]14[.]149[.]30"
                ]
            },
            {
                "name": "Generic Phishing",
                "count": 3902,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://make-troll-318071[.]framer[.]app/",
                    "hxxp://avdveulfdasxf[.]square[.]site/",
                    "hxxp://himorhis[.]square[.]site/"
                ]
            },
            {
                "name": "Vidar",
                "count": 1880,
                "types": [
                    "ssl-cert",
                    "domain",
                    "hash",
                    "url"
                ],
                "sampleIndicators": [
                    "963c8d952db068f9cd6b76e2313e69296ca6124f57755eeaa8c008ee05d349be",
                    "99b335ac5caf5249edc3223b100517d72f4fec0c6012955e3efc8d56c96880ef",
                    "6f38c0aedf5d1163cca3bf5721acb71cb54bf387a69827c8ccdc59064a19d6ed"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1754,
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
                "count": 1630,
                "types": [
                    "ssl-cert",
                    "ip",
                    "domain",
                    "hash"
                ],
                "sampleIndicators": [
                    "195fec1204186bb02fde9ac09f5a45add84dde09533400a354a2d97fd6b20acd",
                    "5ae300101bef874b2d8e9dc927571074d7cd6c706903f4a23d91bf0c2943e256",
                    "46[.]246[.]4[.]16"
                ]
            },
            {
                "name": "Cobalt Strike",
                "count": 1187,
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
                "count": 726,
                "types": [
                    "ssl-cert",
                    "hash"
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
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 20588,
        "lastCalculated": "2026-10-28 04:00 IST"
    }
};
