// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-27T02:29:25.042922+05:30 IST (2026-10-26 20:59 UTC)
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-27T02:29:24.383724+05:30",
    "lastUpdatedFormatted": "Oct 27, 2026 at 02:29 AM IST",
    "lastUpdatedUtc": "2026-10-26 20:59 UTC",
    "comparisonPeriod": "Oct 26 \u2013 Oct 27, 2026",
    "stats": {
        "totalIOCs": 113413,
        "byType": {
            "url": 41131,
            "ip": 53361,
            "hash": 3466,
            "domain": 3063,
            "ssl-cert": 10704,
            "ip-range": 1688
        },
        "byVendor": {
            "OpenPhish": 3866,
            "Malware Bazaar": 2075,
            "Spamhaus DROP": 1688,
            "CINS Army": 39508,
            "Blocklist.de": 10964,
            "URLhaus": 35227,
            "ThreatFox": 9376,
            "Feodo Tracker": 5,
            "SSL Blacklist": 10704
        },
        "topMalware": [
            {
                "name": "Vidar",
                "count": 2209,
                "types": [
                    "domain",
                    "hash",
                    "ssl-cert",
                    "url"
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1641,
                "types": [
                    "hash",
                    "url",
                    "ip",
                    "ssl-cert",
                    "domain"
                ]
            },
            {
                "name": "Cobalt Strike",
                "count": 1203,
                "types": [
                    "domain",
                    "hash",
                    "ip"
                ]
            },
            {
                "name": "IClickFix",
                "count": 1062,
                "types": [
                    "domain",
                    "url"
                ]
            },
            {
                "name": "Mirai",
                "count": 892,
                "types": [
                    "domain",
                    "hash",
                    "url",
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
                "count": 723,
                "types": [
                    "ssl-cert",
                    "hash"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 560,
                "types": [
                    "ssl-cert",
                    "hash"
                ]
            },
            {
                "name": "Unknown Loader",
                "count": 555,
                "types": [
                    "domain",
                    "hash",
                    "url",
                    "ip"
                ]
            },
            {
                "name": "OffLoader",
                "count": 525,
                "types": [
                    "ssl-cert"
                ]
            },
            {
                "name": "ConnectWise",
                "count": 509,
                "types": [
                    "ssl-cert",
                    "hash"
                ]
            },
            {
                "name": "AMOS",
                "count": 466,
                "types": [
                    "domain",
                    "hash",
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
                "name": "Malware",
                "count": 398,
                "types": [
                    "ssl-cert"
                ]
            },
            {
                "name": "DCRat",
                "count": 357,
                "types": [
                    "ssl-cert",
                    "ip"
                ]
            }
        ],
        "recentIOCs": [
            {
                "type": "ip",
                "indicator": "162[.]243[.]103[.]246",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-10-26 20:36 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-10-26 20:36 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-10-26T20:36:40.871456+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "178[.]62[.]3[.]223",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-10-26 20:36 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-10-26 20:36 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-10-26T20:36:40.871456+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "27[.]133[.]154[.]218",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-10-26 20:36 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-10-26 20:36 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-10-26T20:36:40.871456+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "34[.]204[.]119[.]63",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-10-26 20:36 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-10-26 20:36 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-10-26T20:36:40.871456+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "50[.]16[.]16[.]211",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-10-26 20:36 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-10-26 20:36 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-10-26T20:36:40.871456+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "1[.]117[.]73[.]220",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-10-26 20:36 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-10-26 20:36 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-10-26T20:36:36.743500+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]12[.]55[.]80",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-10-26 20:36 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-10-26 20:36 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-10-26T20:36:36.743500+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]14[.]240[.]247",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-10-26 20:36 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-10-26 20:36 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-10-26T20:36:36.743500+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]15[.]106[.]134",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-10-26 20:36 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-10-26 20:36 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-10-26T20:36:36.743500+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]162[.]216[.]37",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-10-26 20:36 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-10-26 20:36 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-10-26T20:36:36.743500+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]203[.]149[.]250",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-10-26 20:36 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-10-26 20:36 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-10-26T20:36:36.743500+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]214[.]214[.]114",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-10-26 20:36 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-10-26 20:36 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-10-26T20:36:36.743500+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]222[.]42[.]237",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-10-26 20:36 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-10-26 20:36 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-10-26T20:36:36.743500+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]234[.]80[.]94",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-10-26 20:36 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-10-26 20:36 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-10-26T20:36:36.743500+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]238[.]106[.]229",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-10-26 20:36 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-10-26 20:36 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-10-26T20:36:36.743500+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]27[.]251[.]252",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-10-26 20:36 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-10-26 20:36 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-10-26T20:36:36.743500+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]94[.]166[.]51",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-10-26 20:36 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-10-26 20:36 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-10-26T20:36:36.743500+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]94[.]205[.]91",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-10-26 20:36 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-10-26 20:36 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-10-26T20:36:36.743500+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "101[.]100[.]194[.]181",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-10-26 20:36 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-10-26 20:36 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-10-26T20:36:36.743500+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "101[.]109[.]253[.]166",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-10-26 20:36 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-10-26 20:36 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-10-26T20:36:36.743500+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            }
        ],
        "lastUpdated": "2026-10-27T02:29:24.383724+05:30",
        "lastUpdatedFormatted": "Oct 27, 2026 at 02:29 AM IST",
        "lastUpdatedUtc": "2026-10-26 20:59 UTC"
    },
    "vendors": {
        "OpenPhish": {
            "description": "Real-time phishing URL feed updated every 15 minutes. Tracks active phishing sites targeting major brands and financial institutions.",
            "website": "https://openphish.com/",
            "updateFrequency": "Every 15 minutes",
            "iocCount": 3866,
            "iocDataUrl": "https://thehgtech.com/ioc-data/openphish.json",
            "stats": {
                "total": 3866,
                "newInLastHour": 300,
                "lastUpdate": "2026-10-26 20:59 UTC"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://mmdancr[.]sbs/",
                "hxxps://www[.]roblox[.]ss/users/884221804/profile",
                "hxxps://s4w[.]in/EExFO",
                "hxxps://kleinanzelgen[.]ge/m-passwort-erneuern[.]html?id=11451103",
                "hxxps://9000-firebase-anf-1781589572311[.]cluster-r7kbxfo3fnev2vskbkhhphetq6[.]cloudworkstations[.]dev/?monospaceUid=378407"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1606,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1606,
                "newInLastHour": 0,
                "lastUpdate": "2026-10-26 20:59 UTC"
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
            "iocCount": 1687,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1687,
                "newInLastHour": 0,
                "lastUpdate": "2026-10-26 20:59 UTC"
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
            "iocCount": 39705,
            "iocDataUrl": "https://thehgtech.com/ioc-data/cins-army.json",
            "stats": {
                "total": 39705,
                "newInLastHour": 15000,
                "lastUpdate": "2026-10-26 20:59 UTC"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]14[.]149[.]30",
                "1[.]145[.]89[.]105",
                "1[.]192[.]129[.]106",
                "1[.]193[.]57[.]144",
                "1[.]193[.]63[.]224"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 10939,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 10939,
                "newInLastHour": 5167,
                "lastUpdate": "2026-10-26 20:59 UTC"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]117[.]73[.]220",
                "1[.]12[.]55[.]80",
                "1[.]14[.]192[.]95",
                "1[.]14[.]240[.]247",
                "1[.]15[.]106[.]134"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 35227,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 35227,
                "newInLastHour": 0,
                "lastUpdate": "2026-10-26 20:59 UTC"
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
            "iocCount": 8868,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 8868,
                "newInLastHour": 0,
                "lastUpdate": "2026-10-26 20:59 UTC"
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
            "stats": {
                "total": 5,
                "newInLastHour": 5,
                "lastUpdate": "2026-10-26 20:59 UTC"
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
            "iocCount": 11056,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 11056,
                "newInLastHour": 352,
                "lastUpdate": "2026-10-26 20:59 UTC"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "b59fc9b78f8adfb12404d606d32f189309dcffdb",
                "92ebef95bba7efc76f713e8b4aa8d40d45478645",
                "72551f187ace5de0909186afdfea0756e9e3cd6d",
                "bd8eb13b5f944ac4c4a03a22d8c1b574bd02ee4f",
                "a41e8528d9b464b9620f4cc5900c444f291366e7"
            ]
        }
    },
    "overview": [
        {
            "type": "ip",
            "indicator": "162[.]243[.]103[.]246",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-26T20:36:40.871456+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "178[.]62[.]3[.]223",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-26T20:36:40.871456+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "27[.]133[.]154[.]218",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-26T20:36:40.871456+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "34[.]204[.]119[.]63",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-26T20:36:40.871456+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "50[.]16[.]16[.]211",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-26T20:36:40.871456+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "1[.]117[.]73[.]220",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]12[.]55[.]80",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]14[.]240[.]247",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]15[.]106[.]134",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]162[.]216[.]37",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]203[.]149[.]250",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]214[.]214[.]114",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]222[.]42[.]237",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]234[.]80[.]94",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]238[.]106[.]229",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]27[.]251[.]252",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]94[.]166[.]51",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]94[.]205[.]91",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]100[.]194[.]181",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]109[.]253[.]166",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]11[.]137",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]129[.]127",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]141[.]163",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]24[.]71",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]24[.]74",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]26[.]93",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]4[.]215",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]4[.]240",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]53[.]14",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]64[.]76",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]66[.]30",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]67[.]70",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]69[.]201",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]70[.]177",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]132[.]85[.]130",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]200[.]243[.]197",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]201[.]234[.]37",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]201[.]55[.]127",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]206[.]210[.]3",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]227[.]203[.]162",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]227[.]236[.]176",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]227[.]42[.]99",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]227[.]49[.]193",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]32[.]240[.]31",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]33[.]208[.]231",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]33[.]220[.]205",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]33[.]78[.]144",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]35[.]102[.]166",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]35[.]114[.]193",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]35[.]227[.]48",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]106[.]186",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]107[.]233",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]107[.]240",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]108[.]133",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]108[.]160",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]108[.]72",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]109[.]219",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]110[.]144",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]111[.]101",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]111[.]166",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]113[.]149",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]113[.]239",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]113[.]92",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]116[.]216",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]116[.]236",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]117[.]107",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]118[.]102",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]118[.]49",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]119[.]203",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]125[.]170",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]125[.]2",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]125[.]72",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]126[.]239",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]127[.]11",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]127[.]151",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]128[.]39",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]228[.]201",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]37[.]156[.]70",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]43[.]124[.]25",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]43[.]79[.]210",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]46[.]66[.]84",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]134[.]74",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]14[.]46",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]15[.]119",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]15[.]26",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]155[.]9",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]156[.]170",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]156[.]21",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]158[.]56",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]159[.]125",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]159[.]50",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]20[.]56",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]8[.]113",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]8[.]188",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]53[.]236[.]155",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]66[.]165[.]103",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]76[.]244[.]135",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]79[.]165[.]43",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]89[.]141[.]184",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]89[.]76[.]249",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-26 20:36 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-26 20:36 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-26T20:36:36.743500+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        }
    ],
    "dailySummary": {
        "stats": {
            "totalIndicators": 113413,
            "activeSources": 9,
            "criticalAlerts": 50026,
            "activeCampaigns": 277
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 39074,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10952,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 5291,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Phishing",
                "count": 3869,
                "trend": "stable",
                "percentage": 6
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
                "count": 39508,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]15[.]14[.]29",
                    "1[.]177[.]162[.]4",
                    "1[.]192[.]129[.]106"
                ]
            },
            {
                "name": "malware_download",
                "count": 35227,
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
                "count": 10964,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]117[.]73[.]220",
                    "1[.]12[.]55[.]80",
                    "1[.]14[.]240[.]247"
                ]
            },
            {
                "name": "Generic Phishing",
                "count": 3838,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://mmdancr[.]sbs/",
                    "hxxps://www[.]roblox[.]ss/users/884221804/profile",
                    "hxxps://s4w[.]in/EExFO"
                ]
            },
            {
                "name": "Vidar",
                "count": 2209,
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
                "count": 1641,
                "types": [
                    "hash",
                    "url",
                    "ip",
                    "ssl-cert",
                    "domain"
                ],
                "sampleIndicators": [
                    "195fec1204186bb02fde9ac09f5a45add84dde09533400a354a2d97fd6b20acd",
                    "5ae300101bef874b2d8e9dc927571074d7cd6c706903f4a23d91bf0c2943e256",
                    "c2b10b8c0d346d3e1201daea39713fbfaeb410e8b7fee94b0546a3fcdc91573f"
                ]
            },
            {
                "name": "Cobalt Strike",
                "count": 1203,
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
                "name": "IClickFix",
                "count": 1062,
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
                "name": "Mirai",
                "count": 892,
                "types": [
                    "domain",
                    "hash",
                    "url",
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
        "fastestRisingThreat": "CINS Threat List",
        "totalAttacksThisHour": 20824,
        "lastCalculated": "2026-10-27 02:29 IST"
    }
};
