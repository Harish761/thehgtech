// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-11-06T21:22:09.729522+05:30 IST (2026-11-06 15:52 UTC)
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-11-06T21:22:09.132259+05:30",
    "lastUpdatedFormatted": "Nov 06, 2026 at 09:22 PM IST",
    "lastUpdatedUtc": "2026-11-06 15:52 UTC",
    "comparisonPeriod": "Nov 05 \u2013 Nov 06, 2026",
    "stats": {
        "totalIOCs": 104964,
        "byType": {
            "url": 39290,
            "ip": 51510,
            "hash": 641,
            "domain": 2158,
            "ssl-cert": 10738,
            "ip-range": 627
        },
        "byVendor": {
            "OpenPhish": 3603,
            "Malware Bazaar": 476,
            "Spamhaus DROP": 627,
            "CINS Army": 38552,
            "Blocklist.de": 10408,
            "URLhaus": 34528,
            "ThreatFox": 6027,
            "Feodo Tracker": 5,
            "SSL Blacklist": 10738
        },
        "topMalware": [
            {
                "name": "AsyncRAT",
                "count": 1611,
                "types": [
                    "domain",
                    "hash",
                    "ssl-cert",
                    "ip"
                ]
            },
            {
                "name": "Vidar",
                "count": 1596,
                "types": [
                    "url",
                    "hash",
                    "domain",
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
                "name": "IClickFix",
                "count": 708,
                "types": [
                    "domain",
                    "url"
                ]
            },
            {
                "name": "QuasarRAT",
                "count": 700,
                "types": [
                    "hash",
                    "ssl-cert"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 553,
                "types": [
                    "ssl-cert"
                ]
            },
            {
                "name": "ConnectWise",
                "count": 540,
                "types": [
                    "hash",
                    "ssl-cert"
                ]
            },
            {
                "name": "OffLoader",
                "count": 516,
                "types": [
                    "ssl-cert"
                ]
            },
            {
                "name": "PureRAT",
                "count": 437,
                "types": [
                    "ssl-cert",
                    "ip"
                ]
            },
            {
                "name": "Malware",
                "count": 412,
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
                    "ssl-cert",
                    "ip"
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
                "timestamp": "2026-11-06 11:55 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-11-06 11:55 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-11-06T11:55:48.207468+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "178[.]62[.]3[.]223",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-11-06 11:55 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-11-06 11:55 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-11-06T11:55:48.207468+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "27[.]133[.]154[.]218",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-11-06 11:55 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-11-06 11:55 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-11-06T11:55:48.207468+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "34[.]204[.]119[.]63",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-11-06 11:55 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-11-06 11:55 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-11-06T11:55:48.207468+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "50[.]16[.]16[.]211",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-11-06 11:55 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-11-06 11:55 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-11-06T11:55:48.207468+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "1[.]14[.]192[.]95",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-11-06 11:55 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-11-06 11:55 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-11-06T11:55:45.857982+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]203[.]149[.]250",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-11-06 11:55 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-11-06 11:55 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-11-06T11:55:45.857982+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]214[.]214[.]114",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-11-06 11:55 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-11-06 11:55 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-11-06T11:55:45.857982+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]234[.]80[.]94",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-11-06 11:55 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-11-06 11:55 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-11-06T11:55:45.857982+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]238[.]106[.]229",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-11-06 11:55 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-11-06 11:55 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-11-06T11:55:45.857982+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]80[.]241[.]27",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-11-06 11:55 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-11-06 11:55 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-11-06T11:55:45.857982+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]94[.]4[.]74",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-11-06 11:55 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-11-06 11:55 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-11-06T11:55:45.857982+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]95[.]142[.]34",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-11-06 11:55 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-11-06 11:55 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-11-06T11:55:45.857982+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "100[.]29[.]192[.]89",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-11-06 11:55 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-11-06 11:55 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-11-06T11:55:45.857982+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "100[.]52[.]250[.]238",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-11-06 11:55 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-11-06 11:55 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-11-06T11:55:45.857982+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "100[.]62[.]106[.]179",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-11-06 11:55 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-11-06 11:55 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-11-06T11:55:45.857982+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "101[.]109[.]122[.]190",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-11-06 11:55 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-11-06 11:55 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-11-06T11:55:45.857982+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "101[.]126[.]11[.]137",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-11-06 11:55 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-11-06 11:55 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-11-06T11:55:45.857982+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "101[.]126[.]129[.]127",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-11-06 11:55 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-11-06 11:55 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-11-06T11:55:45.857982+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "101[.]126[.]24[.]74",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-11-06 11:55 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-11-06 11:55 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-11-06T11:55:45.857982+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            }
        ],
        "lastUpdated": "2026-11-06T21:22:09.132259+05:30",
        "lastUpdatedFormatted": "Nov 06, 2026 at 09:22 PM IST",
        "lastUpdatedUtc": "2026-11-06 15:52 UTC"
    },
    "vendors": {
        "OpenPhish": {
            "description": "Real-time phishing URL feed updated every 15 minutes. Tracks active phishing sites targeting major brands and financial institutions.",
            "website": "https://openphish.com/",
            "updateFrequency": "Every 15 minutes",
            "iocCount": 3903,
            "iocDataUrl": "https://thehgtech.com/ioc-data/openphish.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 3903,
                "newInLastHour": 300,
                "lastUpdate": "2026-11-06 15:52 UTC",
                "isStale": false,
                "feedStatus": "active"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://browardcourtpdf-viewer[.]vercel[.]app/",
                "hxxps://www[.]browardcourtpdf-viewer[.]vercel[.]app/",
                "hxxps://www[.]roblox[.]ly/users/7676313166/profile",
                "hxxps://paypal-verify[.]vercel[.]app/auth/signin?callbackUrl=https%3A%2F%2Fpaypal-verify[.]vercel[.]app%2F",
                "hxxp://paypal-verify[.]vercel[.]app/"
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
                "lastUpdate": "2026-11-06 15:52 UTC",
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
            "iocCount": 1761,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 1761,
                "newInLastHour": 1136,
                "lastUpdate": "2026-11-06 15:52 UTC",
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
            "iocCount": 39122,
            "iocDataUrl": "https://thehgtech.com/ioc-data/cins-army.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 39122,
                "newInLastHour": 15000,
                "lastUpdate": "2026-11-06 15:52 UTC",
                "isStale": false,
                "feedStatus": "active"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]12[.]229[.]231",
                "1[.]14[.]64[.]144",
                "1[.]193[.]59[.]243",
                "1[.]20[.]151[.]114",
                "1[.]223[.]11[.]69"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 10537,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 10537,
                "newInLastHour": 4779,
                "lastUpdate": "2026-11-06 15:52 UTC",
                "isStale": false,
                "feedStatus": "active"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]14[.]192[.]95",
                "1[.]203[.]149[.]250",
                "1[.]214[.]214[.]114",
                "1[.]222[.]42[.]237",
                "1[.]234[.]80[.]94"
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
                "lastUpdate": "2026-11-06 15:52 UTC",
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
                "lastUpdate": "2026-11-06 15:52 UTC",
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
                "lastUpdate": "2026-11-06 15:52 UTC",
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
            "iocCount": 10884,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 10884,
                "newInLastHour": 425,
                "lastUpdate": "2026-11-06 15:52 UTC",
                "isStale": false,
                "feedStatus": "active"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "07e76b646820ea12065b4aa925d2a7e31f2b0841",
                "662893890b7e8b8f238a39783415f9f744e29175",
                "0afd01382371c84a699766d7f0b736e9440faee6",
                "7b10bb2a42505df013247e7fde6b36f4f60ee924",
                "de47608bc00bb94984b4e123585b7e8be37bf8b4"
            ]
        }
    },
    "overview": [
        {
            "type": "ip",
            "indicator": "162[.]243[.]103[.]246",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-11-06T11:55:48.207468+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "178[.]62[.]3[.]223",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-11-06T11:55:48.207468+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "27[.]133[.]154[.]218",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-11-06T11:55:48.207468+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "34[.]204[.]119[.]63",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-11-06T11:55:48.207468+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "50[.]16[.]16[.]211",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-11-06T11:55:48.207468+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "1[.]14[.]192[.]95",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]203[.]149[.]250",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]214[.]214[.]114",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]234[.]80[.]94",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]238[.]106[.]229",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]80[.]241[.]27",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]94[.]4[.]74",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]95[.]142[.]34",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "100[.]29[.]192[.]89",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "100[.]52[.]250[.]238",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "100[.]62[.]106[.]179",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]109[.]122[.]190",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]11[.]137",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]129[.]127",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]24[.]74",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]4[.]240",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]53[.]14",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]64[.]76",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]66[.]30",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]67[.]70",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]70[.]177",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]200[.]243[.]197",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]201[.]233[.]222",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]201[.]234[.]37",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]201[.]38[.]226",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]227[.]203[.]162",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]245[.]65[.]157",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]105[.]50",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]108[.]160",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]114[.]177",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]114[.]252",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]116[.]216",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]119[.]203",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]125[.]211",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]97[.]80",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]134[.]74",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]152[.]216",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]158[.]56",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]20[.]56",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]8[.]113",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]8[.]188",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]66[.]165[.]103",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]75[.]224[.]26",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]76[.]244[.]135",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]79[.]165[.]43",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]79[.]167[.]183",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]89[.]141[.]184",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]89[.]76[.]249",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]91[.]114[.]194",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]91[.]126[.]150",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]192[.]231",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]192[.]45",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]192[.]88",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]193[.]131",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]193[.]145",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]193[.]183",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]195[.]17",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]195[.]253",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]195[.]62",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]196[.]243",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]197[.]182",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]202[.]144",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]202[.]177",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]202[.]87",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]203[.]141",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]209[.]234",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]214[.]98",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]218[.]210",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]221[.]200",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]224[.]241",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]225[.]252",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]229[.]2",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]99[.]37[.]80",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]107[.]204[.]139",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]119[.]51[.]105",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]129[.]81[.]201",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]177[.]101[.]53",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]209[.]76[.]136",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]209[.]76[.]137",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]210[.]148[.]92",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]210[.]149[.]105",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]210[.]149[.]38",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]213[.]48[.]150",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]216[.]240[.]51",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]217[.]34[.]140",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]220[.]160[.]47",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]220[.]160[.]67",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]220[.]161[.]119",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]220[.]161[.]170",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]220[.]161[.]171",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]220[.]161[.]173",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]220[.]161[.]174",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]220[.]161[.]85",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]220[.]161[.]86",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]220[.]163[.]206",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-06 11:55 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-06 11:55 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-06T11:55:45.857982+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        }
    ],
    "dailySummary": {
        "stats": {
            "totalIndicators": 104964,
            "activeSources": 9,
            "criticalAlerts": 46333,
            "activeCampaigns": 215
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
                "count": 10983,
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
                "count": 3606,
                "trend": "stable",
                "percentage": -2
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
                "count": 38552,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]0[.]235[.]78",
                    "1[.]20[.]151[.]114",
                    "1[.]223[.]11[.]69"
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
                "count": 10408,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]14[.]192[.]95",
                    "1[.]203[.]149[.]250",
                    "1[.]214[.]214[.]114"
                ]
            },
            {
                "name": "Generic Phishing",
                "count": 3582,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://smcparral[.]com/Xplrs/?gate=031",
                    "hxxps://2h[.]ae/eJceI",
                    "hxxps://ios[.]app-lmaxex[.]top/"
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1611,
                "types": [
                    "domain",
                    "hash",
                    "ssl-cert",
                    "ip"
                ],
                "sampleIndicators": [
                    "195fec1204186bb02fde9ac09f5a45add84dde09533400a354a2d97fd6b20acd",
                    "46[.]246[.]4[.]16",
                    "34[.]51[.]206[.]15"
                ]
            },
            {
                "name": "Vidar",
                "count": 1596,
                "types": [
                    "url",
                    "hash",
                    "domain",
                    "ssl-cert"
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
                "name": "IClickFix",
                "count": 708,
                "types": [
                    "domain",
                    "url"
                ],
                "sampleIndicators": [
                    "kaizentekacademy[.]com",
                    "locandaskansen[.]it",
                    "polymathconsultant[.]com"
                ]
            },
            {
                "name": "QuasarRAT",
                "count": 700,
                "types": [
                    "hash",
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "898a138ef42c7846cd641bd8406a9ec940991b26113389bbc847648a76cf104c",
                    "937b0696c1b45add349c0bb80ccb2c5bf1b45e8d",
                    "875a92bb886a52699413fb2e4370adc03c1eda37"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "Spamhaus DROP List",
        "totalAttacksThisHour": 21645,
        "lastCalculated": "2026-11-06 21:22 IST"
    }
};
