// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-11-14T01:05:54.765239+05:30 IST (2026-11-13 19:35 UTC)
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-11-14T01:05:54.141463+05:30",
    "lastUpdatedFormatted": "Nov 14, 2026 at 01:05 AM IST",
    "lastUpdatedUtc": "2026-11-13 19:35 UTC",
    "comparisonPeriod": "Nov 13 \u2013 Nov 14, 2026",
    "stats": {
        "totalIOCs": 106439,
        "byType": {
            "url": 39453,
            "ip": 51173,
            "hash": 641,
            "domain": 2158,
            "ssl-cert": 11252,
            "ip-range": 1762
        },
        "byVendor": {
            "OpenPhish": 3766,
            "Malware Bazaar": 476,
            "Spamhaus DROP": 1762,
            "CINS Army": 37970,
            "Blocklist.de": 10653,
            "URLhaus": 34528,
            "ThreatFox": 6027,
            "Feodo Tracker": 5,
            "SSL Blacklist": 11252
        },
        "topMalware": [
            {
                "name": "Vidar",
                "count": 1746,
                "types": [
                    "ssl-cert",
                    "domain",
                    "hash",
                    "url"
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1628,
                "types": [
                    "ssl-cert",
                    "hash",
                    "domain",
                    "ip"
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
                "count": 570,
                "types": [
                    "ssl-cert"
                ]
            },
            {
                "name": "ConnectWise",
                "count": 560,
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
                "count": 456,
                "types": [
                    "ssl-cert",
                    "ip"
                ]
            },
            {
                "name": "Malware",
                "count": 430,
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
                    "ssl-cert",
                    "ip"
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
                "indicator": "9d0751a9eab469ff9a399a086ea2531b3c22dc30",
                "description": "Malicious SSL certificate - OffLoader C&C",
                "timestamp": "2026-11-13 08:31:07",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-13 17:34 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-13T17:34:10.484964+05:30",
                "campaign": "OffLoader",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "955d88cd421ad19859f6015a6ba3ea81e07b510c",
                "description": "Malicious SSL certificate - PureLogsStealer C&C",
                "timestamp": "2026-11-13 08:30:13",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-13 17:34 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-13T17:34:10.484964+05:30",
                "campaign": "PureLogsStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "45972ca5b00612d1f51e51325f7662d60cdd7860",
                "description": "Malicious SSL certificate - WARDENStealer C&C",
                "timestamp": "2026-11-13 08:28:49",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-13 17:34 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-13T17:34:10.484964+05:30",
                "campaign": "WARDENStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "adc24b6b9445798ed026d417fe423b72aa290ebc",
                "description": "Malicious SSL certificate - WARDENStealer C&C",
                "timestamp": "2026-11-13 08:28:46",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-13 17:34 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-13T17:34:10.484964+05:30",
                "campaign": "WARDENStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "041028a7248ce181b5c083d17d31ef9443364b70",
                "description": "Malicious SSL certificate - WARDENStealer C&C",
                "timestamp": "2026-11-13 08:28:43",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-13 17:34 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-13T17:34:10.484964+05:30",
                "campaign": "WARDENStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "0335d3d009c55ea6f49e57aeb54fbdb84e5def8e",
                "description": "Malicious SSL certificate - FunStealer C&C",
                "timestamp": "2026-11-13 08:27:01",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-13 17:34 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-13T17:34:10.484964+05:30",
                "campaign": "FunStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "d313c92a2c0c535a7b60359f758b0032db60b99b",
                "description": "Malicious SSL certificate - FunStealer C&C",
                "timestamp": "2026-11-13 08:27:00",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-13 17:34 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-13T17:34:10.484964+05:30",
                "campaign": "FunStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "187d60de02b8184158547240aec75f31b8e93a27",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-11-13 07:31:05",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-13 17:34 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-13T17:34:10.484964+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "e637e68e3a9cdbe38b1c1c3ca411596797a0fd66",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-11-13 07:29:45",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-13 17:34 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-13T17:34:10.484964+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "32facbb63422b11875f949b45ceb306e4673a3b7",
                "description": "Malicious SSL certificate - Malware C&C",
                "timestamp": "2026-10-28 16:05:31",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-13 17:34 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-13T17:34:10.484964+05:30",
                "campaign": "Malware",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "db1370abc2fbcfc4d9dc332b56f0d2e91deb9d23",
                "description": "Malicious SSL certificate - PureLogsStealer C&C",
                "timestamp": "2026-10-28 09:25:25",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-13 17:34 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-13T17:34:10.484964+05:30",
                "campaign": "PureLogsStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "840910d1faf7f934326f08cd5424862ca50646d5",
                "description": "Malicious SSL certificate - OffLoader C&C",
                "timestamp": "2026-10-28 09:25:17",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-13 17:34 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-13T17:34:10.484964+05:30",
                "campaign": "OffLoader",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "b843ff0bf989bbda8086054a9d9ce65e885e4845",
                "description": "Malicious SSL certificate - RevStealer C&C",
                "timestamp": "2026-10-28 09:00:00",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-13 17:34 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-13T17:34:10.484964+05:30",
                "campaign": "RevStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "62ddff80b88f12d3ca6ba44eb09b5e7ba9e2f390",
                "description": "Malicious SSL certificate - RevStealer C&C",
                "timestamp": "2026-10-28 08:59:01",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-13 17:34 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-13T17:34:10.484964+05:30",
                "campaign": "RevStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "4623e7174a6917c16402029733c2aaa14d2f83dd",
                "description": "Malicious SSL certificate - RevStealer C&C",
                "timestamp": "2026-10-28 08:55:17",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-13 17:34 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-13T17:34:10.484964+05:30",
                "campaign": "RevStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "3a2dc08faa4e47e147c1293b240d7502efa7db48",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-10-28 08:51:12",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-13 17:34 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-13T17:34:10.484964+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "be3eba6ce90c5d19ee1e986170e96323108d092d",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-10-28 08:50:53",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-13 17:34 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-13T17:34:10.484964+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "2444b1d1f72da59dc3bcc0191170509822344090",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-10-28 08:50:11",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-13 17:34 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-13T17:34:10.484964+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "875a92bb886a52699413fb2e4370adc03c1eda37",
                "description": "Malicious SSL certificate - QuasarRAT C&C",
                "timestamp": "2026-10-28 08:49:10",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-13 17:34 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-13T17:34:10.484964+05:30",
                "campaign": "QuasarRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "a2e76af14703e85cc8a27f108e0ee93ce2d9afb4",
                "description": "Malicious SSL certificate - Malware C&C",
                "timestamp": "2026-09-29 08:26:19",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-13 17:34 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-13T17:34:10.484964+05:30",
                "campaign": "Malware",
                "confidence": "High"
            }
        ],
        "lastUpdated": "2026-11-14T01:05:54.141463+05:30",
        "lastUpdatedFormatted": "Nov 14, 2026 at 01:05 AM IST",
        "lastUpdatedUtc": "2026-11-13 19:35 UTC"
    },
    "vendors": {
        "OpenPhish": {
            "description": "Real-time phishing URL feed updated every 15 minutes. Tracks active phishing sites targeting major brands and financial institutions.",
            "website": "https://openphish.com/",
            "updateFrequency": "Every 15 minutes",
            "iocCount": 3766,
            "iocDataUrl": "https://thehgtech.com/ioc-data/openphish.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 3766,
                "newInLastHour": 300,
                "lastUpdate": "2026-11-13 19:35 UTC",
                "isStale": false,
                "feedStatus": "active"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://luskasdev[.]github[.]io/Phishing",
                "hxxp://boosterhub[.]shop/",
                "hxxps://135461223[.]site/et/1784/3ea2bfc3-7bc2-4bd0-bb97-64f1bb59b647/766428/x",
                "hxxps://135461223[.]site/1784/3ea2bfc3-7bc2-4bd0-bb97-64f1bb59b647/766428",
                "hxxps://135461223[.]site/et/1784/3ea2bfc3-7bc2-4bd0-bb97-64f1bb59b647/766428"
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
                "lastUpdate": "2026-11-13 19:35 UTC",
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
            "iocCount": 626,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 626,
                "newInLastHour": 0,
                "lastUpdate": "2026-11-13 19:35 UTC",
                "isStale": false,
                "feedStatus": "active"
            },
            "types": [
                "ip-range"
            ],
            "sampleIndicators": [
                "2.26.75.0/24",
                "2.27.5.0/24",
                "2.27.62.0/24",
                "2.58.56.0/24",
                "2.59.152.0/24"
            ]
        },
        "CINS Army": {
            "description": "Malicious IPs from CINS Army threat intelligence. Fast-updating list of confirmed attackers.",
            "website": "http://cinsscore.com/",
            "updateFrequency": "Every 15 minutes",
            "iocCount": 38118,
            "iocDataUrl": "https://thehgtech.com/ioc-data/cins-army.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 38118,
                "newInLastHour": 15000,
                "lastUpdate": "2026-11-13 19:35 UTC",
                "isStale": false,
                "feedStatus": "active"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]12[.]229[.]231",
                "1[.]15[.]14[.]29",
                "1[.]193[.]56[.]135",
                "1[.]193[.]63[.]143",
                "1[.]193[.]63[.]198"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 10762,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 10762,
                "newInLastHour": 4766,
                "lastUpdate": "2026-11-13 19:35 UTC",
                "isStale": false,
                "feedStatus": "active"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]1[.]220[.]166",
                "1[.]10[.]221[.]161",
                "1[.]164[.]158[.]192",
                "1[.]180[.]246[.]242",
                "1[.]194[.]211[.]36"
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
                "lastUpdate": "2026-11-13 19:35 UTC",
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
                "lastUpdate": "2026-11-13 19:35 UTC",
                "isStale": true,
                "feedStatus": "stale"
            },
            "types": [
                "domain",
                "hash",
                "url",
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
                "lastUpdate": "2026-11-13 19:35 UTC",
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
            "iocCount": 10829,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 10829,
                "newInLastHour": 2,
                "lastUpdate": "2026-11-13 19:35 UTC",
                "isStale": false,
                "feedStatus": "active"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "9c24fe0ff6b7d2e3cd6fba2446f7ba0e4d18b737",
                "0799f487e606540102c11948be32f12439eee1ec",
                "9d0751a9eab469ff9a399a086ea2531b3c22dc30",
                "955d88cd421ad19859f6015a6ba3ea81e07b510c",
                "45972ca5b00612d1f51e51325f7662d60cdd7860"
            ]
        }
    },
    "overview": [
        {
            "type": "ssl-cert",
            "indicator": "9d0751a9eab469ff9a399a086ea2531b3c22dc30",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-11-13 08:31:07",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-13T17:34:10.484964+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "955d88cd421ad19859f6015a6ba3ea81e07b510c",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-11-13 08:30:13",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-13T17:34:10.484964+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "45972ca5b00612d1f51e51325f7662d60cdd7860",
            "description": "Malicious SSL certificate - WARDENStealer C&C",
            "timestamp": "2026-11-13 08:28:49",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-13T17:34:10.484964+05:30",
            "campaign": "WARDENStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "adc24b6b9445798ed026d417fe423b72aa290ebc",
            "description": "Malicious SSL certificate - WARDENStealer C&C",
            "timestamp": "2026-11-13 08:28:46",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-13T17:34:10.484964+05:30",
            "campaign": "WARDENStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "041028a7248ce181b5c083d17d31ef9443364b70",
            "description": "Malicious SSL certificate - WARDENStealer C&C",
            "timestamp": "2026-11-13 08:28:43",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-13T17:34:10.484964+05:30",
            "campaign": "WARDENStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "0335d3d009c55ea6f49e57aeb54fbdb84e5def8e",
            "description": "Malicious SSL certificate - FunStealer C&C",
            "timestamp": "2026-11-13 08:27:01",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-13T17:34:10.484964+05:30",
            "campaign": "FunStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "d313c92a2c0c535a7b60359f758b0032db60b99b",
            "description": "Malicious SSL certificate - FunStealer C&C",
            "timestamp": "2026-11-13 08:27:00",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-13T17:34:10.484964+05:30",
            "campaign": "FunStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "187d60de02b8184158547240aec75f31b8e93a27",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-11-13 07:31:05",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-13T17:34:10.484964+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "e637e68e3a9cdbe38b1c1c3ca411596797a0fd66",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-11-13 07:29:45",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-13T17:34:10.484964+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "32facbb63422b11875f949b45ceb306e4673a3b7",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-10-28 16:05:31",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-13T17:34:10.484964+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "db1370abc2fbcfc4d9dc332b56f0d2e91deb9d23",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-10-28 09:25:25",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-13T17:34:10.484964+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "840910d1faf7f934326f08cd5424862ca50646d5",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-10-28 09:25:17",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-13T17:34:10.484964+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "b843ff0bf989bbda8086054a9d9ce65e885e4845",
            "description": "Malicious SSL certificate - RevStealer C&C",
            "timestamp": "2026-10-28 09:00:00",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-13T17:34:10.484964+05:30",
            "campaign": "RevStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "62ddff80b88f12d3ca6ba44eb09b5e7ba9e2f390",
            "description": "Malicious SSL certificate - RevStealer C&C",
            "timestamp": "2026-10-28 08:59:01",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-13T17:34:10.484964+05:30",
            "campaign": "RevStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "4623e7174a6917c16402029733c2aaa14d2f83dd",
            "description": "Malicious SSL certificate - RevStealer C&C",
            "timestamp": "2026-10-28 08:55:17",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-13T17:34:10.484964+05:30",
            "campaign": "RevStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "3a2dc08faa4e47e147c1293b240d7502efa7db48",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-28 08:51:12",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-13T17:34:10.484964+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "be3eba6ce90c5d19ee1e986170e96323108d092d",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-28 08:50:53",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-13T17:34:10.484964+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "2444b1d1f72da59dc3bcc0191170509822344090",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-28 08:50:11",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-13T17:34:10.484964+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "875a92bb886a52699413fb2e4370adc03c1eda37",
            "description": "Malicious SSL certificate - QuasarRAT C&C",
            "timestamp": "2026-10-28 08:49:10",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-13T17:34:10.484964+05:30",
            "campaign": "QuasarRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "a2e76af14703e85cc8a27f108e0ee93ce2d9afb4",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-09-29 08:26:19",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-13T17:34:10.484964+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "c234496c7b0abcd873bb6bb5a54288b6d340b6ff",
            "description": "Malicious SSL certificate - QuasarRAT C&C",
            "timestamp": "2026-09-29 08:13:53",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-13T17:34:10.484964+05:30",
            "campaign": "QuasarRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "6aa91683111e7ecf0bc61912fecc00b294754b4e",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-09-29 08:13:12",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-13T17:34:10.484964+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "51616539837604afac222acc6e7a1cd2933f9b38",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-09-29 08:07:50",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-13T17:34:10.484964+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "557d7dfc6cc7127dfa30f7b31aa6462b21017d0a",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-09-29 07:56:03",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-13T17:34:10.484964+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "7cbe2790fbebfc1e6cd0d4a1ec6e75562c96328d",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-09-29 07:53:57",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-13T17:34:10.484964+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "89fd8b9884e947aeeed70793c9eed1e42248bf0f",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-09-29 07:23:00",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-13T17:34:10.484964+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "205d49b6c7313e16e931e1b5873cc20be0dee85b",
            "description": "Malicious SSL certificate - AsyncRAT C&C",
            "timestamp": "2026-09-29 07:22:26",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-13T17:34:10.484964+05:30",
            "campaign": "AsyncRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "8c2815dd9c294efb082c90739f0ede4823a4724d",
            "description": "Malicious SSL certificate - OrcusRAT C&C",
            "timestamp": "2026-09-29 07:22:05",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-13T17:34:10.484964+05:30",
            "campaign": "OrcusRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "94c4ec66b6f57c29ac935890d7796decea67af37",
            "description": "Malicious SSL certificate - AsyncRAT C&C",
            "timestamp": "2026-09-29 07:21:07",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-13T17:34:10.484964+05:30",
            "campaign": "AsyncRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "38cc7377529ac88a847e31466948df2de25008f4",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-09-29 07:20:53",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-13T17:34:10.484964+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "81c9eddccea61f8fa9788208189d79b82e3443a4",
            "description": "Malicious SSL certificate - AsyncRAT C&C",
            "timestamp": "2026-09-29 07:20:46",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-13T17:34:10.484964+05:30",
            "campaign": "AsyncRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "c5fad8ac582663e331f0a5bea7a2c0b919b1b275",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-09-29 07:19:54",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-13T17:34:10.484964+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "b9a4c53e64dd5dd4e23e24d4f525bd30e58a875a",
            "description": "Malicious SSL certificate - Havoc C&C",
            "timestamp": "2026-09-29 07:19:17",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-13T17:34:10.484964+05:30",
            "campaign": "Havoc",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "1a0f195729623afdd81c23edb2b2fbbc6675bce7",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-09-29 07:15:17",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-13T17:34:10.484964+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "ac9d756502ee8def404c880dc79c4b607fa91e1e",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-09-29 07:07:57",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-13T17:34:10.484964+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "2be66749a6e32a9c93985853c2baffa660357354",
            "description": "Malicious SSL certificate - AsyncRAT C&C",
            "timestamp": "2026-09-29 07:06:42",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-13T17:34:10.484964+05:30",
            "campaign": "AsyncRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "f871be6da75524aa3438fe29e8efdb3adf8e854e",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-09-29 06:34:43",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-13T17:34:10.484964+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ip",
            "indicator": "162[.]243[.]103[.]246",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-11-13 17:34 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-11-13T17:34:09.265955+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "178[.]62[.]3[.]223",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-11-13 17:34 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-11-13T17:34:09.265955+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "27[.]133[.]154[.]218",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-11-13 17:34 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-11-13T17:34:09.265955+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "34[.]204[.]119[.]63",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-11-13 17:34 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-11-13T17:34:09.265955+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "50[.]16[.]16[.]211",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-11-13 17:34 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-11-13T17:34:09.265955+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "1[.]1[.]220[.]166",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 17:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T17:34:07.241062+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]10[.]221[.]161",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 17:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T17:34:07.241062+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]164[.]158[.]192",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 17:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T17:34:07.241062+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]180[.]246[.]242",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 17:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T17:34:07.241062+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]2[.]226[.]61",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 17:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T17:34:07.241062+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]203[.]149[.]250",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 17:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T17:34:07.241062+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]214[.]214[.]114",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 17:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T17:34:07.241062+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]222[.]42[.]237",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 17:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T17:34:07.241062+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]234[.]53[.]65",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 17:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T17:34:07.241062+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]234[.]80[.]94",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 17:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T17:34:07.241062+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]238[.]106[.]229",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 17:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T17:34:07.241062+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]27[.]251[.]252",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 17:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T17:34:07.241062+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]28[.]220[.]226",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 17:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T17:34:07.241062+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]92[.]80[.]86",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 17:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T17:34:07.241062+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "100[.]33[.]23[.]13",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 17:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T17:34:07.241062+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]0[.]105[.]22",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 17:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T17:34:07.241062+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]11[.]137",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 17:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T17:34:07.241062+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]129[.]127",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 17:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T17:34:07.241062+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]153[.]162",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 17:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T17:34:07.241062+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]4[.]215",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 17:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T17:34:07.241062+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]4[.]240",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 17:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T17:34:07.241062+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]43[.]201",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 17:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T17:34:07.241062+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]67[.]70",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 17:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T17:34:07.241062+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]70[.]177",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 17:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T17:34:07.241062+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]168[.]3[.]207",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 17:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T17:34:07.241062+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]201[.]234[.]37",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 17:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T17:34:07.241062+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]227[.]203[.]162",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 17:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T17:34:07.241062+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]227[.]49[.]193",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 17:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T17:34:07.241062+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]32[.]240[.]31",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 17:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T17:34:07.241062+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]111[.]196",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 17:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T17:34:07.241062+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]114[.]181",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 17:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T17:34:07.241062+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]116[.]216",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 17:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T17:34:07.241062+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]119[.]203",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 17:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T17:34:07.241062+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]121[.]238",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 17:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T17:34:07.241062+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]122[.]18",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 17:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T17:34:07.241062+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]127[.]131",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 17:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T17:34:07.241062+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]228[.]201",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 17:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T17:34:07.241062+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]37[.]87[.]23",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 17:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T17:34:07.241062+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]12[.]168",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 17:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T17:34:07.241062+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]158[.]56",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 17:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T17:34:07.241062+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]20[.]56",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 17:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T17:34:07.241062+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]28[.]226",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 17:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T17:34:07.241062+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]8[.]113",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 17:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T17:34:07.241062+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]8[.]188",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 17:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T17:34:07.241062+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]59[.]102[.]62",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 17:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T17:34:07.241062+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]66[.]165[.]103",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 17:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T17:34:07.241062+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]76[.]244[.]135",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 17:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T17:34:07.241062+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]79[.]167[.]183",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 17:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T17:34:07.241062+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]89[.]141[.]184",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 17:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T17:34:07.241062+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]89[.]148[.]7",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 17:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T17:34:07.241062+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]89[.]76[.]249",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 17:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T17:34:07.241062+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]91[.]114[.]194",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 17:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T17:34:07.241062+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]91[.]126[.]150",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 17:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T17:34:07.241062+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]101[.]200",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 17:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T17:34:07.241062+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]192[.]45",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 17:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T17:34:07.241062+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]193[.]183",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 17:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T17:34:07.241062+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]195[.]253",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 17:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T17:34:07.241062+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]196[.]243",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 17:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 17:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T17:34:07.241062+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        }
    ],
    "dailySummary": {
        "stats": {
            "totalIndicators": 106439,
            "activeSources": 9,
            "criticalAlerts": 46847,
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
                "count": 11497,
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
                "count": 3769,
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
                "name": "CINS Threat List",
                "count": 37970,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]12[.]229[.]231",
                    "1[.]15[.]14[.]29",
                    "1[.]169[.]41[.]52"
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
                "count": 10653,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]1[.]220[.]166",
                    "1[.]10[.]221[.]161",
                    "1[.]164[.]158[.]192"
                ]
            },
            {
                "name": "Generic Phishing",
                "count": 3739,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://luskasdev[.]github[.]io/Phishing",
                    "hxxp://boosterhub[.]shop/",
                    "hxxps://135461223[.]site/et/1784/3ea2bfc3-7bc2-4bd0-bb97-64f1bb59b647/766428/x"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1762,
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
                "count": 1746,
                "types": [
                    "ssl-cert",
                    "domain",
                    "hash",
                    "url"
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
                    "hash",
                    "domain",
                    "ip"
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
        "fastestRisingThreat": "CINS Threat List",
        "totalAttacksThisHour": 20073,
        "lastCalculated": "2026-11-14 01:05 IST"
    }
};
