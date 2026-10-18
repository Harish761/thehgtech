// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-19T03:53:17.408042+05:30 IST (2026-10-18 22:23 UTC)
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-19T03:53:16.703830+05:30",
    "lastUpdatedFormatted": "Oct 19, 2026 at 03:53 AM IST",
    "lastUpdatedUtc": "2026-10-18 22:23 UTC",
    "comparisonPeriod": "Oct 18 \u2013 Oct 19, 2026",
    "stats": {
        "totalIOCs": 87525,
        "byType": {
            "url": 42251,
            "ip": 27975,
            "hash": 2934,
            "domain": 2048,
            "ssl-cert": 10651,
            "ip-range": 1666
        },
        "byVendor": {
            "OpenPhish": 300,
            "Malware Bazaar": 1855,
            "Spamhaus DROP": 1666,
            "CINS Army": 20565,
            "Blocklist.de": 4727,
            "URLhaus": 33627,
            "ThreatFox": 14129,
            "Feodo Tracker": 5,
            "SSL Blacklist": 10651
        },
        "topMalware": [
            {
                "name": "AsyncRAT",
                "count": 1612,
                "types": [
                    "hash",
                    "ssl-cert",
                    "url",
                    "domain",
                    "ip"
                ]
            },
            {
                "name": "Vidar",
                "count": 1363,
                "types": [
                    "hash",
                    "ssl-cert",
                    "url",
                    "domain",
                    "ip"
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
                "count": 1200,
                "types": [
                    "domain",
                    "ip"
                ]
            },
            {
                "name": "Mirai",
                "count": 1081,
                "types": [
                    "url",
                    "domain",
                    "hash",
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
                "count": 707,
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
                "count": 557,
                "types": [
                    "hash",
                    "ssl-cert"
                ]
            },
            {
                "name": "OffLoader",
                "count": 520,
                "types": [
                    "ssl-cert"
                ]
            },
            {
                "name": "ConnectWise",
                "count": 466,
                "types": [
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
            }
        ],
        "recentIOCs": [
            {
                "type": "ip",
                "indicator": "162[.]243[.]103[.]246",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-10-19 02:27 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-10-19 02:27 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-10-19T02:27:51.766704+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "178[.]62[.]3[.]223",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-10-19 02:27 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-10-19 02:27 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-10-19T02:27:51.766704+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "27[.]133[.]154[.]218",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-10-19 02:27 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-10-19 02:27 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-10-19T02:27:51.766704+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "34[.]204[.]119[.]63",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-10-19 02:27 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-10-19 02:27 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-10-19T02:27:51.766704+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "50[.]16[.]16[.]211",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-10-19 02:27 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-10-19 02:27 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-10-19T02:27:51.766704+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "hash",
                "indicator": "d5e4db7daf438660a0659b8eb31f5c4c2fb7c47f56440aef79d30bd1c78cf328",
                "description": "Unknown Loader (payload)",
                "timestamp": "2026-10-18 20:54:02",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-19 02:27 IST",
                "tags": [
                    "malware",
                    "hash",
                    "verified"
                ],
                "addedAt": "2026-10-19T02:27:50.116795+05:30",
                "campaign": "Unknown Loader",
                "confidence": "80%"
            },
            {
                "type": "url",
                "indicator": "hxxps://pw[.]9windaftar[.]com/m/",
                "description": "Vidar (botnet_cc)",
                "timestamp": "2026-10-18 20:50:48",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-19 02:27 IST",
                "tags": [
                    "verified"
                ],
                "addedAt": "2026-10-19T02:27:50.116795+05:30",
                "campaign": "Vidar",
                "confidence": "100%"
            },
            {
                "type": "url",
                "indicator": "hxxps://pw[.]9windaftar[.]com/jk/",
                "description": "Vidar (botnet_cc)",
                "timestamp": "2026-10-18 20:45:48",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-19 02:27 IST",
                "tags": [
                    "verified"
                ],
                "addedAt": "2026-10-19T02:27:50.116795+05:30",
                "campaign": "Vidar",
                "confidence": "100%"
            },
            {
                "type": "url",
                "indicator": "hxxps://pw[.]9windaftar[.]com/mw/",
                "description": "Vidar (botnet_cc)",
                "timestamp": "2026-10-18 20:40:48",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-19 02:27 IST",
                "tags": [
                    "verified"
                ],
                "addedAt": "2026-10-19T02:27:50.116795+05:30",
                "campaign": "Vidar",
                "confidence": "100%"
            },
            {
                "type": "domain",
                "indicator": "proxy-us-east003-cip12[.]ahrefs[.]net",
                "description": "php.shin_webshell (payload_delivery)",
                "timestamp": "2026-10-18 20:37:24",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-19 02:27 IST",
                "tags": [
                    "verified"
                ],
                "addedAt": "2026-10-19T02:27:50.116795+05:30",
                "campaign": "php.shin_webshell",
                "confidence": "50%"
            },
            {
                "type": "url",
                "indicator": "hxxps://pw[.]9windaftar[.]com/eu/",
                "description": "Vidar (botnet_cc)",
                "timestamp": "2026-10-18 20:35:48",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-19 02:27 IST",
                "tags": [
                    "verified"
                ],
                "addedAt": "2026-10-19T02:27:50.116795+05:30",
                "campaign": "Vidar",
                "confidence": "100%"
            },
            {
                "type": "url",
                "indicator": "hxxps://o7[.]9kio[.]org/f/",
                "description": "Vidar (botnet_cc)",
                "timestamp": "2026-10-18 20:30:48",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-19 02:27 IST",
                "tags": [
                    "verified"
                ],
                "addedAt": "2026-10-19T02:27:50.116795+05:30",
                "campaign": "Vidar",
                "confidence": "100%"
            },
            {
                "type": "url",
                "indicator": "hxxps://pw[.]9windaftar[.]com/gv2/",
                "description": "Vidar (botnet_cc)",
                "timestamp": "2026-10-18 20:30:48",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-19 02:27 IST",
                "tags": [
                    "verified"
                ],
                "addedAt": "2026-10-19T02:27:50.116795+05:30",
                "campaign": "Vidar",
                "confidence": "100%"
            },
            {
                "type": "hash",
                "indicator": "0f15e62f49dbbc90c604ee07ef8eb716d2f68435767a486631d470def6ebeb36",
                "description": "AMOS (payload)",
                "timestamp": "2026-10-18 20:27:03",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-19 02:27 IST",
                "tags": [
                    "malware",
                    "hash",
                    "verified",
                    "https://www.virustotal.com/gui/file/0f15e62f49dbbc90c604ee07ef8eb716d2f68435767a486631d470def6ebeb36"
                ],
                "addedAt": "2026-10-19T02:27:50.116795+05:30",
                "campaign": "AMOS",
                "confidence": "100%"
            },
            {
                "type": "url",
                "indicator": "hxxps://pw[.]9windaftar[.]com/lb/",
                "description": "Vidar (botnet_cc)",
                "timestamp": "2026-10-18 20:25:48",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-19 02:27 IST",
                "tags": [
                    "verified"
                ],
                "addedAt": "2026-10-19T02:27:50.116795+05:30",
                "campaign": "Vidar",
                "confidence": "100%"
            },
            {
                "type": "url",
                "indicator": "hxxps://pw[.]9windaftar[.]com/nf5/",
                "description": "Vidar (botnet_cc)",
                "timestamp": "2026-10-18 20:20:48",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-19 02:27 IST",
                "tags": [
                    "verified"
                ],
                "addedAt": "2026-10-19T02:27:50.116795+05:30",
                "campaign": "Vidar",
                "confidence": "100%"
            },
            {
                "type": "url",
                "indicator": "hxxps://pw[.]9windaftar[.]com/lr/",
                "description": "Vidar (botnet_cc)",
                "timestamp": "2026-10-18 20:15:48",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-19 02:27 IST",
                "tags": [
                    "verified"
                ],
                "addedAt": "2026-10-19T02:27:50.116795+05:30",
                "campaign": "Vidar",
                "confidence": "100%"
            },
            {
                "type": "url",
                "indicator": "hxxps://pw[.]9windaftar[.]com/ht/",
                "description": "Vidar (botnet_cc)",
                "timestamp": "2026-10-18 20:10:48",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-19 02:27 IST",
                "tags": [
                    "verified"
                ],
                "addedAt": "2026-10-19T02:27:50.116795+05:30",
                "campaign": "Vidar",
                "confidence": "100%"
            },
            {
                "type": "ip",
                "indicator": "159[.]89[.]170[.]166",
                "description": "Remus (botnet_cc)",
                "timestamp": "2026-10-18 20:10:21",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-19 02:27 IST",
                "tags": [
                    "botnet",
                    "verified"
                ],
                "addedAt": "2026-10-19T02:27:50.116795+05:30",
                "campaign": "Remus",
                "confidence": "100%"
            },
            {
                "type": "url",
                "indicator": "hxxps://pw[.]9windaftar[.]com/qjt/",
                "description": "Vidar (botnet_cc)",
                "timestamp": "2026-10-18 20:05:48",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-19 02:27 IST",
                "tags": [
                    "verified"
                ],
                "addedAt": "2026-10-19T02:27:50.116795+05:30",
                "campaign": "Vidar",
                "confidence": "100%"
            }
        ],
        "lastUpdated": "2026-10-19T03:53:16.703830+05:30",
        "lastUpdatedFormatted": "Oct 19, 2026 at 03:53 AM IST",
        "lastUpdatedUtc": "2026-10-18 22:23 UTC"
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
                "lastUpdate": "2026-10-18 22:22 UTC"
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
            "iocCount": 1861,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1861,
                "newInLastHour": 6,
                "lastUpdate": "2026-10-18 22:22 UTC"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                "438b9c35cc8b0a24b63848f50b934c03479937e0ec10a2424c904686aebbac46",
                "cf54666174d7e8b7c3b2077029476608b570d65b1b3b58c1c0b03663555d1527",
                "188a79e5b0aeb2656c15fc167bac923b94752b98996f1981e95c173729ce7a0f",
                "f731bd0c7a45984dc706a425ae02844dcf20b357cee27c60e407e0ca1a2aefa2",
                "dfadfad813e1fcdbad43cc2b26e1a2ad8c3bac2665e760803aa9c7b234528fca"
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
                "newInLastHour": 25,
                "lastUpdate": "2026-10-18 22:22 UTC"
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
            "iocCount": 21194,
            "iocDataUrl": "https://thehgtech.com/ioc-data/cins-army.json",
            "stats": {
                "total": 21194,
                "newInLastHour": 15000,
                "lastUpdate": "2026-10-18 22:22 UTC"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]117[.]58[.]215",
                "1[.]12[.]229[.]231",
                "1[.]14[.]149[.]30",
                "1[.]179[.]240[.]111",
                "1[.]192[.]129[.]106"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4771,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4771,
                "newInLastHour": 4364,
                "lastUpdate": "2026-10-18 22:22 UTC"
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
            "iocCount": 33672,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 33672,
                "newInLastHour": 33672,
                "lastUpdate": "2026-10-18 22:22 UTC"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://103[.]249[.]199[.]5:55492/i",
                "hxxp://111[.]196[.]8[.]68:58777/i",
                "hxxp://59[.]96[.]137[.]253:48155/i",
                "hxxp://42[.]85[.]50[.]94:37254/i",
                "hxxp://182[.]127[.]69[.]150:44146/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 14159,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 14159,
                "newInLastHour": 5510,
                "lastUpdate": "2026-10-18 22:22 UTC"
            },
            "types": [
                "url",
                "domain",
                "hash",
                "ip"
            ],
            "sampleIndicators": [
                "hxxps://z[.]9wing[.]org/x/",
                "caveresorts[.]com",
                "hxxps://z[.]9wing[.]org/eo/",
                "e[.]88idr[.]org",
                "hxxps://e[.]88idr[.]org/"
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
                "lastUpdate": "2026-10-18 22:23 UTC"
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
            "iocCount": 10651,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10651,
                "newInLastHour": 0,
                "lastUpdate": "2026-10-18 22:23 UTC"
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
            "timestamp": "2026-10-19 02:27 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-19T02:27:51.766704+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "178[.]62[.]3[.]223",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-19 02:27 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-19T02:27:51.766704+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "27[.]133[.]154[.]218",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-19 02:27 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-19T02:27:51.766704+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "34[.]204[.]119[.]63",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-19 02:27 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-19T02:27:51.766704+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "50[.]16[.]16[.]211",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-19 02:27 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-19T02:27:51.766704+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "hash",
            "indicator": "d5e4db7daf438660a0659b8eb31f5c4c2fb7c47f56440aef79d30bd1c78cf328",
            "description": "Unknown Loader (payload)",
            "timestamp": "2026-10-18 20:54:02",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
            "campaign": "Unknown Loader",
            "confidence": "80%"
        },
        {
            "type": "url",
            "indicator": "hxxps://pw[.]9windaftar[.]com/m/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-18 20:50:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://pw[.]9windaftar[.]com/jk/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-18 20:45:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://pw[.]9windaftar[.]com/mw/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-18 20:40:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "proxy-us-east003-cip12[.]ahrefs[.]net",
            "description": "php.shin_webshell (payload_delivery)",
            "timestamp": "2026-10-18 20:37:24",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
            "campaign": "php.shin_webshell",
            "confidence": "50%"
        },
        {
            "type": "url",
            "indicator": "hxxps://pw[.]9windaftar[.]com/eu/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-18 20:35:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://o7[.]9kio[.]org/f/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-18 20:30:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://pw[.]9windaftar[.]com/gv2/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-18 20:30:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "0f15e62f49dbbc90c604ee07ef8eb716d2f68435767a486631d470def6ebeb36",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-18 20:27:03",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://www.virustotal.com/gui/file/0f15e62f49dbbc90c604ee07ef8eb716d2f68435767a486631d470def6ebeb36"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://pw[.]9windaftar[.]com/lb/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-18 20:25:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://pw[.]9windaftar[.]com/nf5/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-18 20:20:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://pw[.]9windaftar[.]com/lr/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-18 20:15:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://pw[.]9windaftar[.]com/ht/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-18 20:10:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "ip",
            "indicator": "159[.]89[.]170[.]166",
            "description": "Remus (botnet_cc)",
            "timestamp": "2026-10-18 20:10:21",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
            "campaign": "Remus",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://pw[.]9windaftar[.]com/qjt/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-18 20:05:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "ip",
            "indicator": "163[.]7[.]0[.]131",
            "description": "VShell (botnet_cc)",
            "timestamp": "2026-10-18 20:05:05",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
            "campaign": "VShell",
            "confidence": "100%"
        },
        {
            "type": "ip",
            "indicator": "96[.]62[.]218[.]236",
            "description": "Havoc (botnet_cc)",
            "timestamp": "2026-10-18 20:05:04",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
            "campaign": "Havoc",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "cyqafagi[.]workers[.]dev",
            "description": "php.shin_webshell (payload_delivery)",
            "timestamp": "2026-10-18 20:03:56",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
            "campaign": "php.shin_webshell",
            "confidence": "50%"
        },
        {
            "type": "url",
            "indicator": "hxxps://o7[.]9kio[.]org/r/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-18 20:00:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://qp[.]9windaftar[.]com/nm/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-18 20:00:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://www[.]ufa365[.]academy/",
            "description": "Unknown malware (payload_delivery)",
            "timestamp": "2026-10-18 20:00:22",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "malware",
                "verified",
                "https://clickfix.carsonww.com/domains/www.ufa365.academy"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
            "campaign": "Unknown malware",
            "confidence": "90%"
        },
        {
            "type": "url",
            "indicator": "hxxps://qp[.]9windaftar[.]com/ln/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-18 19:55:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://qp[.]9windaftar[.]com/kf/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-18 19:50:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://qp[.]9windaftar[.]com/ny/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-18 19:45:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "ip",
            "indicator": "94[.]154[.]32[.]8",
            "description": "PureRAT (botnet_cc)",
            "timestamp": "2026-10-18 19:45:39",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
            "campaign": "PureRAT",
            "confidence": "75%"
        },
        {
            "type": "ip",
            "indicator": "91[.]92[.]243[.]15",
            "description": "AsyncRAT (botnet_cc)",
            "timestamp": "2026-10-18 19:45:35",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
            "campaign": "AsyncRAT",
            "confidence": "75%"
        },
        {
            "type": "ip",
            "indicator": "89[.]31[.]121[.]156",
            "description": "AdaptixC2 (botnet_cc)",
            "timestamp": "2026-10-18 19:45:33",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "c2",
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
            "campaign": "AdaptixC2",
            "confidence": "75%"
        },
        {
            "type": "ip",
            "indicator": "82[.]47[.]180[.]159",
            "description": "PureRAT (botnet_cc)",
            "timestamp": "2026-10-18 19:45:30",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
            "campaign": "PureRAT",
            "confidence": "75%"
        },
        {
            "type": "ip",
            "indicator": "46[.]246[.]84[.]14",
            "description": "AsyncRAT (botnet_cc)",
            "timestamp": "2026-10-18 19:45:13",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
            "campaign": "AsyncRAT",
            "confidence": "75%"
        },
        {
            "type": "ip",
            "indicator": "45[.]92[.]1[.]84",
            "description": "PureRAT (botnet_cc)",
            "timestamp": "2026-10-18 19:45:10",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
            "campaign": "PureRAT",
            "confidence": "75%"
        },
        {
            "type": "ip",
            "indicator": "45[.]153[.]34[.]173",
            "description": "PureRAT (botnet_cc)",
            "timestamp": "2026-10-18 19:45:01",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
            "campaign": "PureRAT",
            "confidence": "75%"
        },
        {
            "type": "ip",
            "indicator": "39[.]105[.]125[.]235",
            "description": "Unknown malware (botnet_cc)",
            "timestamp": "2026-10-18 19:44:56",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
            "campaign": "Unknown malware",
            "confidence": "75%"
        },
        {
            "type": "ip",
            "indicator": "37[.]104[.]21[.]124",
            "description": "Havoc (botnet_cc)",
            "timestamp": "2026-10-18 19:44:52",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
            "campaign": "Havoc",
            "confidence": "75%"
        },
        {
            "type": "ip",
            "indicator": "23[.]227[.]203[.]71",
            "description": "AdaptixC2 (botnet_cc)",
            "timestamp": "2026-10-18 19:44:45",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "c2",
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
            "campaign": "AdaptixC2",
            "confidence": "75%"
        },
        {
            "type": "ip",
            "indicator": "207[.]56[.]30[.]177",
            "description": "PureRAT (botnet_cc)",
            "timestamp": "2026-10-18 19:44:18",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
            "campaign": "PureRAT",
            "confidence": "75%"
        },
        {
            "type": "ip",
            "indicator": "207[.]56[.]30[.]181",
            "description": "PureRAT (botnet_cc)",
            "timestamp": "2026-10-18 19:44:18",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
            "campaign": "PureRAT",
            "confidence": "75%"
        },
        {
            "type": "ip",
            "indicator": "185[.]147[.]159[.]251",
            "description": "Unknown malware (botnet_cc)",
            "timestamp": "2026-10-18 19:43:57",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
            "campaign": "Unknown malware",
            "confidence": "75%"
        },
        {
            "type": "ip",
            "indicator": "181[.]235[.]13[.]54",
            "description": "AsyncRAT (botnet_cc)",
            "timestamp": "2026-10-18 19:43:56",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
            "campaign": "AsyncRAT",
            "confidence": "75%"
        },
        {
            "type": "ip",
            "indicator": "144[.]172[.]86[.]231",
            "description": "AsyncRAT (botnet_cc)",
            "timestamp": "2026-10-18 19:43:27",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
            "campaign": "AsyncRAT",
            "confidence": "75%"
        },
        {
            "type": "ip",
            "indicator": "140[.]228[.]29[.]65",
            "description": "PureRAT (botnet_cc)",
            "timestamp": "2026-10-18 19:43:25",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
            "campaign": "PureRAT",
            "confidence": "75%"
        },
        {
            "type": "ip",
            "indicator": "13[.]140[.]145[.]60",
            "description": "PureRAT (botnet_cc)",
            "timestamp": "2026-10-18 19:43:19",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
            "campaign": "PureRAT",
            "confidence": "75%"
        },
        {
            "type": "ip",
            "indicator": "102[.]220[.]161[.]219",
            "description": "PureRAT (botnet_cc)",
            "timestamp": "2026-10-18 19:43:05",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
            "campaign": "PureRAT",
            "confidence": "75%"
        },
        {
            "type": "url",
            "indicator": "hxxps://qp[.]9windaftar[.]com/fc/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-18 19:40:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://qp[.]9windaftar[.]com/x0/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-18 19:35:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://qp[.]9windaftar[.]com/tvu/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-18 19:30:50",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://o7[.]9kio[.]org/h/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-18 19:30:49",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://sexstories[.]beauty/",
            "description": "Unknown malware (payload_delivery)",
            "timestamp": "2026-10-18 19:30:23",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "malware",
                "verified",
                "https://clickfix.carsonww.com/domains/sexstories.beauty"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
            "campaign": "Unknown malware",
            "confidence": "90%"
        },
        {
            "type": "url",
            "indicator": "hxxps://qp[.]9windaftar[.]com/h5/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-18 19:25:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "227[.]73[.]178[.]34[.]bc[.]googleusercontent[.]com",
            "description": "php.shin_webshell (payload_delivery)",
            "timestamp": "2026-10-18 19:21:07",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
            "campaign": "php.shin_webshell",
            "confidence": "50%"
        },
        {
            "type": "url",
            "indicator": "hxxps://qp[.]9windaftar[.]com/yq/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-18 19:20:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://qp[.]9windaftar[.]com/nj/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-18 19:15:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://qp[.]9windaftar[.]com/e67/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-18 19:10:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "ip",
            "indicator": "102[.]220[.]161[.]196",
            "description": "Remcos (botnet_cc)",
            "timestamp": "2026-10-18 19:10:04",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
            "campaign": "Remcos",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "o7[.]9kio[.]org",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-18 19:05:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://o7[.]9kio[.]org/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-18 19:05:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://qp[.]9windaftar[.]com/dk/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-18 19:05:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "ip",
            "indicator": "154[.]12[.]17[.]103",
            "description": "Cobalt Strike (botnet_cc)",
            "timestamp": "2026-10-18 19:05:08",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
            "campaign": "Cobalt Strike",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://b[.]99rtp[.]net/v/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-18 19:00:49",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://b[.]9windaftar[.]com/x2/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-18 19:00:49",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://b[.]9windaftar[.]com/jz/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-18 18:55:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "melisandra11[.]workers[.]dev",
            "description": "php.shin_webshell (payload_delivery)",
            "timestamp": "2026-10-18 18:51:35",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
            "campaign": "php.shin_webshell",
            "confidence": "50%"
        },
        {
            "type": "url",
            "indicator": "hxxps://b[.]9windaftar[.]com/j5/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-18 18:50:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://b[.]9windaftar[.]com/k90/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-18 18:45:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://b[.]9windaftar[.]com/l/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-18 18:40:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "bulkcompressimages[.]com",
            "description": "ClearFake (payload_delivery)",
            "timestamp": "2026-10-18 18:40:02",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
            "campaign": "ClearFake",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://b[.]9windaftar[.]com/ov/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-18 18:35:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://b[.]99rtp[.]net/u/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-18 18:30:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://b[.]9windaftar[.]com/w7/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-18 18:30:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://temdetudoecommerce[.]com/",
            "description": "Unknown malware (payload_delivery)",
            "timestamp": "2026-10-18 18:30:47",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "malware",
                "verified",
                "https://clickfix.carsonww.com/domains/temdetudoecommerce.com"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
            "campaign": "Unknown malware",
            "confidence": "90%"
        },
        {
            "type": "url",
            "indicator": "hxxps://warpfins[.]com/",
            "description": "Unknown malware (payload_delivery)",
            "timestamp": "2026-10-18 18:30:47",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "malware",
                "verified",
                "https://clickfix.carsonww.com/domains/warpfins.com"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
            "campaign": "Unknown malware",
            "confidence": "90%"
        },
        {
            "type": "url",
            "indicator": "hxxps://v2[.]bulwarrestauracja[.]pl/",
            "description": "Unknown malware (payload_delivery)",
            "timestamp": "2026-10-18 18:30:46",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "malware",
                "verified",
                "https://clickfix.carsonww.com/domains/v2.bulwarrestauracja.pl"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
            "campaign": "Unknown malware",
            "confidence": "90%"
        },
        {
            "type": "url",
            "indicator": "hxxps://ufakick[.]group/",
            "description": "Unknown malware (payload_delivery)",
            "timestamp": "2026-10-18 18:30:46",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "malware",
                "verified",
                "https://clickfix.carsonww.com/domains/ufakick.group"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
            "campaign": "Unknown malware",
            "confidence": "90%"
        },
        {
            "type": "url",
            "indicator": "hxxps://tuasesorcontable[.]com[.]co/",
            "description": "Unknown malware (payload_delivery)",
            "timestamp": "2026-10-18 18:30:46",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "malware",
                "verified",
                "https://clickfix.carsonww.com/domains/tuasesorcontable.com.co"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
            "campaign": "Unknown malware",
            "confidence": "90%"
        },
        {
            "type": "url",
            "indicator": "hxxps://sandandgarden[.]com[.]mx/",
            "description": "Unknown malware (payload_delivery)",
            "timestamp": "2026-10-18 18:30:46",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "malware",
                "verified",
                "https://clickfix.carsonww.com/domains/sandandgarden.com.mx"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
            "campaign": "Unknown malware",
            "confidence": "90%"
        },
        {
            "type": "url",
            "indicator": "hxxps://visadubai[.]com[.]vn/",
            "description": "Unknown malware (payload_delivery)",
            "timestamp": "2026-10-18 18:30:46",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "malware",
                "verified",
                "https://clickfix.carsonww.com/domains/visadubai.com.vn"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
            "campaign": "Unknown malware",
            "confidence": "90%"
        },
        {
            "type": "url",
            "indicator": "hxxps://www[.]yumweb[.]com/",
            "description": "Unknown malware (payload_delivery)",
            "timestamp": "2026-10-18 18:30:46",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "malware",
                "verified",
                "https://clickfix.carsonww.com/domains/www.yumweb.com"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
            "campaign": "Unknown malware",
            "confidence": "90%"
        },
        {
            "type": "url",
            "indicator": "hxxps://zmops[.]io/",
            "description": "Unknown malware (payload_delivery)",
            "timestamp": "2026-10-18 18:30:46",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "malware",
                "verified",
                "https://clickfix.carsonww.com/domains/zmops.io"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
            "campaign": "Unknown malware",
            "confidence": "90%"
        },
        {
            "type": "url",
            "indicator": "hxxps://xocdiapro[.]co/",
            "description": "Unknown malware (payload_delivery)",
            "timestamp": "2026-10-18 18:30:46",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "malware",
                "verified",
                "https://clickfix.carsonww.com/domains/xocdiapro.co"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
            "campaign": "Unknown malware",
            "confidence": "90%"
        },
        {
            "type": "url",
            "indicator": "hxxps://zenithcomputers[.]com/",
            "description": "Unknown malware (payload_delivery)",
            "timestamp": "2026-10-18 18:30:46",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "malware",
                "verified",
                "https://clickfix.carsonww.com/domains/zenithcomputers.com"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
            "campaign": "Unknown malware",
            "confidence": "90%"
        },
        {
            "type": "url",
            "indicator": "hxxps://b[.]9windaftar[.]com/bp/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-18 18:25:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
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
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
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
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
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
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "verified",
                "https://honeylabs.net/lookup/190.196.253.19"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
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
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "verified",
                "https://honeylabs.net/lookup/176.65.139.76"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
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
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "verified",
                "https://honeylabs.net/lookup/124.29.251.100"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
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
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
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
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
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
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
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
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
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
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
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
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
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
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
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
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
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
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "malware",
                "verified",
                "https://clickfix.carsonww.com/domains/roadracerx.com"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
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
            "analysisTime": "2026-10-19 02:27 IST",
            "tags": [
                "malware",
                "verified",
                "https://clickfix.carsonww.com/domains/prefirobh.com.br"
            ],
            "addedAt": "2026-10-19T02:27:50.116795+05:30",
            "campaign": "Unknown malware",
            "confidence": "90%"
        }
    ],
    "dailySummary": {
        "stats": {
            "totalIndicators": 87525,
            "activeSources": 9,
            "criticalAlerts": 47790,
            "activeCampaigns": 347
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 36891,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10899,
                "trend": "stable",
                "percentage": -3
            },
            {
                "category": "Botnet",
                "count": 8667,
                "trend": "stable",
                "percentage": 0
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
                "count": 33627,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://115[.]58[.]96[.]86:53524/bin[.]sh",
                    "hxxp://115[.]48[.]163[.]254:44939/i",
                    "hxxp://115[.]57[.]61[.]62:58706/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 20565,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]12[.]229[.]231",
                    "1[.]14[.]149[.]30",
                    "1[.]192[.]129[.]106"
                ]
            },
            {
                "name": "SSH Attacks",
                "count": 4727,
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
                "count": 1666,
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
                "count": 1612,
                "types": [
                    "hash",
                    "ssl-cert",
                    "url",
                    "domain",
                    "ip"
                ],
                "sampleIndicators": [
                    "00fb522f8d19a1ee3fa1d23c55d55134454fb9067474d836dfd9019c948d0e9e",
                    "91[.]92[.]243[.]15",
                    "46[.]246[.]84[.]14"
                ]
            },
            {
                "name": "Vidar",
                "count": 1363,
                "types": [
                    "hash",
                    "ssl-cert",
                    "url",
                    "domain",
                    "ip"
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
                "count": 1200,
                "types": [
                    "domain",
                    "ip"
                ],
                "sampleIndicators": [
                    "154[.]12[.]17[.]103",
                    "119[.]45[.]236[.]76",
                    "91[.]201[.]115[.]193"
                ]
            },
            {
                "name": "Mirai",
                "count": 1081,
                "types": [
                    "url",
                    "domain",
                    "hash",
                    "ip"
                ],
                "sampleIndicators": [
                    "f0978d161433b3100de3b086fd47afe0efa50a51d7f0faef027ee0657c1fd796",
                    "dfb27e3e219613753b8863632ac2eb22c8efcefffef84793711f7dca1ce4cd4a",
                    "8773fd21bedae76d17c18dab95b3079316f9c2fc2fb53ef3b4e64039d9cd28ba"
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
        "totalAttacksThisHour": 58882,
        "lastCalculated": "2026-10-19 03:53 IST"
    }
};
