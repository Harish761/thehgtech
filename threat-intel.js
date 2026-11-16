// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-11-16T11:41:43.642860+05:30 IST (2026-11-16 06:11 UTC)
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-11-16T11:41:43.100182+05:30",
    "lastUpdatedFormatted": "Nov 16, 2026 at 11:41 AM IST",
    "lastUpdatedUtc": "2026-11-16 06:11 UTC",
    "comparisonPeriod": "Nov 15 \u2013 Nov 16, 2026",
    "stats": {
        "totalIOCs": 106319,
        "byType": {
            "url": 39447,
            "ip": 51476,
            "hash": 641,
            "domain": 2158,
            "ssl-cert": 10839,
            "ip-range": 1758
        },
        "byVendor": {
            "OpenPhish": 3760,
            "Malware Bazaar": 476,
            "Spamhaus DROP": 1758,
            "CINS Army": 37884,
            "Blocklist.de": 11042,
            "URLhaus": 34528,
            "ThreatFox": 6027,
            "Feodo Tracker": 5,
            "SSL Blacklist": 10839
        },
        "topMalware": [
            {
                "name": "Vidar",
                "count": 1633,
                "types": [
                    "domain",
                    "hash",
                    "url",
                    "ssl-cert"
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1607,
                "types": [
                    "domain",
                    "hash",
                    "ip",
                    "ssl-cert"
                ]
            },
            {
                "name": "Cobalt Strike",
                "count": 1183,
                "types": [
                    "domain",
                    "hash",
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
                "count": 712,
                "types": [
                    "hash",
                    "ssl-cert"
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
                "count": 551,
                "types": [
                    "ssl-cert"
                ]
            },
            {
                "name": "OffLoader",
                "count": 527,
                "types": [
                    "ssl-cert"
                ]
            },
            {
                "name": "ConnectWise",
                "count": 513,
                "types": [
                    "hash",
                    "ssl-cert"
                ]
            },
            {
                "name": "PureRAT",
                "count": 433,
                "types": [
                    "ip",
                    "ssl-cert"
                ]
            },
            {
                "name": "Malware",
                "count": 421,
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
                "count": 343,
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
                "type": "ip",
                "indicator": "162[.]243[.]103[.]246",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-11-16 04:34 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-11-16 04:34 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-11-16T04:34:36.437732+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "178[.]62[.]3[.]223",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-11-16 04:34 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-11-16 04:34 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-11-16T04:34:36.437732+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "27[.]133[.]154[.]218",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-11-16 04:34 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-11-16 04:34 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-11-16T04:34:36.437732+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "34[.]204[.]119[.]63",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-11-16 04:34 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-11-16 04:34 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-11-16T04:34:36.437732+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "50[.]16[.]16[.]211",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-11-16 04:34 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-11-16 04:34 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-11-16T04:34:36.437732+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "1[.]1[.]220[.]166",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-11-16 04:34 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-11-16 04:34 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-11-16T04:34:34.164020+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]162[.]194[.]101",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-11-16 04:34 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-11-16 04:34 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-11-16T04:34:34.164020+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]2[.]252[.]192",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-11-16 04:34 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-11-16 04:34 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-11-16T04:34:34.164020+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]20[.]178[.]157",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-11-16 04:34 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-11-16 04:34 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-11-16T04:34:34.164020+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]214[.]214[.]114",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-11-16 04:34 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-11-16 04:34 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-11-16T04:34:34.164020+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]22[.]175[.]131",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-11-16 04:34 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-11-16 04:34 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-11-16T04:34:34.164020+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]222[.]42[.]237",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-11-16 04:34 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-11-16 04:34 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-11-16T04:34:34.164020+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]234[.]53[.]65",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-11-16 04:34 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-11-16 04:34 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-11-16T04:34:34.164020+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]234[.]80[.]94",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-11-16 04:34 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-11-16 04:34 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-11-16T04:34:34.164020+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]238[.]106[.]229",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-11-16 04:34 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-11-16 04:34 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-11-16T04:34:34.164020+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]250[.]67[.]190",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-11-16 04:34 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-11-16 04:34 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-11-16T04:34:34.164020+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]27[.]251[.]252",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-11-16 04:34 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-11-16 04:34 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-11-16T04:34:34.164020+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]64[.]120[.]224",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-11-16 04:34 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-11-16 04:34 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-11-16T04:34:34.164020+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]92[.]80[.]86",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-11-16 04:34 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-11-16 04:34 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-11-16T04:34:34.164020+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "100[.]27[.]219[.]222",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-11-16 04:34 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-11-16 04:34 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-11-16T04:34:34.164020+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            }
        ],
        "lastUpdated": "2026-11-16T11:41:43.100182+05:30",
        "lastUpdatedFormatted": "Nov 16, 2026 at 11:41 AM IST",
        "lastUpdatedUtc": "2026-11-16 06:11 UTC"
    },
    "vendors": {
        "OpenPhish": {
            "description": "Real-time phishing URL feed updated every 15 minutes. Tracks active phishing sites targeting major brands and financial institutions.",
            "website": "https://openphish.com/",
            "updateFrequency": "Every 15 minutes",
            "iocCount": 3859,
            "iocDataUrl": "https://thehgtech.com/ioc-data/openphish.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 3859,
                "newInLastHour": 300,
                "lastUpdate": "2026-11-16 06:11 UTC",
                "isStale": false,
                "feedStatus": "active"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://secure-trezr-login-io[.]typedream[.]app/",
                "hxxp://tech[.]lmtokens[.]top/",
                "hxxps://facebook-verification-system5[.]blogspot[.]com/",
                "hxxps://www[.]facebook-verification-system5[.]blogspot[.]com/",
                "hxxp://vivekashar[.]github[.]io/NetflixNChill"
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
                "lastUpdate": "2026-11-16 06:11 UTC",
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
            "iocCount": 1700,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 1700,
                "newInLastHour": 0,
                "lastUpdate": "2026-11-16 06:11 UTC",
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
            "iocCount": 37959,
            "iocDataUrl": "https://thehgtech.com/ioc-data/cins-army.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 37959,
                "newInLastHour": 15000,
                "lastUpdate": "2026-11-16 06:11 UTC",
                "isStale": false,
                "feedStatus": "active"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]15[.]14[.]29",
                "1[.]168[.]185[.]245",
                "1[.]189[.]248[.]116",
                "1[.]192[.]129[.]106",
                "1[.]192[.]216[.]192"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 10704,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 10704,
                "newInLastHour": 4567,
                "lastUpdate": "2026-11-16 06:11 UTC",
                "isStale": false,
                "feedStatus": "active"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]1[.]220[.]166",
                "1[.]162[.]194[.]101",
                "1[.]2[.]252[.]192",
                "1[.]20[.]178[.]157",
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
                "lastUpdate": "2026-11-16 06:11 UTC",
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
                "lastUpdate": "2026-11-16 06:11 UTC",
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
                "lastUpdate": "2026-11-16 06:11 UTC",
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
            "iocCount": 11180,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 11180,
                "newInLastHour": 436,
                "lastUpdate": "2026-11-16 06:11 UTC",
                "isStale": false,
                "feedStatus": "active"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "2187472d18ae94eb9b84594963c762f4bccb2bdc",
                "a0ced9d182ba868da0705b67b553d47fdae988e4",
                "fc8993b811653fde5166bcc34d4a216096a93147",
                "7bed55b6ae0398ce51ffb0eb1a2c70e696c80a55",
                "8ca4afdbe8bd72257d4e55b29eeaec241a7e5e5c"
            ]
        }
    },
    "overview": [
        {
            "type": "ip",
            "indicator": "162[.]243[.]103[.]246",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-11-16T04:34:36.437732+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "178[.]62[.]3[.]223",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-11-16T04:34:36.437732+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "27[.]133[.]154[.]218",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-11-16T04:34:36.437732+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "34[.]204[.]119[.]63",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-11-16T04:34:36.437732+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "50[.]16[.]16[.]211",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-11-16T04:34:36.437732+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "1[.]1[.]220[.]166",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]162[.]194[.]101",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]2[.]252[.]192",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]20[.]178[.]157",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]214[.]214[.]114",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]22[.]175[.]131",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]222[.]42[.]237",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]234[.]53[.]65",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]234[.]80[.]94",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]238[.]106[.]229",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]250[.]67[.]190",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]27[.]251[.]252",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]64[.]120[.]224",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]92[.]80[.]86",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "100[.]27[.]219[.]222",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "100[.]29[.]192[.]126",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]0[.]105[.]22",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]129[.]127",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]153[.]162",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]43[.]201",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]64[.]76",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]66[.]30",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]67[.]70",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]69[.]201",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]70[.]177",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]187[.]203[.]166",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]201[.]234[.]37",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]204[.]69[.]58",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]227[.]203[.]162",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]32[.]240[.]31",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]119[.]203",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]121[.]238",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]228[.]201",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]43[.]77[.]85",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]12[.]168",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]134[.]75",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]158[.]56",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]20[.]56",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]28[.]226",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]8[.]113",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]8[.]188",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]66[.]165[.]103",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]75[.]224[.]26",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]76[.]244[.]135",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]79[.]167[.]183",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]89[.]141[.]184",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]89[.]182[.]189",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]89[.]76[.]249",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]91[.]114[.]194",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]193[.]131",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]193[.]145",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]195[.]17",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]195[.]253",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]195[.]62",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]196[.]243",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]202[.]144",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]202[.]177",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]202[.]48",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]205[.]145",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]209[.]234",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]214[.]116",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]216[.]165",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]221[.]200",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]225[.]252",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]140[.]97[.]134",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]156[.]241[.]83",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]157[.]95[.]99",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]177[.]101[.]53",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]209[.]76[.]137",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]210[.]148[.]41",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]210[.]149[.]105",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]217[.]243[.]237",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]220[.]160[.]138",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]220[.]160[.]141",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]220[.]160[.]143",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]220[.]160[.]144",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]220[.]160[.]146",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]220[.]160[.]148",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]220[.]160[.]47",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]220[.]160[.]67",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]220[.]161[.]119",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]220[.]161[.]170",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]220[.]161[.]171",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]220[.]161[.]173",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]220[.]161[.]79",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]220[.]161[.]84",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]220[.]161[.]85",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]220[.]161[.]86",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]220[.]163[.]245",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]220[.]163[.]246",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]220[.]163[.]248",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]220[.]163[.]249",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]220[.]163[.]250",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]220[.]163[.]27",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]23[.]122[.]235",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-16 04:34 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-16 04:34 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-16T04:34:34.164020+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        }
    ],
    "dailySummary": {
        "stats": {
            "totalIndicators": 106319,
            "activeSources": 9,
            "criticalAlerts": 46434,
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
                "count": 11084,
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
                "count": 3763,
                "trend": "stable",
                "percentage": -4
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
                "count": 37884,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]14[.]75[.]196",
                    "1[.]15[.]14[.]29",
                    "1[.]168[.]185[.]245"
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
                "count": 11042,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]1[.]220[.]166",
                    "1[.]162[.]194[.]101",
                    "1[.]2[.]252[.]192"
                ]
            },
            {
                "name": "Generic Phishing",
                "count": 3728,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://www[.]sscoinabaseggh[.]com/",
                    "hxxps://y8w2f1-1me006kno-arcadawebapps2[.]vercel[.]app/",
                    "hxxp://telquro-kxt-felqani-a3x8hq27[.]pages[.]dev/"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1758,
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
                "count": 1633,
                "types": [
                    "domain",
                    "hash",
                    "url",
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "963c8d952db068f9cd6b76e2313e69296ca6124f57755eeaa8c008ee05d349be",
                    "99b335ac5caf5249edc3223b100517d72f4fec0c6012955e3efc8d56c96880ef",
                    "6f38c0aedf5d1163cca3bf5721acb71cb54bf387a69827c8ccdc59064a19d6ed"
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1607,
                "types": [
                    "domain",
                    "hash",
                    "ip",
                    "ssl-cert"
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
                    "hash",
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
                "count": 712,
                "types": [
                    "hash",
                    "ssl-cert"
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
        "fastestRisingThreat": "Generic Phishing",
        "totalAttacksThisHour": 20308,
        "lastCalculated": "2026-11-16 11:41 IST"
    }
};
