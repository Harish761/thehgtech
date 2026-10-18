// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-19T02:27:56.069488+05:30 IST (2026-10-18 20:57 UTC)
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-19T02:27:55.521320+05:30",
    "lastUpdatedFormatted": "Oct 19, 2026 at 02:27 AM IST",
    "lastUpdatedUtc": "2026-10-18 20:57 UTC",
    "comparisonPeriod": "Oct 18 \u2013 Oct 19, 2026",
    "stats": {
        "totalIOCs": 87220,
        "byType": {
            "url": 42226,
            "ip": 27339,
            "hash": 2921,
            "domain": 2046,
            "ssl-cert": 10997,
            "ip-range": 1691
        },
        "byVendor": {
            "OpenPhish": 300,
            "Malware Bazaar": 1844,
            "Spamhaus DROP": 1691,
            "CINS Army": 19966,
            "Blocklist.de": 4692,
            "URLhaus": 33617,
            "ThreatFox": 14108,
            "Feodo Tracker": 5,
            "SSL Blacklist": 10997
        },
        "topMalware": [
            {
                "name": "AsyncRAT",
                "count": 1629,
                "types": [
                    "domain",
                    "ip",
                    "hash",
                    "url",
                    "ssl-cert"
                ]
            },
            {
                "name": "Vidar",
                "count": 1427,
                "types": [
                    "domain",
                    "ip",
                    "hash",
                    "url",
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
                "count": 1200,
                "types": [
                    "domain",
                    "ip"
                ]
            },
            {
                "name": "Mirai",
                "count": 1078,
                "types": [
                    "domain",
                    "ip",
                    "url",
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
                    "ssl-cert",
                    "hash"
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
                    "ssl-cert",
                    "hash"
                ]
            },
            {
                "name": "PureRAT",
                "count": 450,
                "types": [
                    "ssl-cert",
                    "ip",
                    "hash"
                ]
            }
        ],
        "recentIOCs": [
            {
                "type": "ssl-cert",
                "indicator": "7fc6c2a32eed69593d705df8d2f29de51da78e0b",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-10-11 14:47:53",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-19 01:30 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-19T01:30:18.491588+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "17658c947940cef2209381bda159a44a8f55883c",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-10-11 07:00:52",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-19 01:30 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-19T01:30:18.491588+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ip",
                "indicator": "162[.]243[.]103[.]246",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-10-19 01:30 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-10-19 01:30 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-10-19T01:30:17.205903+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "178[.]62[.]3[.]223",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-10-19 01:30 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-10-19 01:30 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-10-19T01:30:17.205903+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "27[.]133[.]154[.]218",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-10-19 01:30 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-10-19 01:30 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-10-19T01:30:17.205903+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "34[.]204[.]119[.]63",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-10-19 01:30 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-10-19 01:30 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-10-19T01:30:17.205903+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "50[.]16[.]16[.]211",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-10-19 01:30 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-10-19 01:30 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-10-19T01:30:17.205903+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "hash",
                "indicator": "345fd6e63c2c817ff28ac5e4fc6792e8ada4efadebe6a3692f334300fb35b187",
                "description": "Mirai (payload)",
                "timestamp": "2026-10-18 19:54:05",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-19 01:30 IST",
                "tags": [
                    "malware",
                    "hash",
                    "verified"
                ],
                "addedAt": "2026-10-19T01:30:15.737857+05:30",
                "campaign": "Mirai",
                "confidence": "90%"
            },
            {
                "type": "hash",
                "indicator": "74c6f27ce2a20dd393e72bb54293cfece0cb05e599ff0010607f29e7c8a0f5dc",
                "description": "Mirai (payload)",
                "timestamp": "2026-10-18 19:54:04",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-19 01:30 IST",
                "tags": [
                    "malware",
                    "hash",
                    "verified"
                ],
                "addedAt": "2026-10-19T01:30:15.737857+05:30",
                "campaign": "Mirai",
                "confidence": "90%"
            },
            {
                "type": "hash",
                "indicator": "9bd0fcad7e6ca59c3caeed5b9fae6ecb499d274bfff2042a855f7b9f5b3b1657",
                "description": "Mirai (payload)",
                "timestamp": "2026-10-18 19:54:03",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-19 01:30 IST",
                "tags": [
                    "malware",
                    "hash",
                    "verified"
                ],
                "addedAt": "2026-10-19T01:30:15.737857+05:30",
                "campaign": "Mirai",
                "confidence": "90%"
            },
            {
                "type": "hash",
                "indicator": "26f91ce3d8ee20dd027d4de026d6e5dd08604b6bec6b3142b55749150493285c",
                "description": "Mirai (payload)",
                "timestamp": "2026-10-18 19:54:01",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-19 01:30 IST",
                "tags": [
                    "malware",
                    "hash",
                    "verified"
                ],
                "addedAt": "2026-10-19T01:30:15.737857+05:30",
                "campaign": "Mirai",
                "confidence": "90%"
            },
            {
                "type": "url",
                "indicator": "hxxps://qp[.]9windaftar[.]com/kf/",
                "description": "Vidar (botnet_cc)",
                "timestamp": "2026-10-18 19:50:48",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-19 01:30 IST",
                "tags": [
                    "verified"
                ],
                "addedAt": "2026-10-19T01:30:15.737857+05:30",
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
                "analysisTime": "2026-10-19 01:30 IST",
                "tags": [
                    "verified"
                ],
                "addedAt": "2026-10-19T01:30:15.737857+05:30",
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
                "analysisTime": "2026-10-19 01:30 IST",
                "tags": [
                    "botnet",
                    "verified"
                ],
                "addedAt": "2026-10-19T01:30:15.737857+05:30",
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
                "analysisTime": "2026-10-19 01:30 IST",
                "tags": [
                    "botnet",
                    "verified"
                ],
                "addedAt": "2026-10-19T01:30:15.737857+05:30",
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
                "analysisTime": "2026-10-19 01:30 IST",
                "tags": [
                    "c2",
                    "botnet",
                    "verified"
                ],
                "addedAt": "2026-10-19T01:30:15.737857+05:30",
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
                "analysisTime": "2026-10-19 01:30 IST",
                "tags": [
                    "botnet",
                    "verified"
                ],
                "addedAt": "2026-10-19T01:30:15.737857+05:30",
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
                "analysisTime": "2026-10-19 01:30 IST",
                "tags": [
                    "botnet",
                    "verified"
                ],
                "addedAt": "2026-10-19T01:30:15.737857+05:30",
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
                "analysisTime": "2026-10-19 01:30 IST",
                "tags": [
                    "botnet",
                    "verified"
                ],
                "addedAt": "2026-10-19T01:30:15.737857+05:30",
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
                "analysisTime": "2026-10-19 01:30 IST",
                "tags": [
                    "botnet",
                    "verified"
                ],
                "addedAt": "2026-10-19T01:30:15.737857+05:30",
                "campaign": "PureRAT",
                "confidence": "75%"
            }
        ],
        "lastUpdated": "2026-10-19T02:27:55.521320+05:30",
        "lastUpdatedFormatted": "Oct 19, 2026 at 02:27 AM IST",
        "lastUpdatedUtc": "2026-10-18 20:57 UTC"
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
                "lastUpdate": "2026-10-18 20:57 UTC"
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
            "iocCount": 1855,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1855,
                "newInLastHour": 25,
                "lastUpdate": "2026-10-18 20:57 UTC"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                "2b8535175e93436354114e5a11c0dc8a92fa440b97bbcfccb9d9f34a7ac9daed",
                "1c32ac56e8f9d490e49305adc30bdcb8343ad2d18b9ff8100940ae6d6e129038",
                "20600b576b3f8cbc2cc95eb68f84e4e9d51227e036c3a2f4db2a6a2868576fb8",
                "e2d4fcb31b50184f17f7c5047504210820fef6cee67c82027e07cb87f41d3635",
                "2d29b6ca233a505d01e7d48bd0055a7cd2fd8c590d7e9bd132b8e9b55891c826"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1666,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1666,
                "newInLastHour": 1,
                "lastUpdate": "2026-10-18 20:57 UTC"
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
            "iocCount": 20565,
            "iocDataUrl": "https://thehgtech.com/ioc-data/cins-army.json",
            "stats": {
                "total": 20565,
                "newInLastHour": 19167,
                "lastUpdate": "2026-10-18 20:57 UTC"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]12[.]229[.]231",
                "1[.]14[.]149[.]30",
                "1[.]192[.]129[.]106",
                "1[.]193[.]57[.]156",
                "1[.]215[.]138[.]43"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4727,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4727,
                "newInLastHour": 4424,
                "lastUpdate": "2026-10-18 20:57 UTC"
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
            "iocCount": 33627,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 33627,
                "newInLastHour": 33627,
                "lastUpdate": "2026-10-18 20:57 UTC"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://115[.]58[.]96[.]86:53524/bin[.]sh",
                "hxxp://115[.]48[.]163[.]254:44939/i",
                "hxxp://115[.]57[.]61[.]62:58706/i",
                "hxxp://123[.]14[.]238[.]189:52224/i",
                "hxxp://117[.]24[.]216[.]241:47558/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 14129,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 14129,
                "newInLastHour": 5522,
                "lastUpdate": "2026-10-18 20:57 UTC"
            },
            "types": [
                "domain",
                "ip",
                "url",
                "hash"
            ],
            "sampleIndicators": [
                "d5e4db7daf438660a0659b8eb31f5c4c2fb7c47f56440aef79d30bd1c78cf328",
                "hxxps://pw[.]9windaftar[.]com/m/",
                "hxxps://pw[.]9windaftar[.]com/jk/",
                "hxxps://pw[.]9windaftar[.]com/mw/",
                "proxy-us-east003-cip12[.]ahrefs[.]net"
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
                "lastUpdate": "2026-10-18 20:57 UTC"
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
                "newInLastHour": 2,
                "lastUpdate": "2026-10-18 20:57 UTC"
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
            "type": "ssl-cert",
            "indicator": "7fc6c2a32eed69593d705df8d2f29de51da78e0b",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-11 14:47:53",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-19T01:30:18.491588+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "17658c947940cef2209381bda159a44a8f55883c",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-11 07:00:52",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-19T01:30:18.491588+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ip",
            "indicator": "162[.]243[.]103[.]246",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-19 01:30 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-19T01:30:17.205903+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "178[.]62[.]3[.]223",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-19 01:30 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-19T01:30:17.205903+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "27[.]133[.]154[.]218",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-19 01:30 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-19T01:30:17.205903+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "34[.]204[.]119[.]63",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-19 01:30 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-19T01:30:17.205903+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "50[.]16[.]16[.]211",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-19 01:30 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-19T01:30:17.205903+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "hash",
            "indicator": "345fd6e63c2c817ff28ac5e4fc6792e8ada4efadebe6a3692f334300fb35b187",
            "description": "Mirai (payload)",
            "timestamp": "2026-10-18 19:54:05",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
            "campaign": "Mirai",
            "confidence": "90%"
        },
        {
            "type": "hash",
            "indicator": "74c6f27ce2a20dd393e72bb54293cfece0cb05e599ff0010607f29e7c8a0f5dc",
            "description": "Mirai (payload)",
            "timestamp": "2026-10-18 19:54:04",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
            "campaign": "Mirai",
            "confidence": "90%"
        },
        {
            "type": "hash",
            "indicator": "9bd0fcad7e6ca59c3caeed5b9fae6ecb499d274bfff2042a855f7b9f5b3b1657",
            "description": "Mirai (payload)",
            "timestamp": "2026-10-18 19:54:03",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
            "campaign": "Mirai",
            "confidence": "90%"
        },
        {
            "type": "hash",
            "indicator": "26f91ce3d8ee20dd027d4de026d6e5dd08604b6bec6b3142b55749150493285c",
            "description": "Mirai (payload)",
            "timestamp": "2026-10-18 19:54:01",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
            "campaign": "Mirai",
            "confidence": "90%"
        },
        {
            "type": "url",
            "indicator": "hxxps://qp[.]9windaftar[.]com/kf/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-18 19:50:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
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
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
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
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
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
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
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
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "c2",
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
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
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
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
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
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
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
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
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
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
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
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
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
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
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "c2",
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
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
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
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
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
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
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
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
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
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
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
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
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
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
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
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
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
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
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "ed8bc2b4ab3d52999ecd782cddc6b43fd87a07c086e1a1285ac44a70ee55603f",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-18 19:40:11",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://www.virustotal.com/gui/file/ed8bc2b4ab3d52999ecd782cddc6b43fd87a07c086e1a1285ac44a70ee55603f"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "f4d558133f6ffc69d42dd5c3504938e82fe1a4ef241344f729ae22f6d200cd1e",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-18 19:40:10",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://www.virustotal.com/gui/file/f4d558133f6ffc69d42dd5c3504938e82fe1a4ef241344f729ae22f6d200cd1e"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "a65580c55059b46ef3300dd5223602f7bcc603f96c1642cc71d9bab2a5e62e7a",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-18 19:40:10",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://www.virustotal.com/gui/file/a65580c55059b46ef3300dd5223602f7bcc603f96c1642cc71d9bab2a5e62e7a"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "002c0ba824e249fbb67b3c91a0c5d97f22bef4f90c78451e9d6ebe9f7c5a3501",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-18 19:40:10",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://www.virustotal.com/gui/file/002c0ba824e249fbb67b3c91a0c5d97f22bef4f90c78451e9d6ebe9f7c5a3501"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://qp[.]9windaftar[.]com/x0/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-18 19:35:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "9acdd4de139103b21098bac2dba33e1547e39821296c1b89c9d4d2eded750509",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-18 19:35:47",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://www.virustotal.com/gui/file/9acdd4de139103b21098bac2dba33e1547e39821296c1b89c9d4d2eded750509"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://qp[.]9windaftar[.]com/tvu/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-18 19:30:50",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
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
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
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
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "malware",
                "verified",
                "https://clickfix.carsonww.com/domains/sexstories.beauty"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
            "campaign": "Unknown malware",
            "confidence": "90%"
        },
        {
            "type": "hash",
            "indicator": "672a08c37c016aab06df52743931e02e9a6cfc417e5e815963feea63f82afd94",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-18 19:29:39",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://www.virustotal.com/gui/file/672a08c37c016aab06df52743931e02e9a6cfc417e5e815963feea63f82afd94"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://qp[.]9windaftar[.]com/h5/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-18 19:25:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "81e34b0ec6928234d0a24f9b1634d1e2201fe0fca38bf048229d750ba35f64ca",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-18 19:25:19",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://www.virustotal.com/gui/file/81e34b0ec6928234d0a24f9b1634d1e2201fe0fca38bf048229d750ba35f64ca"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "c9d5be0b1025dba4ef28a0196208f6cc1da154f91f1c029728ee1e41a6e7b2f7",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-18 19:23:32",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://www.virustotal.com/gui/file/c9d5be0b1025dba4ef28a0196208f6cc1da154f91f1c029728ee1e41a6e7b2f7"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "227[.]73[.]178[.]34[.]bc[.]googleusercontent[.]com",
            "description": "php.shin_webshell (payload_delivery)",
            "timestamp": "2026-10-18 19:21:07",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
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
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "c3e8402ef7f01179f5015db65e3f34380cd7a6269536516d0cce931f18bf808f",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-18 19:17:26",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://www.virustotal.com/gui/file/c3e8402ef7f01179f5015db65e3f34380cd7a6269536516d0cce931f18bf808f"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://qp[.]9windaftar[.]com/nj/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-18 19:15:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "816aa360229920df4a3845f72442d55dc2eabab456c3d3657ce0137320ed99b5",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-18 19:11:20",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://www.virustotal.com/gui/file/816aa360229920df4a3845f72442d55dc2eabab456c3d3657ce0137320ed99b5"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://qp[.]9windaftar[.]com/e67/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-18 19:10:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
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
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
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
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
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
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
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
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "5386aa3280e7ffec73c281d1f0266e12f2c1c8f4fba60e42670c7531f58eab0d",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-18 19:05:14",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://www.virustotal.com/gui/file/5386aa3280e7ffec73c281d1f0266e12f2c1c8f4fba60e42670c7531f58eab0d"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "ip",
            "indicator": "154[.]12[.]17[.]103",
            "description": "Cobalt Strike (botnet_cc)",
            "timestamp": "2026-10-18 19:05:08",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
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
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
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
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
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
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
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
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
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
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
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
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
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
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
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
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
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
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
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
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
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
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
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
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "malware",
                "verified",
                "https://clickfix.carsonww.com/domains/temdetudoecommerce.com"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
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
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "malware",
                "verified",
                "https://clickfix.carsonww.com/domains/warpfins.com"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
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
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "malware",
                "verified",
                "https://clickfix.carsonww.com/domains/v2.bulwarrestauracja.pl"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
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
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "malware",
                "verified",
                "https://clickfix.carsonww.com/domains/ufakick.group"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
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
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "malware",
                "verified",
                "https://clickfix.carsonww.com/domains/tuasesorcontable.com.co"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
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
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "malware",
                "verified",
                "https://clickfix.carsonww.com/domains/sandandgarden.com.mx"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
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
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "malware",
                "verified",
                "https://clickfix.carsonww.com/domains/visadubai.com.vn"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
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
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "malware",
                "verified",
                "https://clickfix.carsonww.com/domains/www.yumweb.com"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
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
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "malware",
                "verified",
                "https://clickfix.carsonww.com/domains/zmops.io"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
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
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "malware",
                "verified",
                "https://clickfix.carsonww.com/domains/xocdiapro.co"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
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
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "malware",
                "verified",
                "https://clickfix.carsonww.com/domains/zenithcomputers.com"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
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
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
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
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
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
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
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
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "verified",
                "https://honeylabs.net/lookup/190.196.253.19"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
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
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "verified",
                "https://honeylabs.net/lookup/176.65.139.76"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
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
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "verified",
                "https://honeylabs.net/lookup/124.29.251.100"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
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
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
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
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
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
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
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
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
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
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
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
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
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
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
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
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
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
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "malware",
                "verified",
                "https://clickfix.carsonww.com/domains/roadracerx.com"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
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
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "malware",
                "verified",
                "https://clickfix.carsonww.com/domains/prefirobh.com.br"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
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
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "malware",
                "verified",
                "https://clickfix.carsonww.com/domains/rtpibetslot4.co"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
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
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "malware",
                "verified",
                "https://clickfix.carsonww.com/domains/www.nurmas.com.tr"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
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
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "malware",
                "verified",
                "https://clickfix.carsonww.com/domains/milestonedentalassisting.com"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
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
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "malware",
                "verified",
                "https://clickfix.carsonww.com/domains/photographicmemories.uk.com"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
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
            "analysisTime": "2026-10-19 01:30 IST",
            "tags": [
                "malware",
                "verified",
                "https://clickfix.carsonww.com/domains/ngob.co.za"
            ],
            "addedAt": "2026-10-19T01:30:15.737857+05:30",
            "campaign": "Unknown malware",
            "confidence": "90%"
        }
    ],
    "dailySummary": {
        "stats": {
            "totalIndicators": 87220,
            "activeSources": 9,
            "criticalAlerts": 48112,
            "activeCampaigns": 347
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 36867,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 11245,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 8651,
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
                "count": 33617,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://95[.]155[.]201[.]65:37302/i",
                    "hxxp://182[.]121[.]249[.]23:37832/i",
                    "hxxp://115[.]61[.]17[.]94:51620/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 19966,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]117[.]58[.]215",
                    "1[.]12[.]229[.]231",
                    "1[.]14[.]149[.]30"
                ]
            },
            {
                "name": "SSH Attacks",
                "count": 4692,
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
                "count": 1691,
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
                "count": 1629,
                "types": [
                    "domain",
                    "ip",
                    "hash",
                    "url",
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "00fb522f8d19a1ee3fa1d23c55d55134454fb9067474d836dfd9019c948d0e9e",
                    "91[.]92[.]243[.]15",
                    "46[.]246[.]84[.]14"
                ]
            },
            {
                "name": "Vidar",
                "count": 1427,
                "types": [
                    "domain",
                    "ip",
                    "hash",
                    "url",
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
                "count": 1078,
                "types": [
                    "domain",
                    "ip",
                    "url",
                    "hash"
                ],
                "sampleIndicators": [
                    "efa96afac6f6d74b607902c0f75b334d42ef5150b675ac228aaae01a42ef1e40",
                    "9d8343d6b28777c2d928150bfc83b34e82287a0705768521ea124d9c1078afb9",
                    "f05cb4c094229ea4ff59f8667a7cdebfc30b37a82957ec6e6c21d5dfd9d008f0"
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
        "totalAttacksThisHour": 63073,
        "lastCalculated": "2026-10-19 02:27 IST"
    }
};
