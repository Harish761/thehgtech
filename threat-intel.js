// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-27T19:51:49.648961+05:30 IST (2026-10-27 14:21 UTC)
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-27T19:51:48.820189+05:30",
    "lastUpdatedFormatted": "Oct 27, 2026 at 07:51 PM IST",
    "lastUpdatedUtc": "2026-10-27 14:21 UTC",
    "comparisonPeriod": "Oct 26 \u2013 Oct 27, 2026",
    "stats": {
        "totalIOCs": 101018,
        "byType": {
            "url": 40072,
            "ip": 51918,
            "hash": 2212,
            "domain": 2701,
            "ssl-cert": 2428,
            "ip-range": 1687
        },
        "byVendor": {
            "OpenPhish": 3632,
            "Malware Bazaar": 1192,
            "Spamhaus DROP": 1687,
            "CINS Army": 38515,
            "Blocklist.de": 10616,
            "URLhaus": 34822,
            "ThreatFox": 8121,
            "Feodo Tracker": 5,
            "SSL Blacklist": 2428
        },
        "topMalware": [
            {
                "name": "Vidar",
                "count": 1792,
                "types": [
                    "ssl-cert",
                    "hash",
                    "domain",
                    "url"
                ]
            },
            {
                "name": "Cobalt Strike",
                "count": 1189,
                "types": [
                    "hash",
                    "domain",
                    "ip"
                ]
            },
            {
                "name": "IClickFix",
                "count": 891,
                "types": [
                    "domain",
                    "url"
                ]
            },
            {
                "name": "Mirai",
                "count": 625,
                "types": [
                    "url",
                    "hash",
                    "domain",
                    "ip"
                ]
            },
            {
                "name": "Unknown Loader",
                "count": 516,
                "types": [
                    "hash",
                    "domain",
                    "ip",
                    "url"
                ]
            },
            {
                "name": "PureRAT",
                "count": 439,
                "types": [
                    "ssl-cert",
                    "ip"
                ]
            },
            {
                "name": "AMOS",
                "count": 327,
                "types": [
                    "hash",
                    "domain",
                    "url"
                ]
            },
            {
                "name": "OffLoader",
                "count": 300,
                "types": [
                    "ssl-cert"
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 280,
                "types": [
                    "hash",
                    "ssl-cert",
                    "url",
                    "domain",
                    "ip"
                ]
            },
            {
                "name": "ConnectWise",
                "count": 278,
                "types": [
                    "hash",
                    "ssl-cert"
                ]
            },
            {
                "name": "MacSync",
                "count": 250,
                "types": [
                    "hash",
                    "domain",
                    "url"
                ]
            },
            {
                "name": "AdaptixC2",
                "count": 243,
                "types": [
                    "ssl-cert",
                    "ip"
                ]
            },
            {
                "name": "Remus",
                "count": 211,
                "types": [
                    "ip",
                    "url"
                ]
            },
            {
                "name": "PureLogsStealer",
                "count": 182,
                "types": [
                    "hash",
                    "ssl-cert"
                ]
            },
            {
                "name": "DanaBot",
                "count": 178,
                "types": [
                    "ip"
                ]
            }
        ],
        "recentIOCs": [
            {
                "type": "ip",
                "indicator": "162[.]243[.]103[.]246",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-10-27 10:22 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-10-27 10:22 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-10-27T10:22:07.481166+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "178[.]62[.]3[.]223",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-10-27 10:22 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-10-27 10:22 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-10-27T10:22:07.481166+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "27[.]133[.]154[.]218",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-10-27 10:22 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-10-27 10:22 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-10-27T10:22:07.481166+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "34[.]204[.]119[.]63",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-10-27 10:22 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-10-27 10:22 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-10-27T10:22:07.481166+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "50[.]16[.]16[.]211",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-10-27 10:22 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-10-27 10:22 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-10-27T10:22:07.481166+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "1[.]12[.]55[.]80",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-10-27 10:22 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-10-27 10:22 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-10-27T10:22:03.406758+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]14[.]149[.]30",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-10-27 10:22 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-10-27 10:22 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-10-27T10:22:03.406758+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]14[.]192[.]95",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-10-27 10:22 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-10-27 10:22 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-10-27T10:22:03.406758+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]14[.]240[.]247",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-10-27 10:22 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-10-27 10:22 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-10-27T10:22:03.406758+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]15[.]106[.]134",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-10-27 10:22 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-10-27 10:22 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-10-27T10:22:03.406758+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]162[.]216[.]37",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-10-27 10:22 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-10-27 10:22 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-10-27T10:22:03.406758+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]214[.]214[.]114",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-10-27 10:22 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-10-27 10:22 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-10-27T10:22:03.406758+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]222[.]42[.]237",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-10-27 10:22 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-10-27 10:22 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-10-27T10:22:03.406758+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]234[.]80[.]94",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-10-27 10:22 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-10-27 10:22 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-10-27T10:22:03.406758+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]238[.]106[.]229",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-10-27 10:22 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-10-27 10:22 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-10-27T10:22:03.406758+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]80[.]222[.]153",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-10-27 10:22 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-10-27 10:22 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-10-27T10:22:03.406758+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]94[.]166[.]51",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-10-27 10:22 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-10-27 10:22 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-10-27T10:22:03.406758+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]94[.]205[.]91",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-10-27 10:22 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-10-27 10:22 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-10-27T10:22:03.406758+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]95[.]202[.]100",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-10-27 10:22 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-10-27 10:22 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-10-27T10:22:03.406758+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]95[.]59[.]188",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-10-27 10:22 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-10-27 10:22 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-10-27T10:22:03.406758+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            }
        ],
        "lastUpdated": "2026-10-27T19:51:48.820189+05:30",
        "lastUpdatedFormatted": "Oct 27, 2026 at 07:51 PM IST",
        "lastUpdatedUtc": "2026-10-27 14:21 UTC"
    },
    "vendors": {
        "OpenPhish": {
            "description": "Real-time phishing URL feed updated every 15 minutes. Tracks active phishing sites targeting major brands and financial institutions.",
            "website": "https://openphish.com/",
            "updateFrequency": "Every 15 minutes",
            "iocCount": 3932,
            "iocDataUrl": "https://thehgtech.com/ioc-data/openphish.json",
            "stats": {
                "total": 3932,
                "newInLastHour": 300,
                "lastUpdate": "2026-10-27 14:21 UTC"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://make-troll-318071[.]framer[.]app/",
                "hxxp://avdveulfdasxf[.]square[.]site/",
                "hxxp://himorhis[.]square[.]site/",
                "hxxps://facebookloginuser[.]blogspot[.]com/",
                "hxxps://www[.]facebookloginuser[.]blogspot[.]com/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 872,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 872,
                "newInLastHour": 0,
                "lastUpdate": "2026-10-27 14:21 UTC"
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
            "stats": {
                "total": 1645,
                "newInLastHour": 37,
                "lastUpdate": "2026-10-27 14:21 UTC"
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
            "iocCount": 39583,
            "iocDataUrl": "https://thehgtech.com/ioc-data/cins-army.json",
            "stats": {
                "total": 39583,
                "newInLastHour": 15000,
                "lastUpdate": "2026-10-27 14:21 UTC"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]15[.]14[.]29",
                "1[.]236[.]254[.]202",
                "1[.]24[.]16[.]117",
                "1[.]24[.]16[.]119",
                "1[.]24[.]16[.]135"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 10854,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 10854,
                "newInLastHour": 5566,
                "lastUpdate": "2026-10-27 14:21 UTC"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]12[.]55[.]80",
                "1[.]14[.]149[.]30",
                "1[.]14[.]192[.]95",
                "1[.]14[.]240[.]247",
                "1[.]144[.]106[.]82"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 34822,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 34822,
                "newInLastHour": 0,
                "lastUpdate": "2026-10-27 14:21 UTC"
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
            "iocCount": 7010,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 7010,
                "newInLastHour": 0,
                "lastUpdate": "2026-10-27 14:21 UTC"
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
            "stats": {
                "total": 5,
                "newInLastHour": 5,
                "lastUpdate": "2026-10-27 14:21 UTC"
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
            "iocCount": 10924,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10924,
                "newInLastHour": 8637,
                "lastUpdate": "2026-10-27 14:21 UTC"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "e5eefcb70e310314c73361c957aa2a1f970fbd65",
                "a54ad395d86f7e564d4c23c150ce28359538d64d",
                "9aa781171a4918d3e4069dd810fb846797806db7",
                "ba95841b4146ce72ee532c53be1651bc97d73388",
                "109f3ba748ac0f3a080d01039cfd0de392b83b30"
            ]
        }
    },
    "overview": [
        {
            "type": "ip",
            "indicator": "162[.]243[.]103[.]246",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-27T10:22:07.481166+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "178[.]62[.]3[.]223",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-27T10:22:07.481166+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "27[.]133[.]154[.]218",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-27T10:22:07.481166+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "34[.]204[.]119[.]63",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-27T10:22:07.481166+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "50[.]16[.]16[.]211",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-27T10:22:07.481166+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "1[.]12[.]55[.]80",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]14[.]149[.]30",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]14[.]192[.]95",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]14[.]240[.]247",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]15[.]106[.]134",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]162[.]216[.]37",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]214[.]214[.]114",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]222[.]42[.]237",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]234[.]80[.]94",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]238[.]106[.]229",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]80[.]222[.]153",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]94[.]166[.]51",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]94[.]205[.]91",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]95[.]202[.]100",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]95[.]59[.]188",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "100[.]58[.]116[.]226",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]100[.]194[.]181",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]109[.]253[.]166",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]11[.]137",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]129[.]127",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]141[.]163",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]24[.]71",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]24[.]74",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]26[.]93",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]4[.]215",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]53[.]14",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]64[.]76",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]66[.]30",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]67[.]70",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]69[.]201",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]132[.]85[.]130",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]200[.]243[.]197",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]201[.]234[.]37",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]201[.]55[.]127",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]206[.]210[.]3",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]227[.]203[.]162",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]227[.]236[.]176",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]227[.]42[.]99",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]245[.]96[.]27",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]32[.]240[.]31",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]33[.]208[.]231",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]33[.]220[.]205",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]33[.]78[.]144",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]106[.]186",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]107[.]233",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]107[.]240",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]108[.]160",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]108[.]72",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]109[.]219",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]110[.]144",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]111[.]101",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]111[.]166",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]113[.]149",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]113[.]239",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]113[.]92",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]116[.]216",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]116[.]236",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]117[.]107",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]118[.]102",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]118[.]49",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]119[.]203",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]125[.]170",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]125[.]2",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]125[.]72",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]126[.]239",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]127[.]11",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]127[.]151",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]128[.]39",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]228[.]201",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]37[.]156[.]70",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]43[.]124[.]25",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]43[.]79[.]210",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]46[.]66[.]84",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]134[.]74",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]14[.]46",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]15[.]119",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]15[.]26",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]155[.]9",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]156[.]170",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]156[.]21",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]158[.]56",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]159[.]125",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]159[.]50",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]20[.]56",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]8[.]113",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]8[.]188",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]66[.]165[.]103",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]76[.]244[.]135",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]79[.]165[.]43",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]89[.]141[.]184",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]89[.]76[.]249",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]91[.]114[.]194",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]91[.]126[.]150",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]192[.]45",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]193[.]131",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-27 10:22 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-27 10:22 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-27T10:22:03.406758+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        }
    ],
    "dailySummary": {
        "stats": {
            "totalIndicators": 101018,
            "activeSources": 9,
            "criticalAlerts": 39937,
            "activeCampaigns": 166
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 37237,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4887,
                "trend": "stable",
                "percentage": -4
            },
            {
                "category": "Phishing",
                "count": 3635,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 2700,
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
                "count": 38515,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]192[.]129[.]106",
                    "1[.]193[.]63[.]224",
                    "1[.]215[.]138[.]43"
                ]
            },
            {
                "name": "malware_download",
                "count": 34822,
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
                "count": 10616,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]12[.]55[.]80",
                    "1[.]14[.]149[.]30",
                    "1[.]14[.]192[.]95"
                ]
            },
            {
                "name": "Generic Phishing",
                "count": 3603,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://www[.]roblox[.]com[.]et/users/4243002378/profile",
                    "hxxp://bofa-login[.]vercel[.]app/",
                    "hxxps://chatgpt0005[.]eu[.]org/blog/discord-patch-notes-february-4-2026/"
                ]
            },
            {
                "name": "Vidar",
                "count": 1792,
                "types": [
                    "ssl-cert",
                    "hash",
                    "domain",
                    "url"
                ],
                "sampleIndicators": [
                    "963c8d952db068f9cd6b76e2313e69296ca6124f57755eeaa8c008ee05d349be",
                    "99b335ac5caf5249edc3223b100517d72f4fec0c6012955e3efc8d56c96880ef",
                    "6f38c0aedf5d1163cca3bf5721acb71cb54bf387a69827c8ccdc59064a19d6ed"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1687,
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
                "name": "Cobalt Strike",
                "count": 1189,
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
                "count": 891,
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
                "name": "Unknown malware",
                "count": 690,
                "types": [
                    "hash",
                    "ip",
                    "domain",
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://washinweb[.]com/",
                    "198[.]44[.]46[.]58",
                    "130[.]94[.]3[.]67"
                ]
            },
            {
                "name": "Mirai",
                "count": 625,
                "types": [
                    "url",
                    "hash",
                    "domain",
                    "ip"
                ],
                "sampleIndicators": [
                    "5c9904bb290ca8b4581ca5337feaf8dc0262630e704faee10052b2385c5979fb",
                    "56530393263a80c470417364da8bcabbc8b819172866cb741304266a246fc639",
                    "1fcf6489f59dc37ee33fe8d772b95a8cb55051295b24f237b0aa9ebd05647b51"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "AsyncRAT",
        "totalAttacksThisHour": 29545,
        "lastCalculated": "2026-10-27 19:51 IST"
    }
};
