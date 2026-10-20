// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-21T03:18:20.878459+05:30 IST (2026-10-20 21:48 UTC)
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-21T03:18:20.087067+05:30",
    "lastUpdatedFormatted": "Oct 21, 2026 at 03:18 AM IST",
    "lastUpdatedUtc": "2026-10-20 21:48 UTC",
    "comparisonPeriod": "Oct 20 \u2013 Oct 21, 2026",
    "stats": {
        "totalIOCs": 105079,
        "byType": {
            "url": 45298,
            "ip": 39472,
            "hash": 5477,
            "domain": 2615,
            "ssl-cert": 10584,
            "ip-range": 1633
        },
        "byVendor": {
            "OpenPhish": 1240,
            "Malware Bazaar": 3272,
            "Spamhaus DROP": 1633,
            "CINS Army": 29121,
            "Blocklist.de": 7455,
            "URLhaus": 34712,
            "ThreatFox": 17057,
            "Feodo Tracker": 5,
            "SSL Blacklist": 10584
        },
        "topMalware": [
            {
                "name": "Vidar",
                "count": 2035,
                "types": [
                    "ssl-cert",
                    "hash",
                    "ip",
                    "domain",
                    "url"
                ]
            },
            {
                "name": "Mirai",
                "count": 1759,
                "types": [
                    "ip",
                    "url",
                    "hash",
                    "domain"
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1649,
                "types": [
                    "ssl-cert",
                    "hash",
                    "ip",
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
                "name": "Cobalt Strike",
                "count": 1211,
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
                "count": 714,
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
                "count": 637,
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
                "name": "AMOS",
                "count": 569,
                "types": [
                    "domain",
                    "hash",
                    "url"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 557,
                "types": [
                    "ssl-cert",
                    "hash"
                ]
            },
            {
                "name": "OffLoader",
                "count": 490,
                "types": [
                    "ssl-cert"
                ]
            },
            {
                "name": "ConnectWise",
                "count": 457,
                "types": [
                    "ssl-cert",
                    "hash"
                ]
            }
        ],
        "recentIOCs": [
            {
                "type": "ssl-cert",
                "indicator": "e10fe9007408391e4c3a808ae4b7c4cb6e7df1a3",
                "description": "Malicious SSL certificate - OnyxC2 C&C",
                "timestamp": "2026-10-20 16:02:55",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-21 01:28 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-21T01:28:16.891113+05:30",
                "campaign": "OnyxC2",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "e6c0468f46efe40f3127d33641bfc3df8b2e5c7d",
                "description": "Malicious SSL certificate - PureLogsStealer C&C",
                "timestamp": "2026-10-13 07:58:17",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-21 01:28 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-21T01:28:16.891113+05:30",
                "campaign": "PureLogsStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "4664c47d412c00bf067a325ffa9790db75efbe75",
                "description": "Malicious SSL certificate - PureLogsStealer C&C",
                "timestamp": "2026-10-13 06:59:39",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-21 01:28 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-21T01:28:16.891113+05:30",
                "campaign": "PureLogsStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "b3c1e060a727e4db1cf6131f1eb6e9bcca2ffb5d",
                "description": "Malicious SSL certificate - PureRAT C&C",
                "timestamp": "2026-10-13 06:17:05",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-21 01:28 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-21T01:28:16.891113+05:30",
                "campaign": "PureRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "9b798f7d87edcf42680454660f593afd696ef8ca",
                "description": "Malicious SSL certificate - QuasarRAT C&C",
                "timestamp": "2026-09-21 13:21:04",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-21 01:28 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-21T01:28:16.891113+05:30",
                "campaign": "QuasarRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "e20ecba521fd923644d154963d32d5cd29f4c0b1",
                "description": "Malicious SSL certificate - PureLogsStealer C&C",
                "timestamp": "2026-09-21 07:57:31",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-21 01:28 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-21T01:28:16.891113+05:30",
                "campaign": "PureLogsStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "9028baa7a4f17d812e2c497cdc6dbe5594780325",
                "description": "Malicious SSL certificate - OffLoader C&C",
                "timestamp": "2026-09-21 07:53:24",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-21 01:28 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-21T01:28:16.891113+05:30",
                "campaign": "OffLoader",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "31ce37e696cdff32d3042b1f9be493c1e43b4b6e",
                "description": "Malicious SSL certificate - OffLoader C&C",
                "timestamp": "2026-09-21 07:53:19",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-21 01:28 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-21T01:28:16.891113+05:30",
                "campaign": "OffLoader",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "ea74c0bba5834a0445661f91c3a220811eb965a3",
                "description": "Malicious SSL certificate - PureLogsStealer C&C",
                "timestamp": "2026-09-21 07:53:12",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-21 01:28 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-21T01:28:16.891113+05:30",
                "campaign": "PureLogsStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "4385dfcee56c1ede34b61cbc84666afe4946cf2a",
                "description": "Malicious SSL certificate - PureRAT C&C",
                "timestamp": "2026-09-21 07:52:50",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-21 01:28 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-21T01:28:16.891113+05:30",
                "campaign": "PureRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "0bf61cf448206d51a0b7a0cdece647df3ea1196f",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-09-21 07:52:03",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-21 01:28 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-21T01:28:16.891113+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "a7bc5bdb50a33449b1f9c6037a703e58caa406bf",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-09-21 07:50:23",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-21 01:28 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-21T01:28:16.891113+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "198fea94392f134f8578e6057c3b6679243e58c3",
                "description": "Malicious SSL certificate - OffLoader C&C",
                "timestamp": "2026-09-21 07:50:00",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-21 01:28 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-21T01:28:16.891113+05:30",
                "campaign": "OffLoader",
                "confidence": "High"
            },
            {
                "type": "ip",
                "indicator": "162[.]243[.]103[.]246",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-10-21 01:28 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-10-21 01:28 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-10-21T01:28:15.443023+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "178[.]62[.]3[.]223",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-10-21 01:28 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-10-21 01:28 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-10-21T01:28:15.443023+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "27[.]133[.]154[.]218",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-10-21 01:28 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-10-21 01:28 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-10-21T01:28:15.443023+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "34[.]204[.]119[.]63",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-10-21 01:28 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-10-21 01:28 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-10-21T01:28:15.443023+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "50[.]16[.]16[.]211",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-10-21 01:28 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-10-21 01:28 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-10-21T01:28:15.443023+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "domain",
                "indicator": "enywb85427[.]workers[.]dev",
                "description": "php.shin_webshell (payload_delivery)",
                "timestamp": "2026-10-20 19:46:41",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-21 01:28 IST",
                "tags": [
                    "verified"
                ],
                "addedAt": "2026-10-21T01:28:13.921467+05:30",
                "campaign": "php.shin_webshell",
                "confidence": "50%"
            },
            {
                "type": "ip",
                "indicator": "1[.]92[.]135[.]168",
                "description": "Cobalt Strike (botnet_cc)",
                "timestamp": "2026-10-20 19:46:36",
                "source": "ThreatFox",
                "sourceUrl": "https://threatfox.abuse.ch/",
                "analysisTime": "2026-10-21 01:28 IST",
                "tags": [
                    "botnet",
                    "verified"
                ],
                "addedAt": "2026-10-21T01:28:13.921467+05:30",
                "campaign": "Cobalt Strike",
                "confidence": "75%"
            }
        ],
        "lastUpdated": "2026-10-21T03:18:20.087067+05:30",
        "lastUpdatedFormatted": "Oct 21, 2026 at 03:18 AM IST",
        "lastUpdatedUtc": "2026-10-20 21:48 UTC"
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
                "lastUpdate": "2026-10-20 21:48 UTC"
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
            "iocCount": 3298,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 3298,
                "newInLastHour": 26,
                "lastUpdate": "2026-10-20 21:48 UTC"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                "693ac9c894b9e9def660ecb851db81f6f0f3ed94bf75ce2807ee18d6e38b2f98",
                "704f4e68b3dfb5b0a47e98b029e31695bebee202de88f843f5e33d05170b03ab",
                "7ec08e79a1a3d27ebb54f9eceb16401720c148ebdbec0a917c2a4885e0102f31",
                "f890d8b65815729c4b621d34babbf86ad8691ac5ce10cb53351ff2abd43f4ff9",
                "99f64eff67c3c742e8677c7e844610e7be93d8ee1ac666910675af651b7e968d"
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
                "newInLastHour": 58,
                "lastUpdate": "2026-10-20 21:48 UTC"
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
            "iocCount": 29651,
            "iocDataUrl": "https://thehgtech.com/ioc-data/cins-army.json",
            "stats": {
                "total": 29651,
                "newInLastHour": 15000,
                "lastUpdate": "2026-10-20 21:48 UTC"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]117[.]68[.]141",
                "1[.]12[.]229[.]231",
                "1[.]14[.]149[.]30",
                "1[.]15[.]14[.]29",
                "1[.]177[.]162[.]4"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 7512,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 7512,
                "newInLastHour": 5269,
                "lastUpdate": "2026-10-20 21:48 UTC"
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
            "iocCount": 34728,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 34728,
                "newInLastHour": 33922,
                "lastUpdate": "2026-10-20 21:48 UTC"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://27[.]204[.]199[.]169:48669/i",
                "hxxp://222[.]141[.]63[.]159:57872/bin[.]sh",
                "hxxp://115[.]48[.]146[.]56:37418/i",
                "hxxp://175[.]174[.]105[.]195:51017/i",
                "hxxp://115[.]55[.]197[.]99:59631/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 17164,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 17164,
                "newInLastHour": 4834,
                "lastUpdate": "2026-10-20 21:48 UTC"
            },
            "types": [
                "ip",
                "hash",
                "domain",
                "url"
            ],
            "sampleIndicators": [
                "hxxps://s7[.]abbc123[.]org/ty/",
                "hxxp://ventuxe[.]biz:6929",
                "hxxps://q[.]9winn[.]org/d",
                "d2bbbd9a8aa85ca603c52867e04c4f910466c0764d4a27d6bb338316860de0d1",
                "hxxps://s7[.]abbc123[.]org/bas/"
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
                "lastUpdate": "2026-10-20 21:48 UTC"
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
            "iocCount": 11003,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 11003,
                "newInLastHour": 419,
                "lastUpdate": "2026-10-20 21:48 UTC"
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
            "type": "ssl-cert",
            "indicator": "e10fe9007408391e4c3a808ae4b7c4cb6e7df1a3",
            "description": "Malicious SSL certificate - OnyxC2 C&C",
            "timestamp": "2026-10-20 16:02:55",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T01:28:16.891113+05:30",
            "campaign": "OnyxC2",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "e6c0468f46efe40f3127d33641bfc3df8b2e5c7d",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-10-13 07:58:17",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T01:28:16.891113+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "4664c47d412c00bf067a325ffa9790db75efbe75",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-10-13 06:59:39",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T01:28:16.891113+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "b3c1e060a727e4db1cf6131f1eb6e9bcca2ffb5d",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-10-13 06:17:05",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T01:28:16.891113+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "9b798f7d87edcf42680454660f593afd696ef8ca",
            "description": "Malicious SSL certificate - QuasarRAT C&C",
            "timestamp": "2026-09-21 13:21:04",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T01:28:16.891113+05:30",
            "campaign": "QuasarRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "e20ecba521fd923644d154963d32d5cd29f4c0b1",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-09-21 07:57:31",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T01:28:16.891113+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "9028baa7a4f17d812e2c497cdc6dbe5594780325",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-09-21 07:53:24",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T01:28:16.891113+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "31ce37e696cdff32d3042b1f9be493c1e43b4b6e",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-09-21 07:53:19",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T01:28:16.891113+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "ea74c0bba5834a0445661f91c3a220811eb965a3",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-09-21 07:53:12",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T01:28:16.891113+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "4385dfcee56c1ede34b61cbc84666afe4946cf2a",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-09-21 07:52:50",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T01:28:16.891113+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "0bf61cf448206d51a0b7a0cdece647df3ea1196f",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-09-21 07:52:03",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T01:28:16.891113+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "a7bc5bdb50a33449b1f9c6037a703e58caa406bf",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-09-21 07:50:23",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T01:28:16.891113+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "198fea94392f134f8578e6057c3b6679243e58c3",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-09-21 07:50:00",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T01:28:16.891113+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ip",
            "indicator": "162[.]243[.]103[.]246",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-21 01:28 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-21T01:28:15.443023+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "178[.]62[.]3[.]223",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-21 01:28 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-21T01:28:15.443023+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "27[.]133[.]154[.]218",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-21 01:28 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-21T01:28:15.443023+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "34[.]204[.]119[.]63",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-21 01:28 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-21T01:28:15.443023+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "50[.]16[.]16[.]211",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-21 01:28 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-21T01:28:15.443023+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "domain",
            "indicator": "enywb85427[.]workers[.]dev",
            "description": "php.shin_webshell (payload_delivery)",
            "timestamp": "2026-10-20 19:46:41",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T01:28:13.921467+05:30",
            "campaign": "php.shin_webshell",
            "confidence": "50%"
        },
        {
            "type": "ip",
            "indicator": "1[.]92[.]135[.]168",
            "description": "Cobalt Strike (botnet_cc)",
            "timestamp": "2026-10-20 19:46:36",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-21T01:28:13.921467+05:30",
            "campaign": "Cobalt Strike",
            "confidence": "75%"
        },
        {
            "type": "ip",
            "indicator": "88[.]119[.]168[.]238",
            "description": "Evilginx (botnet_cc)",
            "timestamp": "2026-10-20 19:46:20",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-21T01:28:13.921467+05:30",
            "campaign": "Evilginx",
            "confidence": "75%"
        },
        {
            "type": "url",
            "indicator": "hxxps://ok[.]abbastoto[.]org/gd/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-20 19:45:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T01:28:13.921467+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "ip",
            "indicator": "38[.]60[.]202[.]196",
            "description": "Unknown malware (botnet_cc)",
            "timestamp": "2026-10-20 19:45:38",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-21T01:28:13.921467+05:30",
            "campaign": "Unknown malware",
            "confidence": "75%"
        },
        {
            "type": "ip",
            "indicator": "27[.]124[.]17[.]194",
            "description": "PureRAT (botnet_cc)",
            "timestamp": "2026-10-20 19:45:21",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-21T01:28:13.921467+05:30",
            "campaign": "PureRAT",
            "confidence": "75%"
        },
        {
            "type": "ip",
            "indicator": "23[.]22[.]55[.]91",
            "description": "AdaptixC2 (botnet_cc)",
            "timestamp": "2026-10-20 19:45:19",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "c2",
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-21T01:28:13.921467+05:30",
            "campaign": "AdaptixC2",
            "confidence": "75%"
        },
        {
            "type": "ip",
            "indicator": "193[.]222[.]99[.]152",
            "description": "PureRAT (botnet_cc)",
            "timestamp": "2026-10-20 19:44:28",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-21T01:28:13.921467+05:30",
            "campaign": "PureRAT",
            "confidence": "75%"
        },
        {
            "type": "ip",
            "indicator": "170[.]62[.]130[.]140",
            "description": "PureRAT (botnet_cc)",
            "timestamp": "2026-10-20 19:44:03",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-21T01:28:13.921467+05:30",
            "campaign": "PureRAT",
            "confidence": "75%"
        },
        {
            "type": "ip",
            "indicator": "167[.]148[.]41[.]45",
            "description": "PureRAT (botnet_cc)",
            "timestamp": "2026-10-20 19:44:01",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-21T01:28:13.921467+05:30",
            "campaign": "PureRAT",
            "confidence": "75%"
        },
        {
            "type": "url",
            "indicator": "hxxp://finter28[.]help:5621/products",
            "description": "Remus (botnet_cc)",
            "timestamp": "2026-10-20 19:43:41",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T01:28:13.921467+05:30",
            "campaign": "Remus",
            "confidence": "100%"
        },
        {
            "type": "ip",
            "indicator": "103[.]54[.]153[.]17",
            "description": "PureRAT (botnet_cc)",
            "timestamp": "2026-10-20 19:43:09",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-21T01:28:13.921467+05:30",
            "campaign": "PureRAT",
            "confidence": "75%"
        },
        {
            "type": "ip",
            "indicator": "103[.]117[.]136[.]32",
            "description": "AdaptixC2 (botnet_cc)",
            "timestamp": "2026-10-20 19:43:08",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "c2",
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-21T01:28:13.921467+05:30",
            "campaign": "AdaptixC2",
            "confidence": "75%"
        },
        {
            "type": "ip",
            "indicator": "100[.]62[.]151[.]79",
            "description": "AdaptixC2 (botnet_cc)",
            "timestamp": "2026-10-20 19:43:02",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "c2",
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-21T01:28:13.921467+05:30",
            "campaign": "AdaptixC2",
            "confidence": "75%"
        },
        {
            "type": "domain",
            "indicator": "zotamejy[.]workers[.]dev",
            "description": "php.shin_webshell (payload_delivery)",
            "timestamp": "2026-10-20 19:41:16",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T01:28:13.921467+05:30",
            "campaign": "php.shin_webshell",
            "confidence": "50%"
        },
        {
            "type": "url",
            "indicator": "hxxps://ok[.]abbastoto[.]org/xm4/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-20 19:40:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T01:28:13.921467+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://ok[.]abbastoto[.]org/nc/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-20 19:35:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T01:28:13.921467+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://q[.]9winn[.]org/p",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-20 19:31:59",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T01:28:13.921467+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://q[.]9winn[.]org/p/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-20 19:30:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T01:28:13.921467+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://ok[.]abbastoto[.]org/yi/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-20 19:30:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T01:28:13.921467+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://injurylawsocal[.]com/curl/b3433043648ae2e6cae272bd911ef1d0e66baf4dd0a8cd43e271793bd6465144",
            "description": "MacSync (payload_delivery)",
            "timestamp": "2026-10-20 19:26:47",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "verified",
                "https://www.virustotal.com/gui/file/bef7f2a722bf846bc291fc68257e74e0a54384305d259160c607a9cd8daac958"
            ],
            "addedAt": "2026-10-21T01:28:13.921467+05:30",
            "campaign": "MacSync",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "injurylawsocal[.]com",
            "description": "MacSync (payload_delivery)",
            "timestamp": "2026-10-20 19:26:47",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "verified",
                "https://www.virustotal.com/gui/file/bef7f2a722bf846bc291fc68257e74e0a54384305d259160c607a9cd8daac958"
            ],
            "addedAt": "2026-10-21T01:28:13.921467+05:30",
            "campaign": "MacSync",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "bef7f2a722bf846bc291fc68257e74e0a54384305d259160c607a9cd8daac958",
            "description": "MacSync (payload)",
            "timestamp": "2026-10-20 19:26:46",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://www.virustotal.com/gui/file/bef7f2a722bf846bc291fc68257e74e0a54384305d259160c607a9cd8daac958"
            ],
            "addedAt": "2026-10-21T01:28:13.921467+05:30",
            "campaign": "MacSync",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "706ab620d6321ed35a6adb84e41be3e63ae495e4d32b865f78589a593a17a67f",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-20 19:26:44",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://bazaar.abuse.ch/sample/706ab620d6321ed35a6adb84e41be3e63ae495e4d32b865f78589a593a17a67f/"
            ],
            "addedAt": "2026-10-21T01:28:13.921467+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://ok[.]abbastoto[.]org/hm/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-20 19:25:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T01:28:13.921467+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "8b01511a3869c136edae8f195232d79c35bbe13592f0a020534892f933c0df41",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-20 19:25:38",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://bazaar.abuse.ch/sample/8b01511a3869c136edae8f195232d79c35bbe13592f0a020534892f933c0df41/"
            ],
            "addedAt": "2026-10-21T01:28:13.921467+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "d36d5a65f34f39ca8092530979730dd125672653011e5e34f8d943add3729e0a",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-20 19:24:32",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://www.virustotal.com/gui/file/d36d5a65f34f39ca8092530979730dd125672653011e5e34f8d943add3729e0a"
            ],
            "addedAt": "2026-10-21T01:28:13.921467+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "light-zip[.]com",
            "description": "ClearFake (payload_delivery)",
            "timestamp": "2026-10-20 19:24:10",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T01:28:13.921467+05:30",
            "campaign": "ClearFake",
            "confidence": "90%"
        },
        {
            "type": "hash",
            "indicator": "a3cd0cc73e8dfd41e855e61fe57727b45468edecb8e13472dc11926157d5e5ec",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-20 19:23:26",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://bazaar.abuse.ch/sample/a3cd0cc73e8dfd41e855e61fe57727b45468edecb8e13472dc11926157d5e5ec/"
            ],
            "addedAt": "2026-10-21T01:28:13.921467+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://ok[.]abbastoto[.]org/ba/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-20 19:20:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T01:28:13.921467+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://ok[.]abbastoto[.]org/mg/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-20 19:15:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T01:28:13.921467+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "iq-capital[.]eu",
            "description": "ClearFake (payload_delivery)",
            "timestamp": "2026-10-20 19:14:11",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T01:28:13.921467+05:30",
            "campaign": "ClearFake",
            "confidence": "90%"
        },
        {
            "type": "url",
            "indicator": "hxxps://ok[.]abbastoto[.]org/ce/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-20 19:10:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T01:28:13.921467+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxp://darcy19[.]my:8312/customers",
            "description": "Remus (botnet_cc)",
            "timestamp": "2026-10-20 19:10:39",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T01:28:13.921467+05:30",
            "campaign": "Remus",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxp://finter28[.]help:5621/invoices",
            "description": "Remus (botnet_cc)",
            "timestamp": "2026-10-20 19:07:23",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T01:28:13.921467+05:30",
            "campaign": "Remus",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxp://darcy19[.]my:8312/payments",
            "description": "Remus (botnet_cc)",
            "timestamp": "2026-10-20 19:06:31",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T01:28:13.921467+05:30",
            "campaign": "Remus",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "q[.]9winn[.]org",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-20 19:05:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T01:28:13.921467+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://q[.]9winn[.]org/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-20 19:05:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T01:28:13.921467+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://ok[.]abbastoto[.]org/qj/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-20 19:05:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T01:28:13.921467+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "ip",
            "indicator": "156[.]240[.]41[.]126",
            "description": "VShell (botnet_cc)",
            "timestamp": "2026-10-20 19:05:06",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-21T01:28:13.921467+05:30",
            "campaign": "VShell",
            "confidence": "100%"
        },
        {
            "type": "ip",
            "indicator": "47[.]236[.]70[.]111",
            "description": "Unknown malware (botnet_cc)",
            "timestamp": "2026-10-20 19:05:05",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-21T01:28:13.921467+05:30",
            "campaign": "Unknown malware",
            "confidence": "100%"
        },
        {
            "type": "ip",
            "indicator": "156[.]240[.]41[.]118",
            "description": "VShell (botnet_cc)",
            "timestamp": "2026-10-20 19:05:05",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-21T01:28:13.921467+05:30",
            "campaign": "VShell",
            "confidence": "100%"
        },
        {
            "type": "ip",
            "indicator": "156[.]240[.]41[.]123",
            "description": "VShell (botnet_cc)",
            "timestamp": "2026-10-20 19:05:05",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-21T01:28:13.921467+05:30",
            "campaign": "VShell",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://q[.]9winn[.]org",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-20 19:03:17",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T01:28:13.921467+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://e[.]abbastoto[.]org/yl",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-20 19:01:17",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T01:28:13.921467+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://h[.]9winn[.]org",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-20 19:00:52",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T01:28:13.921467+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://h[.]9winn[.]org/m/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-20 19:00:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T01:28:13.921467+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://yk[.]abbastoto[.]org/up/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-20 19:00:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T01:28:13.921467+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://yk[.]abbastoto[.]org/vm/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-20 18:55:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T01:28:13.921467+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "c2af8f6db2b945f4719e21a9322f5fac0c83f741b7fc41ee4bc1a00e5fc7eb1c",
            "description": "Mirai (payload)",
            "timestamp": "2026-10-20 18:54:37",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-21T01:28:13.921467+05:30",
            "campaign": "Mirai",
            "confidence": "90%"
        },
        {
            "type": "hash",
            "indicator": "dbdc57560c6d082e886885adff7cc970482707ff8850a0a1c51fe49b5f9c214c",
            "description": "Mirai (payload)",
            "timestamp": "2026-10-20 18:54:36",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-21T01:28:13.921467+05:30",
            "campaign": "Mirai",
            "confidence": "90%"
        },
        {
            "type": "hash",
            "indicator": "cf03a302bc83b550dba8930747734363d7193429e3a4eda2fda4c0f878d4568b",
            "description": "Mirai (payload)",
            "timestamp": "2026-10-20 18:54:35",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-21T01:28:13.921467+05:30",
            "campaign": "Mirai",
            "confidence": "90%"
        },
        {
            "type": "hash",
            "indicator": "1fbb5d8c24f8b39ba2176b40806c8c1276202dedae74cdce559c99c529c28b3f",
            "description": "Mirai (payload)",
            "timestamp": "2026-10-20 18:54:34",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-21T01:28:13.921467+05:30",
            "campaign": "Mirai",
            "confidence": "90%"
        },
        {
            "type": "hash",
            "indicator": "3691d3e45d288500e19250166ff256edcc273e2531ebee392312fc3a6ed52e8d",
            "description": "Mirai (payload)",
            "timestamp": "2026-10-20 18:54:33",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-21T01:28:13.921467+05:30",
            "campaign": "Mirai",
            "confidence": "90%"
        },
        {
            "type": "hash",
            "indicator": "51c3b15ffa86a7a83fa0029c4c257be09ed5ce17c075937f03e3500f8ac858e5",
            "description": "Mirai (payload)",
            "timestamp": "2026-10-20 18:54:31",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-21T01:28:13.921467+05:30",
            "campaign": "Mirai",
            "confidence": "90%"
        },
        {
            "type": "hash",
            "indicator": "eb2e0b6edf878e51c9f8895ed7502f9718b076f410607ce0c939d8feeffca60d",
            "description": "Mirai (payload)",
            "timestamp": "2026-10-20 18:54:31",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-21T01:28:13.921467+05:30",
            "campaign": "Mirai",
            "confidence": "90%"
        },
        {
            "type": "hash",
            "indicator": "53051bb6f0bc9a3f41d350624318df04cd6ec298477f9368cd16100de085abbf",
            "description": "Mirai (payload)",
            "timestamp": "2026-10-20 18:54:29",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-21T01:28:13.921467+05:30",
            "campaign": "Mirai",
            "confidence": "90%"
        },
        {
            "type": "hash",
            "indicator": "de7aacafae309f6d492c6782868ea7c7a4243c9c9e87aaed49ffbcc4696dde4c",
            "description": "Mirai (payload)",
            "timestamp": "2026-10-20 18:54:29",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-21T01:28:13.921467+05:30",
            "campaign": "Mirai",
            "confidence": "90%"
        },
        {
            "type": "hash",
            "indicator": "0ac60e87e97270103a1b3d6bc8b359c106284decb8e2087d09adb8a768791a81",
            "description": "Mirai (payload)",
            "timestamp": "2026-10-20 18:54:27",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-21T01:28:13.921467+05:30",
            "campaign": "Mirai",
            "confidence": "90%"
        },
        {
            "type": "hash",
            "indicator": "1a28663d0e7b7e29d47fb3a77c100b4225bce827275a8d54458f0e504f678467",
            "description": "Mirai (payload)",
            "timestamp": "2026-10-20 18:54:26",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-21T01:28:13.921467+05:30",
            "campaign": "Mirai",
            "confidence": "90%"
        },
        {
            "type": "hash",
            "indicator": "152199ad31615934d73c235feb0722e8985767184d11cb8f2765bd17b1c997f0",
            "description": "Mirai (payload)",
            "timestamp": "2026-10-20 18:54:25",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-21T01:28:13.921467+05:30",
            "campaign": "Mirai",
            "confidence": "90%"
        },
        {
            "type": "hash",
            "indicator": "b9d41f8aace627c5590a0fd0ddeac4afdaf6efc2a7e4d4c294595a779ba57820",
            "description": "Mirai (payload)",
            "timestamp": "2026-10-20 18:54:24",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-21T01:28:13.921467+05:30",
            "campaign": "Mirai",
            "confidence": "90%"
        },
        {
            "type": "hash",
            "indicator": "71984854ab6628930ed2d823f183687e3a4e5d1feaa44f2ebf94a49fc05d656e",
            "description": "Mirai (payload)",
            "timestamp": "2026-10-20 18:54:23",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "malware",
                "hash",
                "verified"
            ],
            "addedAt": "2026-10-21T01:28:13.921467+05:30",
            "campaign": "Mirai",
            "confidence": "90%"
        },
        {
            "type": "url",
            "indicator": "hxxps://yk[.]abbastoto[.]org/u/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-20 18:50:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T01:28:13.921467+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://yk[.]abbastoto[.]org/b/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-20 18:45:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T01:28:13.921467+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "24dd6209e53b5f8f13dbda7e45eac6be4efc39cdf3d9d139e6e2bfc087a085d0",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-20 18:41:30",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://www.virustotal.com/gui/file/24dd6209e53b5f8f13dbda7e45eac6be4efc39cdf3d9d139e6e2bfc087a085d0"
            ],
            "addedAt": "2026-10-21T01:28:13.921467+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://yk[.]abbastoto[.]org/hi/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-20 18:40:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T01:28:13.921467+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "2e5bb8cc0558dfed95e93207bdcc39dfd3ed21851d7ba1e8d56dee83088c5e66",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-20 18:40:27",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://www.virustotal.com/gui/file/2e5bb8cc0558dfed95e93207bdcc39dfd3ed21851d7ba1e8d56dee83088c5e66"
            ],
            "addedAt": "2026-10-21T01:28:13.921467+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "f009c4149fca83e788f0efcc50df259c025ab490d912916f540839989bdfe018",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-20 18:38:05",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://www.virustotal.com/gui/file/f009c4149fca83e788f0efcc50df259c025ab490d912916f540839989bdfe018"
            ],
            "addedAt": "2026-10-21T01:28:13.921467+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "fdcca8f446359cca1589b6f942d8552cbb905d0d9b2fae0da4efe566dd0f8f99",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-20 18:35:56",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://www.virustotal.com/gui/file/fdcca8f446359cca1589b6f942d8552cbb905d0d9b2fae0da4efe566dd0f8f99"
            ],
            "addedAt": "2026-10-21T01:28:13.921467+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://yk[.]abbastoto[.]org/gb/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-20 18:35:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T01:28:13.921467+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxp://darcy19[.]my:8312/subscriptions",
            "description": "Remus (botnet_cc)",
            "timestamp": "2026-10-20 18:33:32",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T01:28:13.921467+05:30",
            "campaign": "Remus",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://h[.]9winn[.]org/e/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-20 18:30:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T01:28:13.921467+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://yk[.]abbastoto[.]org/xm/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-20 18:30:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T01:28:13.921467+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "519e6b2213d0c6868108cf47ef5990fc0bac02fd4397da58cd5468f6e9d5c52e",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-20 18:28:46",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://www.virustotal.com/gui/file/519e6b2213d0c6868108cf47ef5990fc0bac02fd4397da58cd5468f6e9d5c52e"
            ],
            "addedAt": "2026-10-21T01:28:13.921467+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://h[.]9winn[.]org/o",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-20 18:27:17",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T01:28:13.921467+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://yk[.]abbastoto[.]org/lvg/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-20 18:25:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T01:28:13.921467+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "b43704c7b3626b2bd6a385fa53cca430efc1ccc6e52a24b8f6a24a6cab1ced7a",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-20 18:25:45",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://www.virustotal.com/gui/file/b43704c7b3626b2bd6a385fa53cca430efc1ccc6e52a24b8f6a24a6cab1ced7a"
            ],
            "addedAt": "2026-10-21T01:28:13.921467+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "hash",
            "indicator": "eba977ecf26df22ad57d469bd51d64fddd1a8f86078f808f17a8f639c1270ba9",
            "description": "AMOS (payload)",
            "timestamp": "2026-10-20 18:23:02",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "malware",
                "hash",
                "verified",
                "https://www.virustotal.com/gui/file/eba977ecf26df22ad57d469bd51d64fddd1a8f86078f808f17a8f639c1270ba9"
            ],
            "addedAt": "2026-10-21T01:28:13.921467+05:30",
            "campaign": "AMOS",
            "confidence": "100%"
        },
        {
            "type": "url",
            "indicator": "hxxps://yk[.]abbastoto[.]org/p/",
            "description": "Vidar (botnet_cc)",
            "timestamp": "2026-10-20 18:20:48",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T01:28:13.921467+05:30",
            "campaign": "Vidar",
            "confidence": "100%"
        },
        {
            "type": "ip",
            "indicator": "45[.]88[.]186[.]191",
            "description": "Remcos (botnet_cc)",
            "timestamp": "2026-10-20 18:20:19",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "botnet",
                "verified"
            ],
            "addedAt": "2026-10-21T01:28:13.921467+05:30",
            "campaign": "Remcos",
            "confidence": "100%"
        },
        {
            "type": "domain",
            "indicator": "vonujava[.]workers[.]dev",
            "description": "php.shin_webshell (payload_delivery)",
            "timestamp": "2026-10-20 18:19:45",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-21 01:28 IST",
            "tags": [
                "verified"
            ],
            "addedAt": "2026-10-21T01:28:13.921467+05:30",
            "campaign": "php.shin_webshell",
            "confidence": "50%"
        }
    ],
    "dailySummary": {
        "stats": {
            "totalIndicators": 105079,
            "activeSources": 9,
            "criticalAlerts": 51441,
            "activeCampaigns": 391
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 40605,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "C2",
                "count": 10836,
                "trend": "stable",
                "percentage": -3
            },
            {
                "category": "Botnet",
                "count": 10034,
                "trend": "stable",
                "percentage": 4
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
                "count": 34712,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://42[.]6[.]201[.]210:34289/i",
                    "hxxp://cloud-browse[.]codes/9de40b36c2a8aaaad7e727a14d4f68f24afd8b3c311d92ecbcc7ac171368b0d8",
                    "hxxp://cloud-browse[.]codes/5c078b74c600e17cc635a453359d1d6292e0d502c21c5e95f813c11cad6e871b"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 29121,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]117[.]68[.]141",
                    "1[.]12[.]229[.]231",
                    "1[.]14[.]149[.]30"
                ]
            },
            {
                "name": "SSH Attacks",
                "count": 7455,
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
                "count": 2035,
                "types": [
                    "ssl-cert",
                    "hash",
                    "ip",
                    "domain",
                    "url"
                ],
                "sampleIndicators": [
                    "038cc0421ef5641c0565b39f51a4ce2bb768fa8190da3971c785e292c2f704d2",
                    "379a2944024fe73ff4af0d02eeb4764918f3009aa236207e0edd616cbfb84ccc",
                    "0d8f1752831cd45fbf6e4786cfd7e36997ab9835efdcfb7950b1db52e59f63f2"
                ]
            },
            {
                "name": "Mirai",
                "count": 1759,
                "types": [
                    "ip",
                    "url",
                    "hash",
                    "domain"
                ],
                "sampleIndicators": [
                    "71984854ab6628930ed2d823f183687e3a4e5d1feaa44f2ebf94a49fc05d656e",
                    "608c54828bfc8ce5cd0df31a5144caec555365ce10f94b79e2a0e55f57f64f8a",
                    "79dcf5f7965ecd1b596b78ba58e26ea56f93ca718fa55bc08247ac2d547f11b9"
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1649,
                "types": [
                    "ssl-cert",
                    "hash",
                    "ip",
                    "domain",
                    "url"
                ],
                "sampleIndicators": [
                    "c2b10b8c0d346d3e1201daea39713fbfaeb410e8b7fee94b0546a3fcdc91573f",
                    "1e98a36b2c40441a1bf33060bad8b52bf74ee659472aa15d3463bd51b118725f",
                    "fc255863ceab40f2510ddf29801e583015505861777f1c5d7e72ec164920f075"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1633,
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
        "totalAttacksThisHour": 59833,
        "lastCalculated": "2026-10-21 03:18 IST"
    }
};
