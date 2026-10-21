// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-21T10:02:34.432941+05:30 IST (2026-10-21 04:32 UTC)
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-21T10:02:33.905999+05:30",
    "lastUpdatedFormatted": "Oct 21, 2026 at 10:02 AM IST",
    "lastUpdatedUtc": "2026-10-21 04:32 UTC",
    "comparisonPeriod": "Oct 20 \u2013 Oct 21, 2026",
    "stats": {
        "totalIOCs": 106990,
        "byType": {
            "url": 45418,
            "ip": 40552,
            "hash": 5625,
            "domain": 2720,
            "ssl-cert": 10985,
            "ip-range": 1690
        },
        "byVendor": {
            "OpenPhish": 1240,
            "Malware Bazaar": 3365,
            "Spamhaus DROP": 1690,
            "CINS Army": 30014,
            "Blocklist.de": 7618,
            "URLhaus": 34747,
            "ThreatFox": 17326,
            "Feodo Tracker": 5,
            "SSL Blacklist": 10985
        },
        "topMalware": [
            {
                "name": "Vidar",
                "count": 2189,
                "types": [
                    "ip",
                    "hash",
                    "url",
                    "ssl-cert",
                    "domain"
                ]
            },
            {
                "name": "Mirai",
                "count": 1807,
                "types": [
                    "hash",
                    "url",
                    "ip",
                    "domain"
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1655,
                "types": [
                    "ip",
                    "hash",
                    "url",
                    "ssl-cert",
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
                "count": 1211,
                "types": [
                    "ip",
                    "domain"
                ]
            },
            {
                "name": "QuasarRAT",
                "count": 737,
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
                "name": "IClickFix",
                "count": 715,
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
                "name": "win.pure_rat",
                "count": 650,
                "types": [
                    "url"
                ]
            },
            {
                "name": "AMOS",
                "count": 609,
                "types": [
                    "hash",
                    "domain",
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
                "name": "OffLoader",
                "count": 547,
                "types": [
                    "ssl-cert"
                ]
            },
            {
                "name": "ConnectWise",
                "count": 513,
                "types": [
                    "hash",
                    "ssl-cert"
                ]
            }
        ],
        "recentIOCs": [
            {
                "type": "ip",
                "indicator": "162[.]243[.]103[.]246",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-10-21 04:38 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-10-21 04:38 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-10-21T04:38:21.298637+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "178[.]62[.]3[.]223",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-10-21 04:38 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-10-21 04:38 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-10-21T04:38:21.298637+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "27[.]133[.]154[.]218",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-10-21 04:38 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-10-21 04:38 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-10-21T04:38:21.298637+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "34[.]204[.]119[.]63",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-10-21 04:38 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-10-21 04:38 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-10-21T04:38:21.298637+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "50[.]16[.]16[.]211",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-10-21 04:38 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-10-21 04:38 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-10-21T04:38:21.298637+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "156[.]240[.]41[.]55",
                "description": "VShell (botnet_cc)",
                "timestamp": "2026-10-20 23:05:06",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-21 04:38 IST",
                "tags": [
                    "botnet",
                    "verified"
                ],
                "addedAt": "2026-10-21T04:38:19.937435+05:30",
                "campaign": "VShell",
                "confidence": "100%"
            },
            {
                "type": "ip",
                "indicator": "156[.]240[.]41[.]48",
                "description": "VShell (botnet_cc)",
                "timestamp": "2026-10-20 23:05:05",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-21 04:38 IST",
                "tags": [
                    "botnet",
                    "verified"
                ],
                "addedAt": "2026-10-21T04:38:19.937435+05:30",
                "campaign": "VShell",
                "confidence": "100%"
            },
            {
                "type": "ip",
                "indicator": "156[.]240[.]41[.]49",
                "description": "VShell (botnet_cc)",
                "timestamp": "2026-10-20 23:05:05",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-21 04:38 IST",
                "tags": [
                    "botnet",
                    "verified"
                ],
                "addedAt": "2026-10-21T04:38:19.937435+05:30",
                "campaign": "VShell",
                "confidence": "100%"
            },
            {
                "type": "ip",
                "indicator": "156[.]240[.]41[.]51",
                "description": "VShell (botnet_cc)",
                "timestamp": "2026-10-20 23:05:05",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-21 04:38 IST",
                "tags": [
                    "botnet",
                    "verified"
                ],
                "addedAt": "2026-10-21T04:38:19.937435+05:30",
                "campaign": "VShell",
                "confidence": "100%"
            },
            {
                "type": "ip",
                "indicator": "156[.]240[.]41[.]36",
                "description": "VShell (botnet_cc)",
                "timestamp": "2026-10-20 23:05:04",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-21 04:38 IST",
                "tags": [
                    "botnet",
                    "verified"
                ],
                "addedAt": "2026-10-21T04:38:19.937435+05:30",
                "campaign": "VShell",
                "confidence": "100%"
            },
            {
                "type": "url",
                "indicator": "hxxps://k1[.]abbc123[.]org/fs/",
                "description": "Vidar (botnet_cc)",
                "timestamp": "2026-10-20 23:00:49",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-21 04:38 IST",
                "tags": [
                    "verified"
                ],
                "addedAt": "2026-10-21T04:38:19.937435+05:30",
                "campaign": "Vidar",
                "confidence": "100%"
            },
            {
                "type": "url",
                "indicator": "hxxps://aragoniteforum[.]info/logout/oauth-dom[.]js",
                "description": "SmartApeSG (payload_delivery)",
                "timestamp": "2026-10-20 22:58:29",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-21 04:38 IST",
                "tags": [
                    "verified"
                ],
                "addedAt": "2026-10-21T04:38:19.937435+05:30",
                "campaign": "SmartApeSG",
                "confidence": "100%"
            },
            {
                "type": "url",
                "indicator": "hxxps://k1[.]abbc123[.]org/e/",
                "description": "Vidar (botnet_cc)",
                "timestamp": "2026-10-20 22:55:48",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-21 04:38 IST",
                "tags": [
                    "verified"
                ],
                "addedAt": "2026-10-21T04:38:19.937435+05:30",
                "campaign": "Vidar",
                "confidence": "100%"
            },
            {
                "type": "domain",
                "indicator": "indigo-flicker-zephyr-truior[.]pro",
                "description": "IClickFix (payload_delivery)",
                "timestamp": "2026-10-20 22:55:07",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-21 04:38 IST",
                "tags": [
                    "verified"
                ],
                "addedAt": "2026-10-21T04:38:19.937435+05:30",
                "campaign": "IClickFix",
                "confidence": "100%"
            },
            {
                "type": "hash",
                "indicator": "ffea3070af4b850efe2136558323c5a249664774f1d3b9e5b2bfb7233c5ed554",
                "description": "Mirai (payload)",
                "timestamp": "2026-10-20 22:54:26",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-21 04:38 IST",
                "tags": [
                    "malware",
                    "hash",
                    "verified"
                ],
                "addedAt": "2026-10-21T04:38:19.937435+05:30",
                "campaign": "Mirai",
                "confidence": "90%"
            },
            {
                "type": "hash",
                "indicator": "34f29ee4bc4af44fd195172378359088cd8ea4d7d39a66713a87f7087acaf933",
                "description": "SalatStealer (payload)",
                "timestamp": "2026-10-20 22:54:25",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-21 04:38 IST",
                "tags": [
                    "malware",
                    "hash",
                    "verified"
                ],
                "addedAt": "2026-10-21T04:38:19.937435+05:30",
                "campaign": "SalatStealer",
                "confidence": "100%"
            },
            {
                "type": "domain",
                "indicator": "naamtravel[.]com[.]sg",
                "description": "Unknown Loader (payload_delivery)",
                "timestamp": "2026-10-20 22:53:34",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-21 04:38 IST",
                "tags": [
                    "verified"
                ],
                "addedAt": "2026-10-21T04:38:19.937435+05:30",
                "campaign": "Unknown Loader",
                "confidence": "75%"
            },
            {
                "type": "domain",
                "indicator": "holistixwellness[.]co[.]uk",
                "description": "IClickFix (payload_delivery)",
                "timestamp": "2026-10-20 22:52:46",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-21 04:38 IST",
                "tags": [
                    "verified"
                ],
                "addedAt": "2026-10-21T04:38:19.937435+05:30",
                "campaign": "IClickFix",
                "confidence": "75%"
            },
            {
                "type": "domain",
                "indicator": "jannymod[.]com",
                "description": "IClickFix (payload_delivery)",
                "timestamp": "2026-10-20 22:52:46",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-21 04:38 IST",
                "tags": [
                    "verified"
                ],
                "addedAt": "2026-10-21T04:38:19.937435+05:30",
                "campaign": "IClickFix",
                "confidence": "75%"
            },
            {
                "type": "url",
                "indicator": "hxxps://k1[.]abbc123[.]org/msq/",
                "description": "Vidar (botnet_cc)",
                "timestamp": "2026-10-20 22:50:48",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-21 04:38 IST",
                "tags": [
                    "verified"
                ],
                "addedAt": "2026-10-21T04:38:19.937435+05:30",
                "campaign": "Vidar",
                "confidence": "100%"
            }
        ],
        "lastUpdated": "2026-10-21T10:02:33.905999+05:30",
        "lastUpdatedFormatted": "Oct 21, 2026 at 10:02 AM IST",
        "lastUpdatedUtc": "2026-10-21 04:32 UTC"
    },
    "vendors": {
        "OpenPhish": {
            "description": "Real-time phishing URL feed updated every 15 minutes. Tracks active phishing sites targeting major brands and financial institutions.",
            "website": "https://openphish.com/",
            "updateFrequency": "Every 15 minutes",
            "iocCount": 1540,
            "iocDataUrl": "https://thehgtech.com/ioc-data/openphish.json",
            "stats": {
                "total": 1540,
                "newInLastHour": 300,
                "lastUpdate": "2026-10-21 04:32 UTC"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://nus[.]nbt[.]mybluehost[.]me/website_9f694753/055/Newcorreos%20(1)/cc/login[.]php?clckid=4e6f526c",
                "hxxps://www[.]roblox[.]com[.]ml/users/346612762043/profile",
                "hxxps://sp20ct10-davrelo-biz-kunima[.]pages[.]dev/send_appeal_request",
                "hxxps://sp18ct10-nurlek-biz-zavuno[.]pages[.]dev/send_appeal_request",
                "hxxps://cont17ct-suneri-biz-mavok-telra[.]pages[.]dev/send_appeal_request"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 3533,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 3533,
                "newInLastHour": 168,
                "lastUpdate": "2026-10-21 04:32 UTC"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                "212015fd97692d8399b59cff4e63685fc957b7ec3fd0eb281701d2bd20206a08",
                "7b02604f513665f853473c4705305702d56842498215f9c8f9f474598a58d44d",
                "8b1482b4867096e9b74c35599c17e68a3b3b7d748dad8dfb299db32ade6c60df",
                "d094501301dd80dfa8c14e28f56149342dd89e44d7a416030730f107c5973df3",
                "b28e77c5130ee1d1663b459589648e75ae4732adf93c0401d0bff41acba59ce8"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1690,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1690,
                "newInLastHour": 1,
                "lastUpdate": "2026-10-21 04:32 UTC"
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
            "iocCount": 30496,
            "iocDataUrl": "https://thehgtech.com/ioc-data/cins-army.json",
            "stats": {
                "total": 30496,
                "newInLastHour": 15000,
                "lastUpdate": "2026-10-21 04:32 UTC"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]14[.]149[.]30",
                "1[.]192[.]129[.]106",
                "1[.]193[.]57[.]156",
                "1[.]24[.]16[.]169",
                "1[.]24[.]16[.]170"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 7788,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 7788,
                "newInLastHour": 5384,
                "lastUpdate": "2026-10-21 04:32 UTC"
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
            "iocCount": 34772,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 34772,
                "newInLastHour": 33672,
                "lastUpdate": "2026-10-21 04:32 UTC"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://123[.]14[.]233[.]91:52224/bin[.]sh",
                "hxxp://123[.]4[.]235[.]65:55563/bin[.]sh",
                "hxxp://112[.]248[.]190[.]135:55046/i",
                "hxxp://112[.]248[.]190[.]135:55046/bin[.]sh",
                "hxxp://36[.]88[.]136[.]194:50193/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 17575,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 17575,
                "newInLastHour": 5052,
                "lastUpdate": "2026-10-21 04:32 UTC"
            },
            "types": [
                "hash",
                "ip",
                "domain",
                "url"
            ],
            "sampleIndicators": [
                "c5bd449668102c0e01da1394d924d61e71b8e166a03c98b22d26c10cdf9b98ed",
                "hxxps://yb[.]abblbet[.]org/o5/",
                "8c503247e0851e81980e1205ad7578b2b39a0d87c6acefb8d2b876206f71d68b",
                "d9a13c77484e0f62d7db9f224bc87acaa0bb8a8bbccbaaaf96738a9b8f022ecb",
                "c[.]9winn[.]org"
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
                "lastUpdate": "2026-10-21 04:32 UTC"
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
                "newInLastHour": 18,
                "lastUpdate": "2026-10-21 04:32 UTC"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "e10fe9007408391e4c3a808ae4b7c4cb6e7df1a3",
                "9061737b3e3cb6dae0a02abe33346d72ccd27af4",
                "59fb8a90649cac57e345fbd3af9f76d6a73fac12",
                "9a2205a15c886d6278d9e0d60747e8ad287b6c7b",
                "75964711a6e10849d232b5df09f428a4eaa48a68"
            ]
        }
    },
    "overview": [
        {
            "type": "ip",
            "indicator": "162[.]243[.]103[.]246",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-21 04:38 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-21T04:38:21.298637+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "178[.]62[.]3[.]223",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-21 04:38 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-21T04:38:21.298637+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "27[.]133[.]154[.]218",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-21 04:38 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-21T04:38:21.298637+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "34[.]204[.]119[.]63",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-21 04:38 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-21T04:38:21.298637+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "50[.]16[.]16[.]211",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-21 04:38 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-21T04:38:21.298637+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "156[.]240[.]41[.]55",
            "description": "VShell (botnet_cc)",
            "timestamp": "2026-10-20 23:05:06",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "VShell",
            "confidence": "100%"
        },
        {
            "type": "ip",
            "indicator": "156[.]240[.]41[.]48",
            "description": "VShell (botnet_cc)",
            "timestamp": "2026-10-20 23:05:05",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "VShell",
            "confidence": "100%"
        },
        {
            "type": "ip",
            "indicator": "156[.]240[.]41[.]49",
            "description": "VShell (botnet_cc)",
            "timestamp": "2026-10-20 23:05:05",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "VShell",
            "confidence": "100%"
        },
        {
            "type": "ip",
            "indicator": "156[.]240[.]41[.]51",
            "description": "VShell (botnet_cc)",
            "timestamp": "2026-10-20 23:05:05",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "VShell",
            "confidence": "100%"
        },
        {
            "type": "ip",
            "indicator": "156[.]240[.]41[.]36",
            "description": "VShell (botnet_cc)",
            "timestamp": "2026-10-20 23:05:04",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "VShell",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://k1[.]abbc123[.]org/fs/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-20 23:00:49",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://aragoniteforum[.]info/logout/oauth-dom[.]js",
            "description": "SmartApeSG (payload_delivery)",
            "timestamp": "2026-10-20 22:58:29",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "SmartApeSG",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://k1[.]abbc123[.]org/e/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-20 22:55:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "indigo-flicker-zephyr-truior[.]pro",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-20 22:55:07",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "IClickFix",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "ffea3070af4b850efe2136558323c5a249664774f1d3b9e5b2bfb7233c5ed554",
            "description": "Mirai (payload)",
            "timestamp": "2026-10-20 22:54:26",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "Mirai",
            "confidence": "90%"
        },
        {
            "type": "hash",
            "indicator": "34f29ee4bc4af44fd195172378359088cd8ea4d7d39a66713a87f7087acaf933",
            "description": "SalatStealer (payload)",
            "timestamp": "2026-10-20 22:54:25",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "SalatStealer",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "naamtravel[.]com[.]sg",
            "description": "Unknown Loader (payload_delivery)",
            "timestamp": "2026-10-20 22:53:34",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "Unknown Loader",
            "confidence": "75%"
        },
        {
            "type": "domain",
            "indicator": "holistixwellness[.]co[.]uk",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-20 22:52:46",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "IClickFix",
            "confidence": "75%"
        },
        {
            "type": "domain",
            "indicator": "jannymod[.]com",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-20 22:52:46",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "IClickFix",
            "confidence": "75%"
        },
        {
            "type": "url",
            "indicator": "hxxps://k1[.]abbc123[.]org/msq/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-20 22:50:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "xojeme[.]workers[.]dev",
            "description": "php.shin_webshell (payload_delivery)",
            "timestamp": "2026-10-20 22:49:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "php.shin_webshell",
            "confidence": "50%"
        },
        {
            "type": "domain",
            "indicator": "moversgs[.]co[.]ke",
            "description": "Unknown Loader (payload_delivery)",
            "timestamp": "2026-10-20 22:48:30",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "Unknown Loader",
            "confidence": "75%"
        },
        {
            "type": "domain",
            "indicator": "myelearningyard[.]com",
            "description": "Unknown Loader (payload_delivery)",
            "timestamp": "2026-10-20 22:48:30",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "Unknown Loader",
            "confidence": "75%"
        },
        {
            "type": "domain",
            "indicator": "pixelxbd[.]com",
            "description": "Unknown Loader (payload_delivery)",
            "timestamp": "2026-10-20 22:48:30",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "Unknown Loader",
            "confidence": "75%"
        },
        {
            "type": "domain",
            "indicator": "qiozko[.]com",
            "description": "Unknown Loader (payload_delivery)",
            "timestamp": "2026-10-20 22:48:30",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "Unknown Loader",
            "confidence": "75%"
        },
        {
            "type": "domain",
            "indicator": "teambuildingpros[.]com",
            "description": "Unknown Loader (payload_delivery)",
            "timestamp": "2026-10-20 22:48:30",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "Unknown Loader",
            "confidence": "75%"
        },
        {
            "type": "domain",
            "indicator": "ventureconsultingpartners[.]com",
            "description": "Unknown Loader (payload_delivery)",
            "timestamp": "2026-10-20 22:48:30",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "Unknown Loader",
            "confidence": "75%"
        },
        {
            "type": "domain",
            "indicator": "waho-apps[.]com",
            "description": "Unknown Loader (payload_delivery)",
            "timestamp": "2026-10-20 22:48:30",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "Unknown Loader",
            "confidence": "75%"
        },
        {
            "type": "domain",
            "indicator": "abuhamadtourism[.]com",
            "description": "Unknown Loader (payload_delivery)",
            "timestamp": "2026-10-20 22:48:29",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "Unknown Loader",
            "confidence": "75%"
        },
        {
            "type": "domain",
            "indicator": "anantagl[.]com",
            "description": "Unknown Loader (payload_delivery)",
            "timestamp": "2026-10-20 22:48:29",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "Unknown Loader",
            "confidence": "75%"
        },
        {
            "type": "domain",
            "indicator": "bausch[.]com[.]au",
            "description": "Unknown Loader (payload_delivery)",
            "timestamp": "2026-10-20 22:48:29",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "Unknown Loader",
            "confidence": "75%"
        },
        {
            "type": "domain",
            "indicator": "candmamusement[.]com",
            "description": "Unknown Loader (payload_delivery)",
            "timestamp": "2026-10-20 22:48:29",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "Unknown Loader",
            "confidence": "75%"
        },
        {
            "type": "domain",
            "indicator": "clausula-abusiva[.]com",
            "description": "Unknown Loader (payload_delivery)",
            "timestamp": "2026-10-20 22:48:29",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "Unknown Loader",
            "confidence": "75%"
        },
        {
            "type": "domain",
            "indicator": "cwin[.]boo",
            "description": "Unknown Loader (payload_delivery)",
            "timestamp": "2026-10-20 22:48:29",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "Unknown Loader",
            "confidence": "75%"
        },
        {
            "type": "domain",
            "indicator": "deow[.]edu[.]vn",
            "description": "Unknown Loader (payload_delivery)",
            "timestamp": "2026-10-20 22:48:29",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "Unknown Loader",
            "confidence": "75%"
        },
        {
            "type": "domain",
            "indicator": "dralisonfreeman[.]net",
            "description": "Unknown Loader (payload_delivery)",
            "timestamp": "2026-10-20 22:48:29",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "Unknown Loader",
            "confidence": "75%"
        },
        {
            "type": "domain",
            "indicator": "machiningusinagem[.]com[.]br",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-20 22:46:39",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "IClickFix",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "maxjevon[.]com",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-20 22:46:39",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "IClickFix",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "meyveliofis[.]com[.]tr",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-20 22:46:39",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "IClickFix",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "moniveroni[.]sk",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-20 22:46:39",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "IClickFix",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "myhandymansite[.]com",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-20 22:46:39",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "IClickFix",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "navidadconelhermano[.]cl",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-20 22:46:39",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "IClickFix",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "net-informatica[.]com[.]ar",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-20 22:46:39",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "IClickFix",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "novelopportunities[.]org",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-20 22:46:39",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "IClickFix",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "odontosistemica[.]com[.]br",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-20 22:46:39",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "IClickFix",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "onyenezilawfirm[.]com",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-20 22:46:39",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "IClickFix",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "ozcetintelcit[.]com",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-20 22:46:39",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "IClickFix",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "paperexim[.]com",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-20 22:46:39",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "IClickFix",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "premiummekatronik[.]com",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-20 22:46:39",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "IClickFix",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "prevcerta[.]com[.]br",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-20 22:46:39",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "IClickFix",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "qmh[.]nu",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-20 22:46:39",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "IClickFix",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "resiliencegonewild[.]com",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-20 22:46:39",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "IClickFix",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "sadekarfahrettin[.]com[.]tr",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-20 22:46:39",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "IClickFix",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "safevaultdepository[.]com",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-20 22:46:39",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "IClickFix",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "serviciotecnicojasa[.]com",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-20 22:46:39",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "IClickFix",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "shopcasitablanca[.]com",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-20 22:46:39",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "IClickFix",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "softex[.]shop",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-20 22:46:39",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "IClickFix",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "sussexglassman[.]co[.]uk",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-20 22:46:39",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "IClickFix",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "techwhirl[.]io",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-20 22:46:39",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "IClickFix",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "thammyquangtuan[.]com",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-20 22:46:39",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "IClickFix",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "theathletesapp[.]com",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-20 22:46:39",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "IClickFix",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "thermogelcolombia[.]com",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-20 22:46:39",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "IClickFix",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "transback[.]org",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-20 22:46:39",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "IClickFix",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "vada[.]se",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-20 22:46:39",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "IClickFix",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "veintimilla[.]it",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-20 22:46:39",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "IClickFix",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "veritaslabltd[.]com",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-20 22:46:39",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "IClickFix",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "wedge[.]vip",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-20 22:46:39",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "IClickFix",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "xn--80akaao3asar6d[.]xn--p1ai",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-20 22:46:39",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "IClickFix",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "zaraproperties[.]net",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-20 22:46:39",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "IClickFix",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "zdravysposob[.]sk",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-20 22:46:39",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "IClickFix",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "bar15[.]co[.]uk",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-20 22:46:38",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "IClickFix",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "battleavenuecollective[.]com",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-20 22:46:38",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "IClickFix",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "branchezvous[.]org",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-20 22:46:38",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "IClickFix",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "careresidence[.]net",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-20 22:46:38",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "IClickFix",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "ceramictilesinfo[.]com",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-20 22:46:38",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "IClickFix",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "chiltern[.]co[.]za",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-20 22:46:38",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "IClickFix",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "conviviumolei[.]it",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-20 22:46:38",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "IClickFix",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "dailymoon[.]news",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-20 22:46:38",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "IClickFix",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "denniscrosby[.]com",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-20 22:46:38",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "IClickFix",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "digitalhasanah[.]co[.]id",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-20 22:46:38",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "IClickFix",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "divyesh[.]online",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-20 22:46:38",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "IClickFix",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "dreamlover[.]com[.]au",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-20 22:46:38",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "IClickFix",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "dronesolutions[.]sk",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-20 22:46:38",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "IClickFix",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "drquangtuan[.]com",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-20 22:46:38",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "IClickFix",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "dubai24x7[.]com",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-20 22:46:38",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "IClickFix",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "e-nastava[.]ba",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-20 22:46:38",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "IClickFix",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "ejcw[.]org",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-20 22:46:38",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "IClickFix",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "eleedit[.]com",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-20 22:46:38",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "IClickFix",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "emtacademy[.]world",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-20 22:46:38",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "IClickFix",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "freefireadvanceserver[.]cc",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-20 22:46:38",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "IClickFix",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "gadgtecs[.]com",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-20 22:46:38",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "IClickFix",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "glamskinclinicug[.]com",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-20 22:46:38",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "IClickFix",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "gluco-up[.]pl",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-20 22:46:38",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "IClickFix",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "gownsonline[.]co[.]za",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-20 22:46:38",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "IClickFix",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "greatergoodrecycling[.]com",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-20 22:46:38",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "IClickFix",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "growebhub[.]com",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-20 22:46:38",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "IClickFix",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "haktrade[.]sk",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-20 22:46:38",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "IClickFix",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "healix-care[.]com",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-20 22:46:38",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "IClickFix",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "hndz[.]com[.]br",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-20 22:46:38",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "IClickFix",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "inatboxplus[.]com[.]tr",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-20 22:46:38",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 04:38 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T04:38:19.937435+05:30",
            "campaign": "IClickFix",
            "confidence": "100%"
        }
    ],
    "dailySummary": {
        "stats": {
            "totalIndicators": 106990,
            "activeSources": 9,
            "criticalAlerts": 52025,
            "activeCampaigns": 394
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 40788,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 11237,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 10144,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Phishing",
                "count": 1242,
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
                "count": 34747,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://27[.]215[.]183[.]88:47775/i",
                    "hxxp://175[.]151[.]226[.]239:55244/i",
                    "hxxp://106[.]125[.]211[.]232:36465/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 30014,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]117[.]58[.]215",
                    "1[.]117[.]68[.]141",
                    "1[.]12[.]229[.]231"
                ]
            },
            {
                "name": "SSH Attacks",
                "count": 7618,
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
                "count": 2189,
                "types": [
                    "ip",
                    "hash",
                    "url",
                    "ssl-cert",
                    "domain"
                ],
                "sampleIndicators": [
                    "038cc0421ef5641c0565b39f51a4ce2bb768fa8190da3971c785e292c2f704d2",
                    "379a2944024fe73ff4af0d02eeb4764918f3009aa236207e0edd616cbfb84ccc",
                    "0d8f1752831cd45fbf6e4786cfd7e36997ab9835efdcfb7950b1db52e59f63f2"
                ]
            },
            {
                "name": "Mirai",
                "count": 1807,
                "types": [
                    "hash",
                    "url",
                    "ip",
                    "domain"
                ],
                "sampleIndicators": [
                    "a367e7c92f579948345cb8cb91ed5bbce9a905b9ad225fc3bf9f85d8fc57735f",
                    "bf8dea8f2a21fbf1748ef8fb66f580e63a3bb786d284e55ce73dc6534d57a571",
                    "a77a227fc9bb9b30ee13d6582b06ddf8b4e24caa6926930c7725ef15f9d7ca73"
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
                "count": 1655,
                "types": [
                    "ip",
                    "hash",
                    "url",
                    "ssl-cert",
                    "domain"
                ],
                "sampleIndicators": [
                    "c2b10b8c0d346d3e1201daea39713fbfaeb410e8b7fee94b0546a3fcdc91573f",
                    "1e98a36b2c40441a1bf33060bad8b52bf74ee659472aa15d3463bd51b118725f",
                    "fc255863ceab40f2510ddf29801e583015505861777f1c5d7e72ec164920f075"
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
                "name": "Generic Phishing",
                "count": 1238,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://sundram786[.]github[.]io/Spotify-Clone/",
                    "hxxps://cj333471[.]tw1[.]ru/",
                    "hxxps://kukoinjlogn[.]webflow[.]io/"
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
        "totalAttacksThisHour": 59600,
        "lastCalculated": "2026-10-21 10:02 IST"
    }
};
