// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-11-13T06:30:10.581662+05:30 IST (2026-11-13 01:00 UTC)
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-11-13T06:30:09.945608+05:30",
    "lastUpdatedFormatted": "Nov 13, 2026 at 06:30 AM IST",
    "lastUpdatedUtc": "2026-11-13 01:00 UTC",
    "comparisonPeriod": "Nov 12 \u2013 Nov 13, 2026",
    "stats": {
        "totalIOCs": 107367,
        "byType": {
            "url": 39369,
            "ip": 52198,
            "hash": 641,
            "domain": 2158,
            "ssl-cert": 11239,
            "ip-range": 1762
        },
        "byVendor": {
            "OpenPhish": 3682,
            "Malware Bazaar": 476,
            "Spamhaus DROP": 1762,
            "CINS Army": 39187,
            "Blocklist.de": 10461,
            "URLhaus": 34528,
            "ThreatFox": 6027,
            "Feodo Tracker": 5,
            "SSL Blacklist": 11239
        },
        "topMalware": [
            {
                "name": "Vidar",
                "count": 1743,
                "types": [
                    "domain",
                    "hash",
                    "ssl-cert",
                    "url"
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1628,
                "types": [
                    "ip",
                    "hash",
                    "ssl-cert",
                    "domain"
                ]
            },
            {
                "name": "Cobalt Strike",
                "count": 1183,
                "types": [
                    "ip",
                    "hash",
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
                "count": 731,
                "types": [
                    "hash",
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
                "name": "OffLoader",
                "count": 569,
                "types": [
                    "ssl-cert"
                ]
            },
            {
                "name": "ConnectWise",
                "count": 560,
                "types": [
                    "hash",
                    "ssl-cert"
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
                "count": 429,
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
                "type": "ip",
                "indicator": "162[.]243[.]103[.]246",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-11-13 05:17 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-11-13 05:17 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-11-13T05:17:03.062232+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "178[.]62[.]3[.]223",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-11-13 05:17 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-11-13 05:17 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-11-13T05:17:03.062232+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "27[.]133[.]154[.]218",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-11-13 05:17 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-11-13 05:17 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-11-13T05:17:03.062232+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "34[.]204[.]119[.]63",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-11-13 05:17 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-11-13 05:17 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-11-13T05:17:03.062232+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "50[.]16[.]16[.]211",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-11-13 05:17 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-11-13 05:17 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-11-13T05:17:03.062232+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "1[.]1[.]220[.]166",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-11-13 05:17 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-11-13 05:17 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-11-13T05:17:01.267491+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]10[.]221[.]161",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-11-13 05:17 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-11-13 05:17 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-11-13T05:17:01.267491+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]164[.]158[.]192",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-11-13 05:17 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-11-13 05:17 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-11-13T05:17:01.267491+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]180[.]246[.]242",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-11-13 05:17 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-11-13 05:17 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-11-13T05:17:01.267491+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]2[.]164[.]171",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-11-13 05:17 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-11-13 05:17 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-11-13T05:17:01.267491+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]2[.]226[.]61",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-11-13 05:17 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-11-13 05:17 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-11-13T05:17:01.267491+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]203[.]149[.]250",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-11-13 05:17 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-11-13 05:17 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-11-13T05:17:01.267491+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]214[.]214[.]114",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-11-13 05:17 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-11-13 05:17 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-11-13T05:17:01.267491+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]222[.]42[.]237",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-11-13 05:17 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-11-13 05:17 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-11-13T05:17:01.267491+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]234[.]53[.]65",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-11-13 05:17 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-11-13 05:17 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-11-13T05:17:01.267491+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]234[.]80[.]94",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-11-13 05:17 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-11-13 05:17 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-11-13T05:17:01.267491+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]238[.]106[.]229",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-11-13 05:17 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-11-13 05:17 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-11-13T05:17:01.267491+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]27[.]251[.]252",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-11-13 05:17 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-11-13 05:17 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-11-13T05:17:01.267491+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]28[.]220[.]226",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-11-13 05:17 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-11-13 05:17 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-11-13T05:17:01.267491+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]36[.]196[.]30",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-11-13 05:17 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-11-13 05:17 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-11-13T05:17:01.267491+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            }
        ],
        "lastUpdated": "2026-11-13T06:30:09.945608+05:30",
        "lastUpdatedFormatted": "Nov 13, 2026 at 06:30 AM IST",
        "lastUpdatedUtc": "2026-11-13 01:00 UTC"
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
                "lastUpdate": "2026-11-13 01:00 UTC",
                "isStale": false,
                "feedStatus": "active"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://airbnb[.]frngrgqb46[.]workers[.]dev/help/article/1320",
                "hxxp://www[.]shopeemidyer[.]blogspot[.]com/",
                "hxxp://www[.]layanan-pemenang59[.]blogspot[.]com/",
                "hxxps://www[.]hadiahshopee3434[.]blogspot[.]com/",
                "hxxps://atendimentopj[.]vercel[.]app/"
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
                "lastUpdate": "2026-11-13 01:00 UTC",
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
            "iocCount": 1637,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 1637,
                "newInLastHour": 0,
                "lastUpdate": "2026-11-13 01:00 UTC",
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
            "iocCount": 37654,
            "iocDataUrl": "https://thehgtech.com/ioc-data/cins-army.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 37654,
                "newInLastHour": 15000,
                "lastUpdate": "2026-11-13 01:00 UTC",
                "isStale": false,
                "feedStatus": "active"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]12[.]229[.]231",
                "1[.]169[.]41[.]52",
                "1[.]193[.]63[.]131",
                "1[.]193[.]63[.]198",
                "1[.]20[.]151[.]114"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 10372,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 10372,
                "newInLastHour": 4468,
                "lastUpdate": "2026-11-13 01:00 UTC",
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
                "1[.]2[.]226[.]61"
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
                "lastUpdate": "2026-11-13 01:00 UTC",
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
                "lastUpdate": "2026-11-13 01:00 UTC",
                "isStale": true,
                "feedStatus": "stale"
            },
            "types": [
                "domain",
                "ip",
                "hash",
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
                "lastUpdate": "2026-11-13 01:00 UTC",
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
            "iocCount": 11215,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 11215,
                "newInLastHour": 4,
                "lastUpdate": "2026-11-13 01:00 UTC",
                "isStale": false,
                "feedStatus": "active"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "c197cc60215219ca6d3781953e16ed060be8ed9a",
                "5961621983c7a3175a43032505457983fd0422f5",
                "206699fd6ec97741dcdfe7d8ff2a066f1788a3f7",
                "0f01c1b3f102f81f42772aed3893c2c9e0f48fb7",
                "8850bca458b507876f7d39297d44bdb1634ba915"
            ]
        }
    },
    "overview": [
        {
            "type": "ip",
            "indicator": "162[.]243[.]103[.]246",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-11-13T05:17:03.062232+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "178[.]62[.]3[.]223",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-11-13T05:17:03.062232+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "27[.]133[.]154[.]218",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-11-13T05:17:03.062232+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "34[.]204[.]119[.]63",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-11-13T05:17:03.062232+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "50[.]16[.]16[.]211",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-11-13T05:17:03.062232+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "1[.]1[.]220[.]166",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]10[.]221[.]161",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]164[.]158[.]192",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]180[.]246[.]242",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]2[.]164[.]171",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]2[.]226[.]61",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]203[.]149[.]250",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]214[.]214[.]114",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]222[.]42[.]237",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]234[.]53[.]65",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]234[.]80[.]94",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]238[.]106[.]229",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]27[.]251[.]252",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]28[.]220[.]226",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]36[.]196[.]30",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]92[.]80[.]86",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]94[.]119[.]10",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "100[.]33[.]23[.]13",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]11[.]137",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]129[.]127",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]153[.]162",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]4[.]215",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]43[.]201",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]64[.]76",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]67[.]70",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]69[.]201",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]70[.]177",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]168[.]3[.]207",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]201[.]234[.]37",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]227[.]203[.]162",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]227[.]49[.]193",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]32[.]240[.]31",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]111[.]196",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]114[.]181",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]116[.]216",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]119[.]203",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]121[.]238",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]228[.]201",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]12[.]168",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]134[.]75",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]158[.]56",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]20[.]56",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]8[.]113",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]8[.]188",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]59[.]102[.]62",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]66[.]165[.]103",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]76[.]244[.]135",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]79[.]167[.]183",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]89[.]141[.]184",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]89[.]148[.]7",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]89[.]76[.]249",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]91[.]114[.]194",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]101[.]200",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]192[.]45",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]193[.]183",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]195[.]253",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]196[.]3",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]197[.]182",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]200[.]79",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]202[.]144",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]202[.]177",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]202[.]48",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]202[.]87",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]203[.]141",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]206[.]202",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]209[.]234",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]212[.]62",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]214[.]116",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]221[.]200",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]225[.]252",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]227[.]188",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]0[.]6[.]106",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]140[.]97[.]134",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]209[.]76[.]137",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]210[.]148[.]92",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]210[.]149[.]105",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]213[.]92[.]14",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]216[.]240[.]51",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]217[.]191[.]17",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]217[.]34[.]140",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]220[.]12[.]50",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]220[.]160[.]67",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]220[.]161[.]119",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]220[.]161[.]170",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]220[.]161[.]171",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]220[.]161[.]173",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]220[.]161[.]174",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]220[.]161[.]79",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]220[.]161[.]84",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]220[.]161[.]85",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]220[.]161[.]86",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]220[.]163[.]207",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]23[.]122[.]235",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]38[.]3[.]104",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "102[.]88[.]137[.]145",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-13 05:17 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-13 05:17 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-13T05:17:01.267491+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        }
    ],
    "dailySummary": {
        "stats": {
            "totalIndicators": 107367,
            "activeSources": 9,
            "criticalAlerts": 46834,
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
                "count": 11484,
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
                "count": 3685,
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
                "count": 39187,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]12[.]229[.]231",
                    "1[.]169[.]41[.]52",
                    "1[.]193[.]102[.]128"
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
                "count": 10461,
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
                "count": 3653,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://support-center-apple[.]wasmer[.]app/",
                    "hxxp://netflix-ui-clone-vikas[.]vercel[.]app/",
                    "hxxps://mystorage-admin-signreview[.]b-cdn[.]net/"
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
                "count": 1743,
                "types": [
                    "domain",
                    "hash",
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
                "name": "AsyncRAT",
                "count": 1628,
                "types": [
                    "ip",
                    "hash",
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
                "name": "Cobalt Strike",
                "count": 1183,
                "types": [
                    "ip",
                    "hash",
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
                "name": "QuasarRAT",
                "count": 731,
                "types": [
                    "hash",
                    "ssl-cert"
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
        "totalAttacksThisHour": 19777,
        "lastCalculated": "2026-11-13 06:30 IST"
    }
};
