// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-19T01:30:21.123796+05:30 IST (2026-10-18 20:00 UTC)
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-19T01:30:20.680307+05:30",
    "lastUpdatedFormatted": "Oct 19, 2026 at 01:30 AM IST",
    "lastUpdatedUtc": "2026-10-18 20:00 UTC",
    "comparisonPeriod": "Oct 18 \u2013 Oct 19, 2026",
    "stats": {
        "totalIOCs": 85875,
        "byType": {
            "url": 42179,
            "ip": 26077,
            "hash": 2892,
            "domain": 2042,
            "ssl-cert": 10995,
            "ip-range": 1690
        },
        "byVendor": {
            "OpenPhish": 300,
            "Malware Bazaar": 1830,
            "Spamhaus DROP": 1690,
            "CINS Army": 18768,
            "Blocklist.de": 4645,
            "URLhaus": 33603,
            "ThreatFox": 14039,
            "Feodo Tracker": 5,
            "SSL Blacklist": 10995
        },
        "topMalware": [
            {
                "name": "AsyncRAT",
                "count": 1628,
                "types": [
                    "url",
                    "hash",
                    "ip",
                    "domain",
                    "ssl-cert"
                ]
            },
            {
                "name": "Vidar",
                "count": 1403,
                "types": [
                    "url",
                    "hash",
                    "ip",
                    "domain",
                    "ssl-cert"
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
                "count": 1198,
                "types": [
                    "ip",
                    "domain"
                ]
            },
            {
                "name": "Mirai",
                "count": 1068,
                "types": [
                    "url",
                    "domain",
                    "ip",
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
                "count": 724,
                "types": [
                    "hash",
                    "ssl-cert"
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
                "name": "IClickFix",
                "count": 619,
                "types": [
                    "domain"
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
                "count": 559,
                "types": [
                    "hash",
                    "ssl-cert"
                ]
            },
            {
                "name": "OffLoader",
                "count": 549,
                "types": [
                    "ssl-cert"
                ]
            },
            {
                "name": "ConnectWise",
                "count": 511,
                "types": [
                    "hash",
                    "ssl-cert"
                ]
            },
            {
                "name": "PureRAT",
                "count": 442,
                "types": [
                    "ip",
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
                "timestamp": "2026-10-19 00:04 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-10-19 00:04 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-10-19T00:04:48.605521+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "178[.]62[.]3[.]223",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-10-19 00:04 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-10-19 00:04 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-10-19T00:04:48.605521+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "27[.]133[.]154[.]218",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-10-19 00:04 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-10-19 00:04 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-10-19T00:04:48.605521+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "34[.]204[.]119[.]63",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-10-19 00:04 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-10-19 00:04 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-10-19T00:04:48.605521+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "50[.]16[.]16[.]211",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-10-19 00:04 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-10-19 00:04 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-10-19T00:04:48.605521+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "url",
                "indicator": "hxxps://b[.]9windaftar[.]com/bp/",
                "description": "Vidar (botnet_cc)",
                "timestamp": "2026-10-18 18:25:48",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-19 00:04 IST",
                "tags": [
                    "verified"
                ],
                "addedAt": "2026-10-19T00:04:47.246826+05:30",
                "campaign": "Vidar",
                "confidence": "100%"
            },
            {
                "type": "domain",
                "indicator": "ezn9tfkz[.]bewiseimmunize[.]com",
                "description": "ClearFake (payload_delivery)",
                "timestamp": "2026-10-18 18:21:06",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-19 00:04 IST",
                "tags": [
                    "verified"
                ],
                "addedAt": "2026-10-19T00:04:47.246826+05:30",
                "campaign": "ClearFake",
                "confidence": "100%"
            },
            {
                "type": "url",
                "indicator": "hxxps://b[.]9windaftar[.]com/ti/",
                "description": "Vidar (botnet_cc)",
                "timestamp": "2026-10-18 18:20:48",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-19 00:04 IST",
                "tags": [
                    "verified"
                ],
                "addedAt": "2026-10-19T00:04:47.246826+05:30",
                "campaign": "Vidar",
                "confidence": "100%"
            },
            {
                "type": "url",
                "indicator": "hxxp://190[.]196[.]253[.]19:11864/Mozi[.]m",
                "description": "Mozi (payload_delivery)",
                "timestamp": "2026-10-18 18:18:56",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-19 00:04 IST",
                "tags": [
                    "verified",
                    "https://honeylabs.net/lookup/190.196.253.19"
                ],
                "addedAt": "2026-10-19T00:04:47.246826+05:30",
                "campaign": "Mozi",
                "confidence": "75%"
            },
            {
                "type": "url",
                "indicator": "hxxp://176[.]65[.]139[.]76/bins/mips",
                "description": "Mirai (payload_delivery)",
                "timestamp": "2026-10-18 18:18:56",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-19 00:04 IST",
                "tags": [
                    "verified",
                    "https://honeylabs.net/lookup/176.65.139.76"
                ],
                "addedAt": "2026-10-19T00:04:47.246826+05:30",
                "campaign": "Mirai",
                "confidence": "75%"
            },
            {
                "type": "url",
                "indicator": "hxxp://124[.]29[.]251[.]100:50791/Mozi[.]m",
                "description": "Mozi (payload_delivery)",
                "timestamp": "2026-10-18 18:18:55",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-19 00:04 IST",
                "tags": [
                    "verified",
                    "https://honeylabs.net/lookup/124.29.251.100"
                ],
                "addedAt": "2026-10-19T00:04:47.246826+05:30",
                "campaign": "Mozi",
                "confidence": "75%"
            },
            {
                "type": "url",
                "indicator": "hxxps://b[.]9windaftar[.]com/fuh/",
                "description": "Vidar (botnet_cc)",
                "timestamp": "2026-10-18 18:15:48",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-19 00:04 IST",
                "tags": [
                    "verified"
                ],
                "addedAt": "2026-10-19T00:04:47.246826+05:30",
                "campaign": "Vidar",
                "confidence": "100%"
            },
            {
                "type": "url",
                "indicator": "hxxps://b[.]9windaftar[.]com/yh/",
                "description": "Vidar (botnet_cc)",
                "timestamp": "2026-10-18 18:10:48",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-19 00:04 IST",
                "tags": [
                    "verified"
                ],
                "addedAt": "2026-10-19T00:04:47.246826+05:30",
                "campaign": "Vidar",
                "confidence": "100%"
            },
            {
                "type": "domain",
                "indicator": "t7[.]88idn[.]net",
                "description": "Vidar (botnet_cc)",
                "timestamp": "2026-10-18 18:05:48",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-19 00:04 IST",
                "tags": [
                    "verified"
                ],
                "addedAt": "2026-10-19T00:04:47.246826+05:30",
                "campaign": "Vidar",
                "confidence": "100%"
            },
            {
                "type": "url",
                "indicator": "hxxps://t7[.]88idn[.]net/",
                "description": "Vidar (botnet_cc)",
                "timestamp": "2026-10-18 18:05:48",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-19 00:04 IST",
                "tags": [
                    "verified"
                ],
                "addedAt": "2026-10-19T00:04:47.246826+05:30",
                "campaign": "Vidar",
                "confidence": "100%"
            },
            {
                "type": "url",
                "indicator": "hxxps://b[.]9windaftar[.]com/jm/",
                "description": "Vidar (botnet_cc)",
                "timestamp": "2026-10-18 18:05:48",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-19 00:04 IST",
                "tags": [
                    "verified"
                ],
                "addedAt": "2026-10-19T00:04:47.246826+05:30",
                "campaign": "Vidar",
                "confidence": "100%"
            },
            {
                "type": "url",
                "indicator": "hxxps://t7[.]88idn[.]net",
                "description": "Vidar (botnet_cc)",
                "timestamp": "2026-10-18 18:01:37",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-19 00:04 IST",
                "tags": [
                    "verified"
                ],
                "addedAt": "2026-10-19T00:04:47.246826+05:30",
                "campaign": "Vidar",
                "confidence": "100%"
            },
            {
                "type": "url",
                "indicator": "hxxps://vr[.]9windaftar[.]com/w7/",
                "description": "Vidar (botnet_cc)",
                "timestamp": "2026-10-18 18:00:49",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-19 00:04 IST",
                "tags": [
                    "verified"
                ],
                "addedAt": "2026-10-19T00:04:47.246826+05:30",
                "campaign": "Vidar",
                "confidence": "100%"
            },
            {
                "type": "url",
                "indicator": "hxxps://b[.]99rtp[.]net/q/",
                "description": "Vidar (botnet_cc)",
                "timestamp": "2026-10-18 18:00:48",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-19 00:04 IST",
                "tags": [
                    "verified"
                ],
                "addedAt": "2026-10-19T00:04:47.246826+05:30",
                "campaign": "Vidar",
                "confidence": "100%"
            },
            {
                "type": "url",
                "indicator": "hxxps://roadracerx[.]com/",
                "description": "Unknown malware (payload_delivery)",
                "timestamp": "2026-10-18 18:00:46",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-19 00:04 IST",
                "tags": [
                    "malware",
                    "verified",
                    "https://clickfix.carsonww.com/domains/roadracerx.com"
                ],
                "addedAt": "2026-10-19T00:04:47.246826+05:30",
                "campaign": "Unknown malware",
                "confidence": "90%"
            }
        ],
        "lastUpdated": "2026-10-19T01:30:20.680307+05:30",
        "lastUpdatedFormatted": "Oct 19, 2026 at 01:30 AM IST",
        "lastUpdatedUtc": "2026-10-18 20:00 UTC"
    },
    "vendors": {
        "OpenPhish": {
            "description": "Real-time phishing URL feed updated every 15 minutes. Tracks active phishing sites targeting major brands and financial institutions.",
            "website": "https://openphish.com/",
            "updateFrequency": "Every 15 minutes",
            "iocCount": 300,
            "iocDataUrl": "https://thehgtech.com/ioc-data/openphish.json",
            "stats": {
                "total": 300,
                "newInLastHour": 300,
                "lastUpdate": "2026-10-18 20:00 UTC"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://www[.]roblox[.]ly/users/1036952856/profile",
                "hxxp://digitley-dhl[.]azurewebsites[.]net/login",
                "hxxps://www[.]roblox[.]com[.]ml/games/9872472334/HLWN-Evade?privateServerLinkCode=384328757637766641742433182819",
                "hxxps://tiktokvip[.]cyou/",
                "hxxp://rss2[.]sayler[.]at/go/z2b4u2/z274y274"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1844,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1844,
                "newInLastHour": 14,
                "lastUpdate": "2026-10-18 20:00 UTC"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                "f383629ce62c7e9a2ba85ae2a2f1a884bb435debb5c5db015ed6c2ae13691871",
                "efa96afac6f6d74b607902c0f75b334d42ef5150b675ac228aaae01a42ef1e40",
                "300c08087c2bca4f04e0786ffe2e46b44d2e36124cc21253e0ca9273cb8fbb90",
                "3bc0681c243e8d68365d246aea4ebb351dba1d7d753b134d98d48d8a0018e42d",
                "9d8343d6b28777c2d928150bfc83b34e82287a0705768521ea124d9c1078afb9"
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
                "lastUpdate": "2026-10-18 20:00 UTC"
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
            "iocCount": 19966,
            "iocDataUrl": "https://thehgtech.com/ioc-data/cins-army.json",
            "stats": {
                "total": 19966,
                "newInLastHour": 15000,
                "lastUpdate": "2026-10-18 20:00 UTC"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]117[.]58[.]215",
                "1[.]12[.]229[.]231",
                "1[.]14[.]149[.]30",
                "1[.]179[.]240[.]111",
                "1[.]193[.]57[.]156"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4692,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4692,
                "newInLastHour": 4381,
                "lastUpdate": "2026-10-18 20:00 UTC"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]14[.]240[.]247",
                "1[.]214[.]214[.]114",
                "1[.]222[.]42[.]237",
                "1[.]234[.]23[.]83",
                "1[.]238[.]106[.]229"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 33617,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 33617,
                "newInLastHour": 33617,
                "lastUpdate": "2026-10-18 20:00 UTC"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://95[.]155[.]201[.]65:37302/i",
                "hxxp://182[.]121[.]249[.]23:37832/i",
                "hxxp://115[.]61[.]17[.]94:51620/bin[.]sh",
                "hxxp://125[.]43[.]41[.]115:33753/i",
                "hxxp://123[.]8[.]92[.]97:43000/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 14108,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 14108,
                "newInLastHour": 5501,
                "lastUpdate": "2026-10-18 20:00 UTC"
            },
            "types": [
                "url",
                "domain",
                "ip",
                "hash"
            ],
            "sampleIndicators": [
                "345fd6e63c2c817ff28ac5e4fc6792e8ada4efadebe6a3692f334300fb35b187",
                "74c6f27ce2a20dd393e72bb54293cfece0cb05e599ff0010607f29e7c8a0f5dc",
                "9bd0fcad7e6ca59c3caeed5b9fae6ecb499d274bfff2042a855f7b9f5b3b1657",
                "26f91ce3d8ee20dd027d4de026d6e5dd08604b6bec6b3142b55749150493285c",
                "hxxps://qp[.]9windaftar[.]com/kf/"
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
                "lastUpdate": "2026-10-18 20:00 UTC"
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
            "iocCount": 10997,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10997,
                "newInLastHour": 2,
                "lastUpdate": "2026-10-18 20:00 UTC"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "38151a6b2438b2b645a27a891e1e15786f11a783",
                "eaefd82da94ee8839666b2a42d24dcc412d7de3c",
                "e2234aa66c80b118b69211f6e8f4efbd578a7587",
                "e2dbc11a546d739d12e547c38cdb4fd6cfacd4c4",
                "b97f1ae860fce04e1aae480e10b884da9826b17b"
            ]
        }
    },
    "overview": [
        {
            "type": "ip",
            "indicator": "162[.]243[.]103[.]246",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-19 00:04 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-19T00:04:48.605521+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "178[.]62[.]3[.]223",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-19 00:04 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-19T00:04:48.605521+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "27[.]133[.]154[.]218",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-19 00:04 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-19T00:04:48.605521+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "34[.]204[.]119[.]63",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-19 00:04 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-19T00:04:48.605521+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "50[.]16[.]16[.]211",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-19 00:04 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-19T00:04:48.605521+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "url",
            "indicator": "hxxps://b[.]9windaftar[.]com/bp/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-18 18:25:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "ezn9tfkz[.]bewiseimmunize[.]com",
            "description": "ClearFake (payload_delivery)",
            "timestamp": "2026-10-18 18:21:06",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "ClearFake",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://b[.]9windaftar[.]com/ti/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-18 18:20:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxp://190[.]196[.]253[.]19:11864/Mozi[.]m",
            "description": "Mozi (payload_delivery)",
            "timestamp": "2026-10-18 18:18:56",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "verified",
                "https://honeylabs.net/lookup/190.196.253.19"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "Mozi",
            "confidence": "75%"
        },
        {
            "type": "url",
            "indicator": "hxxp://176[.]65[.]139[.]76/bins/mips",
            "description": "Mirai (payload_delivery)",
            "timestamp": "2026-10-18 18:18:56",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "verified",
                "https://honeylabs.net/lookup/176.65.139.76"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "Mirai",
            "confidence": "75%"
        },
        {
            "type": "url",
            "indicator": "hxxp://124[.]29[.]251[.]100:50791/Mozi[.]m",
            "description": "Mozi (payload_delivery)",
            "timestamp": "2026-10-18 18:18:55",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "verified",
                "https://honeylabs.net/lookup/124.29.251.100"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "Mozi",
            "confidence": "75%"
        },
        {
            "type": "url",
            "indicator": "hxxps://b[.]9windaftar[.]com/fuh/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-18 18:15:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://b[.]9windaftar[.]com/yh/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-18 18:10:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "t7[.]88idn[.]net",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-18 18:05:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://t7[.]88idn[.]net/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-18 18:05:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://b[.]9windaftar[.]com/jm/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-18 18:05:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://t7[.]88idn[.]net",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-18 18:01:37",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://vr[.]9windaftar[.]com/w7/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-18 18:00:49",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://b[.]99rtp[.]net/q/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-18 18:00:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://roadracerx[.]com/",
            "description": "Unknown malware (payload_delivery)",
            "timestamp": "2026-10-18 18:00:46",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "malware",
                "verified",
                "https://clickfix.carsonww.com/domains/roadracerx.com"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "Unknown malware",
            "confidence": "90%"
        },
        {
            "type": "url",
            "indicator": "hxxps://prefirobh[.]com[.]br/",
            "description": "Unknown malware (payload_delivery)",
            "timestamp": "2026-10-18 18:00:46",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "malware",
                "verified",
                "https://clickfix.carsonww.com/domains/prefirobh.com.br"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "Unknown malware",
            "confidence": "90%"
        },
        {
            "type": "url",
            "indicator": "hxxps://rtpibetslot4[.]co/",
            "description": "Unknown malware (payload_delivery)",
            "timestamp": "2026-10-18 18:00:46",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "malware",
                "verified",
                "https://clickfix.carsonww.com/domains/rtpibetslot4.co"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "Unknown malware",
            "confidence": "90%"
        },
        {
            "type": "url",
            "indicator": "hxxps://www[.]nurmas[.]com[.]tr/",
            "description": "Unknown malware (payload_delivery)",
            "timestamp": "2026-10-18 18:00:46",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "malware",
                "verified",
                "https://clickfix.carsonww.com/domains/www.nurmas.com.tr"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "Unknown malware",
            "confidence": "90%"
        },
        {
            "type": "url",
            "indicator": "hxxps://milestonedentalassisting[.]com/",
            "description": "Unknown malware (payload_delivery)",
            "timestamp": "2026-10-18 18:00:46",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "malware",
                "verified",
                "https://clickfix.carsonww.com/domains/milestonedentalassisting.com"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "Unknown malware",
            "confidence": "90%"
        },
        {
            "type": "url",
            "indicator": "hxxps://photographicmemories[.]uk[.]com/",
            "description": "Unknown malware (payload_delivery)",
            "timestamp": "2026-10-18 18:00:46",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "malware",
                "verified",
                "https://clickfix.carsonww.com/domains/photographicmemories.uk.com"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "Unknown malware",
            "confidence": "90%"
        },
        {
            "type": "url",
            "indicator": "hxxps://ngob[.]co[.]za/",
            "description": "Unknown malware (payload_delivery)",
            "timestamp": "2026-10-18 18:00:46",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "malware",
                "verified",
                "https://clickfix.carsonww.com/domains/ngob.co.za"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "Unknown malware",
            "confidence": "90%"
        },
        {
            "type": "url",
            "indicator": "hxxps://nwfc[.]io/",
            "description": "Unknown malware (payload_delivery)",
            "timestamp": "2026-10-18 18:00:45",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "malware",
                "verified",
                "https://clickfix.carsonww.com/domains/nwfc.io"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "Unknown malware",
            "confidence": "90%"
        },
        {
            "type": "url",
            "indicator": "hxxps://moncler-outletjackets[.]us[.]com/",
            "description": "Unknown malware (payload_delivery)",
            "timestamp": "2026-10-18 18:00:45",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "malware",
                "verified",
                "https://clickfix.carsonww.com/domains/moncler-outletjackets.us.com"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "Unknown malware",
            "confidence": "90%"
        },
        {
            "type": "url",
            "indicator": "hxxps://pofcolombia[.]com[.]co/",
            "description": "Unknown malware (payload_delivery)",
            "timestamp": "2026-10-18 18:00:45",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "malware",
                "verified",
                "https://clickfix.carsonww.com/domains/pofcolombia.com.co"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "Unknown malware",
            "confidence": "90%"
        },
        {
            "type": "url",
            "indicator": "hxxps://produtecnicaagro[.]com[.]br/",
            "description": "Unknown malware (payload_delivery)",
            "timestamp": "2026-10-18 18:00:45",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "malware",
                "verified",
                "https://clickfix.carsonww.com/domains/produtecnicaagro.com.br"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "Unknown malware",
            "confidence": "90%"
        },
        {
            "type": "domain",
            "indicator": "de67y1vlab[.]workers[.]dev",
            "description": "php.shin_webshell (payload_delivery)",
            "timestamp": "2026-10-18 17:58:30",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "php.shin_webshell",
            "confidence": "50%"
        },
        {
            "type": "domain",
            "indicator": "rogocinu[.]workers[.]dev",
            "description": "php.shin_webshell (payload_delivery)",
            "timestamp": "2026-10-18 17:57:11",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "php.shin_webshell",
            "confidence": "50%"
        },
        {
            "type": "url",
            "indicator": "hxxps://vr[.]9windaftar[.]com/oh/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-18 17:55:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxp://192[.]162[.]199[.]249/0mug7gt9c94l6fn3",
            "description": "AMOS (payload_delivery)",
            "timestamp": "2026-10-18 17:55:23",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "verified",
                "https://www.virustotal.com/gui/file/e395c5343703a570d12620c81b9593ea6117d2f57c95bd8247704d9dbd256ce6"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "e395c5343703a570d12620c81b9593ea6117d2f57c95bd8247704d9dbd256ce6",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-18 17:55:22",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://www.virustotal.com/gui/file/e395c5343703a570d12620c81b9593ea6117d2f57c95bd8247704d9dbd256ce6"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://vr[.]9windaftar[.]com/e/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-18 17:50:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://vr[.]9windaftar[.]com/c3/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-18 17:45:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "818711b296a86b6305cc6435a754f1055ce99684916d70176f2ba24335f94faf",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-18 17:45:40",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://www.virustotal.com/gui/file/818711b296a86b6305cc6435a754f1055ce99684916d70176f2ba24335f94faf"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "ab09aa9cbe92e3fe0c44393d0dc483324392ee0bcbadf28e21365cdec657a6ae",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-18 17:43:50",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://www.virustotal.com/gui/file/ab09aa9cbe92e3fe0c44393d0dc483324392ee0bcbadf28e21365cdec657a6ae"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://vr[.]9windaftar[.]com/ey1/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-18 17:40:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "2947ca3a68468ea4e90db4a519f97ce2a8336627f4687dff138ee05330e5731f",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-18 17:37:42",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://www.virustotal.com/gui/file/2947ca3a68468ea4e90db4a519f97ce2a8336627f4687dff138ee05330e5731f"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "ip",
            "indicator": "68[.]183[.]223[.]7",
            "description": "Aisuru (botnet_cc)",
            "timestamp": "2026-10-18 17:36:34",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "Aisuru",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://vr[.]9windaftar[.]com/qc/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-18 17:35:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "b67dcc77e44af12e5f2371f823f55e9ba606ab3ed04e640d78abbff0a5ee403a",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-18 17:31:36",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://www.virustotal.com/gui/file/b67dcc77e44af12e5f2371f823f55e9ba606ab3ed04e640d78abbff0a5ee403a"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://iberian-trade[.]com/",
            "description": "Unknown malware (payload_delivery)",
            "timestamp": "2026-10-18 17:30:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "malware",
                "verified",
                "https://clickfix.carsonww.com/domains/iberian-trade.com"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "Unknown malware",
            "confidence": "90%"
        },
        {
            "type": "url",
            "indicator": "hxxps://www[.]izmirtaskaplama[.]com/",
            "description": "Unknown malware (payload_delivery)",
            "timestamp": "2026-10-18 17:30:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "malware",
                "verified",
                "https://clickfix.carsonww.com/domains/www.izmirtaskaplama.com"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "Unknown malware",
            "confidence": "90%"
        },
        {
            "type": "url",
            "indicator": "hxxps://leo88vn[.]vip/",
            "description": "Unknown malware (payload_delivery)",
            "timestamp": "2026-10-18 17:30:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "malware",
                "verified",
                "https://clickfix.carsonww.com/domains/leo88vn.vip"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "Unknown malware",
            "confidence": "90%"
        },
        {
            "type": "url",
            "indicator": "hxxps://vr[.]9windaftar[.]com/er/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-18 17:30:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://i1-social[.]com/",
            "description": "Unknown malware (payload_delivery)",
            "timestamp": "2026-10-18 17:30:47",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "malware",
                "verified",
                "https://clickfix.carsonww.com/domains/i1-social.com"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "Unknown malware",
            "confidence": "90%"
        },
        {
            "type": "url",
            "indicator": "hxxps://www[.]guncelbetvoygiris[.]com/",
            "description": "Unknown malware (payload_delivery)",
            "timestamp": "2026-10-18 17:30:47",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "malware",
                "verified",
                "https://clickfix.carsonww.com/domains/www.guncelbetvoygiris.com"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "Unknown malware",
            "confidence": "90%"
        },
        {
            "type": "url",
            "indicator": "hxxps://intechpol[.]pl/",
            "description": "Unknown malware (payload_delivery)",
            "timestamp": "2026-10-18 17:30:47",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "malware",
                "verified",
                "https://clickfix.carsonww.com/domains/intechpol.pl"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "Unknown malware",
            "confidence": "90%"
        },
        {
            "type": "url",
            "indicator": "hxxps://lottovip[.]lease/",
            "description": "Unknown malware (payload_delivery)",
            "timestamp": "2026-10-18 17:30:47",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "malware",
                "verified",
                "https://clickfix.carsonww.com/domains/lottovip.lease"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "Unknown malware",
            "confidence": "90%"
        },
        {
            "type": "url",
            "indicator": "hxxps://www[.]kurashitalia[.]com/",
            "description": "Unknown malware (payload_delivery)",
            "timestamp": "2026-10-18 17:30:47",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "malware",
                "verified",
                "https://clickfix.carsonww.com/domains/www.kurashitalia.com"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "Unknown malware",
            "confidence": "90%"
        },
        {
            "type": "url",
            "indicator": "hxxps://lamiradadelotroediciones[.]com/",
            "description": "Unknown malware (payload_delivery)",
            "timestamp": "2026-10-18 17:30:47",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "malware",
                "verified",
                "https://clickfix.carsonww.com/domains/lamiradadelotroediciones.com"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "Unknown malware",
            "confidence": "90%"
        },
        {
            "type": "url",
            "indicator": "hxxps://lightmagazines[.]com/",
            "description": "Unknown malware (payload_delivery)",
            "timestamp": "2026-10-18 17:30:47",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "malware",
                "verified",
                "https://clickfix.carsonww.com/domains/lightmagazines.com"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "Unknown malware",
            "confidence": "90%"
        },
        {
            "type": "url",
            "indicator": "hxxps://luiseduardo[.]net/",
            "description": "Unknown malware (payload_delivery)",
            "timestamp": "2026-10-18 17:30:47",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "malware",
                "verified",
                "https://clickfix.carsonww.com/domains/luiseduardo.net"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "Unknown malware",
            "confidence": "90%"
        },
        {
            "type": "url",
            "indicator": "hxxps://machinegame[.]com[.]tw/",
            "description": "Unknown malware (payload_delivery)",
            "timestamp": "2026-10-18 17:30:47",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "malware",
                "verified",
                "https://clickfix.carsonww.com/domains/machinegame.com.tw"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "Unknown malware",
            "confidence": "90%"
        },
        {
            "type": "url",
            "indicator": "hxxps://megacricketworld[.]me/",
            "description": "Unknown malware (payload_delivery)",
            "timestamp": "2026-10-18 17:30:47",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "malware",
                "verified",
                "https://clickfix.carsonww.com/domains/megacricketworld.me"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "Unknown malware",
            "confidence": "90%"
        },
        {
            "type": "url",
            "indicator": "hxxps://vr[.]9windaftar[.]com/vh/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-18 17:25:49",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://vr[.]9windaftar[.]com/n7/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-18 17:20:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://vr[.]9windaftar[.]com/fg/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-18 17:15:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "ip",
            "indicator": "128[.]90[.]108[.]66",
            "description": "Remcos (botnet_cc)",
            "timestamp": "2026-10-18 17:13:07",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "Remcos",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://b[.]99rtp[.]net/n/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-18 17:10:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://vr[.]9windaftar[.]com/rfl/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-18 17:10:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://vr[.]9windaftar[.]com/v1/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-18 17:05:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://sp[.]9windaftar[.]com/c8l/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-18 17:00:49",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "1b96bdfd280780ae6bbd34dca2ff126b5c54bae57319e629592cf7aad36e6058",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-18 17:00:26",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://www.virustotal.com/gui/file/1b96bdfd280780ae6bbd34dca2ff126b5c54bae57319e629592cf7aad36e6058"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://sp[.]9windaftar[.]com/faj/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-18 16:55:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "c74a2059b01fc0f47030aaa14c724c9ebb3aab11c862eca4586c7bdf933e1c1e",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-18 16:54:20",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://www.virustotal.com/gui/file/c74a2059b01fc0f47030aaa14c724c9ebb3aab11c862eca4586c7bdf933e1c1e"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "89b323a8bf22b5dc51851a4d1c63f0d01225429341724136dd1e32a15ba302fd",
            "description": "Mirai (payload)",
            "timestamp": "2026-10-18 16:54:03",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "Mirai",
            "confidence": "90%"
        },
        {
            "type": "hash",
            "indicator": "861946c9eca3fb11440db3d51868c9a4af6c75c48bfd70a8a34a55fae63feed0",
            "description": "Mirai (payload)",
            "timestamp": "2026-10-18 16:54:02",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "Mirai",
            "confidence": "90%"
        },
        {
            "type": "hash",
            "indicator": "26cfe0264d836092a1ac874c107b517c194a7c3cdd10548c6b4eaa270f0bcc43",
            "description": "Mirai (payload)",
            "timestamp": "2026-10-18 16:54:01",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "Mirai",
            "confidence": "90%"
        },
        {
            "type": "url",
            "indicator": "hxxps://sp[.]9windaftar[.]com/ve/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-18 16:50:49",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "melodicviolante[.]workers[.]dev",
            "description": "php.shin_webshell (payload_delivery)",
            "timestamp": "2026-10-18 16:48:55",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "php.shin_webshell",
            "confidence": "50%"
        },
        {
            "type": "hash",
            "indicator": "7c9e8862ec166c1809583d31b69bcf2eefd24d824120470e68840154cb39a35b",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-18 16:48:14",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://www.virustotal.com/gui/file/7c9e8862ec166c1809583d31b69bcf2eefd24d824120470e68840154cb39a35b"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://sp[.]9windaftar[.]com/c1/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-18 16:45:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "71be71098e176e57aad7e2b862f293dceb06f4eba36712b92d4cb34e4a306525",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-18 16:42:08",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://www.virustotal.com/gui/file/71be71098e176e57aad7e2b862f293dceb06f4eba36712b92d4cb34e4a306525"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://sp[.]9windaftar[.]com/yk/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-18 16:40:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://sp[.]9windaftar[.]com/vi/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-18 16:35:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "e78b3c0beda77217043f0510cc35231cd0404d395f0d2e4adbfa0ff31c2c9efb",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-18 16:35:19",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://www.virustotal.com/gui/file/e78b3c0beda77217043f0510cc35231cd0404d395f0d2e4adbfa0ff31c2c9efb"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://sp[.]9windaftar[.]com/zd/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-18 16:30:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "c329ef0e14c0f74937114a02f03bc8d39d7435fa62780c5b8d8c229e53f70022",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-18 16:30:33",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://www.virustotal.com/gui/file/c329ef0e14c0f74937114a02f03bc8d39d7435fa62780c5b8d8c229e53f70022"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://sp[.]9windaftar[.]com/yo/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-18 16:25:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://sp[.]9windaftar[.]com/uu3/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-18 16:20:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "ip",
            "indicator": "223[.]206[.]137[.]140",
            "description": "Mirai (botnet_cc)",
            "timestamp": "2026-10-18 16:19:50",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "botnet",
                "verified",
                "https://magnify.modat.io/hosts/223.206.137.140"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "Mirai",
            "confidence": "50%"
        },
        {
            "type": "domain",
            "indicator": "bonecaambalabu[.]com",
            "description": "ClearFake (payload_delivery)",
            "timestamp": "2026-10-18 16:19:37",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "ClearFake",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "67c63f1b2d74c447114955236bace65fe7728b388ab068c1a7eddb81f0c43b01",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-18 16:19:26",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://www.virustotal.com/gui/file/67c63f1b2d74c447114955236bace65fe7728b388ab068c1a7eddb81f0c43b01"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "ip",
            "indicator": "91[.]208[.]206[.]98",
            "description": "Sliver (botnet_cc)",
            "timestamp": "2026-10-18 16:18:30",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "botnet",
                "verified",
                "https://magnify.modat.io/hosts/91.208.206.98"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "Sliver",
            "confidence": "50%"
        },
        {
            "type": "ip",
            "indicator": "50[.]6[.]7[.]9",
            "description": "Unknown malware (botnet_cc)",
            "timestamp": "2026-10-18 16:18:29",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "botnet",
                "verified",
                "https://magnify.modat.io/hosts/50.6.7.9"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "Unknown malware",
            "confidence": "50%"
        },
        {
            "type": "ip",
            "indicator": "89[.]44[.]80[.]7",
            "description": "Sliver (botnet_cc)",
            "timestamp": "2026-10-18 16:18:21",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "botnet",
                "verified",
                "https://magnify.modat.io/hosts/89.44.80.7"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "Sliver",
            "confidence": "50%"
        },
        {
            "type": "ip",
            "indicator": "89[.]169[.]47[.]107",
            "description": "Sliver (botnet_cc)",
            "timestamp": "2026-10-18 16:18:16",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "botnet",
                "verified",
                "https://magnify.modat.io/hosts/89.169.47.107"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "Sliver",
            "confidence": "50%"
        },
        {
            "type": "ip",
            "indicator": "89[.]124[.]109[.]73",
            "description": "Sliver (botnet_cc)",
            "timestamp": "2026-10-18 16:18:12",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "botnet",
                "verified",
                "https://magnify.modat.io/hosts/89.124.109.73"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "Sliver",
            "confidence": "50%"
        },
        {
            "type": "ip",
            "indicator": "85[.]234[.]100[.]6",
            "description": "Sliver (botnet_cc)",
            "timestamp": "2026-10-18 16:18:08",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "botnet",
                "verified",
                "https://magnify.modat.io/hosts/85.234.100.6"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "Sliver",
            "confidence": "50%"
        },
        {
            "type": "ip",
            "indicator": "87[.]97[.]106[.]161",
            "description": "Mirai (botnet_cc)",
            "timestamp": "2026-10-18 16:17:56",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "botnet",
                "verified",
                "https://magnify.modat.io/hosts/87.97.106.161"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "Mirai",
            "confidence": "50%"
        },
        {
            "type": "ip",
            "indicator": "87[.]97[.]106[.]16",
            "description": "Mirai (botnet_cc)",
            "timestamp": "2026-10-18 16:17:52",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "botnet",
                "verified",
                "https://magnify.modat.io/hosts/87.97.106.16"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "Mirai",
            "confidence": "50%"
        },
        {
            "type": "ip",
            "indicator": "82[.]131[.]202[.]123",
            "description": "Mirai (botnet_cc)",
            "timestamp": "2026-10-18 16:17:47",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "botnet",
                "verified",
                "https://magnify.modat.io/hosts/82.131.202.123"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "Mirai",
            "confidence": "50%"
        },
        {
            "type": "ip",
            "indicator": "77[.]42[.]88[.]18",
            "description": "Sliver (botnet_cc)",
            "timestamp": "2026-10-18 16:17:28",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "botnet",
                "verified",
                "https://magnify.modat.io/hosts/77.42.88.18"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "Sliver",
            "confidence": "50%"
        },
        {
            "type": "ip",
            "indicator": "68[.]64[.]178[.]130",
            "description": "Sliver (botnet_cc)",
            "timestamp": "2026-10-18 16:17:24",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "botnet",
                "verified",
                "https://magnify.modat.io/hosts/68.64.178.130"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "Sliver",
            "confidence": "50%"
        },
        {
            "type": "ip",
            "indicator": "65[.]87[.]7[.]171",
            "description": "Sliver (botnet_cc)",
            "timestamp": "2026-10-18 16:17:19",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "botnet",
                "verified",
                "https://magnify.modat.io/hosts/65.87.7.171"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "Sliver",
            "confidence": "50%"
        },
        {
            "type": "ip",
            "indicator": "5[.]253[.]17[.]131",
            "description": "Sliver (botnet_cc)",
            "timestamp": "2026-10-18 16:17:15",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 00:04 IST",
            "tags": [
                "botnet",
                "verified",
                "https://magnify.modat.io/hosts/5.253.17.131"
            ],
            "addedAt": "2026-10-19T00:04:47.246826+05:30",
            "campaign": "Sliver",
            "confidence": "50%"
        }
    ],
    "dailySummary": {
        "stats": {
            "totalIndicators": 85875,
            "activeSources": 9,
            "criticalAlerts": 48053,
            "activeCampaigns": 347
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 36812,
                "trend": "stable",
                "percentage": 6
            },
            {
                "category": "C2",
                "count": 11241,
                "trend": "stable",
                "percentage": 2
            },
            {
                "category": "Botnet",
                "count": 8614,
                "trend": "up",
                "percentage": 74
            },
            {
                "category": "Phishing",
                "count": 302,
                "trend": "stable",
                "percentage": 0
            }
        ],
        "targetedSectors": [
            {
                "name": "General",
                "percentage": 98
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
                "count": 33603,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://115[.]50[.]38[.]196:33047/i",
                    "hxxp://42[.]226[.]69[.]140:56903/i",
                    "hxxp://182[.]113[.]209[.]116:49963/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 18768,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]12[.]229[.]231",
                    "1[.]14[.]149[.]30",
                    "1[.]179[.]240[.]111"
                ]
            },
            {
                "name": "SSH Attacks",
                "count": 4645,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]14[.]240[.]247",
                    "1[.]214[.]214[.]114",
                    "1[.]222[.]42[.]237"
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
                "count": 1628,
                "types": [
                    "url",
                    "hash",
                    "ip",
                    "domain",
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "00fb522f8d19a1ee3fa1d23c55d55134454fb9067474d836dfd9019c948d0e9e",
                    "104[.]243[.]248[.]63",
                    "102[.]220[.]160[.]198"
                ]
            },
            {
                "name": "Vidar",
                "count": 1403,
                "types": [
                    "url",
                    "hash",
                    "ip",
                    "domain",
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "8ad8e7b22405a2368fe8b4a71c85311ed6846a159c911d6d068bd06e6c29ec6d",
                    "6e29d480cbb73974e1826d83cd52f8631cdd0357f952dc9b00540b2dedd6fc52",
                    "5d73848da175ffb13caebd385d6a7ebb3392d04cf0fc03e4e02caefc8a83c8f3"
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
                "count": 1198,
                "types": [
                    "ip",
                    "domain"
                ],
                "sampleIndicators": [
                    "119[.]45[.]236[.]76",
                    "91[.]201[.]115[.]193",
                    "45[.]87[.]53[.]6"
                ]
            },
            {
                "name": "Mirai",
                "count": 1068,
                "types": [
                    "url",
                    "domain",
                    "ip",
                    "hash"
                ],
                "sampleIndicators": [
                    "d01d6a5ae13395dbb373d81898a808df3c927f1356573b6a077cabd4fa8968f6",
                    "594da4cf0e1c77ac193abbb3753392725c6cb7c767b8576553383277cfdfe575",
                    "f36c38c0bc237aa2dfd272a61aaff579f9f1cbd405d7ac5846db6efc10e28583"
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
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "CINS Threat List",
        "totalAttacksThisHour": 58821,
        "lastCalculated": "2026-10-19 01:30 IST"
    }
};
