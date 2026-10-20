// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-21T01:28:20.475709+05:30 IST (2026-10-20 19:58 UTC)
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-21T01:28:19.759358+05:30",
    "lastUpdatedFormatted": "Oct 21, 2026 at 01:28 AM IST",
    "lastUpdatedUtc": "2026-10-20 19:58 UTC",
    "comparisonPeriod": "Oct 20 \u2013 Oct 21, 2026",
    "stats": {
        "totalIOCs": 103083,
        "byType": {
            "url": 44986,
            "ip": 38144,
            "hash": 4977,
            "domain": 2299,
            "ssl-cert": 10990,
            "ip-range": 1687
        },
        "byVendor": {
            "OpenPhish": 1240,
            "Malware Bazaar": 3137,
            "Spamhaus DROP": 1687,
            "CINS Army": 28040,
            "Blocklist.de": 7235,
            "URLhaus": 34600,
            "ThreatFox": 16149,
            "Feodo Tracker": 5,
            "SSL Blacklist": 10990
        },
        "topMalware": [
            {
                "name": "Vidar",
                "count": 2014,
                "types": [
                    "ip",
                    "ssl-cert",
                    "hash",
                    "url",
                    "domain"
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1657,
                "types": [
                    "ip",
                    "ssl-cert",
                    "hash",
                    "url",
                    "domain"
                ]
            },
            {
                "name": "Mirai",
                "count": 1558,
                "types": [
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
                "count": 1208,
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
                "count": 630,
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
                "count": 512,
                "types": [
                    "hash",
                    "ssl-cert"
                ]
            },
            {
                "name": "AMOS",
                "count": 508,
                "types": [
                    "hash",
                    "domain",
                    "url"
                ]
            }
        ],
        "recentIOCs": [
            {
                "type": "ssl-cert",
                "indicator": "59fb8a90649cac57e345fbd3af9f76d6a73fac12",
                "description": "Malicious SSL certificate - OffLoader C&C",
                "timestamp": "2026-10-20 06:27:30",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-20 19:01 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
                "analysisTime": "2026-10-20 19:01 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-20T19:01:07.884448+05:30",
                "campaign": "PureLogsStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "9061737b3e3cb6dae0a02abe33346d72ccd27af4",
                "description": "Malicious SSL certificate - RatonRAT C&C",
                "timestamp": "2026-10-20 06:25:33",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-20 19:01 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-20T19:01:07.884448+05:30",
                "campaign": "RatonRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "75964711a6e10849d232b5df09f428a4eaa48a68",
                "description": "Malicious SSL certificate - PureRAT C&C",
                "timestamp": "2026-10-20 06:25:14",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-20 19:01 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
                "analysisTime": "2026-10-20 19:01 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
                "analysisTime": "2026-10-20 19:01 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
                "analysisTime": "2026-10-20 19:01 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
                "analysisTime": "2026-10-20 19:01 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
                "analysisTime": "2026-10-20 19:01 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
                "analysisTime": "2026-10-20 19:01 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
                "analysisTime": "2026-10-20 19:01 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
                "analysisTime": "2026-10-20 19:01 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
                "analysisTime": "2026-10-20 19:01 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
                "analysisTime": "2026-10-20 19:01 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
                "analysisTime": "2026-10-20 19:01 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
                "analysisTime": "2026-10-20 19:01 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
                "analysisTime": "2026-10-20 19:01 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
                "analysisTime": "2026-10-20 19:01 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
                "analysisTime": "2026-10-20 19:01 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
                "analysisTime": "2026-10-20 19:01 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-20T19:01:07.884448+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            }
        ],
        "lastUpdated": "2026-10-21T01:28:19.759358+05:30",
        "lastUpdatedFormatted": "Oct 21, 2026 at 01:28 AM IST",
        "lastUpdatedUtc": "2026-10-20 19:58 UTC"
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
                "lastUpdate": "2026-10-20 19:58 UTC"
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
            "iocCount": 3272,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 3272,
                "newInLastHour": 135,
                "lastUpdate": "2026-10-20 19:58 UTC"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                "7b65cf3949733eb0f815b4296e690f0e4c83d202875ba54c6325373df99cacf6",
                "ce043a0bb3d7bdbee49705b04faec928fc75c99c9290b0afd1c1ec388b815534",
                "af0696cbbc292a295be2929668f034b18b6ffae295464842d8cd0193668b6981",
                "ffe615cf5607d1fc36d694ab6419d7babc9c0b164ef8848bea077da734b98d92",
                "71984854ab6628930ed2d823f183687e3a4e5d1feaa44f2ebf94a49fc05d656e"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1633,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1633,
                "newInLastHour": 5,
                "lastUpdate": "2026-10-20 19:58 UTC"
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
            "iocCount": 29121,
            "iocDataUrl": "https://thehgtech.com/ioc-data/cins-army.json",
            "stats": {
                "total": 29121,
                "newInLastHour": 15000,
                "lastUpdate": "2026-10-20 19:58 UTC"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]117[.]68[.]141",
                "1[.]12[.]229[.]231",
                "1[.]14[.]149[.]30",
                "1[.]145[.]89[.]105",
                "1[.]15[.]14[.]29"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 7455,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 7455,
                "newInLastHour": 5251,
                "lastUpdate": "2026-10-20 19:58 UTC"
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
            "iocCount": 34712,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 34712,
                "newInLastHour": 33906,
                "lastUpdate": "2026-10-20 19:58 UTC"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://42[.]6[.]201[.]210:34289/i",
                "hxxp://cloud-browse[.]codes/9de40b36c2a8aaaad7e727a14d4f68f24afd8b3c311d92ecbcc7ac171368b0d8",
                "hxxp://cloud-browse[.]codes/5c078b74c600e17cc635a453359d1d6292e0d502c21c5e95f813c11cad6e871b",
                "hxxp://182[.]127[.]167[.]206:45709/i",
                "hxxp://105[.]224[.]36[.]188:34011/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 17057,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 17057,
                "newInLastHour": 5129,
                "lastUpdate": "2026-10-20 19:58 UTC"
            },
            "types": [
                "ip",
                "domain",
                "hash",
                "url"
            ],
            "sampleIndicators": [
                "enywb85427[.]workers[.]dev",
                "1[.]92[.]135[.]168",
                "88[.]119[.]168[.]238",
                "hxxps://ok[.]abbastoto[.]org/gd/",
                "38[.]60[.]202[.]196"
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
                "lastUpdate": "2026-10-20 19:58 UTC"
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
            "iocCount": 10584,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10584,
                "newInLastHour": 13,
                "lastUpdate": "2026-10-20 19:58 UTC"
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
            "indicator": "59fb8a90649cac57e345fbd3af9f76d6a73fac12",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-10-20 06:27:30",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "9061737b3e3cb6dae0a02abe33346d72ccd27af4",
            "description": "Malicious SSL certificate - RatonRAT C&C",
            "timestamp": "2026-10-20 06:25:33",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
            "campaign": "RatonRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "75964711a6e10849d232b5df09f428a4eaa48a68",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-10-20 06:25:14",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
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
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "08715a9d4e9ce7466225ad56845853f652053ab9",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-04-14 09:29:45",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "62db81002bfaa1cbb0142baf9bac6651fb627aee",
            "description": "Malicious SSL certificate - STXRAT C&C",
            "timestamp": "2026-04-14 09:00:30",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
            "campaign": "STXRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "8ef1132c5f69f71c7a9cd95eae9da41763238767",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-04-14 08:46:33",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "9f1acf378f9d9cbefe0cfd1968c5193a6a804237",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-04-14 08:40:39",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "e2f5ea85358623b750f6d5bab64b2ad3ae085123",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-04-14 07:41:53",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "d06a26078f89783a6ed1c48a4add84247615a0ae",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-04-14 07:40:43",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "1598b0902f425d5a4895a58e5c48ebe96f9df1b5",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-04-14 06:14:57",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "174efb22d3859570e513fd87b17af9cbf106c980",
            "description": "Malicious SSL certificate - RatonRAT C&C",
            "timestamp": "2026-04-14 06:14:08",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
            "campaign": "RatonRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "0e54a9ea48587f39773ad27d4a8238ee19240408",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-04-14 06:05:36",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "fc60a49594bb081973d6856eebaabbc30730c446",
            "description": "Malicious SSL certificate - RatonRAT C&C",
            "timestamp": "2026-04-14 06:05:06",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
            "campaign": "RatonRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "23943a58946c0e85ada934588e3cdd70909e9d0f",
            "description": "Malicious SSL certificate - SantaStealer C&C",
            "timestamp": "2026-03-09 13:34:15",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
            "campaign": "SantaStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "0d967feb37696cc0d8efe72998132dac504a2091",
            "description": "Malicious SSL certificate - PureHVNC C&C",
            "timestamp": "2026-03-09 12:57:51",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 19:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T19:01:07.884448+05:30",
            "campaign": "PureHVNC",
            "confidence": "High"
        }
    ],
    "dailySummary": {
        "stats": {
            "totalIndicators": 103083,
            "activeSources": 9,
            "criticalAlerts": 51210,
            "activeCampaigns": 393
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 39970,
                "trend": "stable",
                "percentage": 2
            },
            {
                "category": "C2",
                "count": 11240,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "Botnet",
                "count": 9557,
                "trend": "stable",
                "percentage": 2
            },
            {
                "category": "Phishing",
                "count": 1242,
                "trend": "up",
                "percentage": 25
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
                "count": 34600,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://124[.]161[.]116[.]14:51225/bin[.]sh",
                    "hxxp://cloud-browse[.]codes/03b8d2bf77f41a58f41dc6bba89e72bf272e4ec517793ee42d5444b9a8f59693",
                    "hxxp://200[.]115[.]102[.]246:39366/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 28040,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]117[.]68[.]141",
                    "1[.]14[.]149[.]30",
                    "1[.]145[.]89[.]105"
                ]
            },
            {
                "name": "SSH Attacks",
                "count": 7235,
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
                "count": 2014,
                "types": [
                    "ip",
                    "ssl-cert",
                    "hash",
                    "url",
                    "domain"
                ],
                "sampleIndicators": [
                    "038cc0421ef5641c0565b39f51a4ce2bb768fa8190da3971c785e292c2f704d2",
                    "379a2944024fe73ff4af0d02eeb4764918f3009aa236207e0edd616cbfb84ccc",
                    "0d8f1752831cd45fbf6e4786cfd7e36997ab9835efdcfb7950b1db52e59f63f2"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1687,
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
                "count": 1657,
                "types": [
                    "ip",
                    "ssl-cert",
                    "hash",
                    "url",
                    "domain"
                ],
                "sampleIndicators": [
                    "1e98a36b2c40441a1bf33060bad8b52bf74ee659472aa15d3463bd51b118725f",
                    "fc255863ceab40f2510ddf29801e583015505861777f1c5d7e72ec164920f075",
                    "ca647b807e361ae45b779254dc17251364552d77ab354c90fdd73803ac5bca80"
                ]
            },
            {
                "name": "Mirai",
                "count": 1558,
                "types": [
                    "hash",
                    "ip",
                    "domain",
                    "url"
                ],
                "sampleIndicators": [
                    "c11d57472a70943367581b31d8732b29885470741b8aed1c7692956d9666eb91",
                    "e1e88c55bf8c1729f4c837565971fbeb0ea01440c2acf04cdcc8633dce7be88f",
                    "5f8f3d29de1ba59a484e984ea8f3e3d013c5aa903229a7a3aa121b506d64a6b8"
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
                "count": 1208,
                "types": [
                    "ip",
                    "domain"
                ],
                "sampleIndicators": [
                    "49[.]233[.]175[.]166",
                    "1[.]94[.]100[.]198",
                    "119[.]28[.]160[.]161"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "CINS Threat List",
        "totalAttacksThisHour": 59744,
        "lastCalculated": "2026-10-21 01:28 IST"
    }
};
