// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-11-05T01:11:16.720774+05:30 IST (2026-11-04 19:41 UTC)
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-11-05T01:11:16.020312+05:30",
    "lastUpdatedFormatted": "Nov 05, 2026 at 01:11 AM IST",
    "lastUpdatedUtc": "2026-11-04 19:41 UTC",
    "comparisonPeriod": "Nov 04 \u2013 Nov 05, 2026",
    "stats": {
        "totalIOCs": 102264,
        "byType": {
            "url": 38918,
            "ip": 48133,
            "hash": 641,
            "domain": 2158,
            "ssl-cert": 10708,
            "ip-range": 1706
        },
        "byVendor": {
            "OpenPhish": 3231,
            "Malware Bazaar": 476,
            "Spamhaus DROP": 1706,
            "CINS Army": 35777,
            "Blocklist.de": 9806,
            "URLhaus": 34528,
            "ThreatFox": 6027,
            "Feodo Tracker": 5,
            "SSL Blacklist": 10708
        },
        "topMalware": [
            {
                "name": "AsyncRAT",
                "count": 1618,
                "types": [
                    "hash",
                    "ip",
                    "ssl-cert",
                    "domain"
                ]
            },
            {
                "name": "Vidar",
                "count": 1617,
                "types": [
                    "hash",
                    "domain",
                    "ssl-cert",
                    "url"
                ]
            },
            {
                "name": "Cobalt Strike",
                "count": 1183,
                "types": [
                    "hash",
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
                "name": "IClickFix",
                "count": 708,
                "types": [
                    "url",
                    "domain"
                ]
            },
            {
                "name": "QuasarRAT",
                "count": 704,
                "types": [
                    "hash",
                    "ssl-cert"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 552,
                "types": [
                    "ssl-cert"
                ]
            },
            {
                "name": "ConnectWise",
                "count": 502,
                "types": [
                    "hash",
                    "ssl-cert"
                ]
            },
            {
                "name": "OffLoader",
                "count": 497,
                "types": [
                    "ssl-cert"
                ]
            },
            {
                "name": "PureRAT",
                "count": 445,
                "types": [
                    "ip",
                    "ssl-cert"
                ]
            },
            {
                "name": "Malware",
                "count": 414,
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
                "count": 345,
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
                "indicator": "cd25fefedddbac11b8cba96ce39f6689968348e0",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-11-04 09:51:40",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-04 17:30 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-04T17:30:17.216801+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "c68ff15755ee7bc3663259b23f74ae0519b2b809",
                "description": "Malicious SSL certificate - PureLogsStealer C&C",
                "timestamp": "2026-11-04 09:28:23",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-04 17:30 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-04T17:30:17.216801+05:30",
                "campaign": "PureLogsStealer",
                "confidence": "High"
            },
            {
                "type": "ip",
                "indicator": "162[.]243[.]103[.]246",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-11-04 17:30 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-11-04 17:30 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-11-04T17:30:15.979603+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "178[.]62[.]3[.]223",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-11-04 17:30 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-11-04 17:30 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-11-04T17:30:15.979603+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "27[.]133[.]154[.]218",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-11-04 17:30 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-11-04 17:30 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-11-04T17:30:15.979603+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "34[.]204[.]119[.]63",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-11-04 17:30 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-11-04 17:30 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-11-04T17:30:15.979603+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "50[.]16[.]16[.]211",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-11-04 17:30 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-11-04 17:30 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-11-04T17:30:15.979603+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "1[.]14[.]192[.]95",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-11-04 17:30 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-11-04 17:30 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-11-04T17:30:13.949851+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]14[.]240[.]247",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-11-04 17:30 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-11-04 17:30 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-11-04T17:30:13.949851+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]162[.]226[.]183",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-11-04 17:30 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-11-04 17:30 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-11-04T17:30:13.949851+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]20[.]191[.]150",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-11-04 17:30 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-11-04 17:30 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-11-04T17:30:13.949851+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]214[.]214[.]114",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-11-04 17:30 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-11-04 17:30 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-11-04T17:30:13.949851+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]222[.]42[.]237",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-11-04 17:30 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-11-04 17:30 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-11-04T17:30:13.949851+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]234[.]80[.]94",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-11-04 17:30 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-11-04 17:30 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-11-04T17:30:13.949851+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]238[.]106[.]229",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-11-04 17:30 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-11-04 17:30 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-11-04T17:30:13.949851+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]27[.]251[.]252",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-11-04 17:30 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-11-04 17:30 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-11-04T17:30:13.949851+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "101[.]100[.]194[.]181",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-11-04 17:30 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-11-04 17:30 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-11-04T17:30:13.949851+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "101[.]126[.]11[.]137",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-11-04 17:30 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-11-04 17:30 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-11-04T17:30:13.949851+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "101[.]126[.]129[.]127",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-11-04 17:30 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-11-04 17:30 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-11-04T17:30:13.949851+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "101[.]126[.]141[.]163",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-11-04 17:30 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-11-04 17:30 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-11-04T17:30:13.949851+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            }
        ],
        "lastUpdated": "2026-11-05T01:11:16.020312+05:30",
        "lastUpdatedFormatted": "Nov 05, 2026 at 01:11 AM IST",
        "lastUpdatedUtc": "2026-11-04 19:41 UTC"
    },
    "vendors": {
        "OpenPhish": {
            "description": "Real-time phishing URL feed updated every 15 minutes. Tracks active phishing sites targeting major brands and financial institutions.",
            "website": "https://openphish.com/",
            "updateFrequency": "Every 15 minutes",
            "iocCount": 3435,
            "iocDataUrl": "https://thehgtech.com/ioc-data/openphish.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 3435,
                "newInLastHour": 300,
                "lastUpdate": "2026-11-04 19:40 UTC",
                "isStale": false,
                "feedStatus": "active"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://whatsapp[.]nlabstech[.]in/",
                "hxxps://zw9403[.]craftum[.]io/",
                "hxxp://www[.]qrfy[.]io/lQFpMKHkB9/",
                "hxxp://delinea[.]ar/dfg/index[.]html",
                "hxxp://obontezip--danielsplurnbin[.]replit[.]app/"
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
                "lastUpdate": "2026-11-04 19:40 UTC",
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
            "iocCount": 1767,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 1767,
                "newInLastHour": 61,
                "lastUpdate": "2026-11-04 19:40 UTC",
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
            "iocCount": 36122,
            "iocDataUrl": "https://thehgtech.com/ioc-data/cins-army.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 36122,
                "newInLastHour": 15000,
                "lastUpdate": "2026-11-04 19:40 UTC",
                "isStale": false,
                "feedStatus": "active"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]235[.]78",
                "1[.]15[.]14[.]29",
                "1[.]168[.]190[.]191",
                "1[.]193[.]59[.]243",
                "1[.]20[.]151[.]114"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 10034,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 10034,
                "newInLastHour": 4380,
                "lastUpdate": "2026-11-04 19:40 UTC",
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
                "lastUpdate": "2026-11-04 19:40 UTC",
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
                "lastUpdate": "2026-11-04 19:40 UTC",
                "isStale": true,
                "feedStatus": "stale"
            },
            "types": [
                "domain",
                "hash",
                "ip",
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
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 5,
                "newInLastHour": 5,
                "lastUpdate": "2026-11-04 19:40 UTC",
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
            "iocCount": 10708,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "isStale": true,
            "feedStatus": "stale",
            "stats": {
                "total": 10708,
                "newInLastHour": 0,
                "lastUpdate": "2026-11-04 19:41 UTC",
                "isStale": true,
                "feedStatus": "stale"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "cd25fefedddbac11b8cba96ce39f6689968348e0",
                "c68ff15755ee7bc3663259b23f74ae0519b2b809",
                "34caba1bef1d1006199db86c6e2d5bf1d67c884e",
                "277a06bc0dfdd0da5455bdb3d5b92f7cd5fc9520",
                "b04b85ac36b0501fad420e3bc7976c3d31409b4e"
            ]
        }
    },
    "overview": [
        {
            "type": "ssl-cert",
            "indicator": "cd25fefedddbac11b8cba96ce39f6689968348e0",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-11-04 09:51:40",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-04T17:30:17.216801+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "c68ff15755ee7bc3663259b23f74ae0519b2b809",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-11-04 09:28:23",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-04T17:30:17.216801+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ip",
            "indicator": "162[.]243[.]103[.]246",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-11-04T17:30:15.979603+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "178[.]62[.]3[.]223",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-11-04T17:30:15.979603+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "27[.]133[.]154[.]218",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-11-04T17:30:15.979603+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "34[.]204[.]119[.]63",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-11-04T17:30:15.979603+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "50[.]16[.]16[.]211",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-11-04T17:30:15.979603+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "1[.]14[.]192[.]95",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]14[.]240[.]247",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]162[.]226[.]183",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]20[.]191[.]150",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]214[.]214[.]114",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]222[.]42[.]237",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]234[.]80[.]94",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]238[.]106[.]229",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]27[.]251[.]252",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]100[.]194[.]181",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]11[.]137",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]129[.]127",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]141[.]163",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]153[.]162",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]34[.]17",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]53[.]14",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]64[.]76",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]66[.]30",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]67[.]70",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]69[.]201",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]70[.]177",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]200[.]243[.]197",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]201[.]234[.]37",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]201[.]38[.]226",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]206[.]107[.]245",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]227[.]203[.]162",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]32[.]240[.]31",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]104[.]46",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]108[.]160",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]108[.]72",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]114[.]252",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]116[.]216",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]228[.]201",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]42[.]158[.]179",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]46[.]137[.]189",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]134[.]74",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]134[.]75",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]152[.]216",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]158[.]56",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]20[.]56",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]8[.]113",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]8[.]188",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]66[.]165[.]103",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]76[.]244[.]135",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]79[.]165[.]43",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]79[.]167[.]183",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]89[.]141[.]184",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]89[.]76[.]249",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]91[.]114[.]194",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]91[.]126[.]150",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]192[.]45",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]192[.]88",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]193[.]145",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]193[.]183",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]195[.]17",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]195[.]253",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]195[.]62",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]196[.]243",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]197[.]182",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]202[.]144",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]202[.]177",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]202[.]48",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]202[.]87",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]203[.]141",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]205[.]145",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]206[.]202",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]209[.]234",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]212[.]62",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]214[.]116",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]220[.]35",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]221[.]200",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]225[.]252",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]229[.]2",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]230[.]56",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]99[.]37[.]80",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]107[.]204[.]139",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]129[.]82[.]39",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]140[.]97[.]134",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]177[.]101[.]53",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]179[.]205[.]86",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]202[.]75[.]187",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]209[.]76[.]136",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]209[.]76[.]137",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]210[.]146[.]231",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]210[.]148[.]92",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]210[.]149[.]105",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]210[.]149[.]38",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]215[.]33[.]6",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]220[.]160[.]47",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]220[.]160[.]67",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]220[.]161[.]119",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]220[.]161[.]170",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]220[.]161[.]171",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-04 17:30 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-04 17:30 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-04T17:30:13.949851+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        }
    ],
    "dailySummary": {
        "stats": {
            "totalIndicators": 102264,
            "activeSources": 9,
            "criticalAlerts": 46303,
            "activeCampaigns": 216
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
                "count": 10953,
                "trend": "stable",
                "percentage": -3
            },
            {
                "category": "Botnet",
                "count": 4297,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Phishing",
                "count": 3234,
                "trend": "stable",
                "percentage": -8
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
                "count": 35777,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]0[.]235[.]78",
                    "1[.]15[.]14[.]29",
                    "1[.]168[.]190[.]191"
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
                "count": 9806,
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
                "count": 3221,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://digitalinv[.]aeronationaviation[.]com/method1/email[.]html",
                    "hxxps://microsoft09-one[.]vercel[.]app/",
                    "hxxp://www[.]microsoft09-one[.]vercel[.]app/"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1706,
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
                "count": 1618,
                "types": [
                    "hash",
                    "ip",
                    "ssl-cert",
                    "domain"
                ],
                "sampleIndicators": [
                    "195fec1204186bb02fde9ac09f5a45add84dde09533400a354a2d97fd6b20acd",
                    "46[.]246[.]4[.]16",
                    "34[.]51[.]206[.]15"
                ]
            },
            {
                "name": "Vidar",
                "count": 1617,
                "types": [
                    "hash",
                    "domain",
                    "ssl-cert",
                    "url"
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
                    "ip",
                    "domain"
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
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "CINS Threat List",
        "totalAttacksThisHour": 19746,
        "lastCalculated": "2026-11-05 01:11 IST"
    }
};
