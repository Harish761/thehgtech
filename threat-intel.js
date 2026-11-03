// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-11-04T05:05:06.785650+05:30 IST (2026-11-03 23:35 UTC)
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-11-04T05:05:06.245272+05:30",
    "lastUpdatedFormatted": "Nov 04, 2026 at 05:05 AM IST",
    "lastUpdatedUtc": "2026-11-03 23:35 UTC",
    "comparisonPeriod": "Nov 03 \u2013 Nov 04, 2026",
    "stats": {
        "totalIOCs": 96577,
        "byType": {
            "url": 39218,
            "ip": 50336,
            "hash": 641,
            "domain": 2158,
            "ssl-cert": 2501,
            "ip-range": 1723
        },
        "byVendor": {
            "OpenPhish": 3531,
            "Malware Bazaar": 476,
            "Spamhaus DROP": 1723,
            "CINS Army": 36834,
            "Blocklist.de": 10952,
            "URLhaus": 34528,
            "ThreatFox": 6027,
            "Feodo Tracker": 5,
            "SSL Blacklist": 2501
        },
        "topMalware": [
            {
                "name": "Vidar",
                "count": 1495,
                "types": [
                    "url",
                    "hash",
                    "ssl-cert",
                    "domain"
                ]
            },
            {
                "name": "Cobalt Strike",
                "count": 1183,
                "types": [
                    "hash",
                    "domain",
                    "ip"
                ]
            },
            {
                "name": "IClickFix",
                "count": 708,
                "types": [
                    "url",
                    "domain"
                ]
            },
            {
                "name": "PureRAT",
                "count": 443,
                "types": [
                    "ssl-cert",
                    "ip"
                ]
            },
            {
                "name": "OffLoader",
                "count": 304,
                "types": [
                    "ssl-cert"
                ]
            },
            {
                "name": "ConnectWise",
                "count": 284,
                "types": [
                    "hash",
                    "ssl-cert"
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 269,
                "types": [
                    "hash",
                    "ssl-cert",
                    "domain",
                    "ip"
                ]
            },
            {
                "name": "Unknown Loader",
                "count": 258,
                "types": [
                    "url",
                    "hash",
                    "domain"
                ]
            },
            {
                "name": "AdaptixC2",
                "count": 244,
                "types": [
                    "ssl-cert",
                    "ip"
                ]
            },
            {
                "name": "MacSync",
                "count": 244,
                "types": [
                    "url",
                    "domain"
                ]
            },
            {
                "name": "Remus",
                "count": 199,
                "types": [
                    "url",
                    "ip"
                ]
            },
            {
                "name": "PureLogsStealer",
                "count": 186,
                "types": [
                    "hash",
                    "ssl-cert"
                ]
            },
            {
                "name": "DanaBot",
                "count": 177,
                "types": [
                    "ip"
                ]
            },
            {
                "name": "ACRStealer",
                "count": 161,
                "types": [
                    "ssl-cert"
                ]
            },
            {
                "name": "Remcos",
                "count": 141,
                "types": [
                    "domain",
                    "ip"
                ]
            }
        ],
        "recentIOCs": [
            {
                "type": "ssl-cert",
                "indicator": "34caba1bef1d1006199db86c6e2d5bf1d67c884e",
                "description": "Malicious SSL certificate - PureLogsStealer C&C",
                "timestamp": "2026-11-03 17:43:08",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-04 01:01 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-04T01:01:27.387010+05:30",
                "campaign": "PureLogsStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "277a06bc0dfdd0da5455bdb3d5b92f7cd5fc9520",
                "description": "Malicious SSL certificate - PureLogsStealer C&C",
                "timestamp": "2026-11-03 16:33:57",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-04 01:01 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-04T01:01:27.387010+05:30",
                "campaign": "PureLogsStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "b04b85ac36b0501fad420e3bc7976c3d31409b4e",
                "description": "Malicious SSL certificate - PureLogsStealer C&C",
                "timestamp": "2026-11-03 16:33:46",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-04 01:01 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-04T01:01:27.387010+05:30",
                "campaign": "PureLogsStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "70e5be14909fe413ceb33179b521e33253b23b25",
                "description": "Malicious SSL certificate - PureLogsStealer C&C",
                "timestamp": "2026-11-03 16:32:56",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-04 01:01 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-04T01:01:27.387010+05:30",
                "campaign": "PureLogsStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "aba67183b38e7af2ffbd3cde35fcaeb1ae838a6c",
                "description": "Malicious SSL certificate - PureLogsStealer C&C",
                "timestamp": "2026-11-03 16:30:45",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-04 01:01 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-04T01:01:27.387010+05:30",
                "campaign": "PureLogsStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "cb99d5384d603d6553a543c657cdd10245327790",
                "description": "Malicious SSL certificate - AzaleaAgent C&C",
                "timestamp": "2026-11-03 16:19:43",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-04 01:01 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-04T01:01:27.387010+05:30",
                "campaign": "AzaleaAgent",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "071723a919a59de8e12007a28efe58cdce47582f",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-11-03 16:13:59",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-04 01:01 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-04T01:01:27.387010+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "51355dd769baf664063ba8e548fba4edbb43d30c",
                "description": "Malicious SSL certificate - PureRAT C&C",
                "timestamp": "2026-11-03 16:12:07",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-04 01:01 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-04T01:01:27.387010+05:30",
                "campaign": "PureRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "d17c1ce0af678753b38a651d6739399aa8e1a9dd",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-11-03 16:12:00",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-04 01:01 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-04T01:01:27.387010+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "14124f6716dafc9943ff7de4b0146934c488b6aa",
                "description": "Malicious SSL certificate - PureRAT C&C",
                "timestamp": "2026-11-03 16:10:37",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-04 01:01 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-04T01:01:27.387010+05:30",
                "campaign": "PureRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "c9ef1afcd9bedbf2dc024330895598c74da7cf1a",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-11-03 16:06:40",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-04 01:01 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-04T01:01:27.387010+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "d5374668b952d61a5b52d0f414ecf19c87302df7",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-11-03 16:05:27",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-04 01:01 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-04T01:01:27.387010+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "2264e0945e0afa792cdde7b564a6fb1d1e286618",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-11-03 12:23:24",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-04 01:01 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-04T01:01:27.387010+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ip",
                "indicator": "162[.]243[.]103[.]246",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-11-04 01:01 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-11-04 01:01 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-11-04T01:01:26.241413+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "178[.]62[.]3[.]223",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-11-04 01:01 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-11-04 01:01 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-11-04T01:01:26.241413+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "27[.]133[.]154[.]218",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-11-04 01:01 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-11-04 01:01 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-11-04T01:01:26.241413+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "34[.]204[.]119[.]63",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-11-04 01:01 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-11-04 01:01 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-11-04T01:01:26.241413+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "50[.]16[.]16[.]211",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-11-04 01:01 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-11-04 01:01 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-11-04T01:01:26.241413+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "1[.]14[.]192[.]95",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-11-04 01:01 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-11-04 01:01 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-11-04T01:01:24.210382+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]14[.]240[.]247",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-11-04 01:01 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-11-04 01:01 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-11-04T01:01:24.210382+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            }
        ],
        "lastUpdated": "2026-11-04T05:05:06.245272+05:30",
        "lastUpdatedFormatted": "Nov 04, 2026 at 05:05 AM IST",
        "lastUpdatedUtc": "2026-11-03 23:35 UTC"
    },
    "vendors": {
        "OpenPhish": {
            "description": "Real-time phishing URL feed updated every 15 minutes. Tracks active phishing sites targeting major brands and financial institutions.",
            "website": "https://openphish.com/",
            "updateFrequency": "Every 15 minutes",
            "iocCount": 3231,
            "iocDataUrl": "https://thehgtech.com/ioc-data/openphish.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 3231,
                "newInLastHour": 300,
                "lastUpdate": "2026-11-03 23:34 UTC",
                "isStale": false,
                "feedStatus": "active"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://explorer[.]beta[.]bip300[.]xyz/",
                "hxxp://net-hub-gxqg[.]p-pso2at2d[.]workers[.]dev/",
                "hxxps://portuil[.]my/11/#YW50amUuc2NobGl0emt1c0BiZXJsaW4tYWlycG9ydC5kZQ==",
                "hxxps://s[.]team-qs[.]com/p/kma-mhc/bwjejeij",
                "hxxps://webasdhf[.]com/"
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
                "lastUpdate": "2026-11-03 23:34 UTC",
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
            "iocCount": 1645,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 1645,
                "newInLastHour": 41,
                "lastUpdate": "2026-11-03 23:34 UTC",
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
            "iocCount": 34620,
            "iocDataUrl": "https://thehgtech.com/ioc-data/cins-army.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 34620,
                "newInLastHour": 15000,
                "lastUpdate": "2026-11-03 23:35 UTC",
                "isStale": false,
                "feedStatus": "active"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]235[.]78",
                "1[.]12[.]229[.]231",
                "1[.]14[.]64[.]144",
                "1[.]145[.]89[.]105",
                "1[.]15[.]14[.]29"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 10609,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 10609,
                "newInLastHour": 4872,
                "lastUpdate": "2026-11-03 23:35 UTC",
                "isStale": false,
                "feedStatus": "active"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]14[.]192[.]95",
                "1[.]14[.]240[.]247",
                "1[.]162[.]226[.]183",
                "1[.]20[.]191[.]150",
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
                "lastUpdate": "2026-11-03 23:35 UTC",
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
                "lastUpdate": "2026-11-03 23:35 UTC",
                "isStale": true,
                "feedStatus": "stale"
            },
            "types": [
                "url",
                "hash",
                "domain",
                "ip"
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
                "lastUpdate": "2026-11-03 23:35 UTC",
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
            "iocCount": 10985,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 10985,
                "newInLastHour": 8637,
                "lastUpdate": "2026-11-03 23:35 UTC",
                "isStale": false,
                "feedStatus": "active"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "34caba1bef1d1006199db86c6e2d5bf1d67c884e",
                "277a06bc0dfdd0da5455bdb3d5b92f7cd5fc9520",
                "b04b85ac36b0501fad420e3bc7976c3d31409b4e",
                "70e5be14909fe413ceb33179b521e33253b23b25",
                "aba67183b38e7af2ffbd3cde35fcaeb1ae838a6c"
            ]
        }
    },
    "overview": [
        {
            "type": "ssl-cert",
            "indicator": "34caba1bef1d1006199db86c6e2d5bf1d67c884e",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-11-03 17:43:08",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-04T01:01:27.387010+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "277a06bc0dfdd0da5455bdb3d5b92f7cd5fc9520",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-11-03 16:33:57",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-04T01:01:27.387010+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "b04b85ac36b0501fad420e3bc7976c3d31409b4e",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-11-03 16:33:46",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-04T01:01:27.387010+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "70e5be14909fe413ceb33179b521e33253b23b25",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-11-03 16:32:56",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-04T01:01:27.387010+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "aba67183b38e7af2ffbd3cde35fcaeb1ae838a6c",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-11-03 16:30:45",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-04T01:01:27.387010+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "cb99d5384d603d6553a543c657cdd10245327790",
            "description": "Malicious SSL certificate - AzaleaAgent C&C",
            "timestamp": "2026-11-03 16:19:43",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-04T01:01:27.387010+05:30",
            "campaign": "AzaleaAgent",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "071723a919a59de8e12007a28efe58cdce47582f",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-11-03 16:13:59",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-04T01:01:27.387010+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "51355dd769baf664063ba8e548fba4edbb43d30c",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-11-03 16:12:07",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-04T01:01:27.387010+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "d17c1ce0af678753b38a651d6739399aa8e1a9dd",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-11-03 16:12:00",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-04T01:01:27.387010+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "14124f6716dafc9943ff7de4b0146934c488b6aa",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-11-03 16:10:37",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-04T01:01:27.387010+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "c9ef1afcd9bedbf2dc024330895598c74da7cf1a",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-11-03 16:06:40",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-04T01:01:27.387010+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "d5374668b952d61a5b52d0f414ecf19c87302df7",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-11-03 16:05:27",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-04T01:01:27.387010+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "2264e0945e0afa792cdde7b564a6fb1d1e286618",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-11-03 12:23:24",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-04T01:01:27.387010+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ip",
            "indicator": "162[.]243[.]103[.]246",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-11-04 01:01 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-11-04T01:01:26.241413+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "178[.]62[.]3[.]223",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-11-04 01:01 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-11-04T01:01:26.241413+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "27[.]133[.]154[.]218",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-11-04 01:01 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-11-04T01:01:26.241413+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "34[.]204[.]119[.]63",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-11-04 01:01 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-11-04T01:01:26.241413+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "50[.]16[.]16[.]211",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-11-04 01:01 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-11-04T01:01:26.241413+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "1[.]14[.]192[.]95",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 01:01 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T01:01:24.210382+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]14[.]240[.]247",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 01:01 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T01:01:24.210382+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]162[.]226[.]183",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 01:01 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T01:01:24.210382+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]20[.]191[.]150",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 01:01 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T01:01:24.210382+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]214[.]214[.]114",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 01:01 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T01:01:24.210382+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]222[.]42[.]237",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 01:01 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T01:01:24.210382+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]234[.]80[.]94",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 01:01 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T01:01:24.210382+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]238[.]106[.]229",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 01:01 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T01:01:24.210382+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "100[.]26[.]98[.]21",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 01:01 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T01:01:24.210382+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]100[.]194[.]181",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 01:01 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T01:01:24.210382+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]11[.]137",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 01:01 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T01:01:24.210382+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]141[.]163",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 01:01 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T01:01:24.210382+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]153[.]162",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 01:01 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T01:01:24.210382+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]24[.]71",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 01:01 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T01:01:24.210382+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]26[.]93",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 01:01 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T01:01:24.210382+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]34[.]17",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 01:01 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T01:01:24.210382+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]53[.]14",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 01:01 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T01:01:24.210382+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]64[.]76",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 01:01 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T01:01:24.210382+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]66[.]30",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 01:01 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T01:01:24.210382+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]67[.]70",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 01:01 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T01:01:24.210382+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]69[.]201",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 01:01 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T01:01:24.210382+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]70[.]177",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 01:01 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T01:01:24.210382+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]200[.]243[.]197",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 01:01 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T01:01:24.210382+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]201[.]234[.]37",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 01:01 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T01:01:24.210382+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]227[.]203[.]162",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 01:01 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T01:01:24.210382+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]32[.]240[.]31",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 01:01 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T01:01:24.210382+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]33[.]208[.]231",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 01:01 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T01:01:24.210382+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]104[.]46",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 01:01 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T01:01:24.210382+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]108[.]160",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 01:01 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T01:01:24.210382+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]108[.]72",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 01:01 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T01:01:24.210382+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]116[.]216",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 01:01 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T01:01:24.210382+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]228[.]201",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 01:01 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T01:01:24.210382+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]42[.]158[.]179",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 01:01 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T01:01:24.210382+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]46[.]137[.]189",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 01:01 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T01:01:24.210382+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]134[.]75",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 01:01 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T01:01:24.210382+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]152[.]216",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 01:01 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T01:01:24.210382+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]158[.]56",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 01:01 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T01:01:24.210382+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]20[.]56",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 01:01 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T01:01:24.210382+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]28[.]226",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 01:01 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T01:01:24.210382+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]8[.]113",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 01:01 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T01:01:24.210382+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]8[.]188",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 01:01 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T01:01:24.210382+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]76[.]244[.]135",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 01:01 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T01:01:24.210382+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]79[.]165[.]43",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 01:01 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T01:01:24.210382+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]79[.]167[.]183",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 01:01 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T01:01:24.210382+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]89[.]109[.]241",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 01:01 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T01:01:24.210382+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]89[.]141[.]184",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 01:01 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T01:01:24.210382+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]89[.]76[.]249",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 01:01 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T01:01:24.210382+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]91[.]114[.]194",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 01:01 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T01:01:24.210382+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]91[.]126[.]150",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 01:01 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T01:01:24.210382+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]192[.]45",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 01:01 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T01:01:24.210382+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]192[.]88",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 01:01 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T01:01:24.210382+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]193[.]131",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 01:01 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T01:01:24.210382+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]193[.]183",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 01:01 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T01:01:24.210382+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]195[.]17",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 01:01 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T01:01:24.210382+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]195[.]253",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 01:01 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T01:01:24.210382+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]195[.]62",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 01:01 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T01:01:24.210382+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]196[.]243",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 01:01 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T01:01:24.210382+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]197[.]182",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 01:01 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T01:01:24.210382+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]199[.]69",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 01:01 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T01:01:24.210382+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]202[.]144",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 01:01 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T01:01:24.210382+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]202[.]177",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 01:01 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T01:01:24.210382+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]202[.]48",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 01:01 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T01:01:24.210382+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]202[.]87",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 01:01 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T01:01:24.210382+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]205[.]145",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 01:01 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T01:01:24.210382+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]206[.]202",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 01:01 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T01:01:24.210382+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]209[.]234",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 01:01 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T01:01:24.210382+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]212[.]62",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 01:01 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T01:01:24.210382+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]214[.]116",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 01:01 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T01:01:24.210382+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]214[.]98",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 01:01 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T01:01:24.210382+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]221[.]200",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 01:01 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T01:01:24.210382+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]225[.]252",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 01:01 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T01:01:24.210382+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]229[.]2",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 01:01 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T01:01:24.210382+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]99[.]37[.]80",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 01:01 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T01:01:24.210382+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]0[.]42[.]34",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 01:01 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T01:01:24.210382+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]140[.]97[.]134",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 01:01 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T01:01:24.210382+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]177[.]101[.]53",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 01:01 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T01:01:24.210382+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]179[.]205[.]86",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 01:01 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T01:01:24.210382+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]202[.]75[.]187",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 01:01 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T01:01:24.210382+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]209[.]76[.]136",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 01:01 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T01:01:24.210382+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]209[.]76[.]137",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 01:01 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T01:01:24.210382+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]210[.]146[.]231",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 01:01 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T01:01:24.210382+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]210[.]148[.]92",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 01:01 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 01:01 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T01:01:24.210382+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        }
    ],
    "dailySummary": {
        "stats": {
            "totalIndicators": 96577,
            "activeSources": 9,
            "criticalAlerts": 38096,
            "activeCampaigns": 139
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 35323,
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
                "count": 3534,
                "trend": "stable",
                "percentage": 5
            },
            {
                "category": "C2",
                "count": 2773,
                "trend": "down",
                "percentage": -75
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
                "count": 36834,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]0[.]235[.]78",
                    "1[.]12[.]229[.]231",
                    "1[.]14[.]64[.]144"
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
                "count": 10952,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]14[.]192[.]95",
                    "1[.]14[.]240[.]247",
                    "1[.]162[.]226[.]183"
                ]
            },
            {
                "name": "Generic Phishing",
                "count": 3521,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://explorer[.]beta[.]bip300[.]xyz/",
                    "hxxp://net-hub-gxqg[.]p-pso2at2d[.]workers[.]dev/",
                    "hxxps://portuil[.]my/11/#YW50amUuc2NobGl0emt1c0BiZXJsaW4tYWlycG9ydC5kZQ=="
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1723,
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
                "count": 1495,
                "types": [
                    "url",
                    "hash",
                    "ssl-cert",
                    "domain"
                ],
                "sampleIndicators": [
                    "963c8d952db068f9cd6b76e2313e69296ca6124f57755eeaa8c008ee05d349be",
                    "99b335ac5caf5249edc3223b100517d72f4fec0c6012955e3efc8d56c96880ef",
                    "6f38c0aedf5d1163cca3bf5721acb71cb54bf387a69827c8ccdc59064a19d6ed"
                ]
            },
            {
                "name": "Cobalt Strike",
                "count": 1183,
                "types": [
                    "hash",
                    "domain",
                    "ip"
                ],
                "sampleIndicators": [
                    "4d12d57d6db212de40d9b28811b1e19b",
                    "cdn[.]img[.]5a09f6f2[.]PNAlumni[.]dgitd[.]anchorbolnorth[.]com",
                    "82[.]158[.]89[.]27"
                ]
            },
            {
                "name": "IClickFix",
                "count": 708,
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
                "name": "Unknown malware",
                "count": 450,
                "types": [
                    "url",
                    "hash",
                    "domain",
                    "ip"
                ],
                "sampleIndicators": [
                    "hxxps://washinweb[.]com/",
                    "198[.]44[.]46[.]58",
                    "130[.]94[.]3[.]67"
                ]
            },
            {
                "name": "PureRAT",
                "count": 443,
                "types": [
                    "ssl-cert",
                    "ip"
                ],
                "sampleIndicators": [
                    "80[.]76[.]49[.]242",
                    "70[.]36[.]127[.]16",
                    "197[.]147[.]53[.]146"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "AsyncRAT",
        "totalAttacksThisHour": 28855,
        "lastCalculated": "2026-11-04 05:05 IST"
    }
};
