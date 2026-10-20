// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-21T04:38:26.417994+05:30 IST (2026-10-20 23:08 UTC)
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-21T04:38:25.581504+05:30",
    "lastUpdatedFormatted": "Oct 21, 2026 at 04:38 AM IST",
    "lastUpdatedUtc": "2026-10-20 23:08 UTC",
    "comparisonPeriod": "Oct 20 \u2013 Oct 21, 2026",
    "stats": {
        "totalIOCs": 106292,
        "byType": {
            "url": 45367,
            "ip": 40071,
            "hash": 5540,
            "domain": 2620,
            "ssl-cert": 11003,
            "ip-range": 1691
        },
        "byVendor": {
            "OpenPhish": 1240,
            "Malware Bazaar": 3298,
            "Spamhaus DROP": 1691,
            "CINS Army": 29651,
            "Blocklist.de": 7512,
            "URLhaus": 34728,
            "ThreatFox": 17164,
            "Feodo Tracker": 5,
            "SSL Blacklist": 11003
        },
        "topMalware": [
            {
                "name": "Vidar",
                "count": 2160,
                "types": [
                    "url",
                    "hash",
                    "ip",
                    "domain",
                    "ssl-cert"
                ]
            },
            {
                "name": "Mirai",
                "count": 1778,
                "types": [
                    "hash",
                    "domain",
                    "url",
                    "ip"
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1659,
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
                "count": 1211,
                "types": [
                    "domain",
                    "ip"
                ]
            },
            {
                "name": "QuasarRAT",
                "count": 738,
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
                "name": "AMOS",
                "count": 598,
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
                "count": 550,
                "types": [
                    "ssl-cert"
                ]
            },
            {
                "name": "ConnectWise",
                "count": 514,
                "types": [
                    "hash",
                    "ssl-cert"
                ]
            }
        ],
        "recentIOCs": [
            {
                "type": "ssl-cert",
                "indicator": "2c32691ea854fdd88474aec7283283c4e4fe9d10",
                "description": "Malicious SSL certificate - PureLogsStealer C&C",
                "timestamp": "2026-10-06 06:52:06",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-21 03:18 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-21T03:18:17.039937+05:30",
                "campaign": "PureLogsStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "d6b483d29d98e74b22cf0275061f76fbb0574176",
                "description": "Malicious SSL certificate - ConnectWise C&C",
                "timestamp": "2026-10-06 06:29:07",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-21 03:18 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-21T03:18:17.039937+05:30",
                "campaign": "ConnectWise",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "0446b968d2664c7d195cb91e4938bf6b92d819da",
                "description": "Malicious SSL certificate - ConnectWise C&C",
                "timestamp": "2026-10-06 06:28:46",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-21 03:18 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-21T03:18:17.039937+05:30",
                "campaign": "ConnectWise",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "85eeedf7693129c522860142f2eb0c84f5fb355e",
                "description": "Malicious SSL certificate - ConnectWise C&C",
                "timestamp": "2026-10-06 06:20:57",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-21 03:18 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-21T03:18:17.039937+05:30",
                "campaign": "ConnectWise",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "6917195681c5f23ea6ebabed360e26ab7ff93a67",
                "description": "Malicious SSL certificate - DCAgentRMM C&C",
                "timestamp": "2026-10-06 06:19:25",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-21 03:18 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-21T03:18:17.039937+05:30",
                "campaign": "DCAgentRMM",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "120de53c383886e618516713331d4b91f87cd855",
                "description": "Malicious SSL certificate - OffLoader C&C",
                "timestamp": "2026-10-06 06:18:40",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-21 03:18 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-21T03:18:17.039937+05:30",
                "campaign": "OffLoader",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "604d5a356e733c294284f85139f3da71d2ee3f34",
                "description": "Malicious SSL certificate - PureLogsStealer C&C",
                "timestamp": "2026-10-06 06:17:32",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-21 03:18 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-21T03:18:17.039937+05:30",
                "campaign": "PureLogsStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "65959355ba118cbe669682caf104b2f3466d12f7",
                "description": "Malicious SSL certificate - PureLogsStealer C&C",
                "timestamp": "2026-10-06 06:16:28",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-21 03:18 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-21T03:18:17.039937+05:30",
                "campaign": "PureLogsStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "99c899767c5745e980b27cf06025ab1e3b2e33d7",
                "description": "Malicious SSL certificate - PureLogsStealer C&C",
                "timestamp": "2026-10-06 06:15:16",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-21 03:18 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-21T03:18:17.039937+05:30",
                "campaign": "PureLogsStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "7a9913813778b16a5bf57aeb7dea4c93340c79c0",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-10-06 05:31:43",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-21 03:18 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-21T03:18:17.039937+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "adcff1c66a3ba1c9446886eb9f6efdbec4f17688",
                "description": "Malicious SSL certificate - ACRStealer C&C",
                "timestamp": "2026-09-21 16:26:12",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-21 03:18 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-21T03:18:17.039937+05:30",
                "campaign": "ACRStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "99500e5de097a58d95775e1f9da85597851bdb71",
                "description": "Malicious SSL certificate - AsyncRAT C&C",
                "timestamp": "2026-09-21 15:49:25",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-21 03:18 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-21T03:18:17.039937+05:30",
                "campaign": "AsyncRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "54e1ddda090bff894e88ccc2a784f0e9f4c46d97",
                "description": "Malicious SSL certificate - OffLoader C&C",
                "timestamp": "2026-09-21 15:48:46",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-21 03:18 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-21T03:18:17.039937+05:30",
                "campaign": "OffLoader",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "e458b2ccf8647aee41d64e46d1baadfc49e9e853",
                "description": "Malicious SSL certificate - OffLoader C&C",
                "timestamp": "2026-09-14 15:24:00",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-21 03:18 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-21T03:18:17.039937+05:30",
                "campaign": "OffLoader",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "14bc0ce6c63bf1c1554b4cd1772c60b57c38ab09",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-09-14 06:36:14",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-21 03:18 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-21T03:18:17.039937+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "7bc298ef18b49cfd44b5b429209035207250e25e",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-09-14 06:35:59",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-21 03:18 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-21T03:18:17.039937+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "d8f9205907b3bd3de4fb0513e5c53f167064a452",
                "description": "Malicious SSL certificate - OffLoader C&C",
                "timestamp": "2026-09-14 06:35:25",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-21 03:18 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-21T03:18:17.039937+05:30",
                "campaign": "OffLoader",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "b5daf66c6f8a99f2d6fe3fc678264598ec140049",
                "description": "Malicious SSL certificate - PureRAT C&C",
                "timestamp": "2026-09-07 06:44:32",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-21 03:18 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-21T03:18:17.039937+05:30",
                "campaign": "PureRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "b7c32dab3a4cd691ddcfee4bc1fed6d1d6f81c18",
                "description": "Malicious SSL certificate - AsyncRAT C&C",
                "timestamp": "2026-09-07 06:44:09",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-21 03:18 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-21T03:18:17.039937+05:30",
                "campaign": "AsyncRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "206850b799a53982b73accdefec94083f2094a6e",
                "description": "Malicious SSL certificate - PureRAT C&C",
                "timestamp": "2026-09-07 06:43:14",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-21 03:18 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-21T03:18:17.039937+05:30",
                "campaign": "PureRAT",
                "confidence": "High"
            }
        ],
        "lastUpdated": "2026-10-21T04:38:25.581504+05:30",
        "lastUpdatedFormatted": "Oct 21, 2026 at 04:38 AM IST",
        "lastUpdatedUtc": "2026-10-20 23:08 UTC"
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
                "lastUpdate": "2026-10-20 23:08 UTC"
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
            "iocCount": 3365,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 3365,
                "newInLastHour": 67,
                "lastUpdate": "2026-10-20 23:08 UTC"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                "13b4b87da6046356804ccfa023d66b9809371027b00f62fb4e4812dca34a1571",
                "b0d939113cc42319338078e15ce241ae1e70a00f259e4d47e2dcf04deb3bb224",
                "a367e7c92f579948345cb8cb91ed5bbce9a905b9ad225fc3bf9f85d8fc57735f",
                "a5c09629a1c611252b2c3cf3106ff45637342c47f54648f3ea708a2c66557741",
                "bf8dea8f2a21fbf1748ef8fb66f580e63a3bb786d284e55ce73dc6534d57a571"
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
                "newInLastHour": 0,
                "lastUpdate": "2026-10-20 23:08 UTC"
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
            "iocCount": 30014,
            "iocDataUrl": "https://thehgtech.com/ioc-data/cins-army.json",
            "stats": {
                "total": 30014,
                "newInLastHour": 15000,
                "lastUpdate": "2026-10-20 23:08 UTC"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]117[.]58[.]215",
                "1[.]117[.]68[.]141",
                "1[.]12[.]229[.]231",
                "1[.]14[.]149[.]30",
                "1[.]145[.]89[.]105"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 7618,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 7618,
                "newInLastHour": 5336,
                "lastUpdate": "2026-10-20 23:08 UTC"
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
            "iocCount": 34747,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 34747,
                "newInLastHour": 33941,
                "lastUpdate": "2026-10-20 23:08 UTC"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://27[.]215[.]183[.]88:47775/i",
                "hxxp://175[.]151[.]226[.]239:55244/i",
                "hxxp://106[.]125[.]211[.]232:36465/i",
                "hxxp://182[.]126[.]94[.]195:34947/i",
                "hxxp://82[.]165[.]60[.]187:8080/bins/watchdog"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 17326,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 17326,
                "newInLastHour": 4935,
                "lastUpdate": "2026-10-20 23:08 UTC"
            },
            "types": [
                "hash",
                "domain",
                "url",
                "ip"
            ],
            "sampleIndicators": [
                "156[.]240[.]41[.]55",
                "156[.]240[.]41[.]48",
                "156[.]240[.]41[.]49",
                "156[.]240[.]41[.]51",
                "156[.]240[.]41[.]36"
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
                "lastUpdate": "2026-10-20 23:08 UTC"
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
            "iocCount": 10985,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10985,
                "newInLastHour": 0,
                "lastUpdate": "2026-10-20 23:08 UTC"
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
            "indicator": "2c32691ea854fdd88474aec7283283c4e4fe9d10",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-10-06 06:52:06",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "d6b483d29d98e74b22cf0275061f76fbb0574176",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-10-06 06:29:07",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "0446b968d2664c7d195cb91e4938bf6b92d819da",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-10-06 06:28:46",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "85eeedf7693129c522860142f2eb0c84f5fb355e",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-10-06 06:20:57",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "6917195681c5f23ea6ebabed360e26ab7ff93a67",
            "description": "Malicious SSL certificate - DCAgentRMM C&C",
            "timestamp": "2026-10-06 06:19:25",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "DCAgentRMM",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "120de53c383886e618516713331d4b91f87cd855",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-10-06 06:18:40",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "604d5a356e733c294284f85139f3da71d2ee3f34",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-10-06 06:17:32",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "65959355ba118cbe669682caf104b2f3466d12f7",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-10-06 06:16:28",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "99c899767c5745e980b27cf06025ab1e3b2e33d7",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-10-06 06:15:16",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "7a9913813778b16a5bf57aeb7dea4c93340c79c0",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-06 05:31:43",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "adcff1c66a3ba1c9446886eb9f6efdbec4f17688",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-09-21 16:26:12",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "99500e5de097a58d95775e1f9da85597851bdb71",
            "description": "Malicious SSL certificate - AsyncRAT C&C",
            "timestamp": "2026-09-21 15:49:25",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "AsyncRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "54e1ddda090bff894e88ccc2a784f0e9f4c46d97",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-09-21 15:48:46",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "e458b2ccf8647aee41d64e46d1baadfc49e9e853",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-09-14 15:24:00",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "14bc0ce6c63bf1c1554b4cd1772c60b57c38ab09",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-09-14 06:36:14",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "7bc298ef18b49cfd44b5b429209035207250e25e",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-09-14 06:35:59",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "d8f9205907b3bd3de4fb0513e5c53f167064a452",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-09-14 06:35:25",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "b5daf66c6f8a99f2d6fe3fc678264598ec140049",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-09-07 06:44:32",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "b7c32dab3a4cd691ddcfee4bc1fed6d1d6f81c18",
            "description": "Malicious SSL certificate - AsyncRAT C&C",
            "timestamp": "2026-09-07 06:44:09",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "AsyncRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "206850b799a53982b73accdefec94083f2094a6e",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-09-07 06:43:14",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "e00005ae100b2af24cf6d7f71b7cd123f8b916be",
            "description": "Malicious SSL certificate - DCRat C&C",
            "timestamp": "2026-09-07 06:43:05",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "DCRat",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "2a2c44f91a961c0b573d1e823f314fb4ffbc88dd",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-09-07 06:41:53",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "7d7d8f52b3aee2d5233b2f8cc838cd08a6036c1d",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-09-07 06:40:42",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "a974b9d90161d8c5221961c65a975d81959cdb40",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-30 17:53:11",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "0034d3f66acca402e4ae3d683e435f10d513006a",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-08-08 20:40:06",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "1ab7aaf074b1e925322cd328b4d1343f46f4f91b",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-08-08 20:37:37",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "45bbc5ebc131cca9663c35c95459564007049d07",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-07-25 12:04:12",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "1e5253b44aa68a4b31f0dfc07df48b31798debca",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-07-18 18:09:52",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "7f563e6df9b87f615f2d492ba68d5df373a6ca26",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-07-18 17:51:37",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "a133ce088d9ead15855e1343b8e643736d47d7d9",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-07-11 07:17:27",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "dcbc383f1a16d4b8baa7bfca1bb023f7f65c36f7",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-07-11 06:54:46",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "22cb3cb6d7b5b158d2156b1bd4018db8b5433ea7",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-07-11 06:54:09",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "1199461c382373b4645960ca6875028d7c96ce16",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-07-11 06:53:57",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "2516492455c882b6a07fbcb076f31a06b2a71963",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-07-11 06:52:13",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "8b6153391f8b6caaad5e0c11054a98ff35e4b605",
            "description": "Malicious SSL certificate - ZigClipper C&C",
            "timestamp": "2026-07-11 06:52:02",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "ZigClipper",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "b0e16234706cee8e6f50f6397b88aab1d6ee4345",
            "description": "Malicious SSL certificate - ZigClipper C&C",
            "timestamp": "2026-07-11 06:52:00",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "ZigClipper",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "6852cc75937e2d30455d30257da88d19e57d5ef2",
            "description": "Malicious SSL certificate - Malware distribution",
            "timestamp": "2026-07-11 06:51:52",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "ee36218aaa01a8d8f352e02bc851092fbcf1f1a2",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-07-11 06:51:33",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "01dcaf71bc0dc821c2df145680dee05578368355",
            "description": "Malicious SSL certificate - KongTuke C&C",
            "timestamp": "2026-06-19 13:51:31",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "KongTuke",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "e81bedd0d62805a9bcad2b1cd652435cd9a59bcc",
            "description": "Malicious SSL certificate - KongTuke C&C",
            "timestamp": "2026-06-12 06:18:44",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "KongTuke",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "e1c32b52b297f07860e5c2ff0b0ef604d8d929fc",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-06-05 05:40:02",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "ded6028ef62f0258e17121e6beece5d9b124d48f",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-06-05 05:16:17",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "545e17b0c27640889044d9780ef0f3ad8825b55a",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-06-05 05:15:27",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "12a50b5c46ccd3c1dc155c31eb30438cc2225e89",
            "description": "Malicious SSL certificate - CobaltStrike C&C",
            "timestamp": "2026-06-05 05:14:19",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "CobaltStrike",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "7cf0a3e58ceb76c0839efdd4adf64dd64fa6f6f2",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-06-05 05:12:46",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "90e3298b9df7e2c9ba08cc32cab77dee09be4f30",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-06-05 05:06:59",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "28c3106cd1cec9a5dfec7f2ba3b0dd7e70784429",
            "description": "Malicious SSL certificate - QuasarRAT C&C",
            "timestamp": "2026-06-04 18:12:37",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "QuasarRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "7162dcab7590a4a6080e97d04f49cf0939db039c",
            "description": "Malicious SSL certificate - KongTuke C&C",
            "timestamp": "2026-06-04 17:57:47",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "KongTuke",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "e42d598b3e6edb6b1899c5a72d03de435a82e4a3",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-06-04 14:32:26",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "ff83fb186112903cb2e39578e268e1937cea9317",
            "description": "Malicious SSL certificate - LiberiumRAT C&C",
            "timestamp": "2026-06-04 08:30:43",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "LiberiumRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "f9f3f5ba3c746db5200118359cc83768d457e849",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-06-04 08:29:15",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "caff4adfa4b82c536fb487576f223a5ee64d4194",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-06-04 08:27:15",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "f86f5e9268dc6dda71fc61ebb657feeaadb9cec9",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-06-04 08:26:29",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "25cec5dfbffe744af691b5fe996769cc84244f78",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-06-04 08:19:06",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "73fd6642b1856961ecc5c484d64b8e4fdbc52938",
            "description": "Malicious SSL certificate - RatonRAT C&C",
            "timestamp": "2026-06-04 07:58:45",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "RatonRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "bf26c599e3f5ea932f7b8c592138d42d49837713",
            "description": "Malicious SSL certificate - QuasarRAT C&C",
            "timestamp": "2026-06-04 07:58:25",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "QuasarRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "c03231e2f73ff60033ad62bb15825fe300250b40",
            "description": "Malicious SSL certificate - PureHVNC C&C",
            "timestamp": "2026-06-04 07:58:11",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "PureHVNC",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "ae87b4dab40e1d42fe3558bab959204a915be547",
            "description": "Malicious SSL certificate - GhostPulse C&C",
            "timestamp": "2026-06-04 07:58:00",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "GhostPulse",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "564b4902e12a0412bc9df5369f51cd6d273d5974",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-06-04 07:57:34",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "c8e467b8079c136bf678b3d96129f3f73e1af7ea",
            "description": "Malicious SSL certificate - BloxStealer C&C",
            "timestamp": "2026-06-04 07:57:18",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "BloxStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "fb65cb3929bf5df8ed6de3cb5b2c6b87b3f6e3d9",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-06-04 07:55:44",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "5b27051d67aa2cce9314596003b68709a13fc003",
            "description": "Malicious SSL certificate - QuasarRAT C&C",
            "timestamp": "2026-06-04 07:55:11",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "QuasarRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "8d3af387e977c9f7725d1b7815d94d19855f1bfb",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-06-04 07:55:00",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "1ac05fe7afa7319eeb2b9778c1e5813b3a812cbc",
            "description": "Malicious SSL certificate - PureHVNC C&C",
            "timestamp": "2026-06-04 07:47:29",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "PureHVNC",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "0ec9537b097728cac0888bf4e5ea33aa93dc8b0f",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-06-04 06:43:18",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "81a2f4a6d8b0f68689ef88ab80f910bc49dee5b0",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-06-04 06:00:16",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "b50cde8b1aad72f56fcdb45ed3478618b0f23bda",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-06-04 05:58:51",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "a4533c805837a80effd9ff29809a4b3bdd0de131",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-06-04 05:38:31",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "5ee4d7b604f171d33d76834a9189a8ebb4cf7948",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-06-04 05:37:21",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "7846af5f9280411a6026de26920ac9ea9b2c4bcd",
            "description": "Malicious SSL certificate - KongTuke C&C",
            "timestamp": "2026-06-04 05:28:34",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "KongTuke",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "8e733b34e95a7b98ada40292b8d35e9040016e65",
            "description": "Malicious SSL certificate - QuasarRAT C&C",
            "timestamp": "2026-05-28 13:09:53",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "QuasarRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "4b19add85966daaef23fdea4c1527633a36a88ba",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-05-28 13:09:31",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "9c5605a73a159de919523a8f844814d47e79a321",
            "description": "Malicious SSL certificate - PureHVNC C&C",
            "timestamp": "2026-05-28 11:46:44",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "PureHVNC",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "1fe4d1c9b7106f25e606894cb6a64f69c4862b29",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-05-28 09:13:19",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "5d7baf5503517e28f05467332d905eb8193e651b",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-05-28 07:50:17",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "9f0d33c1eaa7afd41009d0ec594c0a408d2df123",
            "description": "Malicious SSL certificate - QuasarRAT C&C",
            "timestamp": "2026-05-28 07:48:46",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "QuasarRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "572a6064cb85cd5eef1204d45625640cf982c1ce",
            "description": "Malicious SSL certificate - RatonRAT C&C",
            "timestamp": "2026-05-28 07:48:41",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "RatonRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "2de4fd0094bc96c8339f3b8c67985f8a7b89b84a",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-05-28 07:48:03",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "a9f5a1cdf5c8168262c2e6cf9351698e156eeebd",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-05-28 07:21:32",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "e46daac5110a9833887fb014ff2abfe4d93acca3",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-05-28 07:21:11",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "753813a52be7893b0d66184503b62cc2bfcaebc4",
            "description": "Malicious SSL certificate - DCRat C&C",
            "timestamp": "2026-05-28 07:17:47",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "DCRat",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "3b1e86b2d02b689e8fe1bf9416c64129e87f71ae",
            "description": "Malicious SSL certificate - RatonRAT C&C",
            "timestamp": "2026-05-28 07:16:07",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "RatonRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "1b697067f699bc99bf6a48d003bfd9c9b289450d",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-05-28 07:15:42",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "e69e1ee3a1dd8500353a3d45dbc8ebd21c584863",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-05-28 07:14:21",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "7bba8eb1da43142534144a1aaf30b1be8a5ed134",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-05-28 07:14:05",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "d094f88c63e4ec8e84ec40ac2d22d5a3d87c419a",
            "description": "Malicious SSL certificate - PureHVNC C&C",
            "timestamp": "2026-05-28 07:13:27",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "PureHVNC",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "f3b02175ff6d2bbf0149b4a450acdf2a9f2897c8",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-05-28 07:04:01",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "950228630a9d834955a535e7faa67f7e07a5575e",
            "description": "Malicious SSL certificate - RatonRAT C&C",
            "timestamp": "2026-05-28 07:03:32",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "RatonRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "167ddfd671ef30c31528515389cfdd11d9251558",
            "description": "Malicious SSL certificate - AsyncRAT C&C",
            "timestamp": "2026-05-21 12:04:36",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "AsyncRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "3cf2e022211760871544ad891d3b3b698c5f8792",
            "description": "Malicious SSL certificate - CountLoader C&C",
            "timestamp": "2026-05-21 12:04:23",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "CountLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "0d5b0889c583e4da90b365b1d73959a9ea745a86",
            "description": "Malicious SSL certificate - CountLoader C&C",
            "timestamp": "2026-05-21 12:02:18",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "CountLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "53c0f0608e2d03a10eab7e3a98d1de6c4ff534e6",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-05-21 09:15:50",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "eb6901b9b0d7f6f53fcc09172d5182305ca358f9",
            "description": "Malicious SSL certificate - PureHVNC C&C",
            "timestamp": "2026-05-21 09:14:04",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "PureHVNC",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "158cd4701d337bfb42199fa6f6c448633007175f",
            "description": "Malicious SSL certificate - PureHVNC C&C",
            "timestamp": "2026-05-21 09:13:36",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "PureHVNC",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "493f6dbb48806992e524df2a3a0fa0348cef243b",
            "description": "Malicious SSL certificate - QuasarRAT C&C",
            "timestamp": "2026-05-21 09:08:34",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "QuasarRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "00c4f579eecf9667648c6df1dddeca622092dc85",
            "description": "Malicious SSL certificate - PureHVNC C&C",
            "timestamp": "2026-05-21 09:07:25",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "PureHVNC",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "9478cda025f97596ea9bdad5981657d5c60fd1a5",
            "description": "Malicious SSL certificate - PureHVNC C&C",
            "timestamp": "2026-05-21 07:44:23",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "PureHVNC",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "47dc97dd3c0001f90dfe09c8939dc226fec0629b",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-05-21 07:42:46",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "d42a4a7e721a0503d81e3f47c72a0f93c53e4f2c",
            "description": "Malicious SSL certificate - AsyncRAT C&C",
            "timestamp": "2026-05-21 07:42:31",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "AsyncRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "a8c2723f3a4222f242fd95886ca19358ac0b138c",
            "description": "Malicious SSL certificate - PureHVNC C&C",
            "timestamp": "2026-05-21 07:41:43",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-21 03:18 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-21T03:18:17.039937+05:30",
            "campaign": "PureHVNC",
            "confidence": "High"
        }
    ],
    "dailySummary": {
        "stats": {
            "totalIndicators": 106292,
            "activeSources": 9,
            "criticalAlerts": 51939,
            "activeCampaigns": 394
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 40684,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 11255,
                "trend": "stable",
                "percentage": 3
            },
            {
                "category": "Botnet",
                "count": 10099,
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
                "count": 34728,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://27[.]204[.]199[.]169:48669/i",
                    "hxxp://222[.]141[.]63[.]159:57872/bin[.]sh",
                    "hxxp://115[.]48[.]146[.]56:37418/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 29651,
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
                "count": 7512,
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
                "count": 2160,
                "types": [
                    "url",
                    "hash",
                    "ip",
                    "domain",
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "038cc0421ef5641c0565b39f51a4ce2bb768fa8190da3971c785e292c2f704d2",
                    "379a2944024fe73ff4af0d02eeb4764918f3009aa236207e0edd616cbfb84ccc",
                    "0d8f1752831cd45fbf6e4786cfd7e36997ab9835efdcfb7950b1db52e59f63f2"
                ]
            },
            {
                "name": "Mirai",
                "count": 1778,
                "types": [
                    "hash",
                    "domain",
                    "url",
                    "ip"
                ],
                "sampleIndicators": [
                    "693ac9c894b9e9def660ecb851db81f6f0f3ed94bf75ce2807ee18d6e38b2f98",
                    "704f4e68b3dfb5b0a47e98b029e31695bebee202de88f843f5e33d05170b03ab",
                    "99f64eff67c3c742e8677c7e844610e7be93d8ee1ac666910675af651b7e968d"
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
                "count": 1659,
                "types": [
                    "url",
                    "hash",
                    "ip",
                    "domain",
                    "ssl-cert"
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
                    "domain",
                    "ip"
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
        "totalAttacksThisHour": 59584,
        "lastCalculated": "2026-10-21 04:38 IST"
    }
};
