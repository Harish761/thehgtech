// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-20T04:04:17.263184+05:30 IST (2026-10-19 22:34 UTC)
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-20T04:04:16.591627+05:30",
    "lastUpdatedFormatted": "Oct 20, 2026 at 04:04 AM IST",
    "lastUpdatedUtc": "2026-10-19 22:34 UTC",
    "comparisonPeriod": "Oct 19 \u2013 Oct 20, 2026",
    "stats": {
        "totalIOCs": 88291,
        "byType": {
            "url": 43584,
            "ip": 34531,
            "hash": 3976,
            "domain": 2195,
            "ssl-cert": 2369,
            "ip-range": 1636
        },
        "byVendor": {
            "OpenPhish": 765,
            "Malware Bazaar": 2582,
            "Spamhaus DROP": 1636,
            "CINS Army": 25107,
            "Blocklist.de": 6608,
            "URLhaus": 34078,
            "ThreatFox": 15141,
            "Feodo Tracker": 5,
            "SSL Blacklist": 2369
        },
        "topMalware": [
            {
                "name": "Vidar",
                "count": 1557,
                "types": [
                    "ip",
                    "ssl-cert",
                    "url",
                    "hash",
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
                "name": "Mirai",
                "count": 1264,
                "types": [
                    "domain",
                    "ip",
                    "url",
                    "hash"
                ]
            },
            {
                "name": "Cobalt Strike",
                "count": 1203,
                "types": [
                    "domain",
                    "ip"
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
                "name": "PureRAT",
                "count": 450,
                "types": [
                    "ip",
                    "hash",
                    "ssl-cert"
                ]
            },
            {
                "name": "js.iclickfix",
                "count": 437,
                "types": [
                    "url"
                ]
            },
            {
                "name": "Mirai",
                "count": 418,
                "types": [
                    "hash"
                ]
            },
            {
                "name": "Unknown Loader",
                "count": 414,
                "types": [
                    "domain",
                    "ip",
                    "url",
                    "hash"
                ]
            },
            {
                "name": "AMOS",
                "count": 393,
                "types": [
                    "domain",
                    "url",
                    "hash"
                ]
            },
            {
                "name": "win.asyncrat",
                "count": 367,
                "types": [
                    "url"
                ]
            },
            {
                "name": "win.vshell",
                "count": 300,
                "types": [
                    "url"
                ]
            }
        ],
        "recentIOCs": [
            {
                "type": "ip",
                "indicator": "162[.]243[.]103[.]246",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-10-20 02:29 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-10-20 02:29 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-10-20T02:29:51.704280+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "178[.]62[.]3[.]223",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-10-20 02:29 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-10-20 02:29 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-10-20T02:29:51.704280+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "27[.]133[.]154[.]218",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-10-20 02:29 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-10-20 02:29 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-10-20T02:29:51.704280+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "34[.]204[.]119[.]63",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-10-20 02:29 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-10-20 02:29 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-10-20T02:29:51.704280+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "50[.]16[.]16[.]211",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-10-20 02:29 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-10-20 02:29 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-10-20T02:29:51.704280+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "hash",
                "indicator": "1c42d0dcc75b8e43749b4b9d243ab63eb2bda47597640349f5eabe99c47b9ebb",
                "description": "Mirai (payload)",
                "timestamp": "2026-10-19 20:54:16",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-20 02:29 IST",
                "tags": [
                    "malware",
                    "hash",
                    "verified"
                ],
                "addedAt": "2026-10-20T02:29:50.080914+05:30",
                "campaign": "Mirai",
                "confidence": "90%"
            },
            {
                "type": "hash",
                "indicator": "17a617e9596d7a29aedd3afbbfd61456786801ad2bdbbb5c57e57ab0041bf279",
                "description": "Mirai (payload)",
                "timestamp": "2026-10-19 20:54:15",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-20 02:29 IST",
                "tags": [
                    "malware",
                    "hash",
                    "verified"
                ],
                "addedAt": "2026-10-20T02:29:50.080914+05:30",
                "campaign": "Mirai",
                "confidence": "95%"
            },
            {
                "type": "hash",
                "indicator": "922b41f1fa5ba3c7ab3b27d1b56a8346e13bdd0c902b935724f391e2e10cef99",
                "description": "Mirai (payload)",
                "timestamp": "2026-10-19 20:54:14",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-20 02:29 IST",
                "tags": [
                    "malware",
                    "hash",
                    "verified"
                ],
                "addedAt": "2026-10-20T02:29:50.080914+05:30",
                "campaign": "Mirai",
                "confidence": "95%"
            },
            {
                "type": "url",
                "indicator": "hxxps://kw[.]abalbet[.]com/cp7/",
                "description": "Vidar (botnet_cc)",
                "timestamp": "2026-10-19 20:50:48",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-20 02:29 IST",
                "tags": [
                    "verified"
                ],
                "addedAt": "2026-10-20T02:29:50.080914+05:30",
                "campaign": "Vidar",
                "confidence": "100%"
            },
            {
                "type": "url",
                "indicator": "hxxps://kw[.]abalbet[.]com/cqz/",
                "description": "Vidar (botnet_cc)",
                "timestamp": "2026-10-19 20:45:48",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-20 02:29 IST",
                "tags": [
                    "verified"
                ],
                "addedAt": "2026-10-20T02:29:50.080914+05:30",
                "campaign": "Vidar",
                "confidence": "100%"
            },
            {
                "type": "url",
                "indicator": "hxxps://kw[.]abalbet[.]com/dz/",
                "description": "Vidar (botnet_cc)",
                "timestamp": "2026-10-19 20:40:48",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-20 02:29 IST",
                "tags": [
                    "verified"
                ],
                "addedAt": "2026-10-20T02:29:50.080914+05:30",
                "campaign": "Vidar",
                "confidence": "100%"
            },
            {
                "type": "url",
                "indicator": "hxxps://kg[.]abalbet[.]com/qr",
                "description": "Vidar (botnet_cc)",
                "timestamp": "2026-10-19 20:39:22",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-20 02:29 IST",
                "tags": [
                    "verified"
                ],
                "addedAt": "2026-10-20T02:29:50.080914+05:30",
                "campaign": "Vidar",
                "confidence": "100%"
            },
            {
                "type": "url",
                "indicator": "hxxps://rq[.]abalbet[.]com/zv",
                "description": "Vidar (botnet_cc)",
                "timestamp": "2026-10-19 20:36:51",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-20 02:29 IST",
                "tags": [
                    "verified"
                ],
                "addedAt": "2026-10-20T02:29:50.080914+05:30",
                "campaign": "Vidar",
                "confidence": "100%"
            },
            {
                "type": "url",
                "indicator": "hxxps://kw[.]abalbet[.]com/gp/",
                "description": "Vidar (botnet_cc)",
                "timestamp": "2026-10-19 20:35:50",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-20 02:29 IST",
                "tags": [
                    "verified"
                ],
                "addedAt": "2026-10-20T02:29:50.080914+05:30",
                "campaign": "Vidar",
                "confidence": "100%"
            },
            {
                "type": "domain",
                "indicator": "5e5am0xh[.]lanternglow[.]cc",
                "description": "ClearFake (payload_delivery)",
                "timestamp": "2026-10-19 20:33:28",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-20 02:29 IST",
                "tags": [
                    "verified"
                ],
                "addedAt": "2026-10-20T02:29:50.080914+05:30",
                "campaign": "ClearFake",
                "confidence": "100%"
            },
            {
                "type": "url",
                "indicator": "hxxps://kw[.]abalbet[.]com/h1/",
                "description": "Vidar (botnet_cc)",
                "timestamp": "2026-10-19 20:30:48",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-20 02:29 IST",
                "tags": [
                    "verified"
                ],
                "addedAt": "2026-10-20T02:29:50.080914+05:30",
                "campaign": "Vidar",
                "confidence": "100%"
            },
            {
                "type": "domain",
                "indicator": "dosur98665[.]workers[.]dev",
                "description": "php.shin_webshell (payload_delivery)",
                "timestamp": "2026-10-19 20:29:20",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-20 02:29 IST",
                "tags": [
                    "verified"
                ],
                "addedAt": "2026-10-20T02:29:50.080914+05:30",
                "campaign": "php.shin_webshell",
                "confidence": "50%"
            },
            {
                "type": "domain",
                "indicator": "lanternglow[.]cc",
                "description": "ClearFake (payload_delivery)",
                "timestamp": "2026-10-19 20:29:18",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-20 02:29 IST",
                "tags": [
                    "verified"
                ],
                "addedAt": "2026-10-20T02:29:50.080914+05:30",
                "campaign": "ClearFake",
                "confidence": "100%"
            },
            {
                "type": "domain",
                "indicator": "honeytrail[.]cc",
                "description": "ClearFake (payload_delivery)",
                "timestamp": "2026-10-19 20:27:24",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-20 02:29 IST",
                "tags": [
                    "verified"
                ],
                "addedAt": "2026-10-20T02:29:50.080914+05:30",
                "campaign": "ClearFake",
                "confidence": "100%"
            },
            {
                "type": "url",
                "indicator": "hxxps://kw[.]abalbet[.]com/q8/",
                "description": "Vidar (botnet_cc)",
                "timestamp": "2026-10-19 20:25:48",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-20 02:29 IST",
                "tags": [
                    "verified"
                ],
                "addedAt": "2026-10-20T02:29:50.080914+05:30",
                "campaign": "Vidar",
                "confidence": "100%"
            }
        ],
        "lastUpdated": "2026-10-20T04:04:16.591627+05:30",
        "lastUpdatedFormatted": "Oct 20, 2026 at 04:04 AM IST",
        "lastUpdatedUtc": "2026-10-19 22:34 UTC"
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
                "lastUpdate": "2026-10-19 22:34 UTC"
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
            "iocCount": 2634,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 2634,
                "newInLastHour": 52,
                "lastUpdate": "2026-10-19 22:34 UTC"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                "2854d1697442e2bd6db359e57bcb038e1c21e66ae26f8efd8d3beb2f842097b4",
                "d915335056e9f49fce328fef87e9fa05d227a5ca477933f370c2c56f54f6ab02",
                "407d806eaa8b298a82b47be263844f5cf460a9543c59b2d48485d017df46229e",
                "5c82799ac0b7a0cdee9bf7726afa45f0f37a7f1bb364b7d1d7ce2a4e9566ca0f",
                "a436ac961ce25a0072fbafb8c1937a94b8c900e3ac512a5aa32ecf4610f2260e"
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
                "newInLastHour": 56,
                "lastUpdate": "2026-10-19 22:34 UTC"
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
            "iocCount": 25664,
            "iocDataUrl": "https://thehgtech.com/ioc-data/cins-army.json",
            "stats": {
                "total": 25664,
                "newInLastHour": 15000,
                "lastUpdate": "2026-10-19 22:34 UTC"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]117[.]61[.]172",
                "1[.]117[.]68[.]141",
                "1[.]14[.]149[.]30",
                "1[.]15[.]14[.]29",
                "1[.]177[.]162[.]4"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 6689,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6689,
                "newInLastHour": 5241,
                "lastUpdate": "2026-10-19 22:34 UTC"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]117[.]73[.]220",
                "1[.]12[.]36[.]175",
                "1[.]12[.]55[.]80",
                "1[.]12[.]70[.]212",
                "1[.]14[.]240[.]247"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 34089,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 34089,
                "newInLastHour": 33688,
                "lastUpdate": "2026-10-19 22:34 UTC"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://27[.]44[.]146[.]42:38129/i",
                "hxxp://61[.]53[.]82[.]240:56561/bin[.]sh",
                "hxxp://117[.]223[.]140[.]202:46714/i",
                "hxxp://123[.]4[.]184[.]108:39954/i",
                "hxxp://182[.]124[.]72[.]63:53782/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 15187,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 15187,
                "newInLastHour": 4907,
                "lastUpdate": "2026-10-19 22:34 UTC"
            },
            "types": [
                "domain",
                "ip",
                "url",
                "hash"
            ],
            "sampleIndicators": [
                "2970e8113c21fbbbadd88ffef710c891dbe76f63240e86f63eea5805db494c17",
                "ce932136f1a892a9640babd29b1eb7fcae6bf72fda91550d3c651f202c0b9fd7",
                "hxxps://t8[.]abanda88[.]org/vs/",
                "1e7cc2bd060683795a7bfa0ee3610e6b896c71ad20677b65ccde4278594911f9",
                "hxxps://t8[.]abanda88[.]org/h/"
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
                "lastUpdate": "2026-10-19 22:34 UTC"
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
                "newInLastHour": 8628,
                "lastUpdate": "2026-10-19 22:34 UTC"
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
            "timestamp": "2026-10-20 02:29 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-20T02:29:51.704280+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "178[.]62[.]3[.]223",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-20 02:29 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-20T02:29:51.704280+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "27[.]133[.]154[.]218",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-20 02:29 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-20T02:29:51.704280+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "34[.]204[.]119[.]63",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-20 02:29 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-20T02:29:51.704280+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "50[.]16[.]16[.]211",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-20 02:29 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-20T02:29:51.704280+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "hash",
            "indicator": "1c42d0dcc75b8e43749b4b9d243ab63eb2bda47597640349f5eabe99c47b9ebb",
            "description": "Mirai (payload)",
            "timestamp": "2026-10-19 20:54:16",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "Mirai",
            "confidence": "90%"
        },
        {
            "type": "hash",
            "indicator": "17a617e9596d7a29aedd3afbbfd61456786801ad2bdbbb5c57e57ab0041bf279",
            "description": "Mirai (payload)",
            "timestamp": "2026-10-19 20:54:15",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "Mirai",
            "confidence": "95%"
        },
        {
            "type": "hash",
            "indicator": "922b41f1fa5ba3c7ab3b27d1b56a8346e13bdd0c902b935724f391e2e10cef99",
            "description": "Mirai (payload)",
            "timestamp": "2026-10-19 20:54:14",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "Mirai",
            "confidence": "95%"
        },
        {
            "type": "url",
            "indicator": "hxxps://kw[.]abalbet[.]com/cp7/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 20:50:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://kw[.]abalbet[.]com/cqz/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 20:45:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://kw[.]abalbet[.]com/dz/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 20:40:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://kg[.]abalbet[.]com/qr",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 20:39:22",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://rq[.]abalbet[.]com/zv",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 20:36:51",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://kw[.]abalbet[.]com/gp/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 20:35:50",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "5e5am0xh[.]lanternglow[.]cc",
            "description": "ClearFake (payload_delivery)",
            "timestamp": "2026-10-19 20:33:28",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "ClearFake",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://kw[.]abalbet[.]com/h1/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 20:30:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "dosur98665[.]workers[.]dev",
            "description": "php.shin_webshell (payload_delivery)",
            "timestamp": "2026-10-19 20:29:20",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "php.shin_webshell",
            "confidence": "50%"
        },
        {
            "type": "domain",
            "indicator": "lanternglow[.]cc",
            "description": "ClearFake (payload_delivery)",
            "timestamp": "2026-10-19 20:29:18",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "ClearFake",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "honeytrail[.]cc",
            "description": "ClearFake (payload_delivery)",
            "timestamp": "2026-10-19 20:27:24",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "ClearFake",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://kw[.]abalbet[.]com/q8/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 20:25:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://kw[.]abalbet[.]com/sm7/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 20:20:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://kw[.]abalbet[.]com/x8/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 20:15:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "4a8a816b4a098236f12eb1b1f1f259143509bd79e907762ebf6a99352f34e9f7",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-19 20:12:31",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://www.virustotal.com/gui/file/4a8a816b4a098236f12eb1b1f1f259143509bd79e907762ebf6a99352f34e9f7"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://kw[.]abalbet[.]com/gk/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 20:10:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://kw[.]abalbet[.]com/ws/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 20:05:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "36e8a6ec8e4a8bd397e51e55b9fc970d9a3b768fdd66e6b89913492ccbc6023e",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-19 20:05:23",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://www.virustotal.com/gui/file/36e8a6ec8e4a8bd397e51e55b9fc970d9a3b768fdd66e6b89913492ccbc6023e"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "ip",
            "indicator": "102[.]205[.]170[.]11",
            "description": "Quasar RAT (botnet_cc)",
            "timestamp": "2026-10-19 20:05:07",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "Quasar RAT",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "d3b6ed3442f8195b3d33b5293abdc5cce173bf2528f947634773464ae931cc70",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-19 20:02:44",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://www.virustotal.com/gui/file/d3b6ed3442f8195b3d33b5293abdc5cce173bf2528f947634773464ae931cc70"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://172[.]104[.]203[.]148",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 20:01:22",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://h[.]9qoi[.]org/z",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 20:01:09",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://kg[.]abalbet[.]com/v/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 20:00:49",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "87d29dca3253ac908990ffab6e9a177209394f6cbaf45b1817433452e2b2d97a",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-19 19:59:23",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://www.virustotal.com/gui/file/87d29dca3253ac908990ffab6e9a177209394f6cbaf45b1817433452e2b2d97a"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://kg[.]abalbet[.]com/r4/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 19:55:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "88ce6edaaadd692355c7a9136ec2abbf628d7298348ea899044ac6e1ddce849b",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-19 19:54:31",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://www.virustotal.com/gui/file/88ce6edaaadd692355c7a9136ec2abbf628d7298348ea899044ac6e1ddce849b"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "f2e8327e5d3e7b1d22c524f4d2c884a9c8db374c082ef96b9c70aaf4170736a2",
            "description": "Mirai (payload)",
            "timestamp": "2026-10-19 19:54:13",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "Mirai",
            "confidence": "95%"
        },
        {
            "type": "domain",
            "indicator": "kihcaneu[.]kakekmain[.]com",
            "description": "ClearFake (payload_delivery)",
            "timestamp": "2026-10-19 19:51:30",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "ClearFake",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://kg[.]abalbet[.]com/hw/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 19:50:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "0e20f67fdad9148a186f0fa99cefb448bccdce7220484f173e05add736fa3815",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-19 19:50:10",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://www.virustotal.com/gui/file/0e20f67fdad9148a186f0fa99cefb448bccdce7220484f173e05add736fa3815"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "b8b361af2f4795689feedb9aef172bd5d0288642354fa1aed9c0624b94fb2d3b",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-19 19:47:21",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://www.virustotal.com/gui/file/b8b361af2f4795689feedb9aef172bd5d0288642354fa1aed9c0624b94fb2d3b"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://kg[.]abalbet[.]com/sc/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 19:45:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "ip",
            "indicator": "92[.]4[.]168[.]97",
            "description": "Unknown malware (botnet_cc)",
            "timestamp": "2026-10-19 19:45:36",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "Unknown malware",
            "confidence": "75%"
        },
        {
            "type": "ip",
            "indicator": "69[.]5[.]53[.]89",
            "description": "Unknown malware (botnet_cc)",
            "timestamp": "2026-10-19 19:45:25",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "Unknown malware",
            "confidence": "75%"
        },
        {
            "type": "ip",
            "indicator": "57[.]129[.]168[.]220",
            "description": "Havoc (botnet_cc)",
            "timestamp": "2026-10-19 19:45:20",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "Havoc",
            "confidence": "75%"
        },
        {
            "type": "ip",
            "indicator": "45[.]76[.]155[.]242",
            "description": "Sliver (botnet_cc)",
            "timestamp": "2026-10-19 19:45:09",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "Sliver",
            "confidence": "75%"
        },
        {
            "type": "ip",
            "indicator": "27[.]124[.]17[.]190",
            "description": "PureRAT (botnet_cc)",
            "timestamp": "2026-10-19 19:44:47",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "PureRAT",
            "confidence": "75%"
        },
        {
            "type": "ip",
            "indicator": "27[.]124[.]17[.]194",
            "description": "PureRAT (botnet_cc)",
            "timestamp": "2026-10-19 19:44:47",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "PureRAT",
            "confidence": "75%"
        },
        {
            "type": "ip",
            "indicator": "3[.]109[.]17[.]133",
            "description": "Unknown malware (botnet_cc)",
            "timestamp": "2026-10-19 19:44:47",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "Unknown malware",
            "confidence": "75%"
        },
        {
            "type": "ip",
            "indicator": "27[.]124[.]17[.]187",
            "description": "PureRAT (botnet_cc)",
            "timestamp": "2026-10-19 19:44:46",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "PureRAT",
            "confidence": "75%"
        },
        {
            "type": "ip",
            "indicator": "217[.]217[.]97[.]76",
            "description": "Unknown malware (botnet_cc)",
            "timestamp": "2026-10-19 19:44:39",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "Unknown malware",
            "confidence": "75%"
        },
        {
            "type": "ip",
            "indicator": "172[.]86[.]82[.]140",
            "description": "PureRAT (botnet_cc)",
            "timestamp": "2026-10-19 19:43:52",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "PureRAT",
            "confidence": "75%"
        },
        {
            "type": "ip",
            "indicator": "13[.]140[.]145[.]60",
            "description": "PureRAT (botnet_cc)",
            "timestamp": "2026-10-19 19:43:20",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "PureRAT",
            "confidence": "75%"
        },
        {
            "type": "ip",
            "indicator": "107[.]182[.]130[.]44",
            "description": "PureRAT (botnet_cc)",
            "timestamp": "2026-10-19 19:43:14",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "PureRAT",
            "confidence": "75%"
        },
        {
            "type": "url",
            "indicator": "hxxps://kg[.]abalbet[.]com/i4/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 19:40:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://kg[.]abalbet[.]com/j6/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 19:35:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "rarejisa[.]workers[.]dev",
            "description": "php.shin_webshell (payload_delivery)",
            "timestamp": "2026-10-19 19:34:10",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "php.shin_webshell",
            "confidence": "50%"
        },
        {
            "type": "url",
            "indicator": "hxxps://mf[.]9qoi[.]org/u/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 19:30:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://kg[.]abalbet[.]com/np/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 19:30:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "e296e230bdda3e0b2d190f99f7005bbaa1433a0519d8dba43df5c1f252b9040c",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-19 19:26:49",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://www.virustotal.com/gui/file/e296e230bdda3e0b2d190f99f7005bbaa1433a0519d8dba43df5c1f252b9040c"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://kg[.]abalbet[.]com/v3/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 19:25:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://kg[.]abalbet[.]com/df/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 19:20:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "310c1b73b9c35ece8bdae14dcce18fab947e52a4c21fc12b4642c1ffd3db790c",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-19 19:20:42",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://www.virustotal.com/gui/file/310c1b73b9c35ece8bdae14dcce18fab947e52a4c21fc12b4642c1ffd3db790c"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "zipoj1hh[.]blinkhorizon[.]com",
            "description": "ClearFake (payload_delivery)",
            "timestamp": "2026-10-19 19:20:32",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "ClearFake",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://calciteperistyle[.]info/identity/claims-asset[.]js",
            "description": "SmartApeSG (payload_delivery)",
            "timestamp": "2026-10-19 19:18:26",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "SmartApeSG",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://kg[.]abalbet[.]com/ts/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 19:15:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "f0a60a57d3c07eb3b0db2218b3d67363c255ba75f418b111b72ac0f83c29f72d",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-19 19:14:36",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://bazaar.abuse.ch/sample/f0a60a57d3c07eb3b0db2218b3d67363c255ba75f418b111b72ac0f83c29f72d/"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://kg[.]abalbet[.]com/zf/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 19:10:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "ip",
            "indicator": "147[.]124[.]212[.]179",
            "description": "Remcos (botnet_cc)",
            "timestamp": "2026-10-19 19:10:04",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "Remcos",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "5cb67ed0bad9f06e7ef81be6d83a445a0784c6f9a2bcc8df27922b9a626908f9",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-19 19:08:28",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://www.virustotal.com/gui/file/5cb67ed0bad9f06e7ef81be6d83a445a0784c6f9a2bcc8df27922b9a626908f9"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "mf[.]9qoi[.]org",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 19:05:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://mf[.]9qoi[.]org/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 19:05:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://kg[.]abalbet[.]com/h/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 19:05:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "ip",
            "indicator": "103[.]236[.]84[.]103",
            "description": "Cobalt Strike (botnet_cc)",
            "timestamp": "2026-10-19 19:05:04",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "Cobalt Strike",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://rq[.]abalbet[.]com/iq/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 19:00:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "90d519148ea37faabe97f95e529bb3de04e38b73e02722ef1b5d76b9c60df5ee",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-19 18:57:20",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://www.virustotal.com/gui/file/90d519148ea37faabe97f95e529bb3de04e38b73e02722ef1b5d76b9c60df5ee"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://rq[.]abalbet[.]com/nj/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 18:55:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://rq[.]abalbet[.]com/ac/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 18:50:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://rq[.]abalbet[.]com/iu8/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 18:45:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "ip",
            "indicator": "209[.]99[.]191[.]10",
            "description": "Remcos (botnet_cc)",
            "timestamp": "2026-10-19 18:43:19",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "Remcos",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://rq[.]abalbet[.]com/x4/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 18:40:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://rq[.]abalbet[.]com/zv/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 18:35:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://h[.]9qoi[.]org/z/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 18:30:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://rq[.]abalbet[.]com/ec/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 18:30:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://rq[.]abalbet[.]com/rs/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 18:25:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "fuhakafe[.]workers[.]dev",
            "description": "php.shin_webshell (payload_delivery)",
            "timestamp": "2026-10-19 18:24:04",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "php.shin_webshell",
            "confidence": "50%"
        },
        {
            "type": "url",
            "indicator": "hxxps://rq[.]abalbet[.]com/qa/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 18:20:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxp://111[.]92[.]157[.]249:42021/Mozi[.]m",
            "description": "Mozi (payload_delivery)",
            "timestamp": "2026-10-19 18:19:01",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "verified",
                "https://honeylabs.net/lookup/111.92.157.249"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "Mozi",
            "confidence": "75%"
        },
        {
            "type": "url",
            "indicator": "hxxp://153[.]117[.]37[.]137:52583/Mozi[.]m",
            "description": "Mozi (payload_delivery)",
            "timestamp": "2026-10-19 18:19:01",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "verified",
                "https://honeylabs.net/lookup/153.117.37.137"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "Mozi",
            "confidence": "75%"
        },
        {
            "type": "ip",
            "indicator": "128[.]90[.]108[.]139",
            "description": "Remcos (botnet_cc)",
            "timestamp": "2026-10-19 18:15:51",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "Remcos",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://rq[.]abalbet[.]com/bo/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 18:15:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://rq[.]abalbet[.]com/yj/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 18:10:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "qmyxmc8z[.]activeloop[.]cc",
            "description": "ClearFake (payload_delivery)",
            "timestamp": "2026-10-19 18:10:07",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "ClearFake",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://rq[.]abalbet[.]com/m2/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 18:05:49",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "sn[.]88idr[.]org",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 18:05:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://sn[.]88idr[.]org/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 18:05:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "l[.]88qr[.]org",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 18:05:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://l[.]88qr[.]org/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 18:05:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "activeloop[.]cc",
            "description": "ClearFake (payload_delivery)",
            "timestamp": "2026-10-19 18:04:43",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "ClearFake",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://sn[.]88idr[.]org",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 18:02:44",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://l[.]88qr[.]org",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 18:01:41",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://h[.]9qoi[.]org/c/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-19 18:00:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-20 02:29 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-20T02:29:50.080914+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        }
    ],
    "dailySummary": {
        "stats": {
            "totalIndicators": 88291,
            "activeSources": 9,
            "criticalAlerts": 41018,
            "activeCampaigns": 305
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 38373,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 9167,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "C2",
                "count": 2645,
                "trend": "down",
                "percentage": -76
            },
            {
                "category": "Phishing",
                "count": 767,
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
                "count": 34078,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://42[.]52[.]30[.]36:49690/bin[.]sh",
                    "hxxp://27[.]202[.]29[.]147:39265/i",
                    "hxxp://123[.]10[.]156[.]124:55801/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 25107,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]117[.]61[.]172",
                    "1[.]14[.]149[.]30",
                    "1[.]15[.]14[.]29"
                ]
            },
            {
                "name": "SSH Attacks",
                "count": 6608,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]117[.]73[.]220",
                    "1[.]12[.]55[.]80",
                    "1[.]12[.]70[.]212"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1636,
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
                "count": 1557,
                "types": [
                    "ip",
                    "ssl-cert",
                    "url",
                    "hash",
                    "domain"
                ],
                "sampleIndicators": [
                    "379a2944024fe73ff4af0d02eeb4764918f3009aa236207e0edd616cbfb84ccc",
                    "0d8f1752831cd45fbf6e4786cfd7e36997ab9835efdcfb7950b1db52e59f63f2",
                    "7ed66e30a6b0c5eb8b7598c10edf420e04ed2ce1fbea8f875418f3f68d625691"
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
                "count": 1264,
                "types": [
                    "domain",
                    "ip",
                    "url",
                    "hash"
                ],
                "sampleIndicators": [
                    "17a617e9596d7a29aedd3afbbfd61456786801ad2bdbbb5c57e57ab0041bf279",
                    "922b41f1fa5ba3c7ab3b27d1b56a8346e13bdd0c902b935724f391e2e10cef99",
                    "f2e8327e5d3e7b1d22c524f4d2c884a9c8db374c082ef96b9c70aaf4170736a2"
                ]
            },
            {
                "name": "Cobalt Strike",
                "count": 1203,
                "types": [
                    "domain",
                    "ip"
                ],
                "sampleIndicators": [
                    "103[.]236[.]84[.]103",
                    "cdn[.]img[.]76e1e5fa[.]PNAlumni[.]dgitd[.]anchorbolnorth[.]com",
                    "upi[.]log[.]30ca777733df8aa6e4404bd8beadb65c36105e9346e15819152e9ecc4[.]fd746f6f221867dd6d504e00569cc108bbf5c5e0daf7628d26285775[.]86174a0a1dc3dd1625fc62e486572c26425c95ffef342f6dddb5ffe0[.]1b1f3f2edc[.]7605f6[.]pnalumni[.]dgitd[.]anchorbolnorth[.]com"
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
            },
            {
                "name": " \"elf.mirai\"",
                "count": 703,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"96ae59861488057af96d1ef61f9afa73fb3b46684d941e0d92de0a33e892b879\"",
                    " \"5a97ccdebd3aceeee438032c9e264df20ee41d30d1e4b87f5eb04ed05a234387\"",
                    " \"93d89d70e6882448f1a727922d0eabc413f235ff14dde23f7e1da9d769a987fb\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "AsyncRAT",
        "totalAttacksThisHour": 67877,
        "lastCalculated": "2026-10-20 04:04 IST"
    }
};
