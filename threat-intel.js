// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-11-10T07:13:31.170034+05:30 IST (2026-11-10 01:43 UTC)
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-11-10T07:13:30.360530+05:30",
    "lastUpdatedFormatted": "Nov 10, 2026 at 07:13 AM IST",
    "lastUpdatedUtc": "2026-11-10 01:43 UTC",
    "comparisonPeriod": "Nov 09 \u2013 Nov 10, 2026",
    "stats": {
        "totalIOCs": 106693,
        "byType": {
            "url": 39100,
            "ip": 51860,
            "hash": 641,
            "domain": 2158,
            "ssl-cert": 11195,
            "ip-range": 1739
        },
        "byVendor": {
            "OpenPhish": 3413,
            "Malware Bazaar": 476,
            "Spamhaus DROP": 1739,
            "CINS Army": 39071,
            "Blocklist.de": 10239,
            "URLhaus": 34528,
            "ThreatFox": 6027,
            "Feodo Tracker": 5,
            "SSL Blacklist": 11195
        },
        "topMalware": [
            {
                "name": "Vidar",
                "count": 1726,
                "types": [
                    "ssl-cert",
                    "domain",
                    "url",
                    "hash"
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1628,
                "types": [
                    "ssl-cert",
                    "domain",
                    "ip",
                    "hash"
                ]
            },
            {
                "name": "Cobalt Strike",
                "count": 1183,
                "types": [
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
                "count": 731,
                "types": [
                    "ssl-cert",
                    "hash"
                ]
            },
            {
                "name": "IClickFix",
                "count": 708,
                "types": [
                    "domain",
                    "url"
                ]
            },
            {
                "name": "OffLoader",
                "count": 565,
                "types": [
                    "ssl-cert"
                ]
            },
            {
                "name": "ConnectWise",
                "count": 559,
                "types": [
                    "ssl-cert",
                    "hash"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 558,
                "types": [
                    "ssl-cert"
                ]
            },
            {
                "name": "PureRAT",
                "count": 455,
                "types": [
                    "ip",
                    "ssl-cert"
                ]
            },
            {
                "name": "Malware",
                "count": 428,
                "types": [
                    "ssl-cert"
                ]
            },
            {
                "name": "Rhadamanthys",
                "count": 355,
                "types": [
                    "ssl-cert"
                ]
            },
            {
                "name": "DCRat",
                "count": 349,
                "types": [
                    "ip",
                    "ssl-cert"
                ]
            },
            {
                "name": "Gozi",
                "count": 349,
                "types": [
                    "ssl-cert"
                ]
            },
            {
                "name": "Quakbot",
                "count": 292,
                "types": [
                    "ssl-cert"
                ]
            }
        ],
        "recentIOCs": [
            {
                "type": "ssl-cert",
                "indicator": "abc4b076eb276da57cf8a36e7eeca9df713dd83c",
                "description": "Malicious SSL certificate - PureLogsStealer C&C",
                "timestamp": "2026-11-09 10:16:33",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-10 00:11 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-10T00:11:20.458750+05:30",
                "campaign": "PureLogsStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "19191f7bd7d31b4da986d645a6dfba8fef74fdf9",
                "description": "Malicious SSL certificate - OffLoader C&C",
                "timestamp": "2026-11-09 10:06:09",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-10 00:11 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-10T00:11:20.458750+05:30",
                "campaign": "OffLoader",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "4943decccfc5b78cd1d60fab5424bd93d5243aa3",
                "description": "Malicious SSL certificate - FunStealer C&C",
                "timestamp": "2026-11-09 10:05:08",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-10 00:11 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-10T00:11:20.458750+05:30",
                "campaign": "FunStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "699efdab8a4d32ffa62dd1a97261e3edd5c5f87a",
                "description": "Malicious SSL certificate - PureLogsStealer C&C",
                "timestamp": "2026-11-09 10:03:49",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-10 00:11 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-10T00:11:20.458750+05:30",
                "campaign": "PureLogsStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "d7f8e6d688805e759b5e9346215212cd246a4b3c",
                "description": "Malicious SSL certificate - PureLogsStealer C&C",
                "timestamp": "2026-11-09 10:03:09",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-10 00:11 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-10T00:11:20.458750+05:30",
                "campaign": "PureLogsStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "5ccb6f0fb1de883e059a42b51e192eb4fca92373",
                "description": "Malicious SSL certificate - PureLogsStealer C&C",
                "timestamp": "2026-11-09 10:02:54",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-10 00:11 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-10T00:11:20.458750+05:30",
                "campaign": "PureLogsStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "fb642f9c2a93001eca125a11326d4ff6c0edd834",
                "description": "Malicious SSL certificate - PureLogsStealer C&C",
                "timestamp": "2026-11-09 10:02:52",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-10 00:11 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-10T00:11:20.458750+05:30",
                "campaign": "PureLogsStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "0a86f564799b68d6daec13f71654431f5bceba37",
                "description": "Malicious SSL certificate - ACRStealer C&C",
                "timestamp": "2026-11-09 10:01:45",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-10 00:11 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-10T00:11:20.458750+05:30",
                "campaign": "ACRStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "ea53cd87676a1e4bcc32a376166e21c729695daf",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-11-09 09:59:24",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-10 00:11 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-10T00:11:20.458750+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "9b3e876bcc01d08cdcfaf88ee65cdd0a37d19ac9",
                "description": "Malicious SSL certificate - RemusStealer C&C",
                "timestamp": "2026-11-09 09:58:39",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-10 00:11 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-10T00:11:20.458750+05:30",
                "campaign": "RemusStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "105f909fc4a6d331ae1f63b5b85d5260c9bb5dfd",
                "description": "Malicious SSL certificate - RemusStealer C&C",
                "timestamp": "2026-11-09 09:55:03",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-10 00:11 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-10T00:11:20.458750+05:30",
                "campaign": "RemusStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "54f3060077130ecb0878934a52d37ec9994b2959",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-11-09 09:54:37",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-10 00:11 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-10T00:11:20.458750+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "3cca61aae64588c6aeb99e549121bd90845df64b",
                "description": "Malicious SSL certificate - RemusStealer C&C",
                "timestamp": "2026-11-09 09:50:43",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-10 00:11 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-10T00:11:20.458750+05:30",
                "campaign": "RemusStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "77c2751f1c3f54478af095b519ee9bda9ae6a893",
                "description": "Malicious SSL certificate - RemusStealer C&C",
                "timestamp": "2026-11-09 09:50:42",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-10 00:11 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-10T00:11:20.458750+05:30",
                "campaign": "RemusStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "3196a6cb1fa37ee8fccc0ad7e384f3abb7e83116",
                "description": "Malicious SSL certificate - RemusStealer C&C",
                "timestamp": "2026-11-09 09:50:41",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-10 00:11 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-10T00:11:20.458750+05:30",
                "campaign": "RemusStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "74dbbbef44c355626c83aa8cedcbb86ea6acec58",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-11-09 09:50:04",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-10 00:11 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-10T00:11:20.458750+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "bfbccde2f1ab3e71036fa5b002fb9604a078ac48",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-11-09 09:48:27",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-10 00:11 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-10T00:11:20.458750+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ip",
                "indicator": "162[.]243[.]103[.]246",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-11-10 00:11 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-11-10 00:11 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-11-10T00:11:19.065152+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "178[.]62[.]3[.]223",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-11-10 00:11 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-11-10 00:11 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-11-10T00:11:19.065152+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "27[.]133[.]154[.]218",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-11-10 00:11 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-11-10 00:11 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-11-10T00:11:19.065152+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            }
        ],
        "lastUpdated": "2026-11-10T07:13:30.360530+05:30",
        "lastUpdatedFormatted": "Nov 10, 2026 at 07:13 AM IST",
        "lastUpdatedUtc": "2026-11-10 01:43 UTC"
    },
    "vendors": {
        "OpenPhish": {
            "description": "Real-time phishing URL feed updated every 15 minutes. Tracks active phishing sites targeting major brands and financial institutions.",
            "website": "https://openphish.com/",
            "updateFrequency": "Every 15 minutes",
            "iocCount": 3644,
            "iocDataUrl": "https://thehgtech.com/ioc-data/openphish.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 3644,
                "newInLastHour": 300,
                "lastUpdate": "2026-11-10 01:43 UTC",
                "isStale": false,
                "feedStatus": "active"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://www[.]facebook-q[.]blogspot[.]com/",
                "hxxps://facebokksecurity[.]blogspot[.]com/",
                "hxxps://www[.]facebokksecurity[.]blogspot[.]com/",
                "hxxps://im[.]nbpublic[.]com/loading_page/walmart/walmart_cf_36/index[.]html?lptoken=176d947e255942fc86ca&cep=N4Igdgpg7g%2BgFgSwC4wQExALhARgEwCGAZgMwEBGRAtGngAwAcVALASWlQJxEDG1JDIgDYArCIiMSAdk4gANCABuCAM7JUGbGIZ48QqdR5DmdFp0JcSdIVTp0inKTxGdydThHlLV6pAgC2ECpIBP4ADlgg9HpUODi2nAAqOJyYeAyY1gB0JMwMAFpeympIAPYAThqRzOQiPDxSdCRURBBC8cwiFgwpEC3kPHRo9gZC7l48oWEECADmYFXYQpwMeRDOPCQuUjh2%2BMxoBpwYCmClaBCLIHQweF5nFzBIAJ5hntgAMgRgaAhgs%2FdzpceHAZmAsABta63EAAXQUYXKQQgABt1kgIGgYA93qAXm9Il8fn8AQoQuVZhAUOhIstVuYegw0PhyMM6PspMxGkJAY8adgbndThAAB5ILB417vEAAeSIrXKXnJlOpmhAdLWDEm2nIjXZeB4tQI1l5l350JudAAPjccDBrYL7fdReLMGAAK4olEAX29ChBYJgYVKJQQpXBmFAPHd5SRYCQADkgQBJH6irB0BTkcrfEGp348IKQ2F%2BkCqGBI35IniupDld0QBQARxUEUjpfLkCgWCIBBRKgg3qAA%3D&cpid=69848ec5c3597100124d7f9d",
                "hxxps://www[.]i9rhmhd1[.]ztljm3t[.]cc/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 476,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "isStale": true,
            "feedStatus": "stale",
            "stats": {
                "total": 476,
                "newInLastHour": 0,
                "lastUpdate": "2026-11-10 01:43 UTC",
                "isStale": true,
                "feedStatus": "stale"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                "02414b05a19c9ff826c3cfca15849c0a32a26dd5593ce6165f01e883a6fc6ae2",
                "f3e50b8e9f28213c52ad0001a3fd251075bc79583d80d433b4e47d95a238bebd",
                "d73112757c5e01bf2fb84dfb69f5d51bba8e63e72d4eb862266665a93a76be0a",
                "4504dca6f7874b8c561ec4af241fcce472cf760e9b66cafe2aa09fe09116a28c",
                "1c1e6ff2befc51e413c37961e0cfc2e4bca62043560964e9df56abd477568b77"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1764,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 1764,
                "newInLastHour": 27,
                "lastUpdate": "2026-11-10 01:43 UTC",
                "isStale": false,
                "feedStatus": "active"
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
            "iocCount": 39002,
            "iocDataUrl": "https://thehgtech.com/ioc-data/cins-army.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 39002,
                "newInLastHour": 15000,
                "lastUpdate": "2026-11-10 01:43 UTC",
                "isStale": false,
                "feedStatus": "active"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]12[.]229[.]231",
                "1[.]15[.]14[.]29",
                "1[.]169[.]35[.]122",
                "1[.]183[.]226[.]72",
                "1[.]192[.]129[.]106"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 10355,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 10355,
                "newInLastHour": 4286,
                "lastUpdate": "2026-11-10 01:43 UTC",
                "isStale": false,
                "feedStatus": "active"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]12[.]70[.]212",
                "1[.]13[.]181[.]113",
                "1[.]162[.]217[.]195",
                "1[.]180[.]246[.]242",
                "1[.]214[.]214[.]114"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 34528,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "isStale": true,
            "feedStatus": "stale",
            "stats": {
                "total": 34528,
                "newInLastHour": 0,
                "lastUpdate": "2026-11-10 01:43 UTC",
                "isStale": true,
                "feedStatus": "stale"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://raw[.]githubusercontent[.]com/rcrishabh/Loud-No-More/refs/heads/master/endotys/No-More-Loud-v1[.]0[.]zip",
                "hxxps://raw[.]githubusercontent[.]com/Shishir-Singh-666/nodepay2nd/refs/heads/main/src/nd_nodepay_v1[.]9[.]zip",
                "hxxps://raw[.]githubusercontent[.]com/Kurvaan/ptx-tutorial-by-aislop/refs/heads/main/sections/by_ptx_tutorial_aislop_3[.]2[.]zip",
                "hxxps://raw[.]githubusercontent[.]com/Gajaa-Azhura/MERN-application/refs/heads/master/src/assets/application_MER_2[.]1[.]zip",
                "hxxps://raw[.]githubusercontent[.]com/Gourdja/sonic-skills/refs/heads/main/skills/audio-numerics-review/skills-sonic-v3[.]4[.]zip"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 6027,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "isStale": true,
            "feedStatus": "stale",
            "stats": {
                "total": 6027,
                "newInLastHour": 0,
                "lastUpdate": "2026-11-10 01:43 UTC",
                "isStale": true,
                "feedStatus": "stale"
            },
            "types": [
                "domain",
                "url",
                "ip",
                "hash"
            ],
            "sampleIndicators": [
                "b4ec1ea1528a1cf690b1067a214751cfee1ef0eca037c7989b4bef17fbf6b53b",
                "89[.]32[.]41[.]109",
                "89[.]32[.]41[.]111",
                "89[.]32[.]41[.]117",
                "202cd87d43a3908174e7b219c61ad3728cc6d46469a54f86861470c19677a6da"
            ]
        },
        "Feodo Tracker": {
            "description": "Botnet C2 server IPs from Feodo Tracker. Tracks Dridex, Emotet, TrickBot, QakBot, and BazarLoader.",
            "website": "https://feodotracker.abuse.ch/",
            "updateFrequency": "Hourly",
            "iocCount": 5,
            "iocDataUrl": "https://thehgtech.com/ioc-data/feodo-tracker.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 5,
                "newInLastHour": 5,
                "lastUpdate": "2026-11-10 01:43 UTC",
                "isStale": false,
                "feedStatus": "active"
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
            "iocCount": 11202,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 11202,
                "newInLastHour": 7,
                "lastUpdate": "2026-11-10 01:43 UTC",
                "isStale": false,
                "feedStatus": "active"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "abc4b076eb276da57cf8a36e7eeca9df713dd83c",
                "19191f7bd7d31b4da986d645a6dfba8fef74fdf9",
                "4943decccfc5b78cd1d60fab5424bd93d5243aa3",
                "699efdab8a4d32ffa62dd1a97261e3edd5c5f87a",
                "d7f8e6d688805e759b5e9346215212cd246a4b3c"
            ]
        }
    },
    "overview": [
        {
            "type": "ssl-cert",
            "indicator": "abc4b076eb276da57cf8a36e7eeca9df713dd83c",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-11-09 10:16:33",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-10T00:11:20.458750+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "19191f7bd7d31b4da986d645a6dfba8fef74fdf9",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-11-09 10:06:09",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-10T00:11:20.458750+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "4943decccfc5b78cd1d60fab5424bd93d5243aa3",
            "description": "Malicious SSL certificate - FunStealer C&C",
            "timestamp": "2026-11-09 10:05:08",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-10T00:11:20.458750+05:30",
            "campaign": "FunStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "699efdab8a4d32ffa62dd1a97261e3edd5c5f87a",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-11-09 10:03:49",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-10T00:11:20.458750+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "d7f8e6d688805e759b5e9346215212cd246a4b3c",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-11-09 10:03:09",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-10T00:11:20.458750+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "5ccb6f0fb1de883e059a42b51e192eb4fca92373",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-11-09 10:02:54",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-10T00:11:20.458750+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "fb642f9c2a93001eca125a11326d4ff6c0edd834",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-11-09 10:02:52",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-10T00:11:20.458750+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "0a86f564799b68d6daec13f71654431f5bceba37",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-11-09 10:01:45",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-10T00:11:20.458750+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "ea53cd87676a1e4bcc32a376166e21c729695daf",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-11-09 09:59:24",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-10T00:11:20.458750+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "9b3e876bcc01d08cdcfaf88ee65cdd0a37d19ac9",
            "description": "Malicious SSL certificate - RemusStealer C&C",
            "timestamp": "2026-11-09 09:58:39",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-10T00:11:20.458750+05:30",
            "campaign": "RemusStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "105f909fc4a6d331ae1f63b5b85d5260c9bb5dfd",
            "description": "Malicious SSL certificate - RemusStealer C&C",
            "timestamp": "2026-11-09 09:55:03",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-10T00:11:20.458750+05:30",
            "campaign": "RemusStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "54f3060077130ecb0878934a52d37ec9994b2959",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-11-09 09:54:37",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-10T00:11:20.458750+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "3cca61aae64588c6aeb99e549121bd90845df64b",
            "description": "Malicious SSL certificate - RemusStealer C&C",
            "timestamp": "2026-11-09 09:50:43",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-10T00:11:20.458750+05:30",
            "campaign": "RemusStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "77c2751f1c3f54478af095b519ee9bda9ae6a893",
            "description": "Malicious SSL certificate - RemusStealer C&C",
            "timestamp": "2026-11-09 09:50:42",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-10T00:11:20.458750+05:30",
            "campaign": "RemusStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "3196a6cb1fa37ee8fccc0ad7e384f3abb7e83116",
            "description": "Malicious SSL certificate - RemusStealer C&C",
            "timestamp": "2026-11-09 09:50:41",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-10T00:11:20.458750+05:30",
            "campaign": "RemusStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "74dbbbef44c355626c83aa8cedcbb86ea6acec58",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-11-09 09:50:04",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-10T00:11:20.458750+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "bfbccde2f1ab3e71036fa5b002fb9604a078ac48",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-11-09 09:48:27",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-10T00:11:20.458750+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ip",
            "indicator": "162[.]243[.]103[.]246",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-11-10 00:11 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-11-10T00:11:19.065152+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "178[.]62[.]3[.]223",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-11-10 00:11 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-11-10T00:11:19.065152+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "27[.]133[.]154[.]218",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-11-10 00:11 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-11-10T00:11:19.065152+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "34[.]204[.]119[.]63",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-11-10 00:11 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-11-10T00:11:19.065152+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "50[.]16[.]16[.]211",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-11-10 00:11 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-11-10T00:11:19.065152+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "1[.]12[.]70[.]212",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-10 00:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-10T00:11:17.086000+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]13[.]181[.]113",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-10 00:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-10T00:11:17.086000+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]162[.]217[.]195",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-10 00:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-10T00:11:17.086000+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]180[.]246[.]242",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-10 00:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-10T00:11:17.086000+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]203[.]149[.]250",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-10 00:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-10T00:11:17.086000+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]214[.]214[.]114",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-10 00:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-10T00:11:17.086000+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]222[.]42[.]237",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-10 00:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-10T00:11:17.086000+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]234[.]80[.]94",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-10 00:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-10T00:11:17.086000+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]238[.]106[.]229",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-10 00:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-10T00:11:17.086000+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]92[.]80[.]86",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-10 00:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-10T00:11:17.086000+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]94[.]62[.]64",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-10 00:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-10T00:11:17.086000+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]95[.]142[.]34",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-10 00:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-10T00:11:17.086000+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]0[.]105[.]22",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-10 00:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-10T00:11:17.086000+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]11[.]137",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-10 00:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-10T00:11:17.086000+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]24[.]74",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-10 00:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-10T00:11:17.086000+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]53[.]14",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-10 00:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-10T00:11:17.086000+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]64[.]76",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-10 00:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-10T00:11:17.086000+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]66[.]30",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-10 00:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-10T00:11:17.086000+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]67[.]70",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-10 00:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-10T00:11:17.086000+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]69[.]201",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-10 00:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-10T00:11:17.086000+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]70[.]177",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-10 00:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-10T00:11:17.086000+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]132[.]151[.]123",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-10 00:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-10T00:11:17.086000+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]168[.]3[.]207",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-10 00:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-10T00:11:17.086000+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]200[.]212[.]209",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-10 00:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-10T00:11:17.086000+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]201[.]234[.]37",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-10 00:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-10T00:11:17.086000+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]227[.]203[.]162",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-10 00:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-10T00:11:17.086000+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]227[.]51[.]199",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-10 00:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-10T00:11:17.086000+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]254[.]159[.]210",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-10 00:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-10T00:11:17.086000+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]32[.]240[.]31",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-10 00:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-10T00:11:17.086000+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]34[.]211[.]114",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-10 00:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-10T00:11:17.086000+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]114[.]181",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-10 00:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-10T00:11:17.086000+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]116[.]204",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-10 00:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-10T00:11:17.086000+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]116[.]216",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-10 00:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-10T00:11:17.086000+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]119[.]203",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-10 00:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-10T00:11:17.086000+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]121[.]72",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-10 00:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-10T00:11:17.086000+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]228[.]201",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-10 00:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-10T00:11:17.086000+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]43[.]77[.]85",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-10 00:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-10T00:11:17.086000+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]12[.]168",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-10 00:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-10T00:11:17.086000+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]134[.]75",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-10 00:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-10T00:11:17.086000+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]152[.]216",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-10 00:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-10T00:11:17.086000+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]158[.]56",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-10 00:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-10T00:11:17.086000+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]20[.]56",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-10 00:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-10T00:11:17.086000+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]8[.]113",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-10 00:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-10T00:11:17.086000+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]8[.]188",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-10 00:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-10T00:11:17.086000+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]59[.]102[.]62",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-10 00:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-10T00:11:17.086000+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]66[.]165[.]103",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-10 00:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-10T00:11:17.086000+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]76[.]244[.]135",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-10 00:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-10T00:11:17.086000+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]79[.]165[.]43",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-10 00:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-10T00:11:17.086000+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]79[.]167[.]183",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-10 00:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-10T00:11:17.086000+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]89[.]141[.]184",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-10 00:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-10T00:11:17.086000+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]89[.]76[.]249",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-10 00:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-10T00:11:17.086000+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]91[.]126[.]150",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-10 00:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-10T00:11:17.086000+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]192[.]45",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-10 00:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-10T00:11:17.086000+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]193[.]131",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-10 00:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-10T00:11:17.086000+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]193[.]145",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-10 00:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-10T00:11:17.086000+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]193[.]183",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-10 00:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-10T00:11:17.086000+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]195[.]17",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-10 00:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-10T00:11:17.086000+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]196[.]243",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-10 00:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-10T00:11:17.086000+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]197[.]182",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-10 00:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-10T00:11:17.086000+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]202[.]144",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-10 00:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-10T00:11:17.086000+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]202[.]177",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-10 00:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-10T00:11:17.086000+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]202[.]48",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-10 00:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-10T00:11:17.086000+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]202[.]87",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-10 00:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-10T00:11:17.086000+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]203[.]141",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-10 00:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-10T00:11:17.086000+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]205[.]145",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-10 00:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-10T00:11:17.086000+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]208[.]224",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-10 00:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-10T00:11:17.086000+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]209[.]234",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-10 00:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-10T00:11:17.086000+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]212[.]62",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-10 00:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-10T00:11:17.086000+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]214[.]98",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-10 00:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-10T00:11:17.086000+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]219[.]243",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-10 00:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-10T00:11:17.086000+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]221[.]200",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-10 00:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-10T00:11:17.086000+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]225[.]252",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-10 00:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-10T00:11:17.086000+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]229[.]2",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-10 00:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-10T00:11:17.086000+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]230[.]56",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-10 00:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-10T00:11:17.086000+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]140[.]97[.]134",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-10 00:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-10T00:11:17.086000+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]157[.]2[.]129",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-10 00:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-10T00:11:17.086000+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]158[.]188[.]158",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-10 00:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-10T00:11:17.086000+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]206[.]93[.]90",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-10 00:11 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-10 00:11 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-10T00:11:17.086000+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        }
    ],
    "dailySummary": {
        "stats": {
            "totalIndicators": 106693,
            "activeSources": 9,
            "criticalAlerts": 46790,
            "activeCampaigns": 220
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 35350,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 11440,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4297,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Phishing",
                "count": 3416,
                "trend": "stable",
                "percentage": -3
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
                "name": "CINS Threat List",
                "count": 39071,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]12[.]229[.]231",
                    "1[.]15[.]14[.]29",
                    "1[.]160[.]141[.]202"
                ]
            },
            {
                "name": "malware_download",
                "count": 34528,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://raw[.]githubusercontent[.]com/rcrishabh/Loud-No-More/refs/heads/master/endotys/No-More-Loud-v1[.]0[.]zip",
                    "hxxps://raw[.]githubusercontent[.]com/Shishir-Singh-666/nodepay2nd/refs/heads/main/src/nd_nodepay_v1[.]9[.]zip",
                    "hxxps://raw[.]githubusercontent[.]com/Kurvaan/ptx-tutorial-by-aislop/refs/heads/main/sections/by_ptx_tutorial_aislop_3[.]2[.]zip"
                ]
            },
            {
                "name": "SSH Attacks",
                "count": 10239,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]12[.]70[.]212",
                    "1[.]13[.]181[.]113",
                    "1[.]162[.]217[.]195"
                ]
            },
            {
                "name": "Generic Phishing",
                "count": 3389,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://testlanigs[.]blogspot[.]com/",
                    "hxxps://s4w[.]in/Wgtsg",
                    "hxxps://www[.]instagram-real[.]blogspot[.]com/"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1739,
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
                "count": 1726,
                "types": [
                    "ssl-cert",
                    "domain",
                    "url",
                    "hash"
                ],
                "sampleIndicators": [
                    "963c8d952db068f9cd6b76e2313e69296ca6124f57755eeaa8c008ee05d349be",
                    "99b335ac5caf5249edc3223b100517d72f4fec0c6012955e3efc8d56c96880ef",
                    "6f38c0aedf5d1163cca3bf5721acb71cb54bf387a69827c8ccdc59064a19d6ed"
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1628,
                "types": [
                    "ssl-cert",
                    "domain",
                    "ip",
                    "hash"
                ],
                "sampleIndicators": [
                    "195fec1204186bb02fde9ac09f5a45add84dde09533400a354a2d97fd6b20acd",
                    "46[.]246[.]4[.]16",
                    "34[.]51[.]206[.]15"
                ]
            },
            {
                "name": "Cobalt Strike",
                "count": 1183,
                "types": [
                    "domain",
                    "ip",
                    "hash"
                ],
                "sampleIndicators": [
                    "4d12d57d6db212de40d9b28811b1e19b",
                    "cdn[.]img[.]5a09f6f2[.]PNAlumni[.]dgitd[.]anchorbolnorth[.]com",
                    "82[.]158[.]89[.]27"
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
            },
            {
                "name": "QuasarRAT",
                "count": 731,
                "types": [
                    "ssl-cert",
                    "hash"
                ],
                "sampleIndicators": [
                    "898a138ef42c7846cd641bd8406a9ec940991b26113389bbc847648a76cf104c",
                    "5c8922ff90e264e8d6c22b3c7d6c1c27d5a62d61",
                    "8053e4267e87455b7f8aa3a6ff698d65616aca26"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "Generic Phishing",
        "totalAttacksThisHour": 19625,
        "lastCalculated": "2026-11-10 07:13 IST"
    }
};
