// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-11-25T08:13:29.181757+05:30 IST (2026-11-25 02:43 UTC)
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-11-25T08:13:28.416786+05:30",
    "lastUpdatedFormatted": "Nov 25, 2026 at 08:13 AM IST",
    "lastUpdatedUtc": "2026-11-25 02:43 UTC",
    "comparisonPeriod": "Nov 24 \u2013 Nov 25, 2026",
    "stats": {
        "totalIOCs": 111486,
        "byType": {
            "url": 39804,
            "ip": 56132,
            "hash": 641,
            "domain": 2158,
            "ssl-cert": 11002,
            "ip-range": 1749
        },
        "byVendor": {
            "OpenPhish": 4117,
            "Malware Bazaar": 476,
            "Spamhaus DROP": 1749,
            "CINS Army": 40336,
            "Blocklist.de": 13246,
            "URLhaus": 34528,
            "ThreatFox": 6027,
            "Feodo Tracker": 5,
            "SSL Blacklist": 11002
        },
        "topMalware": [
            {
                "name": "Vidar",
                "count": 1692,
                "types": [
                    "domain",
                    "url",
                    "ssl-cert",
                    "hash"
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1612,
                "types": [
                    "domain",
                    "ip",
                    "ssl-cert",
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
                "count": 714,
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
                "name": "LummaStealer",
                "count": 556,
                "types": [
                    "ssl-cert"
                ]
            },
            {
                "name": "OffLoader",
                "count": 552,
                "types": [
                    "ssl-cert"
                ]
            },
            {
                "name": "ConnectWise",
                "count": 517,
                "types": [
                    "ssl-cert",
                    "hash"
                ]
            },
            {
                "name": "PureRAT",
                "count": 444,
                "types": [
                    "ip",
                    "ssl-cert"
                ]
            },
            {
                "name": "Malware",
                "count": 424,
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
                "name": "Gozi",
                "count": 349,
                "types": [
                    "ssl-cert"
                ]
            },
            {
                "name": "DCRat",
                "count": 348,
                "types": [
                    "ip",
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
                "indicator": "853c7cbd33c41f2a4651942d34a733403c89910b",
                "description": "Malicious SSL certificate - FunStealer C&C",
                "timestamp": "2026-11-24 12:18:24",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-25 06:03 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-25T06:03:46.463143+05:30",
                "campaign": "FunStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "cfaeecab0d464737b0c8132f0302b4a2b5bbd149",
                "description": "Malicious SSL certificate - FunStealer C&C",
                "timestamp": "2026-11-24 12:18:23",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-25 06:03 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-25T06:03:46.463143+05:30",
                "campaign": "FunStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "4da3273d01b7073f7218b69acadf32b0c57f35de",
                "description": "Malicious SSL certificate - FunStealer C&C",
                "timestamp": "2026-11-24 12:15:46",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-25 06:03 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-25T06:03:46.463143+05:30",
                "campaign": "FunStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "5d534c73e1fcbaad51fe510e822619d91e173e52",
                "description": "Malicious SSL certificate - FunStealer C&C",
                "timestamp": "2026-11-24 12:15:45",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-25 06:03 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-25T06:03:46.463143+05:30",
                "campaign": "FunStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "85fcf32f16ea72d1c6327ab295a9bcbbfd08a644",
                "description": "Malicious SSL certificate - DCRat C&C",
                "timestamp": "2026-11-24 10:29:02",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-25 06:03 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-25T06:03:46.463143+05:30",
                "campaign": "DCRat",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "a51757af2edfa00116ada88c46d530474b3eea07",
                "description": "Malicious SSL certificate - Malware C&C",
                "timestamp": "2026-11-24 10:05:32",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-25 06:03 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-25T06:03:46.463143+05:30",
                "campaign": "Malware",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "ccc7b03dc0841123fac4c5a518b74953711d8362",
                "description": "Malicious SSL certificate - PureLogsStealer C&C",
                "timestamp": "2026-11-24 09:51:22",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-25 06:03 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-25T06:03:46.463143+05:30",
                "campaign": "PureLogsStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "c350ba2b9f3aeeb536476c111de25f3ccb5bb84e",
                "description": "Malicious SSL certificate - PureLogsStealer C&C",
                "timestamp": "2026-11-24 08:52:44",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-25 06:03 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-25T06:03:46.463143+05:30",
                "campaign": "PureLogsStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "4d53fbd3a15b5220d7b092c0738564e7e6b8d00a",
                "description": "Malicious SSL certificate - Malware C&C",
                "timestamp": "2026-11-24 08:50:00",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-25 06:03 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-25T06:03:46.463143+05:30",
                "campaign": "Malware",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "b26fb89c001f599795543e012bb7c9314f2223ae",
                "description": "Malicious SSL certificate - PureLogsStealer C&C",
                "timestamp": "2026-11-24 08:40:21",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-25 06:03 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-25T06:03:46.463143+05:30",
                "campaign": "PureLogsStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "2e6c34df036674422a595d391f1baedb3fb39027",
                "description": "Malicious SSL certificate - OffLoader C&C",
                "timestamp": "2026-11-24 07:56:25",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-25 06:03 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-25T06:03:46.463143+05:30",
                "campaign": "OffLoader",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "bf3205fa0b555799dac3790a69a124777b6ef00d",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-11-24 07:26:09",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-25 06:03 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-25T06:03:46.463143+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "c3cff7f03d5d7568c2d309491b88e1e8cb357fa6",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-11-24 07:05:19",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-25 06:03 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-25T06:03:46.463143+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "48b0dec6d012b2281e6a23ea563f86e3bfe9f7ac",
                "description": "Malicious SSL certificate - RatonRAT C&C",
                "timestamp": "2026-11-24 07:05:13",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-25 06:03 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-25T06:03:46.463143+05:30",
                "campaign": "RatonRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "5dbf16080b42e16892a7e78809ee51ce2c488570",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-11-24 07:03:40",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-25 06:03 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-25T06:03:46.463143+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "d36e7ea8c3bd11f3d64e2a454ca1850566a63df7",
                "description": "Malicious SSL certificate - PureRAT C&C",
                "timestamp": "2026-11-17 09:16:27",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-25 06:03 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-25T06:03:46.463143+05:30",
                "campaign": "PureRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "dd35950dcdc0d2afeb557ff622375cdafe938fc5",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-11-17 08:07:13",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-25 06:03 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-25T06:03:46.463143+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "29a612773b379e945229a831f7d69280a2b0fd49",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-11-17 08:06:34",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-25 06:03 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-25T06:03:46.463143+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "36210d41f78bcf7c4e3dcd32a9c6ea0392c435c2",
                "description": "Malicious SSL certificate - xeffStealer C&C",
                "timestamp": "2026-11-17 08:05:33",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-25 06:03 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-25T06:03:46.463143+05:30",
                "campaign": "xeffStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "4ab5b2103cc4653d78269daad5fdb8f598705843",
                "description": "Malicious SSL certificate - OffLoader C&C",
                "timestamp": "2026-11-17 08:02:37",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-25 06:03 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-25T06:03:46.463143+05:30",
                "campaign": "OffLoader",
                "confidence": "High"
            }
        ],
        "lastUpdated": "2026-11-25T08:13:28.416786+05:30",
        "lastUpdatedFormatted": "Nov 25, 2026 at 08:13 AM IST",
        "lastUpdatedUtc": "2026-11-25 02:43 UTC"
    },
    "vendors": {
        "OpenPhish": {
            "description": "Real-time phishing URL feed updated every 15 minutes. Tracks active phishing sites targeting major brands and financial institutions.",
            "website": "https://openphish.com/",
            "updateFrequency": "Every 15 minutes",
            "iocCount": 4117,
            "iocDataUrl": "https://thehgtech.com/ioc-data/openphish.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 4117,
                "newInLastHour": 300,
                "lastUpdate": "2026-11-25 02:43 UTC",
                "isStale": false,
                "feedStatus": "active"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://www[.]belepes-telekom-hu[.]vh22325[.]vh[.]net[.]pl/",
                "hxxps://belepes-telekom-hu[.]vh22325[.]vh[.]net[.]pl/",
                "hxxp://id2140[.]business-support-partner[.]com/",
                "hxxp://dan-san2006[.]github[.]io/Netflix_gt",
                "hxxps://ephemeral-squirrel-f84ee4[.]netlify[.]app/"
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
                "lastUpdate": "2026-11-25 02:43 UTC",
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
            "iocCount": 1753,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 1753,
                "newInLastHour": 4,
                "lastUpdate": "2026-11-25 02:43 UTC",
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
            "iocCount": 39690,
            "iocDataUrl": "https://thehgtech.com/ioc-data/cins-army.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 39690,
                "newInLastHour": 15000,
                "lastUpdate": "2026-11-25 02:43 UTC",
                "isStale": false,
                "feedStatus": "active"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]14[.]3[.]170",
                "1[.]145[.]16[.]243",
                "1[.]170[.]200[.]20",
                "1[.]177[.]162[.]2",
                "1[.]181[.]101[.]207"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 13125,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 13125,
                "newInLastHour": 4865,
                "lastUpdate": "2026-11-25 02:43 UTC",
                "isStale": false,
                "feedStatus": "active"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]1[.]220[.]166",
                "1[.]117[.]72[.]220",
                "1[.]12[.]55[.]80",
                "1[.]14[.]64[.]225",
                "1[.]162[.]242[.]67"
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
                "lastUpdate": "2026-11-25 02:43 UTC",
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
                "lastUpdate": "2026-11-25 02:43 UTC",
                "isStale": true,
                "feedStatus": "stale"
            },
            "types": [
                "url",
                "domain",
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
                "lastUpdate": "2026-11-25 02:43 UTC",
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
            "iocCount": 11370,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 11370,
                "newInLastHour": 371,
                "lastUpdate": "2026-11-25 02:43 UTC",
                "isStale": false,
                "feedStatus": "active"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "853c7cbd33c41f2a4651942d34a733403c89910b",
                "cfaeecab0d464737b0c8132f0302b4a2b5bbd149",
                "4da3273d01b7073f7218b69acadf32b0c57f35de",
                "5d534c73e1fcbaad51fe510e822619d91e173e52",
                "85fcf32f16ea72d1c6327ab295a9bcbbfd08a644"
            ]
        }
    },
    "overview": [
        {
            "type": "ssl-cert",
            "indicator": "853c7cbd33c41f2a4651942d34a733403c89910b",
            "description": "Malicious SSL certificate - FunStealer C&C",
            "timestamp": "2026-11-24 12:18:24",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-25T06:03:46.463143+05:30",
            "campaign": "FunStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "cfaeecab0d464737b0c8132f0302b4a2b5bbd149",
            "description": "Malicious SSL certificate - FunStealer C&C",
            "timestamp": "2026-11-24 12:18:23",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-25T06:03:46.463143+05:30",
            "campaign": "FunStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "4da3273d01b7073f7218b69acadf32b0c57f35de",
            "description": "Malicious SSL certificate - FunStealer C&C",
            "timestamp": "2026-11-24 12:15:46",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-25T06:03:46.463143+05:30",
            "campaign": "FunStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "5d534c73e1fcbaad51fe510e822619d91e173e52",
            "description": "Malicious SSL certificate - FunStealer C&C",
            "timestamp": "2026-11-24 12:15:45",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-25T06:03:46.463143+05:30",
            "campaign": "FunStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "85fcf32f16ea72d1c6327ab295a9bcbbfd08a644",
            "description": "Malicious SSL certificate - DCRat C&C",
            "timestamp": "2026-11-24 10:29:02",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-25T06:03:46.463143+05:30",
            "campaign": "DCRat",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "a51757af2edfa00116ada88c46d530474b3eea07",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-11-24 10:05:32",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-25T06:03:46.463143+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "ccc7b03dc0841123fac4c5a518b74953711d8362",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-11-24 09:51:22",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-25T06:03:46.463143+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "c350ba2b9f3aeeb536476c111de25f3ccb5bb84e",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-11-24 08:52:44",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-25T06:03:46.463143+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "4d53fbd3a15b5220d7b092c0738564e7e6b8d00a",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-11-24 08:50:00",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-25T06:03:46.463143+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "b26fb89c001f599795543e012bb7c9314f2223ae",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-11-24 08:40:21",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-25T06:03:46.463143+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "2e6c34df036674422a595d391f1baedb3fb39027",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-11-24 07:56:25",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-25T06:03:46.463143+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "bf3205fa0b555799dac3790a69a124777b6ef00d",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-11-24 07:26:09",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-25T06:03:46.463143+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "c3cff7f03d5d7568c2d309491b88e1e8cb357fa6",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-11-24 07:05:19",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-25T06:03:46.463143+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "48b0dec6d012b2281e6a23ea563f86e3bfe9f7ac",
            "description": "Malicious SSL certificate - RatonRAT C&C",
            "timestamp": "2026-11-24 07:05:13",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-25T06:03:46.463143+05:30",
            "campaign": "RatonRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "5dbf16080b42e16892a7e78809ee51ce2c488570",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-11-24 07:03:40",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-25T06:03:46.463143+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "d36e7ea8c3bd11f3d64e2a454ca1850566a63df7",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-11-17 09:16:27",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-25T06:03:46.463143+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "dd35950dcdc0d2afeb557ff622375cdafe938fc5",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-11-17 08:07:13",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-25T06:03:46.463143+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "29a612773b379e945229a831f7d69280a2b0fd49",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-11-17 08:06:34",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-25T06:03:46.463143+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "36210d41f78bcf7c4e3dcd32a9c6ea0392c435c2",
            "description": "Malicious SSL certificate - xeffStealer C&C",
            "timestamp": "2026-11-17 08:05:33",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-25T06:03:46.463143+05:30",
            "campaign": "xeffStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "4ab5b2103cc4653d78269daad5fdb8f598705843",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-11-17 08:02:37",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-25T06:03:46.463143+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "5ce11a4cab0a83a5675d71c4af0804e1c0843c94",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-11-17 08:02:10",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-25T06:03:46.463143+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "beb63a581c0b40874ca784c11aaabf1de9dd6a79",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-11-17 08:00:15",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-25T06:03:46.463143+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "6af7a067b7cb261c98b699435c964976685bfa32",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-11-17 07:59:46",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-25T06:03:46.463143+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "abc4b076eb276da57cf8a36e7eeca9df713dd83c",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-11-09 10:16:33",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-25T06:03:46.463143+05:30",
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
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-25T06:03:46.463143+05:30",
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
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-25T06:03:46.463143+05:30",
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
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-25T06:03:46.463143+05:30",
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
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-25T06:03:46.463143+05:30",
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
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-25T06:03:46.463143+05:30",
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
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-25T06:03:46.463143+05:30",
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
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-25T06:03:46.463143+05:30",
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
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-25T06:03:46.463143+05:30",
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
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-25T06:03:46.463143+05:30",
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
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-25T06:03:46.463143+05:30",
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
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-25T06:03:46.463143+05:30",
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
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-25T06:03:46.463143+05:30",
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
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-25T06:03:46.463143+05:30",
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
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-25T06:03:46.463143+05:30",
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
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-25T06:03:46.463143+05:30",
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
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-25T06:03:46.463143+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "66c657533cb5d25c1cef98a173f26b69536b67d6",
            "description": "Malicious SSL certificate - ResolverRAT C&C",
            "timestamp": "2026-11-02 16:09:46",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-25T06:03:46.463143+05:30",
            "campaign": "ResolverRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "1b2f2ca48067d909791338a6c32cf2e0104f6a7f",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-11-02 13:12:05",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-25T06:03:46.463143+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "2c8903399677fe6022cab030e0049bcfff538bdd",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-11-02 07:49:48",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-25T06:03:46.463143+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "589654a4ecbbc484056cc1bfeea1fcdc7ecc7d81",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-11-02 07:45:37",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-25T06:03:46.463143+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "4f63e391bda319474161cb4a2506c40acc8fca7a",
            "description": "Malicious SSL certificate - ACRStealer malware distribution",
            "timestamp": "2026-11-02 07:06:34",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-25T06:03:46.463143+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "7fc6c2a32eed69593d705df8d2f29de51da78e0b",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-11 14:47:53",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-25T06:03:46.463143+05:30",
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
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-25T06:03:46.463143+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ip",
            "indicator": "162[.]243[.]103[.]246",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-11-25 06:03 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-11-25T06:03:45.342131+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "178[.]62[.]3[.]223",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-11-25 06:03 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-11-25T06:03:45.342131+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "27[.]133[.]154[.]218",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-11-25 06:03 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-11-25T06:03:45.342131+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "34[.]204[.]119[.]63",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-11-25 06:03 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-11-25T06:03:45.342131+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "50[.]16[.]16[.]211",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-11-25 06:03 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-11-25T06:03:45.342131+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "1[.]1[.]220[.]166",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-25 06:03 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-25T06:03:43.169415+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]117[.]72[.]220",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-25 06:03 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-25T06:03:43.169415+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]12[.]55[.]80",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-25 06:03 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-25T06:03:43.169415+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]14[.]64[.]225",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-25 06:03 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-25T06:03:43.169415+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]162[.]242[.]67",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-25 06:03 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-25T06:03:43.169415+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]194[.]211[.]36",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-25 06:03 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-25T06:03:43.169415+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]203[.]149[.]250",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-25 06:03 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-25T06:03:43.169415+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]214[.]214[.]114",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-25 06:03 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-25T06:03:43.169415+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]222[.]80[.]212",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-25 06:03 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-25T06:03:43.169415+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]234[.]53[.]65",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-25 06:03 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-25T06:03:43.169415+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]235[.]192[.]214",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-25 06:03 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-25T06:03:43.169415+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]238[.]106[.]229",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-25 06:03 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-25T06:03:43.169415+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]27[.]251[.]252",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-25 06:03 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-25T06:03:43.169415+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]28[.]200[.]165",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-25 06:03 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-25T06:03:43.169415+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]92[.]125[.]77",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-25 06:03 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-25T06:03:43.169415+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]92[.]195[.]37",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-25 06:03 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-25T06:03:43.169415+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "100[.]50[.]17[.]159",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-25 06:03 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-25T06:03:43.169415+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]129[.]127",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-25 06:03 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-25T06:03:43.169415+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]141[.]163",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-25 06:03 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-25T06:03:43.169415+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]153[.]162",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-25 06:03 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-25T06:03:43.169415+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]24[.]71",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-25 06:03 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-25T06:03:43.169415+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]24[.]74",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-25 06:03 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-25T06:03:43.169415+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]26[.]93",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-25 06:03 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-25T06:03:43.169415+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]4[.]240",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-25 06:03 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-25T06:03:43.169415+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]43[.]201",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-25 06:03 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-25T06:03:43.169415+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]53[.]14",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-25 06:03 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-25T06:03:43.169415+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]55[.]95",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-25 06:03 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-25T06:03:43.169415+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]66[.]30",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-25 06:03 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-25T06:03:43.169415+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]69[.]201",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-25 06:03 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-25T06:03:43.169415+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]70[.]177",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-25 06:03 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-25T06:03:43.169415+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]168[.]53[.]247",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-25 06:03 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-25T06:03:43.169415+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]200[.]243[.]197",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-25 06:03 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-25T06:03:43.169415+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]201[.]38[.]226",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-25 06:03 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-25T06:03:43.169415+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]201[.]71[.]54",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-25 06:03 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-25T06:03:43.169415+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]227[.]203[.]162",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-25 06:03 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-25T06:03:43.169415+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]32[.]126[.]162",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-25 06:03 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-25T06:03:43.169415+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]32[.]240[.]31",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-25 06:03 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-25T06:03:43.169415+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]33[.]210[.]169",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-25 06:03 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-25T06:03:43.169415+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]35[.]218[.]172",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-25 06:03 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-25T06:03:43.169415+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]35[.]248[.]174",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-25 06:03 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-25T06:03:43.169415+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]114[.]177",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-25 06:03 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-25T06:03:43.169415+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]114[.]181",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-25 06:03 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-25T06:03:43.169415+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]119[.]203",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-25 06:03 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-25T06:03:43.169415+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]228[.]201",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-25 06:03 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-25T06:03:43.169415+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]37[.]156[.]70",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-25 06:03 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-25T06:03:43.169415+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]43[.]124[.]60",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-25 06:03 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-25T06:03:43.169415+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]43[.]143[.]14",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-25 06:03 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-25T06:03:43.169415+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]43[.]175[.]238",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-25 06:03 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-25 06:03 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-25T06:03:43.169415+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        }
    ],
    "dailySummary": {
        "stats": {
            "totalIndicators": 111486,
            "activeSources": 9,
            "criticalAlerts": 46597,
            "activeCampaigns": 221
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
                "count": 11247,
                "trend": "stable",
                "percentage": -2
            },
            {
                "category": "Botnet",
                "count": 4297,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Phishing",
                "count": 4120,
                "trend": "stable",
                "percentage": -6
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
                "count": 40336,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]14[.]3[.]170",
                    "1[.]181[.]101[.]207",
                    "1[.]189[.]41[.]213"
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
                "count": 13246,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]1[.]220[.]166",
                    "1[.]117[.]72[.]220",
                    "1[.]12[.]55[.]80"
                ]
            },
            {
                "name": "Generic Phishing",
                "count": 4099,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://www[.]belepes-telekom-hu[.]vh22325[.]vh[.]net[.]pl/",
                    "hxxps://belepes-telekom-hu[.]vh22325[.]vh[.]net[.]pl/",
                    "hxxp://id2140[.]business-support-partner[.]com/"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1749,
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
                "count": 1692,
                "types": [
                    "domain",
                    "url",
                    "ssl-cert",
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
                "count": 1612,
                "types": [
                    "domain",
                    "ip",
                    "ssl-cert",
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
                "count": 714,
                "types": [
                    "ssl-cert",
                    "hash"
                ],
                "sampleIndicators": [
                    "898a138ef42c7846cd641bd8406a9ec940991b26113389bbc847648a76cf104c",
                    "0d04a50138c74a1ecfa1a7b4a3afddeb2a4be571",
                    "5c8922ff90e264e8d6c22b3c7d6c1c27d5a62d61"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "Vidar",
        "totalAttacksThisHour": 20545,
        "lastCalculated": "2026-11-25 08:13 IST"
    }
};
