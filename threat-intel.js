// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-20T02:29:55.831327+05:30 IST (2026-10-19 20:59 UTC)
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-20T02:29:55.185981+05:30",
    "lastUpdatedFormatted": "Oct 20, 2026 at 02:29 AM IST",
    "lastUpdatedUtc": "2026-10-19 20:59 UTC",
    "comparisonPeriod": "Oct 19 \u2013 Oct 20, 2026",
    "stats": {
        "totalIOCs": 95361,
        "byType": {
            "url": 43420,
            "ip": 33331,
            "hash": 3752,
            "domain": 2169,
            "ssl-cert": 10997,
            "ip-range": 1692
        },
        "byVendor": {
            "OpenPhish": 765,
            "Malware Bazaar": 2403,
            "Spamhaus DROP": 1692,
            "CINS Army": 24356,
            "Blocklist.de": 6191,
            "URLhaus": 34002,
            "ThreatFox": 14950,
            "Feodo Tracker": 5,
            "SSL Blacklist": 10997
        },
        "topMalware": [
            {
                "name": "Vidar",
                "count": 1680,
                "types": [
                    "ssl-cert",
                    "ip",
                    "hash",
                    "domain",
                    "url"
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1646,
                "types": [
                    "ssl-cert",
                    "ip",
                    "hash",
                    "domain",
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
                "name": "Mirai",
                "count": 1216,
                "types": [
                    "ip",
                    "hash",
                    "domain",
                    "url"
                ]
            },
            {
                "name": "Cobalt Strike",
                "count": 1202,
                "types": [
                    "ip",
                    "domain"
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
                "count": 733,
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
                "count": 625,
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
                "count": 561,
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
                "count": 450,
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
                "timestamp": "2026-10-19 21:01 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-10-19 21:01 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-10-19T21:01:14.442291+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "178[.]62[.]3[.]223",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-10-19 21:01 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-10-19 21:01 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-10-19T21:01:14.442291+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "27[.]133[.]154[.]218",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-10-19 21:01 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-10-19 21:01 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-10-19T21:01:14.442291+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "34[.]204[.]119[.]63",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-10-19 21:01 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-10-19 21:01 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-10-19T21:01:14.442291+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "50[.]16[.]16[.]211",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-10-19 21:01 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-10-19 21:01 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-10-19T21:01:14.442291+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "url",
                "indicator": "hxxps://jh[.]abalbet[.]com/o/",
                "description": "Vidar (botnet_cc)",
                "timestamp": "2026-10-19 15:20:48",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-19 21:01 IST",
                "tags": [
                    "verified"
                ],
                "addedAt": "2026-10-19T21:01:13.139727+05:30",
                "campaign": "Vidar",
                "confidence": "100%"
            },
            {
                "type": "ip",
                "indicator": "47[.]237[.]142[.]244",
                "description": "ValleyRAT (botnet_cc)",
                "timestamp": "2026-10-19 15:16:27",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-19 21:01 IST",
                "tags": [
                    "botnet",
                    "verified"
                ],
                "addedAt": "2026-10-19T21:01:13.139727+05:30",
                "campaign": "ValleyRAT",
                "confidence": "100%"
            },
            {
                "type": "url",
                "indicator": "hxxps://jh[.]abalbet[.]com/q/",
                "description": "Vidar (botnet_cc)",
                "timestamp": "2026-10-19 15:15:48",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-19 21:01 IST",
                "tags": [
                    "verified"
                ],
                "addedAt": "2026-10-19T21:01:13.139727+05:30",
                "campaign": "Vidar",
                "confidence": "100%"
            },
            {
                "type": "ip",
                "indicator": "45[.]203[.]220[.]49",
                "description": "ValleyRAT (botnet_cc)",
                "timestamp": "2026-10-19 15:15:28",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-19 21:01 IST",
                "tags": [
                    "botnet",
                    "verified",
                    "https://bazaar.abuse.ch/sample/58648467edabd8e8914b022a8d475bffc6db598086f4505e09815e9d02537f91/"
                ],
                "addedAt": "2026-10-19T21:01:13.139727+05:30",
                "campaign": "ValleyRAT",
                "confidence": "75%"
            },
            {
                "type": "domain",
                "indicator": "audit[.]bitfetch[.]cc",
                "description": "ACR Stealer (botnet_cc)",
                "timestamp": "2026-10-19 15:12:30",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-19 21:01 IST",
                "tags": [
                    "verified"
                ],
                "addedAt": "2026-10-19T21:01:13.139727+05:30",
                "campaign": "ACR Stealer",
                "confidence": "100%"
            },
            {
                "type": "url",
                "indicator": "hxxps://jh[.]abalbet[.]com/t1/",
                "description": "Vidar (botnet_cc)",
                "timestamp": "2026-10-19 15:10:48",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-19 21:01 IST",
                "tags": [
                    "verified"
                ],
                "addedAt": "2026-10-19T21:01:13.139727+05:30",
                "campaign": "Vidar",
                "confidence": "100%"
            },
            {
                "type": "url",
                "indicator": "hxxps://jh[.]abalbet[.]com/m/",
                "description": "Vidar (botnet_cc)",
                "timestamp": "2026-10-19 15:05:48",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-19 21:01 IST",
                "tags": [
                    "verified"
                ],
                "addedAt": "2026-10-19T21:01:13.139727+05:30",
                "campaign": "Vidar",
                "confidence": "100%"
            },
            {
                "type": "domain",
                "indicator": "zrmbta5x[.]coletteloire[.]rest",
                "description": "ClearFake (payload_delivery)",
                "timestamp": "2026-10-19 15:04:41",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-19 21:01 IST",
                "tags": [
                    "verified"
                ],
                "addedAt": "2026-10-19T21:01:13.139727+05:30",
                "campaign": "ClearFake",
                "confidence": "100%"
            },
            {
                "type": "url",
                "indicator": "hxxps://yx[.]abalbet[.]com/xq/",
                "description": "Vidar (botnet_cc)",
                "timestamp": "2026-10-19 15:00:49",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-19 21:01 IST",
                "tags": [
                    "verified"
                ],
                "addedAt": "2026-10-19T21:01:13.139727+05:30",
                "campaign": "Vidar",
                "confidence": "100%"
            },
            {
                "type": "url",
                "indicator": "hxxps://ou[.]9kio[.]org/c/",
                "description": "Vidar (botnet_cc)",
                "timestamp": "2026-10-19 15:00:48",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-19 21:01 IST",
                "tags": [
                    "verified"
                ],
                "addedAt": "2026-10-19T21:01:13.139727+05:30",
                "campaign": "Vidar",
                "confidence": "100%"
            },
            {
                "type": "url",
                "indicator": "hxxps://yx[.]abalbet[.]com/re/",
                "description": "Vidar (botnet_cc)",
                "timestamp": "2026-10-19 14:55:48",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-19 21:01 IST",
                "tags": [
                    "verified"
                ],
                "addedAt": "2026-10-19T21:01:13.139727+05:30",
                "campaign": "Vidar",
                "confidence": "100%"
            },
            {
                "type": "domain",
                "indicator": "msnbot-40-77-167-58[.]search[.]msn[.]com",
                "description": "php.shin_webshell (payload_delivery)",
                "timestamp": "2026-10-19 14:55:36",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-19 21:01 IST",
                "tags": [
                    "verified"
                ],
                "addedAt": "2026-10-19T21:01:13.139727+05:30",
                "campaign": "php.shin_webshell",
                "confidence": "50%"
            },
            {
                "type": "ip",
                "indicator": "202[.]146[.]222[.]95",
                "description": "ValleyRAT (botnet_cc)",
                "timestamp": "2026-10-19 14:55:24",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-19 21:01 IST",
                "tags": [
                    "botnet",
                    "verified",
                    "https://bazaar.abuse.ch/sample/1fa5a629fdc3033dc47b7de27924aaf02e37781bb8b0d281088100dd52ab6a8f/"
                ],
                "addedAt": "2026-10-19T21:01:13.139727+05:30",
                "campaign": "ValleyRAT",
                "confidence": "75%"
            },
            {
                "type": "hash",
                "indicator": "bde00783a8ded49c33508fc873fe17101ca02b6311584794741451b5bcc5af40",
                "description": "Mirai (payload)",
                "timestamp": "2026-10-19 14:54:12",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-19 21:01 IST",
                "tags": [
                    "malware",
                    "hash",
                    "verified"
                ],
                "addedAt": "2026-10-19T21:01:13.139727+05:30",
                "campaign": "Mirai",
                "confidence": "95%"
            },
            {
                "type": "domain",
                "indicator": "xvksxinh[.]coletteloire[.]rest",
                "description": "ClearFake (payload_delivery)",
                "timestamp": "2026-10-19 14:53:48",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-19 21:01 IST",
                "tags": [
                    "verified"
                ],
                "addedAt": "2026-10-19T21:01:13.139727+05:30",
                "campaign": "ClearFake",
                "confidence": "100%"
            }
        ],
        "lastUpdated": "2026-10-20T02:29:55.185981+05:30",
        "lastUpdatedFormatted": "Oct 20, 2026 at 02:29 AM IST",
        "lastUpdatedUtc": "2026-10-19 20:59 UTC"
    },
    "vendors": {
        "OpenPhish": {
            "description": "Real-time phishing URL feed updated every 15 minutes. Tracks active phishing sites targeting major brands and financial institutions.",
            "website": "https://openphish.com/",
            "updateFrequency": "Every 15 minutes",
            "iocCount": 765,
            "iocDataUrl": "https://thehgtech.com/ioc-data/openphish.json",
            "stats": {
                "total": 765,
                "newInLastHour": 300,
                "lastUpdate": "2026-10-19 20:59 UTC"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://xunqelo-mpt-favzari-h4d8me63[.]pages[.]dev/",
                "hxxp://sp23ct-ravem-biz-zulok-pelun[.]pages[.]dev/",
                "hxxp://zunqari-mpt-xavfelo-h6d4pe82[.]pages[.]dev/",
                "hxxps://www[.]webulpob[.]com/",
                "hxxps://io-bridge-terzor[.]pineapple[.]page/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 2582,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 2582,
                "newInLastHour": 179,
                "lastUpdate": "2026-10-19 20:59 UTC"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                "dbbbba24dd0193721515c7cbb5fee7e6bac923c9c045ef6acc69b9affeb18943",
                "ba8ef98b7975cf571ce64311854621947c3334065a7e541bc8d4ad3ca958e211",
                "05f0fa3c5bdcd6ea9afe90b9c4cbd1ba9be2603b3c77f1ce5d848766060a00d7",
                "17a617e9596d7a29aedd3afbbfd61456786801ad2bdbbb5c57e57ab0041bf279",
                "922b41f1fa5ba3c7ab3b27d1b56a8346e13bdd0c902b935724f391e2e10cef99"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1636,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1636,
                "newInLastHour": 0,
                "lastUpdate": "2026-10-19 20:59 UTC"
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
            "iocCount": 25107,
            "iocDataUrl": "https://thehgtech.com/ioc-data/cins-army.json",
            "stats": {
                "total": 25107,
                "newInLastHour": 15000,
                "lastUpdate": "2026-10-19 20:59 UTC"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]117[.]61[.]172",
                "1[.]14[.]149[.]30",
                "1[.]15[.]14[.]29",
                "1[.]177[.]162[.]4",
                "1[.]214[.]29[.]155"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 6608,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6608,
                "newInLastHour": 5201,
                "lastUpdate": "2026-10-19 20:59 UTC"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]117[.]73[.]220",
                "1[.]12[.]55[.]80",
                "1[.]12[.]70[.]212",
                "1[.]14[.]240[.]247",
                "1[.]14[.]94[.]193"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 34078,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 34078,
                "newInLastHour": 33677,
                "lastUpdate": "2026-10-19 20:59 UTC"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://42[.]52[.]30[.]36:49690/bin[.]sh",
                "hxxp://27[.]202[.]29[.]147:39265/i",
                "hxxp://123[.]10[.]156[.]124:55801/i",
                "hxxp://112[.]248[.]114[.]43:60811/i",
                "hxxp://125[.]45[.]54[.]47:59020/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 15141,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 15141,
                "newInLastHour": 5088,
                "lastUpdate": "2026-10-19 20:59 UTC"
            },
            "types": [
                "url",
                "hash",
                "domain",
                "ip"
            ],
            "sampleIndicators": [
                "1c42d0dcc75b8e43749b4b9d243ab63eb2bda47597640349f5eabe99c47b9ebb",
                "17a617e9596d7a29aedd3afbbfd61456786801ad2bdbbb5c57e57ab0041bf279",
                "922b41f1fa5ba3c7ab3b27d1b56a8346e13bdd0c902b935724f391e2e10cef99",
                "hxxps://kw[.]abalbet[.]com/cp7/",
                "hxxps://kw[.]abalbet[.]com/cqz/"
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
                "lastUpdate": "2026-10-19 20:59 UTC"
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
            "iocCount": 2369,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 2369,
                "newInLastHour": 0,
                "lastUpdate": "2026-10-19 20:59 UTC"
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
            "timestamp": "2026-10-19 21:01 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-19T21:01:14.442291+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "178[.]62[.]3[.]223",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-19 21:01 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-19T21:01:14.442291+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "27[.]133[.]154[.]218",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-19 21:01 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-19T21:01:14.442291+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "34[.]204[.]119[.]63",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-19 21:01 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-19T21:01:14.442291+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "50[.]16[.]16[.]211",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-19 21:01 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-19T21:01:14.442291+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "url",
            "indicator": "hxxps://jh[.]abalbet[.]com/o/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 15:20:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "ip",
            "indicator": "47[.]237[.]142[.]244",
            "description": "ValleyRAT (botnet_cc)",
            "timestamp": "2026-10-19 15:16:27",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "ValleyRAT",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://jh[.]abalbet[.]com/q/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 15:15:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "ip",
            "indicator": "45[.]203[.]220[.]49",
            "description": "ValleyRAT (botnet_cc)",
            "timestamp": "2026-10-19 15:15:28",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "botnet",
                "verified",
                "https://bazaar.abuse.ch/sample/58648467edabd8e8914b022a8d475bffc6db598086f4505e09815e9d02537f91/"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "ValleyRAT",
            "confidence": "75%"
        },
        {
            "type": "domain",
            "indicator": "audit[.]bitfetch[.]cc",
            "description": "ACR Stealer (botnet_cc)",
            "timestamp": "2026-10-19 15:12:30",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "ACR Stealer",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://jh[.]abalbet[.]com/t1/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 15:10:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://jh[.]abalbet[.]com/m/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 15:05:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "zrmbta5x[.]coletteloire[.]rest",
            "description": "ClearFake (payload_delivery)",
            "timestamp": "2026-10-19 15:04:41",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "ClearFake",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://yx[.]abalbet[.]com/xq/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 15:00:49",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://ou[.]9kio[.]org/c/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 15:00:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://yx[.]abalbet[.]com/re/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 14:55:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "msnbot-40-77-167-58[.]search[.]msn[.]com",
            "description": "php.shin_webshell (payload_delivery)",
            "timestamp": "2026-10-19 14:55:36",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "php.shin_webshell",
            "confidence": "50%"
        },
        {
            "type": "ip",
            "indicator": "202[.]146[.]222[.]95",
            "description": "ValleyRAT (botnet_cc)",
            "timestamp": "2026-10-19 14:55:24",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "botnet",
                "verified",
                "https://bazaar.abuse.ch/sample/1fa5a629fdc3033dc47b7de27924aaf02e37781bb8b0d281088100dd52ab6a8f/"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "ValleyRAT",
            "confidence": "75%"
        },
        {
            "type": "hash",
            "indicator": "bde00783a8ded49c33508fc873fe17101ca02b6311584794741451b5bcc5af40",
            "description": "Mirai (payload)",
            "timestamp": "2026-10-19 14:54:12",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "Mirai",
            "confidence": "95%"
        },
        {
            "type": "domain",
            "indicator": "xvksxinh[.]coletteloire[.]rest",
            "description": "ClearFake (payload_delivery)",
            "timestamp": "2026-10-19 14:53:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "ClearFake",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "l35ypax8[.]dlcore[.]cc",
            "description": "ClearFake (payload_delivery)",
            "timestamp": "2026-10-19 14:53:35",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "ClearFake",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "check3wdsorobot[.]cc",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-19 14:52:39",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "IClickFix",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://yx[.]abalbet[.]com/me/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 14:50:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://yx[.]abalbet[.]com/dx/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 14:45:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://yx[.]abalbet[.]com/os/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 14:40:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://yx[.]abalbet[.]com/o6/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 14:35:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "zsql3k3u[.]coletteloire[.]rest",
            "description": "ClearFake (payload_delivery)",
            "timestamp": "2026-10-19 14:33:29",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "ClearFake",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://ou[.]9kio[.]org/e/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 14:30:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://yx[.]abalbet[.]com/ee/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 14:30:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "4tmeijljqs[.]workers[.]dev",
            "description": "php.shin_webshell (payload_delivery)",
            "timestamp": "2026-10-19 14:29:54",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "php.shin_webshell",
            "confidence": "50%"
        },
        {
            "type": "url",
            "indicator": "hxxps://yx[.]abalbet[.]com/xu/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 14:25:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://yx[.]abalbet[.]com/vs/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 14:20:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "0aylp390[.]coletteloire[.]rest",
            "description": "ClearFake (payload_delivery)",
            "timestamp": "2026-10-19 14:17:28",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "ClearFake",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://yx[.]abalbet[.]com/rv/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 14:15:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://yx[.]abalbet[.]com/uy/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 14:10:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "ip",
            "indicator": "176[.]65[.]149[.]218",
            "description": "Remcos (botnet_cc)",
            "timestamp": "2026-10-19 14:10:45",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "Remcos",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://yx[.]abalbet[.]com/bi/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 14:05:49",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "jz[.]88idr[.]org",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 14:05:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://jz[.]88idr[.]org/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 14:05:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "xl[.]88qr[.]org",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 14:05:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://xl[.]88qr[.]org/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 14:05:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "ip",
            "indicator": "45[.]128[.]12[.]14",
            "description": "VShell (botnet_cc)",
            "timestamp": "2026-10-19 14:05:04",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "VShell",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://jz[.]88idr[.]org",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 14:03:01",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://xl[.]88qr[.]org",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 14:01:38",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://j[.]abalbet[.]com/wr8/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 14:00:49",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://ou[.]9kio[.]org/s/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 14:00:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://j[.]abalbet[.]com/f3/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 13:55:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "ppilipp[.]lol",
            "description": "KongTuke (payload_delivery)",
            "timestamp": "2026-10-19 13:55:25",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "KongTuke",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "deushack[.]org",
            "description": "donut_injector (payload_delivery)",
            "timestamp": "2026-10-19 13:55:24",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "donut_injector",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "f44a227e87d6ae4e2ac8d0ec5c206a7dfcddde8bfe2b05027bfa458b60e163ca",
            "description": "Bashlite (payload)",
            "timestamp": "2026-10-19 13:54:18",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "Bashlite",
            "confidence": "90%"
        },
        {
            "type": "hash",
            "indicator": "65a5c5011c2d1686ae033fe23f57893891d787f6d7abeb0434ba8fff709e12d2",
            "description": "Ngioweb (payload)",
            "timestamp": "2026-10-19 13:54:17",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "Ngioweb",
            "confidence": "90%"
        },
        {
            "type": "hash",
            "indicator": "3a713c5ce832c00a959f2603dd757e453c5b4b01b3d2f528ee4636db8c012777",
            "description": "Mirai (payload)",
            "timestamp": "2026-10-19 13:54:17",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "Mirai",
            "confidence": "90%"
        },
        {
            "type": "hash",
            "indicator": "7a522a8facd97df8ec3022376630080ee9e3b71e9e9a3a15fe60b3a1ce86f78c",
            "description": "Mirai (payload)",
            "timestamp": "2026-10-19 13:54:15",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "Mirai",
            "confidence": "90%"
        },
        {
            "type": "hash",
            "indicator": "5334c23e556a9a086b7477b532ea60498c2ad430070d1fdf364db44e91acb948",
            "description": "Mirai (payload)",
            "timestamp": "2026-10-19 13:54:14",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "Mirai",
            "confidence": "90%"
        },
        {
            "type": "hash",
            "indicator": "3e69aba01d901bdb3e2004fe01f13214ccdac3ff3db334f0c283efad4bf97e63",
            "description": "XOR DDoS (payload)",
            "timestamp": "2026-10-19 13:54:13",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "XOR DDoS",
            "confidence": "95%"
        },
        {
            "type": "hash",
            "indicator": "f4589b8c2868e25846e21b83519e8cd37fa6b86b46a130c41081d4eeb6908d9c",
            "description": "Mirai (payload)",
            "timestamp": "2026-10-19 13:54:11",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "Mirai",
            "confidence": "95%"
        },
        {
            "type": "domain",
            "indicator": "a6b22d76dd[.]scan[.]leakix[.]org",
            "description": "php.shin_webshell (payload_delivery)",
            "timestamp": "2026-10-19 13:51:03",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "php.shin_webshell",
            "confidence": "50%"
        },
        {
            "type": "domain",
            "indicator": "d5904e1cdf[.]scan[.]leakix[.]org",
            "description": "php.shin_webshell (payload_delivery)",
            "timestamp": "2026-10-19 13:50:56",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "php.shin_webshell",
            "confidence": "50%"
        },
        {
            "type": "url",
            "indicator": "hxxps://j[.]abalbet[.]com/ls/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 13:50:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "b781e0bb13[.]scan[.]leakix[.]org",
            "description": "php.shin_webshell (payload_delivery)",
            "timestamp": "2026-10-19 13:50:47",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "php.shin_webshell",
            "confidence": "50%"
        },
        {
            "type": "domain",
            "indicator": "ca7e79b6df[.]scan[.]leakix[.]org",
            "description": "php.shin_webshell (payload_delivery)",
            "timestamp": "2026-10-19 13:50:36",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "php.shin_webshell",
            "confidence": "50%"
        },
        {
            "type": "hash",
            "indicator": "1384a37d7b21a1cc8313e9b094c8d1e0cfbec72d5bf3a73d12c2506198fa6964",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-19 13:47:27",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://www.virustotal.com/gui/file/1384a37d7b21a1cc8313e9b094c8d1e0cfbec72d5bf3a73d12c2506198fa6964"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://j[.]abalbet[.]com/a6/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 13:45:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "626977f1481186fc0345d3ad0360b5dd217508385c41ad8c517152c853492d6e",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-19 13:44:53",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://www.virustotal.com/gui/file/626977f1481186fc0345d3ad0360b5dd217508385c41ad8c517152c853492d6e"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "caffe-img[.]com",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-19 13:43:28",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "IClickFix",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "39c8844fdc6d60a34652d4fd10020a7e4eb709d756b6eb5d9742c0c187e8a14d",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-19 13:42:04",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://www.virustotal.com/gui/file/39c8844fdc6d60a34652d4fd10020a7e4eb709d756b6eb5d9742c0c187e8a14d"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://j[.]abalbet[.]com/lf/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 13:40:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "815krissie[.]workers[.]dev",
            "description": "php.shin_webshell (payload_delivery)",
            "timestamp": "2026-10-19 13:40:02",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "php.shin_webshell",
            "confidence": "50%"
        },
        {
            "type": "hash",
            "indicator": "5a35a7d01bf531ebc10ed7caaa9c5cf54333659cb00b24098f8d0cbd1afbc419",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-19 13:38:39",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://www.virustotal.com/gui/file/5a35a7d01bf531ebc10ed7caaa9c5cf54333659cb00b24098f8d0cbd1afbc419"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "caffe-store-like[.]beer",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-19 13:37:41",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "IClickFix",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://j[.]abalbet[.]com/i19/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 13:35:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://ou[.]9kio[.]org/a/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 13:30:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://j[.]abalbet[.]com/y/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 13:30:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://j[.]abalbet[.]com/u/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 13:25:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "08e7c04e22c51313e5095f2db39e11fcc59adf56a63481ae92d8730e2788edc7",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-19 13:25:03",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://www.virustotal.com/gui/file/08e7c04e22c51313e5095f2db39e11fcc59adf56a63481ae92d8730e2788edc7"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://groverudder12[.]com/curl/c5iu9pzo7q/luav5qbvsjzop7b9s9[.]dat",
            "description": "AMOS (payload_delivery)",
            "timestamp": "2026-10-19 13:25:03",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "verified",
                "https://www.virustotal.com/gui/file/08e7c04e22c51313e5095f2db39e11fcc59adf56a63481ae92d8730e2788edc7"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://groverudder12[.]com/f/zpo1fmkdlnwfmgdkv1oi2w/ujdkhkau",
            "description": "AMOS (payload_delivery)",
            "timestamp": "2026-10-19 13:25:03",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "verified",
                "https://www.virustotal.com/gui/file/08e7c04e22c51313e5095f2db39e11fcc59adf56a63481ae92d8730e2788edc7"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "groverudder12[.]com",
            "description": "AMOS (payload_delivery)",
            "timestamp": "2026-10-19 13:25:03",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "verified",
                "https://www.virustotal.com/gui/file/08e7c04e22c51313e5095f2db39e11fcc59adf56a63481ae92d8730e2788edc7"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "d471401d8aee89447a9617a1b62fb393610627f89b6c6e983903479a9e186146",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-19 13:25:02",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://www.virustotal.com/gui/file/08e7c04e22c51313e5095f2db39e11fcc59adf56a63481ae92d8730e2788edc7"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://cloud-browse[.]codes",
            "description": "Unknown malware (payload_delivery)",
            "timestamp": "2026-10-19 13:22:00",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "malware",
                "verified"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "Unknown malware",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://j[.]abalbet[.]com/e5/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 13:20:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://j[.]abalbet[.]com/o/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 13:15:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "ip",
            "indicator": "96[.]62[.]71[.]6",
            "description": "Unknown malware (botnet_cc)",
            "timestamp": "2026-10-19 13:14:46",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "botnet",
                "verified",
                "https://bazaar.abuse.ch/sample/71d9c3ee5a1deab2f908c269b72242ea0820b69b871ad9ffe7d35f1091fdabd1/"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "Unknown malware",
            "confidence": "75%"
        },
        {
            "type": "domain",
            "indicator": "cloud-browse[.]codes",
            "description": "IClickFix (payload_delivery)",
            "timestamp": "2026-10-19 13:14:38",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "IClickFix",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://j[.]abalbet[.]com/k53/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 13:10:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "REMBXP[.]TOP",
            "description": "Remcos (botnet_cc)",
            "timestamp": "2026-10-19 13:10:22",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "verified",
                "https://bazaar.abuse.ch/sample/84cd8bf6fa43ffc59f3fb3046933be0c650ef063a106b92b020580b51bdc9288/"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "Remcos",
            "confidence": "75%"
        },
        {
            "type": "domain",
            "indicator": "xxx[.]sytes[.]net",
            "description": "Remcos (botnet_cc)",
            "timestamp": "2026-10-19 13:10:21",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "verified",
                "https://bazaar.abuse.ch/sample/84cd8bf6fa43ffc59f3fb3046933be0c650ef063a106b92b020580b51bdc9288/"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "Remcos",
            "confidence": "75%"
        },
        {
            "type": "domain",
            "indicator": "pm44[.]gotdns[.]ch",
            "description": "Remcos (botnet_cc)",
            "timestamp": "2026-10-19 13:10:21",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "verified",
                "https://bazaar.abuse.ch/sample/84cd8bf6fa43ffc59f3fb3046933be0c650ef063a106b92b020580b51bdc9288/"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "Remcos",
            "confidence": "75%"
        },
        {
            "type": "domain",
            "indicator": "wifihgu[.]duckdns[.]org",
            "description": "MooBot (botnet_cc)",
            "timestamp": "2026-10-19 13:06:08",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "verified",
                "https://bazaar.abuse.ch/sample/dc92065072ed7815c08f402351c3619c71345005aed0781abb9981559a6291c8/"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "MooBot",
            "confidence": "100%"
        },
        {
            "type": "ip",
            "indicator": "45[.]198[.]224[.]89",
            "description": "MooBot (botnet_cc)",
            "timestamp": "2026-10-19 13:06:02",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "botnet",
                "verified",
                "https://bazaar.abuse.ch/sample/dc92065072ed7815c08f402351c3619c71345005aed0781abb9981559a6291c8/"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "MooBot",
            "confidence": "75%"
        },
        {
            "type": "domain",
            "indicator": "ou[.]9kio[.]org",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 13:05:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://ou[.]9kio[.]org/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 13:05:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://j[.]abalbet[.]com/mx/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 13:05:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "ip",
            "indicator": "43[.]242[.]128[.]210",
            "description": "VShell (botnet_cc)",
            "timestamp": "2026-10-19 13:05:06",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "VShell",
            "confidence": "100%"
        },
        {
            "type": "ip",
            "indicator": "8[.]163[.]76[.]203",
            "description": "Unknown malware (botnet_cc)",
            "timestamp": "2026-10-19 13:05:05",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "Unknown malware",
            "confidence": "100%"
        },
        {
            "type": "ip",
            "indicator": "39[.]104[.]48[.]247",
            "description": "VShell (botnet_cc)",
            "timestamp": "2026-10-19 13:05:05",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "VShell",
            "confidence": "100%"
        },
        {
            "type": "ip",
            "indicator": "106[.]12[.]190[.]248",
            "description": "Sliver (botnet_cc)",
            "timestamp": "2026-10-19 13:01:55",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "Sliver",
            "confidence": "100%"
        },
        {
            "type": "ip",
            "indicator": "193[.]70[.]100[.]109",
            "description": "Sliver (botnet_cc)",
            "timestamp": "2026-10-19 13:01:54",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "Sliver",
            "confidence": "100%"
        },
        {
            "type": "ip",
            "indicator": "38[.]87[.]116[.]68",
            "description": "Sliver (botnet_cc)",
            "timestamp": "2026-10-19 13:01:54",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "Sliver",
            "confidence": "100%"
        },
        {
            "type": "ip",
            "indicator": "43[.]160[.]211[.]117",
            "description": "Sliver (botnet_cc)",
            "timestamp": "2026-10-19 13:01:53",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 21:01 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-19T21:01:13.139727+05:30",
            "campaign": "Sliver",
            "confidence": "100%"
        }
    ],
    "dailySummary": {
        "stats": {
            "totalIndicators": 95361,
            "activeSources": 9,
            "criticalAlerts": 49342,
            "activeCampaigns": 379
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 38096,
                "trend": "stable",
                "percentage": 2
            },
            {
                "category": "C2",
                "count": 11246,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 9047,
                "trend": "stable",
                "percentage": 2
            },
            {
                "category": "Phishing",
                "count": 767,
                "trend": "up",
                "percentage": 63
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
                "count": 34002,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://105[.]184[.]23[.]55:33643/i",
                    "hxxps://cloubflare[.]net/3600",
                    "hxxp://167[.]148[.]201[.]191/3600"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 24356,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]117[.]61[.]172",
                    "1[.]117[.]68[.]141",
                    "1[.]14[.]149[.]30"
                ]
            },
            {
                "name": "SSH Attacks",
                "count": 6191,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]12[.]70[.]212",
                    "1[.]14[.]240[.]247",
                    "1[.]15[.]106[.]134"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1692,
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
                "name": "Vidar",
                "count": 1680,
                "types": [
                    "ssl-cert",
                    "ip",
                    "hash",
                    "domain",
                    "url"
                ],
                "sampleIndicators": [
                    "7ed66e30a6b0c5eb8b7598c10edf420e04ed2ce1fbea8f875418f3f68d625691",
                    "d6eee4f0cab99699cf5b8a26dabf28b89aed4443d27b730b079a9df0097fef8d",
                    "3286ff477ccd888479b96d0ffb2bd53962862db7267a4bd1c8d8f8c22fec63d4"
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1646,
                "types": [
                    "ssl-cert",
                    "ip",
                    "hash",
                    "domain",
                    "url"
                ],
                "sampleIndicators": [
                    "fc255863ceab40f2510ddf29801e583015505861777f1c5d7e72ec164920f075",
                    "ca647b807e361ae45b779254dc17251364552d77ab354c90fdd73803ac5bca80",
                    "9c1a7c0df8bfa2e8a3c461d469545b47749a5f2de3289c9568698158d20ea8d1"
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
                "name": "Mirai",
                "count": 1216,
                "types": [
                    "ip",
                    "hash",
                    "domain",
                    "url"
                ],
                "sampleIndicators": [
                    "bde00783a8ded49c33508fc873fe17101ca02b6311584794741451b5bcc5af40",
                    "f4589b8c2868e25846e21b83519e8cd37fa6b86b46a130c41081d4eeb6908d9c",
                    "219b67e60b70649d8958e1add2f10eebbc024e0dace9e10497e2af09a58dd870"
                ]
            },
            {
                "name": "Cobalt Strike",
                "count": 1202,
                "types": [
                    "ip",
                    "domain"
                ],
                "sampleIndicators": [
                    "cdn[.]img[.]76e1e5fa[.]PNAlumni[.]dgitd[.]anchorbolnorth[.]com",
                    "upi[.]log[.]30ca777733df8aa6e4404bd8beadb65c36105e9346e15819152e9ecc4[.]fd746f6f221867dd6d504e00569cc108bbf5c5e0daf7628d26285775[.]86174a0a1dc3dd1625fc62e486572c26425c95ffef342f6dddb5ffe0[.]1b1f3f2edc[.]7605f6[.]pnalumni[.]dgitd[.]anchorbolnorth[.]com",
                    "43[.]136[.]92[.]170"
                ]
            },
            {
                "name": "Generic Phishing",
                "count": 764,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://xunqelo-mpt-favzari-h4d8me63[.]pages[.]dev/",
                    "hxxp://sp23ct-ravem-biz-zulok-pelun[.]pages[.]dev/",
                    "hxxp://zunqari-mpt-xavfelo-h6d4pe82[.]pages[.]dev/"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "CINS Threat List",
        "totalAttacksThisHour": 59450,
        "lastCalculated": "2026-10-20 02:29 IST"
    }
};
