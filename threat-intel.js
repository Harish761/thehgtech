// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-23T18:51:17.392443+05:30 IST (2026-10-23 13:21 UTC)
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-23T18:51:16.471826+05:30",
    "lastUpdatedFormatted": "Oct 23, 2026 at 06:51 PM IST",
    "lastUpdatedUtc": "2026-10-23 13:21 UTC",
    "comparisonPeriod": "Oct 22 \u2013 Oct 23, 2026",
    "stats": {
        "totalIOCs": 119183,
        "byType": {
            "url": 47975,
            "ip": 48393,
            "hash": 6537,
            "domain": 3563,
            "ssl-cert": 11027,
            "ip-range": 1688
        },
        "byVendor": {
            "OpenPhish": 2634,
            "Malware Bazaar": 4009,
            "Spamhaus DROP": 1688,
            "CINS Army": 35961,
            "Blocklist.de": 9390,
            "URLhaus": 35628,
            "ThreatFox": 18841,
            "Feodo Tracker": 5,
            "SSL Blacklist": 11027
        },
        "topMalware": [
            {
                "name": "Vidar",
                "count": 2457,
                "types": [
                    "url",
                    "ssl-cert",
                    "hash",
                    "ip",
                    "domain"
                ]
            },
            {
                "name": "Mirai",
                "count": 1950,
                "types": [
                    "ip",
                    "hash",
                    "domain",
                    "url"
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1667,
                "types": [
                    "ssl-cert",
                    "url",
                    "ip",
                    "hash",
                    "domain"
                ]
            },
            {
                "name": "IClickFix",
                "count": 1280,
                "types": [
                    "url",
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
                "name": "Cobalt Strike",
                "count": 1219,
                "types": [
                    "ip",
                    "hash",
                    "domain"
                ]
            },
            {
                "name": "AMOS",
                "count": 763,
                "types": [
                    "url",
                    "hash",
                    "domain"
                ]
            },
            {
                "name": "QuasarRAT",
                "count": 742,
                "types": [
                    "ssl-cert",
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
                "name": "Unknown Loader",
                "count": 707,
                "types": [
                    "url",
                    "hash",
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
                "name": "win.vidar",
                "count": 596,
                "types": [
                    "url"
                ]
            },
            {
                "name": "ConnectWise",
                "count": 563,
                "types": [
                    "ssl-cert",
                    "hash"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 563,
                "types": [
                    "ssl-cert",
                    "hash"
                ]
            }
        ],
        "recentIOCs": [
            {
                "type": "ssl-cert",
                "indicator": "6355bba335e57be21b44a9ed609f549cb1384167",
                "description": "Malicious SSL certificate - OverlordRAT C&C",
                "timestamp": "2026-10-08 19:25:07",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-23 10:06 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-23T10:06:29.446208+05:30",
                "campaign": "OverlordRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "09a025b75e698c89b1731847a757ccbc00244f42",
                "description": "Malicious SSL certificate - OffLoader C&C",
                "timestamp": "2026-10-08 18:36:35",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-23 10:06 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-23T10:06:29.446208+05:30",
                "campaign": "OffLoader",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "678674d7911f8cbb945607e91f8f05e7353be1d2",
                "description": "Malicious SSL certificate - OffLoader C&C",
                "timestamp": "2026-10-08 18:36:26",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-23 10:06 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-23T10:06:29.446208+05:30",
                "campaign": "OffLoader",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "7145cd3c537c8b6f07d27038330303754fd086cd",
                "description": "Malicious SSL certificate - OffLoader C&C",
                "timestamp": "2026-10-08 18:10:23",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-23 10:06 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-23T10:06:29.446208+05:30",
                "campaign": "OffLoader",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "d2bf0b9b894431307b05b47812645ef42cf169e6",
                "description": "Malicious SSL certificate - ConnectWise C&C",
                "timestamp": "2026-10-01 14:33:24",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-23 10:06 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-23T10:06:29.446208+05:30",
                "campaign": "ConnectWise",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "b4d984de5a6fad2a262360fede253124b6d08b41",
                "description": "Malicious SSL certificate - ConnectWise C&C",
                "timestamp": "2026-10-01 14:25:32",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-23 10:06 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-23T10:06:29.446208+05:30",
                "campaign": "ConnectWise",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "fae032e423544ab9e33d6e656d1a239e74b04637",
                "description": "Malicious SSL certificate - ConnectWise C&C",
                "timestamp": "2026-10-01 14:24:52",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-23 10:06 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-23T10:06:29.446208+05:30",
                "campaign": "ConnectWise",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "983cbec3d48ec620539fe07e608568279fe973ec",
                "description": "Malicious SSL certificate - ConnectWise C&C",
                "timestamp": "2026-10-01 14:24:31",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-23 10:06 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-23T10:06:29.446208+05:30",
                "campaign": "ConnectWise",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "cc3986460c930a304c6f86172dbafe27e3ab5ff7",
                "description": "Malicious SSL certificate - ConnectWise C&C",
                "timestamp": "2026-10-01 14:24:21",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-23 10:06 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-23T10:06:29.446208+05:30",
                "campaign": "ConnectWise",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "9f429899906495a70ecf478ed1d0f58bf597c991",
                "description": "Malicious SSL certificate - ConnectWise C&C",
                "timestamp": "2026-10-01 14:23:59",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-23 10:06 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-23T10:06:29.446208+05:30",
                "campaign": "ConnectWise",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "b02eaa6a8ac3522babacb424d102c06354e36bf3",
                "description": "Malicious SSL certificate - ZigClipper C&C",
                "timestamp": "2026-10-01 14:04:32",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-23 10:06 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-23T10:06:29.446208+05:30",
                "campaign": "ZigClipper",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "7b4dafe4fe0380670ba4511e29967e69aae422bb",
                "description": "Malicious SSL certificate - Malware C&C",
                "timestamp": "2026-10-01 09:10:38",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-23 10:06 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-23T10:06:29.446208+05:30",
                "campaign": "Malware",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "4768d20d3072a30b168c650b11a9e4d3e1a0dc60",
                "description": "Malicious SSL certificate - QuasarRAT C&C",
                "timestamp": "2026-10-01 06:11:55",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-23 10:06 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-23T10:06:29.446208+05:30",
                "campaign": "QuasarRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "8bc45d63603370c41a2d7d352cdecb01281f5264",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-10-01 06:08:37",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-23 10:06 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-23T10:06:29.446208+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "4f2559300051882eff69dc21bc3d27da6f988751",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-10-01 06:07:48",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-23 10:06 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-23T10:06:29.446208+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "9dc2883ebb462c65d2f5cacbdb849fecb6d1ebaf",
                "description": "Malicious SSL certificate - OffLoader C&C",
                "timestamp": "2026-10-01 06:07:11",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-23 10:06 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-23T10:06:29.446208+05:30",
                "campaign": "OffLoader",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "5e64c59a01d6dbe03bd0b794c1d505663451c393",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-10-01 06:05:59",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-23 10:06 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-23T10:06:29.446208+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "8bd32950bda53eb297e5f0a41750cf671d36f1e7",
                "description": "Malicious SSL certificate - PureLogsStealer C&C",
                "timestamp": "2026-10-01 06:03:26",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-23 10:06 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-23T10:06:29.446208+05:30",
                "campaign": "PureLogsStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "7f350973861d149efb83b0a1f51d0e0db0329dda",
                "description": "Malicious SSL certificate - Malware distribution",
                "timestamp": "2026-09-09 18:10:15",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-23 10:06 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-23T10:06:29.446208+05:30",
                "campaign": "Malware",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "1955a3ce0e4bb011e3e667a51be5f42fb02d769f",
                "description": "Malicious SSL certificate - OffLoader C&C",
                "timestamp": "2026-09-09 17:51:01",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-23 10:06 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-23T10:06:29.446208+05:30",
                "campaign": "OffLoader",
                "confidence": "High"
            }
        ],
        "lastUpdated": "2026-10-23T18:51:16.471826+05:30",
        "lastUpdatedFormatted": "Oct 23, 2026 at 06:51 PM IST",
        "lastUpdatedUtc": "2026-10-23 13:21 UTC"
    },
    "vendors": {
        "OpenPhish": {
            "description": "Real-time phishing URL feed updated every 15 minutes. Tracks active phishing sites targeting major brands and financial institutions.",
            "website": "https://openphish.com/",
            "updateFrequency": "Every 15 minutes",
            "iocCount": 2934,
            "iocDataUrl": "https://thehgtech.com/ioc-data/openphish.json",
            "stats": {
                "total": 2934,
                "newInLastHour": 300,
                "lastUpdate": "2026-10-23 13:21 UTC"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://www[.]in-patrika[.]vercel[.]app/",
                "hxxps://amiable-someone-703260[.]framer[.]app/",
                "hxxps://9ervp-qmf-k9yx8-d15udr-omxlc[.]pages[.]dev/",
                "hxxp://sp28ct-gurem-biz-qazel-zotek[.]pages[.]dev/",
                "hxxps://hopeful-package-333853[.]framer[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4005,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 4005,
                "newInLastHour": 0,
                "lastUpdate": "2026-10-23 13:21 UTC"
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
            "iocCount": 1679,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1679,
                "newInLastHour": 1,
                "lastUpdate": "2026-10-23 13:21 UTC"
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
            "iocCount": 36796,
            "iocDataUrl": "https://thehgtech.com/ioc-data/cins-army.json",
            "stats": {
                "total": 36796,
                "newInLastHour": 15000,
                "lastUpdate": "2026-10-23 13:21 UTC"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]12[.]229[.]231",
                "1[.]15[.]14[.]29",
                "1[.]168[.]172[.]140",
                "1[.]183[.]41[.]170",
                "1[.]192[.]129[.]106"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 9585,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 9585,
                "newInLastHour": 4958,
                "lastUpdate": "2026-10-23 13:21 UTC"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]117[.]72[.]220",
                "1[.]117[.]73[.]220",
                "1[.]12[.]36[.]175",
                "1[.]12[.]55[.]80",
                "1[.]12[.]70[.]212"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 35628,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 35628,
                "newInLastHour": 0,
                "lastUpdate": "2026-10-23 13:21 UTC"
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
            "iocCount": 18837,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 18837,
                "newInLastHour": 0,
                "lastUpdate": "2026-10-23 13:21 UTC"
            },
            "types": [
                "ip",
                "hash",
                "domain",
                "url"
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
            "stats": {
                "total": 5,
                "newInLastHour": 5,
                "lastUpdate": "2026-10-23 13:21 UTC"
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
            "iocCount": 11027,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 11027,
                "newInLastHour": 9,
                "lastUpdate": "2026-10-23 13:21 UTC"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "f8ac3547b3ec163234ebcb90d325eec86069a42f",
                "3c99c5d67f2afafad06b3da29af5d1ab97bf5273",
                "4bba6041d3bd00dd1eb5d436f7d17c7e786eb5ee",
                "e8e1ee53a4b01fe4d284f3edf82c0dfd5b6c63cf",
                "d0cbe76e7158ac0762ebaf34f37e8a357cdfb6b2"
            ]
        }
    },
    "overview": [
        {
            "type": "ssl-cert",
            "indicator": "6355bba335e57be21b44a9ed609f549cb1384167",
            "description": "Malicious SSL certificate - OverlordRAT C&C",
            "timestamp": "2026-10-08 19:25:07",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T10:06:29.446208+05:30",
            "campaign": "OverlordRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "09a025b75e698c89b1731847a757ccbc00244f42",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-10-08 18:36:35",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T10:06:29.446208+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "678674d7911f8cbb945607e91f8f05e7353be1d2",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-10-08 18:36:26",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T10:06:29.446208+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "7145cd3c537c8b6f07d27038330303754fd086cd",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-10-08 18:10:23",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T10:06:29.446208+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "d2bf0b9b894431307b05b47812645ef42cf169e6",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-10-01 14:33:24",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T10:06:29.446208+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "b4d984de5a6fad2a262360fede253124b6d08b41",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-10-01 14:25:32",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T10:06:29.446208+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "fae032e423544ab9e33d6e656d1a239e74b04637",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-10-01 14:24:52",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T10:06:29.446208+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "983cbec3d48ec620539fe07e608568279fe973ec",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-10-01 14:24:31",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T10:06:29.446208+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "cc3986460c930a304c6f86172dbafe27e3ab5ff7",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-10-01 14:24:21",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T10:06:29.446208+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "9f429899906495a70ecf478ed1d0f58bf597c991",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-10-01 14:23:59",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T10:06:29.446208+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "b02eaa6a8ac3522babacb424d102c06354e36bf3",
            "description": "Malicious SSL certificate - ZigClipper C&C",
            "timestamp": "2026-10-01 14:04:32",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T10:06:29.446208+05:30",
            "campaign": "ZigClipper",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "7b4dafe4fe0380670ba4511e29967e69aae422bb",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-10-01 09:10:38",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T10:06:29.446208+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "4768d20d3072a30b168c650b11a9e4d3e1a0dc60",
            "description": "Malicious SSL certificate - QuasarRAT C&C",
            "timestamp": "2026-10-01 06:11:55",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T10:06:29.446208+05:30",
            "campaign": "QuasarRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "8bc45d63603370c41a2d7d352cdecb01281f5264",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-01 06:08:37",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T10:06:29.446208+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "4f2559300051882eff69dc21bc3d27da6f988751",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-01 06:07:48",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T10:06:29.446208+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "9dc2883ebb462c65d2f5cacbdb849fecb6d1ebaf",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-10-01 06:07:11",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T10:06:29.446208+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "5e64c59a01d6dbe03bd0b794c1d505663451c393",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-01 06:05:59",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T10:06:29.446208+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "8bd32950bda53eb297e5f0a41750cf671d36f1e7",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-10-01 06:03:26",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T10:06:29.446208+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "7f350973861d149efb83b0a1f51d0e0db0329dda",
            "description": "Malicious SSL certificate - Malware distribution",
            "timestamp": "2026-09-09 18:10:15",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T10:06:29.446208+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "1955a3ce0e4bb011e3e667a51be5f42fb02d769f",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-09-09 17:51:01",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T10:06:29.446208+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "559a55c8c7779e0037429794a8836a1039dbcdc3",
            "description": "Malicious SSL certificate - AsyncRAT C&C",
            "timestamp": "2026-09-09 17:48:17",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T10:06:29.446208+05:30",
            "campaign": "AsyncRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "8e492f36b0c1412f2d872dc9d51c974d27733d47",
            "description": "Malicious SSL certificate - AsyncRAT C&C",
            "timestamp": "2026-09-09 17:47:32",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T10:06:29.446208+05:30",
            "campaign": "AsyncRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "6712d3901855387b6d4f3d29576f04df40fa30c1",
            "description": "Malicious SSL certificate - BoratRAT C&C",
            "timestamp": "2026-09-02 08:10:48",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T10:06:29.446208+05:30",
            "campaign": "BoratRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "26edae2d62f7008d9a3ea68999f41316f4cdf762",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-09-02 08:10:31",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T10:06:29.446208+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "6c6027c8ff18b0f79bd3c40848c2b189a18b49ac",
            "description": "Malicious SSL certificate - QuasarRAT C&C",
            "timestamp": "2026-09-02 08:09:29",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T10:06:29.446208+05:30",
            "campaign": "QuasarRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "6ddb71e5a27eccf80773188066ac92d9d39506d7",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-09-02 06:15:35",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T10:06:29.446208+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "ffc71a7ba96b8801333ea2b9e7cd05d4cc2f718d",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-08-11 14:38:19",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T10:06:29.446208+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "92bebc09af464e669c68d95052916e76f989e043",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-08-04 09:36:35",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T10:06:29.446208+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "9b5e0b2f2acb07fb226b8805b3a5fb5a28035e6e",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-08-04 08:24:56",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T10:06:29.446208+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "942c595db95914eb4987a1e7ddd6f728fbc674ec",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-08-04 08:24:26",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T10:06:29.446208+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "361864879b9712b391b7d1af733e24168f67c419",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-08-04 08:21:43",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T10:06:29.446208+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "2b7ffb92a05fe5f22a0f26d9c76a3155f04fdd45",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-08-04 08:19:18",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T10:06:29.446208+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "db767b560efd2f6811b4c4adf2b0fdaee18fdad5",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-08-04 08:05:59",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T10:06:29.446208+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "0141dfae0d4426123aa2fbdd759162fa82d0f8e1",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-08-04 08:05:49",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T10:06:29.446208+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "b8b347f5d18be90876c3d3a5458b6e60598246bd",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-08-04 08:05:45",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T10:06:29.446208+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "a1146ac98390794517ff821a3377458555100eb3",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-08-04 08:04:36",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T10:06:29.446208+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "ef771150284da548676c603f5a4e1cd2763fd27f",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-08-04 07:44:16",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T10:06:29.446208+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "d7c3d38e27ab758c908f81b72a6fea1cd1af7369",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-08-04 07:38:53",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T10:06:29.446208+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "52b3c657964c5ac626f54446cbfb75165d215d65",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-08-04 07:09:00",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T10:06:29.446208+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "ccc880d541544fedae179d9adcff6f8c74741aed",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-08-04 06:52:27",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T10:06:29.446208+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "40ab2a74848e4b409900153beb94a6977de80d4a",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-08-04 06:51:40",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T10:06:29.446208+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "6647f9e4a2e273d7b78ff02be7114b0e9e2a719f",
            "description": "Malicious SSL certificate - AsyncRAT C&C",
            "timestamp": "2026-08-04 06:46:44",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T10:06:29.446208+05:30",
            "campaign": "AsyncRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "9bfa1f9e8d990faec4c91c5b9eaeb15898aff2e7",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-08-04 06:45:49",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T10:06:29.446208+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "dcf9b87b04998fde1fa03e83bfb8fec67ab1e1e1",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-08-04 06:45:34",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T10:06:29.446208+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "dd95dacb4419bad92d3d39fa274af4acc1cb6988",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-08-04 06:45:04",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T10:06:29.446208+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "a5930d8e37f9f2874a281294d8508dd79df36b98",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-08-04 06:44:51",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T10:06:29.446208+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "9a7e2e73f967101d75a3cb425b8980d50ca5c001",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-08-04 06:44:35",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T10:06:29.446208+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "1dc516de96cd73ff7a4040ec3b4927988d1a0049",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-08-04 06:44:13",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T10:06:29.446208+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "6cac7b4801a4e5b675050769d90bb1da5306d537",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-08-04 06:43:21",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T10:06:29.446208+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "97cceb2f57c3b60f9d94b4603ac55860aaa9e03d",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-08-04 06:42:50",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T10:06:29.446208+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "35c361f9688643bd7cd6a7057178d869bcd6ea7b",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-08-04 06:42:13",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T10:06:29.446208+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "5017bd59caaf4a057c724b366aa9530e5cc19931",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-08-04 06:41:32",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T10:06:29.446208+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ip",
            "indicator": "162[.]243[.]103[.]246",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-23 10:06 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-23T10:06:28.282725+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "178[.]62[.]3[.]223",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-23 10:06 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-23T10:06:28.282725+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "27[.]133[.]154[.]218",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-23 10:06 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-23T10:06:28.282725+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "34[.]204[.]119[.]63",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-23 10:06 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-23T10:06:28.282725+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "50[.]16[.]16[.]211",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-23 10:06 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-23T10:06:28.282725+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "1[.]117[.]72[.]220",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 10:06 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T10:06:23.990005+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]117[.]73[.]220",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 10:06 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T10:06:23.990005+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]12[.]36[.]175",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 10:06 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T10:06:23.990005+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]12[.]55[.]80",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 10:06 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T10:06:23.990005+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]12[.]70[.]212",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 10:06 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T10:06:23.990005+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]14[.]240[.]247",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 10:06 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T10:06:23.990005+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]14[.]94[.]193",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 10:06 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T10:06:23.990005+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]14[.]97[.]120",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 10:06 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T10:06:23.990005+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]15[.]106[.]134",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 10:06 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T10:06:23.990005+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]15[.]30[.]237",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 10:06 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T10:06:23.990005+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]214[.]214[.]114",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 10:06 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T10:06:23.990005+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]222[.]42[.]237",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 10:06 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T10:06:23.990005+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]238[.]106[.]229",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 10:06 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T10:06:23.990005+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]27[.]251[.]252",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 10:06 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T10:06:23.990005+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]95[.]115[.]20",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 10:06 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T10:06:23.990005+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]100[.]194[.]181",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 10:06 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T10:06:23.990005+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]11[.]137",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 10:06 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T10:06:23.990005+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]129[.]127",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 10:06 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T10:06:23.990005+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]141[.]163",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 10:06 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T10:06:23.990005+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]24[.]71",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 10:06 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T10:06:23.990005+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]24[.]74",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 10:06 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T10:06:23.990005+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]26[.]93",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 10:06 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T10:06:23.990005+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]53[.]14",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 10:06 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T10:06:23.990005+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]64[.]76",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 10:06 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T10:06:23.990005+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]66[.]30",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 10:06 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T10:06:23.990005+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]67[.]70",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 10:06 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T10:06:23.990005+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]69[.]201",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 10:06 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T10:06:23.990005+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]70[.]177",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 10:06 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T10:06:23.990005+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]201[.]234[.]37",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 10:06 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T10:06:23.990005+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]201[.]34[.]14",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 10:06 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T10:06:23.990005+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]206[.]210[.]3",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 10:06 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T10:06:23.990005+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]227[.]203[.]162",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 10:06 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T10:06:23.990005+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]227[.]236[.]176",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 10:06 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T10:06:23.990005+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]32[.]218[.]219",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 10:06 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T10:06:23.990005+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]32[.]240[.]31",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 10:06 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T10:06:23.990005+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]33[.]220[.]205",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 10:06 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T10:06:23.990005+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]33[.]66[.]58",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 10:06 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T10:06:23.990005+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]35[.]102[.]166",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 10:06 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T10:06:23.990005+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]35[.]114[.]193",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 10:06 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T10:06:23.990005+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]35[.]227[.]48",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 10:06 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T10:06:23.990005+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]35[.]248[.]174",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 10:06 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T10:06:23.990005+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]105[.]50",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 10:06 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T10:06:23.990005+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]106[.]109",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 10:06 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 10:06 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T10:06:23.990005+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        }
    ],
    "dailySummary": {
        "stats": {
            "totalIndicators": 119183,
            "activeSources": 9,
            "criticalAlerts": 53885,
            "activeCampaigns": 404
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 42605,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 11280,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 10564,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Phishing",
                "count": 2637,
                "trend": "up",
                "percentage": 12
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
                "count": 35961,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]14[.]149[.]30",
                    "1[.]168[.]172[.]140",
                    "1[.]193[.]57[.]156"
                ]
            },
            {
                "name": "malware_download",
                "count": 35628,
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
                "count": 9390,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]117[.]72[.]220",
                    "1[.]117[.]73[.]220",
                    "1[.]12[.]36[.]175"
                ]
            },
            {
                "name": "Generic Phishing",
                "count": 2625,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://system-update-account-ilpro[.]vercel[.]app/account-center-support",
                    "hxxps://www[.]roblox[.]com[.]et/users/1654175985/profile",
                    "hxxp://bc23[.]primus[.]rcassocies[.]com/W_PRIMUS_WINE_PROD/SignIn?ReturnUrl=%2FW_PRIMUS_WINE_PROD%2F"
                ]
            },
            {
                "name": "Vidar",
                "count": 2457,
                "types": [
                    "url",
                    "ssl-cert",
                    "hash",
                    "ip",
                    "domain"
                ],
                "sampleIndicators": [
                    "963c8d952db068f9cd6b76e2313e69296ca6124f57755eeaa8c008ee05d349be",
                    "99b335ac5caf5249edc3223b100517d72f4fec0c6012955e3efc8d56c96880ef",
                    "6f38c0aedf5d1163cca3bf5721acb71cb54bf387a69827c8ccdc59064a19d6ed"
                ]
            },
            {
                "name": "Mirai",
                "count": 1950,
                "types": [
                    "ip",
                    "hash",
                    "domain",
                    "url"
                ],
                "sampleIndicators": [
                    "5c9904bb290ca8b4581ca5337feaf8dc0262630e704faee10052b2385c5979fb",
                    "56530393263a80c470417364da8bcabbc8b819172866cb741304266a246fc639",
                    "1fcf6489f59dc37ee33fe8d772b95a8cb55051295b24f237b0aa9ebd05647b51"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1688,
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
                "count": 1667,
                "types": [
                    "ssl-cert",
                    "url",
                    "ip",
                    "hash",
                    "domain"
                ],
                "sampleIndicators": [
                    "195fec1204186bb02fde9ac09f5a45add84dde09533400a354a2d97fd6b20acd",
                    "5ae300101bef874b2d8e9dc927571074d7cd6c706903f4a23d91bf0c2943e256",
                    "c2b10b8c0d346d3e1201daea39713fbfaeb410e8b7fee94b0546a3fcdc91573f"
                ]
            },
            {
                "name": "IClickFix",
                "count": 1280,
                "types": [
                    "url",
                    "domain"
                ],
                "sampleIndicators": [
                    "kaizentekacademy[.]com",
                    "locandaskansen[.]it",
                    "polymathconsultant[.]com"
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
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "CINS Threat List",
        "totalAttacksThisHour": 20273,
        "lastCalculated": "2026-10-23 18:51 IST"
    }
};
