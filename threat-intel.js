// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-20T19:01:11.679788+05:30 IST (2026-10-20 13:31 UTC)
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-20T19:01:10.867079+05:30",
    "lastUpdatedFormatted": "Oct 20, 2026 at 07:01 PM IST",
    "lastUpdatedUtc": "2026-10-20 13:31 UTC",
    "comparisonPeriod": "Oct 19 \u2013 Oct 20, 2026",
    "stats": {
        "totalIOCs": 99370,
        "byType": {
            "url": 44010,
            "ip": 36342,
            "hash": 4325,
            "domain": 2219,
            "ssl-cert": 10861,
            "ip-range": 1613
        },
        "byVendor": {
            "OpenPhish": 991,
            "Malware Bazaar": 2817,
            "Spamhaus DROP": 1613,
            "CINS Army": 26555,
            "Blocklist.de": 6955,
            "URLhaus": 34156,
            "ThreatFox": 15417,
            "Feodo Tracker": 5,
            "SSL Blacklist": 10861
        },
        "topMalware": [
            {
                "name": "Vidar",
                "count": 1836,
                "types": [
                    "hash",
                    "url",
                    "ssl-cert",
                    "domain",
                    "ip"
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1641,
                "types": [
                    "hash",
                    "url",
                    "ssl-cert",
                    "domain",
                    "ip"
                ]
            },
            {
                "name": "Mirai",
                "count": 1386,
                "types": [
                    "domain",
                    "hash",
                    "ip",
                    "url"
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
                "count": 1207,
                "types": [
                    "domain",
                    "ip"
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
                "count": 628,
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
                "count": 562,
                "types": [
                    "ssl-cert",
                    "hash"
                ]
            },
            {
                "name": "OffLoader",
                "count": 531,
                "types": [
                    "ssl-cert"
                ]
            },
            {
                "name": "ConnectWise",
                "count": 509,
                "types": [
                    "ssl-cert",
                    "hash"
                ]
            },
            {
                "name": "AMOS",
                "count": 447,
                "types": [
                    "hash",
                    "domain",
                    "url"
                ]
            }
        ],
        "recentIOCs": [
            {
                "type": "ip",
                "indicator": "162[.]243[.]103[.]246",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-10-20 10:09 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-10-20 10:09 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-10-20T10:09:11.751590+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "178[.]62[.]3[.]223",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-10-20 10:09 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-10-20 10:09 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-10-20T10:09:11.751590+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "27[.]133[.]154[.]218",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-10-20 10:09 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-10-20 10:09 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-10-20T10:09:11.751590+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "34[.]204[.]119[.]63",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-10-20 10:09 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-10-20 10:09 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-10-20T10:09:11.751590+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "50[.]16[.]16[.]211",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-10-20 10:09 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-10-20 10:09 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-10-20T10:09:11.751590+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "206[.]123[.]152[.]197",
                "description": "Remcos (botnet_cc)",
                "timestamp": "2026-10-20 04:35:04",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-20 10:09 IST",
                "tags": [
                    "botnet",
                    "verified"
                ],
                "addedAt": "2026-10-20T10:09:10.344868+05:30",
                "campaign": "Remcos",
                "confidence": "100%"
            },
            {
                "type": "hash",
                "indicator": "75e4994373a51dbfe5f22f0f071c05dbedd077d80aa6a0051374121780868707",
                "description": "AMOS (payload)",
                "timestamp": "2026-10-20 04:34:10",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-20 10:09 IST",
                "tags": [
                    "malware",
                    "hash",
                    "verified",
                    "https://www.virustotal.com/gui/file/75e4994373a51dbfe5f22f0f071c05dbedd077d80aa6a0051374121780868707"
                ],
                "addedAt": "2026-10-20T10:09:10.344868+05:30",
                "campaign": "AMOS",
                "confidence": "100%"
            },
            {
                "type": "url",
                "indicator": "hxxps://htj[.]abanda88[.]org/pe/",
                "description": "Vidar (botnet_cc)",
                "timestamp": "2026-10-20 04:30:48",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-20 10:09 IST",
                "tags": [
                    "verified"
                ],
                "addedAt": "2026-10-20T10:09:10.344868+05:30",
                "campaign": "Vidar",
                "confidence": "100%"
            },
            {
                "type": "hash",
                "indicator": "9e40c2c027e3bbbe89e9e4ddc1846ef271fc8d4c6c09282be4f7164cd96ca196",
                "description": "AMOS (payload)",
                "timestamp": "2026-10-20 04:29:52",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-20 10:09 IST",
                "tags": [
                    "malware",
                    "hash",
                    "verified",
                    "https://www.virustotal.com/gui/file/9e40c2c027e3bbbe89e9e4ddc1846ef271fc8d4c6c09282be4f7164cd96ca196"
                ],
                "addedAt": "2026-10-20T10:09:10.344868+05:30",
                "campaign": "AMOS",
                "confidence": "100%"
            },
            {
                "type": "ip",
                "indicator": "23[.]132[.]164[.]193",
                "description": "Remcos (botnet_cc)",
                "timestamp": "2026-10-20 04:26:37",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-20 10:09 IST",
                "tags": [
                    "botnet",
                    "verified"
                ],
                "addedAt": "2026-10-20T10:09:10.344868+05:30",
                "campaign": "Remcos",
                "confidence": "100%"
            },
            {
                "type": "url",
                "indicator": "hxxps://htj[.]abanda88[.]org/ny/",
                "description": "Vidar (botnet_cc)",
                "timestamp": "2026-10-20 04:25:48",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-20 10:09 IST",
                "tags": [
                    "verified"
                ],
                "addedAt": "2026-10-20T10:09:10.344868+05:30",
                "campaign": "Vidar",
                "confidence": "100%"
            },
            {
                "type": "url",
                "indicator": "hxxps://htj[.]abanda88[.]org/r/",
                "description": "Vidar (botnet_cc)",
                "timestamp": "2026-10-20 04:20:48",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-20 10:09 IST",
                "tags": [
                    "verified"
                ],
                "addedAt": "2026-10-20T10:09:10.344868+05:30",
                "campaign": "Vidar",
                "confidence": "100%"
            },
            {
                "type": "url",
                "indicator": "hxxps://htj[.]abanda88[.]org/pn/",
                "description": "Vidar (botnet_cc)",
                "timestamp": "2026-10-20 04:15:48",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-20 10:09 IST",
                "tags": [
                    "verified"
                ],
                "addedAt": "2026-10-20T10:09:10.344868+05:30",
                "campaign": "Vidar",
                "confidence": "100%"
            },
            {
                "type": "url",
                "indicator": "hxxps://htj[.]abanda88[.]org/rig/",
                "description": "Vidar (botnet_cc)",
                "timestamp": "2026-10-20 04:10:49",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-20 10:09 IST",
                "tags": [
                    "verified"
                ],
                "addedAt": "2026-10-20T10:09:10.344868+05:30",
                "campaign": "Vidar",
                "confidence": "100%"
            },
            {
                "type": "url",
                "indicator": "hxxp://scanchart-rny[.]com/ac/cc[.]php",
                "description": "Loki Password Stealer (PWS) (botnet_cc)",
                "timestamp": "2026-10-20 04:10:03",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-20 10:09 IST",
                "tags": [
                    "verified"
                ],
                "addedAt": "2026-10-20T10:09:10.344868+05:30",
                "campaign": "Loki Password Stealer (PWS)",
                "confidence": "100%"
            },
            {
                "type": "domain",
                "indicator": "se7ahj6q[.]laparnih[.]com",
                "description": "ClearFake (payload_delivery)",
                "timestamp": "2026-10-20 04:06:03",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-20 10:09 IST",
                "tags": [
                    "verified"
                ],
                "addedAt": "2026-10-20T10:09:10.344868+05:30",
                "campaign": "ClearFake",
                "confidence": "100%"
            },
            {
                "type": "url",
                "indicator": "hxxps://htj[.]abanda88[.]org/zck/",
                "description": "Vidar (botnet_cc)",
                "timestamp": "2026-10-20 04:05:48",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-20 10:09 IST",
                "tags": [
                    "verified"
                ],
                "addedAt": "2026-10-20T10:09:10.344868+05:30",
                "campaign": "Vidar",
                "confidence": "100%"
            },
            {
                "type": "ip",
                "indicator": "46[.]246[.]6[.]8",
                "description": "DCRat (botnet_cc)",
                "timestamp": "2026-10-20 04:05:03",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-20 10:09 IST",
                "tags": [
                    "botnet",
                    "verified"
                ],
                "addedAt": "2026-10-20T10:09:10.344868+05:30",
                "campaign": "DCRat",
                "confidence": "100%"
            },
            {
                "type": "url",
                "indicator": "hxxps://mum[.]abanda88[.]org/fyn/",
                "description": "Vidar (botnet_cc)",
                "timestamp": "2026-10-20 04:00:50",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-20 10:09 IST",
                "tags": [
                    "verified"
                ],
                "addedAt": "2026-10-20T10:09:10.344868+05:30",
                "campaign": "Vidar",
                "confidence": "100%"
            },
            {
                "type": "url",
                "indicator": "hxxps://mum[.]abanda88[.]org/c6h/",
                "description": "Vidar (botnet_cc)",
                "timestamp": "2026-10-20 03:55:48",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-20 10:09 IST",
                "tags": [
                    "verified"
                ],
                "addedAt": "2026-10-20T10:09:10.344868+05:30",
                "campaign": "Vidar",
                "confidence": "100%"
            }
        ],
        "lastUpdated": "2026-10-20T19:01:10.867079+05:30",
        "lastUpdatedFormatted": "Oct 20, 2026 at 07:01 PM IST",
        "lastUpdatedUtc": "2026-10-20 13:31 UTC"
    },
    "vendors": {
        "OpenPhish": {
            "description": "Real-time phishing URL feed updated every 15 minutes. Tracks active phishing sites targeting major brands and financial institutions.",
            "website": "https://openphish.com/",
            "updateFrequency": "Every 15 minutes",
            "iocCount": 1240,
            "iocDataUrl": "https://thehgtech.com/ioc-data/openphish.json",
            "stats": {
                "total": 1240,
                "newInLastHour": 300,
                "lastUpdate": "2026-10-20 13:30 UTC"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://sundram786[.]github[.]io/Spotify-Clone/",
                "hxxps://cj333471[.]tw1[.]ru/",
                "hxxps://kukoinjlogn[.]webflow[.]io/",
                "hxxps://hernunspnc[.]github[.]io/Adobe_Reader[.]github[.]io/",
                "hxxps://www[.]roblox[.]ly/users/1955959176/profile"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 3137,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 3137,
                "newInLastHour": 320,
                "lastUpdate": "2026-10-20 13:30 UTC"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                "d91e304a337858f2dcfbf1e6a366f95320fb0400022a4326487b648b9898a36d",
                "4bb026581df62b024c8e3a15d0e52ff8d45124695c6e71ea14756abec409b15e",
                "e9285e5adc7bded1b4883e4f16cec6ea332d73d9f495f807229222fbac1dd2ce",
                "89ab3b9e84198d8bb8d207964ee8cc02d75da3d6bdbd9cf1ccf34f9500272053",
                "7114be5cb487e2975d2167a8660f164a3b2ec8dc1323b0f7919c5013fb5027de"
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
                "newInLastHour": 79,
                "lastUpdate": "2026-10-20 13:31 UTC"
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
            "iocCount": 28040,
            "iocDataUrl": "https://thehgtech.com/ioc-data/cins-army.json",
            "stats": {
                "total": 28040,
                "newInLastHour": 15000,
                "lastUpdate": "2026-10-20 13:31 UTC"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]117[.]68[.]141",
                "1[.]14[.]149[.]30",
                "1[.]145[.]89[.]105",
                "1[.]177[.]162[.]2",
                "1[.]192[.]129[.]106"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 7235,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 7235,
                "newInLastHour": 5148,
                "lastUpdate": "2026-10-20 13:31 UTC"
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
            "iocCount": 34600,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 34600,
                "newInLastHour": 33794,
                "lastUpdate": "2026-10-20 13:31 UTC"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://124[.]161[.]116[.]14:51225/bin[.]sh",
                "hxxp://cloud-browse[.]codes/03b8d2bf77f41a58f41dc6bba89e72bf272e4ec517793ee42d5444b9a8f59693",
                "hxxp://200[.]115[.]102[.]246:39366/i",
                "hxxp://210[.]208[.]104[.]156:40179/i",
                "hxxp://200[.]115[.]102[.]246:39366/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 16149,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 16149,
                "newInLastHour": 5330,
                "lastUpdate": "2026-10-20 13:31 UTC"
            },
            "types": [
                "domain",
                "ip",
                "hash",
                "url"
            ],
            "sampleIndicators": [
                "tuwysily[.]workers[.]dev",
                "hxxp://slink4u[.]click:9692/users",
                "d4310ec0bfdd4d74035591bd5d065e5220cdd790af2068fadae4bb525bc5dd0f",
                "hxxp://slink4u[.]click:9692/imports",
                "hxxp://slink4u[.]click:9692/payments"
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
                "lastUpdate": "2026-10-20 13:31 UTC"
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
            "iocCount": 10990,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10990,
                "newInLastHour": 141,
                "lastUpdate": "2026-10-20 13:31 UTC"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "59fb8a90649cac57e345fbd3af9f76d6a73fac12",
                "9a2205a15c886d6278d9e0d60747e8ad287b6c7b",
                "9061737b3e3cb6dae0a02abe33346d72ccd27af4",
                "75964711a6e10849d232b5df09f428a4eaa48a68",
                "9001ac2344ddd1b2e32f5d25b5e56b323e6fc862"
            ]
        }
    },
    "overview": [
        {
            "type": "ip",
            "indicator": "162[.]243[.]103[.]246",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-20 10:09 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-20T10:09:11.751590+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "178[.]62[.]3[.]223",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-20 10:09 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-20T10:09:11.751590+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "27[.]133[.]154[.]218",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-20 10:09 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-20T10:09:11.751590+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "34[.]204[.]119[.]63",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-20 10:09 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-20T10:09:11.751590+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "50[.]16[.]16[.]211",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-20 10:09 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-20T10:09:11.751590+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "206[.]123[.]152[.]197",
            "description": "Remcos (botnet_cc)",
            "timestamp": "2026-10-20 04:35:04",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "Remcos",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "75e4994373a51dbfe5f22f0f071c05dbedd077d80aa6a0051374121780868707",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-20 04:34:10",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://www.virustotal.com/gui/file/75e4994373a51dbfe5f22f0f071c05dbedd077d80aa6a0051374121780868707"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://htj[.]abanda88[.]org/pe/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-20 04:30:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "9e40c2c027e3bbbe89e9e4ddc1846ef271fc8d4c6c09282be4f7164cd96ca196",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-20 04:29:52",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://www.virustotal.com/gui/file/9e40c2c027e3bbbe89e9e4ddc1846ef271fc8d4c6c09282be4f7164cd96ca196"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "ip",
            "indicator": "23[.]132[.]164[.]193",
            "description": "Remcos (botnet_cc)",
            "timestamp": "2026-10-20 04:26:37",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "Remcos",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://htj[.]abanda88[.]org/ny/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-20 04:25:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://htj[.]abanda88[.]org/r/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-20 04:20:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://htj[.]abanda88[.]org/pn/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-20 04:15:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://htj[.]abanda88[.]org/rig/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-20 04:10:49",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxp://scanchart-rny[.]com/ac/cc[.]php",
            "description": "Loki Password Stealer (PWS) (botnet_cc)",
            "timestamp": "2026-10-20 04:10:03",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "Loki Password Stealer (PWS)",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "se7ahj6q[.]laparnih[.]com",
            "description": "ClearFake (payload_delivery)",
            "timestamp": "2026-10-20 04:06:03",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "ClearFake",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://htj[.]abanda88[.]org/zck/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-20 04:05:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "ip",
            "indicator": "46[.]246[.]6[.]8",
            "description": "DCRat (botnet_cc)",
            "timestamp": "2026-10-20 04:05:03",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "DCRat",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://mum[.]abanda88[.]org/fyn/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-20 04:00:50",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://mum[.]abanda88[.]org/c6h/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-20 03:55:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "f7046c0941b75bdbf5f547d4c0b70f3d41bdd50b36f49e42e29ceaee3671e623",
            "description": "Unknown Loader (payload)",
            "timestamp": "2026-10-20 03:54:22",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "Unknown Loader",
            "confidence": "85%"
        },
        {
            "type": "hash",
            "indicator": "c018650f7847d0566d56933e5953bdd5227133f645cba35d3c1e69879b455924",
            "description": "Unknown Loader (payload)",
            "timestamp": "2026-10-20 03:54:21",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "Unknown Loader",
            "confidence": "85%"
        },
        {
            "type": "hash",
            "indicator": "f5da783380784216a5979a7ac7285792a4ca2e04a4a7c3bd921ef9a7f5eaa3a0",
            "description": "Unknown Loader (payload)",
            "timestamp": "2026-10-20 03:54:20",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "Unknown Loader",
            "confidence": "85%"
        },
        {
            "type": "hash",
            "indicator": "9208a826c900f6a2677b2943b28c6f7016e06bfcc605e2c054a4a124ac027666",
            "description": "Unknown Loader (payload)",
            "timestamp": "2026-10-20 03:54:19",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "Unknown Loader",
            "confidence": "85%"
        },
        {
            "type": "hash",
            "indicator": "c53e6d86609593c0e0afeb913924c007f970cb5be07aff5cc414e7f9ef542a1c",
            "description": "Mirai (payload)",
            "timestamp": "2026-10-20 03:54:18",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "Mirai",
            "confidence": "95%"
        },
        {
            "type": "url",
            "indicator": "hxxps://mum[.]abanda88[.]org/sz/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-20 03:50:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "ip",
            "indicator": "49[.]233[.]175[.]166",
            "description": "Cobalt Strike (botnet_cc)",
            "timestamp": "2026-10-20 03:45:53",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "Cobalt Strike",
            "confidence": "75%"
        },
        {
            "type": "url",
            "indicator": "hxxps://mum[.]abanda88[.]org/ev/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-20 03:45:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "ip",
            "indicator": "119[.]28[.]160[.]161",
            "description": "Cobalt Strike (botnet_cc)",
            "timestamp": "2026-10-20 03:45:42",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "Cobalt Strike",
            "confidence": "75%"
        },
        {
            "type": "ip",
            "indicator": "106[.]55[.]34[.]199",
            "description": "Cobalt Strike (botnet_cc)",
            "timestamp": "2026-10-20 03:45:40",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "Cobalt Strike",
            "confidence": "75%"
        },
        {
            "type": "url",
            "indicator": "hxxps://mum[.]abanda88[.]org/s8/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-20 03:40:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://o[.]9qoi[.]org/e",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-20 03:36:26",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://mum[.]abanda88[.]org/fq/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-20 03:35:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "cornelabizarre[.]workers[.]dev",
            "description": "php.shin_webshell (payload_delivery)",
            "timestamp": "2026-10-20 03:35:42",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "php.shin_webshell",
            "confidence": "50%"
        },
        {
            "type": "domain",
            "indicator": "zif7jqzm[.]bocillanang[.]com",
            "description": "ClearFake (payload_delivery)",
            "timestamp": "2026-10-20 03:35:13",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "ClearFake",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "55l9bouy[.]bociljepe[.]info",
            "description": "ClearFake (payload_delivery)",
            "timestamp": "2026-10-20 03:35:02",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "ClearFake",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://mum[.]abanda88[.]org/lz/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-20 03:30:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://mum[.]abanda88[.]org/y7/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-20 03:25:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxp://cdire[.]shop:9048/reviews",
            "description": "Remus (botnet_cc)",
            "timestamp": "2026-10-20 03:23:53",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "Remus",
            "confidence": "75%"
        },
        {
            "type": "url",
            "indicator": "hxxp://exototy[.]xyz:6473",
            "description": "Remus (botnet_cc)",
            "timestamp": "2026-10-20 03:23:53",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "Remus",
            "confidence": "75%"
        },
        {
            "type": "url",
            "indicator": "hxxp://bestals[.]shop:8592/events",
            "description": "Remus (botnet_cc)",
            "timestamp": "2026-10-20 03:23:53",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "Remus",
            "confidence": "75%"
        },
        {
            "type": "url",
            "indicator": "hxxps://mum[.]abanda88[.]org/m/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-20 03:20:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://mum[.]abanda88[.]org/jxa/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-20 03:15:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://mum[.]abanda88[.]org/is/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-20 03:10:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "ip",
            "indicator": "15[.]235[.]65[.]221",
            "description": "Remcos (botnet_cc)",
            "timestamp": "2026-10-20 03:10:27",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "Remcos",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://mum[.]abanda88[.]org/xi/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-20 03:05:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "ip",
            "indicator": "156[.]240[.]41[.]168",
            "description": "VShell (botnet_cc)",
            "timestamp": "2026-10-20 03:05:05",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "VShell",
            "confidence": "100%"
        },
        {
            "type": "ip",
            "indicator": "103[.]39[.]79[.]102",
            "description": "Unknown malware (botnet_cc)",
            "timestamp": "2026-10-20 03:05:04",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "Unknown malware",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://v2l[.]abanda88[.]org/qp/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-20 03:00:49",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://v2l[.]abanda88[.]org/fw5/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-20 02:55:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "884c70bde746092d710d0b217cd23bd314de54fc3a23d0f96928815d92222201",
            "description": "Unknown Loader (payload)",
            "timestamp": "2026-10-20 02:54:39",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "Unknown Loader",
            "confidence": "85%"
        },
        {
            "type": "hash",
            "indicator": "0e814f4d934e4a574a914c319367dbe3793ee40ccf58ca3d26763d722216cbac",
            "description": "Unknown Loader (payload)",
            "timestamp": "2026-10-20 02:54:38",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "Unknown Loader",
            "confidence": "85%"
        },
        {
            "type": "hash",
            "indicator": "05ca064a34061e79b6c21da0c508689eaf29369f850f27c86f645724b528990b",
            "description": "Unknown Loader (payload)",
            "timestamp": "2026-10-20 02:54:37",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "Unknown Loader",
            "confidence": "85%"
        },
        {
            "type": "hash",
            "indicator": "085dc35f07a9b087da3a765ef388c04d751e01885a9d64fae7b14167ee0cccb7",
            "description": "Unknown Loader (payload)",
            "timestamp": "2026-10-20 02:54:36",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "Unknown Loader",
            "confidence": "85%"
        },
        {
            "type": "hash",
            "indicator": "4e72f27c14874c16f63fc77929ae53c62468f0bf0515638755556b355c34f2ad",
            "description": "Mirai (payload)",
            "timestamp": "2026-10-20 02:54:35",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "Mirai",
            "confidence": "90%"
        },
        {
            "type": "hash",
            "indicator": "b8d32ae2c2c5aa9b07aff0911502928a6977bd9a1cb4d8e036494fa07d629cdf",
            "description": "Mirai (payload)",
            "timestamp": "2026-10-20 02:54:33",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "Mirai",
            "confidence": "90%"
        },
        {
            "type": "hash",
            "indicator": "ed2faecb889119bb4b68abbcdbae4a766c9c698e5fca515698bac7ad2d07aa66",
            "description": "Mirai (payload)",
            "timestamp": "2026-10-20 02:54:32",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "Mirai",
            "confidence": "90%"
        },
        {
            "type": "hash",
            "indicator": "3961cb76603e40e64368b769437a3f60665f8ed942089ea44ec53d9e594b8122",
            "description": "Mirai (payload)",
            "timestamp": "2026-10-20 02:54:31",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "Mirai",
            "confidence": "90%"
        },
        {
            "type": "hash",
            "indicator": "feb4dda27d64c947d307ac225bf278bf304169a50b3eae2eeb4e4583ba9f39e2",
            "description": "Mirai (payload)",
            "timestamp": "2026-10-20 02:54:30",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "Mirai",
            "confidence": "90%"
        },
        {
            "type": "hash",
            "indicator": "ad7ce3d9474d053d965bcd40a6529d93331cc164802fdecc12b694545f10866d",
            "description": "Mirai (payload)",
            "timestamp": "2026-10-20 02:54:29",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "Mirai",
            "confidence": "90%"
        },
        {
            "type": "hash",
            "indicator": "f300eb2ed9628481760661cfa21f0a678a7cdc935492047591f04b23cc854f3f",
            "description": "Mirai (payload)",
            "timestamp": "2026-10-20 02:54:28",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "Mirai",
            "confidence": "90%"
        },
        {
            "type": "hash",
            "indicator": "888d245e689dbcb40a1b41187991ce0320a78014968230b9f14283cdea445aba",
            "description": "Mirai (payload)",
            "timestamp": "2026-10-20 02:54:27",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "Mirai",
            "confidence": "90%"
        },
        {
            "type": "hash",
            "indicator": "4d6f9ef89a5b50c5eed5047c0a8a1ec766f16e22a567b0f365b3e44c339842e2",
            "description": "Mirai (payload)",
            "timestamp": "2026-10-20 02:54:26",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "Mirai",
            "confidence": "90%"
        },
        {
            "type": "hash",
            "indicator": "617aec4b793f439c2dac557740d6e1e03e26c40da858d1e4ed3df818bfc37952",
            "description": "Mirai (payload)",
            "timestamp": "2026-10-20 02:54:25",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "Mirai",
            "confidence": "90%"
        },
        {
            "type": "hash",
            "indicator": "2981100ec0c4342d4c7b535f30dc0d9885b6abd0dae85d5364341c6eec2c978d",
            "description": "Mirai (payload)",
            "timestamp": "2026-10-20 02:54:24",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "Mirai",
            "confidence": "90%"
        },
        {
            "type": "hash",
            "indicator": "15f78d427064b1cd769a5a5591a875552c32e8bf5f563c629c071509fde20ad0",
            "description": "Mirai (payload)",
            "timestamp": "2026-10-20 02:54:23",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "Mirai",
            "confidence": "90%"
        },
        {
            "type": "hash",
            "indicator": "fa82dfe8e721d341d1c3f4d6c10c7aa1b8da1309e15835bfe2e614d4f1f45c22",
            "description": "Mirai (payload)",
            "timestamp": "2026-10-20 02:54:21",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "Mirai",
            "confidence": "90%"
        },
        {
            "type": "hash",
            "indicator": "8d9e3b5aefb2069a498b7135660bdbb7fd1c762b1badee8835c271c9c060c8b9",
            "description": "Mirai (payload)",
            "timestamp": "2026-10-20 02:54:20",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "Mirai",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "48e9eab9bb48d75bd70a989fe1eaf610fbfdadf8fc21bbfd63dd40e2c2504ff7",
            "description": "Mirai (payload)",
            "timestamp": "2026-10-20 02:54:19",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "Mirai",
            "confidence": "95%"
        },
        {
            "type": "hash",
            "indicator": "92e1930e6de81598b979d0623013f768be028242e8b10ffa44785cb1b4d6f6ec",
            "description": "Mirai (payload)",
            "timestamp": "2026-10-20 02:54:17",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "Mirai",
            "confidence": "95%"
        },
        {
            "type": "ip",
            "indicator": "89[.]19[.]220[.]21",
            "description": "Aisuru (botnet_cc)",
            "timestamp": "2026-10-20 02:52:59",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "Aisuru",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://v2l[.]abanda88[.]org/e/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-20 02:50:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://v2l[.]abanda88[.]org/j5/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-20 02:45:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "vidohebu[.]workers[.]dev",
            "description": "php.shin_webshell (payload_delivery)",
            "timestamp": "2026-10-20 02:44:31",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "php.shin_webshell",
            "confidence": "50%"
        },
        {
            "type": "url",
            "indicator": "hxxps://v2l[.]abanda88[.]org/hc/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-20 02:40:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://v2l[.]abanda88[.]org/zg/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-20 02:35:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "d0b369d8b76bd0da97fa2baacb82f9cd444b9ead8d850a8aa68e86b84b1e387b",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-20 02:34:53",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://www.virustotal.com/gui/file/d0b369d8b76bd0da97fa2baacb82f9cd444b9ead8d850a8aa68e86b84b1e387b"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://q0[.]abanda88[.]org/tl",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-20 02:32:42",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "3783de51bd31420e5b2544e052058efe6d3330938831523e454856c257fef444",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-20 02:31:47",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://www.virustotal.com/gui/file/3783de51bd31420e5b2544e052058efe6d3330938831523e454856c257fef444"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://v2l[.]abanda88[.]org/jr/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-20 02:30:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "4015e605fb7ff472d208169a3b89ba16b18be92d2345dfb707985aef364f63dc",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-20 02:29:10",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://www.virustotal.com/gui/file/4015e605fb7ff472d208169a3b89ba16b18be92d2345dfb707985aef364f63dc"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "ed95369412065c36857f688d4cd1530c6d17bac292eb424dfa855ab1df349caf",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-20 02:26:38",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://www.virustotal.com/gui/file/ed95369412065c36857f688d4cd1530c6d17bac292eb424dfa855ab1df349caf"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://v2l[.]abanda88[.]org/ta/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-20 02:25:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "9e6f74ea5ec27c36957a4392386c63e0103b2d7a8d237ad019ba1ebd19df8902",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-20 02:23:47",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://www.virustotal.com/gui/file/9e6f74ea5ec27c36957a4392386c63e0103b2d7a8d237ad019ba1ebd19df8902"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "2e1c133f28b1d0ff70cfdf24f59263412f2323ab16bc35c8d910d441e848c0e4",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-20 02:20:57",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://www.virustotal.com/gui/file/2e1c133f28b1d0ff70cfdf24f59263412f2323ab16bc35c8d910d441e848c0e4"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://v2l[.]abanda88[.]org/l6/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-20 02:20:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://v2l[.]abanda88[.]org/b/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-20 02:15:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "718d3907daebcebc65c36c06aa3c9f8d856f41b77c43e809379a1fbc4a5bf91e",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-20 02:15:25",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://www.virustotal.com/gui/file/718d3907daebcebc65c36c06aa3c9f8d856f41b77c43e809379a1fbc4a5bf91e"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://v2l[.]abanda88[.]org/dqm/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-20 02:10:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://v2l[.]abanda88[.]org/nk/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-20 02:05:49",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "fe5[.]88kfc[.]org",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-20 02:05:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://fe5[.]88kfc[.]org/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-20 02:05:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "ip",
            "indicator": "47[.]122[.]120[.]188",
            "description": "VShell (botnet_cc)",
            "timestamp": "2026-10-20 02:05:04",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "VShell",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://fe5[.]88kfc[.]org",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-20 02:02:07",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://q8e[.]abanda88[.]org/wf/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-20 02:00:50",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://q8e[.]abanda88[.]org/bce/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-20 01:55:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "c1ab182921c11bcf03f9e8a8456fb51424f4053f38cb0bc8bb9e1e8f1d4a4023",
            "description": "Unknown Loader (payload)",
            "timestamp": "2026-10-20 01:54:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "Unknown Loader",
            "confidence": "85%"
        },
        {
            "type": "hash",
            "indicator": "45b4cf5074a13d67d69725e8b43442efd350f1adf9e404f83d564bd0cccf911f",
            "description": "Unknown Loader (payload)",
            "timestamp": "2026-10-20 01:54:47",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "Unknown Loader",
            "confidence": "85%"
        },
        {
            "type": "hash",
            "indicator": "c2f58a161506ee7edf25f833ceb4bc8033398deedc148e1e3454d651d1a4f15c",
            "description": "Unknown Loader (payload)",
            "timestamp": "2026-10-20 01:54:46",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "Unknown Loader",
            "confidence": "85%"
        },
        {
            "type": "hash",
            "indicator": "9485247a2038a7d8f95b8baf7edda02da9a8ef63eb761f728878dc40b82dbfbd",
            "description": "Mirai (payload)",
            "timestamp": "2026-10-20 01:54:45",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 10:09 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-20T10:09:10.344868+05:30",
            "campaign": "Mirai",
            "confidence": "90%"
        }
    ],
    "dailySummary": {
        "stats": {
            "totalIndicators": 99370,
            "activeSources": 9,
            "criticalAlerts": 49937,
            "activeCampaigns": 381
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 38827,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 11110,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "Botnet",
                "count": 9302,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "Phishing",
                "count": 993,
                "trend": "up",
                "percentage": 29
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
                "count": 34156,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://42[.]178[.]168[.]184:38532/i",
                    "hxxp://36[.]88[.]136[.]194:40019/i",
                    "hxxp://42[.]239[.]170[.]207:51690/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 26555,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]14[.]149[.]30",
                    "1[.]193[.]63[.]62",
                    "1[.]215[.]138[.]43"
                ]
            },
            {
                "name": "SSH Attacks",
                "count": 6955,
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
                "count": 1836,
                "types": [
                    "hash",
                    "url",
                    "ssl-cert",
                    "domain",
                    "ip"
                ],
                "sampleIndicators": [
                    "379a2944024fe73ff4af0d02eeb4764918f3009aa236207e0edd616cbfb84ccc",
                    "0d8f1752831cd45fbf6e4786cfd7e36997ab9835efdcfb7950b1db52e59f63f2",
                    "7ed66e30a6b0c5eb8b7598c10edf420e04ed2ce1fbea8f875418f3f68d625691"
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1641,
                "types": [
                    "hash",
                    "url",
                    "ssl-cert",
                    "domain",
                    "ip"
                ],
                "sampleIndicators": [
                    "fc255863ceab40f2510ddf29801e583015505861777f1c5d7e72ec164920f075",
                    "ca647b807e361ae45b779254dc17251364552d77ab354c90fdd73803ac5bca80",
                    "9c1a7c0df8bfa2e8a3c461d469545b47749a5f2de3289c9568698158d20ea8d1"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1613,
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
                "name": "Mirai",
                "count": 1386,
                "types": [
                    "domain",
                    "hash",
                    "ip",
                    "url"
                ],
                "sampleIndicators": [
                    "92f859eb329b97f289bd7b864f27559bb8a70a56fd165bbc5bf27751b62ff94a",
                    "c53e6d86609593c0e0afeb913924c007f970cb5be07aff5cc414e7f9ef542a1c",
                    "98b43dca907880c96d2e5ec3e4c3d0cd2c13e441cd99de9523278ed4530d980c"
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
                "count": 1207,
                "types": [
                    "domain",
                    "ip"
                ],
                "sampleIndicators": [
                    "49[.]233[.]175[.]166",
                    "119[.]28[.]160[.]161",
                    "106[.]55[.]34[.]199"
                ]
            },
            {
                "name": "Generic Phishing",
                "count": 990,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://faq-start-ledgercom-eng[.]typedream[.]app/",
                    "hxxp://hotelhautbuyeg[.]click/",
                    "hxxps://f005[.]backblazeb2[.]com/file/using1sg/mtsprofilesg[.]html"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "CINS Threat List",
        "totalAttacksThisHour": 60117,
        "lastCalculated": "2026-10-20 19:01 IST"
    }
};
